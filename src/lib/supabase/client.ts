"use client";

import { createBrowserClient } from "@supabase/ssr";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Có cấu hình Supabase hay chưa (app vẫn học được khi chưa cấu hình).
export const supabaseEnabled = Boolean(url && key);

export function createClient() {
  if (!supabaseEnabled) return null;
  return createBrowserClient(url!, key!);
}
