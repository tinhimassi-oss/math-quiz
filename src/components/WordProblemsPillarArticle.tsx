import React from 'react';
import {
  BookOpen,
  Sparkles,
  Award,
  ArrowLeft,
  CheckCircle2,
  Lightbulb,
  Compass,
  Zap,
  Target,
  Hash,
  Activity,
  Layers,
  HelpCircle,
} from 'lucide-react';
import { useEyeTheme } from '../context/ThemeContext';

interface WordProblemsPillarArticleProps {
  onOpenTest: (testId: string) => void;
}

export const WordProblemsPillarArticle: React.FC<WordProblemsPillarArticleProps> = ({
  onOpenTest,
}) => {
  const { themeClasses } = useEyeTheme();

  return (
    <article
      className={`rounded-2xl border ${themeClasses.border} ${themeClasses.cardBg} p-6 sm:p-10 shadow-sm transition-all text-right space-y-8 leading-relaxed`}
    >
      {/* Header Banner */}
      <div className="border-b border-black/5 dark:border-white/5 pb-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-rose-500/10 text-rose-700 dark:text-rose-300 border border-rose-500/20 mb-3">
          <BookOpen className="w-4 h-4" />
          المقالة المرجعية الكبرى · موسوعة حل المسائل الكلامية والنمذجة الجبرية
        </div>
        <h1 className={`text-2xl sm:text-3xl font-extrabold ${themeClasses.textPrimary}`}>
          الدليل الأكاديمي الشامل لحل المسائل الكلامية: من استراتيجيات جورج بوليا والترجمة الجبرية إلى ديناميكا الحركة والخلط والتحسين الأمثل
        </h1>
        <p className={`text-sm sm:text-base ${themeClasses.textSecondary} mt-3 leading-relaxed`}>
          المسائل الكلامية واللفظية (Mathematical Word Problems) هي المختبر الحقيقي الذي تتجلى فيه قوة الرياضيات؛
          حيث تنتقل الرموز الجبرية الجافة من صفحات الكتب لتصبح أداة حية تحاكي مواقف الحياة اليومية، والمشكلات الهندسية،
          والصفقات التجارية، وحركة النقل والملاحة. إن تحويل قصة لغوية منثورة إلى منظومة معادلات رياضية دقيقة هو الفن
          الأساسي الذي يميز العقل التحليلي الناضج.
        </p>
      </div>

      {/* Section 1 */}
      <section className="space-y-3">
        <h2 className={`text-lg sm:text-xl font-bold ${themeClasses.textPrimary} flex items-center gap-2`}>
          <span className="text-rose-600 dark:text-rose-400">1.</span>
          منهجية جورج بوليا الرباعية: خريطة طريق حل المشكلات الرياضية
        </h2>
        <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
          في كتابه الكلاسيكي الخالد "كيف تحلها" (How to Solve It) عام 1945، وضع عالم الرياضيات الشهير جورج بوليا (George Pólya)
          منظومة رباعية ذهبية لا تزال إلى اليوم المعيار العالمي الأبرز في التفكير الرياضي وحل المسائل:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          <div className="p-3.5 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5">
            <h3 className="font-bold text-xs sm:text-sm text-rose-600 dark:text-rose-400 mb-1">
              أولاً: فهم المسألة (Understanding the Problem)
            </h3>
            <p className={`text-[11px] sm:text-xs ${themeClasses.textSecondary} leading-relaxed`}>
              تحديد المجهول بدقة، وفرز المعطيات المعلومة، وتعيين الشروط والقيود، ورسم مخطط توضيحي إن أمكن.
            </p>
          </div>
          <div className="p-3.5 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5">
            <h3 className="font-bold text-xs sm:text-sm text-rose-600 dark:text-rose-400 mb-1">
              ثانياً: ابتكار الخطة (Devising a Plan)
            </h3>
            <p className={`text-[11px] sm:text-xs ${themeClasses.textSecondary} leading-relaxed`}>
              البحث عن علاقة بين المعطيات والمجهول، واستدعاء مسائل مشابهة محلولة سابقاً، واختيار النموذج الجبري المناسب.
            </p>
          </div>
          <div className="p-3.5 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5">
            <h3 className="font-bold text-xs sm:text-sm text-rose-600 dark:text-rose-400 mb-1">
              ثالثاً: تنفيذ الخطة (Carrying out the Plan)
            </h3>
            <p className={`text-[11px] sm:text-xs ${themeClasses.textSecondary} leading-relaxed`}>
              حل المعادلة خطوة بخطوة بحذر حسابي، والتأكد من صحة كل انتقال منطقي بين أطراف المساواة.
            </p>
          </div>
          <div className="p-3.5 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5">
            <h3 className="font-bold text-xs sm:text-sm text-rose-600 dark:text-rose-400 mb-1">
              رابعاً: المراجعة والتحقق (Looking Back)
            </h3>
            <p className={`text-[11px] sm:text-xs ${themeClasses.textSecondary} leading-relaxed`}>
              التحقق من معقولية الناتج بالتعويض في النص الأصلي، والتأكد من ملاءمة الوحدات (أمتار، ريالات، ساعات)، واستخلاص العبرة.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="space-y-3">
        <h2 className={`text-lg sm:text-xl font-bold ${themeClasses.textPrimary} flex items-center gap-2`}>
          <span className="text-rose-600 dark:text-rose-400">2.</span>
          هندسة الترجمة اللغوية: القاموس الجبري للكلمات والعبارات
        </h2>
        <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
          تعتمد قوة الحل على الترجمة الحرفية الدقيقة للمفردات. فالمسألة ليست نصاً أدبياً بل شفرة كمية:
          حيث تتحول كلمات "مضافاً إليه" و"مجموع" و"يزيد بمقدار" إلى إشارة الجمع (+).
          وتترجم عبارات "مطروحاً منه" و"الفرق بين" و"ينقص عن" إلى إشارة الطرح (-).
          أما مضاعفات الأعداد ونسبها المئوية ("ضعف"، "ثلاثة أمثال"، "نصف"، "20% من") فتتحول إلى ضرب وقسمة.
          وتشكل إشارة المساواة (=) التوازن الفاصل بين الجملة اللفظية وناتجها الحسابي.
        </p>
        <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
          ويعد الوعي بترتيب الكلمات حاسماً: فعبارة "طرح 5 من ثلاثة أمثال عدد" تكتب <span className="font-mono text-rose-600">3x - 5</span>،
          بينما "ثلاثة أمثال حاصل طرح 5 من عدد" تكتب بالأقواس <span className="font-mono text-rose-600">3(x - 5)</span>.
          هذا الفارق الصغير في موضع الأقواس يغير قيمة الناتج الجبري جذرياً.
        </p>
      </section>

      {/* Section 3 */}
      <section className="space-y-3">
        <h2 className={`text-lg sm:text-xl font-bold ${themeClasses.textPrimary} flex items-center gap-2`}>
          <span className="text-rose-600 dark:text-rose-400">3.</span>
          الأنماط الكلاسيكية للمسائل اللفظية: من الحركة إلى الخلط والعمل المشترك
        </h2>
        <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
          تتوزع المسائل الكلامية في الرياضيات التطبيقية على عائلات رياضية محددة لكل منها خوارزميتها النموذجية:
        </p>
        <ul className={`list-disc list-inside text-xs sm:text-sm ${themeClasses.textSecondary} space-y-2`}>
          <li>
            <strong className="text-gray-800 dark:text-gray-200">مسائل الحركة والسرعة النسبية:</strong> ترتكز على مثلث <span className="font-mono">d = v · t</span>، وتعتمد على جمع السرعات في الاتجاهين المتعاكسين (الاقتراب أو التباعد) وطرح السرعات في اتجاه المطاردة.
          </li>
          <li>
            <strong className="text-gray-800 dark:text-gray-200">مسائل العمل المشترك وتدفق الخزانات:</strong> حيث لا تجمع الأزمنة مطلقاً بل تجمع معدلات الإنجاز <span className="font-mono">1/T = 1/t₁ + 1/t₂</span>.
          </li>
          <li>
            <strong className="text-gray-800 dark:text-gray-200">مسائل الخلط والسبائك:</strong> قائمة على مبدأ انحفاظ كتلة المادة الفعالة النقية <span className="font-mono">C₁V₁ + C₂V₂ = C_f V_f</span>.
          </li>
          <li>
            <strong className="text-gray-800 dark:text-gray-200">مسائل الأعمار والزمن:</strong> ترتكز على الحقيقة البديهية بأن فارق السن بين شخصين يظل ثابتاً دائماً عبر مسار الزمن.
          </li>
          <li>
            <strong className="text-gray-800 dark:text-gray-200">مسائل التجارة والتسعير:</strong> تتعامل مع دورة التكلفة، هامش الربح، السعر المعلن، الخصومات المتتالية، وضريبة القيمة المضافة.
          </li>
        </ul>
      </section>

      {/* Section 4 */}
      <section className="space-y-3">
        <h2 className={`text-lg sm:text-xl font-bold ${themeClasses.textPrimary} flex items-center gap-2`}>
          <span className="text-rose-600 dark:text-rose-400">4.</span>
          قمة الرياضيات التطبيقية: الاستمثال والتحسين الأمثل (Optimization)
        </h2>
        <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
          في أعلى درجات المسائل اللفظية تبرز مسائل التحسين الأمثل؛ حيث لا نبحث عن مجرد حل ممكن، بل عن "الحل الأفضل مطلقاً" (The Optimal Solution)
          الذي يعظم المنفعة أو يخفض التكلفة في ظل قيود واقعية. تتجلى روعة التحسين في مبدأ التماثل الرياضي:
          فالمستطيل الذي يعطي أقصى مساحة لأي محيط سياج ثابت هو دائماً "المربع"، والأسطوانة التي تستهلك أقل كمية معدن لحجم ثابت
          تتحقق عندما يتساوى ارتفاعها مع قطر قاعدتها.
        </p>
      </section>

      {/* 12 Interactive Quizzes Grid */}
      <div className="pt-6 border-t border-black/5 dark:border-white/5">
        <h3 className={`text-base sm:text-lg font-bold ${themeClasses.textPrimary} mb-4 flex items-center gap-2`}>
          <Sparkles className="w-5 h-5 text-rose-600 dark:text-rose-400" />
          المسارات الاختبارية الاثنا عشر في المسائل الكلامية والتطبيقية
        </h3>
        <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} mb-6 leading-relaxed`}>
          صُممت هذه الاختبارات الاثني عشر لتغطية كافة المهارات الرياضية التحليلية المطلوبة في اختبارات القدرات الجامعية والمسابقات الرياضية الدولية:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {[
            {
              id: 'translating-words-to-equations',
              title: '1. ترجمة النصوص إلى معادلات',
              emoji: '✍️',
              desc: 'تحويل السيناريوهات اللفظية ومفردات الزيادة والنقصان والتضاعف إلى جبر',
              level: 'أساسي',
            },
            {
              id: 'distance-rate-time-problems',
              title: '2. مسائل الحركة والسرعة والزمن',
              emoji: '🚗',
              desc: 'السرعة النسبية، اتجاهات الحركة، تأثير التيارات والرياح، والسرعة المتوسطة',
              level: 'أساسي',
            },
            {
              id: 'work-rate-problems',
              title: '3. مسائل العمل المشترك والإنجاز',
              emoji: '👷',
              desc: 'تنسيق فرق العمل، معدلات الإنتاجية المشتركة، وصمامات ملء وتفريغ الخزانات',
              level: 'متوسط',
            },
            {
              id: 'mixture-solution-alloy-problems',
              title: '4. مسائل الخلط والمحاليل والسبائك',
              emoji: '🧪',
              desc: 'حفظ المادة النقية، تخفيف المحاليل، وعيارات سبائك الذهب والمعادن',
              level: 'متوسط',
            },
            {
              id: 'ratio-proportion-division-problems',
              title: '5. مسائل النسبة والتناسب والتقسيم',
              emoji: '⚖️',
              desc: 'قيمة الجزء الواحد، التناسب الطردي والعكسي، وتقسيم المواريث والشراكات',
              level: 'أساسي',
            },
            {
              id: 'age-word-problems',
              title: '6. مسائل الأعمار وفارق الزمن',
              emoji: '⏳',
              desc: 'ثبات فارق العمر عبر الزمن ومصفوفة المتغيرات للماضي والحاضر والمستقبل',
              level: 'أساسي',
            },
            {
              id: 'profit-loss-discount-tax-problems',
              title: '7. مسائل الربح والخسارة والخصومات',
              emoji: '🏷️',
              desc: 'سلسلة التسعير، التخفيضات المتتالية، وضريبة القيمة المضافة VAT',
              level: 'متوسط',
            },
            {
              id: 'investment-interest-word-problems',
              title: '8. مسائل الاستثمار وتوزيع الأرباح',
              emoji: '📈',
              desc: 'تقسيم المحافظ الاستثمارية، العائد الموزون، وقاعدة 72 لمضاعفة الثروة',
              level: 'متوسط',
            },
            {
              id: 'geometric-perimeter-area-problems',
              title: '9. المسائل الهندسية والمساحات',
              emoji: '📐',
              desc: 'أبعاد المستطيل، تكاليف الأسوار والممرات المحيطة، وتطبيقات فيثاغورس',
              level: 'متوسط',
            },
            {
              id: 'consecutive-integers-number-relations',
              title: '10. الأعداد المتتالية ومنازل الأرقام',
              emoji: '🔢',
              desc: 'الأعداد الفردية والزوجية المتتالية، المتوسط الحسابي، وخانات الآحاد والعشرات',
              level: 'أساسي',
            },
            {
              id: 'amortization-savings-scenarios',
              title: '11. استهلاك القروض والخطط الادخارية',
              emoji: '💰',
              desc: 'استقطاع نسب الادخار، ميزانية 50/30/20، وجدولة سداد الالتزامات المالية',
              level: 'متوسط',
            },
            {
              id: 'optimization-applied-word-problems',
              title: '12. التحسين الأمثل والاستمثال',
              emoji: '🎯',
              desc: 'تعظيم المساحات بقيود الأسوار، التسعير الديناميكي، وترشيد التكاليف',
              level: 'متقدم',
            },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => onOpenTest(item.id)}
              className={`p-3.5 rounded-xl border border-black/5 dark:border-white/5 hover:border-rose-500/40 hover:bg-rose-50/50 dark:hover:bg-rose-950/20 transition-all text-right group flex flex-col justify-between cursor-pointer`}
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
                  className={`text-xs sm:text-sm font-bold ${themeClasses.textPrimary} group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors mb-1`}
                >
                  {item.title}
                </h4>
                <p className={`text-[11px] ${themeClasses.textSecondary} leading-relaxed`}>
                  {item.desc}
                </p>
              </div>
              <div className="mt-3 pt-2 border-t border-black/5 dark:border-white/5 flex items-center justify-end gap-1 text-[11px] text-rose-600 dark:text-rose-400 font-semibold group-hover:translate-x-[-3px] transition-transform">
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
