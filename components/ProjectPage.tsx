
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { PROJECTS } from '../constants';
import { ArrowLeftIcon, ExternalLinkIcon } from './Icons';

const ProjectPage = () => {
  const { id } = useParams<{ id: string }>();
  const project = PROJECTS.find(p => p.id === id);

  if (!project) {
    return (
      <div className="text-center">
        <h2 className="text-2xl font-bold text-red-500">Project Not Found</h2>
        <Link to="/" className="mt-4 inline-flex items-center gap-2 text-sky-600 hover:text-sky-500">
          <ArrowLeftIcon className="w-5 h-5" />
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <article className="space-y-8">
      <div>
        <Link to="/" className="group mb-8 inline-flex items-center gap-2 text-sky-600 hover:text-sky-500 transition-colors">
          <ArrowLeftIcon className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
          Back to Home
        </Link>
      </div>

      <header>
        <p className="text-slate-500 text-sm">{project.date}</p>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mt-1">{project.title}</h1>
      </header>

      {project.pdfLink && (
        <section>
          <a href={project.pdfLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-white text-sky-600 rounded-md hover:bg-slate-50 transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-slate-50 border border-slate-200 shadow-sm">
            Read the full project PDF
            <ExternalLinkIcon className="w-5 h-5" />
          </a>
        </section>
      )}

      <div className="prose prose-slate prose-lg max-w-none text-slate-600 prose-headings:text-slate-900 prose-a:text-sky-600 hover:prose-a:text-sky-500 prose-strong:text-slate-800">
        {project.content}
      </div>

      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Tech Stack</h2>
        <div className="flex flex-wrap gap-3">
          {project.techStack.map(tech => (
            <span key={tech} className="px-3 py-1.5 bg-sky-100 text-sky-700 text-sm font-medium rounded-full">{tech}</span>
          ))}
        </div>
      </section>


    </article>
  );
};

export default ProjectPage;
