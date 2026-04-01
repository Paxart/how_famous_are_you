import { prisma } from "@/lib/prisma";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ triviaId: string }> }
) {
  const { triviaId } = await params;

  if (!triviaId) {
    return new Response(
      JSON.stringify({ error: "Missing triviaId" }),
      { status: 400 }
    );
  }

  try {
    const scores = await prisma.score.findMany({
      where: { triviaId },
      orderBy: { score: "desc" },
      take: 50,
    });

    const ranking = scores.map((s, index) => ({
      position: index + 1,
      fid: s.fid,
      score: s.score,
      username: s.username,
      displayName: s.displayName,
      pfpUrl: s.pfpUrl,
      createdAt: s.createdAt,
    }));

    return new Response(
      JSON.stringify({ triviaId, ranking }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error ranking:", error);
    return new Response(
      JSON.stringify({ error: "Server error" }),
      { status: 500 }
    );
  }
}