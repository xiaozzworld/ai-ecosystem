import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Use AI Image Generators — Beginner's Guide (2026)",
  description:
    "Learn how to use AI image generators like Midjourney, DALL·E 3, Stable Diffusion, and Firefly. Prompt writing tips, tool comparisons, and best practices for beginners.",
  keywords: [
    "AI image generation guide", "how to use AI image generator",
    "Midjourney tutorial", "DALL·E guide", "Stable Diffusion beginner",
    "AI art prompt tips", "best AI image generator 2026", "AI image tools",
  ],
  openGraph: {
    title: "How to Use AI Image Generators — Beginner's Guide (2026)",
    description:
      "Learn how to use AI image generators: prompt writing tips, tool comparisons, and best practices for beginners.",
    type: "article",
  },
};

const imageTools = [
  {
    name: "Midjourney",
    bestFor: "Artistic quality & aesthetics",
    desc: "Midjourney consistently produces the most visually stunning images — rich lighting, cinematic composition, and a distinctive painterly quality. It runs through Discord (or the web app), making it slightly less convenient than web-native tools, but the output quality is unmatched for creative work, concept art, and mood boards.",
    pricing: "$10–$60/mo (no free tier)",
  },
  {
    name: "DALL·E 3",
    bestFor: "Prompt understanding & ease of use",
    desc: "DALL·E 3 understands natural language better than any other image model. You don't need special prompt syntax — just describe what you want in plain English, and it delivers. Built into ChatGPT, so you can iterate through conversation. Best for beginners and quick results.",
    pricing: "Included with ChatGPT Plus ($20/mo)",
  },
  {
    name: "Stable Diffusion",
    bestFor: "Control, customization & open-source",
    desc: "Stable Diffusion is the only fully open-source option. You can run it locally on your own GPU, use community fine-tuned models (thousands on Civitai), and control every parameter. The trade-off: it requires technical setup and produces more inconsistent results without skilled prompting.",
    pricing: "Free (open-source) · Online hosts from $10/mo",
  },
  {
    name: "Adobe Firefly",
    bestFor: "Commercial safety & Photoshop integration",
    desc: "Firefly is trained exclusively on Adobe Stock and public domain images — no copyright risks. It's built into Photoshop, Illustrator, and Express, making it the natural choice for designers already in the Adobe ecosystem. Generative Fill and Generative Expand are genuinely useful for photo editing.",
    pricing: "Included with Creative Cloud · Free tier available",
  },
  {
    name: "Flux",
    bestFor: "Photorealism & text rendering",
    desc: "Flux (by Black Forest Labs, the team behind Stable Diffusion) produces hyper-realistic images and is dramatically better at rendering readable text in images — a weakness of most other models. If you need images with logos, signs, or legible text, Flux is the current leader.",
    pricing: "Free (open-weight) · API: $0.003/image",
  },
  {
    name: "Leonardo AI",
    bestFor: "Game assets & fine-tuned models",
    desc: "Leonardo specializes in game-ready assets — character designs, environments, props, and sprites. It offers fine-tuned models for specific art styles, an intuitive canvas editor, and real-time generation. Popular with indie game developers and tabletop creators.",
    pricing: "Free tier · Pro $12/mo",
  },
  {
    name: "Ideogram",
    bestFor: "Typography & graphic design",
    desc: "Ideogram excels at putting text into images — logos, posters, t-shirt designs, social media graphics. Version 3 handles complex typography with multiple fonts and layouts. If your image needs to include a headline or brand name, Ideogram is the tool to reach for.",
    pricing: "Free tier · Pro $8/mo",
  },
];

const promptTips = [
  {
    tip: "Be specific about subject, not just style",
    detail: '"A golden retriever puppy sitting in a sunlit garden" beats "Beautiful dog in nice lighting." The AI needs a clear subject to anchor the image. / 主体要具体，"阳光花园里坐着的金毛幼犬"比"好看的狗"好得多。',
  },
  {
    tip: "Add composition and lighting cues",
    detail: 'Terms like "cinematic lighting," "golden hour," "shallow depth of field," "wide shot," and "close-up portrait" dramatically change output quality. These are the highest-ROI words in any prompt. / "电影光效""黄金时刻""浅景深""广角""特写"这几个词对画质提升最大。',
  },
  {
    tip: "Name a style or artist reference",
    detail: 'Midjourney and SD respond well to style references: "oil painting," "watercolor," "3D render Octane," "anime style," "cyberpunk aesthetic." You can also reference mediums: "35mm film photography," "pencil sketch," "digital concept art." / 指定风格或媒介效果显著，"油画""水彩""Octane 渲染""赛博朋克""35mm 胶片"等。',
  },
  {
    tip: "Use negative prompts for what you DON'T want",
    detail: 'Stable Diffusion supports negative prompts: "--no blur, distorted, extra fingers, watermark." Midjourney uses "--no" parameter. DALL·E handles this through conversation instead. / Stable Diffusion 支持负面提示词排除不想要的东西，Midjourney 用 --no 参数。',
  },
  {
    tip: "Iterate — the first result is rarely the best",
    detail: "Professional AI artists generate 20-50 variations, pick the best 2-3, then refine with inpainting or img2img. Treat the first output as a sketch, not the final product. / 专业 AI 画师会生成 20-50 张变体再精选，第一张只是草稿。",
  },
];

export default function BlogPost() {
  return (
    <main className="flex-1 w-full max-w-3xl mx-auto px-4 py-16">
      <article className="prose prose-invert prose-sm max-w-none">
        {/* Header */}
        <div className="mb-10 not-prose">
          <a
            href="/ai-alliance"
            className="inline-flex items-center gap-1.5 text-xs text-neutral-500 hover:text-neutral-300 transition-colors mb-6"
          >
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 12H5m6-6l-6 6 6 6" />
            </svg>
            Back to AI Tools Directory
          </a>
          <h1
            className="text-3xl sm:text-4xl font-normal tracking-tight mb-4 leading-tight"
            style={{ fontFamily: "var(--font-display)", color: "#f5f5f5" }}
          >
            How to Use AI Image Generators: A Beginner's Guide
          </h1>
          <p className="text-sm text-neutral-400">Updated May 2026 · 8 min read</p>
        </div>

        {/* Intro */}
        <p className="text-neutral-300 leading-relaxed">
          AI image generators can turn a sentence into a stunning image in seconds. But if you've ever typed
          "make a cool picture" into one of these tools and gotten something mediocre, you're not alone.
          The difference between an okay image and a great one comes down to three things: <strong>picking the right tool</strong>,
          <strong> writing effective prompts</strong>, and <strong>knowing how to iterate</strong>.
        </p>
        <p className="text-neutral-300 leading-relaxed mt-3">
          This guide covers the 7 best image generators in 2026, what each is best at, and the prompt-writing
          techniques that actually work — whether you're making social media graphics, concept art, product mockups,
          or just experimenting for fun.
        </p>
        <p className="text-neutral-500 text-sm mt-2">
          AI 图像生成器一句话就能出图，但写出好提示词、选对工具、懂得迭代优化，才是从"还行"到"惊艳"的关键。本指南介绍 7 款主流工具和实测有效的提示词技巧。
        </p>

        {/* Tool overview */}
        <h2 className="text-xl font-semibold text-neutral-100 mt-12 mb-4" style={{ fontFamily: "var(--font-display)" }}>
          The 7 Best AI Image Generators / 7 款最佳 AI 图像工具
        </h2>

        {imageTools.map((tool, i) => (
          <div key={tool.name} className="not-prose mt-5">
            <div className="glass p-4 rounded-xl animate-in" style={{ animationDelay: `${i * 60}ms` }}>
              <h3 className="text-sm font-semibold text-neutral-100">
                {tool.name}
                <span className="text-[10px] text-[#d4a853] font-medium ml-2">— {tool.bestFor}</span>
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed mt-1.5">{tool.desc}</p>
              <p className="text-xs text-neutral-500 mt-1.5">{tool.pricing}</p>
            </div>
          </div>
        ))}

        {/* Tool comparison table */}
        <h2 className="text-xl font-semibold text-neutral-100 mt-12 mb-4" style={{ fontFamily: "var(--font-display)" }}>
          Tool Comparison / 工具对比
        </h2>
        <div className="overflow-x-auto not-prose mb-10">
          <table className="w-full text-xs text-neutral-300 border-collapse">
            <thead>
              <tr className="border-b border-[#262626] text-neutral-400">
                <th className="text-left py-2 pr-4 font-medium">Tool</th>
                <th className="text-left py-2 px-4 font-medium">Best For</th>
                <th className="text-left py-2 px-4 font-medium">Ease of Use</th>
                <th className="text-left py-2 px-4 font-medium">Output Quality</th>
                <th className="text-left py-2 pl-4 font-medium">Price</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#262626]">
                <td className="py-2.5 pr-4 text-[#d4a853] font-medium">Midjourney</td>
                <td className="py-2.5 px-4">Art & aesthetics</td>
                <td className="py-2.5 px-4">★★★☆</td>
                <td className="py-2.5 px-4 text-green-400">★★★★★</td>
                <td className="py-2.5 pl-4">$10–$60/mo</td>
              </tr>
              <tr className="border-b border-[#262626]">
                <td className="py-2.5 pr-4">DALL·E 3</td>
                <td className="py-2.5 px-4">Beginners, quick results</td>
                <td className="py-2.5 px-4 text-green-400">★★★★★</td>
                <td className="py-2.5 px-4">★★★★☆</td>
                <td className="py-2.5 pl-4">$20/mo (with ChatGPT)</td>
              </tr>
              <tr className="border-b border-[#262626]">
                <td className="py-2.5 pr-4">Stable Diffusion</td>
                <td className="py-2.5 px-4">Control, open-source</td>
                <td className="py-2.5 px-4">★★☆☆</td>
                <td className="py-2.5 px-4">★★★★☆</td>
                <td className="py-2.5 pl-4 text-green-400">Free</td>
              </tr>
              <tr className="border-b border-[#262626]">
                <td className="py-2.5 pr-4">Adobe Firefly</td>
                <td className="py-2.5 px-4">Commercial-safe, Photoshop</td>
                <td className="py-2.5 px-4 text-green-400">★★★★★</td>
                <td className="py-2.5 px-4">★★★★☆</td>
                <td className="py-2.5 pl-4">From $0</td>
              </tr>
              <tr className="border-b border-[#262626]">
                <td className="py-2.5 pr-4 text-[#d4a853] font-medium">Flux</td>
                <td className="py-2.5 px-4">Photorealism, text</td>
                <td className="py-2.5 px-4">★★★☆</td>
                <td className="py-2.5 px-4 text-green-400">★★★★★</td>
                <td className="py-2.5 pl-4 text-green-400">Free / $0.003</td>
              </tr>
              <tr className="border-b border-[#262626]">
                <td className="py-2.5 pr-4">Leonardo AI</td>
                <td className="py-2.5 px-4">Game assets</td>
                <td className="py-2.5 px-4">★★★★☆</td>
                <td className="py-2.5 px-4">★★★★☆</td>
                <td className="py-2.5 pl-4">Free / $12/mo</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4">Ideogram</td>
                <td className="py-2.5 px-4">Typography & graphics</td>
                <td className="py-2.5 px-4">★★★★☆</td>
                <td className="py-2.5 px-4">★★★★☆</td>
                <td className="py-2.5 pl-4">Free / $8/mo</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Prompt writing */}
        <h2 className="text-xl font-semibold text-neutral-100 mt-12 mb-4" style={{ fontFamily: "var(--font-display)" }}>
          How to Write Better Prompts / 怎么写好提示词
        </h2>
        <p className="text-neutral-300 leading-relaxed">
          A good prompt has three layers: <strong>Subject</strong> (what), <strong>Context</strong> (where/when/how),
          and <strong>Style</strong> (how it should look). The more specific each layer, the better the output.
        </p>
        <p className="text-neutral-300 leading-relaxed mt-3">
          Bad: <em>"a castle"</em> → Good: <em>"a gothic castle on a cliff at sunset, cinematic lighting, wide shot, photorealistic 8K"</em>
        </p>
        <p className="text-neutral-300 leading-relaxed mt-1">
          Bad: <em>"a logo"</em> → Good: <em>"minimalist tech startup logo, geometric shapes, navy blue and gold, clean sans-serif text reading 'NOVA', flat vector style, white background"</em>
        </p>

        <div className="not-prose space-y-3 mt-6 mb-10">
          {promptTips.map((item, i) => (
            <div key={i} className="glass p-4 rounded-xl animate-in" style={{ animationDelay: `${i * 60}ms` }}>
              <p className="text-sm font-semibold text-neutral-100 mb-1">
                {i + 1}. {item.tip}
              </p>
              <p className="text-xs text-neutral-400 leading-relaxed">{item.detail}</p>
            </div>
          ))}
        </div>

        {/* Target tool */}
        <h2 className="text-xl font-semibold text-neutral-100 mt-12 mb-4" style={{ fontFamily: "var(--font-display)" }}>
          Know What Each Tool Excels At / 针对工具特性写提示词
        </h2>
        <p className="text-neutral-300 leading-relaxed">
          Don't use the same prompt across all tools. Midjourney responds to artistic language and style references.
          DALL·E 3 prefers natural language descriptions. Stable Diffusion needs precise technical parameters.
          If you're switching tools, tweak your prompt style to match what that model handles best.
        </p>
        <div className="not-prose mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
          <div className="glass p-4 rounded-xl">
            <p className="text-sm font-semibold text-neutral-100 mb-2">Midjourney</p>
            <p className="text-xs text-neutral-400 leading-relaxed">
              <span className="text-neutral-500">Style:</span> "Cinematic still from a Wong Kar-wai film, neon-lit alleyway in the rain, shallow DOF, 8K --ar 16:9 --stylize 250"
            </p>
          </div>
          <div className="glass p-4 rounded-xl">
            <p className="text-sm font-semibold text-neutral-100 mb-2">DALL·E 3</p>
            <p className="text-xs text-neutral-400 leading-relaxed">
              <span className="text-neutral-500">Style:</span> "A cozy coffee shop interior on a rainy afternoon, warm lighting, barista pouring latte art, photorealistic"
            </p>
          </div>
          <div className="glass p-4 rounded-xl">
            <p className="text-sm font-semibold text-neutral-100 mb-2">Stable Diffusion</p>
            <p className="text-xs text-neutral-400 leading-relaxed">
              <span className="text-neutral-500">Style:</span> "masterpiece, best quality, 1girl, detailed eyes, soft lighting, depth of field, (photorealistic:1.3), RAW photo"
            </p>
          </div>
        </div>

        {/* Video generation */}
        <h2 className="text-xl font-semibold text-neutral-100 mt-12 mb-4" style={{ fontFamily: "var(--font-display)" }}>
          Beyond Images: AI Video Generation / 不止图片：AI 视频生成
        </h2>
        <p className="text-neutral-300 leading-relaxed">
          AI video generation has matured rapidly. OpenAI's <strong>Sora</strong> creates cinematic video clips from text prompts.
          <strong> Runway</strong> offers a full video editing suite with AI-powered inpainting, motion tracking, and style transfer.
          <strong> Kling</strong> (可灵) by Kuaishou and <strong> Pika</strong> round out the top contenders with fast, accessible
          video creation for social media. If you're already generating images, video is the natural next step — Runway and Pika
          both support image-to-video workflows.
        </p>
        <p className="text-neutral-500 text-sm mt-2">
          AI 视频生成也已成熟：Sora 文本生成电影级视频，Runway 提供完整 AI 视频编辑套件，可灵 (快手) 和 Pika 主打社交媒体视频。从图片到视频是自然的进阶路径。
        </p>
        <p className="text-neutral-300 leading-relaxed mt-3">
          See our directory for{" "}
          <a href="/category/image-generation" className="text-[#d4a853] hover:underline">all image generators</a>
          {" "}and{" "}
          <a href="/category/video-generation" className="text-[#d4a853] hover:underline">video generation tools</a>.
        </p>

        {/* Which tool to start with */}
        <h2 className="text-xl font-semibold text-neutral-100 mt-12 mb-4" style={{ fontFamily: "var(--font-display)" }}>
          Which Tool Should You Start With? / 从哪个工具开始？
        </h2>
        <div className="not-prose space-y-3 mb-10">
          {[
            {
              rec: "Start with DALL·E 3 if you're a complete beginner",
              text: "It's built into ChatGPT, understands plain English best, and requires zero setup. You'll get good results on your first try. / 完全新手首选，内置于 ChatGPT，理解白话能力最强，零门槛。",
            },
            {
              rec: "Move to Midjourney when you want better quality",
              text: "Once you understand the basics of prompting, Midjourney's output quality is a clear step up. The Discord/web interface takes 10 minutes to learn. / 掌握基础后升级到 Midjourney，画质明显上一个台阶。",
            },
            {
              rec: "Try Stable Diffusion or Flux when you want full control",
              text: "When you need specific poses, compositions, or styles that off-the-shelf tools can't deliver. The learning curve is steeper but the creative freedom is unmatched. / 需要完全控制时用 SD 或 Flux，学习曲线陡但自由度最高。",
            },
            {
              rec: "Use Firefly if you're already an Adobe user",
              text: "Generative Fill in Photoshop is worth the subscription alone. No other tool integrates AI image generation this deeply into a professional editing workflow. / Adobe 用户直接选 Firefly，Photoshop 里的生成式填充无可替代。",
            },
          ].map((item, i) => (
            <div key={i} className="glass p-4 rounded-xl">
              <p className="text-sm font-semibold text-neutral-100 mb-1">{item.rec}</p>
              <p className="text-xs text-neutral-400 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="not-prose mt-12 p-6 rounded-2xl text-center" style={{ background: "rgba(212,168,83,0.06)", border: "1px solid rgba(212,168,83,0.12)" }}>
          <p className="text-sm text-neutral-200 mb-1 font-medium">
            Explore all AI image & video tools
          </p>
          <p className="text-xs text-neutral-400 mb-4">
            Browse 12+ image generators and 8+ video tools in our curated directory.
          </p>
          <a
            href="/category/image-generation"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#d4a853] text-black text-sm font-semibold
                       hover:bg-[#c49a3a] active:scale-[0.98] transition-all duration-200"
          >
            Browse Image Tools
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 14 14">
              <path d="M4 1h9v9M13 1L1 13" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        {/* Related */}
        <p className="text-xs text-neutral-600 mt-10">
          Related:{" "}
          <a href="/category/image-generation" className="text-[#d4a853] hover:underline">Image Generation Tools</a>
          {" · "}
          <a href="/category/video-generation" className="text-[#d4a853] hover:underline">Video Generation Tools</a>
          {" · "}
          <a href="/blog/best-ai-coding-tools-2026" className="text-[#d4a853] hover:underline">Best AI Coding Tools</a>
          {" · "}
          <a href="/blog" className="text-[#d4a853] hover:underline">All posts</a>
        </p>
      </article>
    </main>
  );
}
