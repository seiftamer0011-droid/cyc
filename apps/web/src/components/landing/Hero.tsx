"use client";
import Link from "next/link";
import ScoreRing from "@/components/ui/ScoreRing";
import RiskBadge from "@/components/ui/RiskBadge";
import { useLang } from "@/lib/i18n";

export default function Hero() {
  const { t } = useLang();
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_75%_30%,rgba(34,229,255,0.10),transparent_70%)]" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-16 px-5 pb-20 pt-24 md:grid-cols-[1.1fr_0.9fr] md:pb-32 md:pt-40">
        <div>
          <h1 className="text-5xl font-bold leading-[1.08] tracking-tight sm:text-7xl sm:leading-[1.05]">{t.hero.title}</h1>
          <p className="mt-8 max-w-md text-lg leading-relaxed text-soft">{t.hero.sub}</p>
          <div className="mt-12 flex flex-wrap gap-3">
            <Link
              href="/dashboard"
              className="rounded-lg bg-cyan px-6 py-3 font-semibold text-ink transition hover:bg-[#6cf0ff] hover:shadow-[0_0_28px_rgba(34,229,255,0.5)] active:scale-[0.97] active:bg-[#17c2da]"
            >
              {t.hero.cta1}
            </Link>
            <a
              href="#how"
              className="rounded-lg border border-line px-6 py-3 font-semibold transition hover:border-cyan hover:bg-cyan/10 hover:text-cyan active:scale-[0.97] active:bg-cyan/20"
            >
              {t.hero.cta2}
            </a>
          </div>
          <p className="mt-8 text-sm text-mist">{t.hero.tagline}</p>
        </div>

        <div className="relative rounded-2xl border border-line bg-navy/80 p-6 shadow-[0_0_80px_-30px_rgba(34,229,255,0.45)]">
          <RiskBadge risk="moderate" className="absolute end-4 top-4" />
          <div className="flex items-center gap-6">
            <ScoreRing score={72} size={130} />
            <div>
              <p className="font-semibold">Northwind Logistics</p>
              <p className="text-sm text-soft">{t.hero.cardType}</p>
            </div>
          </div>
          <ul className="mt-6 space-y-4 border-t border-line pt-5">
            {t.dash.factors.slice(0, 3).map((f) => (
              <li key={f.text} className="flex items-start justify-between gap-4 text-[15px] leading-snug">
                <span className="text-soft">{f.text}</span>
                <span
                  dir="ltr"
                  className={`shrink-0 rounded-md px-2 py-0.5 text-sm font-bold ${
                    f.impact > 0 ? "bg-risk-low/15 text-[#5ff5bd]" : "bg-risk-high/15 text-[#ffb56b]"
                  }`}
                >
                  {f.impact > 0 ? "+" : ""}{f.impact}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
