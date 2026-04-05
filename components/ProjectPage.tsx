
import React, { useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PROJECTS } from '../constants';
import { ArrowLeftIcon, ExternalLinkIcon } from './Icons';

function useFadeIn() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible');
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

const ProjectPage = () => {
  const { id } = useParams<{ id: string }>();
  const project = PROJECTS.find(p => p.id === id);
  const ref = useFadeIn();

  if (!project) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-slate-800">Project Not Found</h2>
        <Link to="/" className="mt-4 inline-flex items-center gap-2 text-sky-500 hover:text-sky-600 transition-colors">
          <ArrowLeftIcon className="w-4 h-4" />
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <article ref={ref} className="fade-in-up space-y-8">
      {/* Back nav */}
      <div>
        <Link
          to="/"
          className="group inline-flex items-center gap-2 text-sm font-medium text-sky-500 hover:text-sky-600 transition-colors"
        >
          <ArrowLeftIcon className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Home
        </Link>
      </div>

      {/* Header */}
      <header>
        {project.date && <p className="text-xs font-medium text-slate-400 mb-1">{project.date}</p>}
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-800 leading-tight">
          {project.title}
        </h1>
      </header>

      {/* PDF Link */}
      {project.pdfLink && (
        <div>
          <a
            href={project.pdfLink}
            target="_blank"
            rel="noopener noreferrer"
            className="glow-btn"
          >
            Read the full project PDF
            <ExternalLinkIcon className="w-4 h-4" />
          </a>
        </div>
      )}

      {/* Content */}
      <div className="glass-card p-6 sm:p-8">
        <div className="prose prose-slate prose-base max-w-none text-slate-600 prose-headings:text-slate-800 prose-a:text-sky-500 hover:prose-a:text-sky-600 prose-strong:text-slate-700 leading-relaxed">
          {project.content}
        </div>
      </div>

      {/* Tech Stack */}
      <section>
        <h2 className="section-heading">Tech Stack</h2>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map(tech => (
            <span key={tech} className="tech-badge text-sm">{tech}</span>
          ))}
        </div>
      </section>
    </article>
  );
};

export default ProjectPage;
