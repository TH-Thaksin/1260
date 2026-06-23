import { notFound } from "next/navigation";
import { MATCH_GAMES, gameBySlug } from "@/content/games";
import GameRunner from "./GameRunner";

export function generateStaticParams() {
  return MATCH_GAMES.map((g) => ({ slug: g.slug }));
}

export default async function GamePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const game = gameBySlug(slug);
  if (!game) notFound();
  return <GameRunner game={game} />;
}
