import { dispute } from "@/lib/mock-data";

export default function DisputeTracker() {
  return (
    <section className="rounded-2xl border border-line bg-navy/60 p-6">
      <h2 className="text-lg font-semibold">Open dispute</h2>
      <p className="mt-1 text-sm text-mist">{dispute.title}</p>
      <ol className="mt-5 flex items-start">
        {dispute.stages.map((s, i) => (
          <li key={s} className="flex flex-1 flex-col last:flex-none">
            <div className="flex w-full items-center">
              <span className={`h-3 w-3 shrink-0 rounded-full ${i <= dispute.stage ? "bg-cyan" : "bg-line"} ${i === dispute.stage ? "ring-4 ring-cyan/25" : ""}`} />
              {i < dispute.stages.length - 1 && <span className={`h-px flex-1 ${i < dispute.stage ? "bg-cyan" : "bg-line"}`} />}
            </div>
            <span className={`mt-2 text-xs ${i === dispute.stage ? "text-white" : "text-mist"}`}>{s}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}
