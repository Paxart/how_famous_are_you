import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  const data = await req.json();

  const { fid, username, displayName, pfpUrl, triviaId, score } = data;

  // Solo guardar si no existe ya una puntuación previa
  const existing = await prisma.score.findFirst({
    where: {
      fid,
      triviaId
    }
  });

  if (existing) {
    return NextResponse.json({ message: "Already played" });
  }

  const newScore = await prisma.score.create({
    data: {
      fid,
      username,
      displayName,
      pfpUrl,
      triviaId,
      score
    }
  });

  return NextResponse.json(newScore);
}