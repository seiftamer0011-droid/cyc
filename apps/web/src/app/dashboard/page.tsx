import Link from "next/link";
import ScoreRing from "@/components/ui/ScoreRing";
import RiskFactors from "@/components/dashboard/RiskFactors";
import FeedbackList from "@/components/dashboard/FeedbackList";
import DisputeTracker from "@/components/dashboard/DisputeTracker";
import { profile } from "@/lib/mock-data";

export default function Dashboard() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-8">
      <header className="flex items-center justify-between gap-4">
        <Link href="/" className="text-xl font-bold">CYC<span className="text-cyan">.</span></Link>
        <input
          type="search" placeholder="Search a company or customer" aria-label="Search profiles"
          className="w-full max-w-xs rounded-lg border border-line bg-navy px-4 py-2 text-sm placeholder:text-mist"
        />
      </header>

      <section className="mt-8 flex flex-col items-center gap-8 rounded-2xl border border-line bg-navy/60 p-8 sm:flex-row">
        <ScoreRing score={profile.score} />
        <div className="text-center sm:text-left">
          <p className="text-sm text-mist">{profile.type} profile</p>
          <h1 className="text-4xl font-bold tracking-tight">{profile.name}</h1>
          <p className="mt-3 text-mist">
            Trust Score up <span className="text-risk-low">{profile.delta} points</span> this month.
          </p>
          <button className="mt-5 rounded-lg bg-cyan px-5 py-2.5 text-sm font-semibold text-ink hover:brightness-110">Report an issue</button>
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
