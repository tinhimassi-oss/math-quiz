import React from 'react';
import {
  BookOpen,
  Sparkles,
  TrendingUp,
  Lightbulb,
  CheckCircle2,
  Award,
  Layers,
  Calculator,
  Compass,
  ArrowRight,
} from 'lucide-react';
import { useEyeTheme } from '../context/ThemeContext';
import { navigateTo } from '../navigation/router';

interface OrderOfOperationsPillarArticleProps {
  onOpenTest?: (testId: string) => void;
  className?: string;
}

export const OrderOfOperationsPillarArticle: React.FC<OrderOfOperationsPillarArticleProps> = ({
  onOpenTest,
  className = '',
}) => {
  const { themeClasses } = useEyeTheme();

  const handleTestClick = (url: string, testId: string, e: React.MouseEvent) => {
    e.preventDefault();
    if (onOpenTest) {
      onOpenTest(testId);
    } else {
      navigateTo(url);
    }
  };

  return (
    <article
      id="order-of-operations-pillar-guide"
      className={`p-6 sm:p-10 rounded-2xl border ${themeClasses.border} ${themeClasses.cardBg} space-y-8 shadow-2xs leading-relaxed text-right ${className}`}
    >
      {/* Pillar Article Header */}
      <header className="space-y-3 pb-6 border-b border-black/[0.06] dark:border-white/[0.08]">
        <div className="flex items-center gap-2 text-xs font-bold text-[#127052] dark:text-[#5EB5A1]">
          <BookOpen className="w-4 h-4" />
          <span>المقالة المرجعية الشاملة (Pillar Guide) | أكاديمية كويزات الرياضيات</span>
        </div>

        <h2 className={`text-xl sm:text-3xl font-extrabold tracking-tight ${themeClasses.textPrimary}`}>
          الدليل المرجعي الشامل لترتيب العمليات الحسابية (PEMDAS): من الأساسيات حتى المقادير المركبة
        </h2>

        <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
          دليل تربوي ومنهجي مرجعي شامل لقواعد <strong>ترتيب العمليات الحسابية (Order of Operations)</strong>. يضم <strong>12 اختباراً تفاعلياً مستقلاً</strong> مصممة بعناية مع شروحات فورية وشهادات إتقان، تتدرج من أسبقية الضرب والقسمة بدون أقواس، إلى سلطان الأقواس البسيطة والمتداخلة، مروراً بالأسس والجذور والمقادير الكسرية والأعداد السالبة، وصولاً إلى ألغاز اكتشاف الأخطاء والمسائل الكلامية التطبيقية.
        </p>

        {/* Quick Metadata Bar */}
        <div className="flex flex-wrap items-center gap-3 pt-2 text-[11px] text-slate-500 dark:text-slate-400">
          <span className="flex items-center gap-1">
            <Layers className="w-3.5 h-3.5 text-[#127052] dark:text-[#5EB5A1]" />
            12 اختباراً تفاعلياً متدرجاً
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Calculator className="w-3.5 h-3.5 text-[#127052] dark:text-[#5EB5A1]" />
            منظومة PEMDAS / BODMAS الكاملة
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Award className="w-3.5 h-3.5 text-[#127052] dark:text-[#5EB5A1]" />
            شروحات خطوة بخطوة وتغذية راجعة فورية
          </span>
        </div>
      </header>

      {/* Section 1: The PEMDAS Pyramid */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-[#3B7A6A]/10 text-[#127052] dark:text-[#5EB5A1]">
            <Sparkles className="w-5 h-5" />
          </div>
          <h3 className={`text-lg sm:text-xl font-bold ${themeClasses.textPrimary}`}>
            1. هرم الأولويات الحسابية: دستور الرياضيات العالمي
          </h3>
        </div>

        <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
          بدون ترتيب متفق عليه للعمليات، ستكون الرياضيات في فوضى عارمة؛ فالتعبير البسيط 5 + 3 × 2 قد ينتج 16 إذا بدأنا بالجمع، أو 11 إذا بدأنا بالضرب! لهذا السبب وضع علماء الرياضيات اتفاقاً عالمياً صارماً يُختصر بـ <strong>PEMDAS</strong>:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 pt-2">
          <div className={`p-4 rounded-xl border ${themeClasses.border} bg-black/[0.01] dark:bg-white/[0.01]`}>
            <div className="font-bold text-xs mb-1 text-[#127052] dark:text-[#5EB5A1]">1. الأقواس والمطلق (P)</div>
            <p className={`text-[11px] ${themeClasses.textMuted} leading-relaxed`}>
              كل ما بداخل الأقواس () و [] و {} والقيمة المطلقة |x| وخطوط الكسور يُحسب أولاً قبل أي شيء خارجي.
            </p>
          </div>
          <div className={`p-4 rounded-xl border ${themeClasses.border} bg-black/[0.01] dark:bg-white/[0.01]`}>
            <div className="font-bold text-xs mb-1 text-[#127052] dark:text-[#5EB5A1]">2. الأسس والجذور (E)</div>
            <p className={`text-[11px] ${themeClasses.textMuted} leading-relaxed`}>
              رفع الأعداد للقوى (مثل 3² = 9) وحساب الجذور التربيعية (مثل √16 = 4) تلي الأقواس مباشرة وقبل الضرب.
            </p>
          </div>
          <div className={`p-4 rounded-xl border ${themeClasses.border} bg-black/[0.01] dark:bg-white/[0.01]`}>
            <div className="font-bold text-xs mb-1 text-[#127052] dark:text-[#5EB5A1]">3. الضرب والقسمة (MD)</div>
            <p className={`text-[11px] ${themeClasses.textMuted} leading-relaxed`}>
              لهما نفس الرتبة ويتفوقان على الجمع والطرح. عند اجتماعهما، يُحلان بالتسلسل من اليسار إلى اليمين.
            </p>
          </div>
          <div className={`p-4 rounded-xl border ${themeClasses.border} bg-black/[0.01] dark:bg-white/[0.01]`}>
            <div className="font-bold text-xs mb-1 text-[#127052] dark:text-[#5EB5A1]">4. الجمع والطرح (AS)</div>
            <p className={`text-[11px] ${themeClasses.textMuted} leading-relaxed`}>
              آخر العمليات تنفيذاً في أي مسألة. عند اجتماعهما، يُحلان بالتسلسل من اليسار إلى اليمين.
            </p>
          </div>
        </div>

        {/* Action Link to foundational tests */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <a
            href="#/math/order-of-operations/basic-no-parentheses"
            onClick={(e) => handleTestClick('/math/order-of-operations/basic-no-parentheses', 'operations-basic-no-parentheses', e)}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#127052] dark:text-[#5EB5A1] bg-[#3B7A6A]/10 hover:bg-[#3B7A6A]/20 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
          >
            <span>اختبار العمليات الأساسية بدون أقواس</span>
            <ArrowRight className="w-3.5 h-3.5 rotate-180" />
          </a>
          <a
            href="#/math/order-of-operations/simple-parentheses"
            onClick={(e) => handleTestClick('/math/order-of-operations/simple-parentheses', 'operations-simple-parentheses', e)}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#127052] dark:text-[#5EB5A1] bg-[#3B7A6A]/10 hover:bg-[#3B7A6A]/20 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
          >
            <span>اختبار الأقواس البسيطة</span>
            <ArrowRight className="w-3.5 h-3.5 rotate-180" />
          </a>
          <a
            href="#/math/order-of-operations/nested-brackets"
            onClick={(e) => handleTestClick('/math/order-of-operations/nested-brackets', 'operations-nested-brackets', e)}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#127052] dark:text-[#5EB5A1] bg-[#3B7A6A]/10 hover:bg-[#3B7A6A]/20 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
          >
            <span>اختبار الأقواس المتداخلة</span>
            <ArrowRight className="w-3.5 h-3.5 rotate-180" />
          </a>
        </div>
      </section>

      {/* Section 2: Exponents, Roots, and Fractions */}
      <section className="space-y-4 pt-4 border-t border-black/[0.04] dark:border-white/[0.06]">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-[#3B7A6A]/10 text-[#127052] dark:text-[#5EB5A1]">
            <TrendingUp className="w-5 h-5" />
          </div>
          <h3 className={`text-lg sm:text-xl font-bold ${themeClasses.textPrimary}`}>
            2. الأسس، الجذور، والمقادير الكسرية
          </h3>
        </div>

        <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
          الأسس والجذور تُعامل كقوى عالية الرتبة. في التعبير 4 + 3² × 2، نحسب 3² = 9 أولاً، ثم نضرب 9 × 2 = 18، ثم نجمع 4 + 18 = 22. وبالمثل، في التعبير الكسري (12 + 8) ÷ (6 - 1)، فإن خط الكسر يفرض حساب البسط كاملاً (20) والمقام كاملاً (5) قبل إجراء القسمة للحصول على 4.
        </p>

        <div className="p-4 rounded-xl border border-emerald-500/20 bg-emerald-50/40 dark:bg-emerald-950/20 text-xs sm:text-sm space-y-2">
          <div className="font-bold text-emerald-800 dark:text-emerald-300 flex items-center gap-2">
            <Lightbulb className="w-4 h-4" />
            <span>الجذر التربيعي كقوس تجميعي وكأس</span>
          </div>
          <p className="text-emerald-900 dark:text-emerald-200 text-xs leading-relaxed">
            علامة الجذر الممتدة √(16 + 9) تعمل كقوسين يحميان ما تحتهما: نجمع 16 + 9 = 25 أولاً، ثم نأخذ الجذر √25 = 5 (ولا يجوز توزيع الجذر لقول 4 + 3 = 7).
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <a
            href="#/math/order-of-operations/with-exponents"
            onClick={(e) => handleTestClick('/math/order-of-operations/with-exponents', 'operations-with-exponents', e)}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#127052] dark:text-[#5EB5A1] bg-[#3B7A6A]/10 hover:bg-[#3B7A6A]/20 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
          >
            <span>اختبار الأسس والمعاملات الأسية</span>
            <ArrowRight className="w-3.5 h-3.5 rotate-180" />
          </a>
          <a
            href="#/math/order-of-operations/with-square-roots"
            onClick={(e) => handleTestClick('/math/order-of-operations/with-square-roots', 'operations-with-square-roots', e)}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#127052] dark:text-[#5EB5A1] bg-[#3B7A6A]/10 hover:bg-[#3B7A6A]/20 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
          >
            <span>اختبار الجذور التربيعية</span>
            <ArrowRight className="w-3.5 h-3.5 rotate-180" />
          </a>
          <a
            href="#/math/order-of-operations/fractional-expressions"
            onClick={(e) => handleTestClick('/math/order-of-operations/fractional-expressions', 'operations-fractional-expressions', e)}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#127052] dark:text-[#5EB5A1] bg-[#3B7A6A]/10 hover:bg-[#3B7A6A]/20 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
          >
            <span>اختبار المقادير الكسرية</span>
            <ArrowRight className="w-3.5 h-3.5 rotate-180" />
          </a>
        </div>
      </section>

      {/* Section 3: Negative Numbers, Decimals, and Absolute Values */}
      <section className="space-y-4 pt-4 border-t border-black/[0.04] dark:border-white/[0.06]">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-[#3B7A6A]/10 text-[#127052] dark:text-[#5EB5A1]">
            <Compass className="w-5 h-5" />
          </div>
          <h3 className={`text-lg sm:text-xl font-bold ${themeClasses.textPrimary}`}>
            3. قواعد الإشارات، الأعداد العشرية، والقيمة المطلقة
          </h3>
        </div>

        <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
          التحدي الحقيقي يكمن في دمج قواعد الإشارات السالبة والمطلقة:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
          <div className={`p-4 rounded-xl border ${themeClasses.border} bg-black/[0.01] dark:bg-white/[0.01]`}>
            <div className="font-bold text-xs mb-1 text-[#127052] dark:text-[#5EB5A1]">الأعداد السالبة والضرب</div>
            <p className={`text-[11px] ${themeClasses.textMuted} leading-relaxed`}>
              في -4 + 6 × (-2)، نضرب أولاً: 6 × (-2) = -12، ثم نجمع: -4 + (-12) = -16. كما نفرق بين (-5)² = 25 وبين -5² = -25.
            </p>
          </div>
          <div className={`p-4 rounded-xl border ${themeClasses.border} bg-black/[0.01] dark:bg-white/[0.01]`}>
            <div className="font-bold text-xs mb-1 text-[#127052] dark:text-[#5EB5A1]">الأعشار والكسور</div>
            <p className={`text-[11px] ${themeClasses.textMuted} leading-relaxed`}>
              في 2.5 + 1.5 × 4، نضرب 1.5 × 4 = 6.0 أولاً، ثم نجمع 2.5 + 6.0 = 8.5، محتفظين بالدقة العشرية الكاملة.
            </p>
          </div>
          <div className={`p-4 rounded-xl border ${themeClasses.border} bg-black/[0.01] dark:bg-white/[0.01]`}>
            <div className="font-bold text-xs mb-1 text-[#127052] dark:text-[#5EB5A1]">القيمة المطلقة |x|</div>
            <p className={`text-[11px] ${themeClasses.textMuted} leading-relaxed`}>
              في |3 - 8| × 2 + 1، نحسب داخل المطلق: 3 - 8 = -5، ومطلقه 5، ثم 5 × 2 + 1 = 11.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <a
            href="#/math/order-of-operations/with-negative-numbers"
            onClick={(e) => handleTestClick('/math/order-of-operations/with-negative-numbers', 'operations-with-negative-numbers', e)}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#127052] dark:text-[#5EB5A1] bg-[#3B7A6A]/10 hover:bg-[#3B7A6A]/20 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
          >
            <span>اختبار الأعداد السالبة</span>
            <ArrowRight className="w-3.5 h-3.5 rotate-180" />
          </a>
          <a
            href="#/math/order-of-operations/fractions-decimals"
            onClick={(e) => handleTestClick('/math/order-of-operations/fractions-decimals', 'operations-fractions-decimals', e)}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#127052] dark:text-[#5EB5A1] bg-[#3B7A6A]/10 hover:bg-[#3B7A6A]/20 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
          >
            <span>اختبار الكسور والعشريات</span>
            <ArrowRight className="w-3.5 h-3.5 rotate-180" />
          </a>
          <a
            href="#/math/order-of-operations/absolute-value"
            onClick={(e) => handleTestClick('/math/order-of-operations/absolute-value', 'operations-absolute-value', e)}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#127052] dark:text-[#5EB5A1] bg-[#3B7A6A]/10 hover:bg-[#3B7A6A]/20 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
          >
            <span>اختبار القيمة المطلقة</span>
            <ArrowRight className="w-3.5 h-3.5 rotate-180" />
          </a>
        </div>
      </section>

      {/* Section 4: Critical Thinking, Missing Brackets, and Real-Life Applications */}
      <section className="space-y-4 pt-4 border-t border-black/[0.04] dark:border-white/[0.06]">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-[#3B7A6A]/10 text-[#127052] dark:text-[#5EB5A1]">
            <Award className="w-5 h-5" />
          </div>
          <h3 className={`text-lg sm:text-xl font-bold ${themeClasses.textPrimary}`}>
            4. التفكير الناقد، الألغاز، والمسائل الكلامية
          </h3>
        </div>

        <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
          قمة الإتقان لا تقتصر على الحساب الآلي، بل تشمل القدرة على اكتشاف الخطأ الحسابي وتصحيحه (مثل كشف خطأ 10 - 2 × 3 = 24 وبيان أن الصحيح 4)، وحل ألغاز الأقواس المفقودة (مثل وضع أقواس في 4 + 2 × 5 لتصبح 30 $\implies$ (4 + 2) × 5)، وترجمة المواقف الشرائية اليومية (3 كتب بـ 10 ريالات + حقيبة بـ 25 - كوبون 5 ريالات $\implies$ 50 ريالاً).
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 text-center">
          <div className={`p-3 rounded-lg border ${themeClasses.border} bg-black/[0.01] dark:bg-white/[0.01]`}>
            <div className="text-base font-bold text-[#127052] dark:text-[#5EB5A1]">11</div>
            <div className={`text-[10px] ${themeClasses.textMuted}`}>5 + 3 × 2 (ضرب أولاً)</div>
          </div>
          <div className={`p-3 rounded-lg border ${themeClasses.border} bg-black/[0.01] dark:bg-white/[0.01]`}>
            <div className="text-base font-bold text-[#127052] dark:text-[#5EB5A1]">16</div>
            <div className={`text-[10px] ${themeClasses.textMuted}`}>(5 + 3) × 2 (قوس أولاً)</div>
          </div>
          <div className={`p-3 rounded-lg border ${themeClasses.border} bg-black/[0.01] dark:bg-white/[0.01]`}>
            <div className="text-base font-bold text-[#127052] dark:text-[#5EB5A1]">22</div>
            <div className={`text-[10px] ${themeClasses.textMuted}`}>4 + 3² × 2 (أس أولاً)</div>
          </div>
          <div className={`p-3 rounded-lg border ${themeClasses.border} bg-black/[0.01] dark:bg-white/[0.01]`}>
            <div className="text-base font-bold text-[#127052] dark:text-[#5EB5A1]">50 ريالاً</div>
            <div className={`text-[10px] ${themeClasses.textMuted}`}>3 × 10 + 25 - 5</div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <a
            href="#/math/order-of-operations/error-detection"
            onClick={(e) => handleTestClick('/math/order-of-operations/error-detection', 'operations-error-detection', e)}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#127052] dark:text-[#5EB5A1] bg-[#3B7A6A]/10 hover:bg-[#3B7A6A]/20 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
          >
            <span>اكتشاف الأخطاء الحسابية</span>
            <ArrowRight className="w-3.5 h-3.5 rotate-180" />
          </a>
          <a
            href="#/math/order-of-operations/missing-brackets-signs"
            onClick={(e) => handleTestClick('/math/order-of-operations/missing-brackets-signs', 'operations-missing-brackets-signs', e)}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#127052] dark:text-[#5EB5A1] bg-[#3B7A6A]/10 hover:bg-[#3B7A6A]/20 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
          >
            <span>الأقواس والرموز المفقودة</span>
            <ArrowRight className="w-3.5 h-3.5 rotate-180" />
          </a>
          <a
            href="#/math/order-of-operations/word-problems"
            onClick={(e) => handleTestClick('/math/order-of-operations/word-problems', 'operations-word-problems', e)}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#127052] dark:text-[#5EB5A1] bg-[#3B7A6A]/10 hover:bg-[#3B7A6A]/20 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
          >
            <span>المسائل الكلامية والتطبيقية</span>
            <ArrowRight className="w-3.5 h-3.5 rotate-180" />
          </a>
        </div>
      </section>

      {/* Golden Conclusion Box */}
      <footer className="pt-6 border-t border-black/[0.06] dark:border-white/[0.08] space-y-3">
        <div className="flex items-center gap-2 font-bold text-xs text-[#127052] dark:text-[#5EB5A1]">
          <CheckCircle2 className="w-4 h-4" />
          <span>خلاصة الدليل المرجعي لمنظومة ترتيب العمليات</span>
        </div>
        <p className={`text-xs ${themeClasses.textMuted} leading-relaxed`}>
          ترتيب العمليات الحسابية هو حجر الزاوية لكل فروع الجبر، التفاضل والتكامل، البرمجة، والهندسة. بالتدرب على الاختبارات الاثني عشر أعلاه، تكتسب مناعة كاملة ضد أخطاء الأولويات وتضمن دقة حسابية لا تتزعزع في مسارك الأكاديمي والمهني.
        </p>
      </footer>
    </article>
  );
};
