"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import type { Module } from "@/content/types";
import Blocks from "@/components/Blocks";
import { useProgress } from "@/lib/progress";

export default function ModuleView({
  mod,
  nextSlug,
  nextTitle,
}: {
  mod: Module;
  nextSlug?: string;
  nextTitle?: string;
}) {
  const { state, completeModule } = useProgress();
  const router = useRouter();
  const done = !!state.modules[mod.slug];

  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <Link href="/module" className="text-sm text-brand hover:underline">
        ← Tất cả bài học
      </Link>

      <header className="mt-3 flex items-start gap-3">
        <span className="text-4xl">{mod.icon}</span>
        <div>
          <h1 className="text-2xl font-bold text-slate-800">{mod.title}</h1>
          <p className="mt-1 text-slate-500">{mod.summary}</p>
        </div>
      </header>

      <div className="mt-3 flex flex-wrap gap-2">
        {mod.flashDeck && (
          <Link
            href={`/flashcards/${mod.flashDeck}`}
            className="rounded-lg bg-indigo-100 px-3 py-1.5 text-sm font-medium text-indigo-700 hover:bg-indigo-200"
          >
            🃏 Flashcard bộ này
          </Link>
        )}
        {mod.quizSlug && (
          <Link
            href={`/quiz/${mod.quizSlug}`}
            className="rounded-lg bg-amber-100 px-3 py-1.5 text-sm font-medium text-amber-700 hover:bg-amber-200"
          >
            ❓ Làm quiz
          </Link>
        )}
        {mod.slug === "m7-thuc-chien" && (
          <Link
            href="/practice"
            className="rounded-lg bg-rose-100 px-3 py-1.5 text-sm font-medium text-rose-700 hover:bg-rose-200"
          >
            🎭 Thực hành tình huống
          </Link>
        )}
      </div>

      <article className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <Blocks blocks={mod.blocks} />
      </article>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
        <button
          onClick={() => completeModule(mod.slug)}
          disabled={done}
          className={`rounded-xl px-5 py-2.5 font-semibold transition ${
            done
              ? "cursor-default bg-green-100 text-green-700"
              : "bg-brand text-white hover:bg-brand-dark"
          }`}
        >
          {done ? "✓ Đã hoàn thành" : "Đánh dấu hoàn thành"}
        </button>

        {mod.quizSlug ? (
          <button
            onClick={() => router.push(`/quiz/${mod.quizSlug}`)}
            className="rounded-xl border border-brand px-5 py-2.5 font-semibold text-brand hover:bg-blue-50"
          >
            Làm quiz ngay →
          </button>
        ) : nextSlug ? (
          <Link
            href={`/module/${nextSlug}`}
            className="rounded-xl border border-brand px-5 py-2.5 font-semibold text-brand hover:bg-blue-50"
          >
            Bài tiếp theo →
          </Link>
        ) : (
          <Link
            href="/final"
            className="rounded-xl border border-brand px-5 py-2.5 font-semibold text-brand hover:bg-blue-50"
          >
            Kiểm tra cuối khóa →
          </Link>
        )}
      </div>

      {nextSlug && (
        <p className="mt-4 text-center text-sm text-slate-400">
          Tiếp theo: <span className="font-medium text-slate-600">{nextTitle}</span>
        </p>
      )}
    </div>
  );
}
