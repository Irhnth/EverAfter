import { RsvpForm } from './RsvpForm.tsx';
import { WishesWall } from './WishesWall.tsx';

interface RsvpSectionProps {
  defaultGuestName?: string;
}

export function RsvpSection({ defaultGuestName }: RsvpSectionProps) {
  return (
    <section id="rsvp" className="py-20 pb-32 sm:pb-24 px-4 sm:px-6 bg-ivory-200/50 relative z-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="font-cursive text-3xl text-gold-500 block mb-1">
            RSVP &amp; Wishes
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-charcoal-900 font-medium tracking-wide">
            Konfirmasi Kehadiran &amp; Doa Restu
          </h2>
          <img
            src="/assets/gold-divider-flourish.png"
            alt=""
            aria-hidden="true"
            className="w-48 sm:w-60 h-auto object-contain mx-auto mt-4 opacity-75"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <RsvpForm defaultGuestName={defaultGuestName} />
          <div className="glass-card rounded-2xl p-6 border border-gold-500/30 shadow-md">
            <WishesWall />
          </div>
        </div>
      </div>
    </section>
  );
}
