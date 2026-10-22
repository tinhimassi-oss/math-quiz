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

interface SequencesPillarArticleProps {
  onOpenTest?: (testId: string) => void;
  className?: string;
}

export const SequencesPillarArticle: React.FC<SequencesPillarArticleProps> = ({
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
      id="sequences-pillar-guide"
      className={`p-6 sm:p-10 rounded-2xl border ${themeClasses.border} ${themeClasses.cardBg} space-y-8 shadow-2xs leading-relaxed text-right ${className}`}
    >
      {/* Pillar Article Header */}
      <header className="space-y-3 pb-6 border-b border-black/[0.06] dark:border-white/[0.08]">
        <div className="flex items-center gap-2 text-xs font-bold text-teal-600 dark:text-teal-400">
          <BookOpen className="w-4 h-4" />
          <span>المقالة المرجعية الشاملة (Pillar Guide) | أكاديمية كويزات الرياضيات</span>
        </div>

        <h2 className={`text-xl sm:text-3xl font-extrabold tracking-tight ${themeClasses.textPrimary}`}>
          الدليل المرجعي الشامل للمتتاليات والمتسلسلات: من الأنماط والحدود العامة إلى المتسلسلات اللانهائية وفيبوناتشي والتطبيقات المالية
        </h2>

        <p className={`text-sm sm:text-base ${themeClasses.textSecondary} leading-relaxed`}>
          مرجع منهجي وتربوي متكامل يغطي 12 مهارة واختباراً مستقلاً في علم المتتاليات والمتسلسلات الجبرية والهندسية؛
          صُمم هذا الدليل لتمكين الطلاب من فهم أنماط التتابع العددي، والتحول السلس بين الصيغة الصريحة والعودية،
          وحساب التراكم المالي ومسائل الطبيعة والحركة بدقة واحتراف.
        </p>
      </header>

      {/* Structured Directory / Index of 12 Quizzes */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 text-sm font-bold text-teal-600 dark:text-teal-400">
          <Compass className="w-4 h-4" />
          <span>فهرس الاختبارات والمقالات التخصصية الاثني عشر (12 Quiz Hubs):</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {[
            {
              id: 'sequence-patterns-next-terms',
              title: '1. التعرف على المتتاليات وتحديد الحدود التالية',
              url: '/math/sequences/sequence-patterns-next-terms',
              emoji: '🔍',
            },
            {
              id: 'arithmetic-sequence-explicit-formula',
              title: '2. الحد العام للمتتالية الحسابية aₙ = dn + c',
              url: '/math/sequences/arithmetic-sequence-explicit-formula',
              emoji: '📝',
            },
            {
              id: 'arithmetic-sequence-finding-terms',
              title: '3. إيجاد حدود متقدمة ورتبة الحدود',
              url: '/math/sequences/arithmetic-sequence-finding-terms',
              emoji: '🎯',
            },
            {
              id: 'arithmetic-series-finite-sum',
              title: '4. مجموع المتسلسلة الحسابية المنتهية وصيغة غاوس',
              url: '/math/sequences/arithmetic-series-finite-sum',
              emoji: '➕',
            },
            {
              id: 'geometric-sequence-common-ratio-formula',
              title: '5. الحد العام للمتتالية الهندسية aₙ = a₁ · rⁿ⁻¹',
              url: '/math/sequences/geometric-sequence-common-ratio-formula',
              emoji: '⚡',
            },
            {
              id: 'geometric-sequence-finding-terms',
              title: '6. إيجاد حدود متقدمة في المتتالية الهندسية',
              url: '/math/sequences/geometric-sequence-finding-terms',
              emoji: '🚀',
            },
            {
              id: 'finite-geometric-series-sum',
              title: '7. مجموع المتسلسلة الهندسية المنتهية',
              url: '/math/sequences/finite-geometric-series-sum',
              emoji: '🔢',
            },
            {
              id: 'infinite-geometric-series-convergence',
              title: '8. المتسلسلة الهندسية اللانهائية والتقارب',
              url: '/math/sequences/infinite-geometric-series-convergence',
              emoji: '♾️',
            },
            {
              id: 'sigma-notation-series',
              title: '9. رمز المجموع (سيجما / Sigma Notation Σ)',
              url: '/math/sequences/sigma-notation-series',
              emoji: '∑',
            },
            {
              id: 'recursive-sequences-relations',
              title: '10. المتتاليات العودية والتراجعية وشروط البداية',
              url: '/math/sequences/recursive-sequences-relations',
              emoji: '🔁',
            },
            {
              id: 'fibonacci-and-special-sequences',
              title: '11. متتالية فيبوناتشي والنسبة الذهبية والأعداد المثلثية',
              url: '/math/sequences/fibonacci-and-special-sequences',
              emoji: '🌀',
            },
            {
              id: 'sequences-series-word-problems',
              title: '12. المسائل الكلامية والتطبيقية والمالية',
              url: '/math/sequences/sequences-series-word-problems',
              emoji: '💼',
            },
          ].map((item) => (
            <a
              key={item.id}
              href={item.url}
              onClick={(e) => handleTestClick(item.url, item.id, e)}
              className={`p-3 rounded-xl border ${themeClasses.border} hover:border-teal-500/50 hover:bg-teal-500/5 transition-all text-xs font-semibold flex items-center justify-between group ${themeClasses.textPrimary}`}
            >
              <div className="flex items-center gap-2">
                <span>{item.emoji}</span>
                <span>{item.title}</span>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-teal-600 opacity-0 group-hover:opacity-100 transform group-hover:-translate-x-1 transition-all" />
            </a>
          ))}
        </div>
      </section>

      {/* Core Concept 1: Arithmetic Patterns and Linear Sequences */}
      <section className="space-y-4 pt-4 border-t border-black/[0.04] dark:border-white/[0.04]">
        <div className="flex items-center gap-2 text-base font-bold text-teal-600 dark:text-teal-400">
          <Layers className="w-5 h-5" />
          <h3>المحور الأول: المتتاليات والمتسلسلات الحسابية (النمو الخطي المنتظم)</h3>
        </div>
        <p className={`text-sm ${themeClasses.textSecondary} leading-relaxed`}>
          المتتالية الحسابية هي النموذج التتابعي الأبسط؛ حيث ينتقل العد بزيادة أو نقصان ثابت يسمى <strong>أساس المتتالية (d)</strong>.
          يرتبط هذا المفهوم بالدوال الخطية ارتباطاً وثيقاً؛ حيث يمثل الأساس ميل الخط المستقيم. ويُعد قانون غاوس للمجموع
          <code> Sₙ = (n/2)(a₁ + aₙ)</code> ثورة تاريخية حوّلت جمع آلاف الأرقام إلى عملية ضرب سريعة تعتمد على تناظر الأطراف المتساوية.
        </p>
      </section>

      {/* Core Concept 2: Geometric Sequences and Exponential Scaling */}
      <section className="space-y-4 pt-4 border-t border-black/[0.04] dark:border-white/[0.04]">
        <div className="flex items-center gap-2 text-base font-bold text-teal-600 dark:text-teal-400">
          <TrendingUp className="w-5 h-5" />
          <h3>المحور الثاني: المتتاليات الهندسية والنمو الأسي والتقارب اللانهائي</h3>
        </div>
        <p className={`text-sm ${themeClasses.textSecondary} leading-relaxed`}>
          في المتتاليات الهندسية، تتضاعف الحدود بالضرب في <strong>النسبة المشتركة (r)</strong>؛ فتتحول الصيغة إلى دالة أسية
          <code> aₙ = a₁ · rⁿ⁻¹</code>. تتجلى روعة الرياضيات في دراسة <strong>المتسلسلات الهندسية اللانهائية</strong>؛ فعندما يكون
          <code> |r| &lt; 1</code>، تتلاشى الحدود البعيدة نحو الصفر، ونتمكن من جمع عدد لا نهائي من الحدود للحصول على ناتج محدد وثابت
          <code> S_∞ = a₁ / (1 - r)</code>، وهو الأساس العلمي لتحويل الكسور العشرية الدورية وحل معضلات الحركة والفيزياء.
        </p>
      </section>

      {/* Core Concept 3: Recursive Logic, Fibonacci, and Real-World Modeling */}
      <section className="space-y-4 pt-4 border-t border-black/[0.04] dark:border-white/[0.04]">
        <div className="flex items-center gap-2 text-base font-bold text-teal-600 dark:text-teal-400">
          <Sparkles className="w-5 h-5" />
          <h3>المحور الثالث: التفكير الخوارزمي، متتالية فيبوناتشي، والتطبيقات الواقعية</h3>
        </div>
        <p className={`text-sm ${themeClasses.textSecondary} leading-relaxed`}>
          تُعد <strong>العلاقات التراجعية (Recursion)</strong> جوهر البرمجة وعلوم الحاسوب؛ حيث يُبنى كل حد على سابقه. وتبرز
          <strong>متتالية فيبوناتشي <code>Fₙ = Fₙ₋₁ + Fₙ₋₂</code></strong> كأحد أعظم أسرار الطبيعة لارتباط نسب حدودها بالرقم الذهبي
          <code> φ ≈ 1.618</code> المترسخ في نمو الكائنات الحية. وتتوج هذه المعارف في <strong>المسائل التطبيقية</strong> التي تنظم
          خطط الادخار البنكية، وجداول سداد الأقساط، وحسابات الاستهلاك السنوي للأصول.
        </p>
      </section>

      {/* Pedagogical Summary & Study Checklist */}
      <footer className="p-6 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.05] dark:border-white/[0.05] space-y-4">
        <div className="flex items-center gap-2 text-sm font-bold text-teal-600 dark:text-teal-400">
          <Award className="w-4 h-4" />
          <span>خريطة الإتقان المنهجي: كيف تدرس قسم المتتاليات والمتسلسلات بفاعلية؟</span>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-neutral-600 dark:text-neutral-400">
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
            <span>ميز بين النمط الحسابي (فرق ثابت d) والنمط الهندسي (نسبة ثابتة r).</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
            <span>أتقن صياغة الحد العام بالصورة المبسطة السريعة لتوفير الوقت في الامتحانات.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
            <span>تحقق دائماً من شرط التقارب |r| &lt; 1 قبل حساب أي مجموع لا نهائي.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
            <span>في المسائل الكلامية، حدد هل المطلوب هو قيمة حد منفرد aₙ أم المجموع التراكمي Sₙ.</span>
          </li>
        </ul>
      </footer>
    </article>
  );
};
