import React from 'react';
import {
  BookOpen,
  Sparkles,
  TrendingUp,
  Lightbulb,
  CheckCircle2,
  HelpCircle,
  Award,
  Layers,
  ArrowRight,
  Calculator,
  Compass,
} from 'lucide-react';
import { useEyeTheme } from '../context/ThemeContext';
import { navigateTo } from '../navigation/router';

interface SubtractionPillarArticleProps {
  onOpenTest?: (testId: string) => void;
  className?: string;
}

export const SubtractionPillarArticle: React.FC<SubtractionPillarArticleProps> = ({
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
      id="subtraction-pillar-guide"
      className={`p-6 sm:p-10 rounded-2xl border ${themeClasses.border} ${themeClasses.cardBg} space-y-8 shadow-2xs leading-relaxed text-right ${className}`}
    >
      {/* Pillar Article Header */}
      <header className="space-y-3 pb-6 border-b border-black/[0.06] dark:border-white/[0.08]">
        <div className="flex items-center gap-2 text-xs font-bold text-[#127052] dark:text-[#5EB5A1]">
          <BookOpen className="w-4 h-4" />
          <span>المقالة المرجعية الشاملة (Pillar Guide) | أكاديمية كويزات الرياضيات</span>
        </div>

        <h2 className={`text-xl sm:text-3xl font-extrabold tracking-tight ${themeClasses.textPrimary}`}>
          دليل اختبارات ومهارات الطرح الشامل: من الأساسيات حتى الإتقان
        </h2>

        <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
          دليل تربوي ومنهجي مرجعي موجه لأولياء الأمور والمعلمين والطلاب، يوضح المسار التدريجي المتدرج لاكتساب الطلاقة الحسابية في عمليات الطرح، ويوفر منظومة متكاملة من 12 اختباراً تفاعلياً مصمماً لترسيخ حقائق الطرح وتنمية التفكير الجبري المبكر.
        </p>

        {/* Quick Metadata Bar */}
        <div className="flex flex-wrap items-center gap-3 pt-2 text-[11px] text-slate-500 dark:text-slate-400">
          <span className="flex items-center gap-1">
            <Calculator className="w-3.5 h-3.5 text-[#127052]" />
            12 اختباراً تخصصياً في مهارات الطرح
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Layers className="w-3.5 h-3.5 text-amber-600" />
            من الأعداد المفردة حتى الكسور والعشري
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <HelpCircle className="w-3.5 h-3.5 text-indigo-600" />
            نظام الرقم المفقود (الجبر المبكر)
          </span>
        </div>
      </header>

      {/* Section 1: أهمية مهارة الطرح كحجر أساس للرياضيات والطلاقة الذهنية */}
      <section className="space-y-3">
        <h3 className={`text-base sm:text-xl font-bold ${themeClasses.textPrimary} flex items-center gap-2`}>
          <Sparkles className="w-5 h-5 text-[#127052] dark:text-[#5EB5A1]" />
          <span>1. أهمية مهارة الطرح: من النقصان المحسوس إلى الحساب الذهني الذكي</span>
        </h3>
        <p className={`text-xs sm:text-sm ${themeClasses.textSecondary}`}>
          تُعد عملية <strong>الطرح (Subtraction)</strong> إحدى العمليات الحسابية الأربع الكبرى، والوجه الآخر المكمل لعملية الجمع. بينما يمثل الجمع الضم والزيادة، يمثل الطرح استكشاف الفارق، إنقاص الكميات، وحساب البواقي. ولا يقتصر الطرح على العمليات المدرسية البحتة، بل يمتد ليشكل جوهر الحسابات اليومية من تسوق، وإدارة الميزانيات، وحساب الفوارق الزمنية والمكانية.
        </p>
        <p className={`text-xs sm:text-sm ${themeClasses.textSecondary}`}>
          أثبتت الأبحاث التربوية الحديثة أن الطالب الذي يمتلك مهارات طرح مرنة قادر على حل المسائل المعقدة في الجبر والفيزياء بسهولة؛ لأن عقله متدرب على التراجع المنطقي وفك تركيب المقادير بدلاً من التفكير في اتجاه واحد فقط.
        </p>
      </section>

      {/* Section 2: خريطة الاختبارات الـ 12 المتدرجة في الطرح */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className={`text-base sm:text-xl font-bold ${themeClasses.textPrimary} flex items-center gap-2`}>
            <Compass className="w-5 h-5 text-[#127052] dark:text-[#5EB5A1]" />
            <span>2. خريطة الاختبارات الـ 12 المتدرجة: منظومة الطرح الكاملة</span>
          </h3>
          <span className={`text-xs ${themeClasses.textMuted}`}>
            روابط مباشرة للاختبارات التفاعلية
          </span>
        </div>

        <p className={`text-xs sm:text-sm ${themeClasses.textSecondary}`}>
          صممت المنصة مساراً تعليمياً متكاملاً مقسماً إلى قسمين متكاملين: <strong>قسم الطرح المباشر (6 اختبارات)</strong> لتأسيس المفاهيم وإتقان القواعد، يليه <strong>قسم الرقم المفقود (6 اختبارات)</strong> لنقل الطالب إلى مستوى التفكير الجبري وعكس العمليات.
        </p>

        {/* 12 Interactive Tests Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 pt-2">
          {/* 1 */}
          <div className={`p-4 rounded-xl border ${themeClasses.border} ${themeClasses.pillBg} space-y-2 flex flex-col justify-between`}>
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xl">-</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300">أساسي</span>
              </div>
              <h4 className={`text-sm font-bold ${themeClasses.textPrimary} mt-1`}>1. طرح الأرقام من 1 إلى 10</h4>
              <p className={`text-xs ${themeClasses.textSecondary} line-clamp-2`}>تمارين تفاعلية للأطفال والمبتدئين لقياس سرعة البديهة والعد التنازلي.</p>
            </div>
            <a
              href="/math/arithmetic/subtraction/single-digits"
              onClick={(e) => handleTestClick('/math/arithmetic/subtraction/single-digits', 'single-digit-subtraction', e)}
              className="text-xs font-bold text-[#127052] dark:text-[#5EB5A1] flex items-center gap-1 hover:underline pt-2 border-t border-black/[0.04] dark:border-white/[0.04]"
            >
              <span>خوض الاختبار التفاعلي</span>
              <ArrowRight className="w-3 h-3 rotate-180" />
            </a>
          </div>

          {/* 2 */}
          <div className={`p-4 rounded-xl border ${themeClasses.border} ${themeClasses.pillBg} space-y-2 flex flex-col justify-between`}>
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xl"></span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300">أساسي</span>
              </div>
              <h4 className={`text-sm font-bold ${themeClasses.textPrimary} mt-1`}>2. الطرح ضمن العدد 20</h4>
              <p className={`text-xs ${themeClasses.textSecondary} line-clamp-2`}>استراتيجيات عبور حاجز العشرة وتفكيك المطروح والرجوع للعشرة.</p>
            </div>
            <a
              href="/math/arithmetic/subtraction/within-20"
              onClick={(e) => handleTestClick('/math/arithmetic/subtraction/within-20', 'subtraction-within-20', e)}
              className="text-xs font-bold text-[#127052] dark:text-[#5EB5A1] flex items-center gap-1 hover:underline pt-2 border-t border-black/[0.04] dark:border-white/[0.04]"
            >
              <span>خوض الاختبار التفاعلي</span>
              <ArrowRight className="w-3 h-3 rotate-180" />
            </a>
          </div>

          {/* 3 */}
          <div className={`p-4 rounded-xl border ${themeClasses.border} ${themeClasses.pillBg} space-y-2 flex flex-col justify-between`}>
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xl"></span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-300">متوسط</span>
              </div>
              <h4 className={`text-sm font-bold ${themeClasses.textPrimary} mt-1`}>3. الطرح ضمن العدد 50</h4>
              <p className={`text-xs ${themeClasses.textSecondary} line-clamp-2`}>إتقان طرح الأعداد ثنائية المنزلة والاستلاف الخفيف وإعادة التجميع.</p>
            </div>
            <a
              href="/math/arithmetic/subtraction/within-50"
              onClick={(e) => handleTestClick('/math/arithmetic/subtraction/within-50', 'subtraction-within-50', e)}
              className="text-xs font-bold text-[#127052] dark:text-[#5EB5A1] flex items-center gap-1 hover:underline pt-2 border-t border-black/[0.04] dark:border-white/[0.04]"
            >
              <span>خوض الاختبار التفاعلي</span>
              <ArrowRight className="w-3 h-3 rotate-180" />
            </a>
          </div>

          {/* 4 */}
          <div className={`p-4 rounded-xl border ${themeClasses.border} ${themeClasses.pillBg} space-y-2 flex flex-col justify-between`}>
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xl"></span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-rose-50 text-rose-700 dark:bg-rose-950/40 dark:text-rose-300">متقدم</span>
              </div>
              <h4 className={`text-sm font-bold ${themeClasses.textPrimary} mt-1`}>4. الطرح ضمن العدد 100</h4>
              <p className={`text-xs ${themeClasses.textSecondary} line-clamp-2`}>الطلاقة الحسابية الكبرى ومتممات المئة والاستلاف المتقدم.</p>
            </div>
            <a
              href="/math/arithmetic/subtraction/within-100"
              onClick={(e) => handleTestClick('/math/arithmetic/subtraction/within-100', 'subtraction-within-100', e)}
              className="text-xs font-bold text-[#127052] dark:text-[#5EB5A1] flex items-center gap-1 hover:underline pt-2 border-t border-black/[0.04] dark:border-white/[0.04]"
            >
              <span>خوض الاختبار التفاعلي</span>
              <ArrowRight className="w-3 h-3 rotate-180" />
            </a>
          </div>

          {/* 5 */}
          <div className={`p-4 rounded-xl border ${themeClasses.border} ${themeClasses.pillBg} space-y-2 flex flex-col justify-between`}>
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xl">÷</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-300">متوسط</span>
              </div>
              <h4 className={`text-sm font-bold ${themeClasses.textPrimary} mt-1`}>5. طرح الكسور</h4>
              <p className={`text-xs ${themeClasses.textSecondary} line-clamp-2`}>طرح الكسور الاعتيادية وتوحيد المقامات والتبسيط لأبسط صورة.</p>
            </div>
            <a
              href="/math/arithmetic/subtraction/fractions"
              onClick={(e) => handleTestClick('/math/arithmetic/subtraction/fractions', 'fractions-subtraction', e)}
              className="text-xs font-bold text-[#127052] dark:text-[#5EB5A1] flex items-center gap-1 hover:underline pt-2 border-t border-black/[0.04] dark:border-white/[0.04]"
            >
              <span>خوض الاختبار التفاعلي</span>
              <ArrowRight className="w-3 h-3 rotate-180" />
            </a>
          </div>

          {/* 6 */}
          <div className={`p-4 rounded-xl border ${themeClasses.border} ${themeClasses.pillBg} space-y-2 flex flex-col justify-between`}>
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xl"></span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-300">متوسط</span>
              </div>
              <h4 className={`text-sm font-bold ${themeClasses.textPrimary} mt-1`}>6. طرح الأعداد العشرية</h4>
              <p className={`text-xs ${themeClasses.textSecondary} line-clamp-2`}>محاذاة الفواصل وطرح الأعشار وإضافة أصفار حفظ المنزلة بدقة.</p>
            </div>
            <a
              href="/math/arithmetic/subtraction/decimals"
              onClick={(e) => handleTestClick('/math/arithmetic/subtraction/decimals', 'decimals-subtraction', e)}
              className="text-xs font-bold text-[#127052] dark:text-[#5EB5A1] flex items-center gap-1 hover:underline pt-2 border-t border-black/[0.04] dark:border-white/[0.04]"
            >
              <span>خوض الاختبار التفاعلي</span>
              <ArrowRight className="w-3 h-3 rotate-180" />
            </a>
          </div>

          {/* 7 */}
          <div className={`p-4 rounded-xl border ${themeClasses.border} ${themeClasses.pillBg} space-y-2 flex flex-col justify-between`}>
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xl">؟</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300">أساسي</span>
              </div>
              <h4 className={`text-sm font-bold ${themeClasses.textPrimary} mt-1`}>7. طرح 1 إلى 10 (رقم مفقود)</h4>
              <p className={`text-xs ${themeClasses.textSecondary} line-clamp-2`}>إيجاد المطروح أو المطروح منه وبناء أسس التفكير الجبري المبكر.</p>
            </div>
            <a
              href="/math/arithmetic/subtraction/missing-single-digits"
              onClick={(e) => handleTestClick('/math/arithmetic/subtraction/missing-single-digits', 'missing-single-digits-subtraction', e)}
              className="text-xs font-bold text-[#127052] dark:text-[#5EB5A1] flex items-center gap-1 hover:underline pt-2 border-t border-black/[0.04] dark:border-white/[0.04]"
            >
              <span>خوض الاختبار التفاعلي</span>
              <ArrowRight className="w-3 h-3 rotate-180" />
            </a>
          </div>

          {/* 8 */}
          <div className={`p-4 rounded-xl border ${themeClasses.border} ${themeClasses.pillBg} space-y-2 flex flex-col justify-between`}>
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xl"></span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300">أساسي</span>
              </div>
              <h4 className={`text-sm font-bold ${themeClasses.textPrimary} mt-1`}>8. الطرح ضمن 20 (رقم مفقود)</h4>
              <p className={`text-xs ${themeClasses.textSecondary} line-clamp-2`}>حل المعادلات ذات المجهول والربط بالعمليات العكسية حتى 20.</p>
            </div>
            <a
              href="/math/arithmetic/subtraction/missing-within-20"
              onClick={(e) => handleTestClick('/math/arithmetic/subtraction/missing-within-20', 'missing-within-20-subtraction', e)}
              className="text-xs font-bold text-[#127052] dark:text-[#5EB5A1] flex items-center gap-1 hover:underline pt-2 border-t border-black/[0.04] dark:border-white/[0.04]"
            >
              <span>خوض الاختبار التفاعلي</span>
              <ArrowRight className="w-3 h-3 rotate-180" />
            </a>
          </div>

          {/* 9 */}
          <div className={`p-4 rounded-xl border ${themeClasses.border} ${themeClasses.pillBg} space-y-2 flex flex-col justify-between`}>
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xl"></span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-300">متوسط</span>
              </div>
              <h4 className={`text-sm font-bold ${themeClasses.textPrimary} mt-1`}>9. الطرح ضمن 50 (رقم مفقود)</h4>
              <p className={`text-xs ${themeClasses.textSecondary} line-clamp-2`}>تفكيك العشرات والآحاد وموازنة طرفي المعادلة حتى 50.</p>
            </div>
            <a
              href="/math/arithmetic/subtraction/missing-within-50"
              onClick={(e) => handleTestClick('/math/arithmetic/subtraction/missing-within-50', 'missing-within-50-subtraction', e)}
              className="text-xs font-bold text-[#127052] dark:text-[#5EB5A1] flex items-center gap-1 hover:underline pt-2 border-t border-black/[0.04] dark:border-white/[0.04]"
            >
              <span>خوض الاختبار التفاعلي</span>
              <ArrowRight className="w-3 h-3 rotate-180" />
            </a>
          </div>

          {/* 10 */}
          <div className={`p-4 rounded-xl border ${themeClasses.border} ${themeClasses.pillBg} space-y-2 flex flex-col justify-between`}>
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xl"></span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-rose-50 text-rose-700 dark:bg-rose-950/40 dark:text-rose-300">متقدم</span>
              </div>
              <h4 className={`text-sm font-bold ${themeClasses.textPrimary} mt-1`}>10. الطرح ضمن 100 (رقم مفقود)</h4>
              <p className={`text-xs ${themeClasses.textSecondary} line-clamp-2`}>إتقان متممات المئة والمعادلات المركبة بدقة فائقة وسرعة ذهنية.</p>
            </div>
            <a
              href="/math/arithmetic/subtraction/missing-within-100"
              onClick={(e) => handleTestClick('/math/arithmetic/subtraction/missing-within-100', 'missing-within-100-subtraction', e)}
              className="text-xs font-bold text-[#127052] dark:text-[#5EB5A1] flex items-center gap-1 hover:underline pt-2 border-t border-black/[0.04] dark:border-white/[0.04]"
            >
              <span>خوض الاختبار التفاعلي</span>
              <ArrowRight className="w-3 h-3 rotate-180" />
            </a>
          </div>

          {/* 11 */}
          <div className={`p-4 rounded-xl border ${themeClasses.border} ${themeClasses.pillBg} space-y-2 flex flex-col justify-between`}>
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xl">÷</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-300">متوسط</span>
              </div>
              <h4 className={`text-sm font-bold ${themeClasses.textPrimary} mt-1`}>11. طرح الكسور (كسر مفقود)</h4>
              <p className={`text-xs ${themeClasses.textSecondary} line-clamp-2`}>إيجاد الكسر المفقود وعرض عمودي واضح للبسط والمقام وتبسيط النتيجة.</p>
            </div>
            <a
              href="/math/arithmetic/subtraction/missing-fractions"
              onClick={(e) => handleTestClick('/math/arithmetic/subtraction/missing-fractions', 'missing-fractions-subtraction', e)}
              className="text-xs font-bold text-[#127052] dark:text-[#5EB5A1] flex items-center gap-1 hover:underline pt-2 border-t border-black/[0.04] dark:border-white/[0.04]"
            >
              <span>خوض الاختبار التفاعلي</span>
              <ArrowRight className="w-3 h-3 rotate-180" />
            </a>
          </div>

          {/* 12 */}
          <div className={`p-4 rounded-xl border ${themeClasses.border} ${themeClasses.pillBg} space-y-2 flex flex-col justify-between`}>
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xl"></span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-300">متوسط</span>
              </div>
              <h4 className={`text-sm font-bold ${themeClasses.textPrimary} mt-1`}>12. طرح العشري (عشري مفقود)</h4>
              <p className={`text-xs ${themeClasses.textSecondary} line-clamp-2`}>إيجاد الأجزاء العشرية المجهولة ومحاذاة الفواصل وتطبيقات الحساب المالي.</p>
            </div>
            <a
              href="/math/arithmetic/subtraction/missing-decimals"
              onClick={(e) => handleTestClick('/math/arithmetic/subtraction/missing-decimals', 'missing-decimals-subtraction', e)}
              className="text-xs font-bold text-[#127052] dark:text-[#5EB5A1] flex items-center gap-1 hover:underline pt-2 border-t border-black/[0.04] dark:border-white/[0.04]"
            >
              <span>خوض الاختبار التفاعلي</span>
              <ArrowRight className="w-3 h-3 rotate-180" />
            </a>
          </div>
        </div>
      </section>

      {/* Section 3: أبرز الاستراتيجيات الذهنية لتعليم الطرح */}
      <section className="space-y-3">
        <h3 className={`text-base sm:text-xl font-bold ${themeClasses.textPrimary} flex items-center gap-2`}>
          <Lightbulb className="w-5 h-5 text-amber-600" />
          <span>3. أبرز الاستراتيجيات الذهنية لتعليم الطرح بفاعلية وسهولة</span>
        </h3>
        <p className={`text-xs sm:text-sm ${themeClasses.textSecondary}`}>
          يتميز الطلاب المتفوقون في الرياضيات بعدم اعتمادهم على طريقة واحدة جامدة، بل يختارون الاستراتيجية الأنسب حسب الأرقام المطروحة:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 pt-1">
          <div className={`p-4 rounded-xl border ${themeClasses.border} ${themeClasses.pillBg} space-y-1.5`}>
            <span className={`font-semibold text-xs sm:text-sm ${themeClasses.textPrimary} block`}>
              1. استراتيجية الرجوع للعشرة
            </span>
            <p className={`text-xs ${themeClasses.textSecondary}`}>
              في مسألة مثل 15 - 7، نطرح 5 أولاً لنصل إلى 10، ثم نطرح 2 يتبقى 8. تجعل الأعداد التي تعبر العشرة في غاية البساطة.
            </p>
          </div>

          <div className={`p-4 rounded-xl border ${themeClasses.border} ${themeClasses.pillBg} space-y-1.5`}>
            <span className={`font-semibold text-xs sm:text-sm ${themeClasses.textPrimary} block`}>
              2. استراتيجية الفرق المستمر
            </span>
            <p className={`text-xs ${themeClasses.textSecondary}`}>
              إضافة نفس القيمة لطرفي الطرح تحافظ على الفارق: 74 - 28 تصبح بإضافة 2 للطرفين 76 - 30 = 46 بدون أي استلاف معقد.
            </p>
          </div>

          <div className={`p-4 rounded-xl border ${themeClasses.border} ${themeClasses.pillBg} space-y-1.5`}>
            <span className={`font-semibold text-xs sm:text-sm ${themeClasses.textPrimary} block`}>
              3. عائلات الحقائق والتحقق
            </span>
            <p className={`text-xs ${themeClasses.textSecondary}`}>
              ربط الطرح بالجمع دائماً: إذا كان 42 - 18 = 24، نتحقق بجمع 24 + 18 = 42. التحقق الذاتي يبني الثقة ويمنع الخطأ في الامتحانات.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: كيف تدير جلسة مذاكرة ناجحة للطرح مع أبنائك */}
      <section className="space-y-3">
        <h3 className={`text-base sm:text-xl font-bold ${themeClasses.textPrimary} flex items-center gap-2`}>
          <TrendingUp className="w-5 h-5 text-[#127052] dark:text-[#5EB5A1]" />
          <span>4. إرشادات لأولياء الأمور والمعلمين لجلسة تدريب ممتعة</span>
        </h3>
        <p className={`text-xs sm:text-sm ${themeClasses.textSecondary}`}>
          السر في تثبيت مهارة الطرح يكمن في التدرج والهدوء. ابدأ بالاختبارات الأساسية ذات الأرقام المفردة، ولا تنتقل إلى الاستلاف إلا بعد أن يصبح الطرح حتى 20 عملية عفوية وسريعة. استغل ميزة «إعادة المحاولة» وناقش أسباب الإجابات الخاطئة مستعيناً بشرح التلميحات المرفقة في كل سؤال.
        </p>
      </section>

      {/* Summary Footer Box */}
      <div className="p-4 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/40 flex items-center justify-between flex-wrap gap-3 text-xs">
        <div className="flex items-center gap-2 text-emerald-800 dark:text-emerald-300">
          <CheckCircle2 className="w-5 h-5 shrink-0 text-emerald-600" />
          <span className="font-semibold">
            جميع الاختبارات مجانية بالكامل ومصممة بألوان هادئة مريحة للعين وتدعم التعلم الذاتي المستقل.
          </span>
        </div>

        <a
          href="/math/arithmetic/subtraction/single-digits"
          onClick={(e) => handleTestClick('/math/arithmetic/subtraction/single-digits', 'single-digit-subtraction', e)}
          className="text-xs text-[#127052] dark:text-[#5EB5A1] font-bold hover:underline"
        >
          ابدأ بالاختبار التأسيسي الأول الآن ←
        </a>
      </div>
    </article>
  );
};
