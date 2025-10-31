import { NextResponse } from "next/server";

export async function GET() {
  return new NextResponse(
    JSON.stringify({
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
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-store",
      },
    }
  );
}
