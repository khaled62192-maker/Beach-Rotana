'use client';

import { useState, useCallback, useEffect } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { getRecommendations, FollowupAnswer } from '@/lib/recommendations';
import { Venue, MoodKey, CravingKey } from '@/data/venues';
import { Lang, TRANSLATIONS } from '@/data/translations';

import Splash          from '@/components/Splash';
import MoodCards       from '@/components/MoodCards';
import CravingGrid     from '@/components/CravingGrid';
import FollowUp        from '@/components/FollowUp';
import Recommendations from '@/components/Recommendations';
import VenueDetail     from '@/components/VenueDetail';
import ReservationForm from '@/components/ReservationForm';
import Confirmation    from '@/components/Confirmation';
import LanguageToggle  from '@/components/LanguageToggle';

// ── Types ─────────────────────────────────────────────────────────
type Screen =
  | 'splash'
  | 'mood'
  | 'craving'
  | 'followup'
  | 'recommendations'
  | 'venue'
  | 'reservation'
  | 'confirmation';

interface AppState {
  screen: Screen;
  lang: Lang;
  mood: MoodKey | null;
  craving: CravingKey | null;
  followupAnswer: FollowupAnswer;
  recommendations: Venue[];
  selectedVenue: Venue | null;
  direction: 1 | -1;
}

// ── Animation helpers ─────────────────────────────────────────────
function getAnimProps(screen: Screen, direction: 1 | -1, reduced: boolean) {
  if (reduced) {
    return {
      initial:  { opacity: 0 },
      animate:  { opacity: 1 },
      exit:     { opacity: 0 },
      transition: { duration: 0.15 },
    };
  }

  const spring    = { type: 'spring', stiffness: 380, damping: 32 } as const;
  const sheet     = { type: 'spring', stiffness: 300, damping: 30 } as const;
  const scaleFade = { type: 'spring', stiffness: 200, damping: 25 } as const;

  if (screen === 'splash') {
    return {
      initial:  { opacity: 0 },
      animate:  { opacity: 1, transition: { duration: 0.3 } },
      exit:     { opacity: 0, transition: { duration: 0.2 } },
    };
  }

  if (screen === 'venue' || screen === 'reservation') {
    return {
      initial:  { y: '100%' },
      animate:  { y: 0,      transition: sheet },
      exit:     { y: '100%', transition: sheet },
    };
  }

  if (screen === 'confirmation') {
    return {
      initial:  { opacity: 0, scale: 0.96 },
      animate:  { opacity: 1, scale: 1,    transition: scaleFade },
      exit:     { opacity: 0, scale: 0.96, transition: { duration: 0.15 } },
    };
  }

  // Horizontal slide — mood, craving, followup, recommendations
  return {
    initial:  { x: direction > 0 ? '100%' : '-100%', opacity: 0 },
    animate:  { x: 0, opacity: 1, transition: spring },
    exit:     { x: direction > 0 ? '-100%' : '100%', opacity: 0, transition: spring },
  };
}

// Screens that don't show the language toggle
const CHROME_LESS: Screen[] = ['splash', 'confirmation'];

// ── Component ─────────────────────────────────────────────────────
export default function Home() {
  const prefersReducedMotion = useReducedMotion() ?? false;

  const [state, setState] = useState<AppState>({
    screen:          'splash',
    lang:            'en',
    mood:            null,
    craving:         null,
    followupAnswer:  null,
    recommendations: [],
    selectedVenue:   null,
    direction:       1,
  });

  const t = TRANSLATIONS[state.lang];

  // Sync html dir/lang
  useEffect(() => {
    const html = document.documentElement;
    html.setAttribute('lang', state.lang);
    html.setAttribute('dir', state.lang === 'ar' ? 'rtl' : 'ltr');
  }, [state.lang]);

  // ── Navigation ──────────────────────────────────────────────────
  const go = useCallback(
    (screen: Screen, patch: Partial<AppState> = {}, direction: 1 | -1 = 1) => {
      setState((prev) => ({ ...prev, ...patch, screen, direction }));
    },
    [],
  );

  const goBack = useCallback((target: Screen) => {
    setState((prev) => ({ ...prev, screen: target, direction: -1 }));
  }, []);

  // ── Handlers ────────────────────────────────────────────────────
  const handleSplashDone = useCallback(() => {
    go('mood', {}, 1);
  }, [go]);

  const handleMoodSelect = useCallback(
    (mood: MoodKey) => {
      if (mood === 'specific-craving') {
        go('craving', { mood, craving: null }, 1);
        return;
      }
      if (mood === 'surprise-me') {
        const recs = getRecommendations('surprise-me', null, null);
        go('recommendations', { mood, recommendations: recs }, 1);
        return;
      }
      if (mood === 'drinks-atmosphere') {
        const recs = getRecommendations('drinks-atmosphere', null, null);
        go('recommendations', { mood, recommendations: recs }, 1);
        return;
      }
      // proper-dinner and light-social → follow-up
      go('followup', { mood }, 1);
    },
    [go],
  );

  const handleCravingSelect = useCallback(
    (craving: CravingKey) => {
      const recs = getRecommendations('specific-craving', craving, null);
      go('recommendations', { craving, recommendations: recs }, 1);
    },
    [go],
  );

  const handleFollowupAnswer = useCallback(
    (answer: FollowupAnswer) => {
      const recs = getRecommendations(state.mood as MoodKey, null, answer);
      go('recommendations', { followupAnswer: answer, recommendations: recs }, 1);
    },
    [go, state.mood],
  );

  const handleVenueSelect = useCallback(
    (venue: Venue) => {
      go('venue', { selectedVenue: venue }, 1);
    },
    [go],
  );

  const handleReserve = useCallback(() => {
    go('reservation', {}, 1);
  }, [go]);

  const handleReservationSubmit = useCallback(() => {
    go('confirmation', {}, 1);
  }, [go]);

  const handleStartOver = useCallback(() => {
    setState({
      screen:          'mood',
      lang:            state.lang,
      mood:            null,
      craving:         null,
      followupAnswer:  null,
      recommendations: [],
      selectedVenue:   null,
      direction:       -1,
    });
  }, [state.lang]);

  const handleLangToggle = useCallback(() => {
    setState((prev) => ({ ...prev, lang: prev.lang === 'en' ? 'ar' : 'en' }));
  }, []);

  // ── Unique animation key ─────────────────────────────────────────
  // Venue screen: include venue id so switching venues triggers animation
  const animKey =
    state.screen === 'venue' || state.screen === 'reservation'
      ? `${state.screen}-${state.selectedVenue?.id ?? ''}`
      : state.screen;

  const animProps = getAnimProps(state.screen, state.direction, prefersReducedMotion);
  const showChrome = !CHROME_LESS.includes(state.screen);

  return (
    <main
      className="relative w-full overflow-hidden bg-rotana-deep"
      style={{ height: '100dvh' }}
    >
      {/* Language toggle */}
      {showChrome && (
        <div
          className="absolute top-0 right-0 z-50 p-4 rtl:right-auto rtl:left-0"
          style={{ paddingTop: 'max(1rem, env(safe-area-inset-top))' }}
        >
          <LanguageToggle
            lang={state.lang}
            onToggle={handleLangToggle}
            label={t.toggleLang}
          />
        </div>
      )}

      {/* Animated screen transitions */}
      <AnimatePresence mode="wait">
        <motion.div
          key={animKey}
          {...animProps}
          className="absolute inset-0 w-full"
          style={{ height: '100dvh' }}
        >
          {state.screen === 'splash' && (
            <Splash lang={state.lang} t={t} onDone={handleSplashDone} />
          )}

          {state.screen === 'mood' && (
            <MoodCards lang={state.lang} t={t} onSelect={handleMoodSelect} />
          )}

          {state.screen === 'craving' && (
            <CravingGrid
              lang={state.lang}
              t={t}
              onSelect={handleCravingSelect}
              onBack={() => goBack('mood')}
            />
          )}

          {state.screen === 'followup' && state.mood && (
            <FollowUp
              lang={state.lang}
              t={t}
              mood={state.mood}
              onAnswer={handleFollowupAnswer}
              onBack={() => goBack('mood')}
            />
          )}

          {state.screen === 'recommendations' && (
            <Recommendations
              lang={state.lang}
              t={t}
              venues={state.recommendations}
              onSelect={handleVenueSelect}
              onChangeMood={handleStartOver}
            />
          )}

          {state.screen === 'venue' && state.selectedVenue && (
            <VenueDetail
              lang={state.lang}
              t={t}
              venue={state.selectedVenue}
              otherVenues={state.recommendations.filter(
                (v) => v.id !== state.selectedVenue!.id,
              )}
              onReserve={handleReserve}
              onSelectOther={handleVenueSelect}
              onChangeMood={handleStartOver}
            />
          )}

          {state.screen === 'reservation' && state.selectedVenue && (
            <ReservationForm
              lang={state.lang}
              t={t}
              venue={state.selectedVenue}
              onSubmit={handleReservationSubmit}
              onBack={() => goBack('venue')}
            />
          )}

          {state.screen === 'confirmation' && (
            <Confirmation
              lang={state.lang}
              t={t}
              onStartOver={handleStartOver}
            />
          )}
        </motion.div>
      </AnimatePresence>
    </main>
  );
}
