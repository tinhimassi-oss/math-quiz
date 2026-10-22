import React from 'react';
import { ArrowRight, BookOpen, Layers } from 'lucide-react';
import { useEyeTheme } from '../context/ThemeContext';
import { navigateTo } from '../navigation/router';

export interface RelatedAnalyticGeometryQuizInfo {
  id: string;
  title: string;
  emoji: string;
  mathSymbol: string;
  level: 'أساسي' | 'متوسط' | 'متقدم';
  url: string;
  relationReason: string;
}

export const ALL_ANALYTIC_GEOMETRY_TESTS: Record<string, RelatedAnalyticGeometryQuizInfo> = {
  'cartesian-coordinates-quadrants': {
    id: 'cartesian-coordinates-quadrants',
    title: 'نظام الإحداثيات الديكارتية والأرباع الأربعة',
    emoji: '',
    mathSymbol: '(x, y) ∈ Q₁, Q₂, Q₃, Q₄',
    level: 'أساسي',
    url: '/domain/geometry-trigonometry/analytic-geometry/cartesian-coordinates-quadrants',
    relationReason: 'الأساس المفاهيمي الأول لتحديد مواقع النقاط وإشارات الإحداثيات ونقطة الأصل والتناظر',
  },
  'distance-between-two-points': {
    id: 'distance-between-two-points',
    title: 'قانون المسافة بين نقطتين في المستوى',
    emoji: '',
    mathSymbol: 'd = √[(Δx)² + (Δy)²]',
    level: 'متوسط',
    url: '/domain/geometry-trigonometry/analytic-geometry/distance-between-two-points',
    relationReason: 'تطبيق فيثاغورس لحساب الأطوال الإقليدية واختبار استقامة النقاط ونصف قطر الدائرة',
  },
  'midpoint-line-segment-division': {
    id: 'midpoint-line-segment-division',
    title: 'إحداثيات نقطة المنتصف وتقسيم قطعة مستقيمة',
    emoji: '',
    mathSymbol: 'M = ((x₁+x₂)/2, (y₁+y₂)/2)',
    level: 'أساسي',
    url: '/domain/geometry-trigonometry/analytic-geometry/midpoint-line-segment-division',
    relationReason: 'المتوسط الحسابي للإحداثيات وتنصيف الأقطار وإيجاد مراكز الدوائر وتلاقي المتوسطات',
  },
  'slope-of-linear-line': {
    id: 'slope-of-linear-line',
    title: 'ميل الخط المستقيم والاتجاه',
    emoji: '',
    mathSymbol: 'm = Δy / Δx = tan θ',
    level: 'متوسط',
    url: '/domain/geometry-trigonometry/analytic-geometry/slope-of-linear-line',
    relationReason: 'حساب معدل التغير الرأسي إلى الأفقي، والانحدار، والميل الموجب، السالب، الصفري، وغير المعرّف',
  },
  'forms-of-linear-equations': {
    id: 'forms-of-linear-equations',
    title: 'أشكال معادلة الخط المستقيم',
    emoji: '',
    mathSymbol: 'y = mx + b',
    level: 'متوسط',
    url: '/domain/geometry-trigonometry/analytic-geometry/forms-of-linear-equations',
    relationReason: 'التحويل بين صيغة الميل والمقطع وصيغة نقطة وميل والصيغة القياسية Ax + By = C',
  },
  'parallel-perpendicular-lines': {
    id: 'parallel-perpendicular-lines',
    title: 'المستقيمات المتوازية والمتعامدة وميلها',
    emoji: '',
    mathSymbol: 'm₁ = m₂ | m₁ · m₂ = -1',
    level: 'متوسط',
    url: '/domain/geometry-trigonometry/analytic-geometry/parallel-perpendicular-lines',
    relationReason: 'شروط التوازي بتطابق الميول والتعامد بحاصل ضرب -1 والمعكوس الضربي الجمعي',
  },
  'circle-equation-properties': {
    id: 'circle-equation-properties',
    title: 'معادلة الدائرة وخاصياتها (المركز ونصف القطر)',
    emoji: '',
    mathSymbol: '(x - h)² + (y - k)² = r²',
    level: 'متوسط',
    url: '/domain/geometry-trigonometry/analytic-geometry/circle-equation-properties',
    relationReason: 'المحل الهندسي للنقاط المتساوية البعد عن المركز واشتقاق المعادلة القياسية والعامة',
  },
  'ellipse-properties-equations': {
    id: 'ellipse-properties-equations',
    title: 'القطع الناقص (Ellipse) وخصائصه الأساسية',
    emoji: '',
    mathSymbol: '(x²/a²) + (y²/b²) = 1',
    level: 'متقدم',
    url: '/domain/geometry-trigonometry/analytic-geometry/ellipse-properties-equations',
    relationReason: 'مجموع البعدين الثابت عن البؤرتين، المحور الأكبر والأصغر، وعلاقة a² = b² + c²',
  },
  'parabola-analytic-geometry': {
    id: 'parabola-analytic-geometry',
    title: 'القطع المكافئ (Parabola) في الهندسة التحليلية',
    emoji: '',
    mathSymbol: 'y² = 4px | x² = 4py',
    level: 'متقدم',
    url: '/domain/geometry-trigonometry/analytic-geometry/parabola-analytic-geometry',
    relationReason: 'تساوي البعد عن البؤرة والدليل وخصائص الانعكاس والتركيز البصري واللاسلكي',
  },
  'hyperbola-asymptotes': {
    id: 'hyperbola-asymptotes',
    title: 'القطع الزائد (Hyperbola) والخطوط التقاربية',
    emoji: '',
    mathSymbol: '(x²/a²) - (y²/b²) = 1',
    level: 'متقدم',
    url: '/domain/geometry-trigonometry/analytic-geometry/hyperbola-asymptotes',
    relationReason: 'الفرق المطلق بين البعدين عن البؤرتين، الفروع المفتوحة، وخطوط التقارب y = ±(b/a)x',
  },
  'polar-coordinates-conversion': {
    id: 'polar-coordinates-conversion',
    title: 'الإحداثيات القطبية والتحويل بينها وبين الديكارتية',
    emoji: '',
    mathSymbol: '(r, θ) ⇄ (x, y)',
    level: 'متقدم',
    url: '/domain/geometry-trigonometry/analytic-geometry/polar-coordinates-conversion',
    relationReason: 'التمثيل الدائري بالمسافة والزاوية والتحويل باستخدام حساب المثلثات وفيثاغورس',
  },
  'analytic-geometry-word-problems': {
    id: 'analytic-geometry-word-problems',
    title: 'المسائل الكلامية والتطبيقية على الهندسة التحليلية',
    emoji: '',
    mathSymbol: 'd ≤ r (نطاقات التغطية)',
    level: 'متقدم',
    url: '/domain/geometry-trigonometry/analytic-geometry/analytic-geometry-word-problems',
    relationReason: 'تطبيقات واقعية على رصد شبكات الاتصالات ومسارات الملاحة والمسافات المكانية',
  },
};

const SUGGESTED_ANALYTIC_RELATIONS: Record<string, string[]> = {
  'cartesian-coordinates-quadrants': [
    'distance-between-two-points',
    'midpoint-line-segment-division',
    'slope-of-linear-line',
    'polar-coordinates-conversion',
  ],
  'distance-between-two-points': [
    'cartesian-coordinates-quadrants',
    'midpoint-line-segment-division',
    'circle-equation-properties',
    'analytic-geometry-word-problems',
  ],
  'midpoint-line-segment-division': [
    'cartesian-coordinates-quadrants',
    'distance-between-two-points',
    'circle-equation-properties',
    'analytic-geometry-word-problems',
  ],
  'slope-of-linear-line': [
    'cartesian-coordinates-quadrants',
    'forms-of-linear-equations',
    'parallel-perpendicular-lines',
  ],
  'forms-of-linear-equations': [
    'slope-of-linear-line',
    'parallel-perpendicular-lines',
    'analytic-geometry-word-problems',
  ],
  'parallel-perpendicular-lines': [
    'slope-of-linear-line',
    'forms-of-linear-equations',
    'analytic-geometry-word-problems',
  ],
  'circle-equation-properties': [
    'distance-between-two-points',
    'midpoint-line-segment-division',
    'ellipse-properties-equations',
    'analytic-geometry-word-problems',
  ],
  'ellipse-properties-equations': [
    'circle-equation-properties',
    'parabola-analytic-geometry',
    'hyperbola-asymptotes',
  ],
  'parabola-analytic-geometry': [
    'ellipse-properties-equations',
    'hyperbola-asymptotes',
    'distance-between-two-points',
  ],
  'hyperbola-asymptotes': [
    'ellipse-properties-equations',
    'parabola-analytic-geometry',
    'forms-of-linear-equations',
  ],
  'polar-coordinates-conversion': [
    'cartesian-coordinates-quadrants',
    'circle-equation-properties',
    'distance-between-two-points',
  ],
  'analytic-geometry-word-problems': [
    'circle-equation-properties',
    'distance-between-two-points',
    'forms-of-linear-equations',
    'parallel-perpendicular-lines',
  ],
};

interface AnalyticGeometryBacklinkBoxProps {
  currentTestId: string;
  className?: string;
  onOpenTest?: (testId: string) => void;
}

export const AnalyticGeometryBacklinkBox: React.FC<AnalyticGeometryBacklinkBoxProps> = ({
  currentTestId,
  className = '',
  onOpenTest,
}) => {
  const { themeClasses } = useEyeTheme();

  const relatedIds = SUGGESTED_ANALYTIC_RELATIONS[currentTestId] || [
    'cartesian-coordinates-quadrants',
    'distance-between-two-points',
    'midpoint-line-segment-division',
    'slope-of-linear-line',
  ];

  const relatedTests = relatedIds
    .filter((id) => id !== currentTestId)
    .map((id) => ALL_ANALYTIC_GEOMETRY_TESTS[id])
    .filter(Boolean);

  const handleTestClick = (test: RelatedAnalyticGeometryQuizInfo, e: React.MouseEvent) => {
    e.preventDefault();
    if (onOpenTest) {
      onOpenTest(test.id);
    } else {
      navigateTo(test.url);
    }
  };

  return (
    <aside
      aria-label="اختبارات الهندسة التحليلية المترابطة"
      className={`p-5 sm:p-7 rounded-2xl border ${themeClasses.border} ${themeClasses.cardBg} space-y-5 text-right ${className}`}
    >
      <div className="flex items-center justify-between border-b border-black/[0.04] dark:border-white/[0.04] pb-3">
        <div className="flex items-center gap-2">
          <Layers className="w-5 h-5 text-sky-600 dark:text-sky-400" />
          <h3 className={`text-base sm:text-lg font-bold ${themeClasses.textPrimary}`}>
            مسار مهارات الهندسة التحليلية المترابطة
          </h3>
        </div>
        <span className="text-xs text-sky-700 dark:text-sky-300 bg-sky-50 dark:bg-sky-950/40 px-2.5 py-1 rounded-full font-medium">
          12 اختباراً تكاملياً
        </span>
      </div>

      <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
        تربط الهندسة التحليلية بين التحليل الجبري والأشكال المكانية عبر شبكة الإحداثيات والقوانين الإقليدية. نوصي باستكشاف الاختبارات ذات الصلة لتعميق الفهم:
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        {relatedTests.map((test) => (
          <a
            key={test.id}
            href={`#${test.url}`}
            onClick={(e) => handleTestClick(test, e)}
            className={`group p-4 rounded-xl border ${themeClasses.border} bg-black/[0.01] dark:bg-white/[0.01] hover:bg-sky-50/50 dark:hover:bg-sky-950/20 hover:border-sky-300 dark:hover:border-sky-700 transition-all flex flex-col justify-between space-y-2`}
          >
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xl">{test.emoji}</span>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-black/[0.04] dark:bg-white/[0.06] text-gray-700 dark:text-gray-300" dir="ltr">
                  {test.mathSymbol}
                </span>
              </div>
              <h4 className={`text-sm font-bold ${themeClasses.textPrimary} group-hover:text-sky-700 dark:group-hover:text-sky-300 transition-colors`}>
                {test.title}
              </h4>
              <p className={`text-xs ${themeClasses.textMuted} mt-1 leading-relaxed line-clamp-2`}>
                {test.relationReason}
              </p>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-black/[0.03] dark:border-white/[0.03] text-xs font-medium text-sky-700 dark:text-sky-300">
              <span className="text-[11px] text-gray-500">{test.level}</span>
              <span className="flex items-center gap-1 group-hover:translate-x-[-3px] transition-transform">
                ابدأ الاختبار
                <ArrowRight className="w-3.5 h-3.5 rotate-180" />
              </span>
            </div>
          </a>
        ))}
      </div>

      <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs border-t border-black/[0.04] dark:border-white/[0.04]">
        <span className={themeClasses.textMuted}>
          مسار متكامل يشمل 120 مسألة نموذجية في الهندسة التحليلية مع شروحات وتلميحات
        </span>
        <a
          href="#/domain/geometry-trigonometry/analytic-geometry"
          onClick={(e) => {
            e.preventDefault();
            navigateTo('/domain/geometry-trigonometry/analytic-geometry');
          }}
          className="flex items-center gap-1.5 font-bold text-sky-700 dark:text-sky-300 hover:underline"
        >
          <BookOpen className="w-4 h-4" />
          <span>تصفح الفهرس الشامل للهندسة التحليلية (12 اختباراً)</span>
        </a>
      </div>
    </aside>
  );
};
