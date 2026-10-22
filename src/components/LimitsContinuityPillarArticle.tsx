import React from 'react';
import {
  BookOpen,
  Sparkles,
  TrendingUp,
  Lightbulb,
  Layers,
  Compass,
  ArrowRight,
} from 'lucide-react';
import { useEyeTheme } from '../context/ThemeContext';
import { navigateTo } from '../navigation/router';

interface LimitsContinuityPillarArticleProps {
  onOpenTest?: (testId: string) => void;
  className?: string;
}

export const LimitsContinuityPillarArticle: React.FC<
  LimitsContinuityPillarArticleProps
> = ({ onOpenTest, className = '' }) => {
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
      id="limits-continuity-pillar-guide"
      className={`p-6 sm:p-10 rounded-2xl border ${themeClasses.border} ${themeClasses.cardBg} space-y-8 shadow-2xs leading-relaxed text-right ${className}`}
    >
      {/* Pillar Article Header */}
      <header className="space-y-3 pb-6 border-b border-black/[0.06] dark:border-white/[0.08]">
        <div className="flex items-center gap-2 text-xs font-bold text-indigo-600 dark:text-indigo-400">
          <BookOpen className="w-4 h-4" />
          <span>المقالة المرجعية الشاملة (Pillar Guide) | أكاديمية كويزات الرياضيات</span>
        </div>

        <h2 className={`text-xl sm:text-3xl font-extrabold tracking-tight ${themeClasses.textPrimary}`}>
          الدليل المرجعي الشامل للنهايات والاتصال: من مفهوم الاقتراب والتعويض المباشر إلى فك الصيغ غير المعينة ونظرية القيمة المتوسطة
        </h2>

        <p className={`text-sm sm:text-base ${themeClasses.textSecondary} leading-relaxed`}>
          مرجع أكاديمي وتربوي متكامل يغطي 12 موضوعاً واختباراً مستقلاً في النهايات والاتصال (Limits and Continuity) ضمن مساق التفاضل والتكامل؛ صُمم هذا المسار لتمكين الطلاب والباحثين من الاستيعاب العميق لمفهوم النهاية والتقدير البياني والعددي، وحساب النهايات بالتعويض المباشر، وتفكيك الصيغ غير المعينة (0/0) بالتحليل الجبري والضرب في المرافق، والنهايات من طرف واحد، ودراسة السلوك عند اللانهاية وخطوط التقارب الأفقية والرأسية، واختبار شروط الاتصال الثلاثة وتصنيف نقاط الانفصال، ونظرية القيمة المتوسطة (IVT)، والنهايات المثلثية المعيارية، وصولاً إلى التطبيقات الواقعية في حساب السرعة اللحظية ومعدلات التغير الفيزيائية والاقتصادية.
        </p>
      </header>

      {/* Structured Directory / Index of 12 Quizzes */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className={`text-lg font-bold flex items-center gap-2 ${themeClasses.textPrimary}`}>
            <Layers className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            <span>فهرس الاختبارات التفاعلية الـ 12 في النهايات والاتصال</span>
          </h3>
          <span className="text-xs text-gray-500 font-medium">120 مسألة نموذجية مع الشرح والتلميحات</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {[
            {
              id: 'graphical-numerical-limits',
              num: '1',
              title: 'مفهوم النهاية والتقدير البياني والعددي',
              desc: 'سلوك الدالة بجوار النقطة، قراءة المنحنيات البيانية، والجداول العددية التقاربية',
              url: '/domain/calculus/limits-continuity/graphical-numerical-limits',
              emoji: '',
            },
            {
              id: 'direct-substitution-limits',
              num: '2',
              title: 'حساب النهايات بالتعويض المباشر',
              desc: 'خصائص الجبر للنهايات، كثيرات الحدود، والدوال النسبية والجذرية المباشرة',
              url: '/domain/calculus/limits-continuity/direct-substitution-limits',
              emoji: '',
            },
            {
              id: 'factoring-indeterminate-limits',
              num: '3',
              title: 'النهايات الصفرية (0/0 بالتحليل)',
              desc: 'التحليل إلى العوامل، فرق المربعين والمكعبين، واختصار العامل الصفري المشترك',
              url: '/domain/calculus/limits-continuity/factoring-indeterminate-limits',
              emoji: '',
            },
            {
              id: 'rationalization-conjugate-limits',
              num: '4',
              title: 'حساب النهايات بالضرب في المرافق',
              desc: 'إنطاق البسط والمقام، التعامل مع الجذور التربيعية والتخلص من 0/0',
              url: '/domain/calculus/limits-continuity/rationalization-conjugate-limits',
              emoji: '',
            },
            {
              id: 'one-sided-limits',
              num: '5',
              title: 'النهايات من طرف واحد (One-Sided)',
              desc: 'النهاية من اليمين (x→c⁺) واليسار (x→c⁻)، ودوال القيمة المطلقة والمتشعبة',
              url: '/domain/calculus/limits-continuity/one-sided-limits',
              emoji: '',
            },
            {
              id: 'limits-at-infinity',
              num: '6',
              title: 'النهايات عند اللانهاية والسلوك المقارب',
              desc: 'سلوك طرفي الدالة عند x→±∞، خطوط التقارب الأفقية، وقاعدة أعلى درجة',
              url: '/domain/calculus/limits-continuity/limits-at-infinity',
              emoji: '',
            },
            {
              id: 'infinite-limits-asymptotes',
              num: '7',
              title: 'النهايات غير المنتهية وخطوط التقارب الرأسية',
              desc: 'انعدام المقام k/0، السلوك الانفجاري نحو ±∞، وتحديد إشارات اللانهاية',
              url: '/domain/calculus/limits-continuity/infinite-limits-asymptotes',
              emoji: '',
            },
            {
              id: 'continuity-at-a-point',
              num: '8',
              title: 'شروط الاتصال عند نقطة',
              desc: 'الشروط الثلاثة الصارمة: التعريف، وجود النهاية، وتطابقهما التام',
              url: '/domain/calculus/limits-continuity/continuity-at-a-point',
              emoji: '',
            },
            {
              id: 'types-of-discontinuity',
              num: '9',
              title: 'أنواع عدم الاتصال (Discontinuities)',
              desc: 'الانفصال القابل للإزالة (ثقب مفرغ)، القفزي، واللانهائي عند خطوط التقارب',
              url: '/domain/calculus/limits-continuity/types-of-discontinuity',
              emoji: '',
            },
            {
              id: 'ivt-intermediate-value-theorem',
              num: '10',
              title: 'الاتصال ونظرية القيمة المتوسطة (IVT)',
              desc: 'الفترات المغلقة، برهان وجود الجذور، وضمان عبور المنحنى لجميع القيم البينية',
              url: '/domain/calculus/limits-continuity/ivt-intermediate-value-theorem',
              emoji: '',
            },
            {
              id: 'trigonometric-limits',
              num: '11',
              title: 'النهايات الخاصة بالدوال المثلثية',
              desc: 'نهاية sin(x)/x الشهيرة، صيغة 1 - cos(x)، ونظرية الحصر والشطيرة',
              url: '/domain/calculus/limits-continuity/trigonometric-limits',
              emoji: '',
            },
            {
              id: 'limits-continuity-applications',
              num: '12',
              title: 'المسائل الكلامية والتطبيقية',
              desc: 'السرعة اللحظية، التكلفة الحدية، شحن المكثفات، ومعدلات التغير في الفيزياء',
              url: '/domain/calculus/limits-continuity/limits-continuity-applications',
              emoji: '',
            },
          ].map((item) => (
            <a
              key={item.id}
              href={`#${item.url}`}
              onClick={(e) => handleTestClick(item.url, item.id, e)}
              className={`p-3.5 rounded-xl border ${themeClasses.border} hover:border-indigo-500/60 transition-all duration-150 bg-black/[0.01] dark:bg-white/[0.01] hover:bg-indigo-500/[0.04] flex items-start gap-3 group`}
            >
              <span className="text-xl shrink-0 mt-0.5">{item.emoji}</span>
              <div className="space-y-1">
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] font-bold px-1.5 py-0.2 text-indigo-600 dark:text-indigo-400 bg-indigo-100 dark:bg-indigo-950/60 rounded">
                    اختبار #{item.num}
                  </span>
                  <h4 className={`text-xs sm:text-sm font-bold ${themeClasses.textPrimary} group-hover:text-indigo-600 dark:group-hover:text-indigo-400`}>
                    {item.title}
                  </h4>
                </div>
                <p className={`text-[11px] ${themeClasses.textSecondary} line-clamp-2`}>
                  {item.desc}
                </p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Historical and Philosophical Context Section */}
      <section className="space-y-4 pt-4 border-t border-black/[0.06] dark:border-white/[0.08]">
        <h3 className={`text-lg sm:text-xl font-bold flex items-center gap-2 ${themeClasses.textPrimary}`}>
          <Sparkles className="w-5 h-5 text-amber-500" />
          <span>الثورة الفكرية للنهايات: من معضلات زينون إلى صرامة كوشي وفايرشتراس</span>
        </h3>
        <p className={`text-sm ${themeClasses.textSecondary} leading-relaxed`}>
          ظل مفهوم الحركة المستمرة ومعدلات التغير اللحظية معضلة فلسفية حيرت الإغريق منذ مفارقات زينون الإيلي الشهيرة حول استحالة الحركة. وعندما وضع إسحاق نيوتن وجوتفريد لايبنتز أسس علم التفاضل والتكامل في أواخر القرن السابع عشر، استخدما مفهوماً حدسياً غامضاً سُمي "المقادير المتناهية في الصغر" (Infinitesimals)، والذي واجه انتقادات لاذعة من الفلاسفة لكونه "أشباح كميات منعدمة". ولم تستقر الرياضيات على أرضية صلبة إلا في القرن التاسع عشر بفضل أوغسطين لويس كوشي وكارل فايرشتراس اللذين صاغا تعريف النهاية الصارم باستخدام رمزية إبسلون ودلتا (ε-δ). حول هذا التعريف فكرة الاقتراب الحركية إلى متباينة جبرية دقيقة، وجعل من النهاية حجر الأساس الذي تُبنى عليه المشتقات والتكاملات والمتسلسلات اللانهائية في الفيزياء والرياضيات المعاصرة.
        </p>
      </section>

      {/* Master Rules and Limits Reference Table */}
      <section className="space-y-4 pt-4 border-t border-black/[0.06] dark:border-white/[0.08]">
        <h3 className={`text-lg sm:text-xl font-bold flex items-center gap-2 ${themeClasses.textPrimary}`}>
          <Compass className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
          <span>جدول القواعد الذهبية لحساب النهايات والاتصال</span>
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full text-right text-xs sm:text-sm border-collapse">
            <thead>
              <tr className="border-b border-black/[0.08] dark:border-white/[0.1] bg-black/[0.02] dark:bg-white/[0.02]">
                <th className="p-3 font-bold text-indigo-700 dark:text-indigo-300">الحالة الجبرية</th>
                <th className="p-3 font-bold text-indigo-700 dark:text-indigo-300">الصيغة / القاعدة</th>
                <th className="p-3 font-bold text-indigo-700 dark:text-indigo-300">الاستراتيجية الإجرائية</th>
                <th className="p-3 font-bold text-indigo-700 dark:text-indigo-300">الدلالة الهندسية</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-black/[0.04] dark:divide-white/[0.04]">
              <tr>
                <td className="p-3 font-bold">التعويض المباشر المتاح</td>
                <td className="p-3 font-mono dir-ltr text-left">lim f(x) = f(c)</td>
                <td className="p-3 text-emerald-600 dark:text-emerald-400">ينتهي الحل فوراً إذا كان الناتج L ∈ ℝ</td>
                <td className="p-3">الدالة متصلة عند النقطة c</td>
              </tr>
              <tr>
                <td className="p-3 font-bold">صيغة غير معينة 0/0 (كثيرات حدود)</td>
                <td className="p-3 font-mono dir-ltr text-left">P(c)/Q(c) = 0/0</td>
                <td className="p-3 text-indigo-600 dark:text-indigo-400">تحليل فرق المربعين/المكعبين وشطب (x - c)</td>
                <td className="p-3">ثقب مفرغ قابل للإزالة (Hole)</td>
              </tr>
              <tr>
                <td className="p-3 font-bold">صيغة غير معينة 0/0 (جذور تربيعية)</td>
                <td className="p-3 font-mono dir-ltr text-left">lim (√A - B)/x = 0/0</td>
                <td className="p-3 text-indigo-600 dark:text-indigo-400">الضرب في المرافق (√A + B) بسطاً ومقاماً</td>
                <td className="p-3">تحرير العامل الصفري واختصاره</td>
              </tr>
              <tr>
                <td className="p-3 font-bold">انعدام المقام k/0 (حيث k ≠ 0)</td>
                <td className="p-3 font-mono dir-ltr text-left">lim f(x) = k/0</td>
                <td className="p-3 text-rose-600 dark:text-rose-400">فحص إشارة 0⁺ و 0⁻ من اليمين واليسار</td>
                <td className="p-3 font-bold">خط تقارب رأسي x = c وانفصال لانهائي</td>
              </tr>
              <tr>
                <td className="p-3 font-bold">النهاية عند اللانهاية x → ±∞</td>
                <td className="p-3 font-mono dir-ltr text-left">lim P(x)/Q(x)</td>
                <td className="p-3 text-indigo-600 dark:text-indigo-400">مقارنة درجة البسط والمقام (أعلى قوة)</td>
                <td className="p-3">خط تقارب أفقي y = L</td>
              </tr>
              <tr>
                <td className="p-3 font-bold">النهايات المثلثية المعيارية</td>
                <td className="p-3 font-mono dir-ltr text-left">lim sin(ax)/(bx) = a/b</td>
                <td className="p-3 text-emerald-600 dark:text-emerald-400">تطبيق نظرية الحصر (الزاوية بالراديان)</td>
                <td className="p-3">ميل مماس دالة الجيب عند الصفر</td>
              </tr>
              <tr>
                <td className="p-3 font-bold">شروط الاتصال التام</td>
                <td className="p-3 font-mono dir-ltr text-left">lim f(x) = f(c)</td>
                <td className="p-3 text-emerald-600 dark:text-emerald-400">التحقق: 1) f(c) معرفة 2) النهاية موجودة 3) تساويهما</td>
                <td className="p-3">منحنى انسيابي مستمر دون أي انقطاع</td>
              </tr>
              <tr>
                <td className="p-3 font-bold">نظرية القيمة المتوسطة IVT</td>
                <td className="p-3 font-mono dir-ltr text-left">f(a) · f(b) &lt; 0</td>
                <td className="p-3 text-indigo-600 dark:text-indigo-400">الدالة متصلة وتغيرت الإشارة على [a, b]</td>
                <td className="p-3">وجود جذر حقيقي f(c) = 0 على الأقل</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Practical Strategies Section */}
      <section className="space-y-4 pt-4 border-t border-black/[0.06] dark:border-white/[0.08]">
        <h3 className={`text-lg sm:text-xl font-bold flex items-center gap-2 ${themeClasses.textPrimary}`}>
          <Lightbulb className="w-5 h-5 text-amber-500" />
          <span>إرشادات منهجية لحل مسائل النهايات والاتصال</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
          <div className="p-4 rounded-xl border border-black/[0.06] dark:border-white/[0.06] bg-black/[0.01] dark:bg-white/[0.01] space-y-2">
            <h4 className="font-bold text-indigo-600 dark:text-indigo-400">1. التعويض المباشر أولاً ودائماً</h4>
            <p className={themeClasses.textSecondary}>
              لا تبدأ أبداً في التحليل المعقد أو البحث عن طرق بديلة قبل إجراء التعويض المباشر؛ فإذا حصلت على رقم محدد (حتى لو كان صفراً في البسط)، فقد انتهت المسألة فوراً.
            </p>
          </div>
          <div className="p-4 rounded-xl border border-black/[0.06] dark:border-white/[0.06] bg-black/[0.01] dark:bg-white/[0.01] space-y-2">
            <h4 className="font-bold text-indigo-600 dark:text-indigo-400">2. التمييز بين 0/0 و k/0</h4>
            <p className={themeClasses.textSecondary}>
              الناتج 0/0 هو صيغة غير معينة تعني وجود عامل صفري يجب اختصاره. أما الناتج k/0 (حيث k ≠ 0) فيعني خط تقارب رأسي ونهاية غير منتهية تتجه نحو ±∞ وتتطلب فحص الإشارات.
            </p>
          </div>
          <div className="p-4 rounded-xl border border-black/[0.06] dark:border-white/[0.06] bg-black/[0.01] dark:bg-white/[0.01] space-y-2">
            <h4 className="font-bold text-indigo-600 dark:text-indigo-400">3. الانتباه لاتجاه الأطراف في دوال المقياس</h4>
            <p className={themeClasses.textSecondary}>
              في دوال القيمة المطلقة والمتشعبة، يجب فحص النهاية من اليمين x→c⁺ والنهاية من اليسار x→c⁻ بشكل منفصل؛ فاختلافهما يعني فوراً أن النهاية العامة غير موجودة بسبب قفزة في المنحنى.
            </p>
          </div>
          <div className="p-4 rounded-xl border border-black/[0.06] dark:border-white/[0.06] bg-black/[0.01] dark:bg-white/[0.01] space-y-2">
            <h4 className="font-bold text-indigo-600 dark:text-indigo-400">4. شروط نظرية القيمة المتوسطة صارمة</h4>
            <p className={themeClasses.textSecondary}>
              تأكد دائماً من أن الدالة متصلة على كامل الفترة المغلقة المعطاة قبل ادعاء وجود جذر أو حل؛ فوجود نقطة انفصال واحدة كفيل بانهيار استنتاجات النظرية تماماً.
            </p>
          </div>
        </div>
      </section>

      {/* Footer Call to Action */}
      <footer className="pt-6 border-t border-black/[0.06] dark:border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <span className="text-xs font-semibold text-gray-400 block">جاهز للبدء واختبار مهاراتك؟</span>
          <p className={`text-sm font-bold ${themeClasses.textPrimary}`}>
            ابدأ باختبار مفهوم النهاية والتقدير البياني وتدرج نحو النهايات الصفرية والمثلثية ونظرية IVT
          </p>
        </div>
        <button
          onClick={(e) =>
            handleTestClick(
              '/domain/calculus/limits-continuity/graphical-numerical-limits',
              'graphical-numerical-limits',
              e
            )
          }
          className="px-5 py-2.5 rounded-xl font-bold text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 shadow-sm transition-colors text-xs sm:text-sm cursor-pointer flex items-center gap-2"
        >
          <span>بدء الاختبار الأول (مفهوم النهاية والتقدير البياني)</span>
          <ArrowRight className="w-4 h-4 rotate-180" />
        </button>
      </footer>
    </article>
  );
};
