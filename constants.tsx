
import React from 'react';
import { WorkExperience, Project, Education, Hobby } from './types';

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Capital One',
    link: 'https://www.capitalone.com/',
    date: 'Aug 2020 - Present',
    title: 'Software Engineer - Enterprise Platforms',
    description: [
      'Built and maintained Angular components on capitalone.com, used by 80+ engineers and 200+ content managers',
      'Piloted, documented, and rolled out an AI-powered development workflow, reducing average development time by 70%',
      'Directed a cross-team project to cover business-critical use cases with end-to-end tests, boosting reliability and reducing bugs',
      'Championed the onboarding of all 70+ component layouts onto Storybook, streamlining design, engineering, and review',
      'Modernized and refactored components to maximize cross-CMS compatibility and reduce developer friction',
      'Designed and implemented UI for an internal data lineage application, enhancing data traceability within the company',
      'Configured cloud infrastructure and implemented API authentication protocols, ensuring access control and data integrity',
    ],
  },
  {
    company: 'Capital One',
    link: 'https://www.capitalone.com/',
    date: 'May 2019 - Aug 2019',
    title: 'Software Engineer Intern - Card Tech',
    internship: true,
    description: [
      'Built fault-tolerant bots for internal password resets, eliminating a 20-hour/month manual process',
      'Configured PowerShell scripts within AWS CloudFormation templates to automatically configure new Windows virtual machines with the tools needed to run automated processes',
    ],
  },
  {
    company: 'Vanderbilt University',
    link: 'https://www.vanderbilt.edu/',
    date: 'Sep 2017 - May 2020',
    title: 'Teaching Assistant',
    description: [
      'Graded assessments and held weekly office hours for over 150 students per semester',
      'Trained students in essential competencies like problem-solving, documentation comprehension, and debugging',
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'onconet',
    title: 'OncoNet',
    date: 'May 2025',
    summary: 'A deep learning project to train highly accurate models for lung cancer detection using a small dataset of CT scan images, surpassing a 94.38% accuracy benchmark.',
    techStack: ['Python', 'PyTorch', 'Google Colab'],
    pdfLink: 'public/CS_7643_Final_Project_Report.pdf',
    content: (
      <div className="space-y-6">
        <p className="text-slate-400">
          OncoNet is a deep learning project I developed with Ajay C. and Fernando M.C. for the Georgia Tech class CS 7643: Deep Learning. Here's our project summary:
        </p>
        <p>
          A major challenge in applying deep learning to medical imaging is the limited availability of large datasets. The goal of our project was to tackle this "low-volume data" problem by training highly accurate models for lung cancer detection using a small dataset of CT scan images. We aimed to surpass a recently published accuracy benchmark of 94.38%.
        </p>
        <p>
          To find the best approach, we implemented and compared several types of deep learning models:
        </p>
        <ul className="list-disc list-inside space-y-2 pl-4">
          <li>
            <span className="font-semibold text-slate-200">Pre-trained CNNs:</span> We fine-tuned large, popular models that were pre-trained on the massive ImageNet dataset, such as ResNet and VGG, to adapt them to our specific medical imaging task.
          </li>
          <li>
            <span className="font-semibold text-slate-200">Custom CNNs:</span> I personally designed, implemented, and trained a series of four custom Convolutional Neural Networks (CNNs) from scratch. My goal was to create an architecture that was both highly accurate and computationally efficient by minimizing its number of trainable parameters.
          </li>
          <li>
            <span className="font-semibold text-slate-200">Vision Transformers (ViTs):</span> We also explored the performance of newer Vision Transformer architectures, training both custom ViTs and fine-tuning pre-trained versions to compare against the CNNs.
          </li>
        </ul>
        <div>
          <h3 className="text-xl font-bold text-slate-100 mb-2">Key Results</h3>
          <p>
            Ultimately, several of our models successfully surpassed the benchmark. Our fine-tuned ResNet model achieved a test accuracy of 97.41%, and one of my custom-built CNNs achieved a validation accuracy of 95.19%.
          </p>
          <p className="mt-2">
            Notably, I engineered one of my custom CNNs to be extremely efficient, reducing its size by over 96% compared to my initial design while still outperforming the benchmark. This demonstrates a promising method for deploying accurate models in resource-constrained environments, such as on a mobile device.
          </p>
        </div>
      </div>
    )
  },
  {
    id: 'metacognitive-mirror',
    title: 'Metacognitive Mirror',
    date: '',
    summary: 'A flashcard app that tracks the gap between how confident learners think they are and how they actually perform, visualizing self-awareness over time to improve learning self-assessment.',
    techStack: ['Next.js', 'PostgreSQL', 'Prisma', 'TypeScript'],
    content: (
      <div className="space-y-6">
        <p className="text-slate-400">
          Metacognitive Mirror is a full-stack flashcard application I built that combines spaced repetition with metacognitive tracking to help learners improve their self-awareness during study sessions. You can explore the live application at <a href="https://metacognitive-mirror.vercel.app" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 underline">metacognitive-mirror.vercel.app</a>.
        </p>
        <p>
          The core concept addresses a common problem in learning: the disconnect between how confident we feel about our knowledge and how well we actually perform. To track this gap, users rate their confidence (on a scale of 1–5) and record their actual performance (scored as 0, 3, or 5) for each flashcard. The app's "Metacognitive Mirror" dashboard then visualizes the relationship between these two metrics over time, helping users identify patterns in their self-assessment accuracy and improve their metacognitive awareness.
        </p>
        <p>
          The application uses an architecture designed for scalability and maintainability:
        </p>
        <ul className="list-disc list-inside space-y-2 pl-4">
          <li>
            <span className="font-semibold text-slate-200">Frontend:</span> Built with React and Vite for fast development and optimized builds, using React Router for navigation and Recharts for data visualization. The UI features a dark theme styled with Tailwind CSS, and Zod handles form validation for type-safe user inputs.
          </li>
          <li>
            <span className="font-semibold text-slate-200">Backend:</span> Next.js API routes provide serverless endpoints for authentication, data persistence, and spaced repetition algorithm calculations. NextAuth handles secure user authentication and session management.
          </li>
          <li>
            <span className="font-semibold text-slate-200">Data Layer:</span> PostgreSQL serves as the relational database, with Prisma ORM managing database queries, migrations, and type-safe database access. The spaced repetition algorithm dynamically adjusts review intervals based on both user confidence ratings and actual performance scores.
          </li>
        </ul>
        <p>
          To make the app immediately accessible, I implemented a demo mode with prepopulated cognitive science content. This allows users to explore the core features and experience the metacognitive tracking without needing to create an account, demonstrating the value proposition before signup.
        </p>
      </div>
    )
  }
];

export const EDUCATION: Education[] = [
  {
    institution: 'Georgia Institute of Technology',
    link: 'https://www.gatech.edu/',
    startDate: 'Fall 2024',
    endDate: 'Present',
    degree: 'Master of Science in Computer Science',
  },
  {
    institution: 'Vanderbilt University',
    link: 'https://www.vanderbilt.edu/',
    startDate: 'Fall 2016',
    endDate: 'Spring 2020',
    degree: 'Bachelor of Science in Computer Science',
  },
];

// Helper functions for timeline
export const parseYear = (dateStr: string): number => {
  const yearMatch = dateStr.match(/\d{4}/);
  return yearMatch ? parseInt(yearMatch[0]) : new Date().getFullYear();
};

export const parseStartYear = (item: WorkExperience | Education | Hobby): number => {
  if ('startDate' in item) {
    return parseYear(item.startDate);
  }
  // For WorkExperience, parse date like "Aug 2020 - Present" or "Sep 2017 - May 2020"
  const dateMatch = item.date.match(/\d{4}/);
  if (dateMatch) {
    return parseInt(dateMatch[0]);
  }
  return 2016;
};

export const parseEndYear = (item: WorkExperience | Education | Hobby): number => {
  if ('endDate' in item) {
    if (item.endDate === 'Present' || item.endDate === undefined) return new Date().getFullYear();
    return parseYear(item.endDate);
  }
  // For WorkExperience, parse date like "Aug 2020 - Present" or "Sep 2017 - May 2020"
  if ('date' in item) {
    if (item.date.includes('Present')) return new Date().getFullYear();
    const yearMatches = item.date.match(/\d{4}/g);
    if (yearMatches && yearMatches.length > 1) {
      return parseInt(yearMatches[1]);
    }
    if (yearMatches && yearMatches.length === 1) {
      // If only one year, assume it's the start year, so end year is same or next
      // For internships, assume it's the same year
      if ('internship' in item && item.internship) {
        return parseInt(yearMatches[0]);
      }
      // Otherwise, if it says "Present", use current year
      if (item.date.includes('Present')) {
        return new Date().getFullYear();
      }
      return parseInt(yearMatches[0]);
    }
  }
  return new Date().getFullYear();
};

export const parseEventYear = (eventDate: string): number => {
  return parseYear(eventDate);
};
