"use client";

export type Row = {
  name: string;
  modulePct: number;
  quizAvg: number | null;
  scenario: string;
  final: string;
  passed: boolean | null;
};

export default function AdminTable({ rows }: { rows: Row[] }) {
  function exportCsv() {
    const head = ["Học viên", "% Module", "Điểm quiz TB", "Tình huống đúng", "Cuối khóa", "Đạt"];
    const lines = rows.map((r) =>
      [
        r.name,
        `${r.modulePct}%`,
        r.quizAvg == null ? "" : `${r.quizAvg}%`,
        r.scenario,
        r.final,
        r.passed == null ? "" : r.passed ? "Đạt" : "Chưa đạt",
      ]
        .map((c) => `"${String(c).replace(/"/g, '""')}"`)
        .join(",")
    );
    const csv = "﻿" + [head.join(","), ...lines].join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "ket-qua-hoc-vien.csv";
    a.click();
    URL.revokeObjectURL(url);
  }

  if (rows.length === 0) {
    return (
      <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-8 text-center text-slate-500 shadow-sm">
        Chưa có học viên nào đăng nhập &amp; học. Khi ĐTV đăng ký tài khoản và học, kết quả sẽ
        hiển thị tại đây.
      </div>
    );
  }

  return (
    <div className="mt-4">
      <div className="mb-3 flex justify-end">
        <button
          onClick={exportCsv}
          className="rounded-xl bg-brand px-4 py-2 text-sm font-semibold text-white hover:bg-brand-dark"
        >
          ⬇ Xuất CSV
        </button>
      </div>
      <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50 text-left text-slate-600">
              <th className="px-4 py-3 font-semibold">Học viên</th>
              <th className="px-4 py-3 font-semibold">Tiến độ module</th>
              <th className="px-4 py-3 font-semibold">Điểm quiz TB</th>
              <th className="px-4 py-3 font-semibold">Tình huống</th>
              <th className="px-4 py-3 font-semibold">Cuối khóa</th>
              <th className="px-4 py-3 font-semibold">Kết quả</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} className="border-b border-slate-100 last:border-0">
                <td className="px-4 py-3 font-medium text-slate-800">{r.name}</td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-24 overflow-hidden rounded-full bg-slate-100">
                      <div
                        className="h-full rounded-full bg-brand"
                        style={{ width: `${r.modulePct}%` }}
                      />
                    </div>
                    <span className="text-xs text-slate-500">{r.modulePct}%</span>
                  </div>
                </td>
                <td className="px-4 py-3 text-slate-700">
                  {r.quizAvg == null ? "—" : `${r.quizAvg}%`}
                </td>
                <td className="px-4 py-3 text-slate-700">{r.scenario}</td>
                <td className="px-4 py-3 text-slate-700">{r.final}</td>
                <td className="px-4 py-3">
                  {r.passed == null ? (
                    <span className="text-slate-400">—</span>
                  ) : r.passed ? (
                    <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs font-semibold text-green-700">
                      Đạt
                    </span>
                  ) : (
                    <span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs font-semibold text-amber-700">
                      Chưa đạt
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
