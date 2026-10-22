import React from 'react';
import { ArrowRight, BookOpen, Layers } from 'lucide-react';
import { useEyeTheme } from '../context/ThemeContext';
import { navigateTo } from '../navigation/router';

export interface RelatedPerimeterAreaQuizInfo {
  id: string;
  title: string;
  emoji: string;
  mathSymbol: string;
  level: 'أساسي' | 'متوسط' | 'متقدم';
  url: string;
  relationReason: string;
}

export const ALL_PERIMETER_AREA_TESTS: Record<string, RelatedPerimeterAreaQuizInfo> = {
  'perimeter-basic-polygons': {
    id: 'perimeter-basic-polygons',
    title: 'مفهوم المحيط وحسابه للأشكال المضلعة البسيطة',
    emoji: '📏',
    mathSymbol: 'P = a + b + c + ...',
    level: 'أساسي',
    url: '/domain/geometry-trigonometry/perimeter-area/perimeter-basic-polygons',
    relationReason: 'الأساس الخطي الأول لفهم معنى المحيط كطول للسياج الخارجي وحسابه للمثلثات والرباعيات والخماسيات',
  },
  'perimeter-area-square-rectangle': {
    id: 'perimeter-area-square-rectangle',
    title: 'محيط ومساحة المربع والمستطيل',
    emoji: '🔲',
    mathSymbol: 'P = 2(L+W) | A = L × W',
    level: 'أساسي',
    url: '/domain/geometry-trigonometry/perimeter-area/perimeter-area-square-rectangle',
    relationReason: 'حجر الزاوية للهندسة المستوية المستقيمة وقوانين الأبعاد الأفقية والرأسية وشبكة الوحدات المربعة',
  },
  'area-triangles-direct-indirect': {
    id: 'area-triangles-direct-indirect',
    title: 'مساحة المثلث (المباشرة وغير المباشرة)',
    emoji: '📐',
    mathSymbol: 'A = ½ b h | Heron',
    level: 'متوسط',
    url: '/domain/geometry-trigonometry/perimeter-area/area-triangles-direct-indirect',
    relationReason: 'قانون نصف القاعدة في الارتفاع وصيغة هيرون للمثلثات بمختلف أنواعها وقانون الجيب المحصور',
  },
  'area-parallelogram-trapezoid': {
    id: 'area-parallelogram-trapezoid',
    title: 'مساحة متوازي الأضلاع وشبه المنحرف',
    emoji: '▱',
    mathSymbol: 'A = b h | A = ½(b₁+b₂)h',
    level: 'متوسط',
    url: '/domain/geometry-trigonometry/perimeter-area/area-parallelogram-trapezoid',
    relationReason: 'البرهان الهندسي بالقص واللصق وقانون متوسط القاعدتين المتوازيتين في الارتفاع',
  },
  'perimeter-area-rhombus-kite': {
    id: 'perimeter-area-rhombus-kite',
    title: 'محيط ومساحة المعين وطائرة الورق (Kite)',
    emoji: '🪁',
    mathSymbol: 'A = ½ d₁ d₂ | P = 4s',
    level: 'متوسط',
    url: '/domain/geometry-trigonometry/perimeter-area/perimeter-area-rhombus-kite',
    relationReason: 'سحر الأقطار المتعامدة وتنصيفها للزوايا ومحيط 4s والربط بفيثاغورس',
  },
  'circle-circumference-arc-length': {
    id: 'circle-circumference-arc-length',
    title: 'محيط الدائرة وطول القوس والدورة الكاملة',
    emoji: '⭕',
    mathSymbol: 'C = 2πr = πd',
    level: 'متوسط',
    url: '/domain/geometry-trigonometry/perimeter-area/circle-circumference-arc-length',
    relationReason: 'أسرار الثابت الإقليدي π، طول القوس بكسر الزاوية (θ/360)، ومسافات دوران العجلات',
  },
  'circle-area-sectors': {
    id: 'circle-area-sectors',
    title: 'مساحة الدائرة والقطاعات الدائرية',
    emoji: '🍕',
    mathSymbol: 'A = πr² | A_sec = ½ L r',
    level: 'متوسط',
    url: '/domain/geometry-trigonometry/perimeter-area/circle-area-sectors',
    relationReason: 'التغطية الدائرية التامة وقانون شريحة البيتزا والقطاعات الدائرية بنسبة الزاوية المركزية',
  },
  'find-missing-dimension-perimeter-area': {
    id: 'find-missing-dimension-perimeter-area',
    title: 'إيجاد البعد المجهول من المحيط أو المساحة',
    emoji: '🔍',
    mathSymbol: 'L = A / W | s = √A',
    level: 'متقدم',
    url: '/domain/geometry-trigonometry/perimeter-area/find-missing-dimension-perimeter-area',
    relationReason: 'الهندسة العكسية وحل المعادلات الجبرية لعزل المجهول واستخراج الأطوال والارتفاعات',
  },
  'composite-shapes-perimeter-area': {
    id: 'composite-shapes-perimeter-area',
    title: 'محيط ومساحة الأشكال المركبة (Composite Shapes)',
    emoji: '🧩',
    mathSymbol: 'A_total = ∑ A_i',
    level: 'متقدم',
    url: '/domain/geometry-trigonometry/perimeter-area/composite-shapes-perimeter-area',
    relationReason: 'استراتيجيات التجزئة والإكمال للأشكال غير النمطية وحساب الحدود الخارجية فقط للمحيط',
  },
  'dimension-scaling-perimeter-area': {
    id: 'dimension-scaling-perimeter-area',
    title: 'تأثير تغيير الأبعاد على المحيط والمساحة (التمدد والتحجيم)',
    emoji: '📈',
    mathSymbol: 'P ∝ k | A ∝ k²',
    level: 'متقدم',
    url: '/domain/geometry-trigonometry/perimeter-area/dimension-scaling-perimeter-area',
    relationReason: 'التحجيم ومقارنة معامل التغير الخطي k للمحيط مع المعامل التربيعي k² للمساحة',
  },
  'shaded-region-enclosed-areas': {
    id: 'shaded-region-enclosed-areas',
    title: 'المساحة المظللة والمساحات المحصورة بين الأشكال',
    emoji: '🎨',
    mathSymbol: 'A_shaded = A_outer - A_inner',
    level: 'متقدم',
    url: '/domain/geometry-trigonometry/perimeter-area/shaded-region-enclosed-areas',
    relationReason: 'مبدأ الطرح والاستبعاد الهندسي بين المربعات والدوائر والحلقات والأشكال المتداخلة',
  },
  'perimeter-area-word-problems': {
    id: 'perimeter-area-word-problems',
    title: 'المسائل الحياتية والتطبيقية على المحيط والمساحة',
    emoji: '🏡',
    mathSymbol: 'Real-world math',
    level: 'متقدم',
    url: '/domain/geometry-trigonometry/perimeter-area/perimeter-area-word-problems',
    relationReason: 'التطبيق الاقتصادي والهندسي الواقعي لحساب تكاليف التسييج والتبليط والطلاء ومسائل الأمثلية',
  },
};

const SPECIFIC_RELATIONS: Record<string, string[]> = {
  'perimeter-basic-polygons': ['perimeter-area-square-rectangle', 'area-triangles-direct-indirect', 'composite-shapes-perimeter-area'],
  'perimeter-area-square-rectangle': ['perimeter-basic-polygons', 'find-missing-dimension-perimeter-area', 'dimension-scaling-perimeter-area'],
  'area-triangles-direct-indirect': ['area-parallelogram-trapezoid', 'composite-shapes-perimeter-area', 'find-missing-dimension-perimeter-area'],
  'area-parallelogram-trapezoid': ['area-triangles-direct-indirect', 'perimeter-area-rhombus-kite', 'shaded-region-enclosed-areas'],
  'perimeter-area-rhombus-kite': ['area-parallelogram-trapezoid', 'perimeter-area-square-rectangle', 'find-missing-dimension-perimeter-area'],
  'circle-circumference-arc-length': ['circle-area-sectors', 'perimeter-basic-polygons', 'dimension-scaling-perimeter-area'],
  'circle-area-sectors': ['circle-circumference-arc-length', 'shaded-region-enclosed-areas', 'find-missing-dimension-perimeter-area'],
  'find-missing-dimension-perimeter-area': ['perimeter-area-square-rectangle', 'area-triangles-direct-indirect', 'perimeter-area-word-problems'],
  'composite-shapes-perimeter-area': ['shaded-region-enclosed-areas', 'perimeter-basic-polygons', 'perimeter-area-word-problems'],
  'dimension-scaling-perimeter-area': ['perimeter-area-square-rectangle', 'circle-area-sectors', 'find-missing-dimension-perimeter-area'],
  'shaded-region-enclosed-areas': ['composite-shapes-perimeter-area', 'circle-area-sectors', 'perimeter-area-square-rectangle'],
  'perimeter-area-word-problems': ['perimeter-basic-polygons', 'perimeter-area-square-rectangle', 'find-missing-dimension-perimeter-area'],
};

interface PerimeterAreaBacklinkBoxProps {
  currentQuizId: string;
}

export const PerimeterAreaBacklinkBox: React.FC<PerimeterAreaBacklinkBoxProps> = ({ currentQuizId }) => {
  const { theme, themeClasses } = useEyeTheme();
  const isDark = theme === 'night';

  const relatedIds = SPECIFIC_RELATIONS[currentQuizId] || [
    'perimeter-basic-polygons',
    'perimeter-area-square-rectangle',
    'area-triangles-direct-indirect',
  ];

  const relatedTests = relatedIds
    .map((id) => ALL_PERIMETER_AREA_TESTS[id])
    .filter(Boolean);

  const allOtherTests = Object.values(ALL_PERIMETER_AREA_TESTS).filter(
    (t) => t.id !== currentQuizId && !relatedIds.includes(t.id)
  );

  return (
    <div className={`mt-8 rounded-2xl border p-6 transition-all duration-300 ${
      isDark
        ? 'bg-slate-900/70 border-emerald-900/40 shadow-xl shadow-black/20'
        : 'bg-white/80 border-emerald-100 shadow-lg shadow-emerald-900/5 backdrop-blur-sm'
    }`}>
      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b border-black/[0.06] dark:border-white/[0.06] mb-5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
            <Layers className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-bold text-gray-900 dark:text-white flex items-center gap-2">
              شبكة اختبارات المحيط والمساحة المترابطة
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              انتقل مباشرة إلى موضوعات مكملة تبني مهاراتك الهندسية خطوة بخطوة
            </p>
          </div>
        </div>

        <button
          onClick={() => navigateTo('/domain/geometry-trigonometry/perimeter-area')}
          className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 transition-colors flex items-center gap-1.5"
        >
          <span>فهرس القسم كاملاً</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Primary Recommended Tests */}
      <div className="mb-6">
        <h4 className="text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-3 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
          الاختبارات الأكثر ارتباطاً بهذا المفهوم
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {relatedTests.map((test) => (
            <div
              key={test.id}
              onClick={() => navigateTo(test.url)}
              className={`group cursor-pointer rounded-xl p-4 border transition-all duration-200 flex flex-col justify-between hover:-translate-y-0.5 ${
                isDark
                  ? 'bg-slate-800/60 hover:bg-slate-800 border-slate-700/60 hover:border-emerald-500/50'
                  : 'bg-emerald-50/40 hover:bg-emerald-50/80 border-emerald-100/80 hover:border-emerald-300'
              }`}
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <span className="text-2xl">{test.emoji}</span>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${
                    test.level === 'أساسي'
                      ? 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400'
                      : test.level === 'متوسط'
                      ? 'bg-blue-500/15 text-blue-600 dark:text-blue-400'
                      : 'bg-purple-500/15 text-purple-600 dark:text-purple-400'
                  }`}>
                    {test.level}
                  </span>
                </div>
                <h5 className="text-sm font-bold text-gray-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors line-clamp-2">
                  {test.title}
                </h5>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 line-clamp-2 leading-relaxed">
                  {test.relationReason}
                </p>
              </div>

              <div className="mt-3 pt-2.5 border-t border-black/[0.04] dark:border-white/[0.04] flex items-center justify-between">
                <span className="text-xs font-mono font-medium text-emerald-600 dark:text-emerald-400">
                  {test.mathSymbol}
                </span>
                <span className="text-xs text-gray-400 group-hover:text-emerald-500 flex items-center gap-1 transition-colors">
                  <span>ابدأ الاختبار</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full Curriculum Quick Links */}
      <div>
        <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2.5 flex items-center gap-1.5">
          <BookOpen className="w-3.5 h-3.5" />
          باقي اختبارات مسار المحيط والمساحة (12 اختباراً)
        </h4>
        <div className="flex flex-wrap gap-2">
          {allOtherTests.map((test) => (
            <button
              key={test.id}
              onClick={() => navigateTo(test.url)}
              className={`text-xs px-3 py-1.5 rounded-lg border transition-all duration-150 flex items-center gap-1.5 ${
                isDark
                  ? 'bg-slate-800/40 hover:bg-slate-800 border-slate-700/50 text-gray-300 hover:text-white'
                  : 'bg-white hover:bg-emerald-50 border-gray-200 hover:border-emerald-200 text-gray-700 hover:text-emerald-700'
              }`}
            >
              <span>{test.emoji}</span>
              <span>{test.title}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
