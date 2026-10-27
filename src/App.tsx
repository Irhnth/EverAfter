import { useState, useMemo, useEffect } from 'react';
import { weddingData } from './data/weddingData.ts';
import { getGuestNameFromUrl } from './utils/urlHelper.ts';
import { useAudioPlayer } from './hooks/useAudioPlayer.ts';
import { CoverGate } from './components/CoverGate.tsx';
import { FloatingAudioPlayer } from './components/FloatingAudioPlayer.tsx';
import { QuickAccessHUD } from './components/QuickAccessHUD.tsx';
import { FallingPetals } from './components/FallingPetals.tsx';
import { HeroSection } from './components/HeroSection.tsx';
import { CoupleSection } from './components/CoupleSection.tsx';
import { EventScheduleSection } from './components/EventScheduleSection.tsx';
import { LoveStoryTimeline } from './components/LoveStoryTimeline.tsx';
import { GallerySection } from './components/GallerySection.tsx';
import { RsvpSection } from './components/RsvpSection.tsx';
import { DigitalGiftSection } from './components/DigitalGiftSection.tsx';
import { Heart } from 'lucide-react';

export function App() {
  const [isCoverOpen, setIsCoverOpen] = useState(false);
  const guestName = useMemo(() => getGuestNameFromUrl(), []);
  const audio = useAudioPlayer(weddingData.audio.src);

  useEffect(() => {
    if (guestName && guestName !== 'Tamu Undangan') {
      document.title = `Undangan Pernikahan: ${guestName} | Romeo & Juliet`;
    } else {
      document.title = 'The Wedding of Romeo & Juliet | EverAfter';
    }
  }, [guestName]);

  const handleOpenCover = () => {
    setIsCoverOpen(true);
    audio.play();
  };

  const handleScrollTo = (sectionId: string) => {
    const targetId = sectionId === 'location' ? 'events' : sectionId;
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-ivory-100 text-charcoal-900 font-sans selection:bg-gold-500/20 selection:text-gold-700">
      {/* Falling Rose Petals Ambient Effect */}
      <FallingPetals density={12} />

      {/* Cover Gate Modal with 3D Envelope */}
      <CoverGate
        isOpen={isCoverOpen}
        onOpen={handleOpenCover}
        guestName={guestName}
        groomName={weddingData.couple.groom.shortName}
        brideName={weddingData.couple.bride.shortName}
        dateFormatted="14 November 2026"
      />

      {/* Floating Audio & Navigation HUD (Visible once Cover is opened) */}
      {isCoverOpen && (
        <>
          <FloatingAudioPlayer
            isPlaying={audio.isPlaying}
            onToggle={audio.toggle}
            title={weddingData.audio.title}
          />
          <QuickAccessHUD onScrollTo={handleScrollTo} />
        </>
      )}

      {/* Main Scrollytelling Content */}
      <main className="w-full overflow-x-hidden">
        {/* Hero Section */}
        <HeroSection
          groomName={weddingData.couple.groom.shortName}
          brideName={weddingData.couple.bride.shortName}
          weddingDateFormatted="Sabtu, 14 November 2026"
          quoteText={weddingData.couple.quote.text}
          quoteSource={weddingData.couple.quote.source}
        />

        {/* Couple Section */}
        <CoupleSection
          groom={weddingData.couple.groom}
          bride={weddingData.couple.bride}
        />

        {/* Event Schedule & Countdown */}
        <EventScheduleSection
          events={weddingData.events}
          targetDate={weddingData.couple.weddingDate}
        />

        {/* Love Story Timeline */}
        <LoveStoryTimeline stories={weddingData.loveStory} />

        {/* Prewedding Photo Gallery Lightbox */}
        <GallerySection photos={weddingData.gallery} />

        {/* RSVP & Real-Time Wishes Wall */}
        <RsvpSection defaultGuestName={guestName} />

        {/* Digital Gift & Amplop Digital */}
        <DigitalGiftSection
          bankAccounts={weddingData.gifts.bankAccounts}
          shippingAddress={weddingData.gifts.shippingAddress}
        />

        {/* Closing Footer */}
        <footer className="py-16 pb-28 sm:pb-20 px-6 bg-ivory-300 text-center relative border-t border-gold-500/20">
          <div className="max-w-md mx-auto space-y-4">
            <span className="font-cursive text-3xl text-gold-600 block">EverAfter</span>
            <p className="font-serif text-lg text-charcoal-900">
              {weddingData.couple.groom.shortName} &amp; {weddingData.couple.bride.shortName}
            </p>
            <p className="text-xs text-charcoal-muted leading-relaxed">
              Terima kasih atas segala doa restu dan kehadiran yang telah diberikan kepada kami dan keluarga.
            </p>
            <div className="flex items-center justify-center gap-1.5 pt-4 text-xs text-gold-700 font-medium">
              <span>Made with love</span>
              <Heart className="w-3 h-3 fill-gold-500 text-gold-500" />
              <span>EverAfter Luxury Wedding</span>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
