'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
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
  imageUrl: string;
  accentColor: string;
}> = [
  {
    key: 'light-social',
    imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=900&q=80',
    accentColor: '#C4965A',
  },
  {
    key: 'proper-dinner',
    imageUrl: 'https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=900&q=80',
    accentColor: '#C4965A',
  },
  {
    key: 'drinks-atmosphere',
    imageUrl: 'https://images.unsplash.com/photo-1551024709-8f23befc548e?w=900&q=80',
    accentColor: '#C4965A',
  },
  {
    key: 'specific-craving',
    imageUrl: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=900&q=80',
    accentColor: '#C4965A',
  },
  {
    key: 'surprise-me',
    imageUrl: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=900&q=80',
    accentColor: '#C4965A',
  },
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

      {/* Scroll area — horizontal on all screen sizes */}
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
              className="mood-card-snap flex-shrink-0 rounded-2xl relative overflow-hidden text-left rtl:text-right flex flex-col justify-end"
              style={{
                // Clamp: 85vw on small phones, cap at 340px so desktop shows 2 cards
                width: 'min(85vw, 340px)',
                minHeight: 'min(58dvh, 520px)',
                flexShrink: 0,
              }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              onClick={() => onSelect(mood.key)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, transition: { delay: idx * 0.06, duration: 0.4 } }}
              aria-label={label}
            >
              {/* Background image */}
              <div className="absolute inset-0">
                <Image
                  src={mood.imageUrl}
                  alt={label}
                  fill
                  sizes="(max-width: 768px) 85vw, 340px"
                  className="object-cover"
                  priority={idx < 2}
                />
                {/* Dark gradient — heavy at bottom so text is always legible */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
              </div>

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
