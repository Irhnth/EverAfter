import { Calendar, MapPin, MessageSquareText, Heart } from 'lucide-react';

interface QuickAccessHUDProps {
  onScrollTo: (sectionId: string) => void;
  activeSection?: string;
}

export function QuickAccessHUD({ onScrollTo, activeSection }: QuickAccessHUDProps) {
  const navItems = [
    { id: 'couple', label: 'Mempelai', icon: Heart },
    { id: 'events', label: 'Acara', icon: Calendar },
    { id: 'location', label: 'Lokasi', icon: MapPin },
    { id: 'rsvp', label: 'RSVP', icon: MessageSquareText },
  ];

  return (
    <nav
      aria-label="Navigasi Cepat"
      className="fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-40 w-max max-w-[96vw] select-none pointer-events-auto"
    >
      <div className="bg-ivory-50/95 backdrop-blur-md rounded-full px-2 sm:px-3.5 py-1.5 flex items-center gap-1 sm:gap-2 shadow-xl border border-gold-500/35">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onScrollTo(item.id)}
              className={`flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-sans font-medium transition-all shrink-0 cursor-pointer ${
                isActive
                  ? 'bg-gold-500 text-white shadow-sm'
                  : 'text-charcoal-800 hover:text-gold-600 hover:bg-gold-500/10 active:scale-95'
              }`}
            >
              <Icon className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
              <span className="whitespace-nowrap">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}

export default QuickAccessHUD;
