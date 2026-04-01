// app/api/caricature/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ ok: true, message: "Caricature endpoint disabled" });
}

// Si en algún momento necesitas POST, también puedes dejar algo vacío:
export async function POST() {
  return NextResponse.json(
    { ok: false, message: "This endpoint is currently disabled" },
    { status: 405 }
  );
}
