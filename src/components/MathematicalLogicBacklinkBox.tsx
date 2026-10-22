import React from 'react';
import { ArrowRight, BookOpen, Layers } from 'lucide-react';
import { useEyeTheme } from '../context/ThemeContext';
import { navigateTo } from '../navigation/router';

export interface RelatedLogicQuizInfo {
  id: string;
  title: string;
  emoji: string;
  mathSymbol: string;
  level: 'أساسي' | 'متوسط' | 'متقدم';
  url: string;
  relationReason: string;
}

export const ALL_MATHEMATICAL_LOGIC_TESTS: Record<string, RelatedLogicQuizInfo> = {
  'propositions-truth-values': {
    id: 'propositions-truth-values',
    title: 'العبارات الرياضية وقيم الصواب (Propositions and Truth Values)',
    emoji: '',
    mathSymbol: 'p ∈ {T, F}',
    level: 'أساسي',
    url: '/domain/advanced-math/mathematical-logic/propositions-truth-values',
    relationReason: 'المدخل التأسيسي للتمييز بين الجمل الخبرية والإنشائية وفهم مبدأ الثالث المرفوع',
  },
  'negation-conjunction-and': {
    id: 'negation-conjunction-and',
    title: 'أداة النفي وأداة الوصل "و" (Negation & Conjunction)',
    emoji: '',
    mathSymbol: '¬p, p ∧ q',
    level: 'أساسي',
    url: '/domain/advanced-math/mathematical-logic/negation-conjunction-and',
    relationReason: 'إتقان نفي العبارات وقانون نفي النفي وشرط صدق طرفي الوصل معاً',
  },
  'disjunction-or-xor': {
    id: 'disjunction-or-xor',
    title: 'أداة الفصل "أو" الشامل والاستثنائي (OR & XOR)',
    emoji: '',
    mathSymbol: 'p ∨ q, p ⊕ q',
    level: 'أساسي',
    url: '/domain/advanced-math/mathematical-logic/disjunction-or-xor',
    relationReason: 'الفصل بين الشمول التام والاستثناء الحصري وعلاقته بدوائر التشفير والجمع الثنائي',
  },
  'conditional-statements': {
    id: 'conditional-statements',
    title: 'العبارات الشرطية "إذا كان... فإن..." (IF... THEN)',
    emoji: '',
    mathSymbol: 'p → q',
    level: 'متوسط',
    url: '/domain/advanced-math/mathematical-logic/conditional-statements',
    relationReason: 'تشريح بنية الاستلزام الصوري، الصدق التافه للمقدمة الكاذبة، والمتطابقة ¬p ∨ q',
  },
  'biconditional-statements': {
    id: 'biconditional-statements',
    title: 'العبارات الشرطية الثنائية (IF AND ONLY IF)',
    emoji: '',
    mathSymbol: 'p ↔ q',
    level: 'متوسط',
    url: '/domain/advanced-math/mathematical-logic/biconditional-statements',
    relationReason: 'التكافؤ الثنائي المتبادل والشرط الكافي واللازم وصياغة التعاريف الرياضية الدقيقة',
  },
  'converse-inverse-contrapositive': {
    id: 'converse-inverse-contrapositive',
    title: 'العكس والمعكوس والماصدق العكسي (Converse & Contrapositive)',
    emoji: '',
    mathSymbol: 'q → p, ¬q → ¬p',
    level: 'متوسط',
    url: '/domain/advanced-math/mathematical-logic/converse-inverse-contrapositive',
    relationReason: 'التكافؤ الحتمي بين العبارة ومعاكسها الإيجابي ومغالطات إثبات التالي ونفي المقدم',
  },
  'tautology-contradiction-contingency': {
    id: 'tautology-contradiction-contingency',
    title: 'تحصيل الحاصل والتناقض والإمكان (Tautology & Contradiction)',
    emoji: '',
    mathSymbol: 'T, F, Contingent',
    level: 'متوسط',
    url: '/domain/advanced-math/mathematical-logic/tautology-contradiction-contingency',
    relationReason: 'التصنيف الثلاثي الشامل لجداول الصواب وحقائق العقل الضرورية والمستحيلات الصورية',
  },
  'logical-equivalence-demorgan': {
    id: 'logical-equivalence-demorgan',
    title: 'التكافؤ المنطقي وقوانين دي مورجان (De Morgan\'s Laws)',
    emoji: '',
    mathSymbol: '¬(p ∧ q) ≡ ¬p ∨ ¬q',
    level: 'متوسط',
    url: '/domain/advanced-math/mathematical-logic/logical-equivalence-demorgan',
    relationReason: 'قوانين توزيع النفي واختزال العبارات المركبة والتبسيط الجبري للحواسيب والبرمجيات',
  },
  'quantifiers-universal-existential': {
    id: 'quantifiers-universal-existential',
    title: 'المكممات المنطقية: الكلي ∀ والوجودي ∃ (Quantifiers)',
    emoji: '',
    mathSymbol: '∀x P(x), ∃x P(x)',
    level: 'متقدم',
    url: '/domain/advanced-math/mathematical-logic/quantifiers-universal-existential',
    relationReason: 'منطق المحمولات، نفي المكممات، ومفهوم الشاهد الوجودي والمثال المضاد الكلي',
  },
  'rules-of-inference': {
    id: 'rules-of-inference',
    title: 'قواعد الاستدلال والبرهان الصوري (Modus Ponens & Tollens)',
    emoji: '',
    mathSymbol: 'p, p→q ⊢ q',
    level: 'متقدم',
    url: '/domain/advanced-math/mathematical-logic/rules-of-inference',
    relationReason: 'إثبات المقدم، نفي التالي، والقياس الافتراضي والانفصالي لبناء الحجج الصورية السليمة',
  },
  'mathematical-proof-methods': {
    id: 'mathematical-proof-methods',
    title: 'طرق البرهان الرياضي: المباشر، التناقض، والاستقراء',
    emoji: '',
    mathSymbol: 'P(k) ⟹ P(k+1)',
    level: 'متقدم',
    url: '/domain/advanced-math/mathematical-logic/mathematical-proof-methods',
    relationReason: 'برهان الخُلف الكلاسيكي (استحالة التناقض)، وخطوات الاستقراء الرياضي التتابعي',
  },
  'logic-gates-applications': {
    id: 'logic-gates-applications',
    title: 'المسائل الكلامية والدوائر المنطقية (Logic Gates & Applications)',
    emoji: '',
    mathSymbol: 'AND, OR, NOT, NAND',
    level: 'متقدم',
    url: '/domain/advanced-math/mathematical-logic/logic-gates-applications',
    relationReason: 'البوابات الشاملة السيليكونية، دوائر المعالجات، واستعلامات قواعد البيانات وحل الألغاز',
  },
};

interface MathematicalLogicBacklinkBoxProps {
  currentQuizId: string;
}

export const MathematicalLogicBacklinkBox: React.FC<MathematicalLogicBacklinkBoxProps> = ({
  currentQuizId,
}) => {
  const { themeClasses, isDark } = useEyeTheme();

  const otherTests = Object.values(ALL_MATHEMATICAL_LOGIC_TESTS).filter(
    (t) => t.id !== currentQuizId
  );

  return (
    <aside
      className={`rounded-2xl border ${themeClasses.border} ${themeClasses.cardBg} p-6 sm:p-8 shadow-sm transition-all text-right mt-10`}
      aria-label="مسارات التعلم والاختبارات المترابطة في المنطق الرياضي"
    >
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-black/5 dark:border-white/5 pb-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20 mb-2">
            <Layers className="w-3.5 h-3.5" />
            <span>خريطة المنطق الرياضي المتكاملة</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white">
            اختبارات ومحاور ذات صلة وثيقة بهذا الموضوع
          </h3>
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mt-1">
            تابع بناء مهاراتك المنطقية والاستدلالية عبر الانتقال التفاعلي بين المحاور التأسيسية والمتقدمة:
          </p>
        </div>

        <button
          onClick={() => navigateTo('/domain/advanced-math/mathematical-logic')}
          className="px-4 py-2 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white transition-all shadow-sm flex items-center gap-1 self-start sm:self-auto"
        >
          <BookOpen className="w-4 h-4" />
          <span>فهرس موضوعات المنطق الرياضي</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        {otherTests.map((t) => (
          <div
            key={t.id}
            onClick={() => navigateTo(t.url)}
            className={`cursor-pointer group rounded-xl border p-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md ${
              isDark
                ? 'border-gray-800 bg-gray-900/40 hover:bg-gray-800/60 hover:border-emerald-500/40'
                : 'border-gray-200/80 bg-white/70 hover:bg-white hover:border-emerald-300'
            }`}
          >
            <div className="flex items-start justify-between gap-2 mb-2">
              <div className="flex items-center gap-2">
                <span className="text-xl">{t.emoji}</span>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-semibold border border-emerald-500/20">
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

            <h4 className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors line-clamp-1">
              {t.title}
            </h4>

            <p className="text-[11px] text-gray-600 dark:text-gray-400 mt-1.5 line-clamp-2 leading-relaxed">
              {t.relationReason}
            </p>

            <div className="mt-3 pt-2 border-t border-black/[0.04] dark:border-white/[0.04] flex items-center justify-between text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
              <span>ابدأ الاختبار (10 أسئلة)</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1 rotate-180" />
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};
