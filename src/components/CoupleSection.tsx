import { motion } from 'framer-motion';
import { PersonProfile } from '../types/wedding.ts';

function InstagramIcon({ className = 'w-3.5 h-3.5' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

interface CoupleSectionProps {
  groom: PersonProfile;
  bride: PersonProfile;
}

export function CoupleSection({ groom, bride }: CoupleSectionProps) {
  return (
    <section id="couple" className="py-20 px-6 bg-ivory-200/60 relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="font-cursive text-3xl text-gold-500 block mb-1">
            Groom &amp; Bride
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-charcoal-900 font-medium tracking-wide">
            Kedua Mempelai
          </h2>
          <img
            src="/assets/gold-divider-flourish.png"
            alt=""
            aria-hidden="true"
            className="w-48 sm:w-60 h-auto object-contain mx-auto mt-4 opacity-75"
          />
        </div>

        {/* Couple Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Groom Profile */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center text-center"
          >
            {/* Arch Photo Frame */}
            <div className="relative w-56 h-72 sm:w-64 sm:h-80 rounded-t-full overflow-hidden border-2 border-gold-500/40 shadow-md p-1.5 bg-ivory-100 mb-6 group">
              <div className="w-full h-full rounded-t-full overflow-hidden">
                <img
                  src={groom.photoUrl}
                  alt={groom.fullName}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
            </div>

            <h3 className="font-serif text-2xl font-semibold text-charcoal-900">
              {groom.fullName}
            </h3>
            <p className="font-cursive text-2xl text-gold-600 mt-1">
              - {groom.shortName} -
            </p>
            <p className="font-sans text-xs text-charcoal-muted mt-3 max-w-xs leading-relaxed">
              Putra tercinta dari:
              <br />
              <strong className="text-charcoal-800 font-medium">
                {groom.fatherName} &amp; {groom.motherName}
              </strong>
            </p>

            {groom.instagram && (
              <a
                href={`https://instagram.com/${groom.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 mt-4 px-4 py-1.5 rounded-full border border-gold-500/30 text-xs font-sans text-charcoal-800 hover:text-gold-600 hover:border-gold-500 transition-colors"
              >
                <InstagramIcon className="w-3.5 h-3.5 text-gold-500" />
                <span>@{groom.instagram}</span>
              </a>
            )}
          </motion.div>

          {/* Bride Profile */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center text-center"
          >
            {/* Arch Photo Frame */}
            <div className="relative w-56 h-72 sm:w-64 sm:h-80 rounded-t-full overflow-hidden border-2 border-gold-500/40 shadow-md p-1.5 bg-ivory-100 mb-6 group">
              <div className="w-full h-full rounded-t-full overflow-hidden">
                <img
                  src={bride.photoUrl}
                  alt={bride.fullName}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
            </div>

            <h3 className="font-serif text-2xl font-semibold text-charcoal-900">
              {bride.fullName}
            </h3>
            <p className="font-cursive text-2xl text-gold-600 mt-1">
              - {bride.shortName} -
            </p>
            <p className="font-sans text-xs text-charcoal-muted mt-3 max-w-xs leading-relaxed">
              Putri tercinta dari:
              <br />
              <strong className="text-charcoal-800 font-medium">
                {bride.fatherName} &amp; {bride.motherName}
              </strong>
            </p>

            {bride.instagram && (
              <a
                href={`https://instagram.com/${bride.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 mt-4 px-4 py-1.5 rounded-full border border-gold-500/30 text-xs font-sans text-charcoal-800 hover:text-gold-600 hover:border-gold-500 transition-colors"
              >
                <InstagramIcon className="w-3.5 h-3.5 text-gold-500" />
                <span>@{bride.instagram}</span>
              </a>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
