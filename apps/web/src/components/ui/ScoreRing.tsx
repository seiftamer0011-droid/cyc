"use client";
import { riskFromScore } from "@/lib/mock-data";
import { useLang } from "@/lib/i18n";

// The ring shows only the score. Risk level lives in <RiskBadge />.
export default function ScoreRing({ score, size = 220 }: { score: number; size?: number }) {
  const { t } = useLang();
  const r = 84, circ = 2 * Math.PI * r;
  return (
    <div className="relative shrink-0" style={{ width: size, height: size }} role="img" aria-label={`${t.ui.trustScore}: ${score}/100, ${t.risk[riskFromScore(score)]}`}>
      <svg viewBox="0 0 200 200" className="-rotate-90">
        <circle cx="100" cy="100" r={r} fill="none" stroke="var(--color-line)" strokeWidth="10" />
        <circle
          cx="100" cy="100" r={r} fill="none" stroke="var(--color-cyan)" strokeWidth="10" strokeLinecap="round"
          strokeDasharray={circ} strokeDashoffset={circ * (1 - score / 100)}
          className="ring-draw" style={{ ["--circ" as string]: circ }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span dir="ltr" className="font-bold tracking-tight" style={{ fontSize: size * 0.3 }}>{score}</span>
      </div>
    </div>
  );
}
