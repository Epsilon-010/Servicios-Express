import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useCounters() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      document.querySelectorAll<HTMLElement>('[data-counter]').forEach((el) => {
        const target = parseInt(el.dataset.counter ?? '0', 10)
        const suffix = el.dataset.suffix ?? ''
        const obj = { val: 0 }

        const rect = el.getBoundingClientRect()
        const aboveFold = rect.top < window.innerHeight

        const tween = {
          val: target,
          duration: 2.2,
          ease: 'power3.out',
          onUpdate: () => {
            el.textContent = Math.round(obj.val) + suffix
          },
        }

        if (aboveFold) {
          gsap.to(obj, { ...tween, delay: 1.6 })
        } else {
          gsap.to(obj, {
            ...tween,
            scrollTrigger: { trigger: el, start: 'top 85%' },
          })
        }
      })
    })
    return () => ctx.revert()
  }, [])
}
