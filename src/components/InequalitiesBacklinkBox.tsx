import React from 'react';
import { ArrowRight, BookOpen, Compass } from 'lucide-react';
import { useEyeTheme } from '../context/ThemeContext';
import { navigateTo } from '../navigation/router';

export interface RelatedInequalityQuizInfo {
  id: string;
  title: string;
  emoji: string;
  mathSymbol: string;
  level: 'أساسي' | 'متوسط' | 'متقدم';
  url: string;
  relationReason: string;
}

export const ALL_INEQUALITIES_TESTS: Record<string, RelatedInequalityQuizInfo> = {
  'inequality-symbols-comparison': {
    id: 'inequality-symbols-comparison',
    title: 'اختبار فهم رموز المتباينات ومقارنتها (>, <, ≥, ≤)',
    emoji: '',
    mathSymbol: 'x ≥ 5',
    level: 'أساسي',
    url: '/math/inequalities/inequality-symbols-comparison',
    relationReason: 'الخطوة التأسيسية الأولى لفك شفرة الرموز الرياضية وترجمة العبارات اللفظية',
  },
  'graphing-inequalities-number-line': {
    id: 'graphing-inequalities-number-line',
    title: 'اختبار تمثيل المتباينات البسيطة على خط الأعداد',
    emoji: '',
    mathSymbol: 'x > 3 ⇒ ○ ────►',
    level: 'أساسي',
    url: '/math/inequalities/graphing-inequalities-number-line',
    relationReason: 'الإدراك البصري للمجموعات اللانهائية والتمييز بين الدوائر المفتوحة والمغلقة',
  },
  'one-step-addition-subtraction-inequalities': {
    id: 'one-step-addition-subtraction-inequalities',
    title: 'اختبار حل متباينات الجمع والطرح (خطوة واحدة)',
    emoji: '',
    mathSymbol: 'x + 4 < 9 ⇒ x < 5',
    level: 'أساسي',
    url: '/math/inequalities/one-step-addition-subtraction-inequalities',
    relationReason: 'خاصية الإضافة والإزاحة المتوازنة لعزل المتغير مع ثبات اتجاه المتباينة',
  },
  'multiplication-division-positive-inequalities': {
    id: 'multiplication-division-positive-inequalities',
    title: 'اختبار حل متباينات الضرب والقسمة (مع أعداد موجبة)',
    emoji: '',
    mathSymbol: '3x ≥ 12 ⇒ x ≥ 4',
    level: 'أساسي',
    url: '/math/inequalities/multiplication-division-positive-inequalities',
    relationReason: 'تطبيق مقياس التكبير والتصغير الموجب والتعامل مع معاملات الكسور',
  },
  'negative-multiplication-reversing-inequalities': {
    id: 'negative-multiplication-reversing-inequalities',
    title: 'اختبار الضرب والقسمة في عدد سالب (عكس إشارة المتباينة)',
    emoji: '',
    mathSymbol: '-2x > 6 ⇒ x < -3',
    level: 'متوسط',
    url: '/math/inequalities/negative-multiplication-reversing-inequalities',
    relationReason: 'القاعدة الجوهرية الأهم: الانعكاس حول نقطة الصفر وتغيير اتجاه المتباينة',
  },
  'two-step-inequalities': {
    id: 'two-step-inequalities',
    title: 'اختبار حل متباينات الخطوتين (Two-Step Inequalities)',
    emoji: '',
    mathSymbol: '2x - 3 ≤ 7 ⇒ x ≤ 5',
    level: 'متوسط',
    url: '/math/inequalities/two-step-inequalities',
    relationReason: 'التسلسل الإجرائي المنهجي: التخلص من الثابت المجموع أولاً ثم المعامل المضروب',
  },
  'distributive-parentheses-inequalities': {
    id: 'distributive-parentheses-inequalities',
    title: 'اختبار متباينات تحتوي على أقواس وتوزيع',
    emoji: '',
    mathSymbol: '3(x - 2) > 9 ⇒ x > 5',
    level: 'متوسط',
    url: '/math/inequalities/distributive-parentheses-inequalities',
    relationReason: 'فك الأقواس المركبة وتوزيع الإشارات السالبة بحذر لتجنب الفخاخ الجبرية',
  },
  'variables-both-sides-inequalities': {
    id: 'variables-both-sides-inequalities',
    title: 'اختبار متباينات تحتوي على المتغير في كلا الطرفين',
    emoji: '',
    mathSymbol: '5x + 2 < 2x + 11 ⇒ x < 3',
    level: 'متوسط',
    url: '/math/inequalities/variables-both-sides-inequalities',
    relationReason: 'توحيد كفتي المتباينة ونقل المعامل الأصغر واكتشاف الحالات الخاصة (∅ و ℝ)',
  },
  'compound-inequalities': {
    id: 'compound-inequalities',
    title: 'اختبار المتباينات المركبة ("و" / "أو")',
    emoji: '',
    mathSymbol: '-2 < x + 1 ≤ 5 ⇒ -3 < x ≤ 4',
    level: 'متقدم',
    url: '/math/inequalities/compound-inequalities',
    relationReason: 'المتباينات ثلاثية الأطراف والتمييز الدقيق بين التقاطع (و) والاتحاد (أو)',
  },
  'absolute-value-inequalities': {
    id: 'absolute-value-inequalities',
    title: 'اختبار متباينات القيمة المطلقة (Absolute Value Inequalities)',
    emoji: '',
    mathSymbol: '|x - 3| < 5 ⇒ -2 < x < 8',
    level: 'متقدم',
    url: '/math/inequalities/absolute-value-inequalities',
    relationReason: 'المسافة الهندسية وقاعدتا الحصر التقاربي (<) والانفراج التباعدي (>)',
  },
  'two-variable-linear-inequalities': {
    id: 'two-variable-linear-inequalities',
    title: 'اختبار التمثيل البياني للمتباينات الخطية في متغيرين',
    emoji: '',
    mathSymbol: 'y ≤ 2x + 1 ⇒ خط متصل',
    level: 'متقدم',
    url: '/math/inequalities/two-variable-linear-inequalities',
    relationReason: 'رسم المستقيم الحدي في المستوى الإحداثي واستخدام نقطة الاختبار (0,0)',
  },
  'inequalities-word-problems': {
    id: 'inequalities-word-problems',
    title: 'اختبار المسائل الكلامية والتطبيقية على المتباينات',
    emoji: '',
    mathSymbol: '15x + 5 ≤ 50 ⇒ x ≤ 3',
    level: 'متقدم',
    url: '/math/inequalities/inequalities-word-problems',
    relationReason: 'النمذجة الرياضية للمواقف الحياتية والميزانيات وسعات الشحن والسلامة',
  },
};

const TOPIC_RELATIONS: Record<string, string[]> = {
  'inequality-symbols-comparison': [
    'graphing-inequalities-number-line',
    'one-step-addition-subtraction-inequalities',
    'inequalities-word-problems',
  ],
  'graphing-inequalities-number-line': [
    'inequality-symbols-comparison',
    'one-step-addition-subtraction-inequalities',
    'compound-inequalities',
  ],
  'one-step-addition-subtraction-inequalities': [
    'graphing-inequalities-number-line',
    'multiplication-division-positive-inequalities',
    'two-step-inequalities',
  ],
  'multiplication-division-positive-inequalities': [
    'one-step-addition-subtraction-inequalities',
    'negative-multiplication-reversing-inequalities',
    'two-step-inequalities',
  ],
  'negative-multiplication-reversing-inequalities': [
    'multiplication-division-positive-inequalities',
    'two-step-inequalities',
    'distributive-parentheses-inequalities',
  ],
  'two-step-inequalities': [
    'negative-multiplication-reversing-inequalities',
    'distributive-parentheses-inequalities',
    'variables-both-sides-inequalities',
  ],
  'distributive-parentheses-inequalities': [
    'two-step-inequalities',
    'variables-both-sides-inequalities',
    'compound-inequalities',
  ],
  'variables-both-sides-inequalities': [
    'distributive-parentheses-inequalities',
    'compound-inequalities',
    'inequalities-word-problems',
  ],
  'compound-inequalities': [
    'variables-both-sides-inequalities',
    'absolute-value-inequalities',
    'two-variable-linear-inequalities',
  ],
  'absolute-value-inequalities': [
    'compound-inequalities',
    'graphing-inequalities-number-line',
    'two-variable-linear-inequalities',
  ],
  'two-variable-linear-inequalities': [
    'compound-inequalities',
    'absolute-value-inequalities',
    'inequalities-word-problems',
  ],
  'inequalities-word-problems': [
    'two-step-inequalities',
    'variables-both-sides-inequalities',
    'two-variable-linear-inequalities',
  ],
};

interface InequalitiesBacklinkBoxProps {
  currentTestId: string;
  className?: string;
}

export const InequalitiesBacklinkBox: React.FC<InequalitiesBacklinkBoxProps> = ({
  currentTestId,
  className = '',
}) => {
  const { themeClasses } = useEyeTheme();
  const relatedKeys = TOPIC_RELATIONS[currentTestId] || [
    'inequality-symbols-comparison',
    'two-step-inequalities',
    'negative-multiplication-reversing-inequalities',
  ];

  const relatedQuizzes = relatedKeys
    .map((key) => ALL_INEQUALITIES_TESTS[key])
    .filter(Boolean);

  const handleNavigate = (url: string, e: React.MouseEvent) => {
    e.preventDefault();
    navigateTo(url);
  };

  return (
    <aside
      className={`p-6 sm:p-8 rounded-2xl border ${themeClasses.border} ${themeClasses.cardBg} space-y-6 shadow-2xs text-right ${className}`}
      aria-label="اختبارات متصلة في المتباينات"
    >
      <div className="flex items-center justify-between border-b border-black/[0.06] dark:border-white/[0.08] pb-4">
        <div className="flex items-center gap-2">
          <Compass className="w-5 h-5 text-[#127052] dark:text-[#5EB5A1]" />
          <h3 className={`text-base sm:text-lg font-bold ${themeClasses.textPrimary}`}>
            مسار التعلم التتابعي: اختبارات مرتبطة في المتباينات
          </h3>
        </div>
        <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-[#127052]/10 text-[#127052] dark:text-[#5EB5A1] dark:bg-[#127052]/20">
          تدرج منهجي متكامل
        </span>
      </div>

      <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
        ترتبط مهارات المتباينات ببعضها ارتباطاً وثيقاً؛ حيث يبدأ الطالب بفك الرموز وتمثيلها بيانياً، مروراً بعزل المتغير والقاعدة الذهبية لقلب الإشارة السالبة، وصولاً إلى المتباينات المركبة والقيمة المطلقة والمسائل الحياتية.
      </p>

      {/* Grid of related cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
        {relatedQuizzes.map((quiz) => (
          <a
            key={quiz.id}
            href={`#${quiz.url}`}
            onClick={(e) => handleNavigate(quiz.url, e)}
            className={`group p-4 rounded-xl border ${themeClasses.border} bg-black/[0.02] dark:bg-white/[0.02] hover:bg-[#127052]/5 dark:hover:bg-[#127052]/10 hover:border-[#127052]/40 transition-all flex flex-col justify-between space-y-3 focus:outline-hidden focus:ring-2 focus:ring-[#127052]/40`}
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-2xl" role="img" aria-label={quiz.title}>
                  {quiz.emoji}
                </span>
                <span className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-black/[0.04] dark:bg-white/[0.06] text-black/70 dark:text-white/70">
                  {quiz.level}
                </span>
              </div>
              <h4 className={`text-sm font-bold ${themeClasses.textPrimary} group-hover:text-[#127052] dark:group-hover:text-[#5EB5A1] transition-colors leading-snug`}>
                {quiz.title}
              </h4>
              <p className={`text-xs ${themeClasses.textMuted} line-clamp-2 leading-relaxed`}>
                {quiz.relationReason}
              </p>
            </div>

            <div className="pt-2 border-t border-black/[0.04] dark:border-white/[0.04] flex items-center justify-between text-xs font-semibold text-[#127052] dark:text-[#5EB5A1]">
              <span className="font-mono text-[11px] dir-ltr text-black/50 dark:text-white/50">
                {quiz.mathSymbol}
              </span>
              <span className="flex items-center gap-1 group-hover:translate-x-[-2px] transition-transform">
                ابدأ الاختبار
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </a>
        ))}
      </div>

      {/* Anchor backlink to Pillar Article */}
      <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs bg-[#127052]/5 dark:bg-[#127052]/10 p-4 rounded-xl border border-[#127052]/20">
        <div className="flex items-center gap-2 text-right">
          <BookOpen className="w-4 h-4 text-[#127052] dark:text-[#5EB5A1] shrink-0" />
          <span className={`${themeClasses.textPrimary} font-medium`}>
            هل ترغب في مراجعة كافة نظريات وقواعد المتباينات وتطبيقاتها؟
          </span>
        </div>
        <a
          href="#/domain/algebra-functions/inequalities"
          onClick={(e) => handleNavigate('/domain/algebra-functions/inequalities', e)}
          className="shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#127052] text-white hover:bg-[#0e5840] transition-colors font-medium shadow-2xs text-xs"
        >
          <span>تصفح المقالة المرجعية الشاملة للمتباينات</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </aside>
  );
};
