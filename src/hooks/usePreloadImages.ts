import { useEffect } from 'react'

/**
 * Pre-descarga + decodifica imágenes en idle time.
 * Cuando el usuario hace scroll a esa sección, ya están en memoria
 * y no causan jank por decode síncrono.
 */
export function usePreloadImages(urls: string[], delay = 1200) {
  useEffect(() => {
    let cancelled = false

    const run = () => {
      if (cancelled) return
      urls.forEach((url) => {
        const img = new Image()
        img.src = url
        // decode() devuelve una promise; el navegador procesa en idle
        img.decode?.().catch(() => {
          /* ignored — fallback al decode normal cuando se renderice */
        })
      })
    }

    const ric = (window as Window & {
      requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number
    }).requestIdleCallback

    const timer = setTimeout(() => {
      if (ric) ric(run, { timeout: 2000 })
      else run()
    }, delay)

    return () => {
      cancelled = true
      clearTimeout(timer)
    }
  }, [urls, delay])
}
