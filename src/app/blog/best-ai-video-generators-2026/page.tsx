import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best AI Video Generators in 2026 — Runway vs Pika vs Sora vs Kling vs Dream Machine",
  description:
    "Runway vs Pika vs Sora vs Kling vs Dream Machine: real-world comparison of the top 5 AI video generators. Pricing, quality, speed, and which one fits your workflow.",
  keywords: [
    "best AI video generator 2026", "Runway vs Pika", "Sora vs Runway",
    "Kling AI review", "Dream Machine vs Sora", "AI video tools comparison",
    "AI text to video", "best AI video maker",
  ],
  openGraph: {
    title: "Best AI Video Generators in 2026 — Runway vs Pika vs Sora vs Kling vs Dream Machine",
    description:
      "Runway vs Pika vs Sora vs Kling vs Dream Machine: real-world comparison of the top 5 AI video generators.",
    type: "article",
  },
};

const tools = [
  {
    name: "Runway",
    maker: "Runway (NYC)",
    bestFor: "Professional video editing & control",
    desc: "Runway is the veteran in AI video — it launched Gen-3 Alpha in mid-2024 and has kept improving since. It offers the most complete toolset: text-to-video, image-to-video, video-to-video, motion brush for precise control, and real-time preview. Used by professional filmmakers and agencies. The output is consistently cinematic.",
    strengths: "Most control, cinematic quality, pro features, real-time editing",
    pricing: "Free (limited) · Standard $15/mo · Pro $35/mo · Unlimited $95/mo",
    tier: "Best for Pros",
    tierColor: "#d4a853",
  },
  {
    name: "Pika",
    maker: "Pika (Stanford founders)",
    bestFor: "Quick social media videos & Lip Sync",
    desc: "Pika 2.0 brought a breakthrough feature: Lip Sync, which syncs AI-generated mouth movements to audio — perfect for short-form talking-head content. The interface is dead simple, generation is fast (under 30 seconds for a clip), and the results punch above their weight for social media. Pika 2.1 added better motion consistency and 1080p output.",
    strengths: "Lip Sync, easy to use, fast generation, great for social media",
    pricing: "Free (limited) · Basic $10/mo · Pro $35/mo",
    tier: "Best for Social",
    tierColor: "#60a5fa",
  },
  {
    name: "Sora",
    maker: "OpenAI",
    bestFor: "Prompt understanding & realism",
    desc: "Sora is OpenAI's entry into video generation, released to ChatGPT Plus/Pro subscribers in December 2024. Its standout trait is prompt understanding — you describe a scene in plain English and Sora gets it right more often than competitors. Video quality is excellent, with strong realism and coherent motion. Integrated into ChatGPT, so you can iterate through conversation. The main downside: limited generations on the $20/mo Plus plan (50 videos/month at 480p).",
    strengths: "Best prompt understanding, strong realism, ChatGPT integration",
    pricing: "Included with ChatGPT Plus $20/mo (limited) · Pro $200/mo (more)",
    tier: "Best Prompt Following",
    tierColor: "#34d399",
  },
  {
    name: "Kling",
    maker: "Kuaishou (快手)",
    bestFor: "Realistic physics & motion",
    desc: "Kling, from Chinese tech giant Kuaishou, excels at realistic physics simulation — objects fall naturally, water flows correctly, and character movements have real weight. The Kling 1.6 model (early 2025) significantly improved resolution and generation speed. Available internationally via the Kling AI web app. Particularly strong for action scenes, nature footage, and anything requiring believable motion.",
    strengths: "Physics simulation, motion realism, 1080p output, fast iteration",
    pricing: "Free tier (limited credits) · Paid plans from ~$9/mo",
    tier: "Best Physics",
    tierColor: "#a78bfa",
  },
  {
    name: "Dream Machine",
    maker: "Luma AI (Palo Alto)",
    bestFor: "Photorealism & simplicity",
    desc: "Luma AI's Dream Machine launched in June 2024 with a simple pitch: type a prompt, get a photorealistic video in under 2 minutes. It delivers on that promise. The output often looks like real camera footage — lighting, textures, and depth of field are consistently natural. Less control than Runway, but if you want something that just looks good with minimal effort, Dream Machine is hard to beat.",
    strengths: "Photorealistic output, simple interface, fast generation",
    pricing: "Free (30 gens/mo) · Standard $9.99/mo · Pro $29.99/mo",
    tier: "Best Photorealism",
    tierColor: "#f97316",
  },
];

const headToHead = [
  {
    title: "Video Quality / 画质对决",
    winner: "Tie: Runway & Dream Machine",
    text: "Runway produces the most cinematic, aesthetically composed shots — rich lighting, dramatic angles, film-like color grading. Dream Machine nails photorealism: its output often passes for real camera footage. Sora is a close third with strong realism and better prompt following. Pika and Kling can produce great results but are slightly less consistent.",
    zh: "Runway 画面最具电影感，光影构图专业。Dream Machine 照片级真实感最强，输出常能以假乱真。Sora 紧随其后兼得真实感和语义理解。Pika 和 Kling 偶尔能出佳作但一致性稍弱。",
  },
  {
    title: "Prompt Understanding / 语义理解",
    winner: "Sora",
    text: "OpenAI's language expertise shows. Sora understands complex scene descriptions — multiple characters, specific camera movements, lighting conditions — better than any competitor. Describe a dolly zoom in a rain-soaked alley at golden hour, and Sora delivers. Runway and Dream Machine need simpler prompts to get the best results.",
    zh: "OpenAI 的语言能力在 Sora 上展现无遗。它能理解复杂场景描述——多角色、指定运镜、光照条件——比其他工具都强。Runway 和 Dream Machine 需要更简洁的提示词才能出最佳效果。",
  },
  {
    title: "Generation Speed / 生成速度",
    winner: "Pika & Dream Machine",
    text: "Pika and Dream Machine are the fastest — most clips generate in 30-120 seconds. Runway's higher-quality modes take 2-5 minutes for a 10-second clip. Sora's speed varies with demand (slower during peak hours on the Plus plan). Kling sits in the middle at ~2 minutes per clip.",
    zh: "Pika 和 Dream Machine 最快，多数片段 30-120 秒生成。Runway 高质量模式 10 秒片段需 2-5 分钟。Sora 速度受服务器负载影响（Plus 高峰期较慢）。Kling 居中约 2 分钟。",
  },
  {
    title: "Control & Editing / 控制与编辑",
    winner: "Runway",
    text: "Runway's motion brush, camera controls, and real-time preview give it a massive edge for professional work. You can paint which areas move, set keyframes, and fine-tune motion. Sora has basic remix and blend features. Pika, Kling, and Dream Machine offer limited control beyond the initial prompt.",
    zh: "Runway 的运动笔刷、镜头控制和实时预览为专业工作提供了巨大优势——可以涂抹运动区域、设关键帧、微调动作。Sora 有基本的重新混合功能。Pika、Kling 和 Dream Machine 在初始提示词之外的控制有限。",
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
            Best AI Video Generators in 2026: Runway, Pika, Sora, Kling & Dream Machine Compared
          </h1>
          <p className="text-sm text-neutral-400">Updated May 2026 · 9 min read</p>
        </div>

        {/* Intro */}
        <p className="text-neutral-300 leading-relaxed">
          AI video generation has moved fast. In 2026 you can type a sentence and get a cinematic clip in under a minute.
          But with <strong>Runway</strong>, <strong>Pika</strong>, <strong>OpenAI Sora</strong>, <strong>Kling</strong>, and <strong>Dream Machine</strong> all competing for your attention,
          which one actually delivers? We tested all five on video quality, prompt accuracy, speed, and real-world usability.
        </p>
        <p className="text-neutral-500 text-sm italic mt-2">
          2026 年，AI 视频生成已经到了输入一句话就能出片的地步。Runway、Pika、Sora、Kling、Dream Machine 五强争霸，哪家真正好用？我们从画质、语义准确度、速度和实际使用体验全面测试。
        </p>

        {/* Quick comparison table */}
        <h2 className="text-xl font-semibold text-neutral-100 mt-12 mb-4" style={{ fontFamily: "var(--font-display)" }}>
          Quick Comparison / 快速对比
        </h2>
        <div className="overflow-x-auto not-prose mb-10">
          <table className="w-full text-xs text-neutral-300 border-collapse">
            <thead>
              <tr className="border-b border-[#262626] text-neutral-400">
                <th className="text-left py-2 pr-4 font-medium">Feature</th>
                <th className="text-left py-2 px-3 font-medium">Runway</th>
                <th className="text-left py-2 px-3 font-medium">Pika</th>
                <th className="text-left py-2 px-3 font-medium">Sora</th>
                <th className="text-left py-2 px-3 font-medium">Kling</th>
                <th className="text-left py-2 pl-3 font-medium">Dream Machine</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#262626]">
                <td className="py-2.5 pr-4 text-neutral-400">Company</td>
                <td className="py-2.5 px-3">Runway (NYC)</td>
                <td className="py-2.5 px-3">Pika (Stanford)</td>
                <td className="py-2.5 px-3">OpenAI</td>
                <td className="py-2.5 px-3">Kuaishou</td>
                <td className="py-2.5 pl-3">Luma AI</td>
              </tr>
              <tr className="border-b border-[#262626]">
                <td className="py-2.5 pr-4 text-neutral-400">Max resolution</td>
                <td className="py-2.5 px-3 text-[#d4a853] font-medium">4K</td>
                <td className="py-2.5 px-3">1080p</td>
                <td className="py-2.5 px-3">1080p</td>
                <td className="py-2.5 px-3">1080p</td>
                <td className="py-2.5 pl-3">1080p</td>
              </tr>
              <tr className="border-b border-[#262626]">
                <td className="py-2.5 pr-4 text-neutral-400">Max clip length</td>
                <td className="py-2.5 px-3 text-[#d4a853] font-medium">30s</td>
                <td className="py-2.5 px-3">10s</td>
                <td className="py-2.5 px-3">20s</td>
                <td className="py-2.5 px-3">10s</td>
                <td className="py-2.5 pl-3">10s</td>
              </tr>
              <tr className="border-b border-[#262626]">
                <td className="py-2.5 pr-4 text-neutral-400">Best at</td>
                <td className="py-2.5 px-3">Pro control</td>
                <td className="py-2.5 px-3">Social clips</td>
                <td className="py-2.5 px-3">Prompt accuracy</td>
                <td className="py-2.5 px-3">Physics</td>
                <td className="py-2.5 pl-3">Photorealism</td>
              </tr>
              <tr className="border-b border-[#262626]">
                <td className="py-2.5 pr-4 text-neutral-400">Free tier</td>
                <td className="py-2.5 px-3 text-green-400">Yes (limited)</td>
                <td className="py-2.5 px-3 text-green-400">Yes (limited)</td>
                <td className="py-2.5 px-3 text-green-400">ChatGPT Plus</td>
                <td className="py-2.5 px-3 text-green-400">Yes (credits)</td>
                <td className="py-2.5 pl-3 text-green-400">30 gens/mo</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 text-neutral-400">Paid starts</td>
                <td className="py-2.5 px-3">$15/mo</td>
                <td className="py-2.5 px-3 text-green-400">$10/mo</td>
                <td className="py-2.5 px-3">$20/mo</td>
                <td className="py-2.5 px-3">~$9/mo</td>
                <td className="py-2.5 pl-3">$9.99/mo</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Individual tool breakdowns */}
        {tools.map((tool) => (
          <div key={tool.name}>
            <h2 className="text-xl font-semibold text-neutral-100 mt-12 mb-4" style={{ fontFamily: "var(--font-display)" }}>
              {tool.name} — {tool.bestFor}
            </h2>
            <p className="text-neutral-300 leading-relaxed">{tool.desc}</p>
            <div className="not-prose mt-4 flex flex-wrap gap-3 items-center">
              <span
                className="text-[10px] px-2 py-0.5 rounded-full font-medium"
                style={{ background: `${tool.tierColor}15`, color: tool.tierColor }}
              >
                {tool.tier}
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-neutral-800 text-neutral-400">{tool.pricing}</span>
            </div>
            <p className="text-xs text-neutral-500 mt-2">
              <span className="text-neutral-600">Strengths:</span> {tool.strengths}
            </p>
          </div>
        ))}

        {/* Head-to-head comparisons */}
        <h2 className="text-xl font-semibold text-neutral-100 mt-12 mb-4" style={{ fontFamily: "var(--font-display)" }}>
          Head-to-Head Comparisons / 专项对决
        </h2>

        {headToHead.map((h) => (
          <div key={h.title}>
            <h3 className="text-base font-semibold text-neutral-200 mt-8 mb-2">{h.title}</h3>
            <p className="text-neutral-300 leading-relaxed">
              <strong>Winner: {h.winner}.</strong> {h.text}
            </p>
            <p className="text-neutral-500 text-sm mt-2">{h.zh}</p>
          </div>
        ))}

        {/* Pricing comparison */}
        <h2 className="text-xl font-semibold text-neutral-100 mt-12 mb-4" style={{ fontFamily: "var(--font-display)" }}>
          Pricing Summary / 价格总结
        </h2>
        <div className="not-prose grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
          {[
            { name: "Runway", free: "125 credits (limited)", paid: "Standard $15/mo", note: "Pro $35/mo · Unlimited $95/mo" },
            { name: "Pika", free: "Limited generations", paid: "Basic $10/mo", note: "Pro $35/mo" },
            { name: "Sora", free: "ChatGPT Plus $20/mo", paid: "50 vids/mo @ 480p", note: "Pro $200/mo for more + 1080p" },
            { name: "Kling", free: "Daily free credits", paid: "~$9/mo", note: "Credit packs available" },
            { name: "Dream Machine", free: "30 gens/mo", paid: "Standard $9.99/mo", note: "Pro $29.99/mo · 150 gens" },
          ].map((p) => (
            <div key={p.name} className="glass p-4 rounded-xl">
              <p className="text-sm font-semibold text-neutral-100 mb-2">{p.name}</p>
              <p className="text-xs text-neutral-400 leading-relaxed">
                <span className="text-neutral-500">Free:</span> {p.free}<br />
                <span className="text-neutral-500">Paid:</span> {p.paid}<br />
                <span className="text-neutral-600">{p.note}</span>
              </p>
            </div>
          ))}
        </div>

        {/* Verdict */}
        <h2 className="text-xl font-semibold text-neutral-100 mt-12 mb-4" style={{ fontFamily: "var(--font-display)" }}>
          Final Verdict / 最终建议
        </h2>
        <div className="not-prose space-y-3 mb-10">
          {[
            {
              rec: "Use Runway if... / 选 Runway，如果你...",
              text: "You're a professional filmmaker, editor, or agency. The motion brush, camera controls, and 4K output aren't matched by anyone else. You need fine-grained control over every frame.",
            },
            {
              rec: "Use Pika if... / 选 Pika，如果你...",
              text: "You make short-form content for TikTok, Reels, or YouTube Shorts. The Lip Sync feature is a killer differentiator, and the $10/mo Basic plan is the best value for social media creators.",
            },
            {
              rec: "Use Sora if... / 选 Sora，如果你...",
              text: "You already have ChatGPT Plus and want strong prompt understanding without another subscription. Sora is the easiest to get good results from — just describe what you want in plain English.",
            },
            {
              rec: "Use Kling if... / 选 Kling，如果你...",
              text: "You need realistic physics and motion — action scenes, nature shots, sports. Kling's physics engine is the best in class, and the free daily credits let you experiment without commitment.",
            },
            {
              rec: "Use Dream Machine if... / 选 Dream Machine，如果你...",
              text: "You want photorealistic output with zero learning curve. Dream Machine consistently produces the most natural-looking footage, and at $9.99/mo it's an easy entry point.",
            },
            {
              rec: "Use multiple / 组合使用",
              text: "Many creators use Dream Machine for realistic b-roll, Runway for main shots, and Pika for social cuts. AI video tools are cheap enough that mixing and matching is the real winning strategy.",
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
            Explore 100+ AI tools across 12 categories
          </p>
          <p className="text-xs text-neutral-400 mb-4">
            Video, image, code, voice, music, agents — find the right AI tool for every task.
          </p>
          <a
            href="/ai-alliance"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#d4a853] text-black text-sm font-semibold
                       hover:bg-[#c49a3a] active:scale-[0.98] transition-all duration-200"
          >
            Browse the AI Directory
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 14 14">
              <path d="M4 1h9v9M13 1L1 13" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        {/* Related */}
        <p className="text-xs text-neutral-600 mt-10">
          Related:{" "}
          <a href="/category/video-generation" className="text-[#d4a853] hover:underline">All AI Video Generators</a>
          {" · "}
          <a href="/category/image-generation" className="text-[#d4a853] hover:underline">AI Image Generators</a>
          {" · "}
          <a href="/blog" className="text-[#d4a853] hover:underline">More comparisons</a>
        </p>
      </article>
    </main>
  );
}
