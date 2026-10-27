import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Send, CheckCircle2, UserCheck, UserX, Loader2 } from 'lucide-react';
import { submitRsvp } from '../services/rsvpService.ts';

interface RsvpFormProps {
  defaultGuestName?: string;
  onSuccess?: () => void;
}

export function RsvpForm({ defaultGuestName = '', onSuccess }: RsvpFormProps) {
  const [guestName, setGuestName] = useState(defaultGuestName);
  const [attendance, setAttendance] = useState<'hadir' | 'berhalangan'>('hadir');
  const [guestCount, setGuestCount] = useState<number>(2);
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName.trim()) return;

    setIsSubmitting(true);
    try {
      await submitRsvp({
        guestName: guestName.trim(),
        attendance,
        guestCount: attendance === 'hadir' ? guestCount : 0,
        message: message.trim(),
      });

      setIsSuccess(true);

      // Trigger celebration confetti
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.7 },
        colors: ['#C5A880', '#D4AF37', '#FDFBF7', '#7D8D76', '#E8C2BA'],
      });

      setMessage('');
      if (onSuccess) onSuccess();
    } catch {
      // Error handled gracefully
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="glass-card rounded-2xl p-6 sm:p-8 border border-gold-500/30 shadow-md">
      {isSuccess ? (
        <div className="text-center py-8 space-y-3">
          <div className="w-14 h-14 mx-auto rounded-full bg-sage-100 text-sage-500 flex items-center justify-center">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="font-serif text-2xl font-semibold text-charcoal-900">
            Terima Kasih!
          </h3>
          <p className="font-sans text-sm text-charcoal-muted max-w-sm mx-auto">
            Konfirmasi kehadiran dan untaian doa restu Anda telah berhasil kami terima.
          </p>
          <button
            onClick={() => setIsSuccess(false)}
            className="mt-4 px-5 py-2 rounded-full border border-gold-500/40 text-xs font-sans text-charcoal-800 hover:bg-gold-500/10 transition-colors"
          >
            Kirim Ucapan Lain
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Guest Name */}
          <div>
            <label htmlFor="rsvp-name" className="block font-sans text-xs uppercase tracking-wider text-charcoal-800 font-medium mb-1.5">
              Nama Lengkap <span className="text-rose-500">*</span>
            </label>
            <input
              id="rsvp-name"
              type="text"
              required
              value={guestName}
              onChange={(e) => setGuestName(e.target.value)}
              placeholder="Contoh: Bpk. Budi Santoso & Partner"
              className="w-full px-4 py-2.5 rounded-xl border border-gold-500/30 bg-ivory-100/90 text-charcoal-900 text-sm focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500"
            />
          </div>

          {/* Attendance Radio Pills */}
          <div>
            <span className="block font-sans text-xs uppercase tracking-wider text-charcoal-800 font-medium mb-2">
              Konfirmasi Kehadiran <span className="text-rose-500">*</span>
            </span>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setAttendance('hadir')}
                className={`py-2.5 px-4 rounded-xl text-xs font-sans font-medium flex items-center justify-center gap-2 border transition-all ${
                  attendance === 'hadir'
                    ? 'bg-sage-500 text-white border-sage-500 shadow-sm'
                    : 'bg-ivory-100/60 border-gold-500/25 text-charcoal-700 hover:border-gold-500'
                }`}
              >
                <UserCheck className="w-4 h-4" />
                <span>Pasti Hadir</span>
              </button>

              <button
                type="button"
                onClick={() => setAttendance('berhalangan')}
                className={`py-2.5 px-4 rounded-xl text-xs font-sans font-medium flex items-center justify-center gap-2 border transition-all ${
                  attendance === 'berhalangan'
                    ? 'bg-blush-500 text-charcoal-900 border-blush-500 font-semibold shadow-sm'
                    : 'bg-ivory-100/60 border-gold-500/25 text-charcoal-700 hover:border-gold-500'
                }`}
              >
                <UserX className="w-4 h-4" />
                <span>Berhalangan</span>
              </button>
            </div>
          </div>

          {/* Guest Count (only if attending) */}
          {attendance === 'hadir' && (
            <div>
              <label htmlFor="rsvp-count" className="block font-sans text-xs uppercase tracking-wider text-charcoal-800 font-medium mb-1.5">
                Jumlah Tamu
              </label>
              <select
                id="rsvp-count"
                value={guestCount}
                onChange={(e) => setGuestCount(Number(e.target.value))}
                className="w-full px-4 py-2.5 rounded-xl border border-gold-500/30 bg-ivory-100/90 text-charcoal-900 text-sm focus:outline-none focus:border-gold-500"
              >
                <option value={1}>1 Orang</option>
                <option value={2}>2 Orang</option>
                <option value={3}>3 Orang</option>
                <option value={4}>4 Orang</option>
              </select>
            </div>
          )}

          {/* Message / Wishes */}
          <div>
            <label htmlFor="rsvp-message" className="block font-sans text-xs uppercase tracking-wider text-charcoal-800 font-medium mb-1.5">
              Pesan Doa &amp; Ucapan
            </label>
            <textarea
              id="rsvp-message"
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tuliskan ucapan dan doa restu untuk kedua mempelai..."
              className="w-full px-4 py-2.5 rounded-xl border border-gold-500/30 bg-ivory-100/90 text-charcoal-900 text-sm focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 resize-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting || !guestName.trim()}
            className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-gold-500 to-gold-600 text-white font-sans text-sm font-medium tracking-wide shadow-md shadow-gold-500/20 flex items-center justify-center gap-2 hover:brightness-105 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Mengirim Konfirmasi...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Kirim Doa Restu &amp; Konfirmasi</span>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
