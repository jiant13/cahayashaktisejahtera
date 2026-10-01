/** Konten halaman /squidoctopus.
 *
 *  Sumber: Company_Profile_PT_Cahaya_Shakti_Sejahtera_Squid_Octopus.docx
 *  (folder 06-Mitra).
 *
 *  Sengaja TIDAK ditampilkan:
 *  - Daftar harga FOB USD/kg. Dokumen sumber sendiri menyebutnya indikatif,
 *    tidak mengikat, dan hanya berlaku 7 hari. Di website harga itu cepat basi.
 *  - Catatan strategi harga ("positioned around recent ... benchmarks").
 *  - Sertifikasi apa pun. Dokumen sumber tidak mengklaimnya.
 *
 *  Ukuran yang di dokumen tertulis berbeda antara dua tabel (squid tube,
 *  whole cleaned squid) diambil rentang yang paling lebar.
 *
 *  Belum ada foto produk yang bisa dipakai: foto cumi yang tersedia memakai
 *  watermark pihak lain, dan sumber foto gurita tidak jelas.
 */

import type { Locale } from '../site';

export const SQUIDOCTOPUS = {
  id: {
    meta: {
      title: 'Cahaya Squid & Octopus — Cumi & Gurita Beku untuk Ekspor | PT Cahaya Shakti Sejahtera',
      description:
        'Cumi-cumi dan gurita beku dari Indonesia: whole round, whole cleaned, tube, ring, tentakel, baby octopus, dan potongan. IQF, block, atau IVP. Basis FOB Indonesia.',
    },
    nav: [
      { label: 'Cumi', href: '#cumi' },
      { label: 'Gurita', href: '#gurita' },
      { label: 'Spesifikasi', href: '#spesifikasi' },
      { label: 'Mutu', href: '#mutu' },
      { label: 'Ketentuan', href: '#ketentuan' },
      { label: 'Penawaran', href: '#penawaran' },
    ],
    waMessage: 'Halo Cahaya Squid & Octopus, saya ingin menanyakan harga cumi / gurita beku. Kebutuhan saya:',
    hero: {
      eyebrow: 'Cumi-cumi & Gurita Beku',
      title: 'Dari laut Indonesia, dalam bentuk yang Anda minta.',
      lead: 'Cumi dan gurita beku untuk importir, distributor, grosir, HORECA, central kitchen, ritel frozen food, dan industri pengolahan. Ukuran, bentuk olahan, glazing, dan kemasan mengikuti spesifikasi pembeli.',
      cta: 'Minta penawaran',
      ctaSecond: 'Lihat produk',
    },
    highlights: [
      { value: '10', unit: 'Bentuk', label: 'Olahan cumi dan gurita' },
      { value: '0–10', unit: '%', label: 'Glazing, atau sesuai pembeli' },
      { value: '−18', unit: '°C', label: 'Suhu simpan maksimum' },
      { value: '18–24', unit: 'Bulan', label: 'Umur simpan umumnya' },
    ],
    intro: {
      eyebrow: 'Tentang Divisi',
      title: 'Rantai pasok yang dikoordinasikan, bukan sekadar dibelikan.',
      body: [
        'Pasokan kami dibangun lewat jaringan sumber bahan baku, mitra processing, cold storage, dan logistik. Spesifikasi dikonfirmasi lebih dulu sebelum produksi atau pengadaan, supaya barang yang tiba sama dengan yang Anda pesan.',
        'Terbuka untuk pesanan percobaan maupun kontrak pasokan berkala.',
      ],
      points: [
        { name: 'Spesifikasi fleksibel', desc: 'Ukuran, olahan, glazing, kemasan, dan label pribadi bisa dibicarakan.' },
        { name: 'Dukungan ekspor', desc: 'Dokumen komersial dan koordinasi pengiriman.' },
        { name: 'Fokus mutu', desc: 'Kesegaran, grading, berat, kemasan, dan suhu beku dikontrol.' },
        { name: 'Rantai dingin', desc: 'Penanganan beku dan kontainer reefer sesuai kebutuhan produk.' },
      ],
    },
    squid: {
      eyebrow: 'Cumi-cumi Beku',
      title: 'Lima bentuk, dari utuh sampai siap masak.',
      latin: 'Loligo spp. dan spesies sejenis, dikonfirmasi per lot',
      lead: 'Dipakai luas untuk food service, ritel, grosir seafood, restoran, industri frozen food, dan pengolahan lanjutan.',
      headers: ['Produk', 'Olahan', 'Ukuran / grade', 'Pembekuan', 'Kemasan'],
      rows: [
        ['Whole Round Squid', 'Utuh, belum dibersihkan', '100–200 · 200–300 · 300–500 · 500 g ke atas', 'IQF / Block', '10 kg/karton'],
        ['Whole Cleaned Squid', 'Utuh, sudah dibersihkan', '200–300 · 300–500 · 500 g ke atas', 'IQF', '10 kg/karton'],
        ['Squid Tube', 'Kepala & tentakel dibuang, tabung bersih', 'U5 · U10 · U20 atau custom', 'IQF', '5–10 kg/karton'],
        ['Squid Ring', 'Tabung bersih dipotong cincin', 'Diameter & tebal custom', 'IQF', '5–10 kg/karton'],
        ['Squid Tentacles', 'Tentakel terpisah, bersih', 'Campur / grade', 'IQF / Block', '10 kg/karton'],
      ],
      qualityTitle: 'Yang diperiksa',
      quality: [
        'Warna dan tampilan alami sesuai spesies',
        'Tanpa bau tidak normal',
        'Tekstur padat setelah dicairkan',
        'Grading konsisten dalam toleransi yang disepakati',
        'Kemasan ekspor bersih dan label terbaca',
        'Suhu beku terjaga selama penyimpanan dan pengiriman',
      ],
    },
    octopus: {
      eyebrow: 'Gurita Beku',
      title: 'Dari baby octopus sampai gurita besar.',
      latin: 'Octopus spp., spesies dikonfirmasi per lot',
      lead: 'Dipasarkan ke importir dan grosir seafood, restoran, konsep sushi dan grill, ritel, hingga industri pengolahan.',
      headers: ['Produk', 'Ukuran / grade', 'Olahan', 'Pembekuan', 'Kemasan'],
      rows: [
        ['Whole Round Octopus', '500 g–1 kg/ekor', 'Utuh, beku', 'IQF / Block', '10–15 kg/karton'],
        ['Whole Cleaned Octopus', '1–2 kg · 2–3 kg · 3 kg ke atas', 'Dibersihkan, bentuk bola atau bunga (flower)', 'IQF', '10–15 kg/karton'],
        ['Baby Octopus', '20/40 · 40/60 atau custom', 'Baby octopus utuh, dibersihkan', 'IQF', '6 × 1,8–2 kg/karton'],
        ['Octopus Tentacles', 'Grade / custom', 'Tentakel terpisah, mentah beku', 'IQF / IVP', '10 kg/karton'],
        ['Octopus Cut Portion', 'Potongan custom', 'Potongan bersih, siap diolah lanjut', 'IQF', '5–10 kg/karton'],
      ],
      note: 'Gurita berukuran besar yang sudah dibersihkan dan tentakel olahan umumnya bernilai lebih tinggi daripada gurita utuh mentah.',
    },
    specs: {
      eyebrow: 'Spesifikasi Standar',
      title: 'Berlaku untuk cumi dan gurita.',
      headers: ['Parameter', 'Spesifikasi'],
      rows: [
        ['Kondisi', 'Beku, food grade, layak konsumsi; mentah kecuali disebutkan lain'],
        ['Asal', 'Indonesia'],
        ['Pembekuan', 'IQF, Block, atau IVP tergantung produk'],
        ['Glazing', '0–10% atau sesuai spesifikasi pembeli'],
        ['Suhu simpan', '−18°C atau lebih dingin'],
        ['Umur simpan', 'Umumnya 18–24 bulan, tergantung spesifikasi processor'],
        ['Kemasan', 'Kantong dalam food grade + master karton ekspor'],
        ['Label', 'Nama produk, ukuran, berat bersih, tanggal produksi & kedaluwarsa, asal, dan merek pembeli'],
        ['Label pribadi', 'Tersedia, tergantung MOQ dan kemampuan processor'],
      ],
      optionsTitle: 'Pilihan olahan & kemasan',
      processing: {
        title: 'Olahan',
        items: ['Whole round', 'Whole cleaned', 'Gutted', 'Headless', 'Skin-on / skinless', 'Tube', 'Ring', 'Tentakel', 'Cut portion', 'Flower type', 'IQF', 'Block frozen', 'IVP'],
      },
      packaging: {
        title: 'Kemasan',
        items: ['Kantong PE per ekor', 'Inner bag 1 kg', 'Inner bag 1,8–2 kg', 'Kantong vakum', 'Bulk pack', 'Master karton 5 kg', '10 kg', '12 kg', '15 kg', 'Ukuran karton custom'],
      },
      custom:
        'Kirimkan lembar target spesifikasi Anda. Kami sesuaikan bentuk produk, ukuran atau count, berat bersih, glazing, kemasan dalam, master karton, label, dan palletisasi dengan kemampuan processing dan regulasi negara tujuan.',
    },
    quality: {
      eyebrow: 'Kendali Mutu & Rantai Dingin',
      title: 'Delapan titik kontrol, dari bahan baku sampai kapal.',
      lead: 'Mutu seafood beku ditentukan oleh kesegaran bahan baku, kebersihan proses, kinerja pembekuan, keutuhan kemasan, dan kontrol suhu.',
      steps: [
        { name: 'Bahan baku', desc: 'Kesegaran, spesies, kondisi visual, dan ukuran diperiksa.' },
        { name: 'Processing', desc: 'Pembersihan dan pemotongan sesuai bentuk produk yang disepakati.' },
        { name: 'Grading', desc: 'Ukuran dan count dikelompokkan sesuai spesifikasi pembeli.' },
        { name: 'Pembekuan', desc: 'IQF atau block dipilih sesuai kebutuhan produk.' },
        { name: 'Pengemasan', desc: 'Berat bersih, kemasan dalam, master karton, dan label diverifikasi.' },
        { name: 'Cold storage', desc: 'Produk beku dijaga pada −18°C atau lebih dingin.' },
        { name: 'Stuffing', desc: 'Persiapan dan pemuatan kontainer reefer dikoordinasikan.' },
        { name: 'Pengiriman', desc: 'Dokumen dan pergerakan kargo dikoordinasikan sampai tujuan.' },
      ],
      paramsTitle: 'Parameter mutu',
      params: [
        'Kesegaran dan tampilan alami',
        'Tanpa bau tidak normal',
        'Kebersihan produk',
        'Konsistensi ukuran',
        'Berat bersih akurat',
        'Persentase glazing sesuai kesepakatan',
        'Keutuhan kemasan',
        'Label yang benar',
        'Kontrol suhu beku',
        'Inspeksi foto / video bila diperlukan',
      ],
      docNote:
        'Dokumen kesehatan, sanitasi, asal barang, dan dokumen regulasi lainnya bergantung pada produk, persetujuan processor, negara tujuan, dan aturan impor yang berlaku. Daftar finalnya dikonfirmasi sebelum pesanan dikunci.',
    },
    terms: {
      eyebrow: 'Ketentuan Komersial & Ekspor',
      title: 'Kerangka dari pertanyaan sampai pengiriman.',
      headers: ['Ketentuan', 'Umumnya'],
      rows: [
        ['Basis harga', 'FOB Indonesia, kecuali disebutkan lain'],
        ['Pelabuhan muat', 'Tanjung Priok / Surabaya, atau pelabuhan lain yang disepakati'],
        ['MOQ', 'Bisa dinegosiasikan, tergantung produk dan olahan'],
        ['Kontainer', 'Reefer 20 ft / 40 ft sesuai rencana pengiriman'],
        ['Pembayaran', 'Disepakati dalam penawaran resmi / kontrak penjualan'],
        ['Masa berlaku harga', '7 hari, karena harga bahan baku seafood mudah berubah'],
        ['Persiapan produksi', 'Tergantung ketersediaan bahan baku dan spesifikasi final'],
        ['Inspeksi', 'Inspeksi pembeli atau pihak ketiga bisa dibicarakan'],
        ['Dokumen', 'Commercial Invoice, Packing List, B/L, dan dokumen ekspor pendukung yang relevan'],
      ],
      howTitle: 'Cara memesan',
      how: [
        'Kirim pertanyaan produk dan pelabuhan tujuan.',
        'Konfirmasi spesies/bentuk produk, ukuran, glazing, kemasan, dan kuantitas.',
        'Terima penawaran resmi lengkap dengan Incoterm dan masa berlaku.',
        'Konfirmasi sampel, foto, video, atau spesifikasi bila perlu.',
        'Tanda tangani Sales Contract / Purchase Order.',
        'Produksi atau persiapan kargo dan pemeriksaan mutu.',
        'Stuffing, pengiriman, dan dokumen ekspor.',
      ],
    },
    quote: {
      eyebrow: 'Minta Penawaran',
      title: 'Sebutkan spesifikasi Anda.',
      lead: 'Harga mengikuti musim, spesies, komposisi ukuran, glazing, kemasan, volume, pelabuhan muat, dan tujuan. Semakin lengkap datanya, semakin cepat dan tepat penawarannya.',
      checklist: [
        'Produk dan spesies',
        'Bentuk olahan',
        'Ukuran atau count',
        'Glazing dan berat bersih',
        'Kemasan dalam dan master karton',
        'Kuantitas',
        'Pelabuhan tujuan dan Incoterm',
        'Dokumen yang dibutuhkan',
      ],
      waCta: 'Chat WhatsApp',
      emailCta: 'Kirim surel',
    },
    faq: {
      eyebrow: 'Pertanyaan Umum',
      title: 'Yang paling sering ditanyakan.',
      items: [
        {
          q: 'Kenapa harga tidak dicantumkan?',
          a: 'Harga cumi dan gurita bergerak mengikuti musim dan ketersediaan bahan baku, jadi penawaran kami umumnya hanya berlaku 7 hari. Kirim spesifikasi Anda dan kami beri harga FOB terbaru.',
        },
        {
          q: 'Berapa kuantitas minimum pemesanan?',
          a: 'Bisa dinegosiasikan dan bergantung pada produk serta olahannya. Kami terbuka untuk pesanan percobaan sebelum kontrak pasokan berkala.',
        },
        {
          q: 'Apakah bisa melihat produk sebelum kirim?',
          a: 'Bisa. Kami mendukung inspeksi lewat foto dan video, dan inspeksi oleh pembeli atau pihak ketiga dapat dibicarakan.',
        },
        {
          q: 'Bisakah memakai label kami sendiri?',
          a: 'Label pribadi tersedia, tergantung MOQ dan kemampuan processor.',
        },
        {
          q: 'Dari pelabuhan mana barang dikirim?',
          a: 'Umumnya Tanjung Priok atau Surabaya. Pelabuhan lain di Indonesia bisa disepakati dalam penawaran.',
        },
      ],
    },
  },

  en: {
    meta: {
      title: 'Cahaya Squid & Octopus — Frozen Squid & Octopus for Export | PT Cahaya Shakti Sejahtera',
      description:
        'Frozen squid and octopus from Indonesia: whole round, whole cleaned, tube, ring, tentacles, baby octopus, and cut portions. IQF, block, or IVP. FOB Indonesia basis.',
    },
    nav: [
      { label: 'Squid', href: '#cumi' },
      { label: 'Octopus', href: '#gurita' },
      { label: 'Specification', href: '#spesifikasi' },
      { label: 'Quality', href: '#mutu' },
      { label: 'Terms', href: '#ketentuan' },
      { label: 'Quote', href: '#penawaran' },
    ],
    waMessage: 'Hello Cahaya Squid & Octopus, I would like to request a frozen squid / octopus quotation. My requirement:',
    hero: {
      eyebrow: 'Frozen Squid & Octopus',
      title: 'From Indonesian waters, in the form you specify.',
      lead: 'Frozen squid and octopus for importers, distributors, wholesalers, HORECA, central kitchens, frozen food retail, and processors. Size, processing, glazing, and packing follow the buyer specification.',
      cta: 'Request a quote',
      ctaSecond: 'View products',
    },
    highlights: [
      { value: '10', unit: 'Forms', label: 'Squid and octopus products' },
      { value: '0–10', unit: '%', label: 'Glazing, or to buyer spec' },
      { value: '−18', unit: '°C', label: 'Maximum storage temperature' },
      { value: '18–24', unit: 'Months', label: 'Typical shelf life' },
    ],
    intro: {
      eyebrow: 'About the Division',
      title: 'A coordinated supply chain, not a one-off purchase.',
      body: [
        'Our supply is built through raw material sources, processing partners, cold storage, and logistics. Specifications are confirmed before production or procurement, so what arrives matches what you ordered.',
        'Open to trial orders as well as regular supply contracts.',
      ],
      points: [
        { name: 'Flexible specification', desc: 'Size, processing, glazing, packing, and private label can be discussed.' },
        { name: 'Export support', desc: 'Commercial documents and shipment coordination.' },
        { name: 'Quality focus', desc: 'Freshness, grading, weight, packing, and frozen temperature are controlled.' },
        { name: 'Cold chain', desc: 'Frozen handling and reefer shipment suited to the product.' },
      ],
    },
    squid: {
      eyebrow: 'Frozen Squid',
      title: 'Five forms, from whole round to ready-to-cook.',
      latin: 'Loligo spp. and related species, confirmed per lot',
      lead: 'Widely used in food service, retail, seafood wholesale, restaurants, frozen food manufacturing, and further processing.',
      headers: ['Product', 'Processing', 'Size / grade', 'Freezing', 'Packing'],
      rows: [
        ['Whole Round Squid', 'Whole, uncleaned', '100–200 · 200–300 · 300–500 · 500 g up', 'IQF / Block', '10 kg/ctn'],
        ['Whole Cleaned Squid', 'Cleaned whole body', '200–300 · 300–500 · 500 g up', 'IQF', '10 kg/ctn'],
        ['Squid Tube', 'Head & tentacles removed, cleaned tube', 'U5 · U10 · U20 or custom', 'IQF', '5–10 kg/ctn'],
        ['Squid Ring', 'Cleaned tube cut into rings', 'Custom diameter & thickness', 'IQF', '5–10 kg/ctn'],
        ['Squid Tentacles', 'Separated tentacles, cleaned', 'Mixed / graded', 'IQF / Block', '10 kg/ctn'],
      ],
      qualityTitle: 'What we check',
      quality: [
        'Natural, species-appropriate colour and appearance',
        'No abnormal odour',
        'Firm texture after thawing',
        'Consistent grading within agreed tolerance',
        'Clean export packing and readable labels',
        'Frozen temperature held through storage and shipment',
      ],
    },
    octopus: {
      eyebrow: 'Frozen Octopus',
      title: 'From baby octopus to large whole octopus.',
      latin: 'Octopus spp., species confirmed per lot',
      lead: 'Supplied to importers and seafood wholesalers, restaurants, sushi and grill concepts, retail, and the processing industry.',
      headers: ['Product', 'Size / grade', 'Processing', 'Freezing', 'Packing'],
      rows: [
        ['Whole Round Octopus', '500 g–1 kg/pc', 'Whole round, frozen', 'IQF / Block', '10–15 kg/ctn'],
        ['Whole Cleaned Octopus', '1–2 kg · 2–3 kg · 3 kg up', 'Cleaned / gutted, ball or flower type', 'IQF', '10–15 kg/ctn'],
        ['Baby Octopus', '20/40 · 40/60 or custom', 'Whole cleaned baby octopus', 'IQF', '6 × 1.8–2 kg/ctn'],
        ['Octopus Tentacles', 'Graded / custom', 'Separated tentacles, raw frozen', 'IQF / IVP', '10 kg/ctn'],
        ['Octopus Cut Portion', 'Custom cut', 'Cleaned cut portion, for further processing', 'IQF', '5–10 kg/ctn'],
      ],
      note: 'Larger cleaned octopus and value-added tentacles usually command higher prices than whole round raw material.',
    },
    specs: {
      eyebrow: 'Standard Specification',
      title: 'Applies to squid and octopus.',
      headers: ['Parameter', 'Specification'],
      rows: [
        ['Condition', 'Frozen, food grade, fit for human consumption; raw unless otherwise stated'],
        ['Origin', 'Indonesia'],
        ['Freezing', 'IQF, Block, or IVP depending on product'],
        ['Glazing', '0–10% or to buyer specification'],
        ['Storage', '−18°C or below'],
        ['Shelf life', 'Typically 18–24 months, subject to processor specification'],
        ['Packing', 'Food-grade inner bag + export master carton'],
        ['Label', 'Product name, size, net weight, production & expiry date, origin, and buyer mark'],
        ['Private label', 'Available, subject to MOQ and processor capability'],
      ],
      optionsTitle: 'Processing & packing options',
      processing: {
        title: 'Processing',
        items: ['Whole round', 'Whole cleaned', 'Gutted', 'Headless', 'Skin-on / skinless', 'Tube', 'Ring', 'Tentacles', 'Cut portion', 'Flower type', 'IQF', 'Block frozen', 'IVP'],
      },
      packaging: {
        title: 'Packing',
        items: ['Individual PE bag', '1 kg inner bag', '1.8–2 kg inner bag', 'Vacuum bag', 'Bulk pack', '5 kg master carton', '10 kg', '12 kg', '15 kg', 'Custom carton size'],
      },
      custom:
        'Send us your target specification sheet. We align product form, size or count, net weight, glazing, inner pack, master carton, labelling, and palletisation with processing capability and destination regulations.',
    },
    quality: {
      eyebrow: 'Quality Control & Cold Chain',
      title: 'Eight control points, from raw material to vessel.',
      lead: 'Frozen seafood quality depends on raw material freshness, processing hygiene, freezing performance, packaging integrity, and temperature control.',
      steps: [
        { name: 'Raw material', desc: 'Freshness, species, visual condition, and size are checked.' },
        { name: 'Processing', desc: 'Cleaning and cutting to the agreed product form.' },
        { name: 'Grading', desc: 'Size and count grouped to buyer specification.' },
        { name: 'Freezing', desc: 'IQF or block freezing chosen to suit the product.' },
        { name: 'Packing', desc: 'Net weight, inner pack, master carton, and label are verified.' },
        { name: 'Cold storage', desc: 'Frozen product held at −18°C or below.' },
        { name: 'Stuffing', desc: 'Reefer container preparation and loading coordinated.' },
        { name: 'Shipment', desc: 'Documents and cargo movement coordinated to destination.' },
      ],
      paramsTitle: 'Quality parameters',
      params: [
        'Freshness and natural appearance',
        'No abnormal odour',
        'Product cleanliness',
        'Size consistency',
        'Accurate net weight',
        'Agreed glazing percentage',
        'Packaging integrity',
        'Correct labelling',
        'Frozen temperature control',
        'Photo / video inspection when required',
      ],
      docNote:
        'Health, sanitary, origin, and other regulatory documents depend on the product, processor approval, destination country, and applicable import rules. The final list is confirmed before the order is locked.',
    },
    terms: {
      eyebrow: 'Commercial & Export Terms',
      title: 'A framework from enquiry to shipment.',
      headers: ['Item', 'General term'],
      rows: [
        ['Price basis', 'FOB Indonesia unless stated otherwise'],
        ['Loading port', 'Tanjung Priok / Surabaya, or another agreed Indonesian port'],
        ['MOQ', 'Negotiable; depends on product and processing'],
        ['Container', '20 ft / 40 ft reefer according to shipment plan'],
        ['Payment', 'Agreed in the formal quotation / sales contract'],
        ['Price validity', '7 days, due to seafood raw material volatility'],
        ['Preparation', 'Subject to raw material availability and final specification'],
        ['Inspection', 'Buyer or third-party inspection can be discussed'],
        ['Documents', 'Commercial Invoice, Packing List, B/L, and supporting export documents as applicable'],
      ],
      howTitle: 'How to order',
      how: [
        'Send your product enquiry and destination port.',
        'Confirm species/product form, size, glazing, packing, and quantity.',
        'Receive a formal quotation with Incoterm and validity.',
        'Confirm sample, photo, video, or specification if required.',
        'Sign the Sales Contract / Purchase Order.',
        'Production or cargo preparation and quality checks.',
        'Stuffing, shipment, and export documentation.',
      ],
    },
    quote: {
      eyebrow: 'Request a Quote',
      title: 'Tell us your specification.',
      lead: 'Prices follow season, species, size mix, glazing, packing, volume, loading port, and destination. The more complete the details, the faster and more accurate the quotation.',
      checklist: [
        'Product and species',
        'Processing form',
        'Size or count',
        'Glazing and net weight',
        'Inner packing and master carton',
        'Quantity',
        'Destination port and Incoterm',
        'Required documents',
      ],
      waCta: 'Chat on WhatsApp',
      emailCta: 'Send an email',
    },
    faq: {
      eyebrow: 'Frequently Asked',
      title: 'What buyers ask most.',
      items: [
        {
          q: 'Why are prices not listed?',
          a: 'Squid and octopus prices move with the season and raw material availability, so our quotations are typically valid for 7 days. Send us your specification and we will give you a current FOB price.',
        },
        {
          q: 'What is the minimum order quantity?',
          a: 'Negotiable, depending on product and processing. We are open to trial orders before a regular supply contract.',
        },
        {
          q: 'Can we see the product before shipment?',
          a: 'Yes. We support photo and video inspection, and buyer or third-party inspection can be discussed.',
        },
        {
          q: 'Can we use our own label?',
          a: 'Private label is available, subject to MOQ and processor capability.',
        },
        {
          q: 'Which port do you ship from?',
          a: 'Usually Tanjung Priok or Surabaya. Other Indonesian ports can be agreed in the quotation.',
        },
      ],
    },
  },
} as const;

export function squidoctopus(locale: Locale) {
  return SQUIDOCTOPUS[locale];
}
