import React from 'react';
import { ArrowRight, BookOpen, Compass, Award } from 'lucide-react';
import { useEyeTheme } from '../context/ThemeContext';
import { navigateTo } from '../navigation/router';

export interface RelatedQuadraticQuizInfo {
  id: string;
  title: string;
  emoji: string;
  mathSymbol: string;
  level: 'أساسي' | 'متوسط' | 'متقدم';
  url: string;
  relationReason: string;
}

export const ALL_QUADRATIC_TESTS: Record<string, RelatedQuadraticQuizInfo> = {
  'quadratic-standard-form-coefficients': {
    id: 'quadratic-standard-form-coefficients',
    title: 'التعرف على الصورة القياسية للمعادلة التربيعية وإيجاد المعاملات (a, b, c)',
    emoji: '',
    mathSymbol: 'ax² + bx + c = 0',
    level: 'أساسي',
    url: '/math/quadratic-equations/quadratic-standard-form-coefficients',
    relationReason: 'الخطوة التأسيسية الأولى لترتيب المعادلة وتحديد المعاملات a و b و c بدقة إشاراتها',
  },
  'quadratic-square-root-method': {
    id: 'quadratic-square-root-method',
    title: 'حل المعادلات التربيعية البسيطة بأخذ الجذر التربيعي',
    emoji: '',
    mathSymbol: 'x² = k ⇒ x = ±√k',
    level: 'أساسي',
    url: '/math/quadratic-equations/quadratic-square-root-method',
    relationReason: 'عزل المربع الكامل وحل المعادلات الخالية من الحد الأوسط (b = 0) باستخدام رمز ±',
  },
  'quadratic-factoring-gcf': {
    id: 'quadratic-factoring-gcf',
    title: 'حل المعادلات التربيعية بإخراج العامل المشترك الأكبر (GCF)',
    emoji: '',
    mathSymbol: 'ax² + bx = 0 ⇒ x(ax + b) = 0',
    level: 'أساسي',
    url: '/math/quadratic-equations/quadratic-factoring-gcf',
    relationReason: 'استثمار خاصية الضرب الصفري عندما ينعدم الحد الثابت (c = 0) مع وجود x = 0 كحل دائم',
  },
  'quadratic-factoring-simple-trinomial': {
    id: 'quadratic-factoring-simple-trinomial',
    title: 'حل المعادلات التربيعية بالتحليل إلى العوامل (x² + bx + c)',
    emoji: '',
    mathSymbol: 'x² + bx + c = (x + p)(x + q)',
    level: 'متوسط',
    url: '/math/quadratic-equations/quadratic-factoring-simple-trinomial',
    relationReason: 'إيجاد العددين السحريين بحاصل ضرب c ومجموع b لتحويل ثلاثية الحدود إلى جداء قوسين',
  },
  'quadratic-factoring-general-trinomial': {
    id: 'quadratic-factoring-general-trinomial',
    title: 'حل المعادلات التربيعية بالتحليل (حالات ax² + bx + c حيث a ≠ 1)',
    emoji: '',
    mathSymbol: 'ax² + bx + c = 0 (a > 1)',
    level: 'متقدم',
    url: '/math/quadratic-equations/quadratic-factoring-general-trinomial',
    relationReason: 'خوارزمية ac لتفكيك الحد الأوسط والتحليل بالتجميع للمعادلات ذات المعاملات الكبرى',
  },
  'quadratic-completing-the-square': {
    id: 'quadratic-completing-the-square',
    title: 'حل المعادلات التربيعية بإكمال المربع (Completing the Square)',
    emoji: '',
    mathSymbol: 'x² + bx + (b/2)² = (x + b/2)²',
    level: 'متوسط',
    url: '/math/quadratic-equations/quadratic-completing-the-square',
    relationReason: 'إضافة (b/2)² للطرفين لبناء مربع كامل، وهي الطريقة التي اشتق منها القانون العام',
  },
  'quadratic-formula-method': {
    id: 'quadratic-formula-method',
    title: 'حل المعادلات التربيعية باستخدام القانون العام (Quadratic Formula)',
    emoji: '',
    mathSymbol: 'x = (-b ± √(b² - 4ac)) / (2a)',
    level: 'متوسط',
    url: '/math/quadratic-equations/quadratic-formula-method',
    relationReason: 'الصيغة العامة الشاملة لحل أي معادلة تربيعية مهما كانت جذورها كسرية أو صماء',
  },
  'quadratic-discriminant-roots-nature': {
    id: 'quadratic-discriminant-roots-nature',
    title: 'المميز (Discriminant) وتحديد عدد ونوع الجذور',
    emoji: '',
    mathSymbol: 'Δ = b² - 4ac',
    level: 'متوسط',
    url: '/math/quadratic-equations/quadratic-discriminant-roots-nature',
    relationReason: 'استكشاف طبيعة الجذور (حقيقيان، حقيقي واحد مكرر، أو مركبان) دون حل المعادلة بالكامل',
  },
  'quadratic-parabola-vertex-axis': {
    id: 'quadratic-parabola-vertex-axis',
    title: 'التمثيل البياني للمعادلات التربيعية (القطع المكافئ / Parabola)',
    emoji: '',
    mathSymbol: 'h = -b/(2a), k = f(h)',
    level: 'متوسط',
    url: '/math/quadratic-equations/quadratic-parabola-vertex-axis',
    relationReason: 'تحديد نقطة الرأس ومحور التماثل واتجاه فتحة المنحنى والقيم العظمى والصغرى',
  },
  'quadratic-intercepts-graphing': {
    id: 'quadratic-intercepts-graphing',
    title: 'إيجاد نقاط التقاطع مع المحورين السيني والصادي للقطع المكافئ',
    emoji: '',
    mathSymbol: 'y-int: (0, c), x-int: f(x) = 0',
    level: 'متوسط',
    url: '/math/quadratic-equations/quadratic-intercepts-graphing',
    relationReason: 'حساب المقطع الصادي والأصفار الحقيقية وتوظيف التماثل في رسم المنحنى الدقيق',
  },
  'quadratic-word-problems-projectiles': {
    id: 'quadratic-word-problems-projectiles',
    title: 'التطبيقات الفيزيائية والحركية (المقذوفات والمسائل الكلامية)',
    emoji: '',
    mathSymbol: 'h(t) = -5t² + v₀t + h₀',
    level: 'متقدم',
    url: '/math/quadratic-equations/quadratic-word-problems-projectiles',
    relationReason: 'النمذجة الرياضية لحركة المقذوفات، وزمن أقصى ارتفاع، وارتطام الأرض والأرباح القصوى',
  },
  'quadratic-roots-formation-vieta': {
    id: 'quadratic-roots-formation-vieta',
    title: 'إيجاد المعادلة التربيعية علم لها (الجذور أو الرأس والنقطة)',
    emoji: '',
    mathSymbol: 'x² - Sx + P = 0',
    level: 'متقدم',
    url: '/math/quadratic-equations/quadratic-roots-formation-vieta',
    relationReason: 'صياغة المعادلة عبر مجموع وحاصل ضرب الجذرين أو بمعلومية الرأس ونقطة يمر بها المنحنى',
  },
};

const RELATED_MAP: Record<string, string[]> = {
  'quadratic-standard-form-coefficients': [
    'quadratic-square-root-method',
    'quadratic-discriminant-roots-nature',
    'quadratic-formula-method',
  ],
  'quadratic-square-root-method': [
    'quadratic-standard-form-coefficients',
    'quadratic-factoring-gcf',
    'quadratic-completing-the-square',
  ],
  'quadratic-factoring-gcf': [
    'quadratic-square-root-method',
    'quadratic-factoring-simple-trinomial',
    'quadratic-intercepts-graphing',
  ],
  'quadratic-factoring-simple-trinomial': [
    'quadratic-factoring-gcf',
    'quadratic-factoring-general-trinomial',
    'quadratic-roots-formation-vieta',
  ],
  'quadratic-factoring-general-trinomial': [
    'quadratic-factoring-simple-trinomial',
    'quadratic-completing-the-square',
    'quadratic-formula-method',
  ],
  'quadratic-completing-the-square': [
    'quadratic-square-root-method',
    'quadratic-formula-method',
    'quadratic-parabola-vertex-axis',
  ],
  'quadratic-formula-method': [
    'quadratic-discriminant-roots-nature',
    'quadratic-completing-the-square',
    'quadratic-roots-formation-vieta',
  ],
  'quadratic-discriminant-roots-nature': [
    'quadratic-formula-method',
    'quadratic-intercepts-graphing',
    'quadratic-parabola-vertex-axis',
  ],
  'quadratic-parabola-vertex-axis': [
    'quadratic-intercepts-graphing',
    'quadratic-word-problems-projectiles',
    'quadratic-completing-the-square',
  ],
  'quadratic-intercepts-graphing': [
    'quadratic-parabola-vertex-axis',
    'quadratic-discriminant-roots-nature',
    'quadratic-factoring-simple-trinomial',
  ],
  'quadratic-word-problems-projectiles': [
    'quadratic-parabola-vertex-axis',
    'quadratic-formula-method',
    'quadratic-intercepts-graphing',
  ],
  'quadratic-roots-formation-vieta': [
    'quadratic-factoring-simple-trinomial',
    'quadratic-formula-method',
    'quadratic-standard-form-coefficients',
  ],
};

interface QuadraticEquationsBacklinkBoxProps {
  currentTestId: string;
  onOpenTest?: (testId: string) => void;
}

export const QuadraticEquationsBacklinkBox: React.FC<QuadraticEquationsBacklinkBoxProps> = ({
  currentTestId,
  onOpenTest,
}) => {
  const { themeClasses } = useEyeTheme();
  const relatedIds = RELATED_MAP[currentTestId] || [
    'quadratic-standard-form-coefficients',
    'quadratic-formula-method',
    'quadratic-discriminant-roots-nature',
  ];

  const handleNavigate = (testId: string, url: string) => {
    if (onOpenTest) {
      onOpenTest(testId);
    } else {
      navigateTo(url);
    }
  };

  const handleOpenPillarGuide = () => {
    navigateTo('/math/algebra-functions/quadratic-equations');
  };

  const currentInfo = ALL_QUADRATIC_TESTS[currentTestId];

  return (
    <div
      className={`rounded-2xl border p-6 my-8 ${themeClasses.cardBg} ${themeClasses.border} shadow-sm transition-all`}
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-black/[0.06] dark:border-white/[0.06]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold text-lg">
            
          </div>
          <div>
            <h3 className={`text-lg font-bold ${themeClasses.textPrimary}`}>
              المسار التعليمي المتصل للمعادلات التربيعية
            </h3>
            <p className={`text-xs ${themeClasses.textMuted}`}>
              اختبارات ومقالات تكميلية مبنية على مهارة {currentInfo?.title || 'المعادلات التربيعية'}
            </p>
          </div>
        </div>

        <button
          onClick={handleOpenPillarGuide}
          className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400 hover:bg-amber-500/20 transition-colors"
        >
          <BookOpen className="w-3.5 h-3.5" />
          <span>الدليل الشامل للمعادلات التربيعية</span>
        </button>
      </div>

      {/* Related Test Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {relatedIds.map((tid) => {
          const item = ALL_QUADRATIC_TESTS[tid];
          if (!item) return null;
          return (
            <div
              key={item.id}
              onClick={() => handleNavigate(item.id, item.url)}
              className={`group cursor-pointer rounded-xl p-4 border transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md ${themeClasses.cardBg} ${themeClasses.border} hover:border-amber-500/40 flex flex-col justify-between`}
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
                  className={`text-sm font-bold leading-snug mb-1 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors ${themeClasses.textPrimary}`}
                >
                  {item.title}
                </h4>
                <div className="text-[11px] font-mono text-amber-600/80 dark:text-amber-400/80 mb-2 font-semibold" dir="ltr">
                  {item.mathSymbol}
                </div>
                <p className={`text-xs ${themeClasses.textMuted} line-clamp-2 leading-relaxed`}>
                  {item.relationReason}
                </p>
              </div>

              <div className="pt-3 mt-3 border-t border-black/[0.04] dark:border-white/[0.04] flex items-center justify-between text-xs font-semibold text-amber-600 dark:text-amber-400">
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
          <Compass className="w-4 h-4 text-amber-600 dark:text-amber-400" />
          <span className={`text-xs font-bold ${themeClasses.textPrimary}`}>
            فهرس جميع اختبارات ومقالات المعادلات التربيعية (12 موضوعاً):
          </span>
        </div>
        <div className="flex flex-wrap gap-2">
          {Object.values(ALL_QUADRATIC_TESTS).map((test) => {
            const isCurrent = test.id === currentTestId;
            return (
              <button
                key={test.id}
                onClick={() => !isCurrent && handleNavigate(test.id, test.url)}
                disabled={isCurrent}
                className={`text-xs px-2.5 py-1 rounded-lg border transition-all ${
                  isCurrent
                    ? 'bg-amber-500 text-white border-amber-500 font-bold shadow-sm'
                    : `${themeClasses.cardBg} ${themeClasses.border} ${themeClasses.textPrimary} hover:border-amber-500/50 hover:text-amber-600 dark:hover:text-amber-400`
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
