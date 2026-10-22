import React from 'react';
import { ArrowRight, BookOpen, Compass } from 'lucide-react';
import { useEyeTheme } from '../context/ThemeContext';
import { navigateTo } from '../navigation/router';

export interface RelatedGeometricShapeQuizInfo {
  id: string;
  title: string;
  emoji: string;
  mathSymbol: string;
  level: 'أساسي' | 'متوسط' | 'متقدم';
  url: string;
  relationReason: string;
}

export const ALL_GEOMETRIC_SHAPES_TESTS: Record<string, RelatedGeometricShapeQuizInfo> = {
  'shapes-2d-properties': {
    id: 'shapes-2d-properties',
    title: 'التعرف على الأشكال الثنائية الأبعاد وخصائصها (2D Shapes)',
    emoji: '',
    mathSymbol: 'n ≥ 3',
    level: 'أساسي',
    url: '/domain/geometry-trigonometry/geometric-shapes/shapes-2d-properties',
    relationReason: 'الأساس المعرفي للتمييز بين المضلعات المستوية وخصائص متوازي الأضلاع والمستطيل والمعين والمربع',
  },
  'triangle-classification-sides-angles': {
    id: 'triangle-classification-sides-angles',
    title: 'تصنيف المثلثات حسب الأضلاع والزوايا',
    emoji: '',
    mathSymbol: 'a, b, c | α, β, γ',
    level: 'أساسي',
    url: '/domain/geometry-trigonometry/geometric-shapes/triangle-classification-sides-angles',
    relationReason: 'التصنيف المزدوج لأبسط المضلعات هندسياً عبر أطوال أضلاعه ومقادير زواياه ومتباينة المثلث',
  },
  'angles-sum-triangles-quadrilaterals': {
    id: 'angles-sum-triangles-quadrilaterals',
    title: 'مجموع زوايا المثلث والأشكال الرباعية',
    emoji: '',
    mathSymbol: 'S = (n-2)×180°',
    level: 'أساسي',
    url: '/domain/geometry-trigonometry/geometric-shapes/angles-sum-triangles-quadrilaterals',
    relationReason: 'القاعدة الإقليدية 180° للمثلث و 360° للشكل الرباعي وقوانين الزوايا الداخلية والخارجية',
  },
  'perimeter-plane-shapes': {
    id: 'perimeter-plane-shapes',
    title: 'حساب المحيط للأشكال الهندسية المستوية',
    emoji: '',
    mathSymbol: 'P = ∑ sides',
    level: 'أساسي',
    url: '/domain/geometry-trigonometry/geometric-shapes/perimeter-plane-shapes',
    relationReason: 'المفهوم الفيزيائي للحزام الحدودي الخارجي وتطبيقه على المضلعات المنتظمة والمركبة',
  },
  'area-plane-shapes-polygons': {
    id: 'area-plane-shapes-polygons',
    title: 'حساب مساحة الأشكال المستوية (المربع، المستطيل، المثلث، شبه المنحرف)',
    emoji: '',
    mathSymbol: 'A = ½ b h',
    level: 'متوسط',
    url: '/domain/geometry-trigonometry/geometric-shapes/area-plane-shapes-polygons',
    relationReason: 'قوانين التغطية السطحية واشتقاق مساحات المضلعات من مستطيل الوحدة الأساسي',
  },
  'circle-properties-area-circumference': {
    id: 'circle-properties-area-circumference',
    title: 'خصائص الدائرة (القطر، نصف القطر، المحيط، المساحة)',
    emoji: '',
    mathSymbol: 'C = 2πr | A = πr²',
    level: 'متوسط',
    url: '/domain/geometry-trigonometry/geometric-shapes/circle-properties-area-circumference',
    relationReason: 'أسرار الثابت π، والتناظر الدائري التام، وقوانين المحيط والمساحة والقطاعات',
  },
  'shapes-3d-faces-edges-vertices': {
    id: 'shapes-3d-faces-edges-vertices',
    title: 'الأشكال الثلاثية الأبعاد والخصائص (الرؤوس، الأحرف، الأوجه)',
    emoji: '',
    mathSymbol: 'F + V = E + 2',
    level: 'أساسي',
    url: '/domain/geometry-trigonometry/geometric-shapes/shapes-3d-faces-edges-vertices',
    relationReason: 'الانتقال إلى الفضاء الفراغي وعلاقة أويلر الطوبولوجية والشبكات المستوية للمجسمات',
  },
  'volume-3d-solids': {
    id: 'volume-3d-solids',
    title: 'حساب حجم المجسمات (المكعب، متوازي المستطيلات، الاسطوانة)',
    emoji: '',
    mathSymbol: 'V = B × h',
    level: 'متوسط',
    url: '/domain/geometry-trigonometry/geometric-shapes/volume-3d-solids',
    relationReason: 'قياس السعة والحيز الفراغي الداخلي ومبدأ كافالييري وقاعدة ثلث الحجم للأهرامات والمخاريط',
  },
  'surface-area-3d-solids': {
    id: 'surface-area-3d-solids',
    title: 'حساب المساحة السطحية للمجسمات (Surface Area)',
    emoji: '',
    mathSymbol: 'SA = LA + 2B',
    level: 'متوسط',
    url: '/domain/geometry-trigonometry/geometric-shapes/surface-area-3d-solids',
    relationReason: 'المساحة الجانبية والكلية لأغلفة المجسمات وتطبيقات الطلاء والتغليف والتناسب الحيوي',
  },
  'geometric-transformations-reflections-rotations': {
    id: 'geometric-transformations-reflections-rotations',
    title: 'التحويلات الهندسية (الانعكاس، الانسحاب، الدوران)',
    emoji: '',
    mathSymbol: '(x, y) → (x\', y\')',
    level: 'متوسط',
    url: '/domain/geometry-trigonometry/geometric-shapes/geometric-transformations-reflections-rotations',
    relationReason: 'تحويلات التطابق الإيزومترية في المستوى الإحداثي وقواعد الانعكاس والانسحاب والدوران',
  },
  'similarity-congruence-pythagoras': {
    id: 'similarity-congruence-pythagoras',
    title: 'التشابه والتطابق ونظرية فيثاغورس',
    emoji: '',
    mathSymbol: 'a² + b² = c²',
    level: 'متوسط',
    url: '/domain/geometry-trigonometry/geometric-shapes/similarity-congruence-pythagoras',
    relationReason: 'معايير التطابق، مقياس الرسم ونسب المساحات في التشابه، ونظرية فيثاغورس في المثلث القائم',
  },
  'geometric-shapes-word-problems': {
    id: 'geometric-shapes-word-problems',
    title: 'المسائل الكلامية والتطبيقية على الأشكال الهندسية',
    emoji: '',
    mathSymbol: 'Real-world geometry',
    level: 'متقدم',
    url: '/domain/geometry-trigonometry/geometric-shapes/geometric-shapes-word-problems',
    relationReason: 'دمج كافة المفاهيم الهندسية في مواقف واقعية كالإنشاءات وحساب التكاليف ومسارات الملاحة',
  },
};

// Next/Previous learning sequence mapping
const GEOMETRIC_SHAPES_ORDER = [
  'shapes-2d-properties',
  'triangle-classification-sides-angles',
  'angles-sum-triangles-quadrilaterals',
  'perimeter-plane-shapes',
  'area-plane-shapes-polygons',
  'circle-properties-area-circumference',
  'shapes-3d-faces-edges-vertices',
  'volume-3d-solids',
  'surface-area-3d-solids',
  'geometric-transformations-reflections-rotations',
  'similarity-congruence-pythagoras',
  'geometric-shapes-word-problems',
];

interface GeometricShapesBacklinkBoxProps {
  currentQuizId: string;
}

export const GeometricShapesBacklinkBox: React.FC<GeometricShapesBacklinkBoxProps> = ({ currentQuizId }) => {
  const { themeClasses } = useEyeTheme();
  const currentIndex = GEOMETRIC_SHAPES_ORDER.indexOf(currentQuizId);
  const nextQuizId = currentIndex >= 0 && currentIndex < GEOMETRIC_SHAPES_ORDER.length - 1
    ? GEOMETRIC_SHAPES_ORDER[currentIndex + 1]
    : null;
  const prevQuizId = currentIndex > 0
    ? GEOMETRIC_SHAPES_ORDER[currentIndex - 1]
    : null;

  const nextQuiz = nextQuizId ? ALL_GEOMETRIC_SHAPES_TESTS[nextQuizId] : null;
  const prevQuiz = prevQuizId ? ALL_GEOMETRIC_SHAPES_TESTS[prevQuizId] : null;

  // Filter 3 related tests
  const otherTests = Object.values(ALL_GEOMETRIC_SHAPES_TESTS)
    .filter((t) => t.id !== currentQuizId && t.id !== nextQuizId && t.id !== prevQuizId)
    .slice(0, 3);

  return (
    <div className={`mt-12 p-6 sm:p-8 rounded-2xl border ${themeClasses.border} ${themeClasses.cardBg} space-y-6`}>
      <div className="flex items-center justify-between border-b pb-4 border-black/[0.06] dark:border-white/[0.06]">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400">
            <Compass className="w-5 h-5" />
          </div>
          <div>
            <h3 className={`font-bold text-lg ${themeClasses.textPrimary}`}>
              المسار التعليمي الشامل لهندسة الأشكال
            </h3>
            <p className={`text-xs ${themeClasses.textMuted}`}>
              تدرج في تعلم الأشكال المستوية والمجسمات الفراغية والتحويلات الهندسية خطوة بخطوة
            </p>
          </div>
        </div>
        <button
          onClick={() => navigateTo('/domain/geometry-trigonometry/geometric-shapes')}
          className={`text-xs font-medium px-3 py-1.5 rounded-lg border ${themeClasses.border} ${themeClasses.cardHoverBg} ${themeClasses.textPrimary} transition-colors flex items-center gap-1.5 cursor-pointer`}
        >
          <span>فهرس الأشكال الهندسية</span>
          <ArrowRight className="w-3.5 h-3.5 rotate-180" />
        </button>
      </div>

      {/* Recommended Next Step */}
      {nextQuiz && (
        <div className="p-4 rounded-xl bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20">
          <div className="flex items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-[11px] font-semibold text-amber-600 dark:text-amber-400 flex items-center gap-1">
                <span>المهارة التالية الموصى بها</span>
                <span className="px-1.5 py-0.5 rounded bg-amber-500/20 text-[10px]">{nextQuiz.level}</span>
              </span>
              <h4 className={`text-sm sm:text-base font-bold ${themeClasses.textPrimary}`}>
                {nextQuiz.emoji} {nextQuiz.title}
              </h4>
              <p className={`text-xs ${themeClasses.textMuted}`}>
                {nextQuiz.relationReason}
              </p>
            </div>
            <button
              onClick={() => navigateTo(nextQuiz.url)}
              className="px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-medium text-xs sm:text-sm whitespace-nowrap transition-colors flex items-center gap-1.5 shadow-xs cursor-pointer"
            >
              <span>ابدأ الاختبار التالي</span>
              <ArrowRight className="w-4 h-4 rotate-180" />
            </button>
          </div>
        </div>
      )}

      {/* Previous Step */}
      {prevQuiz && (
        <div className={`p-3.5 rounded-xl border ${themeClasses.border} ${themeClasses.cardHoverBg} flex items-center justify-between`}>
          <div className="flex items-center gap-3">
            <span className="text-xl">{prevQuiz.emoji}</span>
            <div>
              <span className={`text-[10px] ${themeClasses.textMuted}`}>الاختبار السابق</span>
              <div className={`text-xs sm:text-sm font-semibold ${themeClasses.textPrimary}`}>
                {prevQuiz.title}
              </div>
            </div>
          </div>
          <button
            onClick={() => navigateTo(prevQuiz.url)}
            className={`text-xs px-3 py-1.5 rounded-lg border ${themeClasses.border} ${themeClasses.textPrimary} hover:border-amber-500/40 transition-colors cursor-pointer`}
          >
            مراجعة المهارة
          </button>
        </div>
      )}

      {/* Other Related Tests */}
      <div>
        <h4 className={`text-xs font-semibold ${themeClasses.textMuted} mb-3 flex items-center gap-1.5`}>
          <BookOpen className="w-3.5 h-3.5" />
          <span>اختبارات ذات صلة في هندسة الأشكال والمجسمات</span>
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {otherTests.map((t) => (
            <button
              key={t.id}
              onClick={() => navigateTo(t.url)}
              className={`p-3 rounded-xl border ${themeClasses.border} ${themeClasses.cardHoverBg} text-right transition-all group flex flex-col justify-between cursor-pointer`}
            >
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-lg">{t.emoji}</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded-md bg-black/5 dark:bg-white/5 font-mono text-amber-600 dark:text-amber-400">
                    {t.mathSymbol}
                  </span>
                </div>
                <div className={`text-xs font-bold ${themeClasses.textPrimary} group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors line-clamp-1`}>
                  {t.title}
                </div>
                <p className={`text-[11px] ${themeClasses.textMuted} line-clamp-2`}>
                  {t.relationReason}
                </p>
              </div>
              <div className="mt-2.5 pt-2 border-t border-black/[0.04] dark:border-white/[0.04] flex items-center justify-between text-[10px] text-amber-600 dark:text-amber-400 font-medium">
                <span>اختبر مهاراتك</span>
                <ArrowRight className="w-3 h-3 rotate-180 group-hover:-translate-x-1 transition-transform" />
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
