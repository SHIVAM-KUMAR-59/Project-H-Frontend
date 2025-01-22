import React from 'react'
import { motion } from 'framer-motion'
import Slider from 'react-slick'
import InfiniteCarousel from './InfiniteCarousel'

// Define the TeamMember interface and team data
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

const ceo = team[0]
const developers = team.slice(1)

// Slider settings
const sliderSettings = {
  infinite: true,
  speed: 7000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 0,
  cssEase: 'linear',
  pauseOnHover: true,
  centerMode: true,
  centerPadding: '20px',
  focusOnSelect: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
  ],
}

const TeamSection = () => {
  return (
    <section id="team" className="relative lg:max-h-screen">
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/0 via-zinc-900/50 to-zinc-900/0" />
      <div className="container relative flex items-center py-8 md:py-18">
        <div className="w-full">
          <div className="text-center mb-4 md:mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"
            >
              Meet Our Team
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="md:mt-4 text-lg text-gray-400"
            >
              The innovators behind the revolution
            </motion.p>
          </div>

          {/* CEO Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto mb-3 md:mb-20"
          >
            <div className="group relative p-3 md:p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800/50 backdrop-blur-sm hover:bg-zinc-800/50 transition-colors text-center">
              <div className="flex flex-col items-center">
                <div className="relative w-20 h-20 md:w-32 md:h-32 rounded-full overflow-hidden bg-zinc-800/50 p-3 md:p-6 mb-3 md:mb-6 ring-4 ring-blue-500/20 group-hover:ring-blue-500/30 transition-all">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20" />
                  {ceo.image}
                </div>
                <h3 className="text-lg md:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  {ceo.name}
                </h3>
                <p className="text-purple-400 text-lg mb-4">{ceo.role}</p>
                <p className="text-gray-400 max-w-lg mx-auto">{ceo.bio}</p>
                <div className="mt-2 md:mt-6 flex justify-center space-x-4">
                  {ceo.social.github && (
                    <a
                      href={ceo.social.github}
                      className="text-blue-400 hover:text-blue-500"
                    >
                      GitHub
                    </a>
                  )}
                  {ceo.social.linkedin && (
                    <a
                      href={ceo.social.linkedin}
                      className="text-blue-400 hover:text-blue-500"
                    >
                      LinkedIn
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Team Members (Slider) */}
          <Slider {...sliderSettings}>
            {developers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="group relative p-3 md:p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800/50 backdrop-blur-sm hover:bg-zinc-800/50 transition-colors text-center"
              >
                <div className="flex flex-col items-center">
                  <div className="relative w-20 h-20 md:w-32 md:h-32 rounded-full overflow-hidden bg-zinc-800/50 p-3 md:p-6 mb-3 md:mb-6 ring-4 ring-blue-500/20 group-hover:ring-blue-500/30 transition-all">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20" />
                    {member.image}
                  </div>
                  <h3 className="text-lg md:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-purple-400 text-lg mb-4">{member.role}</p>
                  <p className="text-gray-400 max-w-lg mx-auto">{member.bio}</p>
                  <div className="mt-2 md:mt-6 flex justify-center space-x-4">
                    {member.social.github && (
                      <a
                        href={member.social.github}
                        className="text-blue-400 hover:text-blue-500"
                      >
                        GitHub
                      </a>
                    )}
                    {member.social.linkedin && (
                      <a
                        href={member.social.linkedin}
                        className="text-blue-400 hover:text-blue-500"
                      >
                        LinkedIn
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </Slider>
          <InfiniteCarousel section="contact" />
        </div>
      </div>
    </section>
  )
}

export default TeamSection
