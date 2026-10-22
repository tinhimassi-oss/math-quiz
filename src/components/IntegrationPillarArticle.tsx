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

interface IntegrationPillarArticleProps {
  onOpenTest?: (testId: string) => void;
  className?: string;
}

export const IntegrationPillarArticle: React.FC<IntegrationPillarArticleProps> = ({
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
      id: 'indefinite-integrals-basic-rules',
      title: 'مفهوم التكامل غير المحدد وقواعد التكامل الأساسية',
      desc: 'المشتقة العكسية، قاعدة القوة للمتغيرات، ثابت التكامل C، والخواص الخطية',
      math: '∫ xⁿ dx = [xⁿ⁺¹ / (n + 1)] + C',
      emoji: '',
      level: 'متوسط',
    },
    {
      id: 'exponential-logarithmic-integration',
      title: 'تكامل الدوال الأسية واللوغاريتمية',
      desc: 'قواعد تكامل e^(kx) والأساس العام a^x وتفاضلات صورة اللوغاريتم الطبيعي ln|f(x)|',
      math: '∫ e^(kx) dx = (1/k) e^(kx) + C',
      emoji: '',
      level: 'متوسط',
    },
    {
      id: 'trigonometric-integration',
      title: 'تكامل الدوال المثلثية الأساسية',
      desc: 'المشتقات العكسية للنسب الدائرية الست وتوظيف متطابقات خفض القوة لـ sin² و cos²',
      math: '∫ sin(ax) dx = -(1/a) cos(ax) + C',
      emoji: '',
      level: 'متوسط',
    },
    {
      id: 'integration-by-substitution',
      title: 'التكامل بالتعويض (Integration by Substitution)',
      desc: 'معكوس قاعدة السلسلة واستبدال المتغير u والتفاضلات du لحل الدوال المركبة',
      math: '∫ f(g(x)) g\'(x) dx = ∫ f(u) du',
      emoji: '',
      level: 'متقدم',
    },
    {
      id: 'integration-by-parts',
      title: 'التكامل بالتجزئة (Integration by Parts)',
      desc: 'معكوس مشتقة ضرب دالتين وقاعدة أسبقية الاختيار LIATE والتكامل الجدولي والدوري',
      math: '∫ u dv = u v - ∫ v du',
      emoji: '',
      level: 'متقدم',
    },
    {
      id: 'partial-fractions-integration',
      title: 'التكامل باستخدام الكسور الجزئية (Partial Fractions)',
      desc: 'تفكيك الدوال النسبية P(x)/Q(x) إلى عوامل خطية ومكررة وتربيعية عبر القسمة والهيفسايد',
      math: '1/(x²-1) = A/(x-1) + B/(x+1)',
      emoji: '',
      level: 'متقدم',
    },
    {
      id: 'fundamental-theorem-definite-integral',
      title: 'النظرية الأساسية في التفاضل والتكامل والتكامل المحدد',
      desc: 'الجسر الرابط بين التفاضل والتكامل ودوال التراكم ومبرهنة التقييم F(b) - F(a)',
      math: 'd/dx [∫ₐˣ f(t) dt] = f(x)',
      emoji: '',
      level: 'متقدم',
    },
    {
      id: 'properties-of-definite-integrals',
      title: 'خواص التكامل المحدد والتناظر والمقارنة',
      desc: 'تجزئة الفترات، خاصية انعدام الدوال الفردية وتضاعف الزوجية على [-a, a]، والقيمة المتوسطة',
      math: 'f_avg = [1 / (b - a)] ∫ₐᵇ f(x) dx',
      emoji: '',
      level: 'متقدم',
    },
    {
      id: 'area-under-curve-axis',
      title: 'حساب المساحات المحصورة بين منحنى ومحور السينات',
      desc: 'الهندسة التكاملية للمساحات الموجبة دائماً وتحديد أصفار الدالة وتجزئة الفترات السالبة',
      math: 'A = ∫ₐᵇ |f(x)| dx',
      emoji: '',
      level: 'متوسط',
    },
    {
      id: 'area-between-curves',
      title: 'حساب المساحة المحصورة بين منحنيين',
      desc: 'طرح المنحنى السفلي من العلوي وتحديد نقاط التقاطع والمكاملة الأفقية بالنسبة لـ y',
      math: 'A = ∫ [Top - Bottom] dx',
      emoji: '',
      level: 'متقدم',
    },
    {
      id: 'improper-integrals',
      title: 'التكاملات الاعتلالية والتقارب (Improper Integrals)',
      desc: 'حساب نهايات التكاملات ذات الحدود اللانهائية ونقاط الانفصال الداخلي واختبار p-integral',
      math: 'lim_{t → ∞} ∫₁ᵗ (1/xᵖ) dx',
      emoji: '',
      level: 'متقدم',
    },
    {
      id: 'applied-integration-word-problems',
      title: 'المسائل الكلامية والتطبيقية على التكامل',
      desc: 'النمذجة الرياضية لحساب الشغل الميكانيكي، الإزاحة والمسافة، حجوم المجسمات، والتكاليف',
      math: 'W = ∫ F dx , V = π ∫ [f(x)]² dx',
      emoji: '',
      level: 'متقدم',
    },
  ];

  return (
    <article
      className={`rounded-2xl border ${themeClasses.border} ${themeClasses.cardBg} p-6 sm:p-10 shadow-sm transition-all text-right ${className}`}
    >
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-black/5 dark:border-white/5">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-violet-500/10 text-violet-600 dark:text-violet-400 border border-violet-500/20 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            الدليل الشامل والمرجع الأكاديمي المعتمد
          </div>
          <h2 className={`text-2xl sm:text-3xl font-extrabold ${themeClasses.textPrimary} tracking-tight`}>
            حساب التكامل: الدليل الأكاديمي والتحليل الرياضي والتطبيقات
          </h2>
          <p className={`text-sm sm:text-base ${themeClasses.textSecondary} mt-2 max-w-3xl leading-relaxed`}>
            مرجع علمي شامل يغطي أسس المشتقات العكسية، تقنيات التكامل المتقدمة (التعويض، التجزئة، الكسور الجزئية)، النظرية الأساسية للتفاضل والتكامل، حساب المساحات والحجوم، والتكاملات المعتلة.
          </p>
        </div>
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-600 to-indigo-600 text-white flex items-center justify-center shadow-lg shrink-0 text-3xl font-serif">
          ∬
        </div>
      </div>

      {/* Main Content Sections */}
      <div className="mt-8 space-y-10 text-sm sm:text-base leading-relaxed">
        {/* Intro */}
        <section>
          <div className="flex items-center gap-2 font-bold text-lg text-violet-600 dark:text-violet-400 mb-3">
            <Compass className="w-5 h-5" />
            <h3>مدخل: لماذا يُعد التكامل جوهر العلوم والرياضيات الحديثة؟</h3>
          </div>
          <p className={`${themeClasses.textSecondary} leading-relaxed`}>
            إذا كان حساب التفاضل هو علم "تفكيك" الأشياء إلى أجزاء متناهية الصغر لفهم معدلات تغيرها اللحظية، فإن **حساب التكامل** هو علم "تجميع" و"مراكمة" تلك الأجزاء المتناهية الصغر لإعادة بناء الكل. من خلال التكامل، نستطيع حساب المساحات ذات الحدود المنحنية المعقدة، وحجوم الأجسام الدورانية الفضائية، والشغل الذي تبذله القوى المتغيرة في الفيزياء، وتراكم الاحتمالات والتدفقات النقدية. يمثل هذا الفرع التجسيد الرياضي الأسمى لمفهوم اللانهاية والاتصال.
          </p>
        </section>

        {/* 12 Interactive Quizzes Map */}
        <section>
          <div className="flex items-center gap-2 font-bold text-lg text-violet-600 dark:text-violet-400 mb-4">
            <Layers className="w-5 h-5" />
            <h3>خريطة الاختبارات التفاعلية الـ 12 في قسم التكامل</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {quizzes.map((quiz, index) => {
              const quizUrl = `/domain/calculus/integration/${quiz.id}`;
              return (
                <a
                  key={quiz.id}
                  href={`#${quizUrl}`}
                  onClick={(e) => handleTestClick(quizUrl, quiz.id, e)}
                  className={`group p-4 rounded-xl border ${themeClasses.border} hover:border-violet-500/50 hover:bg-violet-500/5 transition-all flex flex-col justify-between`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-2xl">{quiz.emoji}</span>
                      <span className="text-xs px-2 py-0.5 rounded-full font-medium bg-violet-500/10 text-violet-600 dark:text-violet-400 border border-violet-500/20">
                        اختبار {index + 1}
                      </span>
                    </div>
                    <h4 className={`font-bold text-sm sm:text-base mb-1 ${themeClasses.textPrimary} group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors`}>
                      {quiz.title}
                    </h4>
                    <p className={`text-xs ${themeClasses.textSecondary} mb-3 leading-relaxed line-clamp-2`}>
                      {quiz.desc}
                    </p>
                  </div>
                  <div className="pt-2 border-t border-black/5 dark:border-white/5 flex items-center justify-between text-xs">
                    <span className="font-mono text-violet-700 dark:text-violet-300 font-semibold dir-ltr">
                      {quiz.math}
                    </span>
                    <span className="inline-flex items-center gap-1 text-violet-600 dark:text-violet-400 font-medium group-hover:translate-x-[-3px] transition-transform">
                      ابدأ الآن
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </a>
              );
            })}
          </div>
        </section>

        {/* Deep Theoretical Analysis */}
        <section className="space-y-6">
          <div className="flex items-center gap-2 font-bold text-lg text-violet-600 dark:text-violet-400">
            <BookOpen className="w-5 h-5" />
            <h3>الأركان النظرية والمنهجية الكبرى لعلم التكامل</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className={`p-5 rounded-xl border ${themeClasses.border} bg-black/[0.02] dark:bg-white/[0.02]`}>
              <h4 className={`font-bold text-base mb-2 ${themeClasses.textPrimary} flex items-center gap-2`}>
                <ShieldCheck className="w-4 h-4 text-violet-500" />
                1. المشتقات العكسية والنظرية الأساسية (FTC)
              </h4>
              <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
                تعد النظرية الأساسية للتفاضل والتكامل بمثابة المعجزة الرياضية التي حلت معضلة حساب المساحات دون الحاجة لحساب نهايات مجاميع ريمان المعقدة؛ إذ تكفي معرفة دالة مشتقتها هي الدالة المكاملة لتقييم التكامل المحدد بطرح قيمتي الحدين F(b) - F(a).
              </p>
            </div>

            <div className={`p-5 rounded-xl border ${themeClasses.border} bg-black/[0.02] dark:bg-white/[0.02]`}>
              <h4 className={`font-bold text-base mb-2 ${themeClasses.textPrimary} flex items-center gap-2`}>
                <Cpu className="w-4 h-4 text-violet-500" />
                2. ترسانة تقنيات التكامل المتقدمة
              </h4>
              <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
                عندما لا تسعفنا القواعد المباشرة، نلجأ إلى تقنيات التحويل: **التعويض** لمعاكسة قاعدة السلسلة، و**التجزئة** (مع قاعدة LIATE وطريقة الجدول) لمعاكسة مشتقة الضرب، و**الكسور الجزئية** لتفكيك الدوال النسبية المعقدة إلى كسور لوغاريتمية بسيطة.
              </p>
            </div>

            <div className={`p-5 rounded-xl border ${themeClasses.border} bg-black/[0.02] dark:bg-white/[0.02]`}>
              <h4 className={`font-bold text-base mb-2 ${themeClasses.textPrimary} flex items-center gap-2`}>
                <PieChart className="w-4 h-4 text-violet-500" />
                3. الهندسة التحليلية وحساب المساحات والحجوم
              </h4>
              <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
                المساحة كمية موجبة دائماً تتطلب تحديد نقاط التقاطع وتجزئة الفترات السالبة، والمساحة بين منحنيين تحسب بطرح المنحنى الأدنى من الأعلى أو بالمكاملة الأفقية بالنسبة لمحور الصادات dy، بالإضافة لحساب حجوم الأجسام الدورانية بطريقة الأقراص الدائرية π ∫ [f(x)]² dx.
              </p>
            </div>

            <div className={`p-5 rounded-xl border ${themeClasses.border} bg-black/[0.02] dark:bg-white/[0.02]`}>
              <h4 className={`font-bold text-base mb-2 ${themeClasses.textPrimary} flex items-center gap-2`}>
                <InfinityIcon className="w-4 h-4 text-violet-500" />
                4. التكاملات المعتلة ونمذجة الواقع
              </h4>
              <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
                التعامل الصارم مع حدود الما لا نهاية ونقاط الانفصال الرأسي الداخلي عبر النهايات واختبارات p-integral واختبار المقارنة، وتطبيق مبرهنة التغير الصافي في حساب الشغل وقوانين نيوتن وحركة الأجسام المتغيرة السرعة.
              </p>
            </div>
          </div>
        </section>

        {/* Study Roadmap */}
        <section className={`p-6 rounded-xl border ${themeClasses.border} bg-violet-500/5`}>
          <h4 className="font-bold text-base text-violet-700 dark:text-violet-300 mb-2 flex items-center gap-2">
            <Sparkles className="w-4 h-4" />
            خارطة الطريق التعليمية الموصى بها لإتقان حساب التكامل
          </h4>
          <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
            ابدأ باختبارات **القواعد الأساسية والدوال الأسية والمثلثية** لتأسيس مهاراتك الجبرية السريعة. ثم انتقل فوراً إلى الثلاثي المنهجي الأقوى: **التعويض، التجزئة، والكسور الجزئية**. بعد ذلك، عمّق فهمك النظري عبر **النظرية الأساسية وخواص التكامل المحدد والتناظر**، وتوّج رحلتك بحل التحديات الهندسية والفيزيائية في **حساب المساحات، التكاملات المعتلة، والمسائل التطبيقية**. كل اختبار يرافقه شرح تفصيلي ومقالة علمية متخصصة تضمن تفوقك الأكاديمي التام!
          </p>
        </section>
      </div>
    </article>
  );
};
