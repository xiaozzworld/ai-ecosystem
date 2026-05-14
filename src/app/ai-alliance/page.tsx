import type { Metadata } from "next";
import brands from "@/components/ai-brands";

export const metadata: Metadata = {
  title: "AI Alliance — 100+ AI Tools Directory",
  description: "Discover 100+ best AI tools — chatbots, image generation, video, code assistants, music, voice, and more.",
};

const categories = [
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
  return (
    <main className="flex-1 w-full max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-neutral-900 tracking-tight">
          AI Alliance
        </h1>
        <p className="mt-2 text-neutral-500">
          {brands.length}+ AI tools across {categories.length} categories
        </p>
      </div>

      {categories.map((category) => {
        const items = brands.filter((b) => b.category === category);
        if (items.length === 0) return null;
        return (
          <section key={category} className="mb-10">
            <h2 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-3 px-2 flex items-center gap-2">
              {category}
              <span className="font-normal text-neutral-300">({items.length})</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1.5">
              {items.map((brand) => (
                <a
                  key={brand.name + brand.maker}
                  href={brand.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 px-3 py-2.5 rounded-lg
                             hover:bg-neutral-50
                             border border-transparent hover:border-neutral-200
                             transition-all duration-150 active:scale-[0.98]"
                >
                  {/* ── Brand Logo (left) ── */}
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: brand.color }}
                  >
                    <span className="text-white text-xs font-bold leading-none select-none">
                      {brand.mark}
                    </span>
                  </div>

                  {/* ── Name & Maker (right) ── */}
                  <div className="min-w-0 flex-1">
                    <p className="text-[13px] font-semibold text-neutral-800 truncate leading-tight">
                      {brand.name}
                    </p>
                    <p className="text-[11px] text-neutral-400 truncate leading-tight mt-0.5">
                      {brand.maker}
                    </p>
                  </div>

                  {/* ── External arrow (appears on hover) ── */}
                  <svg
                    className="w-3 h-3 text-neutral-300 group-hover:text-neutral-500 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-all"
                    viewBox="0 0 14 14" fill="none"
                    aria-hidden="true"
                  >
                    <path d="M4 1h9v9M13 1L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              ))}
            </div>
          </section>
        );
      })}

      <footer className="mt-16 pt-6 border-t border-neutral-100 text-center text-xs text-neutral-300">
        Click any row to visit the official site. AI Alliance &middot; {brands.length}+ tools &middot; Instant logo display.
      </footer>
    </main>
  );
}
