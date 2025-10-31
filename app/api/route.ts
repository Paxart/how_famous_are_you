import { NextRequest, NextResponse } from "next/server";
import { put } from "@vercel/blob";

export async function POST(req: NextRequest) {
  try {
    const { dataUrl } = await req.json();

    if (!dataUrl || typeof dataUrl !== "string" || !dataUrl.startsWith("data:image/")) {
      return NextResponse.json({ error: "Invalid image data" }, { status: 400 });
    }

    const base64 = dataUrl.split(",")[1];
    const buffer = Buffer.from(base64, "base64");

    const filename = `how-famous/${Date.now()}.png`;
    const { url } = await put(filename, buffer, {
      access: "public",
      contentType: "image/png",
      cacheControlMaxAge: 60 * 60 * 24 * 365,
    });

    return NextResponse.json({ publicUrl: url });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || "upload failed" }, { status: 500 });
  }
}
