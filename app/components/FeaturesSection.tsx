'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Shield,
  Video,
  Briefcase,
  Sliders,
  MessageCircle,
  Bot,
  Users,
  Trophy,
} from 'lucide-react'
import FlipMove from 'react-flip-move'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import FeatureCarousel from './FeatureCarousel'

const API_URL = '/api/getAllUser'

export default function FeaturesSection() {
  const [auditLogs, setAuditLogs] = useState<{ name: string }[]>([])
  const [activeSet, setActiveSet] = useState(0)

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

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSet((prev) => (prev === 0 ? 1 : 0))
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const featureCards = [
    {
      icon: <Shield className="w-6 h-6 text-blue-400" />,
      title: 'Engaging Feed',
      description:
        'Experience a dynamic feed where you can share and view text, images, videos, and documents—much like Instagram or LinkedIn. Stay updated with real-time posts and interactive content that keeps you informed and connected.',
    },
    {
      icon: <Video className="w-6 h-6 text-red-400" />,
      title: 'Short Video Learning (Reels)',
      description:
        'Discover and share bite-sized educational videos. Our Reels feature makes learning on-the-go simple and fun, offering quick insights and tutorials on a wide range of topics.',
    },
    {
      icon: <Users className="w-6 h-6 text-indigo-400" />,
      title: 'Live Webinars & Q&A',
      description:
        'Join live sessions hosted by industry experts. Participate in interactive webinars and Q&A sessions that provide valuable insights, helping you stay ahead in your career and expand your professional knowledge.',
    },
    {
      icon: <Briefcase className="w-6 h-6 text-yellow-400" />,
      title: 'Job Listings & Referrals',
      description:
        'Find tailored job opportunities, referrals, and company postings that match your skills and career goals. SkillArc makes it easier to discover roles and network with potential employers in your industry.',
    },
    {
      icon: <Bot className="w-6 h-6 text-purple-400" />,
      title: 'AI-Powered Assistance',
      description:
        'Get personalized career guidance with our AI-driven features. From resume reviews to smart job recommendations, SkillArc uses advanced technology to support your career growth and professional development.',
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-teal-400" />,
      title: '1-on-1 Messaging & Group Chats',
      description:
        'Connect securely with professionals, mentors, and peers. Our messaging system supports one-on-one conversations and group chats, ensuring you have a reliable platform for networking and collaboration.',
    },
    {
      icon: <Trophy className="w-6 h-6 text-orange-400" />,
      title: 'Gamified Learning',
      description:
        'Boost your skills through a fun, gamified learning experience. Earn badges, climb leaderboards, and achieve ranks based on your activity—turning your learning journey into an engaging and rewarding adventure.',
    },
    {
      icon: <Sliders className="w-6 h-6 text-pink-400" />,
      title: 'Customizable Preferences',
      description:
        'Tailor your experience to match your interests. With SkillArc, you can customize your feed, notifications, and learning path to ensure that you see the content that matters most to you.',
    },
  ]

  return (
    <section id="features" className="relative pb-12">
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/0 via-zinc-900/50 to-zinc-900/0" />
      <div className="container relative py-10 sm:py-16 lg:py-20">
        <div className="space-y-4 mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Powerful Features
          </h2>
          <p className="text-base sm:text-lg text-gray-400">
            Experience a revolutionary set of features designed to transform
            your mobile experience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Waitlist - Full width on small screens, right column on large screens */}
          <div className="lg:col-start-3 lg:row-span-2 lg:max-h-[400px]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-zinc-800/50 overflow-hidden backdrop-blur-sm h-full"
            >
              <div className="p-4 sm:p-6 bg-zinc-900/50 border-b border-zinc-800/50">
                <h3 className="text-lg sm:text-xl font-semibold text-white">
                  Live Waitlist Updates
                </h3>
                <p className="text-sm sm:text-base text-gray-400 mt-1">
                  Watch as new users join the revolution.
                </p>
              </div>

              <div className="bg-zinc-900/30 p-4 sm:p-6 h-[300px] lg:h-[calc(100%-88px)] overflow-auto scrollbar-hide ">
                {auditLogs.length > 0 ? (
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
                ) : (
                  <div className="text-gray-300 text-xl md:text-3xl md:text-center">
                    Be the first one to join
                  </div>
                )}
              </div>
            </motion.div>
          </div>

          {/* Feature Cards - 2x2 grid on large screens, slider on small screens */}
          <div className="lg:col-span-2">
            {/* Desktop view */}
            <div className="hidden lg:block relative h-[600px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSet}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="grid grid-cols-2 gap-4 md:gap-8 absolute inset-0"
                >
                  {featureCards
                    .slice(activeSet * 4, activeSet * 4 + 4)
                    .map(({ icon, title, description }, idx) => (
                      <motion.div
                        key={idx + activeSet * 4}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
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
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Mobile view */}
            <FeatureCarousel featureCards={featureCards} />
          </div>
        </div>
      </div>
    </section>
  )
}
