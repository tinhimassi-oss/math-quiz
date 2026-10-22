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

interface TrigonometryPillarArticleProps {
  onOpenTest?: (testId: string) => void;
  className?: string;
}

export const TrigonometryPillarArticle: React.FC<TrigonometryPillarArticleProps> = ({
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
      id="trigonometry-pillar-guide"
      className={`p-6 sm:p-10 rounded-2xl border ${themeClasses.border} ${themeClasses.cardBg} space-y-8 shadow-2xs leading-relaxed text-right ${className}`}
    >
      {/* Pillar Article Header */}
      <header className="space-y-3 pb-6 border-b border-black/[0.06] dark:border-white/[0.08]">
        <div className="flex items-center gap-2 text-xs font-bold text-teal-600 dark:text-teal-400">
          <BookOpen className="w-4 h-4" />
          <span>المقالة المرجعية الشاملة (Pillar Guide) | أكاديمية كويزات الرياضيات</span>
        </div>

        <h2 className={`text-xl sm:text-3xl font-extrabold tracking-tight ${themeClasses.textPrimary}`}>
          الدليل المرجعي الشامل لحساب المثلثات: من نسب المثلث القائم ودائرة الوحدة إلى المتطابقات الفيثاغورسية وقوانين الجيب والتمام والنمذجة الواقعية
        </h2>

        <p className={`text-sm sm:text-base ${themeClasses.textSecondary} leading-relaxed`}>
          مرجع أكاديمي وتربوي متكامل يغطي 12 مهارة واختباراً مستقلاً في حساب المثلثات؛ صُمم هذا المسار لتمكين الطلاب والمعلمين والباحثين من الإحاطة العميقة بالنسبة المثلثية في المثلث القائم (الجيب، جيب التمام، الظل ومقلوباتها)، وقيم الزوايا الخاصة (30°، 45°، 60°)، والتحويل بين الدرجات والراديان، وهندسة دائرة الوحدة والزوايا المرجعية، والمتطابقات الفيثاغورسية وصيغ الجمع والضعف والنصف، وحل المعادلات المثلثية، وقانوني الجيب وجيب التمام في المثلثات العامة، ورسم الدوال الدورية، وصولاً إلى مسائل زوايا الارتفاع والانخفاض والملاحة الواقعية.
        </p>
      </header>

      {/* Structured Directory / Index of 12 Quizzes */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className={`text-lg font-bold flex items-center gap-2 ${themeClasses.textPrimary}`}>
            <Layers className="w-5 h-5 text-teal-600 dark:text-teal-400" />
            <span>فهرس الاختبارات التفاعلية الـ 12 في هذا المسار</span>
          </h3>
          <span className="text-xs text-gray-500 font-medium">120 مسألة نموذجية مع الشرح والتلميحات</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {[
            {
              id: 'basic-trig-ratios-right-triangle',
              num: '1',
              title: 'النسب المثلثية الأساسية في المثلث القائم',
              desc: 'الجيب (sin)، جيب التمام (cos)، والظل (tan) ونسب المقابل والمجاور والوتر',
              symbol: 'sin θ = مقابل/وتر',
              url: '/domain/geometry-trigonometry/trigonometry/basic-trig-ratios-right-triangle',
            },
            {
              id: 'reciprocal-trig-ratios',
              num: '2',
              title: 'مقلوب النسب المثلثية',
              desc: 'القاطع sec، قاطع التمام csc، وظل التمام cot وعلاقات المعكوس الضربي',
              symbol: 'sec θ = 1 / cos θ',
              url: '/domain/geometry-trigonometry/trigonometry/reciprocal-trig-ratios',
            },
            {
              id: 'special-angles-trig-ratios',
              num: '3',
              title: 'النسب المثلثية للزوايا الخاصة',
              desc: 'القيم الدقيقة لـ 30° و 45° و 60° واشتقاقاتها بدون آلة حاسبة',
              symbol: 'sin(30°) = ½',
              url: '/domain/geometry-trigonometry/trigonometry/special-angles-trig-ratios',
            },
            {
              id: 'degrees-radians-conversion',
              num: '4',
              title: 'قياس الزوايا بالدرجات والراديان',
              desc: 'التحويل بين القياس الستيني والدائري والعلاقة مع π وأطوال الأقواس s=r·θ',
              symbol: '180° = π rad',
              url: '/domain/geometry-trigonometry/trigonometry/degrees-radians-conversion',
            },
            {
              id: 'unit-circle-reference-angles',
              num: '5',
              title: 'دائرة الوحدة والزوايا المرجعية',
              desc: 'إحداثيات (cos θ, sin θ)، إشارات ASTC، وحساب الزاوية الحادة المرجعية',
              symbol: '(cos θ, sin θ)',
              url: '/domain/geometry-trigonometry/trigonometry/unit-circle-reference-angles',
            },
            {
              id: 'pythagorean-fundamental-identities',
              num: '6',
              title: 'المتطابقات المثلثية الأساسية والفيثاغورسية',
              desc: 'sin²θ + cos²θ = 1 و 1 + tan²θ = sec²θ وتبسيط المقادير الجبرية',
              symbol: 'sin²θ + cos²θ = 1',
              url: '/domain/geometry-trigonometry/trigonometry/pythagorean-fundamental-identities',
            },
            {
              id: 'sum-difference-double-half-identities',
              num: '7',
              title: 'متطابقات مجموع وفرق زاويتين والضعف والنصف',
              desc: 'صيغ sin(A±B) و cos(A±B) وضعف الزاوية sin(2A) ونصف الزاوية لـ 75° و 15°',
              symbol: 'sin(A ± B)',
              url: '/domain/geometry-trigonometry/trigonometry/sum-difference-double-half-identities',
            },
            {
              id: 'solving-trigonometric-equations',
              num: '8',
              title: 'حل المعادلات المثلثية',
              desc: 'إيجاد قيم x في الفترات المحددة كـ [0, 2π] والحلول العامة الدورية',
              symbol: '2 sin(x) - 1 = 0',
              url: '/domain/geometry-trigonometry/trigonometry/solving-trigonometric-equations',
            },
            {
              id: 'law-of-sines',
              num: '9',
              title: 'قانون الجيب (Law of Sines)',
              desc: 'حل المثلثات غير القائمة في حالات (AAS, ASA) وحساب مساحة المثلث نصف القطر',
              symbol: 'a / sin A = b / sin B',
              url: '/domain/geometry-trigonometry/trigonometry/law-of-sines',
            },
            {
              id: 'law-of-cosines',
              num: '10',
              title: 'قانون جيب التمام (Law of Cosines)',
              desc: 'تعميم فيثاغورس لحالات (SAS) و (SSS) وتحديد نوع المثلث من أضلاعه',
              symbol: 'c² = a² + b² - 2ab cos C',
              url: '/domain/geometry-trigonometry/trigonometry/law-of-cosines',
            },
            {
              id: 'graphing-trig-functions',
              num: '11',
              title: 'التمثيل البياني للدوال المثلثية',
              desc: 'السعة |A|، الدورة 2π/B، خط المنتصف y=D، وتحليل حركة الموجات الجيبية',
              symbol: 'y = A sin(Bx) + D',
              url: '/domain/geometry-trigonometry/trigonometry/graphing-trig-functions',
            },
            {
              id: 'trig-word-problems-applications',
              num: '12',
              title: 'المسائل الكلامية والتطبيقية',
              desc: 'زوايا الارتفاع والانخفاض، أطوال الظلال، قياس ارتفاع الأبراج والملاحة',
              symbol: 'tan θ = الارتفاع / البعد',
              url: '/domain/geometry-trigonometry/trigonometry/trig-word-problems-applications',
            },
          ].map((item) => (
            <a
              key={item.id}
              href={`#${item.url}`}
              onClick={(e) => handleTestClick(item.url, item.id, e)}
              className={`group p-3.5 rounded-xl border ${themeClasses.border} hover:border-teal-400 dark:hover:border-teal-600 bg-black/[0.01] dark:bg-white/[0.01] hover:bg-teal-50/50 dark:hover:bg-teal-950/20 transition-all flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="w-5 h-5 rounded-full bg-teal-100 dark:bg-teal-900/60 text-teal-800 dark:text-teal-200 text-xs font-bold flex items-center justify-center">
                    {item.num}
                  </span>
                  <span className="text-[11px] font-mono text-gray-500" dir="ltr">
                    {item.symbol}
                  </span>
                </div>
                <h4 className={`text-xs sm:text-sm font-bold ${themeClasses.textPrimary} group-hover:text-teal-700 dark:group-hover:text-teal-300 transition-colors`}>
                  {item.title}
                </h4>
                <p className={`text-[11px] ${themeClasses.textMuted} mt-1 line-clamp-2`}>
                  {item.desc}
                </p>
              </div>
              <div className="mt-2.5 pt-2 border-t border-black/[0.04] dark:border-white/[0.04] flex items-center justify-between text-[11px] text-teal-700 dark:text-teal-300 font-medium">
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

      {/* Conceptual Pillar Section 1: Foundations of Trigonometry */}
      <section className="space-y-4 pt-4 border-t border-black/[0.06] dark:border-white/[0.08]">
        <h3 className={`text-lg sm:text-xl font-bold flex items-center gap-2 ${themeClasses.textPrimary}`}>
          <Compass className="w-5 h-5 text-teal-600 dark:text-teal-400" />
          <span>أولاً: الجذور التاريخية والنسب الهندسية في المثلث قائم الزاوية</span>
        </h3>
        <p className={`text-sm ${themeClasses.textSecondary} leading-relaxed`}>
          كلمة "تريغونومتري" (Trigonometry) مشتقة من الكلمات الإغريقية القديمة: "تريغونوس" وتعني مثلث، و"مترون" وتعني قياس. يرجع تطور حساب المثلثات إلى الحاجة الفلكية الملحة لدى البابليين والإغريق والمصريين القدماء لقياس مواقع الأجرام السماوية وبناء الأهرامات وتحديد مواعيد الفصول الزراعية ومواسم الفيضان. وفي العصر الذهبي للحضارة الإسلامية، ارتقى حساب المثلثات من مجرد ملحق لعلم الفلك إلى فرع رياضي مستقل وشامل؛ حيث استبدل العالم الفلكي البتاني أوتار بطليموس القديمة بمفهوم "الجيب" الحقيقي (Sine)، واستنبط أبو الوفاء البوزجاني والبيروني ظل الزاوية وظل التمام والقاطع وقاطع التمام، ووضع نصير الدين الطوسي أول مؤلف مستقل لحساب المثلثات في كتابه "كشف القناع عن أسرار شكل القطاع".
        </p>
        <p className={`text-sm ${themeClasses.textSecondary} leading-relaxed`}>
          يقوم المثلث القائم على حقيقة تشابه المثلثات: إذا تساوت زاويتان حادتان في مثلثين قائمين مختلفي الحجم، فإن النسبة بين أطوال أضلاعهما تظل ثابتة تماماً. من هنا نشأت النسب الثلاث الشهيرة: جيب الزاوية sin θ (المقابل على الوتر)، جيب التمام cos θ (المجاور على الوتر)، والظل tan θ (المقابل على المجاور). وبما أن الوتر هو أطول الأضلاع، فإن قيم الجيب وجيب التمام لأي زاوية حادة لا تتجاوز الواحد الصحيح قط.
        </p>
      </section>

      {/* Conceptual Pillar Section 2: Unit Circle & Angle Measurement */}
      <section className="space-y-4 pt-4 border-t border-black/[0.06] dark:border-white/[0.08]">
        <h3 className={`text-lg sm:text-xl font-bold flex items-center gap-2 ${themeClasses.textPrimary}`}>
          <Sparkles className="w-5 h-5 text-teal-600 dark:text-teal-400" />
          <span>ثانياً: هندسة دائرة الوحدة، الراديان، وتعميم الدوال لجميع الأرباع</span>
        </h3>
        <p className={`text-sm ${themeClasses.textSecondary} leading-relaxed`}>
          عندما نقف عند حدود المثلث القائم، نعجز عن الإجابة على سؤال بسيط: ما هو جيب الزاوية 150° أو 270°؟ هنا تأتي "دائرة الوحدة" (Unit Circle) كنقلة فلسفية ورياضية حاسمة. دائرة نصف قطرها r = 1 ومركزها نقطة الأصل (0, 0). عندما يدور نصف القطر بزاوية θ في الاتجاه الموجب (عكس اتجاه عقارب الساعة)، فإن إحداثيات نقطة النهاية على الدائرة تُعرف مباشرة بـ (cos θ, sin θ). هذا التعريف يتيح حساب النسب لأي زاوية حقيقية موجبة أو سالبة.
        </p>
        <div className={`p-4 rounded-xl border ${themeClasses.border} bg-teal-50/30 dark:bg-teal-950/20 space-y-2`}>
          <h4 className="text-sm font-bold text-teal-800 dark:text-teal-300">
            قاعدة الإشارات في الأرباع الأربعة (قاعدة ASTC الذهبية):
          </h4>
          <ul className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1 list-disc list-inside">
            <li><strong>الربع الأول (0° إلى 90°):</strong> جميع الدوال الست موجبة (+) (All).</li>
            <li><strong>الربع الثاني (90° إلى 180°):</strong> الجيب sin ومقلوبه csc موجبان فقط (+) (Sine).</li>
            <li><strong>الربع الثالث (180° إلى 270°):</strong> الظل tan ومقلوبه cot موجبان فقط (+) (Tangent).</li>
            <li><strong>الربع الرابع (270° إلى 360°):</strong> جيب التمام cos ومقلوبه sec موجبان فقط (+) (Cosine).</li>
          </ul>
        </div>
      </section>

      {/* Conceptual Pillar Section 3: General Triangles Laws */}
      <section className="space-y-4 pt-4 border-t border-black/[0.06] dark:border-white/[0.08]">
        <h3 className={`text-lg sm:text-xl font-bold flex items-center gap-2 ${themeClasses.textPrimary}`}>
          <TrendingUp className="w-5 h-5 text-teal-600 dark:text-teal-400" />
          <span>ثالثاً: حل المثلثات العامة بقانوني الجيب وجيب التمام</span>
        </h3>
        <p className={`text-sm ${themeClasses.textSecondary} leading-relaxed`}>
          تعتمد الهندسة المساحية والملاحة البحرية والجوية على حل مثلثات غير قائمة الزاوية. وهنا نعتمد على مبرهنتين أساسيتين:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className={`p-4 rounded-xl border ${themeClasses.border} space-y-2`}>
            <h4 className="text-sm font-bold text-teal-700 dark:text-teal-300">قانون الجيب (Law of Sines)</h4>
            <p className="text-xs text-gray-600 dark:text-gray-400 font-mono" dir="ltr">a / sin A = b / sin B = c / sin C = 2R</p>
            <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
              يُطبق عندما تُعرف زاويتان وضلع (AAS, ASA) أو ضلعان وزاوية مقابلة (SSA). وترتبط به صيغة المساحة الشهيرة: Area = ½ a b sin C.
            </p>
          </div>
          <div className={`p-4 rounded-xl border ${themeClasses.border} space-y-2`}>
            <h4 className="text-sm font-bold text-teal-700 dark:text-teal-300">قانون جيب التمام (Law of Cosines)</h4>
            <p className="text-xs text-gray-600 dark:text-gray-400 font-mono" dir="ltr">c² = a² + b² - 2ab cos(C)</p>
            <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
              يمثل التعميم الشامل لنظرية فيثاغورس، ويُطبق عندما يُعرف ضلعان وزاوية محصورة بينهما (SAS) أو أطوال الأضلاع الثلاثة (SSS).
            </p>
          </div>
        </div>
      </section>

      {/* Conceptual Pillar Section 4: Modern Real-World Applications */}
      <section className="space-y-4 pt-4 border-t border-black/[0.06] dark:border-white/[0.08]">
        <h3 className={`text-lg sm:text-xl font-bold flex items-center gap-2 ${themeClasses.textPrimary}`}>
          <Lightbulb className="w-5 h-5 text-teal-600 dark:text-teal-400" />
          <span>رابعاً: التطبيقات الحياتية والهندسية المعاصرة لحساب المثلثات</span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs leading-relaxed text-gray-600 dark:text-gray-300">
          <div className={`p-3.5 rounded-xl border ${themeClasses.border}`}>
            <h5 className="font-bold text-gray-900 dark:text-gray-100 mb-1">الملاحة والخرائط والتثليث</h5>
            <p>تعتمد أنظمة GPS والملاحة الجوية والبحرية على التثليث المثلثي لحساب المسافات وتصحيح انحرافات الرياح والتيارات المائية بدقة السنتيمتر.</p>
          </div>
          <div className={`p-3.5 rounded-xl border ${themeClasses.border}`}>
            <h5 className="font-bold text-gray-900 dark:text-gray-100 mb-1">الفيزياء والموجات والكهرباء</h5>
            <p>التيار المتردد (AC)، أمواج الضوء والصوت، إشارات الهواتف والراديو، كلها تتذبذب وفق الدوال الجيبية sin و cos وسعتها وترددها.</p>
          </div>
          <div className={`p-3.5 rounded-xl border ${themeClasses.border}`}>
            <h5 className="font-bold text-gray-900 dark:text-gray-100 mb-1">الرسوميات والذكاء الاصطناعي</h5>
            <p>تدوير المجسمات ثلاثية الأبعاد، تحريك الشخصيات في الألعاب الرقمية، مصفوفات التحويل، وتحويلات فورييه لمعالجة الصور والصوتيات.</p>
          </div>
        </div>
      </section>

      {/* Footer Summary / Call to Action */}
      <footer className="pt-6 border-t border-black/[0.06] dark:border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-xs text-gray-500">
          تم إعداد هذا الدليل المرجعي والاختبارات الـ 12 بعناية فائقة لترسيخ التفكير الرياضي المنطقي والرياضيات الممتعة.
        </div>
        <button
          onClick={() => {
            if (onOpenTest) {
              onOpenTest('basic-trig-ratios-right-triangle');
            } else {
              navigateTo('/domain/geometry-trigonometry/trigonometry/basic-trig-ratios-right-triangle');
            }
          }}
          className="px-5 py-2.5 rounded-xl bg-teal-700 hover:bg-teal-800 text-white text-xs sm:text-sm font-bold flex items-center gap-2 shadow-xs cursor-pointer transition-colors"
        >
          <span>ابدأ بالاختبار الأول: النسب الأساسية</span>
          <ArrowRight className="w-4 h-4 rotate-180" />
        </button>
      </footer>
    </article>
  );
};
