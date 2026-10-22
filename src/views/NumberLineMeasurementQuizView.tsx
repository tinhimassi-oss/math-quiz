import React, { useState } from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { useEyeTheme } from '../context/ThemeContext';
import { NumberLineMeasurementBacklinkBox } from '../components/NumberLineMeasurementBacklinkBox';
import {
  NUMBER_LINE_MEASUREMENT_QUIZZES,
  NumberLineMeasurementQuizType,
} from '../data/numberLineMeasurementTestsData';
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
  Heart,
  TrendingUp,
} from 'lucide-react';

interface NumberLineMeasurementQuizViewProps {
  quizType: NumberLineMeasurementQuizType;
  onGoHome: () => void;
  onGoDomain: () => void;
  onGoNumberLineMeasurement: () => void;
}

export const NumberLineMeasurementQuizView: React.FC<NumberLineMeasurementQuizViewProps> = ({
  quizType,
  onGoHome,
  onGoDomain,
  onGoNumberLineMeasurement,
}) => {
  const { themeClasses } = useEyeTheme();
  const config =
    NUMBER_LINE_MEASUREMENT_QUIZZES[quizType] ||
    NUMBER_LINE_MEASUREMENT_QUIZZES['whole-numbers-on-number-line'];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string | number>>({});
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
      gain.connect(ctx.destination);

      if (isSuccess) {
        osc.frequency.setValueAtTime(523.25, ctx.currentTime); // C5
        osc.frequency.setValueAtTime(659.25, ctx.currentTime + 0.1); // E5
        gain.gain.setValueAtTime(0.15, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3);
        osc.start();
        osc.stop(ctx.currentTime + 0.3);
      } else {
        osc.frequency.setValueAtTime(220, ctx.currentTime); // A3
        osc.frequency.setValueAtTime(196, ctx.currentTime + 0.1); // G3
        gain.gain.setValueAtTime(0.15, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3);
        osc.start();
        osc.stop(ctx.currentTime + 0.3);
      }
    } catch {
      // Audio not permitted or supported
    }
  };

  const handleSelectOption = (option: string | number) => {
    if (selectedAnswer !== undefined) return; // Already answered

    const isCorrect = option === currentQ.correctAnswer;
    playTone(isCorrect);

    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQ.id]: option,
    }));
  };

  const handleNext = () => {
    setShowHint(false);
    if (currentIndex < config.questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handlePrev = () => {
    setShowHint(false);
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleRestart = () => {
    setSelectedAnswers({});
    setCurrentIndex(0);
    setIsCompleted(false);
    setShowHint(false);
    setShowCertificate(false);
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedUrl(true);
    setTimeout(() => setCopiedUrl(false), 2500);
  };

  // Score calculations
  const correctCount = config.questions.reduce((acc, q) => {
    return selectedAnswers[q.id] === q.correctAnswer ? acc + 1 : acc;
  }, 0);
  const percentage = Math.round((correctCount / config.questions.length) * 100);

  return (
    <div className="space-y-8 pb-16 text-right">
      {/* Breadcrumbs Navigation */}
      <Breadcrumbs
        items={[
          { label: 'الرئيسية', onClick: onGoHome },
          { label: 'الرياضيات الأساسية', onClick: onGoDomain },
          { label: 'خط الأعداد والقياس', onClick: onGoNumberLineMeasurement },
          { label: config.shortTitle },
        ]}
      />

      {/* Header Badge & Title */}
      <div className={`p-6 sm:p-8 rounded-2xl border ${themeClasses.border} ${themeClasses.cardBg} space-y-4 shadow-2xs`}>
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-black/[0.06] dark:border-white/[0.08] pb-4">
          <div className="flex items-center gap-3">
            <span className="text-3xl p-2 rounded-xl bg-black/[0.03] dark:bg-white/[0.05]">
              {config.emoji}
            </span>
            <div>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#127052]/10 text-[#127052] dark:text-[#5EB5A1]">
                {config.levelBadge}
              </span>
              <h1 className={`text-xl sm:text-2xl font-black mt-1.5 ${themeClasses.textPrimary}`}>
                {config.title}
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className={`p-2.5 rounded-xl border ${themeClasses.border} hover:bg-black/5 dark:hover:bg-white/5 transition-colors flex items-center gap-1.5 text-xs font-semibold ${themeClasses.textPrimary}`}
              title="مشاركة رابط الاختبار"
            >
              {copiedUrl ? (
                <>
                  <Check className="w-4 h-4 text-emerald-500" />
                  <span>تم النسخ!</span>
                </>
              ) : (
                <>
                  <Share2 className="w-4 h-4" />
                  <span>مشاركة</span>
                </>
              )}
            </button>
          </div>
        </div>

        <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
          {config.shortDesc}
        </p>

        {/* Info pills */}
        <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-500 dark:text-zinc-400 pt-1">
          <span className="flex items-center gap-1">
            <span>⏱️ المدة التقديرية:</span>
            <strong className="text-zinc-800 dark:text-zinc-200">{config.duration}</strong>
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <span> عدد الأسئلة:</span>
            <strong className="text-zinc-800 dark:text-zinc-200">{config.questions.length} أسئلة</strong>
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <span> الرمز الرياضي:</span>
            <strong className="font-mono text-zinc-800 dark:text-zinc-200 dir-ltr">{config.mathSymbol}</strong>
          </span>
        </div>
      </div>

      {/* QUIZ INTERACTIVE CONTAINER */}
      {!isCompleted ? (
        <div className={`p-6 sm:p-8 rounded-2xl border ${themeClasses.border} ${themeClasses.cardBg} space-y-6 shadow-2xs`}>
          {/* Progress bar & Question Counter */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-bold">
              <span className="text-[#127052] dark:text-[#5EB5A1]">
                السؤال {currentIndex + 1} من {config.questions.length}
              </span>
              <span className={themeClasses.textSecondary}>
                الإنجاز: {Math.round(((currentIndex) / config.questions.length) * 100)}%
              </span>
            </div>

            <div className="w-full h-2 rounded-full bg-black/10 dark:bg-white/10 overflow-hidden">
              <div
                className="h-full bg-[#127052] dark:bg-[#5EB5A1] transition-all duration-300 rounded-full"
                style={{ width: `${((currentIndex + 1) / config.questions.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Question Box */}
          <div className="space-y-4 pt-2">
            <div className="flex items-start justify-between gap-4">
              <h2 className={`text-base sm:text-xl font-bold leading-relaxed ${themeClasses.textPrimary}`}>
                {currentQ.questionText}
              </h2>
              <button
                onClick={() => setShowHint(!showHint)}
                className={`p-2 rounded-lg border text-xs font-semibold flex items-center gap-1 shrink-0 transition-colors ${
                  showHint
                    ? 'border-amber-500 bg-amber-500/10 text-amber-600 dark:text-amber-400'
                    : `${themeClasses.border} text-zinc-500 hover:text-amber-500`
                }`}
                title="عرض تلميح مساعد"
              >
                <Lightbulb className="w-4 h-4" />
                <span className="hidden sm:inline">تلميح</span>
              </button>
            </div>

            {/* Visual Formula / Display Card if present */}
            {currentQ.displayContent && (
              <div className="p-4 sm:p-5 rounded-xl border border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.03] text-center">
                <div className="font-mono text-base sm:text-xl font-black text-[#127052] dark:text-[#5EB5A1] dir-ltr inline-block tracking-wider">
                  {currentQ.displayContent}
                </div>
              </div>
            )}

            {/* Hint Box */}
            {showHint && (
              <div className="p-3.5 rounded-xl border border-amber-500/30 bg-amber-500/10 text-amber-800 dark:text-amber-200 text-xs sm:text-sm flex items-start gap-2 animate-fadeIn">
                <Lightbulb className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>{currentQ.hint}</span>
              </div>
            )}

            {/* Options Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {currentQ.options.map((option, idx) => {
                const isSelected = selectedAnswer === option;
                const isCorrect = option === currentQ.correctAnswer;
                const showFeedback = selectedAnswer !== undefined;

                let btnStyle = `border ${themeClasses.border} hover:border-[#127052] dark:hover:border-[#5EB5A1] bg-black/[0.01] dark:bg-white/[0.02]`;

                if (showFeedback) {
                  if (isCorrect) {
                    btnStyle = 'border-emerald-500 bg-emerald-500/15 text-emerald-800 dark:text-emerald-200 font-bold';
                  } else if (isSelected) {
                    btnStyle = 'border-rose-500 bg-rose-500/15 text-rose-800 dark:text-rose-200 font-bold';
                  } else {
                    btnStyle = 'opacity-40 border-transparent bg-black/[0.02] dark:bg-white/[0.02]';
                  }
                }

                return (
                  <button
                    key={idx}
                    disabled={showFeedback}
                    onClick={() => handleSelectOption(option)}
                    className={`p-4 rounded-xl text-right transition-all flex items-center justify-between gap-3 text-sm sm:text-base ${btnStyle}`}
                  >
                    <span className="font-medium">{option}</span>
                    <span className="w-6 h-6 rounded-full border border-current/30 flex items-center justify-center shrink-0 text-xs">
                      {showFeedback && isCorrect ? (
                        <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                      ) : showFeedback && isSelected ? (
                        <XCircle className="w-4 h-4 text-rose-600 dark:text-rose-400" />
                      ) : (
                        idx + 1
                      )}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Explanation box after selection */}
            {selectedAnswer !== undefined && (
              <div
                className={`p-4 rounded-xl border mt-4 text-xs sm:text-sm leading-relaxed ${
                  selectedAnswer === currentQ.correctAnswer
                    ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-900 dark:text-emerald-200'
                    : 'border-rose-500/30 bg-rose-500/10 text-rose-900 dark:text-rose-200'
                }`}
              >
                <div className="flex items-center gap-1.5 font-bold mb-1">
                  {selectedAnswer === currentQ.correctAnswer ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                      <span>إجابة صحيحة! أحسنت صنعاً.</span>
                    </>
                  ) : (
                    <>
                      <XCircle className="w-4 h-4 text-rose-600 dark:text-rose-400" />
                      <span>إجابة تحتاج إلى مراجعة! الإجابة الصحيحة هي: {String(currentQ.correctAnswer)}</span>
                    </>
                  )}
                </div>
                <p className="mt-1 text-zinc-700 dark:text-zinc-300">
                  {currentQ.explanation}
                </p>
              </div>
            )}
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between pt-4 border-t border-black/[0.06] dark:border-white/[0.08]">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className={`px-4 py-2 rounded-xl border ${themeClasses.border} text-xs font-bold flex items-center gap-1.5 disabled:opacity-30 disabled:pointer-events-none ${themeClasses.textPrimary} hover:bg-black/5 dark:hover:bg-white/5 transition-colors`}
            >
              <ArrowRight className="w-4 h-4" />
              <span>السابق</span>
            </button>

            <button
              onClick={handleNext}
              disabled={selectedAnswer === undefined}
              className="px-6 py-2.5 rounded-xl bg-[#127052] hover:bg-[#0e5840] text-white text-xs font-bold flex items-center gap-1.5 disabled:opacity-40 disabled:pointer-events-none transition-all shadow-xs"
            >
              <span>{currentIndex < config.questions.length - 1 ? 'السؤال التالي' : 'إنهاء وعرض النتيجة'}</span>
              <ArrowLeft className="w-4 h-4" />
            </button>
          </div>
        </div>
      ) : (
        /* QUIZ COMPLETION SUMMARY VIEW */
        <div className={`p-6 sm:p-10 rounded-2xl border ${themeClasses.border} ${themeClasses.cardBg} space-y-8 shadow-md text-center`}>
          <div className="w-16 h-16 mx-auto rounded-full bg-[#127052]/10 dark:bg-[#127052]/20 flex items-center justify-center text-[#127052] dark:text-[#5EB5A1]">
            <Award className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#127052]/10 text-[#127052] dark:text-[#5EB5A1]">
              اكتمل الاختبار بنجاح!
            </span>
            <h2 className={`text-2xl sm:text-3xl font-black ${themeClasses.textPrimary}`}>
              نتيجة اختبار {config.shortTitle}
            </h2>
            <p className={`text-sm ${themeClasses.textSecondary}`}>
              حصلت على {correctCount} من أصل {config.questions.length} إجابات صحيحة
            </p>
          </div>

          {/* Big Score Dial */}
          <div className="inline-flex flex-col items-center justify-center p-6 rounded-2xl border border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.03]">
            <span className="text-4xl sm:text-5xl font-black text-[#127052] dark:text-[#5EB5A1]">
              {percentage}%
            </span>
            <span className="text-xs font-semibold text-zinc-500 mt-1">
              {percentage >= 80 ? 'إتقان ممتاز للمهارة ' : percentage >= 50 ? 'أداء جيد مع فرصة للتطوير ' : 'تحتاج لمراجعة الشرح وإعادة المحاولة تنبيه:'}
            </span>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={handleRestart}
              className={`px-5 py-2.5 rounded-xl border ${themeClasses.border} text-xs font-bold flex items-center gap-2 hover:bg-black/5 dark:hover:bg-white/5 transition-colors ${themeClasses.textPrimary}`}
            >
              <RotateCcw className="w-4 h-4" />
              <span>إعادة الاختبار</span>
            </button>

            <button
              onClick={() => setShowCertificate(true)}
              className="px-6 py-2.5 rounded-xl bg-[#127052] hover:bg-[#0e5840] text-white text-xs font-bold flex items-center gap-2 shadow-xs transition-colors"
            >
              <Award className="w-4 h-4" />
              <span>استخراج شهادة الإتقان</span>
            </button>
          </div>

          {/* Questions Review Accordion */}
          <div className="text-right space-y-4 pt-6 border-t border-black/[0.06] dark:border-white/[0.08]">
            <h3 className={`text-lg font-bold ${themeClasses.textPrimary}`}>
              مراجعة الأسئلة والإجابات التفصيلية:
            </h3>

            <div className="space-y-3">
              {config.questions.map((q, idx) => {
                const userAns = selectedAnswers[q.id];
                const isCorrect = userAns === q.correctAnswer;

                return (
                  <div
                    key={q.id}
                    className={`p-4 rounded-xl border text-xs sm:text-sm space-y-2 ${
                      isCorrect
                        ? 'border-emerald-500/30 bg-emerald-500/5'
                        : 'border-rose-500/30 bg-rose-500/5'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-zinc-800 dark:text-zinc-200">
                        السؤال {idx + 1}: {q.questionText}
                      </span>
                      {isCorrect ? (
                        <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-bold text-xs">
                          <Check className="w-3.5 h-3.5" /> صحيح
                        </span>
                      ) : (
                        <span className="flex items-center gap-1 text-rose-600 dark:text-rose-400 font-bold text-xs">
                          <XCircle className="w-3.5 h-3.5" /> خاطئ
                        </span>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-4 text-xs text-zinc-600 dark:text-zinc-400">
                      <span>إجابتك: <strong>{String(userAns)}</strong></span>
                      <span>الإجابة النموذجية: <strong className="text-emerald-600 dark:text-emerald-400">{String(q.correctAnswer)}</strong></span>
                    </div>

                    <p className="text-[11px] sm:text-xs text-zinc-500 dark:text-zinc-400 pt-1 border-t border-black/5 dark:border-white/5">
                      تنبيه: {q.explanation}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* PRINTABLE CERTIFICATE MODAL */}
      {showCertificate && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className={`w-full max-w-lg p-6 sm:p-8 rounded-2xl border ${themeClasses.border} ${themeClasses.cardBg} space-y-6 shadow-2xl text-center animate-scaleUp`}>
            <div className="flex justify-between items-center border-b border-black/10 dark:border-white/10 pb-3">
              <span className="text-xs font-bold text-[#127052] dark:text-[#5EB5A1]">
                شهادة إنجاز واجتياز اختبار
              </span>
              <button
                onClick={() => setShowCertificate(false)}
                className="text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 text-sm font-bold"
              >
                
              </button>
            </div>

            <div className="border-4 border-double border-[#127052]/40 dark:border-[#5EB5A1]/40 p-6 rounded-xl space-y-4 bg-radial from-transparent to-[#127052]/5">
              <Award className="w-12 h-12 mx-auto text-[#127052] dark:text-[#5EB5A1]" />
              <h3 className="text-xl font-black text-[#127052] dark:text-[#5EB5A1]">
                شهادة إتقان رياضي
              </h3>
              <p className="text-xs text-zinc-500">
                تشهد أكاديمية كويزات الرياضيات بأن البطل / البطلة:
              </p>

              <div className="py-1">
                <input
                  type="text"
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  placeholder="اكتب اسمك هنا للشهادة..."
                  className="w-full text-center font-bold text-base sm:text-lg border-b-2 border-[#127052] dark:border-[#5EB5A1] bg-transparent outline-hidden pb-1 text-zinc-900 dark:text-zinc-100"
                />
              </div>

              <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">
                قد أتم(ت) بنجاح اختبار <strong>«{config.title}»</strong> بنسبة إتقان بلغت <strong>{percentage}%</strong>، وأظهر(ت) كفاءة رياضية متميزة.
              </p>

              <div className="pt-4 flex justify-between text-[11px] text-zinc-400 border-t border-black/5 dark:border-white/5">
                <span>التاريخ: {new Date().toLocaleDateString('ar-EG')}</span>
                <span>الاعتماد: منصة كويزات الرياضيات</span>
              </div>
            </div>

            <div className="flex gap-2 justify-center">
              <button
                onClick={() => window.print()}
                className="px-5 py-2 rounded-xl bg-[#127052] text-white text-xs font-bold hover:bg-[#0e5840] transition-colors"
              >
                طباعة الشهادة 
              </button>
              <button
                onClick={() => setShowCertificate(false)}
                className={`px-4 py-2 rounded-xl border ${themeClasses.border} text-xs font-semibold hover:bg-black/5 dark:hover:bg-white/5`}
              >
                إغلاق
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CONNECTED TEST BACKLINK BOX */}
      <NumberLineMeasurementBacklinkBox currentTestId={config.id} />

      {/* DEDICATED ARTICLE FOR THIS SPECIFIC TEST */}
      <article
        id="test-pedagogical-article"
        className={`p-6 sm:p-10 rounded-2xl border ${themeClasses.border} ${themeClasses.cardBg} space-y-6 shadow-2xs leading-relaxed`}
      >
        <header className="space-y-2 border-b border-black/[0.06] dark:border-white/[0.08] pb-4">
          <div className="flex items-center gap-2 text-xs font-bold text-[#127052] dark:text-[#5EB5A1]">
            <BookOpen className="w-4 h-4" />
            <span>{config.article.badge}</span>
          </div>
          <h2 className={`text-lg sm:text-2xl font-extrabold ${themeClasses.textPrimary}`}>
            {config.article.h2}
          </h2>
          <p className={`text-xs sm:text-sm ${themeClasses.textSecondary}`}>
            {config.article.subtitle}
          </p>
        </header>

        {/* Dynamic Sections */}
        <div className="space-y-6">
          {config.article.sections.map((sec, idx) => {
            const getIcon = () => {
              switch (sec.icon) {
                case 'sparkles':
                  return <Sparkles className="w-5 h-5 text-[#127052] dark:text-[#5EB5A1]" />;
                case 'trend':
                  return <TrendingUp className="w-5 h-5 text-blue-500" />;
                case 'heart':
                  return <Heart className="w-5 h-5 text-rose-500" />;
                default:
                  return <BookOpen className="w-5 h-5 text-[#127052] dark:text-[#5EB5A1]" />;
              }
            };

            return (
              <section key={idx} className="space-y-3">
                <div className="flex items-center gap-2">
                  {getIcon()}
                  <h3 className={`text-base sm:text-lg font-bold ${themeClasses.textPrimary}`}>
                    {sec.title}
                  </h3>
                </div>
                <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
                  {sec.content}
                </p>

                {sec.subBoxes && sec.subBoxes.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                    {sec.subBoxes.map((box, bIdx) => (
                      <div
                        key={bIdx}
                        className="p-3.5 rounded-xl border border-black/[0.07] dark:border-white/[0.07] bg-black/[0.01] dark:bg-white/[0.02] space-y-1"
                      >
                        <h4 className="text-xs font-bold text-[#127052] dark:text-[#5EB5A1]">
                          {box.title}
                        </h4>
                        <p className="text-xs text-zinc-600 dark:text-zinc-300">
                          {box.text}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </section>
            );
          })}
        </div>

        {/* Golden Tip Box */}
        <div className="p-4 rounded-xl bg-[#127052]/10 dark:bg-[#127052]/20 border border-[#127052]/20 dark:border-[#5EB5A1]/30 flex items-start gap-3 mt-6">
          <Lightbulb className="w-5 h-5 text-[#127052] dark:text-[#5EB5A1] shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h4 className="font-bold text-xs sm:text-sm text-[#127052] dark:text-[#5EB5A1]">
              نصيحة ذهبية للإتقان السريع:
            </h4>
            <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300">
              {config.article.goldenTip}
            </p>
          </div>
        </div>
      </article>
    </div>
  );
};
