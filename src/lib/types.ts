export interface Project {
  id: string;
  title: string;
  slug: string;
  location: string;
  category: string;
  year: number;
  description: string;
  services: string[];
  coverImage: string;
  gallery: string[];
  twoDImages: string[];
  threeDImages: string[];
  completedImages: string[];
  client?: string;
  area?: string;
  timeline?: string;
  challenge?: string;
  lightingConcept?: string;
  execution?: string;
  featured?: boolean;
}

export interface Service {
  id: string;
  title: string;
  slug: string;
  number: string;
  description: string;
  shortDescription: string;
  icon: string;
  image?: string;
  features: string[];
}

export interface Location {
  id: string;
  name: string;
  description: string;
  projects: number;
  services: string[];
  coordinates?: { lat: number; lng: number };
  available: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  location: string;
  projectType: string;
  rating: number;
  review: string;
  image?: string;
}

export interface CompanyInfo {
  name: string;
  tagline: string;
  description: string;
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  city: string;
  workingHours: string;
  experience: number;
  projectsCompleted: number;
  locationsServed: number;
  socialLinks: {
    instagram?: string;
    facebook?: string;
    linkedin?: string;
    youtube?: string;
  };
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: string;
}
