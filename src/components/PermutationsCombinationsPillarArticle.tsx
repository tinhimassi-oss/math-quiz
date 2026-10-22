import React from 'react';
import { BookOpen, Sparkles, Award, ArrowLeft, CheckCircle2, Sigma, Activity, BarChart3, HelpCircle, Layers, Compass, Target, Hash, Shuffle, RotateCcw } from 'lucide-react';
import { useEyeTheme } from '../context/ThemeContext';

interface PermutationsCombinationsPillarArticleProps {
  onOpenTest: (testId: string) => void;
}

export const PermutationsCombinationsPillarArticle: React.FC<PermutationsCombinationsPillarArticleProps> = ({
  onOpenTest,
}) => {
  const { themeClasses } = useEyeTheme();

  return (
    <article
      className={`rounded-2xl border ${themeClasses.border} ${themeClasses.cardBg} p-6 sm:p-10 shadow-sm transition-all text-right space-y-8 leading-relaxed`}
    >
      {/* Header Banner */}
      <div className="border-b border-black/5 dark:border-white/5 pb-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border border-indigo-500/20 mb-3">
          <BookOpen className="w-4 h-4" />
          المقالة المرجعية الشاملة · بوابة علم التوافقيات والتباديل والتوافيق
        </div>
        <h1 className={`text-2xl sm:text-3xl font-extrabold ${themeClasses.textPrimary}`}>
          الدليل الأكاديمي الشامل لعلم التوافقيات (Combinatorics): من مبادئ العد والمضروب إلى التباديل والتوافيق ونظرية ذات الحدين
        </h1>
        <p className={`text-sm sm:text-base ${themeClasses.textSecondary} mt-3 leading-relaxed`}>
          استكشاف نظري وتطبيقي معمق لقوانين العد المنظم، التباديل الخطية والدائرية، التوافيق وخواص التناظر،
          متطابقة ومثلث باسكال، نظرية ذات الحدين، مبدأ الشمول والاستبعاد، ومبدأ برج الحمام مع تطبيقات برمجية وهندسية وحياتية.
        </p>
      </div>

      {/* Section 1: Historical Roots */}
      <section className="space-y-3">
        <h2 className={`text-lg sm:text-xl font-bold ${themeClasses.textPrimary} flex items-center gap-2`}>
          <span className="text-indigo-600 dark:text-indigo-400">1.</span>
          الجذور التاريخية لعلم التوافقيات: إسهامات الخليل بن أحمد وبلايز باسكال
        </h2>
        <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
          يُعد علم التوافقيات (Combinatorics) فرعاً أصيلاً من فروع الرياضيات المتقطعة التي تعنى بدراسة المجموعات المنتهية وترتيباتها واختياراتها الممكنة. تاريخياً، كانت البداية المنهجية الموثقة لعلم التباديل والتوافيق في الحضارة العربية الإسلامية على يد العالم الفذ الخليل بن أحمد الفراهيدي (ت 170هـ / 786م) في معجمه الرائد "العين"؛ حيث سعى إلى حصر الكلمات العربية الممكنة ثنائية وثلاثية ورباعية وخماسية، مبتكراً بذلك الحساب التوافقي للمضروب !n قبل أوروبا بقرون.
        </p>
        <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
          وتتابع العلماء المسلمون مثل ابن البناء المراكشي وأحمد بن منعم العبدري الذي وضع جداول مطابقة لمثلث باسكال في كتابه "فقه الحساب". وفي القرن السابع عشر في أوروبا، طور بلايز باسكال وبيير دي فيرما وكريستيان هيجنز هذه المفاهيم في دراسة احتمالات الألعاب، حتى صاغ ليونارد أويلر وإسحاق نيوتن الصيغ التحليلية الجبرية لنظرية ذات الحدين والمولدات التوافقية (Generating Functions).
        </p>
      </section>

      {/* Section 2: Fundamental Counting Principle & Factorials */}
      <section className="space-y-4">
        <h2 className={`text-lg sm:text-xl font-bold ${themeClasses.textPrimary} flex items-center gap-2`}>
          <span className="text-indigo-600 dark:text-indigo-400">2.</span>
          اللبنة الأولى: مبدأ العد الأساسي ودالة المضروب (Factorial)
        </h2>
        <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
          يبدأ كل تفكير توافقي سليم بتقدير حجم الفضاء الكلي عبر مبدأين بديهيين:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-3">
          <div className={`p-4 rounded-xl border ${themeClasses.border} bg-black/[0.01] dark:bg-white/[0.01]`}>
            <h3 className={`text-sm font-bold ${themeClasses.textPrimary} mb-1.5 flex items-center gap-1.5`}>
              <CheckCircle2 className="w-4 h-4 text-indigo-500" />
              قاعدة الضرب (Multiplication Rule)
            </h3>
            <p className={`text-xs ${themeClasses.textSecondary} leading-relaxed`}>
              إذا أمكن أداء إجراء من k خطوات متتالية بـ n₁ ثم n₂ ... إلى nₖ طريقة، فإن عدد الطرق الإجمالية لإتمام المهمة هو N = n₁ × n₂ × ... × nₖ. يُطبق عند اقتران المهام بالواو ("و").
            </p>
          </div>

          <div className={`p-4 rounded-xl border ${themeClasses.border} bg-black/[0.01] dark:bg-white/[0.01]`}>
            <h3 className={`text-sm font-bold ${themeClasses.textPrimary} mb-1.5 flex items-center gap-1.5`}>
              <CheckCircle2 className="w-4 h-4 text-indigo-500" />
              دالة المضروب (Factorial Notation)
            </h3>
            <p className={`text-xs ${themeClasses.textSecondary} leading-relaxed`}>
              لأي عدد صحيح طبيعي n، يُعرف المضروب بالضرب التنازلي: n! = n × (n - 1) × ... × 1، مع القاعدة الجوهرية 0! = 1، وهو ما يمثل عدد طرق ترتيب n من العناصر في صف.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 pt-1">
          <button
            onClick={() => onOpenTest('fundamental-counting-principle')}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-500/20 transition-all border border-indigo-500/20"
          >
            <span>اختبار مبدأ العد الأساسي</span>
            <ArrowLeft className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => onOpenTest('factorial-operations')}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-500/20 transition-all border border-indigo-500/20"
          >
            <span>اختبار دالة المضروب والعمليات</span>
            <ArrowLeft className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>

      {/* Section 3: Permutations (Linear, Partial, Repetition, Circular) */}
      <section className="space-y-4">
        <h2 className={`text-lg sm:text-xl font-bold ${themeClasses.textPrimary} flex items-center gap-2`}>
          <span className="text-indigo-600 dark:text-indigo-400">3.</span>
          عالم التباديل (Permutations): عندما يكون الترتيب والموقع جوهريين
        </h2>
        <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
          التبديل هو ترتيب لعناصر متمايزة في نسق محدد. ينقسم التبديل في الرياضيات إلى أربعة أنماط هيكلية رئيسية:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 my-3">
          <div className={`p-3.5 rounded-xl border ${themeClasses.border} bg-black/[0.01] dark:bg-white/[0.01]`}>
            <div className="text-lg mb-1"></div>
            <h4 className={`text-xs font-bold ${themeClasses.textPrimary}`}>التباديل الخطية الكاملة</h4>
            <p className="text-[11px] font-mono text-indigo-600 dark:text-indigo-400 font-bold mt-0.5">P(n, n) = n!</p>
            <p className={`text-[11px] ${themeClasses.textSecondary} mt-1 leading-snug`}>
              ترتيب جميع العناصر المتمايزة في خط مستقيم مثل ترتيب الكتب أو طابور الأشخاص.
            </p>
          </div>

          <div className={`p-3.5 rounded-xl border ${themeClasses.border} bg-black/[0.01] dark:bg-white/[0.01]`}>
            <div className="text-lg mb-1"></div>
            <h4 className={`text-xs font-bold ${themeClasses.textPrimary}`}>التباديل الجزئية المشروطة</h4>
            <p className="text-[11px] font-mono text-indigo-600 dark:text-indigo-400 font-bold mt-0.5">P(n, r) = n! / (n - r)!</p>
            <p className={`text-[11px] ${themeClasses.textSecondary} mt-1 leading-snug`}>
              اختيار وترتيب r من العناصر من بين n مثل المراكز الأولى في السباقات وتعيين المناصب الإدارية.
            </p>
          </div>

          <div className={`p-3.5 rounded-xl border ${themeClasses.border} bg-black/[0.01] dark:bg-white/[0.01]`}>
            <div className="text-lg mb-1"></div>
            <h4 className={`text-xs font-bold ${themeClasses.textPrimary}`}>التباديل مع التكرار</h4>
            <p className="text-[11px] font-mono text-indigo-600 dark:text-indigo-400 font-bold mt-0.5">n! / (n₁! × n₂! ...)</p>
            <p className={`text-[11px] ${themeClasses.textSecondary} mt-1 leading-snug`}>
              ترتيب عناصر تحوي تكرارات كحروف الكلمات (مثل "سلسلة") والأعلام المتشابهة.
            </p>
          </div>

          <div className={`p-3.5 rounded-xl border ${themeClasses.border} bg-black/[0.01] dark:bg-white/[0.01]`}>
            <div className="text-lg mb-1"></div>
            <h4 className={`text-xs font-bold ${themeClasses.textPrimary}`}>التباديل الدائرية</h4>
            <p className="text-[11px] font-mono text-indigo-600 dark:text-indigo-400 font-bold mt-0.5">P_c = (n - 1)!</p>
            <p className={`text-[11px] ${themeClasses.textSecondary} mt-1 leading-snug`}>
              ترتيب حول حلقة أو طاولة مستديرة؛ وتقسم على 2 في الأساور والقلائد القابلة للقلب.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 pt-1">
          <button
            onClick={() => onOpenTest('linear-permutations')}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-500/20 transition-all border border-indigo-500/20"
          >
            <span>اختبار التباديل الخطية</span>
            <ArrowLeft className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => onOpenTest('partial-permutations')}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-500/20 transition-all border border-indigo-500/20"
          >
            <span>اختبار التباديل الجزئية P(n, r)</span>
            <ArrowLeft className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => onOpenTest('permutations-with-repetition')}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-500/20 transition-all border border-indigo-500/20"
          >
            <span>اختبار التباديل مع التكرار</span>
            <ArrowLeft className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => onOpenTest('circular-permutations')}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-500/20 transition-all border border-indigo-500/20"
          >
            <span>اختبار التباديل الدائرية</span>
            <ArrowLeft className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>

      {/* Section 4: Combinations & Symmetry Properties */}
      <section className="space-y-4">
        <h2 className={`text-lg sm:text-xl font-bold ${themeClasses.textPrimary} flex items-center gap-2`}>
          <span className="text-indigo-600 dark:text-indigo-400">4.</span>
          فلسفة التوافيق (Combinations) وخاصية التناظر ومتطابقة باسكال
        </h2>
        <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
          التوافيق C(n, r) تمثل عدد طرق اختيار مجموعة جزئية من r من العناصر دون أي اعتبار للترتيب. رياضياً، تنتج التوافيق بقسمة التباديل الجزئية على r! لإلغاء جميع التباديل الداخلية للعناصر المختارة:
        </p>

        <div className={`p-4 rounded-xl border ${themeClasses.border} bg-indigo-500/[0.03] dark:bg-indigo-500/[0.05] space-y-2`}>
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-indigo-700 dark:text-indigo-300">الصيغة العامة والعلاقة الرابطة:</span>
            <span className="text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400">C(n, r) = n! / [r! (n - r)!] = P(n, r) / r!</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-2 text-xs">
            <div className={`p-2.5 rounded-lg border ${themeClasses.border} bg-white dark:bg-neutral-900`}>
              <span className="font-bold block text-indigo-600 dark:text-indigo-400">خاصية التناظر:</span>
              <span className="font-mono text-[11px]">C(n, r) = C(n, n - r)</span>
              <p className={`text-[10px] ${themeClasses.textSecondary} mt-0.5`}>اختيار r عنصر يكافئ استبعاد (n - r) عنصر متبقٍ.</p>
            </div>
            <div className={`p-2.5 rounded-lg border ${themeClasses.border} bg-white dark:bg-neutral-900`}>
              <span className="font-bold block text-indigo-600 dark:text-indigo-400">متطابقة باسكال:</span>
              <span className="font-mono text-[11px]">C(n, r) + C(n, r-1) = C(n+1, r)</span>
              <p className={`text-[10px] ${themeClasses.textSecondary} mt-0.5`}>الأساس الحسابي لتوليد أرقام مثلث باسكال التوافقي.</p>
            </div>
            <div className={`p-2.5 rounded-lg border ${themeClasses.border} bg-white dark:bg-neutral-900`}>
              <span className="font-bold block text-indigo-600 dark:text-indigo-400">مجموع القوة (Power Set):</span>
              <span className="font-mono text-[11px]">∑ C(n, k) = 2ⁿ</span>
              <p className={`text-[10px] ${themeClasses.textSecondary} mt-0.5`}>إجمالي عدد المجموعات الجزئية الممكنة لمجموعة من n عنصر.</p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 pt-1">
          <button
            onClick={() => onOpenTest('combinations-fundamentals')}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-500/20 transition-all border border-indigo-500/20"
          >
            <span>اختبار مفهوم التوافيق وتشكيل اللجان</span>
            <ArrowLeft className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => onOpenTest('permutations-vs-combinations')}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-500/20 transition-all border border-indigo-500/20"
          >
            <span>اختبار التمييز بين التباديل والتوافيق</span>
            <ArrowLeft className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => onOpenTest('combinations-properties-symmetry')}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-500/20 transition-all border border-indigo-500/20"
          >
            <span>اختبار خواص التوافيق والتناظر</span>
            <ArrowLeft className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>

      {/* Section 5: Binomial Theorem, Inclusion-Exclusion & Advanced Modeling */}
      <section className="space-y-4">
        <h2 className={`text-lg sm:text-xl font-bold ${themeClasses.textPrimary} flex items-center gap-2`}>
          <span className="text-indigo-600 dark:text-indigo-400">5.</span>
          المفاهيم المتقدمة: نظرية ذات الحدين، مبدأ الشمول والاستبعاد، وبرج الحمام
        </h2>
        <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
          تصل التوافقيات إلى ذروة قوتها التحليلية في الأدوات المتقدمة التي تحل المسائل المتشابكة:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 my-3">
          <div className={`p-4 rounded-xl border ${themeClasses.border} bg-black/[0.01] dark:bg-white/[0.01]`}>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-lg">▲</span>
              <h4 className={`text-xs font-bold ${themeClasses.textPrimary}`}>نظرية ذات الحدين</h4>
            </div>
            <p className={`text-xs ${themeClasses.textSecondary} leading-relaxed`}>
              فك المقادير المرفوعة لقوى صحيحة (a + b)ⁿ باستخدام قانون الحد العام T_(r+1) = C(n, r) aⁿ⁻ʳ bʳ وتطبيقات مثلث باسكال في حساب المعاملات.
            </p>
          </div>

          <div className={`p-4 rounded-xl border ${themeClasses.border} bg-black/[0.01] dark:bg-white/[0.01]`}>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-lg"></span>
              <h4 className={`text-xs font-bold ${themeClasses.textPrimary}`}>الشمول والاستبعاد وبرج الحمام</h4>
            </div>
            <p className={`text-xs ${themeClasses.textSecondary} leading-relaxed`}>
              منع الحساب المزدوج بطرح المشترك في المجموعات المتداخلة |A ∪ B| = |A| + |B| - |A ∩ B| والبرهان الحتمي لتوزيع العناصر على الخانات n &gt; m.
            </p>
          </div>

          <div className={`p-4 rounded-xl border ${themeClasses.border} bg-black/[0.01] dark:bg-white/[0.01]`}>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-lg"></span>
              <h4 className={`text-xs font-bold ${themeClasses.textPrimary}`}>المسائل اللفظية المركبة</h4>
            </div>
            <p className={`text-xs ${themeClasses.textSecondary} leading-relaxed`}>
              استراتيجيات تفكيك مسائل "على الأقل" و"على الأكثر"، حالات الرفض والمشاركة المشروطة وتوزيع الجوائز المتماثلة والمتمايزة في الواقع.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 pt-1">
          <button
            onClick={() => onOpenTest('binomial-theorem-pascals-triangle')}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-500/20 transition-all border border-indigo-500/20"
          >
            <span>اختبار نظرية ذات الحدين</span>
            <ArrowLeft className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => onOpenTest('inclusion-exclusion-pigeonhole')}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-500/20 transition-all border border-indigo-500/20"
          >
            <span>اختبار الشمول والاستبعاد وبرج الحمام</span>
            <ArrowLeft className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => onOpenTest('applied-combinatorics-word-problems')}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-500/20 transition-all border border-indigo-500/20"
          >
            <span>اختبار المسائل الكلامية والتطبيقية</span>
            <ArrowLeft className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>

      {/* Summary Footer */}
      <div className={`mt-8 p-4 rounded-xl border ${themeClasses.border} bg-black/[0.01] dark:bg-white/[0.01] flex items-start gap-3`}>
        <Award className="w-5 h-5 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
        <p className={`text-xs ${themeClasses.textSecondary} leading-relaxed`}>
          <strong className={themeClasses.textPrimary}>خلاصة منهجية:</strong>{' '}
          إتقان التباديل والتوافيق يتطلب التحقق من شرطين رئيسيين في أي مسألة: هل الترتيب مهم؟ وهل التكرار مسموح؟
          بالإجابة عن هذين السؤالين يتحدد القانون الرياضي المناسب وتتحول أكثر المشكلات تعقيداً إلى خطوات حسابية واضحة ومباشرة.
        </p>
      </div>
    </article>
  );
};
