/** Teks antarmuka yang dipakai bersama oleh nav dan footer di semua halaman. */

import type { Locale } from './site';

export const UI = {
  id: {
    langName: 'Indonesia',
    langSwitch: 'English',
    langSwitchAria: 'Ganti ke Bahasa Inggris',
    menu: 'Menu',
    close: 'Tutup',
    skipToContent: 'Lompat ke konten',
    waCta: 'WhatsApp',
    divisions: 'Divisi Kami',
    contact: 'Kontak',
    company: 'Perusahaan',
    aboutHolding:
      'PT Cahaya Shakti Sejahtera menaungi usaha budidaya dan ekspor udang beku, perdagangan arang batok kelapa, serta layanan pijat dan refleksi.',
    backToHolding: 'Profil perusahaan induk',
    partOf: 'Divisi dari',
    rights: 'Seluruh hak cipta dilindungi.',
    certNote: 'Nomor registrasi dan salinan sertifikat tersedia atas permintaan.',
    email: 'Surel',
    phone: 'Telepon',
    address: 'Alamat',
    hours: 'Jam Operasional',
  },
  en: {
    langName: 'English',
    langSwitch: 'Indonesia',
    langSwitchAria: 'Switch to Indonesian',
    menu: 'Menu',
    close: 'Close',
    skipToContent: 'Skip to content',
    waCta: 'WhatsApp',
    divisions: 'Our Divisions',
    contact: 'Contact',
    company: 'Company',
    aboutHolding:
      'PT Cahaya Shakti Sejahtera oversees integrated shrimp farming and frozen shrimp export, coconut shell charcoal trading, and massage and reflexology services.',
    backToHolding: 'Holding company profile',
    partOf: 'A division of',
    rights: 'All rights reserved.',
    certNote: 'Registration numbers and certificate copies are available on request.',
    email: 'Email',
    phone: 'Phone',
    address: 'Address',
    hours: 'Opening Hours',
  },
} as const satisfies Record<Locale, Record<string, string>>;

export type UIStrings = Readonly<Record<keyof (typeof UI)['id'], string>>;

export function ui(locale: Locale): UIStrings {
  return UI[locale];
}
