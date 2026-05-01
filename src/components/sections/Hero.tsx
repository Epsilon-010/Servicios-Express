import { useMemo, useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import { cld } from '../../lib/cloudinary'

// Cloudinary: alpha-channel preserved (PNG → AVIF/WebP con transparencia)
const CAR_SRC = cld('image_hero_jksl2p', 'w_700', 'png')

/** Nieve CSS — 28 copos con keyframes GPU-accelerated, 0 JS por frame */
function CSSSnow() {
  const flakes = useMemo(
    () =>
      Array.from({ length: 12 }).map(() => ({
        left: `${Math.random() * 100}%`,
        size: 1 + Math.random() * 1.4,
        delay: -Math.random() * 25,
        duration: 14 + Math.random() * 18,
        opacity: 0.25 + Math.random() * 0.45,
        drift: Math.random() > 0.5 ? 1 : -1,
      })),
    [],
  )

  return (
    <div className="hero-snow absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {flakes.map((f, i) => (
        <span
          key={i}
          className="hero-flake"
          style={{
            left: f.left,
            width: `${f.size}px`,
            height: `${f.size}px`,
            opacity: f.opacity,
            animationDelay: `${f.delay}s`,
            animationDuration: `${f.duration}s`,
            ['--drift' as string]: f.drift,
          }}
        />
      ))}
    </div>
  )
}

export function Hero() {
  const heroRef = useRef<HTMLElement>(null)
  // Scroll progress 0→1 mientras el Hero pasa por la viewport
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  // Title se mueve más rápido que la página (sale antes) — sensación de aceleración
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -90])
  const titleOpacity = useTransform(scrollYProgress, [0, 0.6, 1], [1, 1, 0])
  // Car se queda más tiempo en cuadro — efecto de profundidad
  const carY = useTransform(scrollYProgress, [0, 1], [0, 60])
  const carScale = useTransform(scrollYProgress, [0, 1], [1, 0.92])
  // Stats fade out un poco antes que el resto
  const statsOpacity = useTransform(scrollYProgress, [0, 0.4, 0.8], [1, 0.6, 0])
  const statsY = useTransform(scrollYProgress, [0, 1], [0, -40])

  return (
    <header ref={heroRef} className="hero-section relative min-h-screen bg-stone-950 overflow-hidden text-white isolate">
      {/* ─── NIEVE CSS — keyframes puros, 0 JS por frame ─── */}
      <CSSSnow />

      {/* Faint horizon glow (suggests far-away snow under moonlight) */}
      <div className="absolute bottom-0 inset-x-0 h-1/2 z-0 hero-horizon pointer-events-none" />

      {/* ─── CONTENT ─── */}
      <div className="relative z-20 min-h-screen flex flex-col items-center justify-between px-5 sm:px-8 pt-16 pb-6 lg:pt-20 lg:pb-8">
        {/* Top: badge + title + spotlight */}
        <motion.div
          style={{ y: titleY, opacity: titleOpacity }}
          className="flex flex-col items-center text-center max-w-3xl mx-auto pt-1 sm:pt-3 w-full will-change-transform"
        >
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="flex items-center gap-5 mb-5"
          >
            <div className="w-10 h-px bg-red-500" />
            <span className="text-red-400 text-[10px] font-medium tracking-[0.42em] uppercase">
              Taller · Oaxaca
            </span>
            <div className="w-10 h-px bg-red-500" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.9, ease: 'easeOut' }}
            className="font-playfair font-light leading-[1.02] mb-2 text-white"
            style={{ fontSize: 'clamp(2.4rem, 5vw, 4.8rem)' }}
          >
            Auto Servicio
            <br />
            <span className="italic font-medium">Quevedo Express</span>
          </motion.h1>

          {/* ─── TUBO NEÓN — luz brillante + neblina cayendo ─── */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0.4 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.65, duration: 0.9, ease: 'easeOut' }}
            style={{ transformOrigin: 'center' }}
            className="hero-spot relative w-full max-w-md mx-auto h-8 mb-1"
          >
            <div className="hero-spot-halo" />
            <div className="hero-spot-bar-soft" />
            <div className="hero-spot-bar-core" />
            <div className="hero-spot-mist" />
          </motion.div>
        </motion.div>

        {/* ─── CAR (image) with headlights + 3D ground illumination ─── */}
        <motion.div
          style={{ y: carY, scale: carScale }}
          className="hero-car relative w-[min(540px,86vw)] mx-auto -mt-2 will-change-transform"
        ><motion.div
          initial={{ opacity: 0, y: 50, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 1, duration: 1.2, ease: 'easeOut' }}
          className="relative"
        >
          {/* Perspective grid floor (concrete, se ilumina con los faros) */}
          <div className="hero-ground-floor absolute" />

          {/* Glow combinado: pool + flare + spread en 1 capa GPU (vs 3 antes) */}
          <div className="hero-ground-glow absolute" />

          <div className="hero-car-frame relative">
            <img
              src={CAR_SRC}
              alt="Auto Servicio Quevedo Express"
              className="relative block w-full h-auto select-none"
              draggable={false}
            />

            {/* Headlights — bulb + core combinados en 1 elemento por faro */}
            <div
              className="hero-headlight absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: '24%', top: '40%' }}
            />
            <div
              className="hero-headlight absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: '76%', top: '40%' }}
            />
          </div>
        </motion.div>
        </motion.div>

        {/* Stats — editorial, compacto */}
        <motion.div
          style={{ y: statsY, opacity: statsOpacity }}
          className="w-full max-w-4xl mx-auto pt-4 will-change-transform"
        ><motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.8 }}
        >
          <div className="h-px w-full bg-linear-to-r from-transparent via-white/25 to-transparent mb-5" />

          <div className="grid grid-cols-3 gap-4 sm:gap-10 text-center">
            <div className="hero-stat px-2 sm:px-4">
              <p className="text-red-400/80 text-[10px] uppercase tracking-[0.4em] mb-2 font-medium">
                Años
              </p>
              <p className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-light text-white leading-none">
                <span data-counter="30">30</span>
              </p>
            </div>
            <div className="hero-stat px-2 sm:px-4 border-x border-white/10">
              <p className="text-red-400/80 text-[10px] uppercase tracking-[0.4em] mb-2 font-medium">
                Clientes
              </p>
              <p className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-light text-white leading-none">
                <span data-counter="500" data-suffix="+">500+</span>
              </p>
            </div>
            <div className="hero-stat px-2 sm:px-4">
              <p className="text-red-400/80 text-[10px] uppercase tracking-[0.4em] mb-2 font-medium">
                Reseñas
              </p>
              <p className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-light text-white leading-none">
                5.0<span className="text-red-400 italic ml-1">★</span>
              </p>
            </div>
          </div>
        </motion.div>
        </motion.div>
      </div>
    </header>
  )
}
