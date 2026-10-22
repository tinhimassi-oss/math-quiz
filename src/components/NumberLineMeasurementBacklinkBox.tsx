import React from 'react';
import { ArrowRight, BookOpen, Compass, CheckCircle2 } from 'lucide-react';
import { useEyeTheme } from '../context/ThemeContext';
import { navigateTo } from '../navigation/router';

export interface RelatedNumberLineMeasurementQuizInfo {
  id: string;
  title: string;
  emoji: string;
  mathSymbol: string;
  level: 'أساسي' | 'متوسط' | 'متقدم';
  url: string;
  relationReason: string;
}

export const ALL_NUMBER_LINE_MEASUREMENT_TESTS: Record<string, RelatedNumberLineMeasurementQuizInfo> = {
  'whole-numbers-on-number-line': {
    id: 'whole-numbers-on-number-line',
    title: 'اختبار تمثيل الأعداد الكلية على خط الأعداد',
    emoji: '',
    mathSymbol: '0 ── 5 ── 7 ── 10',
    level: 'أساسي',
    url: '/math/number-line-measurement/whole-numbers-on-number-line',
    relationReason: 'الأساس الجوهري لفهم المسافات المتساوية وترتيب الأعداد وتحديد مواقعها بدقة',
  },
  'negative-positive-number-line': {
    id: 'negative-positive-number-line',
    title: 'اختبار الأعداد السالبة والموجبة على خط الأعداد',
    emoji: '',
    mathSymbol: '-5 < 0 < +3',
    level: 'أساسي',
    url: '/math/number-line-measurement/negative-positive-number-line',
    relationReason: 'فهم اتجاهات الحركة يميناً ويساراً وموقع الصفر كمرجع محايد ومقارنة البعد عن الصفر',
  },
  'fractions-decimals-number-line': {
    id: 'fractions-decimals-number-line',
    title: 'اختبار تمثيل الكسور والكسور العشرية على خط الأعداد',
    emoji: '',
    mathSymbol: '0 ─ ¼ ─ ½ ─ ¾ ─ 1',
    level: 'متوسط',
    url: '/math/number-line-measurement/fractions-decimals-number-line',
    relationReason: 'تقسيم الوحدة الواحدة إلى أجزاء متساوية وتمثيل الكسور الاعتيادية والعشرية بدقة',
  },
  'distance-between-points-number-line': {
    id: 'distance-between-points-number-line',
    title: 'اختبار حساب المسافات بين النقاط على خط الأعداد',
    emoji: '',
    mathSymbol: 'd = |b - a| = 7',
    level: 'متوسط',
    url: '/math/number-line-measurement/distance-between-points-number-line',
    relationReason: 'استخدام القيمة المطلقة لحساب المسافة الهندسية الموجبة دائماً بين أي نقطتين',
  },
  'measuring-length-standard-units': {
    id: 'measuring-length-standard-units',
    title: 'اختبار قياس الطول بالوحدات المعيارية (سم، م، كم)',
    emoji: '',
    mathSymbol: '1 م = 100 سم | 1 كم = 1000 م',
    level: 'أساسي',
    url: '/math/number-line-measurement/measuring-length-standard-units',
    relationReason: 'إتقان التحويل بين وحدات الطول المترية بالضرب والقسمة على مضاعفات العشرة',
  },
  'measuring-mass-weight': {
    id: 'measuring-mass-weight',
    title: 'اختبار قياس الكتلة والوزن (جرام، كيلوجرام، طن)',
    emoji: '',
    mathSymbol: '1 كجم = 1000 جم | 1 طن = 1000 كجم',
    level: 'أساسي',
    url: '/math/number-line-measurement/measuring-mass-weight',
    relationReason: 'التحويل المعياري بين وحدات الكتلة وتقدير أوزان الأشياء في الحياة اليومية',
  },
  'measuring-capacity-volume': {
    id: 'measuring-capacity-volume',
    title: 'اختبار قياس السعة والحجم (ملليلتر، لتر)',
    emoji: '',
    mathSymbol: '1 لتر = 1000 مل',
    level: 'أساسي',
    url: '/math/number-line-measurement/measuring-capacity-volume',
    relationReason: 'قياس السوائل وربط اللتر بالمكعبات والتطبيقات المنزلية والصناعية',
  },
  'reading-measurement-tools': {
    id: 'reading-measurement-tools',
    title: 'اختبار قراءة أدوات القياس (المسطرة، الميزان، المخبار)',
    emoji: '',
    mathSymbol: 'قراءة التدريج والتقدير',
    level: 'متوسط',
    url: '/math/number-line-measurement/reading-measurement-tools',
    relationReason: 'تطوير الملاحظة البصرية لعلامات التدريج وتقدير القيم الواقعة بين الخطوط بدقة',
  },
  'elapsed-time-calculation': {
    id: 'elapsed-time-calculation',
    title: 'اختبار حساب الوقت والزمن المنقضي (ساعات، دقائق، ثواني)',
    emoji: '',
    mathSymbol: '8:15 ── 45 دقيقة ── 9:00',
    level: 'متوسط',
    url: '/math/number-line-measurement/elapsed-time-calculation',
    relationReason: 'حساب الفروق الزمنية والتحويل الستيني بين الساعات والدقائق والثواني وخط الزمن',
  },
  'perimeter-and-area-simple-shapes': {
    id: 'perimeter-and-area-simple-shapes',
    title: 'اختبار المحيط والمساحة في الأشكال البسيطة',
    emoji: '',
    mathSymbol: 'المحيط = 2(ل + ض) | المساحة = ل × ض',
    level: 'متوسط',
    url: '/math/number-line-measurement/perimeter-and-area-simple-shapes',
    relationReason: 'التمييز بين الإطار الخارجي (المحيط بوحدات طول) والمساحة السطحية (بوحدات مربعة)',
  },
  'angles-measurement-protractor': {
    id: 'angles-measurement-protractor',
    title: 'اختبار قياس الزوايا واستخدام المنقلة',
    emoji: '',
    mathSymbol: 'حادة < 90° | قائمة = 90° | منفرجة > 90°',
    level: 'متوسط',
    url: '/math/number-line-measurement/angles-measurement-protractor',
    relationReason: 'تصنيف الزوايا واستخدام درجات المنقلة بدقة لحساب الانفراج بين نصفي مستقيمين',
  },
  'number-line-measurement-word-problems': {
    id: 'number-line-measurement-word-problems',
    title: 'اختبار المسائل الكلامية والتطبيقية على القياس وخط الأعداد',
    emoji: '',
    mathSymbol: '-2 + 6 = 4 خطوات',
    level: 'متقدم',
    url: '/math/number-line-measurement/number-line-measurement-word-problems',
    relationReason: 'تطبيق مهارات خط الأعداد والتحويلات الهندسية والزمنية في سيناريوهات واقعية مركبة',
  },
};

const TOPIC_RELATIONS: Record<string, string[]> = {
  'whole-numbers-on-number-line': [
    'negative-positive-number-line',
    'fractions-decimals-number-line',
    'distance-between-points-number-line',
  ],
  'negative-positive-number-line': [
    'whole-numbers-on-number-line',
    'distance-between-points-number-line',
    'number-line-measurement-word-problems',
  ],
  'fractions-decimals-number-line': [
    'whole-numbers-on-number-line',
    'reading-measurement-tools',
    'measuring-length-standard-units',
  ],
  'distance-between-points-number-line': [
    'whole-numbers-on-number-line',
    'negative-positive-number-line',
    'number-line-measurement-word-problems',
  ],
  'measuring-length-standard-units': [
    'measuring-mass-weight',
    'measuring-capacity-volume',
    'reading-measurement-tools',
    'perimeter-and-area-simple-shapes',
  ],
  'measuring-mass-weight': [
    'measuring-length-standard-units',
    'measuring-capacity-volume',
    'reading-measurement-tools',
  ],
  'measuring-capacity-volume': [
    'measuring-mass-weight',
    'measuring-length-standard-units',
    'reading-measurement-tools',
  ],
  'reading-measurement-tools': [
    'measuring-length-standard-units',
    'fractions-decimals-number-line',
    'angles-measurement-protractor',
  ],
  'elapsed-time-calculation': [
    'whole-numbers-on-number-line',
    'distance-between-points-number-line',
    'number-line-measurement-word-problems',
  ],
  'perimeter-and-area-simple-shapes': [
    'measuring-length-standard-units',
    'angles-measurement-protractor',
    'number-line-measurement-word-problems',
  ],
  'angles-measurement-protractor': [
    'perimeter-and-area-simple-shapes',
    'reading-measurement-tools',
    'number-line-measurement-word-problems',
  ],
  'number-line-measurement-word-problems': [
    'distance-between-points-number-line',
    'perimeter-and-area-simple-shapes',
    'elapsed-time-calculation',
  ],
};

interface NumberLineMeasurementBacklinkBoxProps {
  currentTestId: string;
  className?: string;
}

export const NumberLineMeasurementBacklinkBox: React.FC<NumberLineMeasurementBacklinkBoxProps> = ({
  currentTestId,
  className = '',
}) => {
  const { themeClasses } = useEyeTheme();
  const relatedKeys = TOPIC_RELATIONS[currentTestId] || [
    'whole-numbers-on-number-line',
    'measuring-length-standard-units',
    'distance-between-points-number-line',
  ];

  const relatedQuizzes = relatedKeys
    .map((key) => ALL_NUMBER_LINE_MEASUREMENT_TESTS[key])
    .filter(Boolean);

  const handleNavigate = (url: string, e: React.MouseEvent) => {
    e.preventDefault();
    navigateTo(url);
  };

  return (
    <aside
      className={`p-6 sm:p-8 rounded-2xl border ${themeClasses.border} ${themeClasses.cardBg} space-y-6 shadow-2xs text-right ${className}`}
      aria-label="اختبارات متصلة في خط الأعداد والقياس"
    >
      <div className="flex items-center justify-between border-b border-black/[0.06] dark:border-white/[0.08] pb-4">
        <div className="flex items-center gap-2 text-sm font-bold text-[#127052] dark:text-[#5EB5A1]">
          <Compass className="w-5 h-5 text-[#127052] dark:text-[#5EB5A1]" />
          <span>المسار التعليمي المرتبط | خط الأعداد والقياس</span>
        </div>
        <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#127052]/10 text-[#127052] dark:text-[#5EB5A1] dark:bg-[#127052]/20">
          منهج متكامل (12 اختباراً)
        </span>
      </div>

      <div className="space-y-2">
        <h3 className={`text-base sm:text-lg font-bold ${themeClasses.textPrimary}`}>
          اختبارات ومهارات موصى بها بعد هذا الاختبار:
        </h3>
        <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
          التمكن في القياس وخط الأعداد يتطلب الربط المستمر بين التمثيل المكاني للأرقام، والتحويل السلس بين الوحدات المترية، وقراءة الأدوات بدقة وحساب المساحات والزوايا.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {relatedQuizzes.map((quiz) => (
          <a
            key={quiz.id}
            href={quiz.url}
            onClick={(e) => handleNavigate(quiz.url, e)}
            className={`group block p-4 rounded-xl border transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md ${themeClasses.border} hover:border-[#127052] dark:hover:border-[#5EB5A1] bg-black/[0.01] dark:bg-white/[0.02]`}
          >
            <div className="flex items-start justify-between mb-2">
              <span className="text-2xl p-1.5 rounded-lg bg-black/[0.03] dark:bg-white/[0.05]">
                {quiz.emoji}
              </span>
              <span
                className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${
                  quiz.level === 'أساسي'
                    ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                    : quiz.level === 'متوسط'
                    ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400'
                    : 'bg-rose-500/10 text-rose-600 dark:text-rose-400'
                }`}
              >
                {quiz.level}
              </span>
            </div>

            <h4
              className={`text-sm font-bold mb-1.5 group-hover:text-[#127052] dark:group-hover:text-[#5EB5A1] transition-colors ${themeClasses.textPrimary} line-clamp-1`}
            >
              {quiz.title}
            </h4>

            <div className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400 mb-2 dir-ltr text-right">
              {quiz.mathSymbol}
            </div>

            <p className={`text-xs ${themeClasses.textSecondary} leading-normal mb-3 line-clamp-2`}>
              {quiz.relationReason}
            </p>

            <div className="flex items-center gap-1 text-xs font-semibold text-[#127052] dark:text-[#5EB5A1] group-hover:underline">
              <span>بدء الاختبار الآن</span>
              <ArrowRight className="w-3.5 h-3.5 rotate-180 transform transition-transform group-hover:-translate-x-1" />
            </div>
          </a>
        ))}
      </div>

      {/* Hub Link */}
      <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs border-t border-black/[0.06] dark:border-white/[0.08]">
        <div className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400">
          <BookOpen className="w-4 h-4 text-[#127052] dark:text-[#5EB5A1]" />
          <span>تريد مراجعة المفهوم الشامل للقياس وخط الأعداد؟</span>
        </div>
        <a
          href="/category/number-line-measurement"
          onClick={(e) => handleNavigate('/category/number-line-measurement', e)}
          className="inline-flex items-center gap-1.5 font-bold text-[#127052] dark:text-[#5EB5A1] hover:underline"
        >
          <span>الانتقال إلى دليل خط الأعداد والقياس الشامل</span>
          <ArrowRight className="w-3.5 h-3.5 rotate-180" />
        </a>
      </div>
    </aside>
  );
};
