import React from 'react';
import { MajorDomain } from '../data/mathCategories';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SubCategoryCard } from '../components/SubCategoryCard';
import { useEyeTheme } from '../context/ThemeContext';

interface DomainViewProps {
  domain: MajorDomain;
  onGoHome: () => void;
  onOpenQuiz: (subcategoryId: string) => void;
}

export const DomainView: React.FC<DomainViewProps> = ({
  domain,
  onGoHome,
  onOpenQuiz,
}) => {
  const { themeClasses } = useEyeTheme();

  return (
    <div className="space-y-6 pb-16">
      {/* Breadcrumb Navigation */}
      <Breadcrumbs
        items={[
          { label: 'الرئيسية', onClick: onGoHome },
          { label: domain.title, active: true },
        ]}
      />

      {/* Subcategories Section */}
      <section className="space-y-5">
        <div className="flex items-center justify-between pb-2 border-b border-black/[0.04] dark:border-white/[0.04]">
          <h2 className={`text-sm sm:text-base font-bold ${themeClasses.textPrimary}`}>
            {domain.title} - التصنيفات الفرعية ({domain.subcategories.length})
          </h2>
          <span className={`text-xs ${themeClasses.textMuted}`}>
            اختر أي قسم للدخول إلى صفحته المستقلة
          </span>
        </div>

        {/* 3 cards per row on desktop, 2 on tablet, 1 on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-7">
          {domain.subcategories.map((sub, idx) => (
            <SubCategoryCard
              key={sub.id}
              subcategory={sub}
              domainId={domain.id}
              index={idx}
              onOpenQuiz={() => onOpenQuiz(sub.id)}
            />
          ))}
        </div>
      </section>
    </div>
  );
};
