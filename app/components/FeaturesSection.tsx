'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Shield, Zap, Bell, RefreshCw } from 'lucide-react'
import FlipMove from 'react-flip-move'
import Slider from 'react-slick'
import InfiniteCarousel from './InfiniteCarousel'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const API_URL = '/api/getAllUser'

export default function FeaturesSection() {
  const [auditLogs, setAuditLogs] = useState<{ name: string }[]>([])

  useEffect(() => {
    const fetchWaitlist = async () => {
      try {
        const response = await fetch(API_URL)
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        const data = await response.json()
        if (data.data) {
          setAuditLogs(
            data.data.map((user: { name: string }) => ({ name: user.name })),
          )
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

    const interval = setInterval(fetchWaitlist, 15000)
    return () => clearInterval(interval)
  }, [])

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  }

  const featureCards = [
    {
      icon: <Shield className="w-6 h-6 text-blue-400" />,
      title: 'Secure by Design',
      description:
        'Built with security at its core, ensuring your data stays protected.',
    },
    {
      icon: <Zap className="w-6 h-6 text-purple-400" />,
      title: 'Lightning Fast',
      description: 'Optimized performance for seamless user experience.',
    },
    {
      icon: <Bell className="w-6 h-6 text-pink-400" />,
      title: 'Smart Notifications',
      description: 'Stay updated with intelligent and timely alerts.',
    },
    {
      icon: <RefreshCw className="w-6 h-6 text-green-400" />,
      title: 'Real-time Sync',
      description: 'Your data is always synced across all your devices.',
    },
  ]

  return (
    <section id="features" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/0 via-zinc-900/50 to-zinc-900/0" />
      <div className="container relative lg:max-h-screen flex items-center py-10 sm:py-16 lg:py-20">
        <div className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left side - Features */}
            <div className="space-y-12 md:space-y-16">
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                  Powerful Features
                </h2>
                <p className="text-base sm:text-lg text-gray-400">
                  Experience a revolutionary set of features designed to
                  transform your mobile experience.
                </p>
              </div>

              {/* Grid for large screens */}
              <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8">
                {featureCards.map(({ icon, title, description }, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="group space-y-4 p-4 sm:p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800/50 hover:bg-zinc-800/50 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      {icon}
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-white">
                      {title}
                    </h3>
                    <p className="text-gray-400">{description}</p>
                  </motion.div>
                ))}
              </div>

              {/* Slider for mobile screens */}
              <div className="sm:hidden">
                <Slider {...sliderSettings}>
                  {featureCards.map(({ icon, title, description }, idx) => (
                    <div
                      key={idx}
                      className="p-4 sm:p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800/50 text-center"
                    >
                      <div className="w-12 h-12 mx-auto rounded-xl bg-blue-500/10 flex items-center justify-center mb-4">
                        {icon}
                      </div>
                      <h3 className="text-lg font-semibold text-white">
                        {title}
                      </h3>
                      <p className="text-gray-400">{description}</p>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>

            {/* Right side - Live Audit Log (Waitlist for small screens) */}
            <div className="lg:pl-12 lg:col-span-1 sm:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="rounded-2xl border border-zinc-800/50 overflow-hidden backdrop-blur-sm"
              >
                <div className="p-4 sm:p-6 bg-zinc-900/50 border-b border-zinc-800/50">
                  <h3 className="text-lg sm:text-xl font-semibold text-white">
                    Live Waitlist Updates
                  </h3>
                  <p className="text-sm sm:text-base text-gray-400 mt-1">
                    Watch as new users join the revolution.
                  </p>
                </div>

                <div className="bg-zinc-900/30 p-4 sm:p-6 h-[250px] sm:h-[300px] overflow-auto scrollbar-hide">
                  <FlipMove enterAnimation="fade" leaveAnimation="fade">
                    {auditLogs.map((user, index) => (
                      <div
                        key={`${user.name}-${index}`}
                        className="flex items-center space-x-4 p-3 sm:p-4 mb-2 sm:mb-3 rounded-lg bg-zinc-900/50 border border-zinc-800/50"
                      >
                        <div className="relative w-2 h-2">
                          <div className="absolute inset-0 rounded-full bg-green-400/80" />
                          <div className="absolute inset-0 rounded-full bg-green-400/40 animate-ping" />
                        </div>
                        <div>
                          <p className="text-gray-300">{user.name}</p>
                          <p className="text-xs sm:text-sm text-gray-500">
                            joined the waitlist
                          </p>
                        </div>
                      </div>
                    ))}
                  </FlipMove>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <InfiniteCarousel section="features" />
    </section>
  )
}
