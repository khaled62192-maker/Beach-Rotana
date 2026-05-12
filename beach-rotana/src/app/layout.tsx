import type { Metadata, Viewport } from 'next';
import { Playfair_Display, Inter, Cairo } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
});

const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cairo',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'TASTE by Beach Rotana',
  description: 'Discover Beach Rotana Abu Dhabi dining experiences, your way.',
  robots: { index: false, follow: false },
  openGraph: {
    title: 'TASTE by Beach Rotana',
    description: 'Discover Beach Rotana Abu Dhabi dining experiences, your way.',
    type: 'website',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#0B1C2C',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`
          ${playfair.variable}
          ${inter.variable}
          ${cairo.variable}
          font-inter
          bg-rotana-deep
          text-rotana-sand
          antialiased
        `}
      >
        {children}
      </body>
    </html>
  );
}
