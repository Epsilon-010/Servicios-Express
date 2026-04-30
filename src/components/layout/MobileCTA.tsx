import { telHref, whatsAppHref } from '../../lib/contact'
import { PhoneIcon, WhatsAppIcon } from '../icons'

export function MobileCTA() {
  return (
    <div
      className="sm:hidden fixed bottom-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-xl border-t border-stone-800 px-4 pt-3 pb-4"
      style={{ paddingBottom: 'max(0.85rem, env(safe-area-inset-bottom))' }}
    >
      <div className="grid grid-cols-2 gap-2.5">
        <a
          href={telHref}
          className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-500 text-white font-semibold text-sm rounded-full py-3.5 transition-colors min-h-11 active:opacity-80 tracking-wide shadow-lg shadow-red-900/40"
        >
          <PhoneIcon className="w-4 h-4" />
          Llamar
        </a>
        <a
          href={whatsAppHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur border border-white/30 text-white font-semibold text-sm rounded-full py-3.5 transition-colors min-h-11 active:opacity-80 tracking-wide"
        >
          <WhatsAppIcon className="w-4 h-4" />
          WhatsApp
        </a>
      </div>
    </div>
  )
}
