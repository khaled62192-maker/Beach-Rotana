'use client';

import { motion } from 'framer-motion';
import { Lang, Translations } from '@/data/translations';

interface ConfirmationProps {
  lang: Lang;
  t: Translations;
  onStartOver: () => void;
}

export default function Confirmation({ t, onStartOver }: ConfirmationProps) {
  return (
    <div
      className="flex flex-col items-center justify-center bg-rotana-deep px-8"
      style={{ height: '100dvh' }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: 'spring', stiffness: 200, damping: 25 }}
        className="flex flex-col items-center text-center max-w-sm"
      >
        {/* Gold check circle */}
        <div className="w-16 h-16 rounded-full border-2 border-rotana-gold flex items-center justify-center mb-8">
          <motion.svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#C4965A"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 0.3, duration: 0.5, ease: 'easeOut' }}
          >
            <motion.polyline points="20 6 9 17 4 12" />
          </motion.svg>
        </div>

        {/* Decorative line */}
        <div className="w-12 h-px bg-rotana-gold mb-6" />

        {/* Title */}
        <h1 className="font-playfair text-4xl text-rotana-sand mb-5 leading-tight">
          {t.confirmationTitle}
        </h1>

        {/* Body */}
        <p className="font-inter text-rotana-muted leading-relaxed mb-8">
          {t.confirmationBody}
        </p>

        {/* Note */}
        <a
          href="tel:+97126979000"
          className="font-inter text-sm text-rotana-gold hover:text-rotana-gold-light transition-colors mb-10"
        >
          {t.confirmationNote}
        </a>

        {/* Start over */}
        <button
          onClick={onStartOver}
          className="
            font-inter text-sm text-rotana-muted
            border border-rotana-surface
            rounded-xl px-8 py-3
            hover:text-rotana-sand hover:border-rotana-muted/50
            transition-colors duration-150
          "
        >
          {t.startOver}
        </button>
      </motion.div>

      {/* Powered by */}
      <p className="absolute bottom-0 pb-safe font-inter text-[10px] tracking-wider text-rotana-muted/40 uppercase">
        {t.poweredBy}
      </p>
    </div>
  );
}
