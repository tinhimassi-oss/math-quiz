import React from 'react';
import {
  BookOpen,
  Sparkles,
  TrendingUp,
  Lightbulb,
  CheckCircle2,
  Award,
  Layers,
  Compass,
  ArrowRight,
} from 'lucide-react';
import { useEyeTheme } from '../context/ThemeContext';
import { navigateTo } from '../navigation/router';

interface InequalitiesPillarArticleProps {
  onOpenTest?: (testId: string) => void;
  className?: string;
}

export const InequalitiesPillarArticle: React.FC<InequalitiesPillarArticleProps> = ({
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
      id="inequalities-pillar-guide"
      className={`p-6 sm:p-10 rounded-2xl border ${themeClasses.border} ${themeClasses.cardBg} space-y-8 shadow-2xs leading-relaxed text-right ${className}`}
    >
      {/* Pillar Article Header */}
      <header className="space-y-3 pb-6 border-b border-black/[0.06] dark:border-white/[0.08]">
        <div className="flex items-center gap-2 text-xs font-bold text-[#127052] dark:text-[#5EB5A1]">
          <BookOpen className="w-4 h-4" />
          <span>المقالة المرجعية الشاملة (Pillar Guide) | أكاديمية كويزات الرياضيات</span>
        </div>

        <h2 className={`text-xl sm:text-3xl font-extrabold tracking-tight ${themeClasses.textPrimary}`}>
          الدليل المرجعي الشامل للمتباينات: من الرموز والعمليات العكسية إلى المتباينات المركبة والمستوى الإحداثي
        </h2>

        <p className={`text-sm sm:text-base ${themeClasses.textSecondary} leading-relaxed`}>
          تُعتبر المتباينات (Inequalities) اللغة الرياضية الأساسية لوصف القيود، وتحديد هوامش الأمان، وصنع القرارات في البيئات غير المتساوية. على عكس المعادلات التي تبحث عن نقطة توازن وحيدة، تفتح المتباينات آفاق الفترات ومجالات الحل اللانهائية، مما يجعلها ركيزة لا غنى عنها في الهندسة والاقتصاد وبرمجة الحواسيب وبحوث العمليات.
        </p>

        <div className="flex flex-wrap gap-2 pt-2">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#127052]/10 text-[#127052] dark:text-[#5EB5A1] dark:bg-[#127052]/20">
            1️⃣ الرموز وترجمة العبارات
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-600 dark:text-blue-400">
            2️⃣ خط الأعداد والفترات
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-600 dark:text-amber-400">
            3️⃣ القاعدة الذهبية للإشارة السالبة
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-600 dark:text-purple-400">
            4️⃣ المتباينات المركبة والقيمة المطلقة
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
            5️⃣ المستوى الإحداثي في متغيرين
          </span>
        </div>
      </header>

      {/* Section 1: Concept & Foundations */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-[#127052] dark:text-[#5EB5A1]" />
          <h3 className={`text-lg sm:text-xl font-bold ${themeClasses.textPrimary}`}>
            1. المفهوم التأسيسي: الفرق الجوهري بين المعادلة والمتباينة
          </h3>
        </div>
        <p className={`text-sm ${themeClasses.textSecondary}`}>
          في حين أن المعادلة <span className="font-mono dir-ltr font-bold text-[#127052]">x = 4</span> تعبر عن تطابق رقمي مطلق ومحدد، فإن المتباينة <span className="font-mono dir-ltr font-bold text-[#127052]">x ≥ 4</span> تعبر عن "شرط كفاية" يضم العدد 4 وجميع الأعداد الأكبر منه بلا نهاية. تنقسم المتباينات إلى نوعين رئيسيين:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          <div className="p-4 rounded-xl border border-black/[0.05] dark:border-white/[0.05] bg-black/[0.02] dark:bg-white/[0.02] space-y-2">
            <h4 className="font-bold text-sm text-[#127052] dark:text-[#5EB5A1]">
              المتباينات الصارمة (Strict Inequalities)
            </h4>
            <p className={`text-xs ${themeClasses.textSecondary}`}>
              تستخدم الرموز (<span className="font-bold">&gt;</span> أو <span className="font-bold">&lt;</span>)؛ ولا تسمح بالمساواة مطلقاً. عند تمثيلها على خط الأعداد نستخدم <strong className="text-[#127052]">دائرة مفتوحة</strong>، وفي الفترات نستخدم الأقواس الهلالية <span className="font-mono">( )</span>، وفي المستوى الإحداثي نستخدم <strong className="text-[#127052]">خطاً متقطعاً</strong>.
            </p>
          </div>
          <div className="p-4 rounded-xl border border-black/[0.05] dark:border-white/[0.05] bg-black/[0.02] dark:bg-white/[0.02] space-y-2">
            <h4 className="font-bold text-sm text-[#127052] dark:text-[#5EB5A1]">
              المتباينات غير الصارمة (Non-Strict Inequalities)
            </h4>
            <p className={`text-xs ${themeClasses.textSecondary}`}>
              تستخدم الرموز (<span className="font-bold">≥</span> أو <span className="font-bold">≤</span>)؛ وتسمح بتساوي الطرفين. عند تمثيلها نستخدم <strong className="text-[#127052]">دائرة مغلقة مظللة</strong>، وفي الفترات الأقواس المعقوفة <span className="font-mono">[ ]</span>، وفي المستوى الإحداثي <strong className="text-[#127052]">خطاً متصلاً</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Reversing Inequality Sign */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-amber-500" />
          <h3 className={`text-lg sm:text-xl font-bold ${themeClasses.textPrimary}`}>
            2. القاعدة الذهبية: لماذا ومتى تنعكس إشارة المتباينة؟
          </h3>
        </div>
        <p className={`text-sm ${themeClasses.textSecondary}`}>
          القاعدة التي تمثل أكثر من 70% من أخطاء الامتحانات هي قاعدة الإشارة السالبة:
        </p>
        <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-900 dark:text-amber-200 text-xs sm:text-sm space-y-2">
          <p className="font-bold">القاعدة الذهبية الصارمة:</p>
          <p>
            عند ضرب كلا طرفي المتباينة في عدد سالب، أو عند قسمة كلا الطرفين على عدد سالب، <strong>يجب عكس اتجاه رمز المتباينة فوراً</strong> (من أكبر إلى أصغر، أو من أصغر إلى أكبر).
          </p>
          <div className="p-2.5 rounded-lg bg-black/5 dark:bg-white/5 font-mono text-center dir-ltr text-xs sm:text-sm">
            -2x &gt; 6  ──(÷ -2)──►  x &lt; -3
          </div>
          <p className="text-xs text-amber-800 dark:text-amber-300">
            البرهان الهندسي: الضرب في سالب هو انعكاس مرآتي 180° حول الصفر، فالعدد الأكبر في الجانب الموجب يصبح الأبعد والأصغر في الجانب السالب!
          </p>
        </div>
      </section>

      {/* Section 3: Compound & Absolute Value */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <Layers className="w-5 h-5 text-purple-500" />
          <h3 className={`text-lg sm:text-xl font-bold ${themeClasses.textPrimary}`}>
            3. المتباينات المركبة والقيمة المطلقة كمسافات هندسية
          </h3>
        </div>
        <p className={`text-sm ${themeClasses.textSecondary}`}>
          في المرحلة المتقدمة، يتعلم الطالب دمج الشروط الرياضية:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl border border-black/[0.05] dark:border-white/[0.05] bg-black/[0.02] dark:bg-white/[0.02] space-y-2">
            <h4 className="font-bold text-sm text-purple-600 dark:text-purple-400">
              متباينات الحصر التقاربي (|x - a| &lt; k)
            </h4>
            <p className={`text-xs ${themeClasses.textSecondary}`}>
              تعني أن المسافة بين النقطة x والنقطة a أقل من k. تتفكك إلى متباينة مركبة ثلاثية الأطراف: <span className="font-mono dir-ltr font-bold">-k &lt; x - a &lt; k</span>، ويمثل حلها كقطعة مستقيمة محصورة بين حدين.
            </p>
          </div>
          <div className="p-4 rounded-xl border border-black/[0.05] dark:border-white/[0.05] bg-black/[0.02] dark:bg-white/[0.02] space-y-2">
            <h4 className="font-bold text-sm text-purple-600 dark:text-purple-400">
              متباينات الانفراج التباعدي (|x - a| &gt; k)
            </h4>
            <p className={`text-xs ${themeClasses.textSecondary}`}>
              تعني أن المسافة تزيد عن k، فتتفكك إلى متباينتي "أو": <span className="font-mono dir-ltr font-bold">x - a &gt; k  أو  x - a &lt; -k</span>، ويمثل حلها كشعاعين يهربان مبتعدين في اتجاهين متضادين.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: All 12 Interactive Tests Directory */}
      <section className="space-y-4 pt-4 border-t border-black/[0.06] dark:border-white/[0.08]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Compass className="w-5 h-5 text-[#127052] dark:text-[#5EB5A1]" />
            <h3 className={`text-lg sm:text-xl font-bold ${themeClasses.textPrimary}`}>
              فهرس اختبارات المتباينات التفاعلية الـ 12
            </h3>
          </div>
          <span className="text-xs px-2.5 py-1 rounded-full bg-[#127052]/10 text-[#127052] dark:text-[#5EB5A1] font-semibold">
            12 اختباراً تفاعلياً مستقلاً
          </span>
        </div>
        <p className={`text-xs sm:text-sm ${themeClasses.textSecondary}`}>
          تم تصميم كل اختبار بمقالة تربوية مستقلة و10 أسئلة متدرجة تقيس الفهم التأسيسي والتطبيقي مع تصحيح لحظي وتوليد شهادة إنجاز:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-2">
          {[
            {
              id: 'inequality-symbols-comparison',
              num: 1,
              title: 'رموز المتباينات ومقارنتها',
              symbol: 'x ≥ 5',
              level: 'أساسي',
              url: '/math/inequalities/inequality-symbols-comparison',
            },
            {
              id: 'graphing-inequalities-number-line',
              num: 2,
              title: 'تمثيل المتباينات على خط الأعداد',
              symbol: 'x > 3 ⇒ ○ ────►',
              level: 'أساسي',
              url: '/math/inequalities/graphing-inequalities-number-line',
            },
            {
              id: 'one-step-addition-subtraction-inequalities',
              num: 3,
              title: 'متباينات الجمع والطرح (خطوة واحدة)',
              symbol: 'x + 4 < 9 ⇒ x < 5',
              level: 'أساسي',
              url: '/math/inequalities/one-step-addition-subtraction-inequalities',
            },
            {
              id: 'multiplication-division-positive-inequalities',
              num: 4,
              title: 'متباينات الضرب والقسمة (أعداد موجبة)',
              symbol: '3x ≥ 12 ⇒ x ≥ 4',
              level: 'أساسي',
              url: '/math/inequalities/multiplication-division-positive-inequalities',
            },
            {
              id: 'negative-multiplication-reversing-inequalities',
              num: 5,
              title: 'الضرب والقسمة في عدد سالب',
              symbol: '-2x > 6 ⇒ x < -3',
              level: 'متوسط',
              url: '/math/inequalities/negative-multiplication-reversing-inequalities',
            },
            {
              id: 'two-step-inequalities',
              num: 6,
              title: 'متباينات الخطوتين',
              symbol: '2x - 3 ≤ 7 ⇒ x ≤ 5',
              level: 'متوسط',
              url: '/math/inequalities/two-step-inequalities',
            },
            {
              id: 'distributive-parentheses-inequalities',
              num: 7,
              title: 'متباينات الأقواس والتوزيع',
              symbol: '3(x - 2) > 9 ⇒ x > 5',
              level: 'متوسط',
              url: '/math/inequalities/distributive-parentheses-inequalities',
            },
            {
              id: 'variables-both-sides-inequalities',
              num: 8,
              title: 'المتغير في كلا الطرفين',
              symbol: '5x + 2 < 2x + 11 ⇒ x < 3',
              level: 'متوسط',
              url: '/math/inequalities/variables-both-sides-inequalities',
            },
            {
              id: 'compound-inequalities',
              num: 9,
              title: 'المتباينات المركبة (و / أو)',
              symbol: '-2 < x + 1 ≤ 5',
              level: 'متقدم',
              url: '/math/inequalities/compound-inequalities',
            },
            {
              id: 'absolute-value-inequalities',
              num: 10,
              title: 'متباينات القيمة المطلقة',
              symbol: '|x - 3| < 5 ⇒ -2 < x < 8',
              level: 'متقدم',
              url: '/math/inequalities/absolute-value-inequalities',
            },
            {
              id: 'two-variable-linear-inequalities',
              num: 11,
              title: 'المتباينات في المستوى الإحداثي',
              symbol: 'y ≤ 2x + 1 ⇒ خط متصل',
              level: 'متقدم',
              url: '/math/inequalities/two-variable-linear-inequalities',
            },
            {
              id: 'inequalities-word-problems',
              num: 12,
              title: 'مسائل كلامية على المتباينات',
              symbol: '15x + 5 ≤ 50 ⇒ x ≤ 3',
              level: 'متقدم',
              url: '/math/inequalities/inequalities-word-problems',
            },
          ].map((item) => (
            <a
              key={item.id}
              href={`#${item.url}`}
              onClick={(e) => handleTestClick(item.url, item.id, e)}
              className={`p-3.5 rounded-xl border ${themeClasses.border} bg-black/[0.02] dark:bg-white/[0.02] hover:bg-[#127052]/5 dark:hover:bg-[#127052]/10 hover:border-[#127052]/40 transition-all flex flex-col justify-between group space-y-2`}
            >
              <div className="flex items-center justify-between">
                <span className="w-6 h-6 rounded-full bg-[#127052]/10 text-[#127052] dark:text-[#5EB5A1] text-xs font-bold flex items-center justify-center">
                  {item.num}
                </span>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-black/[0.04] dark:bg-white/[0.06] text-black/60 dark:text-white/60">
                  {item.level}
                </span>
              </div>
              <h4 className={`text-xs sm:text-sm font-bold ${themeClasses.textPrimary} group-hover:text-[#127052] dark:group-hover:text-[#5EB5A1] transition-colors leading-snug`}>
                {item.title}
              </h4>
              <div className="pt-2 border-t border-black/[0.04] dark:border-white/[0.04] flex items-center justify-between text-xs font-semibold text-[#127052] dark:text-[#5EB5A1]">
                <span className="font-mono text-[10px] dir-ltr text-black/50 dark:text-white/50">
                  {item.symbol}
                </span>
                <span className="flex items-center gap-1 group-hover:translate-x-[-2px] transition-transform text-[11px]">
                  خوض الاختبار
                  <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Summary Box */}
      <footer className="pt-6 border-t border-black/[0.06] dark:border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#127052]/5 dark:bg-[#127052]/10 p-5 rounded-2xl border border-[#127052]/20">
        <div className="flex items-center gap-3">
          <Award className="w-8 h-8 text-[#127052] dark:text-[#5EB5A1] shrink-0" />
          <div className="text-right">
            <h4 className={`text-sm font-bold ${themeClasses.textPrimary}`}>
              منظومة المتباينات الجبرية التفاعلية
            </h4>
            <p className={`text-xs ${themeClasses.textSecondary}`}>
              أكمل الاختبارات الـ 12 بالترتيب لتحصل على إتقان جبري شامل يؤهلك للتفوق في كافة الاختبارات المدرسية والقياسية.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-xs font-bold text-[#127052] dark:text-[#5EB5A1] shrink-0">
          <CheckCircle2 className="w-4 h-4" />
          <span>جاهز 100% للتدريب والاختبار</span>
        </div>
      </footer>
    </article>
  );
};
