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

interface DerivativesDifferentiationPillarArticleProps {
  onOpenTest?: (testId: string) => void;
  className?: string;
}

export const DerivativesDifferentiationPillarArticle: React.FC<
  DerivativesDifferentiationPillarArticleProps
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
      id: 'definition-of-derivative',
      title: 'التعريف العام للمشتقة باستخدام النهايات',
      desc: 'مفهوم خارج قسمة الفروق وميل المماس عبر النهاية lim (h→0) [f(x+h) - f(x)] / h',
      math: "f'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}",
      emoji: '',
      level: 'متقدم',
    },
    {
      id: 'basic-differentiation-rules',
      title: 'قواعد الاشتقاق الأساسية (قاعدة القوة، الثابت، المجموع والفرق)',
      desc: 'مشتقة الثابت وقاعدة القوة d/dx[xⁿ] = n xⁿ⁻¹ وخطية مؤثر التفاضل',
      math: '\\frac{d}{dx}[a x^n] = a n x^{n-1}',
      emoji: '',
      level: 'أساسي',
    },
    {
      id: 'product-rule',
      title: 'قاعدة ضرب دالتين (Product Rule)',
      desc: 'قاعدة لايبنتز: الأولى في مشتقة الثانية + الثانية في مشتقة الأولى',
      math: "(u \\cdot v)' = u v' + v u'",
      emoji: '',
      level: 'متوسط',
    },
    {
      id: 'quotient-rule',
      title: 'قاعدة قسمة دالتين (Quotient Rule)',
      desc: 'اشتقاق الدوال النسبية والكسور: (المقام × مشتقة البسط - البسط × مشتقة المقام) / المقام²',
      math: "\\left(\\frac{u}{v}\\right)' = \\frac{v u' - u v'}{v^2}",
      emoji: '',
      level: 'متوسط',
    },
    {
      id: 'chain-rule',
      title: 'قاعدة السلسلة والاشتقاق المركب (Chain Rule)',
      desc: 'تفاضل الدوال المركبة والدوال المرفوعة لأس والقوس الخارجي والداخلي',
      math: '\\frac{dy}{dx} = \\frac{dy}{du} \\cdot \\frac{du}{dx}',
      emoji: '',
      level: 'متوسط',
    },
    {
      id: 'trigonometric-differentiation',
      title: 'اشتقاق الدوال المثلثية (Trigonometric Functions Differentiation)',
      desc: 'مشتقات sin, cos, tan, sec, csc, cot وتطبيق قاعدة السلسلة للزوايا',
      math: "\\frac{d}{dx}[\\sin(u)] = u' \\cos(u)",
      emoji: '',
      level: 'متوسط',
    },
    {
      id: 'exponential-logarithmic-differentiation',
      title: 'اشتقاق الدوال الأسية واللوغاريتمية (Exponential & Logarithmic)',
      desc: 'تفاضل eˣ, aˣ, ln(x) والتفاضل اللوغاريتمي للدوال ذات الأس المتغير',
      math: "(e^u)' = u' e^u \\mid (\\ln u)' = \\frac{u'}{u}",
      emoji: '',
      level: 'متقدم',
    },
    {
      id: 'implicit-differentiation',
      title: 'الاشتقاق الضمني (Implicit Differentiation)',
      desc: 'إيجاد dy/dx في المعادلات التي يتعذر فصل y فيها، ومماسات المنحنيات الهندسية',
      math: '2x + 2y \\frac{dy}{dx} = 0',
      emoji: '',
      level: 'متقدم',
    },
    {
      id: 'higher-order-derivatives',
      title: 'المشتقات ذات الرتب العليا (Higher-Order Derivatives)',
      desc: 'المشتقة الثانية والثالثة d²y/dx² لدراسة التسارع والتقعر ونقاط الانقلاب',
      math: "\\frac{d^2 y}{dx^2} = f''(x)",
      emoji: '',
      level: 'متوسط',
    },
    {
      id: 'tangent-normal-lines',
      title: 'معادلة مماس ونظام العمودي للمنحنى (Tangent and Normal Lines)',
      desc: 'ميل المماس m = f\'(x₀) وميل العمودي m_n = -1/m وصياغة معادلة المستقيم',
      math: "y - y_0 = f'(x_0)(x - x_0)",
      emoji: '',
      level: 'متقدم',
    },
    {
      id: 'critical-points-extrema',
      title: 'النقاط الحرجة والتزايد والتناقص والقيم القصوى (Extrema)',
      desc: 'إيجاد النقاط الحرجة واختبار المشتقة الأولى والثانية وتحديد العظمى والصغرى',
      math: "f'(c) = 0 \\mid f''(c) \\gtrless 0",
      emoji: '',
      level: 'متقدم',
    },
    {
      id: 'related-rates-optimization',
      title: 'المعدلات المرتبطة بالزمن والتطبيقات الحياتية (Related Rates & Optimization)',
      desc: 'حساب معدلات التغير اللحظية بالنسبة للزمن t ومسائل تعظيم الأرباح والمساحات',
      math: '\\frac{dV}{dt} = 3s^2 \\frac{ds}{dt}',
      emoji: '',
      level: 'متقدم',
    },
  ];

  return (
    <article
      id="derivatives-pillar-guide"
      className={`p-6 sm:p-10 rounded-2xl border ${themeClasses.border} ${themeClasses.cardBg} space-y-8 shadow-2xs leading-relaxed text-right ${className}`}
    >
      {/* Header */}
      <header className="space-y-3 pb-6 border-b border-black/[0.06] dark:border-white/[0.08]">
        <div className="flex items-center gap-2 text-xs font-bold text-indigo-600 dark:text-indigo-400">
          <BookOpen className="w-4 h-4" />
          <span>المقالة المرجعية الشاملة (Pillar Guide) | أكاديمية كويزات الرياضيات</span>
        </div>

        <h2 className={`text-xl sm:text-3xl font-extrabold tracking-tight ${themeClasses.textPrimary}`}>
          الدليل المرجعي الشامل للمشتقات والتفاضل: من تعريف النهايات والمبادئ الأولى إلى قواعد الاشتقاق والاشتقاق الضمني وتطبيقات التحسين
        </h2>

        <p className={`text-sm sm:text-base ${themeClasses.textSecondary} leading-relaxed`}>
          مرجع أكاديمي وتربوي متكامل يغطي 12 موضوعاً واختباراً مستقلاً في مسار المشتقات والتفاضل (Derivatives and Differentiation) ضمن علم التفاضل والتكامل؛ صُمم هذا المسار لتمكين الطلاب والمهندسين والباحثين من الاستيعاب العميق لمفهوم معدل التغير اللحظي، وحساب المشتقة من تعريف النهايات، وإتقان قواعد القوة والضرب والقسمة والسلسلة، واشتقاق الدوال المثلثية والأسية واللوغاريتمية، والاشتقاق الضمني، والمشتقات العليا، وصياغة معادلات المماس والعمودي، وتحديد القيم القصوى والنقاط الحرجة، وصولاً إلى المعدلات المرتبطة بالزمن ومسائل التحسين الهندسية والاقتصادية.
        </p>
      </header>

      {/* Structured Directory / Index of 12 Quizzes */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className={`text-lg font-bold flex items-center gap-2 ${themeClasses.textPrimary}`}>
            <Layers className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            <span>فهرس الاختبارات التفاعلية الـ 12 في المشتقات والتفاضل</span>
          </h3>
          <span className="text-xs text-gray-500 font-mono">12 اختباراً • 120 مسألة تفاعلية</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {quizzes.map((quiz, idx) => (
            <div
              key={quiz.id}
              className="p-4 rounded-xl border border-black/[0.06] dark:border-white/[0.06] bg-black/[0.01] dark:bg-white/[0.01] hover:border-indigo-500/40 hover:bg-indigo-500/[0.02] transition-all flex flex-col justify-between gap-3 text-right"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xl">{quiz.emoji}</span>
                  <span className="text-[11px] px-2 py-0.5 rounded-md font-mono bg-indigo-500/10 text-indigo-700 dark:text-indigo-300">
                    اختبار #{idx + 1} • {quiz.level}
                  </span>
                </div>

                <h4 className={`text-sm font-bold ${themeClasses.textPrimary}`}>
                  {quiz.title}
                </h4>

                <p className={`text-xs ${themeClasses.textSecondary} leading-relaxed line-clamp-2`}>
                  {quiz.desc}
                </p>
              </div>

              <div className="pt-2 border-t border-black/[0.04] dark:border-white/[0.04] flex items-center justify-between">
                <span className="font-mono text-xs text-indigo-600 dark:text-indigo-400 dir-ltr">
                  {quiz.math}
                </span>

                <a
                  href={`#/domain/calculus/derivatives-differentiation/${quiz.id}`}
                  onClick={(e) =>
                    handleTestClick(
                      `/domain/calculus/derivatives-differentiation/${quiz.id}`,
                      quiz.id,
                      e
                    )
                  }
                  className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-700 dark:text-indigo-300 hover:text-indigo-900 dark:hover:text-white transition-colors cursor-pointer"
                >
                  <span>دخول الاختبار</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Academic Roadmap */}
      <section className="space-y-4 pt-6 border-t border-black/[0.06] dark:border-white/[0.08]">
        <h3 className={`text-lg font-bold flex items-center gap-2 ${themeClasses.textPrimary}`}>
          <Compass className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
          <span>خارطة التعلم والتسلسل البيداغوجي الموصى به</span>
        </h3>

        <div className="space-y-3 text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
          <div className="p-4 rounded-xl border border-indigo-500/20 bg-indigo-500/5 space-y-1.5">
            <strong className="block text-indigo-900 dark:text-indigo-200 font-bold">
              المرحلة الأولى: الأساس المفاهيمي والقواعد الجبرية المباشرة (الاختبارات 1 - 4)
            </strong>
            <p>
              ابدأ بالاستيعاب البصري والتحليلي للمشتقة كعملية نهاية تقترب فيها المسافة الأفقية h من الصفر. بعد ترسيخ مفهوم ميل القاطع وميل المماس، انتقل لحفظ وتطبيق قواعد القوة والمعامل الثابت والجمع والفرق، ثم قاعدتي ضرب وقسمة دالتين مع التدرب على الترتيب الدقيق لحدود البسط.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-indigo-500/20 bg-indigo-500/5 space-y-1.5">
            <strong className="block text-indigo-900 dark:text-indigo-200 font-bold">
              المرحلة الثانية: قاعدة السلسلة وتفاضل الدوال المتسامية والضمنية (الاختبارات 5 - 8)
            </strong>
            <p>
              تعتبر قاعدة السلسلة المحور المركزي للاشتقاق؛ أتقن اشتقاق الأقواس الخارجية والداخلية، ثم طبقها على الدوال المثلثية (مع حفظ إشارات الـ Co السالبة) والدوال الأسية الطبيعية eˣ واللوغاريتم الطبيعي ln(x). اختتم هذه المرحلة بالاشتقاق الضمني للمعادلات الهندسية التي لا يمكن فيها فصل y صراحة.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-indigo-500/20 bg-indigo-500/5 space-y-1.5">
            <strong className="block text-indigo-900 dark:text-indigo-200 font-bold">
              المرحلة الثالثة: الرتب العليا والتطبيقات الهندسية والفيزيائية والتحسين (الاختبارات 9 - 12)
            </strong>
            <p>
              وظف المشتقات لدراسة العالم الواقعي: احسب التسارع والتقعر عبر المشتقة الثانية، وصغ معادلات خطوط المماس والعمودي، واستخدم اختبارات المشتقة الأولى والثانية لتحديد القمم والقيعان (القيم العظمى والصغرى)، وتوج رحلتك بحل مسائل المعدلات المرتبطة بالزمن وتعظيم الأرباح والمساحات.
            </p>
          </div>
        </div>
      </section>

      {/* Practical Applications & Modern Tech */}
      <section className="space-y-4 pt-6 border-t border-black/[0.06] dark:border-white/[0.08]">
        <h3 className={`text-lg font-bold flex items-center gap-2 ${themeClasses.textPrimary}`}>
          <Cpu className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
          <span>المشتقات في التكنولوجيا الحديثة والذكاء الاصطناعي</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs sm:text-sm">
          <div className="p-4 rounded-xl border border-black/[0.05] dark:border-white/[0.05] bg-black/[0.01] dark:bg-white/[0.01] space-y-2">
            <h4 className="font-bold text-indigo-700 dark:text-indigo-300 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-indigo-500" />
              <span>تدريب الشبكات العصبية (Deep Learning)</span>
            </h4>
            <p className={`${themeClasses.textSecondary} leading-relaxed`}>
              خوارزمية الانتشار العكسي (Backpropagation) التي تدرب نماذج الذكاء الاصطناعي مثل ChatGPT والرؤية الحاسوبية تعتمد كلياً على تطبيق قاعدة السلسلة لملايين المتغيرات لحساب انحدار دالة الخسارة وتحديث الأوزان.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-black/[0.05] dark:border-white/[0.05] bg-black/[0.01] dark:bg-white/[0.01] space-y-2">
            <h4 className="font-bold text-indigo-700 dark:text-indigo-300 flex items-center gap-1.5">
              <TrendingUp className="w-4 h-4 text-emerald-500" />
              <span>الهندسة الميكانيكية وديناميكا الموائع</span>
            </h4>
            <p className={`${themeClasses.textSecondary} leading-relaxed`}>
              معادلات نافيير-ستوكس وميكانيكا الطيران وصناعة الصواريخ تتأسس على المشتقات المرتبطة بالزمن والمشتقات الجزئية لحساب قوى الرفع والسحب والتدفق الهوائي حول الأجسام.
            </p>
          </div>
        </div>
      </section>

      {/* Summary Banner */}
      <footer className="p-5 rounded-xl bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-indigo-500/10 border border-indigo-500/20 text-xs sm:text-sm leading-relaxed text-indigo-950 dark:text-indigo-100 flex items-center justify-between gap-4">
        <div>
          <strong className="block font-bold mb-1">جاهز لاختبار مهاراتك في التفاضل؟</strong>
          <span>اختر أحد الاختبارات الـ 12 أعلاه، واستفد من التغذية الراجعة الفورية والشرح التفصيلي خطوة بخطوة لكل مسألة.</span>
        </div>
        <button
          onClick={() =>
            navigateTo(
              '/domain/calculus/derivatives-differentiation/definition-of-derivative'
            )
          }
          className="shrink-0 px-4 py-2 rounded-xl text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 transition-colors cursor-pointer shadow-sm"
        >
          ابدأ بالاختبار الأول
        </button>
      </footer>
    </article>
  );
};
