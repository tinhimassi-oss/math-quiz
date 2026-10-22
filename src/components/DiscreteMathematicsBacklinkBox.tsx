import React from 'react';
import { ArrowRight, BookOpen, Layers } from 'lucide-react';
import { useEyeTheme } from '../context/ThemeContext';
import { navigateTo } from '../navigation/router';

export interface RelatedDiscreteMathQuizInfo {
  id: string;
  title: string;
  emoji: string;
  mathSymbol: string;
  level: 'أساسي' | 'متوسط' | 'متقدم';
  url: string;
  relationReason: string;
}

export const ALL_DISCRETE_MATH_TESTS: Record<string, RelatedDiscreteMathQuizInfo> = {
  'set-theory-operations': {
    id: 'set-theory-operations',
    title: 'نظرية المجموعات والعمليات عليها (Set Theory & Operations)',
    emoji: '',
    mathSymbol: 'A ∩ B, A ∪ B',
    level: 'أساسي',
    url: '/domain/advanced-math/discrete-mathematics/set-theory-operations',
    relationReason: 'المدخل الأساسي لعمليات الاتحاد، التقاطع، الفرق، مجموعة القوة، والضرب الديكارتي',
  },
  'relations-properties': {
    id: 'relations-properties',
    title: 'العلاقات وخواصها: الانعكاس والتماثل والتعدي (Relations)',
    emoji: '',
    mathSymbol: 'R ⊆ A × A',
    level: 'أساسي',
    url: '/domain/advanced-math/discrete-mathematics/relations-properties',
    relationReason: 'تشخيص العلاقات الثنائية، مصفوفات المجاورة، وخوارزمية وارشال للغالق المتعدي',
  },
  'equivalence-partial-orders': {
    id: 'equivalence-partial-orders',
    title: 'علاقات التكافؤ والترتيب الجزئي (Equivalence & Posets)',
    emoji: '',
    mathSymbol: '[a] ∈ A/R, Poset',
    level: 'متوسط',
    url: '/domain/advanced-math/discrete-mathematics/equivalence-partial-orders',
    relationReason: 'فصول التكافؤ، تجزئة المجموعات، مخططات هاس الهرمية، والترتيب الكلي والشبكيات',
  },
  'discrete-functions-types': {
    id: 'discrete-functions-types',
    title: 'الدوال المتقطعة: الشاملة والمتباينة والتقابل (Functions)',
    emoji: '',
    mathSymbol: 'f: A → B, f⁻¹',
    level: 'متوسط',
    url: '/domain/advanced-math/discrete-mathematics/discrete-functions-types',
    relationReason: 'التباين والشمول والتناظر الأحادي ودوال السقف والأرضية ودوال التركيب والمعكوس',
  },
  'pigeonhole-principle': {
    id: 'pigeonhole-principle',
    title: 'مبدأ برج الحمام وتطبيقاته (Pigeonhole Principle)',
    emoji: '',
    mathSymbol: '⌈N / k⌉',
    level: 'أساسي',
    url: '/domain/advanced-math/discrete-mathematics/pigeonhole-principle',
    relationReason: 'البرهان الوجودي لدركليه، الصيغة المعممة، تصادمات الهاش، ونظرية رامزي للأصدقاء',
  },
  'recurrence-relations': {
    id: 'recurrence-relations',
    title: 'العلاقات العودية وحل الاستدلالات (Recurrence Relations)',
    emoji: '',
    mathSymbol: 'a_n = c₁ a_{n-1}',
    level: 'متوسط',
    url: '/domain/advanced-math/discrete-mathematics/recurrence-relations',
    relationReason: 'المعادلة المميزة، متتالية فيبوناتشي والنسبة الذهبية، برج هانوي، ونظرية الماستر',
  },
  'graph-theory-basics': {
    id: 'graph-theory-basics',
    title: 'نظرية الرسم البياني: الرؤوس والحواف ومصافحة اليدين',
    emoji: '',
    mathSymbol: 'Σ deg(v) = 2|E|',
    level: 'أساسي',
    url: '/domain/advanced-math/discrete-mathematics/graph-theory-basics',
    relationReason: 'المفاهيم الطوبولوجية الأساسية، مصافحة اليدين، الرسوم الكاملة Kn، وثنائية التجزئة',
  },
  'eulerian-hamiltonian-paths': {
    id: 'eulerian-hamiltonian-paths',
    title: 'المسارات والدارات الإيلرية والهاميلتونية (Euler & Hamilton)',
    emoji: '',
    mathSymbol: 'Euler, TSP',
    level: 'متوسط',
    url: '/domain/advanced-math/discrete-mathematics/eulerian-hamiltonian-paths',
    relationReason: 'جسور كونيغسبرغ، شروط أويلر للدرجات الزوجية، مبرهنة ديراك، ومسألة البائع المتجول',
  },
  'trees-minimum-spanning': {
    id: 'trees-minimum-spanning',
    title: 'الأشجار والأشجار الممتدة الأدنى (Trees & MST)',
    emoji: '',
    mathSymbol: '|E| = |V| - 1',
    level: 'متوسط',
    url: '/domain/advanced-math/discrete-mathematics/trees-minimum-spanning',
    relationReason: 'خواص الأشجار، صيغة كايلي، وخوارزميتي كروسكال وبريم الجشعتين للشبكات الاقتصادية',
  },
  'boolean-algebra-circuits': {
    id: 'boolean-algebra-circuits',
    title: 'الجبر البولياني وتصميم الدوائر (Boolean Algebra)',
    emoji: '',
    mathSymbol: 'K-Maps, SOP & POS',
    level: 'متوسط',
    url: '/domain/advanced-math/discrete-mathematics/boolean-algebra-circuits',
    relationReason: 'قوانين الامتصاص والثنائية، خرائط كارنوف البصرية، واختزال بوابات المعالجات الرقمية',
  },
  'discrete-induction-proofs': {
    id: 'discrete-induction-proofs',
    title: 'الاستقراء الرياضي المتقدم والبرهان بالتقصي (Induction)',
    emoji: '',
    mathSymbol: 'P(k) ⟹ P(k+1)',
    level: 'متقدم',
    url: '/domain/advanced-math/discrete-mathematics/discrete-induction-proofs',
    relationReason: 'خطوات الاستقراء التتابعي، الاستقراء القوي، مبدأ الترتيب الجيد، والاستقراء الهيكلي',
  },
  'discrete-applied-crypto-networks': {
    id: 'discrete-applied-crypto-networks',
    title: 'المسائل الكلامية والتطبيقية الشاملة (تشفير وشبكات)',
    emoji: '',
    mathSymbol: 'Caesar, RSA, Max-Flow',
    level: 'متقدم',
    url: '/domain/advanced-math/discrete-mathematics/discrete-applied-crypto-networks',
    relationReason: 'تشفير قيصر والحساب المعياري، أمان RSA، التدفق الشبكي، وألغاز الدوريات الرياضية',
  },
};

interface DiscreteMathematicsBacklinkBoxProps {
  currentQuizId: string;
}

export const DiscreteMathematicsBacklinkBox: React.FC<DiscreteMathematicsBacklinkBoxProps> = ({
  currentQuizId,
}) => {
  const { themeClasses, isDark } = useEyeTheme();

  const otherTests = Object.values(ALL_DISCRETE_MATH_TESTS).filter(
    (t) => t.id !== currentQuizId
  );

  return (
    <aside
      className={`rounded-2xl border ${themeClasses.border} ${themeClasses.cardBg} p-6 sm:p-8 shadow-sm transition-all text-right mt-10`}
      aria-label="مسارات التعلم والاختبارات المترابطة في الرياضيات المتقطعة"
    >
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-black/5 dark:border-white/5 pb-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border border-indigo-500/20 mb-2">
            <Layers className="w-3.5 h-3.5" />
            <span>خريطة الرياضيات المتقطعة المتكاملة</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white">
            اختبارات ومحاور ذات صلة وثيقة بهذا الموضوع
          </h3>
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mt-1">
            واصل تعميق فهمك في الرياضيات المتقطعة عبر الانتقال التفاعلي بين الهياكل والشبكات والخوارزميات:
          </p>
        </div>

        <button
          onClick={() => navigateTo('/domain/advanced-math/discrete-mathematics')}
          className="px-4 py-2 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white transition-all shadow-sm flex items-center gap-1 self-start sm:self-auto"
        >
          <BookOpen className="w-4 h-4" />
          <span>فهرس موضوعات الرياضيات المتقطعة</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        {otherTests.map((t) => (
          <div
            key={t.id}
            onClick={() => navigateTo(t.url)}
            className={`cursor-pointer group rounded-xl border p-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md ${
              isDark
                ? 'border-gray-800 bg-gray-900/40 hover:bg-gray-800/60 hover:border-indigo-500/40'
                : 'border-gray-200/80 bg-white/70 hover:bg-white hover:border-indigo-300'
            }`}
          >
            <div className="flex items-start justify-between gap-2 mb-2">
              <div className="flex items-center gap-2">
                <span className="text-xl">{t.emoji}</span>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-semibold border border-indigo-500/20">
                  {t.mathSymbol}
                </span>
              </div>
              <span
                className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${
                  t.level === 'أساسي'
                    ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-300'
                    : t.level === 'متوسط'
                    ? 'bg-blue-500/10 text-blue-600 dark:text-blue-300'
                    : 'bg-purple-500/10 text-purple-600 dark:text-purple-300'
                }`}
              >
                {t.level}
              </span>
            </div>

            <h4 className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-1">
              {t.title}
            </h4>

            <p className="text-[11px] text-gray-600 dark:text-gray-400 mt-1.5 line-clamp-2 leading-relaxed">
              {t.relationReason}
            </p>

            <div className="mt-3 pt-2 border-t border-black/[0.04] dark:border-white/[0.04] flex items-center justify-between text-[11px] font-semibold text-indigo-600 dark:text-indigo-400">
              <span>ابدأ الاختبار (10 أسئلة)</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1 rotate-180" />
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};
