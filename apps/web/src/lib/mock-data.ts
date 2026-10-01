export type Risk = "low" | "moderate" | "high" | "critical";

// Colors/dots only. Human-readable labels live in lib/i18n.tsx so they can be translated.
export const riskMeta: Record<Risk, { dot: string; text: string }> = {
  low: { dot: "🟢", text: "text-risk-low" },
  moderate: { dot: "🟡", text: "text-risk-moderate" },
  high: { dot: "🟠", text: "text-risk-high" },
  critical: { dot: "🔴", text: "text-risk-critical" },
};

export const riskFromScore = (s: number): Risk =>
  s >= 75 ? "low" : s >= 50 ? "moderate" : s >= 25 ? "high" : "critical";

export const profile = { name: "Northwind Logistics", score: 72, delta: 4 };
export const disputeStage = 2; // index into the translated stages list
