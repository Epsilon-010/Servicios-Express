import { useEffect } from 'react'
import { business, email, phoneDisplay } from '../../lib/contact'

export type LegalDocId = 'privacidad' | 'terminos'

const LAST_UPDATED = 'Agosto de 2026'

function H({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="font-playfair text-white text-lg sm:text-xl font-medium tracking-tight mt-8 mb-3 first:mt-0">
      {children}
    </h3>
  )
}

function P({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-white/65 text-sm leading-[1.85] font-light mb-3">{children}</p>
  )
}

function LI({ children }: { children: React.ReactNode }) {
  return (
    <li className="text-white/65 text-sm leading-[1.85] font-light pl-1 marker:text-red-400">
      {children}
    </li>
  )
}

function PrivacyContent() {
  return (
    <>
      <H>1. Responsable del tratamiento de datos personales</H>
      <P>
        {business.name}, con domicilio en {business.address.street},{' '}
        {business.address.neighborhood}, {business.address.zip} (en adelante, «el
        Taller»), es responsable del tratamiento de los datos personales que nos
        proporciones, conforme a la Ley Federal de Protección de Datos Personales en
        Posesión de los Particulares (LFPDPPP). Puedes contactarnos en el correo{' '}
        <a href={`mailto:${email}`} className="text-red-400 hover:text-red-300 underline underline-offset-2">
          {email}
        </a>{' '}
        o al teléfono {phoneDisplay}.
      </P>

      <H>2. Datos personales que recabamos</H>
      <P>
        Este sitio web es informativo y no contiene formularios de registro. Únicamente
        recabamos datos personales cuando tú decides contactarnos por teléfono, WhatsApp
        o correo electrónico, por ejemplo:
      </P>
      <ul className="list-disc pl-5 space-y-1 mb-3">
        <LI>Nombre y datos de contacto (teléfono y/o correo electrónico).</LI>
        <LI>Información del vehículo y del servicio que solicitas.</LI>
      </ul>

      <H>3. Finalidades del tratamiento</H>
      <ul className="list-disc pl-5 space-y-1 mb-3">
        <LI>Atender tus solicitudes de información y elaborar presupuestos.</LI>
        <LI>Agendar citas y prestar los servicios contratados.</LI>
        <LI>Dar seguimiento a los servicios realizados.</LI>
      </ul>
      <P>No utilizamos tus datos con fines publicitarios ni los vendemos a terceros.</P>

      <H>4. Transferencias de datos</H>
      <P>
        No transferimos tus datos personales a terceros, salvo que exista una obligación
        legal o un requerimiento de autoridad competente.
      </P>

      <H>5. Cookies y tecnologías de terceros</H>
      <P>
        Este sitio no utiliza cookies propias, ni herramientas de analítica o publicidad,
        y no recaba datos personales de forma automática. Sin embargo, para su
        funcionamiento utiliza servicios de terceros que pueden tratar datos técnicos
        (como tu dirección IP o tipo de navegador) y, en su caso, establecer sus propias
        cookies conforme a sus políticas de privacidad:
      </P>
      <ul className="list-disc pl-5 space-y-1 mb-3">
        <LI>Google Maps (mapa de ubicación incrustado) — puede usar cookies de Google.</LI>
        <LI>Google Fonts (tipografías del sitio).</LI>
        <LI>Cloudinary (alojamiento de imágenes).</LI>
        <LI>
          WhatsApp (los botones de contacto abren la aplicación o sitio de WhatsApp,
          operado por Meta).
        </LI>
      </ul>
      <P>
        Puedes configurar tu navegador para bloquear o eliminar cookies en cualquier
        momento; el sitio seguirá funcionando con normalidad.
      </P>

      <H>6. Derechos ARCO</H>
      <P>
        Tienes derecho a acceder, rectificar y cancelar tus datos personales, así como a
        oponerte a su tratamiento o revocar tu consentimiento. Para ejercer estos
        derechos, envía tu solicitud al correo{' '}
        <a href={`mailto:${email}`} className="text-red-400 hover:text-red-300 underline underline-offset-2">
          {email}
        </a>{' '}
        o acude directamente al Taller. Responderemos en los plazos que establece la
        LFPDPPP. Si consideras que tu derecho a la protección de datos ha sido vulnerado,
        puedes acudir al Instituto Nacional de Transparencia, Acceso a la Información y
        Protección de Datos Personales (INAI).
      </P>

      <H>7. Cambios al aviso de privacidad</H>
      <P>
        Cualquier modificación a este aviso se publicará en esta misma página. Última
        actualización: {LAST_UPDATED}.
      </P>
    </>
  )
}

function TermsContent() {
  return (
    <>
      <H>1. Identificación</H>
      <P>
        Este sitio web pertenece a {business.name}, taller mecánico ubicado en{' '}
        {business.address.street}, {business.address.neighborhood},{' '}
        {business.address.zip}. Contacto: teléfono {phoneDisplay}, correo{' '}
        <a href={`mailto:${email}`} className="text-red-400 hover:text-red-300 underline underline-offset-2">
          {email}
        </a>
        .
      </P>

      <H>2. Objeto del sitio</H>
      <P>
        El sitio tiene una finalidad exclusivamente informativa: dar a conocer los
        servicios del Taller, sus horarios, ubicación y medios de contacto. El acceso y
        la navegación son gratuitos y no requieren registro.
      </P>

      <H>3. Servicios y presupuestos</H>
      <P>
        La información de servicios publicada en este sitio es de carácter general y
        orientativo. Las condiciones, alcances, tiempos y precios de cada trabajo se
        determinan directamente en el Taller, según el diagnóstico de cada vehículo, y se
        comunican al cliente antes de iniciar cualquier reparación. Ningún trabajo se
        realiza sin la autorización previa del cliente. Los servicios se prestan conforme
        a la Ley Federal de Protección al Consumidor.
      </P>

      <H>4. Propiedad intelectual</H>
      <P>
        El nombre comercial, los textos y el diseño de este sitio pertenecen al Taller o
        se utilizan con autorización de sus titulares. No está permitido reproducirlos
        con fines comerciales sin consentimiento previo y por escrito.
      </P>

      <H>5. Enlaces y servicios de terceros</H>
      <P>
        El sitio contiene enlaces y contenidos de terceros (Google Maps, WhatsApp). El
        Taller no es responsable del contenido ni de las prácticas de privacidad de esos
        servicios, que se rigen por sus propios términos y políticas.
      </P>

      <H>6. Responsabilidad</H>
      <P>
        Procuramos mantener la información del sitio correcta y actualizada (horarios,
        teléfonos, servicios); sin embargo, puede contener errores u omisiones
        involuntarias. El Taller no garantiza la disponibilidad ininterrumpida del sitio
        web. Nada de lo anterior limita los derechos que la legislación mexicana otorga a
        los consumidores.
      </P>

      <H>7. Atención al consumidor</H>
      <P>
        Para cualquier aclaración o queja sobre nuestros servicios puedes contactarnos
        directamente. Asimismo, tienes a salvo tus derechos ante la Procuraduría Federal
        del Consumidor (PROFECO).
      </P>

      <H>8. Legislación aplicable</H>
      <P>
        Estos términos se rigen por las leyes de los Estados Unidos Mexicanos. Última
        actualización: {LAST_UPDATED}.
      </P>
    </>
  )
}

const DOCS: Record<LegalDocId, { title: string; subtitle: string; Content: () => React.ReactNode }> = {
  privacidad: {
    title: 'Aviso de Privacidad',
    subtitle: 'Protección de datos personales',
    Content: PrivacyContent,
  },
  terminos: {
    title: 'Términos y Condiciones',
    subtitle: 'Condiciones de uso del sitio',
    Content: TermsContent,
  },
}

export function LegalModal({ doc, onClose }: { doc: LegalDocId; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  const { title, subtitle, Content } = DOCS[doc]

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      {/* Backdrop */}
      <button
        type="button"
        aria-label="Cerrar"
        onClick={onClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-default"
      />

      {/* Panel */}
      <div className="relative w-full max-w-2xl max-h-[85vh] bg-stone-950 border border-stone-800 rounded-3xl shadow-2xl shadow-black/70 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 px-6 sm:px-8 pt-6 sm:pt-8 pb-5 border-b border-stone-800">
          <div>
            <p className="text-red-400 text-[10px] tracking-[0.42em] uppercase font-semibold mb-2">
              {subtitle}
            </p>
            <h2 className="font-playfair text-white text-2xl sm:text-3xl font-light tracking-tight">
              <span className="italic">{title}</span>
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar"
            className="shrink-0 w-9 h-9 rounded-full bg-stone-900 ring-1 ring-stone-800 hover:ring-red-500/50 hover:bg-red-600/15 text-white/70 hover:text-white flex items-center justify-center transition-all"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Body — data-lenis-prevent para que el scroll interno no lo capture Lenis */}
        <div data-lenis-prevent className="overflow-y-auto px-6 sm:px-8 py-6 sm:py-8">
          <Content />
        </div>
      </div>
    </div>
  )
}
