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
} from 'lucide-react';
import { useEyeTheme } from '../context/ThemeContext';
import { navigateTo } from '../navigation/router';

interface GeometricShapesPillarArticleProps {
  onOpenTest?: (testId: string) => void;
  className?: string;
}

export const GeometricShapesPillarArticle: React.FC<GeometricShapesPillarArticleProps> = ({
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
      id="geometric-shapes-pillar-guide"
      className={`p-6 sm:p-10 rounded-2xl border ${themeClasses.border} ${themeClasses.cardBg} space-y-8 shadow-2xs leading-relaxed text-right ${className}`}
    >
      {/* Pillar Article Header */}
      <header className="space-y-3 pb-6 border-b border-black/[0.06] dark:border-white/[0.08]">
        <div className="flex items-center gap-2 text-xs font-bold text-amber-600 dark:text-amber-400">
          <BookOpen className="w-4 h-4" />
          <span>المقالة المرجعية الشاملة (Pillar Guide) | أكاديمية كويزات الرياضيات</span>
        </div>

        <h2 className={`text-xl sm:text-3xl font-extrabold tracking-tight ${themeClasses.textPrimary}`}>
          الدليل المرجعي الشامل للأشكال الهندسية والمجسمات: من المضلعات الثنائية والدوائر إلى الأجسام الفضائية والتحويلات ونظرية فيثاغورس
        </h2>

        <p className={`text-sm sm:text-base ${themeClasses.textSecondary} leading-relaxed`}>
          مرجع هندسي وتربوي متكامل يغطي 12 مهارة واختباراً مستقلاً في هندسة الأشكال المستوية والمجسمات الفراغية؛
          صُمم هذا الدليل لتمكين الطلاب والمعلمين من الربط بين النظريات الإقليدية الكلاسيكية، وقوانين المحيط والمساحة والحجم،
          وتطبيقات النمذجة الواقعية في العمارة والملاحة والتصميم.
        </p>
      </header>

      {/* Structured Directory / Index of 12 Quizzes */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className={`text-base sm:text-lg font-bold flex items-center gap-2 ${themeClasses.textPrimary}`}>
            <Layers className="w-5 h-5 text-amber-600 dark:text-amber-400" />
            <span>فهرس الاختبارات الـ 12 المتاحة في هذا القسم</span>
          </h3>
          <span className={`text-xs ${themeClasses.textMuted}`}>12 اختباراً متخصصاً مع تقييم فوري</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            {
              id: 'shapes-2d-properties',
              title: '1. التعرف على الأشكال الثنائية الأبعاد وخصائصها (2D Shapes)',
              desc: 'تمييز متوازي الأضلاع والمستطيل والمعين والمربع وشبه المنحرف وخصائص الأقطار والتوازي.',
              url: '/domain/geometry-trigonometry/geometric-shapes/shapes-2d-properties',
            },
            {
              id: 'triangle-classification-sides-angles',
              title: '2. تصنيف المثلثات حسب الأضلاع والزوايا',
              desc: 'متطابق الأضلاع، متطابق الضلعين، مختلف الأضلاع، حاد، قائم، ومنفرج الزاوية ومتباينة المثلث.',
              url: '/domain/geometry-trigonometry/geometric-shapes/triangle-classification-sides-angles',
            },
            {
              id: 'angles-sum-triangles-quadrilaterals',
              title: '3. مجموع زوايا المثلث والأشكال الرباعية',
              desc: 'قاعدة 180° للمثلث و 360° للرباعي، والزاوية الخارجية، وقانون زوايا المضلع المنتظم (n-2)×180°.',
              url: '/domain/geometry-trigonometry/geometric-shapes/angles-sum-triangles-quadrilaterals',
            },
            {
              id: 'perimeter-plane-shapes',
              title: '4. حساب المحيط للأشكال الهندسية المستوية',
              desc: 'حساب المسافة الخطية المحيطة بالمثلث، المربع، المستطيل، المضلعات المنتظمة، والأشكال المركبة.',
              url: '/domain/geometry-trigonometry/geometric-shapes/perimeter-plane-shapes',
            },
            {
              id: 'area-plane-shapes-polygons',
              title: '5. حساب مساحة الأشكال المستوية (المربع، المستطيل، المثلث، شبه المنحرف)',
              desc: 'قوانين التغطية السطحية: s²، L×W، ½ b h، وقانون شبه المنحرف ½ (b₁+b₂) h.',
              url: '/domain/geometry-trigonometry/geometric-shapes/area-plane-shapes-polygons',
            },
            {
              id: 'circle-properties-area-circumference',
              title: '6. خصائص الدائرة (القطر، نصف القطر، المحيط، المساحة)',
              desc: 'أسرار الثابت π، محيط الدائرة 2πr، مساحة الدائرة πr²، والقطاعات والأقواس.',
              url: '/domain/geometry-trigonometry/geometric-shapes/circle-properties-area-circumference',
            },
            {
              id: 'shapes-3d-faces-edges-vertices',
              title: '7. الأشكال الثلاثية الأبعاد والخصائص (الرؤوس، الأحرف، الأوجه)',
              desc: 'المكعب، متوازي المستطيلات، الأسطوانة، المخروط، الهرم، الكرة، وعلاقة أويلر F + V = E + 2.',
              url: '/domain/geometry-trigonometry/geometric-shapes/shapes-3d-faces-edges-vertices',
            },
            {
              id: 'volume-3d-solids',
              title: '8. حساب حجم المجسمات (المكعب، متوازي المستطيلات، الاسطوانة)',
              desc: 'قاعدة الحجم V = B × h، وقانون الثلث ⅓ للأهرامات والمخاريط، وحسابات السعة باللتر.',
              url: '/domain/geometry-trigonometry/geometric-shapes/volume-3d-solids',
            },
            {
              id: 'surface-area-3d-solids',
              title: '9. حساب المساحة السطحية للمجسمات (Surface Area)',
              desc: 'المساحة السطحية الكلية والجانبية للمكعب، متوازي المستطيلات، والأسطوانة الدورانية.',
              url: '/domain/geometry-trigonometry/geometric-shapes/surface-area-3d-solids',
            },
            {
              id: 'geometric-transformations-reflections-rotations',
              title: '10. التحويلات الهندسية (الانعكاس، الانسحاب، الدوران)',
              desc: 'تحويلات التطابق الإيزومترية في المستوى الإحداثي، قواعد الإحداثيات، والتناظر الانعكاسي والدوراني.',
              url: '/domain/geometry-trigonometry/geometric-shapes/geometric-transformations-reflections-rotations',
            },
            {
              id: 'similarity-congruence-pythagoras',
              title: '11. التشابه والتطابق ونظرية فيثاغورس',
              desc: 'شروط تطابق المثلثات، نسبة التشابه ونسب المساحات k²، وتطبيقات فيثاغورس a² + b² = c².',
              url: '/domain/geometry-trigonometry/geometric-shapes/similarity-congruence-pythagoras',
            },
            {
              id: 'geometric-shapes-word-problems',
              title: '12. المسائل الكلامية والتطبيقية على الأشكال الهندسية',
              desc: 'النمذجة الرياضية لتقدير تكاليف الدهان والتبليط والتسييج، والتخزين وسعة الخزانات.',
              url: '/domain/geometry-trigonometry/geometric-shapes/geometric-shapes-word-problems',
            },
          ].map((item) => (
            <a
              key={item.id}
              href={item.url}
              onClick={(e) => handleTestClick(item.url, item.id, e)}
              className={`p-3.5 rounded-xl border ${themeClasses.border} ${themeClasses.cardHoverBg} block text-right group transition-all hover:border-amber-500/30 cursor-pointer`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className={`text-xs font-bold ${themeClasses.textPrimary} group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors`}>
                  {item.title}
                </span>
                <ArrowRight className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400 rotate-180 group-hover:-translate-x-1 transition-transform" />
              </div>
              <p className={`text-xs ${themeClasses.textMuted} leading-relaxed`}>
                {item.desc}
              </p>
            </a>
          ))}
        </div>
      </section>

      {/* Core Concepts */}
      <section className="space-y-4">
        <h3 className={`text-base sm:text-lg font-bold flex items-center gap-2 ${themeClasses.textPrimary}`}>
          <Compass className="w-5 h-5 text-amber-600 dark:text-amber-400" />
          <span>المفاهيم الجوهرية وخريطة التدرج الهندسي</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className={`p-4 rounded-xl border ${themeClasses.border} ${themeClasses.cardHoverBg} space-y-2`}>
            <div className="text-amber-600 dark:text-amber-400 font-bold text-sm flex items-center gap-1.5">
              <span className="p-1 rounded bg-amber-500/10 text-xs">1</span>
              <span>الأشكال ثنائية الأبعاد (2D)</span>
            </div>
            <p className={`text-xs ${themeClasses.textMuted} leading-relaxed`}>
              تختص بالمضلعات المستوية والدوائر، مع التركيز على العلاقات بين الزوايا، وخصائص الأقطار، وقوانين المحيط الخطي والمساحة المربعة المغلقة.
            </p>
          </div>

          <div className={`p-4 rounded-xl border ${themeClasses.border} ${themeClasses.cardHoverBg} space-y-2`}>
            <div className="text-orange-600 dark:text-orange-400 font-bold text-sm flex items-center gap-1.5">
              <span className="p-1 rounded bg-orange-500/10 text-xs">2</span>
              <span>المجسمات ثلاثية الأبعاد (3D)</span>
            </div>
            <p className={`text-xs ${themeClasses.textMuted} leading-relaxed`}>
              تغطي متعددات السطوح والمجسمات الدورانية، وعلاقة أويلر (F+V=E+2)، والشبكات المستوية، وحسابات الحجم التكعيبي والمساحة السطحية الكلية والجانبية.
            </p>
          </div>

          <div className={`p-4 rounded-xl border ${themeClasses.border} ${themeClasses.cardHoverBg} space-y-2`}>
            <div className="text-yellow-600 dark:text-yellow-400 font-bold text-sm flex items-center gap-1.5">
              <span className="p-1 rounded bg-yellow-500/10 text-xs">3</span>
              <span>التحويلات وتطبيقات الواقع</span>
            </div>
            <p className={`text-xs ${themeClasses.textMuted} leading-relaxed`}>
              تحويلات التطابق الإيزومترية في المستوى الإحداثي، نظرية فيثاغورس، ونمذجة سيناريوهات الحياة اليومية كالتسييج والتبليط وحساب التكاليف.
            </p>
          </div>
        </div>
      </section>

      {/* Practical Tips & Pitfalls */}
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="p-5 rounded-xl bg-amber-500/10 border border-amber-500/20 space-y-2">
          <div className="flex items-center gap-2 text-amber-700 dark:text-amber-300 font-bold text-sm">
            <Lightbulb className="w-4 h-4" />
            <span>نصائح ذهبية لإتقان الهندسة</span>
          </div>
          <ul className={`text-xs ${themeClasses.textSecondary} space-y-1.5 list-disc list-inside leading-relaxed`}>
            <li>ارسم دائماً شكلاً تخطيطياً سريعاً لتوضيح المعطيات قبل كتابة أي معادلة.</li>
            <li>فرّق بين الارتفاع العمودي الساقط بزاوية 90° وطول الضلع المائل في المثلث ومتوازي الأضلاع.</li>
            <li>اقسم القطر على 2 دائماً للحصول على نصف القطر r قبل تطبيق قانون مساحة الدائرة πr².</li>
          </ul>
        </div>

        <div className="p-5 rounded-xl bg-rose-500/10 border border-rose-500/20 space-y-2">
          <div className="flex items-center gap-2 text-rose-700 dark:text-rose-300 font-bold text-sm">
            <TrendingUp className="w-4 h-4" />
            <span>أخطاء شائعة احذر الوقوع فيها</span>
          </div>
          <ul className={`text-xs ${themeClasses.textSecondary} space-y-1.5 list-disc list-inside leading-relaxed`}>
            <li>الخلط بين المحيط (طول السياج الخارجي) والمساحة (السطح الداخلي).</li>
            <li>اعتقاد أن نسبة المساحات بين مثلثين متشابهين تساوي نسبة الأضلاع؛ فالنسبة تعادل مربع نسبة الأضلاع (k²).</li>
            <li>نسيان القسمة على 3 في قوانين حجم الهرم والمخروط (⅓ B h).</li>
          </ul>
        </div>
      </section>

      {/* Call to action footer */}
      <footer className="pt-4 border-t border-black/[0.06] dark:border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-xs text-amber-600 dark:text-amber-400 font-medium flex items-center gap-1.5">
          <Award className="w-4 h-4" />
          <span>كل اختبار يمنحك شهادة إتقان فورية ومقالة متخصصة بأكثر من 350 كلمة</span>
        </div>
        <button
          onClick={() => navigateTo('/domain/geometry-trigonometry/geometric-shapes/shapes-2d-properties')}
          className="px-5 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-semibold text-xs sm:text-sm transition-colors flex items-center gap-2 cursor-pointer shadow-xs"
        >
          <span>ابدأ بالاختبار الأول: الأشكال الثنائية الأبعاد</span>
          <ArrowRight className="w-4 h-4 rotate-180" />
        </button>
      </footer>
    </article>
  );
};
