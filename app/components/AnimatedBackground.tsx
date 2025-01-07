'use client'

import { motion } from 'framer-motion'

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 opacity-50">
      <motion.div
        className="absolute -inset-32 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-[100px] rounded-full"
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
    </div>
  )
}

