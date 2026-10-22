import React from 'react';
import { MajorDomain } from '../data/mathCategories';
import {
  Calculator,
  SquareFunction,
  Compass,
  Activity,
  BarChart3,
  Atom,
  Coins,
  Sparkles,
} from 'lucide-react';

interface DomainCardProps {
  domain: MajorDomain;
  index: number;
  onClick: () => void;
}

interface DomainStyleConfig {
  color: string;
  icon: React.ComponentType<{ className?: string }>;
}

const DOMAIN_STYLES: Record<string, DomainStyleConfig> = {
  // 1. الرياضيات الأساسية: الأزرق الداكن / الملكي (Navy/Royal Blue - #1E3A8A)
  'basic-math': {
    color: '#1E3A8A',
    icon: Calculator,
  },
  // 2. الجبر والدوال: الأخضر الزمردي الهادئ (#047857)
  'algebra-functions': {
    color: '#047857',
    icon: SquareFunction,
  },
  // 3. الهندسة وحساب المثلثات: الأزرق الفيروزي أو السماوي (#0284C7)
  'geometry-trigonometry': {
    color: '#0284C7',
    icon: Compass,
  },
  // 4. التفاضل والتكامل: البنفسجي الساطع (#9146FF)
  'calculus': {
    color: '#9146FF',
    icon: Activity,
  },
  // 5. الإحصاء والاحتمالات: البرتقالي الدافئ أو العنبري (#D97706)
  'statistics-probability': {
    color: '#D97706',
    icon: BarChart3,
  },
  // 6. الرياضيات المتقدمة والجامعية: الرمادي الداكن أو الفحمي الأكاديمي (#334155)
  'advanced-math': {
    color: '#334155',
    icon: Atom,
  },
  // 7. الرياضيات التطبيقية والمالية: الأخضر المالي / الداكن (#065F46)
  'applied-financial-math': {
    color: '#065F46',
    icon: Coins,
  },
};

// Subtle geometric honeycomb / isometric cube pattern SVG
const HONEYCOMB_PATTERN_DATA_URI =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='55.425' viewBox='0 0 32 55.425'%3E%3Cg fill='none' stroke='%23ffffff' stroke-width='1.2' stroke-opacity='0.22'%3E%3Cpath d='M16 0 L32 9.238 L32 27.713 L16 36.95 L0 27.713 L0 9.238 Z'/%3E%3Cpath d='M16 18.475 L16 36.95 M16 18.475 L0 9.238 M16 18.475 L32 9.238'/%3E%3Cpath d='M0 46.188 L16 36.95 L32 46.188 L32 55.425 M0 46.188 L0 55.425'/%3E%3Cpath d='M16 55.425 L16 36.95 M0 27.713 L16 36.95 L32 27.713'/%3E%3C/g%3E%3C/svg%3E\")";

export const DomainCard: React.FC<DomainCardProps> = ({
  domain,
  onClick,
}) => {
  const styleConfig = DOMAIN_STYLES[domain.id] || {
    color: '#1E3A8A',
    icon: Sparkles,
  };

  const IconComponent = styleConfig.icon;

  return (
    <div
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
      className="group relative w-full rounded-2xl sm:rounded-3xl border border-black/10 dark:border-white/10 bg-white dark:bg-zinc-900 overflow-hidden shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer focus:outline-none focus:ring-4 focus:ring-blue-500/20 select-none flex flex-col"
    >
      {/* ================= TOP SECTION (60% Height) ================= */}
      <div
        className="relative w-full h-40 sm:h-48 md:h-52 flex items-center justify-center overflow-hidden transition-all duration-300"
        style={{ backgroundColor: styleConfig.color }}
      >
        {/* Subtle Geometric Pattern (HoneyComb / Isometric Cubes) */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none opacity-30"
          style={{
            backgroundImage: HONEYCOMB_PATTERN_DATA_URI,
            backgroundSize: '32px 55.425px',
            backgroundRepeat: 'repeat',
          }}
        />

        {/* Center Outline White Icon */}
        <div className="relative z-10 flex items-center justify-center p-3">
          <IconComponent className="w-14 h-14 sm:w-18 sm:h-18 md:w-20 md:h-20 text-white stroke-[1.65] drop-shadow-md group-hover:scale-110 transition-transform duration-300" />
        </div>
      </div>

      {/* ================= BOTTOM SECTION (40% Height) ================= */}
      <div className="w-full py-5 sm:py-6 md:py-7 px-4 bg-white dark:bg-zinc-900 flex items-center justify-center border-t border-black/5 dark:border-white/5 transition-colors">
        <h3 className="text-base sm:text-lg md:text-xl font-bold text-black dark:text-white text-center tracking-tight leading-snug">
          {domain.title}
        </h3>
      </div>
    </div>
  );
};
