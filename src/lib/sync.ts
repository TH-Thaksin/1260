"use client";

import { createClient } from "./supabase/client";

// Đồng bộ kết quả lên Supabase khi người học ĐÃ đăng nhập.
// Nếu chưa đăng nhập hoặc chưa cấu hình Supabase → bỏ qua (app vẫn chạy bằng localStorage).

type SB = NonNullable<ReturnType<typeof createClient>>;

async function withUser(fn: (sb: SB, userId: string) => Promise<unknown>) {
  const sb = createClient();
  if (!sb) return;
  const { data } = await sb.auth.getUser();
  if (!data.user) return;
  try {
    await fn(sb, data.user.id);
  } catch {
    // im lặng — không chặn trải nghiệm học
  }
}

export function syncModule(slug: string) {
  return withUser(async (sb, user_id) => {
    await sb.from("lms_progress").upsert(
      {
        user_id,
        module_slug: slug,
        status: "completed",
        completed_at: new Date().toISOString(),
      },
      { onConflict: "user_id,module_slug" }
    );
  });
}

export function syncQuiz(slug: string, score: number, max: number) {
  return withUser(async (sb, user_id) => {
    await sb.from("lms_quiz_attempts").insert({
      user_id,
      quiz_slug: slug,
      score,
      max_score: max,
    });
  });
}

export function syncScenario(slug: string, isCorrect: boolean) {
  return withUser(async (sb, user_id) => {
    await sb.from("lms_scenario_attempts").insert({
      user_id,
      scenario_slug: slug,
      is_correct: isCorrect,
    });
  });
}

export function syncFinal(score: number, max: number, passed: boolean) {
  return withUser(async (sb, user_id) => {
    await sb.from("lms_final_assessments").insert({
      user_id,
      score,
      max_score: max,
      passed,
    });
  });
}
