import React from 'react';
import { ArrowRight, BookOpen, Sparkles, Compass, CheckCircle2 } from 'lucide-react';
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

export const ALL_ADDITION_TESTS: Record<string, RelatedQuizInfo> = {
  'single-digit-addition': {
    id: 'single-digit-addition',
    title: 'اختبار جمع الأرقام الفردية من 1 إلى 10',
    emoji: '',
    mathSymbol: '3 + 5 = 8',
    level: 'أساسي',
    url: '/math/arithmetic/addition/single-digits',
    relationReason: 'الخطوة التأسيسية الأولى لتعلم حقائق الجمع المباشر',
  },
  'addition-within-20': {
    id: 'addition-within-20',
    title: 'الجمع ضمن العدد 20',
    emoji: '',
    mathSymbol: '8 + 7 = 15',
    level: 'أساسي',
    url: '/math/arithmetic/addition/within-20',
    relationReason: 'المستوى التالي لإتقان عبور حاجز العشرة واستراتيجية الضعف',
  },
  'addition-within-50': {
    id: 'addition-within-50',
    title: 'اختبار الجمع ضمن العدد 50',
    emoji: '',
    mathSymbol: '24 + 18 = 42',
    level: 'متوسط',
    url: '/math/arithmetic/addition/within-50',
    relationReason: 'تطوير مهارة جمع الأعداد المكونة من منزلتين مع الحمل الخفيف',
  },
  'addition-within-100': {
    id: 'addition-within-100',
    title: 'اختبار الجمع ضمن العدد 100',
    emoji: '',
    mathSymbol: '49 + 36 = 85',
    level: 'متقدم',
    url: '/math/arithmetic/addition/within-100',
    relationReason: 'الطلاقة الحسابية الكبرى ومتممات المئة للأعداد الكبيرة',
  },
  'fractions-addition': {
    id: 'fractions-addition',
    title: 'اختبار جمع الكسور',
    emoji: '',
    mathSymbol: '1/5 + 2/5 = 3/5',
    level: 'متوسط',
    url: '/math/arithmetic/addition/fractions',
    relationReason: 'تطبيق الجمع على الأجزاء والكسور الاعتيادية وتوحيد المقامات',
  },
  'decimals-addition': {
    id: 'decimals-addition',
    title: 'اختبار جمع الأعداد العشرية',
    emoji: '',
    mathSymbol: '0.3 + 0.5 = 0.8',
    level: 'متوسط',
    url: '/math/arithmetic/addition/decimals',
    relationReason: 'إتقان جمع الفواصل العشرية والأعشار الحسابية بدقة',
  },
  'missing-single-digits': {
    id: 'missing-single-digits',
    title: 'اختبار جمع الأرقام من 1 إلى 10 (الرقم المفقود)',
    emoji: '',
    mathSymbol: '1 + ؟ = 7',
    level: 'أساسي',
    url: '/math/arithmetic/addition/missing-single-digits',
    relationReason: 'تمرين العقل على التفكير العكسي وإيجاد المجهول البسيط',
  },
  'missing-within-20': {
    id: 'missing-within-20',
    title: 'اختبار الجمع ضمن العدد 20 (الرقم المفقود)',
    emoji: '',
    mathSymbol: '8 + ؟ = 15',
    level: 'أساسي',
    url: '/math/arithmetic/addition/missing-within-20',
    relationReason: 'تحدي تكوين العشرة واكتشاف المتمم المجهول حتى 20',
  },
  'missing-within-50': {
    id: 'missing-within-50',
    title: 'اختبار الجمع ضمن العدد 50 (الرقم المفقود)',
    emoji: '',
    mathSymbol: '24 + ؟ = 42',
    level: 'متوسط',
    url: '/math/arithmetic/addition/missing-within-50',
    relationReason: 'التفكير الجبري بالأعداد ثنائية المنزلة حتى 50',
  },
  'missing-within-100': {
    id: 'missing-within-100',
    title: 'اختبار الجمع ضمن العدد 100 (الرقم المفقود)',
    emoji: '',
    mathSymbol: '45 + ؟ = 100',
    level: 'متقدم',
    url: '/math/arithmetic/addition/missing-within-100',
    relationReason: 'إتقان متممات المئة والمعادلات الجبرية المتقدمة',
  },
  'missing-fractions': {
    id: 'missing-fractions',
    title: 'اختبار جمع الكسور (الرقم المفقود)',
    emoji: '',
    mathSymbol: '1/4 + ؟ = 3/4',
    level: 'متوسط',
    url: '/math/arithmetic/addition/missing-fractions',
    relationReason: 'حساب الكسر المجهول والمتممات الكسرية بطريقة تفاعلية',
  },
  'missing-decimals': {
    id: 'missing-decimals',
    title: 'اختبار جمع الأعداد العشرية (الرقم المفقود)',
    emoji: '',
    mathSymbol: '0.3 + ؟ = 0.8',
    level: 'متوسط',
    url: '/math/arithmetic/addition/missing-decimals',
    relationReason: 'اكتشاف الجزء العشري المفقود ومحاذاة الفواصل الذهنية',
  },
};

// Dynamic recommendation mapping: maps each quiz to 2 or 3 adjacent quizzes
const ADJACENT_MAP: Record<string, string[]> = {
  'single-digit-addition': ['addition-within-20', 'missing-single-digits'],
  'addition-within-20': ['single-digit-addition', 'addition-within-50', 'missing-within-20'],
  'addition-within-50': ['addition-within-20', 'addition-within-100', 'missing-within-50'],
  'addition-within-100': ['addition-within-50', 'missing-within-100', 'decimals-addition'],
  'fractions-addition': ['missing-fractions', 'decimals-addition', 'addition-within-20'],
  'decimals-addition': ['fractions-addition', 'missing-decimals', 'addition-within-100'],
  'missing-single-digits': ['single-digit-addition', 'missing-within-20'],
  'missing-within-20': ['missing-single-digits', 'missing-within-50', 'addition-within-20'],
  'missing-within-50': ['missing-within-20', 'missing-within-100', 'addition-within-50'],
  'missing-within-100': ['missing-within-50', 'addition-within-100', 'missing-decimals'],
  'missing-fractions': ['fractions-addition', 'missing-decimals', 'missing-within-20'],
  'missing-decimals': ['decimals-addition', 'missing-fractions', 'missing-within-100'],
};

interface AdditionBacklinkBoxProps {
  currentQuizId: string;
  onGoAdditionTests?: () => void;
  className?: string;
}

export const AdditionBacklinkBox: React.FC<AdditionBacklinkBoxProps> = ({
  currentQuizId,
  onGoAdditionTests,
  className = '',
}) => {
  const { themeClasses } = useEyeTheme();

  const handleGoCategory = () => {
    if (onGoAdditionTests) {
      onGoAdditionTests();
    } else {
      navigateTo('/domain/basic-math/basic-arithmetic/addition-tests');
    }
  };

  const handleNavigate = (url: string) => {
    navigateTo(url);
  };

  const relatedIds = ADJACENT_MAP[currentQuizId] || ['addition-within-20', 'missing-single-digits'];
  const relatedQuizzes = relatedIds.map((id) => ALL_ADDITION_TESTS[id]).filter(Boolean);

  return (
    <aside
      aria-label="نظام الربط الداخلي والاختبارات ذات الصلة"
      className={`rounded-2xl border ${themeClasses.border} ${themeClasses.cardBg} p-5 sm:p-7 space-y-6 shadow-2xs mt-6 ${className}`}
    >
      {/* 1. Primary Backlink Header: Return to Parent Category */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-black/[0.06] dark:border-white/[0.08]">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#127052] dark:text-[#5EB5A1]">
            <BookOpen className="w-4 h-4" />
            <span>التصنيف المظلي الرئيسي: اختبارات الجمع</span>
          </div>
          <p className={`text-xs ${themeClasses.textSecondary}`}>
            تصفح جميع المراحل الـ 12 المتدرجة من جمع الأرقام المفردة حتى الكسور والأعداد العشرية ونظام الرقم المفقود.
          </p>
        </div>

        <button
          onClick={handleGoCategory}
          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-[#127052] hover:bg-[#0e5840] text-white shadow-2xs transition-all cursor-pointer shrink-0"
        >
          <span>دليل واختبارات الجمع كاملة (12)</span>
          <ArrowRight className="w-4 h-4 rotate-180" />
        </button>
      </div>

      {/* 2. Smart Adjacent Quizzes Section */}
      <div className="space-y-3.5">
        <div className="flex items-center justify-between">
          <h3 className={`text-sm sm:text-base font-bold ${themeClasses.textPrimary} flex items-center gap-2`}>
            <Compass className="w-4 h-4 text-[#127052] dark:text-[#5EB5A1]" />
            <span>اختبارات ذات صلة بمهارتك ومستواك الحالي</span>
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
          نصيحة تعليمية: يُنصح بحل اختبارات الجمع المباشر أولاً ثم الانتقال إلى اختبارات <strong>الرقم المفقود</strong> لنفس الفئة لبناء مرونة التفكير الجبري وعكس العمليات.
        </span>
      </div>
    </aside>
  );
};
