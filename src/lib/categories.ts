export const ORDERED_CATEGORIES = [
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

export type Category = (typeof ORDERED_CATEGORIES)[number];

const SLUG_MAP: Record<Category, string> = {
  "Chatbot / LLM": "chatbot-llm",
  "AI Search": "ai-search",
  "Open-Source LLM": "open-source-llm",
  "Image Generation": "image-generation",
  "Video Generation": "video-generation",
  "AI Code Editor": "ai-code-editor",
  "AI Code Assistant": "ai-code-assistant",
  "AI UI Generator": "ai-ui-generator",
  "AI Agent Platform": "ai-agent-platform",
  "AI Music": "ai-music",
  "AI Voice / TTS": "ai-voice-tts",
  "AI Productivity": "ai-productivity",
};

const REVERSE_MAP: Record<string, Category> = Object.fromEntries(
  Object.entries(SLUG_MAP).map(([k, v]) => [v, k as Category])
);

export function categoryToSlug(cat: Category): string {
  return SLUG_MAP[cat];
}

export function slugToCategory(slug: string): Category | undefined {
  return REVERSE_MAP[slug];
}

export const CATEGORY_COLORS: Record<Category, string> = {
  "Chatbot / LLM": "#60a5fa",
  "AI Search": "#d4a853",
  "Open-Source LLM": "#34d399",
  "Image Generation": "#f472b6",
  "Video Generation": "#a78bfa",
  "AI Code Editor": "#22d3ee",
  "AI Code Assistant": "#4ade80",
  "AI UI Generator": "#fb923c",
  "AI Agent Platform": "#818cf8",
  "AI Music": "#e879f9",
  "AI Voice / TTS": "#2dd4bf",
  "AI Productivity": "#a8a29e",
};

export function getCategoryDescription(cat: Category): string {
  const descriptions: Record<Category, string> = {
    "Chatbot / LLM":
      "Compare the best AI chatbots and large language models — ChatGPT, Claude, Gemini, DeepSeek, and more. Find the right LLM for your needs.",
    "AI Search":
      "AI-powered search engines that deliver answers, not just links. Perplexity, Phind, You.com, and more redefining how we find information.",
    "Open-Source LLM":
      "Open-source large language models you can run, fine-tune, and self-host. Llama, ChatGLM, Falcon, Bloom, and more.",
    "Image Generation":
      "Create stunning images with AI. Midjourney, Stable Diffusion, DALL·E, Firefly, and more top image generation tools.",
    "Video Generation":
      "Generate and edit video with artificial intelligence. Sora, Runway, Pika, Kling, and more video AI platforms.",
    "AI Code Editor":
      "AI-native code editors that boost developer productivity. Cursor, Windsurf, Replit, Devin, and more.",
    "AI Code Assistant":
      "AI coding assistants that help you write, review, and debug code. GitHub Copilot, Tabnine, Cline, CodeRabbit, and more.",
    "AI UI Generator":
      "Generate UI components and full interfaces from text prompts. V0, Bolt, Lovable, Tempo, and more.",
    "AI Agent Platform":
      "Build and deploy autonomous AI agents. Coze, Dify, LangChain, AutoGPT, CrewAI, and more agent frameworks.",
    "AI Music":
      "Create original music with AI. Suno, Udio, AIVA, Soundraw, and more AI music generation tools.",
    "AI Voice / TTS":
      "Realistic text-to-speech and voice cloning. ElevenLabs, Speechify, Murf, PlayHT, and more voice AI tools.",
    "AI Productivity":
      "AI tools that supercharge your workflow. Notion AI, Gamma, Grammarly, Jasper, Copy.ai, and more.",
  };
  return descriptions[cat] ?? "";
}
