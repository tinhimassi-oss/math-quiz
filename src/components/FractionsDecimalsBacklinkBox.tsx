import React from 'react';
import { ArrowRight, BookOpen, Compass, CheckCircle2 } from 'lucide-react';
import { useEyeTheme } from '../context/ThemeContext';
import { navigateTo } from '../navigation/router';

export interface RelatedFractionsDecimalsQuizInfo {
  id: string;
  title: string;
  emoji: string;
  mathSymbol: string;
  level: 'أساسي' | 'متوسط' | 'متقدم';
  url: string;
  relationReason: string;
}

export const ALL_FRACTIONS_DECIMALS_TESTS: Record<string, RelatedFractionsDecimalsQuizInfo> = {
  'decimals-identification-reading': {
    id: 'decimals-identification-reading',
    title: 'اختبار التعرف على الكسور العشرية وقراءتها',
    emoji: '',
    mathSymbol: '3.45',
    level: 'أساسي',
    url: '/math/fractions-decimals/identification-reading',
    relationReason: 'الخطوة التأسيسية الأولى لتمييز الفاصلة العشرية، والصيغ اللفظية والقياسية للأعداد العشرية',
  },
  'decimals-place-value': {
    id: 'decimals-place-value',
    title: 'اختبار القيمة المنزلية في الأعداد العشرية',
    emoji: '',
    mathSymbol: '4.679',
    level: 'أساسي',
    url: '/math/fractions-decimals/place-value',
    relationReason: 'تحديد منازل أجزاء العشرة والمئة والألف وحفظ المنزلة بالأصفار',
  },
  'decimals-comparing-ordering': {
    id: 'decimals-comparing-ordering',
    title: 'اختبار مقارنة وترتيب الأعداد العشرية',
    emoji: '',
    mathSymbol: '0.45 > 0.405',
    level: 'أساسي',
    url: '/math/fractions-decimals/comparing-ordering',
    relationReason: 'مقارنة الأعداد العشرية بإشارات > و < و = والترتيب التصاعدي والتنازلي بموازنة المنازل',
  },
  'decimals-rounding': {
    id: 'decimals-rounding',
    title: 'اختبار تقريب الأعداد العشرية',
    emoji: '',
    mathSymbol: '8.376 ≈ 8.4',
    level: 'متوسط',
    url: '/math/fractions-decimals/rounding',
    relationReason: 'تقريب العشريات لأقرب عدد كلي، جزء من عشرة، جزء من مئة بقواعد الأرقام الكريمة',
  },
  'converting-fractions-decimals': {
    id: 'converting-fractions-decimals',
    title: 'اختبار التحويل بين الكسور الاعتيادية والكسور العشرية',
    emoji: '',
    mathSymbol: '¾ = 0.75',
    level: 'متوسط',
    url: '/math/fractions-decimals/converting-fractions-decimals',
    relationReason: 'الربط المتكافئ بين الكسور الاعتيادية المشهورة والكسور العشرية والتبسيط',
  },
  'decimals-addition': {
    id: 'decimals-addition',
    title: 'اختبار جمع الأعداد العشرية',
    emoji: '',
    mathSymbol: '5.24 + 3.1 = 8.34',
    level: 'متوسط',
    url: '/math/fractions-decimals/addition',
    relationReason: 'إتقان محاذاة الفواصل العشرية عمودياً وأفقياً وجمع الكسور بإعادة التجميع',
  },
  'decimals-subtraction': {
    id: 'decimals-subtraction',
    title: 'اختبار طرح الأعداد العشرية',
    emoji: '',
    mathSymbol: '7.8 - 2.35 = 5.45',
    level: 'متوسط',
    url: '/math/fractions-decimals/subtraction',
    relationReason: 'طرح الأعداد العشرية وحالات الاستلاف عبر الأصفار وطرح عشري من عدد كلي',
  },
  'decimal-by-integer-multiplication': {
    id: 'decimal-by-integer-multiplication',
    title: 'اختبار ضرب عدد عشري في عدد صحيح',
    emoji: '',
    mathSymbol: '1.5 × 4 = 6',
    level: 'متوسط',
    url: '/math/fractions-decimals/by-integer-multiplication',
    relationReason: 'ضرب العشري في الأعداد الكلية وقوى العشرة وتحديد موقع الفاصلة بدقة',
  },
  'decimals-multiplication': {
    id: 'decimals-multiplication',
    title: 'اختبار ضرب الأعداد العشرية في بعضها',
    emoji: '',
    mathSymbol: '0.3 × 0.2 = 0.06',
    level: 'متقدم',
    url: '/math/fractions-decimals/multiplication',
    relationReason: 'قاعدة جمع المنازل العشرية في كلا العاملين لحساب حاصل ضرب كسرين عشريين',
  },
  'decimals-division': {
    id: 'decimals-division',
    title: 'اختبار قسمة الأعداد العشرية',
    emoji: '',
    mathSymbol: '4.8 ÷ 0.6 = 8',
    level: 'متقدم',
    url: '/math/fractions-decimals/division',
    relationReason: 'تحويل المقسوم عليه إلى عدد صحيح وقسمة العشريات على قوى 10',
  },
  'percentages-fractions-decimals': {
    id: 'percentages-fractions-decimals',
    title: 'اختبار النسبة المئوية والكسور العشرية والاعتيادية',
    emoji: '',
    mathSymbol: '40% = 0.4 = ⅖',
    level: 'متقدم',
    url: '/math/fractions-decimals/percentages',
    relationReason: 'التحويل الثلاثي بين النسب المئوية (%) والكسور العشرية والاعتيادية في أبسط صورة',
  },
  'decimals-word-problems': {
    id: 'decimals-word-problems',
    title: 'اختبار المسائل الكلامية والتطبيقية على الأعداد العشرية',
    emoji: '',
    mathSymbol: '2.5 + 4.75 = 7.25',
    level: 'متقدم',
    url: '/math/fractions-decimals/word-problems',
    relationReason: 'تطبيقات حياتية ومالية ومسائل القياس والأوزان وحساب التكاليف بالريال',
  },
};

const ORDERED_KEYS = [
  'decimals-identification-reading',
  'decimals-place-value',
  'decimals-comparing-ordering',
  'decimals-rounding',
  'converting-fractions-decimals',
  'decimals-addition',
  'decimals-subtraction',
  'decimal-by-integer-multiplication',
  'decimals-multiplication',
  'decimals-division',
  'percentages-fractions-decimals',
  'decimals-word-problems',
];

interface FractionsDecimalsBacklinkBoxProps {
  currentTestId: string;
  onGoFractionsDecimals?: () => void;
  className?: string;
}

export const FractionsDecimalsBacklinkBox: React.FC<FractionsDecimalsBacklinkBoxProps> = ({
  currentTestId,
  onGoFractionsDecimals,
  className = '',
}) => {
  const { themeClasses } = useEyeTheme();

  const currentIndex = ORDERED_KEYS.indexOf(currentTestId);
  const adjacentKeys = ORDERED_KEYS.filter((k) => k !== currentTestId).slice(
    currentIndex > 9 ? 6 : Math.max(0, currentIndex - 1),
    currentIndex > 9 ? 9 : Math.max(0, currentIndex - 1) + 3
  );

  const adjacentTests = adjacentKeys.map((key) => ALL_FRACTIONS_DECIMALS_TESTS[key]).filter(Boolean);

  const handleParentClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onGoFractionsDecimals) {
      onGoFractionsDecimals();
    } else {
      navigateTo('/domain/basic-math/fractions-decimals');
    }
  };

  const handleCardClick = (url: string, e: React.MouseEvent) => {
    e.preventDefault();
    navigateTo(url);
  };

  return (
    <aside
      aria-label="روابط سياقية واختبارات الكسور والأعداد العشرية المقترحة"
      className={`p-6 sm:p-8 rounded-2xl border ${themeClasses.border} ${themeClasses.cardBg} space-y-6 shadow-2xs text-right ${className}`}
    >
      {/* Category Backlink Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-5 border-b border-black/[0.06] dark:border-white/[0.08]">
        <div>
          <span className="text-[11px] font-bold text-[#127052] dark:text-[#5EB5A1] flex items-center gap-1.5 mb-1">
            <Compass className="w-3.5 h-3.5" />
            التنقل الهرمي وشبكة اختبارات الكسور والأعداد العشرية
          </span>
          <h3 className={`text-base sm:text-lg font-bold ${themeClasses.textPrimary}`}>
            التصنيف الشامل: الكسور والأعداد العشرية (12 اختباراً تخصصياً)
          </h3>
        </div>

        <button
          onClick={handleParentClick}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#127052] dark:text-[#5EB5A1] hover:underline self-start sm:self-auto cursor-pointer"
        >
          <span>تصفح كل اختبارات الكسور والأعداد العشرية</span>
          <ArrowRight className="w-3.5 h-3.5 rotate-180" />
        </button>
      </div>

      <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
        هذا الاختبار جزء من منظومة متكاملة من 12 اختباراً مصممة لبناء وتثبيت المهارات الحسابية والمفاهيمية للكسور والأعداد العشرية من القراءة والتحويل والعمليات الحسابية الأربع وحتى المسائل الحياتية. نوصي باستكمال الاختبارات المترابطة أدناه:
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
          <span>المجال: الرياضيات الأساسية &gt; الكسور والأعداد العشرية</span>
        </div>

        <div className="flex items-center gap-1 text-slate-500 dark:text-slate-400">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
          <span>12 اختباراً تفاعلياً مع مقالات وشروحات تفصيلية</span>
        </div>
      </div>
    </aside>
  );
};
