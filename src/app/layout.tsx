import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Basil Udo - Cloud Engineer',
  description: 'Experienced Cloud Engineer specializing in Google Cloud Platform, DevOps, and scalable system design',
  keywords: 'Cloud Engineer, Google Cloud Platform, GCP, DevOps, Docker, Kubernetes',
  authors: [{ name: 'Basil Udo' }],
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}