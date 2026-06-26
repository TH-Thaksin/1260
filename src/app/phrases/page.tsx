import { PHRASE_GROUPS } from "@/content/phrases";

export const metadata = {
  title: "Thư viện mẫu câu — Tổng đài 18001260",
};

export default function PhrasesPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      {/* Header */}
      <div className="rounded-2xl bg-gradient-to-br from-brand to-brand-dark p-7 text-white shadow-lg">
        <p className="text-sm font-medium uppercase tracking-wide text-blue-100">
          Tài liệu tham khảo
        </p>
        <h1 className="mt-1 text-2xl font-bold sm:text-3xl">
          📋 Thư viện mẫu câu giao tiếp
        </h1>
        <p className="mt-2 text-blue-100">
          {PHRASE_GROUPS.length} nhóm tình huống · Tổng đài 18001260 · T6.2026
        </p>
        <p className="mt-3 text-sm text-blue-200">
          Bấm vào từng nhóm để xem mẫu câu. Các ô <span className="rounded bg-white/20 px-1 font-mono">[xxx]</span> là chỗ điền thông tin thực tế.
        </p>
      </div>

      {/* Accordion groups */}
      <div className="mt-6 space-y-2">
        {PHRASE_GROUPS.map((group, idx) => (
          <details
            key={group.id}
            className="group rounded-2xl border border-slate-200 bg-white shadow-sm open:shadow-md"
          >
            <summary className="flex cursor-pointer select-none list-none items-center gap-3 p-4 sm:p-5">
              <span className="text-xl sm:text-2xl">{group.icon}</span>
              <span className="flex-1 font-semibold text-slate-800">
                <span className="mr-2 text-xs font-normal text-slate-400">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                {group.title}
              </span>
              <span className="shrink-0 text-slate-400 transition-transform duration-200 group-open:rotate-180">
                ▾
              </span>
            </summary>

            <div className="border-t border-slate-100 px-4 pb-5 pt-4 sm:px-5">
              <div className="space-y-3">
                {group.phrases.map((entry, i) => (
                  <div key={i}>
                    {entry.context && (
                      <p className="mb-1 text-xs font-medium text-slate-400 uppercase tracking-wide">
                        {entry.context}
                      </p>
                    )}
                    <div className="rounded-xl border-l-4 border-brand bg-blue-50 px-4 py-3 text-sm leading-relaxed text-slate-700">
                      &ldquo;{entry.script}&rdquo;
                    </div>
                  </div>
                ))}
              </div>

              {group.notes && group.notes.length > 0 && (
                <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3">
                  <p className="mb-1.5 text-xs font-bold uppercase tracking-wide text-amber-700">
                    Lưu ý nghiệp vụ
                  </p>
                  <ul className="space-y-1">
                    {group.notes.map((note, i) => (
                      <li key={i} className="flex gap-2 text-sm text-amber-800">
                        <span className="mt-0.5 shrink-0 text-amber-500">▸</span>
                        {note}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </details>
        ))}
      </div>

      <p className="mt-8 text-center text-xs text-slate-400">
        Tài liệu nội bộ · Không phát tán ra ngoài · Nội dung không chứa thông tin cá nhân
      </p>
    </div>
  );
}
