"use client";

import Link from "next/link";
import { useState } from "react";
import { FINAL_QUIZ } from "@/content/quizzes";
import { REFERENCES } from "@/content/references";
import QuizEngine from "@/components/QuizEngine";
import { useProgress } from "@/lib/progress";

export default function FinalPage() {
  const { state, saveFinal, setName } = useProgress();
  const [started, setStarted] = useState(false);
  const [name, setLocalName] = useState(state.name ?? "");

  return (
    <div className="mx-auto max-w-2xl px-4 py-8">
      <h1 className="text-2xl font-bold text-slate-800">🏁 Bài kiểm tra nghiệp vụ</h1>
      <p className="mt-1 text-slate-500">
        {FINAL_QUIZ.questions.length} câu tổng hợp · đạt ≥ {FINAL_QUIZ.pass}%.
      </p>

      {state.final && (
        <div
          className={`mt-4 rounded-xl p-4 ${
            state.final.passed ? "bg-green-50 text-green-800" : "bg-amber-50 text-amber-800"
          }`}
        >
          Kết quả gần nhất: <b>{state.final.score}/{state.final.max}</b> ·{" "}
          {state.final.passed ? "ĐẠT ✅" : "Chưa đạt"}
        </div>
      )}

      {!started ? (
        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <label className="block text-sm font-medium text-slate-700">
            Họ tên của bạn (tùy chọn)
          </label>
          <input
            value={name}
            onChange={(e) => setLocalName(e.target.value)}
            placeholder="Nhập tên để ghi nhận kết quả"
            className="mt-1 w-full rounded-xl border border-slate-300 px-4 py-2.5 outline-none focus:border-brand"
          />
          <button
            onClick={() => {
              if (name.trim()) setName(name.trim());
              setStarted(true);
            }}
            className="mt-4 w-full rounded-xl bg-brand px-5 py-3 font-semibold text-white hover:bg-brand-dark"
          >
            Bắt đầu làm bài
          </button>
          <p className="mt-3 text-xs text-slate-400">
            Gợi ý: nên hoàn thành 9 module + thực hành trước khi làm bài này.
          </p>
        </div>
      ) : (
        <div className="mt-6">
          <QuizEngine
            quiz={FINAL_QUIZ}
            onFinish={(s, m, passed) => saveFinal(s, m, passed)}
          />
        </div>
      )}

      <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <h2 className="font-bold text-slate-800">📎 Tài liệu tham khảo sau đào tạo</h2>
        <ul className="mt-2 space-y-1.5 text-sm">
          {REFERENCES.map((r) => (
            <li key={r.url}>
              <a
                href={r.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand hover:underline"
              >
                → {r.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <p className="mt-6 text-center">
        <Link href="/" className="text-sm text-brand hover:underline">
          ← Về trang chủ
        </Link>
      </p>
    </div>
  );
}
