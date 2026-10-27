# EverAfter: Figma Scrollytelling Visual Blueprint & Prototyping Guide

> **Panduan Visual & Wireframing Figma**  
> **Konsep:** *The Cinematic Journey of Two Souls*  
> **Ukuran Frame Utama:** iPhone 15/16 Pro (`393 x 852 px`) & Desktop Preview (`1440 x 900 px`)  
> **Tujuan:** Panduan langkah demi langkah (*step-by-step*) untuk desainer/developer dalam membangun file desain, *component sets*, dan prototipe interaktif *Smart Animate* di Figma.

---

## 1. Setup Canvas, Grid & Design Tokens di Figma

Sebelum mulai menyusun frame babak scrollytelling, buat **Local Variables / Color & Text Styles** di Figma:

### A. Color Styles (Figma Paint Styles)
| Nama Style di Figma | Hex | Opacity | Penggunaan |
| :--- | :--- | :--- | :--- |
| `Canvas/Ivory-100` | `#FDFBF7` | 100% | Latar belakang artboard & frame utama |
| `Surface/Blush-Nude` | `#F8F3ED` | 100% | Background kartu, modal, dan container |
| `Surface/Glass-Frosted`| `#FDFBF7` | 80% | Kartu kaca (tambahkan Effect *Background Blur 16px*) |
| `Accent/Champagne-Gold`| `#C5A880` | 100% | Tombol utama, border aksen, monogram |
| `Accent/Metallic-Gold` | `#D4AF37` | 100% | Ornamen cincin, partikel kembang api |
| `Accent/Botanical-Sage`| `#7D8D76` | 100% | Badge tanggal, ornamen daun, status hadir |
| `Text/Charcoal-Primary`| `#2D2A26` | 100% | Judul, nama mempelai, heading utama |
| `Text/Charcoal-Muted`  | `#736B63` | 100% | Paragraf cerita, waktu, detail alamat |
| `Border/Hairline-Gold` | `#C5A880` | 25% | Garis tepi kartu mewah (1px inside stroke) |

### B. Typography Styles (Figma Text Styles)
* `Display/Hero Name` : **Cormorant Garamond** • SemiBold (600) • `46px` • Line-height: `110%` • Letter-spacing: `+1%`
* `Heading/Section Title`: **Playfair Display** • SemiBold (600) • `28px` • Line-height: `120%`
* `Heading/Sub-Event`   : **Playfair Display** • Medium Italic (500) • `20px` • Line-height: `130%`
* `Calligraphy/Monogram`: **Alex Brush** • Regular (400) • `42px` • Line-height: `100%`
* `Body/Regular`        : **Plus Jakarta Sans** • Regular (400) • `14px` • Line-height: `150%`
* `Body/Medium Accent`  : **Plus Jakarta Sans** • Medium (500) • `14px` • Line-height: `140%`
* `Caption/Label Caps`  : **Plus Jakarta Sans** • SemiBold (600) • `11px` • Uppercase • Letter-spacing: `+8%`

### C. Layout Grid (Mobile 393px)
* **Columns:** 4
* **Margin:** `20px` (kiri & kanan)
* **Gutter:** `16px`

---

## 2. Struktur Frame Sinematik (Frame-by-Frame Scrollytelling)

Untuk menyimulasikan scrollytelling di Figma menggunakan **Smart Animate**, buat rangkaian frame berikut secara berurutan:

```
[Frame 01A] ──(Drag Up)──> [Frame 01B] (Prologue: Amplop Buka)
      │
   (Drag Up)
      ↓
[Frame 02A] ──(Drag Up)──> [Frame 02B] (Chapter I: Profil Masuk & Menyatu)
      │
   (Drag Up)
      ↓
[Frame 03A] ──(Drag Up)──> [Frame 03B] ──(Drag Up)──> [Frame 03C] (Chapter II: Timeline)
      │
   (Drag Up)
      ↓
[Frame 04A] ──(Drag Up)──> [Frame 04B] (Chapter III: Jadwal & Countdown)
      │
   (Drag Up)
      ↓
[Frame 05A] ──(Drag Left)─> [Frame 05B] (Chapter IV: Horizontal Gallery)
      │
   (Drag Up)
      ↓
[Frame 06A] ──(Click Send)─> [Frame 06B] (Chapter V: RSVP & Confetti Pop)
      │
   (Drag Up)
      ↓
[Frame 07A] ──(Tap Card)──> [Frame 07B] (Epilogue: Amplop & Rekening Keluar)
```

---

### Babak 1: Prologue — The Sealed Envelope

#### **Frame 01A: Envelope Locked**
* **Ukuran:** `393 x 852 px` | **Latar:** `#FDFBF7`
* **Elemen:**
  1. *Latar Tekstur:* Kotak amplop besar terpusat bertekstur kertas katun (`#F8F3ED`) dengan bayangan halus (*Drop Shadow: Y: 12, Blur: 24, Color: rgba(45,42,38, 0.08)*).
  2. *Segel Lilin (Wax Seal Component):* Lingkaran diameter `72px` warna `#C5A880` dengan monogram kaligrafi `"R & J"` warna putih emas.
  3. *Nama Tamu Card:* Kartu kecil di bawah segel:
     * Label atas: `KEPADA YTH. BAPAK/IBU/SAUDARA/I:`
     * Teks nama: **`Bpk. Budi Santoso & Rekan`**
  4. *Tombol CTA:* Pill button bertuliskan `"✉ Buka Undangan"`.

#### **Frame 01B: Envelope Unfolded**
* *Nama layer harus identik dengan Frame 01A agar Smart Animate bekerja:*
  1. *Segel Lilin:* Memudar dan mengecil (`Scale: 40%`, `Opacity: 0%`).
  2. *Tutup Amplop:* Berotasi ke atas (`Rotation: -180°`, `Opacity: 0%`).
  3. *Surat Undangan Inti:* Meluncur ke atas memenuhi layar (`Y: 0`, `Scale: 100%`).
  4. *Floating Audio Vinyl:* Muncul di pojok kanan bawah (`Rotation: 360°`).

---

### Babak 2: Chapter I — Two Destinies Converge

#### **Frame 02A: Two Souls Apart**
* **Ukuran:** `393 x 852 px`
* **Elemen:**
  1. *Quote Pembuka (Tengah Atas):* `"Dua hati, satu janji suci di bawah restu Ilahi"` (Playfair Display 18px Italic).
  2. *Groom Arch Card (Layer `photo-groom`):* Foto mempelai pria dengan kubah melengkung (*Corner Radius: 200px 200px 16px 16px*), diposisikan di luar layar sebelah kiri (`X: -120px`, `Opacity: 20%`).
  3. *Bride Arch Card (Layer `photo-bride`):* Foto mempelai wanita diposisikan di luar layar sebelah kanan (`X: 420px`, `Opacity: 20%`).
  4. *Ampersand (Layer `symbol-and`):* Skala `0%`, `Opacity: 0%`.

#### **Frame 02B: Souls Converged**
* **Elemen:**
  1. *`photo-groom`:* Bergerak ke posisi `X: 40px`, `Scale: 100%`, `Opacity: 100%`.
     * Teks bawah: **Romeo Montague, S.T.** (Putra dari Bpk. Montague & Ibu Sarah).
  2. *`photo-bride`:* Bergerak ke posisi `X: 210px`, `Scale: 100%`, `Opacity: 100%`.
     * Teks bawah: **Juliet Capulet, B.A.** (Putri dari Bpk. Capulet & Ibu Maria).
  3. *`symbol-and`:* Terletak persis di antara kedua foto dengan skala `100%`, warna emas Champagne.

---

### Babak 3: Chapter II — The Chronicle of Us (Kisah Cinta)

#### **Frame 03A: The First Glance (2021)**
* **Sticky Stage:** Garis vertikal emas di tengah.
* **Kartu Foto:** Format polaroid miring `4°`: Foto pertama saat bertemu di kafe.
* **Teks:** *"Pertama Kali Bertemu — Secangkir kopi yang menjadi awal dari selamanya."*

#### **Frame 03B: The Sacred Vow / Proposal (2024)**
* *`photo-polaroid-1`:* Meluncur ke atas dan memudar (`Y: -100px`, `Opacity: 0%`).
* *`photo-polaroid-2`:* Menggantikan posisi dengan rotasi `-3°`: Foto momen lamaran di tepi pantai dengan cincin emas berpendar.
* *Teks:* *"Ia Mengatakan 'Ya' — Langkah pasti menuju ikrar sehidup semati."*

---

### Babak 4: Chapter III — The Sacred Union (Jadwal & Lokasi)

#### **Frame 04A: Countdown & Invitation**
* **Elemen:**
  * Header: *"Menghitung Hari Menuju Sakinah"*
  * **Countdown Component:** 4 Kotak waktu (`Hari`, `Jam`, `Menit`, `Detik`) dengan fill `#F8F3ED`, border emas `1px`, angka berukuran `28px` warna emas.
  * Tombol: `+ Simpan ke Google Calendar` (Outlined Pill Button).

#### **Frame 04B: Event Details Split**
* Dua Kartu Kaca (*Glass Cards*):
  * **Kartu 1 (Akad Nikah):**
    * Ikon: Cincin Pernikahan Emas
    * Hari/Tgl: Sabtu, 14 November 2026 | 08.00 - 10.00 WIB
    * Lokasi: Masjid Agung Al-Ikhlas
    * Tombol: `Petunjuk Arah (Maps)`
  * **Kartu 2 (Resepsi Pernikahan):**
    * Ikon: Bunga Mawar
    * Hari/Tgl: Sabtu, 14 November 2026 | Sesi 1: 11.00 - 13.00 WIB
    * Lokasi: Grand Ballroom Hotel Mulia
    * Tombol: `Buka Lokasi Google Maps`

---

### Babak 5: Chapter IV — Echoes of Joy (Horizontal Parallax Gallery)

#### **Frame 05A: Gallery Start (Foto 1 Active)**
* **Horizontal Carousel Container (Clips Content: Off):**
  * Foto 1: Lebar `280px`, Tinggi `380px`, di tengah layar (`Scale: 100%`, `Corner Radius: 20px`).
  * Foto 2: Berada di sisi kanan terpotong (`Scale: 85%`, `Opacity: 50%`).

#### **Frame 05B: Gallery Swiped (Foto 2 Active)**
* *Container bergeser ke kiri sebesar `300px`:*
  * Foto 1: Bergeser ke kiri (`Scale: 85%`, `Opacity: 50%`).
  * Foto 2: Kini berada di tengah layar (`Scale: 100%`, `Opacity: 100%`).
  * Foto 3: Muncul di sisi kanan terpotong.

---

### Babak 6: Chapter V — Feast of Blessings (RSVP & Buku Ucapan)

#### **Frame 06A: RSVP Form State**
* **Form Inputs (Auto Layout, Gap: 16px):**
  1. *Nama Lengkap:* Input field dengan border rounded 12px.
  2. *Pill Selector Kehadiran:*
     * Pill 1: `✓ Pasti Hadir` (Fill: `#7D8D76` Sage Green, Text: White).
     * Pill 2: `✕ Berhalangan` (Fill: Transparent, Border: `#E8C2BA`).
  3. *Jumlah Tamu:* Stepper `[-]  2 Orang  [+]`.
  4. *Kotak Ucapan:* TextArea 4 baris placeholder *"Tuliskan doa restu untuk mempelai..."*.
  5. *Tombol Submit:* Tombol solid warna `#C5A880` dengan teks `"Kirim Doa Restu"`.

#### **Frame 06B: Success & Confetti State**
* **Elemen Tambahan:**
  * Layer partikel konfeti (*Confetti Overlay*): taburan elemen bentuk ribbon & dot warna emas, sage, dan mutiara.
  * Kartu sukses: *"Terima kasih atas doa & konfirmasinya!"*.
  * Kartu ucapan baru langsung muncul di daftar teratas buku tamu.

---

### Babak 7: Epilogue — Tokens of Love (Amplop Digital & QRIS)

#### **Frame 07A: Digital Envelope Closed**
* Kartu saku amplop bergaya modern dengan tulisan *"Tanda Kasih & Hadiah Digital"*.
* Nomor rekening tertera sebagian.

#### **Frame 07B: ATM Card & QRIS Revealed (On Tap)**
* **Kartu Bank (BCA):** Menyembul naik keluar dari amplop:
  * Nomor: `8830-1928-11` (Monospace font `18px`).
  * Atas Nama: Romeo Montague.
  * Tombol: `[ 📋 Salin Nomor Rekening ]` (Saat ditekan berubah jadi icon centang hijau `"Tersalin!"`).
* **Modal QRIS:** Tombol untuk memperbesar kode barcode QRIS.
* **Tanda Tangan Mempelai:** SVG Calligraphy path di bagian paling bawah.

---

## 3. Komponen Kunci di Figma (Figma Component Sets)

Buat master component ini di page khusus `❖ Components`:

### 1. `❖ Wax-Seal-Button`
* **Variant 1 (`State=Default`):** Lingkaran `72x72px`, Fill `#C5A880`, Drop Shadow emas lembut.
* **Variant 2 (`State=Pulsing`):** Outer ring `96x96px` dengan opacity `20%` (untuk efek animasi berdenyut).
* **Variant 3 (`State=Opened`):** Scale `0%`, Opacity `0%`.

### 2. `❖ Floating-Quick-HUD`
* Auto Layout horizontal (`Padding: 8px 16px`, `Gap: 16px`, `Corner Radius: 999px`).
* Fill: `#FDFBF7` dengan **85% opacity**, Stroke: `1px solid rgba(197, 168, 128, 0.3)`.
* Effect: **Background Blur `20px`**, Drop Shadow: `Y: 8, Blur: 20, Color: rgba(0,0,0,0.08)`.
* Ikon & Label: `[♫ Lagu]` | `[📅 Kalender]` | `[📍 Maps]` | `[✉ RSVP]`.

### 3. `❖ Arch-Photo-Frame`
* Frame Auto Layout dengan mask bentuk kubah:
  * Top Left & Top Right: `180px`
  * Bottom Left & Bottom Right: `16px`
* Stroke luar: `1px inside` warna `rgba(197, 168, 128, 0.4)`.

---

## 4. Panduan Menghubungkan Prototipe (Smart Animate Settings)

Buka tab **Prototype** di Figma dan sambungkan frame dengan konfigurasi berikut:

| Dari Frame | Menuju Frame | Trigger | Action / Animation | Easing | Durasi |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **01A (Amplop Tertutup)** | **01B (Amplop Terbuka)** | `On Click` (Tombol Buka) | **Navigate To** → *Smart Animate* | `Gentle` / `Bouncy` | `800 ms` |
| **01B** | **02A (Chapter I Entry)** | `On Drag` (Swipe Up) | **Navigate To** → *Smart Animate* | `Ease Out` | `600 ms` |
| **02A** | **02B (Profil Menyatu)** | `On Drag` (Swipe Up) | **Navigate To** → *Smart Animate* | `Custom (0.22, 1, 0.36, 1)`| `700 ms` |
| **02B** | **03A (Timeline Start)** | `On Drag` (Swipe Up) | **Navigate To** → *Smart Animate* | `Ease Out` | `600 ms` |
| **03A** | **03B (Timeline Next)** | `On Drag` (Swipe Up) | **Navigate To** → *Smart Animate* | `Ease Out` | `600 ms` |
| **03B** | **04A (Event Schedule)**| `On Drag` (Swipe Up) | **Navigate To** → *Smart Animate* | `Ease Out` | `600 ms` |
| **05A (Gallery 1)** | **05B (Gallery 2)** | `On Drag` (Swipe Left) | **Navigate To** → *Smart Animate* | `Ease Out` | `500 ms` |
| **06A (RSVP Form)** | **06B (RSVP Success)** | `On Click` (Kirim) | **Navigate To** → *Smart Animate* | `Quick / Snappy` | `400 ms` |
| **07A (Rekening Saku)**| **07B (Rekening Naik)** | `On Click` (Kartu) | **Navigate To** → *Smart Animate* | `Gentle` | `500 ms` |

---

## 5. Standar Penyiapan Aset (Asset Preparation Checklist)

Agar proses desain di Figma dan integrasi ke kode berjalan mulus, siapkan file aset dengan konvensi penamaan standar berikut:

### A. Foto Prewedding (Folder `assets/images/`)
* `hero-couple.webp` — Foto lanskap/vertikal utama kedua mempelai untuk Cover & Hero (Min. `1200 x 1600 px`).
* `portrait-groom.webp` — Foto vertikal mempelai pria rasio 3:4 untuk Arch Mask Chapter I (`900 x 1200 px`).
* `portrait-bride.webp` — Foto vertikal mempelai wanita rasio 3:4 untuk Arch Mask Chapter I (`900 x 1200 px`).
* `story-01.webp` s/d `story-03.webp` — Foto momen pertemuan & lamaran untuk Chapter II Timeline (`800 x 800 px` atau polaroid).
* `gallery-01.webp` s/d `gallery-08.webp` — Koleksi foto prewedding horizontal dan vertikal untuk Chapter IV Gallery.
* `venue-photo.webp` — Foto lokasi/gedung pernikahan untuk Chapter III.

### B. Aset Pembukaan & Vektor (Folder `assets/vectors/`)
* `wax-seal-monogram.svg` — Segel lilin lingkaran monogram inisial mempelai warna Champagne Gold.
* `envelope-flap.svg` & `envelope-pocket.svg` — Vektor potongan amplop untuk animasi buka tutup 3D.
* `paper-texture.webp` — Tekstur linen/grain katun halus seamless (resolusi kecil `256 x 256 px` tileable).
* `botanical-corner.svg` — Ornamen dedaunan sage untuk sudut undangan.
* `divider-flourish.svg` — Garis dekoratif pembatas antarbabak.

### C. Lisensi Font (Semua Bebas Komersial & Personal)
* **Playfair Display & Cormorant Garamond:** Google Fonts (SIL Open Font License).
* **Plus Jakarta Sans / Inter:** Google Fonts (SIL Open Font License).
* **Alex Brush:** Google Fonts (SIL Open Font License).

---

## 6. Plugin Figma Rekomendasi untuk Eksekusi Cepat

1. **Lucide Icons** atau **Iconify:** Untuk mengambil ikon pemutar piringan hitam, kalender, maps, cincin, dan copy clipboard.
2. **Unsplash / Pexels:** Untuk foto mock pernikahan mewah bertema rustic/editorial.
3. **Noise & Texture:** Untuk memberikan tekstur kertas katun halus (*subtle grain 3%*) pada background `#FDFBF7`.
4. **Confetti Generator:** Untuk membuat asset vector partikel konfeti di Frame 06B.

