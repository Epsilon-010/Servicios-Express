export type Testimonial = {
  name: string
  service: string
  stars: number
  comment: string
}

export const testimonials: Testimonial[] = [
  {
    name: 'Carlos Mendoza',
    service: 'Mecánica General',
    stars: 5,
    comment:
      'Excelente servicio, muy profesional. Mi auto quedó como nuevo. Recomiendo ampliamente el trabajo de estos mecánicos.',
  },
  {
    name: 'María García',
    service: 'Pintura y Detallado',
    stars: 5,
    comment:
      'Llevé mi vehículo por un retoque de pintura y quedó perfecto. Los chicos tienen muy buena mano y son muy atentos.',
  },
  {
    name: 'Roberto Flores',
    service: 'Hojalatería',
    stars: 5,
    comment:
      'Tenía un golpe bastante feo en la puerta y lo dejaron impecable. Trabajo de primera calidad a buen precio.',
  },
  {
    name: 'Fernanda López',
    service: 'Lavado y Encerado',
    stars: 5,
    comment:
      'Servicio rápido y eficiente. Mi auto brilla como nuevo. Volveré con seguridad para mantenimiento regular.',
  },
  {
    name: 'Javier Rodríguez',
    service: 'Diagnóstico Completo',
    stars: 5,
    comment:
      'Gran profesionalismo. Diagnosticaron un problema que otros no habían visto. Muy recomendado para confianza.',
  },
  {
    name: 'Sofía Martínez',
    service: 'Sistema Eléctrico',
    stars: 5,
    comment:
      'Excelente atención. Resolvieron mi problema en poco tiempo. Precio justo y trabajo garantizado.',
  },
]
