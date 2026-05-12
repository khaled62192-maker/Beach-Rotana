'use client';

import { motion } from 'framer-motion';
import { Lang, Translations } from '@/data/translations';
import { MoodKey } from '@/data/venues';
import { FollowupAnswer } from '@/lib/recommendations';

interface FollowUpProps {
  lang: Lang;
  t: Translations;
  mood: MoodKey;
  onAnswer: (answer: FollowupAnswer) => void;
  onBack: () => void;
}

export default function FollowUp({ lang, t, mood, onAnswer, onBack }: FollowUpProps) {
  const config =
    mood === 'proper-dinner' ? t.followUpProperDinner : t.followUpLightSocial;

  const answers: Array<{ label: string; value: FollowupAnswer }> =
    mood === 'proper-dinner'
      ? [
          { label: config.optionA, value: 'relaxed' },
          { label: config.optionB, value: 'elevated' },
        ]
      : [
          { label: config.optionA, value: 'indoor' },
          { label: config.optionB, value: 'outdoor' },
        ];

  return (
    <div
      className="flex flex-col justify-center bg-rotana-deep px-6"
      style={{ height: '100dvh' }}
    >
      {/* Back button */}
      <div className="absolute top-0 left-0 pt-safe px-6 pt-16 rtl:left-auto rtl:right-0">
        <button
          onClick={onBack}
          className="flex items-center gap-1.5 text-rotana-muted font-inter text-sm hover:text-rotana-sand transition-colors rtl:flex-row-reverse"
        >
          <span style={{ transform: lang === 'ar' ? 'scaleX(-1)' : undefined }}>←</span>
          {t.back}
        </button>
      </div>

      {/* Question */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="mb-8"
      >
        <div className="w-8 h-px bg-rotana-gold mb-6" />
        <h1 className="font-playfair text-3xl text-rotana-sand leading-snug rtl:text-right">
          {config.question}
        </h1>
      </motion.div>

      {/* Options */}
      <motion.div
        className="flex flex-col gap-4"
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.08 } },
        }}
      >
        {answers.map(({ label, value }) => (
          <motion.button
            key={value}
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: {
                opacity: 1,
                y: 0,
                transition: { type: 'spring', stiffness: 300, damping: 24 },
              },
            }}
            whileTap={{ scale: 0.97 }}
            onClick={() => onAnswer(value)}
            className="
              w-full rounded-2xl
              bg-rotana-navy border border-rotana-surface
              py-6 px-6
              font-playfair text-xl text-rotana-sand
              text-center rtl:text-right
              min-h-[80px]
              hover:border-rotana-gold/50
              active:border-rotana-gold active:bg-rotana-surface
              transition-colors duration-150
              select-none
            "
          >
            {label}
          </motion.button>
        ))}
      </motion.div>
    </div>
  );
}
