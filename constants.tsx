
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
    date: 'Aug 2021 – Present',
    title: 'Software Engineer — Web Platform & Agentic Tooling',
    description: [
      'Leading development of an agentic pipeline (Claude Agent SDK, 5-agent architecture) to migrate 400+ legacy Discover web pages onto Capital One\'s platform, automating what was previously a fully manual, page-by-page process',
      'Refined the component generation agent routing LLM calls through AWS Bedrock, with automated visual-regression scoring (Playwright) validating migrated output against all 400+ source pages',
      'Optimized performance on site-wide navigation menu, reducing landing page load times by an average of 6%',
      'Piloted, documented, and rolled out an AI-powered component development workflow, reducing average dev time by 70%',
      'Built and maintained Angular components on capitalone.com, used by 80+ engineers and 200+ content managers',
      'Conducted technical interviews for internship and full-time engineering candidates',
      'Directed a cross-team project to cover business-critical use cases with end-to-end tests, boosting reliability and reducing bugs',
      'Championed the onboarding of all 70+ component layouts onto Storybook, streamlining design, engineering, and review',
    ],
  },
  {
    company: 'Capital One',
    link: 'https://www.capitalone.com/',
    date: 'Aug 2020 – Aug 2021',
    title: 'Software Engineer — Data Lineage',
    description: [
      'Designed and implemented UI for an internal data lineage application, enhancing data traceability within the company',
      'Modernized and refactored components to maximize cross-CMS compatibility and reduce developer friction',
      'Served as Learning & Development lead for the engineering rotational program council, organizing lunch-and-learns and building a shared library of onboarding resources',
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
    id: 'arc-agi-reasoning-agent',
    title: 'ARC-AGI Reasoning Agent',
    date: '2026',
    summary: 'A hybrid agent combining case-based reasoning with generate-and-test analysis to solve ARC-AGI abstract visual reasoning puzzles.',
    description: [
      'Designed and implemented a hybrid agent combining case-based reasoning with generate-and-test/means-ends analysis to solve ARC-AGI abstract visual reasoning puzzles, composing across 50 grid-transformation operators.',
      'Built an evaluation harness scoring agent generalization across held-out Training and Test sets, informing iterative refinement of the operator library and search strategy.',
      'Authored an accompanying technical report formalizing the agent\'s architecture, reasoning strategy, and evaluation methods.',
    ],
    techStack: ['Python', 'Case-Based Reasoning', 'Search'],
  },
  {
    id: 'onconet',
    title: 'OncoNet',
    date: '2025',
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
    date: '2025',
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
  {
    id: 'inclusion-rva',
    title: 'Inclusion RVA',
    date: '2023',
    summary: 'A full-stack web application with an AWS Amplify-powered self-service auth portal for search and discovery of minority-owned small businesses in Richmond, VA.',
    description: [
      'Worked with Capital One Pro Bono and West Cary Group to build a full-stack web application, with an AWS Amplify-powered self-service auth portal, for search and discovery of minority-owned small businesses in the Richmond, Virginia area.',
      'Won the Economic Impact Award, given to the Capital One Pro Bono team with the highest-valued economic contribution.',
    ],
    techStack: ['React', 'JavaScript', 'Python'],
    liveLink: 'https://inclusionrva.com',
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
