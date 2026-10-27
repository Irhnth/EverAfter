import { motion } from 'framer-motion';
import { MapPin, Calendar, Clock } from 'lucide-react';
import { EventSchedule } from '../types/wedding.ts';
import { useCountdown } from '../hooks/useCountdown.ts';
import { createGoogleCalendarUrl } from '../utils/calendarHelper.ts';

interface EventScheduleSectionProps {
  events: EventSchedule[];
  targetDate: string;
}

export function EventScheduleSection({ events, targetDate }: EventScheduleSectionProps) {
  const { days, hours, minutes, seconds, isEnded } = useCountdown(targetDate);

  const countdownUnits = [
    { label: 'Hari', value: days },
    { label: 'Jam', value: hours },
    { label: 'Menit', value: minutes },
    { label: 'Detik', value: seconds },
  ];

  return (
    <section id="events" className="py-20 px-6 bg-ivory-100 relative">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="font-cursive text-3xl text-gold-500 block mb-1">
            Save The Date
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-charcoal-900 font-medium tracking-wide">
            Waktu &amp; Tempat Acara
          </h2>
          <img
            src="/assets/gold-divider-leaves.png"
            alt=""
            aria-hidden="true"
            className="w-48 sm:w-60 h-auto object-contain mx-auto mt-4 opacity-75"
          />
        </div>

        {/* Live Countdown Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-md mx-auto mb-16 glass-card rounded-2xl p-6 border border-gold-500/30 text-center shadow-sm"
        >
          <p className="font-sans text-xs uppercase tracking-widest text-charcoal-muted mb-4 font-semibold">
            {isEnded ? 'Acara Telah Berlangsung' : 'Menghitung Hari Menuju Sakinah'}
          </p>
          <div className="grid grid-cols-4 gap-2 sm:gap-3">
            {countdownUnits.map((unit) => (
              <div
                key={unit.label}
                className="bg-ivory-100/90 rounded-xl p-3 border border-gold-500/20 flex flex-col items-center justify-center shadow-inner"
              >
                <span className="font-serif text-2xl sm:text-3xl font-semibold text-gold-600">
                  {String(unit.value).padStart(2, '0')}
                </span>
                <span className="font-sans text-[10px] sm:text-xs uppercase tracking-wider text-charcoal-muted mt-1">
                  {unit.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Event Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map((event, index) => {
            const calUrl = createGoogleCalendarUrl(
              event.title,
              `Pernikahan Romeo & Juliet - ${event.title}`,
              `${event.venueName}, ${event.venueAddress}`,
              event.startTime,
              event.endTime,
            );

            return (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                className="glass-card rounded-2xl p-6 sm:p-8 border border-gold-500/30 shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="text-center pb-6 border-b border-gold-500/20">
                    <h3 className="font-serif text-2xl font-semibold text-charcoal-900">
                      {event.title}
                    </h3>
                    {event.subtitle && (
                      <p className="font-cursive text-xl text-gold-600 mt-0.5">
                        {event.subtitle}
                      </p>
                    )}
                  </div>

                  <div className="space-y-4 py-6 text-sm text-charcoal-800">
                    <div className="flex items-start gap-3">
                      <Calendar className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                      <div>
                        <strong className="block font-medium">{event.dateFormatted}</strong>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Clock className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                      <div>
                        <span className="block">{event.timeFormatted}</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                      <div>
                        <strong className="block font-medium text-charcoal-900">{event.venueName}</strong>
                        <p className="text-xs text-charcoal-muted mt-0.5 leading-relaxed">{event.venueAddress}</p>
                      </div>
                    </div>

                    {event.dressCode && (
                      <div className="mt-4 pt-4 border-t border-gold-500/15">
                        <span className="font-sans text-xs uppercase tracking-wider text-charcoal-muted font-medium block mb-1">
                          Dress Code:
                        </span>
                        <span className="inline-block px-3 py-1 rounded-full bg-sage-100 text-sage-700 text-xs font-medium">
                          {event.dressCode}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="pt-4 border-t border-gold-500/20 flex flex-col sm:flex-row gap-3">
                  <a
                    href={event.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 px-4 rounded-xl bg-gold-500 text-white font-sans text-xs font-medium tracking-wide flex items-center justify-center gap-2 hover:bg-gold-600 transition-colors shadow-sm"
                  >
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Petunjuk Maps</span>
                  </a>
                  <a
                    href={calUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-4 rounded-xl border border-gold-500/40 text-charcoal-800 font-sans text-xs font-medium tracking-wide flex items-center justify-center gap-1.5 hover:bg-gold-500/10 transition-colors"
                  >
                    <Calendar className="w-3.5 h-3.5 text-gold-500" />
                    <span>+ Kalender</span>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
