'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Shield, Zap, Bell, RefreshCw } from 'lucide-react'
import FlipMove from 'react-flip-move'

// Simulated email list for the audit log
const SAMPLE_EMAILS = [
  'sarah.parker@gmail.com',
  'john.doe@outlook.com',
  'emma.wilson@yahoo.com',
  'alex.turner@hotmail.com',
  'mike.ross@gmail.com',
  'rachel.green@mail.com',
  'david.miller@outlook.com',
  'lisa.white@gmail.com',
  'james.brown@yahoo.com',
  'olivia.taylor@mail.com'
]

export default function FeaturesSection() {
  const [auditLogs, setAuditLogs] = useState<string[]>([])

  useEffect(() => {
    // Initial logs
    setAuditLogs(SAMPLE_EMAILS.slice(0, 5))
    
    const interval = setInterval(() => {
      const randomEmail = SAMPLE_EMAILS[Math.floor(Math.random() * SAMPLE_EMAILS.length)]
      setAuditLogs(prev => [randomEmail, ...prev.slice(0, 9)]) // Keep max 10 items
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/0 via-zinc-900/50 to-zinc-900/0" />

      <div className="container relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Features */}
          <div className="space-y-16">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                Powerful Features
              </h2>
              <p className="text-xl text-gray-400">
                Experience a revolutionary set of features designed to transform your mobile experience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Feature 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="group space-y-4 p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800/50 hover:bg-zinc-800/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Shield className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white">Secure by Design</h3>
                <p className="text-gray-400">
                  Built with security at its core, ensuring your data stays protected.
                </p>
              </motion.div>

              {/* Feature 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="group space-y-4 p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800/50 hover:bg-zinc-800/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Zap className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white">Lightning Fast</h3>
                <p className="text-gray-400">
                  Optimized performance for seamless user experience.
                </p>
              </motion.div>

              {/* Feature 3 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="group space-y-4 p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800/50 hover:bg-zinc-800/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-pink-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Bell className="w-6 h-6 text-pink-400" />
                </div>
                <h3 className="text-xl font-semibold text-white">Smart Notifications</h3>
                <p className="text-gray-400">
                  Stay updated with intelligent and timely alerts.
                </p>
              </motion.div>

              {/* Feature 4 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="group space-y-4 p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800/50 hover:bg-zinc-800/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <RefreshCw className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white">Real-time Sync</h3>
                <p className="text-gray-400">
                  Your data is always synced across all your devices.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Right side - Live Audit Log */}
          <div className="lg:pl-12">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-zinc-800/50 overflow-hidden backdrop-blur-sm"
            >
              <div className="p-6 bg-zinc-900/50 border-b border-zinc-800/50">
                <h3 className="text-xl font-semibold text-white">Live Waitlist Updates</h3>
                <p className="text-gray-400 mt-1">Watch as new users join the revolution.</p>
              </div>
              
              <div className="bg-zinc-900/30 p-6 h-[300px] overflow-auto scrollbar-hide">
                <FlipMove enterAnimation="fade" leaveAnimation="fade">
                  {auditLogs.map((email) => (
                    <div 
                      key={email}
                      className="flex items-center space-x-4 p-4 mb-3 rounded-lg bg-zinc-900/50 border border-zinc-800/50"
                    >
                      <div className="relative w-2 h-2">
                        <div className="absolute inset-0 rounded-full bg-green-400/80" />
                        <div className="absolute inset-0 rounded-full bg-green-400/40 animate-ping" />
                      </div>
                      <div>
                        <p className="text-gray-300">{email}</p>
                        <p className="text-sm text-gray-500">joined the waitlist</p>
                      </div>
                    </div>
                  ))}
                </FlipMove>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
} 