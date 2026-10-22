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

export const ALL_DIVISION_TESTS: Record<string, RelatedQuizInfo> = {
  'single-digit-division': {
    id: 'single-digit-division',
    title: 'اختبار قسمة الأعداد البسيطة حتى 10',
    emoji: '',
    mathSymbol: '6 ÷ 2 = 3',
    level: 'أساسي',
    url: '/math/arithmetic/division/single-digits',
    relationReason: 'الخطوة التأسيسية الأولى لفهم التوزيع العادل والمجموعات المتساوية',
  },
  'division-within-20': {
    id: 'division-within-20',
    title: 'اختبار القسمة ضمن العدد 20',
    emoji: '',
    mathSymbol: '18 ÷ 3 = 6',
    level: 'أساسي',
    url: '/math/arithmetic/division/within-20',
    relationReason: 'المستوى التالي لإتقان حقائق القسمة حتى 20 والتنصيف الفوري',
  },
  'division-within-50': {
    id: 'division-within-50',
    title: 'اختبار القسمة ضمن العدد 50',
    emoji: '',
    mathSymbol: '48 ÷ 4 = 12',
    level: 'متوسط',
    url: '/math/arithmetic/division/within-50',
    relationReason: 'تطوير مهارة تفكيك المقسوم إلى أجزاء سهلة وتوزيع القسمة',
  },
  'division-within-100': {
    id: 'division-within-100',
    title: 'اختبار القسمة ضمن العدد 100',
    emoji: '',
    mathSymbol: '96 ÷ 8 = 12',
    level: 'متقدم',
    url: '/math/arithmetic/division/within-100',
    relationReason: 'الطلاقة الحسابية الكبرى ومضاعفات العشرة والتحضير للقسمة المطولة',
  },
  'fractions-division': {
    id: 'fractions-division',
    title: 'اختبار قسمة الكسور',
    emoji: '',
    mathSymbol: '(2/3) ÷ (1/2) = 4/3',
    level: 'متوسط',
    url: '/math/arithmetic/division/fractions',
    relationReason: 'تطبيق القسمة على الكسور وقاعدة قلب الكسر الثاني وتبسيط النتيجة',
  },
  'decimals-division': {
    id: 'decimals-division',
    title: 'اختبار قسمة الأعداد العشرية',
    emoji: '',
    mathSymbol: '4.8 ÷ 2 = 2.4',
    level: 'متوسط',
    url: '/math/arithmetic/division/decimals',
    relationReason: 'إتقان تحريك الفواصل العشرية وقسمة الأعشار بدقة متناهية',
  },
  'missing-single-digits-division': {
    id: 'missing-single-digits-division',
    title: 'اختبار قسمة الأعداد من 1 إلى 10 (الرقم المفقود)',
    emoji: '',
    mathSymbol: '8 ÷ ؟ = 4',
    level: 'أساسي',
    url: '/math/arithmetic/division/missing-single-digits',
    relationReason: 'تمرين العقل على التفكير العكسي وإيجاد المقسوم أو المقسوم عليه',
  },
  'missing-within-20-division': {
    id: 'missing-within-20-division',
    title: 'اختبار القسمة ضمن العدد 20 (الرقم المفقود)',
    emoji: '',
    mathSymbol: '16 ÷ ؟ = 4',
    level: 'أساسي',
    url: '/math/arithmetic/division/missing-within-20',
    relationReason: 'تحدي استنتاج المجهول حتى 20 وتحويل القسمة إلى ضرب فوري',
  },
  'missing-within-50-division': {
    id: 'missing-within-50-division',
    title: 'اختبار القسمة ضمن العدد 50 (الرقم المفقود)',
    emoji: '',
    mathSymbol: '45 ÷ ؟ = 9',
    level: 'متوسط',
    url: '/math/arithmetic/division/missing-within-50',
    relationReason: 'التفكير الجبري بالأعداد ثنائية المنزلة وموازنة طرفي المعادلة',
  },
  'missing-within-100-division': {
    id: 'missing-within-100-division',
    title: 'اختبار القسمة ضمن العدد 100 (الرقم المفقود)',
    emoji: '',
    mathSymbol: '84 ÷ ؟ = 7',
    level: 'متقدم',
    url: '/math/arithmetic/division/missing-within-100',
    relationReason: 'إتقان مجاهيل القسمة الكبرى واستنتاج المقسوم ذهنياً بسرعة',
  },
  'missing-fractions-division': {
    id: 'missing-fractions-division',
    title: 'اختبار قسمة الكسور (الرقم المفقود)',
    emoji: '',
    mathSymbol: '(1/2) ÷ ؟ = 1/4',
    level: 'متوسط',
    url: '/math/arithmetic/division/missing-fractions',
    relationReason: 'حساب الكسر المجهول والمقلوب الكسري بطريقة تفاعلية بصرية',
  },
  'missing-decimals-division': {
    id: 'missing-decimals-division',
    title: 'اختبار قسمة الأعداد العشرية (الرقم المفقود)',
    emoji: '',
    mathSymbol: '2.4 ÷ ؟ = 1.2',
    level: 'متوسط',
    url: '/math/arithmetic/division/missing-decimals',
    relationReason: 'اكتشاف المقسوم عليه العشري المفقود وملاحظة حركة الفواصل',
  },
};

// Dynamic recommendation mapping: maps each quiz to 2 or 3 adjacent quizzes
const ADJACENT_MAP: Record<string, string[]> = {
  'single-digit-division': ['division-within-20', 'missing-single-digits-division'],
  'division-within-20': ['single-digit-division', 'division-within-50', 'missing-within-20-division'],
  'division-within-50': ['division-within-20', 'division-within-100', 'missing-within-50-division'],
  'division-within-100': ['division-within-50', 'missing-within-100-division', 'decimals-division'],
  'fractions-division': ['missing-fractions-division', 'decimals-division', 'division-within-20'],
  'decimals-division': ['fractions-division', 'missing-decimals-division', 'division-within-100'],
  'missing-single-digits-division': ['single-digit-division', 'missing-within-20-division'],
  'missing-within-20-division': ['missing-single-digits-division', 'missing-within-50-division', 'division-within-20'],
  'missing-within-50-division': ['missing-within-20-division', 'missing-within-100-division', 'division-within-50'],
  'missing-within-100-division': ['missing-within-50-division', 'division-within-100', 'missing-decimals-division'],
  'missing-fractions-division': ['fractions-division', 'missing-decimals-division', 'missing-within-20-division'],
  'missing-decimals-division': ['decimals-division', 'missing-fractions-division', 'missing-within-100-division'],
};

interface DivisionBacklinkBoxProps {
  currentQuizId: string;
  onGoDivisionTests?: () => void;
  className?: string;
}

export const DivisionBacklinkBox: React.FC<DivisionBacklinkBoxProps> = ({
  currentQuizId,
  onGoDivisionTests,
  className = '',
}) => {
  const { themeClasses } = useEyeTheme();

  const handleGoCategory = () => {
    if (onGoDivisionTests) {
      onGoDivisionTests();
    } else {
      navigateTo('/domain/basic-math/basic-arithmetic/division-tests');
    }
  };

  const handleNavigate = (url: string) => {
    navigateTo(url);
  };

  const relatedIds = ADJACENT_MAP[currentQuizId] || ['division-within-20', 'missing-single-digits-division'];
  const relatedQuizzes = relatedIds.map((id) => ALL_DIVISION_TESTS[id]).filter(Boolean);

  return (
    <aside
      aria-label="نظام الربط الداخلي واختبارات القسمة ذات الصلة"
      className={`rounded-2xl border ${themeClasses.border} ${themeClasses.cardBg} p-5 sm:p-7 space-y-6 shadow-2xs mt-6 ${className}`}
    >
      {/* 1. Primary Backlink Header: Return to Parent Category */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-black/[0.06] dark:border-white/[0.08]">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#127052] dark:text-[#5EB5A1]">
            <BookOpen className="w-4 h-4" />
            <span>التصنيف المظلي الرئيسي: اختبارات القسمة</span>
          </div>
          <p className={`text-xs ${themeClasses.textSecondary}`}>
            تصفح جميع المراحل الـ 12 المتدرجة من قسمة الأرقام البسيطة حتى الكسور والأعداد العشرية ونظام الرقم المفقود في القسمة.
          </p>
        </div>

        <button
          onClick={handleGoCategory}
          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-[#127052] hover:bg-[#0e5840] text-white shadow-2xs transition-all cursor-pointer shrink-0"
        >
          <span>دليل واختبارات القسمة كاملة (12)</span>
          <ArrowRight className="w-4 h-4 rotate-180" />
        </button>
      </div>

      {/* 2. Smart Adjacent Quizzes Section */}
      <div className="space-y-3.5">
        <div className="flex items-center justify-between">
          <h3 className={`text-sm sm:text-base font-bold ${themeClasses.textPrimary} flex items-center gap-2`}>
            <Compass className="w-4 h-4 text-[#127052] dark:text-[#5EB5A1]" />
            <span>اختبارات قسمة ذات صلة بمهارتك ومستواك الحالي</span>
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
          نصيحة تعليمية: يُنصح بإتقان اختبارات القسمة المباشرة أولاً ثم الانتقال إلى اختبارات <strong>الرقم المفقود في القسمة</strong> لتعزيز فهم العلاقة العكسية بين الضرب والقسمة واكتشاف المقسوم والمقسوم عليه.
        </span>
      </div>
    </aside>
  );
};
