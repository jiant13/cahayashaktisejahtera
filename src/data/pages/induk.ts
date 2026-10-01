/** Konten halaman induk. Terpisah dari layout supaya revisi teks tidak menyentuh markup. */

import type { Locale } from '../site';

export const INDUK = {
  id: {
    meta: {
      title: 'PT Cahaya Shakti Sejahtera — Kuat, Aman, Sejahtera',
      description:
        'Perusahaan Indonesia yang menaungi budidaya dan ekspor udang beku, suplai bandeng, cumi, dan gurita beku, perdagangan arang batok kelapa, serta layanan pijat dan refleksi.',
    },
    nav: [
      { label: 'Tentang', href: '#tentang' },
      { label: 'Divisi', href: '#divisi' },
      { label: 'Legalitas', href: '#legalitas' },
      { label: 'Kontak', href: '#kontak' },
    ],
    waMessage: 'Halo PT Cahaya Shakti Sejahtera, saya ingin menanyakan informasi perusahaan.',
    hero: {
      eyebrow: 'Perusahaan Induk',
      title: 'Lima divisi, satu standar kerja.',
      lead: 'PT Cahaya Shakti Sejahtera menaungi budidaya dan ekspor udang beku, suplai bandeng, cumi, dan gurita beku, perdagangan arang batok kelapa, serta layanan pijat dan refleksi. Setiap divisi berjalan dengan dokumen resmi dan mutu yang dijaga di tiap tahap.',
      cta: 'Lihat divisi kami',
      ctaContact: 'Hubungi kami',
    },
    about: {
      eyebrow: 'Tentang',
      title: 'Dikelola langsung, bukan sekadar perantara.',
      body: [
        'Perusahaan ini tumbuh dari usaha tambak udang yang dikelola sendiri — dari benur, panen, pembekuan, sampai muat ke kontainer. Prinsip yang sama kemudian dibawa ke lini usaha lain: rantai pasok yang bisa ditelusuri, mutu yang diperiksa di tiap tahap, dan dokumen yang lengkap sebelum barang berangkat.',
        'Untuk komoditas yang tidak kami produksi sendiri — arang, bandeng, cumi, dan gurita — kami bekerja dengan mitra produksi dan jaringan pemasok, dan spesifikasinya disepakati sebelum barang disiapkan.',
      ],
      stats: [
        { value: '220', unit: 'Hektar', label: 'Luas tambak dikelola sendiri' },
        { value: '10', unit: 'Ton / hari', label: 'Kapasitas proses & pembekuan' },
        { value: '200', unit: 'Ton', label: 'Kapasitas cold storage' },
        { value: '5', unit: 'Divisi', label: 'Seafood, arang, dan layanan pijat' },
      ],
    },
    divisions: {
      eyebrow: 'Divisi Kami',
      title: 'Lima usaha yang berdiri sendiri.',
      lead: 'Masing-masing punya produk, pasar, dan narahubungnya sendiri.',
      cta: 'Selengkapnya',
    },
    legality: {
      eyebrow: 'Legalitas',
      title: 'Terdaftar dan patuh.',
      lead: 'Perusahaan beroperasi dengan perizinan berusaha resmi yang terdaftar pada sistem OSS Republik Indonesia.',
      items: [
        { name: 'NIB', desc: 'Nomor Induk Berusaha — Perizinan Berusaha Berbasis Risiko, OSS RI' },
        { name: 'KBLI', desc: 'Kegiatan usaha budidaya dan pengolahan terdaftar' },
        { name: 'NPWP', desc: 'Identitas perpajakan badan usaha' },
        { name: 'SKP', desc: 'Sertifikat Kelayakan Pengolahan — KKP RI' },
        { name: 'HACCP', desc: 'Hazard Analysis Critical Control Point' },
        { name: 'Halal Indonesia', desc: 'Sertifikasi halal untuk pasar Muslim' },
      ],
    },
    contact: {
      eyebrow: 'Kontak',
      title: 'Mari bicara.',
      lead: 'Untuk pertanyaan umum, kerja sama, atau permintaan dokumen perusahaan.',
      waCta: 'Chat WhatsApp',
      emailCta: 'Kirim surel',
    },
  },

  en: {
    meta: {
      title: 'PT Cahaya Shakti Sejahtera — Strong, Safe, Prosperous',
      description:
        'An Indonesian company overseeing integrated shrimp farming and frozen shrimp export, frozen milkfish, squid, and octopus supply, coconut shell charcoal trading, and massage and reflexology services.',
    },
    nav: [
      { label: 'About', href: '#tentang' },
      { label: 'Divisions', href: '#divisi' },
      { label: 'Legality', href: '#legalitas' },
      { label: 'Contact', href: '#kontak' },
    ],
    waMessage: 'Hello PT Cahaya Shakti Sejahtera, I would like to request company information.',
    hero: {
      eyebrow: 'Holding Company',
      title: 'Five divisions, one standard of work.',
      lead: 'PT Cahaya Shakti Sejahtera oversees integrated shrimp farming and frozen shrimp export, frozen milkfish, squid, and octopus supply, coconut shell charcoal trading, and massage and reflexology services. Every division operates with complete documentation and quality checks at each stage.',
      cta: 'View our divisions',
      ctaContact: 'Contact us',
    },
    about: {
      eyebrow: 'About',
      title: 'Directly managed, not merely a middleman.',
      body: [
        'The company grew out of shrimp ponds we run ourselves — from hatchery and harvest through freezing and container loading. That same principle carries into the other business lines: a traceable supply chain, quality inspected at every stage, and complete documents before anything ships.',
        'For commodities we do not produce ourselves — charcoal, milkfish, squid, and octopus — we work with production partners and supplier networks, and the specification is agreed before goods are prepared.',
      ],
      stats: [
        { value: '220', unit: 'Hectares', label: 'Ponds under our own management' },
        { value: '10', unit: 'Tonnes / day', label: 'Processing & freezing capacity' },
        { value: '200', unit: 'Tonnes', label: 'Cold storage capacity' },
        { value: '5', unit: 'Divisions', label: 'Seafood, charcoal, and wellness' },
      ],
    },
    divisions: {
      eyebrow: 'Our Divisions',
      title: 'Five businesses that stand on their own.',
      lead: 'Each has its own products, markets, and point of contact.',
      cta: 'Learn more',
    },
    legality: {
      eyebrow: 'Legality',
      title: 'Registered and compliant.',
      lead: 'The company operates under official business licensing registered with the OSS system of the Republic of Indonesia.',
      items: [
        { name: 'NIB', desc: 'Business Identification Number — risk-based licensing, OSS Indonesia' },
        { name: 'KBLI', desc: 'Registered aquaculture and processing business activities' },
        { name: 'NPWP', desc: 'Corporate tax identification' },
        { name: 'SKP', desc: 'Processing Eligibility Certificate — Ministry of Marine Affairs & Fisheries' },
        { name: 'HACCP', desc: 'Hazard Analysis Critical Control Point' },
        { name: 'Halal Indonesia', desc: 'Halal certification for Muslim markets' },
      ],
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Let us talk.',
      lead: 'For general enquiries, partnerships, or company document requests.',
      waCta: 'Chat on WhatsApp',
      emailCta: 'Send an email',
    },
  },
} as const;

export function induk(locale: Locale) {
  return INDUK[locale];
}
