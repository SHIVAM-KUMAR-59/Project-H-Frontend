'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function PhoneAnimation() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="relative w-[300px] h-[600px] pt-10">
      <motion.div
        className="absolute inset-0"
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        style={{
          perspective: '1000px',
        }}
      >
        <motion.div
          className="w-full h-full"
          style={{
            transformStyle: 'preserve-3d',
            transform: 'rotateY(-45deg) rotateX(10deg)',
          }}
        >
          {/* Phone body */}
          <motion.div
            className="absolute inset-0 bg-gray-800 rounded-[40px] shadow-xl"
            style={{
              boxShadow: '0 0 0 10px #1a1a1a, 0 0 0 13px #272727',
            }}
          />

          {/* Phone screen */}
          <motion.div
            className="absolute inset-[4px] rounded-[36px] overflow-hidden"
            initial={{ opacity: 0.8 }}
            animate={{ opacity: isHovered ? 1 : 0.8 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500"
              animate={{
                backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
            <motion.div
              className="absolute inset-0 bg-white"
              animate={{
                opacity: [0, 0.6, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
            {/* App content placeholder */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
              <motion.div 
                className="w-24 h-24 bg-white/20 rounded-full"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.8, 0.8, 0.6]
                }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
              />
              <motion.div 
                className="w-32 h-32 bg-white/10 rounded-2xl mt-4"
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 0.5, 0.5]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>

          {/* Illumination effect */}
          <motion.div
            className="absolute -inset-4 rounded-[48px] bg-gradient-to-br from-blue-400/40 via-purple-500/40 to-pink-500/40 blur-2xl"
            animate={{
              opacity: [0.6, 0.8, 0.6],
              scale: [1, 1, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />

          {/* Phone details */}
          <div className="absolute inset-0">
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-1/3 h-6 bg-black rounded-full" />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-1/4 h-1 bg-gray-900 rounded-full" />
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

