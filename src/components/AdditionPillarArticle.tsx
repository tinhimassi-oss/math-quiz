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

interface AdditionPillarArticleProps {
  onOpenTest?: (testId: string) => void;
  className?: string;
}

export const AdditionPillarArticle: React.FC<AdditionPillarArticleProps> = ({
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
      id="addition-pillar-guide"
      className={`p-6 sm:p-10 rounded-2xl border ${themeClasses.border} ${themeClasses.cardBg} space-y-8 shadow-2xs leading-relaxed text-right ${className}`}
    >
      {/* Pillar Article Header */}
      <header className="space-y-3 pb-6 border-b border-black/[0.06] dark:border-white/[0.08]">
        <div className="flex items-center gap-2 text-xs font-bold text-[#127052] dark:text-[#5EB5A1]">
          <BookOpen className="w-4 h-4" />
          <span>المقالة المرجعية الشاملة (Pillar Guide) | أكاديمية كويزات الرياضيات</span>
        </div>

        <h2 className={`text-xl sm:text-3xl font-extrabold tracking-tight ${themeClasses.textPrimary}`}>
          دليل اختبارات ومهارات الجمع الشامل: من الأساسيات حتى الإتقان
        </h2>

        <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
          دليل مرجعي موجه لأولياء الأمور والمعلمين والطلاب، يوضح المسار المنهجي المتدرج لاكتساب الطلاقة الحسابية، ويوفر منظومة متكاملة من 12 اختباراً تفاعلياً مصمماً لترسيخ حقائق الجمع وتنمية التفكير الجبري المبكر.
        </p>

        {/* Quick Metadata Bar */}
        <div className="flex flex-wrap items-center gap-3 pt-2 text-[11px] text-slate-500 dark:text-slate-400">
          <span className="flex items-center gap-1">
            <Calculator className="w-3.5 h-3.5 text-[#127052]" />
            12 اختباراً تخصصياً متدرجاً
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Layers className="w-3.5 h-3.5 text-amber-600" />
            من الأعداد المفردة إلى الكسور والعشري
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <HelpCircle className="w-3.5 h-3.5 text-indigo-600" />
            نظام الرقم المفقود (الجبر المبكر)
          </span>
        </div>
      </header>

      {/* Section 1: أهمية مهارة الجمع كحجر أساس للرياضيات والطلاقة الذهنية */}
      <section className="space-y-3">
        <h3 className={`text-base sm:text-xl font-bold ${themeClasses.textPrimary} flex items-center gap-2`}>
          <Sparkles className="w-5 h-5 text-[#127052] dark:text-[#5EB5A1]" />
          <span>أولاً: لماذا يُعد الجمع حجر الزاوية في بناء الفكر الرياضي؟</span>
        </h3>
        <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
          تُمثّل عملية <strong>الجمع (Addition)</strong> أول تواصل حقيقي ومجرد يخوضه عقل المتعلم مع علم الرياضيات التطبيقي. إن إتقان مهارات الجمع لا يقتصر على مجرد إيجاد حاصل جمع رقمين، بل هو الأساس المتين الذي يُبنى عليه كل صرح الحساب المتقدم؛ فالطرح ما هو إلا العملية العكسية للجمع، والضرب ليس سوى جمع متكرر، وتحديد القيمة المنزلية والتعامل مع العملات والقياسات يعتمد بالكامل على سرعة ودقة التجميع.
        </p>
        <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
          أثبتت الأبحاث التربوية الحديثة في تعليم الرياضيات أن وصول الطالب إلى مرحلة <strong>الطلاقة الحسابية (Math Fluency)</strong> في الجمع—أي الاسترجاع الذهني السريع للحقائق دون الحاجة للعد البدائي البطيء على الأصابع—يحرر الذاكرة العاملة (Working Memory) للدماغ، مما يتيح للطفل التركيز على حل المسائل الكلامية والتفكير الاستدلالي دون استنزاف طاقته الذهنية في حسابات بسيطة.
        </p>
      </section>

      {/* Section 2: التدرج المنهجي المنطقي لتعلم الجمع (6 مراحل تعليمية) */}
      <section className="space-y-4">
        <h3 className={`text-base sm:text-xl font-bold ${themeClasses.textPrimary} flex items-center gap-2`}>
          <TrendingUp className="w-5 h-5 text-emerald-600" />
          <span>ثانياً: سلم التدرج المنطقي لاكتساب مهارات الجمع (من المحسوس إلى المجرد)</span>
        </h3>
        <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
          لتحقيق أفضل نتائج تدريبية مستدامة، قمنا في منصة كويزات الرياضيات بتنظيم المهارات الحسابية وفق سلم تعليمي تصاعدي يراعي النمو المعرفي للطفل، ويتوزع على ست محطات رئيسية:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
          {/* المرحلة 1 */}
          <div className={`p-4 rounded-xl border ${themeClasses.border} ${themeClasses.pillBg} space-y-2`}>
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300">
                المرحلة 1: الأساس الحسي
              </span>
              <span className="text-lg">+</span>
            </div>
            <h4 className={`text-sm font-bold ${themeClasses.textPrimary}`}>
              جمع الأرقام المفردة من 1 إلى 10
            </h4>
            <p className={`text-xs ${themeClasses.textSecondary} leading-relaxed`}>
              التركيز على ربط الأعداد بمجموعات بصرية وملموسة واستخدام خط الأعداد للقفز تصاعدياً. استكشف{' '}
              <a
                href="#/math/arithmetic/addition/single-digits"
                onClick={(e) => handleTestClick('/math/arithmetic/addition/single-digits', 'single-digit-addition', e)}
                className="text-[#127052] dark:text-[#5EB5A1] font-bold underline hover:opacity-80"
              >
                اختبار جمع الأرقام الفردية من 1 إلى 10
              </a>{' '}
              لبدء القياس المباشر.
            </p>
          </div>

          {/* المرحلة 2 */}
          <div className={`p-4 rounded-xl border ${themeClasses.border} ${themeClasses.pillBg} space-y-2`}>
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold px-2 py-0.5 rounded bg-blue-100 text-blue-800 dark:bg-blue-950/60 dark:text-blue-300">
                المرحلة 2: عبور العشرة
              </span>
              <span className="text-lg"></span>
            </div>
            <h4 className={`text-sm font-bold ${themeClasses.textPrimary}`}>
              الجمع ضمن العدد 20 واستراتيجيات الذهن
            </h4>
            <p className={`text-xs ${themeClasses.textSecondary} leading-relaxed`}>
              الانتقال لاستراتيجية "تكوين العشرة (Make a 10)" واستراتيجية الضعف (Doubles). تدرب على المسائل عبر{' '}
              <a
                href="#/math/arithmetic/addition/within-20"
                onClick={(e) => handleTestClick('/math/arithmetic/addition/within-20', 'addition-within-20', e)}
                className="text-[#127052] dark:text-[#5EB5A1] font-bold underline hover:opacity-80"
              >
                اختبار الجمع ضمن العدد 20
              </a>{' '}
              لتجاوز حاجز العد اليدوي.
            </p>
          </div>

          {/* المرحلة 3 */}
          <div className={`p-4 rounded-xl border ${themeClasses.border} ${themeClasses.pillBg} space-y-2`}>
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300">
                المرحلة 3: القيمة المنزلية
              </span>
              <span className="text-lg"></span>
            </div>
            <h4 className={`text-sm font-bold ${themeClasses.textPrimary}`}>
              الجمع ضمن العدد 50 وتفكيك العشرات
            </h4>
            <p className={`text-xs ${themeClasses.textSecondary} leading-relaxed`}>
              تفكيك الأعداد ثنائية المنزلة إلى آحاد وعشرات، والجمع بالحمل الخفيف واستراتيجيات التقريب. تفضل بخوض{' '}
              <a
                href="#/math/arithmetic/addition/within-50"
                onClick={(e) => handleTestClick('/math/arithmetic/addition/within-50', 'addition-within-50', e)}
                className="text-[#127052] dark:text-[#5EB5A1] font-bold underline hover:opacity-80"
              >
                اختبار الجمع ضمن العدد 50
              </a>{' '}
              لإتقان الحساب الحياتي.
            </p>
          </div>

          {/* المرحلة 4 */}
          <div className={`p-4 rounded-xl border ${themeClasses.border} ${themeClasses.pillBg} space-y-2`}>
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold px-2 py-0.5 rounded bg-rose-100 text-rose-800 dark:bg-rose-950/60 dark:text-rose-300">
                المرحلة 4: متممات المئة
              </span>
              <span className="text-lg"></span>
            </div>
            <h4 className={`text-sm font-bold ${themeClasses.textPrimary}`}>
              الجمع ضمن العدد 100 والطلاقة الكاملة
            </h4>
            <p className={`text-xs ${themeClasses.textSecondary} leading-relaxed`}>
              إتقان جمع عددين من منزلتين مع إعادة التجميع (الحمل) وتوظيف أصدقاء المئة للحل الخاطف. اختبر مستواك في{' '}
              <a
                href="#/math/arithmetic/addition/within-100"
                onClick={(e) => handleTestClick('/math/arithmetic/addition/within-100', 'addition-within-100', e)}
                className="text-[#127052] dark:text-[#5EB5A1] font-bold underline hover:opacity-80"
              >
                اختبار الجمع ضمن العدد 100
              </a>{' '}
              لتحقيق أعلى درجات الدقة.
            </p>
          </div>

          {/* المرحلة 5 */}
          <div className={`p-4 rounded-xl border ${themeClasses.border} ${themeClasses.pillBg} space-y-2`}>
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold px-2 py-0.5 rounded bg-purple-100 text-purple-800 dark:bg-purple-950/60 dark:text-purple-300">
                المرحلة 5: الكسور الاعتيادية
              </span>
              <span className="text-lg">÷</span>
            </div>
            <h4 className={`text-sm font-bold ${themeClasses.textPrimary}`}>
              جمع الكسور الاعتيادية وتوحيد المقامات
            </h4>
            <p className={`text-xs ${themeClasses.textSecondary} leading-relaxed`}>
              الانتقال إلى الأجزاء والكسور ذات المقامات الموحدة والمختلفة بصيغة البسط والمقام الرأسية. ابدأ الآن مع{' '}
              <a
                href="#/math/arithmetic/addition/fractions"
                onClick={(e) => handleTestClick('/math/arithmetic/addition/fractions', 'fractions-addition', e)}
                className="text-[#127052] dark:text-[#5EB5A1] font-bold underline hover:opacity-80"
              >
                اختبار جمع الكسور
              </a>{' '}
              المصمم بعرض رياضي عمودي ناصع.
            </p>
          </div>

          {/* المرحلة 6 */}
          <div className={`p-4 rounded-xl border ${themeClasses.border} ${themeClasses.pillBg} space-y-2`}>
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold px-2 py-0.5 rounded bg-cyan-100 text-cyan-800 dark:bg-cyan-950/60 dark:text-cyan-300">
                المرحلة 6: النظام العشري
              </span>
              <span className="text-lg"></span>
            </div>
            <h4 className={`text-sm font-bold ${themeClasses.textPrimary}`}>
              جمع الأعداد العشرية ومحاذاة الفواصل
            </h4>
            <p className={`text-xs ${themeClasses.textSecondary} leading-relaxed`}>
              جمع الأجزاء من عشرة والأجزاء من مئة، ووزن الفاصلة العشرية لربط الرياضيات بالمعاملات المالية. انتقل إلى{' '}
              <a
                href="#/math/arithmetic/addition/decimals"
                onClick={(e) => handleTestClick('/math/arithmetic/addition/decimals', 'decimals-addition', e)}
                className="text-[#127052] dark:text-[#5EB5A1] font-bold underline hover:opacity-80"
              >
                اختبار جمع الأعداد العشرية
              </a>{' '}
              لتدريب عملي احترافي.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: منهجية "الرقم المفقود" (Missing Number) وبناء التفكير الجبري المبكر */}
      <section className="space-y-3.5">
        <h3 className={`text-base sm:text-xl font-bold ${themeClasses.textPrimary} flex items-center gap-2`}>
          <Lightbulb className="w-5 h-5 text-amber-500" />
          <span>ثالثاً: قوة منهجية "الرقم المفقود" ودورها في تأسيس التفكير الجبري</span>
        </h3>
        <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
          في معادلات الجمع التقليدية (مثل: 4 + 3 = ؟)، يتجه تفكير المتعلم في مسار أحادي مباشر. أما في نظام <strong>الرقم المفقود (مثل: 4 + ؟ = 7 أو ؟ + 5 = 9)</strong>، فإننا نحدث نقلة جوهرية في الدماغ الرياضي؛ حيث يتحول السؤال من مجرد «احسب الناتج» إلى «اكتشف العلاقة بين الكل والأجزاء».
        </p>
        <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
          هذا النمط هو البذرة الحقيقية لعلم الجبر والمعادلات الرياضية (Solving for X)، ويدرب الطالب بصورة تلقائية على عكس العمليات (استعمال الطرح لحل الجمع)، مما يكسر الجمود الفكري ويمنح الطفل مرونة عقلية استثنائية تؤهله لاجتياز اختبارات الذكاء والموهبة والمسابقات الرياضية العالمية.
        </p>

        {/* Missing Number Tests Links Highlight */}
        <div className="p-4 rounded-xl bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800/40 space-y-2">
          <span className="font-bold text-xs sm:text-sm text-amber-900 dark:text-amber-200 block">
            سلسلة اختبارات الرقم المفقود الستة المتخصصة:
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 text-xs">
            <a
              href="#/math/arithmetic/addition/missing-single-digits"
              onClick={(e) => handleTestClick('/math/arithmetic/addition/missing-single-digits', 'missing-single-digits', e)}
              className="p-2 rounded-lg bg-white/70 dark:bg-black/20 hover:bg-amber-100/70 dark:hover:bg-amber-900/40 transition-colors flex items-center justify-between text-amber-950 dark:text-amber-200"
            >
              <span>1. المفقود في الأرقام (1-10)</span>
              <span className="font-sans font-bold text-[11px]">1 + ؟ = 7</span>
            </a>

            <a
              href="#/math/arithmetic/addition/missing-within-20"
              onClick={(e) => handleTestClick('/math/arithmetic/addition/missing-within-20', 'missing-within-20', e)}
              className="p-2 rounded-lg bg-white/70 dark:bg-black/20 hover:bg-amber-100/70 dark:hover:bg-amber-900/40 transition-colors flex items-center justify-between text-amber-950 dark:text-amber-200"
            >
              <span>2. المفقود ضمن العدد 20</span>
              <span className="font-sans font-bold text-[11px]">8 + ؟ = 15</span>
            </a>

            <a
              href="#/math/arithmetic/addition/missing-within-50"
              onClick={(e) => handleTestClick('/math/arithmetic/addition/missing-within-50', 'missing-within-50', e)}
              className="p-2 rounded-lg bg-white/70 dark:bg-black/20 hover:bg-amber-100/70 dark:hover:bg-amber-900/40 transition-colors flex items-center justify-between text-amber-950 dark:text-amber-200"
            >
              <span>3. المفقود ضمن العدد 50</span>
              <span className="font-sans font-bold text-[11px]">24 + ؟ = 42</span>
            </a>

            <a
              href="#/math/arithmetic/addition/missing-within-100"
              onClick={(e) => handleTestClick('/math/arithmetic/addition/missing-within-100', 'missing-within-100', e)}
              className="p-2 rounded-lg bg-white/70 dark:bg-black/20 hover:bg-amber-100/70 dark:hover:bg-amber-900/40 transition-colors flex items-center justify-between text-amber-950 dark:text-amber-200"
            >
              <span>4. المفقود ضمن العدد 100</span>
              <span className="font-sans font-bold text-[11px]">45 + ؟ = 100</span>
            </a>

            <a
              href="#/math/arithmetic/addition/missing-fractions"
              onClick={(e) => handleTestClick('/math/arithmetic/addition/missing-fractions', 'missing-fractions', e)}
              className="p-2 rounded-lg bg-white/70 dark:bg-black/20 hover:bg-amber-100/70 dark:hover:bg-amber-900/40 transition-colors flex items-center justify-between text-amber-950 dark:text-amber-200"
            >
              <span>5. كسر الجمع المفقود</span>
              <span className="font-sans font-bold text-[11px]">1/4 + ؟ = 3/4</span>
            </a>

            <a
              href="#/math/arithmetic/addition/missing-decimals"
              onClick={(e) => handleTestClick('/math/arithmetic/addition/missing-decimals', 'missing-decimals', e)}
              className="p-2 rounded-lg bg-white/70 dark:bg-black/20 hover:bg-amber-100/70 dark:hover:bg-amber-900/40 transition-colors flex items-center justify-between text-amber-950 dark:text-amber-200"
            >
              <span>6. العدد العشري المفقود</span>
              <span className="font-sans font-bold text-[11px]">0.3 + ؟ = 0.8</span>
            </a>
          </div>
        </div>
      </section>

      {/* Section 4: شبكة وفهرس الروابط الداخلية لجميع الاختبارات الـ 12 (Internal Linking Hub) */}
      <section className="space-y-4">
        <div className="flex items-center justify-between pb-2 border-b border-black/[0.04] dark:border-white/[0.04]">
          <h3 className={`text-base sm:text-xl font-bold ${themeClasses.textPrimary} flex items-center gap-2`}>
            <Compass className="w-5 h-5 text-[#127052] dark:text-[#5EB5A1]" />
            <span>رابعاً: الفهرس التفاعلي الشامل لجميع اختبارات الجمع (12 اختباراً)</span>
          </h3>
          <span className={`text-xs ${themeClasses.textMuted}`}>
            روابط مباشرة ومفهرسة
          </span>
        </div>

        <p className={`text-xs sm:text-sm ${themeClasses.textSecondary}`}>
          اختر أي اختبار أدناه للانتقال الفوري إلى بيئة الاختبار المستقلة مع المؤقت والأسئلة التفاعلية وشرح النتائج:
        </p>

        {/* 12 Interlinked Quizzes Full Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {/* Test 1 */}
          <div className={`p-4 rounded-xl border ${themeClasses.border} ${themeClasses.cardBg} hover:border-[#127052] flex flex-col justify-between gap-2.5 transition-all`}>
            <div>
              <div className="flex items-center justify-between text-xs pb-1">
                <span className="px-2 py-0.5 rounded bg-emerald-100/70 dark:bg-emerald-950/50 text-emerald-800 dark:text-emerald-300 font-mono text-xs font-bold">#01</span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold">أساسي</span>
              </div>
              <h5 className={`font-bold text-xs sm:text-sm ${themeClasses.textPrimary}`}>
                <a
                  href="#/math/arithmetic/addition/single-digits"
                  onClick={(e) => handleTestClick('/math/arithmetic/addition/single-digits', 'single-digit-addition', e)}
                  className="hover:text-[#127052] dark:hover:text-[#5EB5A1] transition-colors"
                >
                  اختبار جمع الأرقام الفردية من 1 إلى 10
                </a>
              </h5>
              <p className={`text-[11px] ${themeClasses.textMuted} mt-1`}>
                المستوى التأسيسي الأول للأطفال والمبتدئين لقياس سرعة البديهة.
              </p>
            </div>
            <a
              href="#/math/arithmetic/addition/single-digits"
              onClick={(e) => handleTestClick('/math/arithmetic/addition/single-digits', 'single-digit-addition', e)}
              className="text-[11px] font-bold text-[#127052] dark:text-[#5EB5A1] flex items-center gap-1 hover:underline"
            >
              <span>بدء الاختبار</span>
              <ArrowRight className="w-3 h-3 rotate-180" />
            </a>
          </div>

          {/* Test 2 */}
          <div className={`p-4 rounded-xl border ${themeClasses.border} ${themeClasses.cardBg} hover:border-[#127052] flex flex-col justify-between gap-2.5 transition-all`}>
            <div>
              <div className="flex items-center justify-between text-xs pb-1">
                <span className="px-2 py-0.5 rounded bg-blue-100/70 dark:bg-blue-950/50 text-blue-800 dark:text-blue-300 font-mono text-xs font-bold">#02</span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold">أساسي</span>
              </div>
              <h5 className={`font-bold text-xs sm:text-sm ${themeClasses.textPrimary}`}>
                <a
                  href="#/math/arithmetic/addition/within-20"
                  onClick={(e) => handleTestClick('/math/arithmetic/addition/within-20', 'addition-within-20', e)}
                  className="hover:text-[#127052] dark:hover:text-[#5EB5A1] transition-colors"
                >
                  الجمع ضمن العدد 20
                </a>
              </h5>
              <p className={`text-[11px] ${themeClasses.textMuted} mt-1`}>
                تكوين العشرة ومضاعفات الأعداد وعبور العشرات للناشئين.
              </p>
            </div>
            <a
              href="#/math/arithmetic/addition/within-20"
              onClick={(e) => handleTestClick('/math/arithmetic/addition/within-20', 'addition-within-20', e)}
              className="text-[11px] font-bold text-[#127052] dark:text-[#5EB5A1] flex items-center gap-1 hover:underline"
            >
              <span>بدء الاختبار</span>
              <ArrowRight className="w-3 h-3 rotate-180" />
            </a>
          </div>

          {/* Test 3 */}
          <div className={`p-4 rounded-xl border ${themeClasses.border} ${themeClasses.cardBg} hover:border-[#127052] flex flex-col justify-between gap-2.5 transition-all`}>
            <div>
              <div className="flex items-center justify-between text-xs pb-1">
                <span className="px-2 py-0.5 rounded bg-orange-100/70 dark:bg-orange-950/50 text-orange-800 dark:text-orange-300 font-mono text-xs font-bold">#03</span>
                <span className="px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 text-[10px] font-bold">متوسط</span>
              </div>
              <h5 className={`font-bold text-xs sm:text-sm ${themeClasses.textPrimary}`}>
                <a
                  href="#/math/arithmetic/addition/within-50"
                  onClick={(e) => handleTestClick('/math/arithmetic/addition/within-50', 'addition-within-50', e)}
                  className="hover:text-[#127052] dark:hover:text-[#5EB5A1] transition-colors"
                >
                  اختبار الجمع ضمن العدد 50
                </a>
              </h5>
              <p className={`text-[11px] ${themeClasses.textMuted} mt-1`}>
                جمع الأعداد من منزلتين مع الحمل الخفيف واستراتيجيات التعويض.
              </p>
            </div>
            <a
              href="#/math/arithmetic/addition/within-50"
              onClick={(e) => handleTestClick('/math/arithmetic/addition/within-50', 'addition-within-50', e)}
              className="text-[11px] font-bold text-[#127052] dark:text-[#5EB5A1] flex items-center gap-1 hover:underline"
            >
              <span>بدء الاختبار</span>
              <ArrowRight className="w-3 h-3 rotate-180" />
            </a>
          </div>

          {/* Test 4 */}
          <div className={`p-4 rounded-xl border ${themeClasses.border} ${themeClasses.cardBg} hover:border-[#127052] flex flex-col justify-between gap-2.5 transition-all`}>
            <div>
              <div className="flex items-center justify-between text-xs pb-1">
                <span className="px-2 py-0.5 rounded bg-purple-100/70 dark:bg-purple-950/50 text-purple-800 dark:text-purple-300 font-mono text-xs font-bold">#04</span>
                <span className="px-2 py-0.5 rounded-full bg-rose-50 text-rose-700 text-[10px] font-bold">متقدم</span>
              </div>
              <h5 className={`font-bold text-xs sm:text-sm ${themeClasses.textPrimary}`}>
                <a
                  href="#/math/arithmetic/addition/within-100"
                  onClick={(e) => handleTestClick('/math/arithmetic/addition/within-100', 'addition-within-100', e)}
                  className="hover:text-[#127052] dark:hover:text-[#5EB5A1] transition-colors"
                >
                  اختبار الجمع ضمن العدد 100
                </a>
              </h5>
              <p className={`text-[11px] ${themeClasses.textMuted} mt-1`}>
                أصدقاء المئة والجمع بإعادة التجميع والطلاقة الكاملة.
              </p>
            </div>
            <a
              href="#/math/arithmetic/addition/within-100"
              onClick={(e) => handleTestClick('/math/arithmetic/addition/within-100', 'addition-within-100', e)}
              className="text-[11px] font-bold text-[#127052] dark:text-[#5EB5A1] flex items-center gap-1 hover:underline"
            >
              <span>بدء الاختبار</span>
              <ArrowRight className="w-3 h-3 rotate-180" />
            </a>
          </div>

          {/* Test 5 */}
          <div className={`p-4 rounded-xl border ${themeClasses.border} ${themeClasses.cardBg} hover:border-[#127052] flex flex-col justify-between gap-2.5 transition-all`}>
            <div>
              <div className="flex items-center justify-between text-xs pb-1">
                <span className="px-2 py-0.5 rounded bg-red-100/70 dark:bg-red-950/50 text-red-800 dark:text-red-300 font-mono text-xs font-bold">#05</span>
                <span className="px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 text-[10px] font-bold">متوسط</span>
              </div>
              <h5 className={`font-bold text-xs sm:text-sm ${themeClasses.textPrimary}`}>
                <a
                  href="#/math/arithmetic/addition/fractions"
                  onClick={(e) => handleTestClick('/math/arithmetic/addition/fractions', 'fractions-addition', e)}
                  className="hover:text-[#127052] dark:hover:text-[#5EB5A1] transition-colors"
                >
                  اختبار جمع الكسور
                </a>
              </h5>
              <p className={`text-[11px] ${themeClasses.textMuted} mt-1`}>
                توحيد المقامات وجمع الكسور بعرض عمودي للبسط والمقام.
              </p>
            </div>
            <a
              href="#/math/arithmetic/addition/fractions"
              onClick={(e) => handleTestClick('/math/arithmetic/addition/fractions', 'fractions-addition', e)}
              className="text-[11px] font-bold text-[#127052] dark:text-[#5EB5A1] flex items-center gap-1 hover:underline"
            >
              <span>بدء الاختبار</span>
              <ArrowRight className="w-3 h-3 rotate-180" />
            </a>
          </div>

          {/* Test 6 */}
          <div className={`p-4 rounded-xl border ${themeClasses.border} ${themeClasses.cardBg} hover:border-[#127052] flex flex-col justify-between gap-2.5 transition-all`}>
            <div>
              <div className="flex items-center justify-between text-xs pb-1">
                <span className="px-2 py-0.5 rounded bg-amber-100/70 dark:bg-amber-950/50 text-amber-800 dark:text-amber-300 font-mono text-xs font-bold">#06</span>
                <span className="px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 text-[10px] font-bold">متوسط</span>
              </div>
              <h5 className={`font-bold text-xs sm:text-sm ${themeClasses.textPrimary}`}>
                <a
                  href="#/math/arithmetic/addition/decimals"
                  onClick={(e) => handleTestClick('/math/arithmetic/addition/decimals', 'decimals-addition', e)}
                  className="hover:text-[#127052] dark:hover:text-[#5EB5A1] transition-colors"
                >
                  اختبار جمع الأعداد العشرية
                </a>
              </h5>
              <p className={`text-[11px] ${themeClasses.textMuted} mt-1`}>
                محاذاة الفواصل العشرية وجمع الأعشار والأجزاء من مئة.
              </p>
            </div>
            <a
              href="#/math/arithmetic/addition/decimals"
              onClick={(e) => handleTestClick('/math/arithmetic/addition/decimals', 'decimals-addition', e)}
              className="text-[11px] font-bold text-[#127052] dark:text-[#5EB5A1] flex items-center gap-1 hover:underline"
            >
              <span>بدء الاختبار</span>
              <ArrowRight className="w-3 h-3 rotate-180" />
            </a>
          </div>

          {/* Test 7 */}
          <div className={`p-4 rounded-xl border ${themeClasses.border} ${themeClasses.cardBg} hover:border-[#127052] flex flex-col justify-between gap-2.5 transition-all`}>
            <div>
              <div className="flex items-center justify-between text-xs pb-1">
                <span className="px-2 py-0.5 rounded bg-emerald-100/70 dark:bg-emerald-950/50 text-emerald-800 dark:text-emerald-300 font-mono text-xs font-bold">#07</span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold">أساسي</span>
              </div>
              <h5 className={`font-bold text-xs sm:text-sm ${themeClasses.textPrimary}`}>
                <a
                  href="#/math/arithmetic/addition/missing-single-digits"
                  onClick={(e) => handleTestClick('/math/arithmetic/addition/missing-single-digits', 'missing-single-digits', e)}
                  className="hover:text-[#127052] dark:hover:text-[#5EB5A1] transition-colors"
                >
                  اختبار جمع الأرقام من 1 إلى 10 (الرقم المفقود)
                </a>
              </h5>
              <p className={`text-[11px] ${themeClasses.textMuted} mt-1`}>
                إيجاد الحد المجهول من 1 إلى 10 والتأسيس الجبري الأولي.
              </p>
            </div>
            <a
              href="#/math/arithmetic/addition/missing-single-digits"
              onClick={(e) => handleTestClick('/math/arithmetic/addition/missing-single-digits', 'missing-single-digits', e)}
              className="text-[11px] font-bold text-[#127052] dark:text-[#5EB5A1] flex items-center gap-1 hover:underline"
            >
              <span>بدء الاختبار</span>
              <ArrowRight className="w-3 h-3 rotate-180" />
            </a>
          </div>

          {/* Test 8 */}
          <div className={`p-4 rounded-xl border ${themeClasses.border} ${themeClasses.cardBg} hover:border-[#127052] flex flex-col justify-between gap-2.5 transition-all`}>
            <div>
              <div className="flex items-center justify-between text-xs pb-1">
                <span className="px-2 py-0.5 rounded bg-blue-100/70 dark:bg-blue-950/50 text-blue-800 dark:text-blue-300 font-mono text-xs font-bold">#08</span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold">أساسي</span>
              </div>
              <h5 className={`font-bold text-xs sm:text-sm ${themeClasses.textPrimary}`}>
                <a
                  href="#/math/arithmetic/addition/missing-within-20"
                  onClick={(e) => handleTestClick('/math/arithmetic/addition/missing-within-20', 'missing-within-20', e)}
                  className="hover:text-[#127052] dark:hover:text-[#5EB5A1] transition-colors"
                >
                  اختبار الجمع ضمن العدد 20 (الرقم المفقود)
                </a>
              </h5>
              <p className={`text-[11px] ${themeClasses.textMuted} mt-1`}>
                حساب المجهول حتى 20 وتطبيقات تكوين العشرة العكسية.
              </p>
            </div>
            <a
              href="#/math/arithmetic/addition/missing-within-20"
              onClick={(e) => handleTestClick('/math/arithmetic/addition/missing-within-20', 'missing-within-20', e)}
              className="text-[11px] font-bold text-[#127052] dark:text-[#5EB5A1] flex items-center gap-1 hover:underline"
            >
              <span>بدء الاختبار</span>
              <ArrowRight className="w-3 h-3 rotate-180" />
            </a>
          </div>

          {/* Test 9 */}
          <div className={`p-4 rounded-xl border ${themeClasses.border} ${themeClasses.cardBg} hover:border-[#127052] flex flex-col justify-between gap-2.5 transition-all`}>
            <div>
              <div className="flex items-center justify-between text-xs pb-1">
                <span className="px-2 py-0.5 rounded bg-orange-100/70 dark:bg-orange-950/50 text-orange-800 dark:text-orange-300 font-mono text-xs font-bold">#09</span>
                <span className="px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 text-[10px] font-bold">متوسط</span>
              </div>
              <h5 className={`font-bold text-xs sm:text-sm ${themeClasses.textPrimary}`}>
                <a
                  href="#/math/arithmetic/addition/missing-within-50"
                  onClick={(e) => handleTestClick('/math/arithmetic/addition/missing-within-50', 'missing-within-50', e)}
                  className="hover:text-[#127052] dark:hover:text-[#5EB5A1] transition-colors"
                >
                  اختبار الجمع ضمن العدد 50 (الرقم المفقود)
                </a>
              </h5>
              <p className={`text-[11px] ${themeClasses.textMuted} mt-1`}>
                المعادلات ثنائية المنزلة واكتشاف العشرات والآحاد الناقصة.
              </p>
            </div>
            <a
              href="#/math/arithmetic/addition/missing-within-50"
              onClick={(e) => handleTestClick('/math/arithmetic/addition/missing-within-50', 'missing-within-50', e)}
              className="text-[11px] font-bold text-[#127052] dark:text-[#5EB5A1] flex items-center gap-1 hover:underline"
            >
              <span>بدء الاختبار</span>
              <ArrowRight className="w-3 h-3 rotate-180" />
            </a>
          </div>

          {/* Test 10 */}
          <div className={`p-4 rounded-xl border ${themeClasses.border} ${themeClasses.cardBg} hover:border-[#127052] flex flex-col justify-between gap-2.5 transition-all`}>
            <div>
              <div className="flex items-center justify-between text-xs pb-1">
                <span className="px-2 py-0.5 rounded bg-purple-100/70 dark:bg-purple-950/50 text-purple-800 dark:text-purple-300 font-mono text-xs font-bold">#10</span>
                <span className="px-2 py-0.5 rounded-full bg-rose-50 text-rose-700 text-[10px] font-bold">متقدم</span>
              </div>
              <h5 className={`font-bold text-xs sm:text-sm ${themeClasses.textPrimary}`}>
                <a
                  href="#/math/arithmetic/addition/missing-within-100"
                  onClick={(e) => handleTestClick('/math/arithmetic/addition/missing-within-100', 'missing-within-100', e)}
                  className="hover:text-[#127052] dark:hover:text-[#5EB5A1] transition-colors"
                >
                  اختبار الجمع ضمن العدد 100 (الرقم المفقود)
                </a>
              </h5>
              <p className={`text-[11px] ${themeClasses.textMuted} mt-1`}>
                تحدي إكمال المئة واكتشاف الحدود المفقودة المعقدة.
              </p>
            </div>
            <a
              href="#/math/arithmetic/addition/missing-within-100"
              onClick={(e) => handleTestClick('/math/arithmetic/addition/missing-within-100', 'missing-within-100', e)}
              className="text-[11px] font-bold text-[#127052] dark:text-[#5EB5A1] flex items-center gap-1 hover:underline"
            >
              <span>بدء الاختبار</span>
              <ArrowRight className="w-3 h-3 rotate-180" />
            </a>
          </div>

          {/* Test 11 */}
          <div className={`p-4 rounded-xl border ${themeClasses.border} ${themeClasses.cardBg} hover:border-[#127052] flex flex-col justify-between gap-2.5 transition-all`}>
            <div>
              <div className="flex items-center justify-between text-xs pb-1">
                <span className="px-2 py-0.5 rounded bg-red-100/70 dark:bg-red-950/50 text-red-800 dark:text-red-300 font-mono text-xs font-bold">#11</span>
                <span className="px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 text-[10px] font-bold">متوسط</span>
              </div>
              <h5 className={`font-bold text-xs sm:text-sm ${themeClasses.textPrimary}`}>
                <a
                  href="#/math/arithmetic/addition/missing-fractions"
                  onClick={(e) => handleTestClick('/math/arithmetic/addition/missing-fractions', 'missing-fractions', e)}
                  className="hover:text-[#127052] dark:hover:text-[#5EB5A1] transition-colors"
                >
                  اختبار جمع الكسور (الرقم المفقود)
                </a>
              </h5>
              <p className={`text-[11px] ${themeClasses.textMuted} mt-1`}>
                إيجاد الكسر المكمل للواحد الصحيح أو المتمم للكسر المستهدف.
              </p>
            </div>
            <a
              href="#/math/arithmetic/addition/missing-fractions"
              onClick={(e) => handleTestClick('/math/arithmetic/addition/missing-fractions', 'missing-fractions', e)}
              className="text-[11px] font-bold text-[#127052] dark:text-[#5EB5A1] flex items-center gap-1 hover:underline"
            >
              <span>بدء الاختبار</span>
              <ArrowRight className="w-3 h-3 rotate-180" />
            </a>
          </div>

          {/* Test 12 */}
          <div className={`p-4 rounded-xl border ${themeClasses.border} ${themeClasses.cardBg} hover:border-[#127052] flex flex-col justify-between gap-2.5 transition-all`}>
            <div>
              <div className="flex items-center justify-between text-xs pb-1">
                <span className="px-2 py-0.5 rounded bg-yellow-100/70 dark:bg-yellow-950/50 text-yellow-800 dark:text-yellow-300 font-mono text-xs font-bold">#12</span>
                <span className="px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 text-[10px] font-bold">متوسط</span>
              </div>
              <h5 className={`font-bold text-xs sm:text-sm ${themeClasses.textPrimary}`}>
                <a
                  href="#/math/arithmetic/addition/missing-decimals"
                  onClick={(e) => handleTestClick('/math/arithmetic/addition/missing-decimals', 'missing-decimals', e)}
                  className="hover:text-[#127052] dark:hover:text-[#5EB5A1] transition-colors"
                >
                  اختبار جمع الأعداد العشرية (الرقم المفقود)
                </a>
              </h5>
              <p className={`text-[11px] ${themeClasses.textMuted} mt-1`}>
                اكتشاف الجزء العشري المفقود ومتممات الواحد الصحيح العشرية.
              </p>
            </div>
            <a
              href="#/math/arithmetic/addition/missing-decimals"
              onClick={(e) => handleTestClick('/math/arithmetic/addition/missing-decimals', 'missing-decimals', e)}
              className="text-[11px] font-bold text-[#127052] dark:text-[#5EB5A1] flex items-center gap-1 hover:underline"
            >
              <span>بدء الاختبار</span>
              <ArrowRight className="w-3 h-3 rotate-180" />
            </a>
          </div>
        </div>
      </section>

      {/* Section 5: خطة الـ 10 دقائق اليومية وتوجيهات لأولياء الأمور والمعلمين */}
      <section className="space-y-3.5 pt-2">
        <h3 className={`text-base sm:text-xl font-bold ${themeClasses.textPrimary} flex items-center gap-2`}>
          <Award className="w-5 h-5 text-emerald-600" />
          <span>خامساً: خطة التدريب اليومية المقترحة (10 دقائق لتفوق دائم)</span>
        </h3>
        <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
          لا يتطلب إتقان مهارات الحساب ساعات طويلة من المذاكرة الشاقة؛ بل إن السر يكمن في <strong>الممارسة المنتظمة القصيرة</strong> (Micro-learning). نوصي المعلمين وأولياء الأمور باتباع الخطة التالية:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1">
          <div className={`p-4 rounded-xl border ${themeClasses.border} ${themeClasses.pillBg} space-y-1.5`}>
            <span className={`font-bold text-xs sm:text-sm ${themeClasses.textPrimary} flex items-center gap-1.5`}>
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              1. اختبار مباشر يومياً
            </span>
            <p className={`text-xs ${themeClasses.textSecondary} leading-relaxed`}>
              خوض اختبار واحد من 10 أسئلة يومياً لمدة 5 دقائق، مع التركيز على هدوء الذهن وقراءة المسألة من اليمين إلى اليسار.
            </p>
          </div>

          <div className={`p-4 rounded-xl border ${themeClasses.border} ${themeClasses.pillBg} space-y-1.5`}>
            <span className={`font-bold text-xs sm:text-sm ${themeClasses.textPrimary} flex items-center gap-1.5`}>
              <CheckCircle2 className="w-4 h-4 text-amber-600" />
              2. التناوب مع الرقم المفقود
            </span>
            <p className={`text-xs ${themeClasses.textSecondary} leading-relaxed`}>
              في اليوم التالي، يتم حل الاختبار المقابل من نمط "الرقم المفقود" لنفس النطاق العددي لتحفيز التفكير العكسي.
            </p>
          </div>

          <div className={`p-4 rounded-xl border ${themeClasses.border} ${themeClasses.pillBg} space-y-1.5`}>
            <span className={`font-bold text-xs sm:text-sm ${themeClasses.textPrimary} flex items-center gap-1.5`}>
              <CheckCircle2 className="w-4 h-4 text-blue-600" />
              3. مراجعة شرح الإجابات
            </span>
            <p className={`text-xs ${themeClasses.textSecondary} leading-relaxed`}>
              استعراض صندوق مراجعة الحلول في نهاية كل اختبار، وقراءة التفسير الحسابي لأي سؤال لم يوفق فيه الطالب لتعلم الاستراتيجية.
            </p>
          </div>
        </div>
      </section>

      {/* Educational Footer Banner */}
      <footer className="p-4 rounded-xl bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/40 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2 text-emerald-900 dark:text-emerald-200">
          <BookOpen className="w-4 h-4 shrink-0 text-emerald-600" />
          <span className="font-semibold">
            جميع الاختبارات مجانية بالكامل ومصممة بألوان هادئة مريحة للعين ومعايير تربوية دقيقة.
          </span>
        </div>
        <span className="text-[11px] text-emerald-800 dark:text-emerald-300 font-bold">
          © كويزات الرياضيات - مسار الحساب الأساسي
        </span>
      </footer>
    </article>
  );
};
