/** Konten halaman /cahayareflexology.
 *  Layanan, harga, promo, dan lokasi diambil dari brosur resmi Cahaya Treatment.
 *
 *  TODO(konfirmasi): brosur memakai nama "Cahaya Treatment", route yang diminta
 *  klien "/cahayareflexology". Nama di halaman ini mengikuti route. */

import type { Locale } from '../site';

export const SPA = {
  id: {
    meta: {
      title: 'Cahaya Reflexology — Pijat, Refleksi & Bekam Panggilan ke Rumah | Depok & Bogor',
      description:
        'Pijat kebugaran, refleksi, bekam, kerok, lulur, dan totok wajah. Terapis laki-laki dan perempuan, panggilan ke rumah, buka setiap hari 09.00–20.00.',
    },
    nav: [
      { label: 'Layanan', href: '#layanan' },
      { label: 'Harga', href: '#harga' },
      { label: 'Cara Kerja', href: '#cara' },
      { label: 'Lokasi', href: '#lokasi' },
      { label: 'Reservasi', href: '#reservasi' },
    ],
    waMessage: 'Halo Cahaya Reflexology, saya ingin reservasi. Nama saya:',
    // {paket} diganti nama paket saat tombol di kartu harga ditekan.
    waMessagePackage: 'Halo Cahaya Reflexology, saya ingin reservasi {paket}. Nama saya:',
    hero: {
      eyebrow: 'Pijat · Refleksi · Bekam',
      title: 'Lelahnya diurus, tanpa Anda keluar rumah.',
      lead: 'Terapis kami datang ke rumah Anda di Depok dan Bogor. Tersedia terapis laki-laki dan perempuan, setiap hari pukul 09.00 sampai 20.00.',
      cta: 'Reservasi sekarang',
      ctaSecond: 'Lihat harga',
    },
    promo: {
      badge: 'Promo',
      title: 'Gratis pijat kebugaran 45 menit',
      sub: 'Khusus pelanggan pertama',
      second: 'Gratis ongkir',
      terms: 'Syarat & ketentuan berlaku',
      termsList: [
        'Share group WhatsApp dan status WhatsApp',
        'Follow media sosial kami di Instagram dan TikTok',
        'Berlaku selama kuota harian masih tersedia',
      ],
    },
    services: {
      eyebrow: 'Layanan',
      title: 'Enam perawatan, bisa dipadukan.',
      lead: 'Setiap paket di daftar harga adalah kombinasi dari perawatan berikut.',
      items: [
        { name: 'Pijat kebugaran', desc: 'Pijat seluruh badan untuk melepas pegal dan mengembalikan tenaga' },
        { name: 'Refleksi', desc: 'Penekanan titik pada telapak kaki dan tangan' },
        { name: 'Bekam', desc: 'Bekam 11 titik, dikerjakan terapis berpengalaman' },
        { name: 'Kerok', desc: 'Kerokan tradisional untuk meredakan masuk angin' },
        { name: 'Lulur', desc: 'Perawatan tubuh untuk membersihkan dan menghaluskan kulit' },
        { name: 'Totok wajah', desc: 'Penekanan titik wajah untuk melancarkan peredaran darah' },
      ],
    },
    pricing: {
      eyebrow: 'Daftar Harga',
      title: 'Harga promo, tanpa biaya tersembunyi.',
      lead: 'Setiap paket dipilih salah satu dari opsi yang tersedia. Berlaku setiap hari, pukul 09.00 sampai 20.00.',
      pickOne: 'Pilih salah satu',
      duration: 'Durasi',
      normal: 'Normal',
      promoLabel: 'Promo',
      book: 'Pesan paket ini',
      packages: [
        {
          name: 'Treatment 1',
          options: ['Pijat kebugaran seluruh badan', 'Bekam 11 titik, 45 menit'],
          minutes: '90',
          normal: '110',
          promo: '99',
        },
        {
          name: 'Treatment 2',
          options: ['Pijat + totok wajah', 'Pijat + kerok', 'Lulur + totok wajah'],
          minutes: '100',
          normal: '120',
          promo: '99',
        },
        {
          name: 'Treatment 3',
          options: ['Pijat + lulur', 'Pijat + bekam', 'Pijat + refleksi'],
          minutes: '120',
          normal: '150',
          promo: '119',
        },
        {
          name: 'Treatment 4',
          options: ['Pijat + refleksi + totok wajah', 'Pijat + refleksi + lulur', 'Pijat + refleksi + bekam'],
          minutes: '120',
          normal: '150',
          promo: '139',
        },
        {
          name: 'Treatment 5',
          options: ['Pijat + refleksi + totok wajah + lulur atau bekam'],
          minutes: '150',
          normal: '200',
          promo: '169',
        },
      ],
      currencyNote: 'Harga dalam ribuan rupiah.',
    },
    how: {
      eyebrow: 'Cara Kerja',
      title: 'Tiga langkah, selesai lewat WhatsApp.',
      steps: [
        { name: 'Kabari kami', desc: 'Kirim pesan berisi paket yang dipilih, alamat, dan jam yang diinginkan.' },
        { name: 'Kami konfirmasi', desc: 'Kami pastikan ketersediaan terapis, lalu sebutkan perkiraan waktu tiba.' },
        { name: 'Terapis datang', desc: 'Terapis membawa seluruh perlengkapan. Anda cukup menyiapkan tempat berbaring.' },
      ],
      points: [
        { name: 'Terapis laki-laki & perempuan', desc: 'Sebutkan preferensi Anda saat memesan' },
        { name: 'Panggilan ke rumah', desc: 'Melayani wilayah Depok dan Bogor' },
        { name: 'Buka setiap hari', desc: 'Senin sampai Minggu, 09.00 – 20.00' },
      ],
    },
    locations: {
      eyebrow: 'Lokasi',
      title: 'Kantor pusat dan dua cabang.',
      lead: 'Selain panggilan ke rumah, Anda juga bisa datang langsung.',
      items: [
        {
          label: 'Kantor Pusat',
          name: 'Cisalak, Depok',
          address: 'Ruko lantai 2, Jl. Raya Jakarta – Bogor No. 60, RW 05, Cisalak, Kec. Sukmajaya, Kota Depok, Jawa Barat 16416',
        },
        {
          label: 'Cabang',
          name: 'Cileungsi, Bogor',
          address: 'Kawasan Ruko Limus Pratama, Blok H No. 26, Kec. Limusnunggal, Cileungsi, Bogor',
        },
        {
          label: 'Cabang',
          name: 'Limo, Depok',
          address: 'Griya Limo Asri, Meruyung, Limo, Kota Depok',
        },
      ],
    },
    faq: {
      eyebrow: 'Pertanyaan Umum',
      title: 'Sebelum memesan.',
      items: [
        {
          q: 'Apakah bisa memilih terapis laki-laki atau perempuan?',
          a: 'Bisa. Sebutkan preferensi Anda saat memesan lewat WhatsApp, dan kami sesuaikan dengan ketersediaan terapis pada jam tersebut.',
        },
        {
          q: 'Perlu menyiapkan apa di rumah?',
          a: 'Cukup tempat berbaring yang nyaman dan ruang yang cukup untuk terapis bekerja. Seluruh perlengkapan, minyak, dan alat dibawa oleh terapis.',
        },
        {
          q: 'Wilayah mana saja yang dilayani?',
          a: 'Wilayah Depok dan Bogor. Untuk lokasi di luar itu, kirim alamat Anda lewat WhatsApp dan kami cek apakah masih terjangkau.',
        },
        {
          q: 'Berapa lama sebelumnya harus memesan?',
          a: 'Semakin awal semakin baik, terutama di akhir pekan. Pemesanan mendadak tetap kami usahakan selama masih ada terapis yang kosong.',
        },
        {
          q: 'Apakah promo bisa digabung?',
          a: 'Gratis pijat kebugaran 45 menit hanya berlaku untuk pelanggan pertama, dan selama kuota harian masih tersedia. Gratis ongkir berlaku dengan syarat yang tercantum.',
        },
      ],
    },
    booking: {
      eyebrow: 'Reservasi',
      title: 'Kirim satu pesan, kami urus sisanya.',
      lead: 'Sebutkan paket, alamat, jam yang diinginkan, dan preferensi terapis.',
      waCta: 'Reservasi via WhatsApp',
      hours: 'Senin – Minggu, 09.00 – 20.00',
    },
  },

  en: {
    meta: {
      title: 'Cahaya Reflexology — Home-Visit Massage, Reflexology & Cupping | Depok & Bogor',
      description:
        'Wellness massage, reflexology, cupping, coining, body scrub, and facial acupressure. Male and female therapists, home visits, open daily 09.00–20.00.',
    },
    nav: [
      { label: 'Services', href: '#layanan' },
      { label: 'Prices', href: '#harga' },
      { label: 'How It Works', href: '#cara' },
      { label: 'Locations', href: '#lokasi' },
      { label: 'Booking', href: '#reservasi' },
    ],
    waMessage: 'Hello Cahaya Reflexology, I would like to make a booking. My name is:',
    waMessagePackage: 'Hello Cahaya Reflexology, I would like to book {paket}. My name is:',
    hero: {
      eyebrow: 'Massage · Reflexology · Cupping',
      title: 'Your tiredness handled, without leaving home.',
      lead: 'Our therapists come to your home across Depok and Bogor. Male and female therapists available, every day from 09.00 to 20.00.',
      cta: 'Book now',
      ctaSecond: 'See prices',
    },
    promo: {
      badge: 'Promo',
      title: 'Free 45-minute wellness massage',
      sub: 'First-time customers only',
      second: 'Free travel charge',
      terms: 'Terms and conditions apply',
      termsList: [
        'Share our WhatsApp group and WhatsApp status',
        'Follow our social media on Instagram and TikTok',
        'Valid while the daily quota lasts',
      ],
    },
    services: {
      eyebrow: 'Services',
      title: 'Six treatments, freely combined.',
      lead: 'Every package in the price list is a combination of the treatments below.',
      items: [
        { name: 'Wellness massage', desc: 'Full-body massage to release tension and restore energy' },
        { name: 'Reflexology', desc: 'Pressure-point work on the soles of the feet and hands' },
        { name: 'Cupping', desc: '11-point cupping, performed by experienced therapists' },
        { name: 'Coining (kerok)', desc: 'Traditional coin therapy to relieve colds and chills' },
        { name: 'Body scrub', desc: 'Body treatment to cleanse and smooth the skin' },
        { name: 'Facial acupressure', desc: 'Facial pressure points to improve circulation' },
      ],
    },
    pricing: {
      eyebrow: 'Price List',
      title: 'Promo prices, no hidden charges.',
      lead: 'Choose one option per package. Available every day from 09.00 to 20.00.',
      pickOne: 'Choose one',
      duration: 'Duration',
      normal: 'Regular',
      promoLabel: 'Promo',
      book: 'Book this package',
      packages: [
        {
          name: 'Treatment 1',
          options: ['Full-body wellness massage', '11-point cupping, 45 minutes'],
          minutes: '90',
          normal: '110',
          promo: '99',
        },
        {
          name: 'Treatment 2',
          options: ['Massage + facial acupressure', 'Massage + coining', 'Body scrub + facial acupressure'],
          minutes: '100',
          normal: '120',
          promo: '99',
        },
        {
          name: 'Treatment 3',
          options: ['Massage + body scrub', 'Massage + cupping', 'Massage + reflexology'],
          minutes: '120',
          normal: '150',
          promo: '119',
        },
        {
          name: 'Treatment 4',
          options: [
            'Massage + reflexology + facial acupressure',
            'Massage + reflexology + body scrub',
            'Massage + reflexology + cupping',
          ],
          minutes: '120',
          normal: '150',
          promo: '139',
        },
        {
          name: 'Treatment 5',
          options: ['Massage + reflexology + facial acupressure + body scrub or cupping'],
          minutes: '150',
          normal: '200',
          promo: '169',
        },
      ],
      currencyNote: 'Prices in thousands of rupiah.',
    },
    how: {
      eyebrow: 'How It Works',
      title: 'Three steps, all over WhatsApp.',
      steps: [
        { name: 'Message us', desc: 'Send the package you want, your address, and your preferred time.' },
        { name: 'We confirm', desc: 'We check therapist availability and give you an estimated arrival time.' },
        { name: 'The therapist arrives', desc: 'They bring all the equipment. You only need somewhere to lie down.' },
      ],
      points: [
        { name: 'Male & female therapists', desc: 'State your preference when booking' },
        { name: 'Home visits', desc: 'Serving the Depok and Bogor areas' },
        { name: 'Open every day', desc: 'Monday to Sunday, 09.00 – 20.00' },
      ],
    },
    locations: {
      eyebrow: 'Locations',
      title: 'A head office and two branches.',
      lead: 'Besides home visits, you are welcome to come to us.',
      items: [
        {
          label: 'Head Office',
          name: 'Cisalak, Depok',
          address: 'Second-floor shophouse, Jl. Raya Jakarta – Bogor No. 60, RW 05, Cisalak, Sukmajaya, Depok, West Java 16416',
        },
        {
          label: 'Branch',
          name: 'Cileungsi, Bogor',
          address: 'Limus Pratama Shophouse Area, Block H No. 26, Limusnunggal, Cileungsi, Bogor',
        },
        {
          label: 'Branch',
          name: 'Limo, Depok',
          address: 'Griya Limo Asri, Meruyung, Limo, Depok',
        },
      ],
    },
    faq: {
      eyebrow: 'Frequently Asked',
      title: 'Before you book.',
      items: [
        {
          q: 'Can I choose a male or female therapist?',
          a: 'Yes. State your preference when booking on WhatsApp and we will match it against therapist availability for that time slot.',
        },
        {
          q: 'What do I need to prepare at home?',
          a: 'Just a comfortable place to lie down and enough room for the therapist to work. All equipment, oils, and tools are brought by the therapist.',
        },
        {
          q: 'Which areas do you serve?',
          a: 'The Depok and Bogor areas. For locations outside that, send us your address on WhatsApp and we will check whether it is still within reach.',
        },
        {
          q: 'How far in advance should I book?',
          a: 'The earlier the better, especially at weekends. We will still try to accommodate last-minute bookings if a therapist is free.',
        },
        {
          q: 'Can the promos be combined?',
          a: 'The free 45-minute wellness massage applies to first-time customers only, while the daily quota lasts. The free travel charge applies under the stated conditions.',
        },
      ],
    },
    booking: {
      eyebrow: 'Booking',
      title: 'One message, and we handle the rest.',
      lead: 'Tell us the package, your address, preferred time, and therapist preference.',
      waCta: 'Book via WhatsApp',
      hours: 'Monday – Sunday, 09.00 – 20.00',
    },
  },
} as const;

export function spa(locale: Locale) {
  return SPA[locale];
}
