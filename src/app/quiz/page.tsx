"use client";

import Link from "next/link";
import { QUIZZES } from "@/content/quizzes";
import { useProgress } from "@/lib/progress";

export default function QuizListPage() {
  const { state } = useProgress();
  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <h1 className="text-2xl font-bold text-slate-800">❓ Quiz theo phần</h1>
      <p className="mt-1 text-slate-500">Kiểm tra nhanh kiến thức sau mỗi module.</p>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {QUIZZES.map((q) => {
          const r = state.quizzes[q.slug];
          return (
            <Link
              key={q.slug}
              href={`/quiz/${q.slug}`}
              className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <h2 className="font-bold text-slate-800">{q.title}</h2>
                {r && (
                  <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs font-semibold text-green-700">
                    {r.score}/{r.max}
                  </span>
                )}
              </div>
              <p className="mt-1 text-sm text-slate-500">
                {q.questions.length} câu · đạt ≥ {q.pass}%
              </p>
            </Link>
          );
        })}
      </div>
      <div className="mt-6 rounded-xl bg-amber-50 p-4 text-sm text-amber-800">
        Sẵn sàng tổng kết? Làm{" "}
        <Link href="/final" className="font-semibold underline">
          Bài kiểm tra cuối khóa
        </Link>{" "}
        (10 câu, đạt ≥ 80%).
      </div>
    </div>
  );
}
