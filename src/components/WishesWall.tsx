import { useEffect, useState } from 'react';
import { MessageSquare, Heart } from 'lucide-react';
import { RsvpEntry } from '../types/wedding.ts';
import { subscribeToWishes } from '../services/rsvpService.ts';

function formatRelativeTime(isoString: string): string {
  try {
    const diffSeconds = Math.floor((Date.now() - new Date(isoString).getTime()) / 1000);
    if (diffSeconds < 60) return 'Baru saja';
    const diffMinutes = Math.floor(diffSeconds / 60);
    if (diffMinutes < 60) return `${diffMinutes} menit lalu`;
    const diffHours = Math.floor(diffMinutes / 60);
    if (diffHours < 24) return `${diffHours} jam lalu`;
    const diffDays = Math.floor(diffHours / 24);
    return `${diffDays} hari lalu`;
  } catch {
    return 'Baru saja';
  }
}

export function WishesWall() {
  const [wishes, setWishes] = useState<RsvpEntry[]>([]);

  useEffect(() => {
    const unsubscribe = subscribeToWishes((updatedWishes) => {
      setWishes(updatedWishes);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-gold-500/20">
        <div className="flex items-center gap-2 text-charcoal-900 font-serif font-semibold text-lg">
          <MessageSquare className="w-4 h-4 text-gold-500" />
          <span>Untaian Doa &amp; Harapan ({wishes.length})</span>
        </div>
        <span className="text-[11px] font-sans text-sage-600 bg-sage-100 px-2.5 py-0.5 rounded-full font-medium">
          Live Updates
        </span>
      </div>

      <div className="max-h-96 overflow-y-auto space-y-3 pr-1">
        {wishes.map((item) => (
          <div
            key={item.id}
            className="p-4 rounded-xl bg-ivory-100/90 border border-gold-500/20 shadow-sm"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-gold-500/15 text-gold-600 font-serif font-bold text-sm flex items-center justify-center shrink-0">
                  {item.guestName.charAt(0).toUpperCase()}
                </div>
                <div>
                  <h4 className="font-serif font-semibold text-sm text-charcoal-900 leading-tight">
                    {item.guestName}
                  </h4>
                  <span className="font-sans text-[10px] text-charcoal-muted">
                    {formatRelativeTime(item.createdAt)}
                  </span>
                </div>
              </div>

              <span
                className={`text-[10px] font-sans px-2.5 py-0.5 rounded-full font-medium ${
                  item.attendance === 'hadir'
                    ? 'bg-sage-100 text-sage-700'
                    : 'bg-blush-300 text-charcoal-800'
                }`}
              >
                {item.attendance === 'hadir' ? 'Hadir' : 'Berhalangan'}
              </span>
            </div>

            {item.message ? (
              <p className="font-sans text-xs text-charcoal-700 leading-relaxed pl-10">
                &ldquo;{item.message}&rdquo;
              </p>
            ) : (
              <p className="font-sans text-[11px] text-charcoal-muted italic pl-10 flex items-center gap-1">
                <Heart className="w-3 h-3 text-gold-500 inline" /> Mengirimkan doa restu.
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
