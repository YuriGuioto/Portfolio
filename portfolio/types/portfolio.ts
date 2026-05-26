export interface PersonalInfo {
  name: string;
  role: string;
  description: string;
  bio: string[];
  location: string;
  availability: string;
  resumeUrl: string;
}

export interface Skill {
  name: string;
  level: number;
}

export interface Experience {
  id: number;
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  role: string;
  features: string[];
  link: string;
  github: string | null;
  status: string;
}

export interface Differential {
  id: number;
  title: string;
  description: string;
}
