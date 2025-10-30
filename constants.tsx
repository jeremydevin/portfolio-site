
import React from 'react';
import { WorkExperience, Project } from './types';

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
    id: 'project-2',
    title: 'Upcoming Project',
    date: 'Coming Soon',
    summary: 'Details about another exciting project will be added here soon. Stay tuned for updates on new challenges and technologies explored.',
    techStack: ['React', 'Node.js', 'GraphQL'],
    content: (
        <p>This is a placeholder for a future project. More details will be available soon!</p>
    )
  }
];
