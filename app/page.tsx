import { Suspense, lazy } from 'react'
import dynamic from 'next/dynamic'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'

// Dynamically import non-critical components
const EntryTransition = dynamic(() => import('./components/EntryTransition'), {
  ssr: false,
})

const StarfieldAnimation = dynamic(
  () => import('./components/StarfieldAnimation'),
  {
    ssr: false,
    loading: () => <div className="fixed inset-0 bg-zinc-950" />,
  },
)

const AnimatedBackground = dynamic(
  () => import('./components/AnimatedBackground'),
  {
    ssr: false,
  },
)

const FeaturesSection = dynamic(() => import('./components/FeaturesSection'), {
  ssr: false,
})

// const InfiniteCarousel = dynamic(
//   () => import('./components/InfiniteCarousel'),
//   {
//     ssr: false,
//   },
// )

const ContactSection = dynamic(() => import('./components/ContactSection'), {
  ssr: false,
})

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 overflow-hidden">
      <EntryTransition />

      <Suspense fallback={<div className="fixed inset-0 bg-zinc-950" />}>
        <StarfieldAnimation />
      </Suspense>

      <Navbar />

      <div className="relative mt-5">
        <Suspense fallback={null}>
          <AnimatedBackground />
        </Suspense>
        <HeroSection />
      </div>

      <Suspense fallback={null}>
        <FeaturesSection />
      </Suspense>

      <Suspense fallback={null}>
        <ContactSection />
      </Suspense>
    </main>
  )
}
