import Link from 'next/link';

export default function NotFound() {
  return (
    <main
      className="flex flex-col items-center justify-center bg-rotana-deep px-8"
      style={{ minHeight: '100dvh' }}
    >
      {/* Warm glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 40% at 50% 80%, rgba(196,150,90,0.08) 0%, transparent 65%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 flex flex-col items-center text-center max-w-sm">
        {/* Brand line */}
        <p className="font-inter text-[10px] font-medium tracking-[0.42em] uppercase text-rotana-gold mb-8">
          Beach Rotana · Abu Dhabi
        </p>

        {/* Gold rule */}
        <div className="w-10 h-px bg-rotana-gold mb-8" />

        {/* Headline */}
        <h1 className="font-playfair text-5xl text-rotana-sand mb-4">
          404
        </h1>
        <p className="font-playfair text-xl text-rotana-sand/70 mb-2">
          Page not found
        </p>
        <p className="font-inter text-sm text-rotana-muted leading-relaxed mb-10">
          The page you are looking for does not exist. Let us get you back to finding your perfect dining experience.
        </p>

        {/* CTA */}
        <Link
          href="/"
          className="
            bg-rotana-gold hover:bg-rotana-gold-light
            text-rotana-deep font-inter font-semibold text-[15px]
            rounded-xl px-8 py-4
            transition-colors duration-150
          "
        >
          Discover dining
        </Link>
      </div>

      {/* Powered by */}
      <p className="absolute bottom-0 pb-6 font-inter text-[9px] tracking-widest text-rotana-muted/40 uppercase">
        Taste by Beach Rotana
      </p>
    </main>
  );
}
