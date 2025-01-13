'use client'

import { motion } from 'framer-motion'

interface InfiniteCarouselProps {
  section?: 'hero' | 'features' | 'contact'
}

const sectionTexts = {
  hero: [
    'REVOLUTIONARY MOBILE EXPERIENCE',
    'TRANSFORM YOUR DIGITAL LIFESTYLE',
    'JOIN THOUSANDS OF EARLY ADOPTERS',
    'SEAMLESS INTEGRATION',
  ],
  features: [
    'ENHANCED PRODUCTIVITY',
    'BEAUTIFUL DESIGN',
    'NEXT-GENERATION TECHNOLOGY',
    'SECURE BY DEFAULT',
  ],
  contact: [
    'JOIN OUR COMMUNITY',
    'GET IN TOUCH WITH US',
    'STAY UPDATED',
    'BE PART OF THE FUTURE',
  ],
}

export default function InfiniteCarousel({
  section = 'hero',
}: InfiniteCarouselProps) {
  const testimonials = sectionTexts[section] || sectionTexts.hero

  return (
    <div className="sticky bottom-0 w-full">
      <div className="relative flex overflow-hidden border-t border-zinc-800 bg-black py-2">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{
            x: [0, -1920],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {[...testimonials, ...testimonials].map((text, i) => (
            <div
              key={i}
              className="inline-flex items-center font-mono text-xs tracking-wider text-zinc-400"
            >
              <span>{text}</span>
              <span className="mx-4 text-zinc-600">•</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
