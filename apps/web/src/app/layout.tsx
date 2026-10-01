import type { Metadata } from "next";
import { Space_Grotesk, Noto_Sans_Arabic } from "next/font/google";
import { LangProvider } from "@/lib/i18n";
import "./globals.css";

const grotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-grotesk" });
const arabic = Noto_Sans_Arabic({ subsets: ["arabic"], variable: "--font-arabic" });

export const metadata: Metadata = {
  title: "CYC · Know who you're dealing with",
  description: "Reputation and risk intelligence for businesses and customers.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr" className={`${grotesk.variable} ${arabic.variable}`}>
      <body className="antialiased">
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
