/**
 * Cloudinary URL builder con transformaciones por defecto:
 *   f_auto: AVIF / WebP / JPG según browser (incluye alpha si tiene)
 *   q_auto: calidad óptima automática
 *
 * Uso:
 *   cld('foto_xxxx')                 → ancho default 1000px
 *   cld('foto_xxxx', 'w_700')        → custom transform
 *   cld('logo_xxxx', '', 'png')      → sin resize, force ext
 */
const CLOUD_NAME = 'dsiuwnc0c'

export function cld(publicId: string, transforms = 'w_1000', ext = 'webp') {
  const t = ['f_auto', 'q_auto', transforms].filter(Boolean).join(',')
  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${t}/${publicId}.${ext}`
}
