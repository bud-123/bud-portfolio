// src/data/portfolio.ts - Updated with real projects showcasing cloud expertise
import { Project, Skill, Certification } from '@/lib/types';

export const projects: Project[] = [
  {
    id: '7',
    title: 'Gmail Summarizer - Serverless Email Automation',
    description: 'Serverless Gmail automation system built with TypeScript and Terraform, featuring Cloud Functions, Cloud Scheduler, and Secret Manager for secure OAuth credential management.',
    longDescription: 'Advanced Terraform project demonstrating serverless architecture and secure automation on GCP. The Gmail Processor reads and processes emails on a schedule using Cloud Functions (2nd gen), integrates with Gmail API through OAuth, and leverages Secret Manager for zero-commit credential storage. Built entirely as Infrastructure as Code with Terraform managing function deployment, scheduling, and secret access policies.',
    techStack: ['TypeScript', 'Terraform', 'Google Cloud Functions', 'Cloud Scheduler', 'Secret Manager', 'Gmail API', 'OAuth 2.0', 'Node.js'],
    githubUrl: 'https://github.com/bud-123/tf-email-summarizer',
    imageUrl: '/projects/gcp-terraform-email-summarizer.png',
    featured: true,
    category: 'devops',
    challenges: [
      'Implementing secure OAuth authentication with Gmail API using Secret Manager',
      'Automating serverless function deployment with Terraform packaging',
      'Configuring Cloud Scheduler to trigger functions on a cron schedule',
      'Managing sensitive credentials without committing secrets to version control',
      'Building TypeScript application compatible with Cloud Functions 2nd gen runtime'
    ],
    solutions: [
      'Integrated GCP Secret Manager for secure OAuth token storage (client_id, client_secret, refresh_token)',
      'Created Terraform configuration to package TypeScript app and deploy as function.zip',
      'Configured Cloud Scheduler job with daily triggers to automate email processing',
      'Used environment variables automatically injected from Secret Manager into Cloud Function',
      'Built modular TypeScript architecture with separate auth, read, process, and send modules'
    ],
    impact: [
      'Deployed fully serverless email automation running on scheduled triggers',
      'Demonstrated advanced security practices with zero-commit credential management',
      'Created reusable Terraform template for serverless function deployments with secrets',
      'Established automated workflow for reading, processing, and sending emails via Gmail API',
      'Advanced Infrastructure as Code skills to include serverless compute and scheduled automation'
    ]
  },
  {
    id: '3',
    title: 'GCP VPC with Terraform - Network Infrastructure',
    description: 'Second Terraform project creating a custom VPC network on Google Cloud Platform with subnets, firewall rules, and network security configurations.',
    longDescription: 'Infrastructure as Code project building on Terraform fundamentals by creating a production-ready VPC network on GCP. This project demonstrates understanding of cloud networking concepts including custom VPC creation, subnet configuration with CIDR blocks, firewall rule management, and network security best practices. Built with modular Terraform configuration for reusable network infrastructure.',
    techStack: ['Terraform', 'Google Cloud Platform', 'VPC Networking', 'Cloud Firewall', 'Infrastructure as Code', 'HCL'],
    githubUrl: 'https://github.com/bud-123/scp-terraform-vpc',
    imageUrl: '/gcp-terraform-vpc.png',
    featured: true,
    category: 'devops',
    challenges: [
      'Understanding VPC networking concepts and CIDR block allocation',
      'Configuring custom subnets with proper IP range planning',
      'Implementing firewall rules for internal traffic and SSH access',
      'Managing network security while maintaining accessibility',
      'Structuring Terraform code for network infrastructure management'
    ],
    solutions: [
      'Created custom VPC network (demo-vpc) with modular Terraform configuration',
      'Configured subnet in us-central1 with 10.0.1.0/24 CIDR range',
      'Implemented firewall rules for internal communication and secure SSH access',
      'Used Terraform variables for flexible region and project configuration',
      'Built reusable network infrastructure with proper outputs for VPC name and subnet CIDR'
    ],
    impact: [
      'Successfully deployed production-ready VPC network infrastructure on GCP',
      'Demonstrated understanding of cloud networking and security concepts',
      'Created reusable Terraform modules for future VPC deployments',
      'Advanced Infrastructure as Code skills from basic compute to networking',
      'Built foundation for deploying complex multi-tier cloud architectures'
    ]
  },
  {
    id: '2',
    title: 'GCP Cloud Run with Terraform Demo - Infrastructure as Code',
    description: 'Infrastructure as Code project using Terraform to deploy a containerized "Hello World" web service to Google Cloud Run, demonstrating cloud automation and IaC best practices.',
    longDescription: 'First Terraform project showcasing Infrastructure as Code principles by automating the deployment of a web service to Google Cloud Run. Built to learn cloud automation and IaC concepts, this project demonstrates proper Terraform configuration structure with modular files, variable management, and output handling. The deployment creates a publicly accessible web service with automatic scaling and managed infrastructure.',
    techStack: ['Terraform', 'Google Cloud Run', 'Google Cloud Platform', 'Infrastructure as Code', 'HCL'],
    demoUrl: 'https://hello-service-ezzrikfdra-uc.a.run.app',
    githubUrl: 'https://github.com/bud-123/terraform-hello-world',
    imageUrl: '/projects/gcp-terraform.png',
    featured: true,
    category: 'devops',
    challenges: [
      'Learning Terraform syntax and Infrastructure as Code principles',
      'Configuring Google Cloud authentication and project setup',
      'Structuring Terraform files with proper separation of concerns',
      'Managing variables and sensitive configuration securely',
      'Understanding Cloud Run service configuration and deployment'
    ],
    solutions: [
      'Created modular Terraform configuration with separate provider, variable, and output files',
      'Implemented gcloud authentication using application-default credentials',
      'Built reusable infrastructure code with terraform.tfvars for environment-specific configs',
      'Configured Cloud Run service with proper IAM policies for public access',
      'Established declarative infrastructure with terraform apply/destroy lifecycle'
    ],
    impact: [
      'Successfully deployed first Infrastructure as Code project to production',
      'Demonstrated ability to learn and apply cloud automation tools',
      'Created reusable Terraform templates for future Cloud Run deployments',
      'Established foundation for managing cloud infrastructure with version control',
      'Built practical understanding of declarative infrastructure management'
    ]
  },
  {
    id: '1',
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
    id: '4',
    title: 'Xeddy - Full-Stack Food Ordering Platform',
    description: '(Password: xeddy2025) Production React/TypeScript application with Firebase backend, featuring dual-interface architecture for customers and merchants, deployed on Google Cloud Run',
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
    id: '5',
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
  },
  {
    id: '6',
    title: 'GPT-OSS Hackathon Project: Offline Real-Time Linear Algebra Tutor',
    description: 'An innovative offline AI tutoring system providing personalized linear algebra instruction through multimodal interactions, powered by GPT-OSS.',
    longDescription: 'Scott Bernard is an innovative offline AI tutoring system designed to provide personalized linear algebra instruction through multimodal interactions. Named after X-Men\'s Cyclops and just became we like the name Bernard, this project combines: GPT-OSS (open-source language model) for intelligent tutoring, Computer Vision for analyzing mathematical problems and student work, Speech Recognition & TTS for natural voice interactions, 3D-Printed Hardware housing a webcam as the "cyclopean eye", and Offline Operation ensuring privacy and independence from external APIs. The project journey involved planning, hardware design, Docker enhancement, multimodal development, and WebSocket implementation. It leverages remote GPU configuration for cost-effective deployment and features a modern WebSocket interface with real-time capabilities like live video feed, voice input, and instant responses.',
    techStack: ['Python', 'Docker', 'GPT-OSS', 'Computer Vision', 'Speech Recognition', 'TTS', 'WebSocket', 'Vast.ai', 'PyTorch'],
    demoUrl: 'https://youtube.com/shorts/zqCDlg2ybpE?feature=share', // Assuming local deployment for demo
    githubUrl: 'https://github.com/bud-123/gpt-oss-hackathon',
    imageUrl: '/projects/scott-bernard.PNG', // Corrected image path
    featured: true,
    category: 'web',
    challenges: [
      'Deploying an offline real-time multimodal AI tutoring system',
      'Integrating computer vision, speech recognition, and text-to-speech capabilities',
      'Designing and 3D printing custom hardware for webcam housing',
      'Optimizing GPU allocation for inference with vLLM GPT-OSS',
      'Establishing a robust WebSocket for real-time communication'
    ],
    solutions: [
      'Developed a custom GPT-OSS multimodal AI tutoring system',
      'Implemented real-time webcam and microphone support via WebSockets',
      'Finalized 3D print design using Fusion360 for hardware integration',
      'Utilized Vast.ai GPU rental for simplified and cost-effective deployment',
      'Configured automated CI/CD pipelines for efficient integration and deployment'
    ],
    impact: [
      'Created an offline AI tutor for linear algebra',
      'Demonstrated advanced multimodal AI integration in a practical application',
      'Successfully deployed and tested the system locally and remotely on Vast.ai',
      'Provided a real-time, interactive learning experience for students',
      'Showcased expertise in AI, hardware integration, and cloud deployment strategies'
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
  { name: 'Google Compute Engine', category: 'cloud', level: 'intermediate' },
  { name: 'Google Cloud Storage', category: 'cloud', level: 'intermediate' },

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
  { name: 'Terraform', category: 'devops', level: 'intermediate' },
  { name: 'Infrastructure as Code', category: 'devops', level: 'intermediate' },
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
    date: '2025-09-05',
    credentialId: 'Earned',
    badgeUrl: '/certifications/ace-badge.png',
    certificateUrl: 'https://www.credly.com/badges/1f7f16e1-724c-4fcc-910f-23a58f727d34/public_url'
    
  }
];
