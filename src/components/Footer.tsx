import React from 'react';
import { useEyeTheme } from '../context/ThemeContext';
import { MAJOR_DOMAINS } from '../data/mathCategories';

interface FooterProps {
  onSelectDomain: (domainId: string) => void;
  onGoHome: () => void;
  onGoPrivacy: () => void;
  onGoTerms: () => void;
  onGoContact: () => void;
  onGoAbout: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onSelectDomain,
  onGoHome,
  onGoPrivacy,
  onGoTerms,
  onGoContact,
  onGoAbout,
}) => {
  const { themeClasses } = useEyeTheme();

  return (
    <footer className={`border-t ${themeClasses.border} ${themeClasses.cardBg} transition-colors py-10 mt-12 text-right`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-black/[0.04] dark:border-white/[0.04]">
          <div className="space-y-1">
            <button
              onClick={onGoHome}
              className="flex items-center gap-2 text-right cursor-pointer group"
            >
              <span className={`text-base font-bold ${themeClasses.textPrimary} group-hover:text-[#7D5329] transition-colors`}>
                كويزات الرياضيات
              </span>
              <span className={`text-xs ${themeClasses.textMuted}`}>· اختبارات وألغاز تفاعلية</span>
            </button>
            <p className={`text-xs ${themeClasses.textSecondary} max-w-md`}>
              منصة عربية مصممة بأعلى معايير الراحة البصرية والهدوء الفكري، لتصفح واختبار فروع الرياضيات السبعة وتصنيفاتها الـ 36.
            </p>
          </div>

          {/* Four Requested Static Pages Links */}
          <nav className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-medium" aria-label="روابط الموقع">
            <button
              onClick={onGoPrivacy}
              className={`flex items-center gap-1.5 ${themeClasses.textSecondary} hover:${themeClasses.textPrimary} hover:text-[#127052] dark:hover:text-[#5EB5A1] transition-colors cursor-pointer`}
            >
              <span className="text-[#127052] dark:text-[#5EB5A1] text-sm">•</span>
              <span>سياسة الخصوصية</span>
            </button>

            <button
              onClick={onGoTerms}
              className={`flex items-center gap-1.5 ${themeClasses.textSecondary} hover:${themeClasses.textPrimary} hover:text-[#127052] dark:hover:text-[#5EB5A1] transition-colors cursor-pointer`}
            >
              <span className="text-[#127052] dark:text-[#5EB5A1] text-sm">•</span>
              <span>شروط الاستخدام</span>
            </button>

            <button
              onClick={onGoContact}
              className={`flex items-center gap-1.5 ${themeClasses.textSecondary} hover:${themeClasses.textPrimary} hover:text-[#127052] dark:hover:text-[#5EB5A1] transition-colors cursor-pointer`}
            >
              <span className="text-[#127052] dark:text-[#5EB5A1] text-sm">•</span>
              <span>اتصل بنا</span>
            </button>

            <button
              onClick={onGoAbout}
              className={`flex items-center gap-1.5 ${themeClasses.textSecondary} hover:${themeClasses.textPrimary} hover:text-[#127052] dark:hover:text-[#5EB5A1] transition-colors cursor-pointer`}
            >
              <span className="text-[#127052] dark:text-[#5EB5A1] text-sm">•</span>
              <span>من نحن</span>
            </button>
          </nav>
        </div>

        {/* Quick Links to Major Domains */}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-3 text-xs">
          {MAJOR_DOMAINS.map((d) => (
            <button
              key={d.id}
              onClick={() => onSelectDomain(d.id)}
              className={`p-2 rounded-lg text-right truncate ${themeClasses.textMuted} hover:${themeClasses.textPrimary} hover:${themeClasses.pillBg} transition-colors cursor-pointer`}
              title={d.title}
            >
              <span>{d.title}</span>
            </button>
          ))}
        </div>

        <div className={`pt-4 text-center sm:text-right text-xs ${themeClasses.textMuted}`}>
          <span>جميع الحقوق محفوظة © {new Date().getFullYear()} · منصة كويزات الرياضيات</span>
        </div>
      </div>
    </footer>
  );
};
