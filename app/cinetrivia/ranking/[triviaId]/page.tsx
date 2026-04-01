import { notFound } from "next/navigation";

type RankingItem = {
  id: string;
  fid: number;
  score: number;
  username: string | null;
  displayName: string | null;
  pfpUrl: string | null;
};

export default async function RankingPage({
  params,
}: {
  params: { triviaId: string };
}) {
  const { triviaId } = params;

  let ranking: RankingItem[] = [];

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/ranking/${triviaId}`,
      { cache: "no-store" }
    );

    if (!res.ok) {
      throw new Error("API error");
    }

    const data = await res.json();
    ranking = data.ranking ?? [];
  } catch (error) {
    console.error("Error cargando ranking:", error);
  }

  if (!ranking.length) {
    return (
      <div style={{ color: "white", padding: 40, textAlign: "center" }}>
        <h2>🎬 Ranking vacío</h2>
        <p>Aún no hay puntuaciones para: {triviaId}</p>
      </div>
    );
  }

  return (
    <div style={{ padding: 40, color: "white" }}>
      <h1>🏆 Ranking - {triviaId.toUpperCase()}</h1>

      {ranking.map((user, index) => (
        <div
          key={user.id}
          style={{
            display: "flex",
            alignItems: "center",
            margin: "12px 0",
            background: "#111",
            padding: 10,
            borderRadius: 8,
          }}
        >
          <strong style={{ width: 40 }}>#{index + 1}</strong>

          <img
            src={user.pfpUrl ?? "/default-avatar.png"}
            width={40}
            height={40}
            style={{ borderRadius: "50%", marginRight: 12 }}
          />

          <div>
            <div>
              {user.displayName || user.username || "Usuario"}
            </div>
            <small>Puntuación: {user.score}</small>
          </div>
        </div>
      ))}
    </div>
  );
}