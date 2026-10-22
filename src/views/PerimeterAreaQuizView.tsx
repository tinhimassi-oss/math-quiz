import React, { useState } from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { useEyeTheme } from '../context/ThemeContext';
import { PerimeterAreaBacklinkBox } from '../components/PerimeterAreaBacklinkBox';
import {
  PERIMETER_AREA_QUIZZES,
  PerimeterAreaQuizType,
} from '../data/perimeterAreaTestsData';
import {
  CheckCircle2,
  XCircle,
  RotateCcw,
  ArrowRight,
  ArrowLeft,
  Share2,
  Check,
  Award,
  Sparkles,
  BookOpen,
  Lightbulb,
} from 'lucide-react';

interface PerimeterAreaQuizViewProps {
  quizType: PerimeterAreaQuizType;
  onGoHome: () => void;
  onGoDomain: () => void;
  onGoPerimeterArea: () => void;
}

export const PerimeterAreaQuizView: React.FC<PerimeterAreaQuizViewProps> = ({
  quizType,
  onGoHome,
  onGoDomain,
  onGoPerimeterArea,
}) => {
  const { themeClasses } = useEyeTheme();
  const config =
    PERIMETER_AREA_QUIZZES[quizType] ||
    PERIMETER_AREA_QUIZZES['perimeter-basic-polygons'];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [isCompleted, setIsCompleted] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [copiedUrl, setCopiedUrl] = useState(false);
  const [showCertificate, setShowCertificate] = useState(false);
  const [studentName, setStudentName] = useState('');

  const currentQ = config.questions[currentIndex];
  const selectedAnswer = selectedAnswers[currentQ.id];

  // Sound synthesis
  const playTone = (isSuccess: boolean) => {
    try {
      const ctx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      if (isSuccess) {
        osc.frequency.setValueAtTime(587.33, ctx.currentTime); // D5
        osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.15); // A5
        gain.gain.setValueAtTime(0.15, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.2);
        osc.start();
        osc.stop(ctx.currentTime + 0.2);
      } else {
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(220, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(130, ctx.currentTime + 0.25);
        gain.gain.setValueAtTime(0.15, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.25);
        osc.start();
        osc.stop(ctx.currentTime + 0.25);
      }
    } catch {
      // AudioContext unavailable
    }
  };

  const handleSelectOption = (idx: number) => {
    if (selectedAnswer !== undefined) return;
    const isCorrect = idx === currentQ.correctAnswer;
    playTone(isCorrect);
    setSelectedAnswers((prev) => ({ ...prev, [currentQ.id]: idx }));
  };

  const handleNext = () => {
    setShowHint(false);
    if (currentIndex < config.questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setIsCompleted(true);
      // Fanfare sound on completion
      try {
        const ctx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
        const notes = [523.25, 659.25, 783.99, 1046.5];
        notes.forEach((freq, i) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.connect(gain);
          osc.frequency.value = freq;
          gain.gain.setValueAtTime(0.12, ctx.currentTime + i * 0.1);
          gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + i * 0.1 + 0.25);
          osc.start(ctx.currentTime + i * 0.1);
          osc.stop(ctx.currentTime + i * 0.1 + 0.25);
        });
      } catch {
        // AudioContext unavailable
      }
    }
  };

  const handlePrev = () => {
    setShowHint(false);
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setCurrentIndex(0);
    setIsCompleted(false);
    setShowHint(false);
    setShowCertificate(false);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: config.title,
        text: `شاركت في ${config.title} في منصة كويزات الرياضيات!`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopiedUrl(true);
      setTimeout(() => setCopiedUrl(false), 2000);
    }
  };

  const score = Object.entries(selectedAnswers).reduce((acc, [qid, ans]) => {
    const q = config.questions.find((item) => item.id === Number(qid));
    return q && q.correctAnswer === ans ? acc + 1 : acc;
  }, 0);

  const percentage = Math.round((score / config.questions.length) * 100);

  const breadcrumbItems = [
    { label: 'الرئيسية', onClick: onGoHome },
    { label: 'الهندسة وحساب المثلثات', onClick: onGoDomain },
    { label: 'المحيط والمساحة', onClick: onGoPerimeterArea },
    { label: config.title },
  ];

  return (
    <div className="space-y-6 pb-12">
      {/* Top Breadcrumb Navigation */}
      <Breadcrumbs items={breadcrumbItems} />

      {/* Quiz Card */}
      <div className={`p-6 sm:p-8 rounded-2xl border ${themeClasses.border} ${themeClasses.cardBg} shadow-2xs relative`}>
        {/* Header bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-black/[0.06] dark:border-white/[0.08]">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                {config.badge}
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400">
                {config.domain} / {config.subdomain}
              </span>
            </div>
            <h1 className={`text-xl sm:text-2xl font-black ${themeClasses.textPrimary}`}>
              {config.title}
            </h1>
            <p className={`text-xs sm:text-sm mt-1 ${themeClasses.textSecondary}`}>
              {config.subtitle}
            </p>
          </div>

          <div className="flex items-center gap-2 self-end sm:self-auto">
            <button
              onClick={handleShare}
              className={`p-2 rounded-xl border ${themeClasses.border} hover:bg-black/5 dark:hover:bg-white/5 transition-colors text-gray-600 dark:text-gray-300 flex items-center gap-1.5 text-xs font-semibold`}
              title="مشاركة الاختبار"
            >
              {copiedUrl ? <Check className="w-4 h-4 text-emerald-500" /> : <Share2 className="w-4 h-4" />}
              <span>{copiedUrl ? 'تم النسخ!' : 'مشاركة'}</span>
            </button>

            <button
              onClick={handleReset}
              className={`p-2 rounded-xl border ${themeClasses.border} hover:bg-black/5 dark:hover:bg-white/5 transition-colors text-gray-600 dark:text-gray-300 flex items-center gap-1.5 text-xs font-semibold`}
              title="إعادة بدء الاختبار"
            >
              <RotateCcw className="w-4 h-4" />
              <span>إعادة</span>
            </button>
          </div>
        </div>

        {/* Quiz Progress & Question Area */}
        {!isCompleted ? (
          <div className="pt-6 space-y-6">
            {/* Progress Bar & Indicators */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-semibold text-gray-500 dark:text-gray-400">
                <span>السؤال {currentIndex + 1} من {config.questions.length}</span>
                <span>المجاب: {Object.keys(selectedAnswers).length} / {config.questions.length}</span>
              </div>
              <div className="w-full h-2 rounded-full bg-black/5 dark:bg-white/5 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-300"
                  style={{ width: `${((currentIndex + 1) / config.questions.length) * 100}%` }}
                />
              </div>
            </div>

            {/* Question Text */}
            <div className="space-y-2">
              <div className="flex items-start justify-between gap-4">
                <h3 className={`text-base sm:text-lg font-bold leading-relaxed ${themeClasses.textPrimary}`}>
                  {currentQ.question}
                </h3>
              </div>

              {currentQ.hint && (
                <div className="pt-1">
                  <button
                    onClick={() => setShowHint(!showHint)}
                    className="text-xs text-amber-600 dark:text-amber-400 font-semibold hover:underline flex items-center gap-1"
                  >
                    <Lightbulb className="w-3.5 h-3.5" />
                    <span>{showHint ? 'إخفاء التلميح' : 'إظهار تلميح الحل'}</span>
                  </button>
                  {showHint && (
                    <div className="mt-2 p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-800 dark:text-amber-300">
                      تنبيه: {currentQ.hint}
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Options */}
            <div className="grid grid-cols-1 gap-2.5 pt-2">
              {currentQ.options.map((option, idx) => {
                const isSelected = selectedAnswer === idx;
                const isCorrect = currentQ.correctAnswer === idx;
                const hasAnswered = selectedAnswer !== undefined;

                let btnStyles = `p-4 rounded-xl border text-sm font-semibold text-right transition-all flex items-center justify-between ${themeClasses.border} hover:bg-black/5 dark:hover:bg-white/5`;

                if (hasAnswered) {
                  if (isCorrect) {
                    btnStyles = 'p-4 rounded-xl border text-sm font-semibold text-right transition-all flex items-center justify-between bg-emerald-500/15 border-emerald-500 text-emerald-800 dark:text-emerald-200';
                  } else if (isSelected) {
                    btnStyles = 'p-4 rounded-xl border text-sm font-semibold text-right transition-all flex items-center justify-between bg-red-500/15 border-red-500 text-red-800 dark:text-red-200';
                  } else {
                    btnStyles = `p-4 rounded-xl border text-sm font-semibold text-right transition-all flex items-center justify-between opacity-50 ${themeClasses.border}`;
                  }
                }

                return (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(idx)}
                    disabled={hasAnswered}
                    className={btnStyles}
                  >
                    <span className="flex-1 text-right">{option}</span>
                    {hasAnswered && isCorrect && (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mr-2" />
                    )}
                    {hasAnswered && isSelected && !isCorrect && (
                      <XCircle className="w-5 h-5 text-red-600 shrink-0 mr-2" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Explanation when answered */}
            {selectedAnswer !== undefined && (
              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs sm:text-sm space-y-2">
                <div className="flex items-center gap-1.5 font-bold text-emerald-700 dark:text-emerald-300">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>الشرح الرياضي النموذجي:</span>
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {currentQ.explanation}
                </p>
                {currentQ.formula && (
                  <div className="pt-1 text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400">
                    القاعدة أو المعادلة: {currentQ.formula}
                  </div>
                )}
              </div>
            )}

            {/* Navigation buttons */}
            <div className="flex items-center justify-between pt-4 border-t border-black/[0.06] dark:border-white/[0.08]">
              <button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className={`px-4 py-2 rounded-xl border ${themeClasses.border} text-xs font-semibold disabled:opacity-40 flex items-center gap-1.5`}
              >
                <ArrowRight className="w-4 h-4" />
                <span>السابق</span>
              </button>

              <button
                onClick={handleNext}
                disabled={selectedAnswer === undefined}
                className="px-6 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold disabled:opacity-40 transition-colors flex items-center gap-1.5 shadow-sm"
              >
                <span>{currentIndex === config.questions.length - 1 ? 'إنهاء الاختبار' : 'التالي'}</span>
                <ArrowLeft className="w-4 h-4" />
              </button>
            </div>
          </div>
        ) : (
          /* Completion & Results Summary Screen */
          <div className="pt-8 text-center space-y-6">
            <div className="w-20 h-20 mx-auto rounded-full bg-emerald-500/15 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
              <Award className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <h2 className={`text-2xl sm:text-3xl font-black ${themeClasses.textPrimary}`}>
                {percentage >= 80 ? 'إنجاز رائع ومبهر! ' : percentage >= 50 ? 'عمل جيد! أحسنت المحاولة ' : 'فرصة ممتازة للمراجعة والتعلم تنبيه:'}
              </h2>
              <p className={`text-sm ${themeClasses.textSecondary}`}>
                لقد أجبت على {score} من أصل {config.questions.length} أسئلة بشكل صحيح بنسبة نجاح {percentage}%.
              </p>
            </div>

            {/* Certificate Form & Toggle */}
            {!showCertificate ? (
              <div className="max-w-md mx-auto p-6 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 space-y-4">
                <div className="flex items-center justify-center gap-2 text-emerald-700 dark:text-emerald-300 font-bold text-sm">
                  <Sparkles className="w-4 h-4" />
                  <span>احصل على شهادة إنجاز رقمية باسمك</span>
                </div>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="اكتب اسمك الثلاثي هنا..."
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                    className={`flex-1 px-4 py-2 text-xs rounded-xl border ${themeClasses.border} bg-white dark:bg-black/20 text-right focus:outline-emerald-500`}
                  />
                  <button
                    onClick={() => {
                      if (studentName.trim()) setShowCertificate(true);
                    }}
                    disabled={!studentName.trim()}
                    className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold disabled:opacity-40 transition-colors"
                  >
                    عرض الشهادة
                  </button>
                </div>
              </div>
            ) : (
              /* Printable Certificate View */
              <div className="max-w-xl mx-auto p-8 rounded-2xl border-4 border-amber-500/30 bg-gradient-to-b from-amber-50/50 via-white to-amber-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 text-center space-y-4 shadow-xl">
                <div className="flex justify-center text-amber-500">
                  <Award className="w-12 h-12" />
                </div>
                <div className="text-xs uppercase tracking-widest text-amber-600 font-bold">
                  شهادة إنجاز تفاعلية
                </div>
                <h3 className="text-2xl font-black text-gray-900 dark:text-white">
                  أكاديمية كويزات الرياضيات
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  تُمنح هذه الشهادة تقديراً لإتمام اختبار
                </p>
                <div className="text-lg font-bold text-emerald-600 dark:text-emerald-400">
                  {config.title}
                </div>
                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                  للطالب(ـة) المتميز(ة): <span className="text-base text-gray-900 dark:text-white font-extrabold underline">{studentName}</span>
                </p>
                <div className="text-xs text-gray-500">
                  بنتيجة: {score} من {config.questions.length} ({percentage}%) | التاريخ: {new Date().toLocaleDateString('ar-EG')}
                </div>
                <div className="pt-4 flex justify-center gap-3">
                  <button
                    onClick={() => window.print()}
                    className="px-4 py-2 rounded-xl bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-700"
                  >
                    طباعة الشهادة
                  </button>
                  <button
                    onClick={() => setShowCertificate(false)}
                    className="px-4 py-2 rounded-xl border border-gray-300 text-xs font-bold text-gray-700 dark:text-gray-300 hover:bg-black/5"
                  >
                    إغلاق
                  </button>
                </div>
              </div>
            )}

            {/* Restart Buttons */}
            <div className="flex items-center justify-center gap-4 pt-4">
              <button
                onClick={handleReset}
                className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors flex items-center gap-2"
              >
                <RotateCcw className="w-4 h-4" />
                <span>إعادة المحاولة مرة أخرى</span>
              </button>
              <button
                onClick={onGoPerimeterArea}
                className={`px-6 py-2.5 rounded-xl border ${themeClasses.border} hover:bg-black/5 text-xs font-bold transition-colors`}
              >
                العودة إلى فهرس المحيط والمساحة
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Specialized In-Depth Pedagogical Article (> 350 words) */}
      <article className={`p-6 sm:p-8 rounded-2xl border ${themeClasses.border} ${themeClasses.cardBg} space-y-6 text-right leading-relaxed`}>
        <div className="border-b border-black/[0.06] dark:border-white/[0.08] pb-4 space-y-2">
          <div className="flex items-center gap-2 text-xs font-bold text-emerald-600 dark:text-emerald-400">
            <BookOpen className="w-4 h-4" />
            <span>المقالة التعليمية المرافقة للاختبار | قراءة موجهة ({config.article.readTime})</span>
          </div>
          <h2 className={`text-lg sm:text-2xl font-black ${themeClasses.textPrimary}`}>
            {config.article.title}
          </h2>
          <p className={`text-xs sm:text-sm ${themeClasses.textSecondary}`}>
            {config.article.description}
          </p>
        </div>

        <div className="space-y-6">
          {config.article.sections.map((sec, idx) => (
            <section key={idx} className="space-y-2">
              <h3 className={`text-sm sm:text-base font-bold flex items-center gap-2 ${themeClasses.textPrimary}`}>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                <span>{sec.heading}</span>
              </h3>
              <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
                {sec.content}
              </p>
            </section>
          ))}
        </div>
      </article>

      {/* Backlink Box for Seamless Navigation across all 12 tests */}
      <PerimeterAreaBacklinkBox currentQuizId={quizType} />
    </div>
  );
};
