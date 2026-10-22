import React from 'react';
import { ArrowRight, BookOpen, Layers } from 'lucide-react';
import { useEyeTheme } from '../context/ThemeContext';
import { navigateTo } from '../navigation/router';

export interface RelatedDerivativesQuizInfo {
  id: string;
  title: string;
  emoji: string;
  mathSymbol: string;
  level: 'أساسي' | 'متوسط' | 'متقدم';
  url: string;
  relationReason: string;
}

export const ALL_DERIVATIVES_TESTS: Record<
  string,
  RelatedDerivativesQuizInfo
> = {
  'definition-of-derivative': {
    id: 'definition-of-derivative',
    title: 'التعريف العام للمشتقة باستخدام النهايات',
    emoji: '',
    mathSymbol: "f'(x) = lim (h→0) [f(x+h)-f(x)]/h",
    level: 'متقدم',
    url: '/domain/calculus/derivatives-differentiation/definition-of-derivative',
    relationReason: 'الأساس المفاهيمي الأول لحساب معدل التغير اللحظي وميل المماس من المبادئ الأولى',
  },
  'basic-differentiation-rules': {
    id: 'basic-differentiation-rules',
    title: 'قواعد الاشتقاق الأساسية (قاعدة القوة، الثابت، المجموع والفرق)',
    emoji: '',
    mathSymbol: 'd/dx[xⁿ] = n xⁿ⁻¹',
    level: 'أساسي',
    url: '/domain/calculus/derivatives-differentiation/basic-differentiation-rules',
    relationReason: 'القواعد الجبرية المباشرة لاشتقاق كثيرات الحدود والأسس الحقيقية دون الحاجة للنهايات',
  },
  'product-rule': {
    id: 'product-rule',
    title: 'قاعدة ضرب دالتين (Product Rule)',
    emoji: '',
    mathSymbol: '(u · v)\' = u v\' + v u\'',
    level: 'متوسط',
    url: '/domain/calculus/derivatives-differentiation/product-rule',
    relationReason: 'قاعدة لايبنتز لتفاضل المقادير المضروبة وجمع تأثير تغير كل دالة على حدة',
  },
  'quotient-rule': {
    id: 'quotient-rule',
    title: 'قاعدة قسمة دالتين (Quotient Rule)',
    emoji: '',
    mathSymbol: '(u/v)\' = (v u\' - u v\') / v²',
    level: 'متوسط',
    url: '/domain/calculus/derivatives-differentiation/quotient-rule',
    relationReason: 'اشتقاق الدوال الكسرية والنسبية مع مراعاة الترتيب الصارم لطرح حدود البسط',
  },
  'chain-rule': {
    id: 'chain-rule',
    title: 'قاعدة السلسلة والاشتقاق المركب (Chain Rule)',
    emoji: '',
    mathSymbol: 'dy/dx = (dy/du) · (du/dx)',
    level: 'متوسط',
    url: '/domain/calculus/derivatives-differentiation/chain-rule',
    relationReason: 'أهم قاعدة في التفاضل لربط معدلات التغير في الدوال المركبة والمرفوعة لأسس',
  },
  'trigonometric-differentiation': {
    id: 'trigonometric-differentiation',
    title: 'اشتقاق الدوال المثلثية (Trigonometric Functions Differentiation)',
    emoji: '',
    mathSymbol: 'd/dx[sin u] = u\' cos u',
    level: 'متوسط',
    url: '/domain/calculus/derivatives-differentiation/trigonometric-differentiation',
    relationReason: 'تفاضل الدوال الدورية والاهتزازية (الجيب وجيب التمام والظل) وضبط الإشارات',
  },
  'exponential-logarithmic-differentiation': {
    id: 'exponential-logarithmic-differentiation',
    title: 'اشتقاق الدوال الأسية واللوغاريتمية (Exponential & Logarithmic Differentiation)',
    emoji: '',
    mathSymbol: '(eᵘ)\' = u\' eᵘ | (ln u)\' = u\'/u',
    level: 'متقدم',
    url: '/domain/calculus/derivatives-differentiation/exponential-logarithmic-differentiation',
    relationReason: 'تفاضل دوال النمو والاضمحلال الطبيعي، وقواعد اللوغاريتم والتفاضل اللوغاريتمي',
  },
  'implicit-differentiation': {
    id: 'implicit-differentiation',
    title: 'الاشتقاق الضمني (Implicit Differentiation)',
    emoji: '',
    mathSymbol: 'd/dx[x² + y² = r²] ⇒ dy/dx',
    level: 'متقدم',
    url: '/domain/calculus/derivatives-differentiation/implicit-differentiation',
    relationReason: 'إيجاد ميل المماس للمنحنيات الهندسية دون الحاجة لفصل y صراحة',
  },
  'higher-order-derivatives': {
    id: 'higher-order-derivatives',
    title: 'المشتقات ذات الرتب العليا (Higher-Order Derivatives)',
    emoji: '',
    mathSymbol: 'd²y/dx² = f\'\'(x)',
    level: 'متوسط',
    url: '/domain/calculus/derivatives-differentiation/higher-order-derivatives',
    relationReason: 'المشتقة الثانية والثالثة لدراسة التسارع وانحناء وتقعر المنحنيات ونقاط الانقلاب',
  },
  'tangent-normal-lines': {
    id: 'tangent-normal-lines',
    title: 'معادلة مماس ونظام العمودي للمنحنى (Tangent and Normal Lines)',
    emoji: '',
    mathSymbol: 'y - y₀ = m(x - x₀) | m_n = -1/m',
    level: 'متقدم',
    url: '/domain/calculus/derivatives-differentiation/tangent-normal-lines',
    relationReason: 'التطبيق الهندسي المباشر للمشتقة وصياغة معادلات المستقيمات المماسة والناظمة',
  },
  'critical-points-extrema': {
    id: 'critical-points-extrema',
    title: 'النقاط الحرجة والتزايد والتناقص والقيم القصوى (Critical Points & Extrema)',
    emoji: '',
    mathSymbol: 'f\'(c) = 0 | f\'\'(c) ≶ 0',
    level: 'متقدم',
    url: '/domain/calculus/derivatives-differentiation/critical-points-extrema',
    relationReason: 'تحديد قمم وقيعان الدوال وسلوك التزايد والتناقص وتطبيق اختبارات المشتقات',
  },
  'related-rates-optimization': {
    id: 'related-rates-optimization',
    title: 'المعدلات المرتبطة بالزمن والتطبيقات الحياتية (Related Rates & Optimization)',
    emoji: '',
    mathSymbol: 'dV/dt = 3s² (ds/dt)',
    level: 'متقدم',
    url: '/domain/calculus/derivatives-differentiation/related-rates-optimization',
    relationReason: 'نمذجة تغيرات العالم الفيزيائي الواقعي مع الزمن وحل أعقد مسائل التحسين العملي',
  },
};

interface DerivativesDifferentiationBacklinkBoxProps {
  currentTestId: string;
}

export const DerivativesDifferentiationBacklinkBox: React.FC<
  DerivativesDifferentiationBacklinkBoxProps
> = ({ currentTestId }) => {
  const { themeClasses } = useEyeTheme();

  // Pick related quizzes excluding the current one
  const otherQuizzes = Object.values(ALL_DERIVATIVES_TESTS).filter(
    (q) => q.id !== currentTestId
  );

  return (
    <section
      aria-label="اختبارات ومواضيع المشتقات والتفاضل ذات الصلة"
      className={`p-6 sm:p-8 rounded-2xl border ${themeClasses.border} ${themeClasses.cardBg} space-y-6 shadow-2xs`}
    >
      <div className="flex items-center justify-between pb-3 border-b border-black/[0.05] dark:border-white/[0.05]">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-700 dark:text-indigo-300">
            <Layers className="w-5 h-5" />
          </div>
          <div>
            <h3 className={`text-base sm:text-lg font-bold ${themeClasses.textPrimary}`}>
              المسار التعليمي الشامل للمشتقات والتفاضل
            </h3>
            <p className={`text-xs ${themeClasses.textSecondary}`}>
              انتقل بسهولة بين اختبارات وموضوعات التفاضل الـ 12 المترابطة لتعزيز إتقانك الشامل
            </p>
          </div>
        </div>

        <button
          onClick={() => navigateTo('/domain/calculus/derivatives-differentiation')}
          className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-indigo-700 dark:text-indigo-300 hover:bg-indigo-500/10 transition-colors cursor-pointer"
        >
          <BookOpen className="w-3.5 h-3.5" />
          <span>فهرس الموضوعات</span>
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {otherQuizzes.map((quiz) => (
          <a
            key={quiz.id}
            href={`#${quiz.url}`}
            onClick={(e) => {
              e.preventDefault();
              navigateTo(quiz.url);
            }}
            className={`group p-3.5 rounded-xl border border-black/[0.05] dark:border-white/[0.05] hover:border-indigo-500/40 hover:bg-indigo-500/[0.03] transition-all flex flex-col justify-between gap-2.5 text-right no-underline`}
          >
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-base">{quiz.emoji}</span>
                <span className="text-[10px] px-2 py-0.5 rounded-md font-mono bg-indigo-500/10 text-indigo-700 dark:text-indigo-300">
                  {quiz.level}
                </span>
              </div>
              <h4 className={`text-xs sm:text-sm font-bold group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors ${themeClasses.textPrimary}`}>
                {quiz.title}
              </h4>
              <p className={`text-[11px] ${themeClasses.textSecondary} leading-relaxed line-clamp-2`}>
                {quiz.relationReason}
              </p>
            </div>

            <div className="pt-2 border-t border-black/[0.03] dark:border-white/[0.03] flex items-center justify-between text-[11px] font-mono text-indigo-600 dark:text-indigo-400">
              <span className="dir-ltr">{quiz.mathSymbol}</span>
              <span className="inline-flex items-center gap-1 font-sans text-[11px] text-gray-500 group-hover:text-indigo-600 transition-colors">
                <span>ابدأ الآن</span>
                <ArrowRight className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};
