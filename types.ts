
import type React from 'react';

export interface WorkExperience {
  company: string;
  link?: string;
  date: string;
  title: string;
  internship?: boolean;
  description: string[];
}

export interface Project {
  id: string;
  title:string;
  date: string;
  summary: string;
  content: React.ReactNode;
  techStack: string[];
  pdfLink?: string;
}
