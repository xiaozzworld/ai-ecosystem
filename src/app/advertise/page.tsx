import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Advertise — Sponsor AI Ecosystem",
  description: "Get your AI tool featured at the top of our category pages. Reach 100+ daily AI enthusiasts and decision-makers.",
};

const benefits = [
  { en: "Top-of-category placement", zh: "分类顶部推荐位" },
  { en: "Gold highlighted card", zh: "金色高亮卡片" },
  { en: "Direct link to your site", zh: "直达你的官网" },
  { en: "30+ day placement", zh: "展示 30+ 天" },
];

const pricing = [
  { label: "1 category", price: "$50", enLabel: "1 category", zhLabel: "1 个分类" },
  { label: "3 categories", price: "$120", enLabel: "3 categories (save 20%)", zhLabel: "3 个分类（省 20%）" },
  { label: "All 12 categories", price: "$350", enLabel: "All categories (save 42%)", zhLabel: "全部 12 个分类（省 42%）" },
];

export default function AdvertisePage() {
  return (
    <main className="flex-1 w-full max-w-3xl mx-auto px-4 py-16">
      <h1
        className="text-3xl sm:text-4xl font-normal tracking-tight mb-3"
        style={{ fontFamily: "var(--font-display)", color: "#f5f5f5" }}
      >
        Advertise on AI Ecosystem
      </h1>
      <p className="text-sm text-neutral-400 mb-14 max-w-lg leading-relaxed">
        Put your AI tool in front of developers, founders, and AI early-adopters browsing our curated directory.
      </p>

      {/* How it works */}
      <section className="mb-16">
        <h2 className="text-xs uppercase tracking-[0.15em] text-neutral-500 mb-6">
          How It Works
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {benefits.map((b, i) => (
            <div
              key={b.en}
              className="glass p-4 rounded-xl flex items-start gap-3 animate-in"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <span className="w-6 h-6 rounded-full bg-[#d4a853] bg-opacity-15 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-[11px] font-semibold text-[#d4a853]">{i + 1}</span>
              </span>
              <div>
                <p className="text-sm text-neutral-200">{b.en}</p>
                <p className="text-xs text-neutral-500 mt-0.5">{b.zh}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Example card */}
      <section className="mb-16">
        <h2 className="text-xs uppercase tracking-[0.15em] text-neutral-500 mb-6">
          How Your Card Looks
        </h2>
        <div className="max-w-sm">
          <div className="featured-card flex items-center gap-3.5 p-4 rounded-xl">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                 style={{ backgroundColor: "#6366F122", border: "1px solid #6366F133" }}>
              <span className="text-[11px] font-bold text-[#6366F1]">Y</span>
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium text-neutral-100 truncate leading-tight flex items-center gap-1.5">
                Your Tool
                <span className="text-[9px] px-1.5 py-px rounded-full bg-[#d4a853] bg-opacity-20 text-[#d4a853] font-semibold tracking-wide">
                  Featured
                </span>
              </p>
              <p className="text-xs text-neutral-500 truncate leading-tight mt-0.5">
                Your Company
              </p>
            </div>
          </div>
        </div>
        <p className="text-xs text-neutral-500 mt-4">Appears at the top of your chosen categories, highlighted with a gold accent.</p>
      </section>

      {/* Pricing */}
      <section className="mb-16">
        <h2 className="text-xs uppercase tracking-[0.15em] text-neutral-500 mb-6">
          Pricing <span className="text-neutral-600">/ month</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {pricing.map((p, i) => (
            <div
              key={p.label}
              className="glass p-5 rounded-xl text-center animate-in"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <p className="text-xs text-neutral-400 mb-2">
                {p.enLabel} / {p.zhLabel}
              </p>
              <p className="text-3xl font-normal tracking-tight mb-1" style={{ fontFamily: "var(--font-display)", color: "#f5f5f5" }}>
                {p.price}
              </p>
              <p className="text-[10px] text-neutral-600">per month</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section>
        <h2 className="text-xs uppercase tracking-[0.15em] text-neutral-500 mb-6">
          Get Started
        </h2>
        <div className="glass p-6 rounded-2xl">
          <p className="text-sm text-neutral-300 mb-4 leading-relaxed">
            Email us with your tool name, website, and preferred categories. We&apos;ll get back to you within 24 hours.
          </p>
          <a
            href="mailto:admin@aiecosystem.top?subject=Sponsor%20Inquiry%20-%20AI%20Ecosystem"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#d4a853] text-black text-sm font-semibold
                       hover:bg-[#c49a3a] active:scale-[0.98] transition-all duration-200"
          >
            admin@aiecosystem.top
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 14 14">
              <path d="M4 1h9v9M13 1L1 13" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </section>
    </main>
  );
}
