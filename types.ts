
import type React from 'react';

export interface WorkExperience {
  company: string;
  link?: string;
  date: string;
  title: string;
  internship?: boolean;
  description: string[];
}

export interface Education {
  institution: string;
  link?: string;
  startDate: string;
  endDate: string;
  degree: string;
}

export interface Project {
  id: string;
  title: string;
  date: string;
  summary: string;
  description: string[];
  highlights?: string[];
  techStack: string[];
  pdfLink?: string;
  liveLink?: string;
}

export interface NavItem {
  id: string;
  label: string;
}
