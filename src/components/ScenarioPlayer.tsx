"use client";

import { useState } from "react";
import type { Scenario } from "@/content/types";

const badgeStyle: Record<string, string> = {
  "Chưa đạt": "bg-rose-100 text-rose-700",
  "Đạt": "bg-green-100 text-green-700",
  "Cần cải thiện": "bg-amber-100 text-amber-700",
};

export default function ScenarioPlayer({
  scenario,
  onResolve,
}: {
  scenario: Scenario;
  onResolve?: (isCorrect: boolean) => void;
}) {
  const [picked, setPicked] = useState<string | null>(null);
  const [revealed, setRevealed] = useState(false);

  const chosen = scenario.choices.find((c) => c.key === picked);

  function submit() {
    if (!picked) return;
    setRevealed(true);
    onResolve?.(!!chosen?.correct);
  }

  return (
    <div className="space-y-4">
      {/* Bối cảnh */}
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-lg bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-600">
            {scenario.service}
          </span>
          <span
            className={`rounded-lg px-2.5 py-1 text-xs font-semibold ${badgeStyle[scenario.badge]}`}
          >
            Đánh giá thực tế: {scenario.badge}
          </span>
        </div>
        <p className="mt-3 leading-relaxed text-slate-700">📞 {scenario.context}</p>
        <p className="mt-3 font-bold text-slate-800">{scenario.prompt}</p>
      </div>

      {/* Lựa chọn */}
      <div className="space-y-2.5">
        {scenario.choices.map((c) => {
          const isPicked = picked === c.key;
          let cls = "border-slate-200 bg-white hover:border-brand/50";
          if (revealed) {
            if (c.correct) cls = "border-green-400 bg-green-50";
            else if (isPicked) cls = "border-rose-400 bg-rose-50";
            else cls = "border-slate-200 bg-white opacity-70";
          } else if (isPicked) {
            cls = "border-brand bg-blue-50";
          }
          return (
            <button
              key={c.key}
              onClick={() => !revealed && setPicked(c.key)}
              className={`block w-full rounded-xl border-2 px-4 py-3 text-left transition ${cls}`}
            >
              <span className="text-slate-700">{c.text}</span>
              {revealed && c.correct && <span className="ml-2">✅</span>}
              {revealed && isPicked && !c.correct && <span className="ml-2">❌</span>}
            </button>
          );
        })}
      </div>

      {!revealed ? (
        <button
          onClick={submit}
          disabled={!picked}
          className="rounded-xl bg-brand px-5 py-2.5 font-semibold text-white transition hover:bg-brand-dark disabled:opacity-40"
        >
          Chọn đáp án
        </button>
      ) : (
        <div className="space-y-3">
          <div
            className={`rounded-xl p-4 text-sm ${
              chosen?.correct ? "bg-green-50 text-green-800" : "bg-rose-50 text-rose-800"
            }`}
          >
            <p className="font-bold">{chosen?.correct ? "✅ Xử lý tốt!" : "⚠️ Cần điều chỉnh"}</p>
            <p className="mt-1">{chosen?.feedback}</p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-rose-200 bg-rose-50/60 p-4">
              <p className="text-xs font-bold uppercase text-rose-700">Sai ở đâu (thực tế)</p>
              <p className="mt-1 text-sm text-slate-700">{scenario.wrong}</p>
            </div>
            <div className="rounded-xl border border-green-200 bg-green-50/60 p-4">
              <p className="text-xs font-bold uppercase text-green-700">Hướng xử lý đúng</p>
              <p className="mt-1 text-sm text-slate-700">{scenario.right}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {scenario.criteria.map((c) => (
              <span
                key={c}
                className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600"
              >
                Tiêu chí: {c}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
