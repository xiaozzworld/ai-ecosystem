"use client";

import { type ReactNode } from "react";
import { LangProvider, useLang, useT } from "@/lib/i18n";

function NavBar() {
  const { lang, setLang } = useLang();
  const t = useT(lang);

  return (
    <nav className="w-full max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
      <a
        href="/"
        className="flex items-center gap-2 group"
      >
        <span className="w-2 h-2 rounded-full bg-[#d4a853] shadow-[0_0_8px_rgba(212,168,83,0.5)]" />
        <span
          className="text-sm font-semibold tracking-wide uppercase"
          style={{ fontFamily: "var(--font-display)", color: "#f5f5f5" }}
        >
          AI Ecosystem
        </span>
      </a>
      <div className="flex items-center gap-5">
        <a
          href="/blog"
          className="text-xs text-neutral-400 hover:text-neutral-200 transition-colors tracking-wide uppercase"
        >
          Blog
        </a>
        <a
          href="/ai-alliance"
          className="text-xs text-neutral-400 hover:text-neutral-200 transition-colors tracking-wide uppercase"
        >
          {t("nav.title")}
        </a>
        <button
          onClick={() => setLang(lang === "en" ? "zh" : "en")}
          className="text-[11px] px-2.5 py-1 rounded-full border border-[#262626]
                     text-neutral-400 hover:text-neutral-200 hover:border-neutral-600
                     active:scale-95 transition-all duration-200 tracking-wide uppercase"
          aria-label="Switch language"
        >
          {t("lang.label")}
        </button>
      </div>
    </nav>
  );
}

function Footer() {
  const { lang } = useLang();
  const t = useT(lang);

  return (
    <footer className="py-8 text-center text-[11px] text-neutral-500 tracking-wide space-y-2">
      <p>&copy; 2026 AI Ecosystem. All trademarks belong to their respective owners. This is an independent directory.</p>
      <p>
        {lang === "zh"
          ? "部分链接为返利链接，点击可能为我们带来佣金。返利链接标注\"Ad\"标识。"
          : "Some links are affiliate links marked \"Ad\" — we may earn a commission at no extra cost to you."}
      </p>
      <p className="space-x-4">
        <a href="/blog" className="hover:text-neutral-300 transition-colors">Blog</a>
        <a href="/advertise" className="hover:text-neutral-300 transition-colors">Advertise</a>
        <a href="/privacy" className="hover:text-neutral-300 transition-colors">Privacy</a>
        <a href="/terms" className="hover:text-neutral-300 transition-colors">Terms</a>
      </p>
    </footer>
  );
}

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <LangProvider>
      <NavBar />
      {children}
      <Footer />
    </LangProvider>
  );
}
