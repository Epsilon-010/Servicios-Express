import { useEffect, useState } from 'react'

/**
 * Warm-up trick: monta imágenes pequeñas e invisibles ~1.5s después del load.
 * Esto fuerza al browser a:
 *   1. Fetch (cache HTTP)
 *   2. Decode (cache decoded bitmap)
 *   3. Upload a GPU como textura
 *
 * Cuando el usuario scrollea a Services, las texturas ya están en memoria de GPU
 * → no hay frame drop al renderizar las cards por primera vez.
 */
export function TextureWarmup({ urls }: { urls: string[] }) {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 1500)
    return () => clearTimeout(t)
  }, [])

  if (!show) return null

  return (
    <div
      aria-hidden
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '64px',
        height: '64px',
        overflow: 'hidden',
        opacity: 0.001, // casi invisible pero pintado
        pointerEvents: 'none',
        zIndex: -1,
        contain: 'strict',
      }}
    >
      {urls.map((src) => (
        <img
          key={src}
          src={src}
          alt=""
          width={64}
          height={64}
          decoding="async"
          loading="eager"
          style={{
            position: 'absolute',
            inset: 0,
            width: '64px',
            height: '64px',
            objectFit: 'cover',
            transform: 'translateZ(0)', // fuerza capa GPU
          }}
        />
      ))}
    </div>
  )
}
