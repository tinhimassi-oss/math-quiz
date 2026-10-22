import React from 'react';
import { ArrowRight, BookOpen, Layers } from 'lucide-react';
import { useEyeTheme } from '../context/ThemeContext';
import { navigateTo } from '../navigation/router';

export interface RelatedGeometricTransformationsQuizInfo {
  id: string;
  title: string;
  emoji: string;
  mathSymbol: string;
  level: 'أساسي' | 'متوسط' | 'متقدم';
  url: string;
  relationReason: string;
}

export const ALL_GEOMETRIC_TRANSFORMATIONS_TESTS: Record<string, RelatedGeometricTransformationsQuizInfo> = {
  'rigid-transformations-isometries': {
    id: 'rigid-transformations-isometries',
    title: 'فهم مفهوم التحويلات الهندسية والتحويلات القاسية (Isometries)',
    emoji: '',
    mathSymbol: 'd(A, B) = d(A\', B\')',
    level: 'أساسي',
    url: '/domain/geometry-trigonometry/geometric-transformations/rigid-transformations-isometries',
    relationReason: 'الأساس النظري الأول للتمييز بين تحويلات التطابق الحافظة للأطوال وتحويلات التشابه والتكبير',
  },
  'reflection-axes': {
    id: 'reflection-axes',
    title: 'الانعكاس حول محاور الإحداثيات (حول المحور x والمحور y)',
    emoji: '',
    mathSymbol: 'r_x: (x, -y) | r_y: (-x, y)',
    level: 'أساسي',
    url: '/domain/geometry-trigonometry/geometric-transformations/reflection-axes',
    relationReason: 'انعكاس المرآة الإحداثية، وتغيير الإشارات، والنقاط الثابتة على المحاور والتناظر الزوجي',
  },
  'reflection-linear-lines': {
    id: 'reflection-linear-lines',
    title: 'الانعكاس حول المستقيم y = x والمستقيم y = -x',
    emoji: '',
    mathSymbol: 'r_{y=x}: (y, x) | r_{y=-x}: (-y, -x)',
    level: 'متوسط',
    url: '/domain/geometry-trigonometry/geometric-transformations/reflection-linear-lines',
    relationReason: 'تبديل موقعي الإحداثيات السينية والصادية وعلاقتها الهندسية بالدوال العكسية f⁻¹(x)',
  },
  'translations-coordinate-plane': {
    id: 'translations-coordinate-plane',
    title: 'الانسحاب (الإزاحة) في المستوى الإحداثي (Translations)',
    emoji: '',
    mathSymbol: 'T_{(a, b)}: (x + a, y + b)',
    level: 'أساسي',
    url: '/domain/geometry-trigonometry/geometric-transformations/translations-coordinate-plane',
    relationReason: 'نقل الأشكال بانتظام دون تدوير أو قلب، وقواعد الإزاحات الأفقية والرأسية وخواص النقل المتوازي',
  },
  'rotations-origin': {
    id: 'rotations-origin',
    title: 'الدوران حول نقطة الأصل بزوايا (90°، 180°، 270°)',
    emoji: '',
    mathSymbol: 'R_{90°}: (-y, x) | R_{180°}: (-x, -y)',
    level: 'متوسط',
    url: '/domain/geometry-trigonometry/geometric-transformations/rotations-origin',
    relationReason: 'التدوير في الاتجاه الموجب عكس عقارب الساعة، وتحديد قواعد الإحداثيات الربعية وحفظ المركز',
  },
  'composition-of-transformations': {
    id: 'composition-of-transformations',
    title: 'تركيب التحويلات الهندسية (Composition of Transformations)',
    emoji: '',
    mathSymbol: '(T₂ ∘ T₁)(x, y) = T₂(T₁(x, y))',
    level: 'متوسط',
    url: '/domain/geometry-trigonometry/geometric-transformations/composition-of-transformations',
    relationReason: 'تطبيق تسلسل متعاقب من التحويلات، وعدم إبدالية التركيب، وتحليل الانسحاب الانزلاقي (Glide Reflection)',
  },
  'dilation-scale-factor': {
    id: 'dilation-scale-factor',
    title: 'التمدد مع مركز عند نقطة الأصل ومعامل التمدد (Dilation & Scale Factor)',
    emoji: '',
    mathSymbol: 'D_k: (kx, ky) | Area\' = k² · Area',
    level: 'متوسط',
    url: '/domain/geometry-trigonometry/geometric-transformations/dilation-scale-factor',
    relationReason: 'تحويل التشابه غير القاسي؛ التكبير والتصغير بمعامل المقياس k وتأثيره على الأطوال والمساحة k²',
  },
  'symmetry-line-rotational': {
    id: 'symmetry-line-rotational',
    title: 'التماثل المحوري والتماثل الدوراني (Line & Rotational Symmetry)',
    emoji: '',
    mathSymbol: 'Order = n | Angle = 360° / n',
    level: 'أساسي',
    url: '/domain/geometry-trigonometry/geometric-transformations/symmetry-line-rotational',
    relationReason: 'محاور الطي التماثلية، ورتبة التماثل الدوراني، وزوايا الانطباق للأشكال والمضلعات المنتظمة',
  },
  'tessellations-patterns': {
    id: 'tessellations-patterns',
    title: 'التبليط والنماذج التكرارية (Tessellations)',
    emoji: '',
    mathSymbol: '\sum \theta_i = 360°',
    level: 'متوسط',
    url: '/domain/geometry-trigonometry/geometric-transformations/tessellations-patterns',
    relationReason: 'تغطية المستوى دون فجوات أو تداخل، واختبار شرط مجموع الزوايا 360°، والتبليطات المنتظمة الثلاثة',
  },
  'transformation-matrices': {
    id: 'transformation-matrices',
    title: 'التحويلات الهندسية باستخدام المصفوفات (Transformation Matrices)',
    emoji: '',
    mathSymbol: 'M \cdot [x, y]ᵀ = [x\', y\']ᵀ',
    level: 'متقدم',
    url: '/domain/geometry-trigonometry/geometric-transformations/transformation-matrices',
    relationReason: 'تمثيل التحويلات بمصفوفات 2×2، وضرب المصفوفات في المتجهات، ودلالة محدد المصفوفة على تغير المساحة',
  },
  'vectors-translations': {
    id: 'vectors-translations',
    title: 'المتجهات والانسحاب في المستوى (Vectors & Translations)',
    emoji: '',
    mathSymbol: '\vec{v} = \langle a, b \rangle | \|\vec{v}\| = \sqrt{a² + b²}',
    level: 'متوسط',
    url: '/domain/geometry-trigonometry/geometric-transformations/vectors-translations',
    relationReason: 'صيغة مركبات المتجه، وحساب مقداره واتجاهه، وجمع المتجهات هندسياً وجبرياً في الإزاحات',
  },
  'transformations-word-problems': {
    id: 'transformations-word-problems',
    title: 'المسائل الكلامية والتطبيقية على التحويلات الهندسية',
    emoji: '',
    mathSymbol: 'T_{real}(x, y)',
    level: 'متقدم',
    url: '/domain/geometry-trigonometry/geometric-transformations/transformations-word-problems',
    relationReason: 'تطبيقات واقعية في تصميم الشعارات، وبرمجة محركات الألعاب، والروبوتات، والملاحة الفضائية',
  },
};

const RELATED_MAP: Record<string, string[]> = {
  'rigid-transformations-isometries': [
    'reflection-axes',
    'translations-coordinate-plane',
    'rotations-origin',
    'dilation-scale-factor',
  ],
  'reflection-axes': [
    'reflection-linear-lines',
    'rigid-transformations-isometries',
    'composition-of-transformations',
    'transformation-matrices',
  ],
  'reflection-linear-lines': [
    'reflection-axes',
    'rotations-origin',
    'composition-of-transformations',
    'transformation-matrices',
  ],
  'translations-coordinate-plane': [
    'vectors-translations',
    'composition-of-transformations',
    'rigid-transformations-isometries',
    'tessellations-patterns',
  ],
  'rotations-origin': [
    'symmetry-line-rotational',
    'composition-of-transformations',
    'transformation-matrices',
    'transformations-word-problems',
  ],
  'composition-of-transformations': [
    'translations-coordinate-plane',
    'rotations-origin',
    'reflection-axes',
    'transformation-matrices',
  ],
  'dilation-scale-factor': [
    'rigid-transformations-isometries',
    'transformation-matrices',
    'transformations-word-problems',
    'composition-of-transformations',
  ],
  'symmetry-line-rotational': [
    'rotations-origin',
    'reflection-axes',
    'tessellations-patterns',
    'transformations-word-problems',
  ],
  'tessellations-patterns': [
    'symmetry-line-rotational',
    'translations-coordinate-plane',
    'rotations-origin',
    'rigid-transformations-isometries',
  ],
  'transformation-matrices': [
    'rotations-origin',
    'reflection-axes',
    'dilation-scale-factor',
    'composition-of-transformations',
  ],
  'vectors-translations': [
    'translations-coordinate-plane',
    'transformations-word-problems',
    'rigid-transformations-isometries',
    'composition-of-transformations',
  ],
  'transformations-word-problems': [
    'vectors-translations',
    'dilation-scale-factor',
    'composition-of-transformations',
    'rotations-origin',
  ],
};

interface GeometricTransformationsBacklinkBoxProps {
  currentTestId: string;
}

export const GeometricTransformationsBacklinkBox: React.FC<GeometricTransformationsBacklinkBoxProps> = ({
  currentTestId,
}) => {
  const { themeClasses } = useEyeTheme();

  const relatedIds = RELATED_MAP[currentTestId] || [
    'rigid-transformations-isometries',
    'reflection-axes',
    'translations-coordinate-plane',
    'rotations-origin',
  ];

  const relatedQuizzes = relatedIds
    .map((id) => ALL_GEOMETRIC_TRANSFORMATIONS_TESTS[id])
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
      aria-label="اختبارات تحويلات هندسية ذات صلة"
      className={`mt-10 p-6 sm:p-8 rounded-2xl border ${themeClasses.border} ${themeClasses.cardBg} shadow-2xs space-y-6 text-right`}
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-black/[0.06] dark:border-white/[0.08] pb-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-sky-600 dark:text-sky-400">
            <Layers className="w-4 h-4" />
            <span>خارطة التعلم التراكمي | أكاديمية الرياضيات</span>
          </div>
          <h3 className={`text-lg sm:text-xl font-bold mt-1 ${themeClasses.textPrimary}`}>
            اختبارات موصى بها في التحويلات الهندسية
          </h3>
        </div>
        <button
          onClick={() => navigateTo('/domain/geometry-trigonometry/geometric-transformations')}
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-emerald-600 dark:text-emerald-400 hover:underline cursor-pointer self-start sm:self-auto"
        >
          <span>عرض جميع اختبارات التحويلات الهندسية (12 اختباراً)</span>
          <ArrowRight className="w-4 h-4 rotate-180" />
        </button>
      </div>

      <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
        لبناء فهم هندسي متكامل ومتقن، يُوصى باستكمال الاختبارات التالية المترابطة مفاهيمياً؛ حيث يتصل هذا الاختبار بالتحويلات القاسية والحافظة للأبعاد، والانعكاسات، والانسحابات، والدورانات، والتمدد، والتبليط بالمصفوفات:
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {relatedQuizzes.map((quiz) => (
          <div
            key={quiz.id}
            onClick={() => navigateTo(quiz.url)}
            className={`group p-4 rounded-xl border ${themeClasses.border} hover:border-sky-500/50 dark:hover:border-sky-400/50 transition-all duration-200 cursor-pointer bg-black/[0.01] dark:bg-white/[0.01] hover:bg-sky-500/[0.03] flex flex-col justify-between gap-3`}
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
              <h4 className={`text-sm sm:text-base font-bold ${themeClasses.textPrimary} group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors`}>
                {quiz.title}
              </h4>
              <p className={`text-xs ${themeClasses.textSecondary} leading-relaxed line-clamp-2`}>
                {quiz.relationReason}
              </p>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-black/[0.04] dark:border-white/[0.04] text-[11px]">
              <span className="font-mono text-xs text-sky-600/80 dark:text-sky-400/80 dir-ltr text-left">
                {quiz.mathSymbol}
              </span>
              <span className="inline-flex items-center gap-1 font-semibold text-sky-600 dark:text-sky-400 group-hover:underline">
                <span>ابدأ الاختبار</span>
                <ArrowRight className="w-3.5 h-3.5 rotate-180" />
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="pt-2 flex items-center justify-between text-xs text-black/50 dark:text-white/50 border-t border-black/[0.04] dark:border-white/[0.04]">
        <span>قسم التحويلات الهندسية • الهندسة وحساب المثلثات</span>
        <button
          onClick={() => navigateTo('/domain/geometry-trigonometry/geometric-transformations')}
          className="flex items-center gap-1 hover:text-black dark:hover:text-white cursor-pointer font-medium"
        >
          <BookOpen className="w-3.5 h-3.5" />
          <span>الدليل المرجعي الشامل للتحويلات الهندسية</span>
        </button>
      </div>
    </section>
  );
};
