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

interface FunctionsGraphsPillarArticleProps {
  onOpenTest?: (testId: string) => void;
  className?: string;
}

export const FunctionsGraphsPillarArticle: React.FC<FunctionsGraphsPillarArticleProps> = ({
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
      id="functions-graphs-pillar-guide"
      className={`p-6 sm:p-10 rounded-2xl border ${themeClasses.border} ${themeClasses.cardBg} space-y-8 shadow-2xs leading-relaxed text-right ${className}`}
    >
      {/* Pillar Article Header */}
      <header className="space-y-3 pb-6 border-b border-black/[0.06] dark:border-white/[0.08]">
        <div className="flex items-center gap-2 text-xs font-bold text-sky-600 dark:text-sky-400">
          <BookOpen className="w-4 h-4" />
          <span>المقالة المرجعية الشاملة (Pillar Guide) | أكاديمية كويزات الرياضيات</span>
        </div>

        <h2 className={`text-xl sm:text-3xl font-extrabold tracking-tight ${themeClasses.textPrimary}`}>
          الدليل المرجعي الشامل للدوال والرسوم البيانية: من مفهوم الدالة والمجال إلى التحويلات والتركيب والسلوك والمسائل التطبيقية
        </h2>

        <p className={`text-sm sm:text-base ${themeClasses.textSecondary} leading-relaxed`}>
          مرجع منهجي وتربوي متكامل يغطي 12 مهارة واختباراً مستقلاً في علم الدوال وتحليل الرسوم البيانية؛ صُمم هذا الدليل
          لتمكين الطلاب والباحثين من فهم لغة التجريد الرياضي، والربط العضوي بين الصياغة الجبرية والتصور الهندسي التفاعلي.
        </p>
      </header>

      {/* Structured Directory / Index of 12 Quizzes */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 text-sm font-bold text-sky-600 dark:text-sky-400">
          <Compass className="w-4 h-4" />
          <span>فهرس الاختبارات والمقالات التخصصية الاثني عشر (12 Quiz Hubs):</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {[
            {
              id: 'function-concept-vertical-line-test',
              title: '1. مفهوم الدالة واختبار الخط الرأسي',
              url: '/math/functions-graphs/function-concept-vertical-line-test',
              emoji: '',
            },
            {
              id: 'function-domain-and-range',
              title: '2. مجال ومدى الدوال وتحديد القيود',
              url: '/math/functions-graphs/function-domain-and-range',
              emoji: '',
            },
            {
              id: 'function-notation-evaluation',
              title: '3. رمز الدالة والتعويض الجبري وقسمة الفروق',
              url: '/math/functions-graphs/function-notation-evaluation',
              emoji: '',
            },
            {
              id: 'even-and-odd-functions',
              title: '4. الدوال الزوجية والفردية والتماثل',
              url: '/math/functions-graphs/even-and-odd-functions',
              emoji: '',
            },
            {
              id: 'function-transformations',
              title: '5. التحويلات الهندسية والإزاحات والانعكاسات',
              url: '/math/functions-graphs/function-transformations',
              emoji: '',
            },
            {
              id: 'composite-functions',
              title: '6. تركيب الدوال وسلاسل العمليات',
              url: '/math/functions-graphs/composite-functions',
              emoji: '',
            },
            {
              id: 'inverse-functions',
              title: '7. الدالة العكسية واختبار الخط الأفقي',
              url: '/math/functions-graphs/inverse-functions',
              emoji: '',
            },
            {
              id: 'piecewise-defined-functions',
              title: '8. الدوال المعرفة بأكثر من قاعدة',
              url: '/math/functions-graphs/piecewise-defined-functions',
              emoji: '',
            },
            {
              id: 'analyzing-functions-behavior-extrema',
              title: '9. قراءة الرسوم والاطراد والقيم القصوى',
              url: '/math/functions-graphs/analyzing-functions-behavior-extrema',
              emoji: '',
            },
            {
              id: 'parent-functions-graphs',
              title: '10. الرسوم البيانية للدوال الأم والأصلية',
              url: '/math/functions-graphs/parent-functions-graphs',
              emoji: '',
            },
            {
              id: 'rational-functions-asymptotes',
              title: '11. خطوط التقارب للدوال النسبية والفجوات',
              url: '/math/functions-graphs/rational-functions-asymptotes',
              emoji: '',
            },
            {
              id: 'functions-word-problems-applications',
              title: '12. المسائل الكلامية والتطبيقية على الدوال',
              url: '/math/functions-graphs/functions-word-problems-applications',
              emoji: '',
            },
          ].map((item) => (
            <a
              key={item.id}
              href={item.url}
              onClick={(e) => handleTestClick(item.url, item.id, e)}
              className={`p-3 rounded-xl border ${themeClasses.border} hover:border-sky-500/50 hover:bg-sky-500/5 transition-all text-xs font-semibold flex items-center justify-between group ${themeClasses.textPrimary}`}
            >
              <div className="flex items-center gap-2">
                <span>{item.emoji}</span>
                <span>{item.title}</span>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-sky-500 opacity-0 group-hover:opacity-100 transform group-hover:-translate-x-1 transition-all" />
            </a>
          ))}
        </div>
      </section>

      {/* Core Concept 1: Foundations of Functions */}
      <section className="space-y-4 pt-4 border-t border-black/[0.04] dark:border-white/[0.04]">
        <div className="flex items-center gap-2 text-base font-bold text-sky-600 dark:text-sky-400">
          <Layers className="w-5 h-5" />
          <h3>المحور الأول: من العلاقة العامة إلى مفهوم الدالة المنضبطة</h3>
        </div>
        <p className={`text-sm ${themeClasses.textSecondary} leading-relaxed`}>
          في مستهل القرن الثامن عشر، أعاد عالم الرياضيات السويسري ليونارد أويلر صياغة الرياضيات برمتها بابتكاره مفهوم الدالة
          والرمز الشهير <code>f(x)</code>. الدالة ليست مجرد معادلة، بل هي علاقة سببية صارمة تضمن الحتمية؛ فكل مدخل <code>x</code>
          يجب أن ينتج عنه مخرج وحيد وحتمي <code>y</code>. بيانياً، يُترجم هذا المفهوم الصارم عبر <strong>اختبار الخط الرأسي</strong>؛
          حيث لا يجوز لأي خط عمودي أن يقطع المنحنى في أكثر من نقطة واحدة.
        </p>
        <div className="p-4 rounded-xl bg-sky-500/5 border border-sky-500/20 text-xs space-y-2">
          <div className="font-bold text-sky-700 dark:text-sky-300">تنبيه: قاعدة ذهبية للمجال والمدى:</div>
          <p className={themeClasses.textSecondary}>
            المجال هو مجموعة كل المدخلات المسموحة <code>x</code> دون التسبب في أخطاء رياضية (لا قسمة على صفر، ولا جذور زوجية سالبة).
            والمدى هو مجموعة كل المخرجات الناتجة <code>y</code> التي تقذفها الدالة بعد الحساب.
          </p>
        </div>
      </section>

      {/* Core Concept 2: Transformations and Inverses */}
      <section className="space-y-4 pt-4 border-t border-black/[0.04] dark:border-white/[0.04]">
        <div className="flex items-center gap-2 text-base font-bold text-sky-600 dark:text-sky-400">
          <TrendingUp className="w-5 h-5" />
          <h3>المحور الثاني: هندسة التحويلات والدوال العكسية والتركيب</h3>
        </div>
        <p className={`text-sm ${themeClasses.textSecondary} leading-relaxed`}>
          عند دراسة الدالة العامة <code>g(x) = a · f(b(x - h)) + k</code>، يتعلم الطالب فك شفرة التحولات الهندسية الأربعة:
          الإزاحات الأفقية <code>(x - h)</code> التي تعمل بعكس الإشارة الظاهرة، والإزاحات الرأسية <code>+ k</code> التي تعمل بنفس الإشارة،
          والانعكاسات عبر المحاور <code>-f(x)</code> و <code>f(-x)</code>، وعوامل التمدد والتضييق. تتكامل هذه التحويلات مع مفهوم
          <strong>تركيب الدوال <code>(f ∘ g)(x)</code></strong> كخطوط إنتاج متتالية، و<strong>الدالة العكسية <code>f⁻¹(x)</code></strong>
          التي تمثل مرآة تعكس الإحداثيات عبر المستقيم المحايد <code>y = x</code> بشرط اجتياز اختبار الخط الأفقي.
        </p>
      </section>

      {/* Core Concept 3: Analytical Behavior and Real-World Applications */}
      <section className="space-y-4 pt-4 border-t border-black/[0.04] dark:border-white/[0.04]">
        <div className="flex items-center gap-2 text-base font-bold text-sky-600 dark:text-sky-400">
          <Sparkles className="w-5 h-5" />
          <h3>المحور الثالث: تحليل سلوك الدوال والنمذجة التطبيقية في الحياة اليومية</h3>
        </div>
        <p className={`text-sm ${themeClasses.textSecondary} leading-relaxed`}>
          الغاية النهائية من تعلم الدوال هي قراءة العالم الواقعي وتفسيره. فقراءة فترات التزايد والتناقص من اليسار لليمين،
          واستخراج القمم والقيعان المحلية والمطلقة، وتحديد خطوط التقارب الرأسية والأفقية للدوال النسبية، تمكننا من حل
          أعقد مسائل الاقتصاد والتصنيع وحساب نقطة التعادل بين التكلفة والإيراد <code>P(x) = R(x) - C(x) = 0</code>،
          وتوقع مسارات المقذوفات الفيزيائية ومعدلات نمو واضمحلال الظواهر الطبيعية.
        </p>
      </section>

      {/* Pedagogical Summary & Study Checklist */}
      <footer className="p-6 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.05] dark:border-white/[0.05] space-y-4">
        <div className="flex items-center gap-2 text-sm font-bold text-sky-600 dark:text-sky-400">
          <Award className="w-4 h-4" />
          <span>خريطة الإتقان المنهجي: كيف تدرس هذا القسم بفاعلية؟</span>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-neutral-600 dark:text-neutral-400">
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
            <span>ابدأ بإتقان مفهوم الدالة واختبار الخط الرأسي للتمييز الصارم بين العلاقة والدالة.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
            <span>تدرب على استخراج قيود المجال واستبعاد أصفار المقامات والجذور السالبة.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
            <span>احفظ الأشكال الستة الكبرى للدوال الأم وطبق عليها قواعد التحويلات الهندسية.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
            <span>حل المسائل الكلامية وركز على تفسير المعنى الفيزيائي والاقتصادي للميل والمقاطع.</span>
          </li>
        </ul>
      </footer>
    </article>
  );
};
