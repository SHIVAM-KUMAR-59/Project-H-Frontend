'use client'

import { motion } from 'framer-motion'
import { Mail, MessageSquare, Send, Github, Linkedin } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'react-toastify'
import InfiniteCarousel from './InfiniteCarousel'

interface TeamMember {
  name: string
  role: string
  image: React.ReactNode
  bio: string
  social: {
    github?: string
    linkedin?: string
  }
}

const team: TeamMember[] = [
  {
    name: 'John Doe',
    role: 'CEO & Founder',
    image: (
      <svg
        className="w-full h-full text-blue-400"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"
        />
        <circle cx="12" cy="7" r="3" fill="currentColor" opacity="0.2" />
      </svg>
    ),
    bio: 'Visionary leader with 10+ years in mobile technology, passionate about creating revolutionary user experiences.',
    social: {
      github: 'https://github.com/johndoe',
      linkedin: 'https://linkedin.com/in/johndoe',
    },
  },
  {
    name: 'Jane Smith',
    role: 'Lead Developer',
    image: (
      <svg
        className="w-full h-full text-purple-400"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 15c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M16 21v-2a4 4 0 0 0-4-4v0a4 4 0 0 0-4 4v2"
        />
        <circle cx="12" cy="11" r="3" fill="currentColor" opacity="0.2" />
      </svg>
    ),
    bio: 'Full-stack wizard specializing in React and Node.js, building scalable solutions for tomorrow.',
    social: {
      github: 'https://github.com/janesmith',
      linkedin: 'https://linkedin.com/in/janesmith',
    },
  },
  {
    name: 'Alex Johnson',
    role: 'Backend Developer',
    image: (
      <svg
        className="w-full h-full text-green-400"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
        />
        <circle cx="12" cy="8" r="3" fill="currentColor" opacity="0.2" />
      </svg>
    ),
    bio: 'Database expert and system architect with a passion for building robust and scalable backend solutions.',
    social: {
      github: 'https://github.com/alexj',
      linkedin: 'https://linkedin.com/in/alexjohnson',
    },
  },
]

// Add new blog data
const blogPosts = [
  {
    title: 'Building Scalable Backend Systems',
    excerpt:
      'Learn about modern architecture patterns and best practices for building robust backend systems.',
    link: 'https://medium.com/better-programming/building-scalable-backend-systems-4c872b31d67b',
    date: 'Mar 15, 2024',
  },
  {
    title: 'React Performance Optimization',
    excerpt:
      'Deep dive into advanced techniques for optimizing React applications.',
    link: 'https://medium.com/javascript-in-plain-english/react-performance-optimization-techniques-c14a28af0b58',
    date: 'Mar 10, 2024',
  },
]

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Add your form submission logic here
      await new Promise((resolve) => setTimeout(resolve, 1000)) // Simulated API call
      toast.success('Message sent successfully!')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      toast.error('Failed to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const ceo = team[0]
  const developers = team.slice(1)

  return (
    <>
      <section id="team" className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/0 via-zinc-900/50 to-zinc-900/0" />
        <div className="container relative min-h-screen flex items-center py-20">
          <div className="w-full">
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"
              >
                Meet Our Team
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mt-4 text-xl text-gray-400"
              >
                The innovators behind the revolution
              </motion.p>
            </div>

            {/* CEO Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl mx-auto mb-20"
            >
              <div
                className="group relative p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800/50 
                backdrop-blur-sm hover:bg-zinc-800/50 transition-colors text-center"
              >
                <div className="flex flex-col items-center">
                  <div
                    className="relative w-32 h-32 rounded-full overflow-hidden bg-zinc-800/50 p-6 mb-6
                    ring-4 ring-blue-500/20 group-hover:ring-blue-500/30 transition-all"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20" />
                    {ceo.image}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {ceo.name}
                    </h3>
                    <p className="text-purple-400 text-lg mb-4">{ceo.role}</p>
                    <p className="text-gray-400 max-w-lg mx-auto">{ceo.bio}</p>
                    <div className="mt-6 flex justify-center space-x-4">
                      {ceo.social.github && (
                        <a
                          href={ceo.social.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-blue-400 transition-colors"
                        >
                          <Github className="w-6 h-6" />
                        </a>
                      )}
                      {ceo.social.linkedin && (
                        <a
                          href={ceo.social.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-blue-400 transition-colors"
                        >
                          <Linkedin className="w-6 h-6" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Developers Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {developers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800/50 
                    backdrop-blur-sm hover:bg-zinc-800/50 transition-colors"
                >
                  <div className="flex items-start space-x-4">
                    <div className="relative w-24 h-24 rounded-xl overflow-hidden bg-zinc-800/50 p-4">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20" />
                      {member.image}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-purple-400 mb-2">{member.role}</p>
                      <p className="text-gray-400 text-sm">{member.bio}</p>
                      <div className="mt-3 flex space-x-3">
                        {member.social.github && (
                          <a
                            href={member.social.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-blue-400 transition-colors"
                          >
                            <Github className="w-5 h-5" />
                          </a>
                        )}
                        {member.social.linkedin && (
                          <a
                            href={member.social.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-blue-400 transition-colors"
                          >
                            <Linkedin className="w-5 h-5" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Blog Section - Now horizontal below developers */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-zinc-800/50 overflow-hidden backdrop-blur-sm mb-20"
            >
              <div className="p-6 bg-zinc-900/50 border-b border-zinc-800/50 text-center">
                <h3 className="text-xl font-semibold text-white">
                  Latest Insights
                </h3>
                <p className="text-gray-400 mt-1">
                  Technical articles from our team
                </p>
              </div>
              <div className="bg-zinc-900/30 p-6">
                <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
                  {blogPosts.map((post, index) => (
                    <motion.a
                      key={post.title}
                      href={post.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="block group w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
                    >
                      <div
                        className="rounded-lg p-4 bg-zinc-800/30 hover:bg-zinc-800/50 border border-zinc-700/30 
                        hover:border-zinc-700/50 transition-all duration-300 h-full"
                      >
                        <h4 className="text-white group-hover:text-blue-400 font-medium transition-colors">
                          {post.title}
                        </h4>
                        <p className="text-sm text-gray-400 mt-2">
                          {post.excerpt}
                        </p>
                        <p className="text-xs text-gray-500 mt-3">
                          {post.date}
                        </p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <InfiniteCarousel section="contact" />
      </section>

      <section id="contact" className="relative bg-zinc-900/50 h-screen">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="container relative min-h-screen flex items-center py-6 md:py-20">
          <div className="w-full">
            <div className="text-center mb-3 md:mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"
              >
                Get in Touch
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className=" mt-2 md:mt-4 text-md md:text-xl text-gray-400"
              >
                Have questions? We'd love to hear from you.
              </motion.p>
            </div>

            <div className="max-w-2xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="rounded-2xl border border-zinc-800/50 overflow-hidden backdrop-blur-sm"
              >
                <div className="p-4 md:p-6 bg-zinc-900/50 border-b border-zinc-800/50">
                  <h3 className="text-xl font-semibold text-white flex items-center">
                    <MessageSquare className="w-5 h-5 mr-2 text-blue-400" />
                    Get in Touch
                  </h3>
                  <p className="text-gray-400 mt-1">
                    Have questions? We'd love to hear from you.
                  </p>
                </div>

                <form
                  onSubmit={handleSubmit}
                  className="p-6 bg-zinc-900/30 space-y-4"
                >
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-300 mb-1"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          name: e.target.value,
                        }))
                      }
                      className="w-full px-4 py-2 rounded-lg bg-zinc-800/50 border border-zinc-700/50 
                  text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50 
                  focus:ring-1 focus:ring-blue-500/50 transition-colors"
                      placeholder="Your name"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-300 mb-1"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          email: e.target.value,
                        }))
                      }
                      className="w-full px-4 py-2 rounded-lg bg-zinc-800/50 border border-zinc-700/50 
                  text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50 
                  focus:ring-1 focus:ring-blue-500/50 transition-colors"
                      placeholder="your@email.com"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-300 mb-1"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          message: e.target.value,
                        }))
                      }
                      rows={4}
                      className="w-full px-4 py-2 rounded-lg bg-zinc-800/50 border border-zinc-700/50 
                  text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50 
                  focus:ring-1 focus:ring-blue-500/50 transition-colors resize-none"
                      placeholder="Your message..."
                      required
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 
                text-white font-semibold hover:from-blue-600 hover:to-purple-700
                focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:ring-offset-2 
                focus:ring-offset-zinc-900 disabled:opacity-50 disabled:cursor-not-allowed
                transition-all duration-300 flex items-center justify-center space-x-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
        <InfiniteCarousel section="contact" />
      </section>
    </>
  )
}
