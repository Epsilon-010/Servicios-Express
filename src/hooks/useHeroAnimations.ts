import { useEffect } from 'react'
import gsap from 'gsap'

export function useHeroAnimations() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const lights = '.hero-headlight'
      const glow = '.hero-ground-glow'
      const floor = '.hero-ground-floor'

      const BASE = {
        bulb: 0.22,
        glow: 0.18,
        floor: 0.16,
      }
      gsap.set(lights, { opacity: BASE.bulb, scale: 0.85 })
      gsap.set(glow, { opacity: BASE.glow, scale: 0.85 })
      gsap.set(floor, { opacity: BASE.floor })

      const flash = gsap.timeline({ repeat: -1, delay: 2.2 })
      flash
        // pre-flicker
        .to(lights, { opacity: 0.5, scale: 0.95, duration: 0.05, ease: 'power2.out' })
        .to(lights, { opacity: BASE.bulb, scale: 0.85, duration: 0.08 })
        // FLASH 1
        .to(lights, { opacity: 1, scale: 1.4, duration: 0.08, ease: 'power3.out' })
        .to(glow, { opacity: 1, scale: 1.05, duration: 0.1, ease: 'power3.out' }, '<')
        .to(floor, { opacity: 0.7, duration: 0.12, ease: 'power3.out' }, '<')
        // dip
        .to([lights, glow], { opacity: 0.45, scale: 0.92, duration: 0.16 })
        .to(floor, { opacity: 0.4, duration: 0.16 }, '<')
        // FLASH 2 peak
        .to(lights, { opacity: 1, scale: 1.5, duration: 0.1, ease: 'power3.out' })
        .to(glow, { opacity: 1, scale: 1.12, duration: 0.12, ease: 'power3.out' }, '<')
        .to(floor, { opacity: 0.92, duration: 0.14, ease: 'power3.out' }, '<')
        // steady
        .to(lights, { opacity: 0.95, scale: 1.3, duration: 0.7 })
        .to(glow, { opacity: 0.92, scale: 1.06, duration: 0.7 }, '<')
        .to(floor, { opacity: 0.78, duration: 0.7 }, '<')
        // fade back to baseline
        .to(lights, { opacity: BASE.bulb, scale: 0.85, duration: 1.9, ease: 'power2.in' })
        .to(glow, { opacity: BASE.glow, scale: 0.85, duration: 1.9, ease: 'power2.in' }, '<')
        .to(floor, { opacity: BASE.floor, duration: 1.9, ease: 'power2.in' }, '<')
        // idle
        .to({}, { duration: 2.6 })

      // Pausa cuando hero está fuera del viewport
      const hero = document.querySelector('header')
      if (!hero) return

      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) flash.play()
            else flash.pause()
          })
        },
        { threshold: 0.05 },
      )
      io.observe(hero)

      // Pausa también durante scroll activo (libera GPU)
      let scrollTimer = 0
      let scrolling = false
      const onScroll = () => {
        if (!scrolling) {
          scrolling = true
          flash.pause()
        }
        clearTimeout(scrollTimer)
        scrollTimer = window.setTimeout(() => {
          scrolling = false
          // Resume solo si hero está visible
          if (hero.getBoundingClientRect().bottom > 0) flash.play()
        }, 180)
      }
      window.addEventListener('scroll', onScroll, { passive: true })

      return () => {
        io.disconnect()
        window.removeEventListener('scroll', onScroll)
        clearTimeout(scrollTimer)
      }
    })

    return () => ctx.revert()
  }, [])
}
