'use client'

import { motion } from 'framer-motion'
import { Code, Cloud, Rocket, Users, Award, Zap } from 'lucide-react'
import { GlassCard } from './GlassEffect'

const About = () => {
  const highlights = [
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Startup Founder',
      description: 'Built production-ready applications from concept to deployment, with proven scalability patterns and user validation',
      color: 'text-orange-400'
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: 'Cloud Expert',
      description: 'Specialized in Google Cloud Platform with hands-on experience in production environments and cost optimization',
      color: 'text-blue-400'
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Full-Stack Developer',
      description: 'Proficient in modern web technologies, containerization, and infrastructure as code with Next.js and Docker',
      color: 'text-green-400'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Problem Solver',
      description: 'Passionate about solving complex technical challenges and building systems that handle real-world requirements',
      color: 'text-purple-400'
    }
  ]

  const stats = [
    { number: '50+', label: 'Pilot Users Served', icon: <Users className="w-6 h-6" /> },
    { number: '99.9%', label: 'Uptime Achieved', icon: <Zap className="w-6 h-6" /> },
    { number: '3+', label: 'Years Building', icon: <Award className="w-6 h-6" /> },
    { number: '6+', label: 'Projects Deployed', icon: <Rocket className="w-6 h-6" /> }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            I discovered cloud engineering through necessity while building my startup. 
            What started as a quest for scalable, cost-effective infrastructure became a passion 
            for helping organizations leverage cloud technology to solve complex challenges.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <GlassCard key={index} className="text-center p-6" intensity="medium">
              <div className="text-blue-400 flex justify-center mb-3">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-gray-300 text-sm">{stat.label}</div>
            </GlassCard>
          ))}
        </motion.div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <GlassCard className="p-8 h-full" intensity="medium">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 mb-6 ${item.color}`}>
                  {item.icon}
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Journey Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <GlassCard className="p-8" intensity="light">
            <h3 className="text-3xl font-bold text-white mb-6">My Journey</h3>
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p>
                My cloud engineering journey began when I founded a tech startup and needed to build 
                scalable infrastructure on a tight budget. Google Cloud Platform became my platform of choice, 
                and I dove deep into containerization, serverless architectures, and DevOps practices.
              </p>
              <p>
                Through building real products for pilot users, I gained invaluable experience in 
                production system design, performance optimization, and cost management. The applications 
                I built achieved 99.9% uptime and handled concurrent users without performance degradation.
              </p>
              <p>
                Now I&apos;m pursuing my Associate Cloud Engineer certification to formalize this hands-on expertise 
                while continuing to build and deploy cloud-native applications. I&apos;m passionate about clean code, 
                efficient systems, and using technology to solve meaningful problems.
              </p>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  )
}

export default About