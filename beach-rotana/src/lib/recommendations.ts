import { VENUES, Venue, MoodKey, CravingKey } from '@/data/venues';

export type FollowupAnswer = 'relaxed' | 'elevated' | 'indoor' | 'outdoor' | null;

const CRAVING_MAP: Record<CravingKey, string[]> = {
  burgers:           ['brauhaus', 'bay-view'],
  pasta:             ['pregos'],
  sushi:             ['benihana'],
  steak:             ['rodeo-grill'],
  seafood:           ['finz'],
  pizza:             ['pregos'],
  indian:            ['indigo'],
  'coffee-pastries': ['cafe-columbia'],
  cocktails:         ['al-shorfa', 'bay-view'],
  shisha:            ['al-shorfa'],
  dessert:           ['cafe-columbia', 'essence'],
  lighter:           ['cafe-columbia', 'bay-view', 'beach-garden'],
};

const MOOD_MAP: Record<Exclude<MoodKey, 'specific-craving' | 'surprise-me'>, string[]> = {
  'light-social':      ['cafe-columbia', 'bay-view', 'brauhaus', 'beach-garden', 'essence', 'pregos'],
  'proper-dinner':     ['finz', 'pregos', 'rodeo-grill', 'benihana', 'indigo', 'essence'],
  'drinks-atmosphere': ['trader-vics', 'al-shorfa', 'brauhaus', 'bay-view'],
};

// Venues only appropriate after 18:00
const DINNER_ONLY = new Set(['finz', 'trader-vics', 'beach-garden']);
// Venues only open until ~17:00
const LUNCH_ONLY = new Set(['bay-view']);

function getHour(): number {
  return new Date().getHours();
}

function filterByTime(ids: string[]): string[] {
  const hour = getHour();
  const filtered = ids.filter((id) => {
    if (DINNER_ONLY.has(id) && hour < 17) return false;
    if (LUNCH_ONLY.has(id) && hour >= 17) return false;
    return true;
  });
  // Graceful fallback: never return an empty list
  return filtered.length > 0 ? filtered : ids;
}

function resolveIds(ids: string[]): Venue[] {
  return ids
    .map((id) => VENUES.find((v) => v.id === id))
    .filter((v): v is Venue => v !== undefined);
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function getRecommendations(
  mood: MoodKey,
  craving: CravingKey | null,
  followup: FollowupAnswer,
): Venue[] {
  // ── Surprise me ──────────────────────────────────────────────────
  if (mood === 'surprise-me') {
    const allIds = filterByTime(VENUES.map((v) => v.id));
    return resolveIds(shuffle(allIds)).slice(0, 3);
  }

  // ── Specific craving ─────────────────────────────────────────────
  if (mood === 'specific-craving' && craving) {
    const ids = filterByTime(CRAVING_MAP[craving] ?? []);
    return resolveIds(ids).slice(0, 3);
  }

  // ── Mood-based ───────────────────────────────────────────────────
  let ids: string[] = MOOD_MAP[mood as Exclude<MoodKey, 'specific-craving' | 'surprise-me'>] ?? [];

  // Follow-up refinement: promote relevant venues to front
  if (followup === 'elevated') {
    const preferred = ['finz', 'rodeo-grill'];
    ids = [...preferred, ...ids.filter((id) => !preferred.includes(id))];
  } else if (followup === 'relaxed') {
    const preferred = ['pregos', 'benihana'];
    ids = [...preferred, ...ids.filter((id) => !preferred.includes(id))];
  } else if (followup === 'outdoor') {
    const preferred = ['beach-garden', 'bay-view', 'al-shorfa'];
    ids = [...preferred, ...ids.filter((id) => !preferred.includes(id))];
  } else if (followup === 'indoor') {
    const preferred = ['cafe-columbia', 'essence', 'brauhaus'];
    ids = [...preferred, ...ids.filter((id) => !preferred.includes(id))];
  }

  ids = filterByTime(ids);
  return resolveIds(ids).slice(0, 3);
}
