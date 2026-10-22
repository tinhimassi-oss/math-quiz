import React, { useState, useEffect } from 'react';
import { useEyeTheme } from '../context/ThemeContext';
import { MAJOR_DOMAINS } from '../data/mathCategories';
import { Menu, X, Home, ChevronLeft } from 'lucide-react';

interface HeaderProps {
  onGoHome: () => void;
  onSelectDomain?: (domainId: string) => void;
  onOpenSearch?: () => void;
  currentViewTitle?: string;
  activeDomainId?: string;
}

export const Header: React.FC<HeaderProps> = ({
  onGoHome,
  onSelectDomain,
  activeDomainId,
}) => {
  const { themeClasses } = useEyeTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile drawer on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen]);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const handleDomainClick = (domainId: string) => {
    if (onSelectDomain) {
      onSelectDomain(domainId);
    } else {
      onGoHome();
    }
    setIsMobileMenuOpen(false);
  };

  const handleHomeClick = () => {
    onGoHome();
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 backdrop-blur-md ${themeClasses.headerBg} border-b ${themeClasses.border} transition-colors duration-200`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 h-16 flex items-center justify-between gap-2 sm:gap-4">
          {/* Zone 1: Brand & Mobile Menu Button */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Mobile Hamburger Menu Button (Three bars / Hamburger) */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className={`p-2 rounded-xl border ${themeClasses.border} ${themeClasses.cardBg} ${themeClasses.textSecondary} hover:${themeClasses.textPrimary} transition-colors cursor-pointer lg:hidden flex items-center justify-center`}
              title="فتح قائمة فروع الرياضيات"
              aria-label="قائمة التصنيفات"
            >
              <Menu className="w-5 h-5" />
            </button>

            {/* Brand Wordmark / Logo */}
            <button
              onClick={onGoHome}
              className="flex items-center gap-2 text-right group cursor-pointer focus:outline-none shrink-0"
            >
              <div
                className={`w-8 h-8 sm:w-9 sm:h-9 rounded-xl ${themeClasses.accentBg} border ${themeClasses.accentBorder} flex items-center justify-center text-base sm:text-lg font-bold ${themeClasses.accent} shadow-2xs group-hover:scale-105 transition-transform`}
              >
                ∑
              </div>
              <span
                className={`text-sm sm:text-base font-bold tracking-tight ${themeClasses.textPrimary} whitespace-nowrap`}
              >
                كويزات الرياضيات
              </span>
            </button>
          </div>

          {/* Zone 2: Desktop View - Full parallel row without horizontal scroll */}
          <nav
            aria-label="فروع الرياضيات"
            className="hidden lg:flex items-center justify-end gap-1 xl:gap-2 flex-1 px-1 lg:px-2"
          >
            {MAJOR_DOMAINS.map((domain) => {
              const isActive = activeDomainId === domain.id;
              return (
                <button
                  key={domain.id}
                  onClick={() => handleDomainClick(domain.id)}
                  className={`whitespace-nowrap shrink-0 transition-all duration-200 cursor-pointer py-1.5 px-2 xl:px-2.5 rounded-lg text-xs xl:text-sm font-semibold ${
                    isActive
                      ? `${themeClasses.cardBg} ${themeClasses.textPrimary} shadow-xs border border-black/10 text-[#7D5329] font-bold border-b-2 border-b-[#7D5329]`
                      : `${themeClasses.textSecondary} hover:${themeClasses.textPrimary} hover:bg-black/5`
                  }`}
                  title={domain.title}
                >
                  {domain.title}
                </button>
              );
            })}
          </nav>
        </div>
      </header>

      {/* ================= Mobile Off-canvas Drawer / Modal ================= */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop overlay */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-300 animate-fadeIn"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer content sliding in from right */}
          <aside
            className={`fixed inset-y-0 right-0 w-[84vw] max-w-sm ${themeClasses.cardBg} shadow-2xl z-50 flex flex-col border-l ${themeClasses.border} transition-transform duration-300 text-right`}
            role="dialog"
            aria-modal="true"
            aria-label="قائمة فروع الرياضيات والتصنيفات"
          >
            {/* Drawer Header */}
            <div
              className={`p-4 border-b ${themeClasses.border} flex items-center justify-between ${themeClasses.headerBg}`}
            >
              <div className="flex items-center gap-2">
                <div
                  className={`w-8 h-8 rounded-xl ${themeClasses.accentBg} border ${themeClasses.accentBorder} flex items-center justify-center text-sm font-bold ${themeClasses.accent}`}
                >
                  ∑
                </div>
                <div>
                  <h2 className={`text-sm font-bold ${themeClasses.textPrimary}`}>
                    كويزات الرياضيات
                  </h2>
                  <p className={`text-[11px] ${themeClasses.textMuted}`}>
                    فروع الرياضيات السبعة
                  </p>
                </div>
              </div>

              {/* Close (X) button */}
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className={`p-2 rounded-xl border ${themeClasses.border} ${themeClasses.pillBg} ${themeClasses.textSecondary} hover:${themeClasses.textPrimary} transition-colors cursor-pointer`}
                title="إغلاق القائمة"
                aria-label="إغلاق القائمة"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Quick Actions in Drawer */}
            <div className={`p-3 border-b ${themeClasses.border} flex gap-2`}>
              <button
                onClick={handleHomeClick}
                className={`w-full py-2.5 px-3 rounded-xl border ${themeClasses.border} ${themeClasses.pillBg} text-xs font-semibold ${themeClasses.textPrimary} flex items-center justify-center gap-2 hover:opacity-90 transition-opacity cursor-pointer`}
              >
                <Home className="w-4 h-4" />
                الرئيسية
              </button>
            </div>

            {/* Domains List */}
            <div className="flex-1 overflow-y-auto p-3 space-y-2">
              <div className={`text-[11px] font-bold px-2 py-1 ${themeClasses.textMuted}`}>
                اختر المجال الرياضي
              </div>

              {MAJOR_DOMAINS.map((domain, index) => {
                const isActive = activeDomainId === domain.id;
                return (
                  <button
                    key={domain.id}
                    onClick={() => handleDomainClick(domain.id)}
                    className={`w-full text-right p-3 rounded-xl border transition-all duration-200 flex items-center justify-between cursor-pointer ${
                      isActive
                        ? `${themeClasses.pillBg} border-[#7D5329]/50 shadow-xs ring-1 ring-[#7D5329]/30`
                        : `${themeClasses.cardBg} ${themeClasses.border} hover:${themeClasses.pillBg}`
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold text-white shrink-0 shadow-2xs"
                        style={{
                          backgroundColor:
                            domain.id === 'basic-math'
                              ? '#1E3A8A'
                              : domain.id === 'algebra-functions'
                              ? '#047857'
                              : domain.id === 'geometry-trigonometry'
                              ? '#0284C7'
                              : domain.id === 'calculus'
                              ? '#7C3AED'
                              : domain.id === 'statistics-probability'
                              ? '#EA580C'
                              : domain.id === 'advanced-math'
                              ? '#475569'
                              : '#0F766E',
                        }}
                      >
                        {index + 1}
                      </div>
                      <div>
                        <div
                          className={`text-sm font-bold ${
                            isActive
                              ? 'text-[#7D5329]'
                              : themeClasses.textPrimary
                          }`}
                        >
                          {domain.title}
                        </div>
                        <div className={`text-[11px] ${themeClasses.textMuted}`}>
                          {domain.subcategories.length} أقسام وتصنيفات فرعية
                        </div>
                      </div>
                    </div>

                    <ChevronLeft
                      className={`w-4 h-4 ${
                        isActive
                          ? 'text-[#7D5329]'
                          : themeClasses.textMuted
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          </aside>
        </div>
      )}
    </>
  );
};
