
import React, { useEffect, useRef, useState, useCallback } from 'react';
import { WORK_EXPERIENCE, PROJECTS, EDUCATION, BIO, LINKS } from '../constants';
import ParticleConstellation from './ParticleConstellation';
import ProjectModal from './ProjectModal';
import { LinkedInIcon, GitHubIcon, DocumentIcon, ChevronDownIcon, ArrowRightIcon, GraduationCapIcon } from './Icons';
import type { WorkExperience, Project, Education as EducationType } from '../types';

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
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

/* ── Hero Section ── */
const Hero = () => {
  const scrollHintRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const aboutEl = document.getElementById('about');
    if (!aboutEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (scrollHintRef.current) {
          scrollHintRef.current.style.opacity = entry.isIntersecting ? '0' : '';
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(aboutEl);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="hero" className="hero">
      <ParticleConstellation />
      <div className="page-container">
        <div className="hero-content">
          <h1 className="hero-name">
            <span className="gradient-text">Jeremy Devin</span>
          </h1>
          <p className="hero-title">Software Engineer</p>
          {/* <p className="hero-tagline">
            Building scalable web platforms and agentic pipelines at Capital One. Researching deep learning at Georgia Tech.
          </p> */}
          <div className="hero-actions">
            <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="glow-btn" id="hero-linkedin">
              <LinkedInIcon />
              LinkedIn
            </a>
            <a href={LINKS.github} target="_blank" rel="noopener noreferrer" className="glow-btn" id="hero-github">
              <GitHubIcon />
              GitHub
            </a>
            <a href={LINKS.resume} target="_blank" rel="noopener noreferrer" className="glow-btn" id="hero-resume">
              <DocumentIcon />
              Resume
            </a>
          </div>
        </div>
      </div>
      <div ref={scrollHintRef} className="hero-scroll-hint" aria-hidden="true">
        <span>Scroll</span>
        <ChevronDownIcon />
      </div>
    </section>
  );
};


/* ── About Section ── */
const About = () => {
  const ref = useFadeIn();
  return (
    <section id="about" className="section page-container">
      <div ref={ref} className="fade-in-up">
        <h2 className="section-heading">About</h2>
        <p className="about-text">{BIO}</p>
      </div>
    </section>
  );
};

/* ── Experience Card ── */
const ExperienceCard: React.FC<{ item: WorkExperience; index: number }> = ({ item, index }) => {
  const ref = useFadeIn();
  return (
    <div ref={ref} className="fade-in-up" style={{ transitionDelay: `${index * 80}ms` }}>
      <div className="experience-card">
        <div className="experience-header">
          <h3 className="experience-title">
            {item.title}
            <span style={{ color: 'var(--color-text-muted)', fontWeight: 400 }}> · </span>
            <a href={item.link} target="_blank" rel="noopener noreferrer" className="experience-company-link">
              {item.company}
            </a>
          </h3>
          <span className="experience-date">{item.date}</span>
        </div>
        <ul className="experience-list">
          {item.description.map((point, i) => (
            <li key={i}>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

/* ── Experience Section ── */
const Experience = () => {
  return (
    <section id="experience" className="section page-container" data-nosnippet>
      <h2 className="section-heading">Experience</h2>
      <div className="experience-stack stagger">
        {WORK_EXPERIENCE.map((item, index) => (
          <ExperienceCard key={index} item={item} index={index} />
        ))}
      </div>
    </section>
  );
};

/* ── Project Card ── */
const ProjectCard: React.FC<{ project: Project; index: number; onClick: () => void }> = ({ project, index, onClick }) => {
  const ref = useFadeIn();
  return (
    <div ref={ref} className="fade-in-up" style={{ transitionDelay: `${index * 100}ms` }}>
      <div
        className="project-card"
        onClick={onClick}
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onClick(); } }}
        tabIndex={0}
        role="button"
        aria-label={`View details for ${project.title}`}
        id={`project-card-${project.id}`}
      >
        <div className="project-card-header">
          <h3 className="project-title">{project.title}</h3>
          {project.date && <span className="project-date">{project.date}</span>}
        </div>
        <p className="project-summary">{project.summary}</p>
        <div className="project-tech">
          {project.techStack.map(tech => (
            <span key={tech} className="tech-badge">{tech}</span>
          ))}
        </div>
        <div className="project-card-cta">
          View details <ArrowRightIcon />
        </div>
      </div>
    </div>
  );
};

/* ── Projects Section ── */
const Projects: React.FC<{ onProjectClick: (project: Project) => void }> = ({ onProjectClick }) => {
  return (
    <section id="projects" className="section page-container">
      <h2 className="section-heading">Projects</h2>
      <div className="projects-grid">
        {PROJECTS.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            onClick={() => onProjectClick(project)}
          />
        ))}
      </div>
    </section>
  );
};

/* ── Education Card ── */
const EducationCard: React.FC<{ edu: EducationType; index: number }> = ({ edu, index }) => {
  const ref = useFadeIn();
  return (
    <div ref={ref} className="fade-in-up" style={{ transitionDelay: `${index * 100}ms` }}>
      <div className="education-card">
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
          <GraduationCapIcon />
          <span className="education-dates">{edu.startDate} – {edu.endDate}</span>
        </div>
        <h3 className="education-degree">{edu.degree}</h3>
        <a href={edu.link} target="_blank" rel="noopener noreferrer" className="education-institution">
          {edu.institution}
        </a>
      </div>
    </div>
  );
};

/* ── Education Section ── */
const EducationSection = () => {
  return (
    <section id="education" className="section page-container">
      <h2 className="section-heading">Education</h2>
      <div className="education-grid">
        {EDUCATION.map((edu, index) => (
          <EducationCard key={index} edu={edu} index={index} />
        ))}
      </div>
    </section>
  );
};

/* ── Footer ── */
const Footer = () => {
  return (
    <footer className="site-footer page-container">
      <div className="footer-links">
        <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="footer-link">
          <LinkedInIcon /> LinkedIn
        </a>
        <a href={LINKS.github} target="_blank" rel="noopener noreferrer" className="footer-link">
          <GitHubIcon /> GitHub
        </a>
        <a href={LINKS.resume} target="_blank" rel="noopener noreferrer" className="footer-link">
          <DocumentIcon /> Resume
        </a>
      </div>
      <p className="footer-copy">© {new Date().getFullYear()} Jeremy Devin</p>
    </footer>
  );
};

/* ── Home Page ── */
const HomePage = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleCloseModal = useCallback(() => {
    setSelectedProject(null);
  }, []);

  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Projects onProjectClick={setSelectedProject} />
      <EducationSection />
      <Footer />
      <ProjectModal project={selectedProject} onClose={handleCloseModal} />
    </>
  );
};

export default HomePage;
