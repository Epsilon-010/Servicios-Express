import { business, phoneDisplay, telHref, whatsAppHref } from '../../lib/contact'

export function Navbar() {
  return (
    <nav className="nav-default fixed top-0 left-0 right-0 z-[100] backdrop-blur-xl transition-all duration-500">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 h-16 flex items-center justify-between gap-4">
        {/* Brand */}
        <a href="#" className="group flex items-center gap-3 shrink-0">
          <span className="relative flex items-center justify-center">
            <span className="absolute inset-0 rounded-full bg-red-500 blur-md opacity-60 group-hover:opacity-100 transition-opacity" />
            <span className="relative w-2 h-2 bg-red-500 rounded-full" />
          </span>
          <p className="nav-brand font-playfair text-[15px] tracking-tight">
            <span className="italic font-medium">{business.shortName}</span>
          </p>
        </a>

        {/* Center links */}
        <div className="hidden md:flex items-center gap-10">
          <NavLink href="#servicios">Servicios</NavLink>
          <NavLink href="#contacto">Contacto</NavLink>
          <NavLink href="#ubicacion">Ubicación</NavLink>
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-4">
          <a
            href={whatsAppHref}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link hidden md:flex text-[11px] transition-colors font-medium tracking-[0.22em] uppercase"
          >
            WhatsApp
          </a>
          <a
            href={telHref}
            className="group relative flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white text-[12px] font-medium px-5 py-2.5 rounded-full transition-all duration-300 tracking-wider shadow-[0_0_20px_-4px_rgba(220,38,38,0.6)] hover:shadow-[0_0_30px_-2px_rgba(220,38,38,0.9)]"
          >
            <span className="hidden sm:inline">{phoneDisplay}</span>
            <span className="sm:hidden">Llamar</span>
          </a>
        </div>
      </div>

      {/* Bottom hairline accent */}
      <div className="nav-hairline absolute bottom-0 inset-x-0 h-px" />
    </nav>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="nav-link group relative text-[11px] transition-colors font-medium tracking-[0.22em] uppercase"
    >
      {children}
      <span className="absolute -bottom-1 left-0 right-0 h-px bg-red-500 origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
    </a>
  )
}
