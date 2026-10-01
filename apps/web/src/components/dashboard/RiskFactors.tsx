"use client";
import { riskMeta } from "@/lib/mock-data";
import { useLang } from "@/lib/i18n";

export default function RiskFactors() {
  const { t } = useLang();
  return (
    <section className="rounded-2xl border border-line bg-navy/60 p-6">
      <h2 className="text-lg font-semibold">{t.dash.whyTitle}</h2>
      <ul className="mt-4 divide-y divide-line">
        {t.dash.factors.map((f) => (
          <li key={f.text} className="flex items-center justify-between gap-4 py-3 text-[15px] leading-snug">
            <span className="flex items-center gap-3">
              <span aria-hidden>{riskMeta[f.severity].dot}</span>
              <span className="text-soft">{f.text}</span>
            </span>
            <span dir="ltr" className={`shrink-0 rounded-md px-2 py-0.5 text-sm font-bold ${f.impact > 0 ? "bg-risk-low/15 text-[#5ff5bd]" : "bg-risk-high/15 text-[#ffb56b]"}`}>
              {f.impact > 0 ? "+" : ""}{f.impact}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
