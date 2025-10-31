import { NextResponse } from "next/server";

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
