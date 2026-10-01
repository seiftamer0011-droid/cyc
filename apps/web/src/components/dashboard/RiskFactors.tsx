import { riskFactors, riskMeta } from "@/lib/mock-data";

export default function RiskFactors() {
  return (
    <section className="rounded-2xl border border-line bg-navy/60 p-6">
      <h2 className="text-lg font-semibold">Why this score</h2>
      <ul className="mt-4 divide-y divide-line">
        {riskFactors.map((f) => (
          <li key={f.text} className="flex items-center justify-between gap-4 py-3 text-sm">
            <span className="flex items-center gap-3">
              <span aria-hidden>{riskMeta[f.severity].dot}</span>
              <span>{f.text}</span>
            </span>
            <span className={`font-semibold ${f.impact > 0 ? "text-risk-low" : "text-risk-high"}`}>{f.impact > 0 ? "+" : ""}{f.impact}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
