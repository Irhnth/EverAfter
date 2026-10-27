import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

interface HeroSectionProps {
  groomName: string;
  brideName: string;
  weddingDateFormatted: string;
  quoteText: string;
  quoteSource: string;
}

export function HeroSection({
  groomName,
  brideName,
  weddingDateFormatted,
  quoteText,
  quoteSource,
}: HeroSectionProps) {
  return (
    <section className="relative min-h-[85vh] flex flex-col items-center justify-center text-center px-6 py-20 bg-ivory-100 overflow-hidden">
      {/* Decorative Ornaments & Corner Roses */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-40 h-40 bg-gold-400/10 rounded-full blur-3xl pointer-events-none" />
      <img
        src="/assets/floral-corner-luxury.png"
        alt=""
        aria-hidden="true"
        className="absolute -top-4 -right-4 w-40 sm:w-56 opacity-60 scale-x-[-1] pointer-events-none select-none drop-shadow-sm"
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-xl mx-auto z-10 flex flex-col items-center"
      >
        <span className="font-cursive text-3xl sm:text-4xl text-gold-500 block mb-2">
          Walimatul &apos;Urs
        </span>
        <h2 className="font-sans text-xs tracking-widest uppercase text-charcoal-muted mb-6">
          The Wedding of
        </h2>

        <h1 className="font-serif text-4xl sm:text-6xl text-charcoal-900 font-semibold tracking-wide leading-tight">
          {groomName} <span className="font-cursive text-gold-500 font-normal">&amp;</span> {brideName}
        </h1>

        <div className="inline-flex items-center gap-3 my-6 px-6 py-2 rounded-full border border-gold-500/30 bg-ivory-200/50 backdrop-blur-sm">
          <Heart className="w-3.5 h-3.5 text-gold-500 fill-gold-400" />
          <span className="font-sans text-xs sm:text-sm tracking-wider uppercase text-charcoal-800 font-medium">
            {weddingDateFormatted}
          </span>
          <Heart className="w-3.5 h-3.5 text-gold-500 fill-gold-400" />
        </div>

        {/* Gold Filigree Divider */}
        <img
          src="/assets/gold-divider-flourish.png"
          alt=""
          aria-hidden="true"
          className="w-48 sm:w-60 h-auto object-contain my-4 opacity-75"
        />

        {/* Holy Quote */}
        <blockquote className="mt-4 px-4 sm:px-8 text-charcoal-700 italic font-serif text-sm sm:text-base leading-relaxed">
          &ldquo;{quoteText}&rdquo;
          <footer className="mt-3 font-sans text-xs font-semibold not-italic tracking-wider uppercase text-gold-600">
            — {quoteSource}
          </footer>
        </blockquote>
      </motion.div>
    </section>
  );
}
