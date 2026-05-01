import { phoneDisplay, telHref, whatsAppHref, whatsappDisplay } from '../../lib/contact'

export function CtaFinal() {
  return (
    <section className="relative bg-stone-950 overflow-hidden py-20 sm:py-28 lg:py-44">
      <div className="relative max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
        <div data-animate="fade-up">
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-px bg-red-500" />
              <span className="text-red-400 text-[10px] font-semibold tracking-[0.42em] uppercase">
                El último paso
              </span>
            </div>
            <span className="font-playfair italic text-white/30 text-sm tracking-[0.42em]">
              05 / 05
            </span>
          </div>

          {/* Editorial flourish — reemplaza al ícono genérico */}
          <div className="flex flex-col items-center mb-10">
            <span className="font-playfair italic text-red-400/80 text-base sm:text-lg tracking-[0.32em] mb-4">
              ¿lo dejamos en buenas manos?
            </span>
            <div className="w-px h-12 bg-linear-to-b from-red-500/60 to-transparent" />
          </div>

          <h2 className="text-center text-[2.5rem] sm:text-6xl lg:text-8xl text-white tracking-tight font-playfair font-light leading-[0.95] mb-8">
            ¿Listo para cuidar
            <br />
            <span className="italic font-medium text-red-500">tu vehículo?</span>
          </h2>

          <p className="text-center text-white/55 text-base sm:text-lg max-w-xl mx-auto mb-14 font-light leading-relaxed">
            Llámanos o escríbenos por WhatsApp y te atendemos al momento.
            <br />
            <span className="text-white/80">Diagnóstico gratuito, presupuesto sin compromiso.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-16">
            <a
              href={telHref}
              data-magnetic
              className="group flex items-center justify-center gap-2.5 sm:gap-3 bg-red-600 hover:bg-red-500 text-white active:scale-[0.98] font-semibold text-sm sm:text-base px-6 sm:px-10 py-4 sm:py-5 rounded-full shadow-[0_0_30px_-4px_rgba(220,38,38,0.7)] hover:shadow-[0_0_50px_-2px_rgba(220,38,38,0.95)] transition-all duration-300 tracking-wide will-change-transform"
            >
              <span className="font-playfair italic font-light text-[13px] sm:text-[15px] opacity-80">
                Llamar
              </span>
              <span className="w-px h-3.5 sm:h-4 bg-white/30" />
              <span>{phoneDisplay}</span>
              <span className="opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-300">
                →
              </span>
            </a>
            <a
              href={whatsAppHref}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2.5 sm:gap-3 text-white font-semibold text-sm sm:text-base px-6 sm:px-10 py-4 sm:py-5 rounded-full border border-white/30 hover:border-emerald-400 hover:bg-emerald-600/10 active:scale-[0.98] transition-all duration-300 tracking-wide"
            >
              <span className="font-playfair italic font-light text-[13px] sm:text-[15px] opacity-80">
                WhatsApp
              </span>
              <span className="w-px h-3.5 sm:h-4 bg-white/30" />
              <span>{whatsappDisplay}</span>
            </a>
          </div>

          {/* Quick info row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-stone-900 border border-stone-800 rounded-3xl overflow-hidden">
            {[
              { label: 'Horario hoy', value: '9:00 – 18:00' },
              { label: 'Respuesta', value: '< 5 min' },
              { label: 'Diagnóstico', value: 'Gratuito' },
              { label: 'Años de oficio', value: '30', counter: 30 },
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
                    <span data-counter={stat.counter}>{stat.value}</span>
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
