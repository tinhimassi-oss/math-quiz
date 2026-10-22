import React from 'react';
import { ArrowRight, BookOpen, Layers } from 'lucide-react';
import { useEyeTheme } from '../context/ThemeContext';
import { navigateTo } from '../navigation/router';

export interface RelatedStatQuizInfo {
  id: string;
  title: string;
  emoji: string;
  mathSymbol: string;
  level: 'أساسي' | 'متوسط' | 'متقدم';
  url: string;
  relationReason: string;
}

export const ALL_STATISTICAL_MEASURES_TESTS: Record<
  string,
  RelatedStatQuizInfo
> = {
  'mean-central-tendency': {
    id: 'mean-central-tendency',
    title: 'المتوسط الحسابي (Mean)',
    emoji: '📊',
    mathSymbol: 'x̄ = (∑x) / n',
    level: 'أساسي',
    url: '/domain/statistics-probability/statistical-measures/mean-central-tendency',
    relationReason: 'نقطة التوازن الفيزيائي للبيانات والأساس الحسابي لاختبار الفرضيات والتباين',
  },
  'median-central-tendency': {
    id: 'median-central-tendency',
    title: 'الوسيط (Median)',
    emoji: '⚖️',
    mathSymbol: 'Me = x_{(n+1)/2}',
    level: 'أساسي',
    url: '/domain/statistics-probability/statistical-measures/median-central-tendency',
    relationReason: 'المقياس المقاوم للقيم الشاذة الذي ينصف البيانات بدقة ويوجه مقاييس الموضع',
  },
  'mode-central-tendency': {
    id: 'mode-central-tendency',
    title: 'المنوال (Mode)',
    emoji: '🎯',
    mathSymbol: 'Mo = الأكثر تكراراً',
    level: 'أساسي',
    url: '/domain/statistics-probability/statistical-measures/mode-central-tendency',
    relationReason: 'مقياس الشيوع والترجيح الوحيد الصالح للبيانات النوعية ودراسات التفضيل السوقي',
  },
  'grouped-data-measures': {
    id: 'grouped-data-measures',
    title: 'المقاييس في البيانات المبوبة',
    emoji: '📑',
    mathSymbol: 'x̄ = (∑ f·m) / (∑ f)',
    level: 'متوسط',
    url: '/domain/statistics-probability/statistical-measures/grouped-data-measures',
    relationReason: 'تقدير مقاييس النزعة من الجداول التكرارية ومراكز الفئات في العينات الكبيرة',
  },
  'range-and-iqr': {
    id: 'range-and-iqr',
    title: 'المدى والمدى الربيعي (Range & IQR)',
    emoji: '📏',
    mathSymbol: 'R = Max - Min | IQR',
    level: 'أساسي',
    url: '/domain/statistics-probability/statistical-measures/range-and-iqr',
    relationReason: 'قياس الانتشار المطلق والمحصن واكتشاف القيم الشاذة المتطرفة بأسوار توكي',
  },
  'variance-standard-deviation': {
    id: 'variance-standard-deviation',
    title: 'التباين والانحراف المعياري',
    emoji: '📉',
    mathSymbol: 's = √[∑(x - x̄)² / (n - 1)]',
    level: 'متوسط',
    url: '/domain/statistics-probability/statistical-measures/variance-standard-deviation',
    relationReason: 'المقياسان المعياريان لحساب متوسط مربعات الانحرافات وتقييم المخاطرة والتقلب',
  },
  'quartiles-percentiles': {
    id: 'quartiles-percentiles',
    title: 'الربيعيات والمئينيات والانحراف الربيعي',
    emoji: '📈',
    mathSymbol: 'Q₁, Q₂, Q₃ | P_k',
    level: 'متوسط',
    url: '/domain/statistics-probability/statistical-measures/quartiles-percentiles',
    relationReason: 'تجزئة التوزيع لرتب نسبية ومقارنة الأداء المعياري في الاختبارات الموحدة',
  },
  'box-plot-measures': {
    id: 'box-plot-measures',
    title: 'تمثيل الصندوق والطرفين (Box Plot)',
    emoji: '📦',
    mathSymbol: 'Min · Q₁ · Me · Q₃ · Max',
    level: 'متوسط',
    url: '/domain/statistics-probability/statistical-measures/box-plot-measures',
    relationReason: 'التمثيل البياني لملخص الأرقام الخمسة وقراءة التشتت والالتواء بالعين المجردة',
  },
  'z-score-standardization': {
    id: 'z-score-standardization',
    title: 'القيمة المعيارية (Z-Score)',
    emoji: '📐',
    mathSymbol: 'Z = (x - μ) / σ',
    level: 'متوسط',
    url: '/domain/statistics-probability/statistical-measures/z-score-standardization',
    relationReason: 'توحيد مقاييس القياس المختلفة والمقارنة بين أداء الأفراد في توزيعات مختلفة',
  },
  'skewness-distribution-shape': {
    id: 'skewness-distribution-shape',
    title: 'معامل التواء البيانات ومقاييس الشكل',
    emoji: '🌊',
    mathSymbol: 'Sk = [3(x̄ - Me)] / s',
    level: 'متقدم',
    url: '/domain/statistics-probability/statistical-measures/skewness-distribution-shape',
    relationReason: 'قياس انحراف البيانات عن التماثل الطبيعي وتشخيص اتجاه الذيل الطويل والتفرطح',
  },
  'mean-deviation-coefficient-variation': {
    id: 'mean-deviation-coefficient-variation',
    title: 'الانحراف المتوسط ومعامل الاختلاف (CV)',
    emoji: '⚖️',
    mathSymbol: 'CV = (s / x̄) × 100%',
    level: 'متقدم',
    url: '/domain/statistics-probability/statistical-measures/mean-deviation-coefficient-variation',
    relationReason: 'مقارنة التشتت النسبي بين متغيرات مختلفة في المتوسط ووحدات القياس',
  },
  'statistical-measures-word-problems': {
    id: 'statistical-measures-word-problems',
    title: 'المسائل الكلامية والتطبيقية',
    emoji: '🧩',
    mathSymbol: '∑x = n · x̄',
    level: 'متقدم',
    url: '/domain/statistics-probability/statistical-measures/statistical-measures-word-problems',
    relationReason: 'التطبيق العملي في سيناريوهات الحياة المعقدة وتصحيح البيانات ودمج المجموعات',
  },
};

interface StatisticalMeasuresBacklinkBoxProps {
  currentQuizId: string;
  relatedIds?: string[];
}

export const StatisticalMeasuresBacklinkBox: React.FC<
  StatisticalMeasuresBacklinkBoxProps
> = ({ currentQuizId, relatedIds }) => {
  const { themeClasses } = useEyeTheme();

  // Pick related quizzes or fallback to all other quizzes
  const targetIds =
    relatedIds && relatedIds.length > 0
      ? relatedIds
      : Object.keys(ALL_STATISTICAL_MEASURES_TESTS).filter(
          (id) => id !== currentQuizId
        );

  const relatedQuizzes = targetIds
    .map((id) => ALL_STATISTICAL_MEASURES_TESTS[id])
    .filter(Boolean);

  const handleNavigate = (url: string) => {
    navigateTo(url);
  };

  return (
    <aside
      aria-label="اختبارات وموضوعات ذات صلة في المقاييس الإحصائية"
      className={`rounded-2xl border ${themeClasses.border} ${themeClasses.cardBg} p-6 sm:p-7 shadow-sm transition-all text-right space-y-5`}
    >
      <div className="flex items-center justify-between border-b border-black/5 dark:border-white/5 pb-3.5">
        <div className="flex items-center gap-2">
          <Layers className="w-5 h-5 text-amber-500" />
          <h3 className={`text-base font-bold ${themeClasses.textPrimary}`}>
            مسارات مقترحة واختبارات متصلة في المقاييس الإحصائية
          </h3>
        </div>
        <span className={`text-xs ${themeClasses.textSecondary}`}>
          شبكة المعرفة الإحصائية
        </span>
      </div>

      <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
        ترتبط المقاييس الإحصائية بروابط وثيقة؛ ففهم النزعة المركزية يمهد لقياس التشتت، وتكامل المتوسط مع الانحراف المعياري هو ما يمكّن من حساب الدرجة المعيارية ومعامل الالتواء. نوصي باستكشاف الاختبارات ذات الصلة لتعزيز فهمك التطبيقي:
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 pt-1">
        {relatedQuizzes.map((quiz) => (
          <button
            key={quiz.id}
            onClick={() => handleNavigate(quiz.url)}
            className={`group text-right p-4 rounded-xl border ${themeClasses.border} bg-black/[0.015] dark:bg-white/[0.015] hover:bg-amber-500/5 hover:border-amber-500/30 transition-all flex flex-col justify-between`}
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
          onClick={() =>
            navigateTo(
              '/domain/statistics-probability/statistical-measures'
            )
          }
          className="inline-flex items-center gap-1.5 font-bold text-amber-600 dark:text-amber-400 hover:underline"
        >
          <BookOpen className="w-4 h-4" />
          <span>العودة إلى الدليل الشامل للمقاييس الإحصائية (12 اختباراً)</span>
        </button>
        <span className={themeClasses.textSecondary}>
          المقاييس الإحصائية · الإحصاء والاحتمالات
        </span>
      </div>
    </aside>
  );
};
