"use client";

import Link from "next/link";
import { SCENARIOS } from "@/content/scenarios";
import { useProgress } from "@/lib/progress";

const badgeStyle: Record<string, string> = {
  "Chưa đạt": "bg-rose-100 text-rose-700",
  "Đạt": "bg-green-100 text-green-700",
  "Cần cải thiện": "bg-amber-100 text-amber-700",
};

export default function PracticePage() {
  const { state } = useProgress();
  const done = Object.values(state.scenarios).filter(Boolean).length;

  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <h1 className="text-2xl font-bold text-slate-800">🎭 Thực hành tình huống</h1>
      <p className="mt-1 text-slate-500">
        {SCENARIOS.length} tình huống thực tế (đã ẩn danh). Chọn cách xử lý và nhận phản hồi
        theo nhóm kỹ năng cần rèn. Đã làm: {done}/{SCENARIOS.length}.
      </p>

      <div className="mt-6 space-y-3">
        {SCENARIOS.map((s, idx) => {
          const resolved = state.scenarios[s.slug];
          return (
            <Link
              key={s.slug}
              href={`/practice/${s.slug}`}
              className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:shadow-md"
            >
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-slate-100 font-bold text-slate-500">
                {idx + 1}
              </span>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-semibold text-slate-800">{s.service}</span>
                  <span className={`rounded px-2 py-0.5 text-xs font-semibold ${badgeStyle[s.badge]}`}>
                    {s.badge}
                  </span>
                </div>
                <p className="mt-0.5 line-clamp-1 text-sm text-slate-500">{s.context}</p>
              </div>
              {resolved && <span className="text-green-600">✓</span>}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
