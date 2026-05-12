/**
 * Cuisine-keyed gradient backgrounds for venue cards.
 *
 * Each gradient is tuned to the emotional palette of the cuisine/setting —
 * ocean depth for seafood, ember warmth for steakhouse, etc.
 *
 * These are used in place of venue photography because authentic Beach Rotana
 * outlet imagery is not available as a public asset in this codebase.
 * In production, replace with real venue photography from the property.
 */

const VENUE_GRADIENTS: Record<string, string> = {
  // Overwater seafood — deep Arabian Gulf teal
  'finz':
    'radial-gradient(ellipse 120% 80% at 30% 20%, #0A3A4A 0%, #062030 55%, #0B1C2C 100%)',

  // Italian, sea-view terrace — warm terracotta sunset
  'pregos':
    'radial-gradient(ellipse 120% 80% at 70% 80%, #2A1205 0%, #180A02 50%, #0B1C2C 100%)',

  // Polynesian bar — tropical dusk purple
  'trader-vics':
    'radial-gradient(ellipse 120% 80% at 65% 30%, #1E0A2E 0%, #130518 50%, #0B1C2C 100%)',

  // Steakhouse — charcoal ember
  'rodeo-grill':
    'radial-gradient(ellipse 120% 80% at 50% 75%, #2A0A02 0%, #1A0400 50%, #0B1C2C 100%)',

  // Bavarian beer hall — warm amber grain
  'brauhaus':
    'radial-gradient(ellipse 120% 80% at 40% 60%, #2A1500 0%, #180C00 50%, #0B1C2C 100%)',

  // Japanese teppanyaki — lacquer red
  'benihana':
    'radial-gradient(ellipse 120% 80% at 60% 35%, #2A0505 0%, #1A0202 50%, #0B1C2C 100%)',

  // Indian spice kitchen — saffron warmth
  'indigo':
    'radial-gradient(ellipse 120% 80% at 30% 70%, #2A1000 0%, #180800 50%, #0B1C2C 100%)',

  // Mediterranean beachside — sage garden
  'beach-garden':
    'radial-gradient(ellipse 120% 80% at 50% 25%, #0A2A12 0%, #051508 50%, #0B1C2C 100%)',

  // Shisha lounge, sea views — oud smoke purple
  'al-shorfa':
    'radial-gradient(ellipse 120% 80% at 70% 55%, #1C0A2E 0%, #0E0518 50%, #0B1C2C 100%)',

  // All-day international buffet — champagne neutral
  'essence':
    'radial-gradient(ellipse 120% 80% at 40% 40%, #1E1800 0%, #120F00 50%, #0B1C2C 100%)',

  // Lobby café & patisserie — espresso mocha
  'cafe-columbia':
    'radial-gradient(ellipse 120% 80% at 50% 65%, #1E0E05 0%, #120700 50%, #0B1C2C 100%)',

  // Beach & pool bar — tropical aqua
  'bay-view':
    'radial-gradient(ellipse 120% 80% at 35% 20%, #052A3E 0%, #021820 50%, #0B1C2C 100%)',
};

const DEFAULT_GRADIENT =
  'radial-gradient(ellipse 120% 80% at 50% 50%, #1A2F42 0%, #0B1C2C 100%)';

export function getVenueGradient(id: string): string {
  return VENUE_GRADIENTS[id] ?? DEFAULT_GRADIENT;
}
