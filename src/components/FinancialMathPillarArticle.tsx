import React from 'react';
import {
  BookOpen,
  Sparkles,
  Award,
  ArrowLeft,
  CheckCircle2,
  TrendingUp,
  DollarSign,
  PieChart,
  Percent,
  Clock,
  ShieldCheck,
  Scale,
  Briefcase,
  Layers,
} from 'lucide-react';
import { useEyeTheme } from '../context/ThemeContext';

interface FinancialMathPillarArticleProps {
  onOpenTest: (testId: string) => void;
}

export const FinancialMathPillarArticle: React.FC<FinancialMathPillarArticleProps> = ({
  onOpenTest,
}) => {
  const { themeClasses } = useEyeTheme();

  return (
    <article
      className={`rounded-2xl border ${themeClasses.border} ${themeClasses.cardBg} p-6 sm:p-10 shadow-sm transition-all text-right space-y-8 leading-relaxed`}
    >
      {/* Header Banner */}
      <div className="border-b border-black/5 dark:border-white/5 pb-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20 mb-3">
          <BookOpen className="w-4 h-4" />
          المقالة المرجعية الكبرى · موسوعة الرياضيات المالية والنمذجة الاستثمارية
        </div>
        <h1 className={`text-2xl sm:text-3xl font-extrabold ${themeClasses.textPrimary}`}>
          الدليل الأكاديمي الشامل للرياضيات المالية: من القيمة الزمنية للنقود والفوائد المركبة إلى تقييم السندات وهندسة المشتقات وإدارة المخاطر
        </h1>
        <p className={`text-sm sm:text-base ${themeClasses.textSecondary} mt-3 leading-relaxed`}>
          الرياضيات المالية (Financial Mathematics) هي الجسر العلمي الدقيق الذي يربط بين البناء الرياضي المجرد وقوانين أسواق المال
          والاستثمار وإدارة الثروات. لا تقتصر هذه المادة على مجرد حساب نسب أرباح رتيبة، بل تمثل منظومة كمية متكاملة لتقييم التدفقات النقدية
          عبر الزمن، وإدارة مخاطر السيولة، وحساب تكلفة رأس المال، وهيكلة محافظ الاستثمار، وصنع القرار الاستراتيجي في الشركات
          والمؤسسات المصرفية والأسواق العالمية.
        </p>
      </div>

      {/* Section 1 */}
      <section className="space-y-3">
        <h2 className={`text-lg sm:text-xl font-bold ${themeClasses.textPrimary} flex items-center gap-2`}>
          <span className="text-emerald-600 dark:text-emerald-400">1.</span>
          القيمة الزمنية للنقود (Time Value of Money - TVM): حجر الزاوية في الاقتصاد
        </h2>
        <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
          المبدأ الجوهري الأول الذي ترتكز عليه المالية الحديثة هو أن "الريال أو الدولار اليوم يساوي أكثر من ريال أو دولار في المستقبل".
          يعود هذا المبدأ إلى ثلاثة عوامل حاسمة: تكلفة الفرصة البديلة (Opportunity Cost) حيث يمكن استثمار المال الحاضر لتوليد عوائد إضافية،
          ومخاطر عدم اليقين والتخلف عن السداد (Credit Risk)، وأثر التضخم (Inflation) الذي يتآكل معه حجم القوة الشرائية لوحدات النقد عبر الزمن.
        </p>
        <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
          رياضياً، تتجلى هذه العلاقة في صيغتي الفائدة البسيطة والفائدة المركبة. ففي حين تحسب الفائدة البسيطة وفق المعادلة الخطية
          <span className="font-mono px-2 py-0.5 bg-gray-100 dark:bg-gray-800 rounded mx-1 text-emerald-600">I = P · r · t</span>
          حيث يتولد العائد فقط على أصل المبلغ المودع، تفجر الفائدة المركبة نمواً أسياً عبر المعادلة
          <span className="font-mono px-2 py-0.5 bg-gray-100 dark:bg-gray-800 rounded mx-1 text-emerald-600">FV = PV · (1 + r/n)ⁿᵗ</span>،
          حيث تصبح الأرباح ذاتها رأس مال جديداً يولد عوائد تراكمية متسارعة، وهو ما وصفه ألبرت أينشتاين مجازاً بأنه "الأعجوبة الثامنة في العالم".
        </p>
      </section>

      {/* Section 2 */}
      <section className="space-y-3">
        <h2 className={`text-lg sm:text-xl font-bold ${themeClasses.textPrimary} flex items-center gap-2`}>
          <span className="text-emerald-600 dark:text-emerald-400">2.</span>
          الخصم والقيمة الحالية ومعدلات الفائدة الاسمية والفعالة
        </h2>
        <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
          تعد عملية الخصم (Discounting) المعكوس الرياضي المباشر لعملية التركيب. فإذا أردت معرفة القيمة الحالية (Present Value) لتدفق
          نقدي مستقبلي، نقوم بقسمة المبلغ المستقبلي على معامل الخصم التراكمي
          <span className="font-mono px-2 py-0.5 bg-gray-100 dark:bg-gray-800 rounded mx-1 text-emerald-600">PV = FV / (1 + r)ᵗ</span>.
          وهذا هو الأساس الذي تُبنى عليه كافة نماذج تسعير الأصول الرأسمالية والشركات في البورصات العالمية.
        </p>
        <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
          وعندما تتعدد فترات التركيب خلال العام (شهرياً، ربع سنوي، أو يومياً)، ينشأ فرق جوهري بين معدل الفائدة الاسمي (Nominal Rate)
          ومعدل الفائدة الفعال السنوي (Effective Annual Rate - EAR). يمنحنا قانون EAR المقارنة العادلة والشفافة بين أدوات التمويل المصرفي:
          <span className="font-mono px-2 py-0.5 bg-gray-100 dark:bg-gray-800 rounded mx-1 text-emerald-600">EAR = (1 + r/m)ᵐ - 1</span>.
          وعندما يقترب تردد التركيب من اللانهاية (التركيب المستمر)، يتحول الأساس إلى العدد النيبيري <span className="font-mono text-emerald-600">e</span> لتصبح
          <span className="font-mono px-2 py-0.5 bg-gray-100 dark:bg-gray-800 rounded mx-1 text-emerald-600">FV = PV · eʳᵗ</span>.
        </p>
      </section>

      {/* Section 3 */}
      <section className="space-y-3">
        <h2 className={`text-lg sm:text-xl font-bold ${themeClasses.textPrimary} flex items-center gap-2`}>
          <span className="text-emerald-600 dark:text-emerald-400">3.</span>
          الدفعات المالية (Annuities) واستهلاك القروض (Amortization)
        </h2>
        <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
          في الحياة المعاصرة، لا تقتصر المعاملات على دفعة واحدة مفردة، بل تأتي أغلب الالتزامات كتدفقات متساوية دورية (دفعات مالية - Annuities).
          نميز بين الدفعة العادية (Ordinary Annuity) التي تُدفع في نهاية كل فترة دورية، والدفعة المستحقة (Annuity Due) التي تُدفع في مطلع الفترة.
          تحتسب القيمة المستقبلية للدفعة العادية عبر مجموع متتالية هندسية متقاربة:
          <span className="font-mono px-2 py-0.5 bg-gray-100 dark:bg-gray-800 rounded mx-1 text-emerald-600">FVA = PMT · [((1+i)ⁿ - 1) / i]</span>.
        </p>
        <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
          أما في التمويل العقاري والقروض الشخصية، فإن جدول الاستهلاك (Amortization Schedule) يُعد تحفة رياضية تمزج بين الفائدة المتناقصة
          وأصل الدين المتزايد. فرغم أن القسط الإجمالي يظل ثابتاً طوال سنوات القرض، إلا أن الجزء المخصص لسداد الفائدة ينخفض شهراً بعد شهر
          بسبب تراجع رصيد القرض المتبقي، بينما يتصاعد الجزء الموجه لإطفاء أصل الدين تلقائياً حتى يصفر القرض بالكامل في اليوم الأخير.
        </p>
      </section>

      {/* Section 4 */}
      <section className="space-y-3">
        <h2 className={`text-lg sm:text-xl font-bold ${themeClasses.textPrimary} flex items-center gap-2`}>
          <span className="text-emerald-600 dark:text-emerald-400">4.</span>
          تقييم السندات وأوراق الدخل الثابت والموازنة الرأسمالية (NPV & IRR)
        </h2>
        <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
          يستند تسعير السندات (Bonds) إلى خصم سلسلة الكوبونات الدورية بالإضافة إلى خصم القيمة الاسمية المستحقة في نهاية أجل السند (Face Value)
          بمعدل عائد الاستحقاق السائد في السوق (Yield to Maturity - YTM). تنشأ هنا العلاقة العكسية الشهيرة: حين ترتفع أسعار الفائدة في السوق،
          تنخفض أسعار السندات القائمة فوراً لتعويض المستثمر عن انخفاض كوبون السند مقارنة بالبدائل المتاحة.
        </p>
        <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
          وفي دراسات الجدوى والموازنة الرأسمالية للمشاريع، يتربع معيار صافي القيمة الحالية
          <span className="font-mono px-2 py-0.5 bg-gray-100 dark:bg-gray-800 rounded mx-1 text-emerald-600">NPV = ∑ [CF_t / (1+r)ᵗ] - C₀</span>
          على عرش المعايير المالية؛ فإذا كان NPV إيجابياً، يخلق المشروع قيمة اقتصادية حقيقية للمساهمين. كما يُحسب معدل العائد الداخلي (IRR)
          كنقطة التعادل التي تجعل NPV مساوياً للصفر تماماً.
        </p>
      </section>

      {/* Section 5 */}
      <section className="space-y-3">
        <h2 className={`text-lg sm:text-xl font-bold ${themeClasses.textPrimary} flex items-center gap-2`}>
          <span className="text-emerald-600 dark:text-emerald-400">5.</span>
          الإهلاك المحاسبي، التضخم، وهندسة المشتقات والخيارات المالية
        </h2>
        <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
          تكتمل المنظومة المالية بمناهج إهلاك الأصول الرأسمالية (طريقة القسط الثابت، الرصيد المتناقص المضاعف، ومجموع أرقام السنوات SYD)،
          والتي تلعب دوراً حاسماً في حساب التدفقات النقدية بعد الضريبة والدرع الضريبي للإهلاك (Tax Shield).
          كما توفر معادلة فيشر
          <span className="font-mono px-2 py-0.5 bg-gray-100 dark:bg-gray-800 rounded mx-1 text-emerald-600">(1 + R) = (1 + r)(1 + h)</span>
          الحماية للمستثمر من وهم الأرباح الاسمية، بربط العائد الاسمي بمعدل التضخم لاستخراج العائد الحقيقي الصافي.
        </p>
        <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
          وأخيراً في قمة الهرم المالي الحديث، تبرز عقود الخيارات والمشتقات المالية (Options & Derivatives)، حيث تُستخدم معادلات التكافؤ بين خياري
          الشراء والبيع (Put-Call Parity: C + K·e⁻ʳᵀ = P + S) ونماذج بلاك شولز للتحوط ضد تقلبات الأسعار وإدارة المخاطر في المحافظ المؤسسية الكبرى.
        </p>
      </section>

      {/* Grid of 12 tests */}
      <div className="pt-6 border-t border-black/5 dark:border-white/5">
        <h3 className={`text-base sm:text-lg font-bold ${themeClasses.textPrimary} mb-4 flex items-center gap-2`}>
          <Sparkles className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
          المسارات الاختبارية الاثنا عشر في الرياضيات المالية
        </h3>
        <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} mb-6 leading-relaxed`}>
          تم تصميم هذه الاختبارات الاثني عشر وفق منهجية تدريجية تفاعلية تحاكي اختبارات الشهادات المهنية الدولية (CFA، CMA، FRM)،
          يحتوي كل اختبار على 10 أسئلة تطبيقية دقيقة مع شروحات رياضية وتلميحات إرشادية ومقالة مرجعية متكاملة:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {[
            {
              id: 'simple-interest-total-amount',
              title: '1. الفائدة البسيطة والجملة',
              emoji: '',
              desc: 'حساب الفائدة والأصل والمعدل والمدة والجملة والتطبيقات التجارية البنكية',
              level: 'أساسي',
            },
            {
              id: 'compound-interest-future-value',
              title: '2. الفائدة المركبة والقيمة المستقبلية',
              emoji: '',
              desc: 'النمو التراكمي الأسي، فترات التركيب المتعددة، وقاعدة 72 للمضاعفة',
              level: 'أساسي',
            },
            {
              id: 'present-value-discounting',
              title: '3. القيمة الحالية والخصم',
              emoji: '',
              desc: 'معامل الخصم، القيمة الحالية للتدفقات، والفرق بين الخصم التجاري والصحيح',
              level: 'متوسط',
            },
            {
              id: 'nominal-effective-interest-rates',
              title: '4. معدلات الفائدة الاسمية والفعالة',
              emoji: '',
              desc: 'صيغ المقارنة البنكية العادلة، EAR، APY، ومفهوم الفائدة المركبة المستمرة',
              level: 'متوسط',
            },
            {
              id: 'annuities-ordinary-due',
              title: '5. الدفعات المالية العادية والمستحقة',
              emoji: '',
              desc: 'تراكم الأقساط الدورية، القيمة المستقبلية والحالية، وصناديق التقاعد',
              level: 'متوسط',
            },
            {
              id: 'loan-amortization-schedules',
              title: '6. استهلاك القروض وجداول السداد',
              emoji: '',
              desc: 'حساب القسط الدوري الثابت، جدول الاستهلاك، وتوزيع الفائدة والأصل',
              level: 'متوسط',
            },
            {
              id: 'bond-valuation-cash-flows',
              title: '7. تقييم السندات والتدفقات النقدية',
              emoji: '',
              desc: 'تسعير السندات بالقيمة الاسمية والعلاوة والخصم وعائد الاستحقاق YTM',
              level: 'متقدم',
            },
            {
              id: 'npv-irr-project-evaluation',
              title: '8. صافي القيمة الحالية وعائد الاستثمار',
              emoji: '',
              desc: 'معايير الموازنة الرأسمالية NPV و IRR ومؤشر الربحية ودراسات الجدوى',
              level: 'متقدم',
            },
            {
              id: 'financial-depreciation-methods',
              title: '9. طرق الإهلاك المالي للأصول',
              emoji: '',
              desc: 'طريقة القسط الثابت، القسط المتناقص، مجموع أرقام السنوات، والوفر الضريبي',
              level: 'متوسط',
            },
            {
              id: 'inflation-financial-ratios',
              title: '10. التضخم والنسب المالية',
              emoji: '',
              desc: 'معادلة فيشر، القوة الشرائية الحقيقية، ونسب السيولة والرافعة والربحية',
              level: 'متوسط',
            },
            {
              id: 'options-derivatives-valuation',
              title: '11. المشتقات وتسعير الخيارات',
              emoji: '',
              desc: 'عقود الخيارات، خيار الشراء والبيع، تكافؤ Put-Call، واستراتيجيات التحوط',
              level: 'متقدم',
            },
            {
              id: 'comprehensive-financial-word-problems',
              title: '12. مسائل كلامية وحالات استثمارية',
              emoji: '',
              desc: 'حالات واقعية تجمع خطط الاستثمار وسداد الديون والتدفقات المركبة',
              level: 'متقدم',
            },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => onOpenTest(item.id)}
              className={`p-3.5 rounded-xl border border-black/5 dark:border-white/5 hover:border-emerald-500/40 hover:bg-emerald-50/50 dark:hover:bg-emerald-950/20 transition-all text-right group flex flex-col justify-between cursor-pointer`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xl">{item.emoji}</span>
                  <span
                    className={`text-[10px] px-2 py-0.5 rounded font-semibold ${
                      item.level === 'أساسي'
                        ? 'bg-blue-500/10 text-blue-700 dark:text-blue-300'
                        : item.level === 'متوسط'
                        ? 'bg-amber-500/10 text-amber-700 dark:text-amber-300'
                        : 'bg-rose-500/10 text-rose-700 dark:text-rose-300'
                    }`}
                  >
                    {item.level}
                  </span>
                </div>
                <h4
                  className={`text-xs sm:text-sm font-bold ${themeClasses.textPrimary} group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors mb-1`}
                >
                  {item.title}
                </h4>
                <p className={`text-[11px] ${themeClasses.textSecondary} leading-relaxed`}>
                  {item.desc}
                </p>
              </div>
              <div className="mt-3 pt-2 border-t border-black/5 dark:border-white/5 flex items-center justify-end gap-1 text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold group-hover:translate-x-[-3px] transition-transform">
                ابدأ الاختبار الآن
                <ArrowLeft className="w-3.5 h-3.5" />
              </div>
            </button>
          ))}
        </div>
      </div>
    </article>
  );
};
