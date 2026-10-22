import React from 'react';
import { ArrowRight, BookOpen, Layers } from 'lucide-react';
import { useEyeTheme } from '../context/ThemeContext';
import { navigateTo } from '../navigation/router';

export interface RelatedLinearAlgebraQuizInfo {
  id: string;
  title: string;
  emoji: string;
  mathSymbol: string;
  level: 'أساسي' | 'متوسط' | 'متقدم';
  url: string;
  relationReason: string;
}

export const ALL_LINEAR_ALGEBRA_TESTS: Record<string, RelatedLinearAlgebraQuizInfo> = {
  'vectors-operations': {
    id: 'vectors-operations',
    title: 'المتجهات في المستوى والفضاء والإجراءات الأساسية',
    emoji: '',
    mathSymbol: 'u + v, c·u',
    level: 'أساسي',
    url: '/domain/advanced-math/linear-algebra/vectors-operations',
    relationReason: 'المدخل الأساسي لجمع وطرح المتجهات والضرب السلمي وحساب المعيار ومتجهات الوحدة',
  },
  'dot-cross-product-orthogonality': {
    id: 'dot-cross-product-orthogonality',
    title: 'الضرب القياسي والضرب الاتجاهي والتعامد',
    emoji: '',
    mathSymbol: 'u · v, u × v',
    level: 'متوسط',
    url: '/domain/advanced-math/linear-algebra/dot-cross-product-orthogonality',
    relationReason: 'حساب الزوايا والتعامد والإسقاط العمودي ومساحة متوازي الأضلاع والضرب الاتجاهي في الفضاء',
  },
  'matrix-operations-types': {
    id: 'matrix-operations-types',
    title: 'المصفوفات وأنواعها والعمليات الأساسية',
    emoji: '',
    mathSymbol: 'A + B, A × B',
    level: 'أساسي',
    url: '/domain/advanced-math/linear-algebra/matrix-operations-types',
    relationReason: 'بناء المصفوفات وأنواعها المربعة والقطرية، ضرب المصفوفات، منقول المصفوفة والمصفوفات المتماثلة',
  },
  'determinants-properties-calculation': {
    id: 'determinants-properties-calculation',
    title: 'المحددات وخواصها وحساب محدد الرتبة 2 و 3',
    emoji: '',
    mathSymbol: 'det(A), |A|',
    level: 'متوسط',
    url: '/domain/advanced-math/linear-algebra/determinants-properties-calculation',
    relationReason: 'قاعدة ساروس والعوامل المرافقة وخواص المحددات والتمييز بين المصفوفات المنفردة والقابلة للعكس',
  },
  'matrix-inverse-methods': {
    id: 'matrix-inverse-methods',
    title: 'معكوس المصفوفة وطرق حسابه',
    emoji: '',
    mathSymbol: 'A⁻¹, A A⁻¹ = I',
    level: 'متوسط',
    url: '/domain/advanced-math/linear-algebra/matrix-inverse-methods',
    relationReason: 'صيغة المعكوس 2×2 والمصفوفة الملحقة Adjugate وطريقة جاوس-جوردان لحل المعادلات المصفوفية',
  },
  'cramers-rule-linear-systems': {
    id: 'cramers-rule-linear-systems',
    title: 'أنظمة المعادلات الخطية وحلها بطريقة كرامر',
    emoji: '',
    mathSymbol: 'xᵢ = det(Aᵢ) / det(A)',
    level: 'أساسي',
    url: '/domain/advanced-math/linear-algebra/cramers-rule-linear-systems',
    relationReason: 'الحل الصريح للأنظمة الخطية المربعة بنسب المحددات وتشخيص متى تفشل الطريقة',
  },
  'gaussian-elimination-echelon': {
    id: 'gaussian-elimination-echelon',
    title: 'حل الأنظمة الخطية بالحذف لـ جاوس وجاوس-جوردان',
    emoji: '',
    mathSymbol: 'REF, RREF, [A | b]',
    level: 'متوسط',
    url: '/domain/advanced-math/linear-algebra/gaussian-elimination-echelon',
    relationReason: 'العمليات الصفية الأولية وتحويل المصفوفة الممتدة إلى صيغة REF و RREF والتعويض العكسي',
  },
  'vector-spaces-subspaces': {
    id: 'vector-spaces-subspaces',
    title: 'الفضاءات الشعاعية والفضاءات الجزئية',
    emoji: '',
    mathSymbol: 'V, W ≤ V',
    level: 'متقدم',
    url: '/domain/advanced-math/linear-algebra/vector-spaces-subspaces',
    relationReason: 'المسلمات العشر واختبار الشروط الثلاثة للفضاء الجزئي وفضاء النواة وفضاء الأعمدة',
  },
  'linear-independence-dependence': {
    id: 'linear-independence-dependence',
    title: 'الاستقلال الخطي والارتباط الخطي',
    emoji: '',
    mathSymbol: 'c₁v₁ + ... + cₖvₖ = 0',
    level: 'متوسط',
    url: '/domain/advanced-math/linear-algebra/linear-independence-dependence',
    relationReason: 'اختبار الارتباط الخطي والتوليفات الصفرية والتوازي واختبار المحدد للمتجهات',
  },
  'basis-dimension-vector-spaces': {
    id: 'basis-dimension-vector-spaces',
    title: 'الأساس والبعد للفضاء الشُعاعي',
    emoji: '',
    mathSymbol: 'Span(B)=V, dim(V)',
    level: 'متقدم',
    url: '/domain/advanced-math/linear-algebra/basis-dimension-vector-spaces',
    relationReason: 'توليد الفضاء بمتجهات مستقلة وحساب البعد ومبرهنة الرتبة والنواة Rank + Nullity = n',
  },
  'linear-transformations-matrices': {
    id: 'linear-transformations-matrices',
    title: 'التحويلات الخطية والمصفوفات الممثلة لها',
    emoji: '',
    mathSymbol: 'T(u+v)=T(u)+T(v), [T]',
    level: 'متقدم',
    url: '/domain/advanced-math/linear-algebra/linear-transformations-matrices',
    relationReason: 'المصفوفة القياسية للتحويل [T] ومصفوفات الدوران والانعكاس والنواة والمدى وتركيب التحويلات',
  },
  'eigenvalues-eigenvectors': {
    id: 'eigenvalues-eigenvectors',
    title: 'القيم الذاتية والمتجهات الذاتية',
    emoji: '',
    mathSymbol: 'A v = λ v, det(A - λI) = 0',
    level: 'متقدم',
    url: '/domain/advanced-math/linear-algebra/eigenvalues-eigenvectors',
    relationReason: 'المعادلة المميزة واستخراج القيم والمتجهات الذاتية والتقطير وتطبيقات خوارزمية PageRank',
  },
};

interface LinearAlgebraBacklinkBoxProps {
  currentTestId?: string;
  currentQuizId?: string;
  relatedIds?: string[];
}

export const LinearAlgebraBacklinkBox: React.FC<LinearAlgebraBacklinkBoxProps> = ({
  currentTestId,
  currentQuizId,
  relatedIds,
}) => {
  const { themeClasses } = useEyeTheme();
  const activeId = currentQuizId || currentTestId || '';

  // Select related tests
  let displayTests: RelatedLinearAlgebraQuizInfo[] = [];

  if (relatedIds && relatedIds.length > 0) {
    displayTests = relatedIds
      .map((id) => ALL_LINEAR_ALGEBRA_TESTS[id])
      .filter(Boolean) as RelatedLinearAlgebraQuizInfo[];
  }

  // Fallback to siblings if not enough
  if (displayTests.length < 3) {
    const allKeys = Object.keys(ALL_LINEAR_ALGEBRA_TESTS);
    const fallbacks = allKeys
      .filter((k) => k !== activeId && !displayTests.some((t) => t.id === k))
      .slice(0, 4 - displayTests.length)
      .map((k) => ALL_LINEAR_ALGEBRA_TESTS[k]);
    displayTests = [...displayTests, ...fallbacks];
  }

  return (
    <div className={`mt-10 rounded-2xl p-6 ${themeClasses.cardBg} border ${themeClasses.border} shadow-sm`}>
      <div className="flex items-center justify-between pb-4 border-b border-black/[0.06] dark:border-white/[0.06] mb-5">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
            <BookOpen className="w-5 h-5" />
          </div>
          <div>
            <h3 className={`text-base font-bold ${themeClasses.textPrimary}`}>
              اختبارات ومواضيع الجبر الخطي ذات الصلة
            </h3>
            <p className={`text-xs ${themeClasses.textSecondary}`}>
              انتقل بسهولة بين اختبارات المتجهات والمصفوفات والتحويلات الخطية لتعميق فهمك التطبيقي
            </p>
          </div>
        </div>
        <button
          onClick={() => navigateTo('/domain/advanced-math/linear-algebra')}
          className="text-xs font-medium text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1 transition-colors"
        >
          <span>عرض جميع اختبارات الوحدة</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
        {displayTests.map((test) => (
          <div
            key={test.id}
            onClick={() => navigateTo(test.url)}
            className={`p-3.5 rounded-xl border border-black/[0.05] dark:border-white/[0.05] hover:border-emerald-400/50 hover:bg-emerald-500/[0.03] transition-all cursor-pointer group flex flex-col justify-between`}
          >
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xl group-hover:scale-110 transition-transform">{test.emoji}</span>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 font-bold" dir="ltr">
                  {test.mathSymbol}
                </span>
              </div>
              <h4 className={`text-sm font-bold ${themeClasses.textPrimary} group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors`}>
                {test.title}
              </h4>
              <p className={`text-xs ${themeClasses.textSecondary} mt-1 leading-relaxed`}>
                {test.relationReason}
              </p>
            </div>
            <div className="mt-3 pt-2 border-t border-black/[0.04] dark:border-white/[0.04] flex items-center justify-between text-[11px]">
              <span className="text-gray-400 dark:text-gray-500 flex items-center gap-1">
                <Layers className="w-3 h-3" />
                المستوى: {test.level}
              </span>
              <span className="text-emerald-600 dark:text-emerald-400 font-semibold group-hover:translate-x-[-2px] transition-transform flex items-center gap-1">
                بدء الاختبار
                <ArrowRight className="w-3 h-3" />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
