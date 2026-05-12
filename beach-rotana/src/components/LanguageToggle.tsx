'use client';

import { Lang } from '@/data/translations';

interface LanguageToggleProps {
  lang: Lang;
  onToggle: () => void;
  label: string;
}

export default function LanguageToggle({ onToggle, label }: LanguageToggleProps) {
  return (
    <button
      onClick={onToggle}
      className="
        rounded-full
        bg-rotana-surface/80 backdrop-blur-sm
        border border-rotana-surface
        px-4 py-2
        font-inter text-xs font-medium text-rotana-sand
        hover:border-rotana-gold hover:text-rotana-gold
        transition-colors duration-150
        min-h-[36px] min-w-[56px]
        select-none
      "
      aria-label="Toggle language"
    >
      {label}
    </button>
  );
}
