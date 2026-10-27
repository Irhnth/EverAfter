# Konsep Desain & Spesifikasi: Platform Undangan Pernikahan Digital (EverAfter)

> **Dokumen Spesifikasi Produk & Desain (Design Spec)**  
> **Status:** Draft Siap Review  
> **Tanggal:** 23 Oktober 2026  
> **Author:** Antigravity (Superpowers + UI/UX Pro Max)

---

## 1. Visi & Tujuan Produk

**EverAfter** adalah website undangan pernikahan digital modern, responsif, dan elegan yang dirancang untuk memberikan pengalaman interaktif bagi para tamu sekaligus mempermudah calon mempelai dalam mengelola kehadiran (RSVP), ucapan doa, dan penerimaan hadiah digital (amplop digital).

### Nilai Utama (Key Value Propositions):
1. **Personalized Greeting**: Mampu menampilkan nama tamu secara dinamis melalui parameter URL (`?to=Nama+Tamu`).
2. **Immersive Opening Experience**: Animasi pembuka amplop/cover (*Gate Opening Animation*) yang memicu background music secara elegan.
3. **Seamless Guest Interaction**: RSVP instan, buku ucapan/doa interaktif, dan tombol *Copy to Clipboard* nomor rekening atau QRIS.
4. **Mobile-First & Performance-Oriented**: 90%+ tamu membuka undangan lewat smartphone (WhatsApp link); halaman harus ringan (< 1.5s FCP), layout anti-geser (*Zero CLS*), dan responsif penuh.

---

## 2. Pendekatan Desain UI/UX (UI/UX Pro Max Intelligence)

Berdasarkan analisis domain *Wedding & Event Planning* dari database [ui-ux-pro-max](file:///d:/Project%20Gabut/EverAfter/.agents/skills/ui-ux-pro-max/SKILL.md):

### A. Gaya Visual (Visual Style)
* **Aesthetic Direction**: *Minimalist Luxury & Soft Editorial Romantic*
* **Nuansa**: Elegan, hangat, bersih, premium, tidak berlebihan dengan ornamen norak, memadukan tipografi serif klasik dengan kesederhanaan modern sans-serif.

### B. Palet Warna (Color Palette)
| Tipe Token | Nama Warna | Kode Hex | Penggunaan |
| :--- | :--- | :--- | :--- |
| **Primary Base** | Ivory Warm / Cream | `#FDFBF7` | Background utama website, memberikan kesan kertas undangan fisik premium |
| **Secondary Surface** | Soft Blush / Nude | `#F8F3ED` | Background kartu, container section, dan modal |
| **Primary Accent** | Champagne Gold | `#C5A880` | Garis aksen, ikon, tombol utama, border ornamen |
| **Secondary Accent** | Sage Green | `#7D8D76` | Badge waktu, status kehadiran, dedaunan botanical halus |
| **Text Primary** | Deep Charcoal Slate | `#2D2A26` | Judul, subjudul, dan teks utama (kontras tinggi, lembut dibanding hitam pekat) |
| **Text Muted** | Warm Gray | `#736B63` | Deskripsi, timestamp ucapan, label sekunder |

### C. Tipografi (Font Pairing)
* **Display / Headings**: `Playfair Display` atau `Cormorant Garamond` (Google Fonts) — Memberikan karakter klasik, anggun, dan mewah untuk nama mempelai serta judul section.
* **Body / Interface**: `Plus Jakarta Sans` atau `Inter` (Google Fonts) — Memastikan teks detail alamat, tanggal, form, dan ucapan sangat mudah dibaca (*high legibility*) di layar ponsel.

---

## 3. Fitur & Struktur Halaman

Halaman disusun dalam bentuk *Single Page Application (SPA)* dengan navigasi mengambang (*floating navigation*) setelah cover dibuka:

### 1. Cover / Splash Gate (Modal Screen)
* Menampilkan nama mempelai, tanggal acara, serta nama tamu penerima (`Kepada Yth. Bpk/Ibu/Sdr/i [Nama Tamu]`).
* Tombol aksi: `Buka Undangan` dengan ikon amplop/segel lilin (*wax seal*).
* Saat diklik: Mengaktifkan pemutaran lagu latar (*audio autoplay*) dan transisi membuka pintu/layar ke halaman inti dengan animasi halus (*fade & slide-up*).

### 2. Header & Floating Controls
* Kontrol musik melayang (*floating audio player*) di pojok layar: play/pause, putaran vinyl/disk berputar.
* Bottom navigation bar (opsional, mobile-friendly): Beranda, Pasangan, Acara, Galeri, RSVP/Ucapan.

### 3. Profil Mempelai (The Couple)
* Foto mempelai pria dan wanita dengan frame estetis (arch / oval shape).
* Nama lengkap, nama panggilan, informasi orang tua / keluarga, serta tautan Instagram mempelai.

### 4. Detail Acara & Countdown Timer (Event & Schedule)
* **Hitung Mundur (Live Countdown)**: Hari, Jam, Menit, Detik menuju waktu acara.
* **Akad Nikah / Pemberkatan**: Hari, tanggal, waktu, nama venue, alamat lengkap.
* **Resepsi Pernikahan**: Hari, tanggal, waktu, sesi tamu (jika ada pembagian sesi).
* **Integrasi Peta**: Tombol langsung menuju Google Maps / Waze dan sematan peta interaktif.
* **Add to Calendar**: Tombol untuk menambahkan agenda ke Google Calendar dan Apple iCal (.ics).

### 5. Kisah Cinta (Love Story Timeline)
* Milestone perjalanan cinta pasangan (contoh: *Pertama Bertemu*, *Menyatakan Komitmen*, *Lamaran*, *Menuju Hari Bahagia*).

### 6. Galeri Foto & Video (Gallery Showcase)
* Grid foto masonry dengan dukungan popup *Lightbox* layar penuh.
* Pemutar video pre-wedding (YouTube Embed atau MP4 responsif).

### 7. Form RSVP & Buku Ucapan (RSVP & Wishes Wall)
* **Formulir Konfirmasi**:
  * Nama tamu (otomatis terisi dari query parameter).
  * Status kehadiran: *Hadir* atau *Tidak Dapat Hadir*.
  * Jumlah tamu yang hadir (*number picker*).
  * Pesan ucapan / doa restu.
* **Wishes Stream / Wall**:
  * Daftar ucapan dari para tamu dengan layout kartu komentar bersih dan pagination/infinite scroll.

### 8. Amplop Digital & Kado Fisik (Digital Gifts)
* Nomor Rekening Bank (BCA, Mandiri, BRI, dll.) disertai tombol instan `Salin Nomor Rekening` (*Copy to Clipboard*).
* Kode QRIS untuk transfer dompet digital (GoPay, OVO, Dana, ShopeePay) dengan modal perbesar dan download gambar QR.
* Alamat pengiriman kado fisik untuk tamu yang ingin mengirimkan bingkisan.

### 9. Protokol & Penutup (Footer & Etiquette)
* Informasi dresscode (contoh: *Earth Tone / Pastel Elegance*).
* Pesan penutup hangat dan apresiasi dari kedua mempelai beserta keluarga besar.

---

## 4. Pilihan Pendekatan Teknis (Technical Architecture Approaches)

| Kriteria | Opsi Terpilih: Firebase Cloud Firestore + React SPA (Vite) | Opsi Alternatif: Supabase BaaS | Opsi Sederhana: Google Sheets API |
| :--- | :--- | :--- | :--- |
| **Deskripsi** | SPA React terhubung langsung ke Firebase Firestore dengan listener real-time (`onSnapshot`). | Menggunakan Postgres BaaS Supabase. | Menggunakan form Google Sheets. |
| **Kelebihan** | **Real-time instant live update**, setup cepat, SDK modular ringan, gratis (Spark tier 50k read/hari), deployment static di Firebase Hosting / Vercel. | Fitur SQL relasional lengkap. | Sangat sederhana. |
| **Kekurangan** | Membutuhkan setup konfigurasi `firebaseConfig`. | Kuota free tier pause jika tidak aktif. | Tidak mendukung listener real-time instan, latency lebih lambat. |
| **Status** | **DIPILIH** — Sangat ideal untuk *Live Wishes Stream* dan konfirmasi kehadiran real-time. | Alternatif | Tidak direkomendasikan |

---

## 5. Kebutuhan Non-Fungsional & Constraint

1. **Kecepatan Akses**: Ukuran bundle JS utama < 200KB gzip. Optimasi gambar format WebP / AVIF dengan *lazy loading*.
2. **Audio Compliance**: Audio tidak boleh auto-play tanpa interaksi pengguna terlebih dahulu (aturan browser modern). Pemutaran musik dipicu oleh klik tombol "Buka Undangan".
3. **Data Security**: Anti-spam / rate-limiting sederhana pada form RSVP agar tidak dibanjiri bot.
4. **Offline Resilience**: Jika koneksi lambat di tempat resepsi, halaman statis tetap dapat dibaca tanpa crash.

