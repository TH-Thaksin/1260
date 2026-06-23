"use client";

import { useMemo, useState } from "react";
import type { Quiz } from "@/content/types";

function arraysEqual(a: string[], b: string[]) {
  if (a.length !== b.length) return false;
  const sa = [...a].sort();
  const sb = [...b].sort();
  return sa.every((v, i) => v === sb[i]);
}

export default function QuizEngine({
  quiz,
  onFinish,
}: {
  quiz: Quiz;
  onFinish?: (score: number, max: number, passed: boolean) => void;
}) {
  const [i, setI] = useState(0);
  const [picked, setPicked] = useState<string[]>([]);
  const [checked, setChecked] = useState(false);
  const [answers, setAnswers] = useState<Record<string, boolean>>({});
  const [done, setDone] = useState(false);

  const q = quiz.questions[i];
  const isMulti = q.type === "multi";

  const correctCount = useMemo(
    () => Object.values(answers).filter(Boolean).length,
    [answers]
  );

  function toggle(key: string) {
    if (checked) return;
    if (isMulti) {
      setPicked((p) => (p.includes(key) ? p.filter((k) => k !== key) : [...p, key]));
    } else {
      setPicked([key]);
    }
  }

  function check() {
    if (picked.length === 0) return;
    const ok = arraysEqual(picked, q.correct);
    setAnswers((a) => ({ ...a, [q.id]: ok }));
    setChecked(true);
  }

  function next() {
    if (i + 1 < quiz.questions.length) {
      setI(i + 1);
      setPicked([]);
      setChecked(false);
    } else {
      const score = Object.values({ ...answers }).filter(Boolean).length;
      const max = quiz.questions.length;
      const passed = (score / max) * 100 >= quiz.pass;
      setDone(true);
      onFinish?.(score, max, passed);
    }
  }

  function restart() {
    setI(0);
    setPicked([]);
    setChecked(false);
    setAnswers({});
    setDone(false);
  }

  if (done) {
    const max = quiz.questions.length;
    const pct = Math.round((correctCount / max) * 100);
    const passed = pct >= quiz.pass;
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
        <div className="text-5xl">{passed ? "🎉" : "💪"}</div>
        <h2 className="mt-3 text-2xl font-bold text-slate-800">
          {correctCount}/{max} câu đúng · {pct}%
        </h2>
        <p
          className={`mt-1 font-semibold ${passed ? "text-green-600" : "text-amber-600"}`}
        >
          {passed ? "Đạt yêu cầu!" : `Cần ≥ ${quiz.pass}% để đạt — thử lại nhé!`}
        </p>
        <button
          onClick={restart}
          className="mt-5 rounded-xl bg-brand px-5 py-2.5 font-semibold text-white hover:bg-brand-dark"
        >
          Làm lại
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between text-sm text-slate-500">
        <span>
          Câu {i + 1}/{quiz.questions.length}
        </span>
        <span className="rounded-full bg-slate-100 px-2 py-0.5">
          {isMulti ? "Chọn nhiều đáp án" : q.type === "boolean" ? "Đúng/Sai" : "Chọn 1 đáp án"}
        </span>
      </div>
      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-slate-100">
        <div
          className="h-full bg-brand transition-all"
          style={{ width: `${((i + (checked ? 1 : 0)) / quiz.questions.length) * 100}%` }}
        />
      </div>

      <h2 className="mt-4 text-lg font-bold text-slate-800">{q.prompt}</h2>

      <div className="mt-4 space-y-2.5">
        {q.options.map((opt) => {
          const isPicked = picked.includes(opt.key);
          const isCorrect = q.correct.includes(opt.key);
          let cls = "border-slate-200 bg-white hover:border-brand/50";
          if (checked) {
            if (isCorrect) cls = "border-green-400 bg-green-50";
            else if (isPicked) cls = "border-rose-400 bg-rose-50";
            else cls = "border-slate-200 bg-white opacity-70";
          } else if (isPicked) {
            cls = "border-brand bg-blue-50";
          }
          return (
            <button
              key={opt.key}
              onClick={() => toggle(opt.key)}
              className={`flex w-full items-center gap-3 rounded-xl border-2 px-4 py-3 text-left transition ${cls}`}
            >
              <span
                className={`grid h-6 w-6 shrink-0 place-items-center rounded-full border text-xs font-bold ${
                  isPicked ? "border-brand bg-brand text-white" : "border-slate-300 text-slate-400"
                }`}
              >
                {opt.key.toUpperCase()}
              </span>
              <span className="text-slate-700">{opt.text}</span>
              {checked && isCorrect && <span className="ml-auto">✅</span>}
              {checked && isPicked && !isCorrect && <span className="ml-auto">❌</span>}
            </button>
          );
        })}
      </div>

      {checked && (
        <div className="mt-4 rounded-xl bg-slate-50 p-4 text-sm">
          <p className="font-semibold text-slate-700">
            {answers[q.id] ? "✅ Chính xác!" : "❌ Chưa đúng."}
          </p>
          <p className="mt-1 text-slate-600">{q.explain}</p>
        </div>
      )}

      <div className="mt-5 flex justify-end">
        {!checked ? (
          <button
            onClick={check}
            disabled={picked.length === 0}
            className="rounded-xl bg-brand px-5 py-2.5 font-semibold text-white transition hover:bg-brand-dark disabled:opacity-40"
          >
            Kiểm tra
          </button>
        ) : (
          <button
            onClick={next}
            className="rounded-xl bg-brand px-5 py-2.5 font-semibold text-white hover:bg-brand-dark"
          >
            {i + 1 < quiz.questions.length ? "Câu tiếp →" : "Xem kết quả"}
          </button>
        )}
      </div>
    </div>
  );
}
