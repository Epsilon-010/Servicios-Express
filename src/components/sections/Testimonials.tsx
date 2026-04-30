import { testimonials } from '../../data/testimonials'
import { StarIcon } from '../icons'

export function Testimonials() {
  const featured = testimonials[0]
  // Solo 3 más en el grid (4 total) — evita saturar mobile
  const rest = testimonials.slice(1, 4)

  return (
    <section className="relative py-20 sm:py-28 lg:py-44 bg-zinc-950 text-white overflow-hidden">
      <div className="pointer-events-none absolute top-1/3 -right-40 w-[500px] h-[500px] bg-red-900/10 rounded-full blur-[160px]" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="mb-12 sm:mb-16 lg:mb-20" data-animate="fade-up">
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

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <h2 className="text-[2.5rem] sm:text-6xl lg:text-8xl text-white tracking-tight font-playfair font-light leading-[0.95]">
              Lo que dicen
              <br />
              <span className="italic font-medium text-red-500 title-underline">
                nuestros clientes
              </span>
            </h2>

            {/* Rating block */}
            <div className="flex items-center gap-5 self-start lg:self-auto">
              <div>
                <p className="text-5xl text-white font-playfair font-light leading-none">5.0</p>
                <div className="flex gap-0.5 mt-3">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <StarIcon key={s} className="w-3.5 h-3.5 text-red-500" fill="#ef4444" />
                  ))}
                </div>
              </div>
              <div className="border-l border-stone-800 pl-5">
                <p className="text-white text-3xl font-playfair font-light leading-none">
                  {testimonials.length}
                </p>
                <p className="text-white/40 text-[10px] tracking-[0.32em] uppercase mt-2">
                  Reseñas
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Featured testimonial — full-width, grande */}
        <article
          className="relative bg-black border border-stone-800 hover:border-red-500/40 rounded-3xl p-7 sm:p-10 lg:p-14 mb-6 transition-[border-color] duration-500 overflow-hidden group"
          data-animate="fade-up"
        >
          <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-red-500/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />

          {/* Quote glyph gigante */}
          <div className="absolute top-4 right-10 font-playfair text-[200px] lg:text-[280px] text-red-500/8 leading-none select-none pointer-events-none">
            &ldquo;
          </div>

          <div className="relative grid lg:grid-cols-3 gap-10 items-start">
            <div className="lg:col-span-2">
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((s) => (
                  <StarIcon key={s} className="w-4 h-4" fill="#ef4444" />
                ))}
              </div>
              <p className="text-white text-lg sm:text-xl lg:text-3xl leading-snug font-playfair font-light italic">
                &ldquo;{featured.comment}&rdquo;
              </p>
            </div>

            <div className="lg:pl-8 lg:border-l lg:border-stone-800">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-linear-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center shrink-0 shadow-lg shadow-red-900/40">
                  <span className="text-white text-xs font-bold tracking-wide">
                    {featured.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')
                      .slice(0, 2)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-white text-base leading-none tracking-tight">
                    {featured.name}
                  </p>
                  <p className="text-red-400/80 text-xs mt-1.5 tracking-wide">
                    {featured.service}
                  </p>
                </div>
              </div>
              <p className="text-white/40 text-[10px] tracking-[0.32em] uppercase font-semibold mt-6">
                Cliente verificado
              </p>
            </div>
          </div>
        </article>

        {/* Grid del resto */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((t, i) => (
            <article
              key={t.name}
              className="group relative card-lift bg-stone-950 border border-stone-800 hover:border-red-500/40 rounded-3xl p-8 overflow-hidden"
              data-animate="fade-up"
              style={{ transitionDelay: `${i * 0.06}s` }}
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-red-500/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />

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

                <p className="text-white/85 text-[15px] leading-relaxed mb-7 font-light italic font-playfair">
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
                  <div>
                    <p className="font-semibold text-white text-sm leading-none tracking-tight">
                      {t.name}
                    </p>
                    <p className="text-red-400/80 text-xs mt-1.5 tracking-wide">{t.service}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
