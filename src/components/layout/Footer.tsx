import { useState } from 'react'
import {
  business,
  developer,
  developerWhatsAppHref,
  email,
  mailtoHref,
  telHref,
  whatsAppHref,
} from '../../lib/contact'
import { LegalModal, type LegalDocId } from '../legal/LegalModal'
import { PhoneIcon, WhatsAppIcon, WrenchIcon } from '../icons'

export function Footer() {
  const [legalDoc, setLegalDoc] = useState<LegalDocId | null>(null)

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
              className="hidden sm:flex items-center gap-2.5 text-white hover:text-red-300 text-base font-playfair transition-colors mb-2.5"
            >
              <PhoneIcon className="w-4 h-4 text-red-400" />
              Llamar al taller
            </a>
            <a
              href={whatsAppHref}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2.5 text-white/70 hover:text-red-300 text-sm font-light transition-colors mb-4"
            >
              <WhatsAppIcon className="w-4 h-4 text-red-400/80" />
              WhatsApp
            </a>
            <a
              href={mailtoHref}
              className="flex items-center gap-2.5 text-white/70 hover:text-red-300 text-sm font-light transition-colors mb-4"
            >
              <svg
                className="w-4 h-4 text-red-400/80"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              {email}
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
          <div className="flex flex-col items-center sm:items-start gap-1.5">
            <p className="text-white/35 text-xs tracking-wide font-light">
              © 2026 {business.name}. Todos los derechos reservados.
            </p>
            <a
              href={developerWhatsAppHref}
              target="_blank"
              rel="noopener noreferrer"
              title={`Sitio web por ${developer.name} · WhatsApp ${developer.phoneDisplay}`}
              className="group inline-flex items-center gap-1.5 text-white/20 hover:text-emerald-400/80 text-[10px] tracking-[0.14em] font-light transition-colors duration-300"
            >
              <span>
                Sitio web por{' '}
                <span className="font-playfair italic tracking-normal text-[11px]">
                  {developer.name}
                </span>
              </span>
              <WhatsAppIcon className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              <span className="max-w-0 overflow-hidden whitespace-nowrap opacity-0 group-hover:max-w-[9rem] group-hover:opacity-100 transition-all duration-500">
                {developer.phoneDisplay}
              </span>
            </a>
          </div>
          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={() => setLegalDoc('privacidad')}
              className="text-white/45 hover:text-red-400 text-xs font-light tracking-wide transition-colors"
            >
              Aviso de Privacidad
            </button>
            <button
              type="button"
              onClick={() => setLegalDoc('terminos')}
              className="text-white/45 hover:text-red-400 text-xs font-light tracking-wide transition-colors"
            >
              Términos y Condiciones
            </button>
          </div>
        </div>
      </div>

      {legalDoc && <LegalModal doc={legalDoc} onClose={() => setLegalDoc(null)} />}
    </footer>
  )
}
