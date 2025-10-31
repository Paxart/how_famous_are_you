"use client";

import { useEffect, useRef, useState } from "react";
import { sdk } from "@farcaster/miniapp-sdk";

export default function Page() {
  const [love, setLove] = useState<string>("");
  const [previewUrl, setPreviewUrl] = useState<string>("");
  const fileRef = useRef<HTMLInputElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);

  // Quita splash de Farcaster cuando está lista
  useEffect(() => {
    sdk.actions.ready();
  }, []);

  function draw(img?: HTMLImageElement) {
    const cnv = canvasRef.current!;
    const ctx = cnv.getContext("2d")!;
    const W = 1200, H = 1200; // 1:1
    cnv.width = W; cnv.height = H;

    // Fondo blanco
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, W, H);

    // Imagen de usuario
    const baseImg = img ?? imgRef.current;
    if (baseImg) {
      const scale = Math.max(W / baseImg.width, H / baseImg.height);
      const iw = baseImg.width * scale;
      const ih = baseImg.height * scale;
      const ix = (W - iw) / 2;
      const iy = (H - ih) / 2;
      ctx.drawImage(baseImg, ix, iy, iw, ih);
    }

    // Franja inferior
    ctx.fillStyle = "rgba(0,0,0,0.5)";
    ctx.fillRect(0, H - 240, W, 240);

    // Texto “I ❤️ xxx”
    const line = `I ❤️ ${love || "Farcaster"}`;
    ctx.font = "bold 120px system-ui, -apple-system, Segoe UI, Roboto";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "#ffffff";
    ctx.fillText(line, W / 2, H - 120);

    // Vista previa
    const data = cnv.toDataURL("image/png");
    setPreviewUrl(data);
  }

  function onFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    const img = new Image();
    img.onload = () => {
      imgRef.current = img;
      draw(img);
    };
    img.src = URL.createObjectURL(file);
  }

  function onLoveChange(v: string) {
    setLove(v);
    // Si ya hay imagen, redibujar
    if (imgRef.current) draw();
  }

  async function share() {
    // Asegura tener previsualización
    if (!previewUrl && imgRef.current) draw();

    if (!previewUrl) {
      alert("Sube una imagen y pulsa Generar primero.");
      return;
    }

    // Sube a Blob para obtener URL pública
    const res = await fetch("/api/upload", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ dataUrl: previewUrl }),
    });

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      alert("Fallo subiendo la imagen: " + (err?.error || res.statusText));
      return;
    }

    const { publicUrl } = await res.json();

    // Abre el composer con la imagen y texto
    await sdk.actions.openCastComposer({
      text: `I ❤️ ${love || "Farcaster"} — hecho con How Famous Are You`,
      attachments: [{ url: publicUrl }],
    });
  }

  return (
    <main className="min-h-screen flex flex-col items-center gap-4 p-6">
      <h1 className="text-3xl font-bold">How Famous Are You</h1>

      <input
        ref={fileRef}
        type="file"
        accept="image/*"
        onChange={onFileChange}
        className="border p-3 rounded w-full max-w-md"
      />

      <input
        type="text"
        placeholder="¿A quién amas? (p.ej., SUI)"
        value={love}
        onChange={(e) => onLoveChange(e.target.value)}
        className="border p-3 rounded w-full max-w-md"
      />

      <div className="flex gap-3">
        <button
          onClick={() => draw()}
          className="px-4 py-2 rounded bg-black text-white"
        >
          Generar
        </button>

        <button
          onClick={share}
          className="px-4 py-2 rounded bg-purple-600 text-white"
        >
          Compartir en Farcaster
        </button>
      </div>

      {previewUrl ? (
        <img
          src={previewUrl}
          alt="preview"
          className="w-full max-w-md rounded shadow"
        />
      ) : (
        <canvas ref={canvasRef} className="hidden" />
      )}
    </main>
  );
}
