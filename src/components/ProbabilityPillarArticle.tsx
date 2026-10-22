import React from 'react';
import { BookOpen, Sparkles, Award, ArrowLeft, CheckCircle2, Sigma, Activity, BarChart3, HelpCircle, Layers, Compass, Target } from 'lucide-react';
import { useEyeTheme } from '../context/ThemeContext';

interface ProbabilityPillarArticleProps {
  onOpenTest: (testId: string) => void;
}

export const ProbabilityPillarArticle: React.FC<ProbabilityPillarArticleProps> = ({
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
          المقالة المرجعية الشاملة · بوابة الإحصاء ونظرية الاحتمالات
        </div>
        <h1 className={`text-2xl sm:text-3xl font-extrabold ${themeClasses.textPrimary}`}>
          الدليل الأكاديمي الشامل لنظرية الاحتمالات: من البديهيات الرياضية وفضاء العينة إلى الاستدلال البايزي والتوزيعات العشوائية
        </h1>
        <p className={`text-sm sm:text-base ${themeClasses.textSecondary} mt-3 leading-relaxed`}>
          استكشاف تطبيقي وبديهي معمق لأسس العشوائية وعدم اليقين، وقوانين العد التوافقي، والاحتمال الهندسي،
          والاستقلال والشرطية، ومبرهنة بايز، وتوزيعات المتغيرات العشوائية المنفصلة وتطبيقات اتخاذ القرارات وتحليل المخاطر.
        </p>
      </div>

      {/* Section 1: Foundations */}
      <section className="space-y-3">
        <h2 className={`text-lg sm:text-xl font-bold ${themeClasses.textPrimary} flex items-center gap-2`}>
          <span className="text-amber-600 dark:text-amber-400">1.</span>
          فلسفة العشوائية ونشأة علم الاحتمالات: من التخمين إلى اليقين الرياضي
        </h2>
        <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
          يمثل علم الاحتمالات (Probability Theory) أحد أعظم الإنجازات الفكرية في تاريخ العلوم الرياضية؛ إذ نقل العقل البشري من العجز أمام الصدفة والظواهر العشوائية غير المتوقعة إلى صياغة قوانين دقيقة تضبط وتصف سلوك الجماعات والأنظمة في المدى الطويل. نشأ هذا الفرع تاريخياً في القرن السابع عشر عبر مراسلات رياضية عميقة بين بيير دي فيرما وبليز باسكال لحل "مسألة النقاط" وتقسيم رهانات الألعاب غير المكتملة، وتطور لاحقاً بفضل إسهامات كريستيان هيجنز وياكوب برنولي وأبراهام دي موافر وبيير سيمون لابلاس.
        </p>
        <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
          وفي عام 1933، رسخ عالم الرياضيات الروسي أندريه كولموغوروف (Andrey Kolmogorov) الأسس البديهية الحديثة لنظرية الاحتمالات بالاستناد إلى نظرية القياس والمجموعات، لتنطلق الاحتمالات من مجرد ألعاب حظ إلى صلب فيزياء الكم، والتعلم الآلي، وعلم الوراثة، ونماذج التنبؤ المناخي وإدارة المحافظ الاستثمارية الكبرى.
        </p>
      </section>

      {/* Section 2: Kolmogorov Axioms & Sample Space */}
      <section className="space-y-4">
        <h2 className={`text-lg sm:text-xl font-bold ${themeClasses.textPrimary} flex items-center gap-2`}>
          <span className="text-amber-600 dark:text-amber-400">2.</span>
          بديهيات كولموغوروف وفضاء العينة: الأعمدة الثلاثة للحساب الاحتمالي
        </h2>
        <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
          تخضع جميع الحسابات الاحتمالية لثلاث بديهيات قطعية لا تقبل الجدل تشكل ما يعرف بـ "الفضاء الاحتمالي" (Probability Space):
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 my-3">
          <div className={`p-4 rounded-xl border ${themeClasses.border} bg-black/[0.01] dark:bg-white/[0.01]`}>
            <h3 className={`text-sm font-bold ${themeClasses.textPrimary} mb-1 flex items-center gap-1.5`}>
              <CheckCircle2 className="w-4 h-4 text-amber-500" />
              1. بديهية عدم السلبية
            </h3>
            <p className={`text-xs ${themeClasses.textSecondary} leading-relaxed`}>
              احتمال أي حادث E محصور حتماً بين الصفر والواحد: <span className="font-mono text-amber-600 dark:text-amber-400">0 ≤ P(E) ≤ 1</span>. لا يمكن لرياضي أن يقبل احتمالاً سالباً أو أكبر من 1.
            </p>
          </div>

          <div className={`p-4 rounded-xl border ${themeClasses.border} bg-black/[0.01] dark:bg-white/[0.01]`}>
            <h3 className={`text-sm font-bold ${themeClasses.textPrimary} mb-1 flex items-center gap-1.5`}>
              <CheckCircle2 className="w-4 h-4 text-amber-500" />
              2. بديهية اليقين
            </h3>
            <p className={`text-xs ${themeClasses.textSecondary} leading-relaxed`}>
              احتمال وقوع أحد نواتج فضاء العينة الكلي S يساوي واحداً صحيحاً: <span className="font-mono text-amber-600 dark:text-amber-400">P(S) = 1</span>، في حين أن احتمال الحادث المستحيل <span className="font-mono">P(∅) = 0</span>.
            </p>
          </div>

          <div className={`p-4 rounded-xl border ${themeClasses.border} bg-black/[0.01] dark:bg-white/[0.01]`}>
            <h3 className={`text-sm font-bold ${themeClasses.textPrimary} mb-1 flex items-center gap-1.5`}>
              <CheckCircle2 className="w-4 h-4 text-amber-500" />
              3. بديهية الجمع للحوادث المتنافية
            </h3>
            <p className={`text-xs ${themeClasses.textSecondary} leading-relaxed`}>
              إذا كان الحادثان A و B متنافيين (A ∩ B = ∅)، فإن احتمال وقوع أحدهما هو مجموع احتماليهما: <span className="font-mono text-amber-600 dark:text-amber-400">P(A ∪ B) = P(A) + P(B)</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Pillars of Modern Probability */}
      <section className="space-y-4">
        <h2 className={`text-lg sm:text-xl font-bold ${themeClasses.textPrimary} flex items-center gap-2`}>
          <span className="text-amber-600 dark:text-amber-400">3.</span>
          المحاور المنهجية الستة في نظرية الاحتمالات التطبيقية
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className={`p-4 rounded-xl border ${themeClasses.border} bg-black/[0.01] dark:bg-white/[0.01]`}>
            <div className="flex items-center gap-2 mb-2">
              <Compass className="w-4 h-4 text-amber-500" />
              <h3 className={`text-sm font-bold ${themeClasses.textPrimary}`}>
                فضاء العينة والتحليل التوافقي (Combinatorics)
              </h3>
            </div>
            <p className={`text-xs ${themeClasses.textSecondary} leading-relaxed`}>
              عندما تكون النواتج متساوية الإمكانية، يختزل حساب الاحتمال في مسألة عد دقيقة: <span className="font-mono">P = n(E) / n(S)</span>. نوظف مبدأ الضرب للمحاولات المتتابعة، والتباديل <span className="font-mono">nPr</span> عندما يكون لترتيب الاختيار أثر ووزن، والتوافيق <span className="font-mono">nCr</span> لتشكيل اللجان والمجموعات دون اعتبار للترتيب.
            </p>
          </div>

          <div className={`p-4 rounded-xl border ${themeClasses.border} bg-black/[0.01] dark:bg-white/[0.01]`}>
            <div className="flex items-center gap-2 mb-2">
              <Target className="w-4 h-4 text-emerald-500" />
              <h3 className={`text-sm font-bold ${themeClasses.textPrimary}`}>
                الاحتمال الهندسي والمتصل (Geometric Probability)
              </h3>
            </div>
            <p className={`text-xs ${themeClasses.textSecondary} leading-relaxed`}>
              عندما لا تكون عناصر فضاء العينة منفصلة ومعدودة (مثل وصول حافلة في وقت عشوائي أو سقوط سهم على لوحة أهداف)، يستبدل العد بالقياس: قياس طول الفترة، أو مساحة المنطقة المستهدفة نسبة إلى المساحة الكلية، أو نسبة الحجوم في الفضاء ثلاثي الأبعاد.
            </p>
          </div>

          <div className={`p-4 rounded-xl border ${themeClasses.border} bg-black/[0.01] dark:bg-white/[0.01]`}>
            <div className="flex items-center gap-2 mb-2">
              <Activity className="w-4 h-4 text-sky-500" />
              <h3 className={`text-sm font-bold ${themeClasses.textPrimary}`}>
                الاحتمال المشروط وقاعدة الضرب والاستقلال
              </h3>
            </div>
            <p className={`text-xs ${themeClasses.textSecondary} leading-relaxed`}>
              يمثل الاحتمال المشروط <span className="font-mono">P(A|B) = P(A ∩ B) / P(B)</span> انكماش فضاء العينة ليصبح B هو الفضاء الجديد بدلاً من S. ويكون الحادثان مستقلين إذا وفقط إذا كان تحقق أحدهما لا يغير احتمالية الآخر: <span className="font-mono">P(A ∩ B) = P(A) · P(B)</span>.
            </p>
          </div>

          <div className={`p-4 rounded-xl border ${themeClasses.border} bg-black/[0.01] dark:bg-white/[0.01]`}>
            <div className="flex items-center gap-2 mb-2">
              <Sigma className="w-4 h-4 text-purple-500" />
              <h3 className={`text-sm font-bold ${themeClasses.textPrimary}`}>
                مبرهنة بايز والاستدلال الاحتمالي العكسي
              </h3>
            </div>
            <p className={`text-xs ${themeClasses.textSecondary} leading-relaxed`}>
              تعد مبرهنة بايز الثورة الكبرى في التفكير العلمي؛ إذ تتيح تحديث الاحتمال القبلي لفرضية ما (Prior Probability) في ضوء دليل ومشاهدة جديدة للحصول على الاحتمال البعدي (Posterior Probability). وهي حجر الأساس في مرشحات البريد العشوائي، والتشخيص الطبي المخبري، والذكاء الاصطناعي.
            </p>
          </div>

          <div className={`p-4 rounded-xl border ${themeClasses.border} bg-black/[0.01] dark:bg-white/[0.01]`}>
            <div className="flex items-center gap-2 mb-2">
              <BarChart3 className="w-4 h-4 text-indigo-500" />
              <h3 className={`text-sm font-bold ${themeClasses.textPrimary}`}>
                المتغيرات العشوائية والتوقع الرياضي والتباين
              </h3>
            </div>
            <p className={`text-xs ${themeClasses.textSecondary} leading-relaxed`}>
              المتغير العشوائي X هو دالة رياضية تحول نواتج فضاء العينة إلى أعداد حقيقية قابلة للقياس. نحدد دالة الكتلة الاحتمالية P(X = x)، ونحسب التوقع الرياضي <span className="font-mono">E(X) = ∑ x · P(x)</span> كمتوسط مرجح للعوائد المتوقعة، والتباين لقياس مخاطر التشتت.
            </p>
          </div>

          <div className={`p-4 rounded-xl border ${themeClasses.border} bg-black/[0.01] dark:bg-white/[0.01]`}>
            <div className="flex items-center gap-2 mb-2">
              <Award className="w-4 h-4 text-rose-500" />
              <h3 className={`text-sm font-bold ${themeClasses.textPrimary}`}>
                توزيع ذي الحدين وتحليل القرارات الحياتية
              </h3>
            </div>
            <p className={`text-xs ${themeClasses.textSecondary} leading-relaxed`}>
              يصف توزيع ذي الحدين سلاسل تجارب برنولي الثنائية (نجاح / فشل) باحتمال نجاح ثابت p واستقلال تام. نوظف هذه المفاهيم في تسعير وثائق التأمين، وتقييم الجدوى الاقتصادية للألعاب، وحساب المخاطر الهندسية للأنظمة المتوازية والمترابطة.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: Interactive Quizzes Index */}
      <section className="space-y-4 pt-4 border-t border-black/5 dark:border-white/5">
        <div className="flex items-center justify-between">
          <h2 className={`text-lg sm:text-xl font-bold ${themeClasses.textPrimary} flex items-center gap-2`}>
            <Sparkles className="w-5 h-5 text-amber-500" />
            فهرس الاختبارات التفاعلية الـ 12 المعتمدة في قسم الاحتمالات
          </h2>
          <span className="text-xs px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 font-bold">
            120 سؤالاً تفاعلياً
          </span>
        </div>

        <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
          صُممت هذه السلسلة المتدرجة لتغطية كافة المهارات الرياضية والتحليلية في نظرية الاحتمالات، بدءاً من المفاهيم الأساسية وفضاء النواتج، وحتى التوزيعات الاحتمالية والقرارات الحياتية المعقدة:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 pt-2">
          {[
            {
              id: 'basic-theoretical-experimental-probability',
              title: 'مفهوم الاحتمال الأساسي والتجريبي والنظري',
              emoji: '🎲',
              math: 'P = n(E) / n(S)',
              level: 'أساسي',
            },
            {
              id: 'sample-space-counting-principles',
              title: 'فضاء العينة ومبادئ العد الأساسية',
              emoji: '📐',
              math: 'n(S) = n₁ × n₂',
              level: 'أساسي',
            },
            {
              id: 'geometric-probability',
              title: 'الاحتمال الهندسي والمساحات',
              emoji: '🎯',
              math: 'P = Area(E) / Area(S)',
              level: 'متوسط',
            },
            {
              id: 'simple-compound-complementary-events',
              title: 'الحوادث البسيطة والمركبة والحادث المتمم',
              emoji: '⭕',
              math: "P(E') = 1 - P(E)",
              level: 'أساسي',
            },
            {
              id: 'conditional-probability-multiplication-rule',
              title: 'الاحتمال المشروط وقاعدة الضرب',
              emoji: '🔍',
              math: 'P(A|B) = P(A∩B)/P(B)',
              level: 'متوسط',
            },
            {
              id: 'independent-dependent-events',
              title: 'الحوادث المستقلة وغير المستقلة',
              emoji: '⚡',
              math: 'P(A∩B) = P(A) · P(B)',
              level: 'متوسط',
            },
            {
              id: 'mutually-exclusive-overlapping-events',
              title: 'الحوادث المتنافية وغير المتنافية وقاعدة الجمع',
              emoji: '🔀',
              math: 'P(A∪B) = P(A)+P(B)-P(A∩B)',
              level: 'متوسط',
            },
            {
              id: 'permutations-combinations-probability',
              title: 'التباديل والتوافيق في حساب الاحتمالات',
              emoji: '🔢',
              math: 'nCr = n! / (r!(n-r)!)',
              level: 'متقدم',
            },
            {
              id: 'bayes-theorem-total-probability',
              title: 'مبرهنة بايز وقاعدة الاحتمال الكلي',
              emoji: '🧬',
              math: 'P(A|B) = P(B|A)P(A)/P(B)',
              level: 'متقدم',
            },
            {
              id: 'discrete-random-variables-distributions',
              title: 'المتغيرات العشوائية المنفصلة والقيمة المتوقعة',
              emoji: '📈',
              math: 'E(X) = ∑ x · P(x)',
              level: 'متقدم',
            },
            {
              id: 'binomial-probability-distribution',
              title: 'توزيع ذي الحدين وتجارب برنولي',
              emoji: '🪙',
              math: 'P(X=k) = nCk · pᵏ · qⁿ⁻ᵏ',
              level: 'متقدم',
            },
            {
              id: 'applied-probability-word-problems',
              title: 'مسائل وتطبيقات حياتية وتحليل المخاطر',
              emoji: '🧩',
              math: 'E(Net) = E(Gain) - Cost',
              level: 'متقدم',
            },
          ].map((quiz, idx) => (
            <button
              key={quiz.id}
              onClick={() => onOpenTest(quiz.id)}
              className={`p-3.5 rounded-xl border ${themeClasses.border} bg-black/[0.01] dark:bg-white/[0.01] hover:border-amber-500/40 hover:bg-amber-500/5 transition-all text-right flex flex-col justify-between group cursor-pointer`}
            >
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xl">{quiz.emoji}</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full font-bold bg-amber-500/10 text-amber-600 dark:text-amber-400">
                    اختبار #{idx + 1}
                  </span>
                </div>
                <h3 className={`text-xs sm:text-sm font-bold ${themeClasses.textPrimary} group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors line-clamp-1`}>
                  {quiz.title}
                </h3>
                <div className="font-mono text-[11px] text-amber-700/80 dark:text-amber-300/80 mt-1">
                  {quiz.math}
                </div>
              </div>
              <div className="flex items-center justify-between mt-3 pt-2 border-t border-black/[0.04] dark:border-white/[0.04] text-[11px] text-slate-400 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                <span>10 أسئلة متدرجة</span>
                <ArrowLeft className="w-3.5 h-3.5 transform group-hover:-translate-x-1 transition-transform" />
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Footer advice */}
      <div className={`p-4 rounded-xl border border-amber-500/20 bg-amber-500/5 text-amber-900 dark:text-amber-200 text-xs sm:text-sm space-y-1`}>
        <div className="font-bold flex items-center gap-1.5">
          <HelpCircle className="w-4 h-4 text-amber-600 dark:text-amber-400" />
          توصية تربوية لدراسة الاحتمالات
        </div>
        <p className="leading-relaxed opacity-90">
          ابدأ دائماً بتحديد فضاء العينة بدقة والتأكد من تساوي فرص النواتج قبل الشروع في الحساب؛ ثم انتبه لحالة السحب: هل هو "مع الإرجاع" (استقلال) أم "بدون إرجاع" (تغير في فضاء العينة وشرطية). استخدم مخطط الشجرة البيانية في المسائل متعددة المراحل لتجنب الخطأ في حصر المسارات الممكنة.
        </p>
      </div>
    </article>
  );
};
