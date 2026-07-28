
import { WorkExperience, Project, Education, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
];

export const BIO = `Software Engineer at Capital One and MS Computer Science student at Georgia Tech. I focus on building front-end platforms and developer tooling, including agentic pipelines for migrating content and pages to new platforms. At Georgia Tech, I'm taking coursework in AI/ML fundamentals, deep learning, and human-computer interaction.`;

export const LINKS = {
  linkedin: 'https://www.linkedin.com/in/jeremydevin/',
  github: 'https://github.com/jeremydevin',
  resume: '/resume.pdf',
};

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Capital One',
    link: 'https://www.capitalone.com/',
    date: 'Aug 2020 – Present',
    title: 'Software Engineer — Enterprise Platforms',
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
    date: 'May 2019 – Aug 2019',
    title: 'Software Engineer Intern — Card Tech',
    internship: true,
    description: [
      'Built fault-tolerant bots for internal password resets, eliminating a 20-hour/month manual process',
      'Configured PowerShell scripts within AWS CloudFormation templates to automatically configure new Windows virtual machines with the tools needed to run automated processes',
    ],
  },
  {
    company: 'Vanderbilt University',
    link: 'https://www.vanderbilt.edu/',
    date: 'Sep 2017 – May 2020',
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
    date: 'Spring 2025',
    summary: 'A deep learning project to train highly accurate models for lung cancer detection using a small dataset of CT scan images, surpassing a 94.38% accuracy benchmark.',
    description: [
      'OncoNet is a deep learning project developed with Ajay C. and Fernando M.C. for Georgia Tech\'s CS 7643: Deep Learning course.',
      'A major challenge in applying deep learning to medical imaging is the limited availability of large datasets. The goal was to tackle this "low-volume data" problem by training highly accurate models for lung cancer detection using a small dataset of CT scan images, aiming to surpass a recently published accuracy benchmark of 94.38%.',
      'We implemented and compared several types of deep learning models: pre-trained CNNs fine-tuned from ImageNet (ResNet, VGG), custom CNNs designed from scratch for accuracy and computational efficiency, and Vision Transformers (ViTs) — both custom and pre-trained versions.',
    ],
    highlights: [
      'Fine-tuned ResNet achieved 97.41% test accuracy, surpassing the benchmark',
      'Custom CNN achieved 95.19% validation accuracy with under 1M parameters — a 96%+ size reduction from the initial 20M parameter design',
      'Demonstrated that accurate models can be deployed in resource-constrained environments like mobile devices',
    ],
    techStack: ['Python', 'PyTorch', 'Google Colab'],
    pdfLink: '/CS_7643_Final_Project_Report.pdf',
  },
  {
    id: 'metacognitive-mirror',
    title: 'Metacognitive Mirror',
    date: 'Fall 2025',
    summary: 'A flashcard app that tracks the gap between how confident learners think they are and how they actually perform, visualizing self-awareness over time.',
    description: [
      'Metacognitive Mirror is a full-stack flashcard application that combines spaced repetition with metacognitive tracking to help learners improve their self-awareness during study sessions.',
      'The core concept addresses a common problem in learning: the disconnect between how confident we feel about our knowledge and how well we actually perform. Users rate their confidence (1–5) and record actual performance (0, 3, or 5) for each flashcard. The "Metacognitive Mirror" dashboard visualizes the relationship between these metrics over time.',
      'Built with a frontend using React and Vite with Recharts for data visualization, a backend with Next.js API routes and NextAuth for authentication, and a data layer using PostgreSQL with Prisma ORM for type-safe database access.',
      'Implemented a demo mode with prepopulated cognitive science content, allowing users to explore core features without creating an account.',
    ],
    highlights: [
      'Spaced repetition algorithm dynamically adjusts intervals based on both confidence ratings and performance scores',
      'Real-time metacognitive gap visualization using Recharts',
      'Type-safe data layer with Prisma ORM and PostgreSQL',
    ],
    techStack: ['Next.js', 'PostgreSQL', 'Prisma', 'TypeScript'],
    liveLink: 'https://metacognitive-mirror.vercel.app',
  },
];

export const EDUCATION: Education[] = [
  {
    institution: 'Georgia Institute of Technology',
    link: 'https://www.gatech.edu/',
    startDate: 'Aug 2024',
    endDate: 'Present',
    degree: 'Master of Science in Computer Science',
  },
  {
    institution: 'Vanderbilt University',
    link: 'https://www.vanderbilt.edu/',
    startDate: 'Aug 2016',
    endDate: 'May 2020',
    degree: 'Bachelor of Science in Computer Science',
  },
];
