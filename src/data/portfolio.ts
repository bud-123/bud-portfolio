// src/data/portfolio.ts - Updated with real projects showcasing cloud expertise
import { Project, Skill, Certification } from '@/lib/types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Xeddy - Full-Stack Food Ordering Platform',
    description: 'Production React/TypeScript application with Firebase backend, featuring dual-interface architecture for customers and merchants, deployed on Google Cloud Run',
    longDescription: 'Comprehensive food ordering ecosystem built with modern web technologies, targeting the $8B restaurant digitalization market. Features separate customer and merchant interfaces, integrated payments via Stripe, and real-time order management using Firebase.',
    techStack: ['React 18', 'TypeScript', 'Firebase', 'Google Cloud Run', 'Stripe', 'Redux Toolkit', 'Tailwind CSS', 'Express.js'],
    demoUrl: 'https://my-frontend-256502109115.us-central1.run.app',
    // githubUrl: 'https://github.com/basiludo/xeddy-web',
    imageUrl: '/projects/xeddy-platform.png',
    featured: true,
    category: 'web',
    challenges: [
      'Building dual-interface architecture for customers and merchants',
      'Implementing real-time order tracking with Firebase Firestore',
      'Integrating secure payment processing with Stripe',
      'Managing complex state across customer and merchant workflows',
      'Containerizing and deploying React application to Cloud Run'
    ],
    solutions: [
      'Architected modular component structure with separate customer/merchant directories',
      'Implemented Firebase real-time listeners for live order status updates',
      'Built secure Express.js backend for Stripe payment processing',
      'Used Redux Toolkit for centralized state management across interfaces',
      'Created Docker containers with optimized builds for Cloud Run deployment'
    ],
    impact: [
      'Successfully served 9 restaurants with dual-interface management system',
      'Generated $30,000+ in grant funding through technical demonstrations',
      'Achieved 40% conversion rate for waitlist signups (160+ students engaged)',
      'Built comprehensive rewards program with points-based system',
      'Deployed production-ready application with proper authentication and authorization'
    ]
  },
  {
    id: '2',
    title: 'Xeddy Marketing Site - DevOps Showcase',
    description: 'Responsive marketing website with automated CI/CD pipeline using Google Cloud Build, Docker containerization, and performance optimization',
    longDescription: 'Modern marketing website demonstrating advanced DevOps practices including containerized deployment, automated build pipelines, and performance optimization. Built to support business development and user acquisition for the Xeddy platform.',
    techStack: ['React', 'TypeScript', 'Docker', 'Google Cloud Build', 'Google Cloud Run', 'Nginx', 'Tailwind CSS'],
    demoUrl: 'https://xeddy-landing-105487969055.us-east1.run.app',
    githubUrl: 'https://github.com/xeddyteam/xeddy-landing.git',
    imageUrl: '/projects/xeddy-landing.png',
    featured: true,
    category: 'devops',      
    challenges: [
      'Setting up automated CI/CD pipeline with Google Cloud Build',
      'Optimizing Docker containers for production deployment',
      'Implementing performance optimization for marketing conversion',
      'Managing environment-specific configurations and secrets',
      'Ensuring responsive design across all device types'
    ],
    solutions: [
      'Configured cloudbuild.yaml for automated build and deployment pipeline',
      'Created optimized Dockerfile with multi-stage builds and Nginx serving',
      'Implemented lazy loading and image optimization for fast page loads',
      'Used Cloud Build substitutions for environment variable management',
      'Built responsive layout with Tailwind CSS and mobile-first approach'
    ],
    impact: [
      'Automated deployment pipeline reducing release time from hours to minutes',
      'Achieved high performance scores through container and asset optimization',
      'Supported business development efforts leading to $30K+ in grant funding',
      'Demonstrated production DevOps practices with proper CI/CD implementation',
      'Built scalable foundation for marketing and user acquisition campaigns'
    ]
  },
  {
    id: '3',
    title: 'Off-Campus Directory - Restaurant Search App',
    description: 'React/TypeScript web application deployed on Google Cloud Run, helping Washington DC students discover restaurants accepting campus dining cards',
    longDescription: 'User-friendly directory application built to solve a real problem for DC students - finding off-campus restaurants that accept their meal plans. Demonstrates modern React development with TypeScript, containerized deployment, and cloud-native practices.',
    techStack: ['React', 'TypeScript', 'Node.js', 'Google Cloud Run', 'Docker', 'Tailwind CSS', 'PostCSS'],
    demoUrl: 'https://search-service-188351433468.us-east1.run.app',
    githubUrl: 'https://github.com/XeddyGit/xeddy-search',
    imageUrl: '/projects/search-service.png',
    featured: true,
    category: 'web',
    challenges: [
      'Creating intuitive search and filtering for restaurant discovery',
      'Building responsive design for mobile-first student usage',
      'Containerizing React application for Cloud Run deployment',
      'Managing restaurant data and meal card acceptance information',
      'Optimizing performance for fast restaurant lookup'
    ],
    solutions: [
      'Built efficient client-side filtering and search algorithms',
      'Implemented responsive design with Tailwind CSS for mobile optimization',
      'Configured Docker containerization for Google Cloud Run deployment',
      'Created structured data management for restaurant information and meal plans',
      'Used React state management for real-time search results'
    ],
    impact: [
      'Provided practical solution for DC students to find meal card-accepting restaurants',
      'Successfully deployed production application on Google Cloud Run',
      'Built with 93.6% TypeScript coverage ensuring code quality and maintainability',
      'Demonstrated iterative development with multiple production deployments',
      'Solved real user problem with clean, accessible interface design'
    ]
  }
];

export const skills: Skill[] = [
  // Cloud Platform Skills
  { name: 'Google Cloud Platform', category: 'cloud', level: 'advanced' },
  { name: 'Google Cloud Run', category: 'cloud', level: 'advanced' },
  { name: 'Firebase', category: 'cloud', level: 'advanced' },
  { name: 'Firestore', category: 'cloud', level: 'advanced' },
  { name: 'Google Cloud Build', category: 'cloud', level: 'intermediate' },

  // Programming Languages & Frameworks
  { name: 'TypeScript', category: 'programming', level: 'advanced' },
  { name: 'JavaScript', category: 'programming', level: 'advanced' },
  { name: 'React', category: 'programming', level: 'advanced' },
  { name: 'Next.js', category: 'programming', level: 'advanced' },
  { name: 'Node.js', category: 'programming', level: 'advanced' },
  { name: 'HTML/CSS', category: 'programming', level: 'advanced' },
  { name: 'Tailwind CSS', category: 'programming', level: 'advanced' },
  { name: 'OpenAI API Integration', category: 'programming', level: 'advanced' },
  { name: 'AI Content Generation', category: 'programming', level: 'advanced' },
  { name: 'Natural Language Processing', category: 'programming', level: 'intermediate' },

  // DevOps & Deployment
  { name: 'Docker', category: 'devops', level: 'advanced' },
  { name: 'CI/CD Pipelines', category: 'devops', level: 'intermediate' },
  { name: 'Container Deployment', category: 'devops', level: 'advanced' },
  { name: 'Git Version Control', category: 'devops', level: 'advanced' },
  { name: 'Production Deployment', category: 'devops', level: 'advanced' },
  { name: 'Rate Limiting & Security', category: 'devops', level: 'intermediate' },
  { name: 'Environment Management', category: 'devops', level: 'advanced' },
  { name: 'Logging & Monitoring', category: 'devops', level: 'intermediate' },
  { name: 'Cron Jobs & Automation', category: 'devops', level: 'intermediate' },

  // Database & Backend
  { name: 'PostgreSQL', category: 'database', level: 'advanced' },
  { name: 'Prisma ORM', category: 'database', level: 'advanced' },
  { name: 'Redis', category: 'database', level: 'intermediate' },
  { name: 'Firebase Authentication', category: 'database', level: 'advanced' },
  { name: 'RESTful APIs', category: 'database', level: 'advanced' },
  { name: 'Express.js', category: 'database', level: 'advanced' },
  { name: 'Stripe Integration', category: 'database', level: 'intermediate' },
  { name: 'State Management (Redux)', category: 'database', level: 'intermediate' },
  { name: 'Microservices Architecture', category: 'database', level: 'intermediate' },
  { name: 'Database Migrations', category: 'database', level: 'intermediate' },
  { name: 'Email Services Integration', category: 'database', level: 'intermediate' },
  { name: 'Analytics Integration', category: 'database', level: 'intermediate' }
];

export const certifications: Certification[] = [
  {
    name: 'Associate Cloud Engineer',
    issuer: 'Google Cloud',
    date: '2025-09-01',
    credentialId: 'In Progress',
    badgeUrl: '/certifications/ace-badge.png'
  }
];
