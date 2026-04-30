import { business, phoneDisplay, telHref, whatsAppHref } from '../../lib/contact'
import { ClockIcon, PhoneIcon, PinIcon, WhatsAppIcon } from '../icons'

const schedule = [
  { day: 'Lunes – Viernes', hours: '9:00 – 15:00', extra: '16:00 – 18:00' },
  { day: 'Sábado', hours: '9:00 – 15:00', extra: null },
  { day: 'Domingo', hours: 'Cerrado', extra: null, closed: true },
]

export function Contact() {
  return (
    <section
      id="contacto"
      className="relative py-20 sm:py-28 lg:py-44 bg-black text-white overflow-hidden border-y border-stone-900"
    >
      {/* Ambient halos */}
      <div className="pointer-events-none absolute -top-40 left-1/4 w-[600px] h-[600px] bg-red-900/8 rounded-full blur-[180px]" />
      <div className="pointer-events-none absolute -bottom-40 right-1/4 w-[500px] h-[500px] bg-red-950/15 rounded-full blur-[160px]" />

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
              Llámanos cuando quieras o pasa al taller. Diagnóstico siempre gratuito y
              presupuesto sin compromiso.
            </p>
          </div>
        </div>

        {/* ─── Magazine spread: phone hero (left) + schedule/address (right) ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {/* PHONE — hero card, 7 cols, full height */}
          <article
            className="group relative lg:col-span-7 rounded-3xl p-7 sm:p-9 lg:p-12 overflow-hidden text-white min-h-96 lg:min-h-112 flex flex-col"
            data-animate="fade-up"
          >
            <div className="absolute inset-0 bg-linear-to-br from-red-600 via-red-800 to-red-950" />
            <div className="absolute -top-40 -right-32 w-md h-112 bg-red-500/30 rounded-full blur-3xl" />
            <div className="absolute -bottom-32 -left-20 w-80 h-80 bg-red-950/60 rounded-full blur-3xl" />

            {/* Inner ring border for premium feel */}
            <div className="absolute inset-2 rounded-[1.4rem] ring-1 ring-white/8 pointer-events-none" />

            <div className="relative flex flex-col h-full">
              {/* Top row */}
              <div className="flex items-start justify-between mb-10">
                <div className="w-14 h-14 bg-white/15 backdrop-blur-md ring-1 ring-white/25 rounded-2xl flex items-center justify-center">
                  <PhoneIcon className="w-6 h-6 text-white" />
                </div>
                <div className="flex items-center gap-2.5 bg-white/10 backdrop-blur ring-1 ring-white/20 rounded-full px-3.5 py-1.5">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-75" />
                    <span className="relative bg-green-400 rounded-full h-1.5 w-1.5" />
                  </span>
                  <span className="text-white text-[10px] font-semibold tracking-[0.2em] uppercase">
                    Disponible ahora
                  </span>
                </div>
              </div>

              <p className="text-red-200 text-[10px] tracking-[0.42em] uppercase font-semibold mb-3">
                Llámanos directo
              </p>
              <h3 className="font-playfair text-3xl sm:text-4xl lg:text-5xl text-white mb-2 font-light tracking-tight leading-[1.1]">
                Hablemos del
                <br />
                <span className="italic">servicio que necesitas</span>
              </h3>

              {/* Phone number — largest type */}
              <a
                href={telHref}
                className="block text-[2.5rem] sm:text-5xl lg:text-7xl text-white hover:text-red-50 transition-colors mt-8 lg:mt-10 font-playfair font-light tracking-tight leading-none break-all sm:break-normal"
              >
                {phoneDisplay}
              </a>

              {/* CTAs row */}
              <div className="flex flex-col sm:flex-row gap-3 mt-10">
                <a
                  href={telHref}
                  className="flex items-center justify-center gap-2 bg-white text-red-700 hover:bg-red-50 text-sm font-semibold px-6 py-4 rounded-full transition-colors min-h-12 tracking-wide shadow-xl shadow-red-950/50 flex-1"
                >
                  <PhoneIcon className="w-4 h-4" />
                  Llamar ahora
                </a>
                <a
                  href={whatsAppHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur border border-white/30 text-white text-sm font-semibold px-6 py-4 rounded-full transition-colors min-h-12 tracking-wide flex-1"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  WhatsApp
                </a>
              </div>

              {/* Bottom row — quick stats */}
              <div className="mt-auto pt-10 grid grid-cols-3 gap-4 border-t border-white/15">
                <div className="pt-6">
                  <p className="text-red-200/80 text-[9px] tracking-[0.32em] uppercase font-semibold mb-2">
                    Respuesta
                  </p>
                  <p className="text-white text-base font-playfair font-light tracking-tight">
                    &lt; 5 min
                  </p>
                </div>
                <div className="pt-6 border-x border-white/10 px-4">
                  <p className="text-red-200/80 text-[9px] tracking-[0.32em] uppercase font-semibold mb-2">
                    Diagnóstico
                  </p>
                  <p className="text-white text-base font-playfair font-light tracking-tight">
                    Gratuito
                  </p>
                </div>
                <div className="pt-6">
                  <p className="text-red-200/80 text-[9px] tracking-[0.32em] uppercase font-semibold mb-2">
                    Idiomas
                  </p>
                  <p className="text-white text-base font-playfair font-light tracking-tight">
                    Español
                  </p>
                </div>
              </div>
            </div>
          </article>

          {/* RIGHT COLUMN — schedule (top) + address (bottom) */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-5">
            {/* SCHEDULE */}
            <article
              className="group relative card-lift bg-stone-950 border border-stone-800 hover:border-red-500/40 rounded-3xl p-8 overflow-hidden"
              data-animate="fade-up"
              style={{ transitionDelay: '0.08s' }}
            >
              <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-red-500/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />

              <div className="flex items-start justify-between mb-7">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 bg-stone-900 ring-1 ring-stone-800 group-hover:ring-red-500/50 group-hover:bg-red-600/15 rounded-xl flex items-center justify-center transition-all duration-500">
                    <ClockIcon className="w-5 h-5 text-red-400" />
                  </div>
                  <div>
                    <p className="text-red-400 text-[9px] tracking-[0.42em] uppercase font-semibold leading-none mb-1.5">
                      Horario
                    </p>
                    <h3 className="font-playfair text-xl text-white font-light tracking-tight leading-none">
                      <span className="italic">Atención</span>
                    </h3>
                  </div>
                </div>
                <span className="font-playfair italic text-white/25 text-xs tracking-[0.32em]">
                  01
                </span>
              </div>

              <div className="space-y-3 text-sm">
                {schedule.map((s, i) => (
                  <div
                    key={s.day}
                    className={`flex justify-between items-center ${i < schedule.length - 1 ? 'pb-3 border-b border-stone-800/60' : ''}`}
                  >
                    <span className="text-white/55 font-light text-xs tracking-wide">
                      {s.day}
                    </span>
                    <span
                      className={
                        s.closed
                          ? 'text-red-400 font-semibold tracking-tight italic font-playfair text-sm'
                          : 'text-white font-medium text-right tracking-tight text-sm'
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
            </article>

            {/* ADDRESS */}
            <article
              className="group relative card-lift bg-stone-950 border border-stone-800 hover:border-red-500/40 rounded-3xl p-8 overflow-hidden flex-1 flex flex-col"
              data-animate="fade-up"
              style={{ transitionDelay: '0.16s' }}
            >
              <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-red-500/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />

              <div className="flex items-start justify-between mb-7">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 bg-stone-900 ring-1 ring-stone-800 group-hover:ring-red-500/50 group-hover:bg-red-600/15 rounded-xl flex items-center justify-center transition-all duration-500">
                    <PinIcon className="w-5 h-5 text-red-400" />
                  </div>
                  <div>
                    <p className="text-red-400 text-[9px] tracking-[0.42em] uppercase font-semibold leading-none mb-1.5">
                      Dirección
                    </p>
                    <h3 className="font-playfair text-xl text-white font-light tracking-tight leading-none">
                      <span className="italic">Visítanos</span>
                    </h3>
                  </div>
                </div>
                <span className="font-playfair italic text-white/25 text-xs tracking-[0.32em]">
                  02
                </span>
              </div>

              <address className="not-italic mt-1">
                <p className="font-medium text-white text-lg leading-snug font-playfair tracking-tight">
                  {business.address.street}
                </p>
                <p className="text-white/55 text-sm font-light mt-1.5 leading-relaxed">
                  {business.address.neighborhood}
                  <br />
                  {business.address.zip}
                </p>
              </address>

              <div className="mt-auto pt-5 border-t border-stone-800 flex items-center justify-between gap-2.5">
                <div className="flex items-center gap-2.5">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inset-0 bg-red-500 rounded-full animate-ping opacity-60" />
                    <span className="relative bg-red-500 rounded-full h-2 w-2" />
                  </span>
                  <p className="text-white/55 text-xs tracking-wide font-light">
                    A 2 min del mercado local
                  </p>
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
          </div>
        </div>
      </div>
    </section>
  )
}
