import { useEffect } from 'react'

export function useNavbarScroll() {
  useEffect(() => {
    const nav = document.querySelector('nav')
    const onScroll = () => {
      nav?.classList.toggle('nav-scrolled', window.scrollY > 40)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
}
