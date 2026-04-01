// app/api/frames/cinetrivia/route.ts
import { NextResponse } from "next/server";
import { getQuestionForToday } from "./questions";

const FRAME_IMAGE =
  "https://criptomonedas.live/wp-content/uploads/2025/11/cinetrivia.png";

export async function GET() {
  return POST();
}

export async function POST() {
  const q = getQuestionForToday();

  return NextResponse.json({
    version: "vNext",
    image: FRAME_IMAGE,
    post_url:
      "https://how-famous-are-you.vercel.app/api/frames/cinetrivia/answer",
    // state es opcional pero nos sirve para depurar
    state: {
      question: q.question,
      correct: q.correct,
      id: q.id,
    },
    buttons: q.options.map((option) => ({
      label: option,
      action: "post",
      target: `https://how-famous-are-you.vercel.app/api/frames/cinetrivia/answer?pick=${encodeURIComponent(
        option
      )}`,
    })),
  });
}
