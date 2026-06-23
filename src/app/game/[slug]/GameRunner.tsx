"use client";

import Link from "next/link";
import type { MatchGame } from "@/content/types";
import MatchGameView from "@/components/MatchGame";
import { useProgress } from "@/lib/progress";

export default function GameRunner({ game }: { game: MatchGame }) {
  const { completeGame } = useProgress();
  return (
    <div className="mx-auto max-w-2xl px-4 py-8">
      <Link href="/game" className="text-sm text-brand hover:underline">
        ← Tất cả game
      </Link>
      <h1 className="mt-3 text-2xl font-bold text-slate-800">{game.title}</h1>
      <p className="mb-5 mt-1 text-slate-500">{game.desc}</p>
      <MatchGameView game={game} onWin={() => completeGame(game.slug)} />
    </div>
  );
}
