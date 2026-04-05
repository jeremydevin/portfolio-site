import React, { useState, useMemo, useEffect, useRef } from 'react';
import { WORK_EXPERIENCE, EDUCATION } from '../constants';
import { BriefcaseIcon, GraduationCapIcon } from './Icons';
import type { WorkExperience, Education } from '../types';

type Category = 'work' | 'education';

interface JourneyItem {
  id: string;
  type: Category;
  data: WorkExperience | Education;
  sortYear: number;
  dateLabel: string;
}

/* ── Fade-in hook ── */
function useFadeIn(delay = 0) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add('visible'), delay);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);
  return ref;
}

/* ── Single Milestone Card ── */
const MilestoneCard: React.FC<{ item: JourneyItem; index: number; side: 'left' | 'right' }> = ({ item, index, side }) => {
  const ref = useFadeIn(index * 100);
  const isWork = item.type === 'work';
  const work = isWork ? (item.data as WorkExperience) : null;
  const edu = !isWork ? (item.data as Education) : null;

  const accentBorder = isWork ? 'border-l-sky-400/30' : 'border-l-amber-400/30';
  const dotColor = isWork ? 'bg-sky-400' : 'bg-amber-400';

  return (
    <div ref={ref} className="fade-in-up relative mb-10 md:mb-14">
      {/* Desktop: grid with center dot */}
      <div className="hidden md:grid md:grid-cols-[1fr_40px_1fr] md:items-center">
        {/* Left column */}
        <div className={side === 'right' ? 'pr-6' : ''}>
          {side === 'left' && (
            <CardContent
              isWork={isWork}
              work={work}
              edu={edu}
              item={item}
              accentBorder={accentBorder}
            />
          )}
        </div>

        {/* Center dot */}
        <div className="flex justify-center relative">
          <div className={`w-3 h-3 rounded-full ${dotColor} ring-4 ring-slate-100 z-10`} />
        </div>

        {/* Right column */}
        <div className={side === 'left' ? 'pl-6' : ''}>
          {side === 'right' && (
            <CardContent
              isWork={isWork}
              work={work}
              edu={edu}
              item={item}
              accentBorder={accentBorder}
            />
          )}
        </div>
      </div>

      {/* Mobile: dot on left + card */}
      <div className="md:hidden flex items-start gap-4">
        <div className="flex flex-col items-center pt-5 shrink-0">
          <div className={`w-3 h-3 rounded-full ${dotColor} ring-4 ring-slate-100 z-10`} />
        </div>
        <div className="flex-1">
          <CardContent
            isWork={isWork}
            work={work}
            edu={edu}
            item={item}
            accentBorder={accentBorder}
          />
        </div>
      </div>
    </div>
  );
};

/* ── Card Content (shared between layouts) ── */
const CardContent: React.FC<{
  isWork: boolean;
  work: WorkExperience | null;
  edu: Education | null;
  item: JourneyItem;
  accentBorder: string;
}> = ({ isWork, work, edu, item, accentBorder }) => (
  <div className={`glass-card p-5 border-l-[3px] ${accentBorder}`}>
    {/* Icon + Date row */}
    <div className="flex items-center gap-2 mb-2">
      {isWork ? (
        <BriefcaseIcon className="w-3.5 h-3.5 text-sky-400" />
      ) : (
        <GraduationCapIcon className="w-3.5 h-3.5 text-amber-400" />
      )}
      <span className="text-xs font-medium text-slate-400">{item.dateLabel}</span>
    </div>

    {work && (
      <>
        <h3 className="text-sm font-semibold text-slate-800 leading-snug">
          {work.title}
          <span className="text-slate-300"> · </span>
          <a
            href={work.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-500 hover:text-sky-600 transition-colors"
          >
            {work.company}
          </a>
        </h3>
        <ul className="mt-2 space-y-1 text-xs text-slate-500 leading-relaxed">
          {work.description.slice(0, 2).map((point, i) => (
            <li key={i} className="flex items-start gap-1.5">
              <span className="text-sky-500 shrink-0">•</span>
              <span>{point}</span>
            </li>
          ))}
          {work.description.length > 2 && (
            <li className="text-sky-400 text-xs font-medium">
              +{work.description.length - 2} more
            </li>
          )}
        </ul>
      </>
    )}

    {edu && (
      <>
        <h3 className="text-sm font-semibold text-slate-800 leading-snug">{edu.degree}</h3>
        <a
          href={edu.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-amber-500 hover:text-amber-600 transition-colors"
        >
          {edu.institution}
        </a>
      </>
    )}
  </div>
);

/* ── Main Component ── */
const InteractiveJourney = () => {
  const [selectedCategories, setSelectedCategories] = useState<Set<Category>>(new Set(['work', 'education']));

  const allItems = useMemo<JourneyItem[]>(() => {
    const items: JourneyItem[] = [];

    WORK_EXPERIENCE.forEach((work, idx) => {
      const yearMatch = work.date.match(/\d{4}/);
      const sortYear = yearMatch ? parseInt(yearMatch[0]) : 2020;
      items.push({
        id: `work-${idx}`,
        type: 'work',
        data: work,
        sortYear,
        dateLabel: work.date,
      });
    });

    EDUCATION.forEach((edu, idx) => {
      const yearMatch = edu.startDate.match(/\d{4}/);
      const sortYear = yearMatch ? parseInt(yearMatch[0]) : 2016;
      items.push({
        id: `edu-${idx}`,
        type: 'education',
        data: edu,
        sortYear,
        dateLabel: `${edu.startDate} – ${edu.endDate}`,
      });
    });

    // Sort descending (most recent first)
    return items.sort((a, b) => b.sortYear - a.sortYear);
  }, []);

  const filteredItems = useMemo(
    () => allItems.filter(item => selectedCategories.has(item.type)),
    [allItems, selectedCategories]
  );

  const toggleCategory = (category: Category) => {
    setSelectedCategories(prev => {
      const next = new Set(prev);
      if (next.has(category)) {
        if (next.size > 1) next.delete(category);
      } else {
        next.add(category);
      }
      return next;
    });
  };

  return (
    <div className="relative w-full">
      {/* Filter pills */}
      <div className="flex gap-3 mb-10">
        <button
          onClick={() => toggleCategory('work')}
          className={`toggle-pill ${selectedCategories.has('work') ? 'active-work' : ''}`}
        >
          <span className="inline-flex items-center gap-1.5">
            <BriefcaseIcon className="w-3.5 h-3.5" />
            Work
          </span>
        </button>
        <button
          onClick={() => toggleCategory('education')}
          className={`toggle-pill ${selectedCategories.has('education') ? 'active-education' : ''}`}
        >
          <span className="inline-flex items-center gap-1.5">
            <GraduationCapIcon className="w-3.5 h-3.5" />
            Education
          </span>
        </button>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line — desktop: center, mobile: left */}
        <div className="absolute top-0 bottom-0 w-[2px] left-[6px] md:left-1/2 md:-translate-x-[1px] bg-gradient-to-b from-sky-200/50 via-sky-300/30 to-amber-200/50" />

        {/* Milestone cards */}
        <div className="relative z-10">
          {filteredItems.map((item, index) => (
            <MilestoneCard
              key={item.id}
              item={item}
              index={index}
              side={index % 2 === 0 ? 'right' : 'left'}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default InteractiveJourney;
