"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { createClient, supabaseEnabled } from "@/lib/supabase/client";

export default function AuthButton() {
  const router = useRouter();
  const [email, setEmail] = useState<string | null>(null);
  const [isInstructor, setIsInstructor] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const sb = createClient();
    if (!sb) {
      setReady(true);
      return;
    }
    let active = true;

    async function load() {
      const { data } = await sb!.auth.getUser();
      if (!active) return;
      if (data.user) {
        setEmail(data.user.email ?? "");
        const { data: prof } = await sb!
          .from("lms_profiles")
          .select("role")
          .eq("id", data.user.id)
          .single();
        if (active) setIsInstructor(prof?.role === "instructor");
      } else {
        setEmail(null);
        setIsInstructor(false);
      }
      setReady(true);
    }
    load();

    const { data: sub } = sb.auth.onAuthStateChange(() => load());
    return () => {
      active = false;
      sub.subscription.unsubscribe();
    };
  }, []);

  async function signOut() {
    const sb = createClient();
    await sb?.auth.signOut();
    router.push("/");
    router.refresh();
  }

  if (!supabaseEnabled || !ready) return null;

  if (!email) {
    return (
      <Link
        href="/login"
        className="rounded-lg border border-brand px-3 py-1.5 text-sm font-semibold text-brand hover:bg-blue-50"
      >
        Đăng nhập
      </Link>
    );
  }

  return (
    <div className="flex items-center gap-2">
      {isInstructor && (
        <Link
          href="/admin"
          className="rounded-lg bg-amber-100 px-3 py-1.5 text-sm font-semibold text-amber-800 hover:bg-amber-200"
        >
          📊 Dashboard
        </Link>
      )}
      <button
        onClick={signOut}
        className="rounded-lg border border-slate-300 px-3 py-1.5 text-sm font-medium text-slate-600 hover:bg-slate-100"
        title={email}
      >
        Đăng xuất
      </button>
    </div>
  );
}
