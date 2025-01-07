'use client'

import { motion } from 'framer-motion'
import { useEffect, useState, useCallback } from 'react'

export default function StarfieldAnimation() {
  const [stars, setStars] = useState<any[]>([])

  const generateStars = useCallback(() => {
    const newStars = []
    // Reduced number of stars significantly
    for (let i = 0; i < 150; i++) {
      const isBright = Math.random() > 0.95
      newStars.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + (isBright ? 2 : 0.5),
        opacity: Math.random() * 0.5 + (isBright ? 0.3 : 0.1),
        duration: Math.random() * 3 + 2,
        delay: Math.random() * 2,
      })
    }
    setStars(newStars)
  }, [])

  useEffect(() => {
    generateStars()
  }, [generateStars])

  return (
    <div className="fixed inset-0 pointer-events-none">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size,
            height: star.size,
          }}
          animate={{
            opacity: [star.opacity, star.opacity * 0.3, star.opacity],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: star.delay,
          }}
        />
      ))}
    </div>
  )
} 