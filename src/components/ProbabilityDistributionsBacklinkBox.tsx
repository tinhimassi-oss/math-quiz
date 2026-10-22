import React from 'react';
import { ArrowRight, BookOpen, Layers } from 'lucide-react';
import { useEyeTheme } from '../context/ThemeContext';
import { navigateTo } from '../navigation/router';

export interface RelatedDistributionQuizInfo {
  id: string;
  title: string;
  emoji: string;
  mathSymbol: string;
  level: 'أساسي' | 'متوسط' | 'متقدم';
  url: string;
  relationReason: string;
}

export const ALL_DISTRIBUTION_TESTS: Record<string, RelatedDistributionQuizInfo> = {
  'random-variables-types': {
    id: 'random-variables-types',
    title: 'مفهوم المتغير العشوائي وأنواعه',
    emoji: '',
    mathSymbol: 'X: Ω → ℝ',
    level: 'أساسي',
    url: '/domain/statistics-probability/probability-distributions/random-variables-types',
    relationReason: 'المدخل الأساسي للتمييز بين المتغيرات المنفصلة (العد) والمتصلة (القياس) وتحديد مجالات التطبيق',
  },
  'discrete-probability-distributions-expected-value': {
    id: 'discrete-probability-distributions-expected-value',
    title: 'التوزيع الاحتمالي المنفصل والقيمة المتوقعة',
    emoji: '',
    mathSymbol: 'E(X) = ∑ x · P(x)',
    level: 'أساسي',
    url: '/domain/statistics-probability/probability-distributions/discrete-probability-distributions-expected-value',
    relationReason: 'بناء جداول الاحتمال المنفصلة وحساب مركز الثقل الاحتمالي والأمل الرياضي على المدى الطويل',
  },
  'variance-standard-deviation-discrete': {
    id: 'variance-standard-deviation-discrete',
    title: 'التباين والانحراف المعياري للمتغير المنفصل',
    emoji: '',
    mathSymbol: 'Var(X) = E(X²) - [E(X)]²',
    level: 'متوسط',
    url: '/domain/statistics-probability/probability-distributions/variance-standard-deviation-discrete',
    relationReason: 'قياس مقدار التذبذب والتشتت والمخاطر حول الوسط الحسابي وخواص التحويل الخطي',
  },
  'binomial-distribution-properties': {
    id: 'binomial-distribution-properties',
    title: 'توزيع ذات الحدين وخصائصه',
    emoji: '',
    mathSymbol: 'X ~ B(n, p)',
    level: 'أساسي',
    url: '/domain/statistics-probability/probability-distributions/binomial-distribution-properties',
    relationReason: 'نمذجة محاولات برنولي الثنائية المستقلة وحساب المتوسط np والتباين np(1-p)',
  },
  'binomial-probability-calculations': {
    id: 'binomial-probability-calculations',
    title: 'حساب احتمالات صيغة ذات الحدين',
    emoji: '',
    mathSymbol: 'P(X=k) = C(n,k) pᵏ qⁿ⁻ᵏ',
    level: 'متوسط',
    url: '/domain/statistics-probability/probability-distributions/binomial-probability-calculations',
    relationReason: 'التعويض في قانون ذات الحدين وحساب احتمالات القيم المحددة والتراكمية والمتممة',
  },
  'poisson-distribution': {
    id: 'poisson-distribution',
    title: 'توزيع بواسون وتطبيقاته',
    emoji: '',
    mathSymbol: 'P(X=k) = (e⁻ᵝ λᵏ) / k!',
    level: 'متوسط',
    url: '/domain/statistics-probability/probability-distributions/poisson-distribution',
    relationReason: 'نمذجة الأحداث النادرة والتدفقات خلال فترات زمنية ومساحية متصلة بمعدل λ وتطابق الوسط والتباين',
  },
  'geometric-distribution': {
    id: 'geometric-distribution',
    title: 'التوزيع الهندسي وأول نجاح',
    emoji: '',
    mathSymbol: 'P(X=k) = (1-p)ᵏ⁻¹ p',
    level: 'متوسط',
    url: '/domain/statistics-probability/probability-distributions/geometric-distribution',
    relationReason: 'حساب عدد المحاولات حتى أول نجاح وخاصية فقدان الذاكرة والمتوسط 1/p',
  },
  'hypergeometric-distribution': {
    id: 'hypergeometric-distribution',
    title: 'التوزيع الهندسي الفائق (السحب بدون إرجاع)',
    emoji: '',
    mathSymbol: 'C(K,k)·C(N-K,n-k) / C(N,n)',
    level: 'متوسط',
    url: '/domain/statistics-probability/probability-distributions/hypergeometric-distribution',
    relationReason: 'حساب احتمالات السحب بدون إرجاع مع اعتماد المحاولات وتطبيقات ضبط الجودة وصيد الأسماك',
  },
  'continuous-distributions-pdf': {
    id: 'continuous-distributions-pdf',
    title: 'التوزيع الاحتمالي المتصل ودالة الكثافة (PDF)',
    emoji: '',
    mathSymbol: '∫ f(x) dx = 1',
    level: 'متوسط',
    url: '/domain/statistics-probability/probability-distributions/continuous-distributions-pdf',
    relationReason: 'شروط دالة الكثافة الاحتمالية وحساب المساحات الاحتمالية بالتكامل والتوزيع المنتظم U(a,b)',
  },
  'normal-distribution-empirical-rule': {
    id: 'normal-distribution-empirical-rule',
    title: 'التوزيع الطبيعي والقاعدة التجريبية',
    emoji: '',
    mathSymbol: '68% - 95% - 99.7%',
    level: 'أساسي',
    url: '/domain/statistics-probability/probability-distributions/normal-distribution-empirical-rule',
    relationReason: 'خصائص المنحنى الجرسي المتماثل، نقاط الانقلاب، وتطبيق قاعدة 68-95-99.7 لحساب النسب',
  },
  'standard-normal-z-score': {
    id: 'standard-normal-z-score',
    title: 'التوزيع الطبيعي المعياري والدرجة Z',
    emoji: '',
    mathSymbol: 'Z = (X - μ) / σ',
    level: 'متوسط',
    url: '/domain/statistics-probability/probability-distributions/standard-normal-z-score',
    relationReason: 'معايرة البيانات والتحويل إلى N(0,1) واستخراج المساحات والاحتمالات من جداول Z',
  },
  'normal-approximation-to-binomial': {
    id: 'normal-approximation-to-binomial',
    title: 'تقريب ذات الحدين بالتوزيع الطبيعي',
    emoji: '',
    mathSymbol: 'np ≥ 5, ±0.5 CC',
    level: 'متقدم',
    url: '/domain/statistics-probability/probability-distributions/normal-approximation-to-binomial',
    relationReason: 'شروط التقريب الطبيعي وتطبيق معامل تصحيح الاستمرارية لحساب احتمالات العينات الكبيرة',
  },
  'applied-distributions-word-problems': {
    id: 'applied-distributions-word-problems',
    title: 'المسائل والتطبيقات الحياتية للتوزيعات',
    emoji: '',
    mathSymbol: 'Real-Life Probability Models',
    level: 'متقدم',
    url: '/domain/statistics-probability/probability-distributions/applied-distributions-word-problems',
    relationReason: 'تشخيص النموذج الاحتمالي المناسب لظواهر الواقع وتطبيقات مراقبة الجودة والطب والخدمات',
  },
};

interface ProbabilityDistributionsBacklinkBoxProps {
  currentTestId?: string;
  currentQuizId?: string;
  relatedIds?: string[];
}

export const ProbabilityDistributionsBacklinkBox: React.FC<ProbabilityDistributionsBacklinkBoxProps> = ({
  currentTestId,
  currentQuizId,
  relatedIds,
}) => {
  const { themeClasses } = useEyeTheme();
  const activeId = currentQuizId || currentTestId || '';

  // Select related tests
  let displayTests: RelatedDistributionQuizInfo[] = [];

  if (relatedIds && relatedIds.length > 0) {
    displayTests = relatedIds
      .map((id) => ALL_DISTRIBUTION_TESTS[id])
      .filter(Boolean) as RelatedDistributionQuizInfo[];
  }

  // Fallback to siblings if not enough
  if (displayTests.length < 3) {
    const allKeys = Object.keys(ALL_DISTRIBUTION_TESTS);
    const fallbacks = allKeys
      .filter((k) => k !== activeId && !displayTests.some((t) => t.id === k))
      .slice(0, 4 - displayTests.length)
      .map((k) => ALL_DISTRIBUTION_TESTS[k]);
    displayTests = [...displayTests, ...fallbacks];
  }

  return (
    <div className={`mt-10 rounded-2xl p-6 ${themeClasses.cardBg} border ${themeClasses.border} shadow-sm`}>
      <div className="flex items-center justify-between pb-4 border-b border-black/[0.06] dark:border-white/[0.06] mb-5">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center font-bold">
            <BookOpen className="w-5 h-5" />
          </div>
          <div>
            <h3 className={`text-base font-bold ${themeClasses.textPrimary}`}>
              اختبارات ومواضيع التوزيعات الاحتمالية ذات الصلة
            </h3>
            <p className={`text-xs ${themeClasses.textSecondary}`}>
              انتقل بسهولة بين اختبارات التوزيعات الاحتمالية والمنحنى الطبيعي لتعميق فهمك التطبيقي
            </p>
          </div>
        </div>
        <button
          onClick={() => navigateTo('/domain/statistics-probability/probability-distributions')}
          className="text-xs font-medium text-purple-600 dark:text-purple-400 hover:underline flex items-center gap-1 transition-colors"
        >
          <span>عرض جميع اختبارات الوحدة</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
        {displayTests.map((test) => (
          <div
            key={test.id}
            onClick={() => navigateTo(test.url)}
            className={`p-3.5 rounded-xl border border-black/[0.05] dark:border-white/[0.05] hover:border-purple-400/50 hover:bg-purple-500/[0.03] transition-all cursor-pointer group flex flex-col justify-between`}
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-1.5">
                <div className="flex items-center gap-2">
                  <span className="text-lg">{test.emoji}</span>
                  <span className={`text-sm font-bold ${themeClasses.textPrimary} group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors`}>
                    {test.title}
                  </span>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded-full font-medium bg-purple-500/10 text-purple-700 dark:text-purple-300">
                  {test.level}
                </span>
              </div>
              <p className={`text-xs ${themeClasses.textSecondary} leading-relaxed line-clamp-2`}>
                {test.relationReason}
              </p>
            </div>
            <div className="mt-2.5 pt-2 border-t border-black/[0.03] dark:border-white/[0.03] flex items-center justify-between">
              <span className="text-[11px] font-mono text-purple-600 dark:text-purple-400 font-semibold" dir="ltr">
                {test.mathSymbol}
              </span>
              <span className="text-[11px] text-purple-600 dark:text-purple-400 flex items-center gap-1 font-medium group-hover:translate-x-[-2px] transition-transform">
                ابدأ الاختبار
                <ArrowRight className="w-3 h-3" />
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Sibling Categories Bar */}
      <div className="mt-5 pt-4 border-t border-black/[0.05] dark:border-white/[0.05] flex flex-wrap items-center justify-between gap-3 text-xs">
        <span className={`font-medium ${themeClasses.textSecondary} flex items-center gap-1.5`}>
          <Layers className="w-4 h-4 text-purple-500" />
          وحدات شقيقة في قسم الإحصاء والاحتمالات:
        </span>
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => navigateTo('/domain/statistics-probability/probability')}
            className="px-2.5 py-1 rounded-lg bg-black/[0.03] dark:bg-white/[0.03] hover:bg-black/[0.06] dark:hover:bg-white/[0.06] transition-colors text-purple-600 dark:text-purple-400 font-medium"
          >
             نظرية الاحتمالات الأساسية
          </button>
          <button
            onClick={() => navigateTo('/domain/statistics-probability/permutations-combinations')}
            className="px-2.5 py-1 rounded-lg bg-black/[0.03] dark:bg-white/[0.03] hover:bg-black/[0.06] dark:hover:bg-white/[0.06] transition-colors text-purple-600 dark:text-purple-400 font-medium"
          >
             التباديل والتوافيق ومبدأ العد
          </button>
          <button
            onClick={() => navigateTo('/domain/statistics-probability/data-analysis')}
            className="px-2.5 py-1 rounded-lg bg-black/[0.03] dark:bg-white/[0.03] hover:bg-black/[0.06] dark:hover:bg-white/[0.06] transition-colors text-purple-600 dark:text-purple-400 font-medium"
          >
             جمع وتحليل البيانات والإحصاء
          </button>
        </div>
      </div>
    </div>
  );
};
