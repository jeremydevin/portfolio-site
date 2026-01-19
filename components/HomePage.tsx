
import React from 'react';
import { Link } from 'react-router-dom';
import { WORK_EXPERIENCE, PROJECTS } from '../constants';
import { LinkedInIcon, DocumentIcon, ExternalLinkIcon } from './Icons';
import Timeline from './Timeline';
import type { WorkExperience, Project } from '../types';

const Intro = () => (
  <header className="mb-16">
    <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">Jeremy Devin</h1>
    <h2 className="mt-2 text-lg sm:text-xl font-medium text-slate-600">Software Engineer</h2>
    <div className="mt-6 flex flex-wrap gap-4">
      <a href="https://www.linkedin.com/in/jeremydevin/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-white text-sky-600 rounded-md hover:bg-slate-50 transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-slate-50 border border-slate-200 shadow-sm">
        <LinkedInIcon className="w-5 h-5" />
        LinkedIn
      </a>
      <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-white text-sky-600 rounded-md hover:bg-slate-50 transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-slate-50 border border-slate-200 shadow-sm">
        <DocumentIcon className="w-5 h-5" />
        Resume
      </a>
    </div>
  </header>
);

const ExperienceCard: React.FC<{ item: WorkExperience }> = ({ item }) => (
  <li className="mb-12">
    <div className="relative grid pb-1 sm:grid-cols-8 sm:gap-8 md:gap-4">
      <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">{item.date}</header>
      <div className="z-10 sm:col-span-6">
        <h3 className="font-medium leading-snug text-slate-900">
          <div className="inline-flex items-baseline font-medium leading-tight text-slate-900 hover:text-sky-600 focus-visible:text-sky-600 group/link text-base">
            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
            <span>{item.title} · <span className="inline-block">{item.company} </span></span>
          </div>
        </h3>
        <ul className="mt-2 list-disc list-inside space-y-2 text-slate-600">
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
    <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-sky-500/20 transition-all duration-300 border border-slate-100 hover:border-sky-500/30 h-full flex flex-col">
      <header>
        <div className="flex justify-between items-baseline mb-2">
          <h3 className="text-lg font-bold text-slate-900 group-hover:text-sky-600 transition-colors">{project.title}</h3>
          <p className="text-sm text-slate-500">{project.date}</p>
        </div>
      </header>
      <p className="text-slate-600 flex-grow">{project.summary}</p>
      <footer className="mt-4 flex flex-wrap gap-2">
        {project.techStack.map(tech => (
          <span key={tech} className="px-2 py-1 bg-sky-100 text-sky-700 text-xs font-medium rounded-full">{tech}</span>
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
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl mb-8">Work Experience</h2>
        <ol className="group/list">
          {WORK_EXPERIENCE.map((item, index) => (
            <ExperienceCard key={index} item={item} />
          ))}
        </ol>
      </section>
      <section id="projects" className="mb-16 scroll-mt-16">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
      <section id="timeline" className="scroll-mt-16">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl mb-8">Timeline</h2>
        <Timeline />
      </section>
    </>
  );
};

export default HomePage;
