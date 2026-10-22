import React, { useState } from 'react';
import { useEyeTheme } from '../context/ThemeContext';
import { Breadcrumbs } from '../components/Breadcrumbs';
import {
  ShieldCheck,
  FileText,
  Mail,
  Send,
  CheckCircle,
  HelpCircle,
  Sparkles,
  Layers,
  Heart,
  Eye,
} from 'lucide-react';

interface StaticPageViewProps {
  onGoHome: () => void;
}

/* =========================================
   1. سياسة الخصوصية (Privacy Policy)
========================================= */
export const PrivacyView: React.FC<StaticPageViewProps> = ({ onGoHome }) => {
  const { themeClasses } = useEyeTheme();

  return (
    <div className="space-y-6 pb-20 max-w-4xl mx-auto text-right">
      <Breadcrumbs
        items={[
          { label: 'الرئيسية', onClick: onGoHome },
          { label: 'سياسة الخصوصية', active: true },
        ]}
      />

      <div className={`p-6 sm:p-10 rounded-2xl border ${themeClasses.border} ${themeClasses.cardBg} space-y-6 shadow-2xs`}>
        <div className="flex items-center gap-3 pb-4 border-b border-black/[0.05] dark:border-white/[0.05]">
          <div className={`w-12 h-12 rounded-xl ${themeClasses.accentBg} border ${themeClasses.accentBorder} flex items-center justify-center text-xl text-[#127052] dark:text-[#5EB5A1]`}>
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h1 className={`text-xl sm:text-2xl font-bold ${themeClasses.textPrimary}`}>
              سياسة الخصوصية
            </h1>
            <p className={`text-xs ${themeClasses.textMuted}`}>
              آخر تحديث: {new Date().toLocaleDateString('ar-EG', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>

        <div className={`space-y-6 text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
          <section className="space-y-2">
            <h2 className={`text-base font-semibold ${themeClasses.textPrimary}`}>
              1. التزامنا بحماية خصوصيتك
            </h2>
            <p>
              نحن في "كويزات الرياضيات" نولي خصوصية زوارنا ومتعلمينا أهمية قصوى. تهدف هذه الوثيقة إلى توضيح كيفية تعاملنا مع البيانات عند تصفحك للموقع أو استخدامك للألغاز والاختبارات الرياضية.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className={`text-base font-semibold ${themeClasses.textPrimary}`}>
              2. التخزين المحلي (Local Storage)
            </h2>
            <p>
              تعتمد المنصة على التخزين المحلي في متصفحك لحفظ تفضيلاتك مثل:
            </p>
            <ul className="list-disc list-inside space-y-1 pr-2">
              <li>نمط الراحة البصرية المفضل (الهادئ، الدافئ، الليلي).</li>
              <li>الأسئلة والاختبارات المخصصة التي تقوم بإضافتها بنفسك في أي قسم.</li>
              <li>تقدمك في حل الألغاز والتجارب دون إرسالها إلى أي خوادم خارجية تابعة لجهات ثالثة.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className={`text-base font-semibold ${themeClasses.textPrimary}`}>
              3. ملفات تعريف الارتباط والتحليلات
            </h2>
            <p>
              الموقع مصمم ليكون بيئة هادئة وخالية من الإعلانات المزعجة أو أدوات التتبع المتطفلة. لا نقوم ببيع أو مشاركة أي بيانات شخصية مع أي جهة تجارية.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className={`text-base font-semibold ${themeClasses.textPrimary}`}>
              4. التعديلات على هذه السياسة
            </h2>
            <p>
              قد نقوم بتحديث سياسة الخصوصية من حين لآخر لمواكبة تطوير المنصة وإضافة مزايا جديدة. سيتم نشر أي تغيير على هذه الصفحة مباشرة.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

/* =========================================
   2. شروط الاستخدام (Terms of Use)
========================================= */
export const TermsView: React.FC<StaticPageViewProps> = ({ onGoHome }) => {
  const { themeClasses } = useEyeTheme();

  return (
    <div className="space-y-6 pb-20 max-w-4xl mx-auto text-right">
      <Breadcrumbs
        items={[
          { label: 'الرئيسية', onClick: onGoHome },
          { label: 'شروط الاستخدام', active: true },
        ]}
      />

      <div className={`p-6 sm:p-10 rounded-2xl border ${themeClasses.border} ${themeClasses.cardBg} space-y-6 shadow-2xs`}>
        <div className="flex items-center gap-3 pb-4 border-b border-black/[0.05] dark:border-white/[0.05]">
          <div className={`w-12 h-12 rounded-xl ${themeClasses.accentBg} border ${themeClasses.accentBorder} flex items-center justify-center text-xl text-[#127052] dark:text-[#5EB5A1]`}>
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <h1 className={`text-xl sm:text-2xl font-bold ${themeClasses.textPrimary}`}>
              شروط الاستخدام
            </h1>
            <p className={`text-xs ${themeClasses.textMuted}`}>
              القواعد والشروط المنظمة لاستخدام منصة كويزات الرياضيات
            </p>
          </div>
        </div>

        <div className={`space-y-6 text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
          <section className="space-y-2">
            <h2 className={`text-base font-semibold ${themeClasses.textPrimary}`}>
              1. قبول الشروط
            </h2>
            <p>
              بدخولك إلى "كويزات الرياضيات" واستخدامك لمحتواها وأقسامها، فإنك توافق على الالتزام بشروط الاستخدام الموضحة هنا وجميع القوانين واللوائح المعمول بها.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className={`text-base font-semibold ${themeClasses.textPrimary}`}>
              2. الاستخدام التعليمي الشخصي
            </h2>
            <p>
              يُسمح باستخدام المنصة لأغراض التعلّم الشخصي والتدريب الصفي والأكاديمي. يمكنك حل الكويزات والألغاز والاستفادة من النماذج الهيكلية بكل حرية وأمان.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className={`text-base font-semibold ${themeClasses.textPrimary}`}>
              3. حقوق الملكية الفكرية
            </h2>
            <p>
              جميع الواجهات البرمجية، التصاميم المريحة للعين، الهيكلية التنظيمية للمجالات والأقسام، والرموز المعروضة في المنصة هي ملك لمنصة "كويزات الرياضيات" وتخضع لحماية حقوق الملكية.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className={`text-base font-semibold ${themeClasses.textPrimary}`}>
              4. إخلاء المسؤولية
            </h2>
            <p>
              يتم توفير المحتوى الرياضي والأدوات التعليمية على أساس "كما هي" دون ضمانات صريحة أو ضمنية، ونحرص دوماً على مراجعة دقة النماذج والمفاهيم العلمية.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

/* =========================================
   3. اتصل بنا (Contact Us)
========================================= */
export const ContactView: React.FC<StaticPageViewProps> = ({ onGoHome }) => {
  const { themeClasses } = useEyeTheme();
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <div className="space-y-6 pb-20 max-w-4xl mx-auto text-right">
      <Breadcrumbs
        items={[
          { label: 'الرئيسية', onClick: onGoHome },
          { label: 'اتصل بنا', active: true },
        ]}
      />

      <div className={`p-6 sm:p-10 rounded-2xl border ${themeClasses.border} ${themeClasses.cardBg} space-y-6 shadow-2xs`}>
        <div className="flex items-center gap-3 pb-4 border-b border-black/[0.05] dark:border-white/[0.05]">
          <div className={`w-12 h-12 rounded-xl ${themeClasses.accentBg} border ${themeClasses.accentBorder} flex items-center justify-center text-xl text-[#127052] dark:text-[#5EB5A1]`}>
            <Mail className="w-6 h-6" />
          </div>
          <div>
            <h1 className={`text-xl sm:text-2xl font-bold ${themeClasses.textPrimary}`}>
              اتصل بنا
            </h1>
            <p className={`text-xs ${themeClasses.textMuted}`}>
              نسعد باستقبال استفساراتك، اقتراحاتك، وملاحظاتك حول المنصة
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          {/* Quick info column */}
          <div className="space-y-4 text-xs sm:text-sm">
            <div className={`p-4 rounded-xl border ${themeClasses.border} ${themeClasses.pillBg} space-y-2`}>
              <span className={`font-semibold ${themeClasses.textPrimary} block`}>
                الدعم التعليمي والفني
              </span>
              <p className={themeClasses.textSecondary}>
                فريق المنصة متاح لمساعدتك في استفسارات إضافة المحتوى والمقترحات التطويرية.
              </p>
              <div className="pt-2 font-mono text-xs text-[#127052] dark:text-[#5EB5A1] dir-ltr text-right">
                support@math-quiz.edu
              </div>
            </div>

            <div className={`p-4 rounded-xl border ${themeClasses.border} ${themeClasses.pillBg} space-y-1`}>
              <span className={`font-semibold ${themeClasses.textPrimary} block`}>
                أوقات الاستجابة
              </span>
              <p className={themeClasses.textMuted}>
                نرد عادةً خلال 24 إلى 48 ساعة عمل.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-4">
              {sent && (
                <div className="p-3.5 rounded-xl bg-emerald-50 text-emerald-800 text-xs border border-emerald-200 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>شكراً لتواصلك! تم استلام رسالتك وسنرد عليك في أقرب وقت.</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <label className={`text-xs font-medium ${themeClasses.textPrimary}`}>
                    الاسم الكامل <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="اكتب اسمك..."
                    className={`w-full p-2.5 rounded-xl border ${themeClasses.border} bg-transparent text-xs sm:text-sm ${themeClasses.textPrimary} placeholder:${themeClasses.textMuted} outline-none focus:ring-2 focus:ring-[#127052]/30`}
                  />
                </div>

                <div className="space-y-1.5">
                  <label className={`text-xs font-medium ${themeClasses.textPrimary}`}>
                    البريد الإلكتروني <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="example@mail.com"
                    className={`w-full p-2.5 rounded-xl border ${themeClasses.border} bg-transparent text-xs sm:text-sm ${themeClasses.textPrimary} placeholder:${themeClasses.textMuted} outline-none focus:ring-2 focus:ring-[#127052]/30`}
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className={`text-xs font-medium ${themeClasses.textPrimary}`}>
                  موضوع الرسالة
                </label>
                <input
                  type="text"
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  placeholder="اقتراح / استفسار / محتوى جديد..."
                  className={`w-full p-2.5 rounded-xl border ${themeClasses.border} bg-transparent text-xs sm:text-sm ${themeClasses.textPrimary} placeholder:${themeClasses.textMuted} outline-none focus:ring-2 focus:ring-[#127052]/30`}
                />
              </div>

              <div className="space-y-1.5">
                <label className={`text-xs font-medium ${themeClasses.textPrimary}`}>
                  نص الرسالة <span className="text-rose-500">*</span>
                </label>
                <textarea
                  rows={4}
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="اكتب رسالتك أو اقتراحك هنا بكل وضوح..."
                  className={`w-full p-3 rounded-xl border ${themeClasses.border} bg-transparent text-xs sm:text-sm ${themeClasses.textPrimary} placeholder:${themeClasses.textMuted} outline-none focus:ring-2 focus:ring-[#127052]/30`}
                />
              </div>

              <button
                type="submit"
                className="px-6 py-2.5 rounded-xl text-xs sm:text-sm font-medium text-white bg-[#127052] hover:bg-[#0D5F45] transition-colors shadow-2xs flex items-center gap-2 cursor-pointer mr-auto"
              >
                <Send className="w-4 h-4" />
                <span>إرسال الرسالة</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

/* =========================================
   4. من نحن (About Us)
========================================= */
export const AboutView: React.FC<StaticPageViewProps> = ({ onGoHome }) => {
  const { themeClasses } = useEyeTheme();

  return (
    <div className="space-y-6 pb-20 max-w-4xl mx-auto text-right">
      <Breadcrumbs
        items={[
          { label: 'الرئيسية', onClick: onGoHome },
          { label: 'من نحن', active: true },
        ]}
      />

      <div className={`p-6 sm:p-10 rounded-2xl border ${themeClasses.border} ${themeClasses.cardBg} space-y-8 shadow-2xs`}>
        <div className="flex items-center gap-3 pb-4 border-b border-black/[0.05] dark:border-white/[0.05]">
          <div className={`w-12 h-12 rounded-xl ${themeClasses.accentBg} border ${themeClasses.accentBorder} flex items-center justify-center text-xl text-[#127052] dark:text-[#5EB5A1]`}>
            <Heart className="w-6 h-6" />
          </div>
          <div>
            <h1 className={`text-xl sm:text-2xl font-bold ${themeClasses.textPrimary}`}>
              من نحن
            </h1>
            <p className={`text-xs ${themeClasses.textMuted}`}>
              رسالتنا ورؤيتنا في تبسيط وتقديم الرياضيات بأسلوب عصري وهادئ
            </p>
          </div>
        </div>

        <div className={`space-y-6 text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
          <section className="space-y-2">
            <h2 className={`text-base font-semibold ${themeClasses.textPrimary}`}>
              رؤية المنصة
            </h2>
            <p>
              "كويزات الرياضيات" هي منصة تعليمية عربية تسعى إلى إتاحة تجربة مميزة ومريحة لحل الألغاز واختبارات الرياضيات. نؤمن بأن الرياضيات علم جميل ومنطقي، وأن التفاعل معه يجب أن يكون ممتعاً، منظماً، وخالياً من التشتت البصري والإجهاد الذهني.
            </p>
          </section>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className={`p-4 rounded-xl border ${themeClasses.border} ${themeClasses.pillBg} space-y-2`}>
              <div className="flex items-center gap-2 text-sm font-semibold text-[#127052] dark:text-[#5EB5A1]">
                <Eye className="w-4 h-4" />
                <span>راحة بصرية فائقة</span>
              </div>
              <p className="text-xs">
                ألوان هادئة وطباعة متوازنة تم تصميمها بعناية لتقليل إجهاد العين أثناء التفكير والتركيز الطويل.
              </p>
            </div>

            <div className={`p-4 rounded-xl border ${themeClasses.border} ${themeClasses.pillBg} space-y-2`}>
              <div className="flex items-center gap-2 text-sm font-semibold text-[#127052] dark:text-[#5EB5A1]">
                <Layers className="w-4 h-4" />
                <span>هيكلة شمولية</span>
              </div>
              <p className="text-xs">
                تغطية دقيقة لـ 7 مجالات كبرى و 36 تصنيفاً فرعياً تمتد من الحساب الأساسي حتى الرياضيات المتقدمة.
              </p>
            </div>

            <div className={`p-4 rounded-xl border ${themeClasses.border} ${themeClasses.pillBg} space-y-2`}>
              <div className="flex items-center gap-2 text-sm font-semibold text-[#127052] dark:text-[#5EB5A1]">
                <Sparkles className="w-4 h-4" />
                <span>روابط مستقلة</span>
              </div>
              <p className="text-xs">
                مسار ورابط خاص ومباشر لكل قسم فرعي لتيسير المشاركة والدراسة المركّزة.
              </p>
            </div>
          </div>

          <section className="space-y-2 pt-2">
            <h2 className={`text-base font-semibold ${themeClasses.textPrimary}`}>
              رسالتنا للمتعلمين والمعلمين
            </h2>
            <p>
              نهدف لتمكين الطلاب والمعلمين وعشاق الرياضيات من بناء مكتبة ألغاز وكويزات متكاملة، يسهل تصفحها والتفاعل معها بسلاسة من الهاتف والكمبيوتر.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
