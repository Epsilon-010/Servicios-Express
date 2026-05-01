import { useEffect, useState } from 'react'

function LiveClock() {
  const [time, setTime] = useState(() => new Date())

  useEffect(() => {
    const id = window.setInterval(() => setTime(new Date()), 1000)
    return () => window.clearInterval(id)
  }, [])

  const seconds = time.getSeconds()
  const minutes = time.getMinutes() + seconds / 60
  const hours = (time.getHours() % 12) + minutes / 60

  const hourDeg = hours * 30
  const minuteDeg = minutes * 6
  const secondDeg = seconds * 6

  return (
    <div className="relative w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 shrink-0">
      {/* Halo rojo sutil atrás */}
      <div className="absolute inset-0 rounded-full bg-red-600/20 blur-2xl" />

      <svg
        viewBox="-50 -50 100 100"
        className="relative w-full h-full drop-shadow-xl"
        aria-label={`Reloj — ${time.toLocaleTimeString('es-MX', { hour: '2-digit', minute: '2-digit' })}`}
      >
        <defs>
          {/* Gradiente radial para dar profundidad al cuerpo */}
          <radialGradient id="clockBody" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#292524" />
            <stop offset="100%" stopColor="#0c0a09" />
          </radialGradient>
        </defs>

        {/* Cuerpo */}
        <circle r="47" fill="url(#clockBody)" stroke="#44403c" strokeWidth="0.5" />
        <circle r="45" fill="none" stroke="rgba(239, 68, 68, 0.3)" strokeWidth="0.5" />

        {/* Marcas de hora — 12 ticks (más prominentes en 12, 3, 6, 9) */}
        {Array.from({ length: 12 }).map((_, i) => {
          const isQuarter = i % 3 === 0
          return (
            <line
              key={i}
              x1="0"
              y1={isQuarter ? '-42' : '-41'}
              x2="0"
              y2={isQuarter ? '-35' : '-38'}
              stroke={isQuarter ? '#ffffff' : 'rgba(255,255,255,0.4)'}
              strokeWidth={isQuarter ? '1.6' : '0.7'}
              strokeLinecap="round"
              transform={`rotate(${i * 30})`}
            />
          )
        })}

        {/* Manecilla de hora — rota desde (0,0) */}
        <g transform={`rotate(${hourDeg})`}>
          <line
            x1="0"
            y1="6"
            x2="0"
            y2="-22"
            stroke="#ffffff"
            strokeWidth="2.6"
            strokeLinecap="round"
          />
        </g>

        {/* Manecilla de minutos */}
        <g transform={`rotate(${minuteDeg})`}>
          <line
            x1="0"
            y1="8"
            x2="0"
            y2="-32"
            stroke="#ffffff"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </g>

        {/* Segundero rojo — tic-tac discreto cada segundo (autentico) */}
        <g transform={`rotate(${secondDeg})`}>
          <line
            x1="0"
            y1="10"
            x2="0"
            y2="-39"
            stroke="#ef4444"
            strokeWidth="1"
            strokeLinecap="round"
          />
          {/* Contrapeso del segundero */}
          <circle cx="0" cy="9" r="1.4" fill="#ef4444" />
        </g>

        {/* Centro */}
        <circle r="2.5" fill="#ef4444" />
        <circle r="0.9" fill="#0c0a09" />
      </svg>
    </div>
  )
}

export function Slogan() {
  return (
    <section className="relative bg-stone-950 text-white overflow-hidden py-16 sm:py-20 lg:py-28">
      {/* Hairlines arriba y abajo */}
      <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-stone-800 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-linear-to-r from-transparent via-stone-800 to-transparent" />

      <div
        className="relative max-w-6xl mx-auto px-5 sm:px-8 lg:px-12"
        data-animate="fade-up"
      >
        <div className="flex items-center justify-center gap-5 sm:gap-8 lg:gap-14">
          {/* Texto izquierdo */}
          <p className="flex-1 text-right uppercase tracking-[0.16em] sm:tracking-[0.2em] text-white/85 font-medium leading-normal text-[11px] sm:text-sm lg:text-base">
            Entregar a tiempo
            <br />
            <span className="text-white">los trabajos,</span>
          </p>

          {/* Reloj */}
          <LiveClock />

          {/* Texto derecho */}
          <p className="flex-1 text-left uppercase tracking-[0.16em] sm:tracking-[0.2em] text-white/85 font-medium leading-normal text-[11px] sm:text-sm lg:text-base">
            <span className="text-white">es el respeto al tiempo</span>
            <br />
            de nuestros clientes.
          </p>
        </div>

        <p className="text-center mt-8 sm:mt-10 text-red-400/60 text-[9px] sm:text-[10px] tracking-[0.42em] uppercase font-semibold font-playfair italic">
          — Nuestra promesa
        </p>
      </div>
    </section>
  )
}
