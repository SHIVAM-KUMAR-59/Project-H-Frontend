'use client'

import { motion } from 'framer-motion'
import { Instagram, Github, Twitter, Share2 } from 'lucide-react'
import { useState } from 'react'

export default function SocialMediaButtons() {
  const [isOpen, setIsOpen] = useState(false)

  const socialLinks = [
    {
      icon: Instagram,
      href: 'https://instagram.com/your-handle',
      color: 'text-pink-400 hover:shadow-[0_0_25px_rgba(236,72,153,0.6)]',
      label: 'Instagram',
    },
    {
      icon: Github,
      href: 'https://github.com/your-username',
      color: 'text-gray-400 hover:shadow-[0_0_25px_rgba(156,163,175,0.6)]',
      label: 'GitHub',
    },
    {
      icon: Twitter,
      href: 'https://x.com/SkillArcNetwork/media',
      color: 'text-blue-400 hover:shadow-[0_0_25px_rgba(59,130,246,0.6)]',
      label: 'LinkedIn',
    },
  ]

  return (
    <div className="fixed left-6 bottom-5 z-50">
      <motion.div
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        className="relative"
      >
        {/* Social Media Icons */}
        <motion.div
          variants={{
            open: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="absolute bottom-14 space-y-4"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              variants={{
                open: { opacity: 1, y: 0 },
                closed: { opacity: 0, y: 20 },
              }}
              className={`block p-2.5 bg-zinc-900/90 rounded-full border border-zinc-800/50 
                backdrop-blur-sm shadow-lg transform hover:scale-110 transition-all duration-300
                ${social.color}`}
            >
              <social.icon className="w-5 h-5" />
            </motion.a>
          ))}
        </motion.div>

        {/* Toggle Button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="p-3.5 bg-gradient-to-r from-blue-500/90 to-purple-600/90 rounded-full 
            border border-zinc-800/50 backdrop-blur-sm shadow-lg
            hover:shadow-[0_0_25px_rgba(59,130,246,0.6)] hover:scale-110 
            transition-all duration-300 flex items-center justify-center"
          whileHover={{ rotate: 90 }}
          whileTap={{ scale: 0.9 }}
        >
          <Share2 className="w-5 h-5 text-white" />
        </motion.button>
      </motion.div>
    </div>
  )
}
