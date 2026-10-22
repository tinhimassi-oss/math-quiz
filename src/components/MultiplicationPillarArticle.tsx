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

interface MultiplicationPillarArticleProps {
  onOpenTest?: (testId: string) => void;
  className?: string;
}

export const MultiplicationPillarArticle: React.FC<MultiplicationPillarArticleProps> = ({
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
      id="multiplication-pillar-guide"
      className={`p-6 sm:p-10 rounded-2xl border ${themeClasses.border} ${themeClasses.cardBg} space-y-8 shadow-2xs leading-relaxed text-right ${className}`}
    >
      {/* Pillar Article Header */}
      <header className="space-y-3 pb-6 border-b border-black/[0.06] dark:border-white/[0.08]">
        <div className="flex items-center gap-2 text-xs font-bold text-[#127052] dark:text-[#5EB5A1]">
          <BookOpen className="w-4 h-4" />
          <span>المقالة المرجعية الشاملة (Pillar Guide) | أكاديمية كويزات الرياضيات</span>
        </div>

        <h2 className={`text-xl sm:text-3xl font-extrabold tracking-tight ${themeClasses.textPrimary}`}>
          دليل اختبارات ومهارات الضرب وجداول الضرب الشامل: من التأسيس إلى الإتقان الذهني
        </h2>

        <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
          دليل تربوي ومنهجي مرجعي موجه للمعلمين والآباء والطلاب، يشرح المسار العلمي المتكامل لإتقان عمليات وحقائق الضرب. يحتوي على منظومة فريدة تضم <strong>12 اختباراً مهارياً</strong> متدرجاً من نواتج الآحاد حتى الكسور والعشري والمعادلات المجهولة، بالإضافة إلى <strong>10 اختبارات مستقلة لجداول الضرب من 1 إلى 10</strong> مع استراتيجيات الحفظ الذهني الفوري.
        </p>

        {/* Quick Metadata Bar */}
        <div className="flex flex-wrap items-center gap-3 pt-2 text-[11px] text-slate-500 dark:text-slate-400">
          <span className="flex items-center gap-1">
            <Layers className="w-3.5 h-3.5 text-[#127052] dark:text-[#5EB5A1]" />
            22 اختباراً تفاعلياً مستقلاً
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Calculator className="w-3.5 h-3.5 text-[#127052] dark:text-[#5EB5A1]" />
            10 جداول ضرب منفصلة (1 إلى 10)
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Award className="w-3.5 h-3.5 text-[#127052] dark:text-[#5EB5A1]" />
            تقييم فوري وشروحات تربوية لكل مسألة
          </span>
        </div>
      </header>

      {/* Section 1: Pedagogical Foundations of Multiplication */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-[#3B7A6A]/10 text-[#127052] dark:text-[#5EB5A1]">
            <Sparkles className="w-5 h-5" />
          </div>
          <h3 className={`text-lg sm:text-xl font-bold ${themeClasses.textPrimary}`}>
            1. الفلسفة التربوية: كيف يتعلم العقل عملية الضرب بذكاء؟
          </h3>
        </div>

        <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
          الخطأ الشائع في تعليم الضرب هو إجبار الطفل على الحفظ الصم المجرد للجداول دون بناء الصورة الذهنية. يثبت علم النفس المعرفي أن إتقان الضرب يمر عبر 3 مراحل متكاملة:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
          <div className={`p-4 rounded-xl border ${themeClasses.border} bg-black/[0.01] dark:bg-white/[0.01]`}>
            <div className="font-bold text-xs mb-1 text-[#127052] dark:text-[#5EB5A1]">1. المجموعات المتساوية والجمع المتكرر</div>
            <p className={`text-[11px] ${themeClasses.textMuted} leading-relaxed`}>
              إدراك أن 4 × 3 تعني 4 مجموعات في كل منها 3 عناصر (3 + 3 + 3 + 3 = 12).
            </p>
          </div>
          <div className={`p-4 rounded-xl border ${themeClasses.border} bg-black/[0.01] dark:bg-white/[0.01]`}>
            <div className="font-bold text-xs mb-1 text-[#127052] dark:text-[#5EB5A1]">2. استراتيجية الإبدال والمصفوفات</div>
            <p className={`text-[11px] ${themeClasses.textMuted} leading-relaxed`}>
              اكتشاف أن 3 × 7 هي نفسها 7 × 3، مما يخفض الجهد الذهني المطلوب لحفظ الجداول بنسبة 50%.
            </p>
          </div>
          <div className={`p-4 rounded-xl border ${themeClasses.border} bg-black/[0.01] dark:bg-white/[0.01]`}>
            <div className="font-bold text-xs mb-1 text-[#127052] dark:text-[#5EB5A1]">3. التفكير الاستنتاجي والعكسي</div>
            <p className={`text-[11px] ${themeClasses.textMuted} leading-relaxed`}>
              الربط بين الضرب والقسمة، وحل معادلات الرقم المفقود (مثل: 6 × ؟ = 42).
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Dedicated 10 Multiplication Tables */}
      <section className="space-y-4 pt-4 border-t border-black/[0.04] dark:border-white/[0.06]">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-[#3B7A6A]/10 text-[#127052] dark:text-[#5EB5A1]">
            <Compass className="w-5 h-5" />
          </div>
          <h3 className={`text-lg sm:text-xl font-bold ${themeClasses.textPrimary}`}>
            2. منظومة جداول الضرب العشرة المنفصلة (من جدول 1 إلى جدول 10)
          </h3>
        </div>

        <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
          خصصنا لكل جدول ضرب من 1 إلى 10 اختباراً مستقلاً تماماً يركز على خواصه الاستثنائية وخدعه الذهنية:
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 pt-2">
          {[
            { id: 'table-1', name: 'جدول 1', emoji: '', rule: 'المحايد الضربي', tip: 'يبقى العدد نفسه' },
            { id: 'table-2', name: 'جدول 2', emoji: '', rule: 'المضاعفة والأزواج', tip: 'ضعف العدد دائماً' },
            { id: 'table-3', name: 'جدول 3', emoji: '', rule: 'القفز الثلاثي', tip: 'الضعف + العدد' },
            { id: 'table-4', name: 'جدول 4', emoji: '', rule: 'ضعف الضعف', tip: 'مضاعفة مرتين' },
            { id: 'table-5', name: 'جدول 5', emoji: '', rule: 'عقارب الساعة', tip: 'ينتهي بـ 0 أو 5' },
            { id: 'table-6', name: 'جدول 6', emoji: '', rule: 'ضعف جدول 3', tip: 'الآحاد هو العدد الزوجي' },
            { id: 'table-7', name: 'جدول 7', emoji: '', rule: 'تفكيك (5 + 2)', tip: '56 = 7 × 8 المتتالية' },
            { id: 'table-8', name: 'جدول 8', emoji: '', rule: 'ضعف ضعف الضعف', tip: 'مضاعفة 3 مرات' },
            { id: 'table-9', name: 'جدول 9', emoji: '', rule: 'سحر التسعة', tip: 'مجموع المنازل = 9' },
            { id: 'table-10', name: 'جدول 10', emoji: '', rule: 'قوة الصفر', tip: 'إضافة صفر على اليمين' },
          ].map((tbl) => (
            <a
              key={tbl.id}
              href={`#/math/arithmetic/multiplication/${tbl.id}`}
              onClick={(e) => handleTestClick(`/math/arithmetic/multiplication/${tbl.id}`, tbl.id, e)}
              className={`p-3 rounded-xl border ${themeClasses.border} bg-black/[0.01] dark:bg-white/[0.02] hover:bg-[#3B7A6A]/10 transition-all text-center block group cursor-pointer`}
            >
              <div className="text-xl mb-1">{tbl.emoji}</div>
              <div className={`text-xs font-bold ${themeClasses.textPrimary} group-hover:text-[#127052] dark:group-hover:text-[#5EB5A1]`}>
                {tbl.name}
              </div>
              <div className="text-[10px] text-[#3B7A6A] dark:text-[#7BC3B1] font-medium mt-0.5">
                {tbl.rule}
              </div>
              <div className={`text-[9px] ${themeClasses.textMuted} mt-1`}>
                {tbl.tip}
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Section 3: The 12 Comprehensive Skill Tests */}
      <section className="space-y-4 pt-4 border-t border-black/[0.04] dark:border-white/[0.06]">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-[#3B7A6A]/10 text-[#127052] dark:text-[#5EB5A1]">
            <TrendingUp className="w-5 h-5" />
          </div>
          <h3 className={`text-lg sm:text-xl font-bold ${themeClasses.textPrimary}`}>
            3. المسار المهاري الشامل: 12 اختباراً تفاعلياً متدرجاً
          </h3>
        </div>

        <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
          تم توزيع الاختبارات الـ 12 المهارية لتبني التفكير الرياضي بدءاً من الضرب البسيط وحتى ضرب الكسور والأعشار وإيجاد العامل المجهول:
        </p>

        {/* Level 1: Foundation */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold text-emerald-700 dark:text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            المستوى الأول: التأسيس وحقائق الضرب الأولية (نتائج حتى 20)
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <a
              href="#/math/arithmetic/multiplication/single-digits"
              onClick={(e) => handleTestClick('/math/arithmetic/multiplication/single-digits', 'single-digit-multiplication', e)}
              className={`p-3.5 rounded-xl border ${themeClasses.border} hover:border-[#3B7A6A]/40 transition-all flex items-center justify-between group cursor-pointer`}
            >
              <div>
                <div className={`text-xs font-bold ${themeClasses.textPrimary} group-hover:text-[#127052] dark:group-hover:text-[#5EB5A1]`}>
                  اختبار ضرب الأرقام البسيطة من 1 إلى 10
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                  تمارين تأسيسية لحساب نواتج الضرب المباشرة لترسيخ مفهوم التكرار
                </div>
              </div>
              <span className="text-xs font-mono text-[#3B7A6A]">3 × 4 = 12</span>
            </a>

            <a
              href="#/math/arithmetic/multiplication/within-20"
              onClick={(e) => handleTestClick('/math/arithmetic/multiplication/within-20', 'multiplication-within-20', e)}
              className={`p-3.5 rounded-xl border ${themeClasses.border} hover:border-[#3B7A6A]/40 transition-all flex items-center justify-between group cursor-pointer`}
            >
              <div>
                <div className={`text-xs font-bold ${themeClasses.textPrimary} group-hover:text-[#127052] dark:group-hover:text-[#5EB5A1]`}>
                  اختبار الضرب ضمن العدد 20
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                  مضاعفة الأعداد والقفز والتثبيت الذهني للحقائق الصغيرة
                </div>
              </div>
              <span className="text-xs font-mono text-[#3B7A6A]">4 × 5 = 20</span>
            </a>
          </div>
        </div>

        {/* Level 2: Intermediate Multiplications */}
        <div className="space-y-3 pt-2">
          <div className="flex items-center gap-2 text-xs font-bold text-amber-700 dark:text-amber-400">
            <span className="w-2 h-2 rounded-full bg-amber-500"></span>
            المستوى الثاني: التوسع نحو نواتج 50 و 100 وجداول الضرب المتقدمة
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <a
              href="#/math/arithmetic/multiplication/within-50"
              onClick={(e) => handleTestClick('/math/arithmetic/multiplication/within-50', 'multiplication-within-50', e)}
              className={`p-3.5 rounded-xl border ${themeClasses.border} hover:border-[#3B7A6A]/40 transition-all flex items-center justify-between group cursor-pointer`}
            >
              <div>
                <div className={`text-xs font-bold ${themeClasses.textPrimary} group-hover:text-[#127052] dark:group-hover:text-[#5EB5A1]`}>
                  اختبار الضرب ضمن العدد 50
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                  استراتيجية توزيع الضرب على الجمع ونواتج جداول 5 و 6 و 7
                </div>
              </div>
              <span className="text-xs font-mono text-[#3B7A6A]">6 × 7 = 42</span>
            </a>

            <a
              href="#/math/arithmetic/multiplication/within-100"
              onClick={(e) => handleTestClick('/math/arithmetic/multiplication/within-100', 'multiplication-within-100', e)}
              className={`p-3.5 rounded-xl border ${themeClasses.border} hover:border-[#3B7A6A]/40 transition-all flex items-center justify-between group cursor-pointer`}
            >
              <div>
                <div className={`text-xs font-bold ${themeClasses.textPrimary} group-hover:text-[#127052] dark:group-hover:text-[#5EB5A1]`}>
                  اختبار الضرب ضمن العدد 100
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                  أصعب حقائق الضرب، مربعات الأعداد ونواتج جداول 8 و 9
                </div>
              </div>
              <span className="text-xs font-mono text-[#3B7A6A]">8 × 9 = 72</span>
            </a>
          </div>
        </div>

        {/* Level 3: Fractions & Decimals */}
        <div className="space-y-3 pt-2">
          <div className="flex items-center gap-2 text-xs font-bold text-sky-700 dark:text-sky-400">
            <span className="w-2 h-2 rounded-full bg-sky-500"></span>
            المستوى الثالث: ضرب الكسور والأعداد العشرية
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <a
              href="#/math/arithmetic/multiplication/fractions"
              onClick={(e) => handleTestClick('/math/arithmetic/multiplication/fractions', 'fractions-multiplication', e)}
              className={`p-3.5 rounded-xl border ${themeClasses.border} hover:border-[#3B7A6A]/40 transition-all flex items-center justify-between group cursor-pointer`}
            >
              <div>
                <div className={`text-xs font-bold ${themeClasses.textPrimary} group-hover:text-[#127052] dark:group-hover:text-[#5EB5A1]`}>
                  اختبار ضرب الكسور الاعتيادية
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                  ضرب البسط في البسط والمقام في المقام والتبسيط لأبسط صورة
                </div>
              </div>
              <span className="text-xs font-mono text-[#3B7A6A]">(2/3) × (3/4)</span>
            </a>

            <a
              href="#/math/arithmetic/multiplication/decimals"
              onClick={(e) => handleTestClick('/math/arithmetic/multiplication/decimals', 'decimals-multiplication', e)}
              className={`p-3.5 rounded-xl border ${themeClasses.border} hover:border-[#3B7A6A]/40 transition-all flex items-center justify-between group cursor-pointer`}
            >
              <div>
                <div className={`text-xs font-bold ${themeClasses.textPrimary} group-hover:text-[#127052] dark:group-hover:text-[#5EB5A1]`}>
                  اختبار ضرب الأعداد العشرية
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                  الضرب بدون فواصل ثم عد المنازل العشرية ووضع الفاصلة
                </div>
              </div>
              <span className="text-xs font-mono text-[#3B7A6A]">0.4 × 0.5 = 0.2</span>
            </a>
          </div>
        </div>

        {/* Level 4: Missing Numbers (Algebraic Thinking) */}
        <div className="space-y-3 pt-2">
          <div className="flex items-center gap-2 text-xs font-bold text-purple-700 dark:text-purple-400">
            <span className="w-2 h-2 rounded-full bg-purple-500"></span>
            المستوى الرابع: اختبارات الرقم المفقود (بناء التفكير الجبري المبكر)
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
            {[
              { id: 'missing-single-digits-multiplication', title: 'مفقود الأرقام (1 إلى 10)', symbol: '3 × ؟ = 15', desc: 'استنتاج العامل المجهول بالقسمة الذهنية' },
              { id: 'missing-within-20-multiplication', title: 'مفقود ضمن 20', symbol: '؟ × 4 = 16', desc: 'حقائق المربع وجداول 2 إلى 5' },
              { id: 'missing-within-50-multiplication', title: 'مفقود ضمن 50', symbol: '6 × ؟ = 42', desc: 'تفكيك النواتج المتوسطة' },
              { id: 'missing-within-100-multiplication', title: 'مفقود ضمن 100', symbol: '8 × ؟ = 56', desc: 'تحدي استنتاج النواتج الكبرى' },
              { id: 'missing-fractions-multiplication', title: 'مفقود الكسور', symbol: '(2/3) × ؟ = 2/9', desc: 'إيجاد الكسر الناقص بالمعكوس' },
              { id: 'missing-decimals-multiplication', title: 'مفقود الأعداد العشرية', symbol: '0.5 × ؟ = 0.35', desc: 'موازنة الفواصل العشرية والمجاهيل' },
            ].map((m) => (
              <a
                key={m.id}
                href={`#/math/arithmetic/multiplication/${m.id}`}
                onClick={(e) => handleTestClick(`/math/arithmetic/multiplication/${m.id}`, m.id, e)}
                className={`p-3 rounded-xl border ${themeClasses.border} hover:border-[#3B7A6A]/40 transition-all block group cursor-pointer`}
              >
                <div className={`text-xs font-bold ${themeClasses.textPrimary} group-hover:text-[#127052] dark:group-hover:text-[#5EB5A1]`}>
                  {m.title}
                </div>
                <div className="text-[11px] font-mono text-[#3B7A6A] my-1">
                  {m.symbol}
                </div>
                <div className={`text-[10px] ${themeClasses.textMuted}`}>
                  {m.desc}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Golden Rules for Speed and Mental Math */}
      <section className="space-y-4 pt-4 border-t border-black/[0.04] dark:border-white/[0.06]">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-[#3B7A6A]/10 text-[#127052] dark:text-[#5EB5A1]">
            <Lightbulb className="w-5 h-5" />
          </div>
          <h3 className={`text-lg sm:text-xl font-bold ${themeClasses.textPrimary}`}>
            4. أسرار وقواعد الحساب الذهني السريع في الضرب
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
          <div className={`p-4 rounded-xl border ${themeClasses.border} bg-black/[0.01] dark:bg-white/[0.01] space-y-2`}>
            <div className="flex items-center gap-1.5 text-xs font-bold text-[#127052] dark:text-[#5EB5A1]">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>استراتيجية (نصف وضعف) للضرب في 5</span>
            </div>
            <p className={`text-xs ${themeClasses.textSecondary} leading-relaxed`}>
              لضرب أي عدد زوجي في 5 بسرعة البرق: خذ نصف العدد وضع صفراً على يمينه! فمثلاً: 16 × 5: نصف 16 هو 8، ومع صفر تصبح 80 مباشرة.
            </p>
          </div>

          <div className={`p-4 rounded-xl border ${themeClasses.border} bg-black/[0.01] dark:bg-white/[0.01] space-y-2`}>
            <div className="flex items-center gap-1.5 text-xs font-bold text-[#127052] dark:text-[#5EB5A1]">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>استراتيجية الضرب في 9 (الضرب في 10 ثم الطرح)</span>
            </div>
            <p className={`text-xs ${themeClasses.textSecondary} leading-relaxed`}>
              لحساب 9 × 8: اضرب في 10 أولاً (80) ثم اطرح العدد نفسه (80 - 8 = 72). هذه أسرع طريقة لتخطي نسيان جدول 9.
            </p>
          </div>
        </div>
      </section>

      {/* Golden Tip Box */}
      <div className="p-5 rounded-xl border border-emerald-500/20 bg-emerald-50/40 dark:bg-emerald-950/20 text-xs sm:text-sm text-emerald-900 dark:text-emerald-200 flex items-start gap-3">
        <Award className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
        <div className="leading-relaxed">
          <strong>الوصية الذهبية لإتقان الضرب:</strong> التدريب اليومي لمدة 5 إلى 10 دقائق على اختبار تفاعلي واحد أفضل بكثير من جلسة حفظ طويلة مملة. ابدأ بجداولك المفضلة (2، 5، 10)، ثم تدرج نحو اختبارات الرقم المفقود لترسخ في ذهنك مهارة التفكير الرياضي الحر.
        </div>
      </div>
    </article>
  );
};
