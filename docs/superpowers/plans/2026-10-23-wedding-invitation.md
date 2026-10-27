# EverAfter - Wedding Invitation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use `superpowers:subagent-driven-development` (recommended) or `superpowers:executing-plans` to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Membangun aplikasi web undangan pernikahan digital interaktif (EverAfter) dengan cover interaktif, personalisasi nama tamu, audio player, rincian acara, countdown timer, galeri foto, RSVP/buku tamu, dan amplop digital.

**Architecture:** Single Page Application (SPA) berbasis React + TypeScript dengan Vite dan Tailwind CSS, menggunakan arsitektur modular per-section berbasis komponen (Hero, Couple, Events, Gallery, RSVP, Gifts). Manajemen state interaksi (Audio, Cover state, RSVP filter) dikelola via React Context/Zustand, dengan integrasi database **Firebase Cloud Firestore** untuk penyimpanan RSVP dan *live real-time wishes stream*.

**Tech Stack:** React 18+, TypeScript, Vite, Tailwind CSS, Firebase SDK v10+ (Cloud Firestore), Lucide React (ikon), Framer Motion (animasi & transisi cover), Canvas-Confetti, Vitest & React Testing Library (TDD).

**Spec:** 
- [docs/superpowers/specs/2026-10-23-wedding-invitation-concept.md](file:///d:/Project%20Gabut/EverAfter/docs/superpowers/specs/2026-10-23-wedding-invitation-concept.md)
- [design.md](file:///d:/Project%20Gabut/EverAfter/design.md) (Design System & Tokens)
- [designscrolly.md](file:///d:/Project%20Gabut/EverAfter/designscrolly.md) (Scrollytelling & Cinematic Experience)
- [figmascrolly.md](file:///d:/Project%20Gabut/EverAfter/figmascrolly.md) (Visual Blueprint & Asset Checklist)

---

## Global Constraints

- **Mobile First:** Desain harus diuji dan optimal pada breakpoint smartphone (360px - 430px) sebelum desktop.
- **Autoplay Policy:** Musik tidak boleh berbunyi otomatis saat halaman pertama dimuat; hanya berputar setelah tombol "Buka Undangan" diklik oleh pengguna.
- **Zero CLS & Fast Load:** Seluruh gambar harus memiliki atribut width/height atau aspect ratio eksplisit untuk mencegah layout shifts.
- **No Third-Party Bloat:** Hindari library berat yang tidak esensial; utamakan utilitas CSS murni dan hooks ringan.
- **Copy-to-Clipboard Reliability:** Fitur salin nomor rekening harus memiliki fallback `document.execCommand` jika `navigator.clipboard` tidak didukung di in-app browser (seperti WebView Instagram/WhatsApp).

---

## Review Focus

1. **In-App Browser Audio Handling:** Audio autoplay saat klik tombol di dalam browser bawaan WhatsApp/Instagram (sering memblokir audio context).
2. **URL Parameter Encoding:** Penanganan karakter khusus pada nama tamu (`?to=Bpk.+Budi+%26+Keluarga`).
3. **Offline / Network Latency pada Form RSVP:** UI loading state dan pesan error yang ramah ketika submit RSVP gagal atau lambat.
4. **Clipboard Permissions:** Kegagalan fungsi salin nomor rekening pada konteks non-HTTPS atau WebView terbatas.
5. **Add to Calendar Timezone:** Format waktu ISO untuk tautan Google Calendar agar tidak meleset akibat zona waktu (WIB/WITA/WIT).

---

## Task Breakdown

### Task 1: Scaffolding Project & Design System Tokens Setup
**Deliverable:** Proyek Vite + React + TypeScript siap jalan dengan konfigurasi Tailwind CSS, font Google (`Playfair Display` & `Plus Jakarta Sans`), dan palet warna sesuai spec.

- [x] **Step 1: Inisialisasi Vite + React + TS**
  - Buat template proyek Vite dengan React dan TypeScript (`npm create vite@latest . -- --template react-ts` atau konfigurasi terstruktur).
  - Install dependency dasar: `lucide-react`, `clsx`, `tailwind-merge`.
- [x] **Step 2: Setup Tailwind CSS & Design Tokens**
  - Install Tailwind CSS, PostCSS, dan Autoprefixer.
  - Konfigurasi `tailwind.config.js` dengan palet warna spesifikasi:
    - `ivory`: `#FDFBF7`
    - `champagne`: `#C5A880`
    - `sage`: `#7D8D76`
    - `charcoal`: `#2D2A26`
    - `blush`: `#F8F3ED`
  - Import Google Fonts di `index.html` / `index.css`: font serif `Playfair Display` dan sans-serif `Plus Jakarta Sans`.
- [x] **Step 3: Unit Test Setup**
  - Setup Vitest dan React Testing Library (`vitest`, `@testing-library/react`, `jsdom`).
  - Buat tes verifikasi render lingkungan dasar.
  - Jalankan `npm test` untuk memastikan pipeline pengujian siap.

---

### Task 2: Data Model & Mock Data (Wedding Configuration)
**Deliverable:** Tipe TypeScript (`types/wedding.ts`) dan mock data lengkap (`data/weddingData.ts`) yang memuat seluruh rincian pernikahan.

- [x] **Step 1: Definisikan Interface Data**
  - Tulis model untuk `CoupleInfo` (nama, foto, instagram, ortu), `EventDetail` (akad, resepsi, mapsUrl, date, time), `LoveStoryItem`, `GalleryItem`, `BankGift`, dan `RsvpEntry`.
- [x] **Step 2: Buat Mock Data Lengkap**
  - Buat dataset dummy siap pakai untuk pasangan, timeline kisah cinta, daftar rekening, dan daftar awal doa restu.
- [x] **Step 3: Tulis Unit Test Validasi Data**
  - Buat tes untuk memastikan data mock memenuhi kontrak tipe TypeScript tanpa properti wajib yang hilang.

---

### Task 3: URL Parameter Parser & Invitation Gate (Cover Overlay)
**Deliverable:** Komponen Cover Pembuka yang membaca parameter URL nama tamu dan membuka akses ke konten utama dengan animasi.

- [x] **Step 1: Test URL Param Helper (TDD)**
  - Tulis tes untuk fungsi utilitas `getGuestNameFromUrl(searchParams)`:
    - Mengembalikan nama dari `?to=Nama+Tamu`.
    - Sanitasi karakter HTML berbahaya.
    - Nilai default ("Tamu Undangan") jika parameter kosong.
- [x] **Step 2: Implementasi Helper & Component `CoverGate.tsx`**
  - Buat komponen Cover dengan tampilan vertikal mobile elegan: Nama Mempelai, Tagline, Box Nama Tamu, dan Tombol "Buka Undangan".
  - Berikan efek transisi geser ke atas / fade out saat tombol diklik.
- [x] **Step 3: Verifikasi Interaksi**
  - Tes interaksi klik tombol memicu state `isOpen = true` dan memanggil callback pembuka audio.

---

### Task 4: Background Music Player & Floating Controls
**Deliverable:** Komponen audio player melayang dengan tombol play/pause dan rotasi animasi disk.

- [x] **Step 1: Buat Custom Hook `useAudioPlayer`**
  - Tangani siklus hidup elemen `Audio`, error handling jika browser memblokir autoplay, dan state `isPlaying`.
- [x] **Step 2: Implementasi Komponen `FloatingAudioPlayer.tsx`**
  - Desain tombol melayang di sudut kanan bawah dengan ikon speaker/vinyl berputar.
  - Tambahkan tooltip ramah pengguna.
- [x] **Step 3: Tes Unit Komponen Audio**
  - Uji tombol toggle memainkan dan menghentikan audio secara terprediksi.

---

### Task 5: Hero Section & Couple Profile
**Deliverable:** Section perkenalan mempelai pria dan wanita beserta informasi keluarga dan link sosial media.

- [x] **Step 1: Implementasi `HeroSection.tsx`**
  - Banner estetik dengan tanggal pernikahan dan kutipan ayat suci / quote romantis.
- [x] **Step 2: Implementasi `CoupleSection.tsx`**
  - Kartu profil mempelai pria dan wanita dengan layout simetris.
  - Frame foto melengkung (*arch frame*) khas wedding aesthetic.
  - Tautan akun Instagram masing-masing mempelai.
- [x] **Step 3: Tes Responsif Komponen**
  - Pastikan layout menjadi stack 1 kolom di layar ponsel dan 2 kolom di layar desktop.

---

### Task 6: Event Details, Live Countdown & Map Directions
**Deliverable:** Komponen waktu hitung mundur dan rincian jadwal Akad/Resepsi dengan tombol Google Maps & Add to Calendar.

- [x] **Step 1: Buat Utilitas `useCountdown` (TDD)**
  - Tulis tes logika pengurangan waktu (hari, jam, menit, detik) dari target tanggal.
  - Tangani kondisi ketika waktu acara sudah lewat (*Event Ended*).
- [x] **Step 2: Implementasi `EventScheduleSection.tsx`**
  - Kartu Akad Nikah & Resepsi dengan jam dan lokasi.
  - Tombol navigasi Google Maps.
  - Tombol "Tambah ke Kalender" (URL generator Google Calendar).
- [x] **Step 3: Integrasi Tampilan Countdown**
  - Tampilkan 4 kotak counter estetik dengan tipografi Champagne Gold.

---

### Task 7: Love Story Timeline & Gallery Lightbox
**Deliverable:** Bagian perjalanan cinta vertikal dan galeri foto dengan modal pratinjau layar penuh.

- [x] **Step 1: Komponen `LoveStoryTimeline.tsx`**
  - Garis vertikal estetik yang menghubungkan momen bersejarah pasangan (Tahun & Cerita Singkat).
- [x] **Step 2: Komponen `GallerySection.tsx` & Lightbox Modal**
  - Grid gambar responsif (2 kolom di mobile, 3-4 kolom di desktop).
  - Modal interaktif untuk melihat gambar resolusi penuh dengan navigasi next/prev dan tombol close.
- [x] **Step 3: Tes Interaksi Modal Galeri**
  - Pastikan tombol Escape atau klik backdrop menutup modal.

---

### Task 8: Firebase Firestore Integration, RSVP Form & Live Wishes Wall
**Deliverable:** Konfigurasi Firebase Firestore, security rules, formulir RSVP, dan stream buku ucapan doa yang terupdate secara *real-time*.

- [x] **Step 1: Setup Firebase SDK & Client Configuration**
  - Install dependency `firebase`.
  - Buat file konfigurasi `src/lib/firebase.ts` yang membaca environment variables (`VITE_FIREBASE_API_KEY`, `VITE_FIREBASE_PROJECT_ID`, dll.).
  - Sediakan mode *Fallback Mock Storage* jika kredensial Firebase belum diisi, sehingga aplikasi tetap berjalan saat testing lokal.
- [x] **Step 2: Firestore Service & Security Rules**
  - Tulis modul service `src/services/rsvpService.ts`:
    - `submitRsvp(entry: RsvpEntry): Promise<void>`
    - `subscribeToWishes(callback: (wishes: RsvpEntry[]) => void): () => void` (menggunakan listener `onSnapshot` real-time).
  - Buat file aturan keamanan `firestore.rules` (read publik, create dengan validasi field ketat, larang update/delete dari client).
- [x] **Step 3: Implementasi `RsvpForm.tsx` & Confetti Effect**
  - Form input: Nama, Konfirmasi (Hadir / Berhalangan), Jumlah Tamu, Pesan Doa.
  - Tombol kirim dengan indikator loading state dan feedback visual (letupan efek confetti warna champagne gold).
- [x] **Step 4: Implementasi `WishesWall.tsx` dengan Live Real-Time Updates**
  - Menampilkan daftar pesan ucapan terbaru dengan timestamp relatif (misal: "2 menit yang lalu") yang otomatis muncul saat tamu lain mengirim ucapan.

---

### Task 9: Digital Gift & Amplop Digital
**Deliverable:** Bagian hadiah digital dengan rekening bank, tombol instan Salin Nomor Rekening, dan QRIS modal.

- [x] **Step 1: Buat Helper `copyToClipboard` (TDD)**
  - Tulis fungsi utilitas penyalin teks dengan fallback legacy untuk in-app browser.
  - Uji skenario sukses dan gagal copy.
- [x] **Step 2: Implementasi `DigitalGiftSection.tsx`**
  - Kartu rekening dengan logo bank, nama pemilik, dan nomor rekening.
  - Tombol aksi: `Salin Nomor Rekening` dengan status feedback visual ("Tersalin!").
  - QR Code QRIS dengan opsi perbesar pratinjau.
  - Opsi alamat pengiriman kado fisik.

---

### Task 10: Integrasi Halaman, Optimasi Kinerja, & Verifikasi Akhir
**Deliverable:** Aplikasi terintegrasi utuh, lolos audit Lighthouse (> 90 Mobile Performance), siap deploy.

- [x] **Step 1: Integrasi Komponen di `App.tsx`**
  - Susun urutan section: CoverGate -> Hero -> Couple -> Event & Countdown -> Story -> Gallery -> RSVP & Wishes -> Digital Gift -> Footer.
- [x] **Step 2: Audit Aksesibilitas & Responsif**
  - Periksa kontras warna teks terhadap background (WCAG AA).
  - Verifikasi di simulated mobile viewport (iPhone SE, iPhone 14 Pro, Samsung Galaxy S20).
- [x] **Step 3: Verifikasi Build & Smoke Test**
  - Jalankan `npm run build` untuk memastikan tidak ada kesalahan TypeScript atau CSS.
  - Jalankan seluruh suite tes `npm test`.

