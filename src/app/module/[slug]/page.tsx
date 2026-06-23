import { notFound } from "next/navigation";
import { MODULES, moduleBySlug } from "@/content/modules";
import ModuleView from "./ModuleView";

export function generateStaticParams() {
  return MODULES.map((m) => ({ slug: m.slug }));
}

export default async function ModulePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const mod = moduleBySlug(slug);
  if (!mod) notFound();
  const idx = MODULES.findIndex((m) => m.slug === slug);
  const next = MODULES[idx + 1];
  return <ModuleView mod={mod} nextSlug={next?.slug} nextTitle={next?.title} />;
}
