import { Disc3, VolumeX } from 'lucide-react';

interface FloatingAudioPlayerProps {
  isPlaying: boolean;
  onToggle: () => void;
  title?: string;
}

export function FloatingAudioPlayer({
  isPlaying,
  onToggle,
  title = 'Musik Latar',
}: FloatingAudioPlayerProps) {
  return (
    <div className="fixed top-5 right-5 z-40">
      <button
        onClick={onToggle}
        aria-label={isPlaying ? 'Hentikan musik' : 'Putar musik'}
        title={title}
        className="w-11 h-11 rounded-full glass-card flex items-center justify-center text-gold-500 shadow-md border border-gold-500/40 hover:scale-105 active:scale-95 transition-all group"
      >
        {isPlaying ? (
          <Disc3 className="w-5 h-5 animate-spin-slow text-gold-500" />
        ) : (
          <VolumeX className="w-5 h-5 text-charcoal-muted" />
        )}
      </button>
    </div>
  );
}
