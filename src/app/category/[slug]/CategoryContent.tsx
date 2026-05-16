"use client";

import { useMemo, useState } from "react";
import brands from "@/components/ai-brands";
import { useLang, useT } from "@/lib/i18n";
import { BrandIcon } from "@/components/brand-icon";
import type { Category } from "@/lib/categories";
import { CATEGORY_COLORS } from "@/lib/categories";

interface Props {
  category: Category;
}

export function CategoryContent({ category }: Props) {
  const { lang } = useLang();
  const t = useT(lang);
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    const items = brands.filter((b) => b.category === category);
    if (!q) return items;
    return items.filter(
      (b) =>
        b.name.toLowerCase().includes(q) ||
        b.maker.toLowerCase().includes(q)
    );
  }, [query, category]);

  const accentColor = CATEGORY_COLORS[category] ?? "#737373";

  return (
    <main className="flex-1 w-full max-w-6xl mx-auto px-4 py-16">
      {/* Back link */}
      <a
        href="/ai-alliance"
        className="inline-flex items-center gap-1.5 text-xs text-neutral-500 hover:text-neutral-300 transition-colors mb-10"
      >
        <svg
          className="w-3 h-3"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 12H5m6-6l-6 6 6 6"
          />
        </svg>
        {lang === "zh" ? "返回全部工具" : "Back to all tools"}
      </a>

      {/* Header */}
      <div className="mb-12 animate-in" style={{ animationDelay: "0ms" }}>
        <div className="flex items-center gap-3 mb-4">
          <span
            className="w-3 h-3 rounded-full flex-shrink-0"
            style={{
              backgroundColor: accentColor,
              boxShadow: `0 0 12px ${accentColor}40`,
            }}
          />
          <h1
            className="text-3xl sm:text-4xl font-normal tracking-tight"
            style={{ fontFamily: "var(--font-display)", color: "#f5f5f5" }}
          >
            {t(`category.${category}`)}
          </h1>
        </div>
        <p className="text-sm text-neutral-400 max-w-lg leading-relaxed">
          {lang === "zh"
            ? `浏览 ${filtered.length} 款 ${t(`category.${category}`)} 工具`
            : `Browse ${filtered.length} ${category.toLowerCase()} tools`}
        </p>
      </div>

      {/* Search */}
      <div
        className="max-w-lg mb-12 animate-in"
        style={{ animationDelay: "100ms" }}
      >
        <div className="relative">
          <svg
            className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500 pointer-events-none"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={lang === "zh" ? "筛选工具..." : "Filter within category..."}
            className="search-glow w-full pl-11 pr-4 py-3 rounded-xl
                       bg-[#141414] border border-[#262626]
                       text-sm text-neutral-200
                       placeholder:text-neutral-500
                       focus:outline-none focus:border-[#333]
                       transition-all duration-300"
            style={{ fontFamily: "var(--font-sans)" }}
          />
        </div>
      </div>

      {/* No results */}
      {filtered.length === 0 && (
        <p className="text-center text-neutral-500 py-16 text-sm">
          {lang === "zh" ? "未找到匹配工具" : "No tools found"}
        </p>
      )}

      {/* Tool grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {filtered.map((brand, idx) => (
          <a
            key={brand.name + brand.maker}
            href={brand.affiliateUrl || brand.url}
            target="_blank"
            rel={brand.affiliateUrl ? "sponsored noopener noreferrer" : "noopener noreferrer"}
            className="glass glass-hover group flex items-center gap-3.5 p-4 rounded-xl
                       animate-in
                       hover:-translate-y-0.5
                       active:scale-[0.98]
                       transition-all duration-300"
            style={{ animationDelay: `${idx * 30 + 200}ms` }}
          >
            <BrandIcon
              url={brand.url}
              name={brand.name}
              color={brand.color}
              mark={brand.mark}
            />
            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium text-neutral-200 truncate leading-tight">
                {brand.name}
              </p>
              <p className="text-xs text-neutral-500 truncate leading-tight mt-0.5">
                {brand.maker}
              </p>
            </div>
            <svg
              className="w-3.5 h-3.5 text-neutral-600 group-hover:text-[#d4a853]
                         flex-shrink-0 opacity-0 group-hover:opacity-100
                         group-hover:translate-x-0.5
                         transition-all duration-300"
              viewBox="0 0 14 14"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M4 1h9v9M13 1L1 13"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        ))}
      </div>
    </main>
  );
}
