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

interface LinearEquationsPillarArticleProps {
  onOpenTest?: (testId: string) => void;
  className?: string;
}

export const LinearEquationsPillarArticle: React.FC<LinearEquationsPillarArticleProps> = ({
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
      id="linear-equations-pillar-guide"
      className={`p-6 sm:p-10 rounded-2xl border ${themeClasses.border} ${themeClasses.cardBg} space-y-8 shadow-2xs leading-relaxed text-right ${className}`}
    >
      {/* Pillar Article Header */}
      <header className="space-y-3 pb-6 border-b border-black/[0.06] dark:border-white/[0.08]">
        <div className="flex items-center gap-2 text-xs font-bold text-[#127052] dark:text-[#5EB5A1]">
          <BookOpen className="w-4 h-4" />
          <span>المقالة المرجعية الشاملة (Pillar Guide) | أكاديمية كويزات الرياضيات</span>
        </div>

        <h2 className={`text-xl sm:text-3xl font-extrabold tracking-tight ${themeClasses.textPrimary}`}>
          الدليل المرجعي الشامل للمعادلات الخطية: من التأسيس الجبري إلى الهندسة التحليلية والأنظمة
        </h2>

        <p className={`text-sm sm:text-base ${themeClasses.textSecondary} leading-relaxed`}>
          تُعد المعادلات الخطية (Linear Equations) العمود الفقري للجبر الحديث؛ فهي الجسر الرياضي الذي يحول العلاقات والمسائل اللفظية المعقدة إلى نماذج عددية دقيقة. من خلال إتقان عزل المتغير، وقوانين الميل، وصيغة الميل والمقطع (y = mx + b)، وحل أنظمة المعادلات الآنية، يمتلك الطالب أقوى أداة رياضية لتفسير الظواهر العلمية والاقتصادية والهندسية.
        </p>

        <div className="flex flex-wrap gap-2 pt-2">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#127052]/10 text-[#127052] dark:text-[#5EB5A1] dark:bg-[#127052]/20">
            1️⃣ عزل المتغير والعمليات العكسية
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-600 dark:text-blue-400">
             الميل والمقطع والتمثيل البياني
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-600 dark:text-purple-400">
             أنظمة المعادلات والنمذجة الواقعية
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-600 dark:text-amber-400">
             12 اختباراً تفاعلياً عملياً
          </span>
        </div>
      </header>

      {/* Section 1: مفهوم المعادلة الخطية وخاصية الميزان */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-[#127052] dark:text-[#5EB5A1]" />
          <h3 className={`text-lg sm:text-xl font-bold ${themeClasses.textPrimary}`}>
            1. فلسفة المعادلة الخطية ومبدأ الميزان المتوازن
          </h3>
        </div>
        <p className={`text-sm sm:text-base ${themeClasses.textSecondary}`}>
          المعادلة الخطية هي معادلة جبرية من الدرجة الأولى (أعلى أس للمتغير فيها هو 1)، ولا تتضمن ضرب متغيرين معاً. تُبنى المعادلة على مبدأ كفتي الميزان المتطابقتين تماماً: أي عملية حسابية (جمع، طرح، ضرب، قسمة) تُجرى على إحدى الكفتين يجب إجراؤها بنفس القيمة على الكفة الأخرى للحفاظ على التكافؤ.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl border border-black/[0.08] dark:border-white/[0.08] bg-black/[0.02] dark:bg-white/[0.02] space-y-1">
            <h4 className="font-bold text-sm text-[#127052] dark:text-[#5EB5A1]">معادلات الخطوة الواحدة (One-Step)</h4>
            <p className="text-xs text-zinc-600 dark:text-zinc-300">
              تتطلب عملية عكسية واحدة: التخلص من الجمع بالطرح (x + 7 = 15 ⇒ x = 8)، أو التخلص من الضرب بالقسمة (4x = 32 ⇒ x = 8).
            </p>
          </div>
          <div className="p-4 rounded-xl border border-black/[0.08] dark:border-white/[0.08] bg-black/[0.02] dark:bg-white/[0.02] space-y-1">
            <h4 className="font-bold text-sm text-[#127052] dark:text-[#5EB5A1]">معادلات الخطوتين (Two-Step)</h4>
            <p className="text-xs text-zinc-600 dark:text-zinc-300">
              تتطلب عكس ترتيب العمليات (SADMEP): التخلص من الحد الثابت المجموع/المطروح أولاً، ثم التخلص من معامل المتغير ثانياً.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: خاصية التوزيع والمتغير في كلا الطرفين */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-[#127052] dark:text-[#5EB5A1]" />
          <h3 className={`text-lg sm:text-xl font-bold ${themeClasses.textPrimary}`}>
            2. تقنيات التوزيع وتجميع الحدود وتطهير المقامات
          </h3>
        </div>
        <p className={`text-sm sm:text-base ${themeClasses.textSecondary}`}>
          عندما تتشابك المعادلات بوجود أقواس أو كسور أو متغيرات موزعة على طرفي التساوي، نتبع استراتيجية التنظيم الجبري المحكمة:
        </p>
        <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-zinc-700 dark:text-zinc-300 pr-2">
          <li>
            <strong className="text-zinc-900 dark:text-zinc-100">فك الأقواس بالتوزيع:</strong> ضرب المعامل الخارجي في كل حد داخل القوس مع الحذر الشديد من ضرب الإشارات السالبة: <span className="font-mono font-bold">-2(x - 4) = -2x + 8</span>.
          </li>
          <li>
            <strong className="text-zinc-900 dark:text-zinc-100">نقل المتغير الأصغر:</strong> عند وجود 5x في طرف و 2x في الطرف الآخر، نطرح 2x من الطرفين ليبقى المعامل موجباً (3x) ونتفادى أخطاء القسمة السالبة.
          </li>
          <li>
            <strong className="text-zinc-900 dark:text-zinc-100">تطهير المقامات (Clearing Fractions):</strong> ضرب طرفي المعادلة بالكامل في المضاعف المشترك الأصغر للمقامات لتحويل المسألة لأعداد صحيحة فوراً.
          </li>
        </ul>
      </section>

      {/* Section 3: الحالات الخاصة في حل المعادلات */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5 text-[#127052] dark:text-[#5EB5A1]" />
          <h3 className={`text-lg sm:text-xl font-bold ${themeClasses.textPrimary}`}>
            3. تشخيص الحالات الخاصة: الحل الوحيد، الاستحالة، واللانهاية
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl border border-black/[0.08] dark:border-white/[0.08] bg-black/[0.02] dark:bg-white/[0.02] space-y-1.5">
            <h4 className="font-bold text-sm text-[#127052] dark:text-[#5EB5A1]">حل وحيد فريد (x = a)</h4>
            <p className="text-xs text-zinc-600 dark:text-zinc-300">
              يتبقى المتغير مساوياً لقيمة عددية محددة. حتى وإن كان x = 0، فهو حل حقيقي ووحيد تماماً، ويمثل نقطة تقاطع واحدة للمستقيمين.
            </p>
          </div>
          <div className="p-4 rounded-xl border border-black/[0.08] dark:border-white/[0.08] bg-black/[0.02] dark:bg-white/[0.02] space-y-1.5">
            <h4 className="font-bold text-sm text-rose-600 dark:text-rose-400">مستحيلة الحل (No Solution ∅)</h4>
            <p className="text-xs text-zinc-600 dark:text-zinc-300">
              يختفي المتغير تماماً بالطرفين ويتبقى تناقض عددي مستحيل (مثل 2 = 5). بيانياً: المستقيمان متوازيان تماماً لا يلتقيان أبداً.
            </p>
          </div>
          <div className="p-4 rounded-xl border border-black/[0.08] dark:border-white/[0.08] bg-black/[0.02] dark:bg-white/[0.02] space-y-1.5">
            <h4 className="font-bold text-sm text-blue-600 dark:text-blue-400">متطابقة لانهائية (Identity)</h4>
            <p className="text-xs text-zinc-600 dark:text-zinc-300">
              يختفي المتغير ويتبقى تساوي حقيقي صحيح دائماً (مثل 8 = 8 أو 0 = 0). بيانياً: المستقيمان متطابقان تماماً فوق بعضهما.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: الهندسة التحليلية والميل والتمثيل البياني */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <Compass className="w-5 h-5 text-[#127052] dark:text-[#5EB5A1]" />
          <h3 className={`text-lg sm:text-xl font-bold ${themeClasses.textPrimary}`}>
            4. الهندسة التحليلية: الميل، صيغة y = mx + b، والتمثيل البياني
          </h3>
        </div>
        <p className={`text-sm sm:text-base ${themeClasses.textSecondary}`}>
          كل معادلة خطية بمتغيرين تمثل هندسياً خطاً مستقيماً على المستوى الإحداثي الديكارتي:
        </p>

        <div className="overflow-x-auto rounded-xl border border-black/[0.08] dark:border-white/[0.08]">
          <table className="w-full text-xs sm:text-sm text-right border-collapse">
            <thead>
              <tr className="bg-black/[0.04] dark:bg-white/[0.05] border-b border-black/[0.08] dark:border-white/[0.08]">
                <th className="p-3 font-bold">المفهوم الهندسي</th>
                <th className="p-3 font-bold">الصيغة الرياضية والقانون</th>
                <th className="p-3 font-bold">التفسير والخصائص</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-black/[0.06] dark:divide-white/[0.06]">
              <tr>
                <td className="p-3 font-bold text-[#127052] dark:text-[#5EB5A1]">الميل (Slope)</td>
                <td className="p-3 font-mono text-[11px] sm:text-xs dir-ltr text-right">m = (y₂ - y₁) / (x₂ - x₁)</td>
                <td className="p-3 text-zinc-600 dark:text-zinc-300">
                  معدل التغير الرأسي إلى الأفقي. الأفقي ميله صفر، والرأسي ميله غير معرّف.
                </td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-[#127052] dark:text-[#5EB5A1]">صيغة الميل والمقطع</td>
                <td className="p-3 font-mono text-[11px] sm:text-xs dir-ltr text-right">y = mx + b</td>
                <td className="p-3 text-zinc-600 dark:text-zinc-300">
                  m هو الميل، و b هو المقطع الصادي النقطة (0, b) على المحور الرأسي.
                </td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-[#127052] dark:text-[#5EB5A1]">المستقيمات المتوازية</td>
                <td className="p-3 font-mono text-[11px] sm:text-xs dir-ltr text-right">m₁ = m₂</td>
                <td className="p-3 text-zinc-600 dark:text-zinc-300">
                  نفس زاوية الانحدار ولا تتقاطع إطلاقاً إن اختلفت مقاطعها.
                </td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-[#127052] dark:text-[#5EB5A1]">المستقيمات المتعامدة</td>
                <td className="p-3 font-mono text-[11px] sm:text-xs dir-ltr text-right">m₁ × m₂ = -1</td>
                <td className="p-3 text-zinc-600 dark:text-zinc-300">
                  ميل أحدهما هو المعكوس الجمعي الضربي للآخر (اقلب واعكس الإشارة).
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 5: أنظمة المعادلات والنمذجة الواقعية */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <Layers className="w-5 h-5 text-[#127052] dark:text-[#5EB5A1]" />
          <h3 className={`text-lg sm:text-xl font-bold ${themeClasses.textPrimary}`}>
            5. أنظمة المعادلات الخطية والمسائل الكلامية التطبيقية
          </h3>
        </div>
        <p className={`text-sm sm:text-base ${themeClasses.textSecondary}`}>
          عندما يرتبط موقف حياتي بمتغيرين اثنين (مثل سعر قلم ودفتر، أو عمرين مختلفين)، نستخدم نظاماً من معادلتين خطيتين ونحلهما إما بـ:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl border border-black/[0.08] dark:border-white/[0.08] bg-black/[0.02] dark:bg-white/[0.02] space-y-1">
            <h4 className="font-bold text-sm text-[#127052] dark:text-[#5EB5A1]">طريقة الحذف (Elimination)</h4>
            <p className="text-xs text-zinc-600 dark:text-zinc-300">
              جمع أو طرح المعادلتين معاً للتخلص من أحد المتغيرين في خطوة واحدة، خاصة عند تعاكس الإشارات (+y و -y).
            </p>
          </div>
          <div className="p-4 rounded-xl border border-black/[0.08] dark:border-white/[0.08] bg-black/[0.02] dark:bg-white/[0.02] space-y-1">
            <h4 className="font-bold text-sm text-[#127052] dark:text-[#5EB5A1]">طريقة التعويض (Substitution)</h4>
            <p className="text-xs text-zinc-600 dark:text-zinc-300">
              عزل أحد المتغيرين في معادلة واحدة والتعويض بقيمته في المعادلة الأخرى، وهي مثالية عندما يكون المتغير بمعامل 1.
            </p>
          </div>
        </div>
      </section>

      {/* Section 6: خريطة الاختبارات الـ 12 */}
      <section className="space-y-4 pt-2">
        <div className="flex items-center gap-2">
          <Award className="w-5 h-5 text-[#127052] dark:text-[#5EB5A1]" />
          <h3 className={`text-lg sm:text-xl font-bold ${themeClasses.textPrimary}`}>
            6. خريطة الاختبارات التفاعلية الـ 12 في المعادلات الخطية
          </h3>
        </div>
        <p className={`text-sm ${themeClasses.textSecondary}`}>
          صممت الأكاديمية 12 اختباراً تفاعلياً متدرجاً يبدأ من الأساسيات حتى أصعب المسائل الهندسية وأنظمة المعادلات:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {[
            {
              id: 'one-step-equations',
              url: '/math/linear-equations/one-step-equations',
              num: 1,
              title: 'معادلات الخطوة الواحدة',
              desc: 'العمليات العكسية المفردة وعزل المجهول',
            },
            {
              id: 'two-step-equations',
              url: '/math/linear-equations/two-step-equations',
              num: 2,
              title: 'معادلات الخطوتين',
              desc: 'التخلص من الثابت ثم معامل المتغير',
            },
            {
              id: 'equations-parentheses-distributive',
              url: '/math/linear-equations/equations-parentheses-distributive',
              num: 3,
              title: 'الأقواس وخاصية التوزيع',
              desc: 'فك الأقواس وتجميع الحدود المتشابهة',
            },
            {
              id: 'equations-variables-both-sides',
              url: '/math/linear-equations/equations-variables-both-sides',
              num: 4,
              title: 'المتغير في كلا الطرفين',
              desc: 'نقل المتغير الأصغر وتوحيد الكفتين',
            },
            {
              id: 'equations-fractions-decimals',
              url: '/math/linear-equations/equations-fractions-decimals',
              num: 5,
              title: 'الكسور والأعداد العشرية',
              desc: 'تطهير المقامات بالمضاعف المشترك الأصغر',
            },
            {
              id: 'evaluating-algebraic-expressions',
              url: '/math/linear-equations/evaluating-algebraic-expressions',
              num: 6,
              title: 'التعويض والتعبير الجبري',
              desc: 'استبدال المتغيرات وتطبيق الأقواس الحامية',
            },
            {
              id: 'special-cases-equations',
              url: '/math/linear-equations/special-cases-equations',
              num: 7,
              title: 'الحالات الخاصة للمعادلات',
              desc: 'المعادلات المستحيلة والمتطابقات اللانهائية',
            },
            {
              id: 'finding-slope-linear',
              url: '/math/linear-equations/finding-slope-linear',
              num: 8,
              title: 'إيجاد ميل الخط المستقيم',
              desc: 'قانون التغير الرأسي والأفقي والتوازي والتعامد',
            },
            {
              id: 'writing-slope-intercept-form',
              url: '/math/linear-equations/writing-slope-intercept-form',
              num: 9,
              title: 'صيغة الميل والمقطع',
              desc: 'كتابة y = mx + b بمعلومية ميل ونقطة',
            },
            {
              id: 'graphing-linear-equations',
              url: '/math/linear-equations/graphing-linear-equations',
              num: 10,
              title: 'التمثيل البياني للمعادلات',
              desc: 'المقاطع السينية والصادية ورسم المستقيمات',
            },
            {
              id: 'systems-of-linear-equations',
              url: '/math/linear-equations/systems-of-linear-equations',
              num: 11,
              title: 'أنظمة المعادلات الخطية',
              desc: 'الحل المشترك بالحذف والتعويض والتقاطع',
            },
            {
              id: 'linear-equations-word-problems',
              url: '/math/linear-equations/linear-equations-word-problems',
              num: 12,
              title: 'المسائل الكلامية والتطبيقية',
              desc: 'ترجمة مواقف الشراء والتكاليف إلى نماذج جبرية',
            },
          ].map((item) => (
            <a
              key={item.id}
              href={item.url}
              onClick={(e) => handleTestClick(item.url, item.id, e)}
              className={`p-3.5 rounded-xl border transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xs group ${themeClasses.border} hover:border-[#127052] dark:hover:border-[#5EB5A1] bg-black/[0.01] dark:bg-white/[0.02]`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="w-5 h-5 rounded-full bg-[#127052]/10 dark:bg-[#127052]/20 text-[#127052] dark:text-[#5EB5A1] flex items-center justify-center text-[10px] font-bold">
                  {item.num}
                </span>
                <ArrowRight className="w-3.5 h-3.5 rotate-180 text-zinc-400 group-hover:text-[#127052] dark:group-hover:text-[#5EB5A1] transition-colors" />
              </div>
              <h4 className={`text-xs font-bold ${themeClasses.textPrimary} group-hover:text-[#127052] dark:group-hover:text-[#5EB5A1] transition-colors`}>
                {item.title}
              </h4>
              <p className={`text-[11px] ${themeClasses.textSecondary} mt-1 line-clamp-1`}>
                {item.desc}
              </p>
            </a>
          ))}
        </div>
      </section>

      {/* Golden Tip Callout */}
      <footer className="p-5 rounded-xl bg-[#127052]/10 dark:bg-[#127052]/20 border border-[#127052]/20 dark:border-[#5EB5A1]/30 flex items-start gap-3">
        <Lightbulb className="w-6 h-6 text-[#127052] dark:text-[#5EB5A1] shrink-0 mt-0.5" />
        <div className="space-y-1">
          <h4 className="font-bold text-sm text-[#127052] dark:text-[#5EB5A1]">
            نصيحة الأكاديمية الذهبية للإتقان الجبري:
          </h4>
          <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
            لا تعامل الجبر كحفظ جاف للقواعد، بل كـ <strong>لغة توازن وتجريد</strong>. بعد كل حل تصل إليه، استقطع 5 ثوانٍ فقط للتعويض بقيمتك في المعادلة الأصلية؛ إذا تساوت الكفتان فأنت متأكد 100% من صحة جوابك قبل أن يصححه لك أحد!
          </p>
        </div>
      </footer>
    </article>
  );
};
