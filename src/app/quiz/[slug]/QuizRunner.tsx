"use client";

import Link from "next/link";
import type { Quiz } from "@/content/types";
import QuizEngine from "@/components/QuizEngine";
import { useProgress } from "@/lib/progress";

export default function QuizRunner({ quiz }: { quiz: Quiz }) {
  const { saveQuiz } = useProgress();
  return (
    <div className="mx-auto max-w-2xl px-4 py-8">
      <Link href="/quiz" className="text-sm text-brand hover:underline">
        ← Tất cả quiz
      </Link>
      <h1 className="mb-4 mt-3 text-2xl font-bold text-slate-800">{quiz.title}</h1>
      <QuizEngine quiz={quiz} onFinish={(s, m) => saveQuiz(quiz.slug, s, m)} />
    </div>
  );
}
