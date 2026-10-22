import React from 'react';
import {
  BookOpen,
  Sparkles,
  TrendingUp,
  Lightbulb,
  CheckCircle2,
  Award,
  Layers,
  Calculator,
  Compass,
} from 'lucide-react';
import { useEyeTheme } from '../context/ThemeContext';
import { navigateTo } from '../navigation/router';

interface PlaceValuePillarArticleProps {
  onOpenTest?: (testId: string) => void;
  className?: string;
}

export const PlaceValuePillarArticle: React.FC<PlaceValuePillarArticleProps> = ({
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
      id="place-value-pillar-guide"
      className={`p-6 sm:p-10 rounded-2xl border ${themeClasses.border} ${themeClasses.cardBg} space-y-8 shadow-2xs leading-relaxed text-right ${className}`}
    >
      {/* Pillar Article Header */}
      <header className="space-y-3 pb-6 border-b border-black/[0.06] dark:border-white/[0.08]">
        <div className="flex items-center gap-2 text-xs font-bold text-[#127052] dark:text-[#5EB5A1]">
          <BookOpen className="w-4 h-4" />
          <span>المقالة المرجعية الشاملة (Pillar Guide) | أكاديمية كويزات الرياضيات</span>
        </div>

        <h2 className={`text-xl sm:text-3xl font-extrabold tracking-tight ${themeClasses.textPrimary}`}>
          دليل اختبارات ومهارات القيمة المنزلية الشامل: من الآحاد إلى المليارات والكسور العشرية
        </h2>

        <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
          دليل تربوي ومنهجي مرجعي شامل يوضح الركيزة الأعظم في علم الحساب: <strong>النظام الموضعي العشري</strong>. يضم <strong>12 اختباراً تفاعلياً</strong> مقسمة منهجياً عبر 3 مسارات لونية ترتقي بالطالب من منازل الآحاد والعشرات حتى أضخم أرقام المليارات وأدق الأجزاء العشرية من ألف.
        </p>

        {/* Quick Metadata Bar */}
        <div className="flex flex-wrap items-center gap-3 pt-2 text-[11px] text-slate-500 dark:text-slate-400">
          <span className="flex items-center gap-1">
            <Layers className="w-3.5 h-3.5 text-[#127052] dark:text-[#5EB5A1]" />
            12 اختباراً تخصصياً متدرجاً
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Calculator className="w-3.5 h-3.5 text-[#127052] dark:text-[#5EB5A1]" />
            3 مسارات: التأسيس (•)، التوسع (•)، والعشري (•)
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Award className="w-3.5 h-3.5 text-[#127052] dark:text-[#5EB5A1]" />
            شروحات تربوية وأسئلة تفاعلية فورية
          </span>
        </div>
      </header>

      {/* Section 1: Foundations of Place Value */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-[#3B7A6A]/10 text-[#127052] dark:text-[#5EB5A1]">
            <Sparkles className="w-5 h-5" />
          </div>
          <h3 className={`text-lg sm:text-xl font-bold ${themeClasses.textPrimary}`}>
            1. الفلسفة الجوهرية: سر القيمة المكانية الموضعية
          </h3>
        </div>

        <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
          تخيل عالماً بدون قيمة منزلية؛ سنحتاج إلى رمز مختلف لكل رقم في الكون! العبقرية الرياضية للنظام العشري تكمن في استخدام 10 أرقام فقط (من 0 إلى 9) للتعبير عن أي مقدار من خلال تغيير موضع الرقم:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
          <div className={`p-4 rounded-xl border ${themeClasses.border} bg-black/[0.01] dark:bg-white/[0.01]`}>
            <div className="font-bold text-xs mb-1 text-[#127052] dark:text-[#5EB5A1]">القيمة تتضاعف 10 مرات يساراً</div>
            <p className={`text-[11px] ${themeClasses.textMuted} leading-relaxed`}>
              كل قفزة نحو اليسار تعني ضرباً في 10: 1 في الآحاد يصبح 10 في العشرات، و 100 في المئات، و 1,000 في الألوف.
            </p>
          </div>
          <div className={`p-4 rounded-xl border ${themeClasses.border} bg-black/[0.01] dark:bg-white/[0.01]`}>
            <div className="font-bold text-xs mb-1 text-[#127052] dark:text-[#5EB5A1]">القيمة تنقسم على 10 يميناً</div>
            <p className={`text-[11px] ${themeClasses.textMuted} leading-relaxed`}>
              بعد الفاصلة العشرية، كل قفزة نحو اليمين تعني قسماً على 10: من الأعشار (0.1) إلى أجزاء المئة (0.01) ثم أجزاء الألف (0.001).
            </p>
          </div>
          <div className={`p-4 rounded-xl border ${themeClasses.border} bg-black/[0.01] dark:bg-white/[0.01]`}>
            <div className="font-bold text-xs mb-1 text-[#127052] dark:text-[#5EB5A1]">الصفر حارس المنزلة</div>
            <p className={`text-[11px] ${themeClasses.textMuted} leading-relaxed`}>
              الصفر ليس فراغاً؛ في 504 يحرس الصفر منزلة العشرات لكي لا تنزلق الـ 500 وتصبح 54!
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Visual Place Value Chart */}
      <section className="space-y-4 pt-4 border-t border-black/[0.04] dark:border-white/[0.06]">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-[#3B7A6A]/10 text-[#127052] dark:text-[#5EB5A1]">
            <Compass className="w-5 h-5" />
          </div>
          <h3 className={`text-lg sm:text-xl font-bold ${themeClasses.textPrimary}`}>
            2. جدول المنازل والدورات المتكامل
          </h3>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-xs text-center border-collapse">
            <thead>
              <tr className="bg-[#127052]/10 text-[#127052] dark:text-[#5EB5A1] font-bold">
                <th className="p-2 border border-black/10 dark:border-white/10" colSpan={3}>دورة الملايين</th>
                <th className="p-2 border border-black/10 dark:border-white/10" colSpan={3}>دورة الألوف</th>
                <th className="p-2 border border-black/10 dark:border-white/10" colSpan={3}>دورة الوحدات</th>
                <th className="p-2 border border-black/10 dark:border-white/10 bg-purple-100/50 dark:bg-purple-950/40 text-purple-800 dark:text-purple-300" colSpan={3}>الأجزاء العشرية</th>
              </tr>
              <tr className="bg-black/[0.02] dark:bg-white/[0.02] text-[10px] font-semibold">
                <th className="p-1.5 border border-black/10 dark:border-white/10">مئات</th>
                <th className="p-1.5 border border-black/10 dark:border-white/10">عشرات</th>
                <th className="p-1.5 border border-black/10 dark:border-white/10">آحاد</th>
                <th className="p-1.5 border border-black/10 dark:border-white/10">مئات</th>
                <th className="p-1.5 border border-black/10 dark:border-white/10">عشرات</th>
                <th className="p-1.5 border border-black/10 dark:border-white/10">آحاد</th>
                <th className="p-1.5 border border-black/10 dark:border-white/10">مئات</th>
                <th className="p-1.5 border border-black/10 dark:border-white/10">عشرات</th>
                <th className="p-1.5 border border-black/10 dark:border-white/10">آحاد</th>
                <th className="p-1.5 border border-black/10 dark:border-white/10 bg-purple-50 dark:bg-purple-950/20">أعشار (0.1)</th>
                <th className="p-1.5 border border-black/10 dark:border-white/10 bg-purple-50 dark:bg-purple-950/20">مئة (0.01)</th>
                <th className="p-1.5 border border-black/10 dark:border-white/10 bg-purple-50 dark:bg-purple-950/20">ألف (0.001)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="font-mono text-xs">
                <td className="p-2 border border-black/10 dark:border-white/10">100M</td>
                <td className="p-2 border border-black/10 dark:border-white/10">10M</td>
                <td className="p-2 border border-black/10 dark:border-white/10">1M</td>
                <td className="p-2 border border-black/10 dark:border-white/10">100K</td>
                <td className="p-2 border border-black/10 dark:border-white/10">10K</td>
                <td className="p-2 border border-black/10 dark:border-white/10">1K</td>
                <td className="p-2 border border-black/10 dark:border-white/10">100</td>
                <td className="p-2 border border-black/10 dark:border-white/10">10</td>
                <td className="p-2 border border-black/10 dark:border-white/10">1</td>
                <td className="p-2 border border-black/10 dark:border-white/10 bg-purple-50/50 dark:bg-purple-950/10">1/10</td>
                <td className="p-2 border border-black/10 dark:border-white/10 bg-purple-50/50 dark:bg-purple-950/10">1/100</td>
                <td className="p-2 border border-black/10 dark:border-white/10 bg-purple-50/50 dark:bg-purple-950/10">1/1000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 3: The 3 Thematic Learning Paths */}
      <section className="space-y-6 pt-4 border-t border-black/[0.04] dark:border-white/[0.06]">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-[#3B7A6A]/10 text-[#127052] dark:text-[#5EB5A1]">
            <TrendingUp className="w-5 h-5" />
          </div>
          <h3 className={`text-lg sm:text-xl font-bold ${themeClasses.textPrimary}`}>
            3. خارطة الاختبارات الـ 12 بحسب المستويات والمواضيع
          </h3>
        </div>

        {/* Tier 1: Green Foundational */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold text-emerald-700 dark:text-emerald-400">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
            المسار التأسيسي (•): الآحاد، العشرات، المئات، قراءة الأعداد ومقارنتها
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {[
              { id: 'place-value-within-99', title: 'القيمة المنزلية ضمن 99 (الآحاد والعشرات)', symbol: '47 = 40 + 7', desc: 'تفكيك الرقمين وحزم العشرات' },
              { id: 'place-value-within-999', title: 'القيمة المنزلية ضمن 999 (المئات)', symbol: '638 = 600 + 30 + 8', desc: 'الأعداد الثلاثية وحفظ المنزلة' },
              { id: 'reading-writing-numbers', title: 'قراءة الأعداد وكتابتها (الصيغ اللفظية والتحليلية)', symbol: 'ثلاثمئة وخمسة = 305', desc: 'التحويل بين القياسي واللفظي والتحليلي' },
              { id: 'comparing-ordering-numbers', title: 'مقارنة الأعداد وترتيبها', symbol: '845 > 839', desc: 'الرموز > و < والترتيب التصاعدي والتنازلي' },
            ].map((t) => (
              <a
                key={t.id}
                href={`#/math/place-value/${t.id}`}
                onClick={(e) => handleTestClick(`/math/place-value/${t.id}`, t.id, e)}
                className={`p-3.5 rounded-xl border ${themeClasses.border} hover:border-[#3B7A6A]/40 transition-all flex items-center justify-between group cursor-pointer`}
              >
                <div>
                  <div className={`text-xs font-bold ${themeClasses.textPrimary} group-hover:text-[#127052] dark:group-hover:text-[#5EB5A1]`}>
                    {t.title}
                  </div>
                  <div className={`text-[11px] ${themeClasses.textMuted} mt-0.5`}>
                    {t.desc}
                  </div>
                </div>
                <span className="text-xs font-mono text-[#3B7A6A] shrink-0 mr-2">{t.symbol}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Tier 2: Blue Intermediate & Large Numbers */}
        <div className="space-y-3 pt-2">
          <div className="flex items-center gap-2 text-xs font-bold text-sky-700 dark:text-sky-400">
            <span className="w-2.5 h-2.5 rounded-full bg-sky-500"></span>
            مسار التوسع والتقدير (•): الألوف، الملايين، المليارات، التقريب والأنماط
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {[
              { id: 'place-value-thousands', title: 'القيمة المنزلية حتى الألوف', symbol: '5,420 = 5000 + 400 + 20', desc: 'أحاد وعشرات ومئات الألوف وفواصل الدورات' },
              { id: 'place-value-millions-billions', title: 'القيمة المنزلية حتى الملايين والمليارات', symbol: '1,000,000,000', desc: 'الأعداد الكبرى والأصفار المتتالية' },
              { id: 'rounding-whole-numbers', title: 'تقريب الأعداد الكلية', symbol: '4,682 ≈ 4,700', desc: 'التقريب لعشرة ومئة وألف وقاعدة 0-4 و 5-9' },
              { id: 'arithmetic-patterns-place-value', title: 'الأنماط الحسابية والقيمة المنزلية', symbol: '+10, +100, +1000', desc: 'القفز السريع واكتشاف قواعد السلاسل' },
            ].map((t) => (
              <a
                key={t.id}
                href={`#/math/place-value/${t.id}`}
                onClick={(e) => handleTestClick(`/math/place-value/${t.id}`, t.id, e)}
                className={`p-3.5 rounded-xl border ${themeClasses.border} hover:border-[#3B7A6A]/40 transition-all flex items-center justify-between group cursor-pointer`}
              >
                <div>
                  <div className={`text-xs font-bold ${themeClasses.textPrimary} group-hover:text-[#127052] dark:group-hover:text-[#5EB5A1]`}>
                    {t.title}
                  </div>
                  <div className={`text-[11px] ${themeClasses.textMuted} mt-0.5`}>
                    {t.desc}
                  </div>
                </div>
                <span className="text-xs font-mono text-[#3B7A6A] shrink-0 mr-2">{t.symbol}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Tier 3: Purple Decimals */}
        <div className="space-y-3 pt-2">
          <div className="flex items-center gap-2 text-xs font-bold text-purple-700 dark:text-purple-400">
            <span className="w-2.5 h-2.5 rounded-full bg-purple-500"></span>
            مسار الكسور العشرية (•): الأعشار، أجزاء المئة، أجزاء الألف، المقارنة والتقريب العشري
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {[
              { id: 'decimals-tenths-hundredths', title: 'القيمة المنزلية للكسور العشرية (10 و 100)', symbol: '0.45 = 0.4 + 0.05', desc: 'الأعشار وأجزاء المئة يمين الفاصلة' },
              { id: 'decimals-thousandths', title: 'القيمة المنزلية للأجزاء من ألف', symbol: '0.125 = 1/8', desc: 'المنزلة الثالثة والدقة المعملية والعلمية' },
              { id: 'comparing-ordering-decimals', title: 'مقارنة وترتيب الكسور العشرية', symbol: '0.7 > 0.68', desc: 'موازنة المنازل بالأصفار ومحاذاة الفواصل' },
              { id: 'rounding-decimals', title: 'تقريب الكسور العشرية', symbol: '3.86 ≈ 3.9', desc: 'التقريب لعدد كلي ولأقرب عُشر وجزء من مئة' },
            ].map((t) => (
              <a
                key={t.id}
                href={`#/math/place-value/${t.id}`}
                onClick={(e) => handleTestClick(`/math/place-value/${t.id}`, t.id, e)}
                className={`p-3.5 rounded-xl border ${themeClasses.border} hover:border-[#3B7A6A]/40 transition-all flex items-center justify-between group cursor-pointer`}
              >
                <div>
                  <div className={`text-xs font-bold ${themeClasses.textPrimary} group-hover:text-[#127052] dark:group-hover:text-[#5EB5A1]`}>
                    {t.title}
                  </div>
                  <div className={`text-[11px] ${themeClasses.textMuted} mt-0.5`}>
                    {t.desc}
                  </div>
                </div>
                <span className="text-xs font-mono text-[#3B7A6A] shrink-0 mr-2">{t.symbol}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Pedagogical Golden Rules */}
      <section className="space-y-4 pt-4 border-t border-black/[0.04] dark:border-white/[0.06]">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-[#3B7A6A]/10 text-[#127052] dark:text-[#5EB5A1]">
            <Lightbulb className="w-5 h-5" />
          </div>
          <h3 className={`text-lg sm:text-xl font-bold ${themeClasses.textPrimary}`}>
            4. الوصايا الذهبية الثلاث لإتقان القيمة المكانية
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1">
          <div className={`p-4 rounded-xl border ${themeClasses.border} bg-black/[0.01] dark:bg-white/[0.01] space-y-2`}>
            <div className="flex items-center gap-1.5 text-xs font-bold text-[#127052] dark:text-[#5EB5A1]">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>فرق بين (اسم المنزلة) و(قيمة الرقم)</span>
            </div>
            <p className={`text-xs ${themeClasses.textSecondary} leading-relaxed`}>
              اسم المنزلة هو مكانها (عشرات، مئات، أعشار). أما قيمة الرقم فهي ما يساويه حقيقة داخل هذا المكان (7 في العشرات قيمتها 70).
            </p>
          </div>

          <div className={`p-4 rounded-xl border ${themeClasses.border} bg-black/[0.01] dark:bg-white/[0.01] space-y-2`}>
            <div className="flex items-center gap-1.5 text-xs font-bold text-[#127052] dark:text-[#5EB5A1]">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>وازن المنازل بالأصفار في العشري</span>
            </div>
            <p className={`text-xs ${themeClasses.textSecondary} leading-relaxed`}>
              عند مقارنة 0.8 مع 0.79، ضع صفراً لليمين تصبح 0.80 &gt; 0.79 فوراً وبدون أي ارتباك ذهني.
            </p>
          </div>

          <div className={`p-4 rounded-xl border ${themeClasses.border} bg-black/[0.01] dark:bg-white/[0.01] space-y-2`}>
            <div className="flex items-center gap-1.5 text-xs font-bold text-[#127052] dark:text-[#5EB5A1]">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>التقريب ينظر خطوة واحدة يميناً</span>
            </div>
            <p className={`text-xs ${themeClasses.textSecondary} leading-relaxed`}>
              تجاهل الأرقام البعيدة وانظر فقط للرقم الملاصق يمين منزلة التقريب: (0-4 يهمل، 5-9 يعطي واحداً).
            </p>
          </div>
        </div>
      </section>

      {/* Golden Tip Box */}
      <div className="p-5 rounded-xl border border-emerald-500/20 bg-emerald-50/40 dark:bg-emerald-950/20 text-xs sm:text-sm text-emerald-900 dark:text-emerald-200 flex items-start gap-3">
        <Award className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
        <div className="leading-relaxed">
          <strong>الخلاصة المنهجية:</strong> إتقان القيمة المنزلية هو الركيزة التي تجعل التلميذ لا يواجه أي صعوبة في الجمع، الاستلاف في الطرح، الضرب المتعدد المنازل، أو قسمة الأعشار. ابدأ بالاختبار المناسب لمستواك وتدرج صعوداً نحو القمة!
        </div>
      </div>
    </article>
  );
};
