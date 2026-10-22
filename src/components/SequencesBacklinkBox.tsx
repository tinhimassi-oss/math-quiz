import React from 'react';
import { ArrowRight, BookOpen, Compass } from 'lucide-react';
import { useEyeTheme } from '../context/ThemeContext';
import { navigateTo } from '../navigation/router';

export interface RelatedSequenceQuizInfo {
  id: string;
  title: string;
  emoji: string;
  mathSymbol: string;
  level: 'أساسي' | 'متوسط' | 'متقدم';
  url: string;
  relationReason: string;
}

export const ALL_SEQUENCES_TESTS: Record<string, RelatedSequenceQuizInfo> = {
  'sequence-patterns-next-terms': {
    id: 'sequence-patterns-next-terms',
    title: 'التعرف على المتتاليات وأنماطها وتحديد الحدود التالية',
    emoji: '',
    mathSymbol: 'a₁, a₂, a₃...',
    level: 'أساسي',
    url: '/math/sequences/sequence-patterns-next-terms',
    relationReason: 'الخطوة الأولى لاكتشاف الأنماط الحسابية والهندسية والتربيعية وتوقع الحدود القادمة',
  },
  'arithmetic-sequence-explicit-formula': {
    id: 'arithmetic-sequence-explicit-formula',
    title: 'الحد العام للمتتالية الحسابية (Explicit Formula)',
    emoji: '',
    mathSymbol: 'aₙ = a₁ + (n-1)d',
    level: 'متوسط',
    url: '/math/sequences/arithmetic-sequence-explicit-formula',
    relationReason: 'بناء الصيغة الصريحة السريعة dn + c لحساب أي حد بالمتتالية الحسابية بلحظة واحدة',
  },
  'arithmetic-sequence-finding-terms': {
    id: 'arithmetic-sequence-finding-terms',
    title: 'إيجاد حدود متقدمة في المتتالية الحسابية',
    emoji: '',
    mathSymbol: 'a₂₀ = a₁ + 19d',
    level: 'متوسط',
    url: '/math/sequences/arithmetic-sequence-finding-terms',
    relationReason: 'القفز المباشر للحدود البعيدة ومعرفة رتبة أي حد وعدد عناصر المتتالية المنتهية',
  },
  'arithmetic-series-finite-sum': {
    id: 'arithmetic-series-finite-sum',
    title: 'مجموع المتسلسلة الحسابية المنتهية (Arithmetic Series)',
    emoji: '',
    mathSymbol: 'Sₙ = (n/2)(a₁+aₙ)',
    level: 'متوسط',
    url: '/math/sequences/arithmetic-series-finite-sum',
    relationReason: 'قانون غاوس العبقري لجمع مئات الحدود الحسابية في ثوانٍ عبر تناظر الأطراف',
  },
  'geometric-sequence-common-ratio-formula': {
    id: 'geometric-sequence-common-ratio-formula',
    title: 'الحد العام للمتتالية الهندسية (Geometric Sequences)',
    emoji: '',
    mathSymbol: 'aₙ = a₁ · rⁿ⁻¹',
    level: 'متوسط',
    url: '/math/sequences/geometric-sequence-common-ratio-formula',
    relationReason: 'الأساس r والنمو الأسي وتطبيق صيغة الحد العام للمتتاليات المتضاعفة',
  },
  'geometric-sequence-finding-terms': {
    id: 'geometric-sequence-finding-terms',
    title: 'إيجاد حدود متقدمة في المتتالية الهندسية',
    emoji: '',
    mathSymbol: 'a₆ = a₁ · r⁵',
    level: 'متقدم',
    url: '/math/sequences/geometric-sequence-finding-terms',
    relationReason: 'ترويض القوى والأسس الكبيرة وحساب الحدود البعيدة واستخدام اللوغاريتمات للرتب',
  },
  'finite-geometric-series-sum': {
    id: 'finite-geometric-series-sum',
    title: 'مجموع المتسلسلة الهندسية المنتهية (Finite Geometric Series)',
    emoji: '',
    mathSymbol: 'a₁(1-rⁿ)/(1-r)',
    level: 'متوسط',
    url: '/math/sequences/finite-geometric-series-sum',
    relationReason: 'البرهان الجبري الذكي للإلغاء التلسكوبي وقانون جمع التراكم الأسي',
  },
  'infinite-geometric-series-convergence': {
    id: 'infinite-geometric-series-convergence',
    title: 'المتسلسلة الهندسية اللانهائية والتقارب (Infinite Series)',
    emoji: '',
    mathSymbol: 'S_∞ = a₁/(1-r)',
    level: 'متقدم',
    url: '/math/sequences/infinite-geometric-series-convergence',
    relationReason: 'شرط التقارب |r| < 1، جمع ما لا نهاية من الحدود، وتحويل الكسور العشرية الدورية',
  },
  'sigma-notation-series': {
    id: 'sigma-notation-series',
    title: 'رمز المجموع (سيجما / Sigma Notation Σ)',
    emoji: '',
    mathSymbol: '∑ aₖ',
    level: 'متوسط',
    url: '/math/sequences/sigma-notation-series',
    relationReason: 'قراءة وفك رمز السيجما الرياضي والخواص الخطية للتوزيع وسحب الثوابت',
  },
  'recursive-sequences-relations': {
    id: 'recursive-sequences-relations',
    title: 'المتتاليات العودية والتراجعية (Recursive Sequences)',
    emoji: '',
    mathSymbol: 'aₙ = f(aₙ₋₁)',
    level: 'متوسط',
    url: '/math/sequences/recursive-sequences-relations',
    relationReason: 'البناء الخوارزمي التسلسلي وربط شروط البداية بعلوم الحاسوب والبرمجة',
  },
  'fibonacci-and-special-sequences': {
    id: 'fibonacci-and-special-sequences',
    title: 'متتالية فيبوناتشي والمتتاليات الخاصة (Fibonacci)',
    emoji: '',
    mathSymbol: 'Fₙ = Fₙ₋₁ + Fₙ₋₂',
    level: 'متوسط',
    url: '/math/sequences/fibonacci-and-special-sequences',
    relationReason: 'أسرار النسبة الذهبية فاي φ وتجليات فيبوناتشي في الطبيعة والمجرات وبذور النباتات',
  },
  'sequences-series-word-problems': {
    id: 'sequences-series-word-problems',
    title: 'المسائل الكلامية والتطبيقية على المتتاليات والمتسلسلات',
    emoji: '',
    mathSymbol: 'Sₙ (Finance & Physics)',
    level: 'متقدم',
    url: '/math/sequences/sequences-series-word-problems',
    relationReason: 'تطبيقات الادخار، الاستهلاك، التكاثر الحيوي، وحل المسائل الحياتية الواقعية',
  },
};

const NEXT_SMART_STEPS: Record<string, string[]> = {
  'sequence-patterns-next-terms': [
    'arithmetic-sequence-explicit-formula',
    'geometric-sequence-common-ratio-formula',
    'recursive-sequences-relations',
  ],
  'arithmetic-sequence-explicit-formula': [
    'arithmetic-sequence-finding-terms',
    'arithmetic-series-finite-sum',
    'sigma-notation-series',
  ],
  'arithmetic-sequence-finding-terms': [
    'arithmetic-series-finite-sum',
    'sequences-series-word-problems',
    'geometric-sequence-finding-terms',
  ],
  'arithmetic-series-finite-sum': [
    'sigma-notation-series',
    'finite-geometric-series-sum',
    'sequences-series-word-problems',
  ],
  'geometric-sequence-common-ratio-formula': [
    'geometric-sequence-finding-terms',
    'finite-geometric-series-sum',
    'infinite-geometric-series-convergence',
  ],
  'geometric-sequence-finding-terms': [
    'finite-geometric-series-sum',
    'infinite-geometric-series-convergence',
    'sequences-series-word-problems',
  ],
  'finite-geometric-series-sum': [
    'infinite-geometric-series-convergence',
    'sigma-notation-series',
    'sequences-series-word-problems',
  ],
  'infinite-geometric-series-convergence': [
    'sigma-notation-series',
    'fibonacci-and-special-sequences',
    'finite-geometric-series-sum',
  ],
  'sigma-notation-series': [
    'arithmetic-series-finite-sum',
    'finite-geometric-series-sum',
    'recursive-sequences-relations',
  ],
  'recursive-sequences-relations': [
    'fibonacci-and-special-sequences',
    'arithmetic-sequence-explicit-formula',
    'geometric-sequence-common-ratio-formula',
  ],
  'fibonacci-and-special-sequences': [
    'recursive-sequences-relations',
    'geometric-sequence-common-ratio-formula',
    'sequences-series-word-problems',
  ],
  'sequences-series-word-problems': [
    'arithmetic-series-finite-sum',
    'finite-geometric-series-sum',
    'sequence-patterns-next-terms',
  ],
};

interface SequencesBacklinkBoxProps {
  currentTestId: string;
}

export const SequencesBacklinkBox: React.FC<SequencesBacklinkBoxProps> = ({ currentTestId }) => {
  const { themeClasses } = useEyeTheme();
  const currentInfo = ALL_SEQUENCES_TESTS[currentTestId];
  const relatedIds = NEXT_SMART_STEPS[currentTestId] || [
    'sequence-patterns-next-terms',
    'arithmetic-sequence-explicit-formula',
    'geometric-sequence-common-ratio-formula',
  ];

  const handleNavigate = (id: string, url: string) => {
    navigateTo(url);
  };

  const handleOpenPillarGuide = () => {
    navigateTo('/math/algebra-functions/sequences');
  };

  return (
    <div
      className={`rounded-2xl border p-6 my-8 ${themeClasses.cardBg} ${themeClasses.border} shadow-sm transition-all`}
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-black/[0.06] dark:border-white/[0.06]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-teal-500/10 text-teal-600 dark:text-teal-400 flex items-center justify-center font-bold text-lg">
            
          </div>
          <div>
            <h3 className={`text-lg font-bold ${themeClasses.textPrimary}`}>
              المسار التعليمي المتصل للمتتاليات والمتسلسلات
            </h3>
            <p className={`text-xs ${themeClasses.textMuted}`}>
              اختبارات ومقالات تكميلية مبنية على مهارة {currentInfo?.title || 'المتتاليات والمتسلسلات'}
            </p>
          </div>
        </div>

        <button
          onClick={handleOpenPillarGuide}
          className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-lg bg-teal-500/10 text-teal-600 dark:text-teal-400 hover:bg-teal-500/20 transition-colors"
        >
          <BookOpen className="w-3.5 h-3.5" />
          <span>الدليل الشامل للمتتاليات والمتسلسلات</span>
        </button>
      </div>

      {/* Related Test Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {relatedIds.map((tid) => {
          const item = ALL_SEQUENCES_TESTS[tid];
          if (!item) return null;
          return (
            <div
              key={item.id}
              onClick={() => handleNavigate(item.id, item.url)}
              className={`group cursor-pointer rounded-xl p-4 border transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md ${themeClasses.cardBg} ${themeClasses.border} hover:border-teal-500/40 flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl">{item.emoji}</span>
                  <span
                    className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${
                      item.level === 'أساسي'
                        ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                        : item.level === 'متوسط'
                        ? 'bg-sky-500/10 text-sky-600 dark:text-sky-400'
                        : 'bg-purple-500/10 text-purple-600 dark:text-purple-400'
                    }`}
                  >
                    {item.level}
                  </span>
                </div>
                <h4
                  className={`text-sm font-bold leading-snug mb-1 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors ${themeClasses.textPrimary}`}
                >
                  {item.title}
                </h4>
                <div className="text-[11px] font-mono text-teal-600/80 dark:text-teal-400/80 mb-2 font-semibold" dir="ltr">
                  {item.mathSymbol}
                </div>
                <p className={`text-xs ${themeClasses.textMuted} line-clamp-2 leading-relaxed`}>
                  {item.relationReason}
                </p>
              </div>

              <div className="pt-3 mt-3 border-t border-black/[0.04] dark:border-white/[0.04] flex items-center justify-between text-xs font-semibold text-teal-600 dark:text-teal-400">
                <span>ابدأ الاختبار والمقالة</span>
                <ArrowRight className="w-3.5 h-3.5 transform group-hover:-translate-x-1 transition-transform" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Quick All-Quizzes Directory */}
      <div className="rounded-xl p-4 bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.04] dark:border-white/[0.04]">
        <div className="flex items-center gap-2 mb-3">
          <Compass className="w-4 h-4 text-teal-600 dark:text-teal-400" />
          <span className={`text-xs font-bold ${themeClasses.textPrimary}`}>
            فهرس جميع اختبارات ومقالات المتتاليات والمتسلسلات (12 موضوعاً):
          </span>
        </div>
        <div className="flex flex-wrap gap-2">
          {Object.values(ALL_SEQUENCES_TESTS).map((test) => {
            const isCurrent = test.id === currentTestId;
            return (
              <button
                key={test.id}
                onClick={() => !isCurrent && handleNavigate(test.id, test.url)}
                disabled={isCurrent}
                className={`text-xs px-2.5 py-1 rounded-lg border transition-all ${
                  isCurrent
                    ? 'bg-teal-600 text-white border-teal-600 font-bold shadow-sm'
                    : `${themeClasses.cardBg} ${themeClasses.border} ${themeClasses.textPrimary} hover:border-teal-500/50 hover:text-teal-600 dark:hover:text-teal-400`
                }`}
              >
                <span className="ml-1">{test.emoji}</span>
                <span>{test.title}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
