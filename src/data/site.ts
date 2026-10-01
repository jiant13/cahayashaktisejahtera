/**
 * Sumber tunggal untuk identitas, kontak, dan daftar divisi.
 *
 * Kalau owner nanti menggabungkan semua usaha jadi satu profil PT,
 * yang berubah cukup file ini dan file konten per halaman — bukan layout.
 */

export type Locale = 'id' | 'en';
export type BrandKey = 'induk' | 'shrimp' | 'charcoal' | 'spa' | 'milkfish' | 'squidoctopus';

export const LOCALES: Locale[] = ['id', 'en'];
export const DEFAULT_LOCALE: Locale = 'id';

export const SITE = {
  domain: 'cahayashaktisejahtera.com',
  url: 'https://cahayashaktisejahtera.com',
  legalName: 'PT Cahaya Shakti Sejahtera',
  motto: 'KUAT · AMAN · SEJAHTERA',
  /** Profil resmi di luar situs. Dipakai sebagai `sameAs` di JSON-LD. */
  sameAs: [
    // Google Business Profile
    'https://maps.app.goo.gl/McC1NZBrkii3idCY9',
  ],
  /** Alamat dan telepon mengikuti Google Business Profile, supaya NAP konsisten. */
  address: {
    street: 'Jl. Raya Jakarta-Bogor No.29, Mekarsari',
    district: 'Kec. Cimanggis',
    city: 'Kota Depok',
    region: 'Jawa Barat',
    postalCode: '16451',
    country: 'ID',
  },
  phone: '6285923500089',
} as const;

/** Nomor disimpan dalam format internasional tanpa tanda baca, untuk tautan wa.me. */
export const CONTACT = {
  induk: {
    wa: '6281270276774',
    waLabel: '+62 812-7027-6774',
    phone: '6285718245650',
    phoneLabel: '+62 857-1824-5650',
    // TODO(konfirmasi): di WhatsApp ditulis "Admin.cahayashaktisejahtera.com".
    // Diasumsikan alamat surel. Perlu dipastikan ke klien.
    email: 'admin@cahayashaktisejahtera.com',
    emailFallback: 'ptcahayashakti@gmail.com',
    address: 'Jl. Raya Jakarta-Bogor No.29, Mekarsari, Kec. Cimanggis, Kota Depok, Jawa Barat 16451',
  },
  shrimp: {
    wa: '6285923500089',
    waLabel: '+62 859-2350-0089',
    phone: '6285718245650',
    phoneLabel: '+62 857-1824-5650',
    email: 'admin@cahayashaktisejahtera.com',
    contacts: [
      { name: 'Rizky', role: { id: 'Sales Manager', en: 'Sales Manager' } },
      { name: 'Sarah Ayomi Nurillah', role: { id: 'Ekspor', en: 'Export' } },
    ],
  },
  charcoal: {
    wa: '6285718245650',
    waLabel: '+62 857-1824-5650',
    email: 'admin@cahayashaktisejahtera.com',
  },
  // Dua divisi seafood memakai nomor yang terdaftar di Google Business Profile.
  // Dokumen sumbernya masih berisi placeholder "[Company Number]".
  milkfish: {
    wa: '6285923500089',
    waLabel: '+62 859-2350-0089',
    email: 'admin@cahayashaktisejahtera.com',
  },
  squidoctopus: {
    wa: '6285923500089',
    waLabel: '+62 859-2350-0089',
    email: 'admin@cahayashaktisejahtera.com',
  },
  spa: {
    wa: '6285808592005',
    waLabel: '+62 858-0859-2005',
    email: 'admin@cahayashaktisejahtera.com',
  },
} as const;

/**
 * Enam route. Urutan ini dipakai di footer dan di kartu halaman induk.
 * Slug sengaja tidak di-lokalisasi — klien sudah menyebut URL-nya secara spesifik.
 */
export const BRANDS = [
  {
    key: 'induk' as const,
    slug: '',
    theme: 'induk',
    favicon: '/favicon/induk.png',
    name: { id: 'PT Cahaya Shakti Sejahtera', en: 'PT Cahaya Shakti Sejahtera' },
    short: { id: 'Perusahaan Induk', en: 'Holding Company' },
    tagline: {
      id: 'Kuat · Aman · Sejahtera',
      en: 'Strong · Safe · Prosperous',
    },
  },
  {
    key: 'shrimp' as const,
    slug: 'udangbalapid',
    theme: 'shrimp',
    favicon: '/favicon/shrimp.png',
    name: { id: 'Udang Balap ID', en: 'Udang Balap ID' },
    short: { id: 'Udang Fresh dan Frozen', en: 'Fresh and Frozen Shrimp' },
    tagline: {
      id: 'Tambak sendiri, dari benur sampai kontainer',
      en: 'Own ponds, from hatchery to container',
    },
  },
  {
    key: 'milkfish' as const,
    slug: 'milkfish',
    theme: 'milkfish',
    favicon: '/favicon/milkfish.png',
    name: { id: 'Cahaya Milkfish', en: 'Cahaya Milkfish' },
    short: { id: 'Bandeng Beku', en: 'Frozen Milkfish' },
    tagline: {
      id: 'Bandeng utuh beku, dikemas per ekor',
      en: 'Frozen whole milkfish, packed per piece',
    },
  },
  {
    key: 'squidoctopus' as const,
    slug: 'squidoctopus',
    theme: 'squidoctopus',
    favicon: '/favicon/squidoctopus.png',
    name: { id: 'Cahaya Squid & Octopus', en: 'Cahaya Squid & Octopus' },
    short: { id: 'Cumi & Gurita Beku', en: 'Frozen Squid & Octopus' },
    tagline: {
      id: 'Dari utuh sampai potongan siap olah',
      en: 'From whole round to ready-to-cook cuts',
    },
  },
  {
    key: 'charcoal' as const,
    slug: 'charcoal',
    theme: 'charcoal',
    favicon: '/favicon/charcoal.png',
    name: { id: 'Cahaya Charcoal', en: 'Cahaya Charcoal' },
    short: { id: 'Arang Batok Kelapa & Briket', en: 'Coconut Shell Charcoal & Briquettes' },
    tagline: {
      id: 'Karbonisasi terkontrol, siap pasar ekspor',
      en: 'Controlled carbonisation, export ready',
    },
  },
  {
    key: 'spa' as const,
    slug: 'cahayareflexology',
    theme: 'spa',
    favicon: '/favicon/spa.png',
    // TODO(konfirmasi): brosur menulis "Cahaya Treatment", route yang diminta
    // klien "/cahayareflexology". Perlu satu nama yang dipakai konsisten.
    name: { id: 'Cahaya Reflexology', en: 'Cahaya Reflexology' },
    short: { id: 'Pijat, Refleksi & Bekam', en: 'Massage, Reflexology & Cupping' },
    tagline: {
      id: 'Panggilan ke rumah, Depok & Bogor',
      en: 'Home service across Depok & Bogor',
    },
  },
] as const;

export type Brand = (typeof BRANDS)[number];

export function getBrand(key: BrandKey): Brand {
  const brand = BRANDS.find((b) => b.key === key);
  if (!brand) throw new Error(`Brand tidak dikenal: ${key}`);
  return brand;
}

/** Membangun path yang sadar bahasa. localePath('en', 'charcoal') -> /en/charcoal */
export function localePath(locale: Locale, slug: string): string {
  const clean = slug.replace(/^\/+|\/+$/g, '');
  const prefix = locale === DEFAULT_LOCALE ? '' : `/${locale}`;
  return clean ? `${prefix}/${clean}` : prefix || '/';
}

/** Tautan WhatsApp dengan pesan yang sudah terisi sesuai halaman dan bahasa. */
export function waLink(number: string, message: string): string {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
