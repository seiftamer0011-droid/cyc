"use client";
import { useLang } from "@/lib/i18n";

export default function FeedbackList() {
  const { t } = useLang();
  return (
    <section className="rounded-2xl border border-line bg-navy/60 p-6">
      <h2 className="text-lg font-semibold">{t.dash.feedbackTitle}</h2>
      <ul className="mt-4 space-y-4">
        {t.dash.feedback.map((f) => (
          <li key={f.text} className="text-sm">
            <div className="flex items-center gap-2">
              <span className="font-medium">{f.author}</span>
              <span className={`rounded-full px-2 py-0.5 text-xs ${f.verified ? "bg-cyan/15 text-cyan" : "bg-line text-soft"}`}>
                {f.verified ? t.dash.verified : t.dash.unverified}
              </span>
              <span className="ms-auto text-mist">{f.date}</span>
            </div>
            <p className="mt-1 text-[15px] leading-snug text-soft">{f.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
