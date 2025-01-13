'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import PhoneAnimation from './PhoneAnimation'
import WaitlistModal from './WaitlistModal'
import InfiniteCarousel from './InfiniteCarousel'

export default function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section id="home" className="relative">
      <div className="container relative min-h-screen flex items-center py-20 mt-16">
        <div className="w-full flex flex-col-reverse md:flex-row items-center justify-between gap-8">
          <div className="flex-1 space-y-6 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 [text-shadow:_0_1px_20px_rgb(59_130_246_/_30%)] drop-shadow-sm">
              Transform Your Mobile Experience
            </h1>
            <p className="text-xl text-gray-200 drop-shadow-sm [text-shadow:_0_1px_10px_rgb(255_255_255_/_10%)]">
              Experience the next generation of mobile technology. Our
              revolutionary app is coming soon to redefine how you interact with
              your digital world.
            </p>
            <div className="flex flex-col md:flex-row gap-4">
              <Button
                size="lg"
                onClick={() => setIsModalOpen(true)}
                className="w-full md:w-auto bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0 
                shadow-[0_0_20px_rgba(59,130,246,0.5),inset_0_0_0_1px_rgba(255,255,255,0.2)] 
                hover:shadow-[0_0_25px_rgba(59,130,246,0.8),inset_0_0_0_2px_rgba(255,255,255,0.4)] 
                transition-all duration-300 font-semibold tracking-wide 
                backdrop-blur-sm relative 
                before:absolute before:inset-0 before:bg-gradient-to-r before:from-blue-400/20 before:to-purple-500/20 before:rounded-md
                hover:scale-105"
              >
                Join Waitlist
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full md:w-auto bg-zinc-900/50 border-zinc-700/50 text-gray-200 
                hover:bg-zinc-800/50 hover:border-blue-500/50 
                shadow-[0_0_10px_rgba(59,130,246,0.1)] 
                hover:shadow-[0_0_15px_rgba(59,130,246,0.2),inset_0_0_0_1px_rgba(59,130,246,0.2)] 
                backdrop-blur-sm transition-all duration-300
                hover:text-white hover:scale-105
                relative overflow-hidden
                before:absolute before:inset-0 before:bg-gradient-to-r before:from-blue-400/0 before:to-purple-500/0 
                before:hover:from-blue-400/10 before:hover:to-purple-500/10 before:transition-colors"
              >
                Learn More
              </Button>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <PhoneAnimation />
          </div>

          <WaitlistModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
        </div>
      </div>
      <InfiniteCarousel section="hero" />
    </section>
  )
}
