"use client";
import Link from "next/link";
import LangSwitch from "@/components/ui/LangSwitch";
import { useLang } from "@/lib/i18n";

export default function Navbar() {
  const { t } = useLang();
  return (
    <header className="sticky top-0 z-20 border-b border-line/60 bg-ink/80 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-5">
        <Link href="/" className="text-xl font-bold tracking-tight">CYC<span className="text-cyan">.</span></Link>
        <div className="flex items-center gap-3 text-sm text-mist sm:gap-6">
          <a href="/#how" className="hidden transition-colors hover:text-white sm:block">{t.nav.how}</a>
          <a href="/#trust" className="hidden transition-colors hover:text-white sm:block">{t.nav.both}</a>
          <LangSwitch />
          <Link
            href="/dashboard"
            className="rounded-lg bg-cyan px-3.5 py-2 text-sm font-semibold text-ink transition hover:bg-[#6cf0ff] hover:shadow-[0_0_24px_rgba(34,229,255,0.45)] active:scale-[0.97] active:bg-[#17c2da] sm:px-4"
          >
            {t.nav.dashboard}
          </Link>
        </div>
      </nav>
    </header>
  );
}
