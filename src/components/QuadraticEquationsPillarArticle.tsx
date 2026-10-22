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

interface QuadraticEquationsPillarArticleProps {
  onOpenTest?: (testId: string) => void;
  className?: string;
}

export const QuadraticEquationsPillarArticle: React.FC<QuadraticEquationsPillarArticleProps> = ({
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
      id="quadratic-pillar-guide"
      className={`p-6 sm:p-10 rounded-2xl border ${themeClasses.border} ${themeClasses.cardBg} space-y-8 shadow-2xs leading-relaxed text-right ${className}`}
    >
      {/* Pillar Article Header */}
      <header className="space-y-3 pb-6 border-b border-black/[0.06] dark:border-white/[0.08]">
        <div className="flex items-center gap-2 text-xs font-bold text-amber-600 dark:text-amber-400">
          <BookOpen className="w-4 h-4" />
          <span>المقالة المرجعية الشاملة (Pillar Guide) | أكاديمية كويزات الرياضيات</span>
        </div>

        <h2 className={`text-xl sm:text-3xl font-extrabold tracking-tight ${themeClasses.textPrimary}`}>
          الدليل المرجعي الشامل للمعادلات التربيعية: من الصورة القياسية وطرق التحليل إلى القانون العام والمميز والتمثيل البياني والتطبيقات الحركية
        </h2>

        <p className={`text-sm sm:text-base ${themeClasses.textSecondary} leading-relaxed`}>
          تُمثل المعادلات التربيعية (Quadratic Equations) حجر الزاوية في الجبر المدرسي والجامعي ونمذجة الظواهر الطبيعية والفيزيائية. من مسارات المقذوفات الصاروخية والأقمار الصناعية إلى تحسين أرباح الشركات وتصميم الجسور المعلقة على شكل قطع مكافئ، يزودك هذا الدليل المتكامل بجميع الاستراتيجيات الجبرية والهندسية لحل أي معادلة تربيعية واختيار الطريقة الأسرع والأدق بثقة تامة.
        </p>

        <div className="flex flex-wrap gap-2 pt-2">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-600 dark:text-amber-300">
             الصورة القياسية والمعاملات
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-600 dark:text-blue-400">
             طرق التحليل وإكمال المربع
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
             القانون العام ودلتا المميز
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-600 dark:text-purple-400">
             المقذوفات والقطع المكافئ
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-rose-500/10 text-rose-600 dark:text-rose-400">
             علاقات فييتا وتكوين الجذور
          </span>
        </div>
      </header>

      {/* Quick Action Grid to All 12 Quizzes */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <Compass className="w-5 h-5 text-amber-600 dark:text-amber-400" />
          <h3 className={`text-lg sm:text-xl font-bold ${themeClasses.textPrimary}`}>
            فهرس الاختبارات والمقالات التفاعلية الـ 12 المتوفرة
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {[
            {
              id: 'quadratic-standard-form-coefficients',
              title: '1. الصورة القياسية والمعاملات (a, b, c)',
              url: '/math/quadratic-equations/quadratic-standard-form-coefficients',
              emoji: '',
            },
            {
              id: 'quadratic-square-root-method',
              title: '2. حل المعادلات بأخذ الجذر التربيعي',
              url: '/math/quadratic-equations/quadratic-square-root-method',
              emoji: '',
            },
            {
              id: 'quadratic-factoring-gcf',
              title: '3. التحليل بإخراج العامل المشترك (GCF)',
              url: '/math/quadratic-equations/quadratic-factoring-gcf',
              emoji: '',
            },
            {
              id: 'quadratic-factoring-simple-trinomial',
              title: '4. تحليل ثلاثية الحدود البسيطة (x² + bx + c)',
              url: '/math/quadratic-equations/quadratic-factoring-simple-trinomial',
              emoji: '',
            },
            {
              id: 'quadratic-factoring-general-trinomial',
              title: '5. تحليل ثلاثية الحدود العامة (ax² + bx + c)',
              url: '/math/quadratic-equations/quadratic-factoring-general-trinomial',
              emoji: '',
            },
            {
              id: 'quadratic-completing-the-square',
              title: '6. طريقة إكمال المربع (Completing Square)',
              url: '/math/quadratic-equations/quadratic-completing-the-square',
              emoji: '',
            },
            {
              id: 'quadratic-formula-method',
              title: '7. القانون العام الشامل لحل المعادلات',
              url: '/math/quadratic-equations/quadratic-formula-method',
              emoji: '',
            },
            {
              id: 'quadratic-discriminant-roots-nature',
              title: '8. المميز (Δ) وتحديد نوع وعدد الجذور',
              url: '/math/quadratic-equations/quadratic-discriminant-roots-nature',
              emoji: '',
            },
            {
              id: 'quadratic-parabola-vertex-axis',
              title: '9. التمثيل البياني والرأس ومحور التماثل',
              url: '/math/quadratic-equations/quadratic-parabola-vertex-axis',
              emoji: '',
            },
            {
              id: 'quadratic-intercepts-graphing',
              title: '10. نقاط التقاطع مع المحورين السيني والصادي',
              url: '/math/quadratic-equations/quadratic-intercepts-graphing',
              emoji: '',
            },
            {
              id: 'quadratic-word-problems-projectiles',
              title: '11. المسائل الكلامية وحركة المقذوفات',
              url: '/math/quadratic-equations/quadratic-word-problems-projectiles',
              emoji: '',
            },
            {
              id: 'quadratic-roots-formation-vieta',
              title: '12. إيجاد المعادلة علم لها (الجذور أو الرأس والنقطة)',
              url: '/math/quadratic-equations/quadratic-roots-formation-vieta',
              emoji: '',
            },
          ].map((item) => (
            <a
              key={item.id}
              href={item.url}
              onClick={(e) => handleTestClick(item.url, item.id, e)}
              className={`flex items-center justify-between p-3 rounded-xl border ${themeClasses.border} ${themeClasses.cardBg} hover:border-amber-500/50 hover:shadow-xs transition-all text-xs font-semibold group`}
            >
              <div className="flex items-center gap-2">
                <span className="text-base">{item.emoji}</span>
                <span className={`group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors ${themeClasses.textPrimary}`}>
                  {item.title}
                </span>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-amber-500/70 group-hover:text-amber-600 transition-colors transform group-hover:-translate-x-1" />
            </a>
          ))}
        </div>
      </section>

      {/* Section 1: Standard Form & Decision Tree */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <Layers className="w-5 h-5 text-amber-600 dark:text-amber-400" />
          <h3 className={`text-lg sm:text-xl font-bold ${themeClasses.textPrimary}`}>
            1. الصورة القياسية وشجرة اتخاذ القرار لحل أي معادلة تربيعية
          </h3>
        </div>

        <p className={`text-sm ${themeClasses.textSecondary}`}>
          الصورة القياسية للمعادلة التربيعية هي <span className="font-mono font-bold" dir="ltr">ax² + bx + c = 0</span> مع شرط جوهري أن يكون <span className="font-mono font-bold" dir="ltr">a ≠ 0</span>. قبل أن تبدأ بالحل، لا تنظر إلى المعادلة بشكل عشوائي، بل اتبع شجرة القرار السريعة التالية لتوفير الوقت والجهد:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl border border-amber-500/20 bg-amber-500/5 space-y-2">
            <h4 className="text-sm font-bold text-amber-700 dark:text-amber-300 flex items-center gap-2">
              <span> الحالة الأولى: المعادلة ناقصة (غياب أحد الحدود)</span>
            </h4>
            <ul className="text-xs space-y-2 text-stone-700 dark:text-stone-300">
              <li>
                <strong>إذا كانت b = 0 (مثل x² - 16 = 0):</strong> اعزل x² فوراً واستخدم طريقة <em>أخذ الجذر التربيعي</em> المباشرة: x = ±√16 = ±4.
              </li>
              <li>
                <strong>إذا كانت c = 0 (مثل 3x² + 6x = 0):</strong> استخدم <em>إخراج العامل المشترك الأكبر (GCF)</em> فوراً: 3x(x + 2) = 0، وأحد الحلين دائماً هو x = 0.
              </li>
            </ul>
          </div>

          <div className="p-4 rounded-xl border border-blue-500/20 bg-blue-500/5 space-y-2">
            <h4 className="text-sm font-bold text-blue-700 dark:text-blue-300 flex items-center gap-2">
              <span> الحالة الثانية: المعادلة كاملة بثلاثة حدود</span>
            </h4>
            <ul className="text-xs space-y-2 text-stone-700 dark:text-stone-300">
              <li>
                <strong>إذا كانت a = 1 وثلاثية الحدود بسيطة:</strong> ابحث عن عددين ضربهما c ومجموعهما b خلال 5 ثوانٍ، إن وجدتهما حلل إلى (x + p)(x + q) = 0.
              </li>
              <li>
                <strong>إذا كانت a &gt; 1 أو كانت الأعداد صعبة / صماء:</strong> الجأ فوراً وبلا تردد إلى <em>القانون العام</em>، فهو يضمن الحل الدقيق مهما كانت الأرقام.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 2: Master Formulas & Cheat Sheet */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-amber-600 dark:text-amber-400" />
          <h3 className={`text-lg sm:text-xl font-bold ${themeClasses.textPrimary}`}>
            2. جدول القوانين الذهبية للمعادلات التربيعية (Master Cheat Sheet)
          </h3>
        </div>

        <div className="overflow-x-auto rounded-xl border border-black/[0.06] dark:border-white/[0.08]">
          <table className="w-full text-xs text-right border-collapse">
            <thead>
              <tr className="bg-black/[0.03] dark:bg-white/[0.04] border-b border-black/[0.06] dark:border-white/[0.08]">
                <th className="p-3 font-bold">المفهوم الجبري</th>
                <th className="p-3 font-bold">القانون الرياضي المعياري</th>
                <th className="p-3 font-bold">الهدف والاستخدام الرياضي</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-black/[0.04] dark:divide-white/[0.04]">
              <tr>
                <td className="p-3 font-bold text-amber-600 dark:text-amber-400">القانون العام (Quadratic Formula)</td>
                <td className="p-3 font-mono font-semibold" dir="ltr">x = [-b ± √(b² - 4ac)] / (2a)</td>
                <td className="p-3 text-stone-600 dark:text-stone-300">الحل المضمون لأي معادلة تربيعية بدون استثناء</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-blue-600 dark:text-blue-400">المميز (Discriminant - Δ)</td>
                <td className="p-3 font-mono font-semibold" dir="ltr">Δ = b² - 4ac</td>
                <td className="p-3 text-stone-600 dark:text-stone-300">تحديد عدد ونوع الجذور (موجب: جذران، صفر: جذر مكرر، سالب: مركبان)</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-emerald-600 dark:text-emerald-400">محور التماثل ورأس القطع (Vertex)</td>
                <td className="p-3 font-mono font-semibold" dir="ltr">x_v = -b / (2a), y_v = f(x_v)</td>
                <td className="p-3 text-stone-600 dark:text-stone-300">إيجاد أعلى قمة أو أعمق قاع وزمن أقصى ارتفاع للمقذوفات</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-purple-600 dark:text-purple-400">مجموع وحاصل ضرب الجذور (فييتا)</td>
                <td className="p-3 font-mono font-semibold" dir="ltr">S = -b/a, P = c/a</td>
                <td className="p-3 text-stone-600 dark:text-stone-300">تكوين المعادلة x² - Sx + P = 0 وفحص صحة الحلول ذهنياً</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-rose-600 dark:text-rose-400">حد إكمال المربع</td>
                <td className="p-3 font-mono font-semibold" dir="ltr">Term = (b / 2)²</td>
                <td className="p-3 text-stone-600 dark:text-stone-300">يُضاف لكلا الطرفين (عندما a = 1) لبناء مقدار ثلاثي مربع كامل</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 3: Physics & Parabola */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-amber-600 dark:text-amber-400" />
          <h3 className={`text-lg sm:text-xl font-bold ${themeClasses.textPrimary}`}>
            3. الربط الهندسي والفيزيائي: المقذوفات وخواص القطع المكافئ
          </h3>
        </div>

        <p className={`text-sm ${themeClasses.textSecondary}`}>
          في علم الفيزياء والحركة، ترسم الأجسام المقذوفة في الهواء مساراً قطعياً مكافئاً تماماً بسبب التجاذب مع الجاذبية الأرضية. المعادلة المعيارية للارتفاع h بالامتار عند الزمن t بالثواني هي:
        </p>

        <div className="p-4 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/[0.08] text-center font-mono font-bold text-sm sm:text-base text-amber-600 dark:text-amber-400" dir="ltr">
          h(t) = -½ g t² + v₀ t + h₀ ≈ -5t² + v₀ t + h₀
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
          <div className="p-3 rounded-lg border border-black/[0.06] dark:border-white/[0.06] space-y-1">
            <span className="font-bold text-amber-600 dark:text-amber-400">1. زمن أقصى ارتفاع</span>
            <p className="text-stone-600 dark:text-stone-400">يحدث عند رأس المنحنى t = -v₀ / (2a) = v₀ / 10.</p>
          </div>
          <div className="p-3 rounded-lg border border-black/[0.06] dark:border-white/[0.06] space-y-1">
            <span className="font-bold text-blue-600 dark:text-blue-400">2. أقصى ارتفاع يبلغه الجسم</span>
            <p className="text-stone-600 dark:text-stone-400">يُحسب بتعويض زمن الذروة t في معادلة الارتفاع h(t).</p>
          </div>
          <div className="p-3 rounded-lg border border-black/[0.06] dark:border-white/[0.06] space-y-1">
            <span className="font-bold text-emerald-600 dark:text-emerald-400">3. زمن الارتطام بالأرض</span>
            <p className="text-stone-600 dark:text-stone-400">نضع الارتفاع h(t) = 0 ونحل المعادلة التربيعية ونستبعد الحل السالب.</p>
          </div>
        </div>
      </section>

      {/* Section 4: Pitfalls to Avoid */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <Lightbulb className="w-5 h-5 text-amber-600 dark:text-amber-400" />
          <h3 className={`text-lg sm:text-xl font-bold ${themeClasses.textPrimary}`}>
            4. أربعة أخطاء شائعة يتكرر الوقوع فيها في الاختبارات
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl border border-rose-500/20 bg-rose-500/5 space-y-1.5">
            <h4 className="text-xs font-bold text-rose-700 dark:text-rose-300">
              • الخطأ الأول: قسمة طرفي المعادلة على المجهول x
            </h4>
            <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
              في معادلة مثل 2x² = 8x، قسمة الطرفين على x تُعطي x = 4 فقط وتتسبب في ضياع الحل الجوهري x = 0. الصحيح دائماً هو التصفير وإخراج 2x عاملاً مشتركاً.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-rose-500/20 bg-rose-500/5 space-y-1.5">
            <h4 className="text-xs font-bold text-rose-700 dark:text-rose-300">
              • الخطأ الثاني: نسيان إشارة السالب عند التعويض في -b
            </h4>
            <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
              إذا كانت المعادلة x² - 6x + 5 = 0، فإن b = -6. وعند التعويض في القانون العام فإن -b تعني -(-6) = +6، والخطأ الشائع هو كتابتها -6.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-rose-500/20 bg-rose-500/5 space-y-1.5">
            <h4 className="text-xs font-bold text-rose-700 dark:text-rose-300">
              • الخطأ الثالث: نسيان رمز (±) عند أخذ الجذر التربيعي
            </h4>
            <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
              عند حل x² = 49، كتابة x = 7 فقط تُفقدك نصف الدرجة. للأعداد الموجبة دائماً جذران تربيعيان متعاكسان في الإشارة: x = ±7.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-rose-500/20 bg-rose-500/5 space-y-1.5">
            <h4 className="text-xs font-bold text-rose-700 dark:text-rose-300">
              • الخطأ الرابع: اختصار مقام القانون العام 2a جزئياً
            </h4>
            <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
              المقام 2a يقسم كامل البسط معاً (-b وجذر المميز). لا يجوز أبداً اختصار 2a مع -b وإهمال اختصاره مع الجذر.
            </p>
          </div>
        </div>
      </section>

      {/* Footer Banner */}
      <footer className="pt-6 border-t border-black/[0.06] dark:border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Award className="w-8 h-8 text-amber-500" />
          <div>
            <h4 className={`text-sm font-bold ${themeClasses.textPrimary}`}>
              جاهز لاختبار مهاراتك في المعادلات التربيعية؟
            </h4>
            <p className={`text-xs ${themeClasses.textSecondary}`}>
              اختر أي اختبار من الـ 12 اختباراً، واحصل على تصحيح فوري وشهادة إتمام معتمدة باسمك.
            </p>
          </div>
        </div>

        <button
          onClick={(e) =>
            handleTestClick(
              '/math/quadratic-equations/quadratic-standard-form-coefficients',
              'quadratic-standard-form-coefficients',
              e
            )
          }
          className="px-5 py-2.5 rounded-xl text-xs font-bold bg-amber-500 hover:bg-amber-600 text-white shadow-sm hover:shadow transition-all flex items-center gap-2"
        >
          <span>ابدأ بالاختبار الأول التأسيسي</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </footer>
    </article>
  );
};
