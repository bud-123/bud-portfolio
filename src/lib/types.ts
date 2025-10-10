export interface Project {
    id: string;
    title: string;
    description: string;
    longDescription: string;
    techStack: string[];
    demoUrl?: string;
    githubUrl?: string;
    imageUrl: string;
    featured: boolean;
    category: 'web' | 'infrastructure' | 'data' | 'devops';
    challenges: string[];
    solutions: string[];
    impact: string[];
  }
  
  export interface Skill {
    name: string;
    category: 'cloud' | 'programming' | 'devops' | 'database';
    level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
    icon?: string;
  }
  
  export interface Certification {
    name: string;
    issuer: string;
    date: string;
    credentialId?: string;
    badgeUrl?: string;
    certificateUrl?: string;
  }
  
  export interface ContactForm {
    name: string;
    email: string;
    subject: string;
    message: string;
    timestamp: Date;
  }