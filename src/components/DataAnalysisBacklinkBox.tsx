import React from 'react';
import { ArrowRight, BookOpen, Layers } from 'lucide-react';
import { useEyeTheme } from '../context/ThemeContext';
import { navigateTo } from '../navigation/router';

export interface RelatedDataAnalysisQuizInfo {
  id: string;
  title: string;
  emoji: string;
  mathSymbol: string;
  level: 'أساسي' | 'متوسط' | 'متقدم';
  url: string;
  relationReason: string;
}

export const ALL_DATA_ANALYSIS_TESTS: Record<string, RelatedDataAnalysisQuizInfo> = {
  'data-collection-sampling-methods': {
    id: 'data-collection-sampling-methods',
    title: 'جمع البيانات وطرق اختيار العينات',
    emoji: '',
    mathSymbol: 'k = N / n',
    level: 'أساسي',
    url: '/domain/statistics-probability/data-analysis/data-collection-sampling-methods',
    relationReason: 'الخطوة الأولى الحتمية لضمان سلامة المدخلات وخلو العينة من التحيز المنهجي',
  },
  'data-visualization-charts': {
    id: 'data-visualization-charts',
    title: 'التمثيل البياني للبيانات',
    emoji: '',
    mathSymbol: 'θ = (x/Total)·360°',
    level: 'أساسي',
    url: '/domain/statistics-probability/data-analysis/data-visualization-charts',
    relationReason: 'اختيار الرسم المناسب بين الأعمدة والخطوط والقطاعات لإظهار البنية البصرية للبيانات',
  },
  'frequency-tables-histograms': {
    id: 'frequency-tables-histograms',
    title: 'الجداول والمدرجات التكرارية',
    emoji: '',
    mathSymbol: 'm = (L + U) / 2',
    level: 'أساسي',
    url: '/domain/statistics-probability/data-analysis/frequency-tables-histograms',
    relationReason: 'تبويب المشاهدات الكبيرة في فئات منتظمة وحساب المراكز والتكرارات النسبية',
  },
  'dispersion-variability-analysis': {
    id: 'dispersion-variability-analysis',
    title: 'تحليل التشتت ومقارنة المجموعات',
    emoji: '',
    mathSymbol: 'CV = (s/x̄)·100%',
    level: 'متوسط',
    url: '/domain/statistics-probability/data-analysis/dispersion-variability-analysis',
    relationReason: 'تقييم درجة التجانس والاستقرار والمفاضلة بين العينات عبر معامل الاختلاف',
  },
  'pearson-spearman-correlation': {
    id: 'pearson-spearman-correlation',
    title: 'معاملات الارتباط (بيرسون وسبيرمان)',
    emoji: '',
    mathSymbol: '-1 ≤ r ≤ +1',
    level: 'متوسط',
    url: '/domain/statistics-probability/data-analysis/pearson-spearman-correlation',
    relationReason: 'قياس قوة واتجاه الاقتران الخطي والرتبي والتمييز الحاسم بين الارتباط والسببية',
  },
  'linear-regression-prediction': {
    id: 'linear-regression-prediction',
    title: 'تحليل الانحدار الخطي البسيط',
    emoji: '',
    mathSymbol: 'ŷ = b₀ + b₁x',
    level: 'متوسط',
    url: '/domain/statistics-probability/data-analysis/linear-regression-prediction',
    relationReason: 'بناء النماذج التنبؤية بأسلوب المربعات الصغرى وتفسير الميل والمقطع والبواقي',
  },
  'two-way-contingency-tables': {
    id: 'two-way-contingency-tables',
    title: 'جداول التوافق ثنائية الاتجاه',
    emoji: '',
    mathSymbol: 'P(A|B) = n(A∩B)/n(B)',
    level: 'متوسط',
    url: '/domain/statistics-probability/data-analysis/two-way-contingency-tables',
    relationReason: 'تحليل المتغيرات الفئوية المشتركة وحساب الاحتمالات الهامشية والمشروطة',
  },
  'time-series-trend-analysis': {
    id: 'time-series-trend-analysis',
    title: 'تحليل السلاسل الزمنية والاتجاهات',
    emoji: '',
    mathSymbol: 'Y = T + S + C + I',
    level: 'متوسط',
    url: '/domain/statistics-probability/data-analysis/time-series-trend-analysis',
    relationReason: 'تفكيك السلاسل لمركبات الاتجاه والموسمية والدورية واستخدام المتوسطات المتحركة',
  },
  'chi-square-independence-test': {
    id: 'chi-square-independence-test',
    title: 'اختبار كاي تربيع للاستقلال (χ²)',
    emoji: '',
    mathSymbol: 'χ² = ∑[(O - E)² / E]',
    level: 'متقدم',
    url: '/domain/statistics-probability/data-analysis/chi-square-independence-test',
    relationReason: 'التحقق الإحصائي المعياري من استقلال أو ارتباط المتغيرات التصنيفية',
  },
  'dashboards-kpis-interpretation': {
    id: 'dashboards-kpis-interpretation',
    title: 'قراءة لوحات المعلومات ومؤشرات الأداء',
    emoji: '',
    mathSymbol: 'KPI = (Actual/Target)·100%',
    level: 'متوسط',
    url: '/domain/statistics-probability/data-analysis/dashboards-kpis-interpretation',
    relationReason: 'تفسير المؤشرات الرقمية الحية ونسب الإنجاز والانحراف لدعم اتخاذ القرار',
  },
  'detecting-bias-misleading-graphs': {
    id: 'detecting-bias-misleading-graphs',
    title: 'اكتشاف التحيز والرسوم المضللة',
    emoji: '',
    mathSymbol: 'Scale ≠ 0 ⟹ Distortion',
    level: 'متقدم',
    url: '/domain/statistics-probability/data-analysis/detecting-bias-misleading-graphs',
    relationReason: 'تطبيق التفكير النقدي لكشف بتر المحاور وتشويه الأبعاد والمغالطات الإحصائية',
  },
  'data-analysis-word-problems': {
    id: 'data-analysis-word-problems',
    title: 'المسائل الكلامية والتطبيقية الشاملة',
    emoji: '',
    mathSymbol: 'E(X) = n · p',
    level: 'متقدم',
    url: '/domain/statistics-probability/data-analysis/data-analysis-word-problems',
    relationReason: 'الربط الميداني وحل سيناريوهات الجودة والتنبؤ بالأرباح والمواقف التجارية',
  },
};

interface DataAnalysisBacklinkBoxProps {
  currentQuizId: string;
  relatedIds?: string[];
}

export const DataAnalysisBacklinkBox: React.FC<DataAnalysisBacklinkBoxProps> = ({
  currentQuizId,
  relatedIds,
}) => {
  const { themeClasses } = useEyeTheme();

  const targetIds =
    relatedIds && relatedIds.length > 0
      ? relatedIds
      : Object.keys(ALL_DATA_ANALYSIS_TESTS).filter((id) => id !== currentQuizId);

  const relatedQuizzes = targetIds
    .map((id) => ALL_DATA_ANALYSIS_TESTS[id])
    .filter(Boolean);

  const handleNavigate = (url: string) => {
    navigateTo(url);
  };

  return (
    <aside
      aria-label="اختبارات وموضوعات ذات صلة في تحليل البيانات"
      className={`rounded-2xl border ${themeClasses.border} ${themeClasses.cardBg} p-6 sm:p-7 shadow-sm transition-all text-right space-y-5`}
    >
      <div className="flex items-center justify-between border-b border-black/5 dark:border-white/5 pb-3.5">
        <div className="flex items-center gap-2">
          <Layers className="w-5 h-5 text-amber-500" />
          <h3 className={`text-base font-bold ${themeClasses.textPrimary}`}>
            مسارات مقترحة واختبارات متصلة في تحليل البيانات
          </h3>
        </div>
        <span className={`text-xs ${themeClasses.textSecondary}`}>
          شبكة المعرفة الإحصائية
        </span>
      </div>

      <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
        يتطلب إتقان علم البيانات فهماً تكاملياً؛ فجمع العينات يغذي الجداول والمدرجات، والارتباط يمهد لمعادلات الانحدار والتنبؤ، بينما يكشف التفكير النقدي ألاعيب التضليل. نوصي باستكشاف الاختبارات ذات الصلة لتعزيز مهاراتك:
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
          onClick={() => navigateTo('/domain/statistics-probability/data-analysis')}
          className="inline-flex items-center gap-1.5 font-bold text-amber-600 dark:text-amber-400 hover:underline"
        >
          <BookOpen className="w-4 h-4" />
          <span>العودة إلى الدليل الشامل لتحليل البيانات (12 اختباراً)</span>
        </button>
        <span className={themeClasses.textSecondary}>
          تحليل البيانات · الإحصاء والاحتمالات
        </span>
      </div>
    </aside>
  );
};
