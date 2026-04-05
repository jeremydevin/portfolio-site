
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { WORK_EXPERIENCE, PROJECTS } from '../constants';
import InteractiveJourney from './Timeline';
import { LinkedInIcon, DocumentIcon } from './Icons';
import type { WorkExperience, Project } from '../types';

/* ── Intersection Observer hook for fade-in ── */
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
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

/* ── Hero Section ── */
const Hero = () => {
  const ref = useFadeIn();
  return (
    <header ref={ref} className="fade-in-up mb-20 pt-8">
      <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-none">
        <span className="gradient-text">Jeremy Devin</span>
      </h1>
      <p className="mt-5 text-lg sm:text-xl text-slate-500 max-w-xl leading-relaxed">
        Software Engineer
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <a href="https://www.linkedin.com/in/jeremydevin/" target="_blank" rel="noopener noreferrer" className="glow-btn">
          <LinkedInIcon className="w-4 h-4" />
          LinkedIn
        </a>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="glow-btn">
          <DocumentIcon className="w-4 h-4" />
          Resume
        </a>
      </div>
    </header>
  );
};

/* ── Experience Card ── */
const ExperienceCard: React.FC<{ item: WorkExperience; index: number }> = ({ item, index }) => {
  const ref = useFadeIn();
  return (
    <div ref={ref} className="fade-in-up" style={{ transitionDelay: `${index * 80}ms` }}>
      <div className="glass-card p-6 relative border-l-[3px] border-l-sky-400/40">
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-3">
          <h3 className="text-base font-semibold text-slate-800 leading-snug">
            {item.title}
            <span className="text-slate-400 font-normal"> · </span>
            <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-sky-500 hover:text-sky-600 transition-colors">
              {item.company}
            </a>
          </h3>
          <span className="text-xs font-medium text-slate-400 whitespace-nowrap">{item.date}</span>
        </div>
        <ul className="space-y-1.5 text-sm text-slate-500 leading-relaxed">
          {item.description.map((point, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="text-sky-600 shrink-0">•</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

/* ── Project Card ── */
const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const ref = useFadeIn();
  return (
    <div ref={ref} className="fade-in-up" style={{ transitionDelay: `${index * 100}ms` }}>
      <Link to={`/project/${project.id}`} className="block group h-full">
        <div className="glass-card p-6 h-full flex flex-col">
          <header className="flex justify-between items-baseline mb-3">
            <h3 className="text-lg font-bold text-slate-800 group-hover:text-sky-500 transition-colors">{project.title}</h3>
            {project.date && <span className="text-xs font-medium text-slate-400">{project.date}</span>}
          </header>
          <p className="text-sm text-slate-500 leading-relaxed flex-grow">{project.summary}</p>
          <footer className="mt-4 flex flex-wrap gap-2">
            {project.techStack.map(tech => (
              <span key={tech} className="tech-badge">{tech}</span>
            ))}
          </footer>
        </div>
      </Link>
    </div>
  );
};

/* ── Home Page ── */
const HomePage = () => {
  return (
    <>
      <Hero />

      <section id="experience" className="mb-20 scroll-mt-16">
        <h2 className="section-heading">Experience</h2>
        <div className="space-y-4 stagger">
          {WORK_EXPERIENCE.map((item, index) => (
            <ExperienceCard key={index} item={item} index={index} />
          ))}
        </div>
      </section>

      <section id="projects" className="mb-20 scroll-mt-16">
        <h2 className="section-heading">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </section>

      {/* <section id="journey" className="scroll-mt-16">
        <h2 className="section-heading">Journey</h2>
        <InteractiveJourney />
      </section> */}
    </>
  );
};

export default HomePage;
