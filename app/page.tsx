"use client";

import { useEffect, useRef, useState } from "react";
import { sdk } from "@farcaster/miniapp-sdk";

type Option = { value: string; label: string };
const ACTORS: Option[] = [
  { value: "scarlett johansson", label: "Scarlett Johansson" },
  { value: "brad pitt", label: "Brad Pitt" },
  { value: "keanu reeves", label: "Keanu Reeves" },
  { value: "zendaya", label: "Zendaya" },
  { value: "tom cruise", label: "Tom Cruise" },
  { value: "margot robbie", label: "Margot Robbie" },
];

const MOVIES: Option[] = [
  { value: "barbie (2023)", label: "Barbie (2023)" },
  { value: "mission impossible", label: "Mission: Impossible" },
  { value: "john wick", label: "John Wick" },
  { value: "la la land", label: "La La Land" },
  { value: "lost in translation", label: "Lost in Translation" },
  { value: "fight club", label: "Fight Club" },
  { value: "dune", label: "Dune" },
  { value: "top gun", label: "Top Gun" },
];

export default function Page() {
  const [actor, setActor] = useState<string>(ACTORS[0].value);
  const [movie, setMovie] = useState<string>(MOVIES[0].value);
  const [love, setLove] = useState<string>("Farcaster");
  const [previewUrl, setPreviewUrl] = useState<string>("");
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    sdk.actions.ready(); // quita el splash de Farcaster
  }, []);

  function draw(baseImg: HTMLImageElement) {
    const cnv = canvasRef.current!;
    const ctx = cnv.getContext("2d")!;
    const W = 1200, H = 1200; // 1:1
    cnv.width = W; cnv.height = H;

    // fondo blanco
    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 0, W, H);

    // imagen generada (caricatura)
    const scale = Math.max(W / baseImg.width, H / baseImg.height);
    const iw = baseImg.width * scale;
    const ih = baseImg.height * scale;
    const ix = (W - iw) / 2;
    const iy = (H - ih) / 2;
    ctx.drawImage(baseImg, ix, iy, iw, ih);

    // franja inferior
    ctx.fillStyle = "rgba(0,0,0,0.5)";
    ctx.fillRect(0, H - 220, W, 220);

    // texto “I ❤️ …”
    ctx.font = "bold 110px system-ui, -apple-system, Segoe UI, Roboto";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "#fff";
    ctx.fillText(`I ❤️ ${love || "Farcaster"}`, W / 2, H - 110);

    setPreviewUrl(cnv.toDataURL("image/png"));
  }

  async function generate() {
    // llama al backend para que cree la caricatura del actor en estilo de la peli
    const res = await fetch("/api/caricature", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        actor,
        movie,
        // estilos que puedes tunear: "comic cel-shading", "acuarela", etc.
        styleHint: "bright cartoon caricature, poster-like composition",
      }),
    });
    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      alert("No se pudo generar la caricatura: " + (err?.error || res.statusText));
      return;
    }
    const { caricatureUrl } = await res.json();

    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => draw(img);
    img.src = caricatureUrl;
  }

  async function share() {
    if (!previewUrl) {
      alert("Genera primero la imagen 😅");
      return;
    }
    // sube a Blob para tener URL pública
    const upload = await fetch("/api/upload", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ dataUrl: previewUrl }),
    });
    if (!upload.ok) {
      const err = await upload.json().catch(() => ({}));
      alert("Fallo subiendo imagen: " + (err?.error || upload.statusText));
      return;
    }
    const { publicUrl } = await upload.json();

    await sdk.actions.openCastComposer({
      text: `Caricatura de ${actor} inspirada en "${movie}" — hecho con How Famous Are You`,
      attachments: [{ url: publicUrl }],
    });
  }

  return (
    <main className="min-h-screen flex flex-col items-center gap-4 p-6">
      <h1 className="text-3xl font-bold">How Famous Are You</h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-3xl">
        <select
          value={actor}
          onChange={(e) => setActor(e.target.value)}
          className="border p-3 rounded"
        >
          {ACTORS.map(a => <option key={a.value} value={a.value}>{a.label}</option>)}
        </select>

        <select
          value={movie}
          onChange={(e) => setMovie(e.target.value)}
          className="border p-3 rounded"
        >
          {MOVIES.map(m => <option key={m.value} value={m.value}>{m.label}</option>)}
        </select>

        <input
          value={love}
          onChange={(e) => setLove(e.target.value)}
          placeholder="¿A quién
