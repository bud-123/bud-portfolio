// src/components/Contact.tsx
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Send, CheckCircle, AlertCircle, Linkedin, Github, Calendar } from 'lucide-react'
import { GlassCard, GlassButton } from './GlassEffect'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '@/lib/firebase'

// Form validation schema
const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type ContactForm = z.infer<typeof contactSchema>

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema)
  })

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Add to Firestore
      await addDoc(collection(db, 'contacts'), {
        ...data,
        timestamp: serverTimestamp(),
        status: 'new'
      })

      setSubmitStatus('success')
      reset()
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Email',
      value: 'budo1@umbc.edu',
      href: 'mailto:budo1@umbc.edu',
      color: 'text-blue-400'
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: 'LinkedIn',
      value: '/in/basil-udo',
      href: 'https://linkedin.com/in/basil-udo',
      color: 'text-blue-500'
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: 'GitHub',
      value: '@bud-123',
      href: 'https://github.com/bud-123',
      color: 'text-gray-400'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: 'Location',
      value: 'College Park, MD',
      href: null,
      color: 'text-green-400'
    }
  ]


  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-800 via-purple-900/20 to-slate-900 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5"></div>
      
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
            Let&apos;s Work Together
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            I&apos;m always interested in discussing cloud engineering opportunities, 
            technical challenges, and innovative projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            {/* Contact Info Cards */}
            <div className="space-y-6 mb-8">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <GlassCard className="p-6" intensity="medium">
                    {item.href ? (
                      <a href={item.href} className="flex items-center gap-4 group">
                        <div className={`${item.color} group-hover:scale-110 transition-transform`}>
                          {item.icon}
                        </div>
                        <div>
                          <h3 className="text-white font-medium">{item.label}</h3>
                          <p className="text-gray-300 text-sm">{item.value}</p>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-center gap-4">
                        <div className={item.color}>
                          {item.icon}
                        </div>
                        <div>
                          <h3 className="text-white font-medium">{item.label}</h3>
                          <p className="text-gray-300 text-sm">{item.value}</p>
                        </div>
                      </div>
                    )}
                  </GlassCard>
                </motion.div>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="space-y-4">
              {/* {quickActions.map((action, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <GlassCard className="p-6" intensity="light">
                    <a href={action.href} className="block group">
                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-lg ${action.color} group-hover:scale-110 transition-transform`}>
                          {action.icon}
                        </div>
                        <div>
                          <h3 className="text-white font-medium mb-1">{action.title}</h3>
                          <p className="text-gray-400 text-sm">{action.description}</p>
                        </div>
                      </div>
                    </a>
                  </GlassCard>
                </motion.div>
              ))} */}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <GlassCard className="p-8" intensity="medium">
              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Name and Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-medium mb-2">Name *</label>
                    <input
                      {...register('name')}
                      type="text"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:bg-white/15 transition-all backdrop-blur-sm"
                      placeholder="Your full name"
                    />
                    {errors.name && (
                      <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-white font-medium mb-2">Email *</label>
                    <input
                      {...register('email')}
                      type="email"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:bg-white/15 transition-all backdrop-blur-sm"
                      placeholder="your.email@example.com"
                    />
                    {errors.email && (
                      <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-white font-medium mb-2">Subject *</label>
                  <input
                    {...register('subject')}
                    type="text"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:bg-white/15 transition-all backdrop-blur-sm"
                    placeholder="What would you like to discuss?"
                  />
                  {errors.subject && (
                    <p className="text-red-400 text-sm mt-1">{errors.subject.message}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-white font-medium mb-2">Message *</label>
                  <textarea
                    {...register('message')}
                    rows={6}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:bg-white/15 transition-all backdrop-blur-sm resize-none"
                    placeholder="Tell me about your project, questions, or how I can help..."
                  />
                  {errors.message && (
                    <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {submitStatus === 'success' && (
                      <div className="flex items-center gap-2 text-green-400">
                        <CheckCircle size={20} />
                        <span className="text-sm">Message sent successfully!</span>
                      </div>
                    )}
                    {submitStatus === 'error' && (
                      <div className="flex items-center gap-2 text-red-400">
                        <AlertCircle size={20} />
                        <span className="text-sm">Failed to send. Please try again.</span>
                      </div>
                    )}
                  </div>
                  
                  <GlassButton
                    variant="primary"
                    size="lg"
                  >
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex items-center gap-2 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <Send size={16} />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </GlassButton>
                </div>
              </form>
            </GlassCard>
          </motion.div>
        </div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <GlassCard className="p-6 max-w-2xl mx-auto" intensity="light">
            <p className="text-gray-300">
              I typically respond within 24 hours. For urgent matters, 
              feel free to reach out directly via LinkedIn or schedule a call.
            </p>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact