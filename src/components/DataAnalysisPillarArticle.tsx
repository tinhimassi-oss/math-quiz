import React from 'react';
import { BookOpen, Sparkles, Award, ArrowLeft, CheckCircle2, Sigma, Activity, BarChart3, Database, TrendingUp, Layers } from 'lucide-react';
import { useEyeTheme } from '../context/ThemeContext';

interface DataAnalysisPillarArticleProps {
  onOpenTest: (testId: string) => void;
}

export const DataAnalysisPillarArticle: React.FC<DataAnalysisPillarArticleProps> = ({
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
          المقالة المرجعية الشاملة · بوابة الإحصاء وعلم البيانات
        </div>
        <h1 className={`text-2xl sm:text-3xl font-extrabold ${themeClasses.textPrimary}`}>
          الدليل الأكاديمي الشامل لتحليل البيانات: من المعايرة والتمثيل البصري إلى النمذجة التنبؤية والتفكير النقدي
        </h1>
        <p className={`text-sm sm:text-base ${themeClasses.textSecondary} mt-3 leading-relaxed`}>
          استكشاف تطبيقي معمق لأساليب جمع البيانات وطرق المعاينة، وتقنيات التمثيل البياني، ونماذج الانحدار والارتباط،
          وتحليل السلاسل الزمنية، واختبارات كاي تربيع، وقراءة لوحات القيادة، وكشف التحيزات ومغالطات التضليل في عصر البيانات الضخمة.
        </p>
      </div>

      {/* Section 1: Data Lifecycle */}
      <section className="space-y-3">
        <h2 className={`text-lg sm:text-xl font-bold ${themeClasses.textPrimary} flex items-center gap-2`}>
          <span className="text-amber-600 dark:text-amber-400">1.</span>
          دورة حياة البيانات: من المشاهدة الخام إلى القرار الاستراتيجي
        </h2>
        <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
          أصبحت البيانات في الاقتصاد الرقمي المعاصر "نفط العصر الجديد" وركيزة التميز التنافسي لكبرى المؤسسات العالمية والحكومات الذكية. غير أن البيانات الخام بحد ذاتها تظل ركاماً غير ذي نفع ما لم تمر بدورة معالجة وتحليل منهجية تبدأ من التحديد الدقيق للمجتمع الإحصائي، وتصميم أدوات الجمع المحايدة، مروراً بالتنظيف والتبويب والتمثيل البصري، وصولاً إلى بناء النماذج التنبؤية واستخلاص البصائر الذكية لاتخاذ القرارات.
        </p>
        <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
          ينقسم تحليل البيانات إلى أربعة مستويات تصاعدية من النضج التحليلي: 1) التحليل الوصفي (Descriptive) للإجابة عن "ماذا حدث؟"، 2) التحليل التشخيصي (Diagnostic) لمعرفة "لماذا حدث ذلك؟"، 3) التحليل التنبؤي (Predictive) لاستشراف "ما الذي سيحدث مستقبلاً؟"، 4) التحليل التوجيهي (Prescriptive) لتحديد "ما هو الإجراء الأمثل الواجب اتخاذه الآن؟".
        </p>
      </section>

      {/* Section 2: Core Sampling & Representation */}
      <section className="space-y-4">
        <h2 className={`text-lg sm:text-xl font-bold ${themeClasses.textPrimary} flex items-center gap-2`}>
          <span className="text-amber-600 dark:text-amber-400">2.</span>
          أركان المعايرة والتمثيل البياني الرصين
        </h2>
        <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
          يرتكز الصدق العلمي لأي دراسة على جودة العينة وطريقة تقديمها البصري؛ فالتحيز في سحب العينة يبطل النتائج مهما كانت دقة الخوارزميات اللاحقة:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 my-3">
          <div className={`p-4 rounded-xl border ${themeClasses.border} bg-black/[0.01] dark:bg-white/[0.01]`}>
            <h3 className={`text-sm font-bold ${themeClasses.textPrimary} mb-1 flex items-center gap-1.5`}>
              <CheckCircle2 className="w-4 h-4 text-amber-500" />
              المعاينة الاحتمالية
            </h3>
            <p className={`text-xs ${themeClasses.textSecondary} leading-relaxed mb-2`}>
              العينات العشوائية البسيطة والمنتظمة (k = N/n) والطبقية والعنقودية، التي تضمن تكافؤ الفرص وتمثيل كافة الشرائح ونقاء التقديرات.
            </p>
            <button
              onClick={() => onOpenTest('data-collection-sampling-methods')}
              className="text-xs font-semibold text-amber-600 dark:text-amber-400 hover:underline inline-flex items-center gap-1"
            >
              <span>اختبار طرق العينات (10 أسئلة)</span>
              <ArrowLeft className="w-3 h-3" />
            </button>
          </div>

          <div className={`p-4 rounded-xl border ${themeClasses.border} bg-black/[0.01] dark:bg-white/[0.01]`}>
            <h3 className={`text-sm font-bold ${themeClasses.textPrimary} mb-1 flex items-center gap-1.5`}>
              <CheckCircle2 className="w-4 h-4 text-amber-500" />
              التمثيل البصري الموضوعي
            </h3>
            <p className={`text-xs ${themeClasses.textSecondary} leading-relaxed mb-2`}>
              اختيار القطاعات الدائرية لأجزاء الكل (θ = % × 360°)، والأعمدة للفئات المنفصلة، والخطوط للسلاسل والزمن دون تشويه ثلاثي الأبعاد.
            </p>
            <button
              onClick={() => onOpenTest('data-visualization-charts')}
              className="text-xs font-semibold text-amber-600 dark:text-amber-400 hover:underline inline-flex items-center gap-1"
            >
              <span>اختبار التمثيل البياني (10 أسئلة)</span>
              <ArrowLeft className="w-3 h-3" />
            </button>
          </div>

          <div className={`p-4 rounded-xl border ${themeClasses.border} bg-black/[0.01] dark:bg-white/[0.01]`}>
            <h3 className={`text-sm font-bold ${themeClasses.textPrimary} mb-1 flex items-center gap-1.5`}>
              <CheckCircle2 className="w-4 h-4 text-amber-500" />
              المدرجات والتوزيعات
            </h3>
            <p className={`text-xs ${themeClasses.textSecondary} leading-relaxed mb-2`}>
              قواعد طول الفئة وتحديد المراكز m = (L+U)/2 وتلاصق المستطيلات لتمثيل الكثافة التكرارية للبيانات الكمية المتصلة.
            </p>
            <button
              onClick={() => onOpenTest('frequency-tables-histograms')}
              className="text-xs font-semibold text-amber-600 dark:text-amber-400 hover:underline inline-flex items-center gap-1"
            >
              <span>اختبار الجداول والمدرجات (10 أسئلة)</span>
              <ArrowLeft className="w-3 h-3" />
            </button>
          </div>
        </div>
      </section>

      {/* Section 3: Modeling, Correlation & Regression */}
      <section className="space-y-4">
        <h2 className={`text-lg sm:text-xl font-bold ${themeClasses.textPrimary} flex items-center gap-2`}>
          <span className="text-amber-600 dark:text-amber-400">3.</span>
          منظومة النمذجة التنبؤية: الارتباط والانحدار والسلاسل الزمنية
        </h2>
        <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
          يتجاوز التحليل المتقدم مجرد الوصف نحو كشف العلاقات الرياضية وصياغة معادلات التنبؤ بالمستقبل:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 my-3">
          <div className={`p-4 rounded-xl border ${themeClasses.border} bg-black/[0.01] dark:bg-white/[0.01] space-y-2`}>
            <div className="flex items-center justify-between">
              <h3 className={`text-sm font-bold ${themeClasses.textPrimary}`}>
                الارتباط الخطي والرتبي (r & r_s)
              </h3>
              <span className="text-xs font-mono text-amber-600 dark:text-amber-400">
                -1 ≤ r ≤ +1 | r²
              </span>
            </div>
            <p className={`text-xs ${themeClasses.textSecondary} leading-relaxed`}>
              معامل بيرسون للعلاقات الخطية وسبيرمان للرتب، مع الفصل الحاسم بين الارتباط الإحصائي والسببية الحقيقية لمنع الاستنتاجات الزائفة.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onOpenTest('pearson-spearman-correlation')}
                className="text-xs font-semibold text-amber-600 dark:text-amber-400 hover:underline inline-flex items-center gap-1"
              >
                <span>اختبار معاملات الارتباط (10 أسئلة)</span>
                <ArrowLeft className="w-3 h-3" />
              </button>
            </div>
          </div>

          <div className={`p-4 rounded-xl border ${themeClasses.border} bg-black/[0.01] dark:bg-white/[0.01] space-y-2`}>
            <div className="flex items-center justify-between">
              <h3 className={`text-sm font-bold ${themeClasses.textPrimary}`}>
                الانحدار الخطي البسيط بالمربعات الصغرى
              </h3>
              <span className="text-xs font-mono text-amber-600 dark:text-amber-400">
                ŷ = b₀ + b₁x
              </span>
            </div>
            <p className={`text-xs ${themeClasses.textSecondary} leading-relaxed`}>
              صياغة دالة التنبؤ بتقليل مجموع مربعات البواقي ∑e²، وتفسير ميل الخط والمقطع الصادي، وتجنب مخاطر الاستقراء الخارجي.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onOpenTest('linear-regression-prediction')}
                className="text-xs font-semibold text-amber-600 dark:text-amber-400 hover:underline inline-flex items-center gap-1"
              >
                <span>اختبار الانحدار والتنبؤ (10 أسئلة)</span>
                <ArrowLeft className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Categorical, Time & Critical Analysis */}
      <section className="space-y-4">
        <h2 className={`text-lg sm:text-xl font-bold ${themeClasses.textPrimary} flex items-center gap-2`}>
          <span className="text-amber-600 dark:text-amber-400">4.</span>
          البيانات الفئوية، السلاسل الزمنية، والتفكير النقدي
        </h2>
        <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
          تكتمل المهارة التحليلية بالقدرة على التعامل مع الجداول التوافقية واختبارات كاي تربيع، وتفكيك مركبات الزمن، وكشف التضليل البياني:
        </p>

        <div className="space-y-3">
          <div className={`p-4 rounded-xl border ${themeClasses.border} bg-black/[0.01] dark:bg-white/[0.01] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3`}>
            <div>
              <h4 className={`text-sm font-bold ${themeClasses.textPrimary}`}>
                اختبار كاي تربيع للاستقلال (Chi-Square χ²)
              </h4>
              <p className={`text-xs ${themeClasses.textSecondary} mt-1`}>
                مقارنة التكرارات الملاحظة بالمتوقعة χ² = ∑[(O-E)²/E] بدرجات حرية df = (r-1)(c-1) لاختبار دلالة الارتباط بين المتغيرات الفئوية.
              </p>
            </div>
            <button
              onClick={() => onOpenTest('chi-square-independence-test')}
              className="shrink-0 px-3 py-1.5 rounded-lg text-xs font-bold bg-amber-500/10 text-amber-700 dark:text-amber-300 hover:bg-amber-500/20 transition-colors"
            >
              اختبار كاي تربيع
            </button>
          </div>

          <div className={`p-4 rounded-xl border ${themeClasses.border} bg-black/[0.01] dark:bg-white/[0.01] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3`}>
            <div>
              <h4 className={`text-sm font-bold ${themeClasses.textPrimary}`}>
                تحليل السلاسل الزمنية وتنعيم البيانات
              </h4>
              <p className={`text-xs ${themeClasses.textSecondary} mt-1`}>
                تفكيك المركبات (الاتجاه العام T، الموسمية S، الدورية C، والعشوائية I) وتطبيق المتوسطات المتحركة والتفرقة للسكونية.
              </p>
            </div>
            <button
              onClick={() => onOpenTest('time-series-trend-analysis')}
              className="shrink-0 px-3 py-1.5 rounded-lg text-xs font-bold bg-amber-500/10 text-amber-700 dark:text-amber-300 hover:bg-amber-500/20 transition-colors"
            >
              اختبار السلاسل الزمنية
            </button>
          </div>

          <div className={`p-4 rounded-xl border ${themeClasses.border} bg-black/[0.01] dark:bg-white/[0.01] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3`}>
            <div>
              <h4 className={`text-sm font-bold ${themeClasses.textPrimary}`}>
                اكتشاف الرسوم المضللة ومغالطات التلاعب البياني
              </h4>
              <p className={`text-xs ${themeClasses.textSecondary} mt-1`}>
                كشف بتر المحور الصادي (Truncated Axis)، وتشويه الأبعاد الهندسية، وتحيز البقاء (Survivorship Bias)، وانتقاء الفترات المنحاز.
              </p>
            </div>
            <button
              onClick={() => onOpenTest('detecting-bias-misleading-graphs')}
              className="shrink-0 px-3 py-1.5 rounded-lg text-xs font-bold bg-amber-500/10 text-amber-700 dark:text-amber-300 hover:bg-amber-500/20 transition-colors"
            >
              اختبار كشف التضليل
            </button>
          </div>
        </div>
      </section>

      {/* Section 5: All 12 Tests Overview */}
      <section className="space-y-4 pt-2">
        <div className="flex items-center justify-between border-b border-black/5 dark:border-white/5 pb-3">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-amber-500" />
            <h3 className={`text-base font-bold ${themeClasses.textPrimary}`}>
              منظومة اختبارات تحليل البيانات التفاعلية (12 اختباراً معيارياً)
            </h3>
          </div>
          <span className={`text-xs ${themeClasses.textSecondary}`}>
            120 سؤالاً مع شروحات أكاديمية تفصيلية
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {[
            { id: 'data-collection-sampling-methods', title: '1. جمع البيانات وطرق المعاينة', emoji: '', formula: 'k = N / n' },
            { id: 'data-visualization-charts', title: '2. التمثيل البياني للبيانات', emoji: '', formula: 'θ = % × 360°' },
            { id: 'frequency-tables-histograms', title: '3. الجداول والمدرجات التكرارية', emoji: '', formula: 'm = (L + U) / 2' },
            { id: 'dispersion-variability-analysis', title: '4. تحليل التشتت ومقارنة المجموعات', emoji: '', formula: 'CV = (s/x̄)·100%' },
            { id: 'pearson-spearman-correlation', title: '5. معامل ارتباط بيرسون وسبيرمان', emoji: '', formula: '-1 ≤ r ≤ +1' },
            { id: 'linear-regression-prediction', title: '6. الانحدار الخطي وخط التنبؤ', emoji: '', formula: 'ŷ = b₀ + b₁x' },
            { id: 'two-way-contingency-tables', title: '7. جداول التوافق ثنائية الاتجاه', emoji: '', formula: 'P(A|B) = n(AB)/n(B)' },
            { id: 'time-series-trend-analysis', title: '8. تحليل السلاسل الزمنية', emoji: '', formula: 'Y = T + S + C + I' },
            { id: 'chi-square-independence-test', title: '9. اختبار كاي تربيع للاستقلال', emoji: '', formula: 'χ² = ∑[(O-E)²/E]' },
            { id: 'dashboards-kpis-interpretation', title: '10. قراءة لوحات المعلومات و KPIs', emoji: '', formula: 'KPI = (Act/Tgt)·100%' },
            { id: 'detecting-bias-misleading-graphs', title: '11. اكتشاف التحيز والرسوم المضللة', emoji: '', formula: 'Scale ≠ 0 ⟹ Distortion' },
            { id: 'data-analysis-word-problems', title: '12. المسائل الكلامية والتطبيقية', emoji: '', formula: 'E(X) = n · p' },
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
        تحليل البيانات هو الفن الذي يحول الأرقام إلى حكمة؛ فبين جمع العينات النزيه والتفسير النقدي الواعي تُبنى أعظم الاستراتيجيات وتُتخذ أصدق القرارات.
      </footer>
    </article>
  );
};
