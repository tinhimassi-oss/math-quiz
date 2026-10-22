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

interface DivisionPillarArticleProps {
  onOpenTest?: (testId: string) => void;
  className?: string;
}

export const DivisionPillarArticle: React.FC<DivisionPillarArticleProps> = ({
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
      id="division-pillar-guide"
      className={`p-6 sm:p-10 rounded-2xl border ${themeClasses.border} ${themeClasses.cardBg} space-y-8 shadow-2xs leading-relaxed text-right ${className}`}
    >
      {/* Pillar Article Header */}
      <header className="space-y-3 pb-6 border-b border-black/[0.06] dark:border-white/[0.08]">
        <div className="flex items-center gap-2 text-xs font-bold text-[#127052] dark:text-[#5EB5A1]">
          <BookOpen className="w-4 h-4" />
          <span>المقالة المرجعية الشاملة (Pillar Guide) | أكاديمية كويزات الرياضيات</span>
        </div>

        <h2 className={`text-xl sm:text-3xl font-extrabold tracking-tight ${themeClasses.textPrimary}`}>
          دليل اختبارات ومهارات القسمة الشامل: من الأساسيات حتى الإتقان
        </h2>

        <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
          دليل تربوي ومنهجي مرجعي موجه لأولياء الأمور والمعلمين والطلاب، يوضح المسار التدريجي المتدرج لاكتساب الطلاقة الحسابية في عمليات القسمة، ويوفر منظومة متكاملة من 12 اختباراً تفاعلياً مصمماً لترسيخ حقائق التوزيع العادل وتنمية التفكير الجبري المبكر.
        </p>

        {/* Quick Metadata Bar */}
        <div className="flex flex-wrap items-center gap-3 pt-2 text-[11px] text-slate-500 dark:text-slate-400">
          <span className="flex items-center gap-1">
            <Calculator className="w-3.5 h-3.5 text-[#127052]" />
            12 اختباراً تخصصياً في مهارات القسمة
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Layers className="w-3.5 h-3.5 text-amber-600" />
            من الأعداد البسيطة حتى الكسور والأعداد العشرية
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <HelpCircle className="w-3.5 h-3.5 text-indigo-600" />
            نظام الرقم المفقود (الجبر المبكر وعكس الضرب)
          </span>
        </div>
      </header>

      {/* Section 1: أهمية مهارة القسمة كحجر أساس للرياضيات */}
      <section className="space-y-3">
        <h3 className={`text-base sm:text-xl font-bold ${themeClasses.textPrimary} flex items-center gap-2`}>
          <Sparkles className="w-5 h-5 text-[#127052] dark:text-[#5EB5A1]" />
          <span>1. أهمية مهارة القسمة: من التوزيع المحسوس إلى التحليل الجبري المتقدم</span>
        </h3>
        <p className={`text-xs sm:text-sm ${themeClasses.textSecondary}`}>
          تُعتبر <strong>القسمة (Division)</strong> العملية الحسابية الأكثر نضجاً بين العمليات الأربع الأساسية، والوجه الآخر المكمل للضرب. بينما يمثل الضرب تكرار المجموعات، تمثل القسمة التوزيع العادل، وتحديد الحصص المتكافئة، واستكشاف النسب والكسور.
        </p>
        <p className={`text-xs sm:text-sm ${themeClasses.textSecondary}`}>
          إن استيعاب القسمة بعمق يحرر الطالب من الحفظ الببغاوي للجداول؛ إذ يمنحه القدرة على تجزئة الأعداد المركبة، وحساب النسب المئوية، والمعدلات، والتعامل مع مسائل العلوم والفيزياء والاقتصاد بكل اقتدار وثقة.
        </p>
      </section>

      {/* Section 2: خريطة الاختبارات الـ 12 المتدرجة في القسمة */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className={`text-base sm:text-xl font-bold ${themeClasses.textPrimary} flex items-center gap-2`}>
            <Compass className="w-5 h-5 text-[#127052] dark:text-[#5EB5A1]" />
            <span>2. خريطة الاختبارات الـ 12 المتدرجة: منظومة القسمة الكاملة</span>
          </h3>
          <span className={`text-xs ${themeClasses.textMuted}`}>
            روابط مباشرة للاختبارات التفاعلية
          </span>
        </div>

        <p className={`text-xs sm:text-sm ${themeClasses.textSecondary}`}>
          صممت المنصة مساراً تعليمياً متكاملاً مقسماً إلى قسمين متكاملين: <strong>قسم القسمة المباشرة (6 اختبارات)</strong> لتأسيس المفاهيم وإتقان القواعد، يليه <strong>قسم الرقم المفقود (6 اختبارات)</strong> لنقل الطالب إلى مستوى التفكير الجبري وعكس العمليات.
        </p>

        {/* 12 Interactive Tests Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 pt-2">
          {/* 1 */}
          <div className={`p-4 rounded-xl border ${themeClasses.border} ${themeClasses.pillBg} space-y-2 flex flex-col justify-between`}>
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xl">÷</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300">أساسي</span>
              </div>
              <h4 className={`text-sm font-bold ${themeClasses.textPrimary} mt-1`}>1. قسمة الأعداد البسيطة حتى 10</h4>
              <p className={`text-xs ${themeClasses.textSecondary} line-clamp-2`}>تمارين تفاعلية للأطفال والمبتدئين لترسيخ مفهوم التوزيع العادل والتساوي.</p>
            </div>
            <a
              href="/math/arithmetic/division/single-digits"
              onClick={(e) => handleTestClick('/math/arithmetic/division/single-digits', 'single-digit-division', e)}
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
              <h4 className={`text-sm font-bold ${themeClasses.textPrimary} mt-1`}>2. القسمة ضمن العدد 20</h4>
              <p className={`text-xs ${themeClasses.textSecondary} line-clamp-2`}>حقائق القسمة حتى 20 والتنصيف السريع والربط بجداول الضرب من 2 إلى 5.</p>
            </div>
            <a
              href="/math/arithmetic/division/within-20"
              onClick={(e) => handleTestClick('/math/arithmetic/division/within-20', 'division-within-20', e)}
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
              <h4 className={`text-sm font-bold ${themeClasses.textPrimary} mt-1`}>3. القسمة ضمن العدد 50</h4>
              <p className={`text-xs ${themeClasses.textSecondary} line-clamp-2`}>تفكيك المقسوم إلى أجزاء سهلة وتوزيع القسمة على الجمع بمهارة.</p>
            </div>
            <a
              href="/math/arithmetic/division/within-50"
              onClick={(e) => handleTestClick('/math/arithmetic/division/within-50', 'division-within-50', e)}
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
              <h4 className={`text-sm font-bold ${themeClasses.textPrimary} mt-1`}>4. القسمة ضمن العدد 100</h4>
              <p className={`text-xs ${themeClasses.textSecondary} line-clamp-2`}>الطلاقة في جداول الضرب الكاملة وقسمة مضاعفات العشرة بدون باقٍ.</p>
            </div>
            <a
              href="/math/arithmetic/division/within-100"
              onClick={(e) => handleTestClick('/math/arithmetic/division/within-100', 'division-within-100', e)}
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
                <span className="text-xl"></span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-300">متوسط</span>
              </div>
              <h4 className={`text-sm font-bold ${themeClasses.textPrimary} mt-1`}>5. قسمة الكسور</h4>
              <p className={`text-xs ${themeClasses.textSecondary} line-clamp-2`}>قاعدة قلب الكسر الثاني (ثبت، اقلب، اضرب) وتبسيط النواتج لأبسط صورة.</p>
            </div>
            <a
              href="/math/arithmetic/division/fractions"
              onClick={(e) => handleTestClick('/math/arithmetic/division/fractions', 'fractions-division', e)}
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
              <h4 className={`text-sm font-bold ${themeClasses.textPrimary} mt-1`}>6. قسمة الأعداد العشرية</h4>
              <p className={`text-xs ${themeClasses.textSecondary} line-clamp-2`}>التخلص من فاصلة المقسوم عليه وتحريك الفاصلة يساراً بقوى العشرة.</p>
            </div>
            <a
              href="/math/arithmetic/division/decimals"
              onClick={(e) => handleTestClick('/math/arithmetic/division/decimals', 'decimals-division', e)}
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
              <h4 className={`text-sm font-bold ${themeClasses.textPrimary} mt-1`}>7. قسمة 1 إلى 10 (رقم مفقود)</h4>
              <p className={`text-xs ${themeClasses.textSecondary} line-clamp-2`}>إيجاد المقسوم أو المقسوم عليه وبناء أسس التفكير الجبري المبكر.</p>
            </div>
            <a
              href="/math/arithmetic/division/missing-single-digits"
              onClick={(e) => handleTestClick('/math/arithmetic/division/missing-single-digits', 'missing-single-digits-division', e)}
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
              <h4 className={`text-sm font-bold ${themeClasses.textPrimary} mt-1`}>8. القسمة ضمن 20 (رقم مفقود)</h4>
              <p className={`text-xs ${themeClasses.textSecondary} line-clamp-2`}>حل معادلات القسمة ذات المجهول والربط بالضرب العكسي حتى 20.</p>
            </div>
            <a
              href="/math/arithmetic/division/missing-within-20"
              onClick={(e) => handleTestClick('/math/arithmetic/division/missing-within-20', 'missing-within-20-division', e)}
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
              <h4 className={`text-sm font-bold ${themeClasses.textPrimary} mt-1`}>9. القسمة ضمن 50 (رقم مفقود)</h4>
              <p className={`text-xs ${themeClasses.textSecondary} line-clamp-2`}>موازنة طرفي المعادلة وتفكيك الأعداد ثنائية المنزلة في القسمة.</p>
            </div>
            <a
              href="/math/arithmetic/division/missing-within-50"
              onClick={(e) => handleTestClick('/math/arithmetic/division/missing-within-50', 'missing-within-50-division', e)}
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
              <h4 className={`text-sm font-bold ${themeClasses.textPrimary} mt-1`}>10. القسمة ضمن 100 (رقم مفقود)</h4>
              <p className={`text-xs ${themeClasses.textSecondary} line-clamp-2`}>إتقان مجاهيل القسمة الكبرى واستنتاج المقسوم ذهنياً بدقة عالية.</p>
            </div>
            <a
              href="/math/arithmetic/division/missing-within-100"
              onClick={(e) => handleTestClick('/math/arithmetic/division/missing-within-100', 'missing-within-100-division', e)}
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
                <span className="text-xl"></span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-300">متوسط</span>
              </div>
              <h4 className={`text-sm font-bold ${themeClasses.textPrimary} mt-1`}>11. قسمة الكسور (كسر مفقود)</h4>
              <p className={`text-xs ${themeClasses.textSecondary} line-clamp-2`}>إيجاد الكسر المفقود واستخدام النظير الضربي وموازنة معادلات الكسور.</p>
            </div>
            <a
              href="/math/arithmetic/division/missing-fractions"
              onClick={(e) => handleTestClick('/math/arithmetic/division/missing-fractions', 'missing-fractions-division', e)}
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
              <h4 className={`text-sm font-bold ${themeClasses.textPrimary} mt-1`}>12. قسمة العشري (عشري مفقود)</h4>
              <p className={`text-xs ${themeClasses.textSecondary} line-clamp-2`}>إيجاد الأجزاء العشرية المجهولة وقراءة حركة الفاصلة وتطبيقات الحساب المالي.</p>
            </div>
            <a
              href="/math/arithmetic/division/missing-decimals"
              onClick={(e) => handleTestClick('/math/arithmetic/division/missing-decimals', 'missing-decimals-division', e)}
              className="text-xs font-bold text-[#127052] dark:text-[#5EB5A1] flex items-center gap-1 hover:underline pt-2 border-t border-black/[0.04] dark:border-white/[0.04]"
            >
              <span>خوض الاختبار التفاعلي</span>
              <ArrowRight className="w-3 h-3 rotate-180" />
            </a>
          </div>
        </div>
      </section>

      {/* Section 3: أبرز الاستراتيجيات الذهنية لتعليم القسمة */}
      <section className="space-y-3">
        <h3 className={`text-base sm:text-xl font-bold ${themeClasses.textPrimary} flex items-center gap-2`}>
          <Lightbulb className="w-5 h-5 text-amber-600" />
          <span>3. أبرز الاستراتيجيات الذهنية لتعليم القسمة بفاعلية وسهولة</span>
        </h3>
        <p className={`text-xs sm:text-sm ${themeClasses.textSecondary}`}>
          يتميز الطلاب المتفوقون في الرياضيات بعدم حفظهم للقسمة كعمليات معزولة، بل يوظفون استراتيجيات تفكير ذكية:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 pt-1">
          <div className={`p-4 rounded-xl border ${themeClasses.border} ${themeClasses.pillBg} space-y-1.5`}>
            <span className={`font-semibold text-xs sm:text-sm ${themeClasses.textPrimary} block`}>
              1. استراتيجية التنصيف المتكرر
            </span>
            <p className={`text-xs ${themeClasses.textSecondary}`}>
              لقسمة أي عدد على 4، قسّمه على 2 مرتين. ولقسمته على 8، قسّمه على 2 ثلاث مرات. تحول الأعداد الكبيرة إلى حساب ذهني فوري.
            </p>
          </div>

          <div className={`p-4 rounded-xl border ${themeClasses.border} ${themeClasses.pillBg} space-y-1.5`}>
            <span className={`font-semibold text-xs sm:text-sm ${themeClasses.textPrimary} block`}>
              2. سحب مضاعفات العشرة
            </span>
            <p className={`text-xs ${themeClasses.textSecondary}`}>
              لقسمة 96 ÷ 8: اسحب 80 (8×10)، يتبقى 16 (8×2). الناتج فوراً 10 + 2 = 12 دون الحاجة لكتابة القسمة المطولة على الورق.
            </p>
          </div>

          <div className={`p-4 rounded-xl border ${themeClasses.border} ${themeClasses.pillBg} space-y-1.5`}>
            <span className={`font-semibold text-xs sm:text-sm ${themeClasses.textPrimary} block`}>
              3. التحقق الذاتي بالضرب
            </span>
            <p className={`text-xs ${themeClasses.textSecondary}`}>
              التحقق بالضرب (الناتج × المقسوم عليه = المقسوم) يمنح الطالب مناعة كاملة ضد أخطاء الاختبارات ويبني استقلالية التفكير.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: إرشادات للنجاح الدراسي */}
      <section className="space-y-3">
        <h3 className={`text-base sm:text-xl font-bold ${themeClasses.textPrimary} flex items-center gap-2`}>
          <TrendingUp className="w-5 h-5 text-[#127052] dark:text-[#5EB5A1]" />
          <span>4. إرشادات لأولياء الأمور والمعلمين لرحلة تعلم هادئة</span>
        </h3>
        <p className={`text-xs sm:text-sm ${themeClasses.textSecondary}`}>
          لا تبدأ بالقسمة المطولة أو الأعداد الكبيرة قبل أن يتقن الطالب حقائق القسمة البسيطة حتى 20. اجعل الطالب يمارس الاختبارات بهدوء مع الاستعانة بالتلميحات التوضيحية عند الحاجة، وكافئه على التفكير المنطقي واكتشاف الخطأ الذاتي.
        </p>
      </section>

      {/* Summary Footer Box */}
      <div className="p-4 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/40 flex items-center justify-between flex-wrap gap-3 text-xs">
        <div className="flex items-center gap-2 text-emerald-800 dark:text-emerald-300">
          <CheckCircle2 className="w-5 h-5 shrink-0 text-emerald-600" />
          <span className="font-semibold">
            جميع اختبارات القسمة الـ 12 مجانية بالكامل، خالية من التعقيد، ومصممة بألوان مريحة للعين تدعم التركيز العميق.
          </span>
        </div>

        <a
          href="/math/arithmetic/division/single-digits"
          onClick={(e) => handleTestClick('/math/arithmetic/division/single-digits', 'single-digit-division', e)}
          className="text-xs text-[#127052] dark:text-[#5EB5A1] font-bold hover:underline"
        >
          ابدأ باختبار القسمة التأسيسي الأول الآن ←
        </a>
      </div>
    </article>
  );
};
