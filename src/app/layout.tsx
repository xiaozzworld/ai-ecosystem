import type { Metadata } from "next";
import { DM_Serif_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import { AppShell } from "@/components/app-shell";
import { Analytics } from "@/components/analytics";
import { AdSense } from "@/components/adsense";
import { CookieConsent } from "@/components/cookie-consent";

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "AI Ecosystem — 100+ AI Tools Directory",
    template: "%s — AI Ecosystem",
  },
  description:
    "Discover 100+ best AI tools across 12 categories — chatbots, image & video generation, code assistants, music, voice, agents, and more. Curated directory updated regularly.",
  keywords: [
    "AI tools", "AI directory", "artificial intelligence", "chatbot", "LLM",
    "image generation", "video generation", "AI code", "AI music", "AI voice",
  ],
  openGraph: {
    title: "AI Ecosystem — 100+ AI Tools Directory",
    description:
      "Discover 100+ best AI tools across 12 categories. Curated directory updated regularly.",
    type: "website",
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSerif.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Analytics />
        <AdSense />
        <CookieConsent />
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
