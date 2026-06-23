import { notFound } from "next/navigation";
import { SCENARIOS, scenarioBySlug } from "@/content/scenarios";
import ScenarioRunner from "./ScenarioRunner";

export function generateStaticParams() {
  return SCENARIOS.map((s) => ({ slug: s.slug }));
}

export default async function PracticeDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const scenario = scenarioBySlug(slug);
  if (!scenario) notFound();
  const idx = SCENARIOS.findIndex((s) => s.slug === slug);
  const next = SCENARIOS[idx + 1];
  return <ScenarioRunner scenario={scenario} nextSlug={next?.slug} />;
}
