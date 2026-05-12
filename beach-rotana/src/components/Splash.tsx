'use client';

import { useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Lang, Translations } from '@/data/translations';

interface SplashProps {
  lang: Lang;
  t: Translations;
  onDone: () => void;
}

// ── Rotana emblem — circle with converging palm-fan arcs
// Faithfully recreated from the Rotana Hotels & Resorts brand mark
function RotanaEmblem({
  size = 72,
  color = '#C4965A',
}: {
  size?: number;
  color?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      aria-hidden="true"
    >
      {/* Outer circle */}
      <circle
        cx="50"
        cy="50"
        r="44"
        stroke={color}
        strokeWidth="2.8"
      />

      {/* Fan arcs — all converge at (50, 73), fanning upward symmetrically */}

      {/* Left side — 5 arcs, innermost to outermost */}
      <path d="M50,73 C50,57 46,37 44,22"   stroke={color} strokeWidth="2"   strokeLinecap="round"/>
      <path d="M50,73 C49,55 39,30 33,19"   stroke={color} strokeWidth="2"   strokeLinecap="round"/>
      <path d="M50,73 C47,53 28,27 21,21"   stroke={color} strokeWidth="1.9" strokeLinecap="round"/>
      <path d="M50,73 C44,53 21,34 15,31"   stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M50,73 C41,57 17,46 11,47"   stroke={color} strokeWidth="1.6" strokeLinecap="round"/>

      {/* Right side — mirror */}
      <path d="M50,73 C50,57 54,37 56,22"   stroke={color} strokeWidth="2"   strokeLinecap="round"/>
      <path d="M50,73 C51,55 61,30 67,19"   stroke={color} strokeWidth="2"   strokeLinecap="round"/>
      <path d="M50,73 C53,53 72,27 79,21"   stroke={color} strokeWidth="1.9" strokeLinecap="round"/>
      <path d="M50,73 C56,53 79,34 85,31"   stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M50,73 C59,57 83,46 89,47"   stroke={color} strokeWidth="1.6" strokeLinecap="round"/>
    </svg>
  );
}

export default function Splash({ lang, t, onDone }: SplashProps) {
  const reduced = useReducedMotion() ?? false;

  useEffect(() => {
    const timer = setTimeout(onDone, 2000);
    return () => clearTimeout(timer);
  }, [onDone]);

  const ease = 'easeOut' as const;
  const spring = { type: 'spring', stiffness: 260, damping: 28 } as const;

  const fade = (delay = 0) =>
    reduced ? {} : {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 0.5, ease, delay },
    };

  const riseIn = (delay = 0) =>
    reduced ? {} : {
      initial: { opacity: 0, y: 10 },
      animate: { opacity: 1, y: 0 },
      transition: { ...spring, delay },
    };

  const scaleIn = (delay = 0) =>
    reduced ? {} : {
      initial: { opacity: 0, scaleX: 0 },
      animate: { opacity: 1, scaleX: 1 },
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
      {/* Warm gold ambient glow — sunset over water */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: [
            'radial-gradient(ellipse 80% 50% at 50% 100%, rgba(196,150,90,0.12) 0%, transparent 65%)',
            'radial-gradient(ellipse 40% 30% at 50% 0%,   rgba(196,150,90,0.04) 0%, transparent 60%)',
          ].join(', '),
        }}
      />

      {/* Oversized background watermark — Rotana emblem, ultra-low opacity */}
      {!reduced && (
        <motion.div
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 0.045, scale: 1 }}
          transition={{ duration: 2.4, ease }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          <RotanaEmblem size={360} color="#C4965A" />
        </motion.div>
      )}

      {/* Foreground content */}
      <div className="relative z-10 flex flex-col items-center px-8 text-center">

        {/* Rotana emblem — main foreground mark */}
        <motion.div {...riseIn(0.08)} className="mb-7">
          <RotanaEmblem size={68} color="#C4965A" />
        </motion.div>

        {/* Decorative top rule */}
        <motion.div {...scaleIn(0.22)} className="w-10 h-px bg-rotana-gold mb-5" />

        {/* Hotel property name */}
        <motion.div {...riseIn(0.18)} className="flex flex-col items-center">
          <span
            className="font-playfair text-rotana-gold tracking-[0.26em] uppercase"
            style={{ fontSize: '12px', letterSpacing: isAr ? '0.06em' : undefined }}
          >
            {isAr ? 'بيتش روتانا' : 'Beach Rotana'}
          </span>
          <span
            className="font-inter text-rotana-gold/55 tracking-[0.44em] uppercase mt-1"
            style={{ fontSize: '8px' }}
          >
            {isAr ? 'أبوظبي' : 'Abu Dhabi'}
          </span>
        </motion.div>

        {/* Decorative bottom rule */}
        <motion.div {...scaleIn(0.3)} className="w-10 h-px bg-rotana-gold mt-5 mb-8" />

        {/* App name */}
        <motion.span
          {...riseIn(0.38)}
          className="font-playfair text-rotana-sand tracking-[0.18em] uppercase"
          style={{ fontSize: 'clamp(50px, 14vw, 68px)' }}
        >
          {t.appName}
        </motion.span>

        {/* Tagline */}
        <motion.p
          {...fade(0.56)}
          className="font-playfair italic text-rotana-sand/50 mt-4 leading-relaxed max-w-[230px]"
          style={{ fontSize: '15px' }}
        >
          {t.tagline}
        </motion.p>
      </div>

      {/* Powered by */}
      <motion.p
        {...fade(0.72)}
        className="absolute bottom-0 pb-safe font-inter text-rotana-muted/35 uppercase tracking-widest"
        style={{ fontSize: '9px' }}
      >
        {t.poweredBy}
      </motion.p>
    </button>
  );
}
