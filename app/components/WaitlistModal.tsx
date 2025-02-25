'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { X, Sparkles, Rocket } from 'lucide-react'
import { toast } from 'react-toastify'

interface WaitlistModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function WaitlistModal({ isOpen, onClose }: WaitlistModalProps) {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      const response = await fetch('/api/createUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong')
      }

      setSubmitted(true)
      toast.success(`Welcome ${name}! You've joined the waitlist!`, {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      })

      setTimeout(() => {
        onClose()
        setSubmitted(false)
        setEmail('')
        setName('')
      }, 2000)
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Failed to join waitlist')
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="relative w-full max-w-lg mx-4 sm:mx-auto"
          >
            <div className="bg-gradient-to-b from-zinc-900/95 to-zinc-950/95 border border-zinc-800/50 rounded-2xl overflow-hidden backdrop-blur-xl shadow-[0_0_50px_-12px_rgba(59,130,246,0.3)]">
              <div className="relative p-8">
                <button
                  onClick={onClose}
                  className="absolute right-4 top-4 text-gray-400 hover:text-white transition-colors"
                >
                  <X size={20} />
                </button>

                {!submitted ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="space-y-8"
                  >
                    <div className="text-center space-y-2">
                      <motion.div
                        animate={{ rotate: [0, 5, -5, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="inline-block"
                      >
                        <div className="relative">
                          <Rocket className="w-12 h-12 text-blue-400 mx-auto mb-2" />
                          <motion.div
                            className="absolute inset-0 rounded-full bg-blue-400/20 blur-xl"
                            animate={{
                              scale: [1, 1.2, 1],
                              opacity: [0.5, 0.8, 0.5],
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                          />
                        </div>
                      </motion.div>
                      <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 [text-shadow:_0_1px_20px_rgb(59_130,246,_30%)]">
                        Join the Future
                      </h2>
                      <p className="text-gray-300 drop-shadow-sm [text-shadow:_0_1px_10px_rgb(255_255_255_/_10%)]">
                        Be part of something extraordinary
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <Input
                          type="text"
                          placeholder="Your name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                          className="bg-zinc-800/50 border-zinc-700/50 text-white placeholder:text-gray-400"
                        />
                      </div>
                      <div>
                        <Input
                          type="email"
                          placeholder="Your email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="bg-zinc-800/50 border-zinc-700/50 text-white placeholder:text-gray-400"
                        />
                      </div>
                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0"
                      >
                        Join Waitlist
                      </Button>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="py-8 text-center"
                  >
                    <motion.div
                      animate={{
                        y: [0, -10, 0],
                        rotate: [0, 5, -5, 0],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-green-500/20 to-green-500/30 text-green-400 shadow-[0_0_20px_-5px_rgba(34,197,94,0.5)]"
                    >
                      <Sparkles className="w-8 h-8" />
                    </motion.div>
                    <h3 className="text-2xl font-semibold text-white mb-2 [text-shadow:_0_1px_20px_rgb(59_130,246,_30%)]">
                      Welcome Aboard! 🚀
                    </h3>
                    <p className="text-gray-300 [text-shadow:_0_1px_10px_rgb(255_255_255_/_10%)]">
                      Your journey to the future begins now.
                    </p>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
