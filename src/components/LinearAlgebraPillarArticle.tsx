import React from 'react';
import { BookOpen, Sparkles, Award, ArrowLeft, CheckCircle2, Sigma, Activity, BarChart3, HelpCircle, Layers, Target, Hash, Shuffle, RotateCcw, Clock, Compass } from 'lucide-react';
import { useEyeTheme } from '../context/ThemeContext';

interface LinearAlgebraPillarArticleProps {
  onOpenTest: (testId: string) => void;
}

export const LinearAlgebraPillarArticle: React.FC<LinearAlgebraPillarArticleProps> = ({
  onOpenTest,
}) => {
  const { themeClasses } = useEyeTheme();

  return (
    <article
      className={`rounded-2xl border ${themeClasses.border} ${themeClasses.cardBg} p-6 sm:p-10 shadow-sm transition-all text-right space-y-8 leading-relaxed`}
    >
      {/* Header Banner */}
      <div className="border-b border-black/5 dark:border-white/5 pb-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20 mb-3">
          <BookOpen className="w-4 h-4" />
          المقالة المرجعية الكبرى · بوابة الجبر الخطي والتحليل الطيفي
        </div>
        <h1 className={`text-2xl sm:text-3xl font-extrabold ${themeClasses.textPrimary}`}>
          الدليل الأكاديمي الشامل للجبر الخطي: من هندسة المتجهات والمصفوفات إلى الفضاءات التجريدية ونظرية القيم الذاتية
        </h1>
        <p className={`text-sm sm:text-base ${themeClasses.textSecondary} mt-3 leading-relaxed`}>
          استكشاف نظري وتطبيقي معمق لجبر المتجهات في المستوي والفضاء، جبر المصفوفات والعمليات الأساسية، المحددات وقاعدة كرامر،
          خوارزمية الحذف الغاوسي وجاوس-جوردان، الفضاءات الشعاعية والجزئية، الاستقلال الخطي والأساس والبعد، التحويلات الخطية وتمثيلها،
          وصولاً إلى القيم والمتجهات الذاتية وتطبيقاتها في الذكاء الاصطناعي وخوارزمية PageRank وميكانيكا الكم.
        </p>
      </div>

      {/* Section 1: Foundations and History */}
      <section className="space-y-3">
        <h2 className={`text-lg sm:text-xl font-bold ${themeClasses.textPrimary} flex items-center gap-2`}>
          <span className="text-emerald-600 dark:text-emerald-400">1.</span>
          المدخل المعرفي والتاريخي: كيف أصبح الجبر الخطي لغة الحوسبة والفيزياء الحديثة؟
        </h2>
        <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
          نشأ الجبر الخطي (Linear Algebra) كاستجابة طبيعية للرغبة في إيجاد حلول منهجية لأنظمة المعادلات الجبرية متعددة المتغيرات.
          بدأت هذه المسيرة مع علماء الصين القدماء ثم تبلورت في أوروبا على يد كارل فريدريش غاوس وغابرييل كرامر، وتطورت بصورة مذهلة
          خلال القرن التاسع عشر بفضل أبحاث آرثر كايلي وويليام روان هاملتون وهيرمان غراسمان، الذين وضعوا أسس جبر المصفوفات والفضاءات الشعاعية التجريدية.
        </p>
        <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
          اليوم، لم يعد الجبر الخطي فرعاً منعزلاً من الرياضيات البحتة، بل صار بمثابة "الأبجدية الرياضية المشتركة" لجميع العلوم التطبيقية
          والتكنولوجية؛ فمن معالجة الصور الرقمية وتصميم محركات ألعاب الفيديو ثلاثية الأبعاد، إلى خوارزميات التعلم الآلي والشبكات العصبية العميقة،
          وحسابات ميكانيكا الكم التي تُصاغ فيها حالات الجسيمات كمتجهات في فضاءات هيلبرت والمؤثرات الفيزيائية كمصفوفات هيرميتية.
        </p>
      </section>

      {/* Section 2: Vectors & Matrices Core */}
      <section className="space-y-4">
        <h2 className={`text-lg sm:text-xl font-bold ${themeClasses.textPrimary} flex items-center gap-2`}>
          <span className="text-emerald-600 dark:text-emerald-400">2.</span>
          المتجهات والمصفوفات: أدوات التموضع والتحويل في الفضاء الإقليدي
        </h2>
        <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
          تمثل المتجهات الركيزة المكانية الأولى، حيث تعبر عن مقادير موجهة تُحسب إحداثياتها بطرح نقطة البداية من النهاية،
          وتتحقق فيها قوانين الجمع المتوازي والضرب السلمي. ويكتمل جبر المتجهات بالضرب القياسي (الداخلي) الذي يقيس التعامد والزوايا
          عبر u · v = ||u|| ||v|| cos θ، والضرب الاتجاهي (الخارجي) المعرف في الفضاء الثلاثي R³ والذي يحدد متجهاً عمودياً ومساحة متوازي الأضلاع.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-3">
          <div className={`p-4 rounded-xl border ${themeClasses.border} bg-black/[0.01] dark:bg-white/[0.01]`}>
            <h3 className={`text-sm font-bold ${themeClasses.textPrimary} mb-1.5 flex items-center gap-1.5`}>
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              المتجهات في المستوى والفضاء والضرب القياسي
            </h3>
            <p className={`text-xs ${themeClasses.textSecondary} leading-relaxed`}>
              جمع المتجهات، المعيار الإقليدي ||v|| = √(x² + y² + z²)، متجهات الوحدة û = u/||u||، والضرب القياسي لتحديد التعامد عند u · v = 0.
            </p>
            <div className="mt-2.5 flex flex-wrap gap-2">
              <button
                onClick={() => onOpenTest('vectors-operations')}
                className="text-xs px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 font-semibold hover:bg-emerald-500/20 transition-colors flex items-center gap-1"
              >
                اختبار عمليات المتجهات
                <ArrowLeft className="w-3 h-3" />
              </button>
              <button
                onClick={() => onOpenTest('dot-cross-product-orthogonality')}
                className="text-xs px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 font-semibold hover:bg-emerald-500/20 transition-colors flex items-center gap-1"
              >
                اختبار الضرب القياسي والاتجاهي
                <ArrowLeft className="w-3 h-3" />
              </button>
            </div>
          </div>

          <div className={`p-4 rounded-xl border ${themeClasses.border} bg-black/[0.01] dark:bg-white/[0.01]`}>
            <h3 className={`text-sm font-bold ${themeClasses.textPrimary} mb-1.5 flex items-center gap-1.5`}>
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              المصفوفات والمحددات والمعكوس الضربي
            </h3>
            <p className={`text-xs ${themeClasses.textSecondary} leading-relaxed`}>
              ضرب المصفوفات A(m×k) · B(k×n)، منقول المصفوفة (AB)ᵀ = Bᵀ Aᵀ، محدد المصفوفة det(A)، وحساب المعكوس A⁻¹ = (1/det)·adj(A) بشرط det ≠ 0.
            </p>
            <div className="mt-2.5 flex flex-wrap gap-2">
              <button
                onClick={() => onOpenTest('matrix-operations-types')}
                className="text-xs px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 font-semibold hover:bg-emerald-500/20 transition-colors flex items-center gap-1"
              >
                اختبار عمليات المصفوفات
                <ArrowLeft className="w-3 h-3" />
              </button>
              <button
                onClick={() => onOpenTest('determinants-properties-calculation')}
                className="text-xs px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 font-semibold hover:bg-emerald-500/20 transition-colors flex items-center gap-1"
              >
                اختبار المحددات
                <ArrowLeft className="w-3 h-3" />
              </button>
              <button
                onClick={() => onOpenTest('matrix-inverse-methods')}
                className="text-xs px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 font-semibold hover:bg-emerald-500/20 transition-colors flex items-center gap-1"
              >
                اختبار معكوس المصفوفة
                <ArrowLeft className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Solving Linear Systems */}
      <section className="space-y-4">
        <h2 className={`text-lg sm:text-xl font-bold ${themeClasses.textPrimary} flex items-center gap-2`}>
          <span className="text-emerald-600 dark:text-emerald-400">3.</span>
          حل أنظمة المعادلات الخطية: من قاعدة كرامر إلى الحذف الغاوسي وجاوس-جوردان
        </h2>
        <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
          تتنوع استراتيجيات حل النظام الخطي Ax = b بين الطرق المباشرة بالمحددات والطرق الخوارزمية الصفية:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 my-3">
          <div className={`p-3.5 rounded-xl border ${themeClasses.border} bg-black/[0.01] dark:bg-white/[0.01]`}>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-lg"></span>
              <h4 className={`text-xs font-bold ${themeClasses.textPrimary}`}>طريقة كرامر (Cramer\'s Rule)</h4>
            </div>
            <p className={`text-[11px] ${themeClasses.textSecondary} leading-relaxed mb-2`}>
              تحل الأنظمة المربعة بنسب المحددات xᵢ = det(Aᵢ) / det(A). ميزتها أنها صيغة صريحة مباشرة للأنظمة الصغيرة، وشرطها الحاسم هو det(A) ≠ 0.
            </p>
            <button
              onClick={() => onOpenTest('cramers-rule-linear-systems')}
              className="text-xs px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 font-semibold hover:bg-emerald-500/20 transition-colors flex items-center gap-1"
            >
              اختبار طريقة كرامر
              <ArrowLeft className="w-3 h-3" />
            </button>
          </div>

          <div className={`p-3.5 rounded-xl border ${themeClasses.border} bg-black/[0.01] dark:bg-white/[0.01]`}>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-lg"></span>
              <h4 className={`text-xs font-bold ${themeClasses.textPrimary}`}>الحذف لـ جاوس وجاوس-جوردان</h4>
            </div>
            <p className={`text-[11px] ${themeClasses.textSecondary} leading-relaxed mb-2`}>
              الخوارزمية القياسية العالمية لتحويل المصفوفة الممتدة [A | b] إلى صيغة الصفوف المدرجة (REF) وصيغة الصفوف المختزلة (RREF)، وتحديد الحلول الفريدة أو اللانهائية أو المستحيلة.
            </p>
            <button
              onClick={() => onOpenTest('gaussian-elimination-echelon')}
              className="text-xs px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 font-semibold hover:bg-emerald-500/20 transition-colors flex items-center gap-1"
            >
              اختبار الحذف الغاوسي وجاوس-جوردان
              <ArrowLeft className="w-3 h-3" />
            </button>
          </div>
        </div>
      </section>

      {/* Section 4: Abstract Vector Spaces and Basis */}
      <section className="space-y-4">
        <h2 className={`text-lg sm:text-xl font-bold ${themeClasses.textPrimary} flex items-center gap-2`}>
          <span className="text-emerald-600 dark:text-emerald-400">4.</span>
          الفضاءات التجريدية، الاستقلال الخطي، والأساس والبعد
        </h2>
        <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
          ينتقل الجبر الخطي المتقدم من الحساب العددي إلى البناء البنيوي التجريدي؛ حيث يُعرف الفضاء الشعاعي بمسلماته العشر،
          وتُفحص الفضاءات الجزئية باختبار الشروط الثلاثة: احتواء الصفر، والانغلاق بالجمع، والانغلاق بالضرب السلمي.
          وتبرز مفاهيم الاستقلال الخطي c₁v₁ + ... + cₖvₖ = 0 ⟹ cᵢ = 0، والأساس (Basis) الذي يولد الفضاء دون حشو،
          والبعد dim(V) ومبرهنة الرتبة والنواة الشهيرة: Rank(A) + Nullity(A) = n.
        </p>

        <div className="flex flex-wrap gap-2 my-2">
          <button
            onClick={() => onOpenTest('vector-spaces-subspaces')}
            className="text-xs px-3 py-1.5 rounded-lg bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 font-semibold hover:bg-emerald-500/20 transition-colors flex items-center gap-1"
          >
            الفضاءات والفضاءات الجزئية
            <ArrowLeft className="w-3 h-3" />
          </button>
          <button
            onClick={() => onOpenTest('linear-independence-dependence')}
            className="text-xs px-3 py-1.5 rounded-lg bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 font-semibold hover:bg-emerald-500/20 transition-colors flex items-center gap-1"
          >
            الاستقلال والارتباط الخطي
            <ArrowLeft className="w-3 h-3" />
          </button>
          <button
            onClick={() => onOpenTest('basis-dimension-vector-spaces')}
            className="text-xs px-3 py-1.5 rounded-lg bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 font-semibold hover:bg-emerald-500/20 transition-colors flex items-center gap-1"
          >
            الأساس والبعد ومبرهنة الرتبة والنواة
            <ArrowLeft className="w-3 h-3" />
          </button>
        </div>
      </section>

      {/* Section 5: Linear Transformations and Spectral Theory */}
      <section className="space-y-4">
        <h2 className={`text-lg sm:text-xl font-bold ${themeClasses.textPrimary} flex items-center gap-2`}>
          <span className="text-emerald-600 dark:text-emerald-400">5.</span>
          التحويلات الخطية والتحليل الطيفي: القيم والمتجهات الذاتية
        </h2>
        <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
          تُمثل التحويلات الخطية T(x) = Ax التطبيقات الحافظة للخطية، وتمتلك مصفوفة قياسية وحيدة [T] ونواة Ker(T) ومدى Range(T).
          وتتوج هذه البنية بالنظرية الطيفية (Spectral Theory) والقيم والمتجهات الذاتية Av = λv؛ حيث تكشف المعادلة المميزة det(A - λI) = 0
          عن الترددات الطبيعية والاتجاهات الجوهرية للأنظمة الديناميكية، مما يتيح تقطير المصفوفات A = P D P⁻¹ وحساب قواها العليا بكفاءة خوارزمية فائقة.
        </p>

        <div className="flex flex-wrap gap-2 my-2">
          <button
            onClick={() => onOpenTest('linear-transformations-matrices')}
            className="text-xs px-3 py-1.5 rounded-lg bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 font-semibold hover:bg-emerald-500/20 transition-colors flex items-center gap-1"
          >
            التحويلات الخطية والمصفوفات الممثلة
            <ArrowLeft className="w-3 h-3" />
          </button>
          <button
            onClick={() => onOpenTest('eigenvalues-eigenvectors')}
            className="text-xs px-3 py-1.5 rounded-lg bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 font-semibold hover:bg-emerald-500/20 transition-colors flex items-center gap-1"
          >
            القيم الذاتية والمتجهات الذاتية والتقطير
            <ArrowLeft className="w-3 h-3" />
          </button>
        </div>
      </section>

      {/* Section 6: Comprehensive Matrix Map */}
      <section className="space-y-4">
        <h2 className={`text-lg sm:text-xl font-bold ${themeClasses.textPrimary} flex items-center gap-2`}>
          <span className="text-emerald-600 dark:text-emerald-400">6.</span>
          جدول المقارنة الشامل لمفاهيم الجبر الخطي وتطبيقاتها التكنولوجية
        </h2>

        <div className="overflow-x-auto my-3 border border-black/5 dark:border-white/5 rounded-xl">
          <table className="w-full text-xs text-right border-collapse">
            <thead>
              <tr className="bg-black/[0.03] dark:bg-white/[0.03] border-b border-black/5 dark:border-white/5 font-bold">
                <th className="p-2.5">المفهوم الجبري</th>
                <th className="p-2.5">الصيغة / الرمز الرياضي</th>
                <th className="p-2.5">الشرط أو الخاصية المركزية</th>
                <th className="p-2.5">أبرز التطبيقات المعاصرة</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-black/5 dark:divide-white/5">
              <tr>
                <td className="p-2.5 font-bold text-emerald-600 dark:text-emerald-400">الضرب النقطي والتعامد</td>
                <td className="p-2.5 font-mono" dir="ltr">u · v = ||u|| ||v|| cos θ</td>
                <td className="p-2.5">u · v = 0 للمتعامدين</td>
                <td className="p-2.5">الإسقاط، خوارزمية جرام-شميدت، شبكات الرادار</td>
              </tr>
              <tr>
                <td className="p-2.5 font-bold text-emerald-600 dark:text-emerald-400">الضرب الاتجاهي</td>
                <td className="p-2.5 font-mono" dir="ltr">u × v = det([i,j,k; ...])</td>
                <td className="p-2.5">متجه عمودي على الاثنين ومساحة متوازي الأضلاع</td>
                <td className="p-2.5">عزم القوة، الديناميكا الهوائية، الرسوم ثلاثية الأبعاد</td>
              </tr>
              <tr>
                <td className="p-2.5 font-bold text-emerald-600 dark:text-emerald-400">المحدد والمعكوس</td>
                <td className="p-2.5 font-mono" dir="ltr">A⁻¹ = (1/det) · adj(A)</td>
                <td className="p-2.5">det(A) ≠ 0 لوجود المعكوس</td>
                <td className="p-2.5">تشفير المصفوفات Hill Cipher، فك المعادلات التآلفية</td>
              </tr>
              <tr>
                <td className="p-2.5 font-bold text-emerald-600 dark:text-emerald-400">الحذف الغاوسي وجاوس-جوردان</td>
                <td className="p-2.5 font-mono" dir="ltr">[A | b] ⟹ RREF</td>
                <td className="p-2.5">العمليات الصفية الأولية (ERO)</td>
                <td className="p-2.5">محاكاة الدوائر الكهربائية Kirchhoff، التوازن الكيميائي</td>
              </tr>
              <tr>
                <td className="p-2.5 font-bold text-emerald-600 dark:text-emerald-400">الاستقلال والأساس والبعد</td>
                <td className="p-2.5 font-mono" dir="ltr">Rank(A) + Nullity(A) = n</td>
                <td className="p-2.5">Span(B) = V مع الاستقلال الخطي</td>
                <td className="p-2.5">معالجة الإشارات، ضغط الصور JPEG، تحويلات فورييه</td>
              </tr>
              <tr>
                <td className="p-2.5 font-bold text-emerald-600 dark:text-emerald-400">القيم والمتجهات الذاتية</td>
                <td className="p-2.5 font-mono" dir="ltr">A v = λ v, det(A - λI) = 0</td>
                <td className="p-2.5">التقطير A = P D P⁻¹</td>
                <td className="p-2.5">خوارزمية Google PageRank، تحليل PCA، ميكانيكا الكم</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Footer Banner */}
      <div className={`p-4 rounded-xl border border-emerald-500/20 bg-emerald-500/5 flex items-center justify-between gap-4 mt-6`}>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h4 className={`text-sm font-bold ${themeClasses.textPrimary}`}>
              منظومة اختبارات الجبر الخطي التفاعلية المكتملة
            </h4>
            <p className={`text-xs ${themeClasses.textSecondary}`}>
              تضم الوحدة 12 اختباراً تخصصياً بمجموع 120 مسألة تفاعلية ومقالات مرجعية لكل موضوع.
            </p>
          </div>
        </div>
        <button
          onClick={() => onOpenTest('vectors-operations')}
          className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-colors shrink-0 flex items-center gap-1.5 shadow-sm"
        >
          <span>ابدأ الاختبار الأول</span>
          <ArrowLeft className="w-4 h-4" />
        </button>
      </div>
    </article>
  );
};
