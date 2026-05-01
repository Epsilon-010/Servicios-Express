import { lazy, Suspense } from 'react'
import { Footer } from '../components/layout/Footer'
import { MobileCTA } from '../components/layout/MobileCTA'
import { Navbar } from '../components/layout/Navbar'
import { ScrollProgress } from '../components/ScrollProgress'
import { Hero } from '../components/sections/Hero'
import { TextureWarmup } from '../components/TextureWarmup'
import { services } from '../data/services'
import { useCounters } from '../hooks/useCounters'
import { useHeroAnimations } from '../hooks/useHeroAnimations'
import { useLenis } from '../hooks/useLenis'
import { useMicroInteractions } from '../hooks/useMicroInteractions'
import { useNavbarScroll } from '../hooks/useNavbarScroll'
import { usePrefetchSections } from '../hooks/usePrefetchSections'
import { usePreloadImages } from '../hooks/usePreloadImages'
import { useScrollAnimations } from '../hooks/useScrollAnimations'

// Below-fold sections — lazy-loaded para que el initial bundle sea ligero
const Services = lazy(() =>
  import('../components/sections/Services').then((m) => ({ default: m.Services })),
)
const Slogan = lazy(() =>
  import('../components/sections/Slogan').then((m) => ({ default: m.Slogan })),
)
const Contact = lazy(() =>
  import('../components/sections/Contact').then((m) => ({ default: m.Contact })),
)
const Testimonials = lazy(() =>
  import('../components/sections/Testimonials').then((m) => ({ default: m.Testimonials })),
)
const Location = lazy(() =>
  import('../components/sections/Location').then((m) => ({ default: m.Location })),
)
const CtaFinal = lazy(() =>
  import('../components/sections/CtaFinal').then((m) => ({ default: m.CtaFinal })),
)

const SERVICE_IMAGES = services.map((s) => s.image)

function SectionFallback() {
  return <div className="h-[60vh] bg-stone-950" />
}

export default function Home() {
  useLenis()
  useHeroAnimations()
  useScrollAnimations()
  useCounters()
  useNavbarScroll()
  useMicroInteractions()
  usePreloadImages(SERVICE_IMAGES, 1200)
  usePrefetchSections()

  return (
    <div className="min-h-screen bg-stone-950 text-white">
      <ScrollProgress />
      <TextureWarmup urls={SERVICE_IMAGES} />
      <Navbar />
      <Hero />
      <Suspense fallback={<SectionFallback />}>
        <Services />
        <Slogan />
        <Contact />
        <Testimonials />
        <Location />
        <CtaFinal />
      </Suspense>
      <Footer />
      <MobileCTA />
    </div>
  )
}
