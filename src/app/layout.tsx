import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI Alliance — 100+ AI Tools Directory",
  description: "Discover 100+ best AI tools — chatbots, image generation, video, code assistants, music, voice, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-neutral-900">
        <nav className="w-full max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a
            href="/"
            className="text-sm font-semibold text-neutral-700 hover:text-neutral-900 transition-colors"
          >
            XM3
          </a>
          <div className="flex items-center gap-4">
            <a
              href="/ai-alliance"
              className="text-sm text-neutral-400 hover:text-neutral-700 transition-colors"
            >
              AI Alliance
            </a>
          </div>
        </nav>
        {children}
        <footer className="py-6 text-center text-xs text-neutral-300">
          Powered by AI &middot; Built with Next.js
        </footer>
      </body>
    </html>
  );
}
