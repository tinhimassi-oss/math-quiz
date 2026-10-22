import React from 'react';
import {
  BookOpen,
  Sparkles,
  TrendingUp,
  Lightbulb,
  CheckCircle2,
  Award,
  Layers,
  Compass,
  ArrowRight,
  Maximize2,
} from 'lucide-react';
import { useEyeTheme } from '../context/ThemeContext';
import { navigateTo } from '../navigation/router';

interface TrianglesAnglesPillarArticleProps {
  onOpenTest?: (testId: string) => void;
  className?: string;
}

export const TrianglesAnglesPillarArticle: React.FC<TrianglesAnglesPillarArticleProps> = ({
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
      id="triangles-angles-pillar-guide"
      className={`p-6 sm:p-10 rounded-2xl border ${themeClasses.border} ${themeClasses.cardBg} space-y-8 shadow-2xs leading-relaxed text-right ${className}`}
    >
      {/* Pillar Article Header */}
      <header className="space-y-3 pb-6 border-b border-black/[0.06] dark:border-white/[0.08]">
        <div className="flex items-center gap-2 text-xs font-bold text-indigo-600 dark:text-indigo-400">
          <BookOpen className="w-4 h-4" />
          <span>المقالة المرجعية الشاملة (Pillar Guide) | أكاديمية كويزات الرياضيات</span>
        </div>

        <h2 className={`text-xl sm:text-3xl font-extrabold tracking-tight ${themeClasses.textPrimary}`}>
          الدليل المرجعي الشامل لهندسة المثلثات والزوايا: من تصنيف الانفراج والتوازي إلى مبرهنات فيثاغورس، التطابق، والنسب المثلثية الواقعية
        </h2>

        <p className={`text-sm sm:text-base ${themeClasses.textSecondary} leading-relaxed`}>
          مرجع إقليدي وتربوي متكامل يغطي 12 مهارة واختباراً مستقلاً في هندسة المثلثات والزوايا؛
          صُمم هذا الدليل لتمكين الطلاب والمعلمين من الإحاطة الشاملة بالعلاقات الزاوية عند تقاطع المستقيمات،
          وشروط انغلاق المثلث ومتباينته، ونظرية فيثاغورس ثلاثية الأبعاد وعكسها، وشروط التطابق والتشابه الخمسة،
          والقطع والمراكز الخاصة الأربعة، وصولاً إلى حساب المثلثات وزوايا الارتفاع والانخفاض والملاحة الواقعية.
        </p>
      </header>

      {/* Structured Directory / Index of 12 Quizzes */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className={`text-lg font-bold flex items-center gap-2 ${themeClasses.textPrimary}`}>
            <Layers className="w-5 h-5 text-indigo-500" />
            <span>فهرس الاختبارات التفاعلية الـ 12 في هذا المسار</span>
          </h3>
          <span className="text-xs text-gray-500 font-medium">120 مسألة نموذجية مع الشرح والتلميحات</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {[
            {
              id: 'angle-types-measurement',
              num: '1',
              title: 'أنواع الزوايا وقياسها',
              desc: 'الحادة، القائمة، المنفرجة، المستقيمة، والمنعكسة بالدرجات',
              symbol: '0° < θ < 360°',
              url: '/domain/geometry-trigonometry/triangles-angles/angle-types-measurement',
            },
            {
              id: 'angle-relationships',
              num: '2',
              title: 'العلاقات بين الزوايا',
              desc: 'المتتامة 90°، المتكاملة 180°، المتقابلة بالرأس والزوايا حول نقطة',
              symbol: 'α + β = 90° | 180°',
              url: '/domain/geometry-trigonometry/triangles-angles/angle-relationships',
            },
            {
              id: 'parallel-lines-transversals',
              num: '3',
              title: 'المستقيمات المتوازية والقاطع',
              desc: 'الزوايا المتبادلة (Z)، المتناظرة (F)، والمتحالفة (C)',
              symbol: 'L₁ ∥ L₂',
              url: '/domain/geometry-trigonometry/triangles-angles/parallel-lines-transversals',
            },
            {
              id: 'triangle-classification',
              num: '4',
              title: 'تصنيف المثلثات حسب الزوايا والأضلاع',
              desc: 'التصنيف المزدوج: مختلف، متطابق الضلعين، متطابق الأضلاع | حاد، قائم، منفرج',
              symbol: 'Sides & Angles',
              url: '/domain/geometry-trigonometry/triangles-angles/triangle-classification',
            },
            {
              id: 'triangle-angles-exterior-angle',
              num: '5',
              title: 'مجموع زوايا المثلث والزاوية الخارجية',
              desc: 'مبرهنة الـ 180°، ومساواة الزاوية الخارجية لمجموع البعيدتين',
              symbol: '∑∠ = 180° | Ext',
              url: '/domain/geometry-trigonometry/triangles-angles/triangle-angles-exterior-angle',
            },
            {
              id: 'triangle-inequality-theorem',
              num: '6',
              title: 'متباينة المثلث وعلاقة الأضلاع والزوايا',
              desc: 'شرط تشكيل المثلث (مجموع الأصغرين > الأكبر) ومقابلة الضلع الأطول للزاوية الكبرى',
              symbol: 'a + b > c',
              url: '/domain/geometry-trigonometry/triangles-angles/triangle-inequality-theorem',
            },
            {
              id: 'pythagorean-theorem-applications',
              num: '7',
              title: 'نظرية فيثاغورس وتطبيقاتها',
              desc: 'قانون a² + b² = c²، الوتر، ضلعي القائمة، الثلاثيات وعكس النظرية',
              symbol: 'a² + b² = c²',
              url: '/domain/geometry-trigonometry/triangles-angles/pythagorean-theorem-applications',
            },
            {
              id: 'triangle-congruence-criteria',
              num: '8',
              title: 'تطابق المثلثات (حالات SSS, SAS, ASA, AAS, HL)',
              desc: 'شروط التطابق التام، العناصر المتناظرة، والحالات المبهمة',
              symbol: 'ΔABC ≅ ΔDEF',
              url: '/domain/geometry-trigonometry/triangles-angles/triangle-congruence-criteria',
            },
            {
              id: 'triangle-similarity-proportions',
              num: '9',
              title: 'تشابه المثلثات وتناسب الأطوال',
              desc: 'شروط التشابه AA، معامل المقياس k، ونسبة المساحات التربيعية k²',
              symbol: 'ΔABC ∼ ΔDEF',
              url: '/domain/geometry-trigonometry/triangles-angles/triangle-similarity-proportions',
            },
            {
              id: 'special-segments-in-triangles',
              num: '10',
              title: 'المستقيمات والقطع الخاصة في المثلث',
              desc: 'المتوسطات ومركز الثقل بنسبة 2:1، الارتفاعات، والمنصفات ومراكز الدوائر',
              symbol: 'Centroid & Incenter',
              url: '/domain/geometry-trigonometry/triangles-angles/special-segments-in-triangles',
            },
            {
              id: 'right-triangle-trigonometry-basics',
              num: '11',
              title: 'النسب المثلثية في المثلث القائم',
              desc: 'الجيب sin، جيب التمام cos، الظل tan، والزوايا الشهيرة 30°-45°-60°',
              symbol: 'sin, cos, tan',
              url: '/domain/geometry-trigonometry/triangles-angles/right-triangle-trigonometry-basics',
            },
            {
              id: 'triangles-angles-word-problems',
              num: '12',
              title: 'المسائل الكلامية والحياتية والرصد',
              desc: 'زوايا الارتفاع والانخفاض، الملاحة والمسارات، وحساب أطوال الظلال',
              symbol: 'Real World Angles',
              url: '/domain/geometry-trigonometry/triangles-angles/triangles-angles-word-problems',
            },
          ].map((test) => (
            <a
              key={test.id}
              href={test.url}
              onClick={(e) => handleTestClick(test.url, test.id, e)}
              className="group p-3 rounded-xl border border-black/[0.06] dark:border-white/[0.08] hover:border-indigo-500/50 hover:bg-indigo-50/20 dark:hover:bg-indigo-900/10 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="w-5 h-5 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-bold text-xs flex items-center justify-center">
                    {test.num}
                  </span>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300">
                    {test.symbol}
                  </span>
                </div>
                <h4 className="font-bold text-xs sm:text-sm text-gray-900 dark:text-gray-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {test.title}
                </h4>
                <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-1 line-clamp-2">
                  {test.desc}
                </p>
              </div>
              <div className="mt-2 pt-2 border-t border-black/[0.04] dark:border-white/[0.04] flex items-center justify-end text-[11px] font-semibold text-indigo-600 dark:text-indigo-400 group-hover:translate-x-[-2px] transition-transform">
                <span>بدء الاختبار</span>
                <ArrowRight className="w-3 h-3 mr-1 rotate-180" />
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Deep Pedagogical Content */}
      <section className="space-y-6 pt-4 border-t border-black/[0.06] dark:border-white/[0.08]">
        <h3 className={`text-xl font-bold flex items-center gap-2 ${themeClasses.textPrimary}`}>
          <Sparkles className="w-5 h-5 text-indigo-500" />
          <span>الركائز الإقليدية الثلاث التي يقوم عليها فهم المثلثات والزوايا</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm leading-relaxed">
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/60 space-y-2">
            <h4 className="font-bold text-indigo-600 dark:text-indigo-400 flex items-center gap-1.5">
              <Compass className="w-4 h-4" />
              1. استقرار المثلث وصلابته الطبيعية
            </h4>
            <p className="text-gray-600 dark:text-gray-300">
              بينما يمكن للأشكال الرباعية والخماسية أن تتشوه زواياها وتتغير أشكالها مع بقاء أطوال أضلاعها ثابتة (مثل إمالة مربع ليصبح معيناً)،
              يتميز المثلث بـ "الصلابة الهيكلية المطلقة"؛ إذ إن تحديد أطوال أضلاعه الثلاثة يثبت زواياه تلقائياً وبشكل قطعي (حالة SSS). لهذا تعتمد هياكل الجسور والأبراج الفضائية على التثليث الهيكلي.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/60 space-y-2">
            <h4 className="font-bold text-indigo-600 dark:text-indigo-400 flex items-center gap-1.5">
              <TrendingUp className="w-4 h-4" />
              2. التناغم الزاوي ومسلمة التوازي
            </h4>
            <p className="text-gray-600 dark:text-gray-300">
              حقيقة أن مجموع زوايا المثلث 180° ليست مصادفة، بل هي نتيجة مباشرة لمسلمة إقليدس الخامسة للتوازي.
              فعند رسم مستقيم موازٍ لقاعدة المثلث مار برأسه، تنقل الزوايا المتبادلة داخلياً زاويتي القاعدة إلى خط مستقيم بجوار زاوية الرأس، ليتشكل خط مستقيم تام قياسه 180°.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/60 space-y-2">
            <h4 className="font-bold text-indigo-600 dark:text-indigo-400 flex items-center gap-1.5">
              <Maximize2 className="w-4 h-4" />
              3. مبرهنة فيثاغورس ونشأة حساب المثلثات
            </h4>
            <p className="text-gray-600 dark:text-gray-300">
              تمثل نظرية فيثاغورس (a² + b² = c²) حجر الأساس الذي انطلق منه علم المثلثات.
              حيث إن نسب أضلاع المثلث القائم بالنسبة لزاوية حادة (sin, cos, tan) ثابتة تماماً بغض النظر عن حجم المثلث، مما فتح باباً غير مسبوق لحساب أبعاد مستحيلة الوصول عملياً كارتفاعات النجوم والجبال الشاهقة.
            </p>
          </div>
        </div>

        {/* Master Comparison Table of Congruence vs Similarity */}
        <div className="space-y-3 pt-4">
          <h4 className={`text-base font-bold flex items-center gap-2 ${themeClasses.textPrimary}`}>
            <Lightbulb className="w-4 h-4 text-amber-500" />
            <span>المقارنة المنهجية: تطابق المثلثات مقابل تشابه المثلثات</span>
          </h4>

          <div className="overflow-x-auto rounded-xl border border-black/[0.08] dark:border-white/[0.08]">
            <table className="w-full text-right text-xs">
              <thead className="bg-slate-100 dark:bg-slate-800/80 font-bold text-gray-700 dark:text-gray-200">
                <tr>
                  <th className="p-3 border-b border-black/[0.06] dark:border-white/[0.06]">وجه المقارنة</th>
                  <th className="p-3 border-b border-black/[0.06] dark:border-white/[0.06]">تطابق المثلثات (Congruence ≅)</th>
                  <th className="p-3 border-b border-black/[0.06] dark:border-white/[0.06]">تشابه المثلثات (Similarity ∼)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/[0.04] dark:divide-white/[0.04] text-gray-600 dark:text-gray-300">
                <tr>
                  <td className="p-3 font-semibold text-gray-900 dark:text-gray-100">المفهوم الجوهري</td>
                  <td className="p-3">تطابق تام في الشكل والمقاس (نسخة طبق الأصل 100%)</td>
                  <td className="p-3">تطابق في الشكل والزوايا مع تكبير أو تصغير في المقاس</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-gray-900 dark:text-gray-100">الزوايا المتناظرة</td>
                  <td className="p-3">متطابقة ومتساوية في القياس تماماً</td>
                  <td className="p-3">متطابقة ومتساوية في القياس تماماً</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-gray-900 dark:text-gray-100">الأضلاع المتناظرة</td>
                  <td className="p-3">متطابقة ومتساوية في الطول تماماً</td>
                  <td className="p-3">متناسبة بنسبة ثابتة (معامل التشابه k)</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-gray-900 dark:text-gray-100">الحالات المعتمدة</td>
                  <td className="p-3">SSS, SAS, ASA, AAS, HL</td>
                  <td className="p-3">AA (زاويتان), SAS (تناسب ضلعين وزاوية), SSS (تناسب 3 أضلاع)</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-gray-900 dark:text-gray-100">نسبة المساحات</td>
                  <td className="p-3">متساوية بنسبة 1 : 1</td>
                  <td className="p-3">تساوي مربع معامل التشابه k²</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Pedagogical Advices for Mastery */}
        <div className="p-4 rounded-xl bg-indigo-50/60 dark:bg-indigo-950/20 border border-indigo-200 dark:border-indigo-900/40 space-y-2">
          <h4 className="font-bold text-sm text-indigo-700 dark:text-indigo-300 flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            <span>خارطة طريق إتقان هذا المسار: 3 خطوات ذهبية</span>
          </h4>
          <ul className="text-xs text-gray-600 dark:text-gray-300 space-y-1.5 list-disc list-inside">
            <li>
              <strong>ابدأ بتأسيس الزوايا والتوازي:</strong> إتقان الزوايا المتكاملة والمتبادلة والمتناظرة يوفر عليك نصف الطريق في براهين المثلثات وحساب قياساتها.
            </li>
            <li>
              <strong>افهم شروط انغلاق المثلث ومتباينة الأضلاع:</strong> تذكر دوماً أن فحص أصغر ضلعين ومقارنة مجموعهما مع الضلع الأكبر هو المفتاح لتحديد إمكانية بناء المثلث.
            </li>
            <li>
              <strong>اربط فيثاغورس بالنسب المثلثية:</strong> تذكر أن الضلع المقابل للزاوية 30° في المثلث القائم يساوي نصف الوتر دائماً، وأن زاوية الارتفاع تساوي زاوية الانخفاض بالتبادل الداخلي الأفقي.
            </li>
          </ul>
        </div>
      </section>

      {/* Footer Call to Action */}
      <footer className="pt-4 border-t border-black/[0.06] dark:border-white/[0.08] flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
          <Award className="w-4 h-4 text-indigo-500" />
          <span>كل اختبار يتضمن 10 أسئلة دقيقة، شهادة إنجاز تفاعلية، ومقالة متخصصة تتجاوز 350 كلمة.</span>
        </div>
        <button
          onClick={() =>
            navigateTo(
              '/domain/geometry-trigonometry/triangles-angles/angle-types-measurement'
            )
          }
          className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs flex items-center gap-1.5 shadow-sm transition-all"
        >
          <span>ابدأ الاختبار الأول: أنواع الزوايا وقياسها</span>
          <ArrowRight className="w-3.5 h-3.5 rotate-180" />
        </button>
      </footer>
    </article>
  );
};
