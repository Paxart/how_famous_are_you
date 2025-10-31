import { NextResponse } from "next/server";

// Maneja las peticiones POST (cuando se hace clic en el botón del frame)
export async function POST() {
  return NextResponse.json({
    frames: [
      {
        version: "vNext",
        image: "https://how-famous-are-you.vercel.app/vercel.svg",
        buttons: [
          {
            label: "Mint NFT ❤️",
            action: "link",
            target: "https://base.org",
          },
        ],
      },
    ],
  });
}

// Maneja las peticiones GET (para poder abrirlo directamente en el navegador)
export async function GET() {
  return NextResponse.json({
    frames: [
      {
        version: "vNext",
        image: "https://how-famous-are-you.vercel.app/vercel.svg",
        buttons: [
          {
            label: "Mint NFT ❤️",
            action: "link",
            target: "https://base.org",
          },
        ],
      },
    ],
  });
}
