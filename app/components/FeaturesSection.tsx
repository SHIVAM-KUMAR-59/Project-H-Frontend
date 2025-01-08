'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Shield, Zap, Bell, RefreshCw } from 'lucide-react'
import FlipMove from 'react-flip-move'
import InfiniteCarousel from './InfiniteCarousel'

// API endpoint to fetch waitlist users
const API_URL = '/api/getAllUser' // Your API endpoint

export default function FeaturesSection() {
  const [auditLogs, setAuditLogs] = useState<{ name: string }[]>([])

  useEffect(() => {
    const fetchWaitlist = async () => {
      try {
        const response = await fetch(API_URL)
        if (!response.ok) {
<<<<<<< HEAD
          throw new Error('Network response was not ok');
=======
          throw new Error('Network response was not ok') // Handle non-200 responses
>>>>>>> fb972fb5a73b870511ca743142d121d493cdd3f2
        }
        const data = await response.json()
        if (data.data) {
<<<<<<< HEAD
          setAuditLogs(data.data.map((user: { name: string }) => ({ name: user.name })));
=======
          setAuditLogs(data.data.map((user: { name: string }) => user.name)) // Assuming the user object has an email field
>>>>>>> fb972fb5a73b870511ca743142d121d493cdd3f2
        }
      } catch (error: unknown) {
        if (error instanceof Error) {
          console.error('Error fetching waitlist:', error.message)
        } else {
          console.error('Error fetching waitlist:', error)
        }
      }
    }

    fetchWaitlist()

<<<<<<< HEAD
    const interval = setInterval(fetchWaitlist, 15000);
    return () => clearInterval(interval);
  }, []);
=======
    const interval = setInterval(() => {
      fetchWaitlist() // Optionally refetch every few seconds
    }, 30000) // Fetch every 30 seconds

    return () => clearInterval(interval)
  }, [])
>>>>>>> fb972fb5a73b870511ca743142d121d493cdd3f2

  return (
    <section id="features" className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/0 via-zinc-900/50 to-zinc-900/0" />
      <div className="container relative min-h-screen flex items-center py-20">
        <div className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
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

<<<<<<< HEAD
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
=======
      <div className="container relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Features */}
          <div className="space-y-16">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                Powerful Features
              </h2>
              <p className="text-xl text-gray-400">
                Experience a revolutionary set of features designed to transform
                your mobile experience.
              </p>
>>>>>>> fb972fb5a73b870511ca743142d121d493cdd3f2
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
<<<<<<< HEAD
                
                <div className="bg-zinc-900/30 p-6 h-[300px] overflow-auto scrollbar-hide">
                  <FlipMove enterAnimation="fade" leaveAnimation="fade">
                    {auditLogs.map((user) => (
                      <div 
                        key={user.name}
                        className="flex items-center space-x-4 p-4 mb-3 rounded-lg bg-zinc-900/50 border border-zinc-800/50"
                      >
                        <div className="relative w-2 h-2">
                          <div className="absolute inset-0 rounded-full bg-green-400/80" />
                          <div className="absolute inset-0 rounded-full bg-green-400/40 animate-ping" />
                        </div>
                        <div>
                          <p className="text-gray-300">{user.name}</p>
                          <p className="text-sm text-gray-500">joined the waitlist</p>
                        </div>
                      </div>
                    ))}
                  </FlipMove>
                </div>
              </motion.div>
            </div>
          </div>
=======
                <h3 className="text-xl font-semibold text-white">
                  Secure by Design
                </h3>
                <p className="text-gray-400">
                  Built with security at its core, ensuring your data stays
                  protected.
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
                <h3 className="text-xl font-semibold text-white">
                  Lightning Fast
                </h3>
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
                <h3 className="text-xl font-semibold text-white">
                  Smart Notifications
                </h3>
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
                <h3 className="text-xl font-semibold text-white">
                  Real-time Sync
                </h3>
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
                <h3 className="text-xl font-semibold text-white">
                  Live Waitlist Updates
                </h3>
                <p className="text-gray-400 mt-1">
                  Watch as new users join the revolution.
                </p>
              </div>

              <div className="bg-zinc-900/30 p-6 h-[300px] overflow-auto scrollbar-hide">
                <FlipMove enterAnimation="fade" leaveAnimation="fade">
                  {auditLogs.map(
                    (
                      index,
                      name, // Added index as the key because names can be duplicate
                    ) => (
                      <div
                        key={index}
                        className="flex items-center space-x-4 p-4 mb-3 rounded-lg bg-zinc-900/50 border border-zinc-800/50"
                      >
                        <div className="relative w-2 h-2">
                          <div className="absolute inset-0 rounded-full bg-green-400/80" />
                          <div className="absolute inset-0 rounded-full bg-green-400/40 animate-ping" />
                        </div>
                        <div>
                          <p className="text-gray-300">{name}</p>
                          <p className="text-sm text-gray-500">
                            joined the waitlist
                          </p>
                        </div>
                      </div>
                    ),
                  )}
                </FlipMove>
              </div>
            </motion.div>
          </div>
>>>>>>> fb972fb5a73b870511ca743142d121d493cdd3f2
        </div>
      </div>
      <InfiniteCarousel section="features" />
    </section>
  )
}
