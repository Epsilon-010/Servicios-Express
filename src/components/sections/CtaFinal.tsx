import { phoneDisplay, telHref, whatsAppHref } from '../../lib/contact'
import { PhoneIcon, WhatsAppIcon, WrenchIcon } from '../icons'

export function CtaFinal() {
  return (
    <section className="relative bg-black overflow-hidden py-20 sm:py-28 lg:py-44 border-t border-stone-900">
      {/* Hairlines + halos */}
      <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-red-500/40 to-transparent" />
      <div className="pointer-events-none absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-red-700/15 rounded-full blur-[160px]" />
      <div className="pointer-events-none absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-red-900/20 rounded-full blur-[160px]" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
        <div data-animate="fade-up">
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-px bg-red-500" />
              <span className="text-red-400 text-[10px] font-semibold tracking-[0.42em] uppercase">
                Listos para ti
              </span>
            </div>
            <span className="font-playfair italic text-white/30 text-sm tracking-[0.42em]">
              05 / 05
            </span>
          </div>

          {/* Logo grande con glow rojo */}
          <div className="flex justify-center mb-10">
            <div className="relative">
              <div className="absolute inset-0 bg-red-500/40 rounded-3xl blur-2xl" />
              <div className="relative w-20 h-20 bg-linear-to-br from-red-500 to-red-700 rounded-3xl flex items-center justify-center shadow-2xl shadow-red-900/60">
                <WrenchIcon className="w-9 h-9 text-white" />
              </div>
            </div>
          </div>

          <h2 className="text-center text-[2.5rem] sm:text-6xl lg:text-8xl text-white tracking-tight font-playfair font-light leading-[0.95] mb-8">
            ¿Listo para cuidar
            <br />
            <span className="italic font-medium text-red-500">tu vehículo?</span>
          </h2>

          <p className="text-center text-white/55 text-base sm:text-lg max-w-xl mx-auto mb-14 font-light leading-relaxed">
            Contáctanos y nuestros especialistas te atenderán de inmediato.
            <br />
            <span className="text-white/80">Diagnóstico gratuito.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href={telHref}
              data-magnetic
              className="group flex items-center justify-center gap-3 bg-red-600 hover:bg-red-500 text-white active:scale-[0.98] font-semibold text-base px-10 py-5 rounded-full shadow-[0_0_30px_-4px_rgba(220,38,38,0.7)] hover:shadow-[0_0_50px_-2px_rgba(220,38,38,0.95)] transition-all duration-300 tracking-wide will-change-transform"
            >
              <PhoneIcon className="w-4 h-4" />
              <span>{phoneDisplay}</span>
              <span className="opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-300">
                →
              </span>
            </a>
            <a
              href={whatsAppHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 text-white font-semibold text-base px-10 py-5 rounded-full border border-white/30 hover:border-red-400 hover:bg-red-600/10 active:scale-[0.98] transition-all duration-300 tracking-wide"
            >
              <WhatsAppIcon className="w-4 h-4" />
              WhatsApp
            </a>
          </div>

          {/* Quick info row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-stone-900 border border-stone-800 rounded-3xl overflow-hidden">
            {[
              { label: 'Horario hoy', value: '9:00 – 18:00' },
              { label: 'Respuesta', value: '< 5 min' },
              { label: 'Diagnóstico', value: 'Gratuito' },
              { label: 'Años de oficio', value: '35+', counter: 35, suffix: '+' },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className="group relative bg-stone-950 px-5 py-7 text-center hover:bg-stone-900 transition-colors duration-500"
                data-animate="fade-up"
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-red-500/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
                <p className="text-red-400/80 text-[9px] tracking-[0.32em] uppercase font-semibold mb-2.5">
                  {stat.label}
                </p>
                <p className="text-white text-base sm:text-lg font-playfair font-light tracking-tight">
                  {stat.counter !== undefined ? (
                    <span data-counter={stat.counter} data-suffix={stat.suffix ?? ''}>
                      {stat.value}
                    </span>
                  ) : (
                    stat.value
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
