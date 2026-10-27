# EverAfter Design System & UI/UX Specification

> **Aesthetic Architecture:** *Editorial Haute Romance & Liquid Gold Glass*  
> **Target Experience:** Ultra-Luxurious, Romantic, Mobile-First, Interactive Digital Wedding Invitation  
> **Design Framework:** Powered by **UI/UX Pro Max Intelligence** & **Framer Motion Choreography**  
> **Status:** Approved Baseline  
> **Last Updated:** October 2026

---

## 1. Design Vision & Emotional Persona

EverAfter mentransformasi undangan pernikahan konvensional menjadi sebuah **karya seni digital interaktif** yang intim, megah, dan berkesan emosional bagi para tamu.

* **Emotional Resonance:** *Intimate, Reverent, Majestic, Timeless.*
* **Visual Metaphor:** Amplop surat linen bertekstur kapas tebal dengan segel lilin (*wax seal*), aksen tinta emas (*gold foil stamping*), dan bingkai arsitektural melengkung (*arch frame*).
* **Viewport Strategy:** **Mobile-First Priority (360px – 430px)** karena 95%+ tamu mengakses tautan dari WhatsApp/Instagram, dengan *clamped container* (maksimal 480px di desktop dengan latar ambient elegan) agar proporsi visual tetap sempurna seperti undangan fisik.

---

## 2. Token Architecture (3-Tier Design System)

Mengikuti arsitektur token UI/UX Pro Max: **Primitive → Semantic → Component**.

### A. Primitive Color Tokens

```css
/* Primitives */
--color-ivory-50:    #FDFDFB;
--color-ivory-100:   #FDFBF7; /* Primary Canvas */
--color-ivory-200:   #F8F3ED; /* Elevated Surface */
--color-ivory-300:   #EFE7DD; /* Muted Borders */

--color-gold-300:    #DFCCA6;
--color-gold-400:    #D4AF37; /* Metallic Classic Gold */
--color-gold-500:    #C5A880; /* Primary Champagne Gold */
--color-gold-600:    #A3835B; /* Deep Rich Gold */

--color-sage-100:    #F0F3EF;
--color-sage-400:    #9EB097;
--color-sage-500:    #7D8D76; /* Botanical Accent */
--color-sage-700:    #4D5849;

--color-charcoal-700:#4A453E;
--color-charcoal-800:#36332E;
--color-charcoal-900:#2D2A26; /* Primary High-Contrast Text */

--color-blush-100:   #FAF4F2;
--color-blush-300:   #F3E2DE;
--color-blush-500:   #E8C2BA;
```

### B. Semantic Color Tokens

| Semantic Token | Hex / Value | Deskripsi / Penggunaan |
| :--- | :--- | :--- |
| `--bg-canvas` | `#FDFBF7` | Latar belakang kanvas utama halaman |
| `--bg-surface` | `#F8F3ED` | Background kartu, container section, dan modal |
| `--bg-glass` | `rgba(253, 251, 247, 0.78)` | Kartu glassmorphism dengan backdrop blur |
| `--text-primary` | `#2D2A26` | Teks judul, nama mempelai, dan heading utama |
| `--text-secondary` | `#5A544C` | Paragraf deskripsi dan teks isi |
| `--text-muted` | `#827B73` | Keterangan waktu, label form sekunder |
| `--border-subtle` | `rgba(197, 168, 128, 0.25)`| Garis tepi tipis bernuansa champagne |
| `--border-accent` | `#C5A880` | Border ornamen, tombol fokus, garis aksen |
| `--accent-gold` | `#C5A880` | Tombol CTA utama, ikon primer, monogram |
| `--accent-sage` | `#7D8D76` | Badge konfirmasi hadir, dedaunan ornamen |
| `--accent-rose` | `#E8C2BA` | Status berhalangan, highlight romantis |

---

## 3. Tipografi & Hierarki Karakter

Kombinasi tiga font terkurasi untuk kontras visual sempurna antara kemewahan klasik dan keterbacaan modern:

```
Headings & Names  : 'Playfair Display' / 'Cormorant Garamond' (Serif)
Body & Interface  : 'Plus Jakarta Sans' / 'Inter' (Sans-Serif)
Monogram & Cursive: 'Alex Brush' / 'Great Vibes' (Calligraphy Accent)
```

```html
<!-- Google Fonts Embed Code -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&family=Alex+Brush&display=swap" rel="stylesheet">
```

### Typographic Scale Matrix

| Tingkat | Font Family | Size (Mobile / Desktop) | Weight | Tracking & Leading | Penggunaan |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero Display** | Cormorant Garamond | `42px` / `56px` | 600 (Semi-bold) | `tracking-wide`, `leading-tight` | Nama kedua mempelai di Cover & Hero |
| **Section H1** | Playfair Display | `28px` / `34px` | 600 | `tracking-normal`, `leading-snug` | Judul Section ("The Wedding", "Love Story") |
| **Sub-Heading H2** | Playfair Display | `20px` / `24px` | 500 (Italic) | `tracking-wide`, `leading-normal` | Nama Acara ("Akad Nikah", "Resepsi") |
| **Body Large** | Plus Jakarta Sans | `15px` / `16px` | 400 (Regular) | `tracking-normal`, `leading-relaxed` | Kutipan ayat suci, pesan undangan |
| **Body Regular** | Plus Jakarta Sans | `14px` / `14px` | 400 | `tracking-normal`, `leading-normal` | Detail alamat, form RSVP, ucapan doa |
| **Caption / Label** | Plus Jakarta Sans | `11px` / `12px` | 600 (Uppercase)| `tracking-widest` | Badge hari/tanggal, countdown unit |
| **Monogram Seal** | Alex Brush | `36px` / `48px` | 400 | `normal` | Inisial wax seal & dekorasi tanda tangan |

---

## 4. Koreografi Gerak & Animasi (Motion Design)

Animasi dirancang dengan filosofi **"Subtle, Majestic & Unobtrusive"** menggunakan **Framer Motion** dengan kurva Bézier lembut khas editorial mewah.

```typescript
// Preset Easing & Physics (Framer Motion)
export const luxuryEase = [0.22, 1, 0.36, 1]; // Smooth Cubic Out
export const springSnappy = { type: "spring", stiffness: 350, damping: 25 };
export const springGentle = { type: "spring", stiffness: 120, damping: 18 };
```

---

### A. Animasi 1: The Grand Opening (Curtain & Envelope Reveal)

Tamu disambut dengan cover terkunci. Begitu tombol *"Buka Undangan"* ditekan:
1. **Pulsing Wax Seal Glow:** Tombol amplop memiliki efek denyut cahaya keemasan:
   ```css
   @keyframes waxGlow {
     0%, 100% { box-shadow: 0 0 0 0 rgba(197, 168, 128, 0.45); }
     50% { box-shadow: 0 0 0 14px rgba(197, 168, 128, 0); }
   }
   ```
2. **Envelope Flap Opening & Curtain Slide:**
   * Layer Cover meluncur ke atas (*slide-up*) dengan `y: "-100%"` dalam durasi `0.9s` dengan `ease: [0.22, 1, 0.36, 1]`.
   * Bersamaan dengan itu, layer konten utama melakukan *subtle scale-up* dari `scale: 0.94` ke `scale: 1.0` dan `opacity: 0` ke `1.0`.
3. **Sound Trigger:** Memicu pemutaran audio latar secara otomatis berkat interaksi fisik pengguna.

---

### B. Animasi 2: Floating Vinyl Player & Soundwaves

* **Vinyl Record Rotation:**
  ```css
  @keyframes spinVinyl {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  .animate-spin-slow {
    animation: spinVinyl 9s linear infinite;
  }
  ```
* **Wave Bars Equalizer:** 3 batang kecil di samping tombol musik yang naik-turun secara asinkron saat lagu berputar (`scaleY: [0.3, 1, 0.5, 0.8]`).
* **Pause Transition:** Saat ditekan pause, putaran disk melambat halus (*deceleration*) alih-alih berhenti mendadak.

---

### C. Animasi 3: Scroll-Linked Staggered Entrance (Per-Section)

Setiap komponen yang masuk ke layar (*viewport*) muncul dengan efek *staggered cascade*:

```jsx
// Contoh Framer Motion Implementation
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.14, delayChildren: 0.1 }
  }
};

const fadeUpItem = {
  hidden: { opacity: 0, y: 28 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } 
  }
};
```

---

### D. Animasi 4: Arch Photo Hover & Reveal

* **Arch Mask Reveal:** Foto mempelai dibungkus dalam bentuk arch/kubah (*border-radius: 999px 999px 24px 24px*).
* **Parallax Scroll Shift:** Latar foto bergerak vertikal `10%` lebih lambat dari kecepatan gulir halaman untuk efek kedalaman (*depth perception*).
* **Interactive Hover/Tap:** Foto membesar sangat halus (`scale: 1.03`) dengan border emas berpendar redup.

---

### E. Animasi 5: Live Countdown Flip

* Setiap detik berubah, angka waktu tidak berganti kaku melainkan memiliki transisi geser vertikal:
  * Angka lama meluncur ke bawah dan pudar (`y: 12, opacity: 0`).
  * Angka baru meluncur dari atas ke posisi tengah (`y: -12 -> 0, opacity: 1`).

---

### F. Animasi 6: Love Story Connected Line Drawing

* Garis vertikal SVG di sepanjang section *Love Story* terisi memanjang ke bawah mengikuti posisi scroll pengguna (*scroll progress percentage: 0% → 100%*).
* Titik simpul (*timeline node*) bersinar dan mekar saat garis mencapai titik tersebut.

---

### G. Animasi 7: Gallery Masonry Lightbox

* Saat thumbnail foto diklik:
  * Modal backdrop memudar masuk dengan efek *frosted glass blur* (`backdrop-filter: blur(20px)`).
  * Foto utama bertransisi secara hero (*layoutId transition*) dari ukuran thumbnail ke tengah layar penuh.
  * Dukungan gesture swipe di ponsel untuk berpindah ke foto berikutnya.

---

### H. Animasi 8: Confetti Celebration (RSVP Submission)

Ketika tamu menekan tombol *"Kirim Konfirmasi Kehadiran & Doa"*:
* Memicu ledakan partikel kembang api keemasan menggunakan **Canvas-Confetti**:
  ```javascript
  confetti({
    particleCount: 90,
    spread: 70,
    origin: { y: 0.75 },
    colors: ['#C5A880', '#D4AF37', '#FDFBF7', '#7D8D76', '#E8C2BA'],
    disableForReducedMotion: true
  });
  ```

---

### I. Animasi 9: Copy to Clipboard Micro-Feedback

* Tombol *"Salin No. Rekening"*:
  * Ikon copy berubah menjadi ikon checkmark hijau sage (`scale: 1.2` pop).
  * Muncul badge feedback mengambang bertuliskan *"Berhasil Tersalin!"* yang melayang naik dan menghilang setelah 2 detik.

---

### J. Ambient Falling Petals (Efek Kelopak Gugur)

* Canvas ringan di latar belakang yang memunculkan 8–12 partikel kelopak bunga pastel lembut melayang perlahan dari atas ke bawah layar dengan rotasi 3D natural, menghidupkan suasana pernikahan romantis tanpa memberatkan CPU ponsel.

---

## 5. Komponen Kunci & Blueprint Visual

### 1. Cover Gate
```
+---------------------------------------------------+
|               [Monogram Lilin Emas]               |
|                                                   |
|             WALIMATUL 'URS / WEDDING              |
|               Romeo & Juliet                      |
|                                                   |
|              Kepada Yth. Tamu Mulia:              |
|             +-------------------------+           |
|             |  Bpk. Budi & Rekan      |           |
|             +-------------------------+           |
|                                                   |
|          [  (Ikon Amplop) Buka Undangan  ]        |
+---------------------------------------------------+
```

### 2. Live Countdown Bar
```
+---------------------------------------------------+
|               HARI BAHAGIA DIMULAI                |
|                                                   |
|   +--------+   +--------+   +--------+   +----+   |
|   |   24   |   |   10   |   |   45   |   | 18 |   |
|   |  HARI  |   |  JAM   |   | MENIT  |   |DTK |   |
|   +--------+   +--------+   +--------+   +----+   |
|                                                   |
|       [ + Simpan Tanggal ke Google Calendar ]     |
+---------------------------------------------------+
```

### 3. Kartu Jadwal Acara (Akad & Resepsi)
* Glassmorphic Card dengan border hairline emas `1px solid rgba(197, 168, 128, 0.3)`.
* Informasi lengkap: Tanggal, Waktu WIB, Nama Gedung/Masjid, Alamat lengkap.
* Tombol CTA ganda: `Buka di Google Maps` & `Lihat Petunjuk Arah`.

### 4. Real-time RSVP & Live Wishes
* Form interaktif: Nama, Status Kehadiran (Pill Selector: *Pasti Hadir* / *Berhalangan*), Jumlah Tamu Slider, Kotak Pesan Doa Restu.
* Live Wishes Stream: Kartu ucapan dengan inisial avatar melengkung, timestamp relatif, dan animasi masuk real-time seketika dari Firebase Firestore.

### 5. Amplop Digital & QRIS
* Tampilan kartu bank (BCA, Mandiri) dengan nomor rekening jelas berformat monospace elegan (`letter-spacing: 2px`).
* Tombol salin instan dengan respons haptik/visual.
* Barcode QRIS interaktif dengan tombol *"Perbesar Kode QR"* dan *"Unduh Gambar QRIS"*.

---

## 7. Standar Penyiapan Aset Visual (Asset Checklist)

Untuk memastikan performa optimal dan tampilan mewah yang konsisten, aset visual disiapkan dengan standar berikut:

| Kategori Aset | Format File | Rekomendasi Resolusi | Penempatan dalam Komponen |
| :--- | :--- | :--- | :--- |
| **Foto Hero Mempelai** | WebP / AVIF | `1200 x 1600 px` (portrait) | Cover Gate & Hero Greeting |
| **Potret Kubah Mempelai** | WebP / AVIF | `900 x 1200 px` (rasio 3:4) | Chapter I: Arch Mask Pria & Wanita |
| **Foto Kisah Cinta (Timeline)** | WebP / AVIF | `800 x 800 px` (persegi/polaroid) | Chapter II: Love Story Milestones |
| **Koleksi Galeri Foto** | WebP / AVIF | `1200 x 800 px` (campuran H & V) | Chapter IV: Horizontal Parallax Lightbox |
| **Segel Lilin (Wax Seal)** | SVG / PNG Transparan | `256 x 256 px` (vektor 3D) | Tombol CTA "Buka Undangan" |
| **Vektor Amplop & Penutup** | SVG Vektor | Resolusi bebas (skalabel) | Animasi 3D Flap Unfold Cover |
| **Tekstur Kertas Linen** | WebP tileable | `256 x 256 px` (subtle grain) | Background Canvas Texture (`#FDFBF7`) |
| **Ornamen Daun Sage & Garis** | SVG Vektor | Stroke emas/sage | Border arch, divider babak, & aksen |

---

## 8. Standar Kualitas, Aksesibilitas & Performa (Guardrails)

1. **Aksesibilitas (WCAG 2.1 AA):**
   * Kontras teks terhadap latar belakang selalu memenuhi rasio minimal `4.5:1` (teks utama `#2D2A26` pada kanvas `#FDFBF7` memiliki rasio kontras `14.2:1` — melampaui standar).
   * Seluruh tombol interaktif memiliki touch target minimal `48px x 48px` untuk kenyamanan jari di smartphone.
2. **Motion Accessibility:**
   * Seluruh animasi dinonaktifkan secara otomatis jika pengguna mengaktifkan preferensi OS `prefers-reduced-motion: reduce`.
3. **Zero CLS & Fast FCP:**
   * Semua gambar menggunakan aspect-ratio eksplisit (`aspect-[3/4]`, `aspect-square`).
   * Gambar di-lazy load kecuali gambar hero utama.
   * Ukuran bundle CSS & JavaScript dioptimasi agar First Contentful Paint (FCP) tercipta di bawah 1.2 detik pada jaringan 4G.

