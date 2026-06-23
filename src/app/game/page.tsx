"use client";

import Link from "next/link";
import { MATCH_GAMES } from "@/content/games";
import { useProgress } from "@/lib/progress";

export default function GameListPage() {
  const { state } = useProgress();
  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <h1 className="text-2xl font-bold text-slate-800">🎮 Game ghép thẻ</h1>
      <p className="mt-1 text-slate-500">Vừa chơi vừa ôn — ghép đúng tất cả các cặp để thắng.</p>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {MATCH_GAMES.map((g) => (
          <Link
            key={g.slug}
            href={`/game/${g.slug}`}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className="flex items-center justify-between">
              <h2 className="font-bold text-slate-800">{g.title}</h2>
              {state.games[g.slug] && <span className="text-green-600">🏆</span>}
            </div>
            <p className="mt-1 text-sm text-slate-500">{g.desc}</p>
            <p className="mt-2 text-xs text-slate-400">{g.pairs.length} cặp</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
