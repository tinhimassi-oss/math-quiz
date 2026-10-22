import React from 'react';
import { ArrowRight, BookOpen, Layers } from 'lucide-react';
import { useEyeTheme } from '../context/ThemeContext';
import { navigateTo } from '../navigation/router';

export interface RelatedTrianglesAnglesQuizInfo {
  id: string;
  title: string;
  emoji: string;
  mathSymbol: string;
  level: 'أساسي' | 'متوسط' | 'متقدم';
  url: string;
  relationReason: string;
}

export const ALL_TRIANGLES_ANGLES_TESTS: Record<string, RelatedTrianglesAnglesQuizInfo> = {
  'angle-types-measurement': {
    id: 'angle-types-measurement',
    title: 'أنواع الزوايا وقياسها',
    emoji: '📐',
    mathSymbol: '0° < θ < 360°',
    level: 'أساسي',
    url: '/domain/geometry-trigonometry/triangles-angles/angle-types-measurement',
    relationReason: 'الأساس المفاهيمي الأول لفهم انفراج الأشعة وتصنيف الزوايا الحادة، القائمة، المنفرجة، والمستقيمة والمنعكسة',
  },
  'angle-relationships': {
    id: 'angle-relationships',
    title: 'العلاقات بين الزوايا',
    emoji: '✂️',
    mathSymbol: 'α + β = 90° | 180°',
    level: 'أساسي',
    url: '/domain/geometry-trigonometry/triangles-angles/angle-relationships',
    relationReason: 'قوانين التتام 90° والتكامل 180° والتطابق بالتقابل بالرأس وحل المعادلات الجبرية الزاوية',
  },
  'parallel-lines-transversals': {
    id: 'parallel-lines-transversals',
    title: 'المستقيمات المتوازية والقاطع',
    emoji: '⏸️',
    mathSymbol: 'L₁ ∥ L₂ ⟹ ∠1 ≅ ∠2',
    level: 'متوسط',
    url: '/domain/geometry-trigonometry/triangles-angles/parallel-lines-transversals',
    relationReason: 'قواعد التبادل (Z) والتناظر (F) والتحالف (C) التي تنشأ عند قطع مستقيم لمستقيمين متوازيين',
  },
  'triangle-classification': {
    id: 'triangle-classification',
    title: 'تصنيف المثلثات حسب الزوايا والأضلاع',
    emoji: '🔺',
    mathSymbol: 'Sides & Angles',
    level: 'أساسي',
    url: '/domain/geometry-trigonometry/triangles-angles/triangle-classification',
    relationReason: 'التصنيف المزدوج الدقيق للأضلاع (مختلف، متطابق الضلعين، متطابق الأضلاع) وللزوايا (حاد، قائم، منفرج)',
  },
  'triangle-angles-exterior-angle': {
    id: 'triangle-angles-exterior-angle',
    title: 'مجموع قياسات زوايا المثلث والزاوية الخارجية',
    emoji: '📐',
    mathSymbol: '∑ ∠ = 180° | θ_ext = α + β',
    level: 'متوسط',
    url: '/domain/geometry-trigonometry/triangles-angles/triangle-angles-exterior-angle',
    relationReason: 'مبرهنة الـ 180° الإقليدية ونظرية أن الزاوية الخارجية تساوي مجموع الزاويتين الداخليتين البعيدتين',
  },
  'triangle-inequality-theorem': {
    id: 'triangle-inequality-theorem',
    title: 'متباينة المثلث والضلع الأطول والزاوية الكبرى',
    emoji: '⚖️',
    mathSymbol: 'a + b > c | |a - b| < x < a + b',
    level: 'متوسط',
    url: '/domain/geometry-trigonometry/triangles-angles/triangle-inequality-theorem',
    relationReason: 'الشرط الحتمي لانغلاق المثلث (مجموع الأصغرين > الأكبر) ومقابلة الضلع الأطول للزاوية الكبرى',
  },
  'pythagorean-theorem-applications': {
    id: 'pythagorean-theorem-applications',
    title: 'نظرية فيثاغورس وتطبيقاتها',
    emoji: '📐',
    mathSymbol: 'a² + b² = c²',
    level: 'متوسط',
    url: '/domain/geometry-trigonometry/triangles-angles/pythagorean-theorem-applications',
    relationReason: 'المعادلة الخالدة للوتر وضلعي القائمة في المثلث قائم الزاوية والثلاثيات الشهيرة وعكس النظرية',
  },
  'triangle-congruence-criteria': {
    id: 'triangle-congruence-criteria',
    title: 'تطابق المثلثات (حالات SSS, SAS, ASA, AAS, HL)',
    emoji: '👥',
    mathSymbol: 'ΔABC ≅ ΔDEF',
    level: 'متوسط',
    url: '/domain/geometry-trigonometry/triangles-angles/triangle-congruence-criteria',
    relationReason: 'شروط التطابق التام وتساوي كافة الأضلاع والزوايا المتناظرة والبراهين الهندسية الاستنتاجية',
  },
  'triangle-similarity-proportions': {
    id: 'triangle-similarity-proportions',
    title: 'تشابه المثلثات وإيجاد الأطوال المجهولة',
    emoji: '🔍',
    mathSymbol: 'ΔABC ∼ ΔDEF (k, k²)',
    level: 'متوسط',
    url: '/domain/geometry-trigonometry/triangles-angles/triangle-similarity-proportions',
    relationReason: 'معامل مقياس التكبير والتصغير k وتساوي الزوايا وتناسب الأطوال ونسبة المساحات k²',
  },
  'special-segments-in-triangles': {
    id: 'special-segments-in-triangles',
    title: 'المستقيمات والقطع الخاصة في المثلث',
    emoji: '🎯',
    mathSymbol: 'Centroid, Orthocenter, Incenter',
    level: 'متقدم',
    url: '/domain/geometry-trigonometry/triangles-angles/special-segments-in-triangles',
    relationReason: 'المتوسطات ونسبة 2:1 لمركز الثقل، الارتفاعات، منصفات الزوايا ومراكز الدوائر الداخلية والمحيطة',
  },
  'right-triangle-trigonometry-basics': {
    id: 'right-triangle-trigonometry-basics',
    title: 'النسب المثلثية الأساسية في المثلث القائم',
    emoji: '📐',
    mathSymbol: 'sin, cos, tan | SOH CAH TOA',
    level: 'متوسط',
    url: '/domain/geometry-trigonometry/triangles-angles/right-triangle-trigonometry-basics',
    relationReason: 'الجيب وجيب التمام والظل والزوايا الشهيرة 30°-45°-60° والمتطابقة sin² + cos² = 1',
  },
  'triangles-angles-word-problems': {
    id: 'triangles-angles-word-problems',
    title: 'المسائل الكلامية والحياتية على المثلثات والزوايا',
    emoji: '🧭',
    mathSymbol: 'Elevation & Depression Angles',
    level: 'متقدم',
    url: '/domain/geometry-trigonometry/triangles-angles/triangles-angles-word-problems',
    relationReason: 'النمذجة الرياضية لزوايا الارتفاع والانخفاض والملاحة والظلال وقياس الأبعاد غير المباشرة للأبراج',
  },
};

// Next / Previous relationships in curriculum order
const CURRICULUM_ORDER = [
  'angle-types-measurement',
  'angle-relationships',
  'parallel-lines-transversals',
  'triangle-classification',
  'triangle-angles-exterior-angle',
  'triangle-inequality-theorem',
  'pythagorean-theorem-applications',
  'triangle-congruence-criteria',
  'triangle-similarity-proportions',
  'special-segments-in-triangles',
  'right-triangle-trigonometry-basics',
  'triangles-angles-word-problems',
];

interface TrianglesAnglesBacklinkBoxProps {
  currentQuizId: string;
}

export const TrianglesAnglesBacklinkBox: React.FC<TrianglesAnglesBacklinkBoxProps> = ({ currentQuizId }) => {
  const { theme, themeClasses } = useEyeTheme();
  const isDark = theme === 'night';

  const currentIndex = CURRICULUM_ORDER.indexOf(currentQuizId);
  const prevQuizId = currentIndex > 0 ? CURRICULUM_ORDER[currentIndex - 1] : null;
  const nextQuizId = currentIndex < CURRICULUM_ORDER.length - 1 ? CURRICULUM_ORDER[currentIndex + 1] : null;

  const prevQuiz = prevQuizId ? ALL_TRIANGLES_ANGLES_TESTS[prevQuizId] : null;
  const nextQuiz = nextQuizId ? ALL_TRIANGLES_ANGLES_TESTS[nextQuizId] : null;

  // Other related tests (pick 4 others excluding current, prev, next)
  const otherTests = Object.values(ALL_TRIANGLES_ANGLES_TESTS).filter(
    (t) => t.id !== currentQuizId && t.id !== prevQuizId && t.id !== nextQuizId
  );

  return (
    <div className="mt-12 space-y-6 print:hidden">
      {/* Step Navigation: Next and Previous */}
      {(prevQuiz || nextQuiz) && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {prevQuiz ? (
            <button
              onClick={() => navigateTo(prevQuiz.url)}
              className={`text-right p-4 rounded-xl border transition-all duration-200 flex flex-col justify-between group ${
                isDark
                  ? 'bg-slate-800/80 border-slate-700/70 hover:border-emerald-500/50 hover:bg-slate-800'
                  : 'bg-white border-slate-200 hover:border-emerald-500/50 hover:shadow-md'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  الاختبار السابق في المنهاج
                </span>
                <span className="text-xl">{prevQuiz.emoji}</span>
              </div>
              <h4 className="font-bold text-sm text-slate-800 dark:text-slate-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                {prevQuiz.title}
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-1">
                {prevQuiz.relationReason}
              </p>
            </button>
          ) : (
            <div className="hidden md:block" />
          )}

          {nextQuiz && (
            <button
              onClick={() => navigateTo(nextQuiz.url)}
              className={`text-right p-4 rounded-xl border transition-all duration-200 flex flex-col justify-between group ${
                isDark
                  ? 'bg-slate-800/80 border-slate-700/70 hover:border-indigo-500/50 hover:bg-slate-800'
                  : 'bg-white border-slate-200 hover:border-indigo-500/50 hover:shadow-md'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-medium text-indigo-600 dark:text-indigo-400 flex items-center gap-1">
                  الاختبار التالي المقترح
                  <ArrowRight className="w-3.5 h-3.5 mr-1 rotate-180" />
                </span>
                <span className="text-xl">{nextQuiz.emoji}</span>
              </div>
              <h4 className="font-bold text-sm text-slate-800 dark:text-slate-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                {nextQuiz.title}
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-1">
                {nextQuiz.relationReason}
              </p>
            </button>
          )}
        </div>
      )}

      {/* Interlinked Full Tests Directory Grid */}
      <div
        className={`p-6 rounded-2xl border ${
          isDark
            ? 'bg-slate-900/60 border-slate-800'
            : 'bg-gradient-to-br from-slate-50 to-indigo-50/30 border-slate-200'
        }`}
      >
        <div className="flex items-center justify-between mb-5 flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-base text-slate-800 dark:text-slate-100">
                سلسلة اختبارات المثلثات والزوايا المتكاملة (12 اختباراً)
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                تنقل بين الاختبارات التخصصية لبناء تمكن شامل من المفاهيم الهندسية والنظريات الكلاسيكية
              </p>
            </div>
          </div>
          <button
            onClick={() => navigateTo('/domain/geometry-trigonometry/triangles-angles')}
            className="text-xs font-medium px-3 py-1.5 rounded-lg bg-indigo-50 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-300 hover:bg-indigo-100 dark:hover:bg-indigo-900/60 transition-colors flex items-center gap-1"
          >
            <BookOpen className="w-3.5 h-3.5" />
            دليل المثلثات والزوايا
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {Object.values(ALL_TRIANGLES_ANGLES_TESTS).map((test) => {
            const isCurrent = test.id === currentQuizId;
            return (
              <button
                key={test.id}
                disabled={isCurrent}
                onClick={() => navigateTo(test.url)}
                className={`text-right p-3 rounded-xl border text-xs transition-all duration-200 flex flex-col justify-between ${
                  isCurrent
                    ? 'border-indigo-500/60 bg-indigo-500/10 dark:bg-indigo-950/40 cursor-default ring-1 ring-indigo-500/30'
                    : isDark
                    ? 'border-slate-800 bg-slate-800/50 hover:bg-slate-800 hover:border-slate-700'
                    : 'border-slate-200/80 bg-white hover:bg-slate-50 hover:border-slate-300'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-base">{test.emoji}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.5 rounded font-mono ${
                        isCurrent
                          ? 'bg-indigo-500 text-white font-bold'
                          : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
                      }`}
                    >
                      {test.mathSymbol}
                    </span>
                  </div>
                  <h5
                    className={`font-semibold mb-1 ${
                      isCurrent
                        ? 'text-indigo-600 dark:text-indigo-400 font-bold'
                        : 'text-slate-800 dark:text-slate-200'
                    }`}
                  >
                    {test.title}
                  </h5>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-2">
                    {test.relationReason}
                  </p>
                </div>
                {isCurrent && (
                  <span className="mt-2 text-[10px] text-indigo-600 dark:text-indigo-400 font-bold flex items-center gap-1">
                    ● أنت هنا الآن
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
