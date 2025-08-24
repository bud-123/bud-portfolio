// src/components/Skills.tsx
'use client'

import { motion } from 'framer-motion'
import { Award, Cloud, Code, Database, Settings, CheckCircle, ExternalLink } from 'lucide-react'
import { GlassCard, GlassButton } from './GlassEffect'
import { skills, certifications } from '@/data/portfolio'

const Skills = () => {
  const skillCategories = {
    cloud: { icon: <Cloud className="w-6 h-6" />, color: 'text-blue-400', bg: 'bg-blue-500/20' },
    programming: { icon: <Code className="w-6 h-6" />, color: 'text-green-400', bg: 'bg-green-500/20' },
    devops: { icon: <Settings className="w-6 h-6" />, color: 'text-orange-400', bg: 'bg-orange-500/20' },
    database: { icon: <Database className="w-6 h-6" />, color: 'text-purple-400', bg: 'bg-purple-500/20' }
  }

  const getLevelWidth = (level: string) => {
    switch (level) {
      case 'beginner': return '25%'
      case 'intermediate': return '50%'
      case 'advanced': return '75%'
      case 'expert': return '100%'
      default: return '50%'
    }
  }

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'beginner': return 'bg-gradient-to-r from-yellow-400 to-yellow-500'
      case 'intermediate': return 'bg-gradient-to-r from-blue-400 to-blue-500'
      case 'advanced': return 'bg-gradient-to-r from-purple-400 to-purple-500'
      case 'expert': return 'bg-gradient-to-r from-green-400 to-green-500'
      default: return 'bg-gradient-to-r from-blue-400 to-blue-500'
    }
  }

  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = []
    }
    acc[skill.category].push(skill)
    return acc
  }, {} as Record<string, typeof skills>)

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive technical skills gained through hands-on experience building and scaling cloud applications.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {Object.entries(groupedSkills).map(([category, categorySkills], categoryIndex) => {
            const categoryInfo = skillCategories[category as keyof typeof skillCategories]
            
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <GlassCard className="p-8 h-full" intensity="medium">
                  {/* Category Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-3 rounded-lg ${categoryInfo.bg} ${categoryInfo.color}`}>
                      {categoryInfo.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white capitalize">
                      {category} Skills
                    </h3>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-6">
                    {categorySkills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="space-y-2"
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-white font-medium">{skill.name}</span>
                          <span className="text-sm text-gray-400 capitalize">{skill.level}</span>
                        </div>
                        
                        {/* Skill Bar */}
                        <div className="relative">
                          <div className="w-full bg-gray-700/50 rounded-full h-2 backdrop-blur-sm">
                            <motion.div
                              className={`h-2 rounded-full ${getLevelColor(skill.level)}`}
                              initial={{ width: 0 }}
                              whileInView={{ width: getLevelWidth(skill.level) }}
                              transition={{ duration: 1, delay: skillIndex * 0.1 }}
                              viewport={{ once: true }}
                            />
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            )
          })}
        </div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            Certifications & Achievements
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <GlassCard className="p-6 text-center" intensity="light">
                  {/* Certificate Badge */}
                  <div className="mb-4">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mb-3">
                      <Award className="w-8 h-8 text-white" />
                    </div>
                    <div className="w-12 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto rounded-full"></div>
                  </div>

                  <h4 className="text-lg font-bold text-white mb-2">{cert.name}</h4>
                  <p className="text-blue-300 font-medium mb-2">{cert.issuer}</p>
                  <p className="text-gray-400 text-sm mb-4">
                    {cert.date === '2025-09-01' ? 'Expected: September 2025' : cert.date}
                  </p>
                  
                  {cert.credentialId && (
                    <div className="flex items-center justify-center gap-2 text-xs text-gray-400">
                      <CheckCircle className="w-4 h-4" />
                      <span>ID: {cert.credentialId}</span>
                    </div>
                  )}
                </GlassCard>
              </motion.div>
            ))}

            {/* Add more certifications placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: certifications.length * 0.1 }}
              viewport={{ once: true }}
            >
              <GlassCard className="p-6 text-center border-2 border-dashed border-gray-600 bg-transparent" intensity="light">
                <div className="text-gray-400">
                  <Award className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <h4 className="text-lg font-medium mb-2">More Coming Soon</h4>
                  <p className="text-sm">
                    Currently pursuing additional cloud certifications
                  </p>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </motion.div>

        {/* Learning Journey CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >

        </motion.div>
      </div>
    </section>
  )
}

export default Skills