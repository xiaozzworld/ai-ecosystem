import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Ecosystem Blog — Comparisons & Guides",
  description:
    "In-depth AI tool comparisons, guides, and analysis. Helping you choose the best AI tools for your workflow.",
};

const posts = [
  {
    title: "ChatGPT vs Claude vs Gemini (2026) — Which AI Chatbot Is Best?",
    slug: "chatgpt-vs-claude-vs-gemini",
    date: "May 2026",
    excerpt:
      "In-depth comparison of the three leading AI chatbots: coding ability, writing quality, reasoning power, pricing, and which one fits your workflow.",
  },
];

export default function BlogPage() {
  return (
    <main className="flex-1 w-full max-w-3xl mx-auto px-4 py-16">
      <h1
        className="text-3xl sm:text-4xl font-normal tracking-tight mb-3"
        style={{ fontFamily: "var(--font-display)", color: "#f5f5f5" }}
      >
        AI Ecosystem Blog
      </h1>
      <p className="text-sm text-neutral-400 mb-12 max-w-lg leading-relaxed">
        AI tool comparisons, guides, and analysis to help you choose the right tools.
      </p>

      <div className="space-y-4">
        {posts.map((post, i) => (
          <a
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="glass glass-hover block p-5 rounded-xl animate-in group"
            style={{ animationDelay: `${i * 60}ms` }}
          >
            <p className="text-xs text-neutral-500 mb-1.5">{post.date}</p>
            <h2 className="text-base font-semibold text-neutral-100 group-hover:text-[#d4a853] transition-colors leading-snug mb-1.5">
              {post.title}
            </h2>
            <p className="text-xs text-neutral-400 leading-relaxed">{post.excerpt}</p>
          </a>
        ))}
      </div>
    </main>
  );
}
