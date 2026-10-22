import React from 'react';
import { BookOpen, Sparkles, Award, ArrowLeft, CheckCircle2, Sigma, Activity, BarChart3, Layers } from 'lucide-react';
import { useEyeTheme } from '../context/ThemeContext';

interface StatisticalMeasuresPillarArticleProps {
  onOpenTest: (testId: string) => void;
}

export const StatisticalMeasuresPillarArticle: React.FC<StatisticalMeasuresPillarArticleProps> = ({
  onOpenTest,
}) => {
  const { themeClasses } = useEyeTheme();

  return (
    <article
      className={`rounded-2xl border ${themeClasses.border} ${themeClasses.cardBg} p-6 sm:p-10 shadow-sm transition-all text-right space-y-8 leading-relaxed`}
    >
      {/* Header Banner */}
      <div className="border-b border-black/5 dark:border-white/5 pb-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/20 mb-3">
          <BookOpen className="w-4 h-4" />
          المقالة المرجعية الشاملة · بوابة الإحصاء والاحتمالات
        </div>
        <h1 className={`text-2xl sm:text-3xl font-extrabold ${themeClasses.textPrimary}`}>
          الدليل الأكاديمي الشامل للمقاييس الإحصائية: من النزعة المركزية والتشتت إلى المعايرة ونمذجة التوزيعات
        </h1>
        <p className={`text-sm sm:text-base ${themeClasses.textSecondary} mt-3 leading-relaxed`}>
          استكشاف تحليلي دقيق لأسس الإحصاء الوصفي، ومقاييس النزعة المركزية والتشتت المطلق والنسبي،
          ورسم ملخص الأرقام الخمسة، والمعايرة بالدرجات المعيارية Z، وتشخيص شكل التوزيعات الحقيقية في البحوث والعلوم المعاصرة.
        </p>
      </div>

      {/* Section 1: Introduction */}
      <section className="space-y-3">
        <h2 className={`text-lg sm:text-xl font-bold ${themeClasses.textPrimary} flex items-center gap-2`}>
          <span className="text-amber-600 dark:text-amber-400">1.</span>
          فلسفة التلخيص الإحصائي: تحويل فوضى الأرقام إلى بصائر علمية
        </h2>
        <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
          يواجه الباحثون في العصر الرقمي الحديث فيضاً هائلاً من المشاهدات العددية؛ فلا يمكن للعقل البشري استيعاب قائمة تتضمن آلاف الدرجات أو ملايين المعاملات البنكية بمجرد استعراضها مجردة. من هنا انبثقت عبقرية الإحصاء الوصفي (Descriptive Statistics) في تقديم مؤشرات عددية مكثفة قادرة على "ضغط" مجموعات البيانات الضخمة في أرقام معدودة تلخص أبرز خصائصها وتكشف عن نمطها العام وسلوكها الخفي.
        </p>
        <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
          ترتكز بنية التوصيف الإحصائي على أربعة أعمدة متكاملة لا غنى لواحد منها عن الآخر: 1) مقاييس النزعة المركزية لتحديد مركز ثقل وتجمع البيانات، 2) مقاييس التشتت لقياس مدى تقارب أو تباعد المشاهدات عن هذا المركز، 3) مقاييس الموضع النسبي لترتيب المشاهدات وتحديد رتبها المئينية، 4) مقاييس الشكل والالتواء لتشخيص درجة تماثل المنحنى وتدبب قمته.
        </p>
      </section>

      {/* Section 2: Central Tendency Framework */}
      <section className="space-y-4">
        <h2 className={`text-lg sm:text-xl font-bold ${themeClasses.textPrimary} flex items-center gap-2`}>
          <span className="text-amber-600 dark:text-amber-400">2.</span>
          ثالوث النزعة المركزية: المتوسط والوسيط والمنوال
        </h2>
        <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
          تصف النزعة المركزية ميل المشاهدات العددية للتجمع حول قيمة وسطية نموذجية. ويشكل الثلاثي الشهير (المتوسط الحسابي، الوسيط، والمنوال) أدوات القياس المركزية، ولكل منها فلسفته واستخداماته المناسبة:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 my-3">
          <div className={`p-4 rounded-xl border ${themeClasses.border} bg-black/[0.01] dark:bg-white/[0.01]`}>
            <h3 className={`text-sm font-bold ${themeClasses.textPrimary} mb-1 flex items-center gap-1.5`}>
              <CheckCircle2 className="w-4 h-4 text-amber-500" />
              المتوسط الحسابي (Mean)
            </h3>
            <p className={`text-xs ${themeClasses.textSecondary} leading-relaxed mb-2`}>
              نقطة التوازن الميكانيكي ومجموع المشاهدات مقسوماً على عددها: x̄ = ∑x/n. يتميز بالكفاءة الجبرية وخاصية انعدام مجموع الانحرافات ∑(x - x̄) = 0، إلا أنه ينهار أمام القيم الشاذة.
            </p>
            <button
              onClick={() => onOpenTest('mean-central-tendency')}
              className="text-xs font-semibold text-amber-600 dark:text-amber-400 hover:underline inline-flex items-center gap-1"
            >
              <span>اختبار المتوسط الحسابي (10 أسئلة)</span>
              <ArrowLeft className="w-3 h-3" />
            </button>
          </div>

          <div className={`p-4 rounded-xl border ${themeClasses.border} bg-black/[0.01] dark:bg-white/[0.01]`}>
            <h3 className={`text-sm font-bold ${themeClasses.textPrimary} mb-1 flex items-center gap-1.5`}>
              <CheckCircle2 className="w-4 h-4 text-amber-500" />
              الوسيط (Median)
            </h3>
            <p className={`text-xs ${themeClasses.textSecondary} leading-relaxed mb-2`}>
              القيمة التي تقسم البيانات المرتبة إلى نصفين متساويين بنسبة 50%. يتميز بحصانته الكاملة ضد القيم المتطرفة والشاذة، وهو المعيار الرسمي لتقارير الدخل والثروات.
            </p>
            <button
              onClick={() => onOpenTest('median-central-tendency')}
              className="text-xs font-semibold text-amber-600 dark:text-amber-400 hover:underline inline-flex items-center gap-1"
            >
              <span>اختبار الوسيط الإحصائي (10 أسئلة)</span>
              <ArrowLeft className="w-3 h-3" />
            </button>
          </div>

          <div className={`p-4 rounded-xl border ${themeClasses.border} bg-black/[0.01] dark:bg-white/[0.01]`}>
            <h3 className={`text-sm font-bold ${themeClasses.textPrimary} mb-1 flex items-center gap-1.5`}>
              <CheckCircle2 className="w-4 h-4 text-amber-500" />
              المنوال (Mode)
            </h3>
            <p className={`text-xs ${themeClasses.textSecondary} leading-relaxed mb-2`}>
              القيمة أو الفئة الأكثر تكراراً وشيوعاً. وهو المقياس الوحيد الصالح للبيانات النوعية الوصفية الاسمية (مثل مقاسات الملابس الأكثر مبيعاً وفصائل الدم).
            </p>
            <button
              onClick={() => onOpenTest('mode-central-tendency')}
              className="text-xs font-semibold text-amber-600 dark:text-amber-400 hover:underline inline-flex items-center gap-1"
            >
              <span>اختبار المنوال وتطبيقاته (10 أسئلة)</span>
              <ArrowLeft className="w-3 h-3" />
            </button>
          </div>
        </div>
      </section>

      {/* Section 3: Dispersion & Spread */}
      <section className="space-y-4">
        <h2 className={`text-lg sm:text-xl font-bold ${themeClasses.textPrimary} flex items-center gap-2`}>
          <span className="text-amber-600 dark:text-amber-400">3.</span>
          مقاييس التشتت والانتشار: التباين، الانحراف المعياري، والمدى الربيعي
        </h2>
        <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
          إن إعلان أن متوسط درجات فصلين دراسيين هو 75 درجة يخفي وراءه واقعاً قد يكون متبايناً جذرياً؛ فقد تكون درجات الفصل الأول متقاربة جداً بين 73 و 77، في حين تتراوح درجات الفصل الثاني بين 30 و 100. هنا يأتي دور مقاييس التشتت التي تحدد مدى استقرار البيانات وموثوقية متوسطها:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 my-3">
          <div className={`p-4 rounded-xl border ${themeClasses.border} bg-black/[0.01] dark:bg-white/[0.01] space-y-2`}>
            <div className="flex items-center justify-between">
              <h3 className={`text-sm font-bold ${themeClasses.textPrimary}`}>
                التباين والانحراف المعياري (s & s²)
              </h3>
              <span className="text-xs font-mono text-amber-600 dark:text-amber-400">
                s = √[∑(x - x̄)²/(n-1)]
              </span>
            </div>
            <p className={`text-xs ${themeClasses.textSecondary} leading-relaxed`}>
              يقيس التباين متوسط مربعات الانحرافات عن المتوسط، بينما يعيد الانحراف المعياري القياس إلى وحدته الطبيعية عبر الجذر التربيعي. تصحيح بيسل بالقسمة على (n-1) يضمن الحصول على مقدر غير متحيّز لتباين المجتمع.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onOpenTest('variance-standard-deviation')}
                className="text-xs font-semibold text-amber-600 dark:text-amber-400 hover:underline inline-flex items-center gap-1"
              >
                <span>اختبار التباين والانحراف المعياري (10 أسئلة)</span>
                <ArrowLeft className="w-3 h-3" />
              </button>
            </div>
          </div>

          <div className={`p-4 rounded-xl border ${themeClasses.border} bg-black/[0.01] dark:bg-white/[0.01] space-y-2`}>
            <div className="flex items-center justify-between">
              <h3 className={`text-sm font-bold ${themeClasses.textPrimary}`}>
                المدى والمدى الربيعي (Range & IQR)
              </h3>
              <span className="text-xs font-mono text-amber-600 dark:text-amber-400">
                IQR = Q₃ - Q₁
              </span>
            </div>
            <p className={`text-xs ${themeClasses.textSecondary} leading-relaxed`}>
              المدى المطلق يقيس الفرق بين القمتين الطرفيتين، بينما يعزل المدى الربيعي الـ 50% الوسطى من المشاهدات محيداً الأطراف المشوهة، ويشكل الأساس الرياضي لقواعد جون توكي لاكتشاف القيم الشاذة.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onOpenTest('range-and-iqr')}
                className="text-xs font-semibold text-amber-600 dark:text-amber-400 hover:underline inline-flex items-center gap-1"
              >
                <span>اختبار المدى والمدى الربيعي (10 أسئلة)</span>
                <ArrowLeft className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Position, Standardization, and Shape */}
      <section className="space-y-4">
        <h2 className={`text-lg sm:text-xl font-bold ${themeClasses.textPrimary} flex items-center gap-2`}>
          <span className="text-amber-600 dark:text-amber-400">4.</span>
          المعايرة بالدرجات Z، مخططات الصندوق، وتشخيص الالتواء
        </h2>
        <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
          تكتمل المنظومة الإحصائية بالانتقال من التحليل الوصفي البسيط إلى التوحيد القياسي للمقارنات العادلة والتصوير البياني الذكي:
        </p>

        <div className="space-y-3">
          <div className={`p-4 rounded-xl border ${themeClasses.border} bg-black/[0.01] dark:bg-white/[0.01] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3`}>
            <div>
              <h4 className={`text-sm font-bold ${themeClasses.textPrimary}`}>
                الدرجة المعيارية (Z-Score) والمعايرة
              </h4>
              <p className={`text-xs ${themeClasses.textSecondary} mt-1`}>
                تحويل الدرجات الخام إلى وحدات انحراف معياري Z = (x - μ)/σ، بمعدل انعدام المتوسط (0) وثبات التباين (1) لإجراء مقارنات عادلة بين مختلف التخصصات والمقاييس.
              </p>
            </div>
            <button
              onClick={() => onOpenTest('z-score-standardization')}
              className="shrink-0 px-3 py-1.5 rounded-lg text-xs font-bold bg-amber-500/10 text-amber-700 dark:text-amber-300 hover:bg-amber-500/20 transition-colors"
            >
              اختبار Z-Score
            </button>
          </div>

          <div className={`p-4 rounded-xl border ${themeClasses.border} bg-black/[0.01] dark:bg-white/[0.01] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3`}>
            <div>
              <h4 className={`text-sm font-bold ${themeClasses.textPrimary}`}>
                تمثيل الصندوق والطرفين (Box Plot)
              </h4>
              <p className={`text-xs ${themeClasses.textSecondary} mt-1`}>
                التجسيد الرسومي لملخص الأرقام الخمسة (Min, Q₁, Me, Q₃, Max)، وكشف التناظر والالتواء ومواقع القيم الشاذة النجمية بالعين المجردة.
              </p>
            </div>
            <button
              onClick={() => onOpenTest('box-plot-measures')}
              className="shrink-0 px-3 py-1.5 rounded-lg text-xs font-bold bg-amber-500/10 text-amber-700 dark:text-amber-300 hover:bg-amber-500/20 transition-colors"
            >
              اختبار Box Plot
            </button>
          </div>

          <div className={`p-4 rounded-xl border ${themeClasses.border} bg-black/[0.01] dark:bg-white/[0.01] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3`}>
            <div>
              <h4 className={`text-sm font-bold ${themeClasses.textPrimary}`}>
                معامل التواء البيانات ومقاييس الشكل (Skewness)
              </h4>
              <p className={`text-xs ${themeClasses.textSecondary} mt-1`}>
                تشخيص عدم التماثل ومعادلات بيرسون Sk = 3(x̄ - Me)/s؛ حيث المتوسط أكبر من الوسيط في الالتواء الموجب، وأصغر منه في الالتواء السالب.
              </p>
            </div>
            <button
              onClick={() => onOpenTest('skewness-distribution-shape')}
              className="shrink-0 px-3 py-1.5 rounded-lg text-xs font-bold bg-amber-500/10 text-amber-700 dark:text-amber-300 hover:bg-amber-500/20 transition-colors"
            >
              اختبار معامل الالتواء
            </button>
          </div>
        </div>
      </section>

      {/* Section 5: All 12 Quizzes Grid */}
      <section className="space-y-4 pt-2">
        <div className="flex items-center justify-between border-b border-black/5 dark:border-white/5 pb-3">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-amber-500" />
            <h3 className={`text-base font-bold ${themeClasses.textPrimary}`}>
              منظومة اختبارات المقاييس الإحصائية التفاعلية (12 اختباراً تخصصياً)
            </h3>
          </div>
          <span className={`text-xs ${themeClasses.textSecondary}`}>
            120 سؤالاً مع شروحات أكاديمية تفصيلية
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {[
            { id: 'mean-central-tendency', title: '1. المتوسط الحسابي (Mean)', emoji: '📊', formula: 'x̄ = (∑x)/n' },
            { id: 'median-central-tendency', title: '2. الوسيط (Median)', emoji: '⚖️', formula: 'Me = x_{(n+1)/2}' },
            { id: 'mode-central-tendency', title: '3. المنوال (Mode)', emoji: '🎯', formula: 'الأكثر تكراراً' },
            { id: 'grouped-data-measures', title: '4. المقاييس في البيانات المبوبة', emoji: '📑', formula: 'x̄ = (∑f·m)/(∑f)' },
            { id: 'range-and-iqr', title: '5. المدى والمدى الربيعي (IQR)', emoji: '📏', formula: 'IQR = Q₃ - Q₁' },
            { id: 'variance-standard-deviation', title: '6. التباين والانحراف المعياري', emoji: '📉', formula: 's = √[∑(x-x̄)²/(n-1)]' },
            { id: 'quartiles-percentiles', title: '7. الربيعيات والمئينيات', emoji: '📈', formula: 'Q₁, Q₂, Q₃ · P_k' },
            { id: 'box-plot-measures', title: '8. تمثيل الصندوق والطرفين', emoji: '📦', formula: 'ملخص الأرقام الخمسة' },
            { id: 'z-score-standardization', title: '9. القيمة المعيارية (Z-Score)', emoji: '📐', formula: 'Z = (x - μ)/σ' },
            { id: 'skewness-distribution-shape', title: '10. معامل التواء البيانات', emoji: '🌊', formula: 'Sk = 3(x̄ - Me)/s' },
            { id: 'mean-deviation-coefficient-variation', title: '11. الانحراف ومعامل الاختلاف', emoji: '⚖️', formula: 'CV = (s/x̄)×100%' },
            { id: 'statistical-measures-word-problems', title: '12. المسائل الكلامية والتطبيقية', emoji: '🧩', formula: '∑x = n · x̄' },
          ].map((test) => (
            <button
              key={test.id}
              onClick={() => onOpenTest(test.id)}
              className={`p-3.5 rounded-xl border ${themeClasses.border} bg-black/[0.015] dark:bg-white/[0.015] hover:bg-amber-500/5 hover:border-amber-500/30 transition-all text-right flex items-center justify-between group`}
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-base">{test.emoji}</span>
                  <span className={`text-xs font-bold ${themeClasses.textPrimary} group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors`}>
                    {test.title}
                  </span>
                </div>
                <div className="text-[11px] font-mono text-amber-600 dark:text-amber-400">
                  {test.formula}
                </div>
              </div>
              <ArrowLeft className="w-4 h-4 text-amber-500 group-hover:-translate-x-1 transition-transform" />
            </button>
          ))}
        </div>
      </section>

      {/* Footer Conclusion */}
      <footer className="border-t border-black/5 dark:border-white/5 pt-5 text-xs sm:text-sm text-center text-black/50 dark:text-white/50 leading-relaxed">
        المقاييس الإحصائية ليست مجرد أرقام حسابية صماء، بل هي اللغة الرياضية الموحدة التي تترجم تعقيدات الواقع وظواهره إلى قرارات علمية وإدارية واعية.
      </footer>
    </article>
  );
};
