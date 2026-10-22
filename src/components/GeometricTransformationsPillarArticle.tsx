import React from 'react';
import {
  BookOpen,
  Sparkles,
  TrendingUp,
  Lightbulb,
  Layers,
  Compass,
  ArrowRight,
  Maximize2,
} from 'lucide-react';
import { useEyeTheme } from '../context/ThemeContext';
import { navigateTo } from '../navigation/router';

interface GeometricTransformationsPillarArticleProps {
  onOpenTest?: (testId: string) => void;
  className?: string;
}

export const GeometricTransformationsPillarArticle: React.FC<
  GeometricTransformationsPillarArticleProps
> = ({ onOpenTest, className = '' }) => {
  const { themeClasses } = useEyeTheme();

  const handleTestClick = (url: string, testId: string, e: React.MouseEvent) => {
    e.preventDefault();
    if (onOpenTest) {
      onOpenTest(testId);
    } else {
      navigateTo(url);
    }
  };

  return (
    <article
      id="geometric-transformations-pillar-guide"
      className={`p-6 sm:p-10 rounded-2xl border ${themeClasses.border} ${themeClasses.cardBg} space-y-8 shadow-2xs leading-relaxed text-right ${className}`}
    >
      {/* Pillar Article Header */}
      <header className="space-y-3 pb-6 border-b border-black/[0.06] dark:border-white/[0.08]">
        <div className="flex items-center gap-2 text-xs font-bold text-sky-600 dark:text-sky-400">
          <BookOpen className="w-4 h-4" />
          <span>المقالة المرجعية الشاملة (Pillar Guide) | أكاديمية كويزات الرياضيات</span>
        </div>

        <h2 className={`text-xl sm:text-3xl font-extrabold tracking-tight ${themeClasses.textPrimary}`}>
          الدليل المرجعي الشامل للتحويلات الهندسية: من التحويلات القاسية والانعكاس والدوران إلى التمدد والتبليط وجبر المصفوفات
        </h2>

        <p className={`text-sm sm:text-base ${themeClasses.textSecondary} leading-relaxed`}>
          مرجع أكاديمي وتربوي شامل يغطي 12 موضوعاً واختباراً مستقلاً في التحويلات الهندسية (Geometric Transformations)؛ صُمم هذا المسار لتمكين الطلاب والمعلمين من الفهم العميق لمفاهيم التحويلات القاسية (Isometries) الحافظة للأطوال والزوايا، والانعكاسات حول المحاور الإحداثية والمستقيمات المائلة، والانسحابات والمتجهات، والدورانات حول الأصل، وتركيب التحويلات، والتمدد ومقياس الرسم، والتماثل الدوراني والمحوري، والتبليط المنتظم وشبه المنتظم، ومصفوفات التحويل 2×2، وصولاً إلى التطبيقات الواقعية في الروبوتات وتصميم ألعاب الفيديو.
        </p>
      </header>

      {/* Structured Directory / Index of 12 Quizzes */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className={`text-lg font-bold flex items-center gap-2 ${themeClasses.textPrimary}`}>
            <Layers className="w-5 h-5 text-sky-600 dark:text-sky-400" />
            <span>فهرس الاختبارات التفاعلية الـ 12 في التحويلات الهندسية</span>
          </h3>
          <span className="text-xs text-gray-500 font-medium">120 مسألة نموذجية مع الشرح والتلميحات</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {[
            {
              id: 'rigid-transformations-isometries',
              num: '1',
              title: 'التحويلات الهندسية والتحويلات القاسية',
              desc: 'التحويلات المتطابقة، الحفاظ على الأبعاد والزوايا والمساحة، ومقارنتها بالتمدد',
              url: '/domain/geometry-trigonometry/geometric-transformations/rigid-transformations-isometries',
              emoji: '',
            },
            {
              id: 'reflection-axes',
              num: '2',
              title: 'الانعكاس حول محاور الإحداثيات',
              desc: 'الانعكاس حول محور السينات (x, -y) وحول محور الصادات (-x, y) والتناظر',
              url: '/domain/geometry-trigonometry/geometric-transformations/reflection-axes',
              emoji: '',
            },
            {
              id: 'reflection-linear-lines',
              num: '3',
              title: 'الانعكاس حول المستقيم y = x و y = -x',
              desc: 'تبديل موقعي الإحداثيات (y, x) و (-y, -x) والصلة الهندسية بالدوال العكسية',
              url: '/domain/geometry-trigonometry/geometric-transformations/reflection-linear-lines',
              emoji: '',
            },
            {
              id: 'translations-coordinate-plane',
              num: '4',
              title: 'الانسحاب (الإزاحة) في المستوى',
              desc: 'قاعدة الإزاحة (x + a, y + b)، حركة المتجهات، والخواص الصلبة للنقل المتوازي',
              url: '/domain/geometry-trigonometry/geometric-transformations/translations-coordinate-plane',
              emoji: '',
            },
            {
              id: 'rotations-origin',
              num: '5',
              title: 'الدوران حول نقطة الأصل بزوايا ربعية',
              desc: 'الدوران بزوايا 90°، 180°، 270° عكس عقارب الساعة ومعها وقواعد الإحداثيات',
              url: '/domain/geometry-trigonometry/geometric-transformations/rotations-origin',
              emoji: '',
            },
            {
              id: 'composition-of-transformations',
              num: '6',
              title: 'تركيب التحويلات الهندسية',
              desc: 'تسلسل التحويلات، قاعدة الترتيب الحاسم، خاصية عدم الإبدال، والانسحاب الانزلاقي',
              url: '/domain/geometry-trigonometry/geometric-transformations/composition-of-transformations',
              emoji: '',
            },
            {
              id: 'dilation-scale-factor',
              num: '7',
              title: 'التمدد ومعامل المقياس k',
              desc: 'التكبير والتصغير من نقطة الأصل وتغير الأطوال بمعامل |k| والمساحة بـ k²',
              url: '/domain/geometry-trigonometry/geometric-transformations/dilation-scale-factor',
              emoji: '',
            },
            {
              id: 'symmetry-line-rotational',
              num: '8',
              title: 'التماثل المحوري والتماثل الدوراني',
              desc: 'خطوط التماثل بالطي، رتبة الدوران وزوايا الانطباق للمضلعات المنتظمة',
              url: '/domain/geometry-trigonometry/geometric-transformations/symmetry-line-rotational',
              emoji: '',
            },
            {
              id: 'tessellations-patterns',
              num: '9',
              title: 'التبليط والنماذج التكرارية',
              desc: 'شرط مجموع الزوايا 360° حول الرأس والتبليطات المنتظمة الثلاثة وشبه المنتظمة',
              url: '/domain/geometry-trigonometry/geometric-transformations/tessellations-patterns',
              emoji: '',
            },
            {
              id: 'transformation-matrices',
              num: '10',
              title: 'التحويلات بالمصفوفات 2×2',
              desc: 'ضرب المصفوفات في المتجهات، مصفوفات الانعكاس والدوران ومحدد المصفوفة للمساحة',
              url: '/domain/geometry-trigonometry/geometric-transformations/transformation-matrices',
              emoji: '',
            },
            {
              id: 'vectors-translations',
              num: '11',
              title: 'المتجهات والانسحاب في المستوى',
              desc: 'صيغة المركبات ⟨a, b⟩، حساب مقدار المتجه واتجاهه، ومحصلة جمع الإزاحات',
              url: '/domain/geometry-trigonometry/geometric-transformations/vectors-translations',
              emoji: '',
            },
            {
              id: 'transformations-word-problems',
              num: '12',
              title: 'المسائل الكلامية والتطبيقية',
              desc: 'تطبيقات عملية في تصميم الشعارات، وبرمجة محركات الألعاب، وحركة الروبوتات',
              url: '/domain/geometry-trigonometry/geometric-transformations/transformations-word-problems',
              emoji: '',
            },
          ].map((item) => (
            <a
              key={item.id}
              href={`#${item.url}`}
              onClick={(e) => handleTestClick(item.url, item.id, e)}
              className={`p-3.5 rounded-xl border ${themeClasses.border} hover:border-sky-500/60 transition-all duration-150 bg-black/[0.01] dark:bg-white/[0.01] hover:bg-sky-500/[0.04] flex items-start gap-3 group`}
            >
              <span className="text-xl shrink-0 mt-0.5">{item.emoji}</span>
              <div className="space-y-1">
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] font-bold px-1.5 py-0.2 text-sky-600 dark:text-sky-400 bg-sky-100 dark:bg-sky-950/60 rounded">
                    اختبار #{item.num}
                  </span>
                  <h4 className={`text-xs sm:text-sm font-bold ${themeClasses.textPrimary} group-hover:text-sky-600 dark:group-hover:text-sky-400`}>
                    {item.title}
                  </h4>
                </div>
                <p className={`text-[11px] ${themeClasses.textSecondary} line-clamp-2`}>
                  {item.desc}
                </p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Foundations and Erlangen Program Section */}
      <section className="space-y-4 pt-4 border-t border-black/[0.06] dark:border-white/[0.08]">
        <h3 className={`text-lg sm:text-xl font-bold flex items-center gap-2 ${themeClasses.textPrimary}`}>
          <Sparkles className="w-5 h-5 text-amber-500" />
          <span>الثورة الفكرية لفيليكس كلاين: الهندسة كعلم للتحويلات الصامدة</span>
        </h3>
        <p className={`text-sm ${themeClasses.textSecondary} leading-relaxed`}>
          في عام 1872، أحدث عالم الرياضيات الألماني فيليكس كلاين (Felix Klein) نقلة نوعية في تاريخ الفكر الرياضي عندما أعلن في جامعته عن "برنامج إرلانجن" (Erlangen Program)، حيث اقترح تعريفاً ثورياً يوحد فروع الهندسة المتناثرة؛ فنص على أن: <strong>«الهندسة هي دراسة الخواص المكانية التي تظل ثابتة (صامدة Invariant) تحت تأثير زمرة محددة من التحويلات»</strong>. فالهندسة الإقليدية الكلاسيكية ليست سوى دراسة الخصائص التي تحافظ عليها زمرة التحويلات القاسية (Isometries: المسافات والزوايا والمساحات)، بينما هندسة التشابه تدرس ما يحافظ عليه التمدد، وتتسع الهرمية لتشمل الهندسة التآلفية والهندسة الإسقاطية.
        </p>
      </section>

      {/* Essential Formulas Reference Table */}
      <section className="space-y-4 pt-4 border-t border-black/[0.06] dark:border-white/[0.08]">
        <h3 className={`text-lg sm:text-xl font-bold flex items-center gap-2 ${themeClasses.textPrimary}`}>
          <Compass className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
          <span>جدول القواعد الجبرية والمصفوفية للتحويلات الهندسية</span>
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full text-right text-xs sm:text-sm border-collapse">
            <thead>
              <tr className="border-b border-black/[0.08] dark:border-white/[0.1] bg-black/[0.02] dark:bg-white/[0.02]">
                <th className="p-3 font-bold text-sky-700 dark:text-sky-300">التحويل الهندسي</th>
                <th className="p-3 font-bold text-sky-700 dark:text-sky-300">القاعدة الجبرية (x, y) ↦</th>
                <th className="p-3 font-bold text-sky-700 dark:text-sky-300">مصفوفة التحويل 2×2</th>
                <th className="p-3 font-bold text-sky-700 dark:text-sky-300">الأثر على الأطوال والمساحة</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-black/[0.04] dark:divide-white/[0.04]">
              <tr>
                <td className="p-3 font-bold">الانعكاس حول محور x</td>
                <td className="p-3 font-mono dir-ltr text-left">(x, -y)</td>
                <td className="p-3 font-mono dir-ltr text-left">[[1, 0], [0, -1]]</td>
                <td className="p-3 text-emerald-600 dark:text-emerald-400">تحويل قاسٍ (يحفظ الأبعاد والمساحة)</td>
              </tr>
              <tr>
                <td className="p-3 font-bold">الانعكاس حول محور y</td>
                <td className="p-3 font-mono dir-ltr text-left">(-x, y)</td>
                <td className="p-3 font-mono dir-ltr text-left">[[-1, 0], [0, 1]]</td>
                <td className="p-3 text-emerald-600 dark:text-emerald-400">تحويل قاسٍ (يحفظ الأبعاد والمساحة)</td>
              </tr>
              <tr>
                <td className="p-3 font-bold">الانعكاس حول y = x</td>
                <td className="p-3 font-mono dir-ltr text-left">(y, x)</td>
                <td className="p-3 font-mono dir-ltr text-left">[[0, 1], [1, 0]]</td>
                <td className="p-3 text-emerald-600 dark:text-emerald-400">تحويل قاسٍ (يعطي الدالة العكسية)</td>
              </tr>
              <tr>
                <td className="p-3 font-bold">الانعكاس حول y = -x</td>
                <td className="p-3 font-mono dir-ltr text-left">(-y, -x)</td>
                <td className="p-3 font-mono dir-ltr text-left">[[0, -1], [-1, 0]]</td>
                <td className="p-3 text-emerald-600 dark:text-emerald-400">تحويل قاسٍ (يحفظ الأبعاد والمساحة)</td>
              </tr>
              <tr>
                <td className="p-3 font-bold">الانسحاب بالمتجه ⟨a, b⟩</td>
                <td className="p-3 font-mono dir-ltr text-left">(x + a, y + b)</td>
                <td className="p-3 text-gray-500">يتطلب إحداثيات متجانسة 3×3</td>
                <td className="p-3 text-emerald-600 dark:text-emerald-400">تحويل قاسٍ (يحفظ التوجيه والأبعاد)</td>
              </tr>
              <tr>
                <td className="p-3 font-bold">الدوران 90° عكس عقارب الساعة</td>
                <td className="p-3 font-mono dir-ltr text-left">(-y, x)</td>
                <td className="p-3 font-mono dir-ltr text-left">[[0, -1], [1, 0]]</td>
                <td className="p-3 text-emerald-600 dark:text-emerald-400">تحويل قاسٍ (يحفظ الأبعاد والمساحة)</td>
              </tr>
              <tr>
                <td className="p-3 font-bold">الدوران 180° حول الأصل</td>
                <td className="p-3 font-mono dir-ltr text-left">(-x, -y)</td>
                <td className="p-3 font-mono dir-ltr text-left">[[-1, 0], [0, -1]]</td>
                <td className="p-3 text-emerald-600 dark:text-emerald-400">تحويل قاسٍ (يكافئ انعكاساً في الأصل)</td>
              </tr>
              <tr>
                <td className="p-3 font-bold">الدوران 270° عكس عقارب الساعة</td>
                <td className="p-3 font-mono dir-ltr text-left">(y, -x)</td>
                <td className="p-3 font-mono dir-ltr text-left">[[0, 1], [-1, 0]]</td>
                <td className="p-3 text-emerald-600 dark:text-emerald-400">تحويل قاسٍ (يكافئ 90° مع عقارب الساعة)</td>
              </tr>
              <tr>
                <td className="p-3 font-bold">التمدد من الأصل بمعامل k</td>
                <td className="p-3 font-mono dir-ltr text-left">(kx, ky)</td>
                <td className="p-3 font-mono dir-ltr text-left">[[k, 0], [0, k]]</td>
                <td className="p-3 text-amber-600 dark:text-amber-400">غير قاسٍ: الأطوال ×|k|، والمساحة ×k²</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Practical Strategy Section */}
      <section className="space-y-4 pt-4 border-t border-black/[0.06] dark:border-white/[0.08]">
        <h3 className={`text-lg sm:text-xl font-bold flex items-center gap-2 ${themeClasses.textPrimary}`}>
          <Lightbulb className="w-5 h-5 text-amber-500" />
          <span>إرشادات واستراتيجيات حل مسائل التحويلات الهندسية</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
          <div className="p-4 rounded-xl border border-black/[0.06] dark:border-white/[0.06] bg-black/[0.01] dark:bg-white/[0.01] space-y-2">
            <h4 className="font-bold text-sky-600 dark:text-sky-400">1. الترتيب الصارم في تركيب التحويلات</h4>
            <p className={themeClasses.textSecondary}>
              تذكر دائماً أن تركيب التحويلات ليس إبدالياً: (T₂ ∘ T₁) تعني تطبيق T₁ أولاً ثم T₂ على الناتج. تغيير الترتيب يؤدي إلى مواقع هندسية خاطئة تماماً.
            </p>
          </div>
          <div className="p-4 rounded-xl border border-black/[0.06] dark:border-white/[0.06] bg-black/[0.01] dark:bg-white/[0.01] space-y-2">
            <h4 className="font-bold text-sky-600 dark:text-sky-400">2. تمييز أثر التمدد على الأطوال مقابل المساحات</h4>
            <p className={themeClasses.textSecondary}>
              عند تمدد شكل بمعامل k = 3، يتضاعف محيطه 3 مرات، بينما تتضاعف مساحته بمقدار مربع المعامل k² = 9 مرات. انتبه دائماً للوحدات ثنائية الأبعاد.
            </p>
          </div>
          <div className="p-4 rounded-xl border border-black/[0.06] dark:border-white/[0.06] bg-black/[0.01] dark:bg-white/[0.01] space-y-2">
            <h4 className="font-bold text-sky-600 dark:text-sky-400">3. الانعكاس يغير إشارة الإحداثي العمودي فقط</h4>
            <p className={themeClasses.textSecondary}>
              عند الانعكاس حول محور x، تظل قيمة x كما هي وتنعكس إشارة y. وعند الانعكاس حول محور y، تظل y ثابتة وتنعكس إشارة x.
            </p>
          </div>
          <div className="p-4 rounded-xl border border-black/[0.06] dark:border-white/[0.06] bg-black/[0.01] dark:bg-white/[0.01] space-y-2">
            <h4 className="font-bold text-sky-600 dark:text-sky-400">4. شرط التبليط المنتظم 360°</h4>
            <p className={themeClasses.textSecondary}>
              لكي يبلط مضلع منتظم المستوى بمفرده، يجب أن تقسم زاويته الداخلية 360° بدون باقٍ. المضلعات الوحيدة المحققة للشرط هي: المثلث (60°)، المربع (90°)، والسداسي (120°).
            </p>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <footer className="pt-6 border-t border-black/[0.06] dark:border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <span className="text-xs font-semibold text-gray-400 block">جاهز لاختبار مهاراتك؟</span>
          <p className={`text-sm font-bold ${themeClasses.textPrimary}`}>
            ابدأ باختبار التحويلات القاسية وتدرج نحو التحويلات بالمصفوفات والمسائل التطبيقية
          </p>
        </div>
        <button
          onClick={(e) =>
            handleTestClick(
              '/domain/geometry-trigonometry/geometric-transformations/rigid-transformations-isometries',
              'rigid-transformations-isometries',
              e
            )
          }
          className="px-5 py-2.5 rounded-xl font-bold text-white bg-sky-600 hover:bg-sky-700 dark:bg-sky-500 dark:hover:bg-sky-600 shadow-sm transition-colors text-xs sm:text-sm cursor-pointer flex items-center gap-2"
        >
          <span>بدء الاختبار الأول (التحويلات القاسية)</span>
          <ArrowRight className="w-4 h-4 rotate-180" />
        </button>
      </footer>
    </article>
  );
};
