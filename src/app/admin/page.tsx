import Link from "next/link";
import { createClient, supabaseEnabled } from "@/lib/supabase/server";
import { MODULES } from "@/content/modules";
import AdminTable, { type Row } from "./AdminTable";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  if (!supabaseEnabled) {
    return (
      <Shell>
        <p className="text-slate-600">Chưa cấu hình Supabase nên chưa có dashboard.</p>
      </Shell>
    );
  }

  const sb = await createClient();
  if (!sb) return <Shell><p>Lỗi cấu hình.</p></Shell>;

  const {
    data: { user },
  } = await sb.auth.getUser();

  if (!user) {
    return (
      <Shell>
        <p className="text-slate-600">
          Bạn cần{" "}
          <Link href="/login" className="font-semibold text-brand hover:underline">
            đăng nhập
          </Link>{" "}
          bằng tài khoản giảng viên.
        </p>
      </Shell>
    );
  }

  const { data: me } = await sb.from("lms_profiles").select("role").eq("id", user.id).single();
  if (me?.role !== "instructor") {
    return (
      <Shell>
        <p className="text-slate-600">
          Tài khoản này không phải giảng viên. Liên hệ quản trị để được cấp quyền.
        </p>
      </Shell>
    );
  }

  // Giảng viên đọc được tất cả nhờ RLS.
  const [{ data: profiles }, { data: progress }, { data: quizzes }, { data: scenarios }, { data: finals }] =
    await Promise.all([
      sb.from("lms_profiles").select("id, full_name, role, created_at"),
      sb.from("lms_progress").select("user_id, module_slug"),
      sb.from("lms_quiz_attempts").select("user_id, quiz_slug, score, max_score"),
      sb.from("lms_scenario_attempts").select("user_id, is_correct"),
      sb.from("lms_final_assessments").select("user_id, score, max_score, passed, created_at"),
    ]);

  const totalModules = MODULES.length;

  const rows: Row[] = (profiles ?? [])
    .filter((p) => p.role === "trainee")
    .map((p) => {
      const mods = new Set((progress ?? []).filter((r) => r.user_id === p.id).map((r) => r.module_slug));
      const myQuiz = (quizzes ?? []).filter((r) => r.user_id === p.id);
      const quizAvg =
        myQuiz.length > 0
          ? Math.round(
              (myQuiz.reduce((a, r) => a + r.score / r.max_score, 0) / myQuiz.length) * 100
            )
          : null;
      const myScen = (scenarios ?? []).filter((r) => r.user_id === p.id);
      const scenCorrect = myScen.filter((r) => r.is_correct).length;
      const myFinals = (finals ?? [])
        .filter((r) => r.user_id === p.id)
        .sort((a, b) => (a.created_at < b.created_at ? 1 : -1));
      const lastFinal = myFinals[0];

      return {
        name: p.full_name ?? "(chưa đặt tên)",
        modulePct: Math.round((mods.size / totalModules) * 100),
        quizAvg,
        scenario: myScen.length ? `${scenCorrect}/${myScen.length}` : "—",
        final: lastFinal ? `${lastFinal.score}/${lastFinal.max_score}` : "—",
        passed: lastFinal ? lastFinal.passed : null,
      };
    });

  return (
    <Shell>
      <p className="text-slate-500">
        {rows.length} học viên · {totalModules} module. Dữ liệu cập nhật theo thời gian thực.
      </p>
      <AdminTable rows={rows} />
    </Shell>
  );
}

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-slate-800">📊 Dashboard giảng viên</h1>
        <Link href="/" className="text-sm text-brand hover:underline">
          ← Trang chủ
        </Link>
      </div>
      <div className="mt-4">{children}</div>
    </div>
  );
}
