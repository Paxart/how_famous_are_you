"use client";

import { useEffect, useState } from "react";
import { sdk } from "@farcaster/miniapp-sdk";

type Question = {
  question: string;
  options: string[];
  correctIndex: number;
};

const APP_IMAGE =
  "https://criptomonedas.live/wp-content/uploads/2025/11/cinetrivia.png";

const QUESTIONS: Question[] = [
  {
    question: "¿Cuál de estas pelis tiene la mayor recaudación mundial?",
    options: ["Avatar (2009)", "Titanic", "Avengers: Endgame", "Star Wars: TFA"],
    correctIndex: 2,
  },
  {
    question: "¿Cómo se llama el hotel de 'El resplandor'?",
    options: ["Overlook Hotel", "Bates Motel", "The Majestic", "Continental"],
    correctIndex: 0,
  },
  {
    question: "¿Quién dirige 'Jurassic Park'?",
    options: ["James Cameron", "Ridley Scott", "Steven Spielberg", "Sam Raimi"],
    correctIndex: 2,
  },
  {
    question: "¿En qué ciudad transcurre gran parte de 'Blade Runner'?",
    options: ["Neo Tokyo", "Los Ángeles", "Nueva York", "Londres"],
    correctIndex: 1,
  },
  {
    question: "¿Qué actor interpreta a Neo en 'The Matrix'?",
    options: ["Keanu Reeves", "Brad Pitt", "Tom Cruise", "Johnny Depp"],
    correctIndex: 0,
  },
  {
    question: "¿Cómo se llama el anillo de poder en 'El Señor de los Anillos'?",
    options: ["El Anillo Único", "Anillo Rojo", "Anillo del Alba", "Anillo de Sauron"],
    correctIndex: 0,
  },
  {
    question: "¿Quién es el padre de Luke Skywalker?",
    options: ["Obi-Wan Kenobi", "Mace Windu", "Darth Vader", "Yoda"],
    correctIndex: 2,
  },
  {
    question: "¿Qué película NO es de Pixar?",
    options: ["Toy Story", "Inside Out", "Shrek", "Ratatouille"],
    correctIndex: 2,
  },
  {
    question: "¿En qué año se estrenó 'Back to the Future'?",
    options: ["1985", "1990", "1979", "1989"],
    correctIndex: 0,
  },
  {
    question: "¿Qué objeto usa Indiana Jones en casi todas sus pelis?",
    options: ["Katana", "Látigo", "Arco", "Hacha"],
    correctIndex: 1,
  },
];

type MiniAppUser = {
  fid: number;
  username?: string;
  displayName?: string;
  pfpUrl?: string;
};

export default function FarlanderCineTriviaApp() {
  const [isReady, setIsReady] = useState(false);
  const [isInMiniApp, setIsInMiniApp] = useState(false);
  const [user, setUser] = useState<MiniAppUser | null>(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    const init = async () => {
      try {
        const mini = await sdk.isInMiniApp();
        setIsInMiniApp(mini);

        if (mini) {
          const context = await sdk.context;
          if (context?.user) {
            setUser(context.user as MiniAppUser);
          }
        }

        await sdk.actions.ready();
        setIsReady(true);
      } catch (error) {
        console.error("Error inicializando Mini App:", error);
      }
    };

    init();
  }, []);

  const handleAnswer = (optionIndex: number) => {
    if (selectedIndex !== null || finished) return;

    setSelectedIndex(optionIndex);

    const question = QUESTIONS[currentIndex];
    const isCorrect = optionIndex === question.correctIndex;

    if (isCorrect) {
      setScore((prev) => prev + 1);
    }

    // Pasar a la siguiente pregunta después de una pequeña pausa
    setTimeout(() => {
      const nextIndex = currentIndex + 1;
      if (nextIndex < QUESTIONS.length) {
        setCurrentIndex(nextIndex);
        setSelectedIndex(null);
      } else {
        setFinished(true);
      }
    }, 700);
  };

  const handleShare = async () => {
    const total = QUESTIONS.length;
    const name = user?.displayName || user?.username || "un cinéfilo";
    const text = `${name} ha superado la primera prueba de Farlander CineTrivia con ${score}/${total} 🎬🍿\n\n¿Te atreves a jugar?`;

    try {
      await sdk.actions.composeCast({
        text,
        embeds: ["https://how-famous-are-you.vercel.app/cinetrivia"],
      });
    } catch (error) {
      console.error("Error al abrir el composer de Farcaster:", error);
    }
  };

  // Estilos rápidos inline para no depender de Tailwind
  const wrapperStyle: React.CSSProperties = {
    minHeight: "100vh",
    margin: 0,
    padding: "16px",
    backgroundColor: "#0b0502",
    color: "#f6d9a0",
    fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const cardStyle: React.CSSProperties = {
    width: "100%",
    maxWidth: 420,
    background: "#24120a",
    borderRadius: 24,
    padding: "20px 18px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.7)",
    border: "1px solid #3b2616",
  };

  const buttonBase: React.CSSProperties = {
    width: "100%",
    padding: "10px 12px",
    borderRadius: 999,
    border: "none",
    marginTop: 10,
    fontSize: 14,
    fontWeight: 600,
    cursor: "pointer",
    textAlign: "left",
  };

  if (!isReady) {
    return (
      <div style={wrapperStyle}>
        <div style={cardStyle}>
          <p style={{ textAlign: "center" }}>Cargando Farlander CineTrivia… 🎬</p>
        </div>
      </div>
    );
  }

  if (!isInMiniApp) {
    return (
      <div style={wrapperStyle}>
        <div style={cardStyle}>
          <p style={{ textAlign: "center", marginBottom: 8 }}>
            Abre esta página desde Farcaster para jugar a Farlander CineTrivia.
          </p>
          <p style={{ textAlign: "center", fontSize: 12, opacity: 0.8 }}>
            Mini App URL: how-famous-are-you.vercel.app
          </p>
        </div>
      </div>
    );
  }

  // 🟣 Pantalla final de resultados
  if (finished) {
    const total = QUESTIONS.length;
    const name = user?.displayName || user?.username || "Cinéfilo misterioso";

    return (
      <div style={wrapperStyle}>
        <div style={cardStyle}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 16,
            }}
          >
            {user?.pfpUrl && (
              <img
                src={user.pfpUrl}
                alt={name}
                width={52}
                height={52}
                style={{
                  borderRadius: "50%",
                  border: "2px solid #f6d9a0",
                  objectFit: "cover",
                }}
              />
            )}
            <div>
              <div
                style={{
                  fontSize: 13,
                  textTransform: "uppercase",
                  opacity: 0.8,
                }}
              >
                Primera prueba superada
              </div>
              <div style={{ fontSize: 18, fontWeight: 700 }}>{name}</div>
            </div>
            <img
              src={APP_IMAGE}
              alt="Farlander CineTrivia"
              width={40}
              height={40}
              style={{
                marginLeft: "auto",
                borderRadius: 8,
                border: "1px solid #f6d9a0",
                objectFit: "cover",
              }}
            />
          </div>

          <div
            style={{
              background: "#3b2616",
              borderRadius: 18,
              padding: "12px 14px",
              marginBottom: 16,
            }}
          >
            <div style={{ fontSize: 14, marginBottom: 4 }}>
              Has completado el reto de Farlander CineTrivia.
            </div>
            <div style={{ fontSize: 26, fontWeight: 800 }}>
              {score}/{total}{" "}
              <span style={{ fontSize: 16, fontWeight: 500 }}>aciertos</span>
            </div>
          </div>

          <button
            onClick={handleShare}
            style={{
              ...buttonBase,
              background:
                "linear-gradient(90deg, #9b5cff 0%, #ff4fd8 50%, #ffc857 100%)",
              textAlign: "center",
              color: "#1a0b09",
            }}
          >
            📤 Compartir mi puntuación en Farcaster
          </button>

          <button
            onClick={() => {
              setCurrentIndex(0);
              setScore(0);
              setSelectedIndex(null);
              setFinished(false);
            }}
            style={{
              ...buttonBase,
              background: "transparent",
              border: "1px solid #f6d9a0",
              color: "#f6d9a0",
              textAlign: "center",
            }}
          >
            🔁 Volver a jugar
          </button>
        </div>
      </div>
    );
  }

  // 🟡 Pantalla de preguntas
  const question = QUESTIONS[currentIndex];

  return (
    <div style={wrapperStyle}>
      <div style={cardStyle}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: 14,
            gap: 10,
          }}
        >
          <img
            src={APP_IMAGE}
            alt="Farlander CineTrivia"
            width={48}
            height={48}
            style={{ borderRadius: 12, border: "1px solid #f6d9a0" }}
          />
          <div>
            <div
              style={{
                fontSize: 12,
                textTransform: "uppercase",
                letterSpacing: 1,
                opacity: 0.8,
              }}
            >
              Farlander CineTrivia
            </div>
            <div style={{ fontSize: 13, opacity: 0.8 }}>
              Pregunta {currentIndex + 1} de {QUESTIONS.length}
            </div>
          </div>
        </div>

        <div style={{ marginBottom: 14 }}>
          <div style={{ fontSize: 16, fontWeight: 700, lineHeight: 1.3 }}>
            {question.question}
          </div>
        </div>

        {question.options.map((option, idx) => {
          const isSelected = selectedIndex === idx;
          const isCorrect = idx === question.correctIndex;

          let bg = "#3b2616";
          let color = "#f6d9a0";
          if (selectedIndex !== null) {
            if (isCorrect) {
              bg = "#35c46b";
              color = "#041007";
            } else if (isSelected && !isCorrect) {
              bg = "#ff4c4c";
              color = "#2c0505";
            }
          } else if (isSelected) {
            bg = "#6b3bff";
          }

          return (
            <button
              key={idx}
              onClick={() => handleAnswer(idx)}
              style={{
                ...buttonBase,
                background: bg,
                color,
              }}
            >
              {option}
            </button>
          );
        })}

        <div
          style={{
            marginTop: 14,
            fontSize: 12,
            opacity: 0.75,
            textAlign: "center",
          }}
        >
          Aciertos: {score} · Farlander te está vigilando… 👀
        </div>
      </div>
    </div>
  );
}
