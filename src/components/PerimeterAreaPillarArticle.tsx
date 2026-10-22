import React from 'react';
import {
  BookOpen,
  Sparkles,
  TrendingUp,
  Lightbulb,
  CheckCircle2,
  Award,
  Layers,
  Compass,
  ArrowRight,
  Maximize2,
} from 'lucide-react';
import { useEyeTheme } from '../context/ThemeContext';
import { navigateTo } from '../navigation/router';

interface PerimeterAreaPillarArticleProps {
  onOpenTest?: (testId: string) => void;
  className?: string;
}

export const PerimeterAreaPillarArticle: React.FC<PerimeterAreaPillarArticleProps> = ({
  onOpenTest,
  className = '',
}) => {
  const { themeClasses } = useEyeTheme();

  const handleTestClick = (url: string, testId: string, e: React.MouseEvent) => {
    e.preventDefault();
    if (onOpenTest) {
      onOpenTest(testId);
    } else {
      navigateTo(url);
    }
  };

  return (
    <article
      id="perimeter-area-pillar-guide"
      className={`p-6 sm:p-10 rounded-2xl border ${themeClasses.border} ${themeClasses.cardBg} space-y-8 shadow-2xs leading-relaxed text-right ${className}`}
    >
      {/* Pillar Article Header */}
      <header className="space-y-3 pb-6 border-b border-black/[0.06] dark:border-white/[0.08]">
        <div className="flex items-center gap-2 text-xs font-bold text-emerald-600 dark:text-emerald-400">
          <BookOpen className="w-4 h-4" />
          <span>المقالة المرجعية الشاملة (Pillar Guide) | أكاديمية كويزات الرياضيات</span>
        </div>

        <h2 className={`text-xl sm:text-3xl font-extrabold tracking-tight ${themeClasses.textPrimary}`}>
          الدليل المرجعي الشامل للمحيط والمساحة: من قياس السياج الخطي إلى التغطية السطحية والأشكال المركبة والأمثلية الواقعية
        </h2>

        <p className={`text-sm sm:text-base ${themeClasses.textSecondary} leading-relaxed`}>
          مرجع هندسي وتربوي متكامل يغطي 12 مهارة واختباراً مستقلاً في قياسات المحيط والمساحة؛
          صُمم هذا الدليل لتمكين الطلاب والمعلمين من التمييز الدقيق بين الأبعاد الخطية أحادية البعد والمساحات ثنائية البعد المربعة،
          واستيعاب براهين القوانين الإقليدية، وصيغة هيرون، وتطبيقات التحجيم والتسييج والتبليط وحساب المناطق المظللة.
        </p>
      </header>

      {/* Structured Directory / Index of 12 Quizzes */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className={`text-lg font-bold flex items-center gap-2 ${themeClasses.textPrimary}`}>
            <Layers className="w-5 h-5 text-emerald-500" />
            <span>فهرس الاختبارات التفاعلية الـ 12 في هذا المسار</span>
          </h3>
          <span className="text-xs text-gray-500 font-medium">120 مسألة نموذجية مشروحة</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {[
            {
              id: 'perimeter-basic-polygons',
              title: '1. مفهوم المحيط وحسابه للأشكال المضلعة البسيطة',
              url: '/domain/geometry-trigonometry/perimeter-area/perimeter-basic-polygons',
              desc: 'المسار الخطي الخارجي للمثلثات والرباعيات والخماسيات والمضلعات المنتظمة وغير المنتظمة',
              badge: 'أساسي',
            },
            {
              id: 'perimeter-area-square-rectangle',
              title: '2. محيط ومساحة المربع والمستطيل',
              url: '/domain/geometry-trigonometry/perimeter-area/perimeter-area-square-rectangle',
              desc: 'قوانين L×W و 2(L+W) وشبكة الوحدات المربعة والمستطيلات المتكافئة',
              badge: 'أساسي',
            },
            {
              id: 'area-triangles-direct-indirect',
              title: '3. مساحة المثلث (المباشرة وغير المباشرة)',
              url: '/domain/geometry-trigonometry/perimeter-area/area-triangles-direct-indirect',
              desc: 'قانون نصف القاعدة بالارتفاع، صيغة هيرون للأضلاع الثلاثة، وقانون جيب الزاوية المحصورة',
              badge: 'متوسط',
            },
            {
              id: 'area-parallelogram-trapezoid',
              title: '4. مساحة متوازي الأضلاع وشبه المنحرف',
              url: '/domain/geometry-trigonometry/perimeter-area/area-parallelogram-trapezoid',
              desc: 'برهان القص والتركيب لمستطيل متوازي الأضلاع، وقانون متوسط القاعدتين المتوازيتين',
              badge: 'متوسط',
            },
            {
              id: 'perimeter-area-rhombus-kite',
              title: '5. محيط ومساحة المعين وطائرة الورق (Kite)',
              url: '/domain/geometry-trigonometry/perimeter-area/perimeter-area-rhombus-kite',
              desc: 'سحر تعامد الأقطار ½ d₁ d₂، محيط 4s، واستنتاج الأبعاد بفيثاغورس',
              badge: 'متوسط',
            },
            {
              id: 'circle-circumference-arc-length',
              title: '6. محيط الدائرة وطول القوس والدورة الكاملة',
              url: '/domain/geometry-trigonometry/perimeter-area/circle-circumference-arc-length',
              desc: 'أسرار الثابت π، قانون 2πr، زاوية القوس (θ/360)، وحركة العجلات الدورانية',
              badge: 'متوسط',
            },
            {
              id: 'circle-area-sectors',
              title: '7. مساحة الدائرة والقطاعات الدائرية',
              url: '/domain/geometry-trigonometry/perimeter-area/circle-area-sectors',
              desc: 'برهان أرخميدس لمساحة القرص πr²، وحساب شرائح البيتزا والقطاعات الدائرية',
              badge: 'متوسط',
            },
            {
              id: 'find-missing-dimension-perimeter-area',
              title: '8. إيجاد البعد المجهول من المحيط أو المساحة',
              url: '/domain/geometry-trigonometry/perimeter-area/find-missing-dimension-perimeter-area',
              desc: 'الهندسة العكسية وحل المعادلات لاستخراج الطول، العرض، الارتفاع، أو نصف القطر',
              badge: 'متقدم',
            },
            {
              id: 'composite-shapes-perimeter-area',
              title: '9. محيط ومساحة الأشكال المركبة (Composite Shapes)',
              url: '/domain/geometry-trigonometry/perimeter-area/composite-shapes-perimeter-area',
              desc: 'استراتيجيات التجزئة الجمعية والإكمال السلبي، وتتبع الحواف الخارجية حصراً للمحيط',
              badge: 'متقدم',
            },
            {
              id: 'dimension-scaling-perimeter-area',
              title: '10. تأثير تغيير الأبعاد على المحيط والمساحة',
              url: '/domain/geometry-trigonometry/perimeter-area/dimension-scaling-perimeter-area',
              desc: 'معامل المقياس k: التغير الخطي للمحيط بمقدار k والتغير التربيعي للمساحة بمقدار k²',
              badge: 'متقدم',
            },
            {
              id: 'shaded-region-enclosed-areas',
              title: '11. المساحة المظللة والمساحات المحصورة بين الأشكال',
              url: '/domain/geometry-trigonometry/perimeter-area/shaded-region-enclosed-areas',
              desc: 'طرح الأشكال الداخلية من الخارجية: دائرة داخل مربع، حلقة دائرية، وفن الترتيب الذهني',
              badge: 'متقدم',
            },
            {
              id: 'perimeter-area-word-problems',
              title: '12. المسائل الحياتية والتطبيقية على المحيط والمساحة',
              url: '/domain/geometry-trigonometry/perimeter-area/perimeter-area-word-problems',
              desc: 'النمذجة الرياضية لحساب تكاليف التسييج والتبليط والزراعة ومسائل الأمثلية الهندسية',
              badge: 'متقدم',
            },
          ].map((item) => (
            <div
              key={item.id}
              onClick={(e) => handleTestClick(item.url, item.id, e)}
              className={`p-3.5 rounded-xl border ${themeClasses.border} bg-black/[0.01] dark:bg-white/[0.02] hover:bg-emerald-500/5 hover:border-emerald-500/30 transition-all cursor-pointer flex flex-col justify-between group`}
            >
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    item.badge === 'أساسي'
                      ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                      : item.badge === 'متوسط'
                      ? 'bg-blue-500/10 text-blue-600 dark:text-blue-400'
                      : 'bg-purple-500/10 text-purple-600 dark:text-purple-400'
                  }`}>
                    {item.badge}
                  </span>
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {item.title}
                </h4>
                <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-1 line-clamp-2 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-3 pt-2 border-t border-black/[0.04] dark:border-white/[0.04] flex items-center justify-end text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold gap-1 group-hover:translate-x-[-2px] transition-transform">
                <span>دخول الاختبار</span>
                <ArrowRight className="w-3 h-3" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pedagogical Foundations */}
      <section className="space-y-4 pt-4 border-t border-black/[0.06] dark:border-white/[0.08]">
        <h3 className={`text-base sm:text-xl font-bold flex items-center gap-2 ${themeClasses.textPrimary}`}>
          <Sparkles className="w-5 h-5 text-emerald-500" />
          <span>المصفوفة المفاهيمية: الفارق الفيزيائي والهندسي بين المحيط والمساحة</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl border border-blue-500/20 bg-blue-500/5 space-y-2">
            <h4 className="font-bold text-sm text-blue-700 dark:text-blue-300 flex items-center gap-1.5">
              <span> المحيط (Perimeter - 1D)</span>
            </h4>
            <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
              قياس خطي أحادي البعد يعبر عن المسافة المقطوعة حول الإطار الخارجي للشكل. يُقاس بوحدات الطول (م، سم، كم).
              يمثل في الواقع طول الأسوار، حزام البناء، حواف الشاشات، وإطارات اللوحات. قانون المضلعات الثابت هو مجموع أطوال الأضلاع الخارجية فقط.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-emerald-500/20 bg-emerald-500/5 space-y-2">
            <h4 className="font-bold text-sm text-emerald-700 dark:text-emerald-300 flex items-center gap-1.5">
              <span>■ المساحة (Area - 2D)</span>
            </h4>
            <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
              قياس سطحي ثنائي البعد يعبر عن عدد الوحدات المربعة اللازمة لتغطية الحيز الداخلي للشكل المغلق بالكامل. يُقاس بوحدات الطول المربعة (م²، سم²).
              يمثل في الواقع تكلفة البلاط، السجاد، كمية الدهان، وبذر الأعشاب في الملاعب والحدائق.
            </p>
          </div>
        </div>
      </section>

      {/* Comprehensive Formula Reference */}
      <section className="space-y-4 pt-4 border-t border-black/[0.06] dark:border-white/[0.08]">
        <h3 className={`text-base sm:text-xl font-bold flex items-center gap-2 ${themeClasses.textPrimary}`}>
          <Compass className="w-5 h-5 text-emerald-500" />
          <span>جدول القوانين القياسية للمحيط والمساحة في الهندسة المستوية</span>
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full text-xs sm:text-sm border-collapse text-right">
            <thead>
              <tr className="border-b border-black/[0.08] dark:border-white/[0.08] text-gray-500 dark:text-gray-400 font-bold">
                <th className="py-2.5 px-3">الشكل الهندسي</th>
                <th className="py-2.5 px-3">قانون المحيط (P)</th>
                <th className="py-2.5 px-3">قانون المساحة (A)</th>
                <th className="py-2.5 px-3">ملاحظات واشتقاقات</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-black/[0.04] dark:divide-white/[0.04]">
              <tr>
                <td className="py-2.5 px-3 font-bold text-gray-900 dark:text-white">المربع (Square)</td>
                <td className="py-2.5 px-3 font-mono text-emerald-600 dark:text-emerald-400">P = 4s</td>
                <td className="py-2.5 px-3 font-mono text-emerald-600 dark:text-emerald-400">A = s² = ½ d²</td>
                <td className="py-2.5 px-3 text-gray-500">أقطاره متعامدة ومتطابقة وتنصف زواياه</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3 font-bold text-gray-900 dark:text-white">المستطيل (Rectangle)</td>
                <td className="py-2.5 px-3 font-mono text-emerald-600 dark:text-emerald-400">P = 2(L + W)</td>
                <td className="py-2.5 px-3 font-mono text-emerald-600 dark:text-emerald-400">A = L × W</td>
                <td className="py-2.5 px-3 text-gray-500">نصف المحيط = L + W دائماً</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3 font-bold text-gray-900 dark:text-white">المثلث (Triangle)</td>
                <td className="py-2.5 px-3 font-mono text-emerald-600 dark:text-emerald-400">P = a + b + c</td>
                <td className="py-2.5 px-3 font-mono text-emerald-600 dark:text-emerald-400">A = ½ b h</td>
                <td className="py-2.5 px-3 text-gray-500">صيغة هيرون: √[s(s-a)(s-b)(s-c)] للأضلاع الثلاثة</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3 font-bold text-gray-900 dark:text-white">متوازي الأضلاع</td>
                <td className="py-2.5 px-3 font-mono text-emerald-600 dark:text-emerald-400">P = 2(a + b)</td>
                <td className="py-2.5 px-3 font-mono text-emerald-600 dark:text-emerald-400">A = b × h</td>
                <td className="py-2.5 px-3 text-gray-500">الارتفاع h عمودي على القاعدة وليس الضلع المائل</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3 font-bold text-gray-900 dark:text-white">شبه المنحرف (Trapezoid)</td>
                <td className="py-2.5 px-3 font-mono text-emerald-600 dark:text-emerald-400">P = ∑ الأضلاع الأربعة</td>
                <td className="py-2.5 px-3 font-mono text-emerald-600 dark:text-emerald-400">A = ½ (b₁ + b₂) h</td>
                <td className="py-2.5 px-3 text-gray-500">متوسط القاعدتين المتوازيتين × الارتفاع</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3 font-bold text-gray-900 dark:text-white">المعين وطائرة الورق</td>
                <td className="py-2.5 px-3 font-mono text-emerald-600 dark:text-emerald-400">P = 4s (معين)</td>
                <td className="py-2.5 px-3 font-mono text-emerald-600 dark:text-emerald-400">A = ½ d₁ d₂</td>
                <td className="py-2.5 px-3 text-gray-500">يعتمد على تعامد القطرين d₁ ⊥ d₂</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3 font-bold text-gray-900 dark:text-white">الدائرة التامة (Circle)</td>
                <td className="py-2.5 px-3 font-mono text-emerald-600 dark:text-emerald-400">C = 2πr = πd</td>
                <td className="py-2.5 px-3 font-mono text-emerald-600 dark:text-emerald-400">A = π r²</td>
                <td className="py-2.5 px-3 text-gray-500">π ≈ 3.14159 أو 22/7</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3 font-bold text-gray-900 dark:text-white">القطاع الدائري (Sector)</td>
                <td className="py-2.5 px-3 font-mono text-emerald-600 dark:text-emerald-400">L = (θ/360) 2πr</td>
                <td className="py-2.5 px-3 font-mono text-emerald-600 dark:text-emerald-400">A = (θ/360) πr² = ½ L r</td>
                <td className="py-2.5 px-3 text-gray-500">نسبة الزاوية المركزية θ إلى 360°</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Golden Pedagogical Principles */}
      <section className="space-y-4 pt-4 border-t border-black/[0.06] dark:border-white/[0.08]">
        <h3 className={`text-base sm:text-xl font-bold flex items-center gap-2 ${themeClasses.textPrimary}`}>
          <Lightbulb className="w-5 h-5 text-amber-500" />
          <span>الوصايا الذهبية لحل مسائل المحيط والمساحة بامتياز</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="p-4 rounded-xl border border-black/[0.06] dark:border-white/[0.06] bg-black/[0.01] dark:bg-white/[0.01] space-y-1.5">
            <div className="flex items-center gap-2 font-bold text-xs sm:text-sm text-emerald-600 dark:text-emerald-400">
              <CheckCircle2 className="w-4 h-4" />
              <span>1. توحيد وحدات القياس أولاً</span>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
              لا تشرع في أي عملية جمع أو ضرب قبل التأكد من أن جميع الأبعاد معبر عنها بنفس الوحدة (تحويل المتر إلى سم أو العكس).
            </p>
          </div>

          <div className="p-4 rounded-xl border border-black/[0.06] dark:border-white/[0.06] bg-black/[0.01] dark:bg-white/[0.01] space-y-1.5">
            <div className="flex items-center gap-2 font-bold text-xs sm:text-sm text-emerald-600 dark:text-emerald-400">
              <CheckCircle2 className="w-4 h-4" />
              <span>2. التحجيم: الخطي مقابل التربيعي</span>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
              تذكر دائماً: مضاعفة الأبعاد بمعامل k تضاعف المحيط بمقدار k بينما تضاعف المساحة بمقدار k² (تضاعف الضلع مرتين يضاعف المساحة 4 مرات).
            </p>
          </div>

          <div className="p-4 rounded-xl border border-black/[0.06] dark:border-white/[0.06] bg-black/[0.01] dark:bg-white/[0.01] space-y-1.5">
            <div className="flex items-center gap-2 font-bold text-xs sm:text-sm text-emerald-600 dark:text-emerald-400">
              <CheckCircle2 className="w-4 h-4" />
              <span>3. الحذر في الأشكال المركبة</span>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
              تُجمع المساحات الجزئية بحرية كاملة، لكن للمحيط اجمع الحواف الخارجية الظاهرة فقط وتجاهل الخطوط الداخلية الفاصلة.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <footer className="pt-4 border-t border-black/[0.06] dark:border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
            <Award className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-gray-900 dark:text-white">
              جاهز لاختبار مهاراتك الهندسية؟
            </h4>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              اختر أحد الاختبارات الـ 12 المتاحة أعلاه واحصل على شهادة إنجاز رقمية فورية.
            </p>
          </div>
        </div>

        <button
          onClick={(e) => handleTestClick('/domain/geometry-trigonometry/perimeter-area/perimeter-basic-polygons', 'perimeter-basic-polygons', e)}
          className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold text-xs sm:text-sm hover:from-emerald-700 hover:to-teal-700 transition-all shadow-md shadow-emerald-600/20 flex items-center justify-center gap-2"
        >
          <span>ابدأ بالاختبار الأول: مفهوم المحيط</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </footer>
    </article>
  );
};
