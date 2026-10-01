import Link from "next/link";
import ScoreRing from "@/components/ui/ScoreRing";
import { riskFactors } from "@/lib/mock-data";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_75%_30%,rgba(34,229,255,0.10),transparent_70%)]" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 py-16 md:grid-cols-[1.1fr_0.9fr] md:py-28">
        <div>
          <h1 className="text-5xl font-bold leading-[1.02] tracking-tight sm:text-7xl">
            Know who you&apos;re dealing with.
          </h1>
          <p className="mt-6 max-w-md text-lg text-mist">
            CYC scores the reliability of businesses and customers, and shows exactly why, before money or trust changes hands.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="/dashboard" className="rounded-lg bg-cyan px-6 py-3 font-semibold text-ink hover:brightness-110">Check a profile</Link>
            <a href="#how" className="rounded-lg border border-line px-6 py-3 font-semibold hover:border-cyan">See how scoring works</a>
          </div>
          <p className="mt-6 text-sm text-mist">Connect. Verify. Trust.</p>
        </div>

        {/* The memorable element: a score with its reasons, not just a number */}
        <div className="rounded-2xl border border-line bg-navy/80 p-6 shadow-[0_0_80px_-30px_rgba(34,229,255,0.45)]">
          <div className="flex items-center gap-6">
            <ScoreRing score={72} size={130} />
            <div>
              <p className="font-semibold">Northwind Logistics</p>
              <p className="text-sm text-mist">Company profile</p>
            </div>
          </div>
          <ul className="mt-6 space-y-3 border-t border-line pt-5 text-sm">
            {riskFactors.slice(0, 3).map((f) => (
              <li key={f.text} className="flex items-start justify-between gap-4">
                <span className="text-mist">{f.text}</span>
                <span className={f.impact > 0 ? "text-risk-low" : "text-risk-high"}>{f.impact > 0 ? "+" : ""}{f.impact}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
