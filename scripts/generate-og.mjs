import sharp from 'sharp'
import { writeFile } from 'node:fs/promises'

// ─────────────────────────────────────────────────────────────
// 1) OG IMAGE — 1200 x 630 (Open Graph para WhatsApp/Facebook)
// ─────────────────────────────────────────────────────────────
const W = 1200
const H = 630
const CX = 600
const CY = 315

const PATTERN = 'AUTOSERVICIO EXPRESS  ·  '
const PATTERN_REPS = 3

const RING_FONT = 'Arial Black, Helvetica, sans-serif'
const RING_FONT_SIZE = 30
const RING_RADIUS = 240

function buildRingText() {
  const filled = PATTERN.repeat(PATTERN_REPS)
  const totalChars = filled.length
  const angleStep = 360 / totalChars
  const startAngle = -90

  return filled
    .split('')
    .map((char, i) => {
      const angle = startAngle + i * angleStep
      const rad = (angle * Math.PI) / 180
      const x = CX + RING_RADIUS * Math.cos(rad)
      const y = CY + RING_RADIUS * Math.sin(rad)
      const rotation = angle + 90
      const escaped = char === '&' ? '&amp;' : char === '<' ? '&lt;' : char
      return `<text x="${x.toFixed(2)}" y="${y.toFixed(2)}" font-family="${RING_FONT}" font-size="${RING_FONT_SIZE}" font-weight="900" fill="#ffffff" text-anchor="middle" dominant-baseline="middle" transform="rotate(${rotation.toFixed(2)} ${x.toFixed(2)} ${y.toFixed(2)})">${escaped}</text>`
    })
    .join('\n  ')
}

const ringText = buildRingText()

const ogSvg = `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="bg" cx="50%" cy="50%" r="65%">
      <stop offset="0%" stop-color="#1c1917"/>
      <stop offset="60%" stop-color="#0c0a09"/>
      <stop offset="100%" stop-color="#000000"/>
    </radialGradient>
    <radialGradient id="halo" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#ef4444" stop-opacity="0.35"/>
      <stop offset="60%" stop-color="#ef4444" stop-opacity="0.10"/>
      <stop offset="100%" stop-color="#ef4444" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <ellipse cx="${CX}" cy="${CY}" rx="380" ry="300" fill="url(#halo)"/>
  <circle cx="${CX}" cy="${CY}" r="${RING_RADIUS + 22}" fill="none" stroke="#ef4444" stroke-width="1.5" opacity="0.5"/>
  <circle cx="${CX}" cy="${CY}" r="${RING_RADIUS - 22}" fill="none" stroke="#ef4444" stroke-width="1.5" opacity="0.5"/>
  ${ringText}
  <rect x="370" y="265" width="460" height="48" fill="#ef4444" rx="2"/>
  <text x="${CX}" y="299" font-family="Arial, Helvetica, sans-serif" font-size="28" font-weight="700" fill="#ffffff" letter-spacing="14" text-anchor="middle">AUTOSERVICIO</text>
  <text x="${CX}" y="400" font-family="Arial Black, Impact, Helvetica, sans-serif" font-size="92" font-weight="900" fill="#ffffff" text-anchor="middle">Express</text>
</svg>`

await writeFile('public/og-image.svg', ogSvg)
await sharp(Buffer.from(ogSvg))
  .jpeg({ quality: 88, mozjpeg: true })
  .toFile('public/og-image.jpg')

// ─────────────────────────────────────────────────────────────
// 2) FAVICON — cuadrado, simplificado (legible a 16x16)
// ─────────────────────────────────────────────────────────────
const FAV_SIZE = 192
const faviconSvg = `<svg width="${FAV_SIZE}" height="${FAV_SIZE}" viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg">
  <!-- Fondo negro con bordes redondeados -->
  <rect width="192" height="192" rx="32" fill="#0c0a09"/>

  <!-- Halo rojo radial central -->
  <defs>
    <radialGradient id="haloFav" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#ef4444" stop-opacity="0.4"/>
      <stop offset="100%" stop-color="#ef4444" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="192" height="192" rx="32" fill="url(#haloFav)"/>

  <!-- Anillo rojo (echoes the OG) -->
  <circle cx="96" cy="96" r="72" fill="none" stroke="#ef4444" stroke-width="3" opacity="0.7"/>

  <!-- Letra "Q" estilizada (Quevedo) en blanco italic -->
  <text x="96" y="118" font-family="Georgia, 'Times New Roman', serif" font-size="92" font-weight="700" font-style="italic" fill="#ffffff" text-anchor="middle">Q</text>

  <!-- Pequeña "e" decorativa al lado de la Q (Express) -->
  <text x="138" y="130" font-family="Georgia, serif" font-size="28" font-weight="700" font-style="italic" fill="#ef4444" text-anchor="middle">e</text>
</svg>`

await writeFile('public/favicon.svg', faviconSvg)

// PNG 192 — el que Google realmente prefiere para search results
await sharp(Buffer.from(faviconSvg))
  .resize(192, 192)
  .png()
  .toFile('public/favicon-192.png')

// PNG 32 — para tabs del navegador
await sharp(Buffer.from(faviconSvg))
  .resize(32, 32)
  .png()
  .toFile('public/favicon-32.png')

// Apple touch icon — pantalla de inicio de iOS (sin radio porque iOS lo aplica)
await sharp(Buffer.from(faviconSvg))
  .resize(180, 180)
  .png()
  .toFile('public/apple-touch-icon.png')

console.log('✓ public/og-image.jpg generado')
console.log('✓ public/og-image.svg guardado')
console.log('✓ public/favicon.svg generado (192x192 cuadrado)')
console.log('✓ public/favicon-192.png generado')
console.log('✓ public/favicon-32.png generado')
console.log('✓ public/apple-touch-icon.png generado')
