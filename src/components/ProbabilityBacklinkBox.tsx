import React from 'react';
import { ArrowRight, BookOpen, Layers } from 'lucide-react';
import { useEyeTheme } from '../context/ThemeContext';
import { navigateTo } from '../navigation/router';

export interface RelatedProbabilityQuizInfo {
  id: string;
  title: string;
  emoji: string;
  mathSymbol: string;
  level: 'أساسي' | 'متوسط' | 'متقدم';
  url: string;
  relationReason: string;
}

export const ALL_PROBABILITY_TESTS: Record<string, RelatedProbabilityQuizInfo> = {
  'basic-theoretical-experimental-probability': {
    id: 'basic-theoretical-experimental-probability',
    title: 'مفهوم الاحتمال الأساسي والتجريبي والنظري',
    emoji: '🎲',
    mathSymbol: 'P(E) = n(E) / n(S)',
    level: 'أساسي',
    url: '/domain/statistics-probability/probability/basic-theoretical-experimental-probability',
    relationReason: 'الأساس المفاهيمي لفهم فضاء الإمكانيات والتمييز بين الحساب النظري والتجريبي وقانون الأعداد الكبيرة',
  },
  'sample-space-counting-principles': {
    id: 'sample-space-counting-principles',
    title: 'فضاء العينة ومبادئ العد الأساسية',
    emoji: '📐',
    mathSymbol: 'n(S) = n₁ × n₂',
    level: 'أساسي',
    url: '/domain/statistics-probability/probability/sample-space-counting-principles',
    relationReason: 'حصر النواتج الكلية للتجارب متعددة المراحل باستخدام مخطط الشجرة البيانية ومبدأ الضرب',
  },
  'geometric-probability': {
    id: 'geometric-probability',
    title: 'الاحتمال الهندسي والمساحات',
    emoji: '🎯',
    mathSymbol: 'P = Area(E) / Area(S)',
    level: 'متوسط',
    url: '/domain/statistics-probability/probability/geometric-probability',
    relationReason: 'الانتقال من النواتج المنفصلة إلى النواتج المتصلة عبر قياسات الأطوال والمساحات والأحجام',
  },
  'simple-compound-complementary-events': {
    id: 'simple-compound-complementary-events',
    title: 'الحوادث البسيطة والمركبة والحادث المتمم',
    emoji: '⭕',
    mathSymbol: "P(E') = 1 - P(E)",
    level: 'أساسي',
    url: '/domain/statistics-probability/probability/simple-compound-complementary-events',
    relationReason: 'تصنيف أنواع الحوادث وحساب احتمالات عدم الحدوث ومكملة فضاء العينة بأسلوب مباشر',
  },
  'conditional-probability-multiplication-rule': {
    id: 'conditional-probability-multiplication-rule',
    title: 'الاحتمال المشروط وقاعدة الضرب',
    emoji: '🔍',
    mathSymbol: 'P(A|B) = P(A∩B)/P(B)',
    level: 'متوسط',
    url: '/domain/statistics-probability/probability/conditional-probability-multiplication-rule',
    relationReason: 'تحديث فضاء العينة بعد توافر معلومة جزئية وحساب احتمالات السحب بدون إرجاع',
  },
  'independent-dependent-events': {
    id: 'independent-dependent-events',
    title: 'الحوادث المستقلة وغير المستقلة',
    emoji: '⚡',
    mathSymbol: 'P(A∩B) = P(A) · P(B)',
    level: 'متوسط',
    url: '/domain/statistics-probability/probability/independent-dependent-events',
    relationReason: 'التحقق الرياضي الصارم من تأثير وقوع حادث ما على احتمالية وقوع حادث آخر',
  },
  'mutually-exclusive-overlapping-events': {
    id: 'mutually-exclusive-overlapping-events',
    title: 'الحوادث المتنافية وغير المتنافية وقاعدة الجمع',
    emoji: '🔀',
    mathSymbol: 'P(A∪B) = P(A)+P(B)-P(A∩B)',
    level: 'متوسط',
    url: '/domain/statistics-probability/probability/mutually-exclusive-overlapping-events',
    relationReason: 'تجنب الحساب المزدوج للمنطقة المشتركة في اتحاد الحوادث العشوائية ومجموعاتها',
  },
  'permutations-combinations-probability': {
    id: 'permutations-combinations-probability',
    title: 'التباديل والتوافيق في حساب الاحتمالات',
    emoji: '🔢',
    mathSymbol: 'nCr = n! / (r!(n-r)!)',
    level: 'متقدم',
    url: '/domain/statistics-probability/probability/permutations-combinations-probability',
    relationReason: 'حساب احتمالات السحب العشوائي المعقد وتشكيل اللجان عندما يكون الترتيب مهماً أو مهملاً',
  },
  'bayes-theorem-total-probability': {
    id: 'bayes-theorem-total-probability',
    title: 'مبرهنة بايز وقاعدة الاحتمال الكلي',
    emoji: '🧬',
    mathSymbol: 'P(A|B) = P(B|A)P(A)/P(B)',
    level: 'متقدم',
    url: '/domain/statistics-probability/probability/bayes-theorem-total-probability',
    relationReason: 'تحديث الاحتمالات القبلية بعد رصد الدلائل والشواهد في التشخيص الطبي وفحص جودة المصانع',
  },
  'discrete-random-variables-distributions': {
    id: 'discrete-random-variables-distributions',
    title: 'المتغيرات العشوائية المنفصلة والقيمة المتوقعة',
    emoji: '📈',
    mathSymbol: 'E(X) = ∑ x · P(x)',
    level: 'متقدم',
    url: '/domain/statistics-probability/probability/discrete-random-variables-distributions',
    relationReason: 'نمذجة العوائد الرقمية وحساب المتوسط المرجح والتباين للتوزيعات الاحتمالية التجريبية',
  },
  'binomial-probability-distribution': {
    id: 'binomial-probability-distribution',
    title: 'توزيع ذي الحدين وتجارب برنولي',
    emoji: '🪙',
    mathSymbol: 'P(X=k) = nCk · pᵏ · qⁿ⁻ᵏ',
    level: 'متقدم',
    url: '/domain/statistics-probability/probability/binomial-probability-distribution',
    relationReason: 'حساب احتمالات تكرار النجاحات في سلاسل المحاولات الثنائية المستقلة ذات المعلمتين n و p',
  },
  'applied-probability-word-problems': {
    id: 'applied-probability-word-problems',
    title: 'مسائل وتطبيقات حياتية وتحليل المخاطر',
    emoji: '🧩',
    mathSymbol: 'E(Net) = E(Gain) - Cost',
    level: 'متقدم',
    url: '/domain/statistics-probability/probability/applied-probability-word-problems',
    relationReason: 'اتخاذ القرارات الرشيدة في عقود التأمين والألعاب الاستثمارية وتحليل درجات الأمان',
  },
};

interface ProbabilityBacklinkBoxProps {
  currentTestId: string;
  relatedIds?: string[];
}

export const ProbabilityBacklinkBox: React.FC<ProbabilityBacklinkBoxProps> = ({
  currentTestId,
  relatedIds,
}) => {
  const { themeClasses } = useEyeTheme();

  const targetIds =
    relatedIds && relatedIds.length > 0
      ? relatedIds
      : Object.keys(ALL_PROBABILITY_TESTS).filter((id) => id !== currentTestId);

  const relatedQuizzes = targetIds
    .map((id) => ALL_PROBABILITY_TESTS[id])
    .filter(Boolean);

  const handleNavigate = (url: string) => {
    navigateTo(url);
  };

  return (
    <aside
      aria-label="اختبارات وموضوعات ذات صلة في نظرية الاحتمالات"
      className={`rounded-2xl border ${themeClasses.border} ${themeClasses.cardBg} p-6 sm:p-7 shadow-sm transition-all text-right space-y-5`}
    >
      <div className="flex items-center justify-between border-b border-black/5 dark:border-white/5 pb-3.5">
        <div className="flex items-center gap-2">
          <Layers className="w-5 h-5 text-amber-500" />
          <h3 className={`text-base font-bold ${themeClasses.textPrimary}`}>
            مسارات مقترحة واختبارات متصلة في نظرية الاحتمالات
          </h3>
        </div>
        <span className={`text-xs ${themeClasses.textSecondary}`}>
          شبكة المعرفة الرياضية
        </span>
      </div>

      <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
        يتطلب إتقان نظرية الاحتمالات فهماً تكاملياً؛ ففضاء العينة يغذي قواعد الجمع والضرب، والاحتمال الشرطي يمهد لمبرهنة بايز، والتوزيعات الاحتمالية تنقل الحساب إلى واقع اتخاذ القرار وتحليل المخاطر. نوصي باستكشاف الاختبارات ذات الصلة:
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 pt-1">
        {relatedQuizzes.map((quiz) => (
          <button
            key={quiz.id}
            onClick={() => handleNavigate(quiz.url)}
            className={`group text-right p-4 rounded-xl border ${themeClasses.border} bg-black/[0.015] dark:bg-white/[0.015] hover:bg-amber-500/5 hover:border-amber-500/30 transition-all flex flex-col justify-between cursor-pointer`}
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xl">{quiz.emoji}</span>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-black/5 dark:bg-white/5 text-amber-600 dark:text-amber-400 font-semibold">
                  {quiz.mathSymbol}
                </span>
              </div>
              <h4
                className={`text-sm font-bold ${themeClasses.textPrimary} group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors line-clamp-1`}
              >
                {quiz.title}
              </h4>
              <p className={`text-xs ${themeClasses.textSecondary} leading-relaxed line-clamp-2`}>
                {quiz.relationReason}
              </p>
            </div>

            <div className="mt-3 pt-2.5 border-t border-black/5 dark:border-white/5 flex items-center justify-between text-xs text-amber-600 dark:text-amber-400 font-medium">
              <span>ابدأ الاختبار الآن</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
            </div>
          </button>
        ))}
      </div>

      {/* Quick link back to category overview */}
      <div className="pt-3 border-t border-black/5 dark:border-white/5 flex flex-wrap items-center justify-between gap-2 text-xs">
        <button
          onClick={() => navigateTo('/domain/statistics-probability/probability')}
          className="inline-flex items-center gap-1.5 font-bold text-amber-600 dark:text-amber-400 hover:underline cursor-pointer"
        >
          <BookOpen className="w-4 h-4" />
          <span>العودة إلى الدليل الشامل لقسم الاحتمالات (12 اختباراً)</span>
        </button>
        <span className={themeClasses.textSecondary}>
          الاحتمالات · الإحصاء والاحتمالات
        </span>
      </div>
    </aside>
  );
};
