"use client";

import { useState } from "react";
import { getFaviconUrl } from "@/lib/i18n";

interface Props {
  url: string;
  name: string;
  color: string;
  mark: string;
}

export function BrandIcon({ url, name, color, mark }: Props) {
  const [failed, setFailed] = useState(false);
  const favicon = getFaviconUrl(url);

  if (failed || !favicon) {
    return (
      <div
        className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
        style={{ backgroundColor: color }}
      >
        <span className="text-white text-[11px] font-bold leading-none select-none">
          {mark}
        </span>
      </div>
    );
  }

  return (
    <img
      src={favicon}
      alt={`${name} icon`}
      width={40}
      height={40}
      loading="lazy"
      referrerPolicy="no-referrer"
      onError={() => setFailed(true)}
      className="w-10 h-10 rounded-lg flex-shrink-0 object-contain bg-neutral-50"
    />
  );
}
