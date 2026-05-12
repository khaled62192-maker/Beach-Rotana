'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Lang, Translations } from '@/data/translations';
import { Venue } from '@/data/venues';

interface VenueDetailProps {
  lang: Lang;
  t: Translations;
  venue: Venue;
  otherVenues: Venue[];
  onReserve: () => void;
  onSelectOther: (venue: Venue) => void;
  onChangeMood: () => void;
}

export default function VenueDetail({
  lang,
  t,
  venue,
  otherVenues,
  onReserve,
  onSelectOther,
  onChangeMood,
}: VenueDetailProps) {
  const name = lang === 'ar' ? venue.nameAr : venue.nameEn;
  const cuisine = lang === 'ar' ? venue.cuisineAr : venue.cuisine;
  const hours = lang === 'ar' ? venue.hoursAr : venue.hours;
  const setting = lang === 'ar' ? venue.settingAr : venue.setting;
  const description = lang === 'ar' ? venue.descriptionAr : venue.description;
  const keyFeature = lang === 'ar' ? venue.keyFeatureAr : venue.keyFeature;

  return (
    <div
      className="flex flex-col bg-rotana-deep"
      style={{ height: '100dvh' }}
    >
      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto no-scrollbar">
        {/* Hero image */}
        <div className="relative w-full" style={{ aspectRatio: '4/3' }}>
          <Image
            src={venue.imageUrl}
            alt={name}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          {/* Gradient overlay — heavy at bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-rotana-deep via-rotana-deep/30 to-transparent" />

          {/* Pull handle indicator */}
          <div className="absolute top-3 left-1/2 -translate-x-1/2">
            <div className="w-10 h-1 rounded-full bg-white/20" />
          </div>

          {/* Venue name on hero */}
          <div className="absolute bottom-0 left-0 right-0 px-6 pb-5 rtl:text-right">
            <h1 className="font-playfair text-4xl text-rotana-sand leading-tight">
              {name}
            </h1>
          </div>
        </div>

        {/* Body */}
        <div className="px-6 py-6">
          {/* Cuisine chip */}
          <span className="
            inline-flex items-center
            bg-rotana-surface border border-rotana-gold/30
            text-rotana-gold font-inter text-[11px] font-medium tracking-wider uppercase
            px-3 py-1.5 rounded-full mb-5
          ">
            {cuisine}
          </span>

          {/* Description */}
          <p className="font-inter text-rotana-sand/80 leading-relaxed mb-6 rtl:text-right">
            {description}
          </p>

          {/* Key feature */}
          <div className="flex items-start gap-3 mb-4 rtl:flex-row-reverse">
            <div className="w-1.5 h-1.5 rounded-full bg-rotana-gold flex-shrink-0 mt-2" />
            <p className="font-inter text-sm text-rotana-sand/70 leading-relaxed rtl:text-right">
              {keyFeature}
            </p>
          </div>

          {/* Info rows */}
          <div className="border-t border-rotana-surface mt-6 pt-5 space-y-4">
            <div className="flex justify-between items-start rtl:flex-row-reverse">
              <span className="font-inter text-xs text-rotana-muted uppercase tracking-wider">
                {t.hours}
              </span>
              <span className="font-inter text-sm text-rotana-sand text-right rtl:text-left max-w-[60%]">
                {hours}
              </span>
            </div>
            <div className="flex justify-between items-start rtl:flex-row-reverse">
              <span className="font-inter text-xs text-rotana-muted uppercase tracking-wider">
                {t.setting}
              </span>
              <span className="font-inter text-sm text-rotana-sand text-right rtl:text-left max-w-[60%]">
                {setting}
              </span>
            </div>
          </div>

          {/* Other options */}
          {otherVenues.length > 0 && (
            <div className="mt-7">
              <p className="font-inter text-xs text-rotana-muted uppercase tracking-wider mb-3 rtl:text-right">
                {t.orTry}
              </p>
              <div className="flex gap-2 flex-wrap rtl:flex-row-reverse">
                {otherVenues.map((v) => (
                  <motion.button
                    key={v.id}
                    whileTap={{ scale: 0.96 }}
                    onClick={() => onSelectOther(v)}
                    className="
                      rounded-xl border border-rotana-surface
                      bg-rotana-navy
                      px-4 py-2.5
                      font-inter text-sm text-rotana-sand
                      hover:border-rotana-gold/40
                      transition-colors duration-150
                    "
                  >
                    {lang === 'ar' ? v.nameAr : v.nameEn}
                  </motion.button>
                ))}
              </div>
            </div>
          )}

          {/* Change mood link */}
          <div className="mt-8 flex justify-center">
            <button
              onClick={onChangeMood}
              className="font-inter text-sm text-rotana-muted hover:text-rotana-sand transition-colors"
            >
              {t.changeMood}
            </button>
          </div>

          {/* Bottom spacer for sticky CTA */}
          <div className="h-28" />
        </div>
      </div>

      {/* Sticky CTA bar */}
      <div
        className="
          flex-shrink-0
          bg-rotana-deep/95 backdrop-blur-sm
          border-t border-rotana-surface
          px-5 pt-4 pb-safe
        "
        style={{ paddingBottom: 'max(1.25rem, env(safe-area-inset-bottom))' }}
      >
        <div className="flex gap-3">
          {/* Primary CTA */}
          <motion.button
            whileTap={{ scale: 0.97 }}
            onClick={onReserve}
            className="
              flex-1
              bg-rotana-gold hover:bg-rotana-gold-light
              text-rotana-deep font-inter font-semibold text-[15px]
              rounded-xl py-4
              transition-colors duration-150
              select-none
            "
          >
            {t.sendReservation}
          </motion.button>

          {/* Call direct */}
          <motion.a
            href="tel:+97126979000"
            whileTap={{ scale: 0.97 }}
            className="
              flex-shrink-0
              border border-rotana-surface bg-rotana-navy
              text-rotana-sand font-inter text-[13px]
              rounded-xl px-4 py-4
              flex items-center justify-center
              hover:border-rotana-gold/40
              transition-colors duration-150
              select-none
            "
            aria-label={t.callDirect}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012.18 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.09a16 16 0 006 6l.56-.56a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
            </svg>
          </motion.a>
        </div>
      </div>
    </div>
  );
}
