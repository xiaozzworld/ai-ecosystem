"use client";

import { type AiBrand } from "@/components/ai-brands";
import { BrandIcon } from "@/components/brand-icon";

function FeaturedCard({ brand }: { brand: AiBrand }) {
  return (
    <a
      href={brand.affiliateUrl || brand.url}
      target="_blank"
      rel={brand.affiliateUrl ? "sponsored noopener noreferrer" : "noopener noreferrer"}
      className="featured-card group flex items-center gap-3.5 p-4 rounded-xl
                 animate-in hover:-translate-y-0.5 active:scale-[0.98]
                 transition-all duration-300"
    >
      <BrandIcon url={brand.url} name={brand.name} color={brand.color} mark={brand.mark} />
      <div className="min-w-0 flex-1">
        <p className="text-sm font-medium text-neutral-100 truncate leading-tight flex items-center gap-1.5">
          {brand.name}
          <span className="text-[9px] px-1.5 py-px rounded-full bg-[#d4a853] bg-opacity-20 text-[#d4a853] font-semibold tracking-wide flex-shrink-0">
            Featured
          </span>
        </p>
        <p className="text-xs text-neutral-500 truncate leading-tight mt-0.5">
          {brand.maker}
        </p>
      </div>
      <svg
        className="w-3.5 h-3.5 text-neutral-500 group-hover:text-[#d4a853]
                   flex-shrink-0 opacity-0 group-hover:opacity-100
                   group-hover:translate-x-0.5 transition-all duration-300"
        viewBox="0 0 14 14" fill="none" aria-hidden="true"
      >
        <path d="M4 1h9v9M13 1L1 13" stroke="currentColor" strokeWidth="1.5"
              strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </a>
  );
}

export function AdvertisePlaceholder() {
  return (
    <a
      href="/advertise"
      className="glass group flex items-center gap-3.5 p-4 rounded-xl
                 animate-in hover:-translate-y-0.5 active:scale-[0.98]
                 transition-all duration-300 border border-dashed border-[#2a2a2a]
                 hover:border-[#d4a853] hover:border-opacity-30"
    >
      <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0
                      bg-[#1a1a1a] border border-[#262626] group-hover:border-[#d4a853] group-hover:border-opacity-20 transition-colors">
        <span className="text-[17px] text-neutral-600 group-hover:text-[#d4a853] transition-colors">+</span>
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-sm font-medium text-neutral-500 truncate leading-tight group-hover:text-neutral-300 transition-colors">
          Advertise here
        </p>
        <p className="text-xs text-neutral-600 truncate leading-tight mt-0.5">
          Your tool in this spot
        </p>
      </div>
    </a>
  );
}

export function FeaturedSection({
  items,
  children,
}: {
  items: AiBrand[];
  children: React.ReactNode;
}) {
  if (items.length === 0) return null;

  return (
    <div className="mb-5">
      <p className="text-[10px] uppercase tracking-[0.15em] text-neutral-600 mb-2.5 px-1">
        Featured
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {items.map((brand, idx) => (
          <div key={brand.name + brand.maker} style={{ animationDelay: `${idx * 40}ms` }}>
            <FeaturedCard brand={brand} />
          </div>
        ))}
        {children}
      </div>
    </div>
  );
}
