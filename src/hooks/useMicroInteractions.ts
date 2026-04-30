import { useEffect } from 'react'
import gsap from 'gsap'

export function useMicroInteractions() {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return

    const ctx = gsap.context(() => {
      // 3D tilt on cards marked [data-tilt]
      const tiltCards = document.querySelectorAll<HTMLElement>('[data-tilt]')
      const cleanups: Array<() => void> = []

      tiltCards.forEach((card) => {
        const onMove = (e: MouseEvent) => {
          const rect = card.getBoundingClientRect()
          const px = (e.clientX - rect.left) / rect.width - 0.5
          const py = (e.clientY - rect.top) / rect.height - 0.5
          gsap.to(card, {
            rotateY: px * 8,
            rotateX: -py * 8,
            y: -6,
            duration: 0.5,
            ease: 'power2.out',
            transformPerspective: 800,
            transformOrigin: 'center',
          })
        }
        const onLeave = () => {
          gsap.to(card, {
            rotateY: 0,
            rotateX: 0,
            y: 0,
            duration: 0.7,
            ease: 'expo.out',
          })
        }
        card.addEventListener('mousemove', onMove)
        card.addEventListener('mouseleave', onLeave)
        cleanups.push(() => {
          card.removeEventListener('mousemove', onMove)
          card.removeEventListener('mouseleave', onLeave)
        })
      })

      // Magnetic pull on buttons marked [data-magnetic]
      document.querySelectorAll<HTMLElement>('[data-magnetic]').forEach((btn) => {
        const onMove = (e: MouseEvent) => {
          const rect = btn.getBoundingClientRect()
          const x = e.clientX - rect.left - rect.width / 2
          const y = e.clientY - rect.top - rect.height / 2
          gsap.to(btn, { x: x * 0.25, y: y * 0.25, duration: 0.5, ease: 'power3.out' })
        }
        const onLeave = () => {
          gsap.to(btn, { x: 0, y: 0, duration: 0.7, ease: 'elastic.out(1,0.4)' })
        }
        btn.addEventListener('mousemove', onMove)
        btn.addEventListener('mouseleave', onLeave)
        cleanups.push(() => {
          btn.removeEventListener('mousemove', onMove)
          btn.removeEventListener('mouseleave', onLeave)
        })
      })

      return () => cleanups.forEach((fn) => fn())
    })

    return () => ctx.revert()
  }, [])
}
