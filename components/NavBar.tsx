
import React, { useState, useEffect, useCallback } from 'react';
import { NAV_ITEMS } from '../constants';
import { MenuIcon, CloseIcon } from './Icons';

const NavBar: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const heroEl = document.getElementById('hero');
    if (!heroEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Show nav when hero is scrolled past
        setVisible(!entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    observer.observe(heroEl);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const sectionEls = NAV_ITEMS.map(item => document.getElementById(item.id)).filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { threshold: 0.3, rootMargin: '-80px 0px -40% 0px' }
    );

    sectionEls.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollTo = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setMobileOpen(false);
    }
  }, []);

  return (
    <nav
      className={`nav-bar ${visible ? 'visible' : ''} ${mobileOpen ? 'mobile-open' : ''}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <span className="nav-brand">JD</span>
      <button
        className="nav-toggle"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={mobileOpen}
      >
        {mobileOpen ? <CloseIcon className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
      </button>
      <div className={`nav-links ${mobileOpen ? 'open' : ''}`}>
        {NAV_ITEMS.map(item => (
          <button
            key={item.id}
            className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
            onClick={() => scrollTo(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default NavBar;
