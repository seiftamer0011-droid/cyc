import { riskFromScore, riskMeta } from "@/lib/mock-data";

export default function ScoreRing({ score, size = 220 }: { score: number; size?: number }) {
  const r = 84, circ = 2 * Math.PI * r;
  const risk = riskFromScore(score);
  return (
    <div className="relative shrink-0" style={{ width: size, height: size }} role="img" aria-label={`Trust score ${score} out of 100, ${riskMeta[risk].label}`}>
      <svg viewBox="0 0 200 200" className="-rotate-90">
        <circle cx="100" cy="100" r={r} fill="none" stroke="var(--color-line)" strokeWidth="10" />
        <circle
          cx="100" cy="100" r={r} fill="none" stroke="var(--color-cyan)" strokeWidth="10" strokeLinecap="round"
          strokeDasharray={circ} strokeDashoffset={circ * (1 - score / 100)}
          className="ring-draw" style={{ ["--circ" as string]: circ }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-bold tracking-tight" style={{ fontSize: size * 0.28 }}>{score}</span>
        <span className={`mt-1 text-xs sm:text-sm ${riskMeta[risk].text}`}>{riskMeta[risk].dot} {riskMeta[risk].label}</span>
      </div>
    </div>
  );
}
