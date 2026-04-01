// app/api/frames/cinetrivia/answer/route.ts
import { NextResponse } from "next/server";
import { getQuestionForToday } from "../questions";

const FRAME_IMAGE =
  "https://criptomonedas.live/wp-content/uploads/2025/11/cinetrivia.png";

export async function GET(request: Request) {
  return POST(request);
}

export async function POST(request: Request) {
  const { searchParams } = new URL(request.url);
  const picked = searchParams.get("pick") || "";

  const q = getQuestionForToday();
  const isCorrect = picked === q.correct;

  const resultText = isCorrect
    ? "Correct! 🔥 You nailed it."
    : `Wrong ❌ The correct answer was: ${q.correct}`;

  return NextResponse.json({
    version: "vNext",
    image: FRAME_IMAGE,
    post_url: "https://how-famous-are-you.vercel.app/api/frames/cinetrivia",
    state: {
      question: q.question,
      correct: q.correct,
      picked,
      isCorrect,
    },
    buttons: [
      {
        label: isCorrect ? "Play again ▶️" : "Try again 🔁",
        action: "post",
        target:
          "https://how-famous-are-you.vercel.app/api/frames/cinetrivia",
      },
      {
        label: "Share result 📣",
        action: "link",
        target: `https://warpcast.com/~/compose?text=${encodeURIComponent(
          `I just played Farlander CineTrivia.\n\nQ: ${q.question}\nMy answer: ${picked || "—"}\nResult: ${
            isCorrect ? "✅ Correct" : "❌ Wrong"
          }`
        )}`,
      },
    ],
    // opcional: texto explicativo que algunos clientes usan
    text: resultText,
  });
}
