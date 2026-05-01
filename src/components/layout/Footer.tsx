import { business, phoneDisplay, telHref, whatsAppHref } from '../../lib/contact'
import { PhoneIcon, WhatsAppIcon, WrenchIcon } from '../icons'

export function Footer() {
  return (
    <footer className="relative bg-stone-950 border-t border-stone-900 text-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-12 sm:pt-16 pb-8 sm:pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8 sm:gap-10 mb-10 sm:mb-12">
          {/* Brand block */}
          <div className="sm:col-span-2 md:col-span-5">
            <a href="#" className="inline-flex items-center gap-3 mb-5">
              <div className="w-11 h-11 bg-linear-to-br from-red-500 to-red-700 rounded-xl flex items-center justify-center shadow-lg shadow-red-900/40">
                <WrenchIcon className="w-5 h-5 text-white" />
              </div>
              <p className="text-white text-base font-playfair tracking-tight">
                <span className="font-medium italic">{business.name}</span>
              </p>
            </a>
            <p className="text-white/50 text-sm leading-relaxed font-light max-w-xs">
              30 años cuidando vehículos en San Antonio de la Cal, Oaxaca. Mecánica
              profesional con la atención que tu auto merece.
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3">
            <p className="text-red-400 text-[10px] tracking-[0.42em] uppercase font-semibold mb-5">
              Navegación
            </p>
            <ul className="space-y-3">
              {[
                { href: '#servicios', label: 'Servicios' },
                { href: '#contacto', label: 'Contacto' },
                { href: '#ubicacion', label: 'Ubicación' },
              ].map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-white/70 hover:text-red-400 text-sm font-light transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <p className="text-red-400 text-[10px] tracking-[0.42em] uppercase font-semibold mb-5">
              Contacto
            </p>
            <a
              href={telHref}
              className="flex items-center gap-2.5 text-white hover:text-red-300 text-base font-playfair transition-colors mb-2.5"
            >
              <PhoneIcon className="w-4 h-4 text-red-400" />
              {phoneDisplay}
            </a>
            <a
              href={whatsAppHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-white/70 hover:text-red-300 text-sm font-light transition-colors mb-4"
            >
              <WhatsAppIcon className="w-4 h-4 text-red-400/80" />
              WhatsApp
            </a>
            <p className="text-white/50 text-xs leading-relaxed font-light">
              {business.address.street}
              <br />
              {business.address.neighborhood}
              <br />
              {business.address.zip}
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-stone-900 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/35 text-xs tracking-wide font-light">
            © 2026 {business.name}. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
