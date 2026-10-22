import React from 'react';
import {
  BookOpen,
  Sparkles,
  TrendingUp,
  Lightbulb,
  CheckCircle2,
  Award,
  Layers,
  Ruler,
  Compass,
  ArrowRight,
} from 'lucide-react';
import { useEyeTheme } from '../context/ThemeContext';
import { navigateTo } from '../navigation/router';

interface NumberLineMeasurementPillarArticleProps {
  onOpenTest?: (testId: string) => void;
  className?: string;
}

export const NumberLineMeasurementPillarArticle: React.FC<NumberLineMeasurementPillarArticleProps> = ({
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
      id="number-line-measurement-pillar-guide"
      className={`p-6 sm:p-10 rounded-2xl border ${themeClasses.border} ${themeClasses.cardBg} space-y-8 shadow-2xs leading-relaxed text-right ${className}`}
    >
      {/* Pillar Article Header */}
      <header className="space-y-3 pb-6 border-b border-black/[0.06] dark:border-white/[0.08]">
        <div className="flex items-center gap-2 text-xs font-bold text-[#127052] dark:text-[#5EB5A1]">
          <BookOpen className="w-4 h-4" />
          <span>المقالة المرجعية الشاملة (Pillar Guide) | أكاديمية كويزات الرياضيات</span>
        </div>

        <h2 className={`text-xl sm:text-3xl font-extrabold tracking-tight ${themeClasses.textPrimary}`}>
          الدليل المرجعي الشامل لخط الأعداد وأنظمة القياس المعيارية: من التمثيل المكاني إلى الهندسة التطبيقية
        </h2>

        <p className={`text-sm sm:text-base ${themeClasses.textSecondary} leading-relaxed`}>
          يُعد خط الأعداد الأداة البصرية الأهم في الرياضيات لربط الأرقام المجردة بالمسافات المكانية الواقعية. ومن خلال دمجه مع وحدات القياس المعيارية (الطول، الكتلة، السعة، والزمن) وقوانين المحيط والمساحة والزوايا، يكتسب المتعلم فهماً حسياً دقيقاً يمكنه من تفسير العالم المادي وحل المسائل الهندسية والحياتية بثقة مطلقة.
        </p>

        <div className="flex flex-wrap gap-2 pt-2">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#127052]/10 text-[#127052] dark:text-[#5EB5A1] dark:bg-[#127052]/20">
             خط الأعداد والمسافات
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-600 dark:text-blue-400">
             النظام المتري المعياري
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-600 dark:text-purple-400">
            ⏱️ الزمن المنقضي والمحيط والمساحة
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-600 dark:text-amber-400">
             12 اختباراً تفاعلياً عملياً
          </span>
        </div>
      </header>

      {/* Section 1: خط الأعداد كجسر بصري */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-[#127052] dark:text-[#5EB5A1]" />
          <h3 className={`text-lg sm:text-xl font-bold ${themeClasses.textPrimary}`}>
            1. فلسفة خط الأعداد: تحويل التجريد الرياضي إلى بعد مكاني
          </h3>
        </div>
        <p className={`text-sm sm:text-base ${themeClasses.textSecondary}`}>
          خط الأعداد هو مستقيم هندسي يمتد إلى ما لا نهاية في كلا الاتجاهين، حيث تُمثل كل نقطة عليه عدداً حقيقياً واحداً لا غير (تناظر أحادي). يتميز خط الأعداد بثلاث ركائز لا غنى عنها:
        </p>
        <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-zinc-700 dark:text-zinc-300 pr-2">
          <li>
            <strong className="text-zinc-900 dark:text-zinc-100">نقطة الأصل (الصفر):</strong> النقطة المرجعية المركزية التي تفصل بين القيم الإيجابية والسلبية، وتُمثل حالة التوازن التام.
          </li>
          <li>
            <strong className="text-zinc-900 dark:text-zinc-100">الاتجاه المنظم (Directionality):</strong> الأعداد تزداد دائماً كلما تحركنا نحو اليمين، وتتناقص كلما تحركنا نحو اليسار. فالعدد الواقع على يمين أي عدد آخر هو الأكبر حتماً.
          </li>
          <li>
            <strong className="text-zinc-900 dark:text-zinc-100">وحدة الطول الثابتة (Unit Interval):</strong> المسافة الفاصلة بين أي عددين صحيحين متتاليين (مثل 0 و 1، أو 7 و 8) متطابقة وثابتة على طول الخط، وهي أساس المعايرة والقياس.
          </li>
        </ul>
      </section>

      {/* Section 2: الأعداد الموجبة والسالبة والمسافات المطلقة */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-[#127052] dark:text-[#5EB5A1]" />
          <h3 className={`text-lg sm:text-xl font-bold ${themeClasses.textPrimary}`}>
            2. الأعداد الموجبة والسالبة وحساب المسافة بين نقطتين
          </h3>
        </div>
        <p className={`text-sm sm:text-base ${themeClasses.textSecondary}`}>
          عند إدخال الأعداد السالبة، يصبح خط الأعداد مرآة رياضية متماثلة حول الصفر. لفهم سلوك هذه الأعداد بدقة، نعتمد على قاعدتين جوهريتين:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl border border-black/[0.08] dark:border-white/[0.08] bg-black/[0.02] dark:bg-white/[0.02] space-y-2">
            <h4 className="font-bold text-sm text-[#127052] dark:text-[#5EB5A1]">
              مقارنة البعد عن الصفر (القيمة المطلقة)
            </h4>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300">
              العدد <span className="font-mono font-bold">-5</span> يقع على بُعد 5 وحدات يسار الصفر، بينما العدد <span className="font-mono font-bold">+3</span> يبعد 3 وحدات يمينه. لذلك فإن <span className="font-mono font-bold">-5</span> أبعد عن الصفر من <span className="font-mono font-bold">+3</span>، مع أنه أصغر منه في الترتيب العددي العام.
            </p>
          </div>
          <div className="p-4 rounded-xl border border-black/[0.08] dark:border-white/[0.08] bg-black/[0.02] dark:bg-white/[0.02] space-y-2">
            <h4 className="font-bold text-sm text-[#127052] dark:text-[#5EB5A1]">
              قانون حساب المسافة الهندسية بين نقطتين
            </h4>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300">
              المسافة بين أي نقطتين <span className="font-mono font-bold">أ</span> و <span className="font-mono font-bold">ب</span> هي دائماً قيمة موجبة وتُحسب بالفرق المطلق: <span className="font-mono font-bold">المسافة = |ب - أ|</span>. فالمسافة بين <span className="font-mono font-bold">-3</span> و <span className="font-mono font-bold">4</span> هي: <span className="font-mono font-bold">|4 - (-3)| = |4 + 3| = 7 وحدات</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: النظام المتري المعياري للقياس */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <Ruler className="w-5 h-5 text-[#127052] dark:text-[#5EB5A1]" />
          <h3 className={`text-lg sm:text-xl font-bold ${themeClasses.textPrimary}`}>
            3. منظومة القياس المتري المعياري: الطول، الكتلة، والسعة
          </h3>
        </div>
        <p className={`text-sm sm:text-base ${themeClasses.textSecondary}`}>
          يعتمد النظام المتري العشري المعياري (SI) على مضاعفات وأجزاء العدد 10، مما يجعل التحويل بين وحداته عملية غاية في السلاسة والمنطق:
        </p>

        {/* Comparison Metric Table */}
        <div className="overflow-x-auto rounded-xl border border-black/[0.08] dark:border-white/[0.08]">
          <table className="w-full text-xs sm:text-sm text-right border-collapse">
            <thead>
              <tr className="bg-black/[0.04] dark:bg-white/[0.05] border-b border-black/[0.08] dark:border-white/[0.08]">
                <th className="p-3 font-bold">كمية القياس</th>
                <th className="p-3 font-bold">الوحدة الأساسية</th>
                <th className="p-3 font-bold">الوحدات الشائعة وعلاقات التحويل</th>
                <th className="p-3 font-bold">أمثلة تطبيقية واقعية</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-black/[0.06] dark:divide-white/[0.06]">
              <tr>
                <td className="p-3 font-bold text-[#127052] dark:text-[#5EB5A1]">قياس الطول (Length)</td>
                <td className="p-3">المتر (م / m)</td>
                <td className="p-3 font-mono text-[11px] sm:text-xs">
                  1 كم = 1000 م<br />
                  1 م = 100 سم = 1000 ملم<br />
                  1 سم = 10 ملم
                </td>
                <td className="p-3 text-zinc-600 dark:text-zinc-300">
                  3.5 متر = 350 سم<br />
                  المسافة بين المدن بالكيلومتر
                </td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-[#127052] dark:text-[#5EB5A1]">قياس الكتلة (Mass)</td>
                <td className="p-3">الكيلوجرام (كجم / kg)</td>
                <td className="p-3 font-mono text-[11px] sm:text-xs">
                  1 طن = 1000 كجم<br />
                  1 كجم = 1000 جرام (جم)<br />
                  1 جم = 1000 ملجم
                </td>
                <td className="p-3 text-zinc-600 dark:text-zinc-300">
                  2500 جرام = 2.5 كجم أرز<br />
                  شاحنات البضائع بالأطنان
                </td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-[#127052] dark:text-[#5EB5A1]">قياس السعة (Capacity)</td>
                <td className="p-3">اللتر (ل / L)</td>
                <td className="p-3 font-mono text-[11px] sm:text-xs">
                  1 لتر = 1000 ملليلتر (مل)<br />
                  1 لتر = 1000 سم³ (ديسيمتر مكعب)
                </td>
                <td className="p-3 text-zinc-600 dark:text-zinc-300">
                  قارورة ماء 1.5 لتر = 1500 مل<br />
                  جرعات الأدوية والمخابر بالمل
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 4: قراءة أدوات القياس والزمن المنقضي */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <Compass className="w-5 h-5 text-[#127052] dark:text-[#5EB5A1]" />
          <h3 className={`text-lg sm:text-xl font-bold ${themeClasses.textPrimary}`}>
            4. قراءة أدوات القياس وحساب الزمن المنقضي (Elapsed Time)
          </h3>
        </div>
        <p className={`text-sm sm:text-base ${themeClasses.textSecondary}`}>
          القياس العملي في المختبرات والورش والحياة اليومية يتطلب مهارتين تخصصيتين:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 rounded-xl border border-black/[0.08] dark:border-white/[0.08] bg-black/[0.02] dark:bg-white/[0.02] space-y-2">
            <h4 className="font-bold text-sm text-[#127052] dark:text-[#5EB5A1]">
              قراءة أدوات التدريج (المسطرة، الميزان، المخبار)
            </h4>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
              عند النظر إلى مؤشر ميزان أو سطح سائل في مخبار، يجب أولاً حساب قيمة أصغر تدريج (قيمة الخط الواحد)، ثم النظر بمستوى العين عمودياً (لتجنب خطأ زاوية النظر Parallax Error). إذا كان المؤشر في المنتصف تماماً بين 4 كجم و 5 كجم، فالقراءة الدقيقة هي 4.5 كجم.
            </p>
          </div>

          <div className="p-5 rounded-xl border border-black/[0.08] dark:border-white/[0.08] bg-black/[0.02] dark:bg-white/[0.02] space-y-2">
            <h4 className="font-bold text-sm text-[#127052] dark:text-[#5EB5A1]">
              الزمن المنقضي والتحويل الستيني
            </h4>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
              يتبع قياس الوقت نظاماً ستينياً (1 ساعة = 60 دقيقة، 1 دقيقة = 60 ثانية). لحساب الزمن المنقضي بين 8:15 و 9:00: نقفز أولاً إلى أقرب ساعة كاملة (من 8:15 إلى 9:00 = 45 دقيقة)، أو نطرح بالاستلاف الستيني (ساعة واحدة تعادل 60 دقيقة).
            </p>
          </div>
        </div>
      </section>

      {/* Section 5: المحيط والمساحة وقياس الزوايا */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <Layers className="w-5 h-5 text-[#127052] dark:text-[#5EB5A1]" />
          <h3 className={`text-lg sm:text-xl font-bold ${themeClasses.textPrimary}`}>
            5. الهندسة والقياس: المحيط، المساحة، والزوايا بالمنقلة
          </h3>
        </div>
        <p className={`text-sm sm:text-base ${themeClasses.textSecondary}`}>
          يمثل القياس الهندسي امتداداً ثنائي الأبعاد لمفهوم الطول:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl border border-black/[0.08] dark:border-white/[0.08] bg-black/[0.02] dark:bg-white/[0.02] space-y-1">
            <div className="font-bold text-sm text-[#127052] dark:text-[#5EB5A1]">المحيط (Perimeter)</div>
            <div className="text-xs text-zinc-500 dark:text-zinc-400">طول الإطار الخارجي بوحدات خطية (سم، م)</div>
            <div className="font-mono text-xs pt-1">محيط المستطيل = 2 × (الطول + العرض)</div>
            <div className="text-[11px] text-zinc-600 dark:text-zinc-400">مستطيل 6×4 سم: 2×(6+4) = 20 سم</div>
          </div>

          <div className="p-4 rounded-xl border border-black/[0.08] dark:border-white/[0.08] bg-black/[0.02] dark:bg-white/[0.02] space-y-1">
            <div className="font-bold text-sm text-[#127052] dark:text-[#5EB5A1]">المساحة (Area)</div>
            <div className="text-xs text-zinc-500 dark:text-zinc-400">الحيز الداخلي السطحي بوحدات مربعة (سم²، م²)</div>
            <div className="font-mono text-xs pt-1">مساحة المستطيل = الطول × العرض</div>
            <div className="text-[11px] text-zinc-600 dark:text-zinc-400">مستطيل 6×4 سم: 6 × 4 = 24 سم²</div>
          </div>

          <div className="p-4 rounded-xl border border-black/[0.08] dark:border-white/[0.08] bg-black/[0.02] dark:bg-white/[0.02] space-y-1">
            <div className="font-bold text-sm text-[#127052] dark:text-[#5EB5A1]">قياس الزوايا (Angles)</div>
            <div className="text-xs text-zinc-500 dark:text-zinc-400">مقدار الانفراج بين شعاعين بالدرجات (°)</div>
            <div className="font-mono text-xs pt-1">حادة (&lt;90°) | قائمة (=90°) | منفرجة (&gt;90°)</div>
            <div className="text-[11px] text-zinc-600 dark:text-zinc-400">الزاوية 115° أكبر من 90° فهي منفرجة</div>
          </div>
        </div>
      </section>

      {/* Section 6: خريطة الاختبارات الـ 12 */}
      <section className="space-y-4 pt-2">
        <div className="flex items-center gap-2">
          <Award className="w-5 h-5 text-[#127052] dark:text-[#5EB5A1]" />
          <h3 className={`text-lg sm:text-xl font-bold ${themeClasses.textPrimary}`}>
            6. خريطة الاختبارات التفاعلية الـ 12 (مسار التدرج والإتقان)
          </h3>
        </div>
        <p className={`text-sm ${themeClasses.textSecondary}`}>
          صممت الأكاديمية 12 اختباراً تفاعلياً مستقلاً يغطي كافة المهارات السابقة خطوة بخطوة، مع شهادة إتقان قابلة للطباعة لكل اختبار:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {[
            {
              id: 'whole-numbers-on-number-line',
              url: '/math/number-line-measurement/whole-numbers-on-number-line',
              num: 1,
              title: 'تمثيل الأعداد الكلية',
              desc: 'مواقع الأعداد والمسافات المتساوية وترتيب القيم',
            },
            {
              id: 'negative-positive-number-line',
              url: '/math/number-line-measurement/negative-positive-number-line',
              num: 2,
              title: 'الأعداد السالبة والموجبة',
              desc: 'البعد عن الصفر وتحديد المعكوسات الجمعية',
            },
            {
              id: 'fractions-decimals-number-line',
              url: '/math/number-line-measurement/fractions-decimals-number-line',
              num: 3,
              title: 'الكسور والأعداد العشرية',
              desc: 'تجزئة الفترة [0, 1] ومطابقة النصف والربع والأعشار',
            },
            {
              id: 'distance-between-points-number-line',
              url: '/math/number-line-measurement/distance-between-points-number-line',
              num: 4,
              title: 'حساب المسافات المطلقة',
              desc: 'قانون المسافة الفرق المطلق وحساب عدد الوحدات',
            },
            {
              id: 'measuring-length-standard-units',
              url: '/math/number-line-measurement/measuring-length-standard-units',
              num: 5,
              title: 'قياس الطول بالوحدات المترية',
              desc: 'التحويل بين المليمتر والسنتيمتر والمتر والكيلومتر',
            },
            {
              id: 'measuring-mass-weight',
              url: '/math/number-line-measurement/measuring-mass-weight',
              num: 6,
              title: 'قياس الكتلة والوزن',
              desc: 'الجرام والكيلوجرام والطن والتطبيقات الحياتية',
            },
            {
              id: 'measuring-capacity-volume',
              url: '/math/number-line-measurement/measuring-capacity-volume',
              num: 7,
              title: 'قياس السعة والحجم',
              desc: 'اللتر والملليلتر وتطبيقات السوائل والمشروبات',
            },
            {
              id: 'reading-measurement-tools',
              url: '/math/number-line-measurement/reading-measurement-tools',
              num: 8,
              title: 'قراءة أدوات القياس',
              desc: 'المسطرة والميزان والمخبار المدرج ومؤشرات التدريج',
            },
            {
              id: 'elapsed-time-calculation',
              url: '/math/number-line-measurement/elapsed-time-calculation',
              num: 9,
              title: 'حساب الوقت والزمن المنقضي',
              desc: 'الفترات الزمنية بين البداية والنهاية والتحويل الستيني',
            },
            {
              id: 'perimeter-and-area-simple-shapes',
              url: '/math/number-line-measurement/perimeter-and-area-simple-shapes',
              num: 10,
              title: 'المحيط والمساحة',
              desc: 'قوانين المستطيل والمربع والتمييز بين سم و سم²',
            },
            {
              id: 'angles-measurement-protractor',
              url: '/math/number-line-measurement/angles-measurement-protractor',
              num: 11,
              title: 'قياس الزوايا بالمنقلة',
              desc: 'تصنيف الزوايا (حادة، قائمة، منفرجة، مستقيمة) وقراءتها',
            },
            {
              id: 'number-line-measurement-word-problems',
              url: '/math/number-line-measurement/number-line-measurement-word-problems',
              num: 12,
              title: 'المسائل الكلامية والتطبيقية',
              desc: 'حركات الإزاحة على خط الأعداد ومسائل القياس الواقعية',
            },
          ].map((item) => (
            <a
              key={item.id}
              href={item.url}
              onClick={(e) => handleTestClick(item.url, item.id, e)}
              className={`p-3.5 rounded-xl border transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xs group ${themeClasses.border} hover:border-[#127052] dark:hover:border-[#5EB5A1] bg-black/[0.01] dark:bg-white/[0.02]`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="w-5 h-5 rounded-full bg-[#127052]/10 dark:bg-[#127052]/20 text-[#127052] dark:text-[#5EB5A1] flex items-center justify-center text-[10px] font-bold">
                  {item.num}
                </span>
                <ArrowRight className="w-3.5 h-3.5 rotate-180 text-zinc-400 group-hover:text-[#127052] dark:group-hover:text-[#5EB5A1] transition-colors" />
              </div>
              <h4 className={`text-xs font-bold ${themeClasses.textPrimary} group-hover:text-[#127052] dark:group-hover:text-[#5EB5A1] transition-colors`}>
                {item.title}
              </h4>
              <p className={`text-[11px] ${themeClasses.textSecondary} mt-1 line-clamp-1`}>
                {item.desc}
              </p>
            </a>
          ))}
        </div>
      </section>

      {/* Golden Tip Callout */}
      <footer className="p-5 rounded-xl bg-[#127052]/10 dark:bg-[#127052]/20 border border-[#127052]/20 dark:border-[#5EB5A1]/30 flex items-start gap-3">
        <Lightbulb className="w-6 h-6 text-[#127052] dark:text-[#5EB5A1] shrink-0 mt-0.5" />
        <div className="space-y-1">
          <h4 className="font-bold text-sm text-[#127052] dark:text-[#5EB5A1]">
            نصيحة الأكاديمية الذهبية للإتقان القياسي:
          </h4>
          <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
            عند حل أي مسألة قياس، ابدأ دائماً بالتأكد من <strong>تجانس الوحدات</strong> قبل الشروع في الجمع أو الطرح أو الضرب. فلا يمكنك جمع متر مع سنتيمتر، أو ضرب كجم في جرام مباشرة؛ بل قم أولاً بتوحيد الوحدات إلى الأصغر أو الأكبر وفق المطلوب في السؤال.
          </p>
        </div>
      </footer>
    </article>
  );
};
