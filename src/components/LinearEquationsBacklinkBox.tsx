import React from 'react';
import { ArrowRight, BookOpen, Compass } from 'lucide-react';
import { useEyeTheme } from '../context/ThemeContext';
import { navigateTo } from '../navigation/router';

export interface RelatedLinearEquationsQuizInfo {
  id: string;
  title: string;
  emoji: string;
  mathSymbol: string;
  level: 'أساسي' | 'متوسط' | 'متقدم';
  url: string;
  relationReason: string;
}

export const ALL_LINEAR_EQUATIONS_TESTS: Record<string, RelatedLinearEquationsQuizInfo> = {
  'one-step-equations': {
    id: 'one-step-equations',
    title: 'اختبار حل معادلات الخطوة الواحدة (One-Step Equations)',
    emoji: '',
    mathSymbol: 'x + 7 = 15 ⇒ x = 8',
    level: 'أساسي',
    url: '/math/linear-equations/one-step-equations',
    relationReason: 'الخطوة التأسيسية الأولى لإتقان عزل المتغير بالعملية العكسية المباشرة',
  },
  'two-step-equations': {
    id: 'two-step-equations',
    title: 'اختبار حل معادلات الخطوتين (Two-Step Equations)',
    emoji: '',
    mathSymbol: '3x - 4 = 11 ⇒ x = 5',
    level: 'أساسي',
    url: '/math/linear-equations/two-step-equations',
    relationReason: 'التدرج المنهجي للتخلص من الحد الثابت أولاً ثم معامل المتغير',
  },
  'equations-parentheses-distributive': {
    id: 'equations-parentheses-distributive',
    title: 'اختبار معادلات تحتوي على أقواس وتوزيع',
    emoji: '',
    mathSymbol: '2(x + 3) = 14 ⇒ x = 4',
    level: 'متوسط',
    url: '/math/linear-equations/equations-parentheses-distributive',
    relationReason: 'تحرير الحدود الجبرية باستخدام خاصية التوزيع وتجميع الحدود المتشابهة',
  },
  'equations-variables-both-sides': {
    id: 'equations-variables-both-sides',
    title: 'اختبار معادلات تتضمن المتغير في كلا الطرفين',
    emoji: '',
    mathSymbol: '5x - 2 = 2x + 10 ⇒ x = 4',
    level: 'متوسط',
    url: '/math/linear-equations/equations-variables-both-sides',
    relationReason: 'إدارة الكفتين بنقل المتغير الأصغر وتوحيد المتغيرات في جهة والثوابت في جهة',
  },
  'equations-fractions-decimals': {
    id: 'equations-fractions-decimals',
    title: 'اختبار معادلات تحتوي على كسور وأعداد عشرية',
    emoji: '',
    mathSymbol: '(½)x + 3 = 7 ⇒ x = 8',
    level: 'متوسط',
    url: '/math/linear-equations/equations-fractions-decimals',
    relationReason: 'تطهير المقامات بالمضاعف المشترك الأصغر والضرب في 10 لتحويل الكسور لأعداد صحيحة',
  },
  'evaluating-algebraic-expressions': {
    id: 'evaluating-algebraic-expressions',
    title: 'اختبار التعويض والتعبير الجبري',
    emoji: '',
    mathSymbol: 'x = 3 ⇒ 2x² - 4x + 1 = 7',
    level: 'متوسط',
    url: '/math/linear-equations/evaluating-algebraic-expressions',
    relationReason: 'استبدال المتغيرات بقيم عددية مع استخدام الأقواس الحامية وتطبيق ترتيب العمليات',
  },
  'special-cases-equations': {
    id: 'special-cases-equations',
    title: 'اختبار الحالات الخاصة (بلا حل أو لانهائية الحلول)',
    emoji: '',
    mathSymbol: '4x + 2 = 4x + 5 ⇒ مستحيلة',
    level: 'متقدم',
    url: '/math/linear-equations/special-cases-equations',
    relationReason: 'التمييز الدقيق بين التناقض العددي (المستحيلة) والمتطابقة التامة والحل الوحيد x=0',
  },
  'finding-slope-linear': {
    id: 'finding-slope-linear',
    title: 'اختبار إيجاد ميل الخط المستقيم (Finding the Slope)',
    emoji: '',
    mathSymbol: 'm = (y₂ - y₁) / (x₂ - x₁)',
    level: 'متوسط',
    url: '/math/linear-equations/finding-slope-linear',
    relationReason: 'الربط الهندسي بين الجبر ومعدل التغير الرأسي والأفقي وميل المستقيمات المتوازية والمتعامدة',
  },
  'writing-slope-intercept-form': {
    id: 'writing-slope-intercept-form',
    title: 'اختبار كتابة معادلة الخط المستقيم (y = mx + b)',
    emoji: '',
    mathSymbol: 'y = 3x + 2',
    level: 'متوسط',
    url: '/math/linear-equations/writing-slope-intercept-form',
    relationReason: 'صياغة بطاقة هوية المستقيم الجبرية بمعلومية الميل والمقطع أو نقطتين',
  },
  'graphing-linear-equations': {
    id: 'graphing-linear-equations',
    title: 'اختبار التمثيل البياني للمعادلات الخطية',
    emoji: '',
    mathSymbol: '2x + y = 6 ⇒ المقاطع',
    level: 'متوسط',
    url: '/math/linear-equations/graphing-linear-equations',
    relationReason: 'تحويل المعادلات إلى مسارات بصرية عبر المقاطع السينية والصادية والمستوى الإحداثي',
  },
  'systems-of-linear-equations': {
    id: 'systems-of-linear-equations',
    title: 'اختبار أنظمة المعادلات الخطية (Systems of Equations)',
    emoji: '',
    mathSymbol: '{ x + y = 5 , x - y = 1 }',
    level: 'متقدم',
    url: '/math/linear-equations/systems-of-linear-equations',
    relationReason: 'إيجاد الحل المشترك ونقطة التقاطع بين معادلتين بطريقتي الحذف والتعويض',
  },
  'linear-equations-word-problems': {
    id: 'linear-equations-word-problems',
    title: 'اختبار المسائل الكلامية والتطبيقية على المعادلات الخطية',
    emoji: '',
    mathSymbol: '3x + 5 = 20 ⇒ x = 5',
    level: 'متقدم',
    url: '/math/linear-equations/linear-equations-word-problems',
    relationReason: 'نمذجة مواقف الحياة الواقعية من أسعار وتكاليف وأعمار ومسافات إلى معادلات دقيقة',
  },
};

const TOPIC_RELATIONS: Record<string, string[]> = {
  'one-step-equations': [
    'two-step-equations',
    'evaluating-algebraic-expressions',
    'linear-equations-word-problems',
  ],
  'two-step-equations': [
    'one-step-equations',
    'equations-parentheses-distributive',
    'equations-variables-both-sides',
  ],
  'equations-parentheses-distributive': [
    'two-step-equations',
    'equations-variables-both-sides',
    'special-cases-equations',
  ],
  'equations-variables-both-sides': [
    'equations-parentheses-distributive',
    'equations-fractions-decimals',
    'special-cases-equations',
  ],
  'equations-fractions-decimals': [
    'two-step-equations',
    'equations-variables-both-sides',
    'evaluating-algebraic-expressions',
  ],
  'evaluating-algebraic-expressions': [
    'one-step-equations',
    'equations-fractions-decimals',
    'finding-slope-linear',
  ],
  'special-cases-equations': [
    'equations-variables-both-sides',
    'equations-parentheses-distributive',
    'systems-of-linear-equations',
  ],
  'finding-slope-linear': [
    'writing-slope-intercept-form',
    'graphing-linear-equations',
    'systems-of-linear-equations',
  ],
  'writing-slope-intercept-form': [
    'finding-slope-linear',
    'graphing-linear-equations',
    'linear-equations-word-problems',
  ],
  'graphing-linear-equations': [
    'writing-slope-intercept-form',
    'finding-slope-linear',
    'systems-of-linear-equations',
  ],
  'systems-of-linear-equations': [
    'graphing-linear-equations',
    'equations-variables-both-sides',
    'linear-equations-word-problems',
  ],
  'linear-equations-word-problems': [
    'two-step-equations',
    'systems-of-linear-equations',
    'writing-slope-intercept-form',
  ],
};

interface LinearEquationsBacklinkBoxProps {
  currentTestId: string;
  className?: string;
}

export const LinearEquationsBacklinkBox: React.FC<LinearEquationsBacklinkBoxProps> = ({
  currentTestId,
  className = '',
}) => {
  const { themeClasses } = useEyeTheme();
  const relatedKeys = TOPIC_RELATIONS[currentTestId] || [
    'one-step-equations',
    'two-step-equations',
    'equations-variables-both-sides',
  ];

  const relatedQuizzes = relatedKeys
    .map((key) => ALL_LINEAR_EQUATIONS_TESTS[key])
    .filter(Boolean);

  const handleNavigate = (url: string, e: React.MouseEvent) => {
    e.preventDefault();
    navigateTo(url);
  };

  return (
    <aside
      className={`p-6 sm:p-8 rounded-2xl border ${themeClasses.border} ${themeClasses.cardBg} space-y-6 shadow-2xs text-right ${className}`}
      aria-label="اختبارات متصلة في المعادلات الخطية"
    >
      <div className="flex items-center justify-between border-b border-black/[0.06] dark:border-white/[0.08] pb-4">
        <div className="flex items-center gap-2 text-sm font-bold text-[#127052] dark:text-[#5EB5A1]">
          <Compass className="w-5 h-5 text-[#127052] dark:text-[#5EB5A1]" />
          <span>المسار التعليمي المتصل | المعادلات الخطية والجبر</span>
        </div>
        <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#127052]/10 text-[#127052] dark:text-[#5EB5A1] dark:bg-[#127052]/20">
          منهج متكامل (12 اختباراً)
        </span>
      </div>

      <div className="space-y-2">
        <h3 className={`text-base sm:text-lg font-bold ${themeClasses.textPrimary}`}>
          اختبارات ومهارات موصى بها بعد هذا الاختبار:
        </h3>
        <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
          التمكن من المعادلات الخطية يتطلب الربط التراكمي بين عزل المتغيرات، وفك الأقواس، وحساب الميل، وصيغة الميل والمقطع، وحل الأنظمة، والتطبيقات الحياتية.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {relatedQuizzes.map((quiz) => (
          <a
            key={quiz.id}
            href={quiz.url}
            onClick={(e) => handleNavigate(quiz.url, e)}
            className={`group block p-4 rounded-xl border transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md ${themeClasses.border} hover:border-[#127052] dark:hover:border-[#5EB5A1] bg-black/[0.01] dark:bg-white/[0.02]`}
          >
            <div className="flex items-start justify-between mb-2">
              <span className="text-2xl p-1.5 rounded-lg bg-black/[0.03] dark:bg-white/[0.05]">
                {quiz.emoji}
              </span>
              <span
                className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${
                  quiz.level === 'أساسي'
                    ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                    : quiz.level === 'متوسط'
                    ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400'
                    : 'bg-rose-500/10 text-rose-600 dark:text-rose-400'
                }`}
              >
                {quiz.level}
              </span>
            </div>

            <h4
              className={`text-sm font-bold mb-1.5 group-hover:text-[#127052] dark:group-hover:text-[#5EB5A1] transition-colors ${themeClasses.textPrimary} line-clamp-1`}
            >
              {quiz.title}
            </h4>

            <div className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400 mb-2 dir-ltr text-right">
              {quiz.mathSymbol}
            </div>

            <p className={`text-xs ${themeClasses.textSecondary} leading-normal mb-3 line-clamp-2`}>
              {quiz.relationReason}
            </p>

            <div className="flex items-center gap-1 text-xs font-semibold text-[#127052] dark:text-[#5EB5A1] group-hover:underline">
              <span>بدء الاختبار الآن</span>
              <ArrowRight className="w-3.5 h-3.5 rotate-180 transform transition-transform group-hover:-translate-x-1" />
            </div>
          </a>
        ))}
      </div>

      {/* Hub Link */}
      <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs border-t border-black/[0.06] dark:border-white/[0.08]">
        <div className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400">
          <BookOpen className="w-4 h-4 text-[#127052] dark:text-[#5EB5A1]" />
          <span>تريد مراجعة المفهوم الشامل للمعادلات الخطية؟</span>
        </div>
        <a
          href="/category/linear-equations"
          onClick={(e) => handleNavigate('/category/linear-equations', e)}
          className="inline-flex items-center gap-1.5 font-bold text-[#127052] dark:text-[#5EB5A1] hover:underline"
        >
          <span>الانتقال إلى دليل المعادلات الخطية الشامل</span>
          <ArrowRight className="w-3.5 h-3.5 rotate-180" />
        </a>
      </div>
    </aside>
  );
};
