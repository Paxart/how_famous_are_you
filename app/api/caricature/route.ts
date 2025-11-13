import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(req: NextRequest) {
  try {
    const { actor, movie, styleHint } = await req.json();

    if (!actor || !movie) {
      return NextResponse.json({ error: "actor y movie son obligatorios" }, { status: 400 });
    }

    // Prompt: caricatura del actor con guiños a la película SIN usar marcas registradas exactas.
    // Evitamos copiar pósters 1:1; pedimos una "vibra" o estética inspirada para ir seguros.
    const prompt = `
Caricature portrait of ${actor} in a vibrant, fun cartoon style.
Composition inspired by the cinematic vibe of "${movie}" (colors, mood, wardrobe hints),
but do not recreate or trace any copyrighted poster or logo.
Clean background, bold outlines, expressive face, engaging lighting.
${styleHint ? "Extra style: " + styleHint : ""}
`;

    const out = await openai.images.generate({
      model: "gpt-image-1",
      prompt,
      size: "1024x1024",
    });

    const url = out.data?.[0]?.url;
    if (!url) throw new Error("No se recibió URL de imagen");

    return NextResponse.json({ caricatureUrl: url });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || "caricature failed" }, { status: 500 });
  }
}
