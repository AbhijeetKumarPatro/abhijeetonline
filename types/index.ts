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