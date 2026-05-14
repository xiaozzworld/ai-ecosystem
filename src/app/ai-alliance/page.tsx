"use client";

import { useMemo, useState } from "react";
import type { Metadata } from "next";
import brands from "@/components/ai-brands";
import { useLang, useT, getFaviconUrl } from "@/lib/i18n";
import { BrandIcon } from "@/components/brand-icon";

const ORDERED_CATEGORIES = [
  "Chatbot / LLM",
  "AI Search",
  "Open-Source LLM",
  "Image Generation",
  "Video Generation",
  "AI Code Editor",
  "AI Code Assistant",
  "AI UI Generator",
  "AI Agent Platform",
  "AI Music",
  "AI Voice / TTS",
  "AI Productivity",
] as const;

export default function AiAlliancePage() {
  const { lang } = useLang();
  const t = useT(lang);
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return brands;
    return brands.filter(
      (b) =>
        b.name.toLowerCase().includes(q) ||
        b.maker.toLowerCase().includes(q) ||
        b.category.toLowerCase().includes(q)
    );
  }, [query]);

  const grouped = useMemo(() => {
    const map = new Map<string, typeof brands>();
    for (const cat of ORDERED_CATEGORIES) {
      const items = filtered.filter((b) => b.category === cat);
      if (items.length > 0) map.set(cat, items);
    }
    return map;
  }, [filtered]);

  return (
    <main className="flex-1 w-full max-w-6xl mx-auto px-4 py-12">
      {/* ── Hero ── */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-neutral-900 tracking-tight">
          {t("page.title")}
        </h1>
        <p className="mt-2 text-neutral-500">
          {t("page.subtitle")}
        </p>
      </div>

      {/* ── Search ── */}
      <div className="max-w-md mx-auto mb-12">
        <div className="relative">
          <svg
            className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400 pointer-events-none"
            fill="none" stroke="currentColor" viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t("search.placeholder")}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-neutral-200
                       bg-neutral-50 text-sm text-neutral-800
                       placeholder:text-neutral-400
                       focus:outline-none focus:ring-2 focus:ring-neutral-300 focus:border-transparent
                       transition-all duration-150"
          />
        </div>
      </div>

      {/* ── No results ── */}
      {grouped.size === 0 && (
        <p className="text-center text-neutral-400 py-12">{t("search.noResults")}</p>
      )}

      {/* ── Category Sections ── */}
      {[...grouped].map(([category, items]) => (
        <section key={category} className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
              {t(`category.${category}`)}
            </h2>
            <span className="text-[11px] text-neutral-300">({items.length})</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {items.map((brand) => (
              <a
                key={brand.name + brand.maker}
                href={brand.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 p-3.5 rounded-xl
                           bg-white border border-neutral-100
                           hover:border-neutral-200 hover:shadow-sm
                           hover:-translate-y-0.5
                           active:scale-[0.98]
                           transition-all duration-200"
              >
                <BrandIcon
                  url={brand.url}
                  name={brand.name}
                  color={brand.color}
                  mark={brand.mark}
                />
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-neutral-800 truncate leading-tight">
                    {brand.name}
                  </p>
                  <p className="text-xs text-neutral-400 truncate leading-tight mt-0.5">
                    {brand.maker}
                  </p>
                </div>
                <svg
                  className="w-3.5 h-3.5 text-neutral-300 group-hover:text-neutral-500
                             flex-shrink-0 opacity-0 group-hover:opacity-100
                             group-hover:translate-x-0.5
                             transition-all duration-200"
                  viewBox="0 0 14 14" fill="none" aria-hidden="true"
                >
                  <path d="M4 1h9v9M13 1L1 13" stroke="currentColor"
                    strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
