import { mapSteps } from '../../data/mapSteps'
import { mapEmbedUrl, whatsAppHref } from '../../lib/contact'
import { WhatsAppIcon } from '../icons'

export function Location() {
  return (
    <section
      id="ubicacion"
      className="relative py-20 sm:py-28 lg:py-44 bg-stone-950 text-white overflow-hidden border-y border-stone-900"
    >
      <div className="pointer-events-none absolute -bottom-40 -left-32 w-[500px] h-[500px] bg-red-900/8 rounded-full blur-[180px]" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="mb-12 sm:mb-16 lg:mb-20" data-animate="fade-up">
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-px bg-red-500" />
              <span className="text-red-400 text-[10px] font-semibold tracking-[0.42em] uppercase">
                Ubicación
              </span>
            </div>
            <span className="font-playfair italic text-white/30 text-sm tracking-[0.42em]">
              04 / 05
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <h2 className="text-[2.5rem] sm:text-6xl lg:text-8xl text-white tracking-tight font-playfair font-light leading-[0.95]">
              ¿Cómo
              <br />
              <span className="italic font-medium text-red-500">llegar?</span>
            </h2>
            <p className="text-white/55 text-sm max-w-sm leading-[1.85] font-light">
              Av. Morelos No. 29, Centro de San Antonio de la Cal. <br />A unos pasos del mercado
              local.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {/* Mapa — 8 cols, mas alto */}
          <div
            className="lg:col-span-8 rounded-3xl overflow-hidden border border-stone-800 h-72 sm:h-96 lg:h-128 shadow-2xl shadow-black/60 relative group"
            data-animate="scale-in"
          >
            <iframe
              src={mapEmbedUrl}
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Auto Servicio Quevedo Express"
            />
            {/* Gradient overlay sutil para integrar */}
            <div className="absolute inset-0 ring-inset ring-1 ring-white/5 pointer-events-none rounded-3xl" />
          </div>

          {/* Sidebar derecho — 4 cols */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            {/* Steps numerados */}
            {mapSteps.map((step, i) => (
              <div
                key={step.num}
                className="group card-lift bg-black border border-stone-800 hover:border-red-500/40 rounded-2xl p-5 flex items-start gap-4 overflow-hidden relative"
                data-animate="fade-right"
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-red-500/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
                <div className="w-11 h-11 bg-red-600/15 ring-1 ring-red-500/40 group-hover:bg-red-600 group-hover:ring-red-400/60 text-red-300 group-hover:text-white rounded-full flex items-center justify-center shrink-0 font-playfair text-base font-medium transition-all duration-500">
                  {step.num}
                </div>
                <div>
                  <p className="font-medium text-white text-sm mb-1 tracking-tight">
                    {step.title}
                  </p>
                  <p className="text-white/50 text-xs leading-relaxed font-light">{step.desc}</p>
                </div>
              </div>
            ))}

            {/* Dirección destacada — gradient red brand */}
            <div
              className="relative rounded-2xl p-6 mt-auto overflow-hidden text-white"
              data-animate="fade-up"
              style={{ transitionDelay: `${mapSteps.length * 0.08}s` }}
            >
              <div className="absolute inset-0 bg-linear-to-br from-red-700 via-red-800 to-red-950" />
              <div className="absolute -top-12 -right-12 w-40 h-40 bg-red-500/25 rounded-full blur-2xl" />

              <div className="relative">
                <p className="text-red-200/80 text-[10px] uppercase tracking-[0.4em] mb-3 font-semibold">
                  Dirección exacta
                </p>
                <p className="text-white font-playfair text-xl leading-snug font-light mb-1">
                  Av. Morelos No. 29
                </p>
                <p className="text-red-100/80 text-sm font-light mb-5">
                  Centro · San Antonio de la Cal, Oaxaca
                </p>

                <a
                  href={whatsAppHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 backdrop-blur border border-white/30 text-white text-xs font-semibold px-4 py-2.5 rounded-full transition-colors tracking-wide"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5" />
                  Avísanos que vienes
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
