import type { Block } from "@/content/types";

const calloutStyle: Record<string, string> = {
  info: "border-blue-200 bg-blue-50 text-blue-900",
  warn: "border-amber-200 bg-amber-50 text-amber-900",
  good: "border-green-200 bg-green-50 text-green-900",
  bad: "border-rose-200 bg-rose-50 text-rose-900",
};
const calloutIcon: Record<string, string> = {
  info: "ℹ️",
  warn: "⚠️",
  good: "✅",
  bad: "⛔",
};

export default function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <div className="space-y-5">
      {blocks.map((b, i) => {
        switch (b.kind) {
          case "h":
            return (
              <h3 key={i} className="mt-2 text-lg font-bold text-slate-800">
                {b.text}
              </h3>
            );
          case "p":
            return (
              <p key={i} className="leading-relaxed text-slate-700">
                {b.text}
              </p>
            );
          case "list":
            return b.ordered ? (
              <ol key={i} className="ml-5 list-decimal space-y-1.5 text-slate-700">
                {b.items.map((it, j) => (
                  <li key={j} className="leading-relaxed">
                    {it}
                  </li>
                ))}
              </ol>
            ) : (
              <ul key={i} className="ml-5 list-disc space-y-1.5 text-slate-700">
                {b.items.map((it, j) => (
                  <li key={j} className="leading-relaxed">
                    {it}
                  </li>
                ))}
              </ul>
            );
          case "callout":
            return (
              <div
                key={i}
                className={`rounded-xl border p-4 ${calloutStyle[b.tone]}`}
              >
                <div className="flex items-start gap-2">
                  <span className="text-lg">{calloutIcon[b.tone]}</span>
                  <div>
                    {b.title && <p className="font-bold">{b.title}</p>}
                    <p className="mt-0.5 text-sm leading-relaxed">{b.text}</p>
                  </div>
                </div>
              </div>
            );
          case "formula":
            return (
              <div
                key={i}
                className="overflow-hidden rounded-xl border border-brand/30 bg-white shadow-sm"
              >
                <div className="bg-brand px-4 py-2.5 text-white">
                  <p className="text-lg font-extrabold tracking-wide">{b.name}</p>
                  {b.tagline && <p className="text-xs text-blue-100">{b.tagline}</p>}
                </div>
                <ul className="divide-y divide-slate-100">
                  {b.steps.map((s, j) => (
                    <li key={j} className="flex gap-3 px-4 py-2.5">
                      <span className="min-w-[7.5rem] font-semibold text-brand">
                        {s.k}
                      </span>
                      <span className="text-sm text-slate-700">{s.v}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          case "sample":
            return (
              <div
                key={i}
                className="rounded-xl border border-indigo-200 bg-indigo-50/60 p-4"
              >
                <p className="font-bold text-indigo-900">🗣️ {b.title}</p>
                <div className="mt-2 space-y-1.5">
                  {b.lines.map((l, j) => (
                    <p
                      key={j}
                      className="rounded-lg bg-white px-3 py-2 text-sm italic text-slate-700 shadow-sm"
                    >
                      {l}
                    </p>
                  ))}
                </div>
                {b.note && (
                  <p className="mt-2 text-xs text-indigo-700">
                    <span className="font-semibold">Lưu ý:</span> {b.note}
                  </p>
                )}
              </div>
            );
          case "table":
            return (
              <div key={i} className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-slate-100 text-left text-slate-700">
                      {b.head.map((h, j) => (
                        <th key={j} className="px-3 py-2 font-semibold">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {b.rows.map((r, j) => (
                      <tr key={j} className="border-t border-slate-100 align-top">
                        {r.map((c, k) => (
                          <td key={k} className="px-3 py-2 text-slate-700">
                            {c}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
