import type { Metadata } from "next";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Đào tạo CSKH B2B · Đài 18001260",
  description:
    "App đào tạo nghiệp vụ Chăm sóc Khách hàng B2B — kỹ năng tiếp nhận, tư vấn, giao tiếp; tình huống thực hành, Flashcard, Quiz, Game.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <footer className="no-print border-t border-slate-200 bg-white py-6 text-center text-sm text-slate-500">
          App đào tạo nội bộ · Đài 18001260 · Chuẩn hóa Kỹ năng &amp; Hỗ trợ Khách hàng B2B
        </footer>
      </body>
    </html>
  );
}
