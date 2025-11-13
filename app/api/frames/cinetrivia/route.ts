import { NextRequest, NextResponse } from "next/server";

const question = {
  question: "Which movie has the highest box office of all time?",
  options: [
    "Titanic (1997)",
    "Avatar (2009)",
    "Avengers: Endgame (2019)",
    "Star Wars: The Force Awakens (2015)"
  ],
  correctIndex: 1
};

// Imagen alojada en tu Webempresa
const IMAGE_URL =
  "https://criptomonedas.live/wp-content/uploads/2025/11/farlander-cinema.png";

// Dominio REAL de tu app en Vercel
const DOMAIN = "https://how-famous-are-you.vercel.app";

function buildHtml(answerIndex?: number | null) {
  let title = "Farlander CineTrivia 🎬";
  let description = "Can you guess the right answer?";
  let resultText = "";

  if (answerIndex !== null && answerIndex !== undefined) {
    const isCorrect = answerIndex === question.correctIndex;
    if (isCorrect) {
      title = "Correct! 🎉";
      description = "You really know your movies.";
      resultText = "Farlander is… mildly impressed. ☕";
    } else {
      title = "Wrong… 😅";
      description = "Try again or pretend it was a typo.";
      resultText = `Correct answer: ${question.options[question.correctIndex]}`;
    }
  }

  return `<!DOCTYPE html>
<html>
  <head>
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:image" content="${IMAGE_URL}" />

    <meta property="fc:frame" content="vNext" />
    <meta property="fc:frame:image" content="${IMAGE_URL}" />

    <meta property="fc:frame:button:1" content="${question.options[0]}" />
    <meta property="fc:frame:button:1:target" content="${DOMAIN}/api/frames/cinetrivia?a=0" />

    <meta property="fc:frame:button:2" content="${question.options[1]}" />
    <meta property="fc:frame:button:2:target" content="${DOMAIN}/api/frames/cinetrivia?a=1" />

    <meta property="fc:frame:button:3" content="${question.options[2]}" />
    <meta property="fc:frame:button:3:target" content="${DOMAIN}/api/frames/cinetrivia?a=2" />

    <meta property="fc:frame:button:4" content="${question.options[3]}" />
    <meta property="fc:frame:button:4:target" content="${DOMAIN}/api/frames/cinetrivia?a=3" />
  </head>
  <body>
    <main>
      <h1>${title}</h1>
      <p>${question.question}</p>
      <p>${resultText}</p>
    </main>
  </body>
</html>`;
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const answerParam = searchParams.get("a");
  const answerIndex = answerParam !== null ? parseInt(answerParam, 10) : null;

  const html = buildHtml(
    isNaN(answerIndex as number) ? null : (answerIndex as number)
  );

  return new NextResponse(html, {
    status: 200,
    headers: {
      "Content-Type": "text/html"
    }
  });
}
