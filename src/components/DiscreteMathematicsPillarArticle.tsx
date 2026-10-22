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

interface DiscreteMathematicsPillarArticleProps {
  onOpenTest: (testId: string) => void;
}

export const DiscreteMathematicsPillarArticle: React.FC<DiscreteMathematicsPillarArticleProps> = ({
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
          المقالة المرجعية الكبرى · أكاديمية الرياضيات المتقطعة وهياكل الحوسبة
        </div>
        <h1 className={`text-2xl sm:text-3xl font-extrabold ${themeClasses.textPrimary}`}>
          الدليل الأكاديمي الشامل للرياضيات المتقطعة: من المجموعات والعلاقات والبوزيتات إلى الرسوم البيانية والأشجار وهندسة التشفير الرقمي
        </h1>
        <p className={`text-sm sm:text-base ${themeClasses.textSecondary} mt-3 leading-relaxed`}>
          استكشاف نظري وتطبيقي معمق لركائز الرياضيات المتقطعة (Discrete Mathematics)؛ لغة الحوسبة الرقمية وهندسة البرمجيات.
          يغطي هذا المرجع الشامل جبر المجموعات وقوانين دي مورجان، تصنيف العلاقات الثنائية وفصول التكافؤ والترتيب الجزئي (Posets)،
          الدوال المتقطعة والتقابلات التشفيرية، مبدأ برج الحمام الكلاسيكي والمعمم، حل العلاقات العودية ونظرية الماستر،
          نظرية الرسوم البيانية ومبرهنة مصافحة اليدين، المسارات والدارات الإيلرية والهاميلتونية، الأشجار والأشجار الممتدة الأدنى (MST)
          بخوارزميتي كروسكال وبريم، الجبر البولياني وخرائط كارنوف، الاستقراء الرياضي والهيكلي، وصولاً إلى تطبيقات التشفير
          والحساب المعياري وخوارزمية RSA والتدفق الشبكي.
        </p>
      </div>

      {/* Section 1 */}
      <section className="space-y-3">
        <h2 className={`text-lg sm:text-xl font-bold ${themeClasses.textPrimary} flex items-center gap-2`}>
          <span className="text-indigo-600 dark:text-indigo-400">1.</span>
          الثورة المتقطعة: كيف شيدت الكائنات المنفصلة صرح الحوسبة والذكاء الاصطناعي؟
        </h2>
        <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
          عبر قرون طويلة، ركزت الرياضيات الكلاسيكية على دراسة الكميات المتصلة والمستمرة (Continuous Mathematics) كحساب التفاضل
          والتكامل والهندسة التحليلية لدراسة حركة الأجرام وظواهر الفيزياء. غير أن ولادة الحاسوب الرقمي في منتصف القرن العشرين
          أحدثت تحولاً إبستيمولوجياً جذرياً؛ فالحاسوب لا يتعامل مع اللانهايات المستمرة، بل مع حالات متقطعة ومنفصلة (Discrete)
          تتمثل في وجود تيار كهربائي أو انعدامه (1 أو 0).
        </p>
        <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
          من هنا برزت "الرياضيات المتقطعة" بوصفها الإطار النظري المتكامل الذي يدرس الكائنات الرياضية القابلة للعد والفرز والتمييز؛
          حيث لا توجد قيم وسيطة بين العناصر كما في خط الأعداد الحقيقية. أصبحت المجموعات، والرسوم البيانية، والأشجار، والعلاقات المنطقية
          هي المواد الخام التي تُبنى بها لغات البرمجة، وقواعد البيانات، ومحركات التوجيه، وأنظمة التشفير المصرفي.
        </p>
      </section>

      {/* Section 2 */}
      <section className="space-y-3">
        <h2 className={`text-lg sm:text-xl font-bold ${themeClasses.textPrimary} flex items-center gap-2`}>
          <span className="text-indigo-600 dark:text-indigo-400">2.</span>
          البنى الهيكلية التأسيسية: المجموعات، العلاقات الثنائية، وفصول التكافؤ
        </h2>
        <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
          تبدأ الرحلة من نظرية المجموعات لجورج كانتور، حيث تُمكّننا العمليات الجبرية (الاتحاد، التقاطع، الفرق، والفرق التناظري Δ)
          من نمذجة البيانات. ومن حاصل الضرب الديكارتي تنشأ "العلاقات الثنائية" (Relations) كروابط بين الكيانات:
        </p>
        <ul className="list-disc list-inside space-y-2 text-xs sm:text-sm text-gray-700 dark:text-gray-300 pr-2">
          <li>
            <strong>علاقات التكافؤ (Equivalence Relations):</strong> تجمع خواص الانعكاس والتماثل والتعدي، وتقوم بمهمة تجزئة المجموعة (Partitioning) إلى فئات تكافؤ متمايزة لا تتقاطع، وهو النموذج النظري لتصنيف البيانات في قواعد البيانات SQL.
          </li>
          <li>
            <strong>علاقات الترتيب الجزئي (Posets):</strong> تجمع خواص الانعكاس وتخالف التماثل والتعدي، وتُنشئ تراتبية هرمية تُمثلها مخططات هاس (Hasse Diagrams)، وتُعد الأساس لجدولة المهام المتوازية (Topological Sorting).
          </li>
          <li>
            <strong>الدوال التقابلية (Bijective Mappings):</strong> التي تجمع التباين والشمول معاً وتسمح بوجود الدالة العكسية f⁻¹ الضرورية لتشفير واسترجاع الرسائل.
          </li>
        </ul>
      </section>

      {/* Section 3 */}
      <section className="space-y-3">
        <h2 className={`text-lg sm:text-xl font-bold ${themeClasses.textPrimary} flex items-center gap-2`}>
          <span className="text-indigo-600 dark:text-indigo-400">3.</span>
          العد المتقدم والاستدلال الوجودي: مبدأ برج الحمام والعلاقات التراجعية
        </h2>
        <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
          تتميز الرياضيات المتقطعة بأدوات استدلالية فريدة لا تحتاج للحساب الشامل؛ فمبدأ برج الحمام (Pigeonhole Principle) لدركليه
          يبرهن بأسلوب بسيط مذهل حتمية تصادم البيانات (Hash Collisions) في دوال الهاش الرقمية واستحالة الضغط المطلق للملفات.
        </p>
        <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
          في المقابل، توفر "العلاقات العودية" (Recurrence Relations) المعادلات الجبرية التي تحكم خوارزميات التكرار؛ فمن متتالية
          فيبوناتشي والنسبة الذهبية إلى خوارزميات "فرّق تسُد" (Merge Sort و QuickSort)، تتيح "المعادلة المميزة" و"نظرية الماستر"
          تفكيك السلوك الزمني والمعقد للخوارزميات بدقة متناهية.
        </p>
      </section>

      {/* Section 4 */}
      <section className="space-y-3">
        <h2 className={`text-lg sm:text-xl font-bold ${themeClasses.textPrimary} flex items-center gap-2`}>
          <span className="text-indigo-600 dark:text-indigo-400">4.</span>
          طوبولوجيا المخططات والشبكات: من أويلر إلى مسألة البائع المتجول (TSP)
        </h2>
        <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
          منذ أن حل أويلر معضلة جسور كونيغسبرغ عام 1736 وصاغ مبرهنة مصافحة اليدين (∑ deg(v) = 2|E|)، أصبحت نظرية الرسوم البيانية
          لغة الشبكات الأولى. ويميز التحليل الرياضي بين عالمين من المسارات:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
          <div className="p-3 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5 space-y-1">
            <div className="font-bold text-indigo-600 dark:text-indigo-400">المسار والدارة الإيلرية:</div>
            <p className="text-gray-600 dark:text-gray-300">
              يمر بكل "حافة" مرة واحدة بالضبط، ويشترط درجات زوجية للرؤوس، ويُحل في زمن خطي سريع O(|E|) بخوارزمية هيرهولزر.
            </p>
          </div>
          <div className="p-3 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5 space-y-1">
            <div className="font-bold text-indigo-600 dark:text-indigo-400">المسار والدورة الهاميلتونية:</div>
            <p className="text-gray-600 dark:text-gray-300">
              يمر بكل "رأس" مرة واحدة، وهو مسألة NP-Complete فائقة الصعوبة تتصل بمعضلة البائع المتجول (TSP) والملاحة الفضائية.
            </p>
          </div>
        </div>
      </section>

      {/* Section 5 */}
      <section className="space-y-3">
        <h2 className={`text-lg sm:text-xl font-bold ${themeClasses.textPrimary} flex items-center gap-2`}>
          <span className="text-indigo-600 dark:text-indigo-400">5.</span>
          الأشجار والشبكات الاقتصادية (MST) والجبر البولياني
        </h2>
        <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
          تُمثل الأشجار (Trees) الرسوم المتصلة الخالية من الدورات التي تحقق دائماً |E| = n - 1. ومن خلال خوارزميتي كروسكال وبريم
          الجشعتين (Greedy Algorithms)، نصل إلى "الشجرة الممتدة الأدنى" (Minimum Spanning Tree - MST) التي تضمن ربط كافة المدن
          أو أجهزة الشبكة بأقل تكلفة تمديد أسلاك ممكنة، وهي التقنية المعتمدة في بروتوكول STP بسويتشات الشبكات.
        </p>
        <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
          ويتكامل ذلك مع "الجبر البولياني" وخرائط كارنوف (K-Maps)؛ حيث تلتقي نظريات المجموعات والمنطق الصوري لتختزل عدد البوابات
          المنطقية في المعالجات وتصميم الدوائر المتكاملة الصغرى بأعلى كفاءة وأقل استهلاك للطاقة.
        </p>
      </section>

      {/* Section 6 */}
      <section className="space-y-3">
        <h2 className={`text-lg sm:text-xl font-bold ${themeClasses.textPrimary} flex items-center gap-2`}>
          <span className="text-indigo-600 dark:text-indigo-400">6.</span>
          الأمن السيبراني وتطبيقات الواقع: الحساب المعياري وخوارزمية RSA
        </h2>
        <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
          تتوج تطبيقات الرياضيات المتقطعة في حماية الفضاء السيبراني؛ فبدءاً من شفرة الإزاحة التاريخية ليوليوس قيصر عبر الحساب المعياري
          ℤ₂₆، وصولاً إلى ثورة التشفير غير المتماثل في خوارزمية RSA القائمة على مبرهنة أويلر وفيرما وصعوبة تحليل الأعداد الأولية الفلكية.
          كما تُدير نظريات التدفق الشبكي (Max-Flow Min-Cut) لفورد وفولكرسون وتلوين المخططات توزيع الترددات اللاسلكية وجدولة رحلات الطيران العالمية.
        </p>
      </section>

      {/* Action Index to all 12 tests */}
      <div className="pt-6 border-t border-black/5 dark:border-white/5 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className={`text-base font-bold ${themeClasses.textPrimary}`}>
            فهرس الاختبارات التفاعلية الـ 12 للرياضيات المتقطعة:
          </h3>
          <span className="text-xs text-indigo-600 dark:text-indigo-400 font-semibold">
            10 أسئلة لكل اختبار مع شرح ومقالة تأسيسية مخصصة
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
          {[
            { id: 'set-theory-operations', title: '1. نظرية المجموعات والعمليات', symbol: 'A ∩ B, A \\ B' },
            { id: 'relations-properties', title: '2. العلاقات وخواصها الثنائية', symbol: 'Reflexive, Transitive' },
            { id: 'equivalence-partial-orders', title: '3. علاقات التكافؤ والترتيب الجزئي', symbol: '[a], Poset, Hasse' },
            { id: 'discrete-functions-types', title: '4. الدوال المتقطعة والتقابل', symbol: 'Injective, Bijective' },
            { id: 'pigeonhole-principle', title: '5. مبدأ برج الحمام وتطبيقاته', symbol: '⌈N / k⌉, Hash Collisions' },
            { id: 'recurrence-relations', title: '6. العلاقات العودية وفيبوناتشي', symbol: 'a_n = 3a_{n-1}, Master' },
            { id: 'graph-theory-basics', title: '7. نظرية الرسم البياني ومصافحة اليدين', symbol: 'Σ deg(v) = 2|E|' },
            { id: 'eulerian-hamiltonian-paths', title: '8. المسارات الإيلرية والهاميلتونية', symbol: 'Euler & Hamilton, TSP' },
            { id: 'trees-minimum-spanning', title: '9. الأشجار والأشجار الممتدة (MST)', symbol: '|E| = n - 1, Kruskal' },
            { id: 'boolean-algebra-circuits', title: '10. الجبر البولياني وخرائط كارنوف', symbol: 'K-Maps, SOP & POS' },
            { id: 'discrete-induction-proofs', title: '11. الاستقراء المتقدم والهيكلي', symbol: 'P(k) ⟹ P(k+1)' },
            { id: 'discrete-applied-crypto-networks', title: '12. التشفير والتدفق الشبكي', symbol: 'Caesar, RSA, Max-Flow' },
          ].map((test) => (
            <button
              key={test.id}
              onClick={() => onOpenTest(test.id)}
              className="text-right p-3 rounded-xl border border-black/5 dark:border-white/5 hover:border-indigo-500/30 hover:bg-indigo-500/[0.04] transition-all flex items-center justify-between group"
            >
              <div>
                <div className="text-xs font-bold text-gray-800 dark:text-gray-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                  {test.title}
                </div>
                <div className="text-[10px] font-mono text-gray-500 mt-0.5">{test.symbol}</div>
              </div>
              <ArrowLeft className="w-3.5 h-3.5 text-gray-400 group-hover:text-indigo-500 transition-colors" />
            </button>
          ))}
        </div>
      </div>
    </article>
  );
};
