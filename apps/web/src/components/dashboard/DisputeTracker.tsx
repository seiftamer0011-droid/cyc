"use client";
import { disputeStage } from "@/lib/mock-data";
import { useLang } from "@/lib/i18n";

export default function DisputeTracker() {
  const { t } = useLang();
  const stages = t.dash.stages;
  return (
    <section className="rounded-2xl border border-line bg-navy/60 p-6">
      <h2 className="text-lg font-semibold">{t.dash.disputeTitle}</h2>
      <p className="mt-1 text-sm text-soft">{t.dash.disputeName}</p>
      <ol className="mt-5 flex items-start">
        {stages.map((s, i) => (
          <li key={s} className="flex flex-1 flex-col last:flex-none">
            <div className="flex w-full items-center">
              <span className={`h-3 w-3 shrink-0 rounded-full ${i <= disputeStage ? "bg-cyan" : "bg-line"} ${i === disputeStage ? "ring-4 ring-cyan/25" : ""}`} />
              {i < stages.length - 1 && <span className={`h-px flex-1 ${i < disputeStage ? "bg-cyan" : "bg-line"}`} />}
            </div>
            <span className={`mt-2 text-xs ${i === disputeStage ? "text-white" : "text-mist"}`}>{s}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}
