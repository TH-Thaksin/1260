import Link from "next/link";
import { FLASHDECKS } from "@/content/flashcards";

export default function FlashcardsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <h1 className="text-2xl font-bold text-slate-800">🃏 Flashcard</h1>
      <p className="mt-1 text-slate-500">
        Học nhanh bằng thẻ lật. Bấm vào thẻ để xem đáp án.
      </p>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {FLASHDECKS.map((d) => (
          <Link
            key={d.slug}
            href={`/flashcards/${d.slug}`}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className="text-3xl">{d.icon}</div>
            <h2 className="mt-2 font-bold text-slate-800">{d.title}</h2>
            <p className="text-sm text-slate-500">{d.desc}</p>
            <p className="mt-2 text-xs text-slate-400">{d.cards.length} thẻ</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
