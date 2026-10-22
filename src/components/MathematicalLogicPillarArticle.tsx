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

interface MathematicalLogicPillarArticleProps {
  onOpenTest: (testId: string) => void;
}

export const MathematicalLogicPillarArticle: React.FC<MathematicalLogicPillarArticleProps> = ({
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
          المقالة المرجعية الكبرى · أكاديمية المنطق الرياضي وفلسفة الاستدلال
        </div>
        <h1 className={`text-2xl sm:text-3xl font-extrabold ${themeClasses.textPrimary}`}>
          الدليل الأكاديمي الشامل للمنطق الرياضي: من العبارات الصورية وجداول الصواب إلى براهين الاستنباط وهندسة الدوائر الرقمية
        </h1>
        <p className={`text-sm sm:text-base ${themeClasses.textSecondary} mt-3 leading-relaxed`}>
          استكشاف نظري وتطبيقي معمق لأسس المنطق الرياضي الحديث؛ يبدأ من تشريح العبارة وقيم الصواب ومبدأ الثالث المرفوع،
          مروراً بالروابط المنطقية الأساسية (النفي، الوصل، الفصل الشامل والاستثنائي)، والعبارات الشرطية ومفارقة الصدق التافه،
          والتكافؤات الكبرى وقوانين دي مورجان، وتصنيف التوتولوجيا والتناقض، ومنطق المحمولات والمكممات (∀ و ∃)،
          وقواعد الاستدلال الصارم (Modus Ponens و Modus Tollens)، واستراتيجيات البرهان الرياضي (المباشر، بالتناقض، وبالاستقراء)،
          وصولاً إلى تجسيد المنطق في عتاد الحواسيب والدوائر الرقمية والبوابات الشاملة.
        </p>
      </div>

      {/* Section 1 */}
      <section className="space-y-3">
        <h2 className={`text-lg sm:text-xl font-bold ${themeClasses.textPrimary} flex items-center gap-2`}>
          <span className="text-emerald-600 dark:text-emerald-400">1.</span>
          النشأة التاريخية للمنطق الصوري: من قياس أرسطو إلى حلم لايبنتز وجبر جورج بول
        </h2>
        <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
          لم يكن المنطق الرياضي مجرد فرع اعتيادي من فروع الرياضيات، بل هو لغة الرياضيات ذاتها ونظام تشغيلها الفكري.
          بدأت الإرهاصات الأولى مع الفيلسوف الإغريقي أرسطو في مؤلفه الشهير "الأورغانون"، حيث أسس المنطق الصوري القائم على
          القياس الحملي ومبادئ الفكر الأساسية الثلاثة: مبدأ الهوية (A هو A)، مبدأ عدم التناقض (لا يمكن لـ A أن تكون B ولا B معاً)،
          ومبدأ الثالث المرفوع (إما أن تكون العبارة صائبة أو كاذبة ولا احتمال ثالث).
        </p>
        <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
          في القرن السابع عشر، حلم الفيلسوف والرياضي الألماني غوتفريد فيلهلم لايبنتز بابتكار "أبجدية للأفكار الإنسانية"
          (Characteristica Universalis) وآلة حسابية للاستدلال المنطقي تحسم أي خلاف فكري بعبارة: "دعونا نحسب!" (Calculemus).
          تحقق هذا الحلم العظيم في منتصف القرن التاسع عشر على يد عالم الرياضيات الإنجليزي جورج بول الذي نشر عام 1854 كتابه المرجعي
          "قوانين التفكير"، مؤسساً بذلك ما يُعرف اليوم بـ "الجبر البولياني" (Boolean Algebra)، حيث استبدل الكلمات برموز جبرية
          وحوّل عمليات التفكير العقلي إلى معادلات ثنائية دقيقة تعتمد قيمتي الصدق والكذب (1 و 0).
        </p>
      </section>

      {/* Section 2 */}
      <section className="space-y-3">
        <h2 className={`text-lg sm:text-xl font-bold ${themeClasses.textPrimary} flex items-center gap-2`}>
          <span className="text-emerald-600 dark:text-emerald-400">2.</span>
          تشريح العبارات وقيم الصواب والروابط القضائية الأساسية
        </h2>
        <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
          في قلب المنطق القضوي (Propositional Logic) تقبع "العبارة" كجملة خبرية تامة تحتمل إما الصدق التام (T) أو الكذب التام (F).
          ومن خلال الروابط المنطقية، تُبنى المنظومات الفكرية الأكثر تعقيداً:
        </p>
        <ul className="list-disc list-inside space-y-2 text-xs sm:text-sm text-gray-700 dark:text-gray-300 pr-2">
          <li>
            <strong>أداة النفي (¬p):</strong> رابط أحادي يعكس قيمة الصواب، وقانون نفي النفي يضمن أن ¬(¬p) ≡ p.
          </li>
          <li>
            <strong>رابطة الوصل "و" (p ∧ q):</strong> تعبر عن تقاطع الحقائق، ولا تكون صائبة إلا عند اجتماع صدق الطرفين معاً.
          </li>
          <li>
            <strong>رابطة الفصل الشامل "أو" (p ∨ q):</strong> تكفيها شمعة صدق واحدة لتنير العبارة، ولا تفشل إلا عند كذب كل أطرافها.
          </li>
          <li>
            <strong>رابطة الفصل الاستثنائي (p ⊕ q / XOR):</strong> تشترط التنافي؛ فتصدق فقط إذا اختلفت قيمتا الصواب بين المدخلين.
          </li>
          <li>
            <strong>العبارة الشرطية (p → q):</strong> عصب النظريات العلمية؛ تفشل فقط في حالة خيانة الوعد (صدق الفرض وكذب النتيجة)، وتصدق تافهةً إذا كذب الفرض.
          </li>
          <li>
            <strong>العبارة الثنائية الشرطية (p ↔ q):</strong> تعبير عن التكافؤ التام والتطابق الصوابي بين الطرفين كلاهما T أو كلاهما F.
          </li>
        </ul>
      </section>

      {/* Section 3 */}
      <section className="space-y-3">
        <h2 className={`text-lg sm:text-xl font-bold ${themeClasses.textPrimary} flex items-center gap-2`}>
          <span className="text-emerald-600 dark:text-emerald-400">3.</span>
          التحويلات الثلاثة للعبارة الشرطية والمعاكس الإيجابي
        </h2>
        <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
          تكتسب العبارة الشرطية أهميتها من التحويلات الصورية الثلاثة المرتبطة بها: العكس (q → p)، والمعكوس (¬p → ¬q)،
          والمعاكس الإيجابي أو الماصدق العكسي (¬q → ¬p). وتتجلى عبقرية المنطق الصوري في مبرهنة التكافؤ الجوهري:
          العبارة الشرطية تكافئ منطقياً معاكسها الإيجابي فقط دون العكس أو المعكوس:
        </p>
        <div className="p-3 bg-emerald-500/[0.07] border border-emerald-500/20 rounded-xl font-mono text-xs sm:text-sm text-emerald-800 dark:text-emerald-200 text-center font-bold">
          (p → q) ≡ (¬q → ¬p) &nbsp; &nbsp; | &nbsp; &nbsp; (q → p) ≡ (¬p → ¬q)
        </div>
        <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
          إن عدم إدراك هذه الحقيقة يوقع الباحثين في مغالطة "إثبات التالي" أو مغالطة "نفي المقدم"، بينما يفتح إدراكها
          باباً فسيحاً لتقنية البرهان بالمعاكس الإيجابي عندما يستعصي البرهان المباشر.
        </p>
      </section>

      {/* Section 4 */}
      <section className="space-y-3">
        <h2 className={`text-lg sm:text-xl font-bold ${themeClasses.textPrimary} flex items-center gap-2`}>
          <span className="text-emerald-600 dark:text-emerald-400">4.</span>
          منطق المحمولات والمكممات: المكمم الكلي ∀ والوجودي ∃
        </h2>
        <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
          عندما نحتاج للتعبير عن خصائص المجموعات اللانهائية، يتفوق "منطق المحمولات" (Predicate Logic) بفضل المكممات المنطقية:
          المكمم الكلي (∀x P(x)) الذي يدعي سريان الخاصية على كافة العناصر بلا استثناء، والمكمم الوجودي (∃x P(x)) الذي يكفيه
          شاهد إثبات واحد. وتخضع المكممات لقوانين دي مورجان الموسعة:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm font-mono text-center">
          <div className="p-2.5 rounded-lg bg-black/[0.03] dark:bg-white/[0.03] border border-black/5 dark:border-white/5">
            ¬(∀x P(x)) ≡ ∃x ¬P(x)
          </div>
          <div className="p-2.5 rounded-lg bg-black/[0.03] dark:bg-white/[0.03] border border-black/5 dark:border-white/5">
            ¬(∃x P(x)) ≡ ∀x ¬P(x)
          </div>
        </div>
        <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
          وهذا هو السر الرياضي وراء كفاية "مثال مضاد واحد" (Single Counterexample) لدحض أي نظرية كبرى صيغت بالمكمم الكلي.
        </p>
      </section>

      {/* Section 5 */}
      <section className="space-y-3">
        <h2 className={`text-lg sm:text-xl font-bold ${themeClasses.textPrimary} flex items-center gap-2`}>
          <span className="text-emerald-600 dark:text-emerald-400">5.</span>
          ترسانة البراهين الرياضية: الاستدلال المباشر والتناقض والاستقراء الرياضي
        </h2>
        <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
          تكتسب الحقيقة الرياضية خلودها عبر منظومة براهين استنباطية لا تترك ثغرة للشك:
        </p>
        <div className="space-y-2 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
          <div className="p-3 rounded-xl border border-black/5 dark:border-white/5 bg-black/[0.01] dark:bg-white/[0.01]">
            <span className="font-bold text-emerald-600 dark:text-emerald-400">البرهان المباشر (Direct Proof): </span>
            تطبيق متتابع لقواعد الاستدلال (مثل Modus Ponens و Modus Tollens) انطلاقاً من المعطيات إلى النتيجة.
          </div>
          <div className="p-3 rounded-xl border border-black/5 dark:border-white/5 bg-black/[0.01] dark:bg-white/[0.01]">
            <span className="font-bold text-emerald-600 dark:text-emerald-400">البرهان بالتناقض (Proof by Contradiction): </span>
            افتراض نفي النتيجة ومتابعة الحسابات الصارمة حتى الاصطدام بتناقض مستحيل (p ∧ ¬p)، مما يثبت صحة الفرضية الأصلية حتماً كإثبات لا نسبية √2.
          </div>
          <div className="p-3 rounded-xl border border-black/5 dark:border-white/5 bg-black/[0.01] dark:bg-white/[0.01]">
            <span className="font-bold text-emerald-600 dark:text-emerald-400">الاستقراء الرياضي (Mathematical Induction): </span>
            حجر الزاوية للمجموعات المرتبة ℕ، القائم على خطوة الأساس n=1، ثم افتراض صحة k وإثبات لزوم كينونة k+1 لتسقط أحجار الدومينو إلى ما لا نهاية.
          </div>
        </div>
      </section>

      {/* Section 6 */}
      <section className="space-y-3">
        <h2 className={`text-lg sm:text-xl font-bold ${themeClasses.textPrimary} flex items-center gap-2`}>
          <span className="text-emerald-600 dark:text-emerald-400">6.</span>
          الثورة الرقمية: كيف بنى المنطق الرياضي المعالجات وأشباه الموصلات والذكاء الاصطناعي؟
        </h2>
        <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
          في عام 1937، قدّم كلود شانون أطروحة الماجستير التي وصفت بأنها "الأكثر تأثيراً في القرن العشرين"، حيث برهن أن
          جداول صواب جورج بول يمكن تمثيلها مادياً بواسطة مفاتيح المرحلات الكهربائية. تحول الوصل إلى بوابة AND،
          والفصل إلى بوابة OR، والنفي إلى بوابة NOT، والتكافؤ إلى XNOR، والجمع الحسابي إلى XOR.
        </p>
        <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
          واليوم، تحتوي المعالجات الدقيقة في هواتفنا وأجهزتنا على مليارات الترانزستورات المنظمة كبوابات منطقية شاملة (NAND و NOR)
          تجري تريليونات العمليات المنطقية في الثانية الواحدة. إن المنطق الرياضي هو الجسر السحري الذي نقل الفكر البشري
          من التجريد الفلسفي الأرسطي إلى عصر الذكاء الاصطناعي والحوسبة الفائقة.
        </p>
      </section>

      {/* Action Index to all 12 tests */}
      <div className="pt-6 border-t border-black/5 dark:border-white/5 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className={`text-base font-bold ${themeClasses.textPrimary}`}>
            فهرس الاختبارات التفاعلية الـ 12 للمنطق الرياضي:
          </h3>
          <span className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold">
            10 أسئلة لكل اختبار مع شرح ومقالة مخصصة
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
          {[
            { id: 'propositions-truth-values', title: '1. العبارات الرياضية وقيم الصواب', symbol: 'p ∈ {T, F}' },
            { id: 'negation-conjunction-and', title: '2. النفي والوصل (AND)', symbol: '¬p, p ∧ q' },
            { id: 'disjunction-or-xor', title: '3. الفصل الشامل والاستثنائي (XOR)', symbol: 'p ∨ q, p ⊕ q' },
            { id: 'conditional-statements', title: '4. العبارات الشرطية (IF... THEN)', symbol: 'p → q' },
            { id: 'biconditional-statements', title: '5. الشرطية الثنائية (IF AND ONLY IF)', symbol: 'p ↔ q' },
            { id: 'converse-inverse-contrapositive', title: '6. العكس والمعكوس والمعاكس الإيجابي', symbol: '¬q → ¬p' },
            { id: 'tautology-contradiction-contingency', title: '7. تحصيل الحاصل والتناقض والإمكان', symbol: 'T, F, Cont.' },
            { id: 'logical-equivalence-demorgan', title: '8. التكافؤ وقوانين دي مورجان', symbol: '¬(p ∧ q) ≡ ¬p ∨ ¬q' },
            { id: 'quantifiers-universal-existential', title: '9. المكممات المنطقية: ∀ و ∃', symbol: '∀x, ∃x P(x)' },
            { id: 'rules-of-inference', title: '10. قواعد الاستدلال الصوري', symbol: 'MP & MT ⊢ q' },
            { id: 'mathematical-proof-methods', title: '11. طرق البرهان الرياضي', symbol: 'Direct, Contradiction' },
            { id: 'logic-gates-applications', title: '12. الدوائر المنطقية والمسائل الكلامية', symbol: 'Logic Gates & Chips' },
          ].map((test) => (
            <button
              key={test.id}
              onClick={() => onOpenTest(test.id)}
              className="text-right p-3 rounded-xl border border-black/5 dark:border-white/5 hover:border-emerald-500/30 hover:bg-emerald-500/[0.04] transition-all flex items-center justify-between group"
            >
              <div>
                <div className="text-xs font-bold text-gray-800 dark:text-gray-200 group-hover:text-emerald-600 dark:group-hover:text-emerald-400">
                  {test.title}
                </div>
                <div className="text-[10px] font-mono text-gray-500 mt-0.5">{test.symbol}</div>
              </div>
              <ArrowLeft className="w-3.5 h-3.5 text-gray-400 group-hover:text-emerald-500 transition-colors" />
            </button>
          ))}
        </div>
      </div>
    </article>
  );
};
