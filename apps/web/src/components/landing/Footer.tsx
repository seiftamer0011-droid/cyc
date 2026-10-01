"use client";
import { useLang } from "@/lib/i18n";

export default function Footer() {
  const { t } = useLang();
  return <footer className="border-t border-line py-8 text-center text-sm text-mist">{t.footer}</footer>;
}
