import React from 'react';
import { ArrowRight, BookOpen, Compass, CheckCircle2 } from 'lucide-react';
import { useEyeTheme } from '../context/ThemeContext';
import { navigateTo } from '../navigation/router';

export interface RelatedQuizInfo {
  id: string;
  title: string;
  emoji: string;
  mathSymbol: string;
  level: 'أساسي' | 'متوسط' | 'متقدم';
  url: string;
  relationReason: string;
}

export const ALL_MULTIPLICATION_TESTS: Record<string, RelatedQuizInfo> = {
  'single-digit-multiplication': {
    id: 'single-digit-multiplication',
    title: 'اختبار ضرب الأرقام البسيطة من 1 إلى 10',
    emoji: '',
    mathSymbol: '3 × 4 = 12',
    level: 'أساسي',
    url: '/math/arithmetic/multiplication/single-digits',
    relationReason: 'الخطوة الأولى لفهم الجمع المتكرر والمجموعات المتساوية',
  },
  'multiplication-within-20': {
    id: 'multiplication-within-20',
    title: 'اختبار الضرب ضمن العدد 20',
    emoji: '',
    mathSymbol: '4 × 5 = 20',
    level: 'أساسي',
    url: '/math/arithmetic/multiplication/within-20',
    relationReason: 'إتقان حقائق الضرب الصغيرة وتنمية مهارات العد القفزي والمضاعفة',
  },
  'multiplication-within-50': {
    id: 'multiplication-within-50',
    title: 'اختبار الضرب ضمن العدد 50',
    emoji: '',
    mathSymbol: '6 × 7 = 42',
    level: 'متوسط',
    url: '/math/arithmetic/multiplication/within-50',
    relationReason: 'الانتقال إلى نواتج النصف مئة واستراتيجيات التوزيع والضرب في 5',
  },
  'multiplication-within-100': {
    id: 'multiplication-within-100',
    title: 'اختبار الضرب ضمن العدد 100',
    emoji: '',
    mathSymbol: '8 × 9 = 72',
    level: 'متقدم',
    url: '/math/arithmetic/multiplication/within-100',
    relationReason: 'قمة الطلاقة الحسابية بإتقان نواتج الضرب الكبرى حتى 100 والمربعات الكاملة',
  },
  'fractions-multiplication': {
    id: 'fractions-multiplication',
    title: 'اختبار ضرب الكسور',
    emoji: '',
    mathSymbol: '(2/3) × (3/4) = 1/2',
    level: 'متوسط',
    url: '/math/arithmetic/multiplication/fractions',
    relationReason: 'ضرب البسط في البسط والمقام في المقام واختصار العوامل المشتركة',
  },
  'decimals-multiplication': {
    id: 'decimals-multiplication',
    title: 'اختبار ضرب الأعداد العشرية',
    emoji: '',
    mathSymbol: '0.4 × 0.5 = 0.2',
    level: 'متوسط',
    url: '/math/arithmetic/multiplication/decimals',
    relationReason: 'حساب عدد المنازل العشرية بعد الفاصلة والضرب الدقيق للأعشار والمئات',
  },
  'missing-single-digits-multiplication': {
    id: 'missing-single-digits-multiplication',
    title: 'اختبار ضرب الأرقام من 1 إلى 10 (الرقم المفقود)',
    emoji: '',
    mathSymbol: '3 × ؟ = 15',
    level: 'أساسي',
    url: '/math/arithmetic/multiplication/missing-single-digits',
    relationReason: 'التفكير الرياضي العكسي وإيجاد العامل المفقود بدلاً من مجرد الحفظ',
  },
  'missing-within-20-multiplication': {
    id: 'missing-within-20-multiplication',
    title: 'اختبار الضرب ضمن العدد 20 (الرقم المفقود)',
    emoji: '',
    mathSymbol: '؟ × 4 = 16',
    level: 'أساسي',
    url: '/math/arithmetic/multiplication/missing-within-20',
    relationReason: 'تطبيق التفكير العكسي في نواتج حتى 20 والربط المباشر بالقسمة',
  },
  'missing-within-50-multiplication': {
    id: 'missing-within-50-multiplication',
    title: 'اختبار الضرب ضمن العدد 50 (الرقم المفقود)',
    emoji: '',
    mathSymbol: '6 × ؟ = 42',
    level: 'متوسط',
    url: '/math/arithmetic/multiplication/missing-within-50',
    relationReason: 'اكتشاف العوامل المجهولة بالأعداد حتى 50 واستراتيجيات التحليل',
  },
  'missing-within-100-multiplication': {
    id: 'missing-within-100-multiplication',
    title: 'اختبار الضرب ضمن العدد 100 (الرقم المفقود)',
    emoji: '',
    mathSymbol: '8 × ؟ = 56',
    level: 'متقدم',
    url: '/math/arithmetic/multiplication/missing-within-100',
    relationReason: 'تحدي استنتاج العوامل الكبرى بسرعة وبناء أسس الجبر الذهني',
  },
  'missing-fractions-multiplication': {
    id: 'missing-fractions-multiplication',
    title: 'اختبار ضرب الكسور (الرقم المفقود)',
    emoji: '',
    mathSymbol: '(2/3) × ؟ = 2/9',
    level: 'متوسط',
    url: '/math/arithmetic/multiplication/missing-fractions',
    relationReason: 'حساب الكسر المفقود في معادلات ضرب الكسور مع بسط ومقام مرئيين',
  },
  'missing-decimals-multiplication': {
    id: 'missing-decimals-multiplication',
    title: 'اختبار ضرب الأعداد العشرية (الرقم المفقود)',
    emoji: '',
    mathSymbol: '0.5 × ؟ = 0.35',
    level: 'متوسط',
    url: '/math/arithmetic/multiplication/missing-decimals',
    relationReason: 'اكتشاف المضروب العشري المجهول وموازنة عدد الفواصل العشرية',
  },
  'table-1': {
    id: 'table-1',
    title: 'اختبار جدول ضرب 1',
    emoji: '',
    mathSymbol: '1 × 7 = 7',
    level: 'أساسي',
    url: '/math/arithmetic/multiplication/table-1',
    relationReason: 'إتقان خاصية المحايد الضربي كمدخل أساسي للضرب',
  },
  'table-2': {
    id: 'table-2',
    title: 'اختبار جدول ضرب 2',
    emoji: '',
    mathSymbol: '2 × 8 = 16',
    level: 'أساسي',
    url: '/math/arithmetic/multiplication/table-2',
    relationReason: 'إتقان مضاعفة الأعداد والقفز اثنينات للأعداد الزوجية',
  },
  'table-3': {
    id: 'table-3',
    title: 'اختبار جدول ضرب 3',
    emoji: '',
    mathSymbol: '3 × 7 = 21',
    level: 'أساسي',
    url: '/math/arithmetic/multiplication/table-3',
    relationReason: 'القفز ثلاث خطوات واستراتيجية (الضعف + العدد)',
  },
  'table-4': {
    id: 'table-4',
    title: 'اختبار جدول ضرب 4',
    emoji: '',
    mathSymbol: '4 × 6 = 24',
    level: 'أساسي',
    url: '/math/arithmetic/multiplication/table-4',
    relationReason: 'المضاعفة المزدوجة (ضعف الضعف) بالربط مع جدول 2',
  },
  'table-5': {
    id: 'table-5',
    title: 'اختبار جدول ضرب 5',
    emoji: '',
    mathSymbol: '5 × 9 = 45',
    level: 'أساسي',
    url: '/math/arithmetic/multiplication/table-5',
    relationReason: 'نمط الآحاد (0 أو 5) وعلاقة عقارب الساعة والقفز بالخمسات',
  },
  'table-6': {
    id: 'table-6',
    title: 'اختبار جدول ضرب 6',
    emoji: '',
    mathSymbol: '6 × 8 = 48',
    level: 'متوسط',
    url: '/math/arithmetic/multiplication/table-6',
    relationReason: 'مضاعفة نواتج جدول 3 وخدعة ضرب الأعداد الزوجية',
  },
  'table-7': {
    id: 'table-7',
    title: 'اختبار جدول ضرب 7',
    emoji: '',
    mathSymbol: '7 × 8 = 56',
    level: 'متوسط',
    url: '/math/arithmetic/multiplication/table-7',
    relationReason: 'تفكيك 7 إلى (5 + 2) والربط بأيام الأسبوع والتقويم',
  },
  'table-8': {
    id: 'table-8',
    title: 'اختبار جدول ضرب 8',
    emoji: '',
    mathSymbol: '8 × 7 = 56',
    level: 'متوسط',
    url: '/math/arithmetic/multiplication/table-8',
    relationReason: 'المضاعفة الثلاثية (ضعف ضعف الضعف) والربط بجدول 4',
  },
  'table-9': {
    id: 'table-9',
    title: 'اختبار جدول ضرب 9',
    emoji: '',
    mathSymbol: '9 × 6 = 54',
    level: 'متوسط',
    url: '/math/arithmetic/multiplication/table-9',
    relationReason: 'سحر مجموع الخانات التساعي وخدعة الأصابع والضرب في 10 ناقص العدد',
  },
  'table-10': {
    id: 'table-10',
    title: 'اختبار جدول ضرب 10',
    emoji: '',
    mathSymbol: '10 × 9 = 90',
    level: 'أساسي',
    url: '/math/arithmetic/multiplication/table-10',
    relationReason: 'قاعدة إضافة الصفر على اليمين ونقل الخانات لمنزلة العشرات',
  },
};

const ADJACENT_MAP: Record<string, string[]> = {
  'single-digit-multiplication': ['table-2', 'multiplication-within-20', 'missing-single-digits-multiplication'],
  'multiplication-within-20': ['single-digit-multiplication', 'multiplication-within-50', 'missing-within-20-multiplication'],
  'multiplication-within-50': ['multiplication-within-20', 'multiplication-within-100', 'table-5'],
  'multiplication-within-100': ['multiplication-within-50', 'missing-within-100-multiplication', 'table-9'],
  'fractions-multiplication': ['missing-fractions-multiplication', 'decimals-multiplication', 'multiplication-within-20'],
  'decimals-multiplication': ['fractions-multiplication', 'missing-decimals-multiplication', 'multiplication-within-100'],
  'missing-single-digits-multiplication': ['single-digit-multiplication', 'missing-within-20-multiplication', 'table-3'],
  'missing-within-20-multiplication': ['missing-single-digits-multiplication', 'missing-within-50-multiplication', 'multiplication-within-20'],
  'missing-within-50-multiplication': ['missing-within-20-multiplication', 'missing-within-100-multiplication', 'multiplication-within-50'],
  'missing-within-100-multiplication': ['missing-within-50-multiplication', 'multiplication-within-100', 'missing-decimals-multiplication'],
  'missing-fractions-multiplication': ['fractions-multiplication', 'missing-decimals-multiplication', 'multiplication-within-50'],
  'missing-decimals-multiplication': ['decimals-multiplication', 'missing-fractions-multiplication', 'missing-within-100-multiplication'],
  'table-1': ['table-2', 'table-3', 'single-digit-multiplication'],
  'table-2': ['table-1', 'table-3', 'table-4'],
  'table-3': ['table-2', 'table-4', 'table-6'],
  'table-4': ['table-2', 'table-3', 'table-8'],
  'table-5': ['table-4', 'table-6', 'table-10'],
  'table-6': ['table-3', 'table-5', 'table-7'],
  'table-7': ['table-6', 'table-8', 'table-9'],
  'table-8': ['table-4', 'table-7', 'table-9'],
  'table-9': ['table-8', 'table-10', 'table-7'],
  'table-10': ['table-9', 'table-5', 'multiplication-within-100'],
};

interface MultiplicationBacklinkBoxProps {
  currentQuizId: string;
  onGoMultiplicationTests?: () => void;
  className?: string;
}

export const MultiplicationBacklinkBox: React.FC<MultiplicationBacklinkBoxProps> = ({
  currentQuizId,
  onGoMultiplicationTests,
  className = '',
}) => {
  const { themeClasses } = useEyeTheme();

  const adjacentIds = ADJACENT_MAP[currentQuizId] || ['single-digit-multiplication', 'table-2', 'table-5'];
  const adjacentTests = adjacentIds
    .map((id) => ALL_MULTIPLICATION_TESTS[id])
    .filter(Boolean);

  const handleParentClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onGoMultiplicationTests) {
      onGoMultiplicationTests();
    } else {
      navigateTo('/domain/basic-math/basic-arithmetic/multiplication-tests');
    }
  };

  const handleCardClick = (url: string, e: React.MouseEvent) => {
    e.preventDefault();
    navigateTo(url);
  };

  return (
    <aside
      aria-label="روابط سياقية واختبارات الضرب المقترحة"
      className={`p-6 sm:p-8 rounded-2xl border ${themeClasses.border} ${themeClasses.cardBg} space-y-6 shadow-2xs text-right ${className}`}
    >
      {/* Category Backlink Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-5 border-b border-black/[0.06] dark:border-white/[0.08]">
        <div>
          <span className="text-[11px] font-bold text-[#127052] dark:text-[#5EB5A1] flex items-center gap-1.5 mb-1">
            <Compass className="w-3.5 h-3.5" />
            التنقل الهرمي وشبكة اختبارات الضرب
          </span>
          <h3 className={`text-base sm:text-lg font-bold ${themeClasses.textPrimary}`}>
            التصنيف الشامل: اختبارات الضرب (22 اختباراً تفاعلياً)
          </h3>
        </div>

        <button
          onClick={handleParentClick}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#127052] dark:text-[#5EB5A1] hover:underline self-start sm:self-auto cursor-pointer"
        >
          <span>تصفح كل اختبارات وجداول الضرب</span>
          <ArrowRight className="w-3.5 h-3.5 rotate-180" />
        </button>
      </div>

      <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
        هذا الاختبار جزء من منظومة متكاملة تضم 12 اختباراً تفاعلياً مهارياً و10 اختبارات مخصصة لجداول الضرب من 1 إلى 10. نوصي باستكمال الاختبارات المترابطة أدناه لتثبيت حفظ الجداول وبناء الاستنتاج السريع:
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
          <span>المجال: الحساب الأساسي &gt; اختبارات الضرب وجداول الضرب</span>
        </div>

        <div className="flex items-center gap-1 text-slate-500 dark:text-slate-400">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
          <span>22 اختباراً تفاعلياً مع شروحات فريدة</span>
        </div>
      </div>
    </aside>
  );
};
