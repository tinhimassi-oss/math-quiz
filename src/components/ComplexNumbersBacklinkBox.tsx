import React from 'react';
import { ArrowRight, BookOpen, Layers } from 'lucide-react';
import { useEyeTheme } from '../context/ThemeContext';
import { navigateTo } from '../navigation/router';

export interface RelatedComplexNumbersQuizInfo {
  id: string;
  title: string;
  emoji: string;
  mathSymbol: string;
  level: 'أساسي' | 'متوسط' | 'متقدم';
  url: string;
  relationReason: string;
}

export const ALL_COMPLEX_NUMBERS_TESTS: Record<string, RelatedComplexNumbersQuizInfo> = {
  'imaginary-unit-powers': {
    id: 'imaginary-unit-powers',
    title: 'مفهوم العدد التخيلي i وتبسيط قوى i',
    emoji: '',
    mathSymbol: 'i² = -1, iⁿ',
    level: 'أساسي',
    url: '/domain/advanced-math/complex-numbers/imaginary-unit-powers',
    relationReason: 'المدخل الأساسي لحساب قوى i ودورة التكرار الرباعية {i, -1, -i, 1} والأسس السالبة',
  },
  'standard-form-complex-numbers': {
    id: 'standard-form-complex-numbers',
    title: 'الصورة القياسية للعدد المركب والجزء الحقيقي والتخيلي',
    emoji: '',
    mathSymbol: 'z = a + bi',
    level: 'أساسي',
    url: '/domain/advanced-math/complex-numbers/standard-form-complex-numbers',
    relationReason: 'تحديد Re(z) و Im(z) وشروط تساوي عددين مركبين والأعداد التخيلية والحقيقية البحتة',
  },
  'complex-basic-operations': {
    id: 'complex-basic-operations',
    title: 'العمليات الأساسية: الجمع والطرح والضرب',
    emoji: '',
    mathSymbol: 'z₁ ± z₂, z₁ · z₂',
    level: 'أساسي',
    url: '/domain/advanced-math/complex-numbers/complex-basic-operations',
    relationReason: 'تطبيق خاصية التوزيع وجمع الحدود المتشابهة واستبدال i² بـ -1 في الحسابات الجبرية',
  },
  'complex-conjugate-division': {
    id: 'complex-conjugate-division',
    title: 'المرافق المركب وقسمة الأعداد المركبة',
    emoji: '',
    mathSymbol: 'z̄ = a - bi, z₁ / z₂',
    level: 'متوسط',
    url: '/domain/advanced-math/complex-numbers/complex-conjugate-division',
    relationReason: 'إنطاق المقامات بضرب الكسر في مرافق المقام وحساب المعكوس الضربي z⁻¹',
  },
  'modulus-argument-complex': {
    id: 'modulus-argument-complex',
    title: 'القيمة المطلقة (المقياس) والسعة للعدد المركب',
    emoji: '',
    mathSymbol: 'r = |z|, θ = Arg(z)',
    level: 'متوسط',
    url: '/domain/advanced-math/complex-numbers/modulus-argument-complex',
    relationReason: 'حساب المسافة عن الأصل r = √(a²+b²) وزاوية الاتجاه مع محور السينات وضبط الأرباع',
  },
  'argand-plane-representation': {
    id: 'argand-plane-representation',
    title: 'التمثيل البياني للأعداد المركبة (مستوى أرغاند)',
    emoji: '',
    mathSymbol: 'z = (x, y) ∈ ℂ',
    level: 'أساسي',
    url: '/domain/advanced-math/complex-numbers/argand-plane-representation',
    relationReason: 'التمثيل كنقاط ومتجهات وتفسير جمع المتجهات والدوران بـ 90° والانعكاس في المستوى',
  },
  'polar-trigonometric-form': {
    id: 'polar-trigonometric-form',
    title: 'الصورة القطبية والصورة المثلثية للعدد المركب',
    emoji: '',
    mathSymbol: 'r(cos θ + i sin θ)',
    level: 'متوسط',
    url: '/domain/advanced-math/complex-numbers/polar-trigonometric-form',
    relationReason: 'التحويل المتبادل بين الصيغة الجبرية والمثلثية وضرب وقسمة الأعداد بجمع وطرح الزوايا',
  },
  'exponential-form-euler': {
    id: 'exponential-form-euler',
    title: 'الصورة الأسية للعدد المركب وصيغة أويلر',
    emoji: '',
    mathSymbol: 'z = r e^{iθ}',
    level: 'متوسط',
    url: '/domain/advanced-math/complex-numbers/exponential-form-euler',
    relationReason: 'صيغة أويلر e^{iθ} = cos θ + i sin θ ومتطابقة أويلر الأسطورية e^{iπ} + 1 = 0',
  },
  'de-moivre-theorem-powers': {
    id: 'de-moivre-theorem-powers',
    title: 'نظرية ديموافر وتطبيقاتها في رفع الأعداد لقوة',
    emoji: '',
    mathSymbol: '[r cis θ]ⁿ = rⁿ cis(nθ)',
    level: 'متقدم',
    url: '/domain/advanced-math/complex-numbers/de-moivre-theorem-powers',
    relationReason: 'حساب القوى الكبيرة والسالبة وتوليد متطابقات الزوايا المضاعفة cos(nθ) و sin(nθ)',
  },
  'roots-of-complex-numbers': {
    id: 'roots-of-complex-numbers',
    title: 'الجذور النونية للأعداد المركبة',
    emoji: '',
    mathSymbol: 'w_k = r^{1/n} cis((θ+2kπ)/n)',
    level: 'متقدم',
    url: '/domain/advanced-math/complex-numbers/roots-of-complex-numbers',
    relationReason: 'توزيع n من الجذور على دائرة كرؤوس مضلع منتظم وجذور الوحدة النونية وتطبيقات FFT',
  },
  'complex-quadratic-cubic-equations': {
    id: 'complex-quadratic-cubic-equations',
    title: 'حل المعادلات التربيعية والتكعيبية ذات الجذور المركبة',
    emoji: '',
    mathSymbol: 'ax² + bx + c = 0, Δ < 0',
    level: 'متوسط',
    url: '/domain/advanced-math/complex-numbers/complex-quadratic-cubic-equations',
    relationReason: 'استخراج الجذور المترافقة عند المميز السالب ومبرهنة الجذور المترافقة في الجبر',
  },
  'complex-numbers-applications-circuits': {
    id: 'complex-numbers-applications-circuits',
    title: 'المسائل الكلامية والتطبيقية (الدوائر الكهربائية والفيزياء)',
    emoji: '',
    mathSymbol: 'Z = R + jX, V = I · Z',
    level: 'متقدم',
    url: '/domain/advanced-math/complex-numbers/complex-numbers-applications-circuits',
    relationReason: 'حساب المعاوقة الكلية وتوالي وتوازي الدوائر الكهربائية وزاوية الطور وميكانيكا الكم',
  },
};

export const COMPLEX_NUMBERS_RELATIONS: Record<string, string[]> = {
  'imaginary-unit-powers': ['standard-form-complex-numbers', 'complex-basic-operations', 'roots-of-complex-numbers', 'exponential-form-euler'],
  'standard-form-complex-numbers': ['imaginary-unit-powers', 'complex-basic-operations', 'argand-plane-representation', 'complex-conjugate-division'],
  'complex-basic-operations': ['standard-form-complex-numbers', 'complex-conjugate-division', 'complex-numbers-applications-circuits', 'imaginary-unit-powers'],
  'complex-conjugate-division': ['complex-basic-operations', 'modulus-argument-complex', 'complex-quadratic-cubic-equations', 'standard-form-complex-numbers'],
  'modulus-argument-complex': ['polar-trigonometric-form', 'argand-plane-representation', 'exponential-form-euler', 'complex-conjugate-division'],
  'argand-plane-representation': ['modulus-argument-complex', 'polar-trigonometric-form', 'roots-of-complex-numbers', 'standard-form-complex-numbers'],
  'polar-trigonometric-form': ['modulus-argument-complex', 'exponential-form-euler', 'de-moivre-theorem-powers', 'roots-of-complex-numbers'],
  'exponential-form-euler': ['polar-trigonometric-form', 'de-moivre-theorem-powers', 'modulus-argument-complex', 'imaginary-unit-powers'],
  'de-moivre-theorem-powers': ['polar-trigonometric-form', 'roots-of-complex-numbers', 'exponential-form-euler', 'complex-quadratic-cubic-equations'],
  'roots-of-complex-numbers': ['de-moivre-theorem-powers', 'complex-quadratic-cubic-equations', 'polar-trigonometric-form', 'argand-plane-representation'],
  'complex-quadratic-cubic-equations': ['roots-of-complex-numbers', 'complex-conjugate-division', 'standard-form-complex-numbers', 'imaginary-unit-powers'],
  'complex-numbers-applications-circuits': ['complex-basic-operations', 'modulus-argument-complex', 'polar-trigonometric-form', 'complex-conjugate-division'],
};

interface ComplexNumbersBacklinkBoxProps {
  currentQuizId: string;
}

export const ComplexNumbersBacklinkBox: React.FC<ComplexNumbersBacklinkBoxProps> = ({ currentQuizId }) => {
  const { themeClasses, isDark } = useEyeTheme();
  const relatedKeys = COMPLEX_NUMBERS_RELATIONS[currentQuizId] || [
    'imaginary-unit-powers',
    'standard-form-complex-numbers',
    'complex-basic-operations',
    'polar-trigonometric-form',
  ];

  const relatedQuizzes = relatedKeys
    .filter((id) => id !== currentQuizId)
    .map((id) => ALL_COMPLEX_NUMBERS_TESTS[id])
    .filter(Boolean);

  return (
    <div
      className={`rounded-2xl border p-5 sm:p-6 transition-all duration-300 ${
        isDark
          ? 'bg-[#121c24]/90 border-cyan-500/20 shadow-[0_8px_30px_rgb(0,0,0,0.35)]'
          : 'bg-gradient-to-br from-cyan-50/70 via-sky-50/40 to-blue-50/60 border-cyan-200/70 shadow-sm'
      }`}
    >
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-cyan-500/10">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-cyan-500/10 dark:bg-cyan-400/15 flex items-center justify-center text-cyan-600 dark:text-cyan-400">
            <Layers className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-bold text-gray-900 dark:text-white flex items-center gap-2">
              مسار الأعداد المركبة والتحليل العقدي المترابط
            </h3>
            <p className="text-xs text-gray-700 dark:text-gray-300">
              اختبارات تفاعلية ومقالات تأسيسية تغذي المفهوم ذاته من زوايا هندسية وجبرية وتطبيقية متكاملة
            </p>
          </div>
        </div>

        <button
          onClick={() => navigateTo('/domain/advanced-math/complex-numbers')}
          className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 hover:bg-cyan-500/20 transition-colors flex items-center gap-1"
        >
          <span>فهرس الموضوع</span>
          <ArrowRight className="w-3.5 h-3.5 rotate-180" />
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {relatedQuizzes.map((quiz) => (
          <div
            key={quiz.id}
            onClick={() => navigateTo(quiz.url)}
            className={`cursor-pointer rounded-xl p-3.5 border transition-all duration-200 hover:-translate-y-0.5 group flex flex-col justify-between ${
              isDark
                ? 'bg-[#182631]/80 hover:bg-[#1e303e] border-white/5 hover:border-cyan-500/40'
                : 'bg-white hover:bg-cyan-50/50 border-gray-200/80 hover:border-cyan-300 shadow-xs'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xl">{quiz.emoji}</span>
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-700 dark:text-cyan-300">
                  {quiz.mathSymbol}
                </span>
              </div>
              <h4 className="text-xs font-bold text-gray-900 dark:text-gray-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors line-clamp-1 mb-1">
                {quiz.title}
              </h4>
              <p className="text-[11px] text-gray-700 dark:text-gray-300 leading-relaxed line-clamp-2">
                {quiz.relationReason}
              </p>
            </div>

            <div className="mt-3 pt-2 border-t border-black/[0.04] dark:border-white/[0.04] flex items-center justify-between text-[11px]">
              <span className="text-[10px] text-gray-600 dark:text-gray-400">{quiz.level}</span>
              <span className="font-semibold text-cyan-600 dark:text-cyan-400 group-hover:underline flex items-center gap-1">
                بدء الاختبار
                <ArrowRight className="w-3 h-3 rotate-180 transition-transform group-hover:-translate-x-0.5" />
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 pt-3 border-t border-cyan-500/10 flex flex-wrap items-center justify-between gap-2 text-[11px] text-gray-700 dark:text-gray-300">
        <span className="flex items-center gap-1.5">
          <BookOpen className="w-3.5 h-3.5 text-cyan-500" />
          <span>كل اختبار مزود بمقالة أكاديمية تفصيلية لا تقل عن 350 كلمة و10 أسئلة مفسرة خطوة بخطوة.</span>
        </span>
        <button
          onClick={() => navigateTo('/domain/advanced-math')}
          className="text-cyan-600 dark:text-cyan-400 hover:underline font-medium"
        >
          العودة لتصنيف الرياضيات المتقدمة والجامعية ←
        </button>
      </div>
    </div>
  );
};
