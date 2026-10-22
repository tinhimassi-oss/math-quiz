import React from 'react';
import {
  BookOpen,
  Sparkles,
  TrendingUp,
  Lightbulb,
  Layers,
  Compass,
  ArrowRight,
  ShieldCheck,
  Cpu,
} from 'lucide-react';
import { useEyeTheme } from '../context/ThemeContext';
import { navigateTo } from '../navigation/router';

interface ApplicationsOfDerivativesPillarArticleProps {
  onOpenTest?: (testId: string) => void;
  className?: string;
}

export const ApplicationsOfDerivativesPillarArticle: React.FC<
  ApplicationsOfDerivativesPillarArticleProps
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

  const quizzes = [
    {
      id: 'kinematics-motion',
      title: 'السرعة والتسارع والحركة الجسيمية (Kinematics & Motion)',
      desc: 'العلاقة التفاضلية بين دالة الموقع والسرعة اللحظية v(t) والتسارع a(t) والسكون اللحظي',
      math: "v(t) = s'(t) , a(t) = v'(t) = s''(t)",
      emoji: '',
      level: 'متقدم',
    },
    {
      id: 'increasing-decreasing-intervals',
      title: 'فترات التزايد والتناقص واختبار المشتقة الأولى',
      desc: 'تحليل إشارة المشتقة الأولى f\'(x) وتحديد سلوك المنحنيات صعوداً وهبوطاً',
      math: "f'(x) > 0 ↗ (متزايدة) , f'(x) < 0 ↘ (متناقصة)",
      emoji: '',
      level: 'متوسط',
    },
    {
      id: 'local-extrema',
      title: 'القيم القصوى المحلية والتطبيقات عليها (Local Extrema)',
      desc: 'تحديد القيم العظمى والصغرى المحلية باستخدام اختباري المشتقة الأولى والثانية',
      math: "f'(c) = 0 , f''(c) < 0 (عظمى) , f''(c) > 0 (صغرى)",
      emoji: '',
      level: 'متقدم',
    },
    {
      id: 'absolute-extrema',
      title: 'القيم القصوى المطلقة على فترة مغلقة (Absolute Extrema)',
      desc: 'نظرية القيمة القصوى (EVT) وطريقة مقارنة قيم النقاط الحرجة مع حدود الفترة [a, b]',
      math: '\\max / \\min f(x) \\text{ on } [a, b]',
      emoji: '',
      level: 'متقدم',
    },
    {
      id: 'concavity-inflection-points',
      title: 'التقعر ونقاط الانقلاب واختبار المشتقة الثانية',
      desc: 'انحناء المنحنيات للأعلى وللأسفل واكتشاف نقاط التحول الجذري في التقعر',
      math: "f''(x) > 0 \\cup (مقعر لأعلى) , f''(x) < 0 \\cap (مقعر لأسفل)",
      emoji: '',
      level: 'متقدم',
    },
    {
      id: 'curve-sketching',
      title: 'رسم المنحنيات وتحليل سلوك الدالة (Curve Sketching)',
      desc: 'الدمج الكامل بين خطوط التقارب والنقاط الحرجة وفترات التزايد والتقعر لرسم المنحنيات',
      math: '\\text{Asymptotes} + f\'(x) + f\'\'(x) \\implies \\text{Graph}',
      emoji: '',
      level: 'متقدم',
    },
    {
      id: 'optimization-problems',
      title: 'مسائل التحسين والتطبيقات الاقتصادية والهندسية',
      desc: 'صياغة ونمذجة المسائل الواقعية لإيجاد الحجم الأكبر والمساحة القصوى والتكلفة الأدنى',
      math: 'V(x) = x(L - 2x)^2 \\implies V\'(x) = 0',
      emoji: '',
      level: 'متقدم',
    },
    {
      id: 'related-rates',
      title: 'المعدلات المرتبطة بالزمن (Related Rates of Change)',
      desc: 'حساب معدلات تغير الكميات المتفاعلة هندسياً وفيزيائياً بالنسبة للزمن t',
      math: '\\frac{d}{dt}[V] = \\frac{\\pi}{4} h^2 \\frac{dh}{dt}',
      emoji: '',
      level: 'متقدم',
    },
    {
      id: 'linear-approximation-differentials',
      title: 'التقريب الخطي والتفاضلات (Linear Approximation)',
      desc: 'استخدام مستقيم المماس L(x) والتفاضل dy لتقدير القيم المعقدة وحساب نسبة الخطأ',
      math: "L(x) = f(a) + f'(a)(x - a) , dy = f'(x) dx",
      emoji: '',
      level: 'متوسط',
    },
    {
      id: 'rolles-mean-value-theorem',
      title: 'نظرية رول ونظرية القيمة المتوسطة (Rolle\'s & MVT)',
      desc: 'الشروط الجوهرية والوجود الحتمي للنقاط التي يتساوى عندها الميل اللحظي مع الميل المتوسط',
      math: "f'(c) = \\frac{f(b) - f(a)}{b - a}",
      emoji: '',
      level: 'متقدم',
    },
    {
      id: 'lhopitals-rule',
      title: 'قاعدة لوبيتال لحساب النهايات غير المعينة (L\'Hôpital\'s Rule)',
      desc: 'حل الصيغ غير المعينة 0/0 و ∞/∞ والتحويلات اللوغاريتمية والجبرية المتقدمة',
      math: "\\lim_{x \\to a} \\frac{f(x)}{g(x)} = \\lim_{x \\to a} \\frac{f'(x)}{g'(x)}",
      emoji: '',
      level: 'متقدم',
    },
    {
      id: 'marginal-analysis-business',
      title: 'التطبيقات الاقتصادية والنمذجة الحياتية (Marginal Analysis)',
      desc: 'حساب التكلفة الحدية والإيراد الحدي والربح الحدي ونماذج تعظيم الإنتاج والأرباح',
      math: "MR = MC \\implies P'(x) = 0",
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            الدليل الشامل والمرجع الأكاديمي المعتمد
          </div>
          <h2 className={`text-2xl sm:text-3xl font-extrabold ${themeClasses.textPrimary} tracking-tight`}>
            تطبيقات المشتقات: الدليل الرياضي والنمذجة الواقعية
          </h2>
          <p className={`text-sm sm:text-base ${themeClasses.textSecondary} mt-2 max-w-3xl leading-relaxed`}>
            مرجع علمي شامل يغطي كبرى التطبيقات الهندسية والفيزيائية والاقتصادية لحساب التفاضل، من دراسة حركة الأجسام والتحسين ورسم المنحنيات إلى المعدلات الزمنية وقاعدة لوبيتال.
          </p>
        </div>
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white flex items-center justify-center shadow-lg shrink-0 text-3xl">
          
        </div>
      </div>

      {/* Main Content Sections */}
      <div className="mt-8 space-y-10 text-sm sm:text-base leading-relaxed">
        {/* Intro */}
        <section>
          <div className="flex items-center gap-2 font-bold text-lg text-emerald-600 dark:text-emerald-400 mb-3">
            <Compass className="w-5 h-5" />
            <h3>مدخل: لماذا تُعد تطبيقات المشتقات قلب الرياضيات التطبيقية؟</h3>
          </div>
          <p className={`${themeClasses.textSecondary} leading-relaxed`}>
            إذا كانت قواعد الاشتقاق تمثل "الأدوات الميكانيكية" التي تحسب المشتقات جبرياً، فإن **تطبيقات المشتقات** هي "الغرض والهدف الأسمى" الذي من أجله وُجد علم التفاضل. في العالم الحقيقي، لا توجد كميات ثابتة منعزلة؛ فالسرعات تتغير، والأرباح تتقلب، والمساحات والأحجام تخضع لقيود مادية واقتصادية صارمة. ومن خلال المشتقات، نحول الأسئلة المعقدة مثل: *ما هو أفضل شكل هندسي للصندوق؟ متى تنقلب السيارة؟ ما هي السرعة اللحظية في الثانية الثالثة؟* إلى معادلات جبرية دقيقة تحل بالاشتقاق والمساواة بالصفر.
          </p>
        </section>

        {/* 12 Interactive Quizzes Map */}
        <section>
          <div className="flex items-center gap-2 font-bold text-lg text-emerald-600 dark:text-emerald-400 mb-4">
            <Layers className="w-5 h-5" />
            <h3>خريطة الاختبارات التفاعلية الـ 12 في هذا القسم</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {quizzes.map((quiz, index) => {
              const quizUrl = `/domain/calculus/applications-of-derivatives/${quiz.id}`;
              return (
                <a
                  key={quiz.id}
                  href={`#${quizUrl}`}
                  onClick={(e) => handleTestClick(quizUrl, quiz.id, e)}
                  className={`group p-4 rounded-xl border ${themeClasses.border} hover:border-emerald-500/50 hover:bg-emerald-500/5 transition-all flex flex-col justify-between`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-2xl">{quiz.emoji}</span>
                      <span className="text-xs px-2 py-0.5 rounded-full font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                        اختبار {index + 1}
                      </span>
                    </div>
                    <h4 className={`font-bold text-sm sm:text-base mb-1 ${themeClasses.textPrimary} group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors`}>
                      {quiz.title}
                    </h4>
                    <p className={`text-xs ${themeClasses.textSecondary} mb-3 leading-relaxed line-clamp-2`}>
                      {quiz.desc}
                    </p>
                  </div>
                  <div className="pt-2 border-t border-black/5 dark:border-white/5 flex items-center justify-between text-xs">
                    <span className="font-mono text-emerald-700 dark:text-emerald-300 font-semibold dir-ltr">
                      {quiz.math}
                    </span>
                    <span className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-medium group-hover:translate-x-[-3px] transition-transform">
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
          <div className="flex items-center gap-2 font-bold text-lg text-emerald-600 dark:text-emerald-400">
            <BookOpen className="w-5 h-5" />
            <h3>الأعمدة النظرية والمنهجية لتطبيقات التفاضل</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className={`p-5 rounded-xl border ${themeClasses.border} bg-black/[0.02] dark:bg-white/[0.02]`}>
              <h4 className={`font-bold text-base mb-2 ${themeClasses.textPrimary} flex items-center gap-2`}>
                <TrendingUp className="w-4 h-4 text-emerald-500" />
                1. تحليل سلوك المنحنيات (Curve Behavior)
              </h4>
              <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
                تمنحنا المشتقة الأولى معلومات التزايد والتناقص والنقاط الحرجة، بينما تكشف المشتقة الثانية عن تقوس المنحنى لأعلى أو لأسفل ونقاط الانقلاب. وبدمجهما مع خطوط التقارب الرأسية والأفقية، نتحصل على رسم دقيق ومتكامل للدالة دون الحاجة لبرمجيات حاسوبية.
              </p>
            </div>

            <div className={`p-5 rounded-xl border ${themeClasses.border} bg-black/[0.02] dark:bg-white/[0.02]`}>
              <h4 className={`font-bold text-base mb-2 ${themeClasses.textPrimary} flex items-center gap-2`}>
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                2. مبرهنات الوجود والحساب الصارم (MVT & EVT)
              </h4>
              <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
                تضمن نظرية القيمة القصوى (EVT) وجود القيم العظمى والمطلقة على الفترات المغلقة، وتضمن مبرهنة القيمة المتوسطة (MVT) ونظرية رول وجود لحظات يتساوى فيها التغير اللحظي مع التغير المتوسط، وهي حجر الأساس الرياضي لإثبات وحدانية الحلول وسلوك الدوال.
              </p>
            </div>

            <div className={`p-5 rounded-xl border ${themeClasses.border} bg-black/[0.02] dark:bg-white/[0.02]`}>
              <h4 className={`font-bold text-base mb-2 ${themeClasses.textPrimary} flex items-center gap-2`}>
                <Lightbulb className="w-4 h-4 text-emerald-500" />
                3. مسائل التحسين والنمذجة الواقعية (Optimization)
              </h4>
              <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
                تحويل القيود الهندسية والفيزيائية والميزانيات المالية إلى دوال بمتغير واحد، والبحث عن النقاط الحرجة التي تجعل المشتقة الأولى تنعدم، مع التأكد باختبار المشتقة الثانية من تعظيم النتائج أو تقليل التكاليف إلى حدها الأدنى.
              </p>
            </div>

            <div className={`p-5 rounded-xl border ${themeClasses.border} bg-black/[0.02] dark:bg-white/[0.02]`}>
              <h4 className={`font-bold text-base mb-2 ${themeClasses.textPrimary} flex items-center gap-2`}>
                <Cpu className="w-4 h-4 text-emerald-500" />
                4. المعدلات المرتبطة وقاعدة لوبيتال
              </h4>
              <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
                تطبيق قاعدة السلسلة بالنسبة للزمن لحساب معدلات تدفق السوائل وتمدد الأشكال الهندسية، واستخدام قاعدة لوبيتال لفض النزاع في النهايات غير المعينة (0/0 و ∞/∞) بدقة متناهية عبر اشتقاق البسط والمقام على حدة.
              </p>
            </div>
          </div>
        </section>

        {/* Study Roadmap */}
        <section className={`p-6 rounded-xl border ${themeClasses.border} bg-emerald-500/5`}>
          <h4 className="font-bold text-base text-emerald-700 dark:text-emerald-300 mb-2 flex items-center gap-2">
            <Sparkles className="w-4 h-4" />
            نصيحة ذهبية للطلاب والباحثين
          </h4>
          <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
            لتحقيق أعلى درجات الاستيعاب، ابدأ باختبارات **السرعة والتسارع** و**فترات التزايد والتناقص** لترسيخ الفهم الهندسي والفيزيائي للمشتقة الأولى، ثم انتقل إلى **التقعر ونقاط الانقلاب** و**رسم المنحنيات**، واختتم رحلتك بحل التحديات الكبرى في **مسائل التحسين** و**المعدلات المرتبطة بالزمن** و**قاعدة لوبيتال**. كل اختبار يحتوي على شرح خطوة بخطوة ومقالة نظرية متكاملة تضمن إتقانك التام!
          </p>
        </section>
      </div>
    </article>
  );
};
