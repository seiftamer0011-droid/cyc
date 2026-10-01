"use client";
import { riskMeta, type Risk } from "@/lib/mock-data";
import { useLang } from "@/lib/i18n";

// Subtle badge: the colored dot carries the risk level, the text stays neutral.
export default function RiskBadge({ risk, className = "" }: { risk: Risk; className?: string }) {
  const { t } = useLang();
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-soft opacity-80 ${className}`}>
      <span aria-hidden>{riskMeta[risk].dot}</span>
      {t.risk[risk]}
    </span>
  );
}
