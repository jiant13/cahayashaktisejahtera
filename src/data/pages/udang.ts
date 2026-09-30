/** Konten halaman /udangbalapid. Data teknis diambil dari Company Profile
 *  dan Product Specification Sheet Rev. 01 di folder 02 dan 03. */

import type { Locale } from '../site';

export const UDANG = {
  id: {
    meta: {
      title: 'Udang Balap ID — Udang Fresh dan Frozen | PT Cahaya Shakti Sejahtera',
      description:
        'Pemasok udang beku terintegrasi dari tambak sendiri. Black Tiger dan Vannamei, ABF dan IQF, 220 hektar tambak, cold storage 200 ton.',
    },
    nav: [
      { label: 'Tentang', href: '#tentang' },
      { label: 'Fasilitas', href: '#fasilitas' },
      { label: 'Produk', href: '#produk' },
      { label: 'Ukuran', href: '#ukuran' },
      { label: 'Ekspor', href: '#ekspor' },
      { label: 'Kontak', href: '#kontak' },
    ],
    waMessage:
      'Halo Udang Balap ID, saya ingin menanyakan penawaran udang beku. Produk yang saya cari:',
    hero: {
      eyebrow: 'Udang Fresh dan Frozen',
      title: 'Dari tambak sendiri, terjaga hingga ekspor.',
      lead: 'Black Tiger dan Vannamei, dibekukan ABF atau IQF, dikirim dalam kontainer pendingin yang dijaga −18°C sampai −22°C sepanjang pelayaran.',
      cta: 'Minta penawaran',
      ctaSecond: 'Lihat produk',
      motto: 'Sang Perintis Bukan Pewaris',
    },
    stats: [
      { value: '220', unit: 'Hektar', label: 'Total luas area tambak' },
      { value: '80', unit: 'Kavling', label: 'Unit petak tambak terkelola' },
      { value: '10', unit: 'Ton / hari', label: 'Kapasitas proses & pembekuan' },
      { value: '200', unit: 'Ton', label: 'Kapasitas cold storage' },
    ],
    about: {
      eyebrow: 'Tentang',
      title: 'Rantai pasok yang tidak berpindah tangan.',
      body: [
        'Seluruh udang berasal dari tambak milik sendiri — tambak intensif untuk vaname dan tambak tradisional untuk windu. Tidak ada pembelian dari pihak ketiga, sehingga asal-usul setiap kontainer bisa ditelusuri sampai ke kavlingnya.',
        'Panen dilakukan per kavling dan langsung didinginkan di lokasi. Rantai dingin tidak terputus dari tambak, ke unit pengolahan, sampai ke pelabuhan, memakai armada truk berpendingin milik sendiri.',
      ],
      points: [
        {
          title: 'Langsung dari tambak sendiri',
          desc: 'Rantai pasok terkendali penuh tanpa perantara, asal-usul produk dapat ditelusuri.',
        },
        {
          title: 'Kualitas & standarisasi terjaga',
          desc: 'Grading ukuran dan kontrol mutu dilakukan pada setiap tahap produksi.',
        },
        {
          title: 'Kuota volume besar',
          desc: '220 hektar tambak aktif mendukung pengiriman rutin dalam skala kontainer.',
        },
        {
          title: 'Keamanan pangan terjamin',
          desc: 'Penanganan higienis sesuai prinsip HACCP dan bebas cemaran bakteri.',
        },
      ],
    },
    facility: {
      eyebrow: 'Fasilitas',
      title: 'Rekaman langsung dari lokasi.',
      lead: 'Video diambil di tambak dan unit pengolahan kami. Ketuk untuk memutar.',
      videos: [
        { src: 'tambak-tradisional', title: 'Tambak tradisional', desc: 'Budidaya udang windu, kepadatan rendah, air pasang alami' },
        { src: 'panen', title: 'Panen', desc: 'Panen per kavling, langsung didinginkan di lokasi' },
        { src: 'sortir', title: 'Sortir', desc: 'Grading ukuran dan pencucian di unit pengolahan' },
        { src: 'cold-storage', title: 'Muat & cold storage', desc: 'Bongkar muat menuju ruang beku berkapasitas 200 ton' },
      ],
    },
    products: {
      eyebrow: 'Produk',
      title: 'Dua spesies, banyak bentuk olahan.',
      items: [
        {
          name: 'Black Tiger',
          latin: 'Penaeus monodon',
          local: 'Udang Windu',
          desc: 'Dari tambak tradisional berkepadatan rendah dengan pasokan air pasang alami. Kulit bergaris gelap, ukuran besar, daging padat — cocok untuk ritel premium dan foodservice.',
          specs: [
            { k: 'Bentuk', v: 'HOSO, PDTO, PUD' },
            { k: 'Ukuran', v: '16/20 · 21/25 · 26/30' },
            { k: 'Pembekuan', v: 'ABF atau IQF' },
          ],
        },
        {
          name: 'Vannamei',
          latin: 'Litopenaeus vannamei',
          local: 'Udang Vaname',
          desc: 'Dari tambak intensif dengan aerasi kincir 24 jam dan monitoring kualitas air harian. Pasokan paling stabil sepanjang tahun, tersedia raw maupun cooked.',
          specs: [
            { k: 'Bentuk', v: '6 varian olahan' },
            { k: 'Ukuran', v: '8/12 sampai 130/150' },
            { k: 'Pembekuan', v: 'IQF, headless' },
          ],
        },
      ],
    },
    forms: {
      eyebrow: 'Bentuk Olahan',
      title: 'Enam varian vaname.',
      lead: 'Seluruhnya headless dan Individually Quick Frozen. Produk cooked sudah dikupas dan dibuang uratnya.',
      items: [
        { code: 'RWHL', name: 'Raw Headless Shell-On', img: 'bentuk-rwhl', desc: 'Tanpa kepala, kulit utuh' },
        { code: 'RWTO', name: 'Raw PD Tail-On', img: 'bentuk-rwto', desc: 'Kupas, urat dibuang, ekor tetap' },
        { code: 'RWTF', name: 'Raw PD Tail-Off', img: 'bentuk-rwtf', desc: 'Kupas penuh tanpa ekor' },
        { code: 'RWEP', name: 'Raw Easy to Peel', img: 'bentuk-rwep', desc: 'Punggung dibelah, mudah dikupas' },
        { code: 'CWTO', name: 'Cooked PD Tail-On', img: 'bentuk-cwto', desc: 'Matang, ekor tetap' },
        { code: 'CWTF', name: 'Cooked PD Tail-Off', img: 'bentuk-cwtf', desc: 'Matang tanpa ekor' },
      ],
    },
    sizes: {
      eyebrow: 'Daftar Ukuran',
      title: 'Ukuran per bentuk olahan.',
      lead: 'Dinyatakan dalam jumlah ekor per pon (count per lb). Ukuran lain tersedia sesuai permintaan pembeli.',
      headers: ['Kode', 'Bentuk', 'Rentang ukuran'],
      vannameiTitle: 'Vannamei',
      vannamei: [
        ['RWEP', 'Raw Easy to Peel', '8/12 – 71/90'],
        ['RWTO', 'Raw PD Tail-On', '8/12 – 100/200'],
        ['RWTF', 'Raw PD Tail-Off', '8/12 – 130/150'],
        ['RWHL', 'Raw Headless Shell-On', '8/12 – 110/130'],
        ['CWTO', 'Cooked PD Tail-On', '13/15 – 100/200'],
        ['CWTF', 'Cooked PD Tail-Off', '13/15 – 100/200'],
      ],
      tigerTitle: 'Black Tiger',
      tiger: [
        ['HOSO', 'Head-On Shell-On', '16/20 · 21/25 · 26/30'],
        ['PDTO', 'Peeled Deveined Tail-On', '16/20 · 21/25 · 26/30'],
        ['PUD', 'Peeled Undeveined', '16/20 · 21/25 · 26/30'],
      ],
      note: 'Ukuran 30/40, 40/50 dan 50/60 setara dengan 31/40, 41/50 dan 51/60 — hanya beda notasi.',
    },
    packing: {
      eyebrow: 'Kemasan & Mutu',
      title: 'Sampai di pelabuhan tujuan dalam kondisi terbaik.',
      rows: [
        { k: 'Metode pembekuan', v: 'Air Blast Freezer (ABF) dan Individually Quick Frozen (IQF)' },
        { k: 'Kemasan primer', v: 'Inner polybag berventilasi, 1 kg per pak' },
        { k: 'Master carton', v: '10 inner pak per karton tahan air — 1 kg × 10' },
        { k: 'Masa simpan', v: '24 bulan sejak tanggal produksi pada −18°C atau lebih dingin' },
        { k: 'Suhu perjalanan', v: 'Kontainer pendingin dijaga −18°C sampai −22°C sepanjang pelayaran' },
        { k: 'Spesifikasi fisik', v: 'Mata jernih, kulit perak mengkilap dan utuh, daging padat, bentuk tubuh lurus' },
        { k: 'Pelabelan', v: 'Produk, size, berat, tanggal produksi dan kedaluwarsa' },
        { k: 'Incoterms', v: 'FOB, CFR, atau CIF sesuai pelabuhan tujuan dan kuantitas' },
      ],
    },
    flow: {
      eyebrow: 'Alur Ekspor',
      title: 'Tujuh tahap dari tambak ke kapal.',
      steps: [
        { name: 'Panen', desc: 'Panen dari tambak sendiri, per kavling' },
        { name: 'Sortir & cuci', desc: 'Grading ukuran dan pencucian' },
        { name: 'Pembekuan', desc: 'ABF atau IQF' },
        { name: 'Glazing & kemas', desc: 'Inner polybag dan master carton' },
        { name: 'Karantina', desc: 'Inspeksi Badan Karantina Indonesia' },
        { name: 'Stuffing', desc: 'Muat ke reefer container' },
        { name: 'Bea cukai & kapal', desc: 'Clearance kepabeanan dan pengapalan' },
      ],
      note: 'Setiap pengiriman disertai Health Certificate resmi dari Badan Karantina Indonesia beserta dokumen kepabeanan lengkap.',
    },
    certs: {
      eyebrow: 'Legalitas & Sertifikasi',
      title: 'Dokumen lengkap di tiap pengiriman.',
      lead: 'Kami menjamin keamanan kargo dari risiko hukum dan karantina dengan dokumen resmi yang lengkap.',
      items: [
        { name: 'SKP', desc: 'Sertifikat Kelayakan Pengolahan — KKP RI' },
        { name: 'HACCP', desc: 'Hazard Analysis Critical Control Point' },
        { name: 'Health Certificate', desc: 'Badan Karantina Indonesia, per pengiriman' },
        { name: 'GACC', desc: 'General Administration of Customs of China' },
        { name: 'SNI', desc: 'Standar Nasional Indonesia' },
        { name: 'US FDA', desc: 'Food facility registration, Amerika Serikat' },
        { name: 'EAC', desc: 'Eurasian Conformity' },
        { name: 'GMP', desc: 'Good Manufacturing Practice — Ditjen Perikanan' },
        { name: 'Halal Indonesia', desc: 'Sertifikasi halal untuk pasar Muslim' },
      ],
    },
    contact: {
      eyebrow: 'Kontak',
      title: 'Kirim kebutuhan Anda.',
      lead: 'Sebutkan produk, ukuran, bentuk olahan, kuantitas, dan pelabuhan tujuan — kami siapkan penawaran terbaik.',
      checklist: ['Produk dan bentuk olahan', 'Ukuran (count per lb)', 'Kuantitas', 'Pelabuhan tujuan', 'Incoterm yang diinginkan'],
      waCta: 'Chat WhatsApp',
      emailCta: 'Kirim surel',
      picTitle: 'Narahubung',
    },
  },

  en: {
    meta: {
      title: 'Udang Balap ID — Fresh and Frozen Shrimp | PT Cahaya Shakti Sejahtera',
      description:
        'Integrated frozen shrimp supplier from our own ponds. Black Tiger and Vannamei, ABF and IQF, 220 hectares of ponds, 200-tonne cold storage.',
    },
    nav: [
      { label: 'About', href: '#tentang' },
      { label: 'Facilities', href: '#fasilitas' },
      { label: 'Products', href: '#produk' },
      { label: 'Sizes', href: '#ukuran' },
      { label: 'Export', href: '#ekspor' },
      { label: 'Contact', href: '#kontak' },
    ],
    waMessage: 'Hello Udang Balap ID, I would like to request a frozen shrimp quotation. I am looking for:',
    hero: {
      eyebrow: 'Fresh and Frozen Shrimp',
      title: 'From our own ponds, protected through export.',
      lead: 'Black Tiger and Vannamei, frozen by ABF or IQF, shipped in reefer containers held between −18°C and −22°C throughout the sea leg.',
      cta: 'Request a quote',
      ctaSecond: 'View products',
      motto: 'Sang Perintis Bukan Pewaris',
    },
    stats: [
      { value: '220', unit: 'Hectares', label: 'Total pond area' },
      { value: '80', unit: 'Plots', label: 'Managed pond units' },
      { value: '10', unit: 'Tonnes / day', label: 'Processing & freezing capacity' },
      { value: '200', unit: 'Tonnes', label: 'Cold storage capacity' },
    ],
    about: {
      eyebrow: 'About',
      title: 'A supply chain that never changes hands.',
      body: [
        'Every shrimp comes from ponds we own — intensive ponds for vannamei, traditional ponds for black tiger. Nothing is bought from third parties, so every container traces back to the plot it came from.',
        'Harvesting is done plot by plot and chilled on site immediately. The cold chain is never broken from pond to processing unit to port, carried by our own fleet of refrigerated trucks.',
      ],
      points: [
        {
          title: 'Straight from our own ponds',
          desc: 'A fully controlled supply chain with no intermediaries, and traceable product origin.',
        },
        {
          title: 'Consistent quality and grading',
          desc: 'Size grading and quality control are carried out at every production stage.',
        },
        {
          title: 'Large volume capacity',
          desc: '220 hectares of active ponds support regular container-scale shipments.',
        },
        {
          title: 'Assured food safety',
          desc: 'Hygienic handling following HACCP principles and free from bacterial contamination.',
        },
      ],
    },
    facility: {
      eyebrow: 'Facilities',
      title: 'Footage straight from site.',
      lead: 'Filmed at our ponds and processing unit. Tap to play.',
      videos: [
        { src: 'tambak-tradisional', title: 'Traditional ponds', desc: 'Black tiger farming, low density, natural tidal water' },
        { src: 'panen', title: 'Harvest', desc: 'Harvested plot by plot, chilled on site' },
        { src: 'sortir', title: 'Sorting', desc: 'Size grading and washing at the processing unit' },
        { src: 'cold-storage', title: 'Loading & cold storage', desc: 'Handling into the 200-tonne frozen storage' },
      ],
    },
    products: {
      eyebrow: 'Products',
      title: 'Two species, many processing forms.',
      items: [
        {
          name: 'Black Tiger',
          latin: 'Penaeus monodon',
          local: 'Udang Windu',
          desc: 'From low-density traditional ponds fed by natural tidal water. Dark-striped shell, large sizes, firm flesh — suited to premium retail and foodservice.',
          specs: [
            { k: 'Forms', v: 'HOSO, PDTO, PUD' },
            { k: 'Sizes', v: '16/20 · 21/25 · 26/30' },
            { k: 'Freezing', v: 'ABF or IQF' },
          ],
        },
        {
          name: 'Vannamei',
          latin: 'Litopenaeus vannamei',
          local: 'Udang Vaname',
          desc: 'From intensive ponds with 24-hour paddlewheel aeration and daily water quality monitoring. The most stable supply year round, available raw or cooked.',
          specs: [
            { k: 'Forms', v: '6 processing variants' },
            { k: 'Sizes', v: '8/12 through 130/150' },
            { k: 'Freezing', v: 'IQF, headless' },
          ],
        },
      ],
    },
    forms: {
      eyebrow: 'Processing Forms',
      title: 'Six vannamei variants.',
      lead: 'All headless and Individually Quick Frozen. Cooked products are peeled and deveined.',
      items: [
        { code: 'RWHL', name: 'Raw Headless Shell-On', img: 'bentuk-rwhl', desc: 'Headless, shell intact' },
        { code: 'RWTO', name: 'Raw PD Tail-On', img: 'bentuk-rwto', desc: 'Peeled, deveined, tail on' },
        { code: 'RWTF', name: 'Raw PD Tail-Off', img: 'bentuk-rwtf', desc: 'Fully peeled, tail off' },
        { code: 'RWEP', name: 'Raw Easy to Peel', img: 'bentuk-rwep', desc: 'Back split for easy peeling' },
        { code: 'CWTO', name: 'Cooked PD Tail-On', img: 'bentuk-cwto', desc: 'Cooked, tail on' },
        { code: 'CWTF', name: 'Cooked PD Tail-Off', img: 'bentuk-cwtf', desc: 'Cooked, tail off' },
      ],
    },
    sizes: {
      eyebrow: 'Size List',
      title: 'Sizes by processing form.',
      lead: 'Stated as count per lb. Other sizes available on buyer request.',
      headers: ['Code', 'Form', 'Size range'],
      vannameiTitle: 'Vannamei',
      vannamei: [
        ['RWEP', 'Raw Easy to Peel', '8/12 – 71/90'],
        ['RWTO', 'Raw PD Tail-On', '8/12 – 100/200'],
        ['RWTF', 'Raw PD Tail-Off', '8/12 – 130/150'],
        ['RWHL', 'Raw Headless Shell-On', '8/12 – 110/130'],
        ['CWTO', 'Cooked PD Tail-On', '13/15 – 100/200'],
        ['CWTF', 'Cooked PD Tail-Off', '13/15 – 100/200'],
      ],
      tigerTitle: 'Black Tiger',
      tiger: [
        ['HOSO', 'Head-On Shell-On', '16/20 · 21/25 · 26/30'],
        ['PDTO', 'Peeled Deveined Tail-On', '16/20 · 21/25 · 26/30'],
        ['PUD', 'Peeled Undeveined', '16/20 · 21/25 · 26/30'],
      ],
      note: 'Sizes 30/40, 40/50 and 50/60 are the same count bands as 31/40, 41/50 and 51/60 — only the notation differs.',
    },
    packing: {
      eyebrow: 'Packing & Quality',
      title: 'Arriving at the destination port in best condition.',
      rows: [
        { k: 'Freezing method', v: 'Air Blast Freezer (ABF) and Individually Quick Frozen (IQF)' },
        { k: 'Inner packaging', v: 'Vented inner polybag, 1 kg per pack' },
        { k: 'Master carton', v: '10 inner packs per waterproof master carton — 1 kg × 10' },
        { k: 'Shelf life', v: '24 months from production date at −18°C or below' },
        { k: 'Transit temperature', v: 'Reefer container maintained at −18°C to −22°C throughout the sea leg' },
        { k: 'Physical specification', v: 'Clear eyes, intact bright silver shell, firm flesh, straight body form' },
        { k: 'Labelling', v: 'Product, size, weight, production and expiry date' },
        { k: 'Incoterms', v: 'FOB, CFR, or CIF subject to destination port and quantity' },
      ],
    },
    flow: {
      eyebrow: 'Export Flow',
      title: 'Seven stages from pond to vessel.',
      steps: [
        { name: 'Harvest', desc: 'Harvested from our own ponds, plot by plot' },
        { name: 'Grading & cleaning', desc: 'Size grading and washing' },
        { name: 'Freezing', desc: 'ABF or IQF' },
        { name: 'Glazing & packing', desc: 'Inner polybag and master carton' },
        { name: 'Quarantine', desc: 'Indonesian Quarantine Agency inspection' },
        { name: 'Stuffing', desc: 'Loading into reefer container' },
        { name: 'Customs & shipping', desc: 'Customs clearance and vessel loading' },
      ],
      note: 'Every shipment is accompanied by an official Health Certificate from the Indonesian Quarantine Agency along with complete customs documentation.',
    },
    certs: {
      eyebrow: 'Legality & Certification',
      title: 'Complete documents on every shipment.',
      lead: 'We protect your cargo from legal and quarantine risk with complete official documentation.',
      items: [
        { name: 'SKP', desc: 'Processing Eligibility Certificate — Ministry of Marine Affairs & Fisheries' },
        { name: 'HACCP', desc: 'Hazard Analysis Critical Control Point' },
        { name: 'Health Certificate', desc: 'Indonesian Quarantine Agency, per shipment' },
        { name: 'GACC', desc: 'General Administration of Customs of China' },
        { name: 'SNI', desc: 'Indonesian National Standard' },
        { name: 'US FDA', desc: 'Food facility registration, United States' },
        { name: 'EAC', desc: 'Eurasian Conformity' },
        { name: 'GMP', desc: 'Good Manufacturing Practice — Directorate General of Fisheries' },
        { name: 'Halal Indonesia', desc: 'Halal certification for Muslim markets' },
      ],
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Send us your requirement.',
      lead: 'Tell us the product, size, processing form, quantity, and destination port — we will prepare our best quotation.',
      checklist: ['Product and processing form', 'Size (count per lb)', 'Quantity', 'Destination port', 'Preferred incoterm'],
      waCta: 'Chat on WhatsApp',
      emailCta: 'Send an email',
      picTitle: 'Contact persons',
    },
  },
} as const;

export function udang(locale: Locale) {
  return UDANG[locale];
}
