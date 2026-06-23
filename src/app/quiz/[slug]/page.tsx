import { notFound } from "next/navigation";
import { QUIZZES, quizBySlug } from "@/content/quizzes";
import QuizRunner from "./QuizRunner";

export function generateStaticParams() {
  return QUIZZES.map((q) => ({ slug: q.slug }));
}

export default async function QuizPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const quiz = quizBySlug(slug);
  if (!quiz) notFound();
  return <QuizRunner quiz={quiz} />;
}
