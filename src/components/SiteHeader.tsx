"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import AuthButton from "./AuthButton";

const NAV = [
  { href: "/", label: "Trang chủ" },
  { href: "/module", label: "Bài học" },
  { href: "/flashcards", label: "Flashcard" },
  { href: "/quiz", label: "Quiz" },
  { href: "/practice", label: "Thực hành" },
  { href: "/game", label: "Game" },
  { href: "/phrases", label: "Mẫu câu" },
  { href: "/final", label: "Kiểm tra cuối" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const active = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="no-print sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2 font-bold text-brand">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand text-white">
            1260
          </span>
          <span className="hidden sm:block">Đào tạo CSKH B2B</span>
        </Link>

        <nav className="hidden gap-1 md:flex">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className={`rounded-lg px-3 py-1.5 text-sm font-medium transition ${
                active(n.href)
                  ? "bg-brand text-white"
                  : "text-slate-600 hover:bg-slate-100"
              }`}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <AuthButton />
          <button
            className="rounded-lg border border-slate-300 p-2 md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            <span className="block h-0.5 w-5 bg-slate-700" />
            <span className="my-1 block h-0.5 w-5 bg-slate-700" />
            <span className="block h-0.5 w-5 bg-slate-700" />
          </button>
        </div>
      </div>

      {open && (
        <nav className="grid gap-1 border-t border-slate-100 px-4 py-2 md:hidden">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className={`rounded-lg px-3 py-2 text-sm font-medium ${
                active(n.href) ? "bg-brand text-white" : "text-slate-700"
              }`}
            >
              {n.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
