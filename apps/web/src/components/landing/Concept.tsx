const steps = [
  { n: "Trust", d: "Every business and customer starts with a neutral profile. No one is assumed good or bad." },
  { n: "Verify", d: "Identity, registration and transactions are checked. Feedback backed by evidence is marked verified." },
  { n: "Analyze", d: "Patterns such as review bursts, repeat disputes and mismatched activity are flagged." },
  { n: "Score", d: "You get a 0–100 Trust Score, a risk level, and the factors behind both." },
];

export default function Concept() {
  return (
    <>
      <section id="how" className="border-t border-line bg-navy/40">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <h2 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">Four steps from stranger to score.</h2>
          <ol className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <li key={s.n} className="bg-ink p-6">
                <span className="text-sm text-cyan">Step {i + 1}</span>
                <h3 className="mt-2 text-2xl font-bold">{s.n}</h3>
                <p className="mt-3 text-sm leading-relaxed text-mist">{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="trust" className="border-t border-line">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-2">
          <div>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">Reputation goes both ways.</h2>
            <p className="mt-5 max-w-md text-mist">
              Review sites only judge businesses. CYC also profiles customers, so a seller can spot a chargeback-prone buyer just as a buyer can spot a fraudulent seller.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-line bg-navy/60 p-5">
              <h3 className="font-semibold">Verified feedback</h3>
              <p className="mt-2 text-sm text-mist">Tied to a transaction or evidence. Carries the most weight in the score.</p>
            </div>
            <div className="rounded-xl border border-line p-5">
              <h3 className="font-semibold">Unverified feedback</h3>
              <p className="mt-2 text-sm text-mist">Open reviews. Shown, but weighted lower and screened for manipulation.</p>
            </div>
            <div className="rounded-xl border border-line p-5 sm:col-span-2">
              <h3 className="font-semibold">Fair disputes</h3>
              <p className="mt-2 text-sm text-mist">Report, evidence, review, decision, appeal. Either side can contest a claim.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
