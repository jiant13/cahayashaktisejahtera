/** Konten halaman /charcoal.
 *
 *  Spesifikasi teknis arang diambil dari Company Profile PT Berkah Mandiri
 *  Indonesia (folder 06-Mitra), mitra produksi kami.
 *
 *  BRIKET: belum ada satupun data teknis di dokumen manapun. Selama
 *  `briketSpecs` masih kosong, halaman menampilkan kalimat "tersedia atas
 *  permintaan" alih-alih tabel kosong. Begitu datanya masuk, isi array-nya
 *  dan tabelnya muncul sendiri tanpa mengubah markup.
 */

import type { Locale } from '../site';

export const CHARCOAL = {
  id: {
    meta: {
      title: 'Cahaya Charcoal — Arang Batok Kelapa & Briket | PT Cahaya Shakti Sejahtera',
      description:
        'Arang batok kelapa dari karbonisasi terkontrol. Kadar karbon tetap min. 70%, abu maks. 3%, tanpa bahan kimia. Siap pasar domestik dan ekspor.',
    },
    nav: [
      { label: 'Produk', href: '#produk' },
      { label: 'Spesifikasi', href: '#spesifikasi' },
      { label: 'Penggunaan', href: '#penggunaan' },
      { label: 'Proses', href: '#proses' },
      { label: 'Mitra', href: '#mitra' },
      { label: 'Penawaran', href: '#penawaran' },
    ],
    waMessage:
      'Halo Cahaya Charcoal, saya ingin menanyakan harga arang batok kelapa. Kebutuhan saya:',
    hero: {
      eyebrow: 'Arang Batok Kelapa & Briket',
      title: 'Dibakar pelan, terbakar lama.',
      lead: 'Arang tempurung kelapa dari karbonisasi suhu tinggi dengan sirkulasi udara terbatas. Kadar karbon tinggi, abu rendah, tanpa campuran bahan kimia.',
      cta: 'Minta penawaran',
      ctaSecond: 'Lihat spesifikasi',
    },
    highlights: [
      { value: '70', unit: '% min', label: 'Karbon tetap' },
      { value: '3', unit: '% maks', label: 'Kadar abu' },
      { value: '15', unit: '% maks', label: 'Kadar air' },
      { value: '4–50', unit: 'Mesh', label: 'Rentang ukuran' },
    ],
    products: {
      eyebrow: 'Produk',
      title: 'Dua bentuk, satu bahan baku.',
      lead: 'Keduanya berasal dari tempurung kelapa pilihan tanpa campuran bahan kimia.',
      flake: {
        name: 'Arang Batok Pecahan',
        sub: 'Flake',
        desc: 'Bentuk pecahan tidak beraturan hasil karbonisasi tempurung kelapa utuh. Nyala stabil, panas merata, dan abunya sangat sedikit. Cocok untuk kebutuhan industri, komersial, maupun rumah tangga.',
        points: [
          '100% alami dari batok kelapa pilihan',
          'Nilai kalor tinggi, waktu bakar lebih lama',
          'Kadar abu rendah dan minim asap',
          'Ramah lingkungan, memanfaatkan limbah kelapa',
        ],
      },
      briket: {
        name: 'Briket',
        sub: 'Briquette',
        desc: 'Arang batok kelapa yang dipadatkan menjadi bentuk seragam untuk pembakaran yang lebih panjang dan konsisten. Tersedia atas permintaan.',
        // Kosongkan selama data teknis briket belum diterima dari klien.
        specs: [] as { k: string; v: string }[],
        pending:
          'Spesifikasi teknis briket — bentuk, dimensi, waktu bakar, kadar abu, dan kemasan — kami kirimkan atas permintaan. Hubungi kami untuk lembar spesifikasi dan sampel.',
      },
    },
    specs: {
      eyebrow: 'Spesifikasi Teknis',
      title: 'Angka yang bisa diuji.',
      lead: 'Nilai berikut berlaku untuk arang batok pecahan. Spesifikasi dapat disesuaikan dengan kebutuhan pembeli, termasuk kadar air, ukuran, kemasan, dan pelabelan.',
      headers: ['Parameter', 'Spesifikasi'],
      rows: [
        ['Kadar air (moisture)', 'Maks. 15%'],
        ['Kadar abu (ash content)', 'Maks. 3%'],
        ['Zat terbang (volatile matter)', 'Maks. 18%'],
        ['Karbon tetap (fixed carbon)', 'Min. 70%'],
        ['Kotoran (impurities)', 'Maks. 1%'],
        ['Ukuran (mesh)', '4 – 50 mesh'],
        ['Warna', 'Hitam pekat / hitam mengkilap'],
        ['Aroma', 'Tanpa bau kimia'],
      ],
    },
    uses: {
      eyebrow: 'Penggunaan',
      title: 'Dipakai di mana saja.',
      items: [
        { name: 'BBQ & panggangan', desc: 'Panas merata dan tahan lama untuk pemanggangan' },
        { name: 'Shisha', desc: 'Nyala bersih dengan asap minimum' },
        { name: 'Boiler industri', desc: 'Bahan bakar padat berkalori tinggi' },
        { name: 'Pembangkit uap', desc: 'Pembakaran stabil untuk kebutuhan proses' },
        { name: 'Kafe & restoran', desc: 'Kebutuhan dapur komersial harian' },
        { name: 'Bahan baku karbon aktif', desc: 'Kadar karbon tinggi sebagai bahan dasar' },
      ],
    },
    process: {
      eyebrow: 'Proses Produksi',
      title: 'Delapan tahap terkontrol.',
      steps: [
        { name: 'Seleksi bahan baku', desc: 'Tempurung kelapa pilihan dari sumber terpercaya, bersih, kering, dan bebas bahan asing.' },
        { name: 'Pengeringan', desc: 'Dijemur atau dikeringkan dengan mesin kadar air untuk menghasilkan arang bermutu lebih baik.' },
        { name: 'Karbonisasi', desc: 'Dibakar dalam tungku tertutup dengan sirkulasi udara terbatas pada suhu tinggi.' },
        { name: 'Pendinginan', desc: 'Didinginkan secara alami untuk mencegah pecah atau terbakar kembali.' },
        { name: 'Penyortiran', desc: 'Disortir berdasarkan ukuran, bentuk, dan kualitas. Yang tidak sesuai standar dipisahkan.' },
        { name: 'Pengemasan', desc: 'Dikemas dengan karung berkualitas atau jumbo bag sesuai permintaan pelanggan.' },
        { name: 'Penyimpanan', desc: 'Disimpan di gudang kering dan bersih agar kualitas tetap stabil.' },
        { name: 'Pengiriman', desc: 'Dikirim ke seluruh Indonesia dan mancanegara dengan mitra logistik terpercaya.' },
      ],
    },
    partner: {
      eyebrow: 'Mitra Produksi',
      title: 'Arang ini punya pabrik, dan alamatnya jelas.',
      body: [
        'Arang batok kelapa kami diproduksi oleh **PT Berkah Mandiri Indonesia**, produsen yang fasilitasnya berada di Kalibagor, Kabupaten Banyumas, Jawa Tengah. PT Cahaya Shakti Sejahtera berperan sebagai mitra dagang dan eksportir.',
        'Kami menyebutkan ini secara terbuka karena pembeli yang serius akan memeriksa. Kunjungan ke lokasi produksi dapat diatur, dan spesifikasi dapat disesuaikan langsung dengan kapasitas pabrik.',
      ],
      markets: {
        title: 'Pasar yang sudah dilayani',
        items: ['Indonesia', 'Malaysia', 'Singapura', 'India', 'Filipina'],
      },
    },
    quote: {
      eyebrow: 'Minta Penawaran',
      title: 'Kirim empat hal ini.',
      lead: 'Dengan keempatnya kami bisa langsung menghitung, tanpa bolak-balik bertanya.',
      checklist: [
        'Ukuran atau mesh yang dibutuhkan',
        'Kuantitas per pengiriman',
        'Kemasan yang diinginkan — karung atau jumbo bag',
        'Pelabuhan atau kota tujuan',
      ],
      waCta: 'Chat WhatsApp',
      emailCta: 'Kirim surel',
    },
    faq: {
      eyebrow: 'Pertanyaan Umum',
      title: 'Yang paling sering ditanyakan.',
      items: [
        {
          q: 'Berapa kuantitas minimum pemesanan?',
          a: 'Mengikuti kapasitas muat kontainer dan spesifikasi yang diminta. Sebutkan kebutuhan Anda, kami konfirmasikan angka pastinya beserta penawaran.',
        },
        {
          q: 'Apakah tersedia sampel untuk pengujian?',
          a: 'Tersedia. Sampel dapat dikirim untuk diuji di laboratorium Anda sebelum pemesanan. Hubungi kami untuk pengaturannya.',
        },
        {
          q: 'Bisakah spesifikasinya disesuaikan?',
          a: 'Bisa. Kadar air, ukuran, kemasan, dan pelabelan dapat disesuaikan dengan kebutuhan Anda selama masih dalam kapasitas produksi.',
        },
        {
          q: 'Incoterm apa yang dilayani?',
          a: 'FOB, CFR, dan CIF. Ketentuan final mengikuti pelabuhan tujuan dan kuantitas, dan dicantumkan dalam penawaran resmi.',
        },
        {
          q: 'Dokumen ekspor apa yang disiapkan?',
          a: 'Dokumen perdagangan yang diperlukan disiapkan lengkap sesuai persyaratan negara tujuan. Rinciannya dikonfirmasi saat penawaran.',
        },
      ],
    },
  },

  en: {
    meta: {
      title: 'Cahaya Charcoal — Coconut Shell Charcoal & Briquettes | PT Cahaya Shakti Sejahtera',
      description:
        'Coconut shell charcoal from controlled carbonisation. Fixed carbon min. 70%, ash max. 3%, no chemical additives. Ready for domestic and export markets.',
    },
    nav: [
      { label: 'Products', href: '#produk' },
      { label: 'Specification', href: '#spesifikasi' },
      { label: 'Applications', href: '#penggunaan' },
      { label: 'Process', href: '#proses' },
      { label: 'Partner', href: '#mitra' },
      { label: 'Quote', href: '#penawaran' },
    ],
    waMessage: 'Hello Cahaya Charcoal, I would like to request a coconut shell charcoal quotation. My requirement:',
    hero: {
      eyebrow: 'Coconut Shell Charcoal & Briquettes',
      title: 'Burned slowly, burns long.',
      lead: 'Coconut shell charcoal from high-temperature carbonisation with restricted airflow. High carbon content, low ash, no chemical additives.',
      cta: 'Request a quote',
      ctaSecond: 'View specification',
    },
    highlights: [
      { value: '70', unit: '% min', label: 'Fixed carbon' },
      { value: '3', unit: '% max', label: 'Ash content' },
      { value: '15', unit: '% max', label: 'Moisture' },
      { value: '4–50', unit: 'Mesh', label: 'Size range' },
    ],
    products: {
      eyebrow: 'Products',
      title: 'Two forms, one raw material.',
      lead: 'Both are made from selected coconut shell with no chemical additives.',
      flake: {
        name: 'Charcoal Flake',
        sub: 'Pecahan',
        desc: 'Irregular flake form produced by carbonising whole coconut shells. Steady flame, even heat, and very little ash. Suited to industrial, commercial, and household use.',
        points: [
          '100% natural from selected coconut shell',
          'High calorific value, longer burning time',
          'Low ash content and minimal smoke',
          'Environmentally sound, using coconut waste',
        ],
      },
      briket: {
        name: 'Briquettes',
        sub: 'Briket',
        desc: 'Coconut shell charcoal compressed into a uniform shape for longer and more consistent burning. Available on request.',
        specs: [] as { k: string; v: string }[],
        pending:
          'Briquette technical specification — shape, dimensions, burning time, ash content, and packaging — is supplied on request. Contact us for the specification sheet and samples.',
      },
    },
    specs: {
      eyebrow: 'Technical Specification',
      title: 'Numbers you can test.',
      lead: 'The values below apply to charcoal flake. Specifications can be adjusted to buyer requirements, including moisture, size, packaging, and labelling.',
      headers: ['Parameter', 'Specification'],
      rows: [
        ['Moisture', 'Max. 15%'],
        ['Ash content', 'Max. 3%'],
        ['Volatile matter', 'Max. 18%'],
        ['Fixed carbon', 'Min. 70%'],
        ['Impurities', 'Max. 1%'],
        ['Size (mesh)', '4 – 50 mesh'],
        ['Colour', 'Deep black / glossy black'],
        ['Odour', 'No chemical smell'],
      ],
    },
    uses: {
      eyebrow: 'Applications',
      title: 'Used almost everywhere.',
      items: [
        { name: 'BBQ & grilling', desc: 'Even, long-lasting heat for grilling' },
        { name: 'Shisha', desc: 'Clean burn with minimal smoke' },
        { name: 'Industrial boilers', desc: 'High-calorie solid fuel' },
        { name: 'Steam generation', desc: 'Stable combustion for process heat' },
        { name: 'Cafés & restaurants', desc: 'Daily commercial kitchen use' },
        { name: 'Activated carbon feedstock', desc: 'High carbon content as base material' },
      ],
    },
    process: {
      eyebrow: 'Production Process',
      title: 'Eight controlled stages.',
      steps: [
        { name: 'Raw material selection', desc: 'Selected coconut shell from trusted sources — clean, dry, and free of foreign matter.' },
        { name: 'Drying', desc: 'Sun-dried or machine-dried to a target moisture level for better charcoal quality.' },
        { name: 'Carbonisation', desc: 'Burned in closed kilns with restricted airflow at high temperature.' },
        { name: 'Cooling', desc: 'Cooled naturally to prevent cracking or re-ignition.' },
        { name: 'Sorting', desc: 'Sorted by size, shape, and quality. Anything below standard is separated out.' },
        { name: 'Packing', desc: 'Packed in quality sacks or jumbo bags according to customer request.' },
        { name: 'Storage', desc: 'Stored in dry, clean warehouses to keep quality stable.' },
        { name: 'Shipping', desc: 'Delivered across Indonesia and overseas with trusted logistics partners.' },
      ],
    },
    partner: {
      eyebrow: 'Production Partner',
      title: 'This charcoal has a factory, and a real address.',
      body: [
        'Our coconut shell charcoal is produced by **PT Berkah Mandiri Indonesia**, whose facility is located in Kalibagor, Banyumas Regency, Central Java. PT Cahaya Shakti Sejahtera acts as trading partner and exporter.',
        'We state this openly because serious buyers will check. Visits to the production site can be arranged, and specifications can be agreed directly against the factory capacity.',
      ],
      markets: {
        title: 'Markets already served',
        items: ['Indonesia', 'Malaysia', 'Singapore', 'India', 'Philippines'],
      },
    },
    quote: {
      eyebrow: 'Request a Quote',
      title: 'Send us these four things.',
      lead: 'With all four we can price it straight away, without going back and forth.',
      checklist: [
        'Required size or mesh',
        'Quantity per shipment',
        'Preferred packaging — sacks or jumbo bags',
        'Destination port or city',
      ],
      waCta: 'Chat on WhatsApp',
      emailCta: 'Send an email',
    },
    faq: {
      eyebrow: 'Frequently Asked',
      title: 'What buyers ask most.',
      items: [
        {
          q: 'What is the minimum order quantity?',
          a: 'It follows container loading capacity and the specification requested. Tell us your requirement and we will confirm the exact figure along with the quotation.',
        },
        {
          q: 'Are samples available for testing?',
          a: 'Yes. Samples can be sent for testing in your laboratory before ordering. Contact us to arrange it.',
        },
        {
          q: 'Can the specification be adjusted?',
          a: 'Yes. Moisture, size, packaging, and labelling can be adjusted to your requirement within production capacity.',
        },
        {
          q: 'Which incoterms do you serve?',
          a: 'FOB, CFR, and CIF. Final terms follow the destination port and quantity, and are stated in the formal quotation.',
        },
        {
          q: 'Which export documents are prepared?',
          a: 'The required trade documents are prepared in full according to destination country requirements. Details are confirmed at quotation stage.',
        },
      ],
    },
  },
} as const;

export function charcoal(locale: Locale) {
  return CHARCOAL[locale];
}
