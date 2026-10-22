import React from 'react';
import { ArrowRight, BookOpen, Layers } from 'lucide-react';
import { useEyeTheme } from '../context/ThemeContext';
import { navigateTo } from '../navigation/router';

export interface RelatedAppIntegrationQuizInfo {
  id: string;
  title: string;
  emoji: string;
  mathSymbol: string;
  level: 'أساسي' | 'متوسط' | 'متقدم';
  url: string;
  relationReason: string;
}

export const ALL_APPLICATIONS_OF_INTEGRATION_TESTS: Record<
  string,
  RelatedAppIntegrationQuizInfo
> = {
  'area-under-curve-x-axis': {
    id: 'area-under-curve-x-axis',
    title: 'حساب المساحة المحصورة بين منحنى ومحور السينات (x-axis)',
    emoji: '',
    mathSymbol: 'A = ∫ₐᵇ |f(x)| dx',
    level: 'متوسط',
    url: '/domain/calculus/applications-of-integration/area-under-curve-x-axis',
    relationReason: 'تحديد جذور الدالة ومكاملة القيمة المطلقة لضمان مساحات موجبة هندسياً',
  },
  'area-between-two-curves': {
    id: 'area-between-two-curves',
    title: 'حساب المساحة المحصورة بين منحنيين متقاطعين',
    emoji: '',
    mathSymbol: 'A = ∫ [f(x) - g(x)] dx',
    level: 'متوسط',
    url: '/domain/calculus/applications-of-integration/area-between-two-curves',
    relationReason: 'إيجاد نقاط التقاطع كحدود تكامل وطرح المنحنى الأدنى من الأعلى',
  },
  'disk-method-volumes': {
    id: 'disk-method-volumes',
    title: 'حساب حجوم الأجسام الدورانية بطريقة الأقراص',
    emoji: '',
    mathSymbol: 'V = π ∫ [f(x)]² dx',
    level: 'متوسط',
    url: '/domain/calculus/applications-of-integration/disk-method-volumes',
    relationReason: 'تراكم مقاطع عرضية دائرية مصمتة عند الدوران حول محور التماثل',
  },
  'washer-method-volumes': {
    id: 'washer-method-volumes',
    title: 'حساب حجوم الأجسام الدورانية بطريقة الحلقات',
    emoji: '',
    mathSymbol: 'V = π ∫ [R² - r²] dx',
    level: 'متقدم',
    url: '/domain/calculus/applications-of-integration/washer-method-volumes',
    relationReason: 'حساب حجوم المجسمات المجوفة بطرح نصف القطر الداخلي من الخارجي',
  },
  'cylindrical-shells-method': {
    id: 'cylindrical-shells-method',
    title: 'حجوم الأجسام الدورانية بالقشور الأسطوانية',
    emoji: '',
    mathSymbol: 'V = 2π ∫ r(x) h(x) dx',
    level: 'متقدم',
    url: '/domain/calculus/applications-of-integration/cylindrical-shells-method',
    relationReason: 'استخدام القشور الرأسية أو الأفقية لتفادي صعوبة التحويل بالنسبة للمتغير الآخر',
  },
  'arc-length-curves': {
    id: 'arc-length-curves',
    title: 'طول قوس المنحنى (Arc Length)',
    emoji: '',
    mathSymbol: 'L = ∫ √(1 + [f\'(x)]²) dx',
    level: 'متقدم',
    url: '/domain/calculus/applications-of-integration/arc-length-curves',
    relationReason: 'تعميم مبرهنة فيثاغورس على التفاضلات dx و dy لقياس طول المسارات المنحنية',
  },
  'surface-area-revolution': {
    id: 'surface-area-revolution',
    title: 'مساحة السطح الدوراني (Surface Area)',
    emoji: '',
    mathSymbol: 'S = 2π ∫ y √(1 + [y\']²) dx',
    level: 'متقدم',
    url: '/domain/calculus/applications-of-integration/surface-area-revolution',
    relationReason: 'دوران عناصر طول القوس حول محور الدوران لتوليد مساحات السطوح ثلاثية الأبعاد',
  },
  'work-physics-applications': {
    id: 'work-physics-applications',
    title: 'الشغل الفيزيائي وتطبيقاته (Work Done)',
    emoji: '',
    mathSymbol: 'W = ∫ F(x) dx',
    level: 'متوسط',
    url: '/domain/calculus/applications-of-integration/work-physics-applications',
    relationReason: 'حساب الشغل المبذول في النوابض المتغيرة وضخ السوائل من الخزانات ورفع الأثقال',
  },
  'average-value-function': {
    id: 'average-value-function',
    title: 'القيمة المتوسطة للدالة والقيمة الفعالة',
    emoji: '',
    mathSymbol: 'f_avg = 1/(b-a) ∫ₐᵇ f(x) dx',
    level: 'متوسط',
    url: '/domain/calculus/applications-of-integration/average-value-function',
    relationReason: 'مبرهنة القيمة المتوسطة للتكامل وحساب الجهود والتيارات الفعالة RMS',
  },
  'center-of-mass-centroid': {
    id: 'center-of-mass-centroid',
    title: 'مركز الكتلة والمركز الهندسي (Centroid)',
    emoji: '',
    mathSymbol: 'x̄ = M_y / M , ȳ = M_x / M',
    level: 'متقدم',
    url: '/domain/calculus/applications-of-integration/center-of-mass-centroid',
    relationReason: 'عزوم القصور والمساحة ونقطة التوازن الميكانيكية للمناطق المستوية',
  },
  'economic-applications-surplus': {
    id: 'economic-applications-surplus',
    title: 'التطبيقات الاقتصادية للتكامل (فائض المستهلك والمنتج)',
    emoji: '',
    mathSymbol: 'CS = ∫₀^(q₀) [P(q) - P₀] dq',
    level: 'متوسط',
    url: '/domain/calculus/applications-of-integration/economic-applications-surplus',
    relationReason: 'نمذجة توازن السوق والمنفعة الاقتصادية الصافية للمستهلكين والمنتجين',
  },
  'accumulation-real-world-physics': {
    id: 'accumulation-real-world-physics',
    title: 'مسائل التراكم الحياتية والهندسة الفيزيائية',
    emoji: '',
    mathSymbol: 'Q = ∫ₐᵇ r(t) dt',
    level: 'متوسط',
    url: '/domain/calculus/applications-of-integration/accumulation-real-world-physics',
    relationReason: 'حساب الكميات المتراكمة الكلية من معدلات التغير اللحظية (تدفق، شحنة، مسافة)',
  },
};

export const APPLICATIONS_OF_INTEGRATION_RELATIONS: Record<string, string[]> = {
  'area-under-curve-x-axis': [
    'area-between-two-curves',
    'average-value-function',
    'disk-method-volumes',
    'accumulation-real-world-physics',
  ],
  'area-between-two-curves': [
    'area-under-curve-x-axis',
    'washer-method-volumes',
    'cylindrical-shells-method',
    'center-of-mass-centroid',
  ],
  'disk-method-volumes': [
    'washer-method-volumes',
    'cylindrical-shells-method',
    'surface-area-revolution',
    'area-under-curve-x-axis',
  ],
  'washer-method-volumes': [
    'disk-method-volumes',
    'cylindrical-shells-method',
    'area-between-two-curves',
    'surface-area-revolution',
  ],
  'cylindrical-shells-method': [
    'disk-method-volumes',
    'washer-method-volumes',
    'area-between-two-curves',
    'center-of-mass-centroid',
  ],
  'arc-length-curves': [
    'surface-area-revolution',
    'work-physics-applications',
    'area-under-curve-x-axis',
    'accumulation-real-world-physics',
  ],
  'surface-area-revolution': [
    'arc-length-curves',
    'disk-method-volumes',
    'washer-method-volumes',
    'area-under-curve-x-axis',
  ],
  'work-physics-applications': [
    'accumulation-real-world-physics',
    'center-of-mass-centroid',
    'average-value-function',
    'arc-length-curves',
  ],
  'average-value-function': [
    'area-under-curve-x-axis',
    'work-physics-applications',
    'economic-applications-surplus',
    'accumulation-real-world-physics',
  ],
  'center-of-mass-centroid': [
    'area-between-two-curves',
    'cylindrical-shells-method',
    'work-physics-applications',
    'area-under-curve-x-axis',
  ],
  'economic-applications-surplus': [
    'area-between-two-curves',
    'average-value-function',
    'accumulation-real-world-physics',
    'area-under-curve-x-axis',
  ],
  'accumulation-real-world-physics': [
    'work-physics-applications',
    'economic-applications-surplus',
    'average-value-function',
    'area-under-curve-x-axis',
  ],
};

interface ApplicationsOfIntegrationBacklinkBoxProps {
  currentTestId: string;
  onSelectTest?: (testId: string) => void;
  className?: string;
}

export const ApplicationsOfIntegrationBacklinkBox: React.FC<ApplicationsOfIntegrationBacklinkBoxProps> = ({
  currentTestId,
  onSelectTest,
  className = '',
}) => {
  const { themeClasses } = useEyeTheme();

  const relatedIds = APPLICATIONS_OF_INTEGRATION_RELATIONS[currentTestId] || [
    'area-under-curve-x-axis',
    'area-between-two-curves',
    'disk-method-volumes',
    'average-value-function',
  ];

  const relatedTests = relatedIds
    .map((id) => ALL_APPLICATIONS_OF_INTEGRATION_TESTS[id])
    .filter(Boolean);

  const handleTestClick = (url: string, testId: string, e: React.MouseEvent) => {
    e.preventDefault();
    if (onSelectTest) {
      onSelectTest(testId);
    } else {
      navigateTo(url);
    }
  };

  return (
    <div
      className={`rounded-2xl border ${themeClasses.border} ${themeClasses.cardBg} p-5 sm:p-7 shadow-sm transition-all text-right ${className}`}
    >
      <div className="flex items-center justify-between gap-3 pb-4 mb-5 border-b border-black/5 dark:border-white/5">
        <div>
          <h3 className={`text-xl font-bold ${themeClasses.textPrimary}`}>
            اختبارات تفاعلية مترابطة في تطبيقات التكامل
          </h3>
          <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} mt-1`}>
            التطبيقات الهندسية والفيزيائية للتكامل متكاملة ومترابطة؛ عزز فهمك بالانتقال للموضوعات ذات الصلة
          </p>
        </div>
        <div className="w-11 h-11 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
          <Layers className="w-6 h-6" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {relatedTests.map((item) => (
          <a
            key={item.id}
            href={`#${item.url}`}
            onClick={(e) => handleTestClick(item.url, item.id, e)}
            className={`group block p-4 rounded-xl border ${themeClasses.border} hover:border-amber-500/50 hover:bg-amber-500/5 transition-all text-right`}
          >
            <div className="flex items-center justify-between gap-2 mb-2">
              <span className="text-2xl">{item.emoji}</span>
              <span className="text-xs px-2 py-0.5 rounded-full font-medium bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                {item.level}
              </span>
            </div>

            <h4
              className={`font-bold text-sm mb-1 ${themeClasses.textPrimary} group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors`}
            >
              {item.title}
            </h4>

            <p className={`text-xs ${themeClasses.textSecondary} mb-3 leading-relaxed line-clamp-2`}>
              {item.relationReason}
            </p>

            <div className="flex items-center justify-between pt-2 border-t border-black/5 dark:border-white/5 text-xs">
              <span className="font-mono text-amber-600 dark:text-amber-400 font-semibold dir-ltr">
                {item.mathSymbol}
              </span>
              <span className="inline-flex items-center gap-1 text-amber-600 dark:text-amber-400 font-medium group-hover:translate-x-[-3px] transition-transform">
                بدء الاختبار
                <ArrowRight className="w-3 h-3" />
              </span>
            </div>
          </a>
        ))}
      </div>

      {/* Hub backlink button */}
      <div className="mt-5 pt-4 border-t border-black/5 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm">
        <span className={themeClasses.textSecondary}>
          تريد استعراض الخريطة الأكاديمية الشاملة لمنهاج تطبيقات التكامل؟
        </span>
        <a
          href="#/domain/calculus/applications-of-integration"
          onClick={(e) => {
            e.preventDefault();
            navigateTo('/domain/calculus/applications-of-integration');
          }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-600 text-white hover:bg-amber-700 font-medium transition-colors shadow-sm"
        >
          <BookOpen className="w-4 h-4" />
          فهرس منهاج تطبيقات التكامل الـ 12
        </a>
      </div>
    </div>
  );
};
