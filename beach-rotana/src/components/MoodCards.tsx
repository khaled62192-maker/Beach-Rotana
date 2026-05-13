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

// Each mood card has an image + a premium gradient fallback.
// If the image fails to load for ANY reason, the gradient renders instantly —
// guests never see a broken placeholder or missing-image icon.
const MOODS: Array<{
  key: MoodKey;
  imageUrl: string;
  // Premium fallback gradient — shown if image errors or as base layer
  gradient: string;
}> = [
  {
    key: 'light-social',
    // Warm, inviting restaurant atmosphere — social dining energy
    imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=1100&fit=crop&crop=entropy&q=90',
    gradient: 'linear-gradient(160deg, #1A3A4A 0%, #0F2535 50%, #0B1C2C 100%)',
  },
  {
    key: 'proper-dinner',
    // Elegant candlelit outdoor terrace — aspirational fine dining
    imageUrl: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=1100&fit=crop&crop=entropy&q=90',
    gradient: 'linear-gradient(160deg, #2A1A0A 0%, #1A0D04 50%, #0B1C2C 100%)',
  },
  {
    key: 'drinks-atmosphere',
    // Moody upscale bar — warm amber bottles, dark atmosphere
    imageUrl: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=800&h=1100&fit=crop&crop=entropy&q=90',
    gradient: 'linear-gradient(160deg, #1E0A2E 0%, #120518 50%, #0B1C2C 100%)',
  },
  {
    key: 'specific-craving',
    // Vivid overhead food spread — indulgent variety
    imageUrl: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=1100&fit=crop&crop=entropy&q=90',
    gradient: 'linear-gradient(160deg, #0A2A1A 0%, #051508 50%, #0B1C2C 100%)',
  },
  {
    key: 'surprise-me',
    // Overwater terrace dining at dusk — aspirational hero moment
    imageUrl: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&h=1100&fit=crop&crop=entropy&q=90',
    gradient: 'linear-gradient(160deg, #1A2A0A 0%, #0E1804 50%, #0B1C2C 100%)',
  },
];

export default function MoodCards({ lang, t, onSelect }: MoodCardsProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  // Track per-card image errors — if a card's image fails, show its gradient instead
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});

  const handleImgError = (key: string) => {
    setImgErrors(prev => ({ ...prev, [key]: true }));
  };

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
          const hasError = imgErrors[mood.key] ?? false;

          return (
            <motion.button
              key={mood.key}
              className="mood-card-snap flex-shrink-0 rounded-2xl relative overflow-hidden text-left rtl:text-right flex flex-col justify-end"
              style={{
                // Clamp: 85vw on small phones, cap at 340px so desktop shows 2 cards
                width: 'min(85vw, 340px)',
                minHeight: 'min(58dvh, 520px)',
                flexShrink: 0,
                // Premium gradient is always present as base layer — visible if image
                // hasn't loaded yet or has errored
                background: mood.gradient,
              }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              onClick={() => onSelect(mood.key)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, transition: { delay: idx * 0.06, duration: 0.4 } }}
              aria-label={label}
            >
              {/* Background image — only rendered when no error */}
              {!hasError && (
                <div className="absolute inset-0">
                  <Image
                    src={mood.imageUrl}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 85vw, 340px"
                    className="object-cover"
                    priority={idx < 2}
                    onError={() => handleImgError(mood.key)}
                  />
                </div>
              )}

              {/* Dark gradient — always present so text is legible over image or gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />

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
