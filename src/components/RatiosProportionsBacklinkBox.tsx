import React from 'react';
import { ArrowRight, BookOpen, Compass, CheckCircle2 } from 'lucide-react';
import { useEyeTheme } from '../context/ThemeContext';
import { navigateTo } from '../navigation/router';

export interface RelatedRatiosProportionsQuizInfo {
  id: string;
  title: string;
  emoji: string;
  mathSymbol: string;
  level: 'أساسي' | 'متوسط' | 'متقدم';
  url: string;
  relationReason: string;
}

export const ALL_RATIOS_PROPORTIONS_TESTS: Record<string, RelatedRatiosProportionsQuizInfo> = {
  'ratio-understanding-representation': {
    id: 'ratio-understanding-representation',
    title: 'اختبار فهم النسب والتعبير عنها',
    emoji: '⚖️',
    mathSymbol: 'a : b = a/b',
    level: 'أساسي',
    url: '/math/ratios-proportions/understanding-representation',
    relationReason: 'الخطوة التأسيسية الأولى لفهم مقارنة الكميات والتعبير عنها بصيغة النقطتين أو الكسر الاعتيادي',
  },
  'ratio-simplification-equivalence': {
    id: 'ratio-simplification-equivalence',
    title: 'اختبار تبسيط النسب والنسب المتكافئة',
    emoji: '✂️',
    mathSymbol: '12 : 18 = 2 : 3',
    level: 'أساسي',
    url: '/math/ratios-proportions/simplification-equivalence',
    relationReason: 'إتقان اختصار النسب إلى أبسط صورة بالقسمة على (ع.م.أ) وتوليد عائلات النسب المتكافئة',
  },
  'unit-rate': {
    id: 'unit-rate',
    title: 'اختبار معدل الوحدة (Unit Rate)',
    emoji: '⏱️',
    mathSymbol: '240 كم ÷ 3 ساعات = 80 كم/س',
    level: 'متوسط',
    url: '/math/ratios-proportions/unit-rate',
    relationReason: 'حساب المقدار لوحدة واحدة لمقارنة السرعات والأسعار في التسوق الذكي ومعدلات الإنتاج',
  },
  'solving-proportions-unknown': {
    id: 'solving-proportions-unknown',
    title: 'اختبار حل التناسب وإيجاد المجهول',
    emoji: '🔍',
    mathSymbol: '2 / 5 = x / 20 ⇒ x = 8',
    level: 'متوسط',
    url: '/math/ratios-proportions/solving-proportions-unknown',
    relationReason: 'إتقان خاصية الضرب التبادلي (المقص) لحساب المتغير المجهول في أي تناسب بدقة',
  },
  'direct-proportion': {
    id: 'direct-proportion',
    title: 'اختبار التناسب الطردي (Direct Proportion)',
    emoji: '📈',
    mathSymbol: 'y / x = k (ثابت)',
    level: 'متوسط',
    url: '/math/ratios-proportions/direct-proportion',
    relationReason: 'مسائل التغير الطردي التي تتضاعف فيها كمية بتضاعف الأخرى بنفس النسبة مثل السعر والكمية',
  },
  'inverse-proportion': {
    id: 'inverse-proportion',
    title: 'اختبار التناسب العكسي (Inverse Proportion)',
    emoji: '📉',
    mathSymbol: 'x · y = k (ثابت)',
    level: 'متقدم',
    url: '/math/ratios-proportions/inverse-proportion',
    relationReason: 'مسائل التغير العكسي وثبات حاصل الضرب مثل عدد العمال وأيام العمل أو السرعة والزمن',
  },
  'scale-drawings-maps': {
    id: 'scale-drawings-maps',
    title: 'اختبار مقياس الرسم والخرائط (Scale Drawings)',
    emoji: '🗺️',
    mathSymbol: '1 سم : 5 كم',
    level: 'متوسط',
    url: '/math/ratios-proportions/scale-drawings-maps',
    relationReason: 'حساب المسافات الحقيقية وأبعاد الخرائط والتصاميم المعمارية ومقاييس التكبير والتصغير',
  },
  'proportional-division': {
    id: 'proportional-division',
    title: 'اختبار التقسيم التناسبي (Proportional Division)',
    emoji: '🍰',
    mathSymbol: '500 ريال بنسبة 2 : 3',
    level: 'متوسط',
    url: '/math/ratios-proportions/proportional-division',
    relationReason: 'توزيع المبالغ والتركات والأرباح بين أطراف متعددة وفق نسب محددة وبحساب قيمة الجزء',
  },
  'percentage-and-proportion': {
    id: 'percentage-and-proportion',
    title: 'اختبار النسبة المئوية والتناسب',
    emoji: '📊',
    mathSymbol: 'الجزء / الكل = % / 100',
    level: 'متوسط',
    url: '/math/ratios-proportions/percentage-and-proportion',
    relationReason: 'الربط الجوهري بين النسب المئوية والتناسب لحساب 15% من 200 أو إيجاد الكل المجهول',
  },
  'percentage-change': {
    id: 'percentage-change',
    title: 'اختبار التغير المئوي (نسبة الزيادة والنقصان)',
    emoji: '📈',
    mathSymbol: 'من 80 إلى 100 (+25%)',
    level: 'متوسط',
    url: '/math/ratios-proportions/percentage-change',
    relationReason: 'قياس نسبة ارتفاع أو انخفاض الأسعار والأوزان والكميات مقارنة بالقيمة الأصلية',
  },
  'profit-loss-discount': {
    id: 'profit-loss-discount',
    title: 'اختبار حساب الربح والخسارة والخصم',
    emoji: '🏷️',
    mathSymbol: '120 ريال - 20% = 96',
    level: 'متقدم',
    url: '/math/ratios-proportions/profit-loss-discount',
    relationReason: 'حسابات الأسواق والتخفيضات التجارية، هوامش الربح وضريبة القيمة المضافة',
  },
  'ratios-word-problems': {
    id: 'ratios-word-problems',
    title: 'اختبار المسائل الكلامية والتطبيقية على النسب والتناسب',
    emoji: '🧪',
    mathSymbol: '1 : 4 خلط العصائر والمحاليل',
    level: 'متقدم',
    url: '/math/ratios-proportions/word-problems',
    relationReason: 'حل مشكلات واقعية مركبة في خلط الوصفات، نسب الشاشات، تشابه الظلال والإنتاج',
  },
};

const ORDERED_KEYS = [
  'ratio-understanding-representation',
  'ratio-simplification-equivalence',
  'unit-rate',
  'solving-proportions-unknown',
  'direct-proportion',
  'inverse-proportion',
  'scale-drawings-maps',
  'proportional-division',
  'percentage-and-proportion',
  'percentage-change',
  'profit-loss-discount',
  'ratios-word-problems',
];

interface RatiosProportionsBacklinkBoxProps {
  currentTestId: string;
  onGoRatiosProportions?: () => void;
  className?: string;
}

export const RatiosProportionsBacklinkBox: React.FC<RatiosProportionsBacklinkBoxProps> = ({
  currentTestId,
  onGoRatiosProportions,
  className = '',
}) => {
  const { themeClasses } = useEyeTheme();

  const currentIndex = ORDERED_KEYS.indexOf(currentTestId);
  const adjacentKeys = ORDERED_KEYS.filter((k) => k !== currentTestId).slice(
    currentIndex > 9 ? 6 : Math.max(0, currentIndex - 1),
    currentIndex > 9 ? 9 : Math.max(0, currentIndex - 1) + 3
  );

  const adjacentTests = adjacentKeys.map((key) => ALL_RATIOS_PROPORTIONS_TESTS[key]).filter(Boolean);

  const handleParentClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onGoRatiosProportions) {
      onGoRatiosProportions();
    } else {
      navigateTo('/domain/basic-math/ratios-proportions');
    }
  };

  const handleCardClick = (url: string, e: React.MouseEvent) => {
    e.preventDefault();
    navigateTo(url);
  };

  return (
    <aside
      aria-label="روابط سياقية واختبارات النسب والتناسب المقترحة"
      className={`p-6 sm:p-8 rounded-2xl border ${themeClasses.border} ${themeClasses.cardBg} space-y-6 shadow-2xs text-right ${className}`}
    >
      {/* Category Backlink Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-5 border-b border-black/[0.06] dark:border-white/[0.08]">
        <div>
          <span className="text-[11px] font-bold text-[#127052] dark:text-[#5EB5A1] flex items-center gap-1.5 mb-1">
            <Compass className="w-3.5 h-3.5" />
            التنقل الهرمي وشبكة اختبارات النسب والتناسب
          </span>
          <h3 className={`text-base sm:text-lg font-bold ${themeClasses.textPrimary}`}>
            التصنيف الشامل: النسب والتناسب (12 اختباراً تخصصياً)
          </h3>
        </div>

        <button
          onClick={handleParentClick}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#127052] dark:text-[#5EB5A1] hover:underline self-start sm:self-auto cursor-pointer"
        >
          <span>تصفح كل اختبارات النسب والتناسب</span>
          <ArrowRight className="w-3.5 h-3.5 rotate-180" />
        </button>
      </div>

      <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
        هذا الاختبار جزء من منظومة شاملة تضم 12 اختباراً مصممة لبناء الحس التناسبي وإتقان حل مسائل النسب، التناسب الطردي والعكسي، مقياس الرسم، التقسيم العادل، والتطبيقات المالية والتجارية. نوصي باستكمال الاختبارات المترابطة أدناه:
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
          <span>المجال: الرياضيات الأساسية &gt; النسب والتناسب</span>
        </div>

        <div className="flex items-center gap-1 text-slate-500 dark:text-slate-400">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
          <span>12 اختباراً تفاعلياً مع مقالات وشروحات تفصيلية فريدة</span>
        </div>
      </div>
    </aside>
  );
};
