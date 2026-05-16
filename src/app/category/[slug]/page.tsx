import type { Metadata } from "next";
import { ORDERED_CATEGORIES, categoryToSlug, slugToCategory, getCategoryDescription } from "@/lib/categories";
import { CategoryContent } from "./CategoryContent";

export function generateStaticParams() {
  return ORDERED_CATEGORIES.map((cat) => ({ slug: categoryToSlug(cat) }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = slugToCategory(slug);
  if (!category) {
    return { title: "Category Not Found — AI Ecosystem" };
  }
  const title = `Best ${category} AI Tools (2026) — AI Ecosystem`;
  const description = getCategoryDescription(category);
  return {
    title,
    description,
    openGraph: { title, description, type: "website" },
    alternates: { canonical: `https://www.aiecosystem.top/category/${slug}` },
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = slugToCategory(slug);

  if (!category) {
    return (
      <main className="flex-1 w-full max-w-6xl mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-semibold text-neutral-200">Category not found</h1>
        <a
          href="/ai-alliance"
          className="mt-4 inline-block text-sm text-[#d4a853] hover:underline"
        >
          ← Back to AI Ecosystem
        </a>
      </main>
    );
  }

  return <CategoryContent category={category} />;
}
