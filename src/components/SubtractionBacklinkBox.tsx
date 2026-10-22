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

export const ALL_SUBTRACTION_TESTS: Record<string, RelatedQuizInfo> = {
  'single-digit-subtraction': {
    id: 'single-digit-subtraction',
    title: 'اختبار طرح الأرقام من 1 إلى 10',
    emoji: '➖',
    mathSymbol: '8 - 3 = 5',
    level: 'أساسي',
    url: '/math/arithmetic/subtraction/single-digits',
    relationReason: 'الخطوة التأسيسية الأولى لفهم النقصان والعد التنازلي',
  },
  'subtraction-within-20': {
    id: 'subtraction-within-20',
    title: 'اختبار الطرح ضمن العدد 20',
    emoji: '🔟',
    mathSymbol: '15 - 7 = 8',
    level: 'أساسي',
    url: '/math/arithmetic/subtraction/within-20',
    relationReason: 'المستوى التالي لإتقان عبور حاجز العشرة واستراتيجية الرجوع للـ 10',
  },
  'subtraction-within-50': {
    id: 'subtraction-within-50',
    title: 'اختبار الطرح ضمن العدد 50',
    emoji: '🔢',
    mathSymbol: '42 - 18 = 24',
    level: 'متوسط',
    url: '/math/arithmetic/subtraction/within-50',
    relationReason: 'تطوير مهارة طرح الأعداد ثنائية المنزلة والاستلاف الخفيف',
  },
  'subtraction-within-100': {
    id: 'subtraction-within-100',
    title: 'اختبار الطرح ضمن العدد 100',
    emoji: '💯',
    mathSymbol: '85 - 36 = 49',
    level: 'متقدم',
    url: '/math/arithmetic/subtraction/within-100',
    relationReason: 'الطلاقة الحسابية الكبرى ومتممات المئة والاستلاف المتقدم',
  },
  'fractions-subtraction': {
    id: 'fractions-subtraction',
    title: 'اختبار طرح الكسور',
    emoji: '➗',
    mathSymbol: '4/5 - 1/5 = 3/5',
    level: 'متوسط',
    url: '/math/arithmetic/subtraction/fractions',
    relationReason: 'تطبيق الطرح على الأجزاء والكسور وتوحيد المقامات والتبسيط',
  },
  'decimals-subtraction': {
    id: 'decimals-subtraction',
    title: 'اختبار طرح الأعداد العشرية',
    emoji: '🔢',
    mathSymbol: '0.9 - 0.4 = 0.5',
    level: 'متوسط',
    url: '/math/arithmetic/subtraction/decimals',
    relationReason: 'إتقان طرح الفواصل العشرية والأعشار الحسابية بدقة متناهية',
  },
  'missing-single-digits-subtraction': {
    id: 'missing-single-digits-subtraction',
    title: 'اختبار طرح الأرقام من 1 إلى 10 (الرقم المفقود)',
    emoji: '❓',
    mathSymbol: '7 - ؟ = 3',
    level: 'أساسي',
    url: '/math/arithmetic/subtraction/missing-single-digits',
    relationReason: 'تمرين العقل على التفكير العكسي وإيجاد المجهول البسيط في الطرح',
  },
  'missing-within-20-subtraction': {
    id: 'missing-within-20-subtraction',
    title: 'اختبار الطرح ضمن العدد 20 (الرقم المفقود)',
    emoji: '🔟',
    mathSymbol: '15 - ؟ = 8',
    level: 'أساسي',
    url: '/math/arithmetic/subtraction/missing-within-20',
    relationReason: 'تحدي استنتاج المطروح أو المطروح منه حتى 20',
  },
  'missing-within-50-subtraction': {
    id: 'missing-within-50-subtraction',
    title: 'اختبار الطرح ضمن العدد 50 (الرقم المفقود)',
    emoji: '🔢',
    mathSymbol: '42 - ؟ = 24',
    level: 'متوسط',
    url: '/math/arithmetic/subtraction/missing-within-50',
    relationReason: 'التفكير الجبري بالأعداد ثنائية المنزلة وموازنة الطرفين حتى 50',
  },
  'missing-within-100-subtraction': {
    id: 'missing-within-100-subtraction',
    title: 'اختبار الطرح ضمن العدد 100 (الرقم المفقود)',
    emoji: '💯',
    mathSymbol: '100 - ؟ = 45',
    level: 'متقدم',
    url: '/math/arithmetic/subtraction/missing-within-100',
    relationReason: 'إتقان متممات المئة والمعادلات المركبة وسرعة البديهة الحسابية',
  },
  'missing-fractions-subtraction': {
    id: 'missing-fractions-subtraction',
    title: 'اختبار طرح الكسور (الرقم المفقود)',
    emoji: '➗',
    mathSymbol: '3/4 - ؟ = 1/4',
    level: 'متوسط',
    url: '/math/arithmetic/subtraction/missing-fractions',
    relationReason: 'حساب الكسر المجهول والمتممات الكسرية بطريقة تفاعلية بصرية',
  },
  'missing-decimals-subtraction': {
    id: 'missing-decimals-subtraction',
    title: 'اختبار طرح الأعداد العشرية (الرقم المفقود)',
    emoji: '🔢',
    mathSymbol: '0.8 - ؟ = 0.3',
    level: 'متوسط',
    url: '/math/arithmetic/subtraction/missing-decimals',
    relationReason: 'اكتشاف الجزء العشري المفقود ومحاذاة الفواصل الذهنية',
  },
};

// Dynamic recommendation mapping: maps each quiz to 2 or 3 adjacent quizzes
const ADJACENT_MAP: Record<string, string[]> = {
  'single-digit-subtraction': ['subtraction-within-20', 'missing-single-digits-subtraction'],
  'subtraction-within-20': ['single-digit-subtraction', 'subtraction-within-50', 'missing-within-20-subtraction'],
  'subtraction-within-50': ['subtraction-within-20', 'subtraction-within-100', 'missing-within-50-subtraction'],
  'subtraction-within-100': ['subtraction-within-50', 'missing-within-100-subtraction', 'decimals-subtraction'],
  'fractions-subtraction': ['missing-fractions-subtraction', 'decimals-subtraction', 'subtraction-within-20'],
  'decimals-subtraction': ['fractions-subtraction', 'missing-decimals-subtraction', 'subtraction-within-100'],
  'missing-single-digits-subtraction': ['single-digit-subtraction', 'missing-within-20-subtraction'],
  'missing-within-20-subtraction': ['missing-single-digits-subtraction', 'missing-within-50-subtraction', 'subtraction-within-20'],
  'missing-within-50-subtraction': ['missing-within-20-subtraction', 'missing-within-100-subtraction', 'subtraction-within-50'],
  'missing-within-100-subtraction': ['missing-within-50-subtraction', 'subtraction-within-100', 'missing-decimals-subtraction'],
  'missing-fractions-subtraction': ['fractions-subtraction', 'missing-decimals-subtraction', 'missing-within-20-subtraction'],
  'missing-decimals-subtraction': ['decimals-subtraction', 'missing-fractions-subtraction', 'missing-within-100-subtraction'],
};

interface SubtractionBacklinkBoxProps {
  currentQuizId: string;
  onGoSubtractionTests?: () => void;
  className?: string;
}

export const SubtractionBacklinkBox: React.FC<SubtractionBacklinkBoxProps> = ({
  currentQuizId,
  onGoSubtractionTests,
  className = '',
}) => {
  const { themeClasses } = useEyeTheme();

  const handleGoCategory = () => {
    if (onGoSubtractionTests) {
      onGoSubtractionTests();
    } else {
      navigateTo('/domain/basic-math/basic-arithmetic/subtraction-tests');
    }
  };

  const handleNavigate = (url: string) => {
    navigateTo(url);
  };

  const relatedIds = ADJACENT_MAP[currentQuizId] || ['subtraction-within-20', 'missing-single-digits-subtraction'];
  const relatedQuizzes = relatedIds.map((id) => ALL_SUBTRACTION_TESTS[id]).filter(Boolean);

  return (
    <aside
      aria-label="نظام الربط الداخلي واختبارات الطرح ذات الصلة"
      className={`rounded-2xl border ${themeClasses.border} ${themeClasses.cardBg} p-5 sm:p-7 space-y-6 shadow-2xs mt-6 ${className}`}
    >
      {/* 1. Primary Backlink Header: Return to Parent Category */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-black/[0.06] dark:border-white/[0.08]">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#127052] dark:text-[#5EB5A1]">
            <BookOpen className="w-4 h-4" />
            <span>التصنيف المظلي الرئيسي: اختبارات الطرح</span>
          </div>
          <p className={`text-xs ${themeClasses.textSecondary}`}>
            تصفح جميع المراحل الـ 12 المتدرجة من طرح الأرقام المفردة حتى الكسور والأعداد العشرية ونظام الرقم المفقود في الطرح.
          </p>
        </div>

        <button
          onClick={handleGoCategory}
          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-[#127052] hover:bg-[#0e5840] text-white shadow-2xs transition-all cursor-pointer shrink-0"
        >
          <span>دليل واختبارات الطرح كاملة (12)</span>
          <ArrowRight className="w-4 h-4 rotate-180" />
        </button>
      </div>

      {/* 2. Smart Adjacent Quizzes Section */}
      <div className="space-y-3.5">
        <div className="flex items-center justify-between">
          <h3 className={`text-sm sm:text-base font-bold ${themeClasses.textPrimary} flex items-center gap-2`}>
            <Compass className="w-4 h-4 text-[#127052] dark:text-[#5EB5A1]" />
            <span>اختبارات طرح ذات صلة بمهارتك ومستواك الحالي</span>
          </h3>
          <span className={`text-[11px] ${themeClasses.textMuted}`}>
            مسار التدرج المقترح
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {relatedQuizzes.map((quiz) => {
            const isAdvance = quiz.level === 'متقدم';
            const isIntermediate = quiz.level === 'متوسط';

            return (
              <div
                key={quiz.id}
                onClick={() => handleNavigate(quiz.url)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    handleNavigate(quiz.url);
                  }
                }}
                className={`p-4 rounded-xl border ${themeClasses.border} ${themeClasses.cardHoverBg} flex flex-col justify-between gap-3 text-right cursor-pointer transition-all hover:scale-[1.01] hover:border-[#127052]/50 group`}
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xl p-1.5 rounded-lg bg-black/[0.03] dark:bg-white/[0.04]">
                      {quiz.emoji}
                    </span>
                    <span
                      className={`text-[10px] px-2 py-0.5 rounded-full font-semibold ${
                        isAdvance
                          ? 'bg-rose-50 text-rose-700 dark:bg-rose-950/40 dark:text-rose-300'
                          : isIntermediate
                          ? 'bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-300'
                          : 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300'
                      }`}
                    >
                      {quiz.level}
                    </span>
                  </div>

                  <h4 className={`text-xs sm:text-sm font-bold ${themeClasses.textPrimary} group-hover:text-[#127052] dark:group-hover:text-[#5EB5A1] transition-colors line-clamp-1`}>
                    {quiz.title}
                  </h4>

                  <p className={`text-[11px] ${themeClasses.textMuted} line-clamp-2 leading-relaxed`}>
                    {quiz.relationReason}
                  </p>
                </div>

                <div className="pt-2 border-t border-black/[0.04] dark:border-white/[0.04] flex items-center justify-between text-[11px] font-sans">
                  <span className="font-semibold px-2 py-0.5 rounded bg-black/[0.03] dark:bg-white/[0.05] text-slate-600 dark:text-slate-300">
                    {quiz.mathSymbol}
                  </span>
                  <span className="text-[#127052] dark:text-[#5EB5A1] font-bold group-hover:underline flex items-center gap-1 font-arabic">
                    <span>خوض الاختبار</span>
                    <ArrowRight className="w-3 h-3 rotate-180" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Helpful Interlinking Context Banner */}
      <div className="p-3.5 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.04] dark:border-white/[0.04] flex items-center gap-2.5 text-xs text-slate-600 dark:text-slate-400">
        <CheckCircle2 className="w-4 h-4 text-[#127052] dark:text-[#5EB5A1] shrink-0" />
        <span>
          نصيحة تعليمية: يُنصح بإتقان اختبارات الطرح المباشر أولاً ثم الانتقال إلى اختبارات <strong>الرقم المفقود في الطرح</strong> لتعزيز فهم الفرق بين المجهول الأول (المطروح منه) والمجهول الثاني (المطروح).
        </span>
      </div>
    </aside>
  );
};
