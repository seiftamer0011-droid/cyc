import { feedback } from "@/lib/mock-data";

export default function FeedbackList() {
  return (
    <section className="rounded-2xl border border-line bg-navy/60 p-6">
      <h2 className="text-lg font-semibold">Recent feedback</h2>
      <ul className="mt-4 space-y-4">
        {feedback.map((f) => (
          <li key={f.id} className="text-sm">
            <div className="flex items-center gap-2">
              <span className="font-medium">{f.author}</span>
              <span className={`rounded-full px-2 py-0.5 text-xs ${f.verified ? "bg-cyan/15 text-cyan" : "bg-line text-mist"}`}>
                {f.verified ? "Verified" : "Unverified"}
              </span>
              <span className="ml-auto text-mist">{f.date}</span>
            </div>
            <p className="mt-1 text-mist">{f.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
