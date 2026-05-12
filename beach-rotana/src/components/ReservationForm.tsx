'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Lang, Translations } from '@/data/translations';
import { Venue } from '@/data/venues';

interface ReservationFormProps {
  lang: Lang;
  t: Translations;
  venue: Venue;
  onSubmit: () => void;
  onBack: () => void;
}

export default function ReservationForm({
  lang,
  t,
  venue,
  onSubmit,
  onBack,
}: ReservationFormProps) {
  const [name, setName]       = useState('');
  const [phone, setPhone]     = useState('');
  const [guests, setGuests]   = useState(2);
  const [time, setTime]       = useState('');
  const [email, setEmail]     = useState('');
  const [errors, setErrors]   = useState<Record<string, string>>({});

  const venueName = lang === 'ar' ? venue.nameAr : venue.nameEn;

  const validate = () => {
    const e: Record<string, string> = {};
    if (!name.trim())  e.name  = t.errorRequired;
    if (!phone.trim()) e.phone = t.errorRequired;
    if (!time.trim())  e.time  = t.errorRequired;
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (validate()) onSubmit();
  };

  const inputClass = `
    w-full rounded-xl
    bg-rotana-surface border border-rotana-surface
    focus:border-rotana-gold
    text-rotana-sand placeholder:text-rotana-muted/60
    px-4 py-4
    font-inter
    outline-none
    transition-colors duration-150
    rtl:text-right
  `;

  const labelClass = 'block font-inter text-xs text-rotana-muted uppercase tracking-wider mb-2 rtl:text-right';

  return (
    <div
      className="flex flex-col bg-rotana-deep"
      style={{ height: '100dvh' }}
    >
      {/* Header */}
      <div className="flex-shrink-0 pt-safe px-6 pt-14 pb-5">
        <button
          onClick={onBack}
          className="flex items-center gap-1.5 text-rotana-muted font-inter text-sm mb-5 hover:text-rotana-sand transition-colors rtl:flex-row-reverse"
        >
          <span style={{ transform: lang === 'ar' ? 'scaleX(-1)' : undefined }}>←</span>
          {t.back}
        </button>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
        >
          <h1 className="font-playfair text-2xl text-rotana-sand rtl:text-right">
            {t.reservationTitle}
          </h1>
          <p className="font-inter text-rotana-gold text-sm mt-1 rtl:text-right">
            {t.reservationSubtitle} {venueName}
          </p>
        </motion.div>
      </div>

      {/* Form */}
      <div className="flex-1 overflow-y-auto no-scrollbar">
        <form onSubmit={handleSubmit} noValidate>
          <div className="px-6 pb-4 space-y-5">
            {/* Name */}
            <div>
              <label className={labelClass}>{t.fieldName}</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoComplete="name"
                className={inputClass}
                placeholder={lang === 'ar' ? 'الاسم الكريم' : 'Your full name'}
              />
              {errors.name && (
                <p className="text-red-400 font-inter text-xs mt-1.5 rtl:text-right">{errors.name}</p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label className={labelClass}>{t.fieldPhone}</label>
              <input
                type="tel"
                inputMode="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                autoComplete="tel"
                className={inputClass}
                placeholder="+971 50 000 0000"
                dir="ltr"
              />
              {errors.phone && (
                <p className="text-red-400 font-inter text-xs mt-1.5 rtl:text-right">{errors.phone}</p>
              )}
            </div>

            {/* Guests stepper */}
            <div>
              <label className={labelClass}>{t.fieldGuests}</label>
              <div className="flex items-center gap-4 rtl:flex-row-reverse">
                <button
                  type="button"
                  onClick={() => setGuests((g) => Math.max(1, g - 1))}
                  className="
                    w-11 h-11 rounded-xl
                    bg-rotana-surface border border-rotana-surface
                    text-rotana-sand text-xl
                    flex items-center justify-center
                    hover:border-rotana-gold/40
                    transition-colors duration-150
                    flex-shrink-0
                  "
                  aria-label="Decrease guests"
                >
                  −
                </button>
                <span className="font-playfair text-2xl text-rotana-sand flex-1 text-center">
                  {guests}{' '}
                  <span className="font-inter text-sm text-rotana-muted">
                    {guests === 1 ? t.guestSingular : t.guestPlural}
                  </span>
                </span>
                <button
                  type="button"
                  onClick={() => setGuests((g) => Math.min(20, g + 1))}
                  className="
                    w-11 h-11 rounded-xl
                    bg-rotana-surface border border-rotana-surface
                    text-rotana-sand text-xl
                    flex items-center justify-center
                    hover:border-rotana-gold/40
                    transition-colors duration-150
                    flex-shrink-0
                  "
                  aria-label="Increase guests"
                >
                  +
                </button>
              </div>
            </div>

            {/* Preferred time */}
            <div>
              <label className={labelClass}>{t.fieldTime}</label>
              <input
                type="text"
                inputMode="text"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className={inputClass}
                placeholder={t.fieldTimePlaceholder}
              />
              {errors.time && (
                <p className="text-red-400 font-inter text-xs mt-1.5 rtl:text-right">{errors.time}</p>
              )}
            </div>

            {/* Email (optional) */}
            <div>
              <label className={labelClass}>{t.fieldEmailOptional}</label>
              <input
                type="email"
                inputMode="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                className={inputClass}
                placeholder={lang === 'ar' ? 'email@example.com' : 'email@example.com'}
                dir="ltr"
              />
            </div>

            {/* Team contact card */}
            <div className="rounded-2xl bg-rotana-navy border border-rotana-surface p-5 mt-2">
              <p className="font-inter text-sm text-rotana-muted leading-relaxed mb-4 rtl:text-right">
                {t.teamNote}
              </p>
              <p className="font-playfair text-base text-rotana-gold mb-3 rtl:text-right">
                {t.teamName}
              </p>
              <div className="space-y-2">
                <a
                  href={`tel:${t.teamPhone.replace(/\s/g, '')}`}
                  className="flex items-center gap-2 font-inter text-sm text-rotana-gold hover:text-rotana-gold-light transition-colors rtl:flex-row-reverse rtl:justify-end"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012.18 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.09a16 16 0 006 6l.56-.56a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                  </svg>
                  {t.teamPhone}
                </a>
                <a
                  href={`mailto:${t.teamEmail}`}
                  className="flex items-center gap-2 font-inter text-sm text-rotana-gold hover:text-rotana-gold-light transition-colors rtl:flex-row-reverse rtl:justify-end"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                  {t.teamEmail}
                </a>
              </div>
            </div>

            <div className="h-28" />
          </div>

          {/* Sticky submit */}
          <div
            className="
              fixed bottom-0 left-0 right-0
              bg-rotana-deep/95 backdrop-blur-sm
              border-t border-rotana-surface
              px-5 pt-4
            "
            style={{ paddingBottom: 'max(1.25rem, env(safe-area-inset-bottom))' }}
          >
            <motion.button
              type="submit"
              whileTap={{ scale: 0.97 }}
              className="
                w-full
                bg-rotana-gold hover:bg-rotana-gold-light
                text-rotana-deep font-inter font-semibold text-[15px]
                rounded-xl py-4
                transition-colors duration-150
              "
            >
              {t.submitButton}
            </motion.button>
          </div>
        </form>
      </div>
    </div>
  );
}
