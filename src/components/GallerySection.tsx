import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { GalleryPhoto } from '../types/wedding.ts';

interface GallerySectionProps {
  photos: GalleryPhoto[];
}

export function GallerySection({ photos }: GallerySectionProps) {
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);

  const handleNext = useCallback(() => {
    if (activePhotoIndex === null) return;
    setActivePhotoIndex((prev) => (prev! + 1) % photos.length);
  }, [activePhotoIndex, photos.length]);

  const handlePrev = useCallback(() => {
    if (activePhotoIndex === null) return;
    setActivePhotoIndex((prev) => (prev! - 1 + photos.length) % photos.length);
  }, [activePhotoIndex, photos.length]);

  const handleClose = useCallback(() => {
    setActivePhotoIndex(null);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activePhotoIndex === null) return;
      if (e.key === 'Escape') handleClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activePhotoIndex, handleClose, handleNext, handlePrev]);

  return (
    <section className="py-20 px-6 bg-ivory-100 relative">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-cursive text-3xl text-gold-500 block mb-1">
            Moments &amp; Memories
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-charcoal-900 font-medium tracking-wide">
            Galeri Prewedding
          </h2>
          <div className="w-12 h-0.5 bg-gold-400 mx-auto mt-4" />
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setActivePhotoIndex(index)}
              className="relative group cursor-pointer overflow-hidden rounded-2xl border border-gold-500/25 bg-ivory-200 aspect-[3/4] shadow-sm"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-charcoal-900/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-ivory-100/90 text-gold-600 flex items-center justify-center shadow-lg">
                  <ZoomIn className="w-5 h-5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activePhotoIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-charcoal-900/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={handleClose}
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              aria-label="Tutup foto"
              className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 text-white hover:bg-white/20 flex items-center justify-center transition-colors z-50"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Prev Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              aria-label="Foto sebelumnya"
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 text-white hover:bg-white/20 flex items-center justify-center transition-colors z-50"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              aria-label="Foto berikutnya"
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 text-white hover:bg-white/20 flex items-center justify-center transition-colors z-50"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Active Image Container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-3xl max-h-[85vh] flex flex-col items-center"
            >
              <img
                src={photos[activePhotoIndex].src}
                alt={photos[activePhotoIndex].alt}
                className="max-h-[75vh] w-auto rounded-xl object-contain shadow-2xl border border-white/20"
              />
              {photos[activePhotoIndex].caption && (
                <p className="mt-3 text-white/90 font-serif italic text-sm text-center">
                  &ldquo;{photos[activePhotoIndex].caption}&rdquo;
                </p>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
