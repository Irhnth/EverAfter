# EverAfter: Scrollytelling Design Architecture & Cinematic Experience

> **Konsep:** *The Cinematic Journey of Two Souls*  
> **Pendekatan:** Scrollytelling (Scroll-Driven Interactive Storytelling)  
> **Design Framework:** Powered by **UI/UX Pro Max** & **Framer Motion Scroll Engine**  
> **Status:** Architecture Blueprint  
> **Target:** Mobile-First Web Experience (iOS Safari, Android Chrome, In-App WebViews)

---

## 1. Analisis Kelayakan: Apakah Scrollytelling Cocok untuk Undangan Pernikahan?

### **Jawabannya: SANGAT COCOK, BAHKAN IDEAL!**

Pernikahan pada hakikatnya adalah sebuah **narasi emosional** (*a human love story*). Undangan digital konvensional sering kali terasa membosankan karena hanya berupa halaman panjang statis yang di-scroll tanpa keterlibatan emosi.

Dengan pendekatan **Scrollytelling**, setiap guliran jempol (*thumb scroll*) tamu tidak sekadar menggeser halaman, melainkan **membuka babak demi babak kisah cinta** secara sinematik layaknya menonton film pendek yang dipersonalisasi.

### Keunggulan Utama Scrollytelling untuk EverAfter:
1. **Daya Tarik Emosional (*High Engagement*):** Tamu tidak terburu-buru menutup undangan; mereka menikmati animasi transisi bertahap antara kisah cinta, detail acara, hingga foto pre-wedding.
2. **Fokus Visual Penuh (*Sticky Pinned Stages*):** Konten disajikan per babak (satu layar penuh per babak) sehingga tamu tidak terdistraksi oleh informasi yang menumpuk.
3. **Penyampaian Informasi yang Terstruktur (*Pacing*):** Dari perkenalan formal, kronologi pertemuan, ikrar suci, informasi logistik (peta & jadwal), hingga doa restu mengalir secara natural.

> [!IMPORTANT]
> **Aturan Emas Scrollytelling Undangan Pernikahan:**  
> Tamu sering kali membuka undangan saat sedang di perjalanan menuju lokasi. Oleh karena itu, scrollytelling **tidak boleh menghambat akses informasi penting**. Harus selalu disediakan **"Floating Quick-Access HUD"** di bagian bawah layar (tombol pintas: *Buka Maps*, *Jadwal Acara*, dan *RSVP*) yang dapat diakses instan kapan saja tanpa harus men-scroll seluruh babak cerita.

---

## 2. Struktur 6 Babak Sinematik (The 6 Narrative Chapters)

Setiap babak menggunakan teknik **Sticky Container** (`position: sticky; top: 0; height: 100vh;` di dalam wrapper `h-[200vh]` atau `h-[250vh]`), di mana nilai `scrollYProgress` (0.0 → 1.0) dari Framer Motion menggerakkan elemen-elemen di layar secara proporsional (*scrubbed animation*).

```
[ Prologue: The Sealed Envelope ]
              ↓ (Scroll / Click "Buka Undangan")
[ Chapter I: Two Destinies Converge (Profil Mempelai) ]
              ↓ (Scroll Scrubbing)
[ Chapter II: The Chronicle of Us (Milestone Timeline) ]
              ↓ (Scroll Scrubbing)
[ Chapter III: The Sacred Union (Akad & Resepsi Details) ]
              ↓ (Horizontal Parallax Gallery)
[ Chapter IV: Echoes of Joy (Galeri Foto & Video) ]
              ↓ (Scroll)
[ Chapter V: Feast of Blessings (Live RSVP & Doa) ]
              ↓ (Scroll)
[ Epilogue: Tokens of Love (Amplop Digital & QRIS) ]
```

---

### Prologue: The Sealed Envelope (Pintu Gerbang Sinematik)

* **Tampilan Layar Penuh (100vh):**
  * Tekstur amplop linen warna *Ivory Cream* (`#FDFBF7`) dengan ornamen floral dedaunan sage lembut di tepinya.
  * Segel lilin emas (*Champagne Wax Seal*) timbul dengan inisial mempelai monogram kaligrafi.
  * Kotak personalisasi nama tamu yang berkilau lembut: *"Kepada Yth. Bpk/Ibu/Sdr/i [Nama Tamu]"*.
* **Mekanik Scrollytelling:**
  * Tamu menekan tombol segel atau melakukan scroll ke bawah.
  * Penutup amplop membuka ke atas (*3D rotateX: -180deg*), surat undangan terangkat perlahan ke depan (*translateZ & scale-up*).
  * Musik romantis mulai mengalun lembut (*fade-in volume*).
  * Partikel kelopak bunga melayang di latar belakang.

---

### Chapter I: Two Destinies Converge (Perkenalan Mempelai)

* **Panjang Scroll:** `200vh`
* **Koreografi Visual:**
  * **Progress 0% - 30%:** Muncul kutipan suci tentang jodoh dan cinta (Playfair Display Italic) yang memudar masuk dari tengah.
  * **Progress 30% - 70%:** 
    * Dari sisi kiri layar: Foto kubah melengkung (*arch frame*) mempelai pria meluncur perlahan masuk disertai nama dan nama keluarga.
    * Dari sisi kanan layar: Foto mempelai wanita meluncur masuk dari sisi kanan dengan ritme yang seimbang.
  * **Progress 70% - 100%:** Kedua foto mendekat ke tengah, sebuah ornamen ampersand (`&`) emas mewah berdenyut di antara keduanya, menyatukan profil keduanya menjadi satu kesatuan yang harmonis.

---

### Chapter II: The Chronicle of Us (Kisah Cinta Interaktif)

* **Panjang Scroll:** `300vh`
* **Koreografi Visual (Pinned Center Stage):**
  * Di latar belakang, terdapat garis waktu emas tipis yang tumbuh memanjang ke bawah seiring putaran scroll.
  * Di layar tengah yang terkunci (*pinned*), kartu cerita berganti secara dinamis tanpa berpindah layar:
    1. **Milestone 1 (Tahun Pertama Bertemu):** Foto pertama bernuansa polaroid nostalgia meluncur masuk, teks kisah pertemuan pertama terurai halus.
    2. **Milestone 2 (Hari Lamaran / Komitmen):** Foto milestone 1 memudar menyusut, foto lamaran mekar menggantikannya dengan cincin emas bersinar lembut.
    3. **Milestone 3 (Menuju Hari Bahagia):** Transisi ke potret pre-wedding modern dengan hitungan hari menuju pelaminan.

---

### Chapter III: The Sacred Union (Waktu & Tempat Ijab Qobul)

* **Panjang Scroll:** `200vh`
* **Koreografi Visual:**
  * **Tahap 1 (Countdown Focus):** Jarum jam atau counter hari-jam-menit-detik muncul dengan efek angka menggelinding vertikal (*numeric roll-in*), menciptakan rasa antisipasi yang hangat.
  * **Tahap 2 (The Invitation Cards):** Dua kartu kaca buram (*glassmorphic card*) terbelah:
    * Kartu Kiri: **Akad Nikah / Pemberkatan** (Waktu, Busana, dan Tempat).
    * Kartu Kanan: **Resepsi Pernikahan** (Sesi Kehadiran & Jamuan).
  * **Tahap 3 (Interactive Controls):** Tombol aksi emas timbul: *"Buka Google Maps"* dan *"Simpan ke Kalender"* membesar lembut mengundang klik.

---

### Chapter IV: Echoes of Joy (Galeri Parallax Horisontal)

* **Panjang Scroll:** `250vh`
* **Mekanik Horizontal-in-Vertical:**
  * Tamu tetap melakukan scroll ke bawah secara alami (*vertical scroll*), tetapi konten galeri bergeser mulus secara horizontal ke samping (*horizontal translation `x: 0% → -60%`*).
  * Menampilkan deretan foto pre-wedding dengan orientasi landscape dan portrait selang-seling.
  * **Depth of Field Effect:** Foto yang berada tepat di tengah layar berukuran 100% dengan ketajaman penuh, sementara foto di sisi kiri dan kanan sedikit menyusut (`scale: 0.88`) dan agak redup (`opacity: 0.6`), memberikan kesan kedalaman kamera profesional.
  * Setiap foto dapat diklik untuk membuka pratinjau *fullscreen lightbox*.

---

### Chapter V: Feast of Blessings (RSVP & Buku Ucapan Real-Time)

* **Panjang Scroll:** Aliran normal (*Natural flow*)
* **Koreografi Visual:**
  * Formulir RSVP bergaya kartu mewah dengan selector kehadiran interaktif (*"Pasti Hadir"* beraksen hijau sage, *"Berhalangan"* beraksen blush rose).
  * Saat tombol *"Kirim Doa Restu"* ditekan:
    * Letupan partikel konfeti emas berkilau (*Champagne Confetti Pop*).
    * Kartu ucapan tamu baru langsung meluncur masuk (*slide-down*) ke posisi teratas daftar doa secara *real-time* berkat sinkronisasi Firebase Firestore.

---

### Epilogue: Tokens of Love (Amplop Digital & Salam Penutup)

* **Panjang Scroll:** Aliran normal
* **Koreografi Visual:**
  * Amplop digital interaktif 3D: Kartu ATM perbankan (BCA/Mandiri) tampak terselip di dalam saku amplop dan terdorong naik saat di-hover/di-tap.
  * Tombol *"Salin Nomor Rekening"* memberikan umpan balik visual instan.
  * Tampilan kode QRIS dengan frame emas mewah.
  * Pesan penutup penuh rasa syukur dari kedua mempelai beserta tanda tangan kaligrafi digital yang tergambar secara otomatis (*SVG path stroke draw*).

---

## 3. Komponen Pendukung: The Floating Quick-Access HUD

Agar tamu yang ingin langsung mencari lokasi atau melakukan konfirmasi tidak perlu menggulir berulang kali, kita menyertakan **Bottom Navigation Dock** mengambang yang ramping dan elegan di bagian bawah layar ponsel:

```
+--------------------------------------------------------------+
|  [♫ Disk]   (Kalender)   (Akad & Resepsi)   (Maps)   (RSVP)   |
+--------------------------------------------------------------+
```

* **Frosted Glass Blur:** `backdrop-filter: blur(16px); background: rgba(253, 251, 247, 0.85);`
* **Ukuran Minimalis:** Ketinggian hanya `54px`, tidak menghalangi konten cerita.
* **Auto-Hide on Fast Scroll:** Menyembunyikan diri saat pengguna menggulir cepat, dan muncul kembali saat scroll berhenti.

---

## 4. Arsitektur Teknis Implementasi (Framer Motion + React)

Berikut adalah pola kode standar untuk mengimplementasikan scrollytelling di EverAfter:

```tsx
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export function ChapterCouple() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress within this 200vh section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Transform mapping: 0% -> 50% -> 100%
  const groomX = useTransform(scrollYProgress, [0.2, 0.6], ["-100%", "0%"]);
  const brideX = useTransform(scrollYProgress, [0.2, 0.6], ["100%", "0%"]);
  const quoteOpacity = useTransform(scrollYProgress, [0.05, 0.25, 0.4], [0, 1, 0]);
  const ampersandScale = useTransform(scrollYProgress, [0.6, 0.85], [0, 1]);

  return (
    <div ref={containerRef} className="relative h-[200vh] bg-ivory-100">
      {/* Sticky Viewport Stage */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        
        {/* Quote Layer */}
        <motion.p style={{ opacity: quoteOpacity }} className="absolute text-center font-serif text-xl text-charcoal-700">
          "Dua jiwa, satu detak, menuju ikrar abadi..."
        </motion.p>

        {/* Groom Profile */}
        <motion.div style={{ x: groomX }} className="w-1/2 p-4 text-center">
          <div className="aspect-[3/4] rounded-t-full overflow-hidden border border-gold-500/30">
            <img src="/groom.jpg" alt="Mempelai Pria" className="w-full h-full object-cover" />
          </div>
          <h3 className="font-serif text-2xl mt-4 text-charcoal-900">Romeo Montague</h3>
        </motion.div>

        {/* Center Ampersand */}
        <motion.span style={{ scale: ampersandScale }} className="absolute font-cursive text-5xl text-gold-500 z-10">
          &
        </motion.span>

        {/* Bride Profile */}
        <motion.div style={{ x: brideX }} className="w-1/2 p-4 text-center">
          <div className="aspect-[3/4] rounded-t-full overflow-hidden border border-gold-500/30">
            <img src="/bride.jpg" alt="Mempelai Wanita" className="w-full h-full object-cover" />
          </div>
          <h3 className="font-serif text-2xl mt-4 text-charcoal-900">Juliet Capulet</h3>
        </motion.div>

      </div>
    </div>
  );
}
```

---

## 5. Optimasi Kinerja & Kompatibilitas Mobile

1. **GPU Acceleration Only:** Semua animasi scrollytelling wajib hanya memanipulasi properti `transform` (`x`, `y`, `scale`, `rotate`) dan `opacity`. Hindari menganimasikan `width`, `height`, atau `top/left` agar tidak memicu *layout reflow* yang membuat patah-patah di ponsel.
2. **Reduced Motion Alternative:**
   ```tsx
   import { useReducedMotion } from 'framer-motion';
   const shouldReduceMotion = useReducedMotion();
   // Jika aktif, matikan pinning dan tampilkan layout stack vertikal standar
   ```
3. **Image Preloading:** Foto-foto untuk Chapter I & II di-preload di fase cover agar tidak ada momen gambar kosong saat transisi scroll sedang berjalan.

