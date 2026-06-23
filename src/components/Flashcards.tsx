"use client";

import { useState } from "react";
import type { FlashDeck } from "@/content/types";

export default function Flashcards({
  deck,
  onDone,
}: {
  deck: FlashDeck;
  onDone?: () => void;
}) {
  const [i, setI] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [seen, setSeen] = useState<Set<number>>(new Set([0]));

  const card = deck.cards[i];
  const last = i === deck.cards.length - 1;

  function go(dir: 1 | -1) {
    const ni = Math.min(Math.max(i + dir, 0), deck.cards.length - 1);
    setI(ni);
    setFlipped(false);
    setSeen((s) => new Set(s).add(ni));
    if (ni === deck.cards.length - 1) onDone?.();
  }

  return (
    <div className="mx-auto max-w-xl">
      <div className="mb-3 flex items-center justify-between text-sm text-slate-500">
        <span>
          Thẻ {i + 1}/{deck.cards.length}
        </span>
        <span>{seen.size === deck.cards.length ? "✓ Đã xem hết" : `Đã xem ${seen.size}`}</span>
      </div>

      <div
        className="relative h-72 cursor-pointer select-none [perspective:1200px]"
        onClick={() => setFlipped((f) => !f)}
      >
        <div className={`flip absolute inset-0 ${flipped ? "is-flipped" : ""}`}>
          {/* Mặt trước */}
          <div className="flip-face absolute inset-0 grid place-items-center rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-md">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-brand">
                Câu hỏi
              </p>
              <p className="mt-3 text-xl font-bold text-slate-800">{card.front}</p>
              <p className="mt-6 text-xs text-slate-400">Bấm để lật xem đáp án</p>
            </div>
          </div>
          {/* Mặt sau */}
          <div className="flip-face flip-back absolute inset-0 grid place-items-center rounded-3xl border border-brand bg-brand p-6 text-center text-white shadow-md">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-blue-100">
                Đáp án
              </p>
              <p className="mt-3 text-lg font-semibold leading-relaxed">{card.back}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between gap-3">
        <button
          onClick={() => go(-1)}
          disabled={i === 0}
          className="rounded-xl border border-slate-300 px-4 py-2 font-medium text-slate-600 disabled:opacity-40"
        >
          ← Trước
        </button>
        <button
          onClick={() => setFlipped((f) => !f)}
          className="rounded-xl bg-slate-100 px-4 py-2 font-medium text-slate-700 hover:bg-slate-200"
        >
          🔄 Lật thẻ
        </button>
        <button
          onClick={() => go(1)}
          disabled={last}
          className="rounded-xl bg-brand px-4 py-2 font-semibold text-white hover:bg-brand-dark disabled:opacity-40"
        >
          Tiếp →
        </button>
      </div>
    </div>
  );
}
