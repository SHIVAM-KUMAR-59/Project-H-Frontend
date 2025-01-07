'use client'

import { useState } from 'react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Smartphone } from 'lucide-react'
import WaitlistModal from './WaitlistModal'

export default function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full z-40 pt-6">
      <div className="container flex h-16 items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 -ml-40">
          <Smartphone className="h-6 w-6 text-white" />
          <span className="font-bold text-white">AppName</span>
        </Link>
        
        {/* Navigation Links */}
        <div className="fixed left-1/2 -translate-x-1/2 bg-zinc-800/50 rounded-full px-7 py-2.5">
          <nav className="flex items-center space-x-16 text-[15px] font-medium">
            <Link 
              href="#home" 
              className="text-white hover:text-white/90 transition-colors relative group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-white/80 group-hover:w-full transition-all duration-300" />
            </Link>
            <Link 
              href="#vision" 
              className="text-white hover:text-white/90 transition-colors relative group"
            >
              Vision
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-white/80 group-hover:w-full transition-all duration-300" />
            </Link>
            <Link 
              href="#contact" 
              className="text-white hover:text-white/90 transition-colors relative group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-white/80 group-hover:w-full transition-all duration-300" />
            </Link>
          </nav>
        </div>

        {/* Action Button */}
        <div className="ml-auto mr-[-10rem]">
          <Button 
            onClick={() => setIsModalOpen(true)}
            className="bg-white text-black hover:bg-zinc-200"
          >
            Join Waitlist
          </Button>
        </div>
      </div>

      <WaitlistModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </header>
  )
}

