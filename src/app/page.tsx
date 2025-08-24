// src/app/page.tsx - Main page without infinite recursion
import { GlassFilter } from '@/components/GlassEffect'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Featured from '@/components/Featured'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900 relative overflow-x-hidden">
      <GlassFilter />
      <Navigation />
      <Hero />
      <About />
      <Featured />
      <Skills />
      <Contact />
      
      {/* Footer */}
      <footer className="bg-slate-900 border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              © 2025 Basil Udo. Built with Next.js, deployed on Google Cloud Run.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}