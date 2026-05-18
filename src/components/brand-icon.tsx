"use client";

interface Props {
  url: string;
  name: string;
  color: string;
  mark: string;
}

export function BrandIcon({ color, mark }: Props) {
  return (
    <div
      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
      style={{ backgroundColor: `${color}22`, border: `1px solid ${color}33` }}
    >
      <span
        className="text-[11px] font-bold leading-none select-none"
        style={{ color }}
      >
        {mark}
      </span>
    </div>
  );
}
