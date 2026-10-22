import React from 'react';
import { ArrowRight, BookOpen, Layers } from 'lucide-react';
import { useEyeTheme } from '../context/ThemeContext';
import { navigateTo } from '../navigation/router';

export interface RelatedTrigonometryQuizInfo {
  id: string;
  title: string;
  emoji: string;
  mathSymbol: string;
  level: 'أساسي' | 'متوسط' | 'متقدم';
  url: string;
  relationReason: string;
}

export const ALL_TRIGONOMETRY_TESTS: Record<string, RelatedTrigonometryQuizInfo> = {
  'basic-trig-ratios-right-triangle': {
    id: 'basic-trig-ratios-right-triangle',
    title: 'النسب المثلثية الأساسية في المثلث القائم',
    emoji: '📐',
    mathSymbol: 'sin θ = مقابل/وتر',
    level: 'متوسط',
    url: '/domain/geometry-trigonometry/trigonometry/basic-trig-ratios-right-triangle',
    relationReason: 'المدخل الأساسي لتعريف الجيب وجيب التمام والظل بالنسبة للزاوية الحادة والمقابل والمجاور والوتر',
  },
  'reciprocal-trig-ratios': {
    id: 'reciprocal-trig-ratios',
    title: 'مقلوب النسب المثلثية (sec, csc, cot)',
    emoji: '🔄',
    mathSymbol: 'sec θ = 1 / cos θ',
    level: 'متوسط',
    url: '/domain/geometry-trigonometry/trigonometry/reciprocal-trig-ratios',
    relationReason: 'المعكوسات الضربية للنسب الأساسية (القاطع وقاطع التمام وظل التمام) وقواعد الاقتران وحاصل الضرب 1',
  },
  'special-angles-trig-ratios': {
    id: 'special-angles-trig-ratios',
    title: 'النسب المثلثية للزوايا الخاصة (30°، 45°، 60°)',
    emoji: '⭐',
    mathSymbol: 'sin(30°) = ½ | cos(45°) = √2/2',
    level: 'متوسط',
    url: '/domain/geometry-trigonometry/trigonometry/special-angles-trig-ratios',
    relationReason: 'القيم الدقيقة المشتقة هندسياً من المثلث المتطابق الأضلاع والمثلث متساوي الساقين القائم بدون حاسبة',
  },
  'degrees-radians-conversion': {
    id: 'degrees-radians-conversion',
    title: 'قياس الزوايا بالدرجات والراديان والتحويل بينهما',
    emoji: '🔄',
    mathSymbol: '180° = π rad',
    level: 'متوسط',
    url: '/domain/geometry-trigonometry/trigonometry/degrees-radians-conversion',
    relationReason: 'الجسر الرياضي بين النظام الستيني والدائري والعلاقة مع الثابت π وحساب أطوال الأقواس s = r·θ',
  },
  'unit-circle-reference-angles': {
    id: 'unit-circle-reference-angles',
    title: 'دائرة الوحدة والزوايا المرجعية',
    emoji: '⭕',
    mathSymbol: '(x, y) = (cos θ, sin θ)',
    level: 'متوسط',
    url: '/domain/geometry-trigonometry/trigonometry/unit-circle-reference-angles',
    relationReason: 'تعميم الدوال لجميع الأرباع وقاعدة إشارات ASTC وتحديد الزاوية المرجعية الحادة مع محور السينات',
  },
  'pythagorean-fundamental-identities': {
    id: 'pythagorean-fundamental-identities',
    title: 'المتطابقات المثلثية الأساسية ومتطابقات الفيثاغورس',
    emoji: '⚖️',
    mathSymbol: 'sin²(θ) + cos²(θ) = 1',
    level: 'متوسط',
    url: '/domain/geometry-trigonometry/trigonometry/pythagorean-fundamental-identities',
    relationReason: 'المتطابقة الفيثاغورسية الأم وعلاقات 1 + tan²θ = sec²θ وتبسيط المقادير الجبرية المعقدة',
  },
  'sum-difference-double-half-identities': {
    id: 'sum-difference-double-half-identities',
    title: 'متطابقات مجموع وفرق زاويتين والضعف والنصف',
    emoji: '➕',
    mathSymbol: 'sin(A ± B) = sin A cos B ± cos A sin B',
    level: 'متقدم',
    url: '/domain/geometry-trigonometry/trigonometry/sum-difference-double-half-identities',
    relationReason: 'تفكيك الزوايا المركبة كـ 75° و 15°، وقوانين ضعف الزاوية sin(2A) و cos(2A) ونصف الزاوية',
  },
  'solving-trigonometric-equations': {
    id: 'solving-trigonometric-equations',
    title: 'حل المعادلات المثلثية',
    emoji: '🧩',
    mathSymbol: '2 sin(x) - 1 = 0 ⟹ x = π/6, 5π/6',
    level: 'متقدم',
    url: '/domain/geometry-trigonometry/trigonometry/solving-trigonometric-equations',
    relationReason: 'استراتيجيات عزل الدوال واستخدام الزوايا المرجعية لحل المعادلات الدورية في الفترة [0, 2π]',
  },
  'law-of-sines': {
    id: 'law-of-sines',
    title: 'قانون الجيب (Law of Sines)',
    emoji: '📐',
    mathSymbol: 'a / sin A = b / sin B = c / sin C',
    level: 'متوسط',
    url: '/domain/geometry-trigonometry/trigonometry/law-of-sines',
    relationReason: 'حل المثلثات غير القائمة في حالات (AAS, ASA) وحساب مساحة المثلث ½ a b sin C وقطر الدائرة المحيطة',
  },
  'law-of-cosines': {
    id: 'law-of-cosines',
    title: 'قانون جيب التمام (Law of Cosines)',
    emoji: '📐',
    mathSymbol: 'c² = a² + b² - 2ab cos(C)',
    level: 'متقدم',
    url: '/domain/geometry-trigonometry/trigonometry/law-of-cosines',
    relationReason: 'تعميم نظرية فيثاغورس لحالات الضلعين والزاوية المحصورة (SAS) والأضلاع الثلاثة (SSS)',
  },
  'graphing-trig-functions': {
    id: 'graphing-trig-functions',
    title: 'التمثيل البياني للدوال المثلثية (السعة والدورة)',
    emoji: '〰️',
    mathSymbol: 'y = A sin(Bx - C) + D',
    level: 'متوسط',
    url: '/domain/geometry-trigonometry/trigonometry/graphing-trig-functions',
    relationReason: 'تحليل الحركة الموجية واستخراج السعة |A| والدورة 2π/B وخط المنتصف y=D وانعكاسات المنحنيات',
  },
  'trig-word-problems-applications': {
    id: 'trig-word-problems-applications',
    title: 'المسائل الكلامية والتطبيقية (زوايا الارتفاع والانخفاض)',
    emoji: '🌲',
    mathSymbol: 'tan(θ) = الارتفاع / المسافة الأفقية',
    level: 'متقدم',
    url: '/domain/geometry-trigonometry/trigonometry/trig-word-problems-applications',
    relationReason: 'تطبيقات واقعية على رصد قمم الأبراج، أطوال الظلال، الملاحة والمثلثات القائمة في الحياة اليومية',
  },
};

// Recommended learning progression sequence for Trigonometry
const SUGGESTED_TRIG_RELATIONS: Record<string, string[]> = {
  'basic-trig-ratios-right-triangle': [
    'reciprocal-trig-ratios',
    'special-angles-trig-ratios',
    'pythagorean-fundamental-identities',
    'trig-word-problems-applications',
  ],
  'reciprocal-trig-ratios': [
    'basic-trig-ratios-right-triangle',
    'pythagorean-fundamental-identities',
    'special-angles-trig-ratios',
  ],
  'special-angles-trig-ratios': [
    'basic-trig-ratios-right-triangle',
    'degrees-radians-conversion',
    'unit-circle-reference-angles',
    'sum-difference-double-half-identities',
  ],
  'degrees-radians-conversion': [
    'special-angles-trig-ratios',
    'unit-circle-reference-angles',
    'graphing-trig-functions',
    'solving-trigonometric-equations',
  ],
  'unit-circle-reference-angles': [
    'degrees-radians-conversion',
    'special-angles-trig-ratios',
    'solving-trigonometric-equations',
    'graphing-trig-functions',
  ],
  'pythagorean-fundamental-identities': [
    'basic-trig-ratios-right-triangle',
    'reciprocal-trig-ratios',
    'sum-difference-double-half-identities',
    'solving-trigonometric-equations',
  ],
  'sum-difference-double-half-identities': [
    'special-angles-trig-ratios',
    'pythagorean-fundamental-identities',
    'solving-trigonometric-equations',
  ],
  'solving-trigonometric-equations': [
    'unit-circle-reference-angles',
    'special-angles-trig-ratios',
    'pythagorean-fundamental-identities',
    'sum-difference-double-half-identities',
  ],
  'law-of-sines': [
    'basic-trig-ratios-right-triangle',
    'law-of-cosines',
    'trig-word-problems-applications',
  ],
  'law-of-cosines': [
    'law-of-sines',
    'basic-trig-ratios-right-triangle',
    'trig-word-problems-applications',
  ],
  'graphing-trig-functions': [
    'degrees-radians-conversion',
    'unit-circle-reference-angles',
    'special-angles-trig-ratios',
  ],
  'trig-word-problems-applications': [
    'basic-trig-ratios-right-triangle',
    'law-of-sines',
    'law-of-cosines',
    'special-angles-trig-ratios',
  ],
};

interface TrigonometryBacklinkBoxProps {
  currentTestId: string;
  className?: string;
  onOpenTest?: (testId: string) => void;
}

export const TrigonometryBacklinkBox: React.FC<TrigonometryBacklinkBoxProps> = ({
  currentTestId,
  className = '',
  onOpenTest,
}) => {
  const { themeClasses } = useEyeTheme();

  // Get recommended tests for current test, or fallback to first 4 tests
  const relatedIds = SUGGESTED_TRIG_RELATIONS[currentTestId] || [
    'basic-trig-ratios-right-triangle',
    'reciprocal-trig-ratios',
    'special-angles-trig-ratios',
    'degrees-radians-conversion',
  ];

  const relatedTests = relatedIds
    .filter((id) => id !== currentTestId)
    .map((id) => ALL_TRIGONOMETRY_TESTS[id])
    .filter(Boolean);

  const handleTestClick = (test: RelatedTrigonometryQuizInfo, e: React.MouseEvent) => {
    e.preventDefault();
    if (onOpenTest) {
      onOpenTest(test.id);
    } else {
      navigateTo(test.url);
    }
  };

  return (
    <aside
      aria-label="اختبارات حساب المثلثات المترابطة"
      className={`p-5 sm:p-7 rounded-2xl border ${themeClasses.border} ${themeClasses.cardBg} space-y-5 text-right ${className}`}
    >
      {/* Header with icon and context */}
      <div className="flex items-center justify-between border-b border-black/[0.04] dark:border-white/[0.04] pb-3">
        <div className="flex items-center gap-2">
          <Layers className="w-5 h-5 text-teal-600 dark:text-teal-400" />
          <h3 className={`text-base sm:text-lg font-bold ${themeClasses.textPrimary}`}>
            مسار مهارات حساب المثلثات المترابطة
          </h3>
        </div>
        <span className="text-xs text-teal-700 dark:text-teal-300 bg-teal-50 dark:bg-teal-950/40 px-2.5 py-1 rounded-full font-medium">
          12 اختباراً تكاملياً
        </span>
      </div>

      <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
        ترتبط مهارات حساب المثلثات بتسلسل منطقي يبدأ من النسب الهندسية في المثلث القائم وينتهي بالتحليل الدالي والمسائل التطبيقية. نوصي باستكشاف الاختبارات ذات الصلة التالية لترسيخ المفاهيم:
      </p>

      {/* Grid of related tests with relation rationale */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        {relatedTests.map((test) => (
          <a
            key={test.id}
            href={`#${test.url}`}
            onClick={(e) => handleTestClick(test, e)}
            className={`group p-4 rounded-xl border ${themeClasses.border} bg-black/[0.01] dark:bg-white/[0.01] hover:bg-teal-50/50 dark:hover:bg-teal-950/20 hover:border-teal-300 dark:hover:border-teal-700 transition-all flex flex-col justify-between space-y-2`}
          >
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xl">{test.emoji}</span>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-black/[0.04] dark:bg-white/[0.06] text-gray-700 dark:text-gray-300" dir="ltr">
                  {test.mathSymbol}
                </span>
              </div>
              <h4 className={`text-sm font-bold ${themeClasses.textPrimary} group-hover:text-teal-700 dark:group-hover:text-teal-300 transition-colors`}>
                {test.title}
              </h4>
              <p className={`text-xs ${themeClasses.textMuted} mt-1 leading-relaxed line-clamp-2`}>
                {test.relationReason}
              </p>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-black/[0.03] dark:border-white/[0.03] text-xs font-medium text-teal-700 dark:text-teal-300">
              <span className="text-[11px] text-gray-500">{test.level}</span>
              <span className="flex items-center gap-1 group-hover:translate-x-[-3px] transition-transform">
                ابدأ الاختبار
                <ArrowRight className="w-3.5 h-3.5 rotate-180" />
              </span>
            </div>
          </a>
        ))}
      </div>

      {/* Directory Backlink to Pillar Page */}
      <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs border-t border-black/[0.04] dark:border-white/[0.04]">
        <span className={themeClasses.textMuted}>
          مسار متكامل يشمل 120 مسألة نموذجية في حساب المثلثات مع شروحات وتلميحات
        </span>
        <a
          href="#/domain/geometry-trigonometry/trigonometry"
          onClick={(e) => {
            e.preventDefault();
            navigateTo('/domain/geometry-trigonometry/trigonometry');
          }}
          className="flex items-center gap-1.5 font-bold text-teal-700 dark:text-teal-300 hover:underline"
        >
          <BookOpen className="w-4 h-4" />
          <span>تصفح الفهرس الشامل لحساب المثلثات (12 اختباراً)</span>
        </a>
      </div>
    </aside>
  );
};
