import { NextResponse } from "next/server";

export async function GET() {
  const present =
    typeof process.env.OPENAI_API_KEY === "string" &&
    process.env.OPENAI_API_KEY.startsWith("sk-");

  return NextResponse.json({
    ok: true,
    openaiKeyPresent: present,
  });
}
