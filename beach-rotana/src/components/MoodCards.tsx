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

const MOODS: Array<{
  key: MoodKey;
  gradientFrom: string;
  gradientTo: string;
  icon: string;
}> = [
  { key: 'light-social',      gradientFrom: '#0D2E3A', gradientTo: '#0B1C2C', icon: '☀' },
  { key: 'proper-dinner',     gradientFrom: '#2C1A0A', gradientTo: '#0B1C2C', icon: '✦' },
  { key: 'drinks-atmosphere', gradientFrom: '#1A0A2C', gradientTo: '#0B1C2C', icon: '◆' },
  { key: 'specific-craving',  gradientFrom: '#0A2418', gradientTo: '#0B1C2C', icon: '◎' },
  { key: 'surprise-me',       gradientFrom: '#1C200A', gradientTo: '#0B1C2C', icon: '✦' },
];

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
      <div className="pt-safe px-6 pt-16 pb-6 flex-shrink-0">
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
        className="mood-scroll flex gap-4 flex-1 pb-4"
        style={{
          paddingLeft: '24px',
          paddingRight: '24px',
          scrollPaddingLeft: '24px',
          direction: lang === 'ar' ? 'rtl' : 'ltr',
          alignItems: 'stretch',
        }}
      >
        {MOODS.map((mood, idx) => {
          const label = t.moods[mood.key].label;
          const sub = t.moods[mood.key].sub;

          return (
            <motion.button
              key={mood.key}
              className="mood-card-snap flex-shrink-0 rounded-3xl relative overflow-hidden text-left rtl:text-right flex flex-col justify-end"
              style={{
                width: '85vw',
                minHeight: '60dvh',
                background: `linear-gradient(160deg, ${mood.gradientFrom} 0%, ${mood.gradientTo} 100%)`,
                flexShrink: 0,
              }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              onClick={() => onSelect(mood.key)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, transition: { delay: idx * 0.06, duration: 0.4 } }}
              aria-label={label}
            >
              {/* Subtle grid texture overlay */}
              <div
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage: 'radial-gradient(circle, #C4965A 1px, transparent 1px)',
                  backgroundSize: '24px 24px',
                }}
              />

              {/* Bottom gradient */}
              <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-black/40 to-transparent" />

              {/* Content */}
              <div className="relative z-10 p-7">
                <div className="w-8 h-px bg-rotana-gold mb-5" />
                <h2 className="font-playfair text-2xl xs:text-3xl text-rotana-sand leading-snug mb-2">
                  {label}
                </h2>
                <p className="font-inter text-sm text-rotana-muted">{sub}</p>

                {/* Arrow */}
                <div className="flex justify-end mt-6 rtl:justify-start">
                  <span
                    className="text-rotana-gold text-xl font-light"
                    style={{ transform: lang === 'ar' ? 'scaleX(-1)' : undefined }}
                  >
                    →
                  </span>
                </div>
              </div>
            </motion.button>
          );
        })}

        {/* End spacer */}
        <div className="flex-shrink-0 w-6" aria-hidden />
      </div>

      {/* Pagination dots */}
      <div className="flex justify-center gap-2 py-5 flex-shrink-0">
        {MOODS.map((_, idx) => (
          <motion.div
            key={idx}
            animate={{
              width: idx === activeIndex ? 20 : 6,
              backgroundColor: idx === activeIndex ? '#C4965A' : '#8BA3B6',
              opacity: idx === activeIndex ? 1 : 0.4,
            }}
            transition={{ duration: 0.25 }}
            className="h-1.5 rounded-full"
          />
        ))}
      </div>
    </div>
  );
}
