import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { AppShell } from "@/components/app-shell";
import { Analytics } from "@/components/analytics";
import { AdSense } from "@/components/adsense";
import { CookieConsent } from "@/components/cookie-consent";

const dmSerif = localFont({
  variable: "--font-dm-serif",
  src: [
    {
      path: "../../node_modules/@fontsource/dm-serif-display/files/dm-serif-display-latin-400-normal.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../node_modules/@fontsource/dm-serif-display/files/dm-serif-display-latin-400-italic.woff2",
      weight: "400",
      style: "italic",
    },
  ],
  display: "swap",
});

const dmSans = localFont({
  variable: "--font-dm-sans",
  src: [
    {
      path: "../../node_modules/@fontsource/dm-sans/files/dm-sans-latin-400-normal.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../node_modules/@fontsource/dm-sans/files/dm-sans-latin-500-normal.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../node_modules/@fontsource/dm-sans/files/dm-sans-latin-600-normal.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../node_modules/@fontsource/dm-sans/files/dm-sans-latin-700-normal.woff2",
      weight: "700",
      style: "normal",
    },
  ],
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
