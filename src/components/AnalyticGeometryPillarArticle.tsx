import React from 'react';
import {
  BookOpen,
  Sparkles,
  TrendingUp,
  Lightbulb,
  Layers,
  Compass,
  ArrowRight,
} from 'lucide-react';
import { useEyeTheme } from '../context/ThemeContext';
import { navigateTo } from '../navigation/router';

interface AnalyticGeometryPillarArticleProps {
  onOpenTest?: (testId: string) => void;
  className?: string;
}

export const AnalyticGeometryPillarArticle: React.FC<AnalyticGeometryPillarArticleProps> = ({
  onOpenTest,
  className = '',
}) => {
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
      id="analytic-geometry-pillar-guide"
      className={`p-6 sm:p-10 rounded-2xl border ${themeClasses.border} ${themeClasses.cardBg} space-y-8 shadow-2xs leading-relaxed text-right ${className}`}
    >
      {/* Pillar Article Header */}
      <header className="space-y-3 pb-6 border-b border-black/[0.06] dark:border-white/[0.08]">
        <div className="flex items-center gap-2 text-xs font-bold text-sky-600 dark:text-sky-400">
          <BookOpen className="w-4 h-4" />
          <span>المقالة المرجعية الشاملة (Pillar Guide) | أكاديمية كويزات الرياضيات</span>
        </div>

        <h2 className={`text-xl sm:text-3xl font-extrabold tracking-tight ${themeClasses.textPrimary}`}>
          الدليل المرجعي الشامل للهندسة التحليلية: من المستوى الديكارتي وقوانين المسافة والميل إلى معادلات الدائرة والقطوع المخروطية والإحداثيات القطبية
        </h2>

        <p className={`text-sm sm:text-base ${themeClasses.textSecondary} leading-relaxed`}>
          مرجع أكاديمي وتربوي متكامل يغطي 12 مهارة واختباراً مستقلاً في الهندسة التحليلية (Analytic Geometry)؛ صُمم هذا المسار لتمكين الطلاب والمعلمين من الإحاطة العميقة بنظام الإحداثيات الديكارتية والأرباع الأربعة، وقانون المسافة الإقليدية ونقطة المنتصف، وميل الخط المستقيم وأشكال معادلاته وصيغ التوازي والتعامد، ومعادلة الدائرة، والقطوع المخروطية الثلاثة (القطع الناقص، المكافئ، الزائد وخطوطه التقاربية)، والإحداثيات القطبية (r, θ)، والمسائل الكلامية التطبيقية لمجالات الاتصالات والملاحة ونظم الرادار.
        </p>
      </header>

      {/* Structured Directory / Index of 12 Quizzes */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className={`text-lg font-bold flex items-center gap-2 ${themeClasses.textPrimary}`}>
            <Layers className="w-5 h-5 text-sky-600 dark:text-sky-400" />
            <span>فهرس الاختبارات التفاعلية الـ 12 في هذا المسار</span>
          </h3>
          <span className="text-xs text-gray-500 font-medium">120 مسألة نموذجية مع الشرح والتلميحات</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {[
            {
              id: 'cartesian-coordinates-quadrants',
              num: '1',
              title: 'نظام الإحداثيات الديكارتية والأرباع الأربعة',
              desc: 'المستوى الإحداثي (x, y)، نقطة الأصل، وتحديد مواقع النقاط والتناظر',
              symbol: '(x, y) ∈ Q₁, Q₂, Q₃, Q₄',
              url: '/domain/geometry-trigonometry/analytic-geometry/cartesian-coordinates-quadrants',
            },
            {
              id: 'distance-between-two-points',
              num: '2',
              title: 'قانون المسافة بين نقطتين في المستوى',
              desc: 'صيغة فيثاغورس الإقليدية لحساب الأطوال واختبار استقامة النقاط',
              symbol: 'd = √[(Δx)² + (Δy)²]',
              url: '/domain/geometry-trigonometry/analytic-geometry/distance-between-two-points',
            },
            {
              id: 'midpoint-line-segment-division',
              num: '3',
              title: 'إحداثيات نقطة المنتصف وتقسيم قطعة مستقيمة',
              desc: 'المتوسط الحسابي للإحداثيات وتنصيف الأقطار ومراكز الدوائر وتلاقي المتوسطات',
              symbol: 'M = ((x₁+x₂)/2, (y₁+y₂)/2)',
              url: '/domain/geometry-trigonometry/analytic-geometry/midpoint-line-segment-division',
            },
            {
              id: 'slope-of-linear-line',
              num: '4',
              title: 'ميل الخط المستقيم والاتجاه',
              desc: 'حساب معدل التغير الرأسي إلى الأفقي، والانحدار، والميل الموجب، السالب، والصفري',
              symbol: 'm = Δy / Δx',
              url: '/domain/geometry-trigonometry/analytic-geometry/slope-of-linear-line',
            },
            {
              id: 'forms-of-linear-equations',
              num: '5',
              title: 'أشكال معادلة الخط المستقيم',
              desc: 'صيغة الميل والمقطع y = mx + b، صيغة نقطة وميل، والصيغة القياسية Ax + By = C',
              symbol: 'y = mx + b',
              url: '/domain/geometry-trigonometry/analytic-geometry/forms-of-linear-equations',
            },
            {
              id: 'parallel-perpendicular-lines',
              num: '6',
              title: 'المستقيمات المتوازية والمتعامدة وميلها',
              desc: 'شروط التوازي بتطابق الميول m₁ = m₂ والتعامد بحاصل ضرب -1 والمعكوس الضربي',
              symbol: 'm₁ = m₂ | m₁ · m₂ = -1',
              url: '/domain/geometry-trigonometry/analytic-geometry/parallel-perpendicular-lines',
            },
            {
              id: 'circle-equation-properties',
              num: '7',
              title: 'معادلة الدائرة وخاصياتها (المركز ونصف القطر)',
              desc: 'الصيغة القياسية (x - h)² + (y - k)² = r² وموقع النقاط داخل وخارج الدائرة',
              symbol: '(x - h)² + (y - k)² = r²',
              url: '/domain/geometry-trigonometry/analytic-geometry/circle-equation-properties',
            },
            {
              id: 'ellipse-properties-equations',
              num: '8',
              title: 'القطع الناقص (Ellipse) وخصائصه الأساسية',
              desc: 'مجموع البعدين عن البؤرتين، المحور الأكبر 2a والأصغر 2b، وعلاقة a² = b² + c²',
              symbol: '(x²/a²) + (y²/b²) = 1',
              url: '/domain/geometry-trigonometry/analytic-geometry/ellipse-properties-equations',
            },
            {
              id: 'parabola-analytic-geometry',
              num: '9',
              title: 'القطع المكافئ (Parabola) في الهندسة التحليلية',
              desc: 'البؤرة والدليل والفتحات الأربع والوتر البؤري العمودي والخاصية البصرية',
              symbol: 'y² = 4px | x² = 4py',
              url: '/domain/geometry-trigonometry/analytic-geometry/parabola-analytic-geometry',
            },
            {
              id: 'hyperbola-asymptotes',
              num: '10',
              title: 'القطع الزائد (Hyperbola) والخطوط التقاربية',
              desc: 'الفرق المطلق بين البعدين عن البؤرتين وخطوط التقارب y = ±(b/a)x وعلاقة c² = a² + b²',
              symbol: '(x²/a²) - (y²/b²) = 1',
              url: '/domain/geometry-trigonometry/analytic-geometry/hyperbola-asymptotes',
            },
            {
              id: 'polar-coordinates-conversion',
              num: '11',
              title: 'الإحداثيات القطبية والتحويل بينها وبين الديكارتية',
              desc: 'التمثيل بـ (r, θ)، قوانين x = r cos θ، y = r sin θ، r = √(x²+y²)، والدوائر القطبية',
              symbol: '(r, θ) ⇄ (x, y)',
              url: '/domain/geometry-trigonometry/analytic-geometry/polar-coordinates-conversion',
            },
            {
              id: 'analytic-geometry-word-problems',
              num: '12',
              title: 'المسائل الكلامية والتطبيقية على الهندسة التحليلية',
              desc: 'تطبيقات واقعية على رصد شبكات الاتصالات ومسارات الملاحة والمسافات الجغرافية',
              symbol: 'd ≤ r (نطاقات التغطية)',
              url: '/domain/geometry-trigonometry/analytic-geometry/analytic-geometry-word-problems',
            },
          ].map((item) => (
            <a
              key={item.id}
              href={`#${item.url}`}
              onClick={(e) => handleTestClick(item.url, item.id, e)}
              className={`group p-3.5 rounded-xl border ${themeClasses.border} hover:border-sky-400 dark:hover:border-sky-600 bg-black/[0.01] dark:bg-white/[0.01] hover:bg-sky-50/50 dark:hover:bg-sky-950/20 transition-all flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="w-5 h-5 rounded-full bg-sky-100 dark:bg-sky-900/60 text-sky-800 dark:text-sky-200 text-xs font-bold flex items-center justify-center">
                    {item.num}
                  </span>
                  <span className="text-[11px] font-mono text-gray-500" dir="ltr">
                    {item.symbol}
                  </span>
                </div>
                <h4 className={`text-xs sm:text-sm font-bold ${themeClasses.textPrimary} group-hover:text-sky-700 dark:group-hover:text-sky-300 transition-colors`}>
                  {item.title}
                </h4>
                <p className={`text-[11px] ${themeClasses.textMuted} mt-1 line-clamp-2`}>
                  {item.desc}
                </p>
              </div>
              <div className="mt-2.5 pt-2 border-t border-black/[0.04] dark:border-white/[0.04] flex items-center justify-between text-[11px] text-sky-700 dark:text-sky-300 font-medium">
                <span>10 مسائل</span>
                <span className="flex items-center gap-1 group-hover:translate-x-[-2px] transition-transform">
                  دخول للاختبار
                  <ArrowRight className="w-3 h-3 rotate-180" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Conceptual Pillar Section 1: The Cartesian Revolution */}
      <section className="space-y-4 pt-4 border-t border-black/[0.06] dark:border-white/[0.08]">
        <h3 className={`text-lg sm:text-xl font-bold flex items-center gap-2 ${themeClasses.textPrimary}`}>
          <Compass className="w-5 h-5 text-sky-600 dark:text-sky-400" />
          <span>أولاً: الثورة الديكارتية وتوحيد الجبر والهندسة الإقليدية</span>
        </h3>
        <p className={`text-sm ${themeClasses.textSecondary} leading-relaxed`}>
          قبل عام 1637، كان الجبر والهندسة علمين منفصلين تماماً؛ كان الجبر علماً حسابياً يتعامل مع المعادلات والأعداد المجهولة، بينما كانت الهندسة علماً إقليدياً بصرياً يعتمد على الفرجار والمسطرة والبراهين الشكلية. عندما نشر رينيه ديكارت عمله التاريخي "الهندسة" (La Géométrie)، وحّد بينهما في علم "الهندسة التحليلية" (Analytic Geometry). الفكرة العبقرية كانت إسناد كل نقطة في المستوى إلى زوج مرتب من الأعداد الحقيقية (x, y) بالنسبة لمحورين متعامدين. بهذا الإنجاز، أصبحت كل مسألة هندسية قابلة للحل كمعادلة جبرية، وأصبح بإمكان علماء الفيزياء رسم مسارات الكواكب وحساب مسارات المقذوفات واكتشاف قوانين الحركة التي قادت نيوتن ولايبنتز لاختراع حساب التفاضل والتكامل.
        </p>
      </section>

      {/* Conceptual Pillar Section 2: Conic Sections (القطوع المخروطية) */}
      <section className="space-y-4 pt-4 border-t border-black/[0.06] dark:border-white/[0.08]">
        <h3 className={`text-lg sm:text-xl font-bold flex items-center gap-2 ${themeClasses.textPrimary}`}>
          <Sparkles className="w-5 h-5 text-sky-600 dark:text-sky-400" />
          <span>ثانياً: عائلة القطوع المخروطية (Conic Sections) وأسرارها الكونية</span>
        </h3>
        <p className={`text-sm ${themeClasses.textSecondary} leading-relaxed`}>
          القطوع المخروطية هي المنحنيات الناتجة عن تقاطع مستوى قاطع مع مخروط دائري قائم مزدوج. وتتدرج هذه المنحنيات بتغير زاوية ميل المستوى القاطع:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
          <div className={`p-4 rounded-xl border ${themeClasses.border} space-y-1.5`}>
            <h4 className="font-bold text-sky-700 dark:text-sky-300">الدائرة (The Circle)</h4>
            <p className="text-gray-600 dark:text-gray-400 font-mono" dir="ltr">(x - h)² + (y - k)² = r²</p>
            <p className="text-gray-600 dark:text-gray-400">تنتج عندما يقطع المستوى المخروط أفقياً بشكل عمودي على محوره. جميع نقاطها متساوية البعد عن المركز.</p>
          </div>
          <div className={`p-4 rounded-xl border ${themeClasses.border} space-y-1.5`}>
            <h4 className="font-bold text-sky-700 dark:text-sky-300">القطع الناقص (The Ellipse)</h4>
            <p className="text-gray-600 dark:text-gray-400 font-mono" dir="ltr">(x²/a²) + (y²/b²) = 1</p>
            <p className="text-gray-600 dark:text-gray-400">مجموع البعدين عن البؤرتين ثابت (2a). يمثل مدارات الكواكب حول الشمس وقاعات الصدى الهامسة.</p>
          </div>
          <div className={`p-4 rounded-xl border ${themeClasses.border} space-y-1.5`}>
            <h4 className="font-bold text-sky-700 dark:text-sky-300">القطع المكافئ (The Parabola)</h4>
            <p className="text-gray-600 dark:text-gray-400 font-mono" dir="ltr">y² = 4px | x² = 4py</p>
            <p className="text-gray-600 dark:text-gray-400">تتساوى المسافة بين البؤرة والدليل. أساس عمل أطباق الاستقبال الفضائي وكشافات السيارات والمقذوفات.</p>
          </div>
          <div className={`p-4 rounded-xl border ${themeClasses.border} space-y-1.5`}>
            <h4 className="font-bold text-sky-700 dark:text-sky-300">القطع الزائد (The Hyperbola)</h4>
            <p className="text-gray-600 dark:text-gray-400 font-mono" dir="ltr">(x²/a²) - (y²/b²) = 1</p>
            <p className="text-gray-600 dark:text-gray-400">الفرق المطلق بين البعدين عن البؤرتين ثابت (2a). يتميز بفرعين منفصلين وخطين تقاربيين يوجهان مساره للمالانهاية.</p>
          </div>
        </div>
      </section>

      {/* Conceptual Pillar Section 3: Linear Equations and Orthogonality */}
      <section className="space-y-4 pt-4 border-t border-black/[0.06] dark:border-white/[0.08]">
        <h3 className={`text-lg sm:text-xl font-bold flex items-center gap-2 ${themeClasses.textPrimary}`}>
          <TrendingUp className="w-5 h-5 text-sky-600 dark:text-sky-400" />
          <span>ثالثاً: المستقيمات، الميول، وشروط التوازي والتعامد</span>
        </h3>
        <p className={`text-sm ${themeClasses.textSecondary} leading-relaxed`}>
          يمثل الخط المستقيم أبسط علاقة خطية من الدرجة الأولى. يُحدد المستقيم إما بنقطتين أو بنقطة وميل. ميل المستقيم m = Δy / Δx يعكس زاوية ميله مع الأفق tan θ. تتطابق الميول في التوازي (m₁ = m₂)، بينما تنقلب مع عكس الإشارة في التعامد (m₁ · m₂ = -1). تتيح هذه العلاقات الهندسية للمعماريين والمهندسين المدنيين تخطيط شبكات الطرق المتعامدة وتشييد الأبراج الشاهقة وضمان استقرار الجسور والأنفاق.
        </p>
      </section>

      {/* Conceptual Pillar Section 4: Modern Real-World Applications */}
      <section className="space-y-4 pt-4 border-t border-black/[0.06] dark:border-white/[0.08]">
        <h3 className={`text-lg sm:text-xl font-bold flex items-center gap-2 ${themeClasses.textPrimary}`}>
          <Lightbulb className="w-5 h-5 text-sky-600 dark:text-sky-400" />
          <span>رابعاً: تطبيقات الهندسة التحليلية في العصر الرقمي</span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs leading-relaxed text-gray-600 dark:text-gray-300">
          <div className={`p-3.5 rounded-xl border ${themeClasses.border}`}>
            <h5 className="font-bold text-gray-900 dark:text-gray-100 mb-1">الملاحة والخرائط الذكية GPS</h5>
            <p>تعتمد أنظمة التموضع على تقاطع دوائر المسافات من الأقمار الاصطناعية لحساب إحداثيات موقعك بدقة السنتيمتر في ثوانٍ معدودة.</p>
          </div>
          <div className={`p-3.5 rounded-xl border ${themeClasses.border}`}>
            <h5 className="font-bold text-gray-900 dark:text-gray-100 mb-1">الرسوميات والواقع الافتراضي VR</h5>
            <p>كل لعبة ثلاثية الأبعاد وكل إطار فيديو يعتمد على مصفوفات التحويل الهندسي الديكارتي وتحريك الكاميرا وإحداثيات البكسلات.</p>
          </div>
          <div className={`p-3.5 rounded-xl border ${themeClasses.border}`}>
            <h5 className="font-bold text-gray-900 dark:text-gray-100 mb-1">تخطيط شبكات الاتصالات الراديوية</h5>
            <p>حساب نطاقات تغطية أبراج الجيل الخامس، تجنب التداخل الترددي، واختيار المواقع المركزية الأمثل لمحطات التوزيع والإنقاذ.</p>
          </div>
        </div>
      </section>

      {/* Footer Summary / Call to Action */}
      <footer className="pt-6 border-t border-black/[0.06] dark:border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-xs text-gray-500">
          تم إعداد هذا الدليل والاختبارات الـ 12 بعناية فائقة لتعزيز التفكير الهندسي والتحليلي الممتع للناشئين والطلاب المتقدمين.
        </div>
        <button
          onClick={() => {
            if (onOpenTest) {
              onOpenTest('cartesian-coordinates-quadrants');
            } else {
              navigateTo('/domain/geometry-trigonometry/analytic-geometry/cartesian-coordinates-quadrants');
            }
          }}
          className="px-5 py-2.5 rounded-xl bg-sky-700 hover:bg-sky-800 text-white text-xs sm:text-sm font-bold flex items-center gap-2 shadow-xs cursor-pointer transition-colors"
        >
          <span>ابدأ بالاختبار الأول: الإحداثيات الديكارتية</span>
          <ArrowRight className="w-4 h-4 rotate-180" />
        </button>
      </footer>
    </article>
  );
};
