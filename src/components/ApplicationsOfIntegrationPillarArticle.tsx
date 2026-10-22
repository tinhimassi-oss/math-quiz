import React from 'react';
import {
  BookOpen,
  Sparkles,
  Layers,
  Compass,
  ArrowRight,
  ShieldCheck,
  Cpu,
  Infinity as InfinityIcon,
  PieChart,
} from 'lucide-react';
import { useEyeTheme } from '../context/ThemeContext';
import { navigateTo } from '../navigation/router';

interface ApplicationsOfIntegrationPillarArticleProps {
  onOpenTest?: (testId: string) => void;
  className?: string;
}

export const ApplicationsOfIntegrationPillarArticle: React.FC<ApplicationsOfIntegrationPillarArticleProps> = ({
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

  const quizzes = [
    {
      id: 'area-under-curve-x-axis',
      title: 'حساب المساحة المحصورة بين منحنى ومحور السينات (x-axis)',
      desc: 'إيجاد الجذور وأصفار الدالة، تجزئة الفترات الموجبة والسالبة لضمان مساحات موجبة هندسياً',
      math: 'A = ∫ₐᵇ |f(x)| dx',
      emoji: '',
      level: 'متوسط',
    },
    {
      id: 'area-between-two-curves',
      title: 'حساب المساحة المحصورة بين منحنيين متقاطعين',
      desc: 'تحديد نقاط التقاطع كحدود تكامل، وطرح المنحنى السفلي من العلوي [الأعلى - الأدنى]',
      math: 'A = ∫ₐᵇ [f(x) - g(x)] dx',
      emoji: '',
      level: 'متوسط',
    },
    {
      id: 'disk-method-volumes',
      title: 'حساب حجوم الأجسام الدورانية بطريقة الأقراص (Disk Method)',
      desc: 'تراكم مقاطع عرضية دائرية مصمتة مساحتها π r² عند الدوران حول محور التماثل',
      math: 'V = π ∫ₐᵇ [R(x)]² dx',
      emoji: '',
      level: 'متوسط',
    },
    {
      id: 'washer-method-volumes',
      title: 'حساب حجوم الأجسام الدورانية بطريقة الحلقات (Washer Method)',
      desc: 'حساب حجوم الأجسام المجوفة الناتجة عن دوران منطقة بين منحنيين حول محور خارجي',
      math: 'V = π ∫ₐᵇ [R²(x) - r²(x)] dx',
      emoji: '',
      level: 'متقدم',
    },
    {
      id: 'cylindrical-shells-method',
      title: 'حجوم الأجسام الدورانية بالقشور الأسطوانية (Cylindrical Shells)',
      desc: 'استخدام شرائح موازية لمحور الدوران V = 2π ∫ (نصف القطر × الارتفاع) للتكامل المباشر',
      math: 'V = 2π ∫ₐᵇ r(x) h(x) dx',
      emoji: '',
      level: 'متقدم',
    },
    {
      id: 'arc-length-curves',
      title: 'طول قوس المنحنى (Arc Length)',
      desc: 'تطبيق نظرية فيثاغورس اللامتناهية في الصغر لحساب المسافة المنحنية لأي مسار',
      math: 'L = ∫ₐᵇ √(1 + [f\'(x)]²) dx',
      emoji: '',
      level: 'متقدم',
    },
    {
      id: 'surface-area-revolution',
      title: 'مساحة السطح الدوراني (Surface Area of Revolution)',
      desc: 'دوران عناصر طول القوس ds حول محور الدوران لحساب الغلاف الخارجي للمجسمات ثلاثية الأبعاد',
      math: 'S = 2π ∫ₐᵇ y √(1 + [y\']²) dx',
      emoji: '',
      level: 'متقدم',
    },
    {
      id: 'work-physics-applications',
      title: 'الشغل الفيزيائي وتطبيقاته (Work Done)',
      desc: 'حساب الشغل المبذول في النوابض المتغيرة وضخ السوائل من الخزانات ورفع الأثقال والكيبلات',
      math: 'W = ∫ₐᵇ F(x) dx',
      emoji: '',
      level: 'متوسط',
    },
    {
      id: 'average-value-function',
      title: 'القيمة المتوسطة للدالة والقيمة الفعالة (Average Value)',
      desc: 'مبرهنة القيمة المتوسطة للتكامل وحساب القيمة الفعالة للجهد والتيار المتناوب (RMS)',
      math: 'f_avg = 1/(b - a) ∫ₐᵇ f(x) dx',
      emoji: '',
      level: 'متوسط',
    },
    {
      id: 'center-of-mass-centroid',
      title: 'مركز الكتلة والمركز الهندسي (Centroid)',
      desc: 'حساب عزوم القصور الذاتي M_y و M_x لتحديد نقطة التوازن الفيزيائية للمناطق المستوية',
      math: 'x̄ = M_y / M , ȳ = M_x / M',
      emoji: '',
      level: 'متقدم',
    },
    {
      id: 'economic-applications-surplus',
      title: 'التطبيقات الاقتصادية للتكامل (فائض المستهلك وفائض المنتج)',
      desc: 'نمذجة توازن السوق والمنافع الاقتصادية بين دوال الطلب والعرض عند سعر التوازن',
      math: 'CS = ∫₀^(q₀) [P(q) - P₀] dq',
      emoji: '',
      level: 'متوسط',
    },
    {
      id: 'accumulation-real-world-physics',
      title: 'مسائل التراكم الحياتية والهندسة الفيزيائية',
      desc: 'استنتاج الكمية المتراكمة الكلية من معدل التغير اللحظي لتدفق السوائل والشحنات الكهربائية',
      math: 'Q = ∫ₐᵇ r(t) dt',
      emoji: '',
      level: 'متوسط',
    },
  ];

  return (
    <article
      className={`rounded-3xl border ${themeClasses.border} ${themeClasses.cardBg} p-6 sm:p-10 shadow-sm text-right space-y-8 ${className}`}
    >
      {/* Header */}
      <div className="border-b border-black/5 dark:border-white/5 pb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 font-bold text-xs mb-3 border border-amber-500/20">
          <Sparkles className="w-4 h-4" />
          الدليل الأكاديمي الشامل لمنهاج تطبيقات التكامل (Applications of Integration)
        </div>
        <h2 className={`text-2xl sm:text-3xl font-extrabold ${themeClasses.textPrimary} tracking-tight`}>
          تحويل التكامل من مجرد معادلات رمزية إلى هندسة وفيزياء واقتصاد واقعي
        </h2>
        <p className={`text-sm sm:text-base ${themeClasses.textSecondary} mt-2 leading-relaxed max-w-4xl`}>
          يمثل حساب التكامل حجر الزاوية في العلوم التطبيقية؛ حيث ينقلنا من عالم المجموع المتقطع (Discrete Summations) إلى عالم التراكم المستمر (Continuous Accumulation). يتناول هذا القسم 12 تطبيقاً محورياً تغطي حساب المساحات المستوية، حجوم الأجسام الدورانية بثلاث طرق هندسية متقدمة، أطوال الأقواس ومساحات السطوح، وصولاً إلى تطبيقات الشغل الفيزيائي ومراكز الكتلة والتوازن وفائض السوق الاقتصادي.
        </p>
      </div>

      {/* Grid of the 12 Quizzes */}
      <section>
        <div className="flex items-center justify-between mb-5">
          <h3 className={`text-lg sm:text-xl font-bold ${themeClasses.textPrimary} flex items-center gap-2`}>
            <Layers className="w-5 h-5 text-amber-500" />
            فهرس الاختبارات الـ 12 المتاحة في المنهاج التفاعلي
          </h3>
          <span className={`text-xs ${themeClasses.textSecondary}`}>
            10 أسئلة دقيقة لكل اختبار مع شروحات وتوضيحات تفصيلية
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {quizzes.map((quiz, idx) => {
            const url = `/domain/calculus/applications-of-integration/${quiz.id}`;
            return (
              <a
                key={quiz.id}
                href={`#${url}`}
                onClick={(e) => handleTestClick(url, quiz.id, e)}
                className={`group p-4 rounded-2xl border ${themeClasses.border} hover:border-amber-500/50 hover:bg-amber-500/5 transition-all flex flex-col justify-between text-right`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl">{quiz.emoji}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-xs px-2 py-0.5 rounded-full font-medium bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                        {quiz.level}
                      </span>
                      <span className="text-xs text-black/40 dark:text-white/40 font-mono">
                        #{idx + 1}
                      </span>
                    </div>
                  </div>
                  <h4 className={`font-bold text-sm mb-1.5 ${themeClasses.textPrimary} group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors`}>
                    {quiz.title}
                  </h4>
                  <p className={`text-xs ${themeClasses.textSecondary} leading-relaxed mb-3 line-clamp-2`}>
                    {quiz.desc}
                  </p>
                </div>

                <div className="pt-2 border-t border-black/5 dark:border-white/5 flex items-center justify-between text-xs">
                  <span className="font-mono text-amber-600 dark:text-amber-400 font-semibold dir-ltr">
                    {quiz.math}
                  </span>
                  <span className="inline-flex items-center gap-1 text-amber-600 dark:text-amber-400 font-medium group-hover:translate-x-[-3px] transition-transform">
                    ابدأ الاختبار
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </section>

      {/* Deep Pedagogical Content */}
      <section className="space-y-6 pt-4 border-t border-black/5 dark:border-white/5">
        <h3 className={`text-xl font-bold ${themeClasses.textPrimary} flex items-center gap-2`}>
          <Compass className="w-5 h-5 text-amber-500" />
          المنهجية الهندسية لاختيار طريقة حساب الحجوم الدورانية
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className={`p-4 rounded-2xl border ${themeClasses.border} bg-black/[0.01] dark:bg-white/[0.01]`}>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl"></span>
              <h4 className={`font-bold text-sm ${themeClasses.textPrimary}`}>طريقة الأقراص (Disk Method)</h4>
            </div>
            <p className={`text-xs ${themeClasses.textSecondary} leading-relaxed`}>
              تُستخدم عندما تدور منطقة ملامسة لمحور الدوران دون تجويف داخلي. تكون الشريحة التفاضلية عمودية على محور الدوران، ويُحسب الحجم بتراكم أسطوانات رفيعة جداً مساحتها π [f(x)]² dx.
            </p>
          </div>

          <div className={`p-4 rounded-2xl border ${themeClasses.border} bg-black/[0.01] dark:bg-white/[0.01]`}>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl"></span>
              <h4 className={`font-bold text-sm ${themeClasses.textPrimary}`}>طريقة الحلقات (Washer Method)</h4>
            </div>
            <p className={`text-xs ${themeClasses.textSecondary} leading-relaxed`}>
              تُطبق عند وجود فراغ بين المنطقة ومحور الدوران. الشريحة أيضاً عمودية على محور الدوران، ويُحسب الحجم بطرح مساحة القرص الداخلي من القرص الخارجي: π [R(x)² - r(x)²] dx.
            </p>
          </div>

          <div className={`p-4 rounded-2xl border ${themeClasses.border} bg-black/[0.01] dark:bg-white/[0.01]`}>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl"></span>
              <h4 className={`font-bold text-sm ${themeClasses.textPrimary}`}>القشور الأسطوانية (Cylindrical Shells)</h4>
            </div>
            <p className={`text-xs ${themeClasses.textSecondary} leading-relaxed`}>
              الخيار الأمثل عندما تكون الشريحة موازية لمحور الدوران، أو عندما يصعب حل المعادلة بدلالة المتغير الآخر. يعتمد الحجم على فرد القشرة الأسطوانية بمساحة 2π × نصف القطر × الارتفاع × السمك.
            </p>
          </div>
        </div>

        {/* Real-world applications block */}
        <div className={`p-5 rounded-2xl border ${themeClasses.border} bg-amber-500/5`}>
          <h4 className="font-bold text-sm text-amber-700 dark:text-amber-300 mb-2 flex items-center gap-2">
            <Cpu className="w-4 h-4" />
            التطبيقات في الهندسة والفيزياء الحديثة
          </h4>
          <p className={`text-xs ${themeClasses.textSecondary} leading-relaxed`}>
            لا تنحصر تطبيقات التكامل في الهندسة النظرية، بل تتجاوزها لتشمل تصميم هياكل الطائرات وخزانات الوقود الفضائية بواسطة حجوم الدوران ومساحات السطح، وتحليل إجهاد النوابض وضخ السوائل في هندسة الموائع، وحساب مراكز ثقل السفن لضمان استقرارها الملاحي، إلى جانب نمذجة فائض المستهلك والمنتج التي ترتكز عليها السياسات المالية وتوزيع الدعم الاقتصادي عالمياً.
          </p>
        </div>
      </section>

      {/* Footer */}
      <div className="pt-4 border-t border-black/5 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
        <span className={themeClasses.textSecondary}>
          تم إعداد الأسئلة والشروحات والمقالات وفق أحدث المعايير الأكاديمية لحساب التكامل المتقدم.
        </span>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-amber-600 dark:text-amber-400 hover:underline font-medium"
        >
          العودة إلى أعلى الصفحة ↑
        </button>
      </div>
    </article>
  );
};
