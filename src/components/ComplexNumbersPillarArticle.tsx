import React from 'react';
import {
  BookOpen,
  Sparkles,
  Award,
  ArrowLeft,
  CheckCircle2,
  Sigma,
  Activity,
  Layers,
  Zap,
  Target,
  Hash,
  Compass,
  Cpu,
  Clock,
} from 'lucide-react';
import { useEyeTheme } from '../context/ThemeContext';

interface ComplexNumbersPillarArticleProps {
  onOpenTest: (testId: string) => void;
}

export const ComplexNumbersPillarArticle: React.FC<ComplexNumbersPillarArticleProps> = ({
  onOpenTest,
}) => {
  const { themeClasses } = useEyeTheme();

  return (
    <article
      className={`rounded-2xl border ${themeClasses.border} ${themeClasses.cardBg} p-6 sm:p-10 shadow-sm transition-all text-right space-y-8 leading-relaxed`}
    >
      {/* Header Banner */}
      <div className="border-b border-black/5 dark:border-white/5 pb-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-500/20 mb-3">
          <BookOpen className="w-4 h-4" />
          المقالة المرجعية الكبرى · بوابة الأعداد المركبة والتحليل العقدي
        </div>
        <h1 className={`text-2xl sm:text-3xl font-extrabold ${themeClasses.textPrimary}`}>
          الدليل الأكاديمي الشامل للأعداد المركبة: من مفهوم الوحدة التخيلية ومستوى أرغاند إلى صيغة أويلر ونظرية ديموافر وتطبيقات الدوائر الكهربائية
        </h1>
        <p className={`text-sm sm:text-base ${themeClasses.textSecondary} mt-3 leading-relaxed`}>
          استكشاف نظري وتطبيقي معمق لمفهوم العدد التخيلي i ودورة القوى الرباعية، الصورة القياسية a + bi، جبر العمليات الأساسية،
          المرافق المركب والقسمة بإنطاق المقام، المقياس والسعة والتمثيل الهندسي في مستوى أرغاند، التحويل القطبي والمثلثي،
          صيغة أويلر الخالدة e^(iθ)، نظرية ديموافر لحساب القوى والجذور النونية، حل المعادلات في ℂ، وصولاً إلى تطبيقات المعاوقة
          في دوائر التيار المتردد وميكانيكا الكم.
        </p>
      </div>

      {/* Section 1: Historical evolution and conceptual breakthrough */}
      <section className="space-y-3">
        <h2 className={`text-lg sm:text-xl font-bold ${themeClasses.textPrimary} flex items-center gap-2`}>
          <span className="text-cyan-600 dark:text-cyan-400">1.</span>
          الثورة المفاهيمية للأعداد المركبة: كيف قاد البحث عن حلول المعادلات إلى اكتشاف فضاء الأعداد التخيلية؟
        </h2>
        <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
          لم تنشأ الأعداد المركبة (Complex Numbers) من الترف الفكري، بل كانت استجابة ملحة لعجز منظومة الأعداد الحقيقية عن تفسير الجذور السالبة في المعادلات الجبرية.
          ففي القرن السادس عشر، وأثناء محاولة علماء الرياضيات الإيطاليين أمثال جيرولامو كاردانو ورافائيل بومبيلي حل المعادلة التكعيبية العامة،
          اصطدموا بما عُرف بـ "الحالة غير القابلة للاختزال" (Casus Irreducibilis)، حيث تظهر جذور تكعيبية لكميات سالبة تعطي عند دمجها حلولاً حقيقية واضحة للعيان!
          كانت تلك اللحظة التاريخية التي فرضت الاعتراف بوجود كائنات رياضية جديدة تتجاوز خط الأعداد المستمر.
        </p>
        <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
          تتابعت جهود العباقرة بعد ذلك: اقترح ليونهارت أويلر الرمز العالمي i للدلالة على √(-1) واكتشف صيغته الأسية الأسطورية،
          وجسد جان روبرت أرغاند وكارل فريدريش غاوس الأعداد المركبة كنقاط ومتجهات في المستوى الثنائي، مانحين إياها شرعية هندسية مطلقة وبديهية.
          اليوم، تُعد الأعداد المركبة الحقل المغلق جبرياً ℂ، الذي تنص النظرية الأساسية في الجبر على أن كل كثيرة حدود فيه من الدرجة n تمتلك n من الجذور بالتمام والكمال.
        </p>
      </section>

      {/* Section 2: The Four Faces of a Complex Number */}
      <section className="space-y-3">
        <h2 className={`text-lg sm:text-xl font-bold ${themeClasses.textPrimary} flex items-center gap-2`}>
          <span className="text-cyan-600 dark:text-cyan-400">2.</span>
          الأوجه الأربعة للعدد المركب: التوافق بين الجبر والهندسة والدوال المتسامية
        </h2>
        <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
          من أعظم سمات العدد المركب قدرته على التحول بين أربعة تمثيلات متكافئة رياضياً، يخدم كل منها غرضاً حسابياً محدداً:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          <div className={`p-4 rounded-xl border ${themeClasses.border} bg-cyan-500/[0.03] space-y-2`}>
            <div className="flex items-center gap-2 font-bold text-sm text-cyan-700 dark:text-cyan-300">
              <Hash className="w-4 h-4" />
              1. الصورة القياسية (الديكارتية): z = a + bi
            </div>
            <p className={`text-xs ${themeClasses.textSecondary} leading-relaxed`}>
              تفصل العدد إلى جزء حقيقي Re(z) = a وجزء تخيلي Im(z) = b. هي الأمثل لعمليات الجمع والطرح المباشرة بدمج الحدود المتشابهة.
            </p>
          </div>

          <div className={`p-4 rounded-xl border ${themeClasses.border} bg-cyan-500/[0.03] space-y-2`}>
            <div className="flex items-center gap-2 font-bold text-sm text-cyan-700 dark:text-cyan-300">
              <Compass className="w-4 h-4" />
              2. التمثيل المتجهي (مستوى أرغاند): v = (a, b)
            </div>
            <p className={`text-xs ${themeClasses.textSecondary} leading-relaxed`}>
              يمثل العدد كمتجه موضع ينطلق من نقطة الأصل. يمنح العمليات معنى فيزيائياً؛ فالجمع هو محصلة متوازي الأضلاع، والضرب في i هو دوران بزاوية 90°.
            </p>
          </div>

          <div className={`p-4 rounded-xl border ${themeClasses.border} bg-cyan-500/[0.03] space-y-2`}>
            <div className="flex items-center gap-2 font-bold text-sm text-cyan-700 dark:text-cyan-300">
              <Activity className="w-4 h-4" />
              3. الصورة المثلثية (القطبية): z = r(cos θ + i sin θ)
            </div>
            <p className={`text-xs ${themeClasses.textSecondary} leading-relaxed`}>
              ترتكز على المقياس r = √(a² + b²) والسعة θ. تحول ضرب الأعداد إلى ضرب المقاييس وجمع الزوايا، وقسمتها إلى قسمة المقاييس وطرح الزوايا.
            </p>
          </div>

          <div className={`p-4 rounded-xl border ${themeClasses.border} bg-cyan-500/[0.03] space-y-2`}>
            <div className="flex items-center gap-2 font-bold text-sm text-cyan-700 dark:text-cyan-300">
              <Zap className="w-4 h-4" />
              4. الصورة الأسية (صيغة أويلر): z = r e^(iθ)
            </div>
            <p className={`text-xs ${themeClasses.textSecondary} leading-relaxed`}>
              الربط الأعمق بين الجبر والتحليل. تجعل رفع القوى والجذور وتفاضل وتكامل الدوال التذبذبية يخضع لقوانين الأسس الطبيعية المباشرة.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Navigation Grid of the 12 Quizzes */}
      <section className="space-y-4 pt-2">
        <h2 className={`text-lg sm:text-xl font-bold ${themeClasses.textPrimary} flex items-center gap-2`}>
          <span className="text-cyan-600 dark:text-cyan-400">3.</span>
          خريطة الاختبارات التفاعلية الـ 12 الممنهجة في الأعداد المركبة
        </h2>
        <p className={`text-xs sm:text-sm ${themeClasses.textSecondary}`}>
          صممت هذه الاختبارات لتبني الملكة الرياضية لدى الطالب والباحث من البدايات التأسيسية لقوى i وحتى تطبيقات المعاوقة والفيزياء الحديثة:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {[
            { id: 'imaginary-unit-powers', title: '1. مفهوم العدد التخيلي i وتبسيط قواه', symbol: 'i¹⁵ = -i', dur: '10 دقائق' },
            { id: 'standard-form-complex-numbers', title: '2. الصورة القياسية والجزء الحقيقي والتخيلي', symbol: 'z = 7 - 4i', dur: '10 دقائق' },
            { id: 'complex-basic-operations', title: '3. العمليات الأساسية: الجمع والطرح والضرب', symbol: '(3+2i)(1-4i)', dur: '10 دقائق' },
            { id: 'complex-conjugate-division', title: '4. المرافق المركب وقسمة الأعداد المركبة', symbol: 'z̄ = a - bi', dur: '12 دقيقة' },
            { id: 'modulus-argument-complex', title: '5. القيمة المطلقة (المقياس) والسعة', symbol: 'r = |z|, θ', dur: '12 دقيقة' },
            { id: 'argand-plane-representation', title: '6. التمثيل البياني في مستوى أرغاند', symbol: 'z ∈ ℂ (x, y)', dur: '10 دقائق' },
            { id: 'polar-trigonometric-form', title: '7. الصورة القطبية والمثلثية للعدد المركب', symbol: 'r(cos θ + i sin θ)', dur: '12 دقيقة' },
            { id: 'exponential-form-euler', title: '8. الصورة الأسية وصيغة أويلر الخالدة', symbol: 'e^(iπ) + 1 = 0', dur: '10 دقائق' },
            { id: 'de-moivre-theorem-powers', title: '9. نظرية ديموافر ورفع الأعداد لقوة n', symbol: '(1 + i)⁸ = 16', dur: '12 دقيقة' },
            { id: 'roots-of-complex-numbers', title: '10. الجذور النونية وتناظر مضلعات الوحدة', symbol: 'w_k = r^(1/n) cis', dur: '12 دقيقة' },
            { id: 'complex-quadratic-cubic-equations', title: '11. حل المعادلات ذات الجذور المركبة', symbol: 'x² - 2x + 5 = 0', dur: '12 دقيقة' },
            { id: 'complex-numbers-applications-circuits', title: '12. المسائل التطبيقية والدوائر الكهربائية', symbol: 'Z = R + jX', dur: '12 دقيقة' },
          ].map((item) => (
            <div
              key={item.id}
              onClick={() => onOpenTest(item.id)}
              className={`p-3.5 rounded-xl border ${themeClasses.border} hover:border-cyan-500/50 cursor-pointer transition-all hover:-translate-y-0.5 bg-black/[0.02] dark:bg-white/[0.02] flex items-center justify-between group`}
            >
              <div className="space-y-1">
                <span className="text-xs font-bold text-gray-900 dark:text-gray-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors block">
                  {item.title}
                </span>
                <div className="flex items-center gap-2 text-[10px] text-gray-600 dark:text-gray-400">
                  <span className="font-mono bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 px-1.5 py-0.5 rounded">
                    {item.symbol}
                  </span>
                  <span>• {item.dur}</span>
                </div>
              </div>
              <ArrowLeft className="w-4 h-4 text-gray-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors group-hover:-translate-x-1" />
            </div>
          ))}
        </div>
      </section>

      {/* Section 4: Deep Comparative Matrix */}
      <section className="space-y-3 pt-2">
        <h2 className={`text-lg sm:text-xl font-bold ${themeClasses.textPrimary} flex items-center gap-2`}>
          <span className="text-cyan-600 dark:text-cyan-400">4.</span>
          مصفوفة المقارنة المنهجية: الصيغ والعمليات والقوانين الرياضية
        </h2>
        <div className="overflow-x-auto">
          <table className={`w-full text-xs text-right border ${themeClasses.border} rounded-xl overflow-hidden`}>
            <thead className="bg-cyan-500/10 text-cyan-900 dark:text-cyan-200">
              <tr>
                <th className="p-3">المفهوم الرياضي</th>
                <th className="p-3">الصيغة / المعادلة الحاكمة</th>
                <th className="p-3">المعنى الهندسي / التفسير</th>
                <th className="p-3">أبرز التطبيقات</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-black/[0.05] dark:divide-white/[0.05]">
              <tr>
                <td className="p-3 font-bold">الوحدة التخيلية i</td>
                <td className="p-3 font-mono text-cyan-600 dark:text-cyan-400">i² = -1, iⁿ = i^(n mod 4)</td>
                <td className="p-3">دوران بزاوية 90° في المستوى المركب</td>
                <td className="p-3">توسيع الحقل الجبري ℝ إلى ℂ</td>
              </tr>
              <tr>
                <td className="p-3 font-bold">المرافق المركب z̄</td>
                <td className="p-3 font-mono text-cyan-600 dark:text-cyan-400">z̄ = a - bi, z·z̄ = a² + b²</td>
                <td className="p-3">انعكاس مرآوي حول المحور الحقيقي الأفقي</td>
                <td className="p-3">إنطاق المقامات، استخراج المقادير القياسية الحقيقية</td>
              </tr>
              <tr>
                <td className="p-3 font-bold">المقياس والسعة</td>
                <td className="p-3 font-mono text-cyan-600 dark:text-cyan-400">r = √(a² + b²), θ = Arg(z)</td>
                <td className="p-3">المسافة عن الأصل وزاوية الاتجاه الموجهة</td>
                <td className="p-3">الإحداثيات القطبية وتحليل المتجهات</td>
              </tr>
              <tr>
                <td className="p-3 font-bold">صيغة أويلر</td>
                <td className="p-3 font-mono text-cyan-600 dark:text-cyan-400">e^(iθ) = cos θ + i sin θ</td>
                <td className="p-3">الحركة المنتظمة على محيط دائرة الوحدة</td>
                <td className="p-3">تحويل فورييه، ميكانيكا الكم، دوائر الرنين</td>
              </tr>
              <tr>
                <td className="p-3 font-bold">نظرية ديموافر</td>
                <td className="p-3 font-mono text-cyan-600 dark:text-cyan-400">[r cis θ]ⁿ = rⁿ cis(nθ)</td>
                <td className="p-3">مضاعفة زاوية الدوران n مرة ورفع المقياس</td>
                <td className="p-3">حساب القوى الكبرى ومتطابقات حساب المثلثات</td>
              </tr>
              <tr>
                <td className="p-3 font-bold">الجذور النونية</td>
                <td className="p-3 font-mono text-cyan-600 dark:text-cyan-400">w_k = r^(1/n) cis((θ+2kπ)/n)</td>
                <td className="p-3">رؤوس مضلع منتظم ذي n من الأضلاع على دائرة</td>
                <td className="p-3">خوارزميات FFT، تقسيم الترددات، التناظر البلوري</td>
              </tr>
              <tr>
                <td className="p-3 font-bold">المعاوقة الكهربائية</td>
                <td className="p-3 font-mono text-cyan-600 dark:text-cyan-400">Z = R + jX, V = I · Z</td>
                <td className="p-3">متجه طوري يدمج المقاومة وزاوية فرق الطور</td>
                <td className="p-3">شبكات الطاقة الكهربائية، الاتصالات اللاسلكية</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 5: Engineering & Modern Physics Applications */}
      <section className="space-y-3 pt-2">
        <h2 className={`text-lg sm:text-xl font-bold ${themeClasses.textPrimary} flex items-center gap-2`}>
          <span className="text-cyan-600 dark:text-cyan-400">5.</span>
          الأعداد المركبة في قلب التكنولوجيا الحديثة والفيزياء النظرية
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className={`p-4 rounded-xl border ${themeClasses.border} space-y-2`}>
            <div className="font-bold text-sm text-gray-900 dark:text-white flex items-center gap-2">
              <Cpu className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
              1. هندسة الدوائر والاتصالات اللاسلكية
            </div>
            <p className={`text-xs ${themeClasses.textSecondary} leading-relaxed`}>
              في شبكات التيار المتردد (AC)، يحل المتجه الطوري المركب (Phasor) محل المعادلات التفاضلية المعقدة،
              حيث تتحول مشتقات الجهد والتيار إلى عمليات ضرب بسيطة في jω. وفي معالجة الإشارات، تتيح الأعداد المركبة
              تضمين التردد والطور في إشارات QAM المستخدمة في شبكات 4G و 5G و Wi-Fi.
            </p>
          </div>

          <div className={`p-4 rounded-xl border ${themeClasses.border} space-y-2`}>
            <div className="font-bold text-sm text-gray-900 dark:text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
              2. ميكانيكا الكم والفيزياء دون الذرية
            </div>
            <p className={`text-xs ${themeClasses.textSecondary} leading-relaxed`}>
              على خلاف الفيزياء الكلاسيكية، فإن الأعداد المركبة عنصر بنيوي حتمي في ميكانيكا الكم. فدالة الموجة ψ
              التي تصف حالة الإلكترون هي دالة مركبة بالكامل، وتحتوي معادلة شرودنجر الأساسية iℏ ∂ψ/∂t = Hψ
              على الوحدة التخيلية i، مما يضمن انحفاظ الاحتمالية ووحدانية التطور الزمني.
            </p>
          </div>
        </div>
      </section>

      {/* Section 6: Academic Conclusion */}
      <section className="space-y-3 pt-2 border-t border-black/5 dark:border-white/5">
        <h2 className={`text-lg sm:text-xl font-bold ${themeClasses.textPrimary} flex items-center gap-2`}>
          <Award className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
          الخلاصة الأكاديمية والتوصيات التربوية للمتعلمين
        </h2>
        <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
          إن دراسة الأعداد المركبة تمثل حلقة الوصل الذهبية بين الجبر الخطي، وحساب المثلثات، والتفاضل والتكامل، والفيزياء التطبيقية.
          لتحقيق الفهم الأكاديمي العميق، يُنصح دائماً بربط كل عملية جبرية (كالضرب أو الترافق أو إيجاد الجذور) بنظيرها الهندسي البصري في مستوى أرغاند وصورة أويلر.
          ندعوك لخوض الاختبارات الـ 12 المتاحة أعلاه بترتيبها المنهجي، حيث ستجد في كل اختبار شروحات رياضية وتلميحات إرشادية تساعدك على ترسيخ المعرفة وتحقيق الإتقان التام.
        </p>
      </section>
    </article>
  );
};
