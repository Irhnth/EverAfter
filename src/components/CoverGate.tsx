import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MailOpen } from 'lucide-react';

interface CoverGateProps {
  isOpen: boolean;
  onOpen: () => void;
  guestName: string;
  groomName: string;
  brideName: string;
  dateFormatted: string;
}

export function CoverGate({
  isOpen,
  onOpen,
  guestName,
  groomName,
  brideName,
  dateFormatted,
}: CoverGateProps) {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpenClick = () => {
    if (isOpening) return;
    setIsOpening(true);
    // Delay onOpen to let the 3D envelope flap unfold and the invitation card slide out
    setTimeout(() => {
      onOpen();
    }, 850);
  };

  return (
    <AnimatePresence>
      {!isOpen && (
        <motion.div
          key="cover-gate"
          initial={{ y: 0, opacity: 1 }}
          exit={{
            y: '-100%',
            opacity: 0.9,
            transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
          }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-between bg-ivory-100 text-charcoal-900 p-4 sm:p-8 md:p-12 overflow-y-auto select-none"
        >
          {/* Subtle Background Texture & Border Accent */}
          <div className="absolute inset-3 sm:inset-6 md:inset-8 border border-gold-500/30 rounded-3xl pointer-events-none" />
          <div className="absolute inset-4 sm:inset-7 md:inset-9 border border-gold-500/15 rounded-2xl pointer-events-none" />

          {/* Decorative Corner Floral Accent - Organic Luxury Arc */}
          <motion.img
            src="/assets/floral-corner-luxury.png"
            alt=""
            aria-hidden="true"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 0.9, scale: 1 }}
            transition={{ duration: 1 }}
            className="absolute -top-2 -left-2 w-36 sm:w-48 md:w-60 pointer-events-none drop-shadow-sm select-none"
          />
          <motion.img
            src="/assets/floral-corner-bottom-right.png"
            alt=""
            aria-hidden="true"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 0.9, scale: 1 }}
            transition={{ duration: 1 }}
            className="absolute -bottom-2 -right-2 w-36 sm:w-48 md:w-60 pointer-events-none drop-shadow-sm select-none"
          />

          {/* Top Monogram Laurel Wreath */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="text-center pt-4 sm:pt-6 z-10 flex flex-col items-center"
          >
            <img
              src="/assets/monogram-wreath.png"
              alt="Monogram Romeo & Juliet"
              className="w-14 h-14 sm:w-16 sm:h-16 object-contain drop-shadow-sm mb-1.5"
            />
            <p className="font-sans text-[10px] sm:text-xs tracking-widest text-charcoal-muted uppercase">
              The Wedding Celebration of
            </p>
          </motion.div>

          {/* 3D Realistic Envelope Presentation Area */}
          <div className="relative my-auto py-3 z-10 flex flex-col items-center max-w-sm sm:max-w-md w-full">
            {/* The 3D Envelope Container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="relative w-full aspect-[4/3] max-w-[340px] sm:max-w-[400px] flex items-center justify-center cursor-pointer group"
              onClick={handleOpenClick}
            >
              {/* Closed Envelope */}
              <motion.img
                src="/assets/envelope/envelope-closed.png"
                alt="Amplop Pernikahan Mewah"
                animate={{
                  opacity: isOpening ? 0 : 1,
                  scale: isOpening ? 0.95 : 1,
                }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 w-full h-full object-contain drop-shadow-2xl"
              />

              {/* Open Envelope */}
              <motion.img
                src="/assets/envelope/envelope-open.png"
                alt="Amplop Terbuka"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: isOpening ? 1 : 0,
                  scale: isOpening ? 1.02 : 0.95,
                }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="absolute inset-0 w-full h-full object-contain drop-shadow-2xl"
              />

              {/* Gold Wax Seal on Closed Flap - centered perfectly at V-flap tip */}
              <div className="absolute top-[68%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
                <motion.div
                  animate={{
                    opacity: isOpening ? 0 : 1,
                    scale: isOpening ? 1.4 : 1,
                    rotate: isOpening ? 15 : 0,
                  }}
                  transition={{ duration: 0.35 }}
                  className="relative flex items-center justify-center"
                >
                  <img
                    src="/assets/wax-seal-gold.png"
                    alt="Segel Lilin Emas"
                    className="w-16 h-16 sm:w-20 sm:h-20 object-contain drop-shadow-lg group-hover:scale-105 transition-transform"
                  />
                  <span className="absolute -inset-1 rounded-full border-2 border-gold-400/40 animate-ping pointer-events-none" />
                </motion.div>
              </div>

              {/* Sliding Letter Card upon opening */}
              <motion.div
                initial={{ y: 0, opacity: 0 }}
                animate={{
                  y: isOpening ? -65 : 0,
                  opacity: isOpening ? 1 : 0,
                }}
                transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
                className="absolute top-[32%] w-[82%] p-4 bg-ivory-100 rounded-lg border border-gold-500/40 shadow-xl text-center z-10 pointer-events-none"
              >
                <p className="font-serif text-lg sm:text-xl font-semibold text-charcoal-900 leading-tight">
                  {groomName} &amp; {brideName}
                </p>
                <p className="font-sans text-[10px] tracking-widest text-gold-600 uppercase mt-1">
                  {dateFormatted}
                </p>
              </motion.div>
            </motion.div>

            {/* Couple Names Headline below envelope */}
            <motion.div
              animate={{ opacity: isOpening ? 0.4 : 1 }}
              transition={{ duration: 0.3 }}
              className="text-center mt-2"
            >
              <h1 className="font-serif text-2xl sm:text-3xl font-medium text-charcoal-900 tracking-wide">
                {groomName} <span className="font-cursive text-gold-600 text-xl">&amp;</span> {brideName}
              </h1>
              <p className="font-sans text-xs tracking-widest text-gold-600 uppercase mt-1 font-medium">
                {dateFormatted}
              </p>
            </motion.div>
          </div>

          {/* Bottom Guest Box & Wax Seal Open Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.7 }}
            className="w-full max-w-sm text-center pb-4 z-10 flex flex-col items-center"
          >
            <div className="glass-card rounded-2xl p-3.5 mb-3 border border-gold-500/30 shadow-sm w-full">
              <span className="font-sans text-[10px] uppercase tracking-widest text-charcoal-muted block mb-0.5">
                Kepada Yth. Bapak/Ibu/Saudara/i:
              </span>
              <h2 className="font-serif text-lg sm:text-xl font-medium text-charcoal-900">
                {guestName}
              </h2>
            </div>

            {/* Interactive Open Button */}
            <motion.button
              onClick={handleOpenClick}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              disabled={isOpening}
              aria-label="Buka Undangan"
              className="w-full py-3 px-6 rounded-full bg-gradient-to-r from-gold-500 to-gold-600 text-white font-sans text-xs tracking-wider uppercase font-semibold shadow-md shadow-gold-500/25 flex items-center justify-center gap-2 hover:brightness-105 transition-all group cursor-pointer"
            >
              <MailOpen className="w-3.5 h-3.5 transition-transform group-hover:scale-110" />
              <span>{isOpening ? 'Membuka Surat...' : 'Buka Undangan'}</span>
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default CoverGate;
