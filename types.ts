
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
  startDate: string; // Format: "Fall 2016" or "Sep 2016"
  endDate: string; // Format: "Spring 2020" or "Present"
  degree: string;
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
