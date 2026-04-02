export interface Experience {
  company: string;
  role: string;
  period: string;
  location?: string;
  achievements: string[];
}

export interface Project {
  title: string;
  description: string;
  category: 'Enterprise Banking Initiatives' | 'Platform Building Initiatives' | 'Personal Learning Initiatives';
  technologies?: string[];
  link?: string;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export interface MusicItem {
  title: string;
  description: string;
}

export interface TravelItem {
  title: string;
  description: string;
  location: string;
}

export interface TravelPhoto {
  id: string;
  src: string; // base64 or URL
  alt: string;
  title: string;
  description: string;
  uploadedAt: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  thumbnail: string; // base64 or URL
  fullImage: string; // base64 or URL
  description: string;
  uploadedAt: string;
}

export interface BlogPost {
  title: string;
  date: string;
  slug: string;
  category: 'Banking' | 'Travel' | 'General';
  summary: string;
  image?: string;
  content: string;
}