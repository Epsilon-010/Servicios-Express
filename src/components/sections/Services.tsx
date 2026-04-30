import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion } from 'motion/react'
import { services, type Service } from '../../data/services'
import { useOutsideClick } from '../../hooks/use-outside-click'

export function Services() {
  const [active, setActive] = useState<Service | null>(null)
  const cardRef = useRef<HTMLDivElement>(null)

  useOutsideClick(cardRef, () => setActive(null))

  // Body scroll lock iOS-safe: usa position:fixed + top negativo (overflow:hidden no funciona en Safari móvil)
  useEffect(() => {
    if (!active) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActive(null)
    }
    const scrollY = window.scrollY
    document.body.style.position = 'fixed'
    document.body.style.top = `-${scrollY}px`
    document.body.style.left = '0'
    document.body.style.right = '0'
    document.body.style.width = '100%'
    window.addEventListener('keydown', onKey)

    return () => {
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.left = ''
      document.body.style.right = ''
      document.body.style.width = ''
      window.scrollTo(0, scrollY)
      window.removeEventListener('keydown', onKey)
    }
  }, [active])

  return (
    <section
      id="servicios"
      className="relative py-20 sm:py-28 lg:py-44 bg-stone-950 text-white overflow-hidden"
      style={{ contentVisibility: 'auto', containIntrinsicSize: 'auto 1400px' }}
    >
      {/* Subtle red ambient at edges */}
      <div className="pointer-events-none absolute -top-40 -right-32 w-[500px] h-[500px] bg-red-900/10 rounded-full blur-[160px]" />
      <div className="pointer-events-none absolute -bottom-40 -left-32 w-[500px] h-[500px] bg-red-900/8 rounded-full blur-[160px]" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 sm:mb-16 lg:mb-20"
          data-animate="fade-up"
        >
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-px bg-red-500" />
              <span className="text-red-400 text-[10px] font-semibold tracking-[0.42em] uppercase">
                Especialidades
              </span>
            </div>
            <h2 className="text-[2.5rem] sm:text-5xl lg:text-7xl text-white tracking-tight font-playfair font-light leading-[1.05]">
              Nuestros <br className="hidden sm:block" />
              <span className="italic font-medium text-red-500">Servicios</span>
            </h2>
          </div>
          <p className="text-white/55 text-sm max-w-sm leading-[1.85] font-light lg:text-right">
            Pasa el cursor para ver el efecto.
            <br />
            Toca cualquier servicio para ver todo lo que incluye.
          </p>
        </div>

        {/* Grid de cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 lg:gap-8">
          {services.map((s, i) => {
            const Icon = s.Icon
            return (
              <motion.button
                key={s.title}
                type="button"
                onClick={() => setActive(s)}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: 'easeOut' }}
                className="group relative block w-full text-left overflow-hidden rounded-3xl ring-1 ring-stone-800/70 hover:ring-red-500/50 transition-shadow duration-500 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500/60 bg-stone-900"
                whileTap={{ scale: 0.985 }}
              >
                {/* Image — pan suave (translate sobre imagen ya escalada = sin retexture) */}
                <div className="relative w-full h-72 sm:h-80 md:h-96 lg:h-112 overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 w-full h-full object-cover scale-[1.08] transition-transform duration-700 ease-out group-hover:translate-y-[-14px]"
                  />

                  {/* Permanent gradient — keeps title readable */}
                  <div className="absolute inset-0 bg-linear-to-t from-black via-black/45 to-black/15 pointer-events-none" />

                  {/* Subtle hover overlay — apenas oscurece para resaltar texto */}
                  <div className="absolute inset-0 bg-black/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  {/* Top-left icon */}
                  <div className="absolute top-5 left-5 z-40 w-12 h-12 rounded-2xl bg-black/55 backdrop-blur-md ring-1 ring-white/10 flex items-center justify-center group-hover:bg-red-600 transition-colors duration-300">
                    <Icon className="w-5 h-5 text-red-300 group-hover:text-white transition-colors duration-300" />
                  </div>

                  {/* Top-right index */}
                  <div className="absolute top-5 right-6 z-40 font-playfair italic text-white/45 text-sm tracking-[0.32em]">
                    0{i + 1}
                  </div>

                  {/* Bottom title — la línea roja crece en hover (única señal extra) */}
                  <div className="absolute bottom-0 inset-x-0 z-40 px-7 pb-7 pointer-events-none">
                    <p className="text-red-300 text-[10px] tracking-[0.4em] uppercase font-semibold mb-2.5">
                      Servicio
                    </p>
                    <h3 className="font-playfair text-2xl md:text-[28px] font-medium tracking-tight text-white leading-tight">
                      {s.title}
                    </h3>
                    <div className="mt-4 h-px w-12 bg-red-500/70 transition-all duration-500 group-hover:w-24 group-hover:bg-red-500" />
                  </div>
                </div>
              </motion.button>
            )
          })}
        </div>
      </div>

      {/* ─── EXPANDED MODAL ─── */}
      {/* Modal renderizado vía portal al body — escapa overflow/contain del section */}
      {typeof document !== 'undefined' &&
        createPortal(
          <AnimatePresence>
            {active && (
              <motion.div
                key="modal-root"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 z-9999 flex items-end sm:items-center justify-center sm:p-6"
                aria-modal="true"
                role="dialog"
              >
                {/* Backdrop */}
                <div className="absolute inset-0 bg-black/85 backdrop-blur-md" />

                {/* Modal — bottom sheet mobile, centered card desktop */}
                <motion.div
                  ref={cardRef}
                  initial={{ y: '100%', opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: '100%', opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="relative w-full sm:max-w-2xl bg-stone-950 border-t sm:border border-stone-800 rounded-t-3xl sm:rounded-3xl overflow-hidden flex flex-col max-h-[88dvh] sm:max-h-[85vh] shadow-2xl shadow-red-950/40"
                >
                  {/* Drag handle visible solo mobile */}
                  <div className="sm:hidden flex justify-center pt-3 pb-1 shrink-0">
                    <div className="w-10 h-1 bg-white/20 rounded-full" />
                  </div>

                  <button
                    onClick={() => setActive(null)}
                    aria-label="Cerrar"
                    className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/70 hover:bg-red-600 text-white flex items-center justify-center backdrop-blur transition-colors"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    >
                      <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                  </button>

                  <div className="relative h-44 sm:h-60 lg:h-72 shrink-0">
                    <img
                      src={active.image}
                      alt={active.title}
                      className="w-full h-full object-cover"
                      loading="eager"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-stone-950 via-stone-950/40 to-transparent" />
                    <div className="absolute bottom-4 left-5 right-16 sm:bottom-5 sm:left-6 sm:right-6">
                      <p className="text-red-400 text-[10px] tracking-[0.32em] uppercase font-semibold mb-1.5">
                        Servicio
                      </p>
                      <h3 className="font-playfair text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-white leading-tight">
                        {active.title}
                      </h3>
                    </div>
                  </div>

                  <div
                    className="p-5 sm:p-7 lg:p-8 overflow-y-auto overscroll-contain min-h-0"
                    data-lenis-prevent
                  >
                    <p className="text-white/75 text-[14px] sm:text-[15px] leading-relaxed mb-6 font-light">
                      {active.details}
                    </p>

                    <div className="border-t border-stone-800 pt-5 sm:pt-6">
                      <p className="text-red-400 text-[10px] tracking-[0.32em] uppercase font-semibold mb-3.5">
                        Incluye
                      </p>
                      <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5 sm:gap-y-3">
                        {active.features.map((f) => (
                          <li
                            key={f}
                            className="flex items-start gap-2.5 text-white/85 text-sm"
                          >
                            <span className="text-red-500 mt-0.5 font-bold">›</span>
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Padding-bottom extra para que el contenido no quede pegado al borde */}
                    <div className="h-2 sm:h-0" />
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </section>
  )
}
