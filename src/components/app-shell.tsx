"use client";

import { type ReactNode } from "react";
import { LangProvider, useLang, useT } from "@/lib/i18n";

function NavBar() {
  const { lang, setLang } = useLang();
  const t = useT(lang);

  return (
    <nav className="w-full max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
      <a
        href="/"
        className="text-sm font-semibold text-neutral-700 hover:text-neutral-900 transition-colors"
      >
        AI Ecosystem
      </a>
      <div className="flex items-center gap-4">
        <a
          href="/ai-alliance"
          className="text-sm text-neutral-400 hover:text-neutral-700 transition-colors"
        >
          {t("nav.title")}
        </a>
        <button
          onClick={() => setLang(lang === "en" ? "zh" : "en")}
          className="text-xs px-2.5 py-1 rounded-full border border-neutral-200
                     text-neutral-500 hover:text-neutral-700 hover:border-neutral-300
                     active:scale-95 transition-all duration-150"
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
    <footer className="py-6 text-center text-xs text-neutral-300">
      {t("footer.text", { count: 100 })}
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
