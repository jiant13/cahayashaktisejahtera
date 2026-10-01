/** Konten halaman /milkfish.
 *
 *  Sumber: PT_Cahaya_Shakti_Sejahtera_Milkfish_Company_Profile_Premium.docx
 *  (folder 06-Mitra). Dokumen aslinya berbahasa Inggris; versi Indonesia
 *  diterjemahkan dari sana.
 *
 *  Dokumen menyebut bandeng diambil dari jaringan produsen di Indonesia, bukan
 *  dari tambak sendiri. Karena itu halaman ini sengaja tidak memakai klaim
 *  "tambak sendiri" milik halaman udang, dan tidak menempelkan sertifikasi udang.
 *  Harga tidak dicantumkan — dokumen sumbernya pun hanya memberi harga lewat
 *  penawaran.
 */

import type { Locale } from '../site';

export const MILKFISH = {
  id: {
    meta: {
      title: 'Cahaya Milkfish — Bandeng Utuh Beku untuk Ekspor | PT Cahaya Shakti Sejahtera',
      description:
        'Bandeng (Chanos chanos) utuh beku dari Indonesia. Ukuran 300 g sampai di atas 1 kg, kemasan PE per ekor, master karton 10–24 kg, kontainer reefer 20/40 ft.',
    },
    nav: [
      { label: 'Produk', href: '#produk' },
      { label: 'Kemasan', href: '#kemasan' },
      { label: 'Proses', href: '#proses' },
      { label: 'Pengiriman', href: '#pengiriman' },
      { label: 'Penawaran', href: '#penawaran' },
    ],
    waMessage: 'Halo Cahaya Milkfish, saya ingin menanyakan harga bandeng beku. Kebutuhan saya:',
    hero: {
      eyebrow: 'Bandeng Utuh Beku · Chanos chanos',
      title: 'Bandeng Indonesia, beku utuh, siap kontainer.',
      lead: 'Bandeng dipilih, disortir per ukuran, dan dibekukan untuk importir, distributor, grosir, supermarket, hotel, restoran, dan industri pengolahan. Ukuran, kemasan, dan label mengikuti pasar tujuan Anda.',
      cta: 'Minta penawaran',
      ctaSecond: 'Lihat ukuran',
    },
    highlights: [
      { value: '0,3–1+', unit: 'Kg / ekor', label: 'Rentang ukuran' },
      { value: '−18', unit: '°C', label: 'Suhu simpan maksimum' },
      { value: '10–24', unit: 'Kg', label: 'Pilihan master karton' },
      { value: '20 / 40', unit: 'Ft', label: 'Kontainer reefer' },
    ],
    product: {
      eyebrow: 'Produk',
      title: 'Satu produk, empat ukuran.',
      lead: 'Bandeng utuh dalam kondisi beku, disortir berdasarkan berat per ekor supaya isi setiap karton seragam.',
      specHeaders: ['Parameter', 'Spesifikasi'],
      specRows: [
        ['Produk', 'Bandeng utuh beku (frozen whole milkfish)'],
        ['Nama ilmiah', 'Chanos chanos'],
        ['Asal', 'Indonesia'],
        ['Kondisi', 'Beku, utuh (whole round)'],
        ['Suhu simpan', '−18°C atau lebih dingin'],
        ['Pembekuan', 'IQF atau beku sesuai spesifikasi pembeli'],
      ],
      sizeTitle: 'Pilihan ukuran',
      sizeHeaders: ['Grade', 'Berat rata-rata', 'Cocok untuk'],
      sizes: [
        ['Small', '300–500 g/ekor', 'Ritel, food service, pasar etnis'],
        ['Medium', '500–800 g/ekor', 'Ukuran utama grosir dan restoran'],
        ['Large', '800–1.000 g/ekor', 'Restoran premium dan grosir'],
        ['Extra Large', 'Di atas 1.000 g/ekor', 'Permintaan premium tertentu'],
      ],
      qualityTitle: 'Yang kami jaga',
      quality: [
        'Warna perak keabu-abuan alami, fisik ikan dalam kondisi baik',
        'Tekstur daging padat dengan karakter bandeng yang alami',
        'Grading konsisten sesuai ukuran yang disepakati',
        'Penanganan bersih dan penyimpanan beku yang benar',
        'Kemasan dan glazing mengikuti permintaan pembeli',
      ],
      custom:
        'Ukuran, kemasan, bahasa label, berat karton, dan merek bisa dibicarakan sebelum penawaran final.',
    },
    packing: {
      eyebrow: 'Kemasan',
      title: 'Satu ekor, satu kantong.',
      lead: 'Atas permintaan, setiap bandeng dikemas sendiri dalam kantong plastik PE bening sebelum masuk master karton.',
      points: [
        'Penanganan lebih bersih dan stok lebih mudah dikelola',
        'Ikan tidak saling menempel saat beku',
        'Mudah dihitung per ekor untuk dapur dan food service',
        'Tampilan rapi untuk distributor dan ritel',
        'Label pribadi dan cetak karton khusus bisa dibicarakan',
      ],
      cartonTitle: 'Master karton',
      cartons: ['10', '12', '20', '24'],
      cartonUnit: 'kg',
      cartonNote: 'Semua ukuran tersedia dan bisa disesuaikan.',
      tailor: 'Yang bisa disesuaikan: berat karton, kantong per ekor, bahasa label, merek, barcode, dan penanda ukuran.',
    },
    process: {
      eyebrow: 'Proses & Kendali Mutu',
      title: 'Delapan tahap, rantai dingin tidak putus.',
      steps: [
        { name: 'Seleksi bahan baku', desc: 'Dipilih berdasarkan kesegaran, kondisi fisik, ukuran, dan kesesuaian dengan pesanan.' },
        { name: 'Sortir & grading', desc: 'Dikelompokkan menurut berat dan ukuran supaya isi karton konsisten.' },
        { name: 'Pencucian', desc: 'Ditangani dengan prosedur higienis yang sesuai untuk seafood beku.' },
        { name: 'Kemas per ekor', desc: 'Bila diminta, setiap ikan dikemas sendiri dalam plastik PE bening.' },
        { name: 'Pembekuan', desc: 'Dibekukan sesuai metode yang dipilih dan dijaga tetap beku.' },
        { name: 'Master karton', desc: 'Dikemas ke master karton sesuai format berat bersih yang disepakati.' },
        { name: 'Cold storage', desc: 'Disimpan pada −18°C atau lebih dingin sampai persiapan muat.' },
        { name: 'Muat reefer', desc: 'Dimuat dengan prosedur kargo beku, suhu dan tata muat kontainer diperhatikan.' },
      ],
      qc: [
        { k: 'Ukuran', v: 'Grading konsisten' },
        { k: 'Suhu', v: 'Beku ≤ −18°C' },
        { k: 'Kemasan', v: 'Kemasan komersial yang aman' },
        { k: 'Telusur', v: 'Dokumen per pesanan dan batch' },
      ],
      note: 'Detail proses final dicocokkan dengan spesifikasi pembelian, persyaratan negara tujuan, dan pengaturan produksi sebelum pengiriman.',
    },
    shipping: {
      eyebrow: 'Pengiriman & Dokumen',
      title: 'Dari sampel sampai kontainer.',
      lead: 'Mulai dari sampel untuk evaluasi, pesanan percobaan untuk uji pasar, sampai pasokan rutin per kontainer reefer.',
      scale: [
        { name: 'Sampel', desc: 'Evaluasi produk dan konfirmasi spesifikasi' },
        { name: 'Pesanan percobaan', desc: 'Uji pasar dan validasi komersial' },
        { name: 'Pesanan curah', desc: 'Kontainer reefer, program pasokan berulang' },
      ],
      containerHeaders: ['Kontainer', 'Penggunaan umum', 'Muatan aktual tergantung'],
      containers: [
        ['Reefer 20 ft', 'Pengiriman komersial lebih kecil', 'Ukuran karton, berat kotor, batas pelayaran'],
        ['Reefer 40 ft', 'Pilihan utama ekspor curah', 'Format kemasan, muatan, palletisasi'],
      ],
      termsTitle: 'Incoterm',
      terms: [
        { name: 'FOB', desc: 'Free On Board — pelabuhan muat disepakati dalam penawaran.' },
        { name: 'CIF', desc: 'Cost, Insurance & Freight — pelabuhan tujuan disepakati dengan pembeli.' },
      ],
      docsTitle: 'Dokumen ekspor yang umum disiapkan',
      docs: [
        'Commercial Invoice',
        'Packing List',
        'Bill of Lading',
        'Certificate of Origin, bila diperlukan',
        'Dokumen kesehatan / sanitasi sesuai negara tujuan',
        'Spesifikasi produk dan dokumen pendukung',
      ],
      docsNote: 'Kebutuhan dokumen berbeda per negara dan otoritas impor. Daftar final diselaraskan dengan negara tujuan sebelum pengiriman.',
      segmentsTitle: 'Pembeli yang kami layani',
      segments: ['Importir seafood', 'Distributor', 'Grosir', 'Supermarket', 'Hotel', 'Restoran', 'Katering', 'Central kitchen', 'Pengolah seafood'],
    },
    quote: {
      eyebrow: 'Minta Penawaran',
      title: 'Kirim tujuh hal ini.',
      lead: 'Harga dihitung per penawaran, karena bergantung pada ukuran, kemasan, kuantitas, tujuan, ongkos kirim, dan kondisi pasar.',
      contactPerson: 'Narahubung: Sarah Ayomi Nurillah',
      checklist: [
        'Ukuran atau rentang berat per ekor',
        'Kemasan dan berat bersih per karton',
        'Kuantitas atau target volume kontainer',
        'Pelabuhan dan negara tujuan',
        'FOB atau CIF',
        'Kebutuhan label pribadi atau desain karton',
        'Sertifikat atau dokumen khusus negara tujuan',
      ],
      waCta: 'Chat WhatsApp',
      emailCta: 'Kirim surel',
    },
    faq: {
      eyebrow: 'Pertanyaan Umum',
      title: 'Yang paling sering ditanyakan.',
      items: [
        {
          q: 'Berapa harga bandeng beku?',
          a: 'Harga diberikan lewat penawaran resmi, karena bergantung pada ukuran, proses, kemasan, kuantitas, tujuan, ongkos kirim, dan kondisi pasar. Kirim data di atas dan kami hitungkan.',
        },
        {
          q: 'Apakah bisa mulai dari sampel atau pesanan kecil?',
          a: 'Bisa. Kami melayani sampel untuk evaluasi produk dan pesanan percobaan untuk uji pasar sebelum masuk ke pesanan per kontainer.',
        },
        {
          q: 'Bisakah memakai merek dan label kami sendiri?',
          a: 'Bisa dibicarakan. Label pribadi, bahasa label, barcode, cetak karton, dan berat karton disesuaikan sebelum penawaran final.',
        },
        {
          q: 'Incoterm apa yang dilayani?',
          a: 'FOB dan CIF. Pelabuhan muat dan tujuan disepakati dalam penawaran.',
        },
        {
          q: 'Berapa banyak yang muat dalam satu kontainer?',
          a: 'Tergantung ukuran karton, berat kotor, cara muat (palet atau lantai), serta batas dari perusahaan pelayaran dan negara tujuan. Kami susun rencana muatnya setelah kemasan disepakati.',
        },
      ],
    },
  },

  en: {
    meta: {
      title: 'Cahaya Milkfish — Frozen Whole Milkfish for Export | PT Cahaya Shakti Sejahtera',
      description:
        'Frozen whole milkfish (Chanos chanos) from Indonesia. Sizes from 300 g to over 1 kg, individual PE packing, 10–24 kg master cartons, 20/40 ft reefer containers.',
    },
    nav: [
      { label: 'Product', href: '#produk' },
      { label: 'Packing', href: '#kemasan' },
      { label: 'Process', href: '#proses' },
      { label: 'Shipment', href: '#pengiriman' },
      { label: 'Quote', href: '#penawaran' },
    ],
    waMessage: 'Hello Cahaya Milkfish, I would like to request a frozen milkfish quotation. My requirement:',
    hero: {
      eyebrow: 'Frozen Whole Milkfish · Chanos chanos',
      title: 'Indonesian milkfish, frozen whole, container ready.',
      lead: 'Milkfish selected, graded by size, and frozen for importers, distributors, wholesalers, supermarkets, hotels, restaurants, and processors. Size, packing, and labelling follow your destination market.',
      cta: 'Request a quote',
      ctaSecond: 'View sizes',
    },
    highlights: [
      { value: '0.3–1+', unit: 'Kg / piece', label: 'Size range' },
      { value: '−18', unit: '°C', label: 'Maximum storage temperature' },
      { value: '10–24', unit: 'Kg', label: 'Master carton options' },
      { value: '20 / 40', unit: 'Ft', label: 'Reefer containers' },
    ],
    product: {
      eyebrow: 'Product',
      title: 'One product, four sizes.',
      lead: 'Whole milkfish in frozen condition, graded by weight per piece so every carton stays uniform.',
      specHeaders: ['Parameter', 'Specification'],
      specRows: [
        ['Product', 'Frozen whole milkfish'],
        ['Scientific name', 'Chanos chanos'],
        ['Origin', 'Indonesia'],
        ['Condition', 'Frozen, whole round'],
        ['Storage temperature', '−18°C or below'],
        ['Freezing', 'IQF or frozen to buyer specification'],
      ],
      sizeTitle: 'Available sizes',
      sizeHeaders: ['Grade', 'Average weight', 'Recommended use'],
      sizes: [
        ['Small', '300–500 g/pc', 'Retail, food service, ethnic market'],
        ['Medium', '500–800 g/pc', 'Core wholesale and restaurant size'],
        ['Large', '800–1,000 g/pc', 'Premium restaurant and wholesale'],
        ['Extra Large', '1,000 g/pc and up', 'Selected premium demand'],
      ],
      qualityTitle: 'What we keep in check',
      quality: [
        'Natural silver-grey appearance and good physical condition',
        'Firm texture and natural milkfish characteristics',
        'Consistent grading to the agreed commercial size',
        'Clean handling and proper frozen storage',
        'Packing and glazing to buyer requirements',
      ],
      custom:
        'Size, packing, label language, carton weight, and branding can be discussed before the final quotation.',
    },
    packing: {
      eyebrow: 'Packing',
      title: 'One fish, one bag.',
      lead: 'On request, every milkfish is packed individually in a transparent PE bag before going into the master carton.',
      points: [
        'Cleaner handling and easier stock management',
        'Fish do not freeze together',
        'Simple piece-counting for kitchens and food service',
        'Neat presentation for distributors and retail',
        'Private label and custom carton print can be discussed',
      ],
      cartonTitle: 'Master carton',
      cartons: ['10', '12', '20', '24'],
      cartonUnit: 'kg',
      cartonNote: 'All sizes available and customisable.',
      tailor: 'Can be tailored: carton weight, individual bag, label language, brand, barcode, and size marking.',
    },
    process: {
      eyebrow: 'Process & Quality Control',
      title: 'Eight stages, an unbroken cold chain.',
      steps: [
        { name: 'Raw material selection', desc: 'Selected for freshness, physical condition, size, and fit with the order specification.' },
        { name: 'Sorting & grading', desc: 'Grouped by weight and size to keep carton contents consistent.' },
        { name: 'Washing', desc: 'Handled through hygienic procedures suited to frozen seafood.' },
        { name: 'Individual packing', desc: 'When requested, each fish is packed in its own transparent PE bag.' },
        { name: 'Freezing', desc: 'Frozen by the selected method and held under frozen conditions.' },
        { name: 'Master carton', desc: 'Packed into master cartons in the agreed net-weight format.' },
        { name: 'Cold storage', desc: 'Stored at −18°C or below until shipment preparation.' },
        { name: 'Reefer loading', desc: 'Loaded under frozen cargo procedures with attention to temperature and container plan.' },
      ],
      qc: [
        { k: 'Size', v: 'Consistent grading' },
        { k: 'Temp', v: 'Frozen at ≤ −18°C' },
        { k: 'Pack', v: 'Secure commercial packing' },
        { k: 'Trace', v: 'Order and batch documentation' },
      ],
      note: 'Final processing details are confirmed against the purchase specification, destination requirements, and production arrangement before shipment.',
    },
    shipping: {
      eyebrow: 'Shipment & Documents',
      title: 'From sample to container.',
      lead: 'From samples for evaluation and trial orders for market testing, through to repeat supply by reefer container.',
      scale: [
        { name: 'Sample', desc: 'Product evaluation and specification confirmation' },
        { name: 'Trial order', desc: 'Market testing and commercial validation' },
        { name: 'Bulk order', desc: 'Reefer container, repeat supply programme' },
      ],
      containerHeaders: ['Container', 'Typical use', 'Actual load depends on'],
      containers: [
        ['20 ft reefer', 'Smaller commercial shipments', 'Carton size, gross weight, line limits'],
        ['40 ft reefer', 'Main bulk export option', 'Packing format, payload, palletisation'],
      ],
      termsTitle: 'Incoterms',
      terms: [
        { name: 'FOB', desc: 'Free On Board — port of loading agreed in the quotation.' },
        { name: 'CIF', desc: 'Cost, Insurance & Freight — destination port agreed with the buyer.' },
      ],
      docsTitle: 'Typical export documents',
      docs: [
        'Commercial Invoice',
        'Packing List',
        'Bill of Lading',
        'Certificate of Origin, when required',
        'Health / sanitary documents to destination requirements',
        'Product specification and supporting documents',
      ],
      docsNote: 'Document requirements vary by country and importing authority. The final list is aligned with the destination before shipment.',
      segmentsTitle: 'Who we supply',
      segments: ['Seafood importers', 'Distributors', 'Wholesalers', 'Supermarkets', 'Hotels', 'Restaurants', 'Catering', 'Central kitchens', 'Seafood processors'],
    },
    quote: {
      eyebrow: 'Request a Quote',
      title: 'Send us these seven things.',
      lead: 'Prices are quoted per enquiry, as they depend on size, packing, quantity, destination, freight, and market conditions.',
      contactPerson: 'Contact person: Sarah Ayomi Nurillah',
      checklist: [
        'Size or weight range per fish',
        'Packing and net weight per carton',
        'Quantity or target container volume',
        'Destination port and country',
        'FOB or CIF',
        'Private label or artwork requirements',
        'Certificates or destination-specific documents',
      ],
      waCta: 'Chat on WhatsApp',
      emailCta: 'Send an email',
    },
    faq: {
      eyebrow: 'Frequently Asked',
      title: 'What buyers ask most.',
      items: [
        {
          q: 'What is the price of frozen milkfish?',
          a: 'Prices are given by formal quotation, as they depend on size, processing, packing, quantity, destination, freight, and market conditions. Send us the details above and we will price it.',
        },
        {
          q: 'Can we start with a sample or a small order?',
          a: 'Yes. We handle samples for product evaluation and trial orders for market testing before moving to container orders.',
        },
        {
          q: 'Can we use our own brand and label?',
          a: 'This can be discussed. Private label, label language, barcode, carton print, and carton weight are agreed before the final quotation.',
        },
        {
          q: 'Which incoterms do you serve?',
          a: 'FOB and CIF. Ports of loading and destination are agreed in the quotation.',
        },
        {
          q: 'How much fits in one container?',
          a: 'It depends on carton size, gross weight, loading method (palletised or floor-loaded), and limits set by the shipping line and destination. We draw up the loading plan once packing is agreed.',
        },
      ],
    },
  },
} as const;

export function milkfish(locale: Locale) {
  return MILKFISH[locale];
}
