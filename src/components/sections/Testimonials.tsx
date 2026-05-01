import { testimonials } from '../../data/testimonials'
import { StarIcon } from '../icons'

// Duplicado para el loop infinito sin saltos
const loop = [...testimonials, ...testimonials]

export function Testimonials() {
  return (
    <section className="relative py-20 sm:py-28 lg:py-44 bg-stone-950 text-white overflow-hidden">
      <div className="relative">
        {/* Header — dentro del max-width */}
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 mb-12 sm:mb-16 lg:mb-20" data-animate="fade-up">
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-px bg-red-500" />
              <span className="text-red-400 text-[10px] font-semibold tracking-[0.42em] uppercase">
                Opiniones
              </span>
            </div>
            <span className="font-playfair italic text-white/30 text-sm tracking-[0.42em]">
              03 / 05
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="text-[2.5rem] sm:text-6xl lg:text-8xl text-white tracking-tight font-playfair font-light leading-[0.95]">
              Lo que dicen
              <br />
              <span className="italic font-medium text-red-500 title-underline">
                nuestros clientes
              </span>
            </h2>

            {/* Rating compacto */}
            <div className="flex items-center gap-5">
              <div>
                <p className="text-4xl sm:text-5xl text-white font-playfair font-light leading-none">
                  5.0
                </p>
                <div className="flex gap-0.5 mt-2.5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <StarIcon key={s} className="w-3.5 h-3.5 text-red-500" fill="#ef4444" />
                  ))}
                </div>
              </div>
              <div className="border-l border-stone-800 pl-5">
                <p className="text-white text-2xl sm:text-3xl font-playfair font-light leading-none">
                  {testimonials.length}
                </p>
                <p className="text-white/40 text-[10px] tracking-[0.32em] uppercase mt-2">
                  reseñas
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* MARQUEE — full bleed (sin max-width), bordes desvanecidos con mask */}
        <div
          className="testimonial-marquee-mask group relative"
          data-animate="fade-up"
        >
          <div className="testimonial-marquee flex gap-12 sm:gap-16 w-max group-hover:[animation-play-state:paused]">
            {loop.map((t, i) => (
              <article
                key={`${t.name}-${i}`}
                className="relative shrink-0 w-[280px] sm:w-[340px] bg-stone-950 border border-stone-800 rounded-3xl p-6 sm:p-8 overflow-hidden"
              >
                <div className="absolute -top-3 right-7 font-playfair text-[100px] text-red-500/8 leading-none select-none pointer-events-none">
                  &ldquo;
                </div>

                <div className="relative">
                  <div className="flex gap-1 mb-5">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <StarIcon
                        key={s}
                        className="w-3.5 h-3.5"
                        fill={s <= t.stars ? '#ef4444' : '#44403c'}
                      />
                    ))}
                  </div>

                  <p className="text-white/85 text-[14px] sm:text-[15px] leading-relaxed mb-6 font-light italic font-playfair line-clamp-4">
                    &ldquo;{t.comment}&rdquo;
                  </p>

                  <div className="flex items-center gap-3 pt-5 border-t border-stone-800">
                    <div className="w-10 h-10 bg-linear-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center shrink-0 shadow-md shadow-red-900/40">
                      <span className="text-white text-[10px] font-bold tracking-wide">
                        {t.name
                          .split(' ')
                          .map((n) => n[0])
                          .join('')
                          .slice(0, 2)}
                      </span>
                    </div>
                    <div className="min-w-0">
                      <p className="font-semibold text-white text-sm leading-none tracking-tight truncate">
                        {t.name}
                      </p>
                      <p className="text-red-400/80 text-xs mt-1.5 tracking-wide truncate">
                        {t.service}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
