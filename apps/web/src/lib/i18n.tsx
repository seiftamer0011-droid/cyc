"use client";
import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { Risk } from "@/lib/mock-data";

export type Lang = "en" | "ar";

const en = {
  meta: { title: "CYC · Know who you're dealing with" },
  ui: { trustScore: "Trust score", language: "Language" },
  risk: { low: "Low risk", moderate: "Moderate risk", high: "High risk", critical: "Critical risk" },
  nav: { how: "How it works", both: "Why both sides", dashboard: "Open dashboard" },
  hero: {
    title: "Know who you're dealing with.",
    sub: "CYC scores the reliability of businesses and customers, and shows exactly why, before money or trust changes hands.",
    cta1: "Check a profile",
    cta2: "See how scoring works",
    tagline: "Connect. Verify. Trust.",
    cardType: "Company profile",
  },
  concept: {
    howTitle: "Four steps from stranger to score.",
    step: "Step",
    steps: [
      { n: "Trust", d: "Every business and customer starts with a neutral profile. No one is assumed good or bad." },
      { n: "Verify", d: "Identity, registration and transactions are checked. Feedback backed by evidence is marked verified." },
      { n: "Analyze", d: "Patterns such as review bursts, repeat disputes and mismatched activity are flagged." },
      { n: "Score", d: "You get a 0–100 Trust Score, a risk level, and the factors behind both." },
    ],
    bothTitle: "Reputation goes both ways.",
    bothText: "Review sites only judge businesses. CYC also profiles customers, so a seller can spot a chargeback-prone buyer just as a buyer can spot a fraudulent seller.",
    verifiedT: "Verified feedback",
    verifiedD: "Tied to a transaction or evidence. Carries the most weight in the score.",
    unverifiedT: "Unverified feedback",
    unverifiedD: "Open reviews. Shown, but weighted lower and screened for manipulation.",
    disputesT: "Fair disputes",
    disputesD: "Report, evidence, review, decision, appeal. Either side can contest a claim.",
  },
  footer: "© 2026 CYC. Connect. Verify. Trust.",
  dash: {
    search: "Search a company or customer",
    up: "Trust Score up {n} this month.",
    points: "points",
    report: "Report an issue",
    whyTitle: "Why this score",
    factors: [
      { text: "3 verified complaints in the last 90 days", impact: -9, severity: "high" as Risk },
      { text: "Unusual review burst on 12 Sep (14 in 2 hours)", impact: -6, severity: "moderate" as Risk },
      { text: "Business registration and domain verified", impact: 12, severity: "low" as Risk },
      { text: "94% of disputes resolved within 7 days", impact: 8, severity: "low" as Risk },
    ],
    feedbackTitle: "Recent feedback",
    verified: "Verified",
    unverified: "Unverified",
    feedback: [
      { author: "M. Alvarez", verified: true, text: "Shipment arrived 9 days late. Invoice and tracking attached.", date: "Sep 24" },
      { author: "Anonymous", verified: false, text: "Support was slow but friendly.", date: "Sep 21" },
      { author: "T. Okafor", verified: true, text: "Smooth delivery. Order #48213 confirmed by transaction.", date: "Sep 18" },
    ],
    disputeTitle: "Open dispute",
    disputeName: "Late delivery, order #48192",
    stages: ["Report", "Evidence", "Review", "Decision", "Appeal"],
  },
};

const ar: typeof en = {
  meta: { title: "CYC · اعرف مع من تتعامل" },
  ui: { trustScore: "درجة الثقة", language: "اللغة" },
  risk: { low: "خطر منخفض", moderate: "خطر متوسط", high: "خطر مرتفع", critical: "خطر حرج" },
  nav: { how: "كيف يعمل", both: "لماذا الطرفان", dashboard: "افتح لوحة التحكم" },
  hero: {
    title: "اعرف مع من تتعامل.",
    sub: "يقيّم CYC موثوقية الشركات والعملاء ويوضح لك الأسباب بالتفصيل، قبل أن تُدفع أي أموال أو يُمنح أي ائتمان.",
    cta1: "افحص ملفًا",
    cta2: "كيف يعمل التقييم",
    tagline: "اتصل. تحقق. ثق.",
    cardType: "ملف شركة",
  },
  concept: {
    howTitle: "أربع خطوات من شخص غريب إلى درجة ثقة.",
    step: "الخطوة",
    steps: [
      { n: "الثقة", d: "كل شركة وكل عميل يبدأ بملف محايد. لا يُفترض أن أحدًا جيد أو سيئ." },
      { n: "التحقق", d: "نتحقق من الهوية والسجلات والمعاملات. التقييمات المدعومة بأدلة تُوسَم بأنها موثّقة." },
      { n: "التحليل", d: "نرصد الأنماط المشبوهة مثل تدفق التقييمات المفاجئ والنزاعات المتكررة والنشاط غير المتسق." },
      { n: "التقييم", d: "تحصل على درجة ثقة من 0 إلى 100، ومستوى خطر، والعوامل التي تقف وراء كليهما." },
    ],
    bothTitle: "السمعة تسير في الاتجاهين.",
    bothText: "مواقع التقييم تحكم على الشركات فقط. أما CYC فيبني ملفات للعملاء أيضًا، فيستطيع البائع كشف المشتري كثير الاسترداد، كما يستطيع المشتري كشف البائع المحتال.",
    verifiedT: "تقييم موثّق",
    verifiedD: "مرتبط بمعاملة أو دليل، وله الوزن الأكبر في الدرجة.",
    unverifiedT: "تقييم غير موثّق",
    unverifiedD: "تقييمات مفتوحة. تظهر لكن بوزن أقل، وتُفحص للكشف عن التلاعب.",
    disputesT: "نزاعات عادلة",
    disputesD: "بلاغ، أدلة، مراجعة، قرار، استئناف. ويحق لأي طرف الاعتراض على أي ادعاء.",
  },
  footer: "© 2026 CYC. اتصل. تحقق. ثق.",
  dash: {
    search: "ابحث عن شركة أو عميل",
    up: "ارتفعت درجة الثقة {n} هذا الشهر.",
    points: "نقاط",
    report: "أبلغ عن مشكلة",
    whyTitle: "لماذا هذه الدرجة",
    factors: [
      { text: "3 شكاوى موثّقة خلال آخر 90 يومًا", impact: -9, severity: "high" as Risk },
      { text: "زيادة غير معتادة في التقييمات يوم 12 سبتمبر (14 خلال ساعتين)", impact: -6, severity: "moderate" as Risk },
      { text: "تم التحقق من السجل التجاري والنطاق", impact: 12, severity: "low" as Risk },
      { text: "تم حل 94% من النزاعات خلال 7 أيام", impact: 8, severity: "low" as Risk },
    ],
    feedbackTitle: "أحدث التقييمات",
    verified: "موثّق",
    unverified: "غير موثّق",
    feedback: [
      { author: "م. ألفاريز", verified: true, text: "وصلت الشحنة متأخرة 9 أيام. الفاتورة وبيانات التتبع مرفقة.", date: "24 سبتمبر" },
      { author: "مجهول", verified: false, text: "خدمة العملاء كانت بطيئة لكنها ودودة.", date: "21 سبتمبر" },
      { author: "ت. أوكافور", verified: true, text: "توصيل سلس. الطلب #48213 مؤكد بمعاملة.", date: "18 سبتمبر" },
    ],
    disputeTitle: "نزاع مفتوح",
    disputeName: "تأخر في التسليم، الطلب #48192",
    stages: ["بلاغ", "أدلة", "مراجعة", "قرار", "استئناف"],
  },
};

const dict = { en, ar };

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: typeof en };
const LangContext = createContext<Ctx | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("cyc-lang");
      if (saved === "en" || saved === "ar") setLang(saved);
    } catch {}
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.title = dict[lang].meta.title;
    try { localStorage.setItem("cyc-lang", lang); } catch {}
  }, [lang]);

  return <LangContext.Provider value={{ lang, setLang, t: dict[lang] }}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used inside <LangProvider>");
  return ctx;
}
