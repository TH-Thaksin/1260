"use client";

import Link from "next/link";
import type { Scenario } from "@/content/types";
import ScenarioPlayer from "@/components/ScenarioPlayer";
import { useProgress } from "@/lib/progress";

export default function ScenarioRunner({
  scenario,
  nextSlug,
}: {
  scenario: Scenario;
  nextSlug?: string;
}) {
  const { completeScenario } = useProgress();
  return (
    <div className="mx-auto max-w-2xl px-4 py-8">
      <Link href="/practice" className="text-sm text-brand hover:underline">
        ← Tất cả tình huống
      </Link>
      <h1 className="mb-5 mt-3 text-2xl font-bold text-slate-800">🎭 Tình huống thực hành</h1>
      <ScenarioPlayer
        scenario={scenario}
        onResolve={(ok) => completeScenario(scenario.slug, ok)}
      />
      <div className="mt-6 flex justify-end">
        {nextSlug ? (
          <Link
            href={`/practice/${nextSlug}`}
            className="rounded-xl bg-brand px-5 py-2.5 font-semibold text-white hover:bg-brand-dark"
          >
            Tình huống tiếp →
          </Link>
        ) : (
          <Link
            href="/final"
            className="rounded-xl bg-brand px-5 py-2.5 font-semibold text-white hover:bg-brand-dark"
          >
            Làm kiểm tra cuối khóa →
          </Link>
        )}
      </div>
    </div>
  );
}
