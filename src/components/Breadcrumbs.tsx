import React from 'react';
import { useEyeTheme } from '../context/ThemeContext';
import { ChevronLeft, Home, Share2, Check } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  onClick?: () => void;
  active?: boolean;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  showShare?: boolean;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, showShare = true }) => {
  const { themeClasses } = useEyeTheme();
  const [copied, setCopied] = React.useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-wrap items-center justify-between gap-3 py-3 text-xs sm:text-sm">
      <nav className="flex items-center flex-wrap gap-1.5" aria-label="فتات الخبز">
        <button
          onClick={items[0]?.onClick}
          className={`flex items-center gap-1 ${themeClasses.textMuted} hover:${themeClasses.textPrimary} transition-colors cursor-pointer`}
          title="العودة للصفحة الرئيسية"
        >
          <Home className="w-3.5 h-3.5" />
          <span>الرئيسية</span>
        </button>

        {items.slice(1).map((item, index) => (
          <React.Fragment key={index}>
            <ChevronLeft className={`w-3.5 h-3.5 ${themeClasses.textMuted} opacity-60 shrink-0`} />
            {item.onClick && !item.active ? (
              <button
                onClick={item.onClick}
                className={`${themeClasses.textMuted} hover:${themeClasses.textPrimary} transition-colors cursor-pointer truncate max-w-[140px] sm:max-w-[200px]`}
              >
                {item.label}
              </button>
            ) : (
              <span className={`font-medium ${themeClasses.textPrimary} truncate max-w-[160px] sm:max-w-[240px]`}>
                {item.label}
              </span>
            )}
          </React.Fragment>
        ))}
      </nav>

      {showShare && (
        <button
          onClick={handleCopyLink}
          className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg border ${themeClasses.border} ${themeClasses.cardBg} ${themeClasses.textSecondary} hover:${themeClasses.textPrimary} text-xs transition-colors cursor-pointer`}
          title="نسخ الرابط المباشر لهذه الصفحة"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-600" />
              <span className="text-emerald-700 font-medium">تم نسخ الرابط</span>
            </>
          ) : (
            <>
              <Share2 className="w-3.5 h-3.5 opacity-70" />
              <span>نسخ الرابط</span>
            </>
          )}
        </button>
      )}
    </div>
  );
};
