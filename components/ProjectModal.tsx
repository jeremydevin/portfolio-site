
import React, { useEffect, useRef, useCallback } from 'react';
import { CloseIcon, ExternalLinkIcon } from './Icons';
import type { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const backdropRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  // Focus trap and keyboard handling
  useEffect(() => {
    if (!project) return;

    // Save previous focus
    previousFocusRef.current = document.activeElement as HTMLElement;

    // Focus close button
    setTimeout(() => closeRef.current?.focus(), 50);

    // Lock body scroll
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = `${scrollbarWidth}px`;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
      // Simple focus trap within modal
      if (e.key === 'Tab') {
        const modal = backdropRef.current?.querySelector('.modal-content');
        if (!modal) return;
        const focusable = modal.querySelectorAll<HTMLElement>(
          'button, a[href], [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
      // Restore focus
      previousFocusRef.current?.focus();
    };
  }, [project, onClose]);

  // Animate open
  useEffect(() => {
    if (project && backdropRef.current) {
      requestAnimationFrame(() => {
        backdropRef.current?.classList.add('open');
      });
    }
  }, [project]);

  const handleClose = useCallback(() => {
    if (backdropRef.current) {
      backdropRef.current.classList.remove('open');
      setTimeout(onClose, 300);
    } else {
      onClose();
    }
  }, [onClose]);

  const handleBackdropClick = useCallback((e: React.MouseEvent) => {
    if (e.target === backdropRef.current) {
      handleClose();
    }
  }, [handleClose]);

  if (!project) return null;

  return (
    <div
      ref={backdropRef}
      className="modal-backdrop"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="modal-content">
        <button
          ref={closeRef}
          className="modal-close"
          onClick={handleClose}
          aria-label="Close project details"
        >
          <CloseIcon />
        </button>

        {project.date && <p className="modal-date">{project.date}</p>}
        <h2 id="modal-title" className="modal-title">{project.title}</h2>

        <div className="modal-body">
          {project.description.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}

          {project.highlights && project.highlights.length > 0 && (
            <>
              <h3>Key Results</h3>
              <ul>
                {project.highlights.map((highlight, i) => (
                  <li key={i}><span>{highlight}</span></li>
                ))}
              </ul>
            </>
          )}
        </div>

        <div className="modal-actions">
          {project.pdfLink && (
            <a
              href={project.pdfLink}
              target="_blank"
              rel="noopener noreferrer"
              className="glow-btn"
            >
              Read the full report
              <ExternalLinkIcon />
            </a>
          )}
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="glow-btn"
            >
              View live app
              <ExternalLinkIcon />
            </a>
          )}
        </div>

        <div className="modal-tech-section">
          <p className="modal-tech-label">Tech Stack</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {project.techStack.map(tech => (
              <span key={tech} className="tech-badge">{tech}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
