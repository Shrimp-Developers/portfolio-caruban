# Portfolio Caruban

Portfolio Caruban adalah website portofolio dan landing page untuk Caruban Technology, dibangun menggunakan Next.js App Router dengan dukungan multi-bahasa dan animasi modern.

## Tentang Website

Website ini dibuat untuk menampilkan profil Caruban Technology dan layanan solusi digital mereka. Pengunjung dapat melihat portofolio proyek, layanan yang ditawarkan, paket harga, tim kerja, dan testimonial. Selain itu situs menyediakan halaman kontak serta dukungan bahasa Indonesia dan Inggris.

## Ringkasan Proyek

- `next` 16 dengan App Router
- `react` 19 + `typescript`
- `tailwindcss` v4 untuk styling utility-first
- `next-intl` untuk i18n dengan locale `en` dan `id`
- `framer-motion` untuk animasi UI
- `react-icons`, `@fortawesome/react-fontawesome`, dan `tech-stack-icons`

## Struktur Utama

- `app/layout.tsx`: layout global, metadata, font Google `Poppins`, dan `NextIntlClientProvider`
- `app/page.tsx`: halaman utama yang memuat semua section portofolio
- `app/contact/page.tsx`: halaman kontak terpisah
- `app/projects/page.tsx`: halaman daftar semua proyek
- `components/`: sekumpulan section UI, termasuk:
  - `Navbar/` - navigasi dengan mobile menu dan toggle bahasa
  - `HeroSection/` - hero utama
  - `TechStackSection/` - tampilan daftar teknologi
  - `ServiceSection/` - layanan yang ditawarkan
  - `ProjectSection/` - proyek unggulan di beranda
  - `AllProjectSection/` - koleksi proyek lengkap
  - `TeamSection/` - tim dan profil anggota
  - `FaqSection/` - FAQ
  - `ReviewSection/` - testimonial
  - `PriceSection/` - paket harga
  - `ContactSection/` - form kontak dan tautan sosial
  - `Footer/` - footer situs

## Data dan Konten

- `constants/index.tsx`: data statis untuk navigasi, proyek, paket harga, layanan, tim, teknologi, FAQ, dan kontak
- `messages/en/en.json` dan `messages/id/id.json`: string terjemahan untuk konten multi-bahasa
- `i18n/request.ts`: konfigurasi locale berdasarkan cookie pengguna

## Fitur Utama

- Navigasi `Navbar` dengan anchor link dan tombol kontak
- Toggle bahasa Inggris / Indonesia via `LanguageToggle`
- Halaman landing page terdiri dari:
  - Hero
  - Tech stack
  - Layanan
  - Proyek
  - Tim
  - FAQ
  - Testimoni
  - Harga
- Halaman kontak dengan form input dan ikon sosial
- Halaman semua proyek dengan daftar proyek dinamis
- Animasi interaktif menggunakan `framer-motion`

## Dependensi Kunci

- `next`
- `react`, `react-dom`
- `next-intl`
- `tailwindcss`
- `framer-motion`
- `lucide-react`
- `react-icons`
- `@fortawesome/react-fontawesome`
- `tech-stack-icons`

## Perintah NPM

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Cara Menjalankan

1. `npm install`
2. `npm run dev`
3. Buka `http://localhost:3000`

## Catatan

- Locale pengguna disimpan ke cookie `locale`
- Komponen `Navbar` mendukung menu mobile dan link ke halaman internal
- Banyak teks menggunakan kunci terjemahan di file `messages/*`
- Konten proyek dan harga dapat diperbarui di `constants/index.tsx`
