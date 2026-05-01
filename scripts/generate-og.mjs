import sharp from 'sharp'
import { writeFile } from 'node:fs/promises'

const W = 1200
const H = 630
const CX = 600
const CY = 315

// Patrón que se repite alrededor del círculo
const PATTERN = 'AUTOSERVICIO EXPRESS  ·  '
const PATTERN_REPS = 3 // 3 vueltas completas — ajusta el radio para que cierre exacto

const RING_FONT = 'Arial Black, Helvetica, sans-serif'
const RING_FONT_SIZE = 30
const RING_RADIUS = 240

/**
 * Distribuye el patrón EXACTAS N veces alrededor del círculo.
 * Garantiza cierre limpio sin overlaps.
 */
function buildRingText() {
  const filled = PATTERN.repeat(PATTERN_REPS)
  const totalChars = filled.length
  const angleStep = 360 / totalChars
  const startAngle = -90 // empieza arriba (12 en punto)

  return filled
    .split('')
    .map((char, i) => {
      const angle = startAngle + i * angleStep
      const rad = (angle * Math.PI) / 180
      const x = CX + RING_RADIUS * Math.cos(rad)
      const y = CY + RING_RADIUS * Math.sin(rad)
      const rotation = angle + 90 // tangente al círculo
      const escaped = char === '&' ? '&amp;' : char === '<' ? '&lt;' : char
      return `<text x="${x.toFixed(2)}" y="${y.toFixed(2)}" font-family="${RING_FONT}" font-size="${RING_FONT_SIZE}" font-weight="900" fill="#ffffff" text-anchor="middle" dominant-baseline="middle" transform="rotate(${rotation.toFixed(2)} ${x.toFixed(2)} ${y.toFixed(2)})">${escaped}</text>`
    })
    .join('\n  ')
}

const ringText = buildRingText()

const svg = `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
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

  <!-- Fondo negro -->
  <rect width="${W}" height="${H}" fill="url(#bg)"/>

  <!-- Halo rojo central -->
  <ellipse cx="${CX}" cy="${CY}" rx="380" ry="300" fill="url(#halo)"/>

  <!-- Anillos rojos del logo (uno fuera, uno dentro del texto curvo) -->
  <circle cx="${CX}" cy="${CY}" r="${RING_RADIUS + 22}" fill="none" stroke="#ef4444" stroke-width="1.5" opacity="0.5"/>
  <circle cx="${CX}" cy="${CY}" r="${RING_RADIUS - 22}" fill="none" stroke="#ef4444" stroke-width="1.5" opacity="0.5"/>

  <!-- Texto curvo -->
  ${ringText}

  <!-- Banda roja con "AUTOSERVICIO" -->
  <rect x="370" y="265" width="460" height="48" fill="#ef4444" rx="2"/>
  <text x="${CX}" y="299" font-family="Arial, Helvetica, sans-serif" font-size="28" font-weight="700" fill="#ffffff" letter-spacing="14" text-anchor="middle">AUTOSERVICIO</text>

  <!-- "Express" grande sans-serif blanco (igual al original) -->
  <text x="${CX}" y="400" font-family="Arial Black, Impact, Helvetica, sans-serif" font-size="92" font-weight="900" fill="#ffffff" text-anchor="middle">Express</text>
</svg>`

await writeFile('public/og-image.svg', svg)

await sharp(Buffer.from(svg))
  .jpeg({ quality: 88, mozjpeg: true })
  .toFile('public/og-image.jpg')

console.log('✓ public/og-image.jpg generado')
console.log('✓ public/og-image.svg guardado (referencia)')
