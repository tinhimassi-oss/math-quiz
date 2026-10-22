import React from 'react';
import { ArrowRight, BookOpen, Layers } from 'lucide-react';
import { useEyeTheme } from '../context/ThemeContext';
import { navigateTo } from '../navigation/router';

export interface RelatedDiffEqQuizInfo {
  id: string;
  title: string;
  emoji: string;
  mathSymbol: string;
  level: 'أساسي' | 'متوسط' | 'متقدم';
  url: string;
  relationReason: string;
}

export const ALL_DIFFERENTIAL_EQUATIONS_TESTS: Record<
  string,
  RelatedDiffEqQuizInfo
> = {
  'classification-order-degree': {
    id: 'classification-order-degree',
    title: 'التعرف على المعادلة ورتبتها ودرجتها ونوعها',
    emoji: '',
    mathSymbol: '(d²y/dx²)³ + 5y\' = 0',
    level: 'أساسي',
    url: '/domain/calculus/differential-equations/classification-order-degree',
    relationReason: 'الخطوة الأولى الحتمية لتحديد استراتيجية الحل المناسبة بحسب الرتبة والدرجة والخطية',
  },
  'verifying-solutions': {
    id: 'verifying-solutions',
    title: 'التحقق من الحلول العامة والخاصة للملائمة',
    emoji: '',
    mathSymbol: 'y = Ce^(2x) ⟹ y\' = 2y',
    level: 'أساسي',
    url: '/domain/calculus/differential-equations/verifying-solutions',
    relationReason: 'اختبار دقة الحلول بالاشتقاق والتعويض وتطبيق الشروط الابتدائية لحساب الثوابت',
  },
  'separable-differential-equations': {
    id: 'separable-differential-equations',
    title: 'المعادلات التفاضلية قابلة الفصل (Separable)',
    emoji: '',
    mathSymbol: 'dy/dx = g(x) h(y)',
    level: 'متوسط',
    url: '/domain/calculus/differential-equations/separable-differential-equations',
    relationReason: 'عزل المتغيرات ومكاملة الطرفين استقلالياً لإيجاد الحلول الصريحة والضمنية',
  },
  'first-order-linear-integrating-factor': {
    id: 'first-order-linear-integrating-factor',
    title: 'المعادلات الخطية وعامل التكامل (I(x))',
    emoji: '',
    mathSymbol: 'I(x) = e^(∫ P dx)',
    level: 'متوسط',
    url: '/domain/calculus/differential-equations/first-order-linear-integrating-factor',
    relationReason: 'تحويل الطرف الأيسر لمشتقة حاصل ضرب دالتين وحل المعادلات ذات الصورة القياسية',
  },
  'homogeneous-first-order': {
    id: 'homogeneous-first-order',
    title: 'المعادلات التفاضلية المتجانسة',
    emoji: '',
    mathSymbol: 'dy/dx = F(y/x) | y = vx',
    level: 'متوسط',
    url: '/domain/calculus/differential-equations/homogeneous-first-order',
    relationReason: 'الاستفادة من تناسب النسب الرياضية وتحويل المعادلة لمعادلة قابلة للفصل بالتعويض y = vx',
  },
  'exact-differential-equations': {
    id: 'exact-differential-equations',
    title: 'المعادلات التفاضلية التامة (Exact)',
    emoji: '',
    mathSymbol: '∂M/∂y = ∂N/∂x',
    level: 'متقدم',
    url: '/domain/calculus/differential-equations/exact-differential-equations',
    relationReason: 'تطبيق شرط أويلر للتكاملية واسترجاع دالة الجهد الكامنة F(x, y) = C للحقول المحافظة',
  },
  'bernoulli-differential-equations': {
    id: 'bernoulli-differential-equations',
    title: 'معادلة برنولي (Bernoulli Equations)',
    emoji: '',
    mathSymbol: 'v = y^(1-n)',
    level: 'متقدم',
    url: '/domain/calculus/differential-equations/bernoulli-differential-equations',
    relationReason: 'ترويض اللاخطية بالتعويض العبقري لتحويل المعادلة لمعادلة خطية قابلة للحل بعامل التكامل',
  },
  'second-order-constant-coefficients': {
    id: 'second-order-constant-coefficients',
    title: 'معادلات الرتبة الثانية ذات المعاملات الثابتة',
    emoji: '',
    mathSymbol: 'ar² + br + c = 0',
    level: 'متوسط',
    url: '/domain/calculus/differential-equations/second-order-constant-coefficients',
    relationReason: 'استخدام المعادلة المميزة ومبدأ التراكب الخطي لإيجاد الحل العام من الجذور الحقيقية',
  },
  'repeated-complex-roots': {
    id: 'repeated-complex-roots',
    title: 'الجذور المركبة والمكررة للمعادلة المميزة',
    emoji: '',
    mathSymbol: 'r = α ± iβ | y = (C₁+C₂x)e^(rx)',
    level: 'متقدم',
    url: '/domain/calculus/differential-equations/repeated-complex-roots',
    relationReason: 'تفسير الاهتزازات التوافقية المخمدة وصيغة أويلر وحالات الإخماد الحرج بدون تذبذب',
  },
  'laplace-transforms-ode': {
    id: 'laplace-transforms-ode',
    title: 'تحويلات لابلاس لحل المعادلات التفاضلية',
    emoji: '',
    mathSymbol: 'ℒ{f(t)} = ∫₀^∞ e^(-st) f dt',
    level: 'متقدم',
    url: '/domain/calculus/differential-equations/laplace-transforms-ode',
    relationReason: 'الانتقال إلى المجال الترددي الجبري لدمج الشروط الابتدائية وحل معادلات القوى النبضية',
  },
  'modeling-growth-decay-cooling': {
    id: 'modeling-growth-decay-cooling',
    title: 'النمذجة الحياتية (النمو والاضمحلال وتبريد نيوتن)',
    emoji: '',
    mathSymbol: 'dP/dt = kP | dT/dt = -k(T - T_env)',
    level: 'متوسط',
    url: '/domain/calculus/differential-equations/modeling-growth-decay-cooling',
    relationReason: 'تطبيقات واقعية على تكاثر البكتيريا، التحلل الإشعاعي، والطب الشرعي لحساب زمن الوفاة',
  },
  'rlc-circuits-vibrations': {
    id: 'rlc-circuits-vibrations',
    title: 'الدوائر الكهربائية RLC والحركة الاهتزازية',
    emoji: '',
    mathSymbol: 'my\'\' + cy\' + ky = F(t)',
    level: 'متقدم',
    url: '/domain/calculus/differential-equations/rlc-circuits-vibrations',
    relationReason: 'التماثل الفيزيائي بين النوابض والملفات والمكثفات ودراسة ظاهرة الرنين والحل المستقر',
  },
};

interface DifferentialEquationsBacklinkBoxProps {
  currentTestId: string;
  onSelectTest?: (testId: string) => void;
}

export const DifferentialEquationsBacklinkBox: React.FC<DifferentialEquationsBacklinkBoxProps> = ({
  currentTestId,
  onSelectTest,
}) => {
  const { themeClasses } = useEyeTheme();

  // Get related tests excluding current test
  const relatedTests = Object.values(ALL_DIFFERENTIAL_EQUATIONS_TESTS).filter(
    (t) => t.id !== currentTestId
  );

  const handleClick = (e: React.MouseEvent, test: RelatedDiffEqQuizInfo) => {
    e.preventDefault();
    if (onSelectTest) {
      onSelectTest(test.id);
    } else {
      navigateTo(test.url);
    }
  };

  return (
    <div
      className={`rounded-2xl border ${themeClasses.border} ${themeClasses.cardBg} p-5 sm:p-7 shadow-sm transition-all text-right mt-8`}
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-black/5 dark:border-white/5 pb-4 mb-5">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border border-indigo-500/20 mb-1.5">
            <Layers className="w-3.5 h-3.5" />
            شبكة اختبارات المعادلات التفاضلية المتكاملة
          </div>
          <h3 className={`text-base sm:text-lg font-bold ${themeClasses.textPrimary}`}>
            مسارات مقترحة لاختبارات متصلة في المعادلات التفاضلية
          </h3>
          <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} mt-0.5`}>
            تنقل بمرونة بين الاختبارات لاكتساب المهارات من المفاهيم التأسيسية حتى أرقى التطبيقات الهندسية
          </p>
        </div>

        <button
          onClick={() => navigateTo('/domain/calculus/differential-equations')}
          className={`self-start sm:self-center px-4 py-2 rounded-xl text-xs font-semibold border ${themeClasses.border} hover:bg-black/5 dark:hover:bg-white/5 transition-colors flex items-center gap-1.5 text-indigo-700 dark:text-indigo-300`}
        >
          <BookOpen className="w-3.5 h-3.5" />
          فهرس المعادلات التفاضلية
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
        {relatedTests.slice(0, 6).map((test) => (
          <a
            key={test.id}
            href={`#${test.url}`}
            onClick={(e) => handleClick(e, test)}
            className={`group block p-3.5 rounded-xl border ${themeClasses.border} hover:border-indigo-500/40 bg-black/[0.01] dark:bg-white/[0.01] hover:bg-indigo-500/[0.04] transition-all`}
          >
            <div className="flex items-start justify-between gap-2 mb-2">
              <span className="text-xl">{test.emoji}</span>
              <span
                className={`text-[10px] px-2 py-0.5 rounded-md font-medium ${
                  test.level === 'أساسي'
                    ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20'
                    : test.level === 'متوسط'
                    ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20'
                    : 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20'
                }`}
              >
                {test.level}
              </span>
            </div>

            <h4
              className={`text-xs sm:text-sm font-bold ${themeClasses.textPrimary} group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-1`}
            >
              {test.title}
            </h4>

            <div className="my-1.5 text-[11px] font-mono text-indigo-600/90 dark:text-indigo-400/90 bg-indigo-500/5 px-2 py-0.5 rounded dir-ltr text-center truncate">
              {test.mathSymbol}
            </div>

            <p className={`text-[11px] ${themeClasses.textSecondary} line-clamp-2 leading-relaxed mt-1`}>
              {test.relationReason}
            </p>

            <div className="mt-2.5 pt-2 border-t border-black/[0.04] dark:border-white/[0.04] flex items-center justify-between text-[11px] text-indigo-700 dark:text-indigo-300 font-medium">
              <span>بدء الاختبار</span>
              <ArrowRight className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
            </div>
          </a>
        ))}
      </div>

      {/* Cross-domain backlinks */}
      <div className="mt-5 pt-4 border-t border-black/5 dark:border-white/5 flex flex-wrap items-center justify-between gap-2 text-xs">
        <span className={`${themeClasses.textSecondary}`}>تصنيفات ذات صلة وثيقة بالتفاضل والتكامل:</span>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => navigateTo('/domain/calculus/derivatives-differentiation')}
            className={`px-3 py-1 rounded-lg border ${themeClasses.border} hover:bg-black/5 dark:hover:bg-white/5 text-[11px] font-medium transition-colors`}
          >
             المشتقات والتفاضل
          </button>
          <button
            onClick={() => navigateTo('/domain/calculus/integration')}
            className={`px-3 py-1 rounded-lg border ${themeClasses.border} hover:bg-black/5 dark:hover:bg-white/5 text-[11px] font-medium transition-colors`}
          >
            ∬ التكامل
          </button>
          <button
            onClick={() => navigateTo('/domain/calculus/applications-of-integration')}
            className={`px-3 py-1 rounded-lg border ${themeClasses.border} hover:bg-black/5 dark:hover:bg-white/5 text-[11px] font-medium transition-colors`}
          >
             تطبيقات التكامل
          </button>
        </div>
      </div>
    </div>
  );
};
