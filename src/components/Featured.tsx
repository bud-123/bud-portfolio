'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Play, Code, Database, Server, Shield } from 'lucide-react'
import { GlassCard, GlassButton } from './GlassEffect'
import { projects } from '@/data/portfolio'

const Featured = () => {
  const featuredProjects = projects.filter(project => project.featured)

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'web':
        return <Code className="w-5 h-5" />
      case 'infrastructure':
        return <Server className="w-5 h-5" />
      case 'data':
        return <Database className="w-5 h-5" />
      case 'devops':
        return <Shield className="w-5 h-5" />
      default:
        return <Code className="w-5 h-5" />
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'web':
        return 'text-blue-400 bg-blue-500/20'
      case 'infrastructure':
        return 'text-green-400 bg-green-500/20'
      case 'data':
        return 'text-purple-400 bg-purple-500/20'
      case 'devops':
        return 'text-orange-400 bg-orange-500/20'
      default:
        return 'text-blue-400 bg-blue-500/20'
    }
  }

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-800 to-slate-900 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real-world cloud solutions built with Google Cloud Platform, 
            showcasing scalable architecture and modern DevOps practices.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <GlassCard className="p-8 h-full flex flex-col" intensity="medium">
                {/* Project Header */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`p-2 rounded-lg ${getCategoryColor(project.category)}`}>
                        {getCategoryIcon(project.category)}
                      </div>
                      <span className="text-sm text-gray-400 capitalize">{project.category}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Project Image/Preview */}
                <div className="relative mb-6 rounded-lg overflow-hidden bg-gradient-to-br from-gray-700 to-gray-800 h-48">
                  {project.imageUrl ? (
                    <img 
                      src={project.imageUrl} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-gray-400">
                        <Code size={48} />
                      </div>
                    </div>
                  )}
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-6 leading-relaxed flex-grow">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-full border border-blue-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Achievements */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Key Achievements</h4>
                  <ul className="space-y-2">
                    {project.impact.slice(0, 2).map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="text-gray-300 text-sm flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 mt-auto">
                  {project.demoUrl && (
                    <GlassButton
                      href={project.demoUrl}
                      variant="primary"
                      size="sm"
                    >
                      <div className="flex items-center gap-2">
                        <Play size={16} />
                        <span>Live Demo</span>
                      </div>
                    </GlassButton>
                  )}
                  {project.githubUrl && (
                    <GlassButton
                      href={project.githubUrl}
                      variant="secondary"
                      size="sm"
                    >
                      <div className="flex items-center gap-2">
                        <Github size={16} />
                        <span>Source Code</span>
                      </div>
                    </GlassButton>
                  )}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <GlassButton
            href="#portfolio"
            variant="primary"
            size="lg"
          >
            <div className="flex items-center gap-2">
              <ExternalLink size={20} />
              <span>View All Projects</span>
            </div>
          </GlassButton>
        </motion.div>
      </div>
    </section>
  )
}

export default Featured