"use client";

import Link from "next/link";
import type { FlashDeck } from "@/content/types";
import Flashcards from "@/components/Flashcards";

export default function DeckRunner({ deck }: { deck: FlashDeck }) {
  return (
    <div className="mx-auto max-w-2xl px-4 py-8">
      <Link href="/flashcards" className="text-sm text-brand hover:underline">
        ← Tất cả bộ thẻ
      </Link>
      <h1 className="mb-6 mt-3 text-2xl font-bold text-slate-800">
        {deck.icon} {deck.title}
      </h1>
      <Flashcards deck={deck} />
    </div>
  );
}
