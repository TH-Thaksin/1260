"use client";

import { useCallback, useEffect, useState } from "react";
import { syncModule, syncQuiz, syncScenario, syncFinal } from "./sync";

// Lưu tiến độ học trên trình duyệt (localStorage). Không cần đăng nhập.
// Khi bật Supabase sau này có thể đồng bộ thêm.

const KEY = "emas-lms-progress-v1";

export type ProgressState = {
  modules: Record<string, boolean>; // slug -> hoàn thành
  quizzes: Record<string, { score: number; max: number }>;
  scenarios: Record<string, boolean>;
  games: Record<string, boolean>;
  final?: { score: number; max: number; passed: boolean };
  name?: string;
};

const empty: ProgressState = { modules: {}, quizzes: {}, scenarios: {}, games: {} };

function read(): ProgressState {
  if (typeof window === "undefined") return empty;
  try {
    const raw = window.localStorage.getItem(KEY);
    return raw ? { ...empty, ...JSON.parse(raw) } : empty;
  } catch {
    return empty;
  }
}

let listeners: (() => void)[] = [];
function notify() {
  listeners.forEach((l) => l());
}

function write(next: ProgressState) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(KEY, JSON.stringify(next));
  notify();
}

export function useProgress() {
  const [state, setState] = useState<ProgressState>(empty);

  useEffect(() => {
    const sync = () => setState(read());
    sync();
    listeners.push(sync);
    window.addEventListener("storage", sync);
    return () => {
      listeners = listeners.filter((l) => l !== sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  const completeModule = useCallback((slug: string) => {
    const s = read();
    s.modules[slug] = true;
    write(s);
    void syncModule(slug);
  }, []);

  const saveQuiz = useCallback((slug: string, score: number, max: number) => {
    const s = read();
    const prev = s.quizzes[slug];
    if (!prev || score >= prev.score) s.quizzes[slug] = { score, max };
    write(s);
    void syncQuiz(slug, score, max);
  }, []);

  const completeScenario = useCallback((slug: string, isCorrect = true) => {
    const s = read();
    s.scenarios[slug] = true;
    write(s);
    void syncScenario(slug, isCorrect);
  }, []);

  const completeGame = useCallback((slug: string) => {
    const s = read();
    s.games[slug] = true;
    write(s);
  }, []);

  const saveFinal = useCallback((score: number, max: number, passed: boolean) => {
    const s = read();
    s.final = { score, max, passed };
    write(s);
    void syncFinal(score, max, passed);
  }, []);

  const setName = useCallback((name: string) => {
    const s = read();
    s.name = name;
    write(s);
  }, []);

  const reset = useCallback(() => write({ ...empty }), []);

  return { state, completeModule, saveQuiz, completeScenario, completeGame, saveFinal, setName, reset };
}
