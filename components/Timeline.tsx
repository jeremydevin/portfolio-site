import React, { useState, useMemo, useEffect } from 'react';
import { WORK_EXPERIENCE, EDUCATION, parseStartYear, parseEndYear } from '../constants';
import type { WorkExperience, Education } from '../types';

type Category = 'work' | 'education';

interface TimelineItem {
  id: string;
  type: Category;
  data: WorkExperience | Education;
  startYear: number;
  endYear: number;
  row?: number; // For vertical stacking
}

const Timeline = () => {
  const [selectedCategories, setSelectedCategories] = useState<Set<Category>>(new Set(['work', 'education']));
  const [hoveredItem, setHoveredItem] = useState<TimelineItem | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const currentYear = new Date().getFullYear();
  const startYear = 2016;
  // Extend timeline past current year to show "Present" items
  const endYear = currentYear + 1;
  const years = Array.from({ length: endYear - startYear + 1 }, (_, i) => startYear + i);
  const totalYears = endYear - startYear + 1;

  // Track screen size for responsive year labels
  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 600);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Helper to parse date and get fractional position within year (e.g., Fall 2016 = 2016.75)
  const parseDateToFraction = (dateStr: string): number => {
    const yearMatch = dateStr.match(/\d{4}/);
    if (!yearMatch) return 0;
    
    const year = parseInt(yearMatch[0]);
    const lowerDate = dateStr.toLowerCase();
    
    // Handle seasons
    if (lowerDate.includes('fall')) return year + 0.75; // Q4 (September)
    if (lowerDate.includes('spring')) return year + 0.25; // Q1 (March)
    if (lowerDate.includes('summer')) return year + 0.5; // Q2 (June)
    if (lowerDate.includes('winter')) return year + 0.0; // Q1 (January)
    
    // Handle months
    const monthMap: { [key: string]: number } = {
      'jan': 0, 'january': 0,
      'feb': 0.083, 'february': 0.083,
      'mar': 0.167, 'march': 0.167,
      'apr': 0.25, 'april': 0.25,
      'may': 0.333,
      'jun': 0.417, 'june': 0.417,
      'jul': 0.5, 'july': 0.5,
      'aug': 0.583, 'august': 0.583,
      'sep': 0.667, 'september': 0.667,
      'oct': 0.75, 'october': 0.75,
      'nov': 0.833, 'november': 0.833,
      'dec': 0.917, 'december': 0.917,
    };
    
    for (const [month, fraction] of Object.entries(monthMap)) {
      if (lowerDate.includes(month)) {
        return year + fraction;
      }
    }
    
    // Default to middle of year if no month/season found
    return year + 0.5;
  };

  // Get actual start and end positions for an item based on dates
  const getItemDateRange = (item: TimelineItem): { start: number; end: number } => {
    let start: number;
    let end: number;
    
    if (item.type === 'work') {
      const work = item.data as WorkExperience;
      const dateParts = work.date.split(' - ');
      start = parseDateToFraction(dateParts[0]);
      if (dateParts[1] === 'Present') {
        end = endYear; // Extend to end of timeline
      } else {
        end = parseDateToFraction(dateParts[1]);
      }
    } else {
      // Education
      const edu = item.data as Education;
      start = parseDateToFraction(edu.startDate);
      if (edu.endDate === 'Present') {
        end = endYear;
      } else {
        end = parseDateToFraction(edu.endDate);
      }
    }
    
    return { start, end };
  };

  // Process all timeline items
  const allTimelineItems = useMemo(() => {
    const items: TimelineItem[] = [];
    
    // Add work experience items
    WORK_EXPERIENCE.forEach((work, idx) => {
      items.push({
        id: `work-${idx}`,
        type: 'work',
        data: work,
        startYear: parseStartYear(work),
        endYear: parseEndYear(work),
      });
    });
    
    // Add education items
    EDUCATION.forEach((edu, idx) => {
      items.push({
        id: `edu-${idx}`,
        type: 'education',
        data: edu,
        startYear: parseStartYear(edu),
        endYear: parseEndYear(edu),
      });
    });
    
    return items;
  }, []);

  // Filter items by selected categories
  const filteredItems = useMemo(() => {
    return allTimelineItems.filter(item => selectedCategories.has(item.type));
  }, [allTimelineItems, selectedCategories]);

  // Calculate row positions for overlapping items
  const itemsWithRows = useMemo(() => {
    const sortedItems = [...filteredItems].sort((a, b) => {
      if (a.startYear !== b.startYear) return a.startYear - b.startYear;
      return a.endYear - b.endYear;
    });

    // Simple stacking algorithm
    const rows: TimelineItem[][] = [];
    
    sortedItems.forEach(item => {
      // Find first available row
      let rowIndex = 0;
      while (rowIndex < rows.length) {
        const hasOverlap = rows[rowIndex].some(existing => {
          return !(item.endYear < existing.startYear || item.startYear > existing.endYear);
        });
        if (!hasOverlap) break;
        rowIndex++;
      }
      
      if (rowIndex >= rows.length) {
        rows.push([]);
      }
      rows[rowIndex].push(item);
      item.row = rowIndex;
    });

    return sortedItems;
  }, [filteredItems]);

  const calculatePosition = (item: TimelineItem) => {
    const { start, end } = getItemDateRange(item);
    
    // Calculate position based on actual dates (e.g., Fall 2016 = 2016.75)
    const startOffset = ((start - startYear) / totalYears) * 100;
    
    // Calculate duration based on actual end date
    const duration = ((end - start) / totalYears) * 100;
    // Ensure minimum width
    const finalDuration = Math.max(duration, (0.5 / totalYears) * 100);
    
    return { left: `${startOffset}%`, width: `${finalDuration}%` };
  };

  const handleMouseEnter = (item: TimelineItem, event: React.MouseEvent) => {
    setHoveredItem(item);
    updateTooltipPosition(item, event);
  };

  const handleMouseMove = (item: TimelineItem, event: React.MouseEvent) => {
    if (hoveredItem && hoveredItem.id === item.id) {
      updateTooltipPosition(item, event);
    }
  };

  const updateTooltipPosition = (item: TimelineItem, event: React.MouseEvent) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setTooltipPosition({
      x: rect.left + rect.width / 2,
      y: rect.top,
    });
  };

  const toggleCategory = (category: Category) => {
    setSelectedCategories(prev => {
      const next = new Set(prev);
      if (next.has(category)) {
        next.delete(category);
      } else {
        next.add(category);
      }
      return next;
    });
  };

  const getItemColor = (item: TimelineItem) => {
    if (item.type === 'education') {
      return {
        dot: 'bg-amber-500',
        dotHover: 'bg-amber-400',
        line: 'from-amber-500/40 via-amber-500/60 to-amber-500/40',
        lineHover: 'from-amber-400/60 via-amber-400/80 to-amber-400/60',
        shadow: 'shadow-amber-500/50',
      };
    } else {
      // Work experience
      return {
        dot: 'bg-cyan-500',
        dotHover: 'bg-cyan-400',
        line: 'from-cyan-500/40 via-cyan-500/60 to-cyan-500/40',
        lineHover: 'from-cyan-400/60 via-cyan-400/80 to-cyan-400/60',
        shadow: 'shadow-cyan-500/50',
      };
    }
  };

  const formatYearLabel = (year: number): string => {
    if (isSmallScreen) {
      return `'${year.toString().slice(-2)}`;
    }
    return year.toString();
  };

  const getTooltipContent = (item: TimelineItem) => {
    if (item.type === 'work') {
      const work = item.data as WorkExperience;
      return (
        <div className="space-y-2">
          <div className="font-semibold text-slate-100 text-base">{work.title}</div>
          <div className="text-sm text-cyan-400">{work.company}</div>
          <div className="text-xs text-slate-400">{work.date}</div>
        </div>
      );
    } else {
      // Education
      const edu = item.data as Education;
      return (
        <div className="space-y-2">
          <div className="font-semibold text-slate-100 text-base">{edu.degree}</div>
          <div className="text-sm text-amber-400">{edu.institution}</div>
          <div className="text-xs text-slate-400">{edu.startDate} - {edu.endDate}</div>
        </div>
      );
    }
  };

  const maxRows = Math.max(...itemsWithRows.map(item => item.row || 0), 0) + 1;
  const itemHeight = 24;
  const rowSpacing = 8;
  const timelineHeight = maxRows * (itemHeight + rowSpacing);

  return (
    <div className="relative w-full py-8">
      {/* Category Filters */}
      <div className="mb-6 flex flex-wrap gap-4">
        <button
          onClick={() => toggleCategory('work')}
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-slate-900 ${
            selectedCategories.has('work')
              ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 hover:bg-cyan-500/30'
              : 'bg-slate-800 text-slate-400 hover:bg-slate-700 border border-slate-700'
          }`}
        >
          Work Experience
        </button>
        <button
          onClick={() => toggleCategory('education')}
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-slate-900 ${
            selectedCategories.has('education')
              ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30 hover:bg-amber-500/30'
              : 'bg-slate-800 text-slate-400 hover:bg-slate-700 border border-slate-700'
          }`}
        >
          Education
        </button>
      </div>

      {/* Timeline Container */}
      <div className="relative w-full overflow-hidden">
        <div className="relative w-full" style={{ height: `${timelineHeight + 110}px` }}>
          {/* Timeline Line at Bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-slate-700/50" />
          
          {/* All Timeline Items Above */}
          <div className="absolute bottom-12 left-0 right-0" style={{ height: `${timelineHeight}px` }}>
            {itemsWithRows.map((item) => {
              const { left, width } = calculatePosition(item);
              const colors = getItemColor(item);
              const topOffset = (item.row || 0) * (itemHeight + rowSpacing);
              
              return (
                <div
                  key={item.id}
                  className="absolute group cursor-pointer"
                  style={{ 
                    left, 
                    width, 
                    top: `${topOffset}px`,
                    height: `${itemHeight}px`,
                  }}
                  onMouseEnter={(e) => handleMouseEnter(item, e)}
                  onMouseMove={(e) => handleMouseMove(item, e)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[125%] w-4 h-4 rounded-full ${colors.dot} group-hover:${colors.dotHover} group-hover:scale-150 group-hover:shadow-lg group-hover:${colors.shadow} transition-all duration-300 z-10 border-2 border-slate-900`} />
                  <div className="relative">
                    {/* Base gradient line */}
                    <div 
                      className={`absolute top-1/2 left-0 right-0 h-1.5 bg-gradient-to-r ${colors.line} rounded-full -translate-y-1/2`}
                    />
                    {/* Hover overlay - transitions opacity */}
                    <div 
                      className={`absolute top-1/2 left-0 right-0 h-1.5 bg-gradient-to-r ${colors.lineHover} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-y-1/2`}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Year Dividers - positioned at year boundaries */}
          <div className="absolute bottom-0 left-0 right-0">
            {years.map((year) => {
              const dividerPosition = ((year - startYear) / totalYears) * 100;
              return (
                <div
                  key={`divider-${year}`}
                  className="absolute bottom-0 w-0.5 h-3 bg-slate-600"
                  style={{ left: `${dividerPosition}%` }}
                />
              );
            })}
            {/* Add divider at the end */}
            <div
              className="absolute bottom-0 w-0.5 h-3 bg-slate-600"
              style={{ left: '100%' }}
            />
          </div>
          
          {/* Year Labels - positioned in the middle of each year segment */}
          <div className="absolute bottom-0 left-0 right-0" style={{ height: '24px' }}>
            {years.map((year) => {
              // Position label at the middle of the year segment
              const labelPosition = ((year - startYear + 0.5) / totalYears) * 100;
              return (
                <div
                  key={`label-${year}`}
                  className="absolute flex flex-col items-center"
                  style={{ left: `${labelPosition}%`, transform: 'translateX(-50%)', bottom: '4px' }}
                >
                  <span className="text-xs text-slate-500 whitespace-nowrap">
                    {formatYearLabel(year)}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Hover Tooltip */}
      {hoveredItem && (
        <div
          className="fixed z-50 pointer-events-none transition-all duration-200 ease-out"
          style={{
            left: `${tooltipPosition.x}px`,
            top: `${tooltipPosition.y - 140}px`,
            transform: 'translateX(-50%)',
            opacity: hoveredItem ? 1 : 0,
          }}
        >
          <div className="bg-slate-800/95 backdrop-blur-md border border-slate-700/50 rounded-xl p-4 shadow-2xl min-w-[280px] max-w-sm transform transition-transform duration-200 scale-100">
            {getTooltipContent(hoveredItem)}
          </div>
          <div 
            className="absolute left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-t-slate-800 top-full"
            style={{ borderLeftColor: 'transparent', borderRightColor: 'transparent' }}
          />
        </div>
      )}

    </div>
  );
};

export default Timeline;
