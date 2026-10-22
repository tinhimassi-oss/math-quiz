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

interface PolynomialsPillarArticleProps {
  onOpenTest?: (testId: string) => void;
  className?: string;
}

export const PolynomialsPillarArticle: React.FC<PolynomialsPillarArticleProps> = ({
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
      id="polynomials-pillar-guide"
      className={`p-6 sm:p-10 rounded-2xl border ${themeClasses.border} ${themeClasses.cardBg} space-y-8 shadow-2xs leading-relaxed text-right ${className}`}
    >
      {/* Pillar Article Header */}
      <header className="space-y-3 pb-6 border-b border-black/[0.06] dark:border-white/[0.08]">
        <div className="flex items-center gap-2 text-xs font-bold text-emerald-600 dark:text-emerald-400">
          <BookOpen className="w-4 h-4" />
          <span>المقالة المرجعية الشاملة (Pillar Guide) | أكاديمية كويزات الرياضيات</span>
        </div>

        <h2 className={`text-xl sm:text-3xl font-extrabold tracking-tight ${themeClasses.textPrimary}`}>
          الدليل المرجعي الشامل لكثيرات الحدود: من المفاهيم والتصنيف إلى العمليات والتحليل المتقدم وتطبيقات المساحة والحجم
        </h2>

        <p className={`text-sm sm:text-base ${themeClasses.textSecondary} leading-relaxed`}>
          تُعد كثيرات الحدود (Polynomials) العمود الفقري لعلم الجبر والتفاضل والتكامل وعلوم البيانات والهندسة. من خلال فهم بنيتها، وتصنيف درجاتها، وإتقان عمليات الضرب والتحليل، يمتلك الطالب أقوى أداة رياضية لتحويل المعضلات المعقدة في المساحات والحجوم والأرباح إلى نماذج قياسية قابلة للحل الدقيق.
        </p>

        <div className="flex flex-wrap gap-2 pt-2">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-300">
             الدرجة والمعامل الرئيسي
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-600 dark:text-blue-400">
             التصنيف والعمليات
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-600 dark:text-amber-400">
             التحليل بأنواعه (GCF, ac, الحالات الخاصة)
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-600 dark:text-purple-400">
             التطبيقات الهندسية والحجوم
          </span>
        </div>
      </header>

      {/* Section 1: Definition & Classification */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <Layers className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
          <h3 className={`text-lg sm:text-xl font-bold ${themeClasses.textPrimary}`}>
            1. المفهوم، الشروط، والتصنيف المزدوج
          </h3>
        </div>

        <p className={`text-sm ${themeClasses.textSecondary}`}>
          كثيرة الحدود هي تعبير جبري يتألف من حدود مفصولة بعمليات جمع وطرح. شرطها الجوهري الصارم: <strong className="text-emerald-600 dark:text-emerald-400">أن تكون أسس المتغير أعداداً كلية موجبة أو صفراً</strong>. فلا يُسمح بالأس السالب (مثل 1/x = x⁻¹)، ولا بالأس الكسري (مثل √x = x^(1/2)).
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          <div className="p-4 rounded-xl border border-black/[0.06] bg-black/[0.02] dark:border-white/[0.08] dark:bg-white/[0.02]">
            <h4 className="font-bold text-sm text-emerald-600 dark:text-emerald-400 mb-2">التصنيف حسب عدد الحدود:</h4>
            <ul className={`text-xs space-y-1.5 ${themeClasses.textSecondary}`}>
              <li>• <strong>أحادية حد (Monomial):</strong> حد وحيد مثل 7x³ أو -4.</li>
              <li>• <strong>ثنائية حد (Binomial):</strong> حدان مفصولان مثل 3x² - 5.</li>
              <li>• <strong>ثلاثية حدود (Trinomial):</strong> ثلاثة حدود مثل x² - 5x + 6.</li>
              <li>• <strong>كثيرة حدود (Polynomial):</strong> 4 حدود فما فوق.</li>
            </ul>
          </div>

          <div className="p-4 rounded-xl border border-black/[0.06] bg-black/[0.02] dark:border-white/[0.08] dark:bg-white/[0.02]">
            <h4 className="font-bold text-sm text-emerald-600 dark:text-emerald-400 mb-2">التصنيف حسب الدرجة (أعلى أس):</h4>
            <ul className={`text-xs space-y-1.5 ${themeClasses.textSecondary}`}>
              <li>• <strong>الدرجة 0:</strong> ثابتة (Constant) مثل 9.</li>
              <li>• <strong>الدرجة 1:</strong> خطية (Linear) مثل 2x - 3.</li>
              <li>• <strong>الدرجة 2:</strong> تربيعية (Quadratic) مثل 4x² + 7.</li>
              <li>• <strong>الدرجة 3:</strong> تكعيبية (Cubic) مثل x³ - 2x.</li>
              <li>• <strong>الدرجة 4:</strong> رباعية (Quartic)، والدرجة 5: خماسية (Quintic).</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 pt-2">
          <a
            href="/math/polynomials/polynomial-degree-leading-coefficient"
            onClick={(e) => handleTestClick('/math/polynomials/polynomial-degree-leading-coefficient', 'polynomial-degree-leading-coefficient', e)}
            className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-emerald-500/10 text-emerald-600 hover:bg-emerald-500/20 dark:text-emerald-400 transition-colors"
          >
             اختبار الدرجة والمعامل الرئيسي
            <ArrowRight className="w-3 h-3 rotate-180" />
          </a>
          <a
            href="/math/polynomials/polynomial-classification"
            onClick={(e) => handleTestClick('/math/polynomials/polynomial-classification', 'polynomial-classification', e)}
            className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-blue-500/10 text-blue-600 hover:bg-blue-500/20 dark:text-blue-400 transition-colors"
          >
             اختبار تصنيف كثيرات الحدود
            <ArrowRight className="w-3 h-3 rotate-180" />
          </a>
        </div>
      </section>

      {/* Section 2: Arithmetic Operations */}
      <section className="space-y-4 pt-4 border-t border-black/[0.06] dark:border-white/[0.08]">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
          <h3 className={`text-lg sm:text-xl font-bold ${themeClasses.textPrimary}`}>
            2. العمليات الجبرية: الجمع، الطرح، والتوزيع، وطريقة FOIL
          </h3>
        </div>

        <p className={`text-sm ${themeClasses.textSecondary}`}>
          تخضع كثيرات الحدود لقواعد دقيقة في العمليات الحسابية:
        </p>

        <div className="space-y-3 text-xs">
          <div className="p-3 rounded-lg bg-emerald-500/[0.04] border border-emerald-500/10">
            <span className="font-bold text-emerald-700 dark:text-emerald-300 block mb-1">
              الجمع والطرح (تجميع الحدود المتشابهة):
            </span>
            تُجمع أو تُطرح فقط الحدود ذات الأس والمتغير المتطابقين. في الطرح، يجب أولاً توزيع إشارة السالب على القوس المطروح كاملاً لعكس إشاراته.
            <div className="font-mono text-[11px] text-emerald-600 dark:text-emerald-400 mt-1" dir="ltr">
              (3x² + 2x - 4) + (x² - 5x + 1) = 4x² - 3x - 3
            </div>
          </div>

          <div className="p-3 rounded-lg bg-blue-500/[0.04] border border-blue-500/10">
            <span className="font-bold text-blue-700 dark:text-blue-300 block mb-1">
              ضرب أحادية حد في كثيرة حدود (التوزيع):
            </span>
            نضرب المعامل في المعامل، ونجمع الأسس للأساسات المتشابهة: xᵃ · xᵇ = xᵃ⁺ᵇ.
            <div className="font-mono text-[11px] text-blue-600 dark:text-blue-400 mt-1" dir="ltr">
              2x(3x² - 4x + 5) = 6x³ - 8x² + 10x
            </div>
          </div>

          <div className="p-3 rounded-lg bg-purple-500/[0.04] border border-purple-500/10">
            <span className="font-bold text-purple-700 dark:text-purple-300 block mb-1">
              ضرب ثنائيتي حد (طريقة FOIL):
            </span>
            الأول في الأول (First)، الطرفان (Outer)، الوسطان (Inner)، والأخير في الأخير (Last).
            <div className="font-mono text-[11px] text-purple-600 dark:text-purple-400 mt-1" dir="ltr">
              (x + 3)(x - 5) = x² - 5x + 3x - 15 = x² - 2x - 15
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 pt-2">
          <a
            href="/math/polynomials/polynomial-addition-subtraction"
            onClick={(e) => handleTestClick('/math/polynomials/polynomial-addition-subtraction', 'polynomial-addition-subtraction', e)}
            className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-emerald-500/10 text-emerald-600 hover:bg-emerald-500/20 dark:text-emerald-400 transition-colors"
          >
            + اختبار الجمع والطرح
            <ArrowRight className="w-3 h-3 rotate-180" />
          </a>
          <a
            href="/math/polynomials/polynomial-monomial-multiplication"
            onClick={(e) => handleTestClick('/math/polynomials/polynomial-monomial-multiplication', 'polynomial-monomial-multiplication', e)}
            className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-blue-500/10 text-blue-600 hover:bg-blue-500/20 dark:text-blue-400 transition-colors"
          >
            × اختبار ضرب أحادية الحد
            <ArrowRight className="w-3 h-3 rotate-180" />
          </a>
          <a
            href="/math/polynomials/polynomial-binomial-multiplication"
            onClick={(e) => handleTestClick('/math/polynomials/polynomial-binomial-multiplication', 'polynomial-binomial-multiplication', e)}
            className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-purple-500/10 text-purple-600 hover:bg-purple-500/20 dark:text-purple-400 transition-colors"
          >
             اختبار ضرب ثنائيتي حد (FOIL)
            <ArrowRight className="w-3 h-3 rotate-180" />
          </a>
        </div>
      </section>

      {/* Section 3: Special Products & Factoring */}
      <section className="space-y-4 pt-4 border-t border-black/[0.06] dark:border-white/[0.08]">
        <div className="flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
          <h3 className={`text-lg sm:text-xl font-bold ${themeClasses.textPrimary}`}>
            3. المتطابقات الخاصة وخارطة طريق التحليل الجبري
          </h3>
        </div>

        <p className={`text-sm ${themeClasses.textSecondary}`}>
          التحليل هو عكس الضرب تماماً، والسر يكمن في تطبيق استراتيجية هرمية تبدأ دائماً بالعامل المشترك الأكبر:
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-xs text-right border-collapse">
            <thead>
              <tr className="border-b border-black/[0.08] dark:border-white/[0.08] text-emerald-600 dark:text-emerald-400">
                <th className="py-2 px-3 font-bold">نوع التحليل</th>
                <th className="py-2 px-3 font-bold">الصيغة الرياضية</th>
                <th className="py-2 px-3 font-bold">مثال تطبيقي</th>
              </tr>
            </thead>
            <tbody className={`divide-y divide-black/[0.04] dark:divide-white/[0.04] ${themeClasses.textSecondary}`}>
              <tr>
                <td className="py-2.5 px-3 font-semibold">1. إخراج العامل المشترك (GCF)</td>
                <td className="py-2.5 px-3 font-mono" dir="ltr">ab + ac = a(b + c)</td>
                <td className="py-2.5 px-3 font-mono" dir="ltr">6x³ + 9x² = 3x²(2x + 3)</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3 font-semibold">2. الفرق بين مربعين</td>
                <td className="py-2.5 px-3 font-mono" dir="ltr">a² - b² = (a - b)(a + b)</td>
                <td className="py-2.5 px-3 font-mono" dir="ltr">x² - 16 = (x - 4)(x + 4)</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3 font-semibold">3. المربع الكامل</td>
                <td className="py-2.5 px-3 font-mono" dir="ltr">(a ± b)² = a² ± 2ab + b²</td>
                <td className="py-2.5 px-3 font-mono" dir="ltr">(2x - 3)² = 4x² - 12x + 9</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3 font-semibold">4. ثلاثية الحدود البسيطة</td>
                <td className="py-2.5 px-3 font-mono" dir="ltr">x² + bx + c = (x+p)(x+q)</td>
                <td className="py-2.5 px-3 font-mono" dir="ltr">x² - 5x + 6 = (x - 2)(x - 3)</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3 font-semibold">5. ثلاثية متقدمة (طريقة ac)</td>
                <td className="py-2.5 px-3 font-mono" dir="ltr">ax² + bx + c (a ≠ 1)</td>
                <td className="py-2.5 px-3 font-mono" dir="ltr">2x² + 7x + 3 = (2x + 1)(x + 3)</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3 font-semibold">6. مجموع وفرق المكعبين</td>
                <td className="py-2.5 px-3 font-mono" dir="ltr">a³ ± b³ = (a ± b)(a² ∓ ab + b²)</td>
                <td className="py-2.5 px-3 font-mono" dir="ltr">x³ + 8 = (x + 2)(x² - 2x + 4)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex flex-wrap gap-2 pt-2">
          <a
            href="/math/polynomials/polynomial-special-products"
            onClick={(e) => handleTestClick('/math/polynomials/polynomial-special-products', 'polynomial-special-products', e)}
            className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-amber-500/10 text-amber-600 hover:bg-amber-500/20 dark:text-amber-400 transition-colors"
          >
             الحالات الخاصة في الضرب
          </a>
          <a
            href="/math/polynomials/polynomial-gcf-factoring"
            onClick={(e) => handleTestClick('/math/polynomials/polynomial-gcf-factoring', 'polynomial-gcf-factoring', e)}
            className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-emerald-500/10 text-emerald-600 hover:bg-emerald-500/20 dark:text-emerald-400 transition-colors"
          >
             إخراج العامل المشترك (GCF)
          </a>
          <a
            href="/math/polynomials/polynomial-trinomial-factoring-simple"
            onClick={(e) => handleTestClick('/math/polynomials/polynomial-trinomial-factoring-simple', 'polynomial-trinomial-factoring-simple', e)}
            className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-blue-500/10 text-blue-600 hover:bg-blue-500/20 dark:text-blue-400 transition-colors"
          >
             ثلاثية الحدود البسيطة
          </a>
          <a
            href="/math/polynomials/polynomial-trinomial-factoring-advanced"
            onClick={(e) => handleTestClick('/math/polynomials/polynomial-trinomial-factoring-advanced', 'polynomial-trinomial-factoring-advanced', e)}
            className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-purple-500/10 text-purple-600 hover:bg-purple-500/20 dark:text-purple-400 transition-colors"
          >
             ثلاثية الحدود المتقدمة (ac)
          </a>
          <a
            href="/math/polynomials/polynomial-special-factoring"
            onClick={(e) => handleTestClick('/math/polynomials/polynomial-special-factoring', 'polynomial-special-factoring', e)}
            className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-rose-500/10 text-rose-600 hover:bg-rose-500/20 dark:text-rose-400 transition-colors"
          >
             الحالات الخاصة (مربعين ومكعبين)
          </a>
        </div>
      </section>

      {/* Section 4: Division & Real-World Applications */}
      <section className="space-y-4 pt-4 border-t border-black/[0.06] dark:border-white/[0.08]">
        <div className="flex items-center gap-2">
          <Award className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
          <h3 className={`text-lg sm:text-xl font-bold ${themeClasses.textPrimary}`}>
            4. قسمة كثيرات الحدود والتطبيقات الواقعية في المساحة والحجم
          </h3>
        </div>

        <p className={`text-sm ${themeClasses.textSecondary}`}>
          تختتم رحلة كثيرات الحدود بخوارزميات القسمة المطولة والتركيبية التي تسمح بفك شيفرة الدوال النسبية وإيجاد الجذور، ثم التتويج بمسائل المساحة والحجم والأرباح:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl border border-black/[0.06] bg-black/[0.02] dark:border-white/[0.08] dark:bg-white/[0.02]">
            <h4 className="font-bold text-sm text-emerald-600 dark:text-emerald-400 mb-1">خوارزمية القسمة ونظرية الباقي:</h4>
            <p className={`text-xs ${themeClasses.textSecondary} leading-relaxed`}>
              P(x) = D(x) · Q(x) + R(x). باقی قسمة P(x) على (x - c) هو ببساطة القيمة العددية P(c). إذا كان الباقي 0، فإن (x - c) عامل أصيل لكثيرة الحدود.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-black/[0.06] bg-black/[0.02] dark:border-white/[0.08] dark:bg-white/[0.02]">
            <h4 className="font-bold text-sm text-emerald-600 dark:text-emerald-400 mb-1">المساحة والحجم والتطبيقات:</h4>
            <p className={`text-xs ${themeClasses.textSecondary} leading-relaxed`}>
              المساحة A = الطول × العرض، الحجم V = الطول × العرض × الارتفاع، ودالة الربح P(x) = الإيراد R(x) - التكلفة C(x). هذه النماذج تحول مشاكل الحياة الحقيقية إلى كثيرات حدود قابلة للحل.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 pt-2">
          <a
            href="/math/polynomials/polynomial-division"
            onClick={(e) => handleTestClick('/math/polynomials/polynomial-division', 'polynomial-division', e)}
            className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-emerald-500/10 text-emerald-600 hover:bg-emerald-500/20 dark:text-emerald-400 transition-colors"
          >
            ÷ اختبار قسمة كثيرات الحدود
            <ArrowRight className="w-3 h-3 rotate-180" />
          </a>
          <a
            href="/math/polynomials/polynomial-word-problems"
            onClick={(e) => handleTestClick('/math/polynomials/polynomial-word-problems', 'polynomial-word-problems', e)}
            className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-blue-500/10 text-blue-600 hover:bg-blue-500/20 dark:text-blue-400 transition-colors"
          >
             اختبار المسائل الكلامية والمساحة والحجم
            <ArrowRight className="w-3 h-3 rotate-180" />
          </a>
        </div>
      </section>

      {/* Summary Box */}
      <footer className="p-4 sm:p-6 rounded-xl bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-transparent border border-emerald-500/20">
        <div className="flex items-center gap-2 mb-2">
          <Lightbulb className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
          <h4 className={`text-sm font-bold ${themeClasses.textPrimary}`}>
            نصيحة المعلم الذهبية لإتقان كثيرات الحدود:
          </h4>
        </div>
        <p className={`text-xs ${themeClasses.textSecondary} leading-relaxed`}>
          ابدأ دائماً في أي مسألة تحليل بالبحث عن <strong>العامل المشترك الأكبر (GCF)</strong>؛ فهو يبسط المقدار ويفتح لك باب التحليل السهل للمربع الكامل أو الفرق بين مربعين أو ثلاثيات الحدود. وفي الضرب تذكر: المعاملات تُضرب، والأسس تُجمع!
        </p>
      </footer>
    </article>
  );
};
