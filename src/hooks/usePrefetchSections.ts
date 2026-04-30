import { useEffect } from 'react'

/**
 * Prefetch lazy chunks de las secciones below-fold después del hero load.
 * Cuando el usuario scrollea, los chunks ya están en cache → mount inmediato,
 * sin Suspense fallback visible ni "fetching chunk + parse JS" jank.
 */
export function usePrefetchSections() {
  useEffect(() => {
    const prefetch = () => {
      void import('../components/sections/Services')
      void import('../components/sections/Contact')
      void import('../components/sections/Testimonials')
      void import('../components/sections/Location')
      void import('../components/sections/CtaFinal')
    }

    const ric = (window as Window & {
      requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number
    }).requestIdleCallback

    const t = setTimeout(() => {
      if (ric) ric(prefetch, { timeout: 3000 })
      else prefetch()
    }, 1800)

    return () => clearTimeout(t)
  }, [])
}
