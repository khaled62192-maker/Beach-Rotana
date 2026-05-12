'use client';

import { useEffect } from 'react';
import Image from 'next/image';
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
    const timer = setTimeout(onDone, 2200);
    return () => clearTimeout(timer);
  }, [onDone]);

  const ease = 'easeOut' as const;
  const spring = { type: 'spring', stiffness: 260, damping: 28 } as const;

  const fade = (delay = 0) =>
    reduced ? {} : {
      initial:    { opacity: 0 },
      animate:    { opacity: 1 },
      transition: { duration: 0.5, ease, delay },
    };

  const riseIn = (delay = 0) =>
    reduced ? {} : {
      initial:    { opacity: 0, y: 10 },
      animate:    { opacity: 1, y: 0 },
      transition: { ...spring, delay },
    };

  const scaleIn = (delay = 0) =>
    reduced ? {} : {
      initial:    { opacity: 0, scaleX: 0 },
      animate:    { opacity: 1, scaleX: 1 },
      transition: { duration: 0.45, ease, delay },
    };

  const isAr = lang === 'ar';

  return (
    <button
      onClick={onDone}
      className="relative w-full flex flex-col items-center justify-center bg-rotana-deep select-none cursor-default overflow-hidden"
      style={{ height: '100dvh' }}
      aria-label={isAr ? 'انتقل إلى اكتشاف المطاعم' : 'Continue to dining discovery'}
    >
      {/* Warm ambient glow — purely decorative */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: [
            'radial-gradient(ellipse 80% 50% at 50% 100%, rgba(196,150,90,0.10) 0%, transparent 65%)',
            'radial-gradient(ellipse 40% 30% at 50% 0%,   rgba(196,150,90,0.04) 0%, transparent 60%)',
          ].join(', '),
        }}
      />

      {/* ── Branding ───────────────────────────────────────────────── */}
      <div className="relative z-10 flex flex-col items-center px-8 text-center">

        {/* Official Rotana Hotels & Resorts logo — exact public asset from rotana.com CDN */}
        <motion.div {...riseIn(0.05)} className="mb-7">
          <Image
            src="/rotana-logo.png"
            alt="Rotana Hotels & Resorts"
            width={130}
            height={51}
            className="opacity-85"
            priority
          />
        </motion.div>

        {/* Top rule */}
        <motion.div {...scaleIn(0.14)} className="w-16 h-px bg-rotana-gold mb-8" />

        {/* TASTE wordmark */}
        <motion.span
          {...riseIn(0.18)}
          className="font-playfair text-rotana-sand tracking-[0.18em] uppercase"
          style={{ fontSize: 'clamp(52px, 14vw, 70px)' }}
        >
          {t.appName}
        </motion.span>

        {/* "by Beach Rotana" */}
        <motion.p
          {...riseIn(0.28)}
          className="font-inter text-rotana-gold uppercase mt-3"
          style={{
            fontSize:      '11px',
            letterSpacing: isAr ? '0.06em' : '0.42em',
          }}
        >
          {isAr ? 'بيتش روتانا' : 'by Beach Rotana'}
        </motion.p>

        {/* Abu Dhabi */}
        <motion.p
          {...fade(0.36)}
          className="font-inter text-rotana-muted/55 uppercase mt-1"
          style={{
            fontSize:      '9px',
            letterSpacing: isAr ? '0.04em' : '0.5em',
          }}
        >
          {isAr ? 'أبوظبي' : 'Abu Dhabi'}
        </motion.p>

        {/* Bottom rule */}
        <motion.div {...scaleIn(0.42)} className="w-16 h-px bg-rotana-gold mt-8 mb-6" />

        {/* Tagline */}
        <motion.p
          {...fade(0.54)}
          className="font-playfair italic text-rotana-sand/45 leading-relaxed max-w-[220px]"
          style={{ fontSize: '15px' }}
        >
          {t.tagline}
        </motion.p>
      </div>

      {/* Powered by */}
      <motion.p
        {...fade(0.7)}
        className="absolute bottom-0 pb-safe font-inter text-rotana-muted/35 uppercase tracking-widest"
        style={{ fontSize: '9px' }}
      >
        {t.poweredBy}
      </motion.p>
    </button>
  );
}
