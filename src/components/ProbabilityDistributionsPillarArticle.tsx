import React from 'react';
import { BookOpen, Sparkles, Award, ArrowLeft, CheckCircle2, Sigma, Activity, BarChart3, HelpCircle, Layers, Target, Hash, Shuffle, RotateCcw, Clock, Compass } from 'lucide-react';
import { useEyeTheme } from '../context/ThemeContext';

interface ProbabilityDistributionsPillarArticleProps {
  onOpenTest: (testId: string) => void;
}

export const ProbabilityDistributionsPillarArticle: React.FC<ProbabilityDistributionsPillarArticleProps> = ({
  onOpenTest,
}) => {
  const { themeClasses } = useEyeTheme();

  return (
    <article
      className={`rounded-2xl border ${themeClasses.border} ${themeClasses.cardBg} p-6 sm:p-10 shadow-sm transition-all text-right space-y-8 leading-relaxed`}
    >
      {/* Header Banner */}
      <div className="border-b border-black/5 dark:border-white/5 pb-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-700 dark:text-purple-300 border border-purple-500/20 mb-3">
          <BookOpen className="w-4 h-4" />
          المقالة المرجعية الكبرى · بوابة التوزيعات الاحتمالية ونماذج الصدفة
        </div>
        <h1 className={`text-2xl sm:text-3xl font-extrabold ${themeClasses.textPrimary}`}>
          الدليل الأكاديمي الشامل للتوزيعات الاحتمالية: من المتغيرات المنفصلة وتجارب برنولي إلى المنحنى الجرسي ونظرية النهاية المركزية
        </h1>
        <p className={`text-sm sm:text-base ${themeClasses.textSecondary} mt-3 leading-relaxed`}>
          استكشاف نظري وتطبيقي معمق لخصائص المتغيرات العشوائية، الأمل الرياضي والتباين، توزيعات ذات الحدين وبواسون والهندسي،
          دوال كثافة الاحتمال والتكامل، المنحنى الطبيعي وقاعدة 68-95-99.7، الدرجة المعيارية Z، وتقريب دي موافر-لابلاس مع تطبيقات هندسية وطبية ومالية.
        </p>
      </div>

      {/* Section 1: Historical & Foundational Paradigm */}
      <section className="space-y-3">
        <h2 className={`text-lg sm:text-xl font-bold ${themeClasses.textPrimary} flex items-center gap-2`}>
          <span className="text-purple-600 dark:text-purple-400">1.</span>
          المدخل المعرفي والتاريخي: كيف تحولت الصدفة إلى دوال رياضية قابلة للقياس؟
        </h2>
        <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
          نشأت نظرية التوزيعات الاحتمالية استجابةً لحاجة العلماء والباحثين إلى تجاوز حساب احتمالات الحوادث الفردية المعزولة، وصياغة "دوال شاملة" تصف السلوك الاحتمالي الكامل لجميع القيم الممكنة للظاهرة قيد الدراسة. بدأت هذه الرحلة مع تجارب عائلة برنولي في القرن الثامن عشر، وتطورت على أيدي أبراهام دي موافر وبيير سيمون لابلاس وكارل فريدريش غاوس وسيميون بواسون، وصولاً إلى التدشين الصارم للمسلمات الاحتمالية على يد عالم الرياضيات الروسي أندريه كولموغوروف في عام 1933.
        </p>
        <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
          في جوهرها الرياضي، المتغير العشوائي (Random Variable) هو جسر التحويل الرياضي الأنيق X: Ω → ℝ الذي ينقل عناصر فضاء العينة التجريدي إلى خط الأعداد الحقيقية، محولاً المفاهيم الوصفية مثل "نجاح المريض في الشفاء" أو "ظهور الشعار" إلى مقادير عددية دقيقة يمكن إخضاعها للتفاضل والتكامل وحساب العزوم ومقاييس النزعة المركزية والتشتت.
        </p>
      </section>

      {/* Section 2: Discrete vs Continuous */}
      <section className="space-y-4">
        <h2 className={`text-lg sm:text-xl font-bold ${themeClasses.textPrimary} flex items-center gap-2`}>
          <span className="text-purple-600 dark:text-purple-400">2.</span>
          الثنائية الكبرى: المتغيرات المنفصلة (الكتلة) مقابل المتغيرات المتصلة (الكثافة)
        </h2>
        <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
          ينقسم فضاء المتغيرات العشوائية إلى عالمين رياضيين متمايزين تحكم كل منهما أدوات تحليلية خاصة:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-3">
          <div className={`p-4 rounded-xl border ${themeClasses.border} bg-black/[0.01] dark:bg-white/[0.01]`}>
            <h3 className={`text-sm font-bold ${themeClasses.textPrimary} mb-1.5 flex items-center gap-1.5`}>
              <CheckCircle2 className="w-4 h-4 text-purple-500" />
              المتغيرات المنفصلة (Discrete) ودالة الكتلة (PMF)
            </h3>
            <p className={`text-xs ${themeClasses.textSecondary} leading-relaxed`}>
              تنتج عن عمليات العد المباشر وتأخذ قيماً معدودة ومنفصلة بفجوات محددة (مثل عدد المكالمات أو عدد الحوادث). تحكمها دالة الكتلة الاحتمالية P(X = x) بشرط أن تنحصر جميع الاحتمالات بين 0 و 1، ومجموعها الإجمالي ∑ P(x) = 1. يُحسب الأمل الرياضي عبر المجموع التجميعي: E(X) = ∑ x · P(x).
            </p>
          </div>
          <div className={`p-4 rounded-xl border ${themeClasses.border} bg-black/[0.01] dark:bg-white/[0.01]`}>
            <h3 className={`text-sm font-bold ${themeClasses.textPrimary} mb-1.5 flex items-center gap-1.5`}>
              <CheckCircle2 className="w-4 h-4 text-purple-500" />
              المتغيرات المتصلة (Continuous) ودالة الكثافة (PDF)
            </h3>
            <p className={`text-xs ${themeClasses.textSecondary} leading-relaxed`}>
              تنتج عن القياس الفيزيائي المستمر وتأخذ أي قيمة حقيقية ضمن فترات متصلة (كالزمن والوزن ودرجة الحرارة). تحكمها دالة كثافة الاحتمال f(x) ≥ 0 بشرط أن تكون المساحة الكلية تحت المنحنى مساوية للواحد الصحيح ∫ f(x) dx = 1. احتمال أي نقطة منفردة يساوي صفراً تماماً P(X = c) = 0، ويقاس الاحتمال عبر التكامل المحدد بين حدين.
            </p>
          </div>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => onOpenTest('random-variables-types')}
            className="text-xs px-3 py-1.5 rounded-lg bg-purple-500/10 text-purple-700 dark:text-purple-300 font-semibold hover:bg-purple-500/20 transition-colors flex items-center gap-1"
          >
            اختبار مفهوم المتغير العشوائي وأنواعه
            <ArrowLeft className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => onOpenTest('continuous-distributions-pdf')}
            className="text-xs px-3 py-1.5 rounded-lg bg-purple-500/10 text-purple-700 dark:text-purple-300 font-semibold hover:bg-purple-500/20 transition-colors flex items-center gap-1"
          >
            اختبار دالة كثافة الاحتمال المتصلة
            <ArrowLeft className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>

      {/* Section 3: Discrete Models Family */}
      <section className="space-y-4">
        <h2 className={`text-lg sm:text-xl font-bold ${themeClasses.textPrimary} flex items-center gap-2`}>
          <span className="text-purple-600 dark:text-purple-400">3.</span>
          عائلة التوزيعات المنفصلة الكبرى: برنولي، ذات الحدين، بواسون، والهندسي
        </h2>
        <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
          تمثل هذه التوزيعات النماذج الرياضية الأكثر استخداماً لتمثيل الحوادث المتقطعة وطوابير الانتظار:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 my-3">
          <div className={`p-3.5 rounded-xl border ${themeClasses.border} bg-black/[0.01] dark:bg-white/[0.01]`}>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-lg"></span>
              <h4 className={`text-xs font-bold ${themeClasses.textPrimary}`}>توزيع ذات الحدين B(n, p)</h4>
            </div>
            <p className={`text-[11px] ${themeClasses.textSecondary} leading-relaxed mb-2`}>
              يعد عدد النجاحات k في n محاولة مستقلة بثبات احتمال النجاح p. قانونه: P(k) = C(n,k) pᵏ qⁿ⁻ᵏ. متوسطه μ = np، وتباينه σ² = npq.
            </p>
            <span className="text-[10px] font-mono text-purple-600 dark:text-purple-400 font-bold block" dir="ltr">
              E(X)=np, Var(X)=np(1-p)
            </span>
          </div>

          <div className={`p-3.5 rounded-xl border ${themeClasses.border} bg-black/[0.01] dark:bg-white/[0.01]`}>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-lg">⏱️</span>
              <h4 className={`text-xs font-bold ${themeClasses.textPrimary}`}>توزيع بواسون Poisson(λ)</h4>
            </div>
            <p className={`text-[11px] ${themeClasses.textSecondary} leading-relaxed mb-2`}>
              ينمذج الأحداث النادرة والتدفقات خلال فترة متصلة بمعدل λ. قانونه: P(k) = (e⁻ᵝ λᵏ) / k!. يتميز بتطابق المتوسط والتباين: E(X) = Var(X) = λ.
            </p>
            <span className="text-[10px] font-mono text-purple-600 dark:text-purple-400 font-bold block" dir="ltr">
              E(X)=λ, Var(X)=λ
            </span>
          </div>

          <div className={`p-3.5 rounded-xl border ${themeClasses.border} bg-black/[0.01] dark:bg-white/[0.01]`}>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-lg">⏳</span>
              <h4 className={`text-xs font-bold ${themeClasses.textPrimary}`}>التوزيع الهندسي Geom(p)</h4>
            </div>
            <p className={`text-[11px] ${themeClasses.textSecondary} leading-relaxed mb-2`}>
              يمثل رقم المحاولة التي يقع فيها أول نجاح. قانونه: P(k) = (1-p)ᵏ⁻¹ p. ينفرد بخاصية فقدان الذاكرة بين التوزيعات المنفصلة، ومتوسطه 1/p.
            </p>
            <span className="text-[10px] font-mono text-purple-600 dark:text-purple-400 font-bold block" dir="ltr">
              E(X)=1/p, Var=(1-p)/p²
            </span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => onOpenTest('binomial-distribution-properties')}
            className="text-xs px-3 py-1.5 rounded-lg bg-purple-500/10 text-purple-700 dark:text-purple-300 font-semibold hover:bg-purple-500/20 transition-colors flex items-center gap-1"
          >
            خصائص ذات الحدين
            <ArrowLeft className="w-3 h-3" />
          </button>
          <button
            onClick={() => onOpenTest('binomial-probability-calculations')}
            className="text-xs px-3 py-1.5 rounded-lg bg-purple-500/10 text-purple-700 dark:text-purple-300 font-semibold hover:bg-purple-500/20 transition-colors flex items-center gap-1"
          >
            حساب صيغة ذات الحدين
            <ArrowLeft className="w-3 h-3" />
          </button>
          <button
            onClick={() => onOpenTest('poisson-distribution')}
            className="text-xs px-3 py-1.5 rounded-lg bg-purple-500/10 text-purple-700 dark:text-purple-300 font-semibold hover:bg-purple-500/20 transition-colors flex items-center gap-1"
          >
            توزيع بواسون للأحداث النادرة
            <ArrowLeft className="w-3 h-3" />
          </button>
          <button
            onClick={() => onOpenTest('geometric-distribution')}
            className="text-xs px-3 py-1.5 rounded-lg bg-purple-500/10 text-purple-700 dark:text-purple-300 font-semibold hover:bg-purple-500/20 transition-colors flex items-center gap-1"
          >
            التوزيع الهندسي وفقدان الذاكرة
            <ArrowLeft className="w-3 h-3" />
          </button>
          <button
            onClick={() => onOpenTest('hypergeometric-distribution')}
            className="text-xs px-3 py-1.5 rounded-lg bg-purple-500/10 text-purple-700 dark:text-purple-300 font-semibold hover:bg-purple-500/20 transition-colors flex items-center gap-1"
          >
            التوزيع الهندسي الفائق (السحب بدون إرجاع)
            <ArrowLeft className="w-3 h-3" />
          </button>
        </div>
      </section>

      {/* Section 4: The Normal Distribution & Empirical Rule */}
      <section className="space-y-4">
        <h2 className={`text-lg sm:text-xl font-bold ${themeClasses.textPrimary} flex items-center gap-2`}>
          <span className="text-purple-600 dark:text-purple-400">4.</span>
          التوزيع الطبيعي وقاعدة 68 - 95 - 99.7: عرش الإحصاء الاستدلالي
        </h2>
        <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
          يعد التوزيع الطبيعي X ~ N(μ, σ²) أعظم نموذج رياضي في العلوم التطبيقية. يتميز بالتماثل المطلق أحادي القمة حول المتوسط الحسابي، حيث يتطابق المتوسط والوسيط والمنوال في نقطة المركز. تقسم نقطتا الانقلاب عند x = μ ± σ المنحنى بدقة متناهية، وتنص القاعدة التجريبية التجريبية (Empirical Rule) على النسب المئوية الذهبية التالية:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-3">
          <div className="p-3 rounded-xl bg-purple-500/5 border border-purple-500/20 text-center">
            <span className="text-xl font-extrabold text-purple-600 dark:text-purple-400 block mb-0.5">68.26%</span>
            <span className={`text-xs font-bold ${themeClasses.textPrimary} block mb-1`}>انحراف معياري واحد</span>
            <span className="text-[11px] font-mono text-purple-600 dark:text-purple-400" dir="ltr">[μ - σ, μ + σ]</span>
          </div>
          <div className="p-3 rounded-xl bg-purple-500/5 border border-purple-500/20 text-center">
            <span className="text-xl font-extrabold text-purple-600 dark:text-purple-400 block mb-0.5">95.44%</span>
            <span className={`text-xs font-bold ${themeClasses.textPrimary} block mb-1`}>انحرافان معياريان</span>
            <span className="text-[11px] font-mono text-purple-600 dark:text-purple-400" dir="ltr">[μ - 2σ, μ + 2σ]</span>
          </div>
          <div className="p-3 rounded-xl bg-purple-500/5 border border-purple-500/20 text-center">
            <span className="text-xl font-extrabold text-purple-600 dark:text-purple-400 block mb-0.5">99.74%</span>
            <span className={`text-xs font-bold ${themeClasses.textPrimary} block mb-1`}>3 انحرافات معيارية</span>
            <span className="text-[11px] font-mono text-purple-600 dark:text-purple-400" dir="ltr">[μ - 3σ, μ + 3σ]</span>
          </div>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => onOpenTest('normal-distribution-empirical-rule')}
            className="text-xs px-3 py-1.5 rounded-lg bg-purple-500/10 text-purple-700 dark:text-purple-300 font-semibold hover:bg-purple-500/20 transition-colors flex items-center gap-1"
          >
            اختبار التوزيع الطبيعي والقاعدة التجريبية
            <ArrowLeft className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>

      {/* Section 5: Standard Normal & Z-Scores */}
      <section className="space-y-4">
        <h2 className={`text-lg sm:text-xl font-bold ${themeClasses.textPrimary} flex items-center gap-2`}>
          <span className="text-purple-600 dark:text-purple-400">5.</span>
          المعايرة الإحصائية والدرجة Z وجداول التوزيع الطبيعي القياسي
        </h2>
        <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
          لتوحيد قياس الظواهر المختلفة وإلغاء تأثير الوحدات المتباينة، يتم تحويل المتغير الطبيعي إلى التوزيع الطبيعي المعياري Z ~ N(0, 1) بواسطة صيغة التحويل الخطي:
        </p>

        <div className="p-3.5 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5 font-mono text-center text-sm text-purple-600 dark:text-purple-400" dir="ltr">
          Z = (X - μ) / σ &nbsp; &nbsp; ⟺ &nbsp; &nbsp; X = μ + Z · σ
        </div>

        <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
          توضح الدرجة المعيارية بدقة كم انحرافاً معيارياً تبعد القيمة عن المتوسط الحسابي، وتتيح جداول Z استخراج المساحات التراكمية على يسار النقطة Φ(z). ويُحسب احتمال الذيل الأيمن بطرح المساحة من 1، بينما يُحسب احتمال المساحة المحصورة بين قيمتين بطرح المساحتين التراكميتين: P(a ≤ Z ≤ b) = Φ(b) - Φ(a).
        </p>

        <div className="flex gap-2">
          <button
            onClick={() => onOpenTest('standard-normal-z-score')}
            className="text-xs px-3 py-1.5 rounded-lg bg-purple-500/10 text-purple-700 dark:text-purple-300 font-semibold hover:bg-purple-500/20 transition-colors flex items-center gap-1"
          >
            اختبار الدرجة المعيارية Z وجداول الاحتمال
            <ArrowLeft className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>

      {/* Section 6: Normal Approximation to Binomial */}
      <section className="space-y-4">
        <h2 className={`text-lg sm:text-xl font-bold ${themeClasses.textPrimary} flex items-center gap-2`}>
          <span className="text-purple-600 dark:text-purple-400">6.</span>
          مبرهنة دي موافر - لابلاس وتصحيح الاستمرارية (Continuity Correction)
        </h2>
        <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
          عندما يكبر حجم العينة n في توزيع ذات الحدين، تقترب نهايات التوزيع تدريجياً من التوزيع الطبيعي N(np, npq) بشرط استيفاء المعيار العالمي الصارم:
        </p>

        <div className="p-3 rounded-xl bg-purple-500/5 border border-purple-500/20 text-center font-mono text-xs sm:text-sm text-purple-700 dark:text-purple-300" dir="ltr">
          n · p ≥ 5 &nbsp; &nbsp; AND &nbsp; &nbsp; n · (1 - p) ≥ 5
        </div>

        <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
          وللتعويض عن الفارق الجوهري بين التوزيع المنفصل (حيث تأخذ القيم مساحة مستطيل كاملة بعرض 1) والتوزيع المتصل (حيث احتمال النقطة صفر)، يُطبق معامل تصحيح الاستمرارية بإضافة أو طرح نصف وحدة (± 0.5) لضمان تغطية المستطيل الاحتمالي كاملاً: P(X = k) تؤول إلى P(k - 0.5 ≤ Y ≤ k + 0.5)، و P(X ≥ k) تؤول إلى P(Y ≥ k - 0.5).
        </p>

        <div className="flex gap-2">
          <button
            onClick={() => onOpenTest('normal-approximation-to-binomial')}
            className="text-xs px-3 py-1.5 rounded-lg bg-purple-500/10 text-purple-700 dark:text-purple-300 font-semibold hover:bg-purple-500/20 transition-colors flex items-center gap-1"
          >
            اختبار تقريب ذات الحدين ومعامل تصحيح الاستمرارية
            <ArrowLeft className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>

      {/* Section 7: Practical Applications Roadmap */}
      <section className="space-y-4 border-t border-black/5 dark:border-white/5 pt-6">
        <h2 className={`text-lg sm:text-xl font-bold ${themeClasses.textPrimary} flex items-center gap-2`}>
          <span className="text-purple-600 dark:text-purple-400">7.</span>
          خارطة الطريق لاختيار التوزيع المناسب في المسائل التطبيقية والهندسية
        </h2>
        <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
          في بيئات العمل الواقعية ومراقبة الجودة، يتم اختيار النموذج المناسب وفق القواعد الاسترشادية التالية:
        </p>

        <div className="overflow-x-auto my-3">
          <table className={`w-full text-xs text-right border ${themeClasses.border}`}>
            <thead>
              <tr className="bg-purple-500/10 text-purple-800 dark:text-purple-200 font-bold border-b border-black/10 dark:border-white/10">
                <th className="p-2.5">طبيعة المتغير والهدف</th>
                <th className="p-2.5">التوزيع الأنسب</th>
                <th className="p-2.5">المعلمات الجوهرية</th>
                <th className="p-2.5">أبرز التطبيقات</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-black/5 dark:divide-white/5">
              <tr>
                <td className="p-2.5 font-medium">عدد النجاحات في n محاولة مستقلة وثابتة</td>
                <td className="p-2.5 text-purple-600 dark:text-purple-400 font-bold">ذات الحدين (Binomial)</td>
                <td className="p-2.5 font-mono" dir="ltr">n, p</td>
                <td className="p-2.5">فحص عينات الجودة، نسب الشفاء السريري، استطلاعات الرأي</td>
              </tr>
              <tr>
                <td className="p-2.5 font-medium">عدد الأحداث في فترة زمنية أو مساحية بمعدل</td>
                <td className="p-2.5 text-purple-600 dark:text-purple-400 font-bold">بواسون (Poisson)</td>
                <td className="p-2.5 font-mono" dir="ltr">λ (المعدل)</td>
                <td className="p-2.5">مكالمات الطوارئ، حوادث المرور، أخطاء الطباعة والشبكات</td>
              </tr>
              <tr>
                <td className="p-2.5 font-medium">عدد المحاولات اللازمة لتحقيق أول نجاح</td>
                <td className="p-2.5 text-purple-600 dark:text-purple-400 font-bold">الهندسي (Geometric)</td>
                <td className="p-2.5 font-mono" dir="ltr">p (احتمال النجاح)</td>
                <td className="p-2.5">عمر التشغيل قبل أول عطل، جولات التوظيف والمبيعات</td>
              </tr>
              <tr>
                <td className="p-2.5 font-medium">سحب عينات بدون إرجاع من مجتمع محدود</td>
                <td className="p-2.5 text-purple-600 dark:text-purple-400 font-bold">الهندسي الفائق (Hypergeometric)</td>
                <td className="p-2.5 font-mono" dir="ltr">N, K, n</td>
                <td className="p-2.5">سحب كرات من صندوق، ضبط الجودة دون إتلاف، تقدير عشائر الأسماك</td>
              </tr>
              <tr>
                <td className="p-2.5 font-medium">قياسات فيزيائية أو حيوية مستمرة متماثلة</td>
                <td className="p-2.5 text-purple-600 dark:text-purple-400 font-bold">الطبيعي (Normal)</td>
                <td className="p-2.5 font-mono" dir="ltr">μ, σ</td>
                <td className="p-2.5">الأوزان والأطوال، علامات الاختبارات القياسية، ستة سيجما</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => onOpenTest('applied-distributions-word-problems')}
            className="text-xs px-3.5 py-2 rounded-lg bg-purple-600 text-white font-bold hover:bg-purple-700 transition-colors flex items-center gap-1.5 shadow-sm"
          >
            اختبار المسائل والتطبيقات الحياتية المركبة للتوزيعات
            <ArrowLeft className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* Footer Banner */}
      <div className={`p-4 rounded-xl border border-purple-500/20 bg-purple-500/5 flex items-center justify-between gap-4 mt-6`}>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-600 dark:text-purple-400 flex items-center justify-center font-bold">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h4 className={`text-sm font-bold ${themeClasses.textPrimary}`}>
              منظومة التوزيعات الاحتمالية التفاعلية المكتملة
            </h4>
            <p className={`text-xs ${themeClasses.textSecondary}`}>
              تضم الوحدة 12 اختباراً تخصصياً بمجموع 120 مسألة تفاعلية ومقالات مرجعية لكل موضوع.
            </p>
          </div>
        </div>
        <button
          onClick={() => onOpenTest('random-variables-types')}
          className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs transition-colors shrink-0 flex items-center gap-1.5 shadow-sm"
        >
          <span>ابدأ الاختبار الأول</span>
          <ArrowLeft className="w-4 h-4" />
        </button>
      </div>
    </article>
  );
};
