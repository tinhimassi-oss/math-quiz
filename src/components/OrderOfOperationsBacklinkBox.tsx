import React from 'react';
import { ArrowRight, BookOpen, Compass, CheckCircle2 } from 'lucide-react';
import { useEyeTheme } from '../context/ThemeContext';
import { navigateTo } from '../navigation/router';

export interface RelatedOrderOfOperationsQuizInfo {
  id: string;
  title: string;
  emoji: string;
  mathSymbol: string;
  level: 'أساسي' | 'متوسط' | 'متقدم';
  url: string;
  relationReason: string;
}

export const ALL_ORDER_OF_OPERATIONS_TESTS: Record<string, RelatedOrderOfOperationsQuizInfo> = {
  'operations-basic-no-parentheses': {
    id: 'operations-basic-no-parentheses',
    title: 'اختبار ترتيب العمليات الأساسية بدون أقواس',
    emoji: '➕',
    mathSymbol: '5 + 3 × 2 = 11',
    level: 'أساسي',
    url: '/math/order-of-operations/basic-no-parentheses',
    relationReason: 'الخطوة التأسيسية الأولى لتقديم الضرب والقسمة على الجمع والطرح وفك التعادل من اليسار',
  },
  'operations-simple-parentheses': {
    id: 'operations-simple-parentheses',
    title: 'اختبار ترتيب العمليات مع وجود الأقواس البسيطة',
    emoji: '🔘',
    mathSymbol: '(5 + 3) × 2 = 16',
    level: 'أساسي',
    url: '/math/order-of-operations/simple-parentheses',
    relationReason: 'فهم سلطان الأقواس المطلق في كسر الترتيب التلقائي وإعطاء الأولوية للجمع والطرح بداخلها',
  },
  'operations-nested-brackets': {
    id: 'operations-nested-brackets',
    title: 'اختبار الأقواس المتداخلة والمزدوجة',
    emoji: '📦',
    mathSymbol: '2 × [10 - (3 + 2)] = 10',
    level: 'متوسط',
    url: '/math/order-of-operations/nested-brackets',
    relationReason: 'إتقان فك الأقواس الهرمية المتعددة () و [] و {} بالتدرج المنهجي من الداخل إلى الخارج',
  },
  'operations-with-exponents': {
    id: 'operations-with-exponents',
    title: 'اختبار ترتيب العمليات مع وجود الأسس والمعاملات الأسية',
    emoji: '⚡',
    mathSymbol: '4 + 3² × 2 = 22',
    level: 'متوسط',
    url: '/math/order-of-operations/with-exponents',
    relationReason: 'فهم موقع الأسس (E في PEMDAS) مباشرة بعد الأقواس وقبل أي عملية ضرب أو قسمة',
  },
  'operations-with-square-roots': {
    id: 'operations-with-square-roots',
    title: 'اختبار ترتيب العمليات مع وجود الجذور التربيعية',
    emoji: '√',
    mathSymbol: '√16 + 5 × 2 = 14',
    level: 'متوسط',
    url: '/math/order-of-operations/with-square-roots',
    relationReason: 'معاملة خط الجذر كقوس تجميعي وكأس نصفي ووجوب تبسيط ما تحته أولاً قبل الجَذر',
  },
  'operations-fractional-expressions': {
    id: 'operations-fractional-expressions',
    title: 'اختبار ترتيب العمليات في المقادير الكسرية (البسط والمقام)',
    emoji: '➗',
    mathSymbol: '(12 + 8) ÷ (6 - 1) = 4',
    level: 'متوسط',
    url: '/math/order-of-operations/fractional-expressions',
    relationReason: 'التعامل مع خط الكسر كقوسين ضمنيين يحكمان البسط كاملاً والمقام كاملاً قبل القسمة',
  },
  'operations-with-negative-numbers': {
    id: 'operations-with-negative-numbers',
    title: 'اختبار ترتيب العمليات مع الأعداد السالبة والصحيحة',
    emoji: '➖',
    mathSymbol: '-4 + 6 × (-2) = -16',
    level: 'متوسط',
    url: '/math/order-of-operations/with-negative-numbers',
    relationReason: 'دمج قواعد إشارات الضرب والقسمة والفرق الجوهري بين (-a)² و -a² مع سلم الأولويات',
  },
  'operations-fractions-decimals': {
    id: 'operations-fractions-decimals',
    title: 'اختبار ترتيب العمليات مع الكسور والأعداد العشرية',
    emoji: '🎯',
    mathSymbol: '2.5 + 1.5 × 4 = 8.5',
    level: 'متوسط',
    url: '/math/order-of-operations/fractions-decimals',
    relationReason: 'الدقة الحسابية مع الفواصل العشرية وتوحيد المقامات دون التضحية بأولوية العمليات',
  },
  'operations-absolute-value': {
    id: 'operations-absolute-value',
    title: 'اختبار القيمة المطلقة وترتيب العمليات',
    emoji: '|x|',
    mathSymbol: '|3 - 8| × 2 + 1 = 11',
    level: 'متقدم',
    url: '/math/order-of-operations/absolute-value',
    relationReason: 'ازدواجية دور القيمة المطلقة كرمز تجميعي وكأداة لتجريد الإشارة السالبة وحساب المسافات',
  },
  'operations-error-detection': {
    id: 'operations-error-detection',
    title: 'اختبار اكتشاف الخطأ في ترتيب العمليات',
    emoji: '🔍',
    mathSymbol: '10 - 2 × 3 ≠ 24',
    level: 'متقدم',
    url: '/math/order-of-operations/error-detection',
    relationReason: 'تنمية التفكير الناقد وتشخيص الأخطاء الشائعة في الجمع المبكر أو تفضيل الضرب على القسمة',
  },
  'operations-missing-brackets-signs': {
    id: 'operations-missing-brackets-signs',
    title: 'اختبار إيجاد العملية الحسابية أو الأقواس المفقودة',
    emoji: '🧩',
    mathSymbol: '(4 + 2) × 5 = 30',
    level: 'متقدم',
    url: '/math/order-of-operations/missing-brackets-signs',
    relationReason: 'ألغاز التفكير الجبري والهندسة العكسية لاكتشاف موضع الأقواس الذي يطابق الناتج المستهدف',
  },
  'operations-word-problems': {
    id: 'operations-word-problems',
    title: 'اختبار المسائل الكلامية والتطبيقية على ترتيب العمليات',
    emoji: '🛒',
    mathSymbol: '3 × 10 + 25 - 5 = 50 ريالاً',
    level: 'متقدم',
    url: '/math/order-of-operations/word-problems',
    relationReason: 'ترجمة المواقف الحياتية والتجارية إلى مقادير عددية دقيقة وتطبيق الأولويات لحساب التكاليف',
  },
};

const ORDERED_KEYS = [
  'operations-basic-no-parentheses',
  'operations-simple-parentheses',
  'operations-nested-brackets',
  'operations-with-exponents',
  'operations-with-square-roots',
  'operations-fractional-expressions',
  'operations-with-negative-numbers',
  'operations-fractions-decimals',
  'operations-absolute-value',
  'operations-error-detection',
  'operations-missing-brackets-signs',
  'operations-word-problems',
];

interface OrderOfOperationsBacklinkBoxProps {
  currentTestId: string;
  onGoOrderOfOperations?: () => void;
  className?: string;
}

export const OrderOfOperationsBacklinkBox: React.FC<OrderOfOperationsBacklinkBoxProps> = ({
  currentTestId,
  onGoOrderOfOperations,
  className = '',
}) => {
  const { themeClasses } = useEyeTheme();

  const currentIndex = ORDERED_KEYS.indexOf(currentTestId);
  const adjacentKeys = ORDERED_KEYS.filter((k) => k !== currentTestId).slice(
    currentIndex > 9 ? 6 : Math.max(0, currentIndex - 1),
    currentIndex > 9 ? 9 : Math.max(0, currentIndex - 1) + 3
  );

  const adjacentTests = adjacentKeys.map((key) => ALL_ORDER_OF_OPERATIONS_TESTS[key]).filter(Boolean);

  const handleParentClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onGoOrderOfOperations) {
      onGoOrderOfOperations();
    } else {
      navigateTo('/domain/basic-math/order-of-operations');
    }
  };

  const handleCardClick = (url: string, e: React.MouseEvent) => {
    e.preventDefault();
    navigateTo(url);
  };

  return (
    <aside
      aria-label="روابط سياقية واختبارات ترتيب العمليات المقترحة"
      className={`p-6 sm:p-8 rounded-2xl border ${themeClasses.border} ${themeClasses.cardBg} space-y-6 shadow-2xs text-right ${className}`}
    >
      {/* Category Backlink Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-5 border-b border-black/[0.06] dark:border-white/[0.08]">
        <div>
          <span className="text-[11px] font-bold text-[#127052] dark:text-[#5EB5A1] flex items-center gap-1.5 mb-1">
            <Compass className="w-3.5 h-3.5" />
            التنقل الهرمي وشبكة اختبارات ترتيب العمليات (PEMDAS)
          </span>
          <h3 className={`text-base sm:text-lg font-bold ${themeClasses.textPrimary}`}>
            التصنيف الشامل: ترتيب العمليات الحسابية (12 اختباراً تخصصياً)
          </h3>
        </div>

        <button
          onClick={handleParentClick}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#127052] dark:text-[#5EB5A1] hover:underline self-start sm:self-auto cursor-pointer"
        >
          <span>تصفح كل اختبارات ترتيب العمليات</span>
          <ArrowRight className="w-3.5 h-3.5 rotate-180" />
        </button>
      </div>

      <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
        هذا الاختبار جزء من منظومة متدرجة تضم 12 اختباراً مصممة لترسيخ قواعد أسبقية العمليات (الأقواس، الأسس، الضرب والقسمة، الجمع والطرح) مع الكسور، الجذور، الأعداد السالبة، واكتشاف الأخطاء. نوصي باستكمال الاختبارات المترابطة أدناه:
      </p>

      {/* Suggested Adjacent Tests */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1">
        {adjacentTests.map((test) => (
          <a
            key={test.id}
            href={`#${test.url}`}
            onClick={(e) => handleCardClick(test.url, e)}
            className={`group p-4 rounded-xl border ${themeClasses.border} bg-black/[0.01] dark:bg-white/[0.02] hover:bg-black/[0.03] dark:hover:bg-white/[0.04] transition-all duration-200 block text-right hover:border-[#3B7A6A]/40`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xl">{test.emoji}</span>
              <span className="text-[10px] px-2 py-0.5 rounded-full font-medium bg-[#3B7A6A]/10 text-[#127052] dark:text-[#5EB5A1]">
                {test.level}
              </span>
            </div>

            <div className={`text-xs font-bold ${themeClasses.textPrimary} group-hover:text-[#127052] dark:group-hover:text-[#5EB5A1] transition-colors mb-1`}>
              {test.title}
            </div>

            <div className="text-[11px] font-mono text-[#3B7A6A] dark:text-[#7BC3B1] mb-2 dir-ltr text-right">
              {test.mathSymbol}
            </div>

            <p className={`text-[11px] ${themeClasses.textMuted} line-clamp-2 leading-relaxed`}>
              {test.relationReason}
            </p>

            <div className="mt-3 flex items-center gap-1 text-[11px] font-medium text-[#127052] dark:text-[#5EB5A1]">
              <span>بدء الاختبار</span>
              <ArrowRight className="w-3 h-3 rotate-180 group-hover:-translate-x-1 transition-transform" />
            </div>
          </a>
        ))}
      </div>

      {/* Quick Navigation Footer */}
      <div className="pt-4 border-t border-black/[0.04] dark:border-white/[0.06] flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
          <BookOpen className="w-3.5 h-3.5" />
          <span>المجال: الرياضيات الأساسية &gt; ترتيب العمليات</span>
        </div>

        <div className="flex items-center gap-1 text-slate-500 dark:text-slate-400">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
          <span>12 اختباراً تفاعلياً مع مقالات وشروحات تفصيلية فريدة</span>
        </div>
      </div>
    </aside>
  );
};
