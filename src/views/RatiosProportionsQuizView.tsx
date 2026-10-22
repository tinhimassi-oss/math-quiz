import React, { useState } from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { useEyeTheme } from '../context/ThemeContext';
import { RatiosProportionsBacklinkBox } from '../components/RatiosProportionsBacklinkBox';
import {
  RATIOS_PROPORTIONS_QUIZZES,
  RatiosProportionsQuizType,
} from '../data/ratiosProportionsTestsData';
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

interface RatiosProportionsQuizViewProps {
  quizType: RatiosProportionsQuizType;
  onGoHome: () => void;
  onGoDomain: () => void;
  onGoRatiosProportions: () => void;
}

export const RatiosProportionsQuizView: React.FC<RatiosProportionsQuizViewProps> = ({
  quizType,
  onGoHome,
  onGoDomain,
  onGoRatiosProportions,
}) => {
  const { themeClasses } = useEyeTheme();
  const config =
    RATIOS_PROPORTIONS_QUIZZES[quizType] ||
    RATIOS_PROPORTIONS_QUIZZES['ratio-understanding-representation'];

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

  const handleCopyShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopiedUrl(true);
    setTimeout(() => setCopiedUrl(false), 2000);
  };

  // Score computation
  const correctCount = config.questions.reduce((acc, q) => {
    return String(selectedAnswers[q.id]) === String(q.correctAnswer) ? acc + 1 : acc;
  }, 0);
  const totalQuestions = config.questions.length;
  const scorePercent = Math.round((correctCount / totalQuestions) * 100);

  const getEncouragement = () => {
    if (scorePercent === 100) return 'إتقان استثنائي وعبقرية حسابية مبهرة! 🏆 كل الإجابات صحيحة تماماً.';
    if (scorePercent >= 80) return 'أداء متميز جداً ومهارة عالية في النسب والتناسب! 🌟 أنت على بُعد خطوة من العلامة الكاملة.';
    if (scorePercent >= 60) return 'عمل رائع ونتيجة مشجعة! ✨ راجع الأسئلة التي تعثرت بها وأعد الاختبار للوصول إلى القمة.';
    return 'محاولة شجاعة! 💡 النسب والتناسب مهارة تنمو بالتدريب، اقرأ الشرح أسفل الصفحة وأعد المحاولة بثقة.';
  };

  return (
    <div className="space-y-8 pb-16 text-right max-w-4xl mx-auto">
      {/* 1. Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'الرئيسية', onClick: onGoHome },
          { label: 'الرياضيات الأساسية', onClick: onGoDomain },
          { label: 'النسب والتناسب', onClick: onGoRatiosProportions },
          { label: config.shortTitle, active: true },
        ]}
      />

      {/* 2. Test Title & Overview Card */}
      <header className={`p-6 sm:p-8 rounded-2xl border ${themeClasses.border} ${themeClasses.cardBg} space-y-4 shadow-2xs`}>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="text-3xl">{config.emoji}</span>
            <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-[#3B7A6A]/10 text-[#127052] dark:text-[#5EB5A1]">
              {config.levelBadge}
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs">
            <span className={`px-2.5 py-1 rounded-lg border ${themeClasses.border} ${themeClasses.textMuted}`}>
              ⏱️ المدة المقترحة: {config.duration}
            </span>
            <button
              onClick={handleCopyShare}
              className={`p-2 rounded-lg border ${themeClasses.border} ${themeClasses.textMuted} hover:${themeClasses.textPrimary} transition-colors cursor-pointer`}
              title="مشاركة رابط الاختبار"
            >
              {copiedUrl ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
            </button>
          </div>
        </div>

        <div className="space-y-1">
          <h1 className={`text-xl sm:text-2xl font-bold tracking-tight ${themeClasses.textPrimary}`}>
            {config.title}
          </h1>
          <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
            {config.shortDesc}
          </p>
        </div>

        <div className="pt-2 flex items-center gap-3 text-xs border-t border-black/[0.04] dark:border-white/[0.04]">
          <span className="text-slate-500 dark:text-slate-400">النمط الرياضي:</span>
          <span className="font-mono text-sm font-semibold text-[#127052] dark:text-[#5EB5A1] dir-ltr">
            {config.mathSymbol}
          </span>
        </div>
      </header>

      {/* 3. Quiz Interface: Active Test or Results Screen */}
      {!isCompleted ? (
        <section
          aria-label="منطقة كويز النسب والتناسب التفاعلية"
          className={`p-6 sm:p-8 rounded-2xl border ${themeClasses.border} ${themeClasses.cardBg} space-y-6 shadow-2xs`}
        >
          {/* Progress Bar & Question Counter */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-semibold">
              <span className={themeClasses.textPrimary}>
                السؤال {currentIndex + 1} من {totalQuestions}
              </span>
              <span className="text-[#127052] dark:text-[#5EB5A1]">
                {Math.round(((currentIndex + 1) / totalQuestions) * 100)}%
              </span>
            </div>

            <div className="w-full h-2 rounded-full bg-black/[0.04] dark:bg-white/[0.06] overflow-hidden">
              <div
                className="h-full bg-[#127052] dark:bg-[#5EB5A1] transition-all duration-300 rounded-full"
                style={{ width: `${((currentIndex + 1) / totalQuestions) * 100}%` }}
              />
            </div>
          </div>

          {/* Question Text */}
          <div className="space-y-4 pt-2">
            <h2 className={`text-base sm:text-lg font-bold ${themeClasses.textPrimary} leading-snug`}>
              {currentQ.questionText}
            </h2>

            {/* Display formula/box if present */}
            {currentQ.displayContent && (
              <div className="p-4 rounded-xl border border-black/[0.06] dark:border-white/[0.08] bg-black/[0.015] dark:bg-white/[0.02] text-center font-mono text-base sm:text-lg font-bold text-[#127052] dark:text-[#5EB5A1] dir-ltr select-none">
                {currentQ.displayContent}
              </div>
            )}
          </div>

          {/* Options Grid: 2 columns on tablet/desktop, 1 on small screens */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {currentQ.options.map((opt, idx) => {
              const isSelected = selectedAnswer !== undefined && String(selectedAnswer) === String(opt);
              const isCorrectAnswer = String(opt) === String(currentQ.correctAnswer);
              const hasAnswered = selectedAnswer !== undefined;

              let btnClasses = `p-4 rounded-xl border text-sm font-semibold transition-all duration-150 text-right flex items-center justify-between cursor-pointer `;

              if (!hasAnswered) {
                btnClasses += `border-black/[0.08] dark:border-white/[0.08] hover:border-[#3B7A6A] hover:bg-black/[0.02] dark:hover:bg-white/[0.02] ${themeClasses.textPrimary}`;
              } else if (isCorrectAnswer) {
                btnClasses += `border-emerald-600 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200 font-bold shadow-xs`;
              } else if (isSelected && !isCorrectAnswer) {
                btnClasses += `border-rose-600 bg-rose-50 dark:bg-rose-950/40 text-rose-900 dark:text-rose-200`;
              } else {
                btnClasses += `border-black/[0.04] dark:border-white/[0.04] opacity-50 ${themeClasses.textMuted}`;
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(opt)}
                  disabled={hasAnswered}
                  className={btnClasses}
                >
                  <span className="flex-1 text-center font-mono text-base font-bold">{opt}</span>
                  {hasAnswered && isCorrectAnswer && (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mr-2" />
                  )}
                  {hasAnswered && isSelected && !isCorrectAnswer && (
                    <XCircle className="w-5 h-5 text-rose-600 shrink-0 mr-2" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Hint & Explanation Panel */}
          {selectedAnswer !== undefined && (
            <div className="p-4 rounded-xl border border-black/[0.06] dark:border-white/[0.08] bg-black/[0.015] dark:bg-white/[0.02] space-y-2 animate-fadeIn">
              <div className="flex items-center gap-1.5 font-bold text-xs text-[#127052] dark:text-[#5EB5A1]">
                <Lightbulb className="w-4 h-4" />
                <span>الشرح الرياضي التوضيحي:</span>
              </div>
              <p className={`text-xs ${themeClasses.textSecondary} leading-relaxed`}>
                {currentQ.explanation}
              </p>
            </div>
          )}

          {/* Hint Toggle when user has not yet answered */}
          {selectedAnswer === undefined && (
            <div className="pt-1">
              {!showHint ? (
                <button
                  onClick={() => setShowHint(true)}
                  className="text-xs text-amber-600 dark:text-amber-400 hover:underline flex items-center gap-1 cursor-pointer font-medium"
                >
                  <Lightbulb className="w-3.5 h-3.5" />
                  <span>هل تحتاج إلى تلميح؟</span>
                </button>
              ) : (
                <div className="p-3 rounded-xl border border-amber-300/40 bg-amber-50/50 dark:bg-amber-950/20 text-xs text-amber-900 dark:text-amber-200 leading-relaxed">
                  💡 <strong>تلميح:</strong> {currentQ.hint}
                </div>
              )}
            </div>
          )}

          {/* Action Row: Prev / Next */}
          <div className="flex items-center justify-between pt-4 border-t border-black/[0.04] dark:border-white/[0.04]">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className={`px-4 py-2 rounded-xl text-xs font-semibold border ${themeClasses.border} ${themeClasses.cardHoverBg} ${themeClasses.textSecondary} flex items-center gap-1.5 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer transition-colors`}
            >
              <ArrowRight className="w-4 h-4" />
              <span>السابق</span>
            </button>

            <button
              onClick={handleNext}
              disabled={selectedAnswer === undefined}
              className="px-6 py-2.5 rounded-xl text-xs font-bold bg-[#127052] text-white hover:bg-[#0E5B42] flex items-center gap-1.5 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-all shadow-xs"
            >
              <span>{currentIndex === totalQuestions - 1 ? 'إنهاء وعرض النتيجة' : 'التالي'}</span>
              <ArrowLeft className="w-4 h-4" />
            </button>
          </div>
        </section>
      ) : (
        /* Results & Completion Screen */
        <section
          aria-label="نتيجة الاختبار وشهادة الإنجاز"
          className={`p-6 sm:p-10 rounded-2xl border ${themeClasses.border} ${themeClasses.cardBg} space-y-8 shadow-2xs text-center`}
        >
          {/* Trophy Header */}
          <div className="space-y-3">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-amber-100 text-amber-600 dark:bg-amber-950/40 dark:text-amber-400 flex items-center justify-center text-3xl shadow-xs">
              <Award className="w-9 h-9" />
            </div>

            <div className="space-y-1">
              <span className="text-[11px] font-bold text-[#127052] dark:text-[#5EB5A1] uppercase tracking-wider">
                اكتمل الاختبار بنجاح
              </span>
              <h2 className={`text-xl sm:text-2xl font-bold ${themeClasses.textPrimary}`}>
                نتيجتك في {config.title}
              </h2>
            </div>
          </div>

          {/* Score Box */}
          <div className="max-w-xs mx-auto p-6 rounded-2xl border border-black/[0.06] dark:border-white/[0.08] bg-black/[0.015] dark:bg-white/[0.02] space-y-2">
            <div className="text-4xl sm:text-5xl font-black text-[#127052] dark:text-[#5EB5A1]">
              {scorePercent}%
            </div>
            <div className={`text-xs font-semibold ${themeClasses.textSecondary}`}>
              أجبت بشكل صحيح على {correctCount} من أصل {totalQuestions} أسئلة
            </div>
          </div>

          {/* Encouragement message */}
          <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} max-w-lg mx-auto leading-relaxed`}>
            {getEncouragement()}
          </p>

          {/* Certificate Button */}
          {scorePercent >= 70 && (
            <div className="pt-1">
              <button
                onClick={() => setShowCertificate(true)}
                className="px-5 py-2.5 rounded-xl text-xs font-bold border border-amber-400/50 bg-amber-50 dark:bg-amber-950/30 text-amber-900 dark:text-amber-200 hover:bg-amber-100 flex items-center gap-2 mx-auto cursor-pointer transition-all shadow-xs"
              >
                <Award className="w-4 h-4 text-amber-600" />
                <span>إصدار وتخصيص شهادة الإتقان باسمك</span>
              </button>
            </div>
          )}

          {/* Review Mistakes Accordion */}
          <div className="text-right space-y-3 pt-4 border-t border-black/[0.05] dark:border-white/[0.05]">
            <h3 className={`text-sm font-bold ${themeClasses.textPrimary} flex items-center gap-2`}>
              <BookOpen className="w-4 h-4 text-[#127052] dark:text-[#5EB5A1]" />
              <span>مراجعة تفصيلية لجميع الأسئلة ({totalQuestions})</span>
            </h3>

            <div className="space-y-3">
              {config.questions.map((q, idx) => {
                const userAns = selectedAnswers[q.id];
                const isCorrect = String(userAns) === String(q.correctAnswer);

                return (
                  <div
                    key={q.id}
                    className={`p-4 rounded-xl border text-xs leading-relaxed ${
                      isCorrect
                        ? 'border-emerald-500/20 bg-emerald-50/20 dark:bg-emerald-950/10'
                        : 'border-rose-500/20 bg-rose-50/20 dark:bg-rose-950/10'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="space-y-1">
                        <div className="font-bold text-xs text-slate-700 dark:text-slate-300">
                          {idx + 1}. {q.questionText}
                        </div>
                        {q.displayContent && (
                          <div className="font-mono text-xs text-[#127052] dark:text-[#5EB5A1] dir-ltr text-right py-0.5">
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
              onClick={onGoRatiosProportions}
              className={`px-5 py-2.5 rounded-xl text-xs font-medium border ${themeClasses.border} ${themeClasses.cardHoverBg} ${themeClasses.textSecondary} flex items-center gap-2 transition-colors cursor-pointer`}
            >
              <span>العودة لكل اختبارات النسب والتناسب</span>
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
              ✕
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
                طباعة الشهادة 🖨️
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
              <div key={idx} className="space-y-3">
                <div className="flex items-center gap-2 font-bold text-sm text-[#127052] dark:text-[#5EB5A1]">
                  {getIcon()}
                  <span>{section.title}</span>
                </div>

                <p className={`${themeClasses.textSecondary} leading-relaxed`}>
                  {section.content}
                </p>

                {section.subBoxes && section.subBoxes.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {section.subBoxes.map((box, bIdx) => (
                      <div
                        key={bIdx}
                        className={`p-4 rounded-xl border ${themeClasses.border} bg-black/[0.015] dark:bg-white/[0.02] space-y-1`}
                      >
                        <div className="font-bold text-xs text-slate-800 dark:text-slate-200">
                          {box.title}
                        </div>
                        <p className={`text-xs ${themeClasses.textMuted} whitespace-pre-line leading-relaxed`}>
                          {box.text}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Golden Tip Footer */}
        <div className="p-4 rounded-xl border border-amber-300/40 bg-amber-50/50 dark:bg-amber-950/20 text-xs sm:text-sm leading-relaxed space-y-1">
          <div className="font-bold text-amber-900 dark:text-amber-200 flex items-center gap-1.5">
            <Lightbulb className="w-4 h-4 text-amber-600" />
            <span>نصيحة ذهبية للإتقان السريع:</span>
          </div>
          <p className="text-amber-800 dark:text-amber-300 text-xs">
            {config.article.goldenTip}
          </p>
        </div>
      </article>

      {/* 5. Backlink Box for other tests */}
      <RatiosProportionsBacklinkBox
        currentTestId={config.id}
        onGoRatiosProportions={onGoRatiosProportions}
      />
    </div>
  );
};
