import React from 'react';
import { ArrowRight, BookOpen, Compass, CheckCircle2 } from 'lucide-react';
import { useEyeTheme } from '../context/ThemeContext';
import { navigateTo } from '../navigation/router';

export interface RelatedQuizInfo {
  id: string;
  title: string;
  emoji: string;
  mathSymbol: string;
  level: 'أساسي' | 'متوسط' | 'متقدم';
  url: string;
  relationReason: string;
}

export const ALL_PLACE_VALUE_TESTS: Record<string, RelatedQuizInfo> = {
  'place-value-within-99': {
    id: 'place-value-within-99',
    title: 'اختبار القيمة المنزلية ضمن 99 (الآحاد والعشرات)',
    emoji: '🟢',
    mathSymbol: '47 = 40 + 7',
    level: 'أساسي',
    url: '/math/place-value/within-99',
    relationReason: 'الخطوة التأسيسية الأولى لتمييز الآحاد والعشرات وتفكيك الأعداد ذات المنزلتين',
  },
  'place-value-within-999': {
    id: 'place-value-within-999',
    title: 'اختبار القيمة المنزلية ضمن 999 (المئات)',
    emoji: '🟢',
    mathSymbol: '638 = 600 + 30 + 8',
    level: 'أساسي',
    url: '/math/place-value/within-999',
    relationReason: 'الانتقال إلى الأعداد ثلاثية المنازل وقيمة المئات وحفظ المنزلة بالصفر',
  },
  'reading-writing-numbers': {
    id: 'reading-writing-numbers',
    title: 'اختبار قراءة الأعداد وكتابتها (الصيغ اللفظية والتحليلية)',
    emoji: '🟢',
    mathSymbol: 'ثلاثمئة وخمسة = 305',
    level: 'أساسي',
    url: '/math/place-value/reading-writing',
    relationReason: 'الطلاقة اللغوية والرياضية في التحويل بين الصيغ القياسية واللفظية والتحليلية',
  },
  'comparing-ordering-numbers': {
    id: 'comparing-ordering-numbers',
    title: 'اختبار مقارنة الأعداد وترتيبها',
    emoji: '🟢',
    mathSymbol: '845 > 839',
    level: 'أساسي',
    url: '/math/place-value/comparing-ordering',
    relationReason: 'تطبيق القيمة المكانية لمقارنة الأعداد والترتيب التصاعدي والتنازلي بدقة',
  },
  'place-value-thousands': {
    id: 'place-value-thousands',
    title: 'اختبار القيمة المنزلية حتى الألوف',
    emoji: '🔵',
    mathSymbol: '5,420 = 5000 + 400 + 20',
    level: 'متوسط',
    url: '/math/place-value/thousands',
    relationReason: 'التوسع نحو دورة الألوف (أحاد، عشرات، مئات الألوف) وفواصل الدورات',
  },
  'place-value-millions-billions': {
    id: 'place-value-millions-billions',
    title: 'اختبار القيمة المنزلية حتى الملايين والمليارات',
    emoji: '🔵',
    mathSymbol: '1,000,000,000',
    level: 'متقدم',
    url: '/math/place-value/millions-billions',
    relationReason: 'إتقان الدورات الكبرى وقراءة الملايين والمليارات الحسابية والفلكية',
  },
  'rounding-whole-numbers': {
    id: 'rounding-whole-numbers',
    title: 'اختبار تقريب الأعداد الكلية',
    emoji: '🔵',
    mathSymbol: '4,682 ≈ 4,700',
    level: 'متوسط',
    url: '/math/place-value/rounding-whole',
    relationReason: 'التقدير الذكي والتقريب لأقرب عشرة ومئة وألف وقاعدة الأرقام الكريمة والفقيرة',
  },
  'arithmetic-patterns-place-value': {
    id: 'arithmetic-patterns-place-value',
    title: 'اختبار الأنماط الحسابية والقيمة المنزلية',
    emoji: '🔵',
    mathSymbol: '+10, +100, +1000',
    level: 'متوسط',
    url: '/math/place-value/arithmetic-patterns',
    relationReason: 'استكشاف حركات المنازل الرياضية والقفز السريع بالعشرات والمئات والألوف',
  },
  'decimals-tenths-hundredths': {
    id: 'decimals-tenths-hundredths',
    title: 'اختبار القيمة المنزلية للكسور العشرية (الأجزاء من 10 و 100)',
    emoji: '🟣',
    mathSymbol: '0.45 = 0.4 + 0.05',
    level: 'متوسط',
    url: '/math/place-value/decimals-tenths-hundredths',
    relationReason: 'الانتقال إلى يمين الفاصلة العشرية وفهم الأعشار وأجزاء المئة',
  },
  'decimals-thousandths': {
    id: 'decimals-thousandths',
    title: 'اختبار القيمة المنزلية للأجزاء من ألف',
    emoji: '🟣',
    mathSymbol: '0.125 = 1/8',
    level: 'متقدم',
    url: '/math/place-value/decimals-thousandths',
    relationReason: 'الدقة المتناهية في منزلة الأجزاء من ألف وتطبيقاتها العلمية والقياسية',
  },
  'comparing-ordering-decimals': {
    id: 'comparing-ordering-decimals',
    title: 'اختبار مقارنة وترتيب الكسور العشرية',
    emoji: '🟣',
    mathSymbol: '0.7 > 0.68',
    level: 'متوسط',
    url: '/math/place-value/comparing-decimals',
    relationReason: 'موازنة المنازل العشرية ومحاذاة الفواصل وتجنب الخداع البصري للكسور',
  },
  'rounding-decimals': {
    id: 'rounding-decimals',
    title: 'اختبار تقريب الكسور العشرية',
    emoji: '🟣',
    mathSymbol: '3.86 ≈ 3.9',
    level: 'متقدم',
    url: '/math/place-value/rounding-decimals',
    relationReason: 'تقريب الكسور العشرية لأقرب عدد كلي وعُشر وجزء من مئة للتطبيقات المالية والعملية',
  },
};

const ADJACENT_MAP: Record<string, string[]> = {
  'place-value-within-99': ['place-value-within-999', 'reading-writing-numbers', 'comparing-ordering-numbers'],
  'place-value-within-999': ['place-value-within-99', 'reading-writing-numbers', 'place-value-thousands'],
  'reading-writing-numbers': ['place-value-within-999', 'comparing-ordering-numbers', 'place-value-thousands'],
  'comparing-ordering-numbers': ['place-value-within-999', 'reading-writing-numbers', 'rounding-whole-numbers'],
  'place-value-thousands': ['place-value-within-999', 'place-value-millions-billions', 'rounding-whole-numbers'],
  'place-value-millions-billions': ['place-value-thousands', 'rounding-whole-numbers', 'arithmetic-patterns-place-value'],
  'rounding-whole-numbers': ['comparing-ordering-numbers', 'place-value-thousands', 'rounding-decimals'],
  'arithmetic-patterns-place-value': ['place-value-thousands', 'place-value-within-999', 'decimals-tenths-hundredths'],
  'decimals-tenths-hundredths': ['decimals-thousandths', 'comparing-ordering-decimals', 'place-value-within-999'],
  'decimals-thousandths': ['decimals-tenths-hundredths', 'comparing-ordering-decimals', 'rounding-decimals'],
  'comparing-ordering-decimals': ['decimals-tenths-hundredths', 'decimals-thousandths', 'rounding-decimals'],
  'rounding-decimals': ['comparing-ordering-decimals', 'rounding-whole-numbers', 'decimals-thousandths'],
};

interface PlaceValueBacklinkBoxProps {
  currentQuizId: string;
  onGoPlaceValue?: () => void;
  className?: string;
}

export const PlaceValueBacklinkBox: React.FC<PlaceValueBacklinkBoxProps> = ({
  currentQuizId,
  onGoPlaceValue,
  className = '',
}) => {
  const { themeClasses } = useEyeTheme();

  const adjacentIds = ADJACENT_MAP[currentQuizId] || ['place-value-within-99', 'place-value-within-999', 'reading-writing-numbers'];
  const adjacentTests = adjacentIds
    .map((id) => ALL_PLACE_VALUE_TESTS[id])
    .filter(Boolean);

  const handleParentClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onGoPlaceValue) {
      onGoPlaceValue();
    } else {
      navigateTo('/domain/basic-math/place-value');
    }
  };

  const handleCardClick = (url: string, e: React.MouseEvent) => {
    e.preventDefault();
    navigateTo(url);
  };

  return (
    <aside
      aria-label="روابط سياقية واختبارات القيمة المنزلية المقترحة"
      className={`p-6 sm:p-8 rounded-2xl border ${themeClasses.border} ${themeClasses.cardBg} space-y-6 shadow-2xs text-right ${className}`}
    >
      {/* Category Backlink Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-5 border-b border-black/[0.06] dark:border-white/[0.08]">
        <div>
          <span className="text-[11px] font-bold text-[#127052] dark:text-[#5EB5A1] flex items-center gap-1.5 mb-1">
            <Compass className="w-3.5 h-3.5" />
            التنقل الهرمي وشبكة اختبارات القيمة المنزلية
          </span>
          <h3 className={`text-base sm:text-lg font-bold ${themeClasses.textPrimary}`}>
            التصنيف الشامل: القيمة المنزلية (12 اختباراً تخصصياً)
          </h3>
        </div>

        <button
          onClick={handleParentClick}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#127052] dark:text-[#5EB5A1] hover:underline self-start sm:self-auto cursor-pointer"
        >
          <span>تصفح كل اختبارات القيمة المنزلية</span>
          <ArrowRight className="w-3.5 h-3.5 rotate-180" />
        </button>
      </div>

      <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
        هذا الاختبار جزء من منظومة متكاملة من 12 اختباراً مصممة لبناء وتثبيت الحس العددي المكاني من الآحاد والعشرات وحتى المليارات والأجزاء العشرية الدقيقة. نوصي باستكمال الاختبارات المترابطة أدناه:
      </p>

      {/* Suggested Adjacent Tests */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1">
        {adjacentTests.map((test) => (
          <a
            key={test.id}
            href={`#${test.url}`}
            onClick={(e) => handleCardClick(test.url, e)}
            className={`group p-4 rounded-xl border ${themeClasses.border} bg-black/[0.01] dark:bg-white/[0.02] hover:bg-black/[0.03] dark:hover:bg-white/[0.04] transition-all duration-200 block text-right hover:border-[#3B7A6A]/40`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xl">{test.emoji}</span>
              <span className="text-[10px] px-2 py-0.5 rounded-full font-medium bg-[#3B7A6A]/10 text-[#127052] dark:text-[#5EB5A1]">
                {test.level}
              </span>
            </div>

            <div className={`text-xs font-bold ${themeClasses.textPrimary} group-hover:text-[#127052] dark:group-hover:text-[#5EB5A1] transition-colors mb-1`}>
              {test.title}
            </div>

            <div className="text-[11px] font-mono text-[#3B7A6A] dark:text-[#7BC3B1] mb-2 dir-ltr text-right">
              {test.mathSymbol}
            </div>

            <p className={`text-[11px] ${themeClasses.textMuted} line-clamp-2 leading-relaxed`}>
              {test.relationReason}
            </p>

            <div className="mt-3 flex items-center gap-1 text-[11px] font-medium text-[#127052] dark:text-[#5EB5A1]">
              <span>بدء الاختبار</span>
              <ArrowRight className="w-3 h-3 rotate-180 group-hover:-translate-x-1 transition-transform" />
            </div>
          </a>
        ))}
      </div>

      {/* Quick Navigation Footer */}
      <div className="pt-4 border-t border-black/[0.04] dark:border-white/[0.06] flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
          <BookOpen className="w-3.5 h-3.5" />
          <span>المجال: الرياضيات الأساسية &gt; القيمة المنزلية</span>
        </div>

        <div className="flex items-center gap-1 text-slate-500 dark:text-slate-400">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
          <span>12 اختباراً تفاعلياً مع مقالات وشروحات تفصيلية</span>
        </div>
      </div>
    </aside>
  );
};
