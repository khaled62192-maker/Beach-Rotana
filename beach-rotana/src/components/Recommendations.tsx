'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Lang, Translations } from '@/data/translations';
import { Venue } from '@/data/venues';

interface RecommendationsProps {
  lang: Lang;
  t: Translations;
  venues: Venue[];
  onSelect: (venue: Venue) => void;
  onChangeMood: () => void;
}

export default function Recommendations({
  lang,
  t,
  venues,
  onSelect,
  onChangeMood,
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
          className="flex flex-col gap-4 py-4"
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08 } },
          }}
        >
          {venues.map((venue, idx) => {
            const name = lang === 'ar' ? venue.nameAr : venue.nameEn;
            const cuisine = lang === 'ar' ? venue.cuisineAr : venue.cuisine;
            const keyFeature = lang === 'ar' ? venue.keyFeatureAr : venue.keyFeature;

            return (
              <motion.button
                key={venue.id}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: { type: 'spring', stiffness: 300, damping: 24 },
                  },
                }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onSelect(venue)}
                className="
                  rounded-2xl overflow-hidden
                  bg-rotana-navy
                  text-left rtl:text-right
                  w-full
                  select-none
                "
              >
                {/* Hero image */}
                <div className="relative w-full" style={{ aspectRatio: '16/9' }}>
                  <Image
                    src={venue.imageUrl}
                    alt={name}
                    fill
                    sizes="(max-width: 768px) 100vw, 600px"
                    className="object-cover"
                    priority={idx === 0}
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-rotana-navy via-rotana-navy/20 to-transparent" />

                  {/* Cuisine tag */}
                  <div className="absolute top-3 left-3 rtl:left-auto rtl:right-3">
                    <span className="
                      bg-rotana-deep/80 backdrop-blur-sm
                      border border-rotana-gold/30
                      text-rotana-gold
                      font-inter text-[10px] font-medium tracking-wider uppercase
                      px-2.5 py-1 rounded-full
                    ">
                      {cuisine}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3 rtl:flex-row-reverse">
                    <div className="flex-1 min-w-0">
                      <h2 className="font-playfair text-2xl text-rotana-sand leading-tight line-clamp-1">
                        {name}
                      </h2>
                      <p className="font-inter text-sm text-rotana-muted mt-1.5 line-clamp-2 leading-relaxed">
                        {keyFeature}
                      </p>
                    </div>
                    <span
                      className="text-rotana-gold text-xl mt-1 flex-shrink-0 font-light"
                      style={{ transform: lang === 'ar' ? 'scaleX(-1)' : undefined }}
                    >
                      →
                    </span>
                  </div>
                </div>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Change mood */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex justify-center pb-safe pb-8"
        >
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
        </motion.div>
      </div>
    </div>
  );
}
