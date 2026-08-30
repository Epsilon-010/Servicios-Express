import { phones, telHrefFor, whatsAppHrefFor } from '../../lib/contact'
import { PhoneIcon, WhatsAppIcon } from '../icons'

export function Phones() {
  return (
    <section
      id="telefonos"
      className="relative py-16 sm:py-20 lg:py-28 bg-stone-950 text-white overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* ─── Header ─── */}
        <div className="mb-10 sm:mb-14" data-animate="fade-up">
          <div className="flex items-center gap-3 mb-7">
            <div className="w-10 h-px bg-red-500" />
            <span className="text-red-400 text-[10px] font-semibold tracking-[0.42em] uppercase">
              Teléfonos
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="text-[2rem] sm:text-5xl lg:text-6xl text-white tracking-tight font-playfair font-light leading-[1]">
              Nuestros
              <br />
              <span className="italic font-medium text-red-500">números</span>
            </h2>
            <p className="text-white/55 text-sm max-w-sm leading-[1.85] font-light">
              Marca el que prefieras. Toca cualquier número para llamar directo desde
              tu celular.
            </p>
          </div>
        </div>

        {/* ─── Cards de números ─── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {phones.map((p, i) => (
            <article
              key={p.number}
              className="group relative card-lift bg-stone-900 border border-stone-800 hover:border-red-500/40 rounded-3xl p-6 sm:p-7 overflow-hidden flex flex-col"
              data-animate="fade-up"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-red-500/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />

              <div className="relative flex items-start justify-between mb-6">
                <div className="w-11 h-11 bg-stone-900 ring-1 ring-stone-800 group-hover:ring-red-500/50 group-hover:bg-red-600/15 rounded-xl flex items-center justify-center transition-all duration-500">
                  <PhoneIcon className="w-5 h-5 text-red-400" />
                </div>
                <span className="font-playfair italic text-white/25 text-xs tracking-[0.32em]">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>

              <p className="text-red-400 text-[10px] tracking-[0.42em] uppercase font-semibold mb-4">
                {p.label}
              </p>

              <a
                href={telHrefFor(p.number)}
                className="group/num relative block w-fit text-[2rem] sm:text-[2.4rem] text-white hover:text-red-300 transition-colors font-playfair font-light tracking-tight leading-none mb-6"
              >
                {p.display}
                <span className="absolute -bottom-1.5 left-0 right-0 h-px bg-red-500/70 origin-left scale-x-0 group-hover/num:scale-x-100 transition-transform duration-500" />
              </a>

              <div className="mt-auto pt-5 border-t border-stone-800 flex items-center justify-between gap-4">
                <a
                  href={telHrefFor(p.number)}
                  className="text-red-400 hover:text-red-300 text-[10px] tracking-[0.32em] uppercase font-semibold transition-colors flex items-center gap-1.5"
                >
                  <PhoneIcon className="w-3.5 h-3.5" />
                  Llamar
                </a>
                {p.whatsapp && (
                  <a
                    href={whatsAppHrefFor(p.number)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 hover:text-emerald-300 text-[10px] tracking-[0.32em] uppercase font-semibold transition-colors flex items-center gap-1.5"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5" />
                    WhatsApp
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
