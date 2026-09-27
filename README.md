# Ilm-fan olami: 3D

Matematika, fizika, kosmologiya, biologiya va kimyo bo‘yicha interaktiv 3D modellar — o‘zbek, rus va ingliz tillarida.
24 bo‘lim + grafik kalkulyator. Brauzerning o‘zida ishlaydi, internetsiz ham (PWA).

© 2026 Rustamova Gulnoza. Barcha huquqlar himoyalangan.

## Fayllar

| Fayl | Vazifasi |
| --- | --- |
| `index.html` | Ilovaning o‘zi — hamma narsa bitta faylda (three.js kutubxonasi va Blender’da qurilgan yurak modeli ham ichida) |
| `katta-masalalar.html` | `index.html`ning nusxasi — eski havolalar ishlashi uchun |
| `manifest.webmanifest` | PWA: telefonda «Bosh ekranga qo‘shish» |
| `sw.js` | Service worker — internetsiz ishlash uchun kesh |
| `icon-192.png`, `icon-512.png` | Ilova ikonkalari |
| `.nojekyll` | GitHub Pages Jekyll’ni o‘chiradi (fayllar o‘zgarmasdan chiqadi) |

## GitHub Pages’ga joylash

1. GitHub’da yangi repozitoriy oching (masalan, `ilm-fan-olami-3d`), **Public**.
2. Shu papkadagi barcha fayllarni repozitoriyga yuklang (**Add file → Upload files**), `main` branch’iga.
3. **Settings → Pages → Build and deployment**: Source = *Deploy from a branch*, Branch = `main`, papka = `/ (root)` → **Save**.
4. 1–2 daqiqadan so‘ng ilova `https://<foydalanuvchi>.github.io/ilm-fan-olami-3d/` manzilida ochiladi.

## Yangilash

- Yangi `index.html`ni yuklang (eskisini almashtiring).
- `sw.js` ichidagi `CACHE` raqamini oshiring (`v7` → `v8`) — shunda foydalanuvchilarning telefonidagi eski kesh yangilanadi.
- Ikkalasini ham bir vaqtda yuklang.

## Suv belgisi

Barcha sahnalarda va grafik kalkulyatorda muallif suv belgisi ko‘rinadi. Matni `index.html` boshidagi
`WM_TEXT` o‘zgaruvchisida: `© 2026 Rustamova Gulnoza · Ilm-fan olami: 3D`.

## Texnik

- 3D: three.js r128 (MIT), WebGL. Yurak — Blender 5 (metaball) dan eksport qilingan mesh; DNK, hujayra, xloroplast — protsedural.
- Boshqa bo‘limlar: Canvas 2D.
- Tashqi server yoki kutubxona kerak emas; AI izohlari uchun foydalanuvchi o‘z API kalitini kiritadi.
