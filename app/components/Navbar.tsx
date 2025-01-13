'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Smartphone, Menu, X } from 'lucide-react'
import WaitlistModal from './WaitlistModal'

export default function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      const offset = 100 // Adjust for navbar height
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.scrollY - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }

  return (
    <header className="fixed top-0 w-full z-40">
      <div className="container flex h-16 items-center justify-between px-4 md:pt-10">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Smartphone className="h-6 w-6 text-white" />
          <span className="font-bold text-white">AppName</span>
        </Link>

        {/* Hamburger Menu Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Navigation Links */}
        <nav
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } md:flex md:items-center md:space-x-8 absolute md:static top-16 left-0 w-full md:w-auto bg-zinc-900/70 md:bg-zinc-800/50 md:rounded-full text-center md:text-left md:px-7 md:py-2.5`}
        >
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection('#home')
              setIsMenuOpen(false) // Close menu on link click
            }}
            className="text-white hover:text-white/90 transition-colors block py-2 md:py-0"
          >
            Home
          </a>
          <a
            href="#features"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection('#features')
              setIsMenuOpen(false) // Close menu on link click
            }}
            className="text-white hover:text-white/90 transition-colors block py-2 md:py-0"
          >
            Features
          </a>
          <a
            href="#team"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection('#team')
              setIsMenuOpen(false) // Close menu on link click
            }}
            className="text-white hover:text-white/90 transition-colors block py-2 md:py-0"
          >
            Team
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection('#contact')
              setIsMenuOpen(false) // Close menu on link click
            }}
            className="text-white hover:text-white/90 transition-colors block py-2 md:py-0"
          >
            Contact
          </a>
        </nav>

        {/* Action Button */}
        <div className="hidden md:block">
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
