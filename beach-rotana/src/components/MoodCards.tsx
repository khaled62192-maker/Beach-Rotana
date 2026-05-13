'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Lang, Translations } from '@/data/translations';
import { MoodKey } from '@/data/venues';

interface MoodCardsProps {
  lang: Lang;
  t: Translations;
  onSelect: (mood: MoodKey) => void;
}

/**
 * Each card background is a CSS multi-layer gradient:
 *   1. Dark overlay (always on top  — text legibility)
 *   2. Photo URL    (middle layer   — loads silently, no broken-icon risk)
 *   3. Gradient     (bottom layer   — instant fallback if photo fails)
 *
 * CSS background-image NEVER shows a browser broken-image icon.
 * If the photo fails, the gradient shows. Guest sees premium content regardless.
 */
const MOODS: Array<{
  key: MoodKey;
  imageUrl: string;
  gradient: string;
}> = [
  {
    key: 'light-social',
    imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=900&h=1200&fit=crop&crop=center&q=85',
    gradient: 'linear-gradient(160deg,#1A3A4A 0%,#0F2535 55%,#0B1C2C 100%)',
  },
  {
    key: 'proper-dinner',
    imageUrl: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&h=1200&fit=crop&crop=center&q=85',
    gradient: 'linear-gradient(160deg,#2A1A0A 0%,#1A0D04 55%,#0B1C2C 100%)',
  },
  {
    key: 'drinks-atmosphere',
    // Warm amber cocktails — moody upscale bar with golden lighting
    imageUrl: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=900&h=1200&fit=crop&crop=center&q=85',
    gradient: 'linear-gradient(160deg,#1E0A2E 0%,#130518 55%,#0B1C2C 100%)',
  },
  {
    key: 'specific-craving',
    imageUrl: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=900&h=1200&fit=crop&crop=center&q=85',
    gradient: 'linear-gradient(160deg,#0A2A1A 0%,#051508 55%,#0B1C2C 100%)',
  },
  {
    key: 'surprise-me',
    imageUrl: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=900&h=1200&fit=crop&crop=center&q=85',
    gradient: 'linear-gradient(160deg,#1A2A0A 0%,#0E1804 55%,#0B1C2C 100%)',
  },
];

/** Build the CSS background shorthand: overlay + photo + gradient fallback */
function cardBackground(imageUrl: string, gradient: string): string {
  const overlay = 'linear-gradient(to top,rgba(0,0,0,0.82) 0%,rgba(0,0,0,0.28) 55%,rgba(0,0,0,0.08) 100%)';
  return `${overlay}, url("${imageUrl}") center / cover no-repeat, ${gradient}`;
}

export default function MoodCards({ lang, t, onSelect }: MoodCardsProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    const progress = max > 0 ? el.scrollLeft / max : 0;
    const index = Math.round(progress * (MOODS.length - 1));
    setActiveIndex(Math.min(index, MOODS.length - 1));
  };

  return (
    <div
      className="flex flex-col bg-rotana-deep"
      style={{ height: '100dvh' }}
    >
      {/* Header */}
      <div className="pt-safe px-6 pt-16 pb-5 flex-shrink-0">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          <p className="font-inter text-[10px] font-medium tracking-[0.4em] uppercase text-rotana-gold mb-2">
            {lang === 'ar' ? 'تيست · بيتش روتانا' : 'TASTE · BEACH ROTANA'}
          </p>
          <h1 className="font-playfair text-3xl text-rotana-sand leading-tight rtl:text-right">
            {t.moodQuestion}
          </h1>
        </motion.div>
      </div>

      {/* Scroll area */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="mood-scroll flex gap-3 flex-1 pb-4"
        style={{
          paddingLeft: '24px',
          paddingRight: '24px',
          scrollPaddingLeft: '24px',
          direction: lang === 'ar' ? 'rtl' : 'ltr',
          alignItems: 'stretch',
        }}
        aria-label={lang === 'ar' ? 'اختر مزاجك' : 'Mood selection'}
        role="region"
        aria-roledescription="carousel"
      >
        {MOODS.map((mood, idx) => {
          const label = t.moods[mood.key].label;
          const sub   = t.moods[mood.key].sub;

          return (
            <motion.button
              key={mood.key}
              className="mood-card-snap flex-shrink-0 rounded-2xl overflow-hidden text-left rtl:text-right flex flex-col justify-end"
              style={{
                width: 'min(85vw, 340px)',
                minHeight: 'min(58dvh, 520px)',
                flexShrink: 0,
                // CSS multi-layer: overlay → photo → gradient fallback
                // If photo fails to load, CSS is silent — gradient shows instead
                background: cardBackground(mood.imageUrl, mood.gradient),
              }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              onClick={() => onSelect(mood.key)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, transition: { delay: idx * 0.06, duration: 0.4 } }}
              aria-label={label}
            >
              {/* Content */}
              <div className="relative z-10 p-6">
                <div className="w-7 h-px bg-rotana-gold mb-4" />
                <h2 className="font-playfair text-2xl text-white leading-snug mb-1.5">
                  {label}
                </h2>
                <p className="font-inter text-sm text-white/65">{sub}</p>

                {/* Arrow */}
                <div className="flex justify-end mt-5 rtl:justify-start">
                  <span
                    className="text-rotana-gold text-xl font-light"
                    style={{ transform: lang === 'ar' ? 'scaleX(-1)' : undefined }}
                    aria-hidden="true"
                  >
                    →
                  </span>
                </div>
              </div>
            </motion.button>
          );
        })}

        {/* End spacer */}
        <div className="flex-shrink-0 w-4" aria-hidden />
      </div>

      {/* Pagination dots */}
      <div className="flex justify-center gap-2 py-4 flex-shrink-0" aria-hidden="true">
        {MOODS.map((_, idx) => (
          <motion.div
            key={idx}
            animate={{
              width:           idx === activeIndex ? 22 : 6,
              backgroundColor: idx === activeIndex ? '#C4965A' : '#8BA3B6',
              opacity:         idx === activeIndex ? 1 : 0.35,
            }}
            transition={{ duration: 0.25 }}
            className="h-1.5 rounded-full"
          />
        ))}
      </div>
    </div>
  );
}
