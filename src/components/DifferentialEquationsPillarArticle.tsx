import React from 'react';
import { BookOpen, Sparkles, Award, ArrowLeft, CheckCircle2, Sigma, Activity, Cpu, Layers } from 'lucide-react';
import { useEyeTheme } from '../context/ThemeContext';

interface DifferentialEquationsPillarArticleProps {
  onOpenTest: (testId: string) => void;
}

export const DifferentialEquationsPillarArticle: React.FC<DifferentialEquationsPillarArticleProps> = ({
  onOpenTest,
}) => {
  const { themeClasses } = useEyeTheme();

  return (
    <article
      className={`rounded-2xl border ${themeClasses.border} ${themeClasses.cardBg} p-6 sm:p-10 shadow-sm transition-all text-right space-y-8 leading-relaxed`}
    >
      {/* Header Banner */}
      <div className="border-b border-black/5 dark:border-white/5 pb-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border border-indigo-500/20 mb-3">
          <BookOpen className="w-4 h-4" />
          المقالة المرجعية الشاملة · بوابة الرياضيات الأكاديمية
        </div>
        <h1 className={`text-2xl sm:text-3xl font-extrabold ${themeClasses.textPrimary}`}>
          الدليل الأكاديمي الشامل للمعادلات التفاضلية: من الأساسيات إلى أعقد التطبيقات الهندسية والفيزيائية
        </h1>
        <p className={`text-sm sm:text-base ${themeClasses.textSecondary} mt-3 leading-relaxed`}>
          استكشاف عميق ومفصل لعلم المعادلات التفاضلية العادية، رتبها ودرجاتها، طرائق الحل التحليلي الكلاسيكية والمتقدمة،
          وتطبيقاتها الحية في علوم الفضاء، وديناميكا الموائع، والدوائر الكهربائية، وعلم الأوبئة والنمذجة الحيوية.
        </p>
      </div>

      {/* Section 1: Introduction & Historical Evolution */}
      <section className="space-y-3">
        <h2 className={`text-lg sm:text-xl font-bold ${themeClasses.textPrimary} flex items-center gap-2`}>
          <span className="text-indigo-600 dark:text-indigo-400">1.</span>
          مدخل تاريخي: نشأة المعادلات التفاضلية وثورة حساب التغير المستمر
        </h2>
        <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
          وُلد علم المعادلات التفاضلية (Differential Equations) بالتزامن مع انبثاق علم التفاضل والتكامل في أواخر القرن السابع عشر على يد السير إسحاق نيوتن وغوتفريد فيلهلم لايبنتز. أدرك نيوتن بعبقريته الفذة أن القوانين الطبيعية التي تحكم حركة الأجرام السماوية وسقوط الأجسام تحت تأثير الجاذبية لا يمكن التعبير عنها بعلاقات جبرية ساكنة، بل يجب صياغتها كعلاقات تربط "معدلات التغير اللحظية" (التسارع والسرعة) بالموضع الحالي والزمن؛ وقد لخص نيوتن ذلك في رسالته المشهورة: "من المفيد جداً حل المعادلات التفاضلية".
        </p>
        <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
          وسرعان ما أسهم علماء عائلة برنولي (ياكوب ويوهان ودانييل)، ثم عملاق التحليل الرياضي ليونهارت أويلر، والفرنسي جوزيف لويس لاغرانج وبيير-سيمون لابلاس، في تطوير استراتيجيات حل منهجية للمعادلات من الرتبة الأولى والثانية، مما جعل المعادلات التفاضلية اللغة الأساسية التي كُتبت بها كل فروع الفيزياء الحديثة والهندسة الميكانيكية والكهربائية والفضائية.
        </p>
      </section>

      {/* Section 2: Core Classification */}
      <section className="space-y-4">
        <h2 className={`text-lg sm:text-xl font-bold ${themeClasses.textPrimary} flex items-center gap-2`}>
          <span className="text-indigo-600 dark:text-indigo-400">2.</span>
          منظومة التصنيف المعياري: الرتبة، الدرجة، والخطية
        </h2>
        <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
          تعتمد خوارزمية اختيار أسلوب الحل في المعادلات التفاضلية على التشخيص الدقيق لطبيعة المعادلة. تنقسم المعادلات أولاً بحسب عدد المتغيرات المستقلة إلى معادلات عادية (ODE) تحوي مشتقات بالنسبة لمتغير واحد، ومعادلات جزئية (PDE) تتضمن مشتقات جزئية بالنسبة لمتغيرين أو أكثر.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 my-3">
          <div className={`p-4 rounded-xl border ${themeClasses.border} bg-black/[0.01] dark:bg-white/[0.01]`}>
            <h3 className={`text-sm font-bold ${themeClasses.textPrimary} mb-1 flex items-center gap-1.5`}>
              <CheckCircle2 className="w-4 h-4 text-indigo-500" />
              الرتبة (Order)
            </h3>
            <p className={`text-xs ${themeClasses.textSecondary} leading-relaxed`}>
              أعلى رتبة اشتقاق تظهر في المعادلة. تحدد عدد الشروط الابتدائية وعدد الثوابت الاختيارية C في الحل العام.
            </p>
          </div>

          <div className={`p-4 rounded-xl border ${themeClasses.border} bg-black/[0.01] dark:bg-white/[0.01]`}>
            <h3 className={`text-sm font-bold ${themeClasses.textPrimary} mb-1 flex items-center gap-1.5`}>
              <CheckCircle2 className="w-4 h-4 text-indigo-500" />
              الدرجة (Degree)
            </h3>
            <p className={`text-xs ${themeClasses.textSecondary} leading-relaxed`}>
              أعلى أس صحيح موجب مرفوعة له أعلى مشتقة، بعد تخليص المعادلة من الجذور والكسور في المشتقات.
            </p>
          </div>

          <div className={`p-4 rounded-xl border ${themeClasses.border} bg-black/[0.01] dark:bg-white/[0.01]`}>
            <h3 className={`text-sm font-bold ${themeClasses.textPrimary} mb-1 flex items-center gap-1.5`}>
              <CheckCircle2 className="w-4 h-4 text-indigo-500" />
              الخطية (Linearity)
            </h3>
            <p className={`text-xs ${themeClasses.textSecondary} leading-relaxed`}>
              ظهور المتغير التابع ومشتقاته بالأس 1، دون حواصل ضرب مشتركة بينها، ودون دوال غير خطية مطبقة على y.
            </p>
          </div>
        </div>

        <button
          onClick={() => onOpenTest('classification-order-degree')}
          className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1"
        >
          <span>اختبر فهمك لتصنيف الرتبة والدرجة عبر الاختبار التفاعلي رقم 1</span>
          <ArrowLeft className="w-3 h-3" />
        </button>
      </section>

      {/* Section 3: First-Order Techniques Table */}
      <section className="space-y-4">
        <h2 className={`text-lg sm:text-xl font-bold ${themeClasses.textPrimary} flex items-center gap-2`}>
          <span className="text-indigo-600 dark:text-indigo-400">3.</span>
          خريطة تقنيات حل المعادلات التفاضلية من الرتبة الأولى
        </h2>
        <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
          تتنوع استراتيجيات حل معادلات الرتبة الأولى dy/dx = f(x, y) بتنوع بنيتها الجبرية. يلخص الجدول التالي التقنيات الست الأساسية المعيارية وخطواتها:
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-xs sm:text-sm border-collapse border border-black/10 dark:border-white/10 rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-indigo-500/10 text-indigo-900 dark:text-indigo-200">
                <th className="p-2.5 text-right font-bold border border-black/10 dark:border-white/10">النوع / التقنية</th>
                <th className="p-2.5 text-right font-bold border border-black/10 dark:border-white/10">الصيغة القياسية</th>
                <th className="p-2.5 text-right font-bold border border-black/10 dark:border-white/10">خوارزمية وطريقة الحل</th>
                <th className="p-2.5 text-right font-bold border border-black/10 dark:border-white/10">رابط الاختبار</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-black/5 dark:divide-white/5">
              <tr>
                <td className="p-2.5 font-semibold border border-black/10 dark:border-white/10">قابلة للفصل (Separable)</td>
                <td className="p-2.5 font-mono text-xs border border-black/10 dark:border-white/10 dir-ltr text-right">dy/dx = g(x)h(y)</td>
                <td className="p-2.5 text-xs text-slate-600 dark:text-slate-300 border border-black/10 dark:border-white/10">عزل المتغيرات: ∫ dy/h(y) = ∫ g(x) dx + C</td>
                <td className="p-2.5 border border-black/10 dark:border-white/10">
                  <button onClick={() => onOpenTest('separable-differential-equations')} className="text-indigo-600 hover:underline font-bold text-xs">بدء الاختبار</button>
                </td>
              </tr>
              <tr>
                <td className="p-2.5 font-semibold border border-black/10 dark:border-white/10">الخطية (Linear)</td>
                <td className="p-2.5 font-mono text-xs border border-black/10 dark:border-white/10 dir-ltr text-right">y' + P(x)y = Q(x)</td>
                <td className="p-2.5 text-xs text-slate-600 dark:text-slate-300 border border-black/10 dark:border-white/10">عامل التكامل: I(x) = e^(∫ P dx) ⟹ y = [∫ I Q dx + C] / I</td>
                <td className="p-2.5 border border-black/10 dark:border-white/10">
                  <button onClick={() => onOpenTest('first-order-linear-integrating-factor')} className="text-indigo-600 hover:underline font-bold text-xs">بدء الاختبار</button>
                </td>
              </tr>
              <tr>
                <td className="p-2.5 font-semibold border border-black/10 dark:border-white/10">المتجانسة (Homogeneous)</td>
                <td className="p-2.5 font-mono text-xs border border-black/10 dark:border-white/10 dir-ltr text-right">dy/dx = F(y/x)</td>
                <td className="p-2.5 text-xs text-slate-600 dark:text-slate-300 border border-black/10 dark:border-white/10">التعويض: y = vx ⟹ v + x v' = F(v) (تصبح قابلة للفصل)</td>
                <td className="p-2.5 border border-black/10 dark:border-white/10">
                  <button onClick={() => onOpenTest('homogeneous-first-order')} className="text-indigo-600 hover:underline font-bold text-xs">بدء الاختبار</button>
                </td>
              </tr>
              <tr>
                <td className="p-2.5 font-semibold border border-black/10 dark:border-white/10">التامة (Exact)</td>
                <td className="p-2.5 font-mono text-xs border border-black/10 dark:border-white/10 dir-ltr text-right">M dx + N dy = 0</td>
                <td className="p-2.5 text-xs text-slate-600 dark:text-slate-300 border border-black/10 dark:border-white/10">شرط التمام: ∂M/∂y = ∂N/∂x ⟹ F(x, y) = C</td>
                <td className="p-2.5 border border-black/10 dark:border-white/10">
                  <button onClick={() => onOpenTest('exact-differential-equations')} className="text-indigo-600 hover:underline font-bold text-xs">بدء الاختبار</button>
                </td>
              </tr>
              <tr>
                <td className="p-2.5 font-semibold border border-black/10 dark:border-white/10">معادلة برنولي (Bernoulli)</td>
                <td className="p-2.5 font-mono text-xs border border-black/10 dark:border-white/10 dir-ltr text-right">y' + P(x)y = Q(x)yⁿ</td>
                <td className="p-2.5 text-xs text-slate-600 dark:text-slate-300 border border-black/10 dark:border-white/10">التعويض v = y^(1-n) يحولها لمعادلة خطية في v</td>
                <td className="p-2.5 border border-black/10 dark:border-white/10">
                  <button onClick={() => onOpenTest('bernoulli-differential-equations')} className="text-indigo-600 hover:underline font-bold text-xs">بدء الاختبار</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 4: Second-Order Linear Equations & Characteristic Roots */}
      <section className="space-y-4">
        <h2 className={`text-lg sm:text-xl font-bold ${themeClasses.textPrimary} flex items-center gap-2`}>
          <span className="text-indigo-600 dark:text-indigo-400">4.</span>
          معادلات الرتبة الثانية ذات المعاملات الثابتة وسلوك الحلول
        </h2>
        <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
          تخضع الأنظمة الاهتزازية الميكانيكية والدوائر الكهربائية للمعادلة التفاضلية الخطية:
          <span className="font-mono text-indigo-600 dark:text-indigo-400 font-bold mx-1.5 dir-ltr inline-block">
            a y'' + b y' + c y = 0
          </span>
          باستخدام الفرض الأسي y = e^(rx)، تُختزل المعادلة التفاضلية إلى المعادلة المميزة الجبرية ar² + br + c = 0، والتي تحدد طبيعة جذورها السلوك الديناميكي للنظام:
        </p>

        <div className="space-y-3 text-xs sm:text-sm">
          <div className={`p-4 rounded-xl border ${themeClasses.border} bg-indigo-500/5`}>
            <strong className="text-indigo-700 dark:text-indigo-300 block mb-1">
              الحالة 1: جذران حقيقيان مختلفان (r₁ ≠ r₂) ⟵ حركة فوق مخمدة (Overdamped)
            </strong>
            <p className={`${themeClasses.textSecondary} leading-relaxed`}>
              الحل العام هو: y(x) = C₁ e^(r₁x) + C₂ e^(r₂x). في حالة المقاومة الكبيرة، يعود النظام إلى اتزانه تدريجياً دون أن يتأرجح.
            </p>
          </div>

          <div className={`p-4 rounded-xl border ${themeClasses.border} bg-indigo-500/5`}>
            <strong className="text-indigo-700 dark:text-indigo-300 block mb-1">
              الحالة 2: جذر حقيقي مكرر (r₁ = r₂) ⟵ إخماد حرج (Critically Damped)
            </strong>
            <p className={`${themeClasses.textSecondary} leading-relaxed`}>
              الحل العام هو: y(x) = (C₁ + C₂ x) e^(rx). يعود النظام للاتزان في أسرع زمن ممكن دون تذبذب، وهو التصميم المفضل لممتصات الصدمات ومؤشرات القياس.
            </p>
          </div>

          <div className={`p-4 rounded-xl border ${themeClasses.border} bg-indigo-500/5`}>
            <strong className="text-indigo-700 dark:text-indigo-300 block mb-1">
              الحالة 3: جذران مركبان مترافقان (r = α ± iβ) ⟵ حركة متذبذبة تحت مخمدة (Underdamped)
            </strong>
            <p className={`${themeClasses.textSecondary} leading-relaxed`}>
              الحل العام هو: y(x) = e^(αx) [C₁ cos(βx) + C₂ sin(βx)]. يتذبذب النظام بتردد زاوي β بينما يضمحل اتساع الموجة بمعدل أسي e^(αx) نتيجة الإخماد.
            </p>
          </div>
        </div>
      </section>

      {/* Section 5: Laplace Transform Mastery */}
      <section className="space-y-3">
        <h2 className={`text-lg sm:text-xl font-bold ${themeClasses.textPrimary} flex items-center gap-2`}>
          <span className="text-indigo-600 dark:text-indigo-400">5.</span>
          تحويلات لابلاس: سلاح الهندسة الكهربائية والتحكم الآلي
        </h2>
        <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
          يُعد تحويل لابلاس ℒ{'{f(t)}'} أداة مهندسي الكهرباء والميكاترونكس الأولى؛ لأنه يستبدل العمليات التفاضلية الصعبة بعمليات ضرب جبرية بسيطة في المتغير الترددي s. تبرز أهميته المطلقة عند التعامل مع القوى المتقطعة (On/Off) والنبضات اللحظية الشديدة (كضربة مطرقة أو شرارة كهربائية)، حيث تفشل الطرق الكلاسيكية بينما يتعامل معها تحويل لابلاس بسلاسة متناهية من خلال دالة ديراك δ(t) ودالة هيفيسايد الخطوية u(t).
        </p>
      </section>

      {/* Section 6: Real-World Applications */}
      <section className="space-y-4">
        <h2 className={`text-lg sm:text-xl font-bold ${themeClasses.textPrimary} flex items-center gap-2`}>
          <span className="text-indigo-600 dark:text-indigo-400">6.</span>
          التطبيقات الحياتية والهندسية الواقعية للمعادلات التفاضلية
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs sm:text-sm">
          <div className={`p-3.5 rounded-xl border ${themeClasses.border} bg-black/[0.01] dark:bg-white/[0.01]`}>
            <span className="font-bold text-indigo-700 dark:text-indigo-300 block mb-1">
               النمذجة البيولوجية والطب الشرعي:
            </span>
            <p className={`${themeClasses.textSecondary} leading-relaxed text-xs`}>
              تتبع انتشار الأوبئة والأمراض الفيروسية (نموذج SIR)، تقدير توقيت الوفاة الجنائي بقانون نيوتن للتبريد، والتأريخ الإشعاعي بالكربون المشع.
            </p>
          </div>

          <div className={`p-3.5 rounded-xl border ${themeClasses.border} bg-black/[0.01] dark:bg-white/[0.01]`}>
            <span className="font-bold text-indigo-700 dark:text-indigo-300 block mb-1">
               الدوائر الكهربائية والاتصالات:
            </span>
            <p className={`${themeClasses.textSecondary} leading-relaxed text-xs`}>
              توليف محطات الراديو وتصميم المرشحات الإلكترونية الفعالة (Filters) عبر ضبط دوائر الرنين RLC لتمرير ترددات معينة وحجب المشوشة.
            </p>
          </div>

          <div className={`p-3.5 rounded-xl border ${themeClasses.border} bg-black/[0.01] dark:bg-white/[0.01]`}>
            <span className="font-bold text-indigo-700 dark:text-indigo-300 block mb-1">
               هندسة الطيران والميكانيكا:
            </span>
            <p className={`${themeClasses.textSecondary} leading-relaxed text-xs`}>
              حساب مسارات الصواريخ وسرعة الهروب الفضائية، دراسة استقرار أجنحة الطائرات ضد الاهتزازات الهوائية (Flutter)، وتصميم ممتصات الصدمات.
            </p>
          </div>

          <div className={`p-3.5 rounded-xl border ${themeClasses.border} bg-black/[0.01] dark:bg-white/[0.01]`}>
            <span className="font-bold text-indigo-700 dark:text-indigo-300 block mb-1">
               الهندسة الإنشائية ومقاومة الزلازل:
            </span>
            <p className={`${themeClasses.textSecondary} leading-relaxed text-xs`}>
              نمذجة استجابة ناطحات السحاب والجسور المعلقة للهزات الأرضية والرياح العاتية عبر مخمدات الكتل المضبوطة (Tuned Mass Dampers).
            </p>
          </div>
        </div>
      </section>

      {/* Footer Callout */}
      <div className={`p-5 rounded-2xl border border-indigo-500/20 bg-indigo-500/5 flex flex-col sm:flex-row items-center justify-between gap-4`}>
        <div className="space-y-1">
          <h3 className={`text-sm sm:text-base font-bold ${themeClasses.textPrimary}`}>
            جاهز لاختبار مهاراتك والتدريب العملي؟
          </h3>
          <p className={`text-xs ${themeClasses.textSecondary}`}>
            تضم البوابة 12 اختباراً تفاعلياً تخصصياً يغطي 120 مسألة نموذجية مشروحة خطوة بخطوة
          </p>
        </div>

        <button
          onClick={() => onOpenTest('classification-order-degree')}
          className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition-all shadow-sm shrink-0 flex items-center gap-2"
        >
          <span>ابدأ بالاختبار الأول الآن</span>
          <ArrowLeft className="w-3.5 h-3.5" />
        </button>
      </div>
    </article>
  );
};
