import React, { useState } from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { useEyeTheme } from '../context/ThemeContext';
import { FractionsDecimalsBacklinkBox } from '../components/FractionsDecimalsBacklinkBox';
import {
  FRACTIONS_DECIMALS_QUIZZES,
  FractionsDecimalsQuizType,
} from '../data/fractionsDecimalsTestsData';
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

interface FractionsDecimalsQuizViewProps {
  quizType: FractionsDecimalsQuizType;
  onGoHome: () => void;
  onGoDomain: () => void;
  onGoFractionsDecimals: () => void;
}

export const FractionsDecimalsQuizView: React.FC<FractionsDecimalsQuizViewProps> = ({
  quizType,
  onGoHome,
  onGoDomain,
  onGoFractionsDecimals,
}) => {
  const { themeClasses } = useEyeTheme();
  const config =
    FRACTIONS_DECIMALS_QUIZZES[quizType] ||
    FRACTIONS_DECIMALS_QUIZZES['decimals-identification-reading'];

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
        osc.frequency.setValueAtTime(587.33, ctx.currentTime); // D5
        osc.frequency.setValueAtTime(880, ctx.currentTime + 0.1); // A5
        gain.gain.setValueAtTime(0.12, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.35);
        osc.start();
        osc.stop(ctx.currentTime + 0.35);
      } else {
        osc.frequency.setValueAtTime(260, ctx.currentTime);
        gain.gain.setValueAtTime(0.12, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.25);
        osc.start();
        osc.stop(ctx.currentTime + 0.25);
      }
    } catch {
      // AudioContext not available or blocked
    }
  };

  const handleSelectOption = (value: string | number) => {
    if (selectedAnswers[currentQ.id] !== undefined) return;
    const isCorrect = String(value) === String(currentQ.correctAnswer);
    playTone(isCorrect);
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQ.id]: value,
    }));
  };

  const handleNext = () => {
    setShowHint(false);
    if (currentIndex < config.questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setIsCompleted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
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
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedUrl(true);
    setTimeout(() => setCopiedUrl(false), 2500);
  };

  const totalQuestions = config.questions.length;
  const correctCount = config.questions.reduce((count, q) => {
    return String(selectedAnswers[q.id]) === String(q.correctAnswer) ? count + 1 : count;
  }, 0);
  const scorePercent = Math.round((correctCount / totalQuestions) * 100);
  const progressPercent = Math.round(((currentIndex + 1) / totalQuestions) * 100);

  return (
    <div className="space-y-8 pb-16">
      {/* 1. Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'الرئيسية', onClick: onGoHome },
          { label: 'الرياضيات الأساسية', onClick: onGoDomain },
          { label: 'الكسور والأعداد العشرية', onClick: onGoFractionsDecimals },
          { label: config.shortTitle, active: true },
        ]}
      />

      {/* 2. Header Banner */}
      <section
        className={`p-6 sm:p-8 rounded-2xl border ${themeClasses.border} ${themeClasses.cardBg} space-y-4 shadow-2xs`}
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-2xl sm:text-3xl p-2 rounded-xl bg-black/[0.03] dark:bg-white/[0.03]">
                {config.emoji}
              </span>
              <div>
                <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[#127052]/10 text-[#127052] dark:text-[#5EB5A1]">
                  {config.levelBadge}
                </span>
                <span className={`text-xs ${themeClasses.textMuted} mr-2`}>
                  المدة التقريبية: {config.duration}
                </span>
              </div>
            </div>

            <h1 className={`text-xl sm:text-2xl font-bold tracking-tight ${themeClasses.textPrimary}`}>
              {config.title}
            </h1>

            <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} max-w-2xl leading-relaxed`}>
              {config.shortDesc}
            </p>
          </div>

          {/* Quick Info & Share */}
          <div className="flex sm:flex-col items-center sm:items-end justify-between gap-3 shrink-0">
            <div className={`px-4 py-2 rounded-xl border ${themeClasses.border} ${themeClasses.pillBg} text-center`}>
              <span className={`text-[10px] block ${themeClasses.textMuted}`}>الرمز والمعادلة</span>
              <span className="text-base sm:text-lg font-bold font-sans text-[#127052] dark:text-[#5EB5A1]">
                {config.mathSymbol}
              </span>
            </div>

            <button
              onClick={handleCopyLink}
              className={`px-3 py-1.5 rounded-lg border ${themeClasses.border} ${themeClasses.cardHoverBg} text-xs ${themeClasses.textSecondary} flex items-center gap-1.5 transition-colors cursor-pointer`}
              title="نسخ رابط الاختبار للمشاركة"
            >
              {copiedUrl ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700 font-medium">تم نسخ الرابط</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5 opacity-70" />
                  <span>مشاركة الاختبار</span>
                </>
              )}
            </button>
          </div>
        </div>
      </section>

      {/* 3. Interactive Quiz Container */}
      {!isCompleted ? (
        <section
          className={`p-6 sm:p-8 rounded-2xl border ${themeClasses.border} ${themeClasses.cardBg} space-y-6 shadow-2xs`}
        >
          {/* Progress Header */}
          <div className="space-y-3 pb-3 border-b border-black/[0.05] dark:border-white/[0.05]">
            <div className="flex items-center justify-between text-xs sm:text-sm">
              <div className="flex items-center gap-2">
                <span className="font-bold text-[#127052] dark:text-[#5EB5A1]">
                  السؤال {currentIndex + 1} من {totalQuestions}
                </span>
                <span aria-hidden="true" className={themeClasses.textMuted}>·</span>
                <span className={themeClasses.textMuted}>
                  {progressPercent}% مكتمل
                </span>
              </div>

              {/* Question Navigation Bubbles */}
              <div className="flex items-center gap-1.5 overflow-x-auto py-1 max-w-[200px] sm:max-w-none">
                {config.questions.map((q, idx) => {
                  const isAns = selectedAnswers[q.id] !== undefined;
                  const isCur = idx === currentIndex;
                  return (
                    <button
                      key={q.id}
                      onClick={() => setCurrentIndex(idx)}
                      className={`w-6 h-6 rounded-lg text-[10px] font-bold flex items-center justify-center transition-all cursor-pointer ${
                        isCur
                          ? 'bg-[#127052] text-white ring-2 ring-[#127052]/30 scale-105'
                          : isAns
                          ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300'
                          : 'bg-black/[0.04] dark:bg-white/[0.04] text-slate-500 hover:bg-black/[0.08]'
                      }`}
                    >
                      {idx + 1}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Visual Bar */}
            <div className="h-1.5 w-full bg-black/[0.05] dark:bg-white/[0.05] rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-l from-[#127052] to-[#3B7A6A] rounded-full transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Question Text Box */}
          <div className="space-y-4 py-2">
            <h2 className={`text-base sm:text-xl font-bold ${themeClasses.textPrimary} leading-relaxed`}>
              {currentQ.questionText}
            </h2>

            {currentQ.displayContent && (
              <div className="p-4 sm:p-6 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/[0.06] text-center my-3">
                <span className="text-xl sm:text-2xl font-bold font-sans tracking-wide text-[#127052] dark:text-[#5EB5A1]">
                  {currentQ.displayContent}
                </span>
              </div>
            )}
          </div>

          {/* Options Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {currentQ.options.map((opt, oIdx) => {
              const isSelected = selectedAnswer === opt;
              const hasAnswered = selectedAnswer !== undefined;
              const isCorrectOpt = String(opt) === String(currentQ.correctAnswer);

              let btnClass = `p-4 rounded-xl border text-sm font-semibold transition-all duration-200 text-right flex items-center justify-between cursor-pointer `;

              if (!hasAnswered) {
                btnClass += `${themeClasses.border} ${themeClasses.cardHoverBg} ${themeClasses.textPrimary} hover:border-[#127052]/40 hover:bg-[#127052]/5`;
              } else if (isCorrectOpt) {
                btnClass += 'border-emerald-500 bg-emerald-50 text-emerald-900 dark:bg-emerald-950/30 dark:border-emerald-600 dark:text-emerald-200 font-bold';
              } else if (isSelected && !isCorrectOpt) {
                btnClass += 'border-rose-500 bg-rose-50 text-rose-900 dark:bg-rose-950/30 dark:border-rose-600 dark:text-rose-200';
              } else {
                btnClass += `${themeClasses.border} opacity-40 cursor-default`;
              }

              return (
                <button
                  key={oIdx}
                  onClick={() => handleSelectOption(opt)}
                  disabled={hasAnswered}
                  className={btnClass}
                >
                  <span className="font-sans text-base">{opt}</span>
                  {hasAnswered && isCorrectOpt && (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mr-2" />
                  )}
                  {hasAnswered && isSelected && !isCorrectOpt && (
                    <XCircle className="w-5 h-5 text-rose-600 shrink-0 mr-2" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Hint & Explanation Box */}
          {selectedAnswer !== undefined && (
            <div
              className={`p-4 rounded-xl border text-xs sm:text-sm leading-relaxed ${
                String(selectedAnswer) === String(currentQ.correctAnswer)
                  ? 'border-emerald-200 bg-emerald-50/60 dark:bg-emerald-950/20 text-emerald-900 dark:text-emerald-200'
                  : 'border-rose-200 bg-rose-50/60 dark:bg-rose-950/20 text-rose-900 dark:text-rose-200'
              }`}
            >
              <div className="font-bold flex items-center gap-1.5 mb-1">
                {String(selectedAnswer) === String(currentQ.correctAnswer) ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>إجابة صحيحة وممتازة! </span>
                  </>
                ) : (
                  <>
                    <XCircle className="w-4 h-4 text-rose-600" />
                    <span>
                      إجابة غير صحيحة. الإجابة الصحيحة هي: <strong>{String(currentQ.correctAnswer)}</strong>
                    </span>
                  </>
                )}
              </div>
              <p className="mt-1 opacity-90">{currentQ.explanation}</p>
            </div>
          )}

          {/* Controls Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-black/[0.05] dark:border-white/[0.05]">
            <button
              onClick={() => setShowHint((prev) => !prev)}
              className={`px-3 py-1.5 rounded-lg border ${themeClasses.border} text-xs ${themeClasses.textSecondary} flex items-center gap-1.5 cursor-pointer hover:bg-black/[0.03] transition-colors`}
            >
              <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
              <span>{showHint ? 'إخفاء التلميح' : 'تلميح للمساعدة'}</span>
            </button>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className={`px-3 py-1.5 rounded-lg border ${themeClasses.border} text-xs ${themeClasses.textSecondary} flex items-center gap-1 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer`}
              >
                <ArrowRight className="w-3.5 h-3.5" />
                <span>السابق</span>
              </button>

              <button
                onClick={handleNext}
                disabled={selectedAnswer === undefined}
                className={`px-4 py-1.5 rounded-lg text-xs font-semibold text-white flex items-center gap-1 transition-all cursor-pointer ${
                  selectedAnswer !== undefined
                    ? 'bg-[#127052] hover:bg-[#0e5b42]'
                    : 'bg-slate-300 dark:bg-slate-700 opacity-60 cursor-not-allowed'
                }`}
              >
                <span>{currentIndex < totalQuestions - 1 ? 'السؤال التالي' : 'إنهاء الاختبار'}</span>
                <ArrowLeft className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {showHint && (
            <div className="p-3.5 rounded-xl border border-amber-200/60 bg-amber-50/50 dark:bg-amber-950/20 text-xs text-amber-900 dark:text-amber-200 flex items-start gap-2">
              <Lightbulb className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <span>{currentQ.hint}</span>
            </div>
          )}
        </section>
      ) : (
        /* Completed Screen */
        <section
          className={`p-6 sm:p-10 rounded-2xl border ${themeClasses.border} ${themeClasses.cardBg} space-y-8 shadow-2xs text-center`}
        >
          <div className="max-w-md mx-auto space-y-4">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-emerald-100 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-3xl shadow-xs">
              <Award className="w-8 h-8" />
            </div>

            <h2 className={`text-2xl font-bold ${themeClasses.textPrimary}`}>
              اكتمل الاختبار بنجاح!
            </h2>

            <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
              أحسنت صنعاً! لقد أتممت جميع أسئلة اختبار «{config.shortTitle}». إليك ملخص أدائك:
            </p>

            <div className="p-6 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 space-y-2">
              <div className="text-4xl font-extrabold text-[#127052] dark:text-[#5EB5A1]">
                {scorePercent}%
              </div>
              <div className={`text-xs font-medium ${themeClasses.textSecondary}`}>
                أجبت على {correctCount} من أصل {totalQuestions} أسئلة بشكل صحيح
              </div>
            </div>

            {/* Certificate Trigger */}
            <div className="pt-2">
              <button
                onClick={() => setShowCertificate(true)}
                className="w-full py-2.5 rounded-xl text-xs font-bold bg-amber-500 hover:bg-amber-600 text-white flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm"
              >
                <Award className="w-4 h-4" />
                <span>إصدار شهادة إتقان رقمية باسمك</span>
              </button>
            </div>
          </div>

          {/* Review of all Questions */}
          <div className="space-y-4 text-right pt-4 border-t border-black/[0.05] dark:border-white/[0.05]">
            <h3 className={`text-sm sm:text-base font-bold ${themeClasses.textPrimary} flex items-center gap-2`}>
              <span>مراجعة الأسئلة والإجابات التفصيلية</span>
            </h3>

            <div className="space-y-3">
              {config.questions.map((q, idx) => {
                const userAns = selectedAnswers[q.id];
                const isCorrect = String(userAns) === String(q.correctAnswer);

                return (
                  <div
                    key={q.id}
                    className={`p-4 rounded-xl border ${themeClasses.border} ${
                      isCorrect
                        ? 'bg-emerald-50/30 dark:bg-emerald-950/10'
                        : 'bg-rose-50/30 dark:bg-rose-950/10'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-slate-500">
                            سؤال {idx + 1}:
                          </span>
                          <span className={`text-xs sm:text-sm font-semibold ${themeClasses.textPrimary}`}>
                            {q.questionText}
                          </span>
                        </div>

                        {q.displayContent && (
                          <div className="text-xs font-mono font-bold text-[#127052] dark:text-[#5EB5A1] dir-ltr text-right py-0.5">
                            {q.displayContent}
                          </div>
                        )}

                        <div className="text-xs pt-1 space-y-0.5">
                          <div>
                            إجابتك:{' '}
                            <strong className={isCorrect ? 'text-emerald-700 dark:text-emerald-400' : 'text-rose-700 dark:text-rose-400'}>
                              {String(userAns ?? 'لم تجب')}
                            </strong>
                            {!isCorrect && (
                              <span className="mr-3">
                                الإجابة الصحيحة:{' '}
                                <strong className="text-emerald-700 dark:text-emerald-400">
                                  {String(q.correctAnswer)}
                                </strong>
                              </span>
                            )}
                          </div>
                          <p className={`text-[11px] ${themeClasses.textMuted} pt-1`}>
                            {q.explanation}
                          </p>
                        </div>
                      </div>

                      <div className="shrink-0 pt-0.5">
                        {isCorrect ? (
                          <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                        ) : (
                          <XCircle className="w-5 h-5 text-rose-600 dark:text-rose-400" />
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-6 border-t border-black/[0.05] dark:border-white/[0.05]">
            <button
              onClick={handleReset}
              className="px-6 py-2.5 rounded-xl text-xs font-bold bg-[#127052] text-white hover:bg-[#0E5B42] flex items-center gap-2 transition-all cursor-pointer shadow-sm"
            >
              <RotateCcw className="w-4 h-4" />
              <span>إعادة الاختبار</span>
            </button>

            <button
              onClick={onGoFractionsDecimals}
              className={`px-5 py-2.5 rounded-xl text-xs font-medium border ${themeClasses.border} ${themeClasses.cardHoverBg} ${themeClasses.textSecondary} flex items-center gap-2 transition-colors cursor-pointer`}
            >
              <span>العودة لكل اختبارات الكسور والأعداد العشرية</span>
              <ArrowLeft className="w-4 h-4" />
            </button>
          </div>
        </section>
      )}

      {/* Certificate Modal */}
      {showCertificate && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className={`w-full max-w-lg p-6 sm:p-8 rounded-2xl border ${themeClasses.border} ${themeClasses.cardBg} space-y-6 shadow-xl text-center relative`}>
            <button
              onClick={() => setShowCertificate(false)}
              className="absolute top-4 left-4 p-1 rounded-lg text-slate-400 hover:text-slate-600"
            >
              
            </button>

            <div className="w-12 h-12 mx-auto rounded-full bg-amber-100 text-amber-600 flex items-center justify-center">
              <Award className="w-6 h-6" />
            </div>

            <div className="space-y-1">
              <h3 className={`text-lg font-bold ${themeClasses.textPrimary}`}>
                شهادة إتقان في {config.shortTitle}
              </h3>
              <p className={`text-xs ${themeClasses.textMuted}`}>
                أدخل اسمك لتخصيص الشهادة وطباعتها أو حفظها
              </p>
            </div>

            <div className="space-y-3">
              <input
                type="text"
                placeholder="اسم البطل / الطالب..."
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                className={`w-full px-4 py-2.5 rounded-xl border ${themeClasses.border} bg-black/[0.02] dark:bg-white/[0.04] ${themeClasses.textPrimary} text-sm text-right focus:outline-hidden focus:ring-2 focus:ring-[#127052]`}
              />

              <div className="p-4 rounded-xl border border-amber-300/60 bg-amber-50/40 dark:bg-amber-950/20 text-right text-xs leading-relaxed space-y-1">
                <div>يشهد برنامج التدريب الحسابي بأن الطالب/ـة: <strong>{studentName || '..................'}</strong></div>
                <div>قد أتم بنجاح اختبار <strong>«{config.title}»</strong> بنسبة إنجاز: <strong>{scorePercent}%</strong></div>
                <div className="text-[10px] text-slate-400 pt-1">تاريخ الإنجاز: {new Date().toLocaleDateString('ar-SA')}</div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3">
              <button
                onClick={() => window.print()}
                className="px-5 py-2 rounded-xl text-xs font-bold bg-[#127052] text-white hover:bg-[#0e5b42] cursor-pointer"
              >
                طباعة الشهادة 
              </button>
              <button
                onClick={() => setShowCertificate(false)}
                className={`px-4 py-2 rounded-xl text-xs border ${themeClasses.border} cursor-pointer`}
              >
                إغلاق
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 4. Unique SEO Article Component */}
      <article
        id="quiz-article"
        className={`p-6 sm:p-10 rounded-2xl border ${themeClasses.border} ${themeClasses.cardBg} space-y-6 shadow-2xs leading-relaxed text-right`}
      >
        <header className="space-y-2 pb-4 border-b border-black/[0.05] dark:border-white/[0.05]">
          <div className="flex items-center gap-2 text-xs font-bold text-[#127052] dark:text-[#5EB5A1]">
            <BookOpen className="w-4 h-4" />
            <span>{config.article.badge}</span>
          </div>

          <h2 className={`text-lg sm:text-2xl font-bold tracking-tight ${themeClasses.textPrimary}`}>
            {config.article.h2}
          </h2>

          <p className={`text-xs sm:text-sm ${themeClasses.textSecondary}`}>
            {config.article.subtitle}
          </p>
        </header>

        {/* Dynamic Article Sections */}
        <div className="space-y-6 text-xs sm:text-sm leading-relaxed">
          {config.article.sections.map((section, idx) => {
            const getIcon = () => {
              switch (section.icon) {
                case 'sparkles':
                  return <Sparkles className="w-4 h-4 text-[#127052] dark:text-[#5EB5A1]" />;
                case 'trend':
                  return <TrendingUp className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />;
                case 'heart':
                  return <Heart className="w-4 h-4 text-rose-500" />;
                case 'book':
                default:
                  return <BookOpen className="w-4 h-4 text-sky-600" />;
              }
            };

            return (
              <div key={idx} className="space-y-2">
                <h3 className={`text-sm sm:text-base font-bold flex items-center gap-2 ${themeClasses.textPrimary}`}>
                  {getIcon()}
                  <span>{section.title}</span>
                </h3>

                <p className={`${themeClasses.textSecondary} leading-relaxed`}>
                  {section.content}
                </p>

                {section.subBoxes && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                    {section.subBoxes.map((sub, sIdx) => (
                      <div
                        key={sIdx}
                        className={`p-3 rounded-xl border ${themeClasses.border} bg-black/[0.01] dark:bg-white/[0.01]`}
                      >
                        <div className="font-bold text-xs text-[#127052] dark:text-[#5EB5A1] mb-1">
                          {sub.title}
                        </div>
                        <div className={`text-[11px] ${themeClasses.textMuted} leading-relaxed`}>
                          {sub.text}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Golden Tip Callout */}
        <div className="p-4 rounded-xl border border-amber-300/40 bg-amber-50/50 dark:bg-amber-950/20 text-xs sm:text-sm text-amber-900 dark:text-amber-200 flex items-start gap-3">
          <Lightbulb className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
          <div className="leading-relaxed">
            <strong>{config.article.goldenTip}</strong>
          </div>
        </div>
      </article>

      {/* 5. Smart Interlinking Box */}
      <FractionsDecimalsBacklinkBox
        currentTestId={config.id}
        onGoFractionsDecimals={onGoFractionsDecimals}
      />
    </div>
  );
};
