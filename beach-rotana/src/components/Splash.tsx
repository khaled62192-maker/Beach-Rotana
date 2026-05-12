'use client';

import { useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Lang, Translations } from '@/data/translations';

interface SplashProps {
  lang: Lang;
  t: Translations;
  onDone: () => void;
}

export default function Splash({ lang, t, onDone }: SplashProps) {
  const reduced = useReducedMotion() ?? false;

  useEffect(() => {
    const timer = setTimeout(onDone, 1800);
    return () => clearTimeout(timer);
  }, [onDone]);

  const ease = 'easeOut' as const;
  const spring = { type: 'spring', stiffness: 260, damping: 28 } as const;

  // Reduced-motion: static render, instant opacity
  const fade = (delay = 0) =>
    reduced
      ? {}
      : { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.5, ease, delay } };

  const riseIn = (delay = 0) =>
    reduced
      ? {}
      : { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, transition: { ...spring, delay } };

  const scaleIn = (delay = 0) =>
    reduced
      ? {}
      : { initial: { opacity: 0, scaleX: 0 }, animate: { opacity: 1, scaleX: 1 }, transition: { duration: 0.5, ease, delay } };

  const isAr = lang === 'ar';

  return (
    <button
      onClick={onDone}
      className="relative w-full flex flex-col items-center justify-center bg-rotana-deep select-none cursor-default overflow-hidden"
      style={{ height: '100dvh' }}
      aria-label={isAr ? 'انتقل إلى اكتشاف المطاعم' : 'Continue to dining discovery'}
    >
      {/* ── Warm gold ambient glow — sunset-over-water ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: [
            'radial-gradient(ellipse 80% 50% at 50% 100%, rgba(196,150,90,0.13) 0%, transparent 70%)',
            'radial-gradient(ellipse 40% 40% at 50% 0%,   rgba(196,150,90,0.04) 0%, transparent 60%)',
          ].join(', '),
        }}
      />

      {/* ── Oversized "R" watermark — Rotana initial, ultra-low opacity ── */}
      {!reduced && (
        <motion.span
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 0.038, scale: 1 }}
          transition={{ duration: 2.2, ease }}
          className="
            absolute font-playfair font-normal text-rotana-gold
            select-none pointer-events-none
            leading-none tracking-tight
          "
          style={{ fontSize: 'clamp(280px, 60vw, 420px)', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
          aria-hidden="true"
        >
          R
        </motion.span>
      )}

      {/* ── Foreground brand content ── */}
      <div className="relative z-10 flex flex-col items-center px-8 text-center gap-0">

        {/* Hotel property name — the endorser mark */}
        <motion.div
          {...riseIn(0.1)}
          className="flex flex-col items-center"
        >
          {/* Decorative top rule */}
          <motion.div
            {...scaleIn(0.05)}
            className="w-10 h-px bg-rotana-gold mb-5"
          />

          <span
            className="font-playfair text-rotana-gold tracking-[0.28em] uppercase"
            style={{ fontSize: '13px', letterSpacing: isAr ? '0.05em' : undefined }}
          >
            {isAr ? 'بيتش روتانا' : 'Beach Rotana'}
          </span>

          <span className="font-inter text-rotana-gold/60 tracking-[0.42em] uppercase mt-1.5"
            style={{ fontSize: '8px' }}>
            {isAr ? 'أبوظبي' : 'Abu Dhabi'}
          </span>

          {/* Decorative bottom rule */}
          <motion.div
            {...scaleIn(0.2)}
            className="w-10 h-px bg-rotana-gold mt-5"
          />
        </motion.div>

        {/* App name — the primary headline */}
        <motion.span
          {...riseIn(0.32)}
          className="font-playfair text-rotana-sand tracking-[0.18em] uppercase mt-8"
          style={{ fontSize: 'clamp(52px, 15vw, 72px)' }}
        >
          {t.appName}
        </motion.span>

        {/* Tagline */}
        <motion.p
          {...fade(0.52)}
          className="font-playfair italic text-rotana-sand/52 mt-4 leading-relaxed max-w-[240px]"
          style={{ fontSize: '16px' }}
        >
          {t.tagline}
        </motion.p>
      </div>

      {/* ── Powered by ── */}
      <motion.p
        {...fade(0.68)}
        className="absolute bottom-0 pb-safe font-inter text-rotana-muted/40 uppercase tracking-widest"
        style={{ fontSize: '9px' }}
      >
        {t.poweredBy}
      </motion.p>
    </button>
  );
}
