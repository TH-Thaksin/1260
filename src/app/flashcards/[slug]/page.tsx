import { notFound } from "next/navigation";
import { FLASHDECKS, deckBySlug } from "@/content/flashcards";
import DeckRunner from "./DeckRunner";

export function generateStaticParams() {
  return FLASHDECKS.map((d) => ({ slug: d.slug }));
}

export default async function DeckPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const deck = deckBySlug(slug);
  if (!deck) notFound();
  return <DeckRunner deck={deck} />;
}
