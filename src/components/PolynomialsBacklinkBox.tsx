import React from 'react';
import { ArrowRight, BookOpen, Compass } from 'lucide-react';
import { useEyeTheme } from '../context/ThemeContext';
import { navigateTo } from '../navigation/router';

export interface RelatedPolynomialQuizInfo {
  id: string;
  title: string;
  emoji: string;
  mathSymbol: string;
  level: 'أساسي' | 'متوسط' | 'متقدم';
  url: string;
  relationReason: string;
}

export const ALL_POLYNOMIALS_TESTS: Record<string, RelatedPolynomialQuizInfo> = {
  'polynomial-degree-leading-coefficient': {
    id: 'polynomial-degree-leading-coefficient',
    title: 'التعرف على كثيرات الحدود ودرجتها والمعامل الرئيسي',
    emoji: '🏷️',
    mathSymbol: 'P(x) = aₙxⁿ + ... + a₀',
    level: 'أساسي',
    url: '/math/polynomials/polynomial-degree-leading-coefficient',
    relationReason: 'الخطوة التأسيسية الأولى لتمييز كثيرات الحدود والصيغة القياسية وأعلى أس',
  },
  'polynomial-classification': {
    id: 'polynomial-classification',
    title: 'تصنيف كثيرات الحدود (أحادية، ثنائية، ثلاثية)',
    emoji: '📂',
    mathSymbol: 'Monomial / Binomial / Trinomial',
    level: 'أساسي',
    url: '/math/polynomials/polynomial-classification',
    relationReason: 'فهم بنية المقادير الجبرية حسب عدد الحدود ودرجاتها الخطية والتربيعية والتكعيبية',
  },
  'polynomial-addition-subtraction': {
    id: 'polynomial-addition-subtraction',
    title: 'جمع وطرح كثيرات الحدود (تجميع الحدود المتشابهة)',
    emoji: '➕',
    mathSymbol: '(P ± Q)(x) = Σ (aᵢ ± bᵢ)xⁱ',
    level: 'أساسي',
    url: '/math/polynomials/polynomial-addition-subtraction',
    relationReason: 'إتقان تجميع الحدود المتماثلة في المتغير والأس مع توزيع إشارة السالب بدقة',
  },
  'polynomial-monomial-multiplication': {
    id: 'polynomial-monomial-multiplication',
    title: 'ضرب حدية في كثيرة حدود (خاصية التوزيع)',
    emoji: '✖️',
    mathSymbol: 'a · (b + c) = ab + ac',
    level: 'أساسي',
    url: '/math/polynomials/polynomial-monomial-multiplication',
    relationReason: 'تطبيق خاصية التوزيع وجمع أسس المتغيرات المتشابهة في الضرب',
  },
  'polynomial-binomial-multiplication': {
    id: 'polynomial-binomial-multiplication',
    title: 'ضرب ثنائيتي حد (طريقة FOIL / التوزيع)',
    emoji: '🔄',
    mathSymbol: '(a + b)(c + d) = ac + ad + bc + bd',
    level: 'متوسط',
    url: '/math/polynomials/polynomial-binomial-multiplication',
    relationReason: 'الضرب المزدوج للأقواس ودمج حدي الوسطين والطرفين بدقة',
  },
  'polynomial-special-products': {
    id: 'polynomial-special-products',
    title: 'الحالات الخاصة في الضرب (مربع كامل، فرق بين مربعين)',
    emoji: '⭐',
    mathSymbol: '(a ± b)² / (a - b)(a + b)',
    level: 'متوسط',
    url: '/math/polynomials/polynomial-special-products',
    relationReason: 'المتطابقات الشهيرة لاختصار عمليات الضرب والحساب الذهني السريع',
  },
  'polynomial-gcf-factoring': {
    id: 'polynomial-gcf-factoring',
    title: 'تحليل كثيرات الحدود بإخراج العامل المشترك الأكبر (GCF)',
    emoji: '🔍',
    mathSymbol: 'GCF · (Quotient)',
    level: 'متوسط',
    url: '/math/polynomials/polynomial-gcf-factoring',
    relationReason: 'الخطوة الأولى والأساسية لتفكيك المقادير الجبرية واستخراج القواسم المشتركة',
  },
  'polynomial-trinomial-factoring-simple': {
    id: 'polynomial-trinomial-factoring-simple',
    title: 'تحليل ثلاثية الحدود من الشكل (x² + bx + c)',
    emoji: '🎯',
    mathSymbol: 'x² + bx + c = (x + p)(x + q)',
    level: 'متوسط',
    url: '/math/polynomials/polynomial-trinomial-factoring-simple',
    relationReason: 'إيجاد العددين السحريين بحاصل الضرب c والجمع b لتحويل المقدار إلى قوسين',
  },
  'polynomial-trinomial-factoring-advanced': {
    id: 'polynomial-trinomial-factoring-advanced',
    title: 'تحليل ثلاثية الحدود من الشكل (ax² + bx + c)',
    emoji: '⚡',
    mathSymbol: 'ax² + bx + c (a ≠ 1)',
    level: 'متقدم',
    url: '/math/polynomials/polynomial-trinomial-factoring-advanced',
    relationReason: 'طريقة ac وخوارزمية التجزئة والتحليل بالتجميع للمعاملات العامة',
  },
  'polynomial-special-factoring': {
    id: 'polynomial-special-factoring',
    title: 'تحليل الحالات الخاصة (الفرق بين مربعين ومكعبين)',
    emoji: '💎',
    mathSymbol: 'a² - b² / a³ ± b³',
    level: 'متقدم',
    url: '/math/polynomials/polynomial-special-factoring',
    relationReason: 'تطبيق متطابقات الفرق بين مربعين ومجموع وفرق المكعبين وقاعدة SOAP',
  },
  'polynomial-division': {
    id: 'polynomial-division',
    title: 'قسمة كثيرات الحدود (القسمة المطولة والتركيبية)',
    emoji: '➗',
    mathSymbol: 'P(x) = D(x)Q(x) + R(x)',
    level: 'متقدم',
    url: '/math/polynomials/polynomial-division',
    relationReason: 'خوارزمية القسمة الإقليدية ونظرية الباقي والعامل لاستخراج الأصفار',
  },
  'polynomial-word-problems': {
    id: 'polynomial-word-problems',
    title: 'المسائل الكلامية والتطبيقية على كثيرات الحدود (المساحة والحجم)',
    emoji: '📦',
    mathSymbol: 'A = l · w / V = l · w · h',
    level: 'متقدم',
    url: '/math/polynomials/polynomial-word-problems',
    relationReason: 'التطبيق الهندسي والفيزيائي والاقتصادي في قياس المساحات والحجوم والأرباح',
  },
};

const RELATED_MAP: Record<string, string[]> = {
  'polynomial-degree-leading-coefficient': [
    'polynomial-classification',
    'polynomial-addition-subtraction',
    'polynomial-monomial-multiplication',
  ],
  'polynomial-classification': [
    'polynomial-degree-leading-coefficient',
    'polynomial-addition-subtraction',
    'polynomial-binomial-multiplication',
  ],
  'polynomial-addition-subtraction': [
    'polynomial-degree-leading-coefficient',
    'polynomial-classification',
    'polynomial-monomial-multiplication',
  ],
  'polynomial-monomial-multiplication': [
    'polynomial-addition-subtraction',
    'polynomial-binomial-multiplication',
    'polynomial-gcf-factoring',
  ],
  'polynomial-binomial-multiplication': [
    'polynomial-monomial-multiplication',
    'polynomial-special-products',
    'polynomial-trinomial-factoring-simple',
  ],
  'polynomial-special-products': [
    'polynomial-binomial-multiplication',
    'polynomial-special-factoring',
    'polynomial-trinomial-factoring-simple',
  ],
  'polynomial-gcf-factoring': [
    'polynomial-monomial-multiplication',
    'polynomial-trinomial-factoring-simple',
    'polynomial-trinomial-factoring-advanced',
  ],
  'polynomial-trinomial-factoring-simple': [
    'polynomial-binomial-multiplication',
    'polynomial-gcf-factoring',
    'polynomial-trinomial-factoring-advanced',
  ],
  'polynomial-trinomial-factoring-advanced': [
    'polynomial-trinomial-factoring-simple',
    'polynomial-gcf-factoring',
    'polynomial-special-factoring',
  ],
  'polynomial-special-factoring': [
    'polynomial-special-products',
    'polynomial-trinomial-factoring-simple',
    'polynomial-division',
  ],
  'polynomial-division': [
    'polynomial-special-factoring',
    'polynomial-trinomial-factoring-advanced',
    'polynomial-word-problems',
  ],
  'polynomial-word-problems': [
    'polynomial-binomial-multiplication',
    'polynomial-trinomial-factoring-simple',
    'polynomial-division',
  ],
};

interface PolynomialsBacklinkBoxProps {
  currentTestId: string;
  onOpenTest?: (testId: string) => void;
}

export const PolynomialsBacklinkBox: React.FC<PolynomialsBacklinkBoxProps> = ({
  currentTestId,
  onOpenTest,
}) => {
  const { themeClasses } = useEyeTheme();
  const relatedIds = RELATED_MAP[currentTestId] || [
    'polynomial-degree-leading-coefficient',
    'polynomial-addition-subtraction',
    'polynomial-gcf-factoring',
  ];

  const handleNavigate = (id: string, url: string) => {
    if (onOpenTest) {
      onOpenTest(id);
    } else {
      navigateTo(url);
    }
  };

  return (
    <aside
      aria-label="اختبارات ومقالات كثيرات الحدود ذات الصلة"
      className="my-8 rounded-2xl border-2 border-emerald-500/20 bg-gradient-to-br from-emerald-500/[0.04] via-teal-500/[0.02] to-transparent p-6 dark:border-emerald-500/30"
    >
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3 border-b border-black/[0.06] pb-3 dark:border-white/[0.08]">
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600 dark:bg-emerald-400/20 dark:text-emerald-300">
            <Compass className="h-4 w-4" />
          </span>
          <h3 className={`text-base font-bold ${themeClasses.textPrimary}`}>
            اختبارات ومقالات متدرجة في كثيرات الحدود (Polynomials)
          </h3>
        </div>
        <button
          onClick={() => navigateTo('/math/polynomials')}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300 transition-colors"
        >
          <BookOpen className="h-3.5 w-3.5" />
          <span>الدليل الشامل لكثيرات الحدود</span>
          <ArrowRight className="h-3.5 w-3.5 rotate-180" />
        </button>
      </div>

      <p className={`mb-4 text-xs leading-relaxed ${themeClasses.textSecondary}`}>
        تتكامل مهارات جبر كثيرات الحدود بشكل تدريجي من التعرف والتصنيف والعمليات، وصولاً إلى التحليل المتقدم بأنواعه والقسمة وتطبيقات المساحة والحجم. استكمل خطتك التعليمية عبر هذه المحطات المترابطة:
      </p>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
        {relatedIds.map((testKey) => {
          const item = ALL_POLYNOMIALS_TESTS[testKey];
          if (!item) return null;
          return (
            <button
              key={item.id}
              onClick={() => handleNavigate(item.id, item.url)}
              className="group flex flex-col justify-between rounded-xl border border-black/[0.06] bg-white/70 p-4 text-right transition-all hover:-translate-y-0.5 hover:border-emerald-500/40 hover:shadow-md dark:border-white/[0.06] dark:bg-neutral-800/60 dark:hover:border-emerald-400/40"
            >
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-xl">{item.emoji}</span>
                  <span
                    className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${
                      item.level === 'أساسي'
                        ? 'bg-blue-500/10 text-blue-600 dark:text-blue-300'
                        : item.level === 'متوسط'
                        ? 'bg-amber-500/10 text-amber-600 dark:text-amber-300'
                        : 'bg-rose-500/10 text-rose-600 dark:text-rose-300'
                    }`}
                  >
                    {item.level}
                  </span>
                </div>
                <h4
                  className={`text-xs font-bold leading-snug group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors ${themeClasses.textPrimary}`}
                >
                  {item.title}
                </h4>
                <div className="my-1.5 font-mono text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold" dir="ltr">
                  {item.mathSymbol}
                </div>
                <p className={`text-[11px] leading-relaxed line-clamp-2 ${themeClasses.textSecondary}`}>
                  {item.relationReason}
                </p>
              </div>

              <div className="mt-3 flex items-center justify-between border-t border-black/[0.04] pt-2 text-[11px] font-semibold text-emerald-600 dark:border-white/[0.04] dark:text-emerald-400">
                <span>ابدأ الاختبار الآن</span>
                <ArrowRight className="h-3 w-3 rotate-180 transition-transform group-hover:-translate-x-1" />
              </div>
            </button>
          );
        })}
      </div>
    </aside>
  );
};
