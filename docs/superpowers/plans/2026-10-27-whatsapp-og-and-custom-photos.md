# Implementation Plan: Thumbnail WhatsApp (Open Graph) & Kustom Foto Prewedding

**Tujuan:**
1. Mengoptimalkan pratinjau tautan (*link preview*) saat dibagikan ke WhatsApp, Telegram, dan media sosial dengan thumbnail gambar beresolusi tinggi, judul personal, dan deskripsi romantis.
2. Mengganti seluruh foto placeholder Unsplash dengan satu set foto prewedding kustom yang konsisten secara gaya visual (*haute editorial & romantic gold*), disimpan secara lokal di `public/assets/photos/` untuk performa cepat dan kemampuan *offline*.

---

### File Structure Map

| File | Tanggung Jawab / Perubahan |
|---|---|
| `public/assets/og-wedding-preview.jpg` | Gambar thumbnail Open Graph standar 1200x630 (1.91:1) untuk WhatsApp & media sosial. |
| `public/assets/photos/` | Direktori penyimpanan foto-foto prewedding kustom beresolusi tinggi (Groom, Bride, Hero, Love Story, Galeri). |
| `index.html` | Penambahan meta tags Open Graph (`og:*`), Twitter Card (`twitter:*`), Apple Touch Icon, dan judul dokumen. |
| `src/data/weddingData.ts` | Pembaruan URL foto pada profil `groom`, `bride`, `loveStory`, dan `gallery` mengarah ke aset lokal. |
| `src/utils/urlHelper.ts` | Peningkatan helper untuk mendukung pembaruan dinamis `document.title` sesuai nama tamu dari URL (`?to=...`). |
| `src/data/weddingData.test.ts` | Pembaruan tes unit untuk memastikan seluruh path foto lokal valid dan terisi. |

---

### Rencana Kerja Bertahap (Tasks)

#### Task 1: Pembuatan Aset Open Graph & Konfigurasi Meta Tags WhatsApp di `index.html`
**Deliverable:** Gambar Open Graph 1200x630 dan konfigurasi tag meta sosial lengkap di `index.html`.

- [x] **Step 1: Generate Gambar Thumbnail Open Graph (1200x630)**
  - Gunakan `image-generator` untuk membuat gambar pratinjau sosial berukuran 1200x630.
  - Komposisi: Amplop mewah terbuka dengan segel lilin emas "R & J", bunga mawar ivory & sage di sudut, dan teks tipografi emas: *"The Wedding Celebration of Romeo & Juliet — 14 November 2026"*.
  - Simpan di `public/assets/og-wedding-preview.jpg`.
- [x] **Step 2: Konfigurasi Meta Tags di `index.html`**
  - Pasang tag Open Graph:
    - `og:type` = `website`
    - `og:title` = `The Wedding of Romeo & Juliet`
    - `og:description` = `Kami mengundang Anda untuk merayakan momen bahagia pernikahan Romeo & Juliet. Klik untuk membuka surat undangan digital.`
    - `og:image` = `/assets/og-wedding-preview.jpg`
    - `og:image:width` = `1200`
    - `og:image:height` = `630`
  - Pasang tag Twitter Card (`summary_large_image`).
  - Ganti favicon default ke `/assets/wax-seal-gold.png`.
- [x] **Step 3: Verifikasi Dinamis Title di `App.tsx`**
  - Pastikan bila parameter URL `?to=Nama+Tamu` ada, judul tab browser otomatis menampilkan *"Undangan Pernikahan untuk [Nama Tamu] | Romeo & Juliet"*.

---

#### Task 2: Generasi & Pengorganisasian Kumpulan Foto Prewedding Kustom
**Deliverable:** 7 aset foto prewedding kustom tersimpan di `public/assets/photos/`.

- [ ] **Step 1: Buat Folder `public/assets/photos/`**
- [ ] **Step 2: Generate Foto Potret Mempelai Pria (`groom-portrait.jpg`)**
  - Pria tampan berjas formal elegan (*charcoal/black tux*), dasi kupu-kupu/dasi formal, senyum ramah, pencahayaan studio lembut. Rasio 4:5 vertikal.
- [ ] **Step 3: Generate Foto Potret Mempelai Wanita (`bride-portrait.jpg`)**
  - Wanita anggun bergaun pengantin putih gading (*ivory lace gown*), riasan natural, veil lembut, senyum menawan. Rasio 4:5 vertikal.
- [ ] **Step 4: Generate Foto Hero Utama Pasangan (`hero-couple.jpg`)**
  - Pasangan pengantin bersama dalam pose romantis anggun di taman senja (*golden hour terrace*) atau ballroom megah bernuansa hangat. Rasio 16:9 / horizontal.
- [ ] **Step 5: Generate Foto Momen Love Story (3 foto)**
  - `story-first-meet.jpg`: Kafe hangat dengan dua cangkir kopi.
  - `story-commitment.jpg`: Pasangan berjalan bergandengan tangan di taman hijau.
  - `story-proposal.jpg`: Momen lamaran senja dengan cincin pertunangan berkilau.
- [ ] **Step 6: Generate Foto Galeri Tambahan (4 foto)**
  - `gallery-1.jpg`: Detail cincin pernikahan di atas bunga mawar putih.
  - `gallery-2.jpg`: Pose tertawa bahagia (*candid*) kedua mempelai.
  - `gallery-3.jpg`: Siluet senja di tepi bukit / danau.
  - `gallery-4.jpg`: Detail buket bunga dan sentuhan tangan kedua mempelai.

---

#### Task 3: Integrasi Data & Verifikasi Tampilan Halaman
**Deliverable:** `src/data/weddingData.ts` diperbarui dengan tautan foto baru, semua komponen menampilkan foto kustom.

- [ ] **Step 1: Perbarui Objek Data di `src/data/weddingData.ts`**
  - Ganti URL foto `groom.photoUrl` -> `/assets/photos/groom-portrait.jpg`.
  - Ganti URL foto `bride.photoUrl` -> `/assets/photos/bride-portrait.jpg`.
  - Ganti URL `loveStory[].photoUrl` -> masing-masing foto story lokal.
  - Ganti URL `gallery[].src` -> masing-masing foto galeri lokal.
- [ ] **Step 2: Jalankan Unit Test (`npm test`)**
  - Pastikan seluruh 25 tes unit tetap lulus tanpa galat.
- [ ] **Step 3: Jalankan Production Build (`npm run build`)**
  - Pastikan kompilasi TypeScript dan Vite bersih 100%.
- [ ] **Step 4: Pratinjau Server (`npm run dev -- --host`)**
  - Verifikasi langsung pada tampilan HP dan laptop.

