"use client";
import Link from "next/link";
import ScoreRing from "@/components/ui/ScoreRing";
import RiskBadge from "@/components/ui/RiskBadge";
import LangSwitch from "@/components/ui/LangSwitch";
import RiskFactors from "@/components/dashboard/RiskFactors";
import FeedbackList from "@/components/dashboard/FeedbackList";
import DisputeTracker from "@/components/dashboard/DisputeTracker";
import { profile, riskFromScore } from "@/lib/mock-data";
import { useLang } from "@/lib/i18n";

export default function Dashboard() {
  const { t } = useLang();
  const [before, after] = t.dash.up.split("{n}");
  return (
    <main className="mx-auto max-w-6xl px-5 py-8">
      <header className="flex items-center justify-between gap-3">
        <Link href="/" className="text-xl font-bold">CYC<span className="text-cyan">.</span></Link>
        <div className="flex flex-1 items-center justify-end gap-3">
          <input
            type="search" placeholder={t.dash.search} aria-label={t.dash.search}
            className="w-full max-w-xs rounded-lg border border-line bg-navy px-4 py-2 text-sm placeholder:text-mist"
          />
          <LangSwitch />
        </div>
      </header>

      <section className="mt-8 flex flex-col items-center gap-8 rounded-2xl border border-line bg-navy/60 p-8 sm:flex-row">
        <ScoreRing score={profile.score} />
        <div className="text-center sm:text-start">
          <div className="flex items-center justify-center gap-3 sm:justify-start">
            <p className="text-sm text-soft">{t.hero.cardType}</p>
            <RiskBadge risk={riskFromScore(profile.score)} />
          </div>
          <h1 className="mt-1 text-4xl font-bold tracking-tight">{profile.name}</h1>
          <p className="mt-3 text-soft">
            {before}<span className="font-semibold text-risk-low">{profile.delta} {t.dash.points}</span>{after}
          </p>
          <button className="mt-5 rounded-lg bg-cyan px-5 py-2.5 text-sm font-semibold text-ink transition hover:bg-[#6cf0ff] hover:shadow-[0_0_24px_rgba(34,229,255,0.45)] active:scale-[0.97] active:bg-[#17c2da]">
            {t.dash.report}
          </button>
        </div>
      </section>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <RiskFactors />
        <FeedbackList />
      </div>
      <div className="mt-6"><DisputeTracker /></div>
    </main>
  );
}
