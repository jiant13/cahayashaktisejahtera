"""Membuat gambar Open Graph (1200x630) untuk tiap halaman dan bahasa.

Hasilnya ditulis ke public/og/<brand>-<locale>.jpg dan dipakai Base.astro.
Jalankan ulang kalau nama, tagline, atau foto divisi berubah:

    python scripts/generate-og.py

Butuh Pillow dan fontTools (+ brotli) untuk membaca font woff2 dari node_modules.
Teks di bawah mengikuti BRANDS di src/data/site.ts — samakan kalau salah satunya diubah.
"""

from __future__ import annotations

import io
from pathlib import Path

from fontTools.ttLib import TTFont
from PIL import Image, ImageDraw, ImageFilter, ImageFont

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / 'public' / 'og'
W, H = 1200, 630
GOLD = (200, 160, 76)

# Warna mengikuti token --color-deep dan --color-accent di global.css.
PAGES = {
    'induk': {
        'deep': '#0b1a2e', 'accent': '#c8a04c', 'photo': None, 'path': '',
        'id': ('KUAT · AMAN · SEJAHTERA', 'Lima divisi, satu standar kerja.',
               'Udang, bandeng, cumi & gurita, arang batok kelapa, serta layanan pijat dan refleksi.'),
        'en': ('STRONG · SAFE · PROSPEROUS', 'Five divisions, one standard of work.',
               'Shrimp, milkfish, squid & octopus, coconut shell charcoal, and wellness services.'),
    },
    'shrimp': {
        'deep': '#081a2c', 'accent': '#a8d5e8', 'photo': 'udang/windu-panen', 'path': 'udangbalapid',
        'id': ('Udang Fresh dan Frozen', 'Udang Balap ID', 'Tambak sendiri, dari benur sampai kontainer'),
        'en': ('Fresh and Frozen Shrimp', 'Udang Balap ID', 'Own ponds, from hatchery to container'),
    },
    'milkfish': {
        'deep': '#10262b', 'accent': '#b7d3cb', 'photo': 'milkfish/segar-tumpukan', 'path': 'milkfish',
        'id': ('Bandeng Beku', 'Cahaya Milkfish', 'Bandeng utuh beku, dikemas per ekor'),
        'en': ('Frozen Milkfish', 'Cahaya Milkfish', 'Frozen whole milkfish, packed per piece'),
    },
    'squidoctopus': {
        'deep': '#16142a', 'accent': '#c6b8ec', 'photo': 'squidoctopus/gurita-tentakel', 'path': 'squidoctopus',
        'id': ('Cumi & Gurita Beku', 'Cahaya Squid & Octopus', 'Dari utuh sampai potongan siap olah'),
        'en': ('Frozen Squid & Octopus', 'Cahaya Squid & Octopus', 'From whole round to ready-to-cook cuts'),
    },
    'charcoal': {
        'deep': '#0d0b0c', 'accent': '#dda88c', 'photo': 'charcoal/bara-besar', 'path': 'charcoal',
        'id': ('Arang Batok Kelapa & Briket', 'Cahaya Charcoal', 'Karbonisasi terkontrol, siap pasar ekspor'),
        'en': ('Coconut Shell Charcoal & Briquettes', 'Cahaya Charcoal', 'Controlled carbonisation, export ready'),
    },
    'spa': {
        'deep': '#2b4a40', 'accent': '#d9a6a0', 'photo': 'spa/hero', 'path': 'cahayareflexology',
        'id': ('Pijat, Refleksi & Bekam', 'Cahaya Reflexology', 'Panggilan ke rumah, Depok & Bogor'),
        'en': ('Massage, Reflexology & Cupping', 'Cahaya Reflexology', 'Home service across Depok & Bogor'),
    },
}


def hex_rgb(value: str) -> tuple[int, int, int]:
    value = value.lstrip('#')
    return tuple(int(value[i:i + 2], 16) for i in (0, 2, 4))  # type: ignore[return-value]


def load_font(name: str, size: int, weight: int) -> ImageFont.FreeTypeFont:
    """Font variabel woff2 dari node_modules, dikonversi ke TTF di memori."""
    src = {
        'serif': 'node_modules/@fontsource-variable/cormorant-garamond/files/cormorant-garamond-latin-wght-normal.woff2',
        'sans': 'node_modules/@fontsource-variable/inter/files/inter-latin-wght-normal.woff2',
    }[name]
    tt = TTFont(ROOT / src)
    tt.flavor = None
    buf = io.BytesIO()
    tt.save(buf)
    buf.seek(0)
    font = ImageFont.truetype(buf, size)
    font.set_variation_by_axes([weight])
    return font


def white_logo(name: str, height: int) -> Image.Image:
    """Logo sumber berwarna hitam; diwarnai putih lewat kanal alfa.
    Brand Guidelines hanya mengizinkan navy, emas, putih, dan hitam."""
    src = Image.open(ROOT / 'public' / 'brand' / f'{name}.png').convert('RGBA')
    logo = Image.new('RGBA', src.size, (255, 255, 255, 0))
    logo.putalpha(src.getchannel('A'))
    ratio = height / src.height
    return logo.resize((round(src.width * ratio), height), Image.LANCZOS)


def wrap(draw: ImageDraw.ImageDraw, text: str, font: ImageFont.FreeTypeFont, width: int) -> list[str]:
    lines: list[str] = []
    for word in text.split():
        trial = f'{lines[-1]} {word}' if lines else word
        if lines and draw.textlength(trial, font=font) <= width:
            lines[-1] = trial
        else:
            lines.append(word)
    return lines


def spaced(draw: ImageDraw.ImageDraw, xy: tuple[int, int], text: str, font, fill, tracking: float) -> None:
    """Teks huruf besar berspasi lebar, seperti kelas .eyebrow di situs."""
    x, y = xy
    for ch in text:
        draw.text((x, y), ch, font=font, fill=fill)
        x += draw.textlength(ch, font=font) + tracking


def photo_panel(path: str, deep: tuple[int, int, int]) -> Image.Image:
    """Foto di sisi kanan, diredam dan dilebur ke warna divisi di sisi kiri."""
    img = Image.open(ROOT / 'src' / 'assets' / 'photos' / f'{path}.jpg').convert('RGB')
    panel_w = 760
    scale = max(panel_w / img.width, H / img.height)
    img = img.resize((round(img.width * scale), round(img.height * scale)), Image.LANCZOS)
    left = (img.width - panel_w) // 2
    top = (img.height - H) // 2
    img = img.crop((left, top, left + panel_w, top + H))

    # Redam saturasi dan kecerahan supaya semua divisi terasa satu keluarga.
    gray = img.convert('L').convert('RGB')
    img = Image.blend(img, gray, 0.45)
    img = Image.blend(img, Image.new('RGB', img.size, deep), 0.38)

    canvas = Image.new('RGB', (W, H), deep)
    canvas.paste(img, (W - panel_w, 0))

    # Gradasi horizontal: pekat di kiri (area teks), menipis ke kanan.
    mask = Image.new('L', (W, H))
    px = mask.load()
    fade_start, fade_end = W - panel_w, W - panel_w + 420
    for x in range(W):
        if x <= fade_start:
            a = 255
        elif x >= fade_end:
            a = 70
        else:
            t = (x - fade_start) / (fade_end - fade_start)
            a = round(255 - t * (255 - 70))
        for y in range(H):
            px[x, y] = a
    return Image.composite(Image.new('RGB', (W, H), deep), canvas, mask)


def glow_panel(deep: tuple[int, int, int], accent: tuple[int, int, int]) -> Image.Image:
    """Latar halaman induk: navy dengan pendar emas lembut di kanan atas."""
    canvas = Image.new('RGB', (W, H), deep)
    glow = Image.new('L', (W, H), 0)
    ImageDraw.Draw(glow).ellipse((620, -260, 1420, 420), fill=55)
    glow = glow.filter(ImageFilter.GaussianBlur(140))
    return Image.composite(Image.new('RGB', (W, H), accent), canvas, glow)


def render(key: str, locale: str) -> Image.Image:
    page = PAGES[key]
    deep, accent = hex_rgb(page['deep']), hex_rgb(page['accent'])
    eyebrow, title, tagline = page[locale]

    img = photo_panel(page['photo'], deep) if page['photo'] else glow_panel(deep, accent)

    if not page['photo']:
        # Halaman induk tidak punya foto; monogram emas samar mengisi sisi kanan.
        src = Image.open(ROOT / 'public' / 'brand' / 'mark.png').convert('RGBA')
        mark = Image.new('RGBA', src.size, GOLD + (0,))
        mark.putalpha(src.getchannel('A').point(lambda a: round(a * 0.22)))
        mark = mark.resize((440, 440), Image.LANCZOS)
        img.paste(mark, (W - 440 - 70, (H - 440) // 2 + 10), mark)

    draw = ImageDraw.Draw(img)

    # Bilah emas di paling atas — sama dengan bingkai di situs.
    draw.rectangle((0, 0, W, 8), fill=GOLD)

    pad = 72
    logo = white_logo('lockup', 64)
    img.paste(logo, (pad, 62), logo)

    eyebrow_font = load_font('sans', 20, 600)
    title_font = load_font('serif', 86 if key != 'induk' else 76, 600)
    tagline_font = load_font('sans', 27, 400)
    url_font = load_font('sans', 20, 500)

    title_lines = wrap(draw, title, title_font, 640)
    line_h = round(title_font.size * 1.04)
    tagline_lines = wrap(draw, tagline, tagline_font, 600)

    # Susun dari bawah supaya jarak ke tepi bawah selalu sama.
    y = H - 82
    url = 'cahayashaktisejahtera.com' + (f'/{page["path"]}' if page['path'] else '')
    if locale == 'en':
        url = url.replace('.com', '.com/en', 1)
    draw.text((pad, y), url, font=url_font, fill=accent)

    y -= 34 + len(tagline_lines) * 38
    muted = tuple(round(c * 0.72 + 255 * 0.28) for c in deep)
    muted = tuple(min(255, round(v * 0.5 + 200 * 0.5)) for v in muted)
    for i, line in enumerate(tagline_lines):
        draw.text((pad, y + i * 38), line, font=tagline_font, fill=muted)

    y -= 22 + len(title_lines) * line_h
    for i, line in enumerate(title_lines):
        draw.text((pad, y + i * line_h), line, font=title_font, fill=(244, 246, 248))

    y -= 46
    spaced(draw, (pad, y), eyebrow.upper(), eyebrow_font, accent, 3.4)

    return img


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    for key in PAGES:
        for locale in ('id', 'en'):
            path = OUT / f'{key}-{locale}.jpg'
            render(key, locale).save(path, quality=86, optimize=True, progressive=True)
            print(f'{path.relative_to(ROOT)}  {path.stat().st_size // 1024} KB')


if __name__ == '__main__':
    main()
