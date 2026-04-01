"use client";

import React, { useEffect, useMemo, useState } from "react";
import { sdk } from "@farcaster/miniapp-sdk";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { trivias } from "./data";
import type { TriviaDefinition, SupportedLanguage } from "./data/types";

type Phase = "library" | "language" | "playing" | "finished" | "ranking";

type MiniAppUser = {
  fid?: number;
  address?: string;
  username?: string;
  displayName?: string;
  pfpUrl?: string;
};

type RankingEntry = {
  id: number;
  triviaId: string;
  score: number;
  fid?: number;
  address?: string;
  username?: string | null;
  displayName?: string | null;
  pfpUrl?: string | null;
  createdAt?: string;
};

const DEFAULT_LANGUAGE: SupportedLanguage = "es";
const HOME_URL = "https://how-famous-are-you.vercel.app/cinetrivia";

export default function MiniAppClient() {
  const [isReady, setIsReady] = useState(false);
  const [isFarcasterEnv, setIsFarcasterEnv] = useState(false);
  const [user, setUser] = useState<MiniAppUser | null>(null);

  const [phase, setPhase] = useState<Phase>("library");
  const [selectedTrivia, setSelectedTrivia] = useState<TriviaDefinition | null>(null);
  const [language, setLanguage] = useState<SupportedLanguage>(DEFAULT_LANGUAGE);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState<number | null>(null);
  const [hasSentScore, setHasSentScore] = useState(false);

  const [ranking, setRanking] = useState<RankingEntry[] | null>(null);
  const [rankingLoading, setRankingLoading] = useState(false);
  const [rankingError, setRankingError] = useState<string | null>(null);

  const { address, isConnected } = useAccount();
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();

  // ---------------------------------------------------------------------------
  // Inicialización segura: NO bloquea fuera de Farcaster
  // ---------------------------------------------------------------------------
  useEffect(() => {
    let cancelled = false;

    const init = async () => {
      try {
        try {
          const ctx: any = await sdk?.context;
          if (!cancelled && ctx?.user) {
            setIsFarcasterEnv(true);
            setUser((prev) => ({
              ...prev,
              fid: ctx.user.fid,
              username: ctx.user.username,
              displayName: ctx.user.displayName,
              pfpUrl: ctx.user.pfpUrl,
            }));
          }
        } catch {
          // Fuera de Farcaster/Base miniapp context: seguimos normal
          setIsFarcasterEnv(false);
        }

        try {
          await sdk?.actions?.ready?.();
        } catch {
          // No pasa nada si no existe ready()
        }
      } catch (err) {
        console.error("Error inicializando la app:", err);
      } finally {
        if (!cancelled) {
          setIsReady(true);
        }
      }
    };

    init();

    return () => {
      cancelled = true;
    };
  }, []);

  // ---------------------------------------------------------------------------
  // Sincronizar wallet con user
  // ---------------------------------------------------------------------------
  useEffect(() => {
    if (!isConnected || !address) return;

    setUser((prev) => ({
      ...prev,
      address,
      displayName:
        prev?.displayName || `${address.slice(0, 6)}...${address.slice(-4)}`,
    }));
  }, [isConnected, address]);

  // ---------------------------------------------------------------------------
  // Timer
  // ---------------------------------------------------------------------------
  useEffect(() => {
    if (phase !== "playing" || timeLeft === null) return;
    if (timeLeft <= 0) {
      setPhase("finished");
      return;
    }

    const id = window.setInterval(() => {
      setTimeLeft((prev) => {
        if (prev === null || prev <= 0) return prev;
        return prev - 1;
      });
    }, 1000);

    return () => window.clearInterval(id);
  }, [phase, timeLeft]);

  const formatTime = (seconds: number) => {
    const s = Math.max(0, seconds);
    const m = Math.floor(s / 60);
    const rest = s % 60;
    return `${m}:${rest.toString().padStart(2, "0")}`;
  };

  // ---------------------------------------------------------------------------
  // Cargar ranking
  // ---------------------------------------------------------------------------
  useEffect(() => {
    const loadRanking = async () => {
      if (phase !== "ranking" || !selectedTrivia) return;

      try {
        setRankingLoading(true);
        setRankingError(null);
        setRanking(null);

        const res = await fetch(
          `/api/cinetrivia/score?triviaId=${encodeURIComponent(selectedTrivia.id)}`
        );

        if (!res.ok) throw new Error("Respuesta no OK del servidor");

        const data = await res.json();
        const scores: RankingEntry[] = data.scores ?? data ?? [];
        setRanking(scores);
      } catch (err) {
        console.error("Error cargando ranking:", err);
        setRankingError(
          language === "es"
            ? "No se pudo cargar el ranking."
            : "Could not load leaderboard."
        );
      } finally {
        setRankingLoading(false);
      }
    };

    loadRanking();
  }, [phase, selectedTrivia, language]);

  // ---------------------------------------------------------------------------
  // Helpers
  // ---------------------------------------------------------------------------
  const currentQuestion = selectedTrivia?.questions[currentIndex] ?? null;

  const currentWarning = useMemo(() => {
    if (isFarcasterEnv) return null;
    return language === "es"
      ? "Estás jugando fuera de Farcaster. La app sigue funcionando normalmente."
      : "You're playing outside Farcaster. The app still works normally.";
  }, [isFarcasterEnv, language]);

  const resetStateForTrivia = (trivia: TriviaDefinition | null) => {
    setSelectedTrivia(trivia);
    setCurrentIndex(0);
    setSelectedIndex(null);
    setScore(0);
    setHasSentScore(false);
    setTimeLeft(null);
    setPhase(trivia ? "language" : "library");
  };

  const handleSelectTrivia = (trivia: TriviaDefinition) => {
    resetStateForTrivia(trivia);
  };

  const handleSelectLanguage = (lang: SupportedLanguage) => {
    if (!selectedTrivia) return;

    setLanguage(lang);
    setCurrentIndex(0);
    setSelectedIndex(null);
    setScore(0);
    setHasSentScore(false);

    const total = selectedTrivia.questions.length;
    const initialSeconds = total > 10 ? 120 : 60;

    setTimeLeft(initialSeconds);
    setPhase("playing");
  };

  const handlePickOption = (idx: number) => {
    if (!currentQuestion) return;
    if (selectedIndex !== null || phase !== "playing") return;
    if (timeLeft !== null && timeLeft <= 0) return;

    setSelectedIndex(idx);

    const isCorrect = idx === currentQuestion.correctIndex;
    if (isCorrect) setScore((s) => s + 1);
  };

  const handleNextQuestion = () => {
    if (!selectedTrivia) return;

    const total = selectedTrivia.questions.length;
    if (currentIndex + 1 >= total) {
      setPhase("finished");
    } else {
      setCurrentIndex((i) => i + 1);
      setSelectedIndex(null);
    }
  };

  const getRankForScore = () => {
    if (!selectedTrivia) return null;
    const ranksSorted = [...selectedTrivia.ranks].sort(
      (a, b) => b.minScore - a.minScore
    );
    return ranksSorted.find((r) => score >= r.minScore) ?? null;
  };

  const connectWallet = async () => {
    try {
      if (!connectors || connectors.length === 0) {
        alert(
          language === "es"
            ? "No se encontró ningún conector de wallet."
            : "No wallet connector was found."
        );
        return;
      }

      await connect({ connector: connectors[0] });
    } catch (err) {
      console.error("Error conectando wallet:", err);
    }
  };

  // ---------------------------------------------------------------------------
  // Guardar puntuación
  // ---------------------------------------------------------------------------
  const saveScoreToServer = async () => {
    if (!selectedTrivia || hasSentScore) return;
    if (!user?.address && !user?.fid) return;

    try {
      await fetch("/api/cinetrivia/score", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          address: user?.address,
          fid: user?.fid,
          username: user?.username,
          displayName: user?.displayName,
          pfpUrl: user?.pfpUrl,
          triviaId: selectedTrivia.id,
          score,
        }),
      });

      setHasSentScore(true);
    } catch (err) {
      console.error("Error guardando puntuación:", err);
    }
  };

  const handleShareScore = async () => {
    if (!selectedTrivia) return;

    const total = selectedTrivia.questions.length;
    const rank = getRankForScore();
    const name =
      user?.displayName ||
      user?.username ||
      (language === "es" ? "un cinéfilo" : "a movie fan");

    const triviaTitle = selectedTrivia.title[language] ?? "Farlander Trivia";
    const rankTitle =
      rank?.title[language] ??
      (language === "es" ? "Aspirante" : "Contender");

    const text =
      language === "es"
        ? `${name} ha conseguido el rango "${rankTitle}" en ${triviaTitle} con ${score}/${total} 🎬✨\n\n¿Te atreves a mejorar esa puntuación?\n${HOME_URL}`
        : `${name} has reached the "${rankTitle}" rank in ${triviaTitle} with ${score}/${total} 🎬✨\n\nCan you beat that score?\n${HOME_URL}`;

    try {
      await saveScoreToServer();

      if (navigator.share) {
        await navigator.share({
          title: "Farlander CineTrivia",
          text,
          url: HOME_URL,
        });
        return;
      }

      await navigator.clipboard.writeText(text);
      alert(
        language === "es"
          ? "Texto copiado para compartir."
          : "Copied to clipboard."
      );
    } catch (err) {
      console.error("Error compartiendo puntuación:", err);
    }
  };

  const handlePlayAgain = () => {
    if (!selectedTrivia) return;

    setCurrentIndex(0);
    setSelectedIndex(null);
    setScore(0);
    setHasSentScore(false);

    const total = selectedTrivia.questions.length;
    const initialSeconds = total > 10 ? 120 : 60;
    setTimeLeft(initialSeconds);
    setPhase("playing");
  };

  const handleBackToLibrary = () => {
    setSelectedTrivia(null);
    setCurrentIndex(0);
    setSelectedIndex(null);
    setScore(0);
    setTimeLeft(null);
    setHasSentScore(false);
    setPhase("library");
  };

  const handleBaseDevInfo = () => {
    alert(
      language === "es"
        ? "La app ya está registrada en Base.dev."
        : "The app is already registered on Base.dev."
    );
  };

  const handleOpenRanking = async () => {
    if (!selectedTrivia) return;

    try {
      await saveScoreToServer();
    } catch (err) {
      console.error("Error guardando puntuación antes de abrir ranking:", err);
    }

    setPhase("ranking");
  };

  const handleOpenRankingFromLibrary = (trivia: TriviaDefinition) => {
    setSelectedTrivia(trivia);
    setCurrentIndex(0);
    setSelectedIndex(null);
    setScore(0);
    setHasSentScore(false);
    setTimeLeft(null);
    setPhase("ranking");
  };

  // ---------------------------------------------------------------------------
  // Estilos
  // ---------------------------------------------------------------------------
  const wrapper: React.CSSProperties = {
    width: "100%",
    minHeight: "100vh",
    background:
      selectedTrivia?.background ||
      "radial-gradient(circle at top, #1b0b07 0%, #09010a 45%, #000000 100%)",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: "16px 8px",
    boxSizing: "border-box",
    color: "#ffffff",
    fontFamily:
      'system-ui, -apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
  };

  const column: React.CSSProperties = {
    width: "100%",
    maxWidth: 380,
    margin: "0 auto",
  };

  const card: React.CSSProperties = {
    width: "100%",
    backgroundColor: "rgba(10,16,30,0.96)",
    borderRadius: 24,
    padding: 18,
    boxShadow: "0 18px 45px rgba(0,0,0,0.8)",
    border: "1px solid rgba(148,163,184,0.3)",
    backdropFilter: "blur(14px)",
    boxSizing: "border-box",
  };

  const mainButtonBase: React.CSSProperties = {
    width: "100%",
    marginTop: 10,
    padding: "11px 14px",
    borderRadius: 999,
    border: "none",
    fontSize: 15,
    fontWeight: 600,
    cursor: "pointer",
    textAlign: "center",
  };

  const warningBox: React.CSSProperties = {
    width: "100%",
    marginBottom: 12,
    borderRadius: 16,
    padding: "10px 12px",
    boxSizing: "border-box",
    background: "rgba(245, 158, 11, 0.14)",
    border: "1px solid rgba(245, 158, 11, 0.5)",
    color: "#fde68a",
    fontSize: 12,
    lineHeight: 1.4,
  };

  // ---------------------------------------------------------------------------
  // Loading
  // ---------------------------------------------------------------------------
  if (!isReady) {
    return (
      <div style={wrapper}>
        <div style={column}>
          <div style={card}>
            <p style={{ textAlign: "center" }}>Loading Farlander CineTrivia… 🎬</p>
          </div>
        </div>
      </div>
    );
  }

  // ---------------------------------------------------------------------------
  // Biblioteca
  // ---------------------------------------------------------------------------
  if (phase === "library") {
    const isSpanish = language === "es";

    return (
      <div style={wrapper}>
        <div style={column}>
          {currentWarning && <div style={warningBox}>⚠️ {currentWarning}</div>}

          <div
            style={{
              width: "100%",
              marginBottom: 14,
              borderRadius: 24,
              padding: 14,
              boxSizing: "border-box",
              background:
                "linear-gradient(135deg, #1f1024 0%, #a8324a 40%, #f39c3d 100%)",
              display: "flex",
              alignItems: "center",
              gap: 10,
              boxShadow: "0 16px 40px rgba(0,0,0,0.8)",
            }}
          >
            <div
              style={{
                width: 70,
                height: 70,
                borderRadius: 20,
                overflow: "hidden",
                flexShrink: 0,
                border: "2px solid rgba(0,0,0,0.6)",
                backgroundColor: "#020617",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src="/cinetrivia/farlander_token.png"
                alt="Farlander"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>

            <div style={{ flex: 1 }}>
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  marginBottom: 6,
                }}
              >
                {isSpanish
                  ? "El token para los amantes del cine."
                  : "The token for true cinema lovers."}
              </div>

              <button
                onClick={() =>
                  window.open("https://zora.co/@suilander", "_blank")
                }
                style={{
                  padding: "8px 14px",
                  borderRadius: 999,
                  border: "none",
                  fontSize: 13,
                  fontWeight: 700,
                  cursor: "pointer",
                  background:
                    "linear-gradient(135deg, #f97316 0%, #ec4899 50%, #a855f7 100%)",
                  color: "#111827",
                  whiteSpace: "nowrap",
                }}
              >
                {isSpanish
                  ? "Comprar $CRIPTOSLIVE en Zora"
                  : "Buy $CRIPTOSLIVE on Zora"}
              </button>
            </div>
          </div>

          <div style={card}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 6,
              }}
            >
              <h2 style={{ fontSize: 20, fontWeight: 700 }}>
                {isSpanish ? "Biblioteca de trivias" : "Trivia Library"}
              </h2>

              <div style={{ display: "flex", gap: 6 }}>
                <button
                  onClick={() => setLanguage("en")}
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: "999px",
                    border:
                      language === "en"
                        ? "2px solid #facc15"
                        : "1px solid rgba(148,163,184,0.4)",
                    backgroundColor:
                      language === "en" ? "#0f172a" : "transparent",
                    color: "#ffffff",
                    fontSize: 11,
                    fontWeight: 700,
                    cursor: "pointer",
                  }}
                >
                  GB
                </button>

                <button
                  onClick={() => setLanguage("es")}
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: "999px",
                    border:
                      language === "es"
                        ? "2px solid #f97316"
                        : "1px solid rgba(148,163,184,0.4)",
                    backgroundColor:
                      language === "es" ? "#0f172a" : "transparent",
                    color: "#ffffff",
                    fontSize: 11,
                    fontWeight: 700,
                    cursor: "pointer",
                  }}
                >
                  ES
                </button>
              </div>
            </div>

            <p
              style={{
                fontSize: 13,
                opacity: 0.85,
                marginBottom: 14,
              }}
            >
              {isSpanish
                ? "Elige un trivial para empezar a jugar."
                : "Choose a trivia to start playing."}
            </p>

            <div style={{ marginBottom: 10 }}>
              {isConnected && address ? (
                <div
                  style={{
                    padding: "10px 12px",
                    borderRadius: 14,
                    background: "rgba(15,23,42,0.8)",
                    border: "1px solid rgba(148,163,184,0.4)",
                    fontSize: 13,
                  }}
                >
                  Wallet: {address.slice(0, 6)}...{address.slice(-4)}
                  <button
                    onClick={() => disconnect()}
                    style={{
                      marginLeft: 10,
                      padding: "6px 10px",
                      borderRadius: 999,
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    {isSpanish ? "Desconectar" : "Disconnect"}
                  </button>
                </div>
              ) : (
                <button
                  onClick={connectWallet}
                  style={{
                    ...mainButtonBase,
                    marginTop: 0,
                    background:
                      "linear-gradient(135deg, #0052ff 0%, #38bdf8 100%)",
                    color: "#fff",
                  }}
                >
                  {isSpanish ? "Conectar wallet" : "Connect wallet"}
                </button>
              )}
            </