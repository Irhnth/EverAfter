import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { LoveStoryItem } from '../types/wedding.ts';

interface LoveStoryTimelineProps {
  stories: LoveStoryItem[];
}

export function LoveStoryTimeline({ stories }: LoveStoryTimelineProps) {
  return (
    <section className="py-20 px-6 bg-ivory-200/50 relative overflow-hidden">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-cursive text-3xl text-gold-500 block mb-1">
            Our Journey
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-charcoal-900 font-medium tracking-wide">
            Kisah Cinta Kami
          </h2>
          <img
            src="/assets/gold-divider-flourish.png"
            alt=""
            aria-hidden="true"
            className="w-48 sm:w-60 h-auto object-contain mx-auto mt-4 opacity-75"
          />
        </div>

        {/* Timeline Items */}
        <div className="relative border-l-2 border-gold-500/30 ml-4 sm:ml-32 space-y-12 pb-4">
          {stories.map((item, index) => (
            <motion.div
              key={item.year + index}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="relative pl-8 sm:pl-10"
            >
              {/* Timeline Golden Node */}
              <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-ivory-100 border-2 border-gold-500 flex items-center justify-center shadow-sm">
                <Heart className="w-3.5 h-3.5 fill-gold-500 text-gold-500" />
              </div>

              {/* Year Badge on Desktop */}
              <div className="hidden sm:block absolute -left-32 top-2 w-24 text-right">
                <span className="font-serif text-xl font-bold text-gold-600">
                  {item.year}
                </span>
              </div>

              {/* Story Card */}
              <div className="glass-card rounded-2xl p-6 border border-gold-500/25 shadow-sm">
                <span className="sm:hidden inline-block px-3 py-0.5 rounded-full bg-gold-500/15 text-gold-600 font-sans text-xs font-bold mb-2">
                  {item.year}
                </span>
                <h3 className="font-serif text-xl font-semibold text-charcoal-900 mb-2">
                  {item.title}
                </h3>
                <p className="font-sans text-sm text-charcoal-muted leading-relaxed">
                  {item.story}
                </p>
                {item.photoUrl && (
                  <div className="mt-4 rounded-xl overflow-hidden aspect-[16/9] border border-gold-500/20">
                    <img
                      src={item.photoUrl}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
