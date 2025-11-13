import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    frames: [
      {
        version: "vNext",
        image: "https://how-famous-are-you.vercel.app/vercel.svg",
        buttons: [
          {
            label: "Generate Yours",
            action: "post",
            target: "https://how-famous-are-you.vercel.app/api/frame/next",
          },
        ],
      },
    ],
  });
}
