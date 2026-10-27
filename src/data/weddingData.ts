import { WeddingConfig } from '../types/wedding.ts';

export const weddingData: WeddingConfig = {
  couple: {
    weddingDate: '2026-11-14T08:00:00+07:00',
    quote: {
      text: 'Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang.',
      source: 'QS. Ar-Rum: 21',
    },
    groom: {
      fullName: 'Romeo Montague, S.T.',
      shortName: 'Romeo',
      fatherName: 'Bpk. Hendra Montague',
      motherName: 'Ibu Sarah Montague',
      instagram: 'romeo.montague',
      photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop',
      bio: 'Putra pertama dari keluarga besar Montague.',
    },
    bride: {
      fullName: 'Juliet Capulet, B.A.',
      shortName: 'Juliet',
      fatherName: 'Bpk. Iskandar Capulet',
      motherName: 'Ibu Maria Capulet',
      instagram: 'juliet.capulet',
      photoUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop',
      bio: 'Putri bungsu dari keluarga besar Capulet.',
    },
  },
  events: [
    {
      id: 'akad',
      title: 'Akad Nikah',
      subtitle: 'Sacred Vows',
      dateFormatted: 'Sabtu, 14 November 2026',
      timeFormatted: '08.00 - 10.00 WIB',
      startTime: '2026-11-14T08:00:00+07:00',
      endTime: '2026-11-14T10:00:00+07:00',
      venueName: 'Masjid Raya Al-Ikhlas',
      venueAddress: 'Jl. Merdeka No. 12, Menteng, Jakarta Pusat',
      googleMapsUrl: 'https://maps.google.com/?q=Jakarta',
      dressCode: 'Putih / Pastel Tradisional',
    },
    {
      id: 'resepsi',
      title: 'Resepsi Pernikahan',
      subtitle: 'The Wedding Celebration',
      dateFormatted: 'Sabtu, 14 November 2026',
      timeFormatted: '11.00 - 14.00 WIB',
      startTime: '2026-11-14T11:00:00+07:00',
      endTime: '2026-11-14T14:00:00+07:00',
      venueName: 'Grand Ballroom Hotel Mulia',
      venueAddress: 'Jl. Asia Afrika No. 8, Senayan, Jakarta',
      googleMapsUrl: 'https://maps.google.com/?q=Hotel+Mulia+Jakarta',
      dressCode: 'Earth Tone / Formal Elegance',
    },
  ],
  loveStory: [
    {
      year: '2021',
      title: 'Pertemuan Pertama',
      story: 'Secangkir kopi hangat di sudut kafe Jakarta mengawali percakapan singkat yang tak pernah kami duga akan mengubah jalan hidup selamanya.',
      photoUrl: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=600&auto=format&fit=crop',
    },
    {
      year: '2023',
      title: 'Komitmen & Restu',
      story: 'Menyatukan dua keluarga besar dengan niat tulus dan doa, melangkah bersama melewati suka dan duka.',
      photoUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=600&auto=format&fit=crop',
    },
    {
      year: '2025',
      title: 'Menuju Ikrar Suci',
      story: 'Di bawah hangatnya matahari senja, sebuah cincin tersemat dengan janji untuk saling membersamai hingga akhir hayat.',
      photoUrl: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=600&auto=format&fit=crop',
    },
  ],
  gallery: [
    {
      id: 'g1',
      src: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop',
      alt: 'Romeo & Juliet Prewedding Shoot 1',
      aspectRatio: 'portrait',
      caption: 'The beginning of our forever',
    },
    {
      id: 'g2',
      src: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=800&auto=format&fit=crop',
      alt: 'Romeo & Juliet Prewedding Shoot 2',
      aspectRatio: 'landscape',
      caption: 'Walking hand in hand through the hills',
    },
    {
      id: 'g3',
      src: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=800&auto=format&fit=crop',
      alt: 'Romeo & Juliet Prewedding Shoot 3',
      aspectRatio: 'portrait',
      caption: 'Quiet moments together',
    },
    {
      id: 'g4',
      src: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=800&auto=format&fit=crop',
      alt: 'Romeo & Juliet Prewedding Shoot 4',
      aspectRatio: 'square',
      caption: 'Under the golden twilight',
    },
  ],
  gifts: {
    bankAccounts: [
      {
        id: 'bca',
        bankName: 'Bank Central Asia (BCA)',
        accountNumber: '8830192811',
        accountHolder: 'Romeo Montague',
      },
      {
        id: 'mandiri',
        bankName: 'Bank Mandiri',
        accountNumber: '1370019283719',
        accountHolder: 'Juliet Capulet',
      },
    ],
    shippingAddress: {
      recipientName: 'Romeo & Juliet',
      phoneNumber: '0812-3456-7890',
      fullAddress: 'Jl. Wijaya Kusuma No. 45, Kebayoran Baru, Jakarta Selatan, DKI Jakarta 12160',
    },
  },
  audio: {
    title: 'A Thousand Years (Instrumental Piano)',
    artist: 'Wedding Strings Ensemble',
    src: 'https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=romantic-piano-112199.mp3',
  },
};
