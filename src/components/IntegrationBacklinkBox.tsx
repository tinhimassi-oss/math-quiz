import React from 'react';
import { ArrowRight, BookOpen, Layers } from 'lucide-react';
import { useEyeTheme } from '../context/ThemeContext';
import { navigateTo } from '../navigation/router';

export interface RelatedIntegrationQuizInfo {
  id: string;
  title: string;
  subtitle?: string;
  emoji: string;
  mathSymbol: string;
  level: 'أساسي' | 'متوسط' | 'متقدم';
  url: string;
  relationReason: string;
}

export const ALL_INTEGRATION_TESTS: Record<
  string,
  RelatedIntegrationQuizInfo
> = {
  'indefinite-integrals-basic-rules': {
    id: 'indefinite-integrals-basic-rules',
    title: 'مفهوم التكامل غير المحدد وقواعد التكامل الأساسية',
    emoji: '',
    mathSymbol: '∫ xⁿ dx = xⁿ⁺¹/(n+1) + C',
    level: 'متوسط',
    url: '/domain/calculus/integration/indefinite-integrals-basic-rules',
    relationReason: 'القاعدة الأساسية والمشتقة العكسية لقوى x وثابت التكامل C والخواص الخطية',
  },
  'exponential-logarithmic-integration': {
    id: 'exponential-logarithmic-integration',
    title: 'تكامل الدوال الأسية واللوغاريتمية',
    emoji: '',
    mathSymbol: '∫ e^(kx) dx , ∫ 1/x dx',
    level: 'متوسط',
    url: '/domain/calculus/integration/exponential-logarithmic-integration',
    relationReason: 'تكامل الدوال الأسية الطبيعية والعامة وصيغة اللوغاريتم الطبيعي للكسور',
  },
  'trigonometric-integration': {
    id: 'trigonometric-integration',
    title: 'تكامل الدوال المثلثية الأساسية',
    emoji: '',
    mathSymbol: '∫ sin(x) dx , ∫ sec²(x) dx',
    level: 'متوسط',
    url: '/domain/calculus/integration/trigonometric-integration',
    relationReason: 'المشتقات العكسية للدوال الدائرية الست واستخدام متطابقات خفض القوة',
  },
  'integration-by-substitution': {
    id: 'integration-by-substitution',
    title: 'التكامل بالتعويض (Integration by Substitution)',
    emoji: '',
    mathSymbol: '∫ f(g(x)) g\'(x) dx = ∫ f(u) du',
    level: 'متقدم',
    url: '/domain/calculus/integration/integration-by-substitution',
    relationReason: 'معكوس قاعدة السلسلة وتغيير المتغير u لحل الدوال المركبة والجذرية',
  },
  'integration-by-parts': {
    id: 'integration-by-parts',
    title: 'التكامل بالتجزئة (Integration by Parts)',
    emoji: '',
    mathSymbol: '∫ u dv = uv - ∫ v du',
    level: 'متقدم',
    url: '/domain/calculus/integration/integration-by-parts',
    relationReason: 'معكوس مشتقة ضرب دالتين وقاعدة LIATE وطريقة الجدول لكثيرات الحدود',
  },
  'partial-fractions-integration': {
    id: 'partial-fractions-integration',
    title: 'التكامل بالكسور الجزئية (Partial Fractions)',
    emoji: '',
    mathSymbol: 'P(x)/Q(x) = A/(x-a) + B/(x-b)',
    level: 'متقدم',
    url: '/domain/calculus/integration/partial-fractions-integration',
    relationReason: 'تفكيك الدوال النسبية الكسرية إلى كسور خطية وتربيعية يسهل مكاملتها',
  },
  'fundamental-theorem-definite-integral': {
    id: 'fundamental-theorem-definite-integral',
    title: 'النظرية الأساسية والتكامل المحدد (FTC)',
    emoji: '',
    mathSymbol: '∫ₐᵇ f(x) dx = F(b) - F(a)',
    level: 'متقدم',
    url: '/domain/calculus/integration/fundamental-theorem-definite-integral',
    relationReason: 'الجسر الرابط بين التفاضل والتكامل ودوال التراكم ومبرهنة التقييم',
  },
  'properties-of-definite-integrals': {
    id: 'properties-of-definite-integrals',
    title: 'خواص التكامل المحدد والتناظر والقيمة المتوسطة',
    emoji: '',
    mathSymbol: '∫₋ₐᵃ (فردية) = 0 , f_avg',
    level: 'متقدم',
    url: '/domain/calculus/integration/properties-of-definite-integrals',
    relationReason: 'تجزئة الفترات وتناظر الدوال الزوجية والفردية وحساب القيمة المتوسطة',
  },
  'area-under-curve-axis': {
    id: 'area-under-curve-axis',
    title: 'حساب المساحات المحصورة بين منحنى ومحور السينات',
    emoji: '',
    mathSymbol: 'A = ∫ |f(x)| dx',
    level: 'متوسط',
    url: '/domain/calculus/integration/area-under-curve-axis',
    relationReason: 'التطبيق الهندسي المباشر وتحديد الأصفار وتجزئة المناطق الموجبة والسالبة',
  },
  'area-between-curves': {
    id: 'area-between-curves',
    title: 'المساحة المحصورة بين منحنيين (Area Between Curves)',
    emoji: '',
    mathSymbol: 'A = ∫ [f(x) - g(x)] dx',
    level: 'متقدم',
    url: '/domain/calculus/integration/area-between-curves',
    relationReason: 'طرح المنحنى السفلي من العلوي والمكاملة الأفقية بالنسبة لمحور الصادات y',
  },
  'improper-integrals': {
    id: 'improper-integrals',
    title: 'التكاملات الاعتلالية والتقارب (Improper Integrals)',
    emoji: '',
    mathSymbol: 'lim_{t→∞} ∫ₐᵗ f(x) dx',
    level: 'متقدم',
    url: '/domain/calculus/integration/improper-integrals',
    relationReason: 'فحص تقارب وتباعد الفترات اللانهائية ونقاط الانفصال الداخلي واختبار p-integral',
  },
  'applied-integration-word-problems': {
    id: 'applied-integration-word-problems',
    title: 'المسائل الكلامية والتطبيقية على التكامل',
    emoji: '',
    mathSymbol: 'W = ∫ F dx , V = π ∫ f² dx',
    level: 'متقدم',
    url: '/domain/calculus/integration/applied-integration-word-problems',
    relationReason: 'حساب الشغل الفيزيائي، المسافة والإزاحة، التكلفة الإجمالية، وحجوم المجسمات الدورانية',
  },
};

// Strategic pedagogical connections mapping between tests
const INTEGRATION_RELATIONS: Record<string, string[]> = {
  'indefinite-integrals-basic-rules': [
    'exponential-logarithmic-integration',
    'trigonometric-integration',
    'integration-by-substitution',
    'fundamental-theorem-definite-integral',
  ],
  'exponential-logarithmic-integration': [
    'indefinite-integrals-basic-rules',
    'integration-by-substitution',
    'integration-by-parts',
    'improper-integrals',
  ],
  'trigonometric-integration': [
    'indefinite-integrals-basic-rules',
    'integration-by-substitution',
    'integration-by-parts',
    'area-under-curve-axis',
  ],
  'integration-by-substitution': [
    'indefinite-integrals-basic-rules',
    'integration-by-parts',
    'trigonometric-integration',
    'fundamental-theorem-definite-integral',
  ],
  'integration-by-parts': [
    'integration-by-substitution',
    'exponential-logarithmic-integration',
    'partial-fractions-integration',
    'applied-integration-word-problems',
  ],
  'partial-fractions-integration': [
    'exponential-logarithmic-integration',
    'integration-by-parts',
    'indefinite-integrals-basic-rules',
    'improper-integrals',
  ],
  'fundamental-theorem-definite-integral': [
    'indefinite-integrals-basic-rules',
    'properties-of-definite-integrals',
    'area-under-curve-axis',
    'applied-integration-word-problems',
  ],
  'properties-of-definite-integrals': [
    'fundamental-theorem-definite-integral',
    'area-under-curve-axis',
    'area-between-curves',
    'improper-integrals',
  ],
  'area-under-curve-axis': [
    'fundamental-theorem-definite-integral',
    'properties-of-definite-integrals',
    'area-between-curves',
    'applied-integration-word-problems',
  ],
  'area-between-curves': [
    'area-under-curve-axis',
    'properties-of-definite-integrals',
    'applied-integration-word-problems',
    'fundamental-theorem-definite-integral',
  ],
  'improper-integrals': [
    'exponential-logarithmic-integration',
    'properties-of-definite-integrals',
    'fundamental-theorem-definite-integral',
    'applied-integration-word-problems',
  ],
  'applied-integration-word-problems': [
    'fundamental-theorem-definite-integral',
    'area-under-curve-axis',
    'area-between-curves',
    'integration-by-substitution',
  ],
};

interface IntegrationBacklinkBoxProps {
  currentTestId: string;
  onSelectTest?: (testId: string) => void;
  className?: string;
}

export const IntegrationBacklinkBox: React.FC<IntegrationBacklinkBoxProps> = ({
  currentTestId,
  onSelectTest,
  className = '',
}) => {
  const { themeClasses } = useEyeTheme();

  const relatedIds = INTEGRATION_RELATIONS[currentTestId] || [
    'indefinite-integrals-basic-rules',
    'fundamental-theorem-definite-integral',
    'integration-by-substitution',
    'area-under-curve-axis',
  ];

  const relatedTests = relatedIds
    .map((id) => ALL_INTEGRATION_TESTS[id])
    .filter(Boolean);

  const handleTestClick = (url: string, testId: string, e: React.MouseEvent) => {
    e.preventDefault();
    if (onSelectTest) {
      onSelectTest(testId);
    } else {
      navigateTo(url);
    }
  };

  return (
    <div
      className={`rounded-2xl border ${themeClasses.border} ${themeClasses.cardBg} p-5 sm:p-7 shadow-sm transition-all text-right ${className}`}
    >
      <div className="flex items-center justify-between gap-3 pb-4 mb-5 border-b border-black/5 dark:border-white/5">
        <div>
          <h3 className={`text-xl font-bold ${themeClasses.textPrimary}`}>
            اختبارات تفاعلية مترابطة في حساب التكامل
          </h3>
          <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} mt-1`}>
            بناء المعرفة التكاملية تراكمي ومترابط؛ اختبر مهاراتك في الموضوعات التحليلية والهندسية المتصلة
          </p>
        </div>
        <div className="w-11 h-11 rounded-xl bg-violet-500/10 text-violet-600 dark:text-violet-400 flex items-center justify-center shrink-0">
          <Layers className="w-6 h-6" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {relatedTests.map((item) => (
          <a
            key={item.id}
            href={`#${item.url}`}
            onClick={(e) => handleTestClick(item.url, item.id, e)}
            className={`group block p-4 rounded-xl border ${themeClasses.border} hover:border-violet-500/50 hover:bg-violet-500/5 transition-all text-right`}
          >
            <div className="flex items-center justify-between gap-2 mb-2">
              <span className="text-2xl">{item.emoji}</span>
              <span className="text-xs px-2 py-0.5 rounded-full font-medium bg-violet-500/10 text-violet-600 dark:text-violet-400 border border-violet-500/20">
                {item.level}
              </span>
            </div>

            <h4 className={`font-bold text-sm mb-1 ${themeClasses.textPrimary} group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors`}>
              {item.title}
            </h4>

            <p className={`text-xs ${themeClasses.textSecondary} mb-3 leading-relaxed line-clamp-2`}>
              {item.relationReason}
            </p>

            <div className="flex items-center justify-between pt-2 border-t border-black/5 dark:border-white/5 text-xs">
              <span className="font-mono text-violet-600 dark:text-violet-400 font-semibold dir-ltr">
                {item.mathSymbol}
              </span>
              <span className="inline-flex items-center gap-1 text-violet-600 dark:text-violet-400 font-medium group-hover:translate-x-[-3px] transition-transform">
                بدء الاختبار
                <ArrowRight className="w-3 h-3" />
              </span>
            </div>
          </a>
        ))}
      </div>

      {/* Hub backlink button */}
      <div className="mt-5 pt-4 border-t border-black/5 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm">
        <span className={themeClasses.textSecondary}>
          تريد استعراض الخريطة الأكاديمية الشاملة لمنهاج التكامل؟
        </span>
        <a
          href="#/domain/calculus/integration"
          onClick={(e) => {
            e.preventDefault();
            navigateTo('/domain/calculus/integration');
          }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-violet-600 text-white hover:bg-violet-700 font-medium transition-colors shadow-sm"
        >
          <BookOpen className="w-4 h-4" />
          فهرس منهاج التكامل الـ 12
        </a>
      </div>
    </div>
  );
};
