import React from 'react';
import { ArrowRight, BookOpen, Layers } from 'lucide-react';
import { useEyeTheme } from '../context/ThemeContext';
import { navigateTo } from '../navigation/router';

export interface RelatedWordProblemsQuizInfo {
  id: string;
  title: string;
  emoji: string;
  mathSymbol: string;
  level: 'أساسي' | 'متوسط' | 'متقدم';
  url: string;
  relationReason: string;
}

export const ALL_WORD_PROBLEMS_TESTS: Record<string, RelatedWordProblemsQuizInfo> = {
  'translating-words-to-equations': {
    id: 'translating-words-to-equations',
    title: 'ترجمة النصوص والكلام إلى معادلات ورموز رياضية (Translating Word Problems into Equations)',
    emoji: '✍️',
    mathSymbol: '3x + 5 = 26 ⇒ x = 7',
    level: 'أساسي',
    url: '/domain/applied-financial-math/word-problems/translating-words-to-equations',
    relationReason: 'المهارة التأسيسية الأولى لتحويل الكلمات اللفظية ومفردات الزيادة والنقصان إلى متغيرات جبرية',
  },
  'distance-rate-time-problems': {
    id: 'distance-rate-time-problems',
    title: 'مسائل الحركة والسرعة والمسافة والزمن (Distance, Rate & Time)',
    emoji: '🚗',
    mathSymbol: 'd = v · t, v_rel',
    level: 'أساسي',
    url: '/domain/applied-financial-math/word-problems/distance-rate-time-problems',
    relationReason: 'السرعة النسبية في اتجاهين متعاكسين وفي نفس الاتجاه، وتأثير التيارات والرياح والسرعة المتوسطة',
  },
  'work-rate-problems': {
    id: 'work-rate-problems',
    title: 'مسائل العمل المشترك ومعدلات الإنجاز (Work Rate Problems)',
    emoji: '👷',
    mathSymbol: '1/T = 1/t₁ + 1/t₂',
    level: 'متوسط',
    url: '/domain/applied-financial-math/word-problems/work-rate-problems',
    relationReason: 'جمع معدلات الإنجاز اليومية، كفاءة الفرق المتعددة، ومعدل ملء وتفريغ الخزانات بالصمامات',
  },
  'mixture-solution-alloy-problems': {
    id: 'mixture-solution-alloy-problems',
    title: 'مسائل الخلط والمحاليل والسبائك (Mixture Problems)',
    emoji: '🧪',
    mathSymbol: 'C₁V₁ + C₂V₂ = C_f V_f',
    level: 'متوسط',
    url: '/domain/applied-financial-math/word-problems/mixture-solution-alloy-problems',
    relationReason: 'قانون حفظ المادة النقية الفعالة، تخفيف المحاليل الحمضية، وعيارات سبائك الذهب والمعادن',
  },
  'ratio-proportion-division-problems': {
    id: 'ratio-proportion-division-problems',
    title: 'مسائل النسبة والتناسب والتقسيم التناسبي (Ratio & Proportion)',
    emoji: '⚖️',
    mathSymbol: 'a : b, Share = Total(p/∑p)',
    level: 'أساسي',
    url: '/domain/applied-financial-math/word-problems/ratio-proportion-division-problems',
    relationReason: 'حساب قيمة الجزء الواحد، التناسب الطردي والعكسي، وتقسيم التركات والشراكات التجارية',
  },
  'age-word-problems': {
    id: 'age-word-problems',
    title: 'مسائل الأعمار والزمن المستقبلي والماضي (Age Word Problems)',
    emoji: '⏳',
    mathSymbol: 'Past, Present, Future',
    level: 'أساسي',
    url: '/domain/applied-financial-math/word-problems/age-word-problems',
    relationReason: 'ثبات فارق العمر عبر الزمن، ومصفوفة المتغيرات للأعمار قبل سنوات وبعد سنوات في العائلات',
  },
  'profit-loss-discount-tax-problems': {
    id: 'profit-loss-discount-tax-problems',
    title: 'مسائل الربح والخسارة والخصم والضريبة التجارية (Profit, Loss, Discount & Tax)',
    emoji: '🏷️',
    mathSymbol: 'SP = CP(1 + r)(1 - d)',
    level: 'متوسط',
    url: '/domain/applied-financial-math/word-problems/profit-loss-discount-tax-problems',
    relationReason: 'سلسلة التسعير من التكلفة إلى السعر المعلن، الخصومات المتتالية، وضريبة القيمة المضافة VAT',
  },
  'investment-interest-word-problems': {
    id: 'investment-interest-word-problems',
    title: 'مسائل الاستثمار وتوزيع الأرباح والفوائد (Investment Word Problems)',
    emoji: '📈',
    mathSymbol: 'r₁x + r₂(P - x) = I',
    level: 'متوسط',
    url: '/domain/applied-financial-math/word-problems/investment-interest-word-problems',
    relationReason: 'تقسيم رؤوس الأموال بين أوعية متعددة العوائد، حساب العائد الموزون وقاعدة 72 لمضاعفة الثروة',
  },
  'geometric-perimeter-area-problems': {
    id: 'geometric-perimeter-area-problems',
    title: 'مسائل الأشكال الهندسية والمحيط والمساحات التطبيقية (Geometric Word Problems)',
    emoji: '📐',
    mathSymbol: 'P = 2(L + W), A = L · W',
    level: 'متوسط',
    url: '/domain/applied-financial-math/word-problems/geometric-perimeter-area-problems',
    relationReason: 'أبعاد المستطيل ونصف المحيط، تكاليف الأسوار والممرات المحيطة، وتطبيقات نظرية فيثاغورس',
  },
  'consecutive-integers-number-relations': {
    id: 'consecutive-integers-number-relations',
    title: 'مسائل الأعداد الصحيحة المتتالية والعلاقات الرقمية (Consecutive Integers)',
    emoji: '🔢',
    mathSymbol: 'n, n + 1, n + 2, 10t + u',
    level: 'أساسي',
    url: '/domain/applied-financial-math/word-problems/consecutive-integers-number-relations',
    relationReason: 'الأعداد الفردية والزوجية المتتالية، حيلة المتوسط الحسابي، ومسائل منازل الآحاد والعشرات',
  },
  'amortization-savings-scenarios': {
    id: 'amortization-savings-scenarios',
    title: 'مسائل استهلاك القروض والخطط الادخارية الحياتية (Amortization & Savings)',
    emoji: '💰',
    mathSymbol: '50/30/20 Budgeting',
    level: 'متوسط',
    url: '/domain/applied-financial-math/word-problems/amortization-savings-scenarios',
    relationReason: 'استقطاع نسب الادخار من الرواتب، جدولة سداد الديون، وتوزيع الميزانية وصناديق الطوارئ',
  },
  'optimization-applied-word-problems': {
    id: 'optimization-applied-word-problems',
    title: 'مسائل التجميع والتحسين الأمثل الشاملة (Optimization & Applied Problems)',
    emoji: '🎯',
    mathSymbol: 'max f(x), min C(x)',
    level: 'متقدم',
    url: '/domain/applied-financial-math/word-problems/optimization-applied-word-problems',
    relationReason: 'تعظيم المساحات بقيود الأسوار، التسعير الديناميكي لتعظيم الإيرادات، وتصميم العبوات الأسطوانية',
  },
};

interface WordProblemsBacklinkBoxProps {
  currentQuizId: string;
  relatedIds?: string[];
  maxItems?: number;
}

export const WordProblemsBacklinkBox: React.FC<WordProblemsBacklinkBoxProps> = ({
  currentQuizId,
  relatedIds,
  maxItems = 3,
}) => {
  const { themeClasses } = useEyeTheme();

  // Pick related quizzes or fallback to other top quizzes
  const targetIds =
    relatedIds && relatedIds.length > 0
      ? relatedIds.filter((id) => id !== currentQuizId)
      : Object.keys(ALL_WORD_PROBLEMS_TESTS)
          .filter((id) => id !== currentQuizId)
          .slice(0, maxItems);

  const displayedTests = targetIds
    .map((id) => ALL_WORD_PROBLEMS_TESTS[id])
    .filter(Boolean)
    .slice(0, maxItems);

  if (displayedTests.length === 0) return null;

  return (
    <aside
      aria-label="اختبارات المسائل الكلامية ذات الصلة"
      className={`rounded-2xl border ${themeClasses.border} ${themeClasses.cardBg} p-5 sm:p-6 shadow-sm transition-all text-right mt-8`}
    >
      <div className="flex items-center justify-between gap-3 mb-4 border-b border-black/5 dark:border-white/5 pb-3">
        <div className="flex items-center gap-2">
          <Layers className="w-5 h-5 text-rose-600 dark:text-rose-400" />
          <h3 className={`text-base sm:text-lg font-bold ${themeClasses.textPrimary}`}>
            اختبارات المسائل الكلامية والتطبيقية ذات الصلة
          </h3>
        </div>
        <span className="text-xs px-2.5 py-1 rounded-full bg-rose-500/10 text-rose-700 dark:text-rose-300 font-medium">
          ترابط الأنماط الرياضية
        </span>
      </div>

      <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} mb-4 leading-relaxed`}>
        لتعميق مهارتك في فك شفرات المسائل اللفظية وتحويلها إلى حلول جبرية سريعة، ننصحك باجتياز
        هذه الاختبارات المترابطة:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {displayedTests.map((test) => (
          <button
            key={test.id}
            onClick={() => navigateTo(test.url)}
            className={`group flex flex-col justify-between text-right p-3.5 rounded-xl border border-black/5 dark:border-white/5 hover:border-rose-500/40 hover:bg-rose-50/50 dark:hover:bg-rose-950/20 transition-all duration-200 cursor-pointer`}
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xl" role="img" aria-label={test.title}>
                  {test.emoji}
                </span>
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-md font-semibold ${
                    test.level === 'أساسي'
                      ? 'bg-blue-500/10 text-blue-700 dark:text-blue-300'
                      : test.level === 'متوسط'
                      ? 'bg-amber-500/10 text-amber-700 dark:text-amber-300'
                      : 'bg-rose-500/10 text-rose-700 dark:text-rose-300'
                  }`}
                >
                  {test.level}
                </span>
              </div>
              <h4
                className={`text-xs sm:text-sm font-bold ${themeClasses.textPrimary} group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors line-clamp-2 mb-1.5`}
              >
                {test.title}
              </h4>
              <p
                className={`text-[11px] ${themeClasses.textSecondary} line-clamp-2 leading-relaxed mb-2`}
              >
                {test.relationReason}
              </p>
            </div>

            <div className="pt-2 border-t border-black/5 dark:border-white/5 flex items-center justify-between text-[11px] text-rose-600 dark:text-rose-400 font-medium">
              <span className="font-mono text-[10px] text-gray-500 dark:text-gray-400">
                {test.mathSymbol}
              </span>
              <span className="flex items-center gap-1 group-hover:translate-x-[-3px] transition-transform">
                ابدأ الاختبار
                <ArrowRight className="w-3 h-3 rotate-180" />
              </span>
            </div>
          </button>
        ))}
      </div>
    </aside>
  );
};
