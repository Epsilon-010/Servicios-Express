import { useEffect } from 'react'

/**
 * Aparición progresiva basada en IntersectionObserver + CSS transitions.
 * - Sin GSAP ScrollTrigger (era ~70KB y rompía con lazy loading)
 * - MutationObserver detecta secciones que se agregan tarde (React.lazy)
 * - Las clases las maneja el CSS — esto solo añade `.is-visible`
 */
export function useScrollAnimations() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.05, rootMargin: '0px 0px -40px 0px' },
    )

    const observe = (root: ParentNode) => {
      root.querySelectorAll<HTMLElement>('[data-animate]').forEach((el) => {
        if (!el.classList.contains('is-visible')) io.observe(el)
      })
    }

    observe(document)

    const mo = new MutationObserver((mutations) => {
      mutations.forEach((m) => {
        m.addedNodes.forEach((node) => {
          if (!(node instanceof HTMLElement)) return
          if (node.matches('[data-animate]')) io.observe(node)
          observe(node)
        })
      })
    })
    mo.observe(document.body, { childList: true, subtree: true })

    return () => {
      io.disconnect()
      mo.disconnect()
    }
  }, [])
}
