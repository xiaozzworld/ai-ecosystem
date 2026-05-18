"use client";

import { useEffect, useState } from "react";
import { getConsent, type ConsentState } from "./cookie-consent";

export function AdSense() {
  const publisherId = process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID;
  const [consent, setConsent] = useState<ConsentState>("unset");

  useEffect(() => {
    setConsent(getConsent());
    const onStorage = () => setConsent(getConsent());
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  if (!publisherId || consent !== "granted") return null;

  return (
    <script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${publisherId}`}
      crossOrigin="anonymous"
    />
  );
}
