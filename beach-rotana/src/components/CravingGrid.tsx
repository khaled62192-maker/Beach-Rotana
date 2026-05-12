'use client';

import { motion } from 'framer-motion';
import { Lang, Translations } from '@/data/translations';
import { CravingKey } from '@/data/venues';

interface CravingGridProps {
  lang: Lang;
  t: Translations;
  onSelect: (craving: CravingKey) => void;
  onBack: () => void;
}

const CRAVINGS: CravingKey[] = [
  'burgers',
  'pasta',
  'sushi',
  'steak',
  'seafood',
  'pizza',
  'indian',
  'coffee-pastries',
  'cocktails',
  'shisha',
  'dessert',
  'lighter',
];

export default function CravingGrid({ lang, t, onSelect, onBack }: CravingGridProps) {
  return (
    <div
      className="flex flex-col bg-rotana-deep"
      style={{ height: '100dvh' }}
    >
      {/* Header */}
      <div className="pt-safe px-6 pt-16 pb-5 flex-shrink-0">
        <button
          onClick={onBack}
          className="flex items-center gap-1.5 text-rotana-muted font-inter text-sm mb-5 hover:text-rotana-sand transition-colors rtl:flex-row-reverse"
        >
          <span style={{ transform: lang === 'ar' ? 'scaleX(-1)' : undefined }}>←</span>
          {t.back}
        </button>
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="font-playfair text-3xl text-rotana-sand rtl:text-right"
        >
          {t.cravingQuestion}
        </motion.h1>
      </div>

      {/* Craving grid */}
      <div className="flex-1 overflow-y-auto no-scrollbar px-5 pb-safe">
        <motion.div
          className="grid grid-cols-2 gap-3"
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.04 } },
          }}
        >
          {CRAVINGS.map((craving) => (
            <motion.button
              key={craving}
              variants={{
                hidden: { opacity: 0, y: 16 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { type: 'spring', stiffness: 300, damping: 24 },
                },
              }}
              whileTap={{ scale: 1.04 }}
              onClick={() => onSelect(craving)}
              className="
                rounded-2xl
                bg-rotana-navy border border-rotana-surface
                py-5 px-4
                text-center
                font-inter text-sm font-medium text-rotana-sand
                min-h-[64px]
                hover:border-rotana-gold/50 hover:text-rotana-gold
                active:border-rotana-gold active:text-rotana-gold
                transition-colors duration-150
                select-none
              "
            >
              {t.cravings[craving] ?? craving}
            </motion.button>
          ))}
        </motion.div>
        <div className="h-6" />
      </div>
    </div>
  );
}
