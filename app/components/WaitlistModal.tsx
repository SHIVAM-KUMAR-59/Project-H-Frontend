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
  // 2 Extra states for managing the message
  const [message, setMessage] = useState('Welcome Aboard! 🚀')
  const [subMessage, setSubMessage] = useState(
    'Your journey to the future begins now.',
  )

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)

    try {
      const response = await fetch('/api/createUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, name }),
      })

      const responseData = await response.json()

      if (response.status === 200) {
        // Show success toast with dynamic message
        console.log('success')
        toast.success(`Welcome ${name}! ${responseData.message}`, {
          position: 'bottom-right',
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
        // Setting the message and subMessage in case of success
        setMessage('')
        setSubMessage('')
      } else {
        // Setting the message and subMessage in case of error
        toast.error(responseData.message || 'Error joining waitlist', {
          position: 'bottom-right',
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })

        setMessage('An Error Occurred, Please Try Again!')
        setSubMessage('Please check your credentials and try again')
      }
    } catch (error) {
      toast.error('Something went wrong. Please try again later.', {
        position: 'bottom-right',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
      // Setting the message and subMessage in case of system error
      setMessage('An Error Occurred, Please Try Again!')
      setSubMessage('Please check your credentials and try again')
    } finally {
      setTimeout(() => {
        onClose()
        setSubmitted(false)
        setEmail('')
        setName('')
      }, 2000)
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
                      <motion.div
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                      >
                        <Input
                          type="text"
                          placeholder="Your name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full bg-zinc-800/50 border-zinc-700/50 text-white placeholder:text-gray-500 focus-visible:ring-blue-500 focus-visible:border-blue-500 shadow-[0_0_10px_-3px_rgba(59,130,246,0.2)]"
                          required
                        />
                      </motion.div>

                      <motion.div
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        <Input
                          type="email"
                          placeholder="Your email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full bg-zinc-800/50 border-zinc-700/50 text-white placeholder:text-gray-500 focus-visible:ring-blue-500 focus-visible:border-blue-500 shadow-[0_0_10px_-3px_rgba(59,130,246,0.2)]"
                          required
                        />
                      </motion.div>

                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="relative group"
                      >
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
                        <Button
                          type="submit"
                          className="relative w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white h-11 font-medium shadow-[0_0_20px_-5px_rgba(59,130,246,0.5)]"
                        >
                          <Sparkles className="w-4 h-4 mr-2" />
                          Join Waitlist
                        </Button>
                      </motion.div>
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
                      <Rocket className="w-8 h-8" />
                    </motion.div>
                    <h3 className="text-2xl font-semibold text-white mb-2 [text-shadow:_0_1px_20px_rgb(59_130,246,_30%)]">
                      {message}
                    </h3>
                    <p className="text-gray-300 [text-shadow:_0_1px_10px_rgb(255_255_255_/_10%)]">
                      {subMessage}
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
