import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'rotana-deep':       '#0B1C2C',
        'rotana-navy':       '#142638',
        'rotana-surface':    '#1A2F42',
        'rotana-gold':       '#C4965A',
        'rotana-gold-light': '#D4A96A',
        'rotana-sand':       '#F2E8D5',
        'rotana-muted':      '#8BA3B6',
      },
      fontFamily: {
        playfair: ['var(--font-playfair)', 'Georgia', 'serif'],
        inter:    ['var(--font-inter)', 'system-ui', 'sans-serif'],
        cairo:    ['var(--font-cairo)', 'sans-serif'],
      },
      screens: {
        xs: '390px',
      },
      keyframes: {
        'fade-up': {
          '0%':   { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.45s cubic-bezier(0.32, 0.72, 0, 1) both',
      },
    },
  },
  plugins: [],
};

export default config;
