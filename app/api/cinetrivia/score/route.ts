// app/api/cinetrivia/score/route.ts
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// POST → guardar score solo la primera vez por triviaId + fid
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      triviaId,
      score,
      fid,
      username,
      displayName,
      pfpUrl,
    } = body as {
      triviaId: string;
      score: number;
      fid: number;
      username?: string | null;
      displayName?: string | null;
      pfpUrl?: string | null;
    };

    if (!triviaId || typeof triviaId !== "string") {
      return NextResponse.json(
        { error: "Missing triviaId" },
        { status: 400 }
      );
    }

    if (typeof score !== "number" || typeof fid !== "number") {
      return NextResponse.json(
        { error: "Invalid score or fid" },
        { status: 400 }
      );
    }

    // ✅ guardar solo la PRIMERA vez que ese fid juega ese trivia
    const existing = await prisma.score.findFirst({
      where: { triviaId, fid },
    });

    if (existing) {
      return NextResponse.json(
        {
          ok: true,
          alreadyRecorded: true,
          message: "Score ya guardado anteriormente",
        },
        { status: 200 }
      );
    }

    const created = await prisma.score.create({
      data: {
        triviaId,
        score,
        fid,
        username: username ?? null,
        displayName: displayName ?? null,
        pfpUrl: pfpUrl ?? null,
      },
    });

    return NextResponse.json(
      { ok: true, score: created },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error guardando score:", error);
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}

// GET → devolver ranking para un triviaId concreto
export async function GET(req: NextRequest) {
  try {
    const triviaId = req.nextUrl.searchParams.get("triviaId");

    if (!triviaId) {
      return NextResponse.json(
        { error: "Missing triviaId in query" },
        { status: 400 }
      );
    }

    const scores = await prisma.score.findMany({
      where: { triviaId },
      orderBy: [
        { score: "desc" },
        { createdAt: "asc" }, // si empatan, el primero en hacerlo va antes
      ],
      take: 100, // límite por si se llena
    });

    return NextResponse.json(
      { scores },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error leyendo ranking:", error);
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}