import React from 'react';
import { ArrowRight, BookOpen, Layers } from 'lucide-react';
import { useEyeTheme } from '../context/ThemeContext';
import { navigateTo } from '../navigation/router';

export interface RelatedApplicationsQuizInfo {
  id: string;
  title: string;
  subtitle?: string;
  emoji: string;
  mathSymbol: string;
  level: 'أساسي' | 'متوسط' | 'متقدم';
  url: string;
  relationReason: string;
}

export const ALL_APPLICATIONS_OF_DERIVATIVES_TESTS: Record<
  string,
  RelatedApplicationsQuizInfo
> = {
  'kinematics-motion': {
    id: 'kinematics-motion',
    title: 'السرعة والتسارع والحركة الجسيمية',
    emoji: '',
    mathSymbol: "v(t)=s'(t) , a(t)=v'(t)",
    level: 'متقدم',
    url: '/domain/calculus/applications-of-derivatives/kinematics-motion',
    relationReason: 'النمذجة الفيزيائية لحركة الجسيمات ومعدلات التغير اللحظية للموقع والسرعة والتسارع',
  },
  'increasing-decreasing-intervals': {
    id: 'increasing-decreasing-intervals',
    title: 'فترات التزايد والتناقص واختبار المشتقة الأولى',
    emoji: '',
    mathSymbol: "f'(x) > 0 ↗ , f'(x) < 0 ↘",
    level: 'متوسط',
    url: '/domain/calculus/applications-of-derivatives/increasing-decreasing-intervals',
    relationReason: 'تحليل سلوك المنحنيات صعوداً وهبوطاً عبر دراسة إشارة ميل المماس اللحظي',
  },
  'local-extrema': {
    id: 'local-extrema',
    title: 'القيم القصوى المحلية والتطبيقات عليها',
    emoji: '',
    mathSymbol: "f'(c)=0 , f''(c) ≶ 0",
    level: 'متقدم',
    url: '/domain/calculus/applications-of-derivatives/local-extrema',
    relationReason: 'اكتشاف القمم والقيعان المحلية باستخدام اختباري المشتقة الأولى والثانية',
  },
  'absolute-extrema': {
    id: 'absolute-extrema',
    title: 'القيم القصوى المطلقة على فترة مغلقة',
    emoji: '',
    mathSymbol: 'max/min f(x) on [a, b]',
    level: 'متقدم',
    url: '/domain/calculus/applications-of-derivatives/absolute-extrema',
    relationReason: 'تطبيق نظرية القيمة القصوى ومقارنة النقاط الحرجة مع حدود الفترة لتحديد القيم العالمية',
  },
  'concavity-inflection-points': {
    id: 'concavity-inflection-points',
    title: 'التقعر ونقاط الانقلاب واختبار المشتقة الثانية',
    emoji: '',
    mathSymbol: "f''(x) > 0 ∪ , f''(x) < 0 ∩",
    level: 'متقدم',
    url: '/domain/calculus/applications-of-derivatives/concavity-inflection-points',
    relationReason: 'تحديد اتجاه انحناء المنحنى واكتشاف نقاط التحول الجذري في التقعر',
  },
  'curve-sketching': {
    id: 'curve-sketching',
    title: 'رسم المنحنيات وتحليل سلوك الدالة',
    emoji: '',
    mathSymbol: 'lim_{x→a} f(x) & Asymptotes',
    level: 'متقدم',
    url: '/domain/calculus/applications-of-derivatives/curve-sketching',
    relationReason: 'التوليف البصري الشامل للتقارب والتماثل والتزايد والتقعر لرسم الدوال بدقة',
  },
  'optimization-problems': {
    id: 'optimization-problems',
    title: 'مسائل التحسين والتطبيقات الاقتصادية والهندسية',
    subtitle: 'تعظيم الحجوم والمساحات وتقليل التكاليف في النماذج الواقعية',
    emoji: '',
    mathSymbol: 'max V(x) , min C(x)',
    level: 'متقدم',
    url: '/domain/calculus/applications-of-derivatives/optimization-problems',
    relationReason: 'صياغة المعادلات الهندسية وتحويلها لمتغير واحد لتعظيم المنافع وتقليل الأعباء',
  },
  'related-rates': {
    id: 'related-rates',
    title: 'المعدلات المرتبطة بالزمن',
    emoji: '',
    mathSymbol: 'd/dt [F(x, y, z)] = 0',
    level: 'متقدم',
    url: '/domain/calculus/applications-of-derivatives/related-rates',
    relationReason: 'حساب سرعات تغير الكميات المتفاعلة هندسياً بدلالة مشتقات الزمن وقاعدة السلسلة',
  },
  'linear-approximation-differentials': {
    id: 'linear-approximation-differentials',
    title: 'التقريب الخطي والتفاضلات',
    emoji: '',
    mathSymbol: "L(x) = f(a) + f'(a)(x - a)",
    level: 'متوسط',
    url: '/domain/calculus/applications-of-derivatives/linear-approximation-differentials',
    relationReason: 'استبدال الدوال المعقدة بخطوط المماس لتقدير القيم المعقدة وقياس هامش الخطأ',
  },
  'rolles-mean-value-theorem': {
    id: 'rolles-mean-value-theorem',
    title: 'نظرية رول ونظرية القيمة المتوسطة',
    emoji: '',
    mathSymbol: "f'(c) = [f(b) - f(a)] / (b - a)",
    level: 'متقدم',
    url: '/domain/calculus/applications-of-derivatives/rolles-mean-value-theorem',
    relationReason: 'الضمان النظري لتساوي الميل اللحظي مع الميل المتوسط وتأسيس مبرهنات التحليل',
  },
  'lhopitals-rule': {
    id: 'lhopitals-rule',
    title: 'قاعدة لوبيتال لحساب النهايات غير المعينة',
    emoji: '',
    mathSymbol: "lim f/g = lim f'/g' (0/0 , ∞/∞)",
    level: 'متقدم',
    url: '/domain/calculus/applications-of-derivatives/lhopitals-rule',
    relationReason: 'استخدام مشتقات البسط والمقام لحسم قيم النهايات غير المعينة بدقة وسرعة',
  },
  'marginal-analysis-business': {
    id: 'marginal-analysis-business',
    title: 'التطبيقات الاقتصادية والنمذجة الحياتية',
    emoji: '',
    mathSymbol: "MR = MC ⟹ P'(x) = 0",
    level: 'متقدم',
    url: '/domain/calculus/applications-of-derivatives/marginal-analysis-business',
    relationReason: 'التكلفة الحدية والإيراد الحدي وتعظيم أرباح المشروعات عبر التحليل التفاضلي',
  },
};

// Map each quiz to the most pedagogically relevant related quizzes
const CURATED_APPLICATIONS_RELATIONS: Record<string, string[]> = {
  'kinematics-motion': [
    'related-rates',
    'increasing-decreasing-intervals',
    'linear-approximation-differentials',
    'optimization-problems',
  ],
  'increasing-decreasing-intervals': [
    'local-extrema',
    'concavity-inflection-points',
    'curve-sketching',
    'rolles-mean-value-theorem',
  ],
  'local-extrema': [
    'absolute-extrema',
    'optimization-problems',
    'concavity-inflection-points',
    'increasing-decreasing-intervals',
  ],
  'absolute-extrema': [
    'optimization-problems',
    'local-extrema',
    'rolles-mean-value-theorem',
    'marginal-analysis-business',
  ],
  'concavity-inflection-points': [
    'local-extrema',
    'curve-sketching',
    'increasing-decreasing-intervals',
    'optimization-problems',
  ],
  'curve-sketching': [
    'increasing-decreasing-intervals',
    'concavity-inflection-points',
    'lhopitals-rule',
    'local-extrema',
  ],
  'optimization-problems': [
    'absolute-extrema',
    'related-rates',
    'marginal-analysis-business',
    'local-extrema',
  ],
  'related-rates': [
    'optimization-problems',
    'kinematics-motion',
    'linear-approximation-differentials',
    'local-extrema',
  ],
  'linear-approximation-differentials': [
    'rolles-mean-value-theorem',
    'related-rates',
    'lhopitals-rule',
    'kinematics-motion',
  ],
  'rolles-mean-value-theorem': [
    'increasing-decreasing-intervals',
    'linear-approximation-differentials',
    'lhopitals-rule',
    'absolute-extrema',
  ],
  'lhopitals-rule': [
    'curve-sketching',
    'rolles-mean-value-theorem',
    'linear-approximation-differentials',
    'kinematics-motion',
  ],
  'marginal-analysis-business': [
    'optimization-problems',
    'absolute-extrema',
    'local-extrema',
    'linear-approximation-differentials',
  ],
};

interface ApplicationsOfDerivativesBacklinkBoxProps {
  currentQuizId: string;
  onOpenQuiz?: (quizId: string) => void;
}

export const ApplicationsOfDerivativesBacklinkBox: React.FC<
  ApplicationsOfDerivativesBacklinkBoxProps
> = ({ currentQuizId, onOpenQuiz }) => {
  const { themeClasses } = useEyeTheme();

  const relatedIds =
    CURATED_APPLICATIONS_RELATIONS[currentQuizId] ||
    Object.keys(ALL_APPLICATIONS_OF_DERIVATIVES_TESTS).filter(
      (id) => id !== currentQuizId
    ).slice(0, 4);

  const relatedQuizzes = relatedIds
    .map((id) => ALL_APPLICATIONS_OF_DERIVATIVES_TESTS[id])
    .filter(Boolean);

  const handleNavigate = (url: string, id: string) => {
    if (onOpenQuiz) {
      onOpenQuiz(id);
    } else {
      navigateTo(url);
    }
  };

  return (
    <div
      className={`mt-10 rounded-2xl border ${themeClasses.border} ${themeClasses.cardBg} p-6 sm:p-8 shadow-sm transition-all`}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white flex items-center justify-center shadow-md">
          <Layers className="w-5 h-5" />
        </div>
        <div>
          <h3 className={`text-xl font-bold ${themeClasses.textPrimary}`}>
            اختبارات تفاعلية مترابطة في تطبيقات المشتقات
          </h3>
          <p className={`text-xs sm:text-sm ${themeClasses.textSecondary}`}>
            عزز فهمك النظري والتطبيقي من خلال الانتقال إلى الاختبارات المرتبطة بهذا المفهوم
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        {relatedQuizzes.map((quiz) => (
          <button
            key={quiz.id}
            onClick={() => handleNavigate(quiz.url, quiz.id)}
            className={`group text-right p-4 rounded-xl border ${themeClasses.border} hover:border-emerald-500/50 hover:bg-emerald-500/5 transition-all flex flex-col justify-between`}
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl">{quiz.emoji}</span>
                <span className="text-xs px-2.5 py-1 rounded-full font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                  {quiz.level}
                </span>
              </div>
              <h4 className={`font-bold text-base mb-1 ${themeClasses.textPrimary} group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors`}>
                {quiz.title}
              </h4>
              <p className={`text-xs ${themeClasses.textSecondary} mb-3 leading-relaxed`}>
                {quiz.relationReason}
              </p>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-black/5 dark:border-white/5 text-xs">
              <span className="font-mono text-emerald-700 dark:text-emerald-300 font-semibold dir-ltr">
                {quiz.mathSymbol}
              </span>
              <span className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-medium group-hover:translate-x-[-4px] transition-transform">
                ابدأ الاختبار
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </button>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-black/5 dark:border-white/5 flex flex-wrap items-center justify-between gap-3 text-xs">
        <span className={`${themeClasses.textSecondary}`}>
          تصفح كافة اختبارات تصنيف تطبيقات المشتقات (12 اختباراً متخصصاً)
        </span>
        <button
          onClick={() => navigateTo('/domain/calculus/applications-of-derivatives')}
          className="inline-flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
        >
          <BookOpen className="w-4 h-4" />
          فهرس تطبيقات المشتقات الشامل
        </button>
      </div>
    </div>
  );
};
