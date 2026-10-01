export type Risk = "low" | "moderate" | "high" | "critical";

export const riskMeta: Record<Risk, { label: string; dot: string; text: string }> = {
  low: { label: "Low risk", dot: "🟢", text: "text-risk-low" },
  moderate: { label: "Moderate risk", dot: "🟡", text: "text-risk-moderate" },
  high: { label: "High risk", dot: "🟠", text: "text-risk-high" },
  critical: { label: "Critical risk", dot: "🔴", text: "text-risk-critical" },
};

export const riskFromScore = (s: number): Risk =>
  s >= 75 ? "low" : s >= 50 ? "moderate" : s >= 25 ? "high" : "critical";

export const profile = { name: "Northwind Logistics", type: "Company", score: 72, delta: 4 };

export const riskFactors = [
  { text: "3 verified complaints in the last 90 days", impact: -9, severity: "high" as Risk },
  { text: "Unusual review burst on 12 Sep (14 in 2 hours)", impact: -6, severity: "moderate" as Risk },
  { text: "Business registration and domain verified", impact: 12, severity: "low" as Risk },
  { text: "94% of disputes resolved within 7 days", impact: 8, severity: "low" as Risk },
];

export const feedback = [
  { id: 1, author: "M. Alvarez", verified: true, text: "Shipment arrived 9 days late. Invoice and tracking attached.", date: "Sep 24" },
  { id: 2, author: "Anonymous", verified: false, text: "Support was slow but friendly.", date: "Sep 21" },
  { id: 3, author: "T. Okafor", verified: true, text: "Smooth delivery. Order #48213 confirmed by transaction.", date: "Sep 18" },
];

export const dispute = {
  title: "Late delivery, order #48192",
  stage: 2, // index into stages
  stages: ["Report", "Evidence", "Review", "Decision", "Appeal"],
};
