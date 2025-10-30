
import React from 'react';
import { Link } from 'react-router-dom';
import { WORK_EXPERIENCE, PROJECTS } from '../constants';
import { LinkedInIcon, DocumentIcon, ExternalLinkIcon } from './Icons';
import type { WorkExperience, Project } from '../types';

const Intro = () => (
  <header className="mb-16">
    <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-100 tracking-tight">Jeremy Devin</h1>
    <h2 className="mt-2 text-lg sm:text-xl font-medium text-slate-400">Software Engineer</h2>
    <div className="mt-6 flex flex-wrap gap-4">
      <a href="https://www.linkedin.com/in/jeremydevin/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800 text-cyan-400 rounded-md hover:bg-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-slate-900">
        <LinkedInIcon className="w-5 h-5" />
        LinkedIn
      </a>
      <a href="/public/resume.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800 text-cyan-400 rounded-md hover:bg-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-slate-900">
        <DocumentIcon className="w-5 h-5" />
        Resume
      </a>
    </div>
  </header>
);

const ExperienceCard: React.FC<{ item: WorkExperience }> = ({ item }) => (
  <li className="mb-12">
    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
      <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">{item.date}</header>
      <div className="z-10 sm:col-span-6">
        <h3 className="font-medium leading-snug text-slate-200">
          <div className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-cyan-300 focus-visible:text-cyan-300 group/link text-base">
            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
            <span>{item.title} · <span className="inline-block">{item.company} </span></span>
          </div>
        </h3>
        <ul className="mt-2 list-disc list-inside space-y-2 text-slate-400">
          {item.description.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  </li>
);

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
    <Link to={`/project/${project.id}`} className="block group">
      <div className="p-6 bg-slate-800/50 rounded-lg shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 border border-transparent hover:border-cyan-500/30 h-full flex flex-col">
        <header>
          <div className="flex justify-between items-baseline mb-2">
            <h3 className="text-lg font-bold text-slate-100 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
            <p className="text-sm text-slate-500">{project.date}</p>
          </div>
        </header>
        <p className="text-slate-400 flex-grow">{project.summary}</p>
        <footer className="mt-4 flex flex-wrap gap-2">
          {project.techStack.map(tech => (
            <span key={tech} className="px-2 py-1 bg-cyan-900/50 text-cyan-300 text-xs font-medium rounded-full">{tech}</span>
          ))}
        </footer>
      </div>
    </Link>
);


const HomePage = () => {
  return (
    <>
      <Intro />
      <section id="experience" className="mb-16 scroll-mt-16">
        <h2 className="text-2xl font-bold tracking-tight text-slate-200 sm:text-3xl mb-8">Work Experience</h2>
        <ol className="group/list">
          {WORK_EXPERIENCE.map((item, index) => (
            <ExperienceCard key={index} item={item} />
          ))}
        </ol>
      </section>
      <section id="projects" className="scroll-mt-16">
        <h2 className="text-2xl font-bold tracking-tight text-slate-200 sm:text-3xl mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </>
  );
};

export default HomePage;
