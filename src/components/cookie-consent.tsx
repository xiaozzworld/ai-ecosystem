"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "cookie-consent";

export type ConsentState = "granted" | "denied" | "unset";

export function getConsent(): ConsentState {
  if (typeof window === "undefined") return "unset";
  return (localStorage.getItem(STORAGE_KEY) as ConsentState) ?? "unset";
}

export function useConsent() {
  const [consent, setConsentState] = useState<ConsentState>("unset");

  useEffect(() => {
    setConsentState(getConsent());

    const onStorage = () => setConsentState(getConsent());
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const setConsent = (value: "granted" | "denied") => {
    localStorage.setItem(STORAGE_KEY, value);
    setConsentState(value);
    window.dispatchEvent(new Event("storage"));
  };

  return { consent, setConsent };
}

export function CookieConsent() {
  const { consent, setConsent } = useConsent();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (consent === "unset") {
      const t = setTimeout(() => setVisible(true), 600);
      return () => clearTimeout(t);
    }
    setVisible(false);
  }, [consent]);

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-lg
                 glass p-5 rounded-2xl border border-[#262626]
                 shadow-[0_8px_32px_rgba(0,0,0,0.5)]
                 animate-in"
      role="dialog"
      aria-label="Cookie consent"
    >
      <p className="text-xs text-neutral-300 leading-relaxed mb-4">
        We use analytics cookies to understand site traffic.{' '}
        <a href="/privacy" className="text-[#d4a853] hover:underline">
          Privacy Policy
        </a>
      </p>
      <div className="flex gap-2.5">
        <button
          onClick={() => setConsent("granted")}
          className="flex-1 py-2 rounded-lg bg-[#d4a853] text-black text-xs font-semibold
                     hover:bg-[#c49a3a] active:scale-[0.98] transition-all duration-200"
        >
          Accept
        </button>
        <button
          onClick={() => setConsent("denied")}
          className="flex-1 py-2 rounded-lg bg-transparent border border-[#333] text-neutral-400
                     text-xs font-medium hover:border-neutral-500 hover:text-neutral-300
                     active:scale-[0.98] transition-all duration-200"
        >
          Decline
        </button>
      </div>
    </div>
  );
}
