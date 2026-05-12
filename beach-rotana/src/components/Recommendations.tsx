'use client';

import { motion } from 'framer-motion';
import { Lang, Translations } from '@/data/translations';
import { Venue } from '@/data/venues';
import { getVenueGradient } from '@/lib/venueGradients';

interface RecommendationsProps {
  lang: Lang;
  t: Translations;
  venues: Venue[];
  onSelect: (venue: Venue) => void;
  onChangeMood: () => void;
  onViewAll: () => void;
  onSurpriseAgain?: () => void;
}

export default function Recommendations({
  lang,
  t,
  venues,
  onSelect,
  onChangeMood,
  onViewAll,
  onSurpriseAgain,
}: RecommendationsProps) {
  return (
    <div
      className="flex flex-col bg-rotana-deep"
      style={{ height: '100dvh' }}
    >
      {/* Header */}
      <div className="pt-safe px-6 pt-16 pb-4 flex-shrink-0">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
        >
          <p className="font-inter text-[10px] font-medium tracking-[0.4em] uppercase text-rotana-gold mb-2">
            {lang === 'ar' ? 'بيتش روتانا' : 'BEACH ROTANA'}
          </p>
          <h1 className="font-playfair text-3xl text-rotana-sand rtl:text-right">
            {t.recommendationsTitle}
          </h1>
          <div className="w-12 h-px bg-rotana-gold mt-3" />
        </motion.div>
      </div>

      {/* Venue cards */}
      <div className="flex-1 overflow-y-auto no-scrollbar px-5">
        <motion.div
          className="flex flex-col gap-3 py-4"
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08 } },
          }}
        >
          {venues.map((venue) => {
            const name       = lang === 'ar' ? venue.nameAr       : venue.nameEn;
            const cuisine    = lang === 'ar' ? venue.cuisineAr    : venue.cuisine;
            const keyFeature = lang === 'ar' ? venue.keyFeatureAr : venue.keyFeature;
            const hours      = lang === 'ar' ? venue.hoursAr      : venue.hours;
            const setting    = lang === 'ar' ? venue.settingAr    : venue.setting;

            return (
              <motion.button
                key={venue.id}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: { type: 'spring', stiffness: 300, damping: 24 },
                  },
                }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onSelect(venue)}
                aria-label={`${name} — ${cuisine}. ${keyFeature}`}
                className="rounded-2xl overflow-hidden text-left rtl:text-right w-full select-none relative"
                style={{ background: getVenueGradient(venue.id) }}
              >
                {/* Subtle gold ambient glow — top-right corner */}
                <div
                  className="absolute top-0 right-0 w-48 h-48 pointer-events-none"
                  style={{
                    background:
                      'radial-gradient(circle at 100% 0%, rgba(196,150,90,0.07) 0%, transparent 70%)',
                  }}
                  aria-hidden="true"
                />

                {/* Card body */}
                <div className="relative z-10 p-5">
                  {/* Top row: cuisine pill + hours */}
                  <div className="flex items-center justify-between gap-3 rtl:flex-row-reverse mb-4">
                    <span className="
                      inline-flex items-center
                      border border-rotana-gold/35
                      text-rotana-gold font-inter text-[10px] font-medium tracking-wider uppercase
                      px-2.5 py-1 rounded-full
                    ">
                      {cuisine}
                    </span>
                    <span className="font-inter text-[10px] text-rotana-muted/60 uppercase tracking-wider">
                      {hours}
                    </span>
                  </div>

                  {/* Venue name */}
                  <h2 className="font-playfair text-[22px] text-rotana-sand leading-tight mb-2">
                    {name}
                  </h2>

                  {/* Setting + key feature */}
                  <p className="font-inter text-xs text-rotana-muted leading-relaxed line-clamp-2 mb-4">
                    {setting} · {keyFeature}
                  </p>

                  {/* Bottom row: arrow */}
                  <div className="flex items-center justify-between rtl:flex-row-reverse">
                    <div className="w-6 h-px bg-rotana-gold/40" />
                    <span
                      className="text-rotana-gold text-lg font-light"
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
        </motion.div>

        {/* Footer actions */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col items-center gap-3 pb-safe pb-8"
        >
          {/* Surprise re-roll */}
          {onSurpriseAgain && (
            <button
              onClick={onSurpriseAgain}
              className="
                font-inter text-sm text-rotana-gold
                border border-rotana-gold/30
                rounded-xl px-6 py-3
                hover:bg-rotana-gold/10
                transition-colors duration-150
              "
            >
              {t.surpriseAgain}
            </button>
          )}

          {/* Change mood */}
          <button
            onClick={onChangeMood}
            className="
              font-inter text-sm text-rotana-muted
              border border-rotana-surface
              rounded-xl px-6 py-3
              hover:text-rotana-sand hover:border-rotana-muted/50
              transition-colors duration-150
            "
          >
            {t.changeMood}
          </button>

          {/* View all */}
          <button
            onClick={onViewAll}
            className="
              font-inter text-xs text-rotana-gold/70
              hover:text-rotana-gold
              transition-colors duration-150
              underline underline-offset-4
              py-1
            "
          >
            {t.viewAllVenues}
          </button>
        </motion.div>
      </div>
    </div>
  );
}
