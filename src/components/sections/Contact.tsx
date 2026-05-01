import {
  business,
  phoneDisplay,
  telHref,
  whatsAppHref,
  whatsappDisplay,
} from '../../lib/contact'
import { ClockIcon, PhoneIcon, PinIcon, WhatsAppIcon } from '../icons'

const schedule = [
  { day: 'Lun – Vie', hours: '9:00 – 15:00', extra: '16:00 – 18:00' },
  { day: 'Sábado', hours: '9:00 – 15:00', extra: null },
  { day: 'Domingo', hours: 'Cerrado', extra: null, closed: true },
]

export function Contact() {
  return (
    <section
      id="contacto"
      className="relative py-20 sm:py-28 lg:py-44 bg-stone-950 text-white overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* ─── Header editorial ─── */}
        <div className="mb-12 sm:mb-16 lg:mb-20" data-animate="fade-up">
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-px bg-red-500" />
              <span className="text-red-400 text-[10px] font-semibold tracking-[0.42em] uppercase">
                Información
              </span>
            </div>
            <span className="font-playfair italic text-white/30 text-sm tracking-[0.42em]">
              02 / 05
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <h2 className="text-[2.5rem] sm:text-6xl lg:text-8xl text-white tracking-tight font-playfair font-light leading-[0.95]">
              Estamos
              <br />
              <span className="italic font-medium text-red-500">aquí para ti</span>
            </h2>
            <p className="text-white/55 text-sm max-w-sm leading-[1.85] font-light">
              Llámanos, escríbenos por WhatsApp o pásate al taller. Diagnóstico siempre
              gratuito y presupuesto sin compromiso.
            </p>
          </div>
        </div>

        {/* ─── 3 cards: Teléfono · Ubicación · WhatsApp ─── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* PHONE */}
          <article
            className="group relative card-lift bg-stone-900 border border-stone-800 hover:border-red-500/40 rounded-3xl p-7 sm:p-8 overflow-hidden flex flex-col"
            data-animate="fade-up"
          >
            <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-red-500/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />

            <div className="relative flex items-start justify-between mb-7">
              <div className="w-12 h-12 bg-stone-900 ring-1 ring-stone-800 group-hover:ring-red-500/50 group-hover:bg-red-600/15 rounded-xl flex items-center justify-center transition-all duration-500">
                <PhoneIcon className="w-5 h-5 text-red-400" />
              </div>
              <span className="font-playfair italic text-white/25 text-xs tracking-[0.32em]">
                01
              </span>
            </div>

            <p className="text-red-400 text-[10px] tracking-[0.42em] uppercase font-semibold mb-2">
              Teléfono
            </p>
            <h3 className="font-playfair text-xl text-white font-light tracking-tight leading-none mb-5">
              <span className="italic">Llámanos</span>
            </h3>

            <a
              href={telHref}
              className="block text-2xl sm:text-3xl text-white hover:text-red-300 transition-colors font-playfair font-light tracking-tight leading-none mb-6"
            >
              {phoneDisplay}
            </a>

            <div className="mt-auto pt-5 border-t border-stone-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-75" />
                  <span className="relative bg-green-400 rounded-full h-1.5 w-1.5" />
                </span>
                <span className="text-white/55 text-[10px] tracking-[0.2em] uppercase font-semibold">
                  Disponible
                </span>
              </div>
              <a
                href={telHref}
                className="text-red-400 hover:text-red-300 text-[10px] tracking-[0.32em] uppercase font-semibold transition-colors flex items-center gap-1"
              >
                Llamar
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </article>

          {/* LOCATION */}
          <article
            className="group relative card-lift bg-stone-900 border border-stone-800 hover:border-red-500/40 rounded-3xl p-7 sm:p-8 overflow-hidden flex flex-col"
            data-animate="fade-up"
            style={{ transitionDelay: '0.08s' }}
          >
            <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-red-500/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />

            <div className="relative flex items-start justify-between mb-7">
              <div className="w-12 h-12 bg-stone-900 ring-1 ring-stone-800 group-hover:ring-red-500/50 group-hover:bg-red-600/15 rounded-xl flex items-center justify-center transition-all duration-500">
                <PinIcon className="w-5 h-5 text-red-400" />
              </div>
              <span className="font-playfair italic text-white/25 text-xs tracking-[0.32em]">
                02
              </span>
            </div>

            <p className="text-red-400 text-[10px] tracking-[0.42em] uppercase font-semibold mb-2">
              Ubicación
            </p>
            <h3 className="font-playfair text-xl text-white font-light tracking-tight leading-none mb-5">
              <span className="italic">Visítanos</span>
            </h3>

            <address className="not-italic">
              <p className="font-medium text-white text-base sm:text-lg leading-snug font-playfair tracking-tight">
                {business.address.street}
              </p>
              <p className="text-white/55 text-xs sm:text-sm font-light mt-1.5 leading-relaxed">
                {business.address.neighborhood}
                <br />
                {business.address.zip}
              </p>
            </address>

            <div className="mt-auto pt-5 border-t border-stone-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inset-0 bg-red-500 rounded-full animate-ping opacity-60" />
                  <span className="relative bg-red-500 rounded-full h-1.5 w-1.5" />
                </span>
                <span className="text-white/55 text-[10px] tracking-[0.2em] uppercase font-semibold">
                  A 2 min del mercado
                </span>
              </div>
              <a
                href="#ubicacion"
                className="text-red-400 hover:text-red-300 text-[10px] tracking-[0.32em] uppercase font-semibold transition-colors flex items-center gap-1"
              >
                Mapa
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </article>

          {/* WHATSAPP */}
          <article
            className="group relative card-lift rounded-3xl p-7 sm:p-8 overflow-hidden text-white flex flex-col md:col-span-2 lg:col-span-1"
            data-animate="fade-up"
            style={{ transitionDelay: '0.16s' }}
          >
            <div className="absolute inset-0 bg-linear-to-br from-emerald-700 via-emerald-800 to-emerald-950" />
            <div className="absolute -top-24 -right-16 w-72 h-72 bg-emerald-400/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -left-12 w-64 h-64 bg-emerald-950/60 rounded-full blur-3xl" />
            <div className="absolute inset-2 rounded-[1.4rem] ring-1 ring-white/10 pointer-events-none" />

            <div className="relative flex items-start justify-between mb-7">
              <div className="w-12 h-12 bg-white/15 backdrop-blur-md ring-1 ring-white/25 rounded-xl flex items-center justify-center">
                <WhatsAppIcon className="w-5 h-5 text-white" />
              </div>
              <span className="font-playfair italic text-white/40 text-xs tracking-[0.32em]">
                03
              </span>
            </div>

            <p className="relative text-emerald-200 text-[10px] tracking-[0.42em] uppercase font-semibold mb-2">
              WhatsApp
            </p>
            <h3 className="relative font-playfair text-xl text-white font-light tracking-tight leading-none mb-5">
              <span className="italic">Escríbenos</span>
            </h3>

            <a
              href={whatsAppHref}
              target="_blank"
              rel="noopener noreferrer"
              className="relative block text-2xl sm:text-3xl text-white hover:text-emerald-100 transition-colors font-playfair font-light tracking-tight leading-none mb-6"
            >
              {whatsappDisplay}
            </a>

            <div className="relative mt-auto pt-5 border-t border-white/15 flex items-center justify-between">
              <span className="text-emerald-200/80 text-[10px] tracking-[0.2em] uppercase font-semibold">
                Respuesta &lt; 5 min
              </span>
              <a
                href={whatsAppHref}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-emerald-100 text-[10px] tracking-[0.32em] uppercase font-semibold transition-colors flex items-center gap-1"
              >
                Abrir
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </article>
        </div>

        {/* ─── Schedule strip ─── */}
        <article
          className="relative mt-5 bg-stone-900 border border-stone-800 rounded-3xl p-6 sm:p-7 overflow-hidden"
          data-animate="fade-up"
          style={{ transitionDelay: '0.24s' }}
        >
          <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-10">
            <div className="flex items-center gap-3 shrink-0">
              <div className="w-11 h-11 bg-stone-900 ring-1 ring-stone-800 rounded-xl flex items-center justify-center">
                <ClockIcon className="w-5 h-5 text-red-400" />
              </div>
              <div>
                <p className="text-red-400 text-[9px] tracking-[0.42em] uppercase font-semibold leading-none mb-1.5">
                  Horario
                </p>
                <h3 className="font-playfair text-lg text-white font-light tracking-tight leading-none">
                  <span className="italic">Atención</span>
                </h3>
              </div>
            </div>

            <div className="hidden lg:block w-px h-14 bg-stone-800" />

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 flex-1">
              {schedule.map((s) => (
                <div
                  key={s.day}
                  className="flex sm:flex-col justify-between sm:justify-start sm:gap-1.5 pb-3 sm:pb-0 border-b sm:border-b-0 border-stone-800/60 last:border-0 last:pb-0"
                >
                  <span className="text-white/55 font-light text-xs tracking-wide">
                    {s.day}
                  </span>
                  <span
                    className={
                      s.closed
                        ? 'text-red-400 font-semibold tracking-tight italic font-playfair text-sm text-right sm:text-left'
                        : 'text-white font-medium tracking-tight text-sm text-right sm:text-left'
                    }
                  >
                    {s.hours}
                    {s.extra && (
                      <span className="text-white/40 font-light text-[11px] block">
                        {s.extra}
                      </span>
                    )}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}
