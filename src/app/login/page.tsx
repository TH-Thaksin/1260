"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { createClient, supabaseEnabled } from "@/lib/supabase/client";

export default function LoginPage() {
  const router = useRouter();
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setErr(null);
    const sb = createClient();
    if (!sb) {
      setErr("Chưa cấu hình Supabase. App vẫn học được mà không cần đăng nhập.");
      return;
    }
    setLoading(true);
    try {
      if (mode === "signup") {
        const { error } = await sb.auth.signUp({
          email,
          password,
          options: { data: { full_name: fullName } },
        });
        if (error) throw error;
      } else {
        const { error } = await sb.auth.signInWithPassword({ email, password });
        if (error) throw error;
      }
      router.push("/");
      router.refresh();
    } catch (e) {
      setErr(e instanceof Error ? e.message : "Có lỗi xảy ra");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto max-w-md px-4 py-12">
      <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
        <h1 className="text-2xl font-bold text-slate-800">
          {mode === "login" ? "Đăng nhập" : "Tạo tài khoản học viên"}
        </h1>
        <p className="mt-1 text-sm text-slate-500">
          Đăng nhập để giảng viên theo dõi tiến độ &amp; điểm của bạn. (Không bắt buộc để học.)
        </p>

        {!supabaseEnabled && (
          <div className="mt-4 rounded-xl bg-amber-50 p-3 text-sm text-amber-800">
            Chưa cấu hình Supabase trên bản này — bạn vẫn học bình thường, tiến độ lưu trên máy.
          </div>
        )}

        <form onSubmit={submit} className="mt-5 space-y-3">
          {mode === "signup" && (
            <input
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Họ và tên"
              className="w-full rounded-xl border border-slate-300 px-4 py-2.5 outline-none focus:border-brand"
            />
          )}
          <input
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full rounded-xl border border-slate-300 px-4 py-2.5 outline-none focus:border-brand"
          />
          <input
            required
            type="password"
            minLength={6}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Mật khẩu (tối thiểu 6 ký tự)"
            className="w-full rounded-xl border border-slate-300 px-4 py-2.5 outline-none focus:border-brand"
          />

          {err && <p className="text-sm text-rose-600">{err}</p>}

          <button
            disabled={loading}
            className="w-full rounded-xl bg-brand px-5 py-3 font-semibold text-white hover:bg-brand-dark disabled:opacity-50"
          >
            {loading ? "Đang xử lý…" : mode === "login" ? "Đăng nhập" : "Đăng ký"}
          </button>
        </form>

        <button
          onClick={() => {
            setMode(mode === "login" ? "signup" : "login");
            setErr(null);
          }}
          className="mt-4 w-full text-center text-sm text-brand hover:underline"
        >
          {mode === "login" ? "Chưa có tài khoản? Đăng ký" : "Đã có tài khoản? Đăng nhập"}
        </button>
      </div>

      <p className="mt-6 text-center text-sm">
        <Link href="/" className="text-slate-500 hover:underline">
          ← Tiếp tục học không cần đăng nhập
        </Link>
      </p>
    </div>
  );
}
