import React from 'react';
import { ArrowRight, BookOpen, Layers } from 'lucide-react';
import { useEyeTheme } from '../context/ThemeContext';
import { navigateTo } from '../navigation/router';

export interface RelatedFinancialMathQuizInfo {
  id: string;
  title: string;
  emoji: string;
  mathSymbol: string;
  level: 'أساسي' | 'متوسط' | 'متقدم';
  url: string;
  relationReason: string;
}

export const ALL_FINANCIAL_MATH_TESTS: Record<string, RelatedFinancialMathQuizInfo> = {
  'simple-interest-total-amount': {
    id: 'simple-interest-total-amount',
    title: 'الفائدة البسيطة والجملة (Simple Interest & Total Amount)',
    emoji: '',
    mathSymbol: 'I = P · r · t',
    level: 'أساسي',
    url: '/domain/applied-financial-math/financial-math/simple-interest-total-amount',
    relationReason: 'الأساس الجوهري لحساب تكلفة الاقتراض والعائد على الودائع قصيرة الأجل والجملة التراكمية',
  },
  'compound-interest-future-value': {
    id: 'compound-interest-future-value',
    title: 'الفائدة المركبة والقيمة المستقبلية (Compound Interest & Future Value)',
    emoji: '',
    mathSymbol: 'FV = PV(1 + r/n)ⁿᵗ',
    level: 'أساسي',
    url: '/domain/applied-financial-math/financial-math/compound-interest-future-value',
    relationReason: 'قوة التركيب التراكمي ونمو رأس المال وحسابات التضاعف وقاعدة 72 الرياضية',
  },
  'present-value-discounting': {
    id: 'present-value-discounting',
    title: 'القيمة الحالية والخصم التجاري والصحيح (Present Value & Discounting)',
    emoji: '',
    mathSymbol: 'PV = FV / (1 + r)ᵗ',
    level: 'متوسط',
    url: '/domain/applied-financial-math/financial-math/present-value-discounting',
    relationReason: 'تقييم التدفقات النقدية المستقبلية بالقيمة الحالية والفرق بين الخصم التجاري والخصم الصحيح',
  },
  'nominal-effective-interest-rates': {
    id: 'nominal-effective-interest-rates',
    title: 'معدلات الفائدة الاسمية والفعالة والتكرار المتعدد (Nominal vs. Effective Rates)',
    emoji: '',
    mathSymbol: 'EAR = (1 + r/m)ᵐ - 1',
    level: 'متوسط',
    url: '/domain/applied-financial-math/financial-math/nominal-effective-interest-rates',
    relationReason: 'المقارنة الرياضية الدقيقة بين عروض البنوك عند اختلاف فترات التركيب (شهري، ربع سنوي، مستمر)',
  },
  'annuities-ordinary-due': {
    id: 'annuities-ordinary-due',
    title: 'الدفعات المالية العادية والمستحقة (Annuities: Ordinary & Due)',
    emoji: '',
    mathSymbol: 'S_n = PMT · [((1+i)ⁿ - 1)/i]',
    level: 'متوسط',
    url: '/domain/applied-financial-math/financial-math/annuities-ordinary-due',
    relationReason: 'تراكم المدخرات الدورية، خطط التقاعد، وأقساط السداد المنتظمة في بداية ونهاية الفترات',
  },
  'loan-amortization-schedules': {
    id: 'loan-amortization-schedules',
    title: 'استهلاك القروض وجداول السداد (Loan Amortization & Schedules)',
    emoji: '',
    mathSymbol: 'PMT, Interest_t, Principal_t',
    level: 'متوسط',
    url: '/domain/applied-financial-math/financial-math/loan-amortization-schedules',
    relationReason: 'تفكيك القسط الشهري إلى فائدة متناقصة وأصل دين متزايد وحساب الرصيد المتبقي بدقة',
  },
  'bond-valuation-cash-flows': {
    id: 'bond-valuation-cash-flows',
    title: 'تقييم السندات والقيمة الحالية للتدفقات النقدية (Bond Valuation & Cash Flows)',
    emoji: '',
    mathSymbol: 'P = ∑ C/(1+y)ᵗ + M/(1+y)ⁿ',
    level: 'متقدم',
    url: '/domain/applied-financial-math/financial-math/bond-valuation-cash-flows',
    relationReason: 'تسعير أوراق الدخل الثابت، الكوبونات الدورية، العلاوة والخصم، وعائد الاستحقاق (YTM)',
  },
  'npv-irr-project-evaluation': {
    id: 'npv-irr-project-evaluation',
    title: 'صافي القيمة الحالية ومعدل العائد الداخلي (NPV & IRR)',
    emoji: '',
    mathSymbol: 'NPV = ∑ CF_t/(1+r)ᵗ - C₀',
    level: 'متقدم',
    url: '/domain/applied-financial-math/financial-math/npv-irr-project-evaluation',
    relationReason: 'المعايير الرياضية الفاصلة في الموازنة الرأسمالية والمفاضلة بين المشروعات الاستثمارية',
  },
  'financial-depreciation-methods': {
    id: 'financial-depreciation-methods',
    title: 'طرق الإهلاك المالي للأصول (Depreciation Methods)',
    emoji: '',
    mathSymbol: 'SL, DDB, SYD',
    level: 'متوسط',
    url: '/domain/applied-financial-math/financial-math/financial-depreciation-methods',
    relationReason: 'حساب تآكل الأصول الثابتة محاسبياً ومالياً بالقسط الثابت والرصيد المتناقص ومجموع أرقام السنوات',
  },
  'inflation-financial-ratios': {
    id: 'inflation-financial-ratios',
    title: 'التضخم والمعدلات الحقيقية والنسب المالية (Inflation & Financial Ratios)',
    emoji: '',
    mathSymbol: '1 + R = (1 + r)(1 + h)',
    level: 'متوسط',
    url: '/domain/applied-financial-math/financial-math/inflation-financial-ratios',
    relationReason: 'معادلة فيشر الرياضية للقوة الشرائية الحقيقية ونسب السيولة والرافعة المالية والربحية',
  },
  'options-derivatives-valuation': {
    id: 'options-derivatives-valuation',
    title: 'المشتقات المالية وتسعير الخيارات البسيطة (Financial Derivatives & Options)',
    emoji: '',
    mathSymbol: 'C + K·e⁻ʳᵀ = P + S₀',
    level: 'متقدم',
    url: '/domain/applied-financial-math/financial-math/options-derivatives-valuation',
    relationReason: 'تكافؤ خياري الشراء والبيع (Put-Call Parity)، العقود الآجلة، وتطبيقات التحوط المالي ضد المخاطر',
  },
  'comprehensive-financial-word-problems': {
    id: 'comprehensive-financial-word-problems',
    title: 'مسائل كلامية وحالات مالية استثمارية شاملة (Comprehensive Financial Problems)',
    emoji: '',
    mathSymbol: 'Strategic Wealth Modeling',
    level: 'متقدم',
    url: '/domain/applied-financial-math/financial-math/comprehensive-financial-word-problems',
    relationReason: 'سيناريوهات واقعية متعددة المراحل تدمج القروض بالاستثمار والضرائب والتدفقات المركبة',
  },
};

interface FinancialMathBacklinkBoxProps {
  currentQuizId: string;
  relatedIds?: string[];
  maxItems?: number;
}

export const FinancialMathBacklinkBox: React.FC<FinancialMathBacklinkBoxProps> = ({
  currentQuizId,
  relatedIds,
  maxItems = 3,
}) => {
  const { themeClasses } = useEyeTheme();

  // If specific related IDs provided, use them; otherwise pick top tests excluding current
  const targetIds =
    relatedIds && relatedIds.length > 0
      ? relatedIds.filter((id) => id !== currentQuizId)
      : Object.keys(ALL_FINANCIAL_MATH_TESTS)
          .filter((id) => id !== currentQuizId)
          .slice(0, maxItems);

  const displayedTests = targetIds
    .map((id) => ALL_FINANCIAL_MATH_TESTS[id])
    .filter(Boolean)
    .slice(0, maxItems);

  if (displayedTests.length === 0) return null;

  return (
    <aside
      aria-label="اختبارات الرياضيات المالية ذات الصلة"
      className={`rounded-2xl border ${themeClasses.border} ${themeClasses.cardBg} p-5 sm:p-6 shadow-sm transition-all text-right mt-8`}
    >
      <div className="flex items-center justify-between gap-3 mb-4 border-b border-black/5 dark:border-white/5 pb-3">
        <div className="flex items-center gap-2">
          <Layers className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
          <h3 className={`text-base sm:text-lg font-bold ${themeClasses.textPrimary}`}>
            اختبارات مالية واستثمارية متقدمة ذات صلة
          </h3>
        </div>
        <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 font-medium">
          ترابط المفاهيم
        </span>
      </div>

      <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} mb-4 leading-relaxed`}>
        لتعزيز إتقانك للتحليل المالي الكمي والهندسة المالية، نوصيك بالانتقال إلى هذه المسارات
        التطبيقية المترابطة:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {displayedTests.map((test) => (
          <button
            key={test.id}
            onClick={() => navigateTo(test.url)}
            className={`group flex flex-col justify-between text-right p-3.5 rounded-xl border border-black/5 dark:border-white/5 hover:border-emerald-500/40 hover:bg-emerald-50/50 dark:hover:bg-emerald-950/20 transition-all duration-200 cursor-pointer`}
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xl" role="img" aria-label={test.title}>
                  {test.emoji}
                </span>
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-md font-semibold ${
                    test.level === 'أساسي'
                      ? 'bg-blue-500/10 text-blue-700 dark:text-blue-300'
                      : test.level === 'متوسط'
                      ? 'bg-amber-500/10 text-amber-700 dark:text-amber-300'
                      : 'bg-rose-500/10 text-rose-700 dark:text-rose-300'
                  }`}
                >
                  {test.level}
                </span>
              </div>
              <h4
                className={`text-xs sm:text-sm font-bold ${themeClasses.textPrimary} group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors line-clamp-2 mb-1.5`}
              >
                {test.title}
              </h4>
              <p
                className={`text-[11px] ${themeClasses.textSecondary} line-clamp-2 leading-relaxed mb-2`}
              >
                {test.relationReason}
              </p>
            </div>

            <div className="pt-2 border-t border-black/5 dark:border-white/5 flex items-center justify-between text-[11px] text-emerald-600 dark:text-emerald-400 font-medium">
              <span className="font-mono text-[10px] text-gray-500 dark:text-gray-400">
                {test.mathSymbol}
              </span>
              <span className="flex items-center gap-1 group-hover:translate-x-[-3px] transition-transform">
                ابدأ الاختبار
                <ArrowRight className="w-3 h-3 rotate-180" />
              </span>
            </div>
          </button>
        ))}
      </div>
    </aside>
  );
};
