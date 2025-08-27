'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail, Cloud, Code, Rocket } from 'lucide-react'
import { GlassButton, GlassCard, GlassFilter } from './GlassEffect'

const Hero = () => {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href)
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }

  const techIcons = [
    { icon: <Cloud className="w-8 h-8" />, name: "Google Cloud", color: "text-blue-500" },
    { icon: <Code className="w-8 h-8" />, name: "Next.js",       color: "text-blue-600" },
    { icon: <Rocket className="w-8 h-8" />, name: "Cloud Run",    color: "text-green-500" }
  ]

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-900"
      style={{
        backgroundImage: "url(/assets/port-bg.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <GlassFilter />

      {/* Stronger scrim to guarantee contrast over the topo lines */}
      <div className="absolute inset-0 bg-neutral-950/45 z-10" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 relative z-20">
        <div className="text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            {/* Dark glass for accessible white text */}
            <GlassCard className="mb-12 p-12" intensity="strong" tone="dark">
              <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6">
                Basil Udo
              </h1>
              <h2 className="text-3xl md:text-4xl text-neutral-200 mb-8 font-light">
                Google Cloud Engineer
              </h2>

              {/* Headshot */}
              <div className="hidden md:block absolute top-2 right-8">
                <div className="w-32 h-40 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                  <img
                    src="/assets/bud-headshot.jpeg"
                    alt="Portrait of Basil Udo"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <p className="text-xl text-neutral-200 mb-12 max-w-3xl mx-auto leading-relaxed">
                Building production-ready cloud solutions with GCP, Docker, and modern DevOps practices.
                Startup founder with hands-on experience creating scalable systems that solve real business problems.
              </p>

              {/* Tech Stack Icons */}
              <div className="flex justify-center gap-6 mb-8">
                {techIcons.map((tech, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  >
                    <GlassCard className="p-4" intensity="medium" hover tone="dark">
                      <div className={`${tech.color} flex flex-col items-center gap-2`}>
                        {tech.icon}
                        <span className="text-sm font-medium text-white">{tech.name}</span>
                      </div>
                    </GlassCard>
                  </motion.div>
                ))}
              </div>
            </GlassCard>
          </motion.div>

          {/* Buttons: semantic + strong focus rings */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <GlassButton onClick={() => handleNavClick('#projects')} variant="primary" size="lg" tone="dark" ariaLabel="View my work">
              <span className="text-white font-semibold">View My Work</span>
            </GlassButton>

            <GlassButton onClick={() => handleNavClick('#contact')} variant="secondary" size="lg" tone="dark" ariaLabel="Go to contact section">
              <span className="text-white font-semibold">Let&apos;s Connect</span>
            </GlassButton>
          </motion.div>

          {/* Social links with labels */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.4 }} className="mb-16">
            <GlassCard className="p-6 inline-block" intensity="medium" tone="dark">
              <div className="flex justify-center space-x-8">
                <a
                  href="https://github.com/bud-123"
                  aria-label="Basil Udo on GitHub"
                  rel="me noopener noreferrer"
                  className="text-white hover:text-blue-200 transition-colors group"
                >
                  <div className="flex flex-col items-center gap-2">
                    <Github size={28} className="group-hover:scale-110 transition-transform" />
                    <span className="text-sm">GitHub</span>
                  </div>
                </a>
                <a
                  href="https://www.linkedin.com/in/basil-udo/"
                  aria-label="Basil Udo on LinkedIn"
                  rel="me noopener noreferrer"
                  className="text-white hover:text-blue-200 transition-colors group"
                >
                  <div className="flex flex-col items-center gap-2">
                    <Linkedin size={28} className="group-hover:scale-110 transition-transform" />
                    <span className="text-sm">LinkedIn</span>
                  </div>
                </a>
                <a
                  href="mailto:budo1@umbc.edu"
                  aria-label="Email Basil Udo"
                  className="text-white hover:text-blue-200 transition-colors group"
                >
                  <div className="flex flex-col items-center gap-2">
                    <Mail size={28} className="group-hover:scale-110 transition-transform" />
                    <span className="text-sm">Email</span>
                  </div>
                </a>
              </div>
            </GlassCard>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.6 }}>
            <a
              href="#about"
              aria-label="Scroll to About"
              className="inline-flex items-center text-white hover:text-blue-200 transition-colors"
            >
              <GlassCard className="p-4" intensity="medium" tone="dark">
                <ArrowDown size={24} className="animate-bounce motion-reduce:animate-none" />
              </GlassCard>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
