import React from 'react';
import { ArrowRight, BookOpen, Compass } from 'lucide-react';
import { useEyeTheme } from '../context/ThemeContext';
import { navigateTo } from '../navigation/router';

export interface RelatedFunctionsGraphsQuizInfo {
  id: string;
  title: string;
  emoji: string;
  mathSymbol: string;
  level: 'أساسي' | 'متوسط' | 'متقدم';
  url: string;
  relationReason: string;
}

export const ALL_FUNCTIONS_GRAPHS_TESTS: Record<string, RelatedFunctionsGraphsQuizInfo> = {
  'function-concept-vertical-line-test': {
    id: 'function-concept-vertical-line-test',
    title: 'مفهوم الدالة واختبار الخط الرأسي (Vertical Line Test)',
    emoji: '',
    mathSymbol: 'f: X → Y',
    level: 'أساسي',
    url: '/math/functions-graphs/function-concept-vertical-line-test',
    relationReason: 'الأساس الجوهري لتعريف العلاقة كدالة وضمان ارتباط كل عنصر في المجال بمخرج وحيد واجتياز اختبار الخط الرأسي',
  },
  'function-domain-and-range': {
    id: 'function-domain-and-range',
    title: 'مجال ومدى الدوال (Domain and Range)',
    emoji: '',
    mathSymbol: 'D_f , R_f',
    level: 'متوسط',
    url: '/math/functions-graphs/function-domain-and-range',
    relationReason: 'تحديد قيم x المسموحة جبرياً وقيم y الناتجة بيانياً للدوال الكسرية والجذرية ومتعددة الحدود',
  },
  'function-notation-evaluation': {
    id: 'function-notation-evaluation',
    title: 'رمز الدالة والتعويض فيها (Function Notation & Evaluation)',
    emoji: '',
    mathSymbol: 'f(a) = y',
    level: 'أساسي',
    url: '/math/functions-graphs/function-notation-evaluation',
    relationReason: 'استبدال المتغيرات بقيم عددية وتعبيرية بدقة، وحساب معدل التغير وقسمة الفروق',
  },
  'even-and-odd-functions': {
    id: 'even-and-odd-functions',
    title: 'الدوال الزوجية والدوال الفردية (Even and Odd Functions)',
    emoji: '',
    mathSymbol: 'f(-x) = ±f(x)',
    level: 'متوسط',
    url: '/math/functions-graphs/even-and-odd-functions',
    relationReason: 'فحص التماثل حول محور الصادات وحول نقطة الأصل جبرياً وتوظيفه في اختصار دراسة المنحنيات',
  },
  'function-transformations': {
    id: 'function-transformations',
    title: 'التحويلات الهندسية للدوال (Function Transformations)',
    emoji: '',
    mathSymbol: 'a f(b(x-h)) + k',
    level: 'متوسط',
    url: '/math/functions-graphs/function-transformations',
    relationReason: 'قاعدة الإزاحات الأفقية والرأسية، والانعكاسات عبر المحاور، والتمدد والانضغاط على الدوال الأم',
  },
  'composite-functions': {
    id: 'composite-functions',
    title: 'تركيب الدوال (Composite Functions)',
    emoji: '',
    mathSymbol: '(f ∘ g)(x)',
    level: 'متوسط',
    url: '/math/functions-graphs/composite-functions',
    relationReason: 'سلاسل المعالجة المركبة واستخدام مخرج الدالة الداخلية كمدخل للدالة الخارجية وتحديد مجال التركيب',
  },
  'inverse-functions': {
    id: 'inverse-functions',
    title: 'الدالة العكسية (Inverse Functions)',
    emoji: '',
    mathSymbol: 'f⁻¹(x)',
    level: 'متوسط',
    url: '/math/functions-graphs/inverse-functions',
    relationReason: 'عكس أثر الدالة، واختبار الخط الأفقي للدوال الأحادية، والتماثل المرآتي حول المستقيم y = x',
  },
  'piecewise-defined-functions': {
    id: 'piecewise-defined-functions',
    title: 'الدوال المعرفة بأكثر من قاعدة (Piecewise-Defined Functions)',
    emoji: '',
    mathSymbol: 'f(x) = { g(x), h(x) }',
    level: 'متوسط',
    url: '/math/functions-graphs/piecewise-defined-functions',
    relationReason: 'نمذجة الشروط الحياتية المنقسمة، والتعامل مع نقاط التفرع والدوائر المفتوحة والمغلقة بيانياً',
  },
  'analyzing-functions-behavior-extrema': {
    id: 'analyzing-functions-behavior-extrema',
    title: 'قراءة الرسوم البيانية وتحليل سلوك الدالة (الاطراد والقيم القصوى)',
    emoji: '',
    mathSymbol: 'f(x) ↗ ↘ , Extrema',
    level: 'متقدم',
    url: '/math/functions-graphs/analyzing-functions-behavior-extrema',
    relationReason: 'استخراج فترات التزايد والتناقص من اليسار لليمين، وتحديد القمم والقيعان وسلوك طرفي المنحنى',
  },
  'parent-functions-graphs': {
    id: 'parent-functions-graphs',
    title: 'الرسوم البيانية لدوال القوة والجذور والأصليّة (Parent Functions)',
    emoji: '',
    mathSymbol: 'x, x², x³, √x, |x|, 1/x',
    level: 'أساسي',
    url: '/math/functions-graphs/parent-functions-graphs',
    relationReason: 'حفظ وتصور الأشكال والقوالب الأساسية الستة الكبرى للدوال ونقاط ارتكازها التي تبنى عليها كل التحويلات',
  },
  'rational-functions-asymptotes': {
    id: 'rational-functions-asymptotes',
    title: 'خطوط التقارب للدوال النسبية (Horizontal & Vertical Asymptotes)',
    emoji: '',
    mathSymbol: 'x = c , y = L',
    level: 'متقدم',
    url: '/math/functions-graphs/rational-functions-asymptotes',
    relationReason: 'أسرار خطوط التقارب الرأسية والأفقية والمائلة، والتمييز الجبري بين خط التقارب والفجوة النقطية',
  },
  'functions-word-problems-applications': {
    id: 'functions-word-problems-applications',
    title: 'المسائل الكلامية والتطبيقية على الدوال والرسوم البيانية',
    emoji: '',
    mathSymbol: 'C(x), R(x), P(x)',
    level: 'متقدم',
    url: '/math/functions-graphs/functions-word-problems-applications',
    relationReason: 'تطبيقات إدارة الأعمال والفيزياء، وتفسير الميل والمقطع الصادي ونقطة التعادل في السياق الواقعي',
  },
};

const NEXT_SMART_STEPS: Record<string, string[]> = {
  'function-concept-vertical-line-test': [
    'function-domain-and-range',
    'function-notation-evaluation',
    'parent-functions-graphs',
  ],
  'function-domain-and-range': [
    'function-notation-evaluation',
    'rational-functions-asymptotes',
    'piecewise-defined-functions',
  ],
  'function-notation-evaluation': [
    'composite-functions',
    'even-and-odd-functions',
    'functions-word-problems-applications',
  ],
  'even-and-odd-functions': [
    'function-transformations',
    'parent-functions-graphs',
    'analyzing-functions-behavior-extrema',
  ],
  'function-transformations': [
    'parent-functions-graphs',
    'analyzing-functions-behavior-extrema',
    'inverse-functions',
  ],
  'composite-functions': [
    'inverse-functions',
    'function-transformations',
    'functions-word-problems-applications',
  ],
  'inverse-functions': [
    'composite-functions',
    'function-domain-and-range',
    'analyzing-functions-behavior-extrema',
  ],
  'piecewise-defined-functions': [
    'analyzing-functions-behavior-extrema',
    'functions-word-problems-applications',
    'function-domain-and-range',
  ],
  'analyzing-functions-behavior-extrema': [
    'rational-functions-asymptotes',
    'functions-word-problems-applications',
    'function-transformations',
  ],
  'parent-functions-graphs': [
    'function-transformations',
    'rational-functions-asymptotes',
    'even-and-odd-functions',
  ],
  'rational-functions-asymptotes': [
    'function-domain-and-range',
    'analyzing-functions-behavior-extrema',
    'functions-word-problems-applications',
  ],
  'functions-word-problems-applications': [
    'analyzing-functions-behavior-extrema',
    'function-domain-and-range',
    'function-concept-vertical-line-test',
  ],
};

interface FunctionsGraphsBacklinkBoxProps {
  currentTestId: string;
}

export const FunctionsGraphsBacklinkBox: React.FC<FunctionsGraphsBacklinkBoxProps> = ({ currentTestId }) => {
  const { themeClasses } = useEyeTheme();
  const currentInfo = ALL_FUNCTIONS_GRAPHS_TESTS[currentTestId];
  const relatedIds = NEXT_SMART_STEPS[currentTestId] || [
    'function-concept-vertical-line-test',
    'function-domain-and-range',
    'function-transformations',
  ];

  const handleNavigate = (id: string, url: string) => {
    navigateTo(url);
  };

  const handleOpenPillarGuide = () => {
    navigateTo('/math/algebra-functions/functions-graphs');
  };

  return (
    <div
      className={`rounded-2xl border p-6 my-8 ${themeClasses.cardBg} ${themeClasses.border} shadow-sm transition-all`}
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-black/[0.06] dark:border-white/[0.06]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-600 dark:text-sky-400 flex items-center justify-center font-bold text-lg">
            
          </div>
          <div>
            <h3 className={`text-lg font-bold ${themeClasses.textPrimary}`}>
              المسار التعليمي المتصل للدوال والرسوم البيانية
            </h3>
            <p className={`text-xs ${themeClasses.textMuted}`}>
              اختبارات ومقالات تكميلية مبنية على مهارة {currentInfo?.title || 'الدوال والرسوم البيانية'}
            </p>
          </div>
        </div>

        <button
          onClick={handleOpenPillarGuide}
          className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-lg bg-sky-500/10 text-sky-600 dark:text-sky-400 hover:bg-sky-500/20 transition-colors"
        >
          <BookOpen className="w-3.5 h-3.5" />
          <span>الدليل الشامل للدوال والرسوم البيانية</span>
        </button>
      </div>

      {/* Related Test Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {relatedIds.map((tid) => {
          const item = ALL_FUNCTIONS_GRAPHS_TESTS[tid];
          if (!item) return null;
          return (
            <div
              key={item.id}
              onClick={() => handleNavigate(item.id, item.url)}
              className={`group cursor-pointer rounded-xl p-4 border transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md ${themeClasses.cardBg} ${themeClasses.border} hover:border-sky-500/40 flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl">{item.emoji}</span>
                  <span
                    className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${
                      item.level === 'أساسي'
                        ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                        : item.level === 'متوسط'
                        ? 'bg-sky-500/10 text-sky-600 dark:text-sky-400'
                        : 'bg-purple-500/10 text-purple-600 dark:text-purple-400'
                    }`}
                  >
                    {item.level}
                  </span>
                </div>
                <h4
                  className={`text-sm font-bold leading-snug mb-1 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors ${themeClasses.textPrimary}`}
                >
                  {item.title}
                </h4>
                <div className="text-[11px] font-mono text-sky-600/80 dark:text-sky-400/80 mb-2 font-semibold" dir="ltr">
                  {item.mathSymbol}
                </div>
                <p className={`text-xs ${themeClasses.textMuted} line-clamp-2 leading-relaxed`}>
                  {item.relationReason}
                </p>
              </div>

              <div className="pt-3 mt-3 border-t border-black/[0.04] dark:border-white/[0.04] flex items-center justify-between text-xs font-semibold text-sky-600 dark:text-sky-400">
                <span>ابدأ الاختبار والمقالة</span>
                <ArrowRight className="w-3.5 h-3.5 transform group-hover:-translate-x-1 transition-transform" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Quick All-Quizzes Directory */}
      <div className="rounded-xl p-4 bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.04] dark:border-white/[0.04]">
        <div className="flex items-center gap-2 mb-3">
          <Compass className="w-4 h-4 text-sky-600 dark:text-sky-400" />
          <span className={`text-xs font-bold ${themeClasses.textPrimary}`}>
            فهرس جميع اختبارات ومقالات الدوال والرسوم البيانية (12 موضوعاً):
          </span>
        </div>
        <div className="flex flex-wrap gap-2">
          {Object.values(ALL_FUNCTIONS_GRAPHS_TESTS).map((test) => {
            const isCurrent = test.id === currentTestId;
            return (
              <button
                key={test.id}
                onClick={() => !isCurrent && handleNavigate(test.id, test.url)}
                disabled={isCurrent}
                className={`text-xs px-2.5 py-1 rounded-lg border transition-all ${
                  isCurrent
                    ? 'bg-sky-500 text-white border-sky-500 font-bold shadow-sm'
                    : `${themeClasses.cardBg} ${themeClasses.border} ${themeClasses.textPrimary} hover:border-sky-500/50 hover:text-sky-600 dark:hover:text-sky-400`
                }`}
              >
                <span className="ml-1">{test.emoji}</span>
                <span>{test.title}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
