import { motion, useScroll, useSpring } from 'motion/react'

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  // Spring suaviza el progreso para evitar saltos cuando Lenis interpola
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.4,
  })

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[2px] bg-linear-to-r from-red-500 via-red-400 to-red-600 origin-left z-110 pointer-events-none shadow-[0_0_8px_rgba(239,68,68,0.6)]"
    />
  )
}
