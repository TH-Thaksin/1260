"use client";

import Link from "next/link";
import { MODULES } from "@/content/modules";
import { useProgress } from "@/lib/progress";

export default function ModuleListPage() {
  const { state } = useProgress();
  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <h1 className="text-2xl font-bold text-slate-800">📘 Bài học</h1>
      <p className="mt-1 text-slate-500">9 module theo lộ trình. Học tuần tự để đạt hiệu quả tốt nhất.</p>
      <div className="mt-6 space-y-3">
        {MODULES.map((m) => {
          const done = state.modules[m.slug];
          return (
            <Link
              key={m.slug}
              href={`/module/${m.slug}`}
              className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:shadow-md"
            >
              <span className="text-3xl">{m.icon}</span>
              <div className="flex-1">
                <h2 className="font-bold text-slate-800">{m.title}</h2>
                <p className="text-sm text-slate-500">{m.summary}</p>
              </div>
              {done ? (
                <span className="rounded-full bg-green-100 px-2.5 py-1 text-xs font-semibold text-green-700">
                  ✓
                </span>
              ) : (
                <span className="text-xs text-slate-400">{m.minutes}′</span>
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
