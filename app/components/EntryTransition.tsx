'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function EntryTransition() {
  const [isLoading, setIsLoading] = useState(true)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
      // Remove component completely after animation
      const cleanupTimer = setTimeout(() => {
        setIsVisible(false)
      }, 1000) // Wait for animation to complete
      return () => clearTimeout(cleanupTimer)
    }, 1800)
    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-zinc-950 transform-gpu pointer-events-none"
          initial={{ opacity: 1 }}
          animate={isLoading ? 
            { opacity: 1, scale: 1 } : 
            { opacity: 0, scale: 3 }
          }
          exit={{ opacity: 0 }}
          transition={{ 
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
            scale: {
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1]
            },
            opacity: {
              duration: 0.8,
              ease: 'linear'
            }
          }}
          style={{
            willChange: 'transform, opacity',
            perspective: '1000px',
            backfaceVisibility: 'hidden'
          }}
        >
          <motion.div
            initial={{ scale: 1.5, opacity: 0 }}
            animate={{ 
              scale: 1,
              opacity: 1
            }}
            transition={{ 
              duration: 0.6,
              ease: [0.34, 1.56, 0.64, 1],
              opacity: { duration: 0.4 }
            }}
            className="text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 transform-gpu"
            style={{
              willChange: 'transform, opacity'
            }}
          >
            AppName
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
} 