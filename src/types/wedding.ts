export interface PersonProfile {
  fullName: string;
  shortName: string;
  fatherName: string;
  motherName: string;
  instagram?: string;
  photoUrl: string;
  bio?: string;
}

export interface CoupleData {
  groom: PersonProfile;
  bride: PersonProfile;
  weddingDate: string; // ISO 8601 string, e.g. "2026-11-14T08:00:00+07:00"
  quote: {
    text: string;
    source: string;
  };
}

export interface EventSchedule {
  id: string;
  title: string;
  subtitle?: string;
  dateFormatted: string;
  timeFormatted: string;
  startTime: string; // ISO 8601 string
  endTime: string;   // ISO 8601 string
  venueName: string;
  venueAddress: string;
  googleMapsUrl: string;
  dressCode?: string;
}

export interface LoveStoryItem {
  year: string;
  title: string;
  story: string;
  photoUrl?: string;
}

export interface GalleryPhoto {
  id: string;
  src: string;
  alt: string;
  aspectRatio: 'portrait' | 'landscape' | 'square';
  caption?: string;
}

export interface BankAccountGift {
  id: string;
  bankName: string;
  accountNumber: string;
  accountHolder: string;
  qrCodeUrl?: string;
}

export interface RsvpEntry {
  id?: string;
  guestName: string;
  attendance: 'hadir' | 'berhalangan';
  guestCount: number;
  message: string;
  createdAt: string;
}

export interface WeddingConfig {
  couple: CoupleData;
  events: EventSchedule[];
  loveStory: LoveStoryItem[];
  gallery: GalleryPhoto[];
  gifts: {
    bankAccounts: BankAccountGift[];
    shippingAddress?: {
      recipientName: string;
      phoneNumber: string;
      fullAddress: string;
    };
  };
  audio: {
    title: string;
    artist: string;
    src: string;
  };
}
