import React from 'react';
import { ArrowRight, BookOpen, Layers } from 'lucide-react';
import { useEyeTheme } from '../context/ThemeContext';
import { navigateTo } from '../navigation/router';

export interface RelatedCombinatoricsQuizInfo {
  id: string;
  title: string;
  emoji: string;
  mathSymbol: string;
  level: 'أساسي' | 'متوسط' | 'متقدم';
  url: string;
  relationReason: string;
}

export const ALL_COMBINATORICS_TESTS: Record<string, RelatedCombinatoricsQuizInfo> = {
  'fundamental-counting-principle': {
    id: 'fundamental-counting-principle',
    title: 'مبدأ العد الأساسي وقاعدة الضرب',
    emoji: '',
    mathSymbol: 'N = n₁ × n₂ × ... × nₖ',
    level: 'أساسي',
    url: '/domain/statistics-probability/permutations-combinations/fundamental-counting-principle',
    relationReason: 'الأساس الأول لحساب النواتج الكلية في التجارب المتتابعة والشجرة البيانية وتوليد الرموز',
  },
  'factorial-operations': {
    id: 'factorial-operations',
    title: 'المضروب والعمليات الحسابية عليه',
    emoji: '',
    mathSymbol: 'n! = n × (n - 1)!',
    level: 'أساسي',
    url: '/domain/statistics-probability/permutations-combinations/factorial-operations',
    relationReason: 'الأداة الحسابية الجوهرية لفك المقادير واختصار الكسور التوافقية وإثبات 0! = 1',
  },
  'linear-permutations': {
    id: 'linear-permutations',
    title: 'التباديل الخطية بدون تكرار',
    emoji: '',
    mathSymbol: 'P(n, n) = n!',
    level: 'أساسي',
    url: '/domain/statistics-probability/permutations-combinations/linear-permutations',
    relationReason: 'ترتيب العناصر المتمايزة في خط مستقيم وعلى الرفوف وحل قيود التجاور والافتراق',
  },
  'partial-permutations': {
    id: 'partial-permutations',
    title: 'التباديل الجزئية P(n, r)',
    emoji: '',
    mathSymbol: 'P(n, r) = n! / (n - r)!',
    level: 'متوسط',
    url: '/domain/statistics-probability/permutations-combinations/partial-permutations',
    relationReason: 'اختيار وترتيب r من العناصر من بين n وتحديد المراكز والمناصب الإدارية وتوزيع الجوائز',
  },
  'permutations-with-repetition': {
    id: 'permutations-with-repetition',
    title: 'التباديل مع التكرار والكلمات',
    emoji: '',
    mathSymbol: 'n! / (n₁! × n₂! ...)',
    level: 'متوسط',
    url: '/domain/statistics-probability/permutations-combinations/permutations-with-repetition',
    relationReason: 'تنظيم العناصر غير المتمايزة وتباديل حروف الكلمات المتكررة وشبكات المسارات',
  },
  'circular-permutations': {
    id: 'circular-permutations',
    title: 'التباديل الدائرية ونقاط المرجع',
    emoji: '',
    mathSymbol: '(n - 1)! أو (n - 1)! / 2',
    level: 'متوسط',
    url: '/domain/statistics-probability/permutations-combinations/circular-permutations',
    relationReason: 'الترتيب حول طاولات مستديرة، أساور اليد، وتأثير نقطة المرجع الثابتة في إلغاء التناظر',
  },
  'combinations-fundamentals': {
    id: 'combinations-fundamentals',
    title: 'مفهوم التوافيق الأساسي C(n, r)',
    emoji: '',
    mathSymbol: 'C(n, r) = n! / (r!(n-r)!)',
    level: 'أساسي',
    url: '/domain/statistics-probability/permutations-combinations/combinations-fundamentals',
    relationReason: 'اختيار المجموعات وتشكيل اللجان ورؤوس المضلعات والقطع المستقيمة دون اعتبار للترتيب',
  },
  'permutations-vs-combinations': {
    id: 'permutations-vs-combinations',
    title: 'التمييز بين التباديل والتوافيق',
    emoji: '',
    mathSymbol: 'Order Matters? P vs C',
    level: 'متوسط',
    url: '/domain/statistics-probability/permutations-combinations/permutations-vs-combinations',
    relationReason: 'المعيار الذهبي لتحديد نوع المسألة بناءً على أثر الترتيب والعلاقة P(n, r) = r! · C(n, r)',
  },
  'combinations-properties-symmetry': {
    id: 'combinations-properties-symmetry',
    title: 'خواص التوافيق والتناظر',
    emoji: '',
    mathSymbol: 'C(n, r) = C(n, n - r)',
    level: 'متوسط',
    url: '/domain/statistics-probability/permutations-combinations/combinations-properties-symmetry',
    relationReason: 'تبسيط الحسابات الكبيرة بمتطابقة التناظر، متطابقة باسكال، ومجموع صفوف التوافيق 2ⁿ',
  },
  'binomial-theorem-pascals-triangle': {
    id: 'binomial-theorem-pascals-triangle',
    title: 'نظرية ذات الحدين ومثلث باسكال',
    emoji: '',
    mathSymbol: '(a + b)ⁿ = ∑ C(n, k) aⁿ⁻ᵏ bᵏ',
    level: 'متقدم',
    url: '/domain/statistics-probability/permutations-combinations/binomial-theorem-pascals-triangle',
    relationReason: 'المفكوك الجبري التوافقي، قانون الحد العام T_(r+1)، والحدود الخالية من المتغير والوسطى',
  },
  'inclusion-exclusion-pigeonhole': {
    id: 'inclusion-exclusion-pigeonhole',
    title: 'مبدأ الشمول والاستبعاد وبرج الحمام',
    emoji: '',
    mathSymbol: '|A ∪ B| = |A| + |B| - |A ∩ B|',
    level: 'متقدم',
    url: '/domain/statistics-probability/permutations-combinations/inclusion-exclusion-pigeonhole',
    relationReason: 'إزالة التكرار المزدوج في المجموعات المتداخلة والبرهان القطعي بمبدأ خانات ديريكليه',
  },
  'applied-combinatorics-word-problems': {
    id: 'applied-combinatorics-word-problems',
    title: 'المسائل الكلامية والتطبيقية المركبة',
    emoji: '',
    mathSymbol: 'Combinatorics in Real-Life',
    level: 'متقدم',
    url: '/domain/statistics-probability/permutations-combinations/applied-combinatorics-word-problems',
    relationReason: 'النمذجة الرياضية لسيناريوهات الواقع، شروط "على الأقل" و"على الأكثر"، وحالات الرفض المشترك',
  },
};

interface PermutationsCombinationsBacklinkBoxProps {
  currentQuizId: string;
}

export const PermutationsCombinationsBacklinkBox: React.FC<PermutationsCombinationsBacklinkBoxProps> = ({ currentQuizId }) => {
  const { themeClasses } = useEyeTheme();

  const otherQuizzes = Object.values(ALL_COMBINATORICS_TESTS).filter(
    (q) => q.id !== currentQuizId
  );

  return (
    <aside
      aria-label="اختبارات وموضوعات ذات صلة في التباديل والتوافيق"
      className={`mt-10 rounded-2xl border ${themeClasses.border} ${themeClasses.cardBg} p-6 sm:p-8 shadow-sm transition-all text-right space-y-6`}
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-5 border-b border-black/5 dark:border-white/5">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-xl"></span>
            <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border border-indigo-500/20">
              شبكة اختبارات التباديل والتوافيق المتكاملة
            </span>
          </div>
          <h3 className={`text-xl sm:text-2xl font-black ${themeClasses.textPrimary}`}>
            استكشف باقي اختبارات وحدة التباديل والتوافيق
          </h3>
          <p className={`text-xs sm:text-sm mt-1 ${themeClasses.textSecondary}`}>
            اختر أحد الموضوعات التوافقية المتخصصة التالية لاختبار مهاراتك والانتقال لاختباره التفاعلي المستقل:
          </p>
        </div>

        <button
          onClick={() =>
            navigateTo(
              '/domain/statistics-probability/permutations-combinations'
            )
          }
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold shrink-0 bg-indigo-600 text-white hover:bg-indigo-700 shadow-sm transition-all cursor-pointer"
        >
          <Layers className="w-4 h-4" />
          <span>فهرس موضوعات الوحدة</span>
          <ArrowRight className="w-4 h-4 rotate-180" />
        </button>
      </div>

      {/* Grid of related quizzes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 pt-1">
        {otherQuizzes.map((quiz) => (
          <button
            key={quiz.id}
            onClick={() => navigateTo(quiz.url)}
            className={`group text-right p-4 rounded-xl border ${themeClasses.border} bg-black/[0.015] dark:bg-white/[0.015] hover:bg-indigo-500/5 hover:border-indigo-500/30 transition-all flex flex-col justify-between cursor-pointer`}
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-2xl group-hover:scale-110 transition-transform">
                  {quiz.emoji}
                </span>
                <span
                  className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    quiz.level === 'أساسي'
                      ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20'
                      : quiz.level === 'متوسط'
                      ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20'
                      : 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20'
                  }`}
                >
                  {quiz.level}
                </span>
              </div>
              <h4
                className={`text-sm font-bold line-clamp-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors ${themeClasses.textPrimary}`}
              >
                {quiz.title}
              </h4>
              <p
                className={`text-xs mt-1.5 line-clamp-2 leading-relaxed ${themeClasses.textSecondary}`}
              >
                {quiz.relationReason}
              </p>
            </div>

            <div className="flex items-center justify-between mt-3 pt-2.5 border-t border-black/5 dark:border-white/5">
              <span className="text-[11px] font-mono text-indigo-500 dark:text-indigo-400 font-semibold dir-ltr">
                {quiz.mathSymbol}
              </span>
              <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 flex items-center gap-1 group-hover:-translate-x-1 transition-transform">
                ابدأ الاختبار
                <ArrowRight className="w-3.5 h-3.5 rotate-180" />
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Cross-domain quick navigation footer */}
      <div className="pt-4 border-t border-black/5 dark:border-white/5 flex flex-wrap items-center justify-between gap-3 text-xs">
        <span className={`flex items-center gap-1.5 font-medium ${themeClasses.textSecondary}`}>
          <BookOpen className="w-4 h-4 text-indigo-500" />
          <span>الوحدات المرتبطة في مسار الإحصاء والاحتمالات:</span>
        </span>
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() =>
              navigateTo('/domain/statistics-probability/probability')
            }
            className={`px-3 py-1.5 rounded-xl font-bold border ${themeClasses.border} hover:bg-indigo-500/10 transition-all ${themeClasses.textPrimary}`}
          >
             نظرية الاحتمالات
          </button>
          <button
            onClick={() =>
              navigateTo('/domain/statistics-probability/data-analysis')
            }
            className={`px-3 py-1.5 rounded-xl font-bold border ${themeClasses.border} hover:bg-indigo-500/10 transition-all ${themeClasses.textPrimary}`}
          >
             تحليل البيانات
          </button>
          <button
            onClick={() =>
              navigateTo('/domain/statistics-probability/statistical-measures')
            }
            className={`px-3 py-1.5 rounded-xl font-bold border ${themeClasses.border} hover:bg-indigo-500/10 transition-all ${themeClasses.textPrimary}`}
          >
             مقاييس النزعة والتشتت
          </button>
          <button
            onClick={() => navigateTo('/domain/statistics-probability')}
            className="px-3 py-1.5 rounded-xl font-bold bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-500/20 transition-all border border-indigo-500/20"
          >
            القسم العام: الإحصاء والاحتمالات ←
          </button>
        </div>
      </div>
    </aside>
  );
};
