import React from 'react';
import { ArrowRight, BookOpen, Layers } from 'lucide-react';
import { useEyeTheme } from '../context/ThemeContext';
import { navigateTo } from '../navigation/router';

export interface RelatedLimitsContinuityQuizInfo {
  id: string;
  title: string;
  emoji: string;
  mathSymbol: string;
  level: 'أساسي' | 'متوسط' | 'متقدم';
  url: string;
  relationReason: string;
}

export const ALL_LIMITS_CONTINUITY_TESTS: Record<
  string,
  RelatedLimitsContinuityQuizInfo
> = {
  'graphical-numerical-limits': {
    id: 'graphical-numerical-limits',
    title: 'مفهوم النهاية والتقدير البياني والعددي',
    emoji: '',
    mathSymbol: 'lim_{x→c} f(x) = L',
    level: 'أساسي',
    url: '/domain/calculus/limits-continuity/graphical-numerical-limits',
    relationReason: 'الأساس المفاهيمي الأول لتتبع مسار المنحنيات والجداول التقاربية واستيعاب معنى الاقتراب',
  },
  'direct-substitution-limits': {
    id: 'direct-substitution-limits',
    title: 'حساب النهايات بالتعويض المباشر وخبرات التعويض',
    emoji: '',
    mathSymbol: 'lim_{x→c} f(x) = f(c)',
    level: 'أساسي',
    url: '/domain/calculus/limits-continuity/direct-substitution-limits',
    relationReason: 'الخطوة الإجرائية الأولى لحساب النهايات وتطبيق قوانين الجمع والضرب والقسمة والجذور',
  },
  'factoring-indeterminate-limits': {
    id: 'factoring-indeterminate-limits',
    title: 'النهايات الصفرية والتخلص من الصيغ غير المعينة (0/0 بالتحليل)',
    emoji: '',
    mathSymbol: '0/0 ⟹ (x - c)',
    level: 'متوسط',
    url: '/domain/calculus/limits-continuity/factoring-indeterminate-limits',
    relationReason: 'فك الصيغ غير المعينة 0/0 بتحليل فرق المربعين والمكعبين والمقدار الثلاثي واختصار العامل الصفري',
  },
  'rationalization-conjugate-limits': {
    id: 'rationalization-conjugate-limits',
    title: 'حساب النهايات باستخدام الضرب في المرافق (Rationalization)',
    emoji: '',
    mathSymbol: '(√A - B)(√A + B) = A - B²',
    level: 'متوسط',
    url: '/domain/calculus/limits-continuity/rationalization-conjugate-limits',
    relationReason: 'إنطاق البسط والمقام لمقادير الجذور التربيعية لفك الارتباط مع العامل الصفري وإتمام التعويض',
  },
  'one-sided-limits': {
    id: 'one-sided-limits',
    title: 'النهايات من طرف واحد (One-Sided Limits)',
    emoji: '',
    mathSymbol: 'lim_{x→c⁺} f(x) = lim_{x→c⁻} f(x)',
    level: 'متوسط',
    url: '/domain/calculus/limits-continuity/one-sided-limits',
    relationReason: 'فحص الاقتراب من اليمين x→c⁺ واليسار x→c⁻ ودوال القيمة المطلقة والدوال المتشعبة والقفزات',
  },
  'limits-at-infinity': {
    id: 'limits-at-infinity',
    title: 'النهايات عند اللانهاية للسلوك المقارب (Limits at Infinity)',
    emoji: '',
    mathSymbol: 'lim_{x→±∞} P(x)/Q(x)',
    level: 'متوسط',
    url: '/domain/calculus/limits-continuity/limits-at-infinity',
    relationReason: 'دراسة السلوك الطرفي عند تباعد x بلا حدود واكتشاف خطوط التقارب الأفقية للدوال النسبية',
  },
  'infinite-limits-asymptotes': {
    id: 'infinite-limits-asymptotes',
    title: 'النهايات غير المنتهية وخطوط التقارب الرأسية (Infinite Limits)',
    emoji: '',
    mathSymbol: 'lim_{x→c} f(x) = ±∞ ⟹ x = c',
    level: 'متوسط',
    url: '/domain/calculus/limits-continuity/infinite-limits-asymptotes',
    relationReason: 'تحليل السلوك الانفجاري نحو ±∞ عند انعدام المقام k/0 وتعيين خطوط التقارب الرأسية',
  },
  'continuity-at-a-point': {
    id: 'continuity-at-a-point',
    title: 'شروط الاتصال عند نقطة (Continuity at a Point)',
    emoji: '',
    mathSymbol: 'lim_{x→c} f(x) = f(c)',
    level: 'أساسي',
    url: '/domain/calculus/limits-continuity/continuity-at-a-point',
    relationReason: 'تطبيق الشروط الثلاثة الصارمة للاتصال: التعريف، وجود النهاية، وتطابقهما التام هندسياً',
  },
  'types-of-discontinuity': {
    id: 'types-of-discontinuity',
    title: 'أنواع عدم الاتصال (قابل للإزالة، قفزي، لا نهائي)',
    emoji: '',
    mathSymbol: 'Removable, Jump, Infinite',
    level: 'متوسط',
    url: '/domain/calculus/limits-continuity/types-of-discontinuity',
    relationReason: 'تشخيص الثقوب المفرغة القابلة للإزالة والقفزات الرأسية والانقطاعات اللانهائية عند خطوط التقارب',
  },
  'ivt-intermediate-value-theorem': {
    id: 'ivt-intermediate-value-theorem',
    title: 'الاتصال على فترة ونظرية القيمة المتوسطة (IVT)',
    emoji: '',
    mathSymbol: 'f(c) = k ∈ [f(a), f(b)]',
    level: 'متقدم',
    url: '/domain/calculus/limits-continuity/ivt-intermediate-value-theorem',
    relationReason: 'إثبات وجود جذور وحلول للمعادلات الصعبة بالاتصال على الفترات المغلقة وتغير الإشارة الحتمية',
  },
  'trigonometric-limits': {
    id: 'trigonometric-limits',
    title: 'النهايات الخاصة بالدوال المثلثية (Trigonometric Limits)',
    emoji: '',
    mathSymbol: 'lim_{x→0} sin(kx)/x = k',
    level: 'متقدم',
    url: '/domain/calculus/limits-continuity/trigonometric-limits',
    relationReason: 'تطبيق النهاية المعيارية لجيب الزاوية وظلها ونظرية الحصر والشطيرة (Squeeze Theorem)',
  },
  'limits-continuity-applications': {
    id: 'limits-continuity-applications',
    title: 'المسائل الكلامية والتطبيقية على النهايات والاتصال',
    emoji: '',
    mathSymbol: 'v(t) = lim_{Δt→0} Δs/Δt',
    level: 'متقدم',
    url: '/domain/calculus/limits-continuity/limits-continuity-applications',
    relationReason: 'تطبيقات حياتية وفيزيائية لحساب السرعة اللحظية ومعدلات التغير والتكلفة الحدية وديناميكا الموائع',
  },
};

const RELATED_MAP: Record<string, string[]> = {
  'graphical-numerical-limits': [
    'direct-substitution-limits',
    'one-sided-limits',
    'continuity-at-a-point',
    'infinite-limits-asymptotes',
  ],
  'direct-substitution-limits': [
    'factoring-indeterminate-limits',
    'rationalization-conjugate-limits',
    'continuity-at-a-point',
    'graphical-numerical-limits',
  ],
  'factoring-indeterminate-limits': [
    'rationalization-conjugate-limits',
    'direct-substitution-limits',
    'types-of-discontinuity',
    'limits-continuity-applications',
  ],
  'rationalization-conjugate-limits': [
    'factoring-indeterminate-limits',
    'direct-substitution-limits',
    'trigonometric-limits',
    'limits-continuity-applications',
  ],
  'one-sided-limits': [
    'infinite-limits-asymptotes',
    'continuity-at-a-point',
    'types-of-discontinuity',
    'graphical-numerical-limits',
  ],
  'limits-at-infinity': [
    'infinite-limits-asymptotes',
    'direct-substitution-limits',
    'limits-continuity-applications',
    'trigonometric-limits',
  ],
  'infinite-limits-asymptotes': [
    'limits-at-infinity',
    'one-sided-limits',
    'types-of-discontinuity',
    'continuity-at-a-point',
  ],
  'continuity-at-a-point': [
    'types-of-discontinuity',
    'one-sided-limits',
    'direct-substitution-limits',
    'ivt-intermediate-value-theorem',
  ],
  'types-of-discontinuity': [
    'continuity-at-a-point',
    'factoring-indeterminate-limits',
    'infinite-limits-asymptotes',
    'one-sided-limits',
  ],
  'ivt-intermediate-value-theorem': [
    'continuity-at-a-point',
    'limits-continuity-applications',
    'graphical-numerical-limits',
    'types-of-discontinuity',
  ],
  'trigonometric-limits': [
    'factoring-indeterminate-limits',
    'rationalization-conjugate-limits',
    'direct-substitution-limits',
    'limits-continuity-applications',
  ],
  'limits-continuity-applications': [
    'ivt-intermediate-value-theorem',
    'factoring-indeterminate-limits',
    'limits-at-infinity',
    'direct-substitution-limits',
  ],
};

interface LimitsContinuityBacklinkBoxProps {
  currentTestId: string;
}

export const LimitsContinuityBacklinkBox: React.FC<
  LimitsContinuityBacklinkBoxProps
> = ({ currentTestId }) => {
  const { themeClasses } = useEyeTheme();

  const relatedIds = RELATED_MAP[currentTestId] || [
    'graphical-numerical-limits',
    'direct-substitution-limits',
    'factoring-indeterminate-limits',
    'continuity-at-a-point',
  ];

  const relatedQuizzes = relatedIds
    .map((id) => ALL_LIMITS_CONTINUITY_TESTS[id])
    .filter(Boolean);

  const getLevelBadgeClass = (level: 'أساسي' | 'متوسط' | 'متقدم') => {
    switch (level) {
      case 'أساسي':
        return 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800';
      case 'متوسط':
        return 'bg-sky-100 text-sky-800 dark:bg-sky-950/60 dark:text-sky-300 border-sky-200 dark:border-sky-800';
      case 'متقدم':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-950/60 dark:text-purple-300 border-purple-200 dark:border-purple-800';
    }
  };

  return (
    <section
      aria-label="اختبارات نهايات واتصال ذات صلة"
      className={`mt-10 p-6 sm:p-8 rounded-2xl border ${themeClasses.border} ${themeClasses.cardBg} shadow-2xs space-y-6 text-right`}
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-black/[0.06] dark:border-white/[0.08] pb-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-indigo-600 dark:text-indigo-400">
            <Layers className="w-4 h-4" />
            <span>خارطة التعلم التراكمي | أكاديمية الرياضيات</span>
          </div>
          <h3 className={`text-lg sm:text-xl font-bold mt-1 ${themeClasses.textPrimary}`}>
            اختبارات موصى بها في النهايات والاتصال
          </h3>
        </div>
        <button
          onClick={() => navigateTo('/domain/calculus/limits-continuity')}
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-emerald-600 dark:text-emerald-400 hover:underline cursor-pointer self-start sm:self-auto"
        >
          <span>عرض جميع اختبارات النهايات والاتصال (12 اختباراً)</span>
          <ArrowRight className="w-4 h-4 rotate-180" />
        </button>
      </div>

      <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
        لبناء تأسيس رياضي عميق في التفاضل والتكامل، يُوصى باستكمال الاختبارات التالية المترابطة؛ حيث يرتبط هذا الموضوع مباشرة بالتعويض المباشر، وتحليل الصيغ غير المعينة، وإنطاق المرافق، ودراسة خطوط التقارب وشروط الاتصال ونظرية القيمة المتوسطة:
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {relatedQuizzes.map((quiz) => (
          <div
            key={quiz.id}
            onClick={() => navigateTo(quiz.url)}
            className={`group p-4 rounded-xl border ${themeClasses.border} hover:border-indigo-500/50 dark:hover:border-indigo-400/50 transition-all duration-200 cursor-pointer bg-black/[0.01] dark:bg-white/[0.01] hover:bg-indigo-500/[0.03] flex flex-col justify-between gap-3`}
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between gap-2">
                <span className="text-2xl" role="img" aria-label={quiz.title}>
                  {quiz.emoji}
                </span>
                <span
                  className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${getLevelBadgeClass(
                    quiz.level
                  )}`}
                >
                  {quiz.level}
                </span>
              </div>
              <h4 className={`text-sm sm:text-base font-bold ${themeClasses.textPrimary} group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors`}>
                {quiz.title}
              </h4>
              <p className={`text-xs ${themeClasses.textSecondary} leading-relaxed line-clamp-2`}>
                {quiz.relationReason}
              </p>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-black/[0.04] dark:border-white/[0.04] text-[11px]">
              <span className="font-mono text-xs text-indigo-600/80 dark:text-indigo-400/80 dir-ltr text-left">
                {quiz.mathSymbol}
              </span>
              <span className="inline-flex items-center gap-1 font-semibold text-indigo-600 dark:text-indigo-400 group-hover:underline">
                <span>ابدأ الاختبار</span>
                <ArrowRight className="w-3.5 h-3.5 rotate-180" />
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="pt-2 flex items-center justify-between text-xs text-black/50 dark:text-white/50 border-t border-black/[0.04] dark:border-white/[0.04]">
        <span>قسم النهايات والاتصال • التفاضل والتكامل</span>
        <button
          onClick={() => navigateTo('/domain/calculus/limits-continuity')}
          className="flex items-center gap-1 hover:text-black dark:hover:text-white cursor-pointer font-medium"
        >
          <BookOpen className="w-3.5 h-3.5" />
          <span>الدليل المرجعي الشامل للنهايات والاتصال</span>
        </button>
      </div>
    </section>
  );
};
