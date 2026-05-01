import { useEffect } from 'react'

/**
 * Magnetic pull en botones marcados [data-magnetic].
 * - Vanilla JS + rAF (sin GSAP — antes pesaba ~70KB solo para esto)
 * - MutationObserver para botones que entran tarde al DOM (lazy sections)
 */
export function useMicroInteractions() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const cleanups = new Map<HTMLElement, () => void>()

    const attach = (btn: HTMLElement) => {
      if (cleanups.has(btn)) return
      let rafId = 0

      const onMove = (e: MouseEvent) => {
        const rect = btn.getBoundingClientRect()
        const x = (e.clientX - rect.left - rect.width / 2) * 0.25
        const y = (e.clientY - rect.top - rect.height / 2) * 0.25
        cancelAnimationFrame(rafId)
        rafId = requestAnimationFrame(() => {
          btn.style.transform = `translate3d(${x}px, ${y}px, 0)`
        })
      }

      let resetTimeout = 0
      const onLeave = () => {
        cancelAnimationFrame(rafId)
        btn.style.transition = 'transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)'
        btn.style.transform = 'translate3d(0, 0, 0)'
        window.clearTimeout(resetTimeout)
        resetTimeout = window.setTimeout(() => {
          btn.style.transition = ''
        }, 620)
      }

      btn.addEventListener('mousemove', onMove)
      btn.addEventListener('mouseleave', onLeave)

      cleanups.set(btn, () => {
        cancelAnimationFrame(rafId)
        window.clearTimeout(resetTimeout)
        btn.removeEventListener('mousemove', onMove)
        btn.removeEventListener('mouseleave', onLeave)
      })
    }

    const scan = (root: ParentNode) => {
      root.querySelectorAll<HTMLElement>('[data-magnetic]').forEach(attach)
    }

    scan(document)

    // Picks up [data-magnetic] dentro de secciones lazy-loaded (CtaFinal)
    const mo = new MutationObserver((mutations) => {
      mutations.forEach((m) => {
        m.addedNodes.forEach((node) => {
          if (!(node instanceof HTMLElement)) return
          if (node.matches('[data-magnetic]')) attach(node)
          scan(node)
        })
      })
    })
    mo.observe(document.body, { childList: true, subtree: true })

    return () => {
      cleanups.forEach((fn) => fn())
      cleanups.clear()
      mo.disconnect()
    }
  }, [])
}
