"use client";

import { useMemo, useState } from "react";
import type { MatchGame } from "@/content/types";

// Xáo trộn ổn định theo seed (không dùng Math.random ở render đầu để tránh lệch SSR).
function shuffle<T>(arr: T[], seed: number): T[] {
  const a = [...arr];
  let s = seed;
  for (let i = a.length - 1; i > 0; i--) {
    s = (s * 9301 + 49297) % 233280;
    const j = Math.floor((s / 233280) * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function MatchGameView({
  game,
  onWin,
}: {
  game: MatchGame;
  onWin?: () => void;
}) {
  const lefts = game.pairs;
  const rights = useMemo(
    () => shuffle(game.pairs.map((p, i) => ({ ...p, i })), game.pairs.length * 7 + 3),
    [game.pairs]
  );

  const [selLeft, setSelLeft] = useState<number | null>(null);
  const [matched, setMatched] = useState<Set<number>>(new Set());
  const [wrong, setWrong] = useState<number | null>(null);
  const [tries, setTries] = useState(0);

  const allDone = matched.size === lefts.length;

  function clickRight(rightIdx: number) {
    if (selLeft === null || matched.has(selLeft)) return;
    setTries((t) => t + 1);
    if (rights[rightIdx].i === selLeft) {
      const nm = new Set(matched).add(selLeft);
      setMatched(nm);
      setSelLeft(null);
      if (nm.size === lefts.length) onWin?.();
    } else {
      setWrong(rightIdx);
      setTimeout(() => setWrong(null), 500);
    }
  }

  function reset() {
    setSelLeft(null);
    setMatched(new Set());
    setWrong(null);
    setTries(0);
  }

  return (
    <div>
      <div className="mb-4 flex items-center justify-between text-sm text-slate-500">
        <span>
          Đã ghép {matched.size}/{lefts.length}
        </span>
        <span>Lượt thử: {tries}</span>
      </div>

      {allDone ? (
        <div className="rounded-2xl border border-green-200 bg-green-50 p-8 text-center">
          <div className="text-5xl">🏆</div>
          <h2 className="mt-2 text-xl font-bold text-green-800">Hoàn thành!</h2>
          <p className="mt-1 text-green-700">
            Bạn ghép đúng tất cả {lefts.length} cặp sau {tries} lượt thử.
          </p>
          <button
            onClick={reset}
            className="mt-4 rounded-xl bg-brand px-5 py-2.5 font-semibold text-white hover:bg-brand-dark"
          >
            Chơi lại
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4">
          {/* Cột trái */}
          <div className="space-y-2.5">
            {lefts.map((p, idx) => {
              const isMatched = matched.has(idx);
              const isSel = selLeft === idx;
              return (
                <button
                  key={idx}
                  disabled={isMatched}
                  onClick={() => setSelLeft(idx)}
                  className={`block w-full rounded-xl border-2 px-3 py-3 text-left text-sm font-medium transition ${
                    isMatched
                      ? "border-green-300 bg-green-50 text-green-700"
                      : isSel
                        ? "border-brand bg-blue-50 text-brand"
                        : "border-slate-200 bg-white text-slate-700 hover:border-brand/50"
                  }`}
                >
                  {isMatched && "✓ "}
                  {p.left}
                </button>
              );
            })}
          </div>

          {/* Cột phải */}
          <div className="space-y-2.5">
            {rights.map((p, idx) => {
              const isMatched = matched.has(p.i);
              const isWrong = wrong === idx;
              return (
                <button
                  key={idx}
                  disabled={isMatched}
                  onClick={() => clickRight(idx)}
                  className={`block w-full rounded-xl border-2 px-3 py-3 text-left text-sm transition ${
                    isMatched
                      ? "border-green-300 bg-green-50 text-green-700"
                      : isWrong
                        ? "border-rose-400 bg-rose-50 text-rose-700"
                        : "border-slate-200 bg-white text-slate-700 hover:border-brand/50"
                  }`}
                >
                  {isMatched && "✓ "}
                  {p.right}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {!allDone && (
        <p className="mt-4 text-center text-xs text-slate-400">
          Chọn 1 ô bên trái, rồi chọn ô tương ứng bên phải để ghép cặp.
        </p>
      )}
    </div>
  );
}
