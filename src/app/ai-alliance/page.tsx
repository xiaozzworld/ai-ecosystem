"use client";

import { useMemo, useState } from "react";
import brands from "@/components/ai-brands";
import { useLang, useT } from "@/lib/i18n";
import { BrandIcon } from "@/components/brand-icon";
import { FeaturedSection, AdvertisePlaceholder } from "@/components/featured-section";
import {
  ORDERED_CATEGORIES,
  CATEGORY_COLORS,
  categoryToSlug,
  type Category,
} from "@/lib/categories";

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
    const map = new Map<Category, typeof brands>();
    for (const cat of ORDERED_CATEGORIES) {
      const items = filtered.filter((b) => b.category === cat);
      if (items.length > 0) map.set(cat, items);
    }
    return map;
  }, [filtered]);

  return (
    <main className="flex-1 w-full max-w-6xl mx-auto px-4 py-16">
      {/* ── Hero ── */}
      <div className="text-center mb-14 animate-in" style={{ animationDelay: "0ms" }}>
        <h1
          className="text-4xl sm:text-5xl font-normal tracking-tight mb-4"
          style={{ fontFamily: "var(--font-display)", color: "#f5f5f5" }}
        >
          {t("page.title")}
        </h1>
        <p className="text-sm text-neutral-400 max-w-md mx-auto leading-relaxed">
          {t("page.subtitle")}
        </p>
      </div>

      {/* ── Search ── */}
      <div
        className="max-w-lg mx-auto mb-16 animate-in"
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
            placeholder={t("search.placeholder")}
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

      {/* ── No results ── */}
      {grouped.size === 0 && (
        <p className="text-center text-neutral-500 py-16 text-sm">
          {t("search.noResults")}
        </p>
      )}

      {/* ── Category Sections ── */}
      {[...grouped].map(([category, items], catIdx) => (
        <section key={category} className="mb-14">
          {/* Category header */}
          <a
            href={`/category/${categoryToSlug(category)}`}
            className="flex items-center gap-3 mb-5 animate-in group/cat"
            style={{ animationDelay: `${catIdx * 60}ms` }}
          >
            <span
              className="w-2.5 h-2.5 rounded-full flex-shrink-0 transition-shadow duration-300
                         group-hover/cat:shadow-[0_0_16px]"
              style={{
                backgroundColor: CATEGORY_COLORS[category] ?? "#737373",
                boxShadow: `0 0 10px ${CATEGORY_COLORS[category] ?? "#737373"}40`,
              }}
            />
            <h2 className="text-[11px] font-semibold text-neutral-400 uppercase tracking-[0.15em]
                           group-hover/cat:text-neutral-200 transition-colors duration-300">
              {t(`category.${category}`)}
            </h2>
            <span className="text-[10px] text-neutral-600">({items.length})</span>
            <svg
              className="w-3 h-3 text-neutral-600 opacity-0 group-hover/cat:opacity-100
                         group-hover/cat:translate-x-0.5 transition-all duration-300"
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

          {/* Featured section — only when not searching */}
          {!query.trim() && (
            (() => {
              const catFeatured = items.filter((b) => (b as typeof items[0]).featured);
              const catRegular = items.filter((b) => !(b as typeof items[0]).featured);
              if (catFeatured.length === 0) return null;
              return (
                <FeaturedSection items={catFeatured}>
                  {catFeatured.length < 3 &&
                    Array.from({ length: Math.min(3 - catFeatured.length, 2) }).map((_, i) => (
                      <div key={`placeholder-${category}-${i}`}>
                        <AdvertisePlaceholder />
                      </div>
                    ))
                  }
                </FeaturedSection>
              );
            })()
          )}

          {/* Card grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {items
              .filter((b) => query.trim() || !(b as typeof items[0]).featured)
              .map((brand, idx) => (
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
                  style={{ animationDelay: `${catIdx * 60 + idx * 30 + 150}ms` }}
                >
                  <BrandIcon
                    url={brand.url}
                    name={brand.name}
                    color={brand.color}
                    mark={brand.mark}
                  />
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-neutral-200 truncate leading-tight flex items-center gap-1.5">
                      {brand.name}
                      {brand.affiliateUrl && (
                        <span className="text-[9px] px-1.5 py-px rounded-full bg-[#d4a853] bg-opacity-15 text-[#d4a853] font-medium tracking-wide flex-shrink-0">
                          Ad
                        </span>
                      )}
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
        </section>
      ))}
    </main>
  );
}
