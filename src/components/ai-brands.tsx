export interface AiBrand {
  name: string;
  maker: string;
  category: string;
  url: string;
  color: string;
  mark: string;
  /** Affiliate/referral link. Falls back to `url` if not set. */
  affiliateUrl?: string;
  /** Sponsor slot — highlighted at top of category with "Sponsored" badge. */
  featured?: boolean;
}

const brands: AiBrand[] = [

  // ═══ Chatbot / LLM ═══
  { name: "ChatGPT",          maker: "OpenAI",         category: "Chatbot / LLM",   url: "https://chatgpt.com",           color: "#10A37F", mark: "C" },
  { name: "Claude",           maker: "Anthropic",       category: "Chatbot / LLM",   url: "https://claude.ai",             color: "#D97757", mark: "C" },
  { name: "Gemini",           maker: "Google",          category: "Chatbot / LLM",   url: "https://gemini.google.com",     color: "#1A73E8", mark: "G" },
  { name: "DeepSeek",         maker: "深度求索",         category: "Chatbot / LLM",   url: "https://chat.deepseek.com",     color: "#4D6BFE", mark: "D" },
  { name: "Qwen / 通义千问",   maker: "Alibaba",         category: "Chatbot / LLM",   url: "https://tongyi.aliyun.com",     color: "#FF6A00", mark: "Q" },
  { name: "Kimi",             maker: "Moonshot AI",     category: "Chatbot / LLM",   url: "https://kimi.moonshot.cn",      color: "#7C3AED", mark: "K" },
  { name: "Grok",             maker: "xAI",             category: "Chatbot / LLM",   url: "https://grok.com",              color: "#0D0D0D", mark: "G" },
  { name: "Llama",            maker: "Meta",            category: "Open-Source LLM", url: "https://llama.meta.com",        color: "#0668E1", mark: "L" },
  { name: "Mistral",          maker: "Mistral AI",      category: "Chatbot / LLM",   url: "https://mistral.ai",            color: "#FA7A1E", mark: "M" },
  { name: "文心一言",          maker: "Baidu",           category: "Chatbot / LLM",   url: "https://yiyan.baidu.com",       color: "#2932E1", mark: "文" },
  { name: "豆包",              maker: "ByteDance",       category: "Chatbot / LLM",   url: "https://www.doubao.com",        color: "#005249", mark: "豆" },
  { name: "Copilot",          maker: "Microsoft",       category: "Chatbot / LLM",   url: "https://copilot.microsoft.com", color: "#2672EC", mark: "C" },
  { name: "Pi",               maker: "Inflection AI",   category: "Chatbot / LLM",   url: "https://pi.ai",                 color: "#6C5CE7", mark: "π" },
  { name: "Poe",              maker: "Quora",           category: "Chatbot / LLM",   url: "https://poe.com",               color: "#A855F7", mark: "P" },
  { name: "Character.AI",     maker: "Character.AI",    category: "Chatbot / LLM",   url: "https://character.ai",          color: "#3B82F6", mark: "C" },
  { name: "HuggingChat",      maker: "Hugging Face",    category: "Chatbot / LLM",   url: "https://huggingface.co/chat",   color: "#FFD21E", mark: "HF" },
  { name: "Command R+",       maker: "Cohere",          category: "Chatbot / LLM",   url: "https://cohere.com",            color: "#39594D", mark: "C" },
  { name: "Yi / 零一万物",     maker: "01.AI",           category: "Chatbot / LLM",   url: "https://01.ai",                 color: "#10B981", mark: "01" },
  { name: "讯飞星火",          maker: "iFlytek",         category: "Chatbot / LLM",   url: "https://xinghuo.xfyun.cn",      color: "#2563EB", mark: "火" },
  { name: "360智脑",           maker: "360",             category: "Chatbot / LLM",   url: "https://ai.360.com",            color: "#16A34A", mark: "360" },
  { name: "百川智能",          maker: "Baichuan AI",     category: "Chatbot / LLM",   url: "https://www.baichuan-ai.com",   color: "#0D9488", mark: "百" },
  { name: "海螺AI",            maker: "MiniMax",         category: "Chatbot / LLM",   url: "https://hailuoai.com",          color: "#F97316", mark: "海" },
  { name: "阶跃星辰",          maker: "StepFun",         category: "Chatbot / LLM",   url: "https://www.stepfun.com",       color: "#1E40AF", mark: "阶" },
  { name: "智谱清言",          maker: "Zhipu AI",        category: "Chatbot / LLM",   url: "https://chatglm.cn",            color: "#6366F1", mark: "智" },
  { name: "商汤日日新",        maker: "SenseTime",       category: "Chatbot / LLM",   url: "https://www.sensetime.com",     color: "#7C3AED", mark: "商" },
  { name: "腾讯混元",          maker: "Tencent",         category: "Chatbot / LLM",   url: "https://hunyuan.tencent.com",   color: "#0052CC", mark: "腾" },
  { name: "Amazon Q",         maker: "Amazon",          category: "Chatbot / LLM",   url: "https://aws.amazon.com/q",      color: "#FF9900", mark: "Q" },
  { name: "Apple Intelligence", maker: "Apple",         category: "Chatbot / LLM",   url: "https://apple.com",             color: "#000000", mark: "AI" },
  { name: "Granite",          maker: "IBM",             category: "Chatbot / LLM",   url: "https://ibm.com/granite",       color: "#0F62FE", mark: "IBM" },
  { name: "Jurassic-2",       maker: "AI21 Labs",       category: "Chatbot / LLM",   url: "https://ai21.com",              color: "#3B82F6", mark: "21" },
  { name: "ChatGLM",          maker: "Tsinghua",        category: "Open-Source LLM", url: "https://github.com/THUDM",      color: "#6366F1", mark: "GLM" },
  { name: "Falcon",           maker: "TII",             category: "Open-Source LLM", url: "https://falconllm.tii.ae",      color: "#DC2626", mark: "F" },
  { name: "Bloom",            maker: "BigScience",      category: "Open-Source LLM", url: "https://bigscience.huggingface.co", color: "#F59E0B", mark: "B" },
  { name: "Vicuna",           maker: "LMSYS",           category: "Open-Source LLM", url: "https://lmsys.org",              color: "#8B5CF6", mark: "V" },

  // ═══ AI Search ═══
  { name: "Perplexity",       maker: "Perplexity AI",   category: "AI Search",       url: "https://perplexity.ai",         color: "#1A1A1A", mark: "P" },
  { name: "Phind",            maker: "Phind",           category: "AI Search",       url: "https://phind.com",             color: "#18181B", mark: "Ph" },
  { name: "You.com",          maker: "You.com",         category: "AI Search",       url: "https://you.com",               color: "#2563EB", mark: "Y" },
  { name: "Exa",              maker: "Exa AI",          category: "AI Search",       url: "https://exa.ai",                color: "#18181B", mark: "E" },
  { name: "Consensus",        maker: "Consensus",       category: "AI Search",       url: "https://consensus.app",         color: "#16A34A", mark: "C" },
  { name: "Elicit",           maker: "Elicit",          category: "AI Search",       url: "https://elicit.com",            color: "#0EA5E9", mark: "E" },

  // ═══ Image Generation ═══
  { name: "Midjourney",       maker: "Midjourney",      category: "Image Generation", url: "https://midjourney.com",       color: "#1A0D45", mark: "MJ" },
  { name: "Stable Diffusion", maker: "Stability AI",    category: "Image Generation", url: "https://stability.ai",         color: "#9C27B0", mark: "SD" },
  { name: "DALL·E",           maker: "OpenAI",          category: "Image Generation", url: "https://openai.com/dall-e",    color: "#000000", mark: "DE" },
  { name: "Firefly",          maker: "Adobe",           category: "Image Generation", url: "https://firefly.adobe.com",    color: "#FF0000", mark: "Ff" },
  { name: "Leonardo AI",      maker: "Leonardo",        category: "Image Generation", url: "https://leonardo.ai",          color: "#FBBF24", mark: "L" },
  { name: "Ideogram",         maker: "Ideogram",        category: "Image Generation", url: "https://ideogram.ai",          color: "#18181B", mark: "I" },
  { name: "Imagen",           maker: "Google",          category: "Image Generation", url: "https://imagen.research.google", color: "#4285F4", mark: "Im" },
  { name: "Flux",             maker: "Black Forest Labs", category: "Image Generation", url: "https://blackforestlabs.ai",  color: "#18181B", mark: "Fl" },
  { name: "Canva AI",         maker: "Canva",           category: "Image Generation", url: "https://canva.com",            color: "#00C4CC", mark: "Cv", affiliateUrl: "https://canva.com/?ref=aiecosystem" },
  { name: "即梦",              maker: "ByteDance",       category: "Image Generation", url: "https://jimeng.jianying.com",  color: "#EC4899", mark: "即" },
  { name: "SeaArt",           maker: "SeaArt",          category: "Image Generation", url: "https://www.seaart.ai",        color: "#0EA5E9", mark: "S" },
  { name: "Recraft",          maker: "Recraft",         category: "Image Generation", url: "https://www.recraft.ai",       color: "#6366F1", mark: "R" },
  { name: "Playground",       maker: "Playground",      category: "Image Generation", url: "https://playground.com",       color: "#F97316", mark: "P" },

  // ═══ Video Generation ═══
  { name: "Sora",             maker: "OpenAI",          category: "Video Generation", url: "https://sora.com",             color: "#000000", mark: "S" },
  { name: "Runway",           maker: "Runway",          category: "Video Generation", url: "https://runwayml.com",         color: "#000000", mark: "RW" },
  { name: "Pika",             maker: "Pika Labs",       category: "Video Generation", url: "https://pika.art",             color: "#EC4899", mark: "P" },
  { name: "可灵 Kling",        maker: "Kuaishou",        category: "Video Generation", url: "https://kling.kuaishou.com",   color: "#FF4400", mark: "可" },
  { name: "Luma Dream Machine", maker: "Luma AI",       category: "Video Generation", url: "https://lumalabs.ai",          color: "#84CC16", mark: "L" },
  { name: "Haiper",           maker: "Haiper",          category: "Video Generation", url: "https://haiper.ai",            color: "#A855F7", mark: "H" },
  { name: "Vidu",             maker: "Shengshu",        category: "Video Generation", url: "https://www.vidu.com",         color: "#2563EB", mark: "Vi" },
  { name: "PixVerse",         maker: "PixVerse",        category: "Video Generation", url: "https://pixverse.ai",          color: "#7C3AED", mark: "Px" },
  { name: "Hedra",            maker: "Hedra",           category: "Video Generation", url: "https://www.hedra.com",        color: "#18181B", mark: "H" },

  // ═══ AI Code ═══
  { name: "Cursor",           maker: "Anysphere",       category: "AI Code Editor",   url: "https://cursor.com",           color: "#0A0A0A", mark: "C", featured: true },
  { name: "GitHub Copilot",   maker: "GitHub",          category: "AI Code Assistant", url: "https://github.com/features/copilot", color: "#24292E", mark: "GH" },
  { name: "Replit",           maker: "Replit",          category: "AI Code Editor",   url: "https://replit.com",           color: "#F26207", mark: "R" },
  { name: "V0",               maker: "Vercel",          category: "AI UI Generator",  url: "https://v0.dev",               color: "#000000", mark: "v0" },
  { name: "Bolt",             maker: "StackBlitz",      category: "AI UI Generator",  url: "https://bolt.new",             color: "#3B82F6", mark: "B" },
  { name: "Windsurf",         maker: "Codeium",         category: "AI Code Editor",   url: "https://codeium.com/windsurf", color: "#0EA5E9", mark: "W" },
  { name: "Tabnine",          maker: "Tabnine",         category: "AI Code Assistant", url: "https://tabnine.com",         color: "#6366F1", mark: "T" },
  { name: "CodeRabbit",       maker: "CodeRabbit",      category: "AI Code Assistant", url: "https://coderabbit.ai",       color: "#F97316", mark: "CR" },
  { name: "Devin",            maker: "Cognition AI",    category: "AI Code Editor",   url: "https://www.cognition.ai",     color: "#18181B", mark: "D" },
  { name: "Cline",            maker: "Cline",           category: "AI Code Assistant", url: "https://cline.bot",           color: "#8B5CF6", mark: "C" },
  { name: "Augment Code",     maker: "Augment",         category: "AI Code Assistant", url: "https://www.augmentcode.com",  color: "#10B981", mark: "A" },
  { name: "Lovable",          maker: "Lovable",         category: "AI UI Generator",  url: "https://lovable.dev",          color: "#EC4899", mark: "L" },
  { name: "Tempo",            maker: "Tempo Labs",      category: "AI UI Generator",  url: "https://tempo.new",            color: "#18181B", mark: "T" },

  // ═══ AI Agent ═══
  { name: "Coze",             maker: "ByteDance",       category: "AI Agent Platform", url: "https://www.coze.com",        color: "#1677FF", mark: "Co" },
  { name: "Dify",             maker: "Dify",            category: "AI Agent Platform", url: "https://dify.ai",             color: "#155EEF", mark: "D" },
  { name: "LangChain",        maker: "LangChain",       category: "AI Agent Platform", url: "https://langchain.com",       color: "#1A1A1A", mark: "LC" },
  { name: "AutoGPT",          maker: "AutoGPT",         category: "AI Agent Platform", url: "https://autogpt.net",         color: "#1A1A1A", mark: "A" },
  { name: "CrewAI",           maker: "CrewAI",          category: "AI Agent Platform", url: "https://crewai.com",          color: "#8B5CF6", mark: "Cr" },
  { name: "Flowise",          maker: "FlowiseAI",       category: "AI Agent Platform", url: "https://flowiseai.com",       color: "#3B82F6", mark: "F" },
  { name: "n8n",              maker: "n8n",             category: "AI Agent Platform", url: "https://n8n.io",              color: "#EA4B71", mark: "n" },
  { name: "Zapier AI",        maker: "Zapier",          category: "AI Agent Platform", url: "https://zapier.com/ai",       color: "#FF4A00", mark: "Z" },
  { name: "Relevance AI",     maker: "Relevance",       category: "AI Agent Platform", url: "https://relevanceai.com",     color: "#6366F1", mark: "R" },

  // ═══ AI Music ═══
  { name: "Suno",             maker: "Suno",            category: "AI Music",         url: "https://suno.com",             color: "#6C3CF0", mark: "S" },
  { name: "Udio",             maker: "Udio",            category: "AI Music",         url: "https://udio.com",             color: "#EC4899", mark: "U" },
  { name: "AIVA",             maker: "AIVA",            category: "AI Music",         url: "https://aiva.ai",              color: "#18181B", mark: "A" },
  { name: "Soundraw",         maker: "Soundraw",        category: "AI Music",         url: "https://soundraw.io",          color: "#F97316", mark: "S" },
  { name: "Mubert",           maker: "Mubert",          category: "AI Music",         url: "https://mubert.com",           color: "#000000", mark: "M" },
  { name: "Boomy",            maker: "Boomy",           category: "AI Music",         url: "https://boomy.com",            color: "#2563EB", mark: "B" },

  // ═══ AI Voice ═══
  { name: "ElevenLabs",       maker: "ElevenLabs",      category: "AI Voice / TTS",   url: "https://elevenlabs.io",        color: "#0D0D0D", mark: "11", affiliateUrl: "https://elevenlabs.io/?ref=aiecosystem", featured: true },
  { name: "Speechify",        maker: "Speechify",       category: "AI Voice / TTS",   url: "https://speechify.com",        color: "#2563EB", mark: "Sp", affiliateUrl: "https://speechify.com/?ref=aiecosystem" },
  { name: "Murf",             maker: "Murf AI",         category: "AI Voice / TTS",   url: "https://murf.ai",              color: "#7C3AED", mark: "M", affiliateUrl: "https://murf.ai/?ref=aiecosystem" },
  { name: "PlayHT",           maker: "PlayHT",          category: "AI Voice / TTS",   url: "https://play.ht",              color: "#18181B", mark: "HT" },
  { name: "Descript",         maker: "Descript",        category: "AI Voice / TTS",   url: "https://descript.com",         color: "#F97316", mark: "De", affiliateUrl: "https://descript.com/?ref=aiecosystem" },
  { name: "Fish Audio",       maker: "Fish Audio",      category: "AI Voice / TTS",   url: "https://fish.audio",           color: "#0EA5E9", mark: "F" },
  { name: "Respeecher",       maker: "Respeecher",      category: "AI Voice / TTS",   url: "https://www.respeecher.com",   color: "#DC2626", mark: "Re" },
  { name: "Wellsaid",         maker: "Wellsaid Labs",   category: "AI Voice / TTS",   url: "https://wellsaidlabs.com",     color: "#10B981", mark: "W" },

  // ═══ AI Productivity ═══
  { name: "Notion AI",        maker: "Notion",          category: "AI Productivity",  url: "https://notion.so",            color: "#000000", mark: "N", affiliateUrl: "https://notion.so/?via=aiecosystem" },
  { name: "Gamma",            maker: "Gamma",           category: "AI Productivity",  url: "https://gamma.app",            color: "#7C3AED", mark: "G" },
  { name: "Grammarly",        maker: "Grammarly",       category: "AI Productivity",  url: "https://grammarly.com",        color: "#15C39A", mark: "G", affiliateUrl: "https://grammarly.com/?ref=aiecosystem" },
  { name: "Jasper",           maker: "Jasper AI",       category: "AI Productivity",  url: "https://jasper.ai",            color: "#FF6B35", mark: "J", affiliateUrl: "https://jasper.ai/?fpr=aiecosystem", featured: true },
  { name: "Copy.ai",          maker: "Copy.ai",         category: "AI Productivity",  url: "https://copy.ai",              color: "#2563EB", mark: "C", affiliateUrl: "https://copy.ai/?via=aiecosystem" },
  { name: "Writesonic",       maker: "Writesonic",      category: "AI Productivity",  url: "https://writesonic.com",       color: "#F97316", mark: "W", affiliateUrl: "https://writesonic.com/?via=aiecosystem" },
  { name: "Jenni AI",         maker: "Jenni AI",        category: "AI Productivity",  url: "https://jenni.ai",             color: "#EC4899", mark: "J" },
  { name: "Otter.ai",         maker: "Otter.ai",        category: "AI Productivity",  url: "https://otter.ai",             color: "#0EA5E9", mark: "O" },
  { name: "Tome",             maker: "Tome",            category: "AI Productivity",  url: "https://tome.app",             color: "#18181B", mark: "T" },
  { name: "Beautiful.ai",     maker: "Beautiful.ai",    category: "AI Productivity",  url: "https://www.beautiful.ai",     color: "#2563EB", mark: "B" },
  { name: "Slides AI",        maker: "Slides AI",       category: "AI Productivity",  url: "https://slidesai.io",          color: "#6366F1", mark: "S" },
  { name: "Mem",              maker: "Mem.ai",          category: "AI Productivity",  url: "https://mem.ai",               color: "#18181B", mark: "M" },
  { name: "Taskade",          maker: "Taskade",         category: "AI Productivity",  url: "https://taskade.com",          color: "#F97316", mark: "T", affiliateUrl: "https://taskade.com/?via=aiecosystem" },
];

export { brands };
export default brands;
