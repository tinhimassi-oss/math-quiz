import React, { useState } from 'react';
import { MajorDomain, SubCategory } from '../data/mathCategories';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { useEyeTheme } from '../context/ThemeContext';
import {
  FileQuestion,
  Share2,
  Check,
} from 'lucide-react';

interface QuizPlaceholderViewProps {
  domain: MajorDomain;
  subcategory: SubCategory;
  topic?: SubCategory;
  onGoHome: () => void;
  onGoDomain: () => void;
  onGoSubcategory?: () => void;
}

export const QuizPlaceholderView: React.FC<QuizPlaceholderViewProps> = ({
  domain,
  subcategory,
  topic,
  onGoHome,
  onGoDomain,
  onGoSubcategory,
}) => {
  const { themeClasses } = useEyeTheme();
  const [copiedUrl, setCopiedUrl] = useState(false);

  // Active item to display (either the specific topic or the subcategory)
  const activeItem = topic || subcategory;

  const directUrl = topic
    ? `${window.location.origin}/domain/${domain.id}/${subcategory.id}/${topic.id}`
    : `${window.location.origin}/domain/${domain.id}/${subcategory.id}`;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(directUrl);
    setCopiedUrl(true);
    setTimeout(() => setCopiedUrl(false), 2000);
  };

  // Build breadcrumbs dynamically
  const breadcrumbItems: { label: string; onClick?: () => void; active?: boolean }[] = [
    { label: 'الرئيسية', onClick: onGoHome },
    { label: domain.title, onClick: onGoDomain },
  ];

  if (topic) {
    if (onGoSubcategory) {
      breadcrumbItems.push({ label: subcategory.title, onClick: onGoSubcategory });
    } else {
      breadcrumbItems.push({ label: subcategory.title, onClick: onGoDomain });
    }
    breadcrumbItems.push({ label: topic.title, active: true });
  } else {
    breadcrumbItems.push({ label: subcategory.title, active: true });
  }

  return (
    <div className="space-y-6 pb-20 text-right">
      {/* Breadcrumb Path */}
      <Breadcrumbs items={breadcrumbItems} />

      {/* Item Banner & Independent Link Info */}
      <div
        className={`p-6 sm:p-8 rounded-2xl border ${themeClasses.border} ${themeClasses.cardBg} space-y-4 shadow-2xs relative`}
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-4">
            <div
              className={`w-14 h-14 sm:w-16 sm:h-16 shrink-0 rounded-2xl ${themeClasses.accentBg} border ${themeClasses.accentBorder} flex items-center justify-center text-3xl shadow-2xs`}
            >
              <span role="img" aria-label={activeItem.title}>
                {activeItem.emoji}
              </span>
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className={`text-xs ${themeClasses.textMuted}`}>
                  {topic
                    ? `تابع لـ: ${domain.title} · ${subcategory.title}`
                    : `قسم فرعي تابع لـ: ${domain.title}`}
                </span>
                <span aria-hidden="true" className={themeClasses.textMuted}>·</span>
                <span className={`text-xs ${themeClasses.textMuted}`}>
                  المستوى: {activeItem.level}
                </span>
              </div>
              <h1 className={`text-xl sm:text-2xl font-semibold ${themeClasses.textPrimary}`}>
                {activeItem.title}
              </h1>
              <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed max-w-xl`}>
                {activeItem.shortDesc}
              </p>
            </div>
          </div>

          {/* Action to Copy Direct Independent Link */}
          <div className="flex items-center gap-2.5 self-end sm:self-center">
            <button
              onClick={handleCopyLink}
              className={`px-3 py-2 rounded-xl text-xs font-medium border ${themeClasses.border} ${themeClasses.cardBg} hover:bg-black/[0.02] dark:hover:bg-white/[0.05] transition-colors flex items-center gap-1.5 ${themeClasses.textSecondary} cursor-pointer`}
              title="نسخ الرابط المستقل لهذا القسم"
            >
              {copiedUrl ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span className="text-emerald-700 font-medium">تم نسخ الرابط المستقل</span>
                </>
              ) : (
                <>
                  <Share2 className="w-4 h-4 opacity-70" />
                  <span>مشاركة رابط هذا القسم</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Math Symbol & Permanent URL banner */}
        <div className={`pt-3 border-t ${themeClasses.border} flex flex-wrap items-center justify-between gap-2 text-xs ${themeClasses.textMuted}`}>
          <div className="flex items-center gap-2 font-mono text-[11px]">
            <span>الرمز الرياضي التعبيري:</span>
            <span className={`${themeClasses.accent} font-semibold`}>{activeItem.mathSymbol}</span>
          </div>
          <div className="text-[11px] truncate max-w-xs sm:max-w-md opacity-70">
            مسار الرابط:{' '}
            <span className="font-mono" dir="ltr">
              {topic
                ? `/domain/${domain.id}/${subcategory.id}/${topic.id}`
                : `/domain/${domain.id}/${subcategory.id}`}
            </span>
          </div>
        </div>
      </div>

      {/* Special educational overview for fractions-decimals classification */}
      {activeItem.id === 'fractions-decimals' ? (
        <div className="space-y-6">
          <div
            className={`p-6 sm:p-8 rounded-2xl border ${themeClasses.border} ${themeClasses.cardBg} space-y-4 shadow-2xs`}
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">🥧</span>
              <div>
                <h2 className={`text-lg sm:text-xl font-bold ${themeClasses.textPrimary}`}>
                  تصنيف الكسور والأعداد العشرية: المفهوم والدور المنهجي
                </h2>
                <p className={`text-xs ${themeClasses.textMuted}`}>
                  قسم دراسي وتأسيسي شامل ضمن {domain.title}
                </p>
              </div>
            </div>

            <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
              يُعتبر هذا التصنيف حجر الزاوية للانتقال من الحساب الصحيح إلى الحساب التجزيئي والنسبي. يشمل دراسة الكسور الاعتيادية (البسط والمقام)، الأعداد الكسرية، والكسور العشرية مع تطبيقات التحويل بينهما. تم إبقاء هذا التصنيف كإطار مفاهيمي مستقل، وتوزيع الاختبارات العملية المتدرجة وفق المهارات الدقيقة في أقسام الموقع التفاعلية.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2">
              <div className={`p-4 rounded-xl border ${themeClasses.border} bg-black/[0.01] dark:bg-white/[0.02] space-y-1`}>
                <span className="text-sm font-bold text-[#127052] dark:text-[#5EB5A1]">1. الكسور الاعتيادية</span>
                <p className={`text-xs ${themeClasses.textMuted} leading-relaxed`}>
                  تمثيل الأجزاء المتساوية من الكل: البسط (الأجزاء المأخوذة) والمقام (المجموع الكلي).
                </p>
              </div>
              <div className={`p-4 rounded-xl border ${themeClasses.border} bg-black/[0.01] dark:bg-white/[0.02] space-y-1`}>
                <span className="text-sm font-bold text-[#127052] dark:text-[#5EB5A1]">2. الكسور المتكافئة</span>
                <p className={`text-xs ${themeClasses.textMuted} leading-relaxed`}>
                  تبسيط الكسور وتوحيد المقامات بضرب أو قسمة حدي الكسر في نفس المقدار غير الصفري.
                </p>
              </div>
              <div className={`p-4 rounded-xl border ${themeClasses.border} bg-black/[0.01] dark:bg-white/[0.02] space-y-1`}>
                <span className="text-sm font-bold text-[#127052] dark:text-[#5EB5A1]">3. الأعداد العشرية</span>
                <p className={`text-xs ${themeClasses.textMuted} leading-relaxed`}>
                  الأعشار وأجزاء المئة والألف، واستخدام الفاصلة العشرية لتمثيل الكسور ذات المقامات 10، 100، 1000.
                </p>
              </div>
              <div className={`p-4 rounded-xl border ${themeClasses.border} bg-black/[0.01] dark:bg-white/[0.02] space-y-1`}>
                <span className="text-sm font-bold text-[#127052] dark:text-[#5EB5A1]">4. التحويل والمقارنة</span>
                <p className={`text-xs ${themeClasses.textMuted} leading-relaxed`}>
                  تحويل الكسور إلى نسب مئوية أو أعداد عشرية ومحاذاة الفواصل العشرية للمقارنة والترتيب.
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Clean Status Alert for other pending subsections */
        <div
          className={`p-6 sm:p-8 rounded-2xl border ${themeClasses.border} ${themeClasses.cardBg} text-center space-y-3 shadow-2xs`}
        >
          <div
            className={`w-14 h-14 mx-auto rounded-2xl ${themeClasses.accentBg} border ${themeClasses.accentBorder} flex items-center justify-center text-2xl ${themeClasses.accent}`}
          >
            <FileQuestion className="w-7 h-7" />
          </div>

          <div className="space-y-1.5 max-w-lg mx-auto">
            <h2 className={`text-lg sm:text-xl font-semibold ${themeClasses.textPrimary}`}>
              تصنيف {activeItem.title}
            </h2>
            <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
              قسم دراسي متخصص ضمن {domain.title}. تم إعداد الهيكل والتصميم المستقل لهذا التصنيف وفق معايير الراحة البصرية الفائقة وهو بانتظار إدراج المحتوى التفاعلي.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
