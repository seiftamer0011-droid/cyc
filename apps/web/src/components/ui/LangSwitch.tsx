"use client";
import { useLang, type Lang } from "@/lib/i18n";

export default function LangSwitch() {
  const { lang, setLang, t } = useLang();
  const opts: { code: Lang; label: string }[] = [{ code: "en", label: "EN" }, { code: "ar", label: "AR" }];
  return (
    <div role="group" aria-label={t.ui.language} dir="ltr" className="flex rounded-lg border border-line bg-navy/60 p-0.5 text-xs font-semibold">
      {opts.map((o) => (
        <button
          key={o.code}
          type="button"
          onClick={() => setLang(o.code)}
          aria-pressed={lang === o.code}
          className={`rounded-md px-2.5 py-1.5 transition-colors ${lang === o.code ? "bg-cyan/15 text-cyan" : "text-mist hover:text-white"}`}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}
