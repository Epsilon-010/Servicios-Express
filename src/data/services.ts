import type { ComponentType, SVGProps } from 'react'
import { HammerIcon, PaintIcon, WrenchIcon } from '../components/icons'
import { cld } from '../lib/cloudinary'

export type Service = {
  title: string
  /** short pitch shown on the compact card */
  desc: string
  /** longer copy shown when the card expands */
  details: string
  features: string[]
  image: string
  Icon: ComponentType<SVGProps<SVGSVGElement>>
}

export const services: Service[] = [
  {
    title: 'Mecánica',
    desc: 'Diagnóstico y reparación de motor, transmisión, frenos y sistema eléctrico.',
    details:
      'Servicio integral para mantener tu vehículo en condiciones óptimas. Trabajamos con equipo de diagnóstico computarizado y refacciones de marca para garantizar resultados confiables y duraderos.',
    features: [
      'Diagnóstico computarizado',
      'Afinación mayor y menor',
      'Sistema de frenos completo',
      'Suspensión y dirección',
      'Sistema eléctrico',
      'Cambio de aceite y filtros',
    ],
    image: cld('pexels-cottonbro-7564866_vcpvpy'),
    Icon: WrenchIcon,
  },
  {
    title: 'Pintura',
    desc: 'Pintura automotriz completa, retoques y acabados de alta calidad.',
    details:
      'Cabina especializada con técnicas profesionales para devolverle el brillo a tu auto. Igualamos el color original y aplicamos acabados duraderos resistentes a la intemperie y al sol.',
    features: [
      'Pintura completa',
      'Retoques localizados',
      'Igualación de color',
      'Acabado en cabina',
      'Pulido y abrillantado',
      'Protección anti-rayos UV',
    ],
    image: cld('pexels-vladan-rajkovic-159003801-18136808_f16bbs'),
    Icon: PaintIcon,
  },
  {
    title: 'Hojalatería',
    desc: 'Enderezado de carrocería, reparación de golpes y abolladuras.',
    details:
      'Reparación de carrocería con técnicas modernas. Devolvemos la geometría original al chasis y eliminamos golpes sin dejar huella, dejando tu vehículo listo para pintar como nuevo.',
    features: [
      'Enderezado de chasis',
      'Reparación de abolladuras',
      'Soldadura especializada',
      'Reposición de piezas',
      'Preparación para pintura',
      'Tratamiento anticorrosivo',
    ],
    image: cld('banco-de-enderezado-de-chasis_m4vfj4'),
    Icon: HammerIcon,
  },
]
