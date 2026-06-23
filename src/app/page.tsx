"use client";

import Link from "next/link";
import { MODULES } from "@/content/modules";
import { QUIZZES } from "@/content/quizzes";
import { SCENARIOS } from "@/content/scenarios";
import { MATCH_GAMES } from "@/content/games";
import { COURSE_TITLE, COURSE_SUBTITLE } from "@/content/references";
import { useProgress } from "@/lib/progress";

export default function Home() {
  const { state } = useProgress();

  const doneModules = MODULES.filter((m) => state.modules[m.slug]).length;
  const totalSteps =
    MODULES.length + QUIZZES.length + SCENARIOS.length + MATCH_GAMES.length + 1;
  const doneSteps =
    doneModules +
    Object.keys(state.quizzes).length +
    Object.values(state.scenarios).filter(Boolean).length +
    Object.values(state.games).filter(Boolean).length +
    (state.final?.passed ? 1 : 0);
  const pct = Math.round((doneSteps / totalSteps) * 100);

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      {/* Hero */}
      <section className="rounded-2xl bg-gradient-to-br from-brand to-brand-dark p-8 text-white shadow-lg">
        <p className="text-sm font-medium uppercase tracking-wide text-blue-100">
          Khóa đào tạo nội bộ
        </p>
        <h1 className="mt-1 text-3xl font-bold sm:text-4xl">{COURSE_TITLE}</h1>
        <p className="mt-2 text-blue-100">{COURSE_SUBTITLE}</p>

        <div className="mt-6 max-w-md">
          <div className="flex items-center justify-between text-sm">
            <span>Tiến độ của bạn</span>
            <span className="font-semibold">{pct}%</span>
          </div>
          <div className="mt-1 h-3 overflow-hidden rounded-full bg-white/25">
            <div
              className="h-full rounded-full bg-white transition-all"
              style={{ width: `${pct}%` }}
            />
          </div>
          <p className="mt-2 text-xs text-blue-100">
            {doneModules}/{MODULES.length} bài học · {Object.keys(state.quizzes).length}/
            {QUIZZES.length} quiz ·{" "}
            {Object.values(state.scenarios).filter(Boolean).length}/{SCENARIOS.length} tình huống ·{" "}
            {Object.values(state.games).filter(Boolean).length}/{MATCH_GAMES.length} game
          </p>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href={`/module/${MODULES[0].slug}`}
            className="rounded-xl bg-white px-5 py-2.5 font-semibold text-brand shadow hover:bg-blue-50"
          >
            ▶ Bắt đầu học
          </Link>
          <Link
            href="/final"
            className="rounded-xl border border-white/60 px-5 py-2.5 font-semibold text-white hover:bg-white/10"
          >
            Kiểm tra cuối khóa
          </Link>
        </div>
      </section>

      {/* Lối tắt */}
      <section className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
        <QuickLink href="/flashcards" icon="🃏" label="Flashcard" sub="Học nhanh bằng thẻ" />
        <QuickLink href="/quiz" icon="❓" label="Quiz" sub="Kiểm tra từng phần" />
        <QuickLink href="/practice" icon="🎭" label="Thực hành" sub="Tình huống thực tế" />
        <QuickLink href="/game" icon="🎮" label="Game" sub="Ghép thẻ vui" />
      </section>

      {/* Lộ trình module */}
      <section className="mt-10">
        <h2 className="mb-4 text-xl font-bold text-slate-800">Lộ trình học</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {MODULES.map((m) => {
            const done = state.modules[m.slug];
            return (
              <Link
                key={m.slug}
                href={`/module/${m.slug}`}
                className="group relative flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="flex items-start justify-between">
                  <span className="text-3xl">{m.icon}</span>
                  {done ? (
                    <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs font-semibold text-green-700">
                      ✓ Hoàn thành
                    </span>
                  ) : (
                    <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-500">
                      {m.minutes} phút
                    </span>
                  )}
                </div>
                <h3 className="mt-3 font-bold text-slate-800 group-hover:text-brand">
                  {m.title}
                </h3>
                <p className="mt-1 flex-1 text-sm text-slate-500">{m.summary}</p>
              </Link>
            );
          })}
        </div>
      </section>

      <p className="mt-10 text-center text-xs text-slate-400">
        Tiến độ được lưu trên trình duyệt của bạn. Mọi tình huống minh họa đã được ẩn danh.
      </p>
    </div>
  );
}

function QuickLink({
  href,
  icon,
  label,
  sub,
}: {
  href: string;
  icon: string;
  label: string;
  sub: string;
}) {
  return (
    <Link
      href={href}
      className="rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
    >
      <div className="text-3xl">{icon}</div>
      <div className="mt-1 font-semibold text-slate-800">{label}</div>
      <div className="text-xs text-slate-500">{sub}</div>
    </Link>
  );
}
