"use client";

import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "zh";

type Translations = Record<string, Record<Lang, string>>;

const t: Translations = {
  "nav.title": { en: "AI Ecosystem", zh: "AI 生态" },
  "page.title": { en: "AI Ecosystem", zh: "AI 生态" },
  "page.subtitle": { en: "100+ AI tools across 12 categories", zh: "100+ AI 工具，跨越 12 个分类" },
  "search.placeholder": { en: "Search AI tools...", zh: "搜索 AI 工具..." },
  "search.noResults": { en: "No tools found", zh: "未找到匹配工具" },
  "lang.switch": { en: "中文", zh: "EN" },
  "lang.label": { en: "EN", zh: "中文" },
  "category.Chatbot / LLM": { en: "Chatbot / LLM", zh: "AI 聊天 / 大模型" },
  "category.AI Search": { en: "AI Search", zh: "AI 搜索" },
  "category.Open-Source LLM": { en: "Open-Source LLM", zh: "开源大模型" },
  "category.Image Generation": { en: "Image Generation", zh: "AI 图片生成" },
  "category.Video Generation": { en: "Video Generation", zh: "AI 视频生成" },
  "category.AI Code Editor": { en: "AI Code Editor", zh: "AI 代码编辑器" },
  "category.AI Code Assistant": { en: "AI Code Assistant", zh: "AI 代码助手" },
  "category.AI UI Generator": { en: "AI UI Generator", zh: "AI 界面生成" },
  "category.AI Agent Platform": { en: "AI Agent Platform", zh: "AI Agent 平台" },
  "category.AI Music": { en: "AI Music", zh: "AI 音乐" },
  "category.AI Voice / TTS": { en: "AI Voice / TTS", zh: "AI 语音 / TTS" },
  "category.AI Productivity": { en: "AI Productivity", zh: "AI 效率工具" },
  "footer.text": { en: "AI Ecosystem · {count}+ tools · Click to visit official sites", zh: "AI 生态 · {count}+ 个工具 · 点击访问官网" },
};

export function useT(lang: Lang) {
  return useCallback(
    (key: string, vars?: Record<string, string | number>) => {
      const entry = t[key];
      if (!entry) return key;
      let text = entry[lang] ?? entry.en ?? key;
      if (vars) {
        for (const [k, v] of Object.entries(vars)) {
          text = text.replace(`{${k}}`, String(v));
        }
      }
      return text;
    },
    [lang]
  );
}

interface LangContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
}

const LangContext = createContext<LangContextValue>({ lang: "en", setLang: () => {} });

export function useLang() {
  return useContext(LangContext);
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const saved = localStorage.getItem("lang") as Lang | null;
    if (saved === "en" || saved === "zh") setLangState(saved);
  }, []);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    localStorage.setItem("lang", l);
  }, []);

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
}

export function getFaviconUrl(url: string): string {
  try {
    const hostname = new URL(url).hostname;
    return `https://icons.duckduckgo.com/ip3/${hostname}.ico`;
  } catch {
    return "";
  }
}
