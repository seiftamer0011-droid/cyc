"use client";
import { useLang } from "@/lib/i18n";

export default function Concept() {
  const { t } = useLang();
  const c = t.concept;
  return (
    <>
      <section id="how" className="border-t border-line bg-navy/40">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <h2 className="max-w-2xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl">{c.howTitle}</h2>
          <ol className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {c.steps.map((s, i) => (
              <li key={s.n} className="bg-ink p-6">
                <span className="text-sm text-cyan">{c.step} {i + 1}</span>
                <h3 className="mt-2 text-2xl font-bold">{s.n}</h3>
                <p className="mt-3 text-sm leading-relaxed text-soft">{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="trust" className="border-t border-line">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-2">
          <div>
            <h2 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl">{c.bothTitle}</h2>
            <p className="mt-5 max-w-md leading-relaxed text-soft">{c.bothText}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-line bg-navy/60 p-5">
              <h3 className="font-semibold">{c.verifiedT}</h3>
              <p className="mt-2 text-sm text-soft">{c.verifiedD}</p>
            </div>
            <div className="rounded-xl border border-line p-5">
              <h3 className="font-semibold">{c.unverifiedT}</h3>
              <p className="mt-2 text-sm text-soft">{c.unverifiedD}</p>
            </div>
            <div className="rounded-xl border border-line p-5 sm:col-span-2">
              <h3 className="font-semibold">{c.disputesT}</h3>
              <p className="mt-2 text-sm text-soft">{c.disputesD}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
