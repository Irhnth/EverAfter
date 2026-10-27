import {
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
  serverTimestamp,
  Timestamp,
} from 'firebase/firestore';
import { db, isFirebaseConfigured } from '../lib/firebase.ts';
import { RsvpEntry } from '../types/wedding.ts';

const LOCAL_STORAGE_KEY = 'everafter_rsvps';

// Default initial wishes for warm showcase
const DEFAULT_INITIAL_WISHES: RsvpEntry[] = [
  {
    id: 'init-1',
    guestName: 'Keluarga Bpk. Budi Santoso',
    attendance: 'hadir',
    guestCount: 2,
    message: 'Selamat menempuh hidup baru untuk Romeo & Juliet. Semoga menjadi keluarga sakinah, mawaddah, warahmah.',
    createdAt: new Date(Date.now() - 3600000 * 2).toISOString(),
  },
  {
    id: 'init-2',
    guestName: 'Anindya & Pasangan',
    attendance: 'hadir',
    guestCount: 2,
    message: 'Happy wedding! Semoga senantiasa diberkahi kebahagiaan dan cinta abadi selamanya. Amin!',
    createdAt: new Date(Date.now() - 3600000 * 5).toISOString(),
  },
];

type SubscriberCallback = (wishes: RsvpEntry[]) => void;
const localSubscribers: Set<SubscriberCallback> = new Set();

function getLocalWishes(): RsvpEntry[] {
  try {
    const raw = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (!raw) return DEFAULT_INITIAL_WISHES;
    return JSON.parse(raw);
  } catch {
    return DEFAULT_INITIAL_WISHES;
  }
}

function saveLocalWishes(wishes: RsvpEntry[]) {
  try {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(wishes));
  } catch {
    // Storage quota or restricted context
  }
  localSubscribers.forEach((sub) => sub(wishes));
}

/**
 * Submits an RSVP entry to Firestore or local fallback storage
 */
export async function submitRsvp(
  entry: Omit<RsvpEntry, 'id' | 'createdAt'>,
): Promise<RsvpEntry> {
  const newEntry: RsvpEntry = {
    ...entry,
    id: 'rsvp-' + Date.now(),
    createdAt: new Date().toISOString(),
  };

  if (isFirebaseConfigured && db) {
    try {
      const rsvpCol = collection(db, 'rsvps');
      const docRef = await addDoc(rsvpCol, {
        ...entry,
        createdAt: serverTimestamp(),
      });
      return { ...newEntry, id: docRef.id };
    } catch {
      // Fallback to local storage on network/permission error
      const current = getLocalWishes();
      saveLocalWishes([newEntry, ...current]);
      return newEntry;
    }
  } else {
    const current = getLocalWishes();
    saveLocalWishes([newEntry, ...current]);
    return newEntry;
  }
}

/**
 * Subscribes to live real-time wishes stream
 */
export function subscribeToWishes(callback: SubscriberCallback): () => void {
  if (isFirebaseConfigured && db) {
    try {
      const rsvpCol = collection(db, 'rsvps');
      const q = query(rsvpCol, orderBy('createdAt', 'desc'));

      const unsubscribe = onSnapshot(
        q,
        (snapshot) => {
          const items: RsvpEntry[] = snapshot.docs.map((doc) => {
            const data = doc.data();
            let dateStr = new Date().toISOString();
            if (data.createdAt instanceof Timestamp) {
              dateStr = data.createdAt.toDate().toISOString();
            }
            return {
              id: doc.id,
              guestName: data.guestName || 'Tamu Undangan',
              attendance: data.attendance || 'hadir',
              guestCount: data.guestCount || 1,
              message: data.message || '',
              createdAt: dateStr,
            };
          });
          callback(items.length > 0 ? items : DEFAULT_INITIAL_WISHES);
        },
        () => {
          // If firestore read fails, deliver local wishes
          callback(getLocalWishes());
        },
      );
      return unsubscribe;
    } catch {
      callback(getLocalWishes());
      return () => {};
    }
  } else {
    callback(getLocalWishes());
    localSubscribers.add(callback);
    return () => {
      localSubscribers.delete(callback);
    };
  }
}
