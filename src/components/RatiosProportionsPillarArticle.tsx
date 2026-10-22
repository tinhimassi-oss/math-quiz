import React from 'react';
import {
  BookOpen,
  Sparkles,
  TrendingUp,
  Lightbulb,
  CheckCircle2,
  Award,
  Layers,
  Scale,
  Compass,
  ArrowRight,
} from 'lucide-react';
import { useEyeTheme } from '../context/ThemeContext';
import { navigateTo } from '../navigation/router';

interface RatiosProportionsPillarArticleProps {
  onOpenTest?: (testId: string) => void;
  className?: string;
}

export const RatiosProportionsPillarArticle: React.FC<RatiosProportionsPillarArticleProps> = ({
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

  return (
    <article
      id="ratios-proportions-pillar-guide"
      className={`p-6 sm:p-10 rounded-2xl border ${themeClasses.border} ${themeClasses.cardBg} space-y-8 shadow-2xs leading-relaxed text-right ${className}`}
    >
      {/* Pillar Article Header */}
      <header className="space-y-3 pb-6 border-b border-black/[0.06] dark:border-white/[0.08]">
        <div className="flex items-center gap-2 text-xs font-bold text-[#127052] dark:text-[#5EB5A1]">
          <BookOpen className="w-4 h-4" />
          <span>المقالة المرجعية الشاملة (Pillar Guide) | أكاديمية كويزات الرياضيات</span>
        </div>

        <h2 className={`text-xl sm:text-3xl font-extrabold tracking-tight ${themeClasses.textPrimary}`}>
          الدليل المرجعي الشامل لعلم النسب والتناسب: من المقارنة الأولية ومعدل الوحدة حتى التطبيقات المالية والهندسية
        </h2>

        <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
          دليل تربوي ومنهجي مرجعي شامل يغطي ركائز <strong>النسب والتناسب (Ratios & Proportions)</strong>. يضم <strong>12 اختباراً تفاعلياً مستقلاً</strong> مصممة بعناية مع شروحات فورية وشهادات إتقان، تبدأ من فهم المقارنة البسيطة وتبسيط النسب، مروراً بالتناسب الطردي والعكسي ومقياس الرسم والتقسيم العادل، وصولاً إلى حساب الخصومات والأرباح والمسائل الكلامية المركبة.
        </p>

        {/* Quick Metadata Bar */}
        <div className="flex flex-wrap items-center gap-3 pt-2 text-[11px] text-slate-500 dark:text-slate-400">
          <span className="flex items-center gap-1">
            <Layers className="w-3.5 h-3.5 text-[#127052] dark:text-[#5EB5A1]" />
            12 اختباراً تفاعلياً فريداً
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Scale className="w-3.5 h-3.5 text-[#127052] dark:text-[#5EB5A1]" />
            شامل للأنماط الطردية والعكسية والمئوية
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Award className="w-3.5 h-3.5 text-[#127052] dark:text-[#5EB5A1]" />
            شروحات خطوة بخطوة وتغذية راجعة فورية
          </span>
        </div>
      </header>

      {/* Section 1: Core Concept of Ratios */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-[#3B7A6A]/10 text-[#127052] dark:text-[#5EB5A1]">
            <Sparkles className="w-5 h-5" />
          </div>
          <h3 className={`text-lg sm:text-xl font-bold ${themeClasses.textPrimary}`}>
            1. جوهر النسبة: لغة المقارنة بين المقادير
          </h3>
        </div>

        <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
          النسبة هي مقارنة رياضية بين كميتين أو أكثر تعبر عن علاقة تضاعفية وليست جمعية. عندما نقول إن نسبة الكرات الحمراء (3) إلى إجمالي الكرات (8) هي 3 : 8، فإننا نحدد الوزن النسبي للجزء مقارنة بالكل أو مقارنة بجزء آخر.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
          <div className={`p-4 rounded-xl border ${themeClasses.border} bg-black/[0.01] dark:bg-white/[0.01]`}>
            <div className="font-bold text-xs mb-1 text-[#127052] dark:text-[#5EB5A1]">صيغ التعبير الثلاث</div>
            <p className={`text-[11px] ${themeClasses.textMuted} leading-relaxed`}>
              النسبة يمكن كتابتها لفظياً (a إلى b)، أو برمز النقطتين (a : b)، أو على هيئة كسر اعتيادي (a / b)، وتخضع لجميع خواص الكسور من التبسيط والضرب.
            </p>
          </div>
          <div className={`p-4 rounded-xl border ${themeClasses.border} bg-black/[0.01] dark:bg-white/[0.01]`}>
            <div className="font-bold text-xs mb-1 text-[#127052] dark:text-[#5EB5A1]">أهمية الترتيب الصارم</div>
            <p className={`text-[11px] ${themeClasses.textMuted} leading-relaxed`}>
              مقدم النسبة (الحد الأول) وتالي النسبة (الحد الثاني) لا يمكن تبديلهما؛ فالنسبة 2 : 5 تعني شيئاً مختلفاً كلياً عن 5 : 2.
            </p>
          </div>
          <div className={`p-4 rounded-xl border ${themeClasses.border} bg-black/[0.01] dark:bg-white/[0.01]`}>
            <div className="font-bold text-xs mb-1 text-[#127052] dark:text-[#5EB5A1]">التبسيط بالقاسم المشترك</div>
            <p className={`text-[11px] ${themeClasses.textMuted} leading-relaxed`}>
              تبسيط النسبة إلى أصغر أعداد صحيحة ممكنة بقسمة الحدين على العامل المشترك الأكبر (ع.م.أ)، مثل تبسيط 12 : 18 إلى 2 : 3 بالقسمة على 6.
            </p>
          </div>
        </div>

        {/* Action Link to foundational tests */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <a
            href="#/math/ratios-proportions/understanding-representation"
            onClick={(e) => handleTestClick('/math/ratios-proportions/understanding-representation', 'ratio-understanding-representation', e)}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#127052] dark:text-[#5EB5A1] bg-[#3B7A6A]/10 hover:bg-[#3B7A6A]/20 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
          >
            <span>اختبار فهم النسب والتعبير عنها</span>
            <ArrowRight className="w-3.5 h-3.5 rotate-180" />
          </a>
          <a
            href="#/math/ratios-proportions/simplification-equivalence"
            onClick={(e) => handleTestClick('/math/ratios-proportions/simplification-equivalence', 'ratio-simplification-equivalence', e)}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#127052] dark:text-[#5EB5A1] bg-[#3B7A6A]/10 hover:bg-[#3B7A6A]/20 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
          >
            <span>اختبار تبسيط النسب والنسب المتكافئة</span>
            <ArrowRight className="w-3.5 h-3.5 rotate-180" />
          </a>
        </div>
      </section>

      {/* Section 2: Unit Rate and Proportions */}
      <section className="space-y-4 pt-4 border-t border-black/[0.04] dark:border-white/[0.06]">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-[#3B7A6A]/10 text-[#127052] dark:text-[#5EB5A1]">
            <TrendingUp className="w-5 h-5" />
          </div>
          <h3 className={`text-lg sm:text-xl font-bold ${themeClasses.textPrimary}`}>
            2. معدل الوحدة وحل التناسب (خاصية الضرب التبادلي)
          </h3>
        </div>

        <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
          عندما نقارن كميتين بوحدات قياس مختلفة، يُسمى ذلك <strong>معدلاً</strong>. وعندما نجعل المقام يساوي وحدة واحدة، يُصبح <strong>معدل الوحدة (Unit Rate)</strong> مثل سرعة السيارة (80 كم/ساعة) أو سعر الكيلوجرام. أما <strong>التناسب</strong> فهو تساوي نسبتين، وتحكمه القاعدة الأبرز في الرياضيات: <em>حاصل ضرب الطرفين يساوي حاصل ضرب الوسطين</em>.
        </p>

        <div className="p-4 rounded-xl border border-emerald-500/20 bg-emerald-50/40 dark:bg-emerald-950/20 text-xs sm:text-sm space-y-2">
          <div className="font-bold text-emerald-800 dark:text-emerald-300 flex items-center gap-2">
            <Lightbulb className="w-4 h-4" />
            <span>قاعدة المقص وحل المجهول: a / b = c / d</span>
          </div>
          <p className="text-emerald-900 dark:text-emerald-200 text-xs leading-relaxed">
            لإيجاد المجهول x في التناسب (2 / 5 = x / 20): نضرب الطرفين المتقابلين (2 × 20 = 40) ثم نقسم على العدد المقابل للمجهول (40 ÷ 5 = 8). هذه التقنية تحل 90% من المسائل الفيزيائية والهندسية اليومية.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <a
            href="#/math/ratios-proportions/unit-rate"
            onClick={(e) => handleTestClick('/math/ratios-proportions/unit-rate', 'unit-rate', e)}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#127052] dark:text-[#5EB5A1] bg-[#3B7A6A]/10 hover:bg-[#3B7A6A]/20 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
          >
            <span>اختبار معدل الوحدة (Unit Rate)</span>
            <ArrowRight className="w-3.5 h-3.5 rotate-180" />
          </a>
          <a
            href="#/math/ratios-proportions/solving-proportions-unknown"
            onClick={(e) => handleTestClick('/math/ratios-proportions/solving-proportions-unknown', 'solving-proportions-unknown', e)}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#127052] dark:text-[#5EB5A1] bg-[#3B7A6A]/10 hover:bg-[#3B7A6A]/20 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
          >
            <span>اختبار حل التناسب وإيجاد المجهول</span>
            <ArrowRight className="w-3.5 h-3.5 rotate-180" />
          </a>
        </div>
      </section>

      {/* Section 3: Direct vs Inverse Proportion */}
      <section className="space-y-4 pt-4 border-t border-black/[0.04] dark:border-white/[0.06]">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-[#3B7A6A]/10 text-[#127052] dark:text-[#5EB5A1]">
            <Scale className="w-5 h-5" />
          </div>
          <h3 className={`text-lg sm:text-xl font-bold ${themeClasses.textPrimary}`}>
            3. التناسب الطردي مقابل التناسب العكسي: كيف تفرق بينهما؟
          </h3>
        </div>

        <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
          التمييز بين التناسب الطردي والتناسب العكسي هو المعيار الحقيقي لذكاء الطالب الحسابي:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          <div className={`p-5 rounded-xl border ${themeClasses.border} bg-black/[0.01] dark:bg-white/[0.01] space-y-2`}>
            <div className="font-bold text-sm text-[#127052] dark:text-[#5EB5A1]">
               التناسب الطردي (Direct Proportion)
            </div>
            <p className={`text-xs ${themeClasses.textSecondary} leading-relaxed`}>
              العلاقة التي تزيد فيها كمية بزيادة الأخرى وتتناقص بنقصانها بنفس المعدل. حاصل قسمة الكميتين ثابت دائماً (y / x = k).
            </p>
            <div className={`text-[11px] p-2 rounded bg-black/[0.03] dark:bg-white/[0.03] ${themeClasses.textMuted}`}>
              مثال: سعر 4 أقلام هو 12 ريالاً، سعر 7 أقلام = 21 ريالاً (زيادة الأقلام يقابلها زيادة الثمن).
            </div>
          </div>

          <div className={`p-5 rounded-xl border ${themeClasses.border} bg-black/[0.01] dark:bg-white/[0.01] space-y-2`}>
            <div className="font-bold text-sm text-[#B45309] dark:text-[#FBBF24]">
               التناسب العكسي (Inverse Proportion)
            </div>
            <p className={`text-xs ${themeClasses.textSecondary} leading-relaxed`}>
              العلاقة التي تؤدي فيها زيادة متغير إلى تناقص المتغير الآخر. حاصل ضرب المتغيرين يظل ثابتاً دائماً (x · y = k).
            </p>
            <div className={`text-[11px] p-2 rounded bg-black/[0.03] dark:bg-white/[0.03] ${themeClasses.textMuted}`}>
              مثال: 4 عمال يبنون جداراً في 6 أيام، 8 عمال يحتاجون 3 أيام فقط (مضاعفة العمال تقلل زمن الإنجاز للنصف).
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <a
            href="#/math/ratios-proportions/direct-proportion"
            onClick={(e) => handleTestClick('/math/ratios-proportions/direct-proportion', 'direct-proportion', e)}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#127052] dark:text-[#5EB5A1] bg-[#3B7A6A]/10 hover:bg-[#3B7A6A]/20 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
          >
            <span>اختبار التناسب الطردي</span>
            <ArrowRight className="w-3.5 h-3.5 rotate-180" />
          </a>
          <a
            href="#/math/ratios-proportions/inverse-proportion"
            onClick={(e) => handleTestClick('/math/ratios-proportions/inverse-proportion', 'inverse-proportion', e)}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#127052] dark:text-[#5EB5A1] bg-[#3B7A6A]/10 hover:bg-[#3B7A6A]/20 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
          >
            <span>اختبار التناسب العكسي</span>
            <ArrowRight className="w-3.5 h-3.5 rotate-180" />
          </a>
        </div>
      </section>

      {/* Section 4: Scale Drawings and Proportional Division */}
      <section className="space-y-4 pt-4 border-t border-black/[0.04] dark:border-white/[0.06]">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-[#3B7A6A]/10 text-[#127052] dark:text-[#5EB5A1]">
            <Compass className="w-5 h-5" />
          </div>
          <h3 className={`text-lg sm:text-xl font-bold ${themeClasses.textPrimary}`}>
            4. مقياس الرسم والخرائط والتقسيم التناسبي
          </h3>
        </div>

        <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
          تطبيقات هندسية واجتماعية لا غنى عنها:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
          <div className={`p-4 rounded-xl border ${themeClasses.border} bg-black/[0.01] dark:bg-white/[0.01]`}>
            <div className="font-bold text-xs mb-1 text-[#127052] dark:text-[#5EB5A1]">مقياس الرسم والخرائط</div>
            <p className={`text-[11px] ${themeClasses.textMuted} leading-relaxed`}>
              النسبة بين البعد على الخريطة والبعد الواقعي. إذا كان المقياس 1 سم : 5 كم، فإن 4 سم على الخريطة تعني 20 كم على أرض الواقع.
            </p>
          </div>
          <div className={`p-4 rounded-xl border ${themeClasses.border} bg-black/[0.01] dark:bg-white/[0.01]`}>
            <div className="font-bold text-xs mb-1 text-[#127052] dark:text-[#5EB5A1]">التقسيم التناسبي العادل</div>
            <p className={`text-[11px] ${themeClasses.textMuted} leading-relaxed`}>
              توزيع المبالغ والتركات والأرباح بطريقة "قيمة الجزء الواحد": نقسم المبلغ الكلي على مجموع الأجزاء، ثم نضرب في أجزاء كل فرد.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <a
            href="#/math/ratios-proportions/scale-drawings-maps"
            onClick={(e) => handleTestClick('/math/ratios-proportions/scale-drawings-maps', 'scale-drawings-maps', e)}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#127052] dark:text-[#5EB5A1] bg-[#3B7A6A]/10 hover:bg-[#3B7A6A]/20 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
          >
            <span>اختبار مقياس الرسم والخرائط</span>
            <ArrowRight className="w-3.5 h-3.5 rotate-180" />
          </a>
          <a
            href="#/math/ratios-proportions/proportional-division"
            onClick={(e) => handleTestClick('/math/ratios-proportions/proportional-division', 'proportional-division', e)}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#127052] dark:text-[#5EB5A1] bg-[#3B7A6A]/10 hover:bg-[#3B7A6A]/20 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
          >
            <span>اختبار التقسيم التناسبي</span>
            <ArrowRight className="w-3.5 h-3.5 rotate-180" />
          </a>
        </div>
      </section>

      {/* Section 5: Percentages, Financial Math and Applications */}
      <section className="space-y-4 pt-4 border-t border-black/[0.04] dark:border-white/[0.06]">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-[#3B7A6A]/10 text-[#127052] dark:text-[#5EB5A1]">
            <Award className="w-5 h-5" />
          </div>
          <h3 className={`text-lg sm:text-xl font-bold ${themeClasses.textPrimary}`}>
            5. النسب المئوية، المعاملات المالية، والمسائل الحياتية
          </h3>
        </div>

        <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
          التتويج العملي لعلم التناسب يتمثل في التطبيقات المالية اليومية: حساب نسبة الزيادة والنقصان، احتساب الخصومات والتخفيضات (قميص 120 ريالاً بخصم 20% يباع بـ 96 ريالاً)، وحل مسائل خلط المكونات والمحاليل والعصائر بنسب متوازنة.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 text-center">
          <div className={`p-3 rounded-lg border ${themeClasses.border} bg-black/[0.01] dark:bg-white/[0.01]`}>
            <div className="text-base font-bold text-[#127052] dark:text-[#5EB5A1]">30</div>
            <div className={`text-[10px] ${themeClasses.textMuted}`}>15% من 200 بالتناسب</div>
          </div>
          <div className={`p-3 rounded-lg border ${themeClasses.border} bg-black/[0.01] dark:bg-white/[0.01]`}>
            <div className="text-base font-bold text-[#127052] dark:text-[#5EB5A1]">25%</div>
            <div className={`text-[10px] ${themeClasses.textMuted}`}>زيادة من 80 إلى 100 ريال</div>
          </div>
          <div className={`p-3 rounded-lg border ${themeClasses.border} bg-black/[0.01] dark:bg-white/[0.01]`}>
            <div className="text-base font-bold text-[#127052] dark:text-[#5EB5A1]">96 ريالاً</div>
            <div className={`text-[10px] ${themeClasses.textMuted}`}>قميص 120 بعد خصم 20%</div>
          </div>
          <div className={`p-3 rounded-lg border ${themeClasses.border} bg-black/[0.01] dark:bg-white/[0.01]`}>
            <div className="text-base font-bold text-[#127052] dark:text-[#5EB5A1]">800 مل</div>
            <div className={`text-[10px] ${themeClasses.textMuted}`}>ماء لـ 200 مل مركز (1:4)</div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <a
            href="#/math/ratios-proportions/percentage-and-proportion"
            onClick={(e) => handleTestClick('/math/ratios-proportions/percentage-and-proportion', 'percentage-and-proportion', e)}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#127052] dark:text-[#5EB5A1] bg-[#3B7A6A]/10 hover:bg-[#3B7A6A]/20 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
          >
            <span>النسبة المئوية والتناسب</span>
            <ArrowRight className="w-3.5 h-3.5 rotate-180" />
          </a>
          <a
            href="#/math/ratios-proportions/percentage-change"
            onClick={(e) => handleTestClick('/math/ratios-proportions/percentage-change', 'percentage-change', e)}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#127052] dark:text-[#5EB5A1] bg-[#3B7A6A]/10 hover:bg-[#3B7A6A]/20 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
          >
            <span>التغير المئوي والزيادة والنقصان</span>
            <ArrowRight className="w-3.5 h-3.5 rotate-180" />
          </a>
          <a
            href="#/math/ratios-proportions/profit-loss-discount"
            onClick={(e) => handleTestClick('/math/ratios-proportions/profit-loss-discount', 'profit-loss-discount', e)}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#127052] dark:text-[#5EB5A1] bg-[#3B7A6A]/10 hover:bg-[#3B7A6A]/20 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
          >
            <span>الربح والخسارة والخصم</span>
            <ArrowRight className="w-3.5 h-3.5 rotate-180" />
          </a>
          <a
            href="#/math/ratios-proportions/word-problems"
            onClick={(e) => handleTestClick('/math/ratios-proportions/word-problems', 'ratios-word-problems', e)}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#127052] dark:text-[#5EB5A1] bg-[#3B7A6A]/10 hover:bg-[#3B7A6A]/20 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
          >
            <span>المسائل الكلامية والتطبيقية</span>
            <ArrowRight className="w-3.5 h-3.5 rotate-180" />
          </a>
        </div>
      </section>

      {/* Golden Conclusion Box */}
      <footer className="pt-6 border-t border-black/[0.06] dark:border-white/[0.08] space-y-3">
        <div className="flex items-center gap-2 font-bold text-xs text-[#127052] dark:text-[#5EB5A1]">
          <CheckCircle2 className="w-4 h-4" />
          <span>خلاصة الدليل المرجعي لمنظومة النسب والتناسب</span>
        </div>
        <p className={`text-xs ${themeClasses.textMuted} leading-relaxed`}>
          النسبة والتناسب ليسا مجرد فرع مدرسي، بل هما العين التي يرى بها المهندس المخططات، والتاجر أرباحه، والطاهي وصفاته، والمصمم أبعاد شاشاته. إن إتقان الاختبارات الاثني عشر أعلاه يضمن لك قاعدة رياضية صلبة تنقلك إلى عالم الجبر، الفيزياء، وعلوم البيانات بثقة واقتدار.
        </p>
      </footer>
    </article>
  );
};
