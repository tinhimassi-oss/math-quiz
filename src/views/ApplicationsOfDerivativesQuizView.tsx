import React, { useState } from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { useEyeTheme } from '../context/ThemeContext';
import { ApplicationsOfDerivativesBacklinkBox } from '../components/ApplicationsOfDerivativesBacklinkBox';
import {
  APPLICATIONS_OF_DERIVATIVES_QUIZZES,
  ApplicationsOfDerivativesQuizType,
} from '../data/applicationsOfDerivativesTestsData';
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

interface ApplicationsOfDerivativesQuizViewProps {
  quizType: ApplicationsOfDerivativesQuizType;
  onGoHome: () => void;
  onGoDomain: () => void;
  onGoApplicationsOfDerivatives: () => void;
}

export const ApplicationsOfDerivativesQuizView: React.FC<
  ApplicationsOfDerivativesQuizViewProps
> = ({
  quizType,
  onGoHome,
  onGoDomain,
  onGoApplicationsOfDerivatives,
}) => {
  const { themeClasses } = useEyeTheme();
  const config =
    APPLICATIONS_OF_DERIVATIVES_QUIZZES[quizType] ||
    APPLICATIONS_OF_DERIVATIVES_QUIZZES['kinematics-motion'];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
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
      const ctx = new (window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
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

  const handleSelectOption = (opt: string) => {
    if (selectedAnswer !== undefined) return; // already answered
    const isCorrect = opt === currentQ.correctAnswer;
    playTone(isCorrect);
    setSelectedAnswers((prev) => ({ ...prev, [currentQ.id]: opt }));
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

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedUrl(true);
    setTimeout(() => setCopiedUrl(false), 2000);
  };

  // Calculate score
  const score = config.questions.reduce((acc, q) => {
    return selectedAnswers[q.id] === q.correctAnswer ? acc + 1 : acc;
  }, 0);

  const totalQuestions = config.questions.length;
  const percentage = Math.round((score / totalQuestions) * 100);

  return (
    <div className="space-y-6 pb-12">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'الرئيسية', onClick: onGoHome },
          { label: 'التفاضل والتكامل (Calculus)', onClick: onGoDomain },
          {
            label: 'تطبيقات المشتقات',
            onClick: onGoApplicationsOfDerivatives,
          },
          { label: config.title },
        ]}
      />

      {/* Hero Header */}
      <div
        className={`rounded-2xl border ${themeClasses.border} ${themeClasses.cardBg} p-6 sm:p-8 shadow-sm transition-all text-right`}
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              تطبيقات المشتقات والتفاضل المتقدم
            </div>
            <h1 className={`text-2xl sm:text-3xl font-extrabold ${themeClasses.textPrimary} tracking-tight`}>
              {config.title}
            </h1>
            <p className={`text-sm sm:text-base ${themeClasses.textSecondary} mt-2 max-w-2xl leading-relaxed`}>
              {config.subtitle}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyLink}
              className={`p-2.5 rounded-xl border ${themeClasses.border} hover:bg-black/5 dark:hover:bg-white/5 text-sm flex items-center gap-2 font-medium transition-all shadow-sm`}
              title="مشاركة رابط الاختبار"
            >
              {copiedUrl ? (
                <>
                  <Check className="w-4 h-4 text-emerald-500" />
                  <span className="text-emerald-600 text-xs font-semibold">تم النسخ</span>
                </>
              ) : (
                <>
                  <Share2 className="w-4 h-4" />
                  <span className="text-xs">مشاركة</span>
                </>
              )}
            </button>
            <button
              onClick={handleRestart}
              className={`p-2.5 rounded-xl border ${themeClasses.border} hover:bg-black/5 dark:hover:bg-white/5 text-sm flex items-center gap-2 font-medium transition-all shadow-sm`}
              title="إعادة بدء الاختبار"
            >
              <RotateCcw className="w-4 h-4" />
              <span className="text-xs">إعادة</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Quiz Flow */}
      {!isCompleted ? (
        <div
          className={`rounded-2xl border ${themeClasses.border} ${themeClasses.cardBg} p-6 sm:p-8 shadow-sm transition-all`}
        >
          {/* Progress Bar */}
          <div className="mb-6">
            <div className="flex justify-between items-center text-xs font-semibold mb-2">
              <span className={themeClasses.textSecondary}>
                السؤال {currentIndex + 1} من {totalQuestions}
              </span>
              <span className="text-emerald-600 dark:text-emerald-400 font-mono">
                {Math.round(((currentIndex + 1) / totalQuestions) * 100)}%
              </span>
            </div>
            <div className="w-full h-2.5 bg-black/5 dark:bg-white/5 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full transition-all duration-300"
                style={{ width: `${((currentIndex + 1) / totalQuestions) * 100}%` }}
              />
            </div>
          </div>

          {/* Question Box */}
          <div className="mb-8 text-right">
            <div className="inline-block px-3 py-1 rounded-lg bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 text-xs font-bold mb-3">
              مسألة تطبيقية #{currentIndex + 1}
            </div>
            <h2
              className={`text-lg sm:text-xl font-bold ${themeClasses.textPrimary} leading-relaxed dir-rtl`}
            >
              {currentQ.question}
            </h2>
          </div>

          {/* Options */}
          <div className="grid grid-cols-1 gap-3.5 mb-8">
            {currentQ.options.map((opt, idx) => {
              const isSelected = selectedAnswer === opt;
              const isCorrect = opt === currentQ.correctAnswer;
              const hasAnswered = selectedAnswer !== undefined;

              let btnStyle = `border ${themeClasses.border} ${themeClasses.cardBg} hover:border-emerald-500/50 hover:bg-emerald-500/5`;

              if (hasAnswered) {
                if (isCorrect) {
                  btnStyle = 'border-emerald-500 bg-emerald-500/10 text-emerald-800 dark:text-emerald-200 font-bold';
                } else if (isSelected) {
                  btnStyle = 'border-rose-500 bg-rose-500/10 text-rose-800 dark:text-rose-200 font-bold';
                } else {
                  btnStyle = 'opacity-50 border-black/5 dark:border-white/5';
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(opt)}
                  disabled={hasAnswered}
                  className={`w-full p-4 rounded-xl text-right transition-all flex items-center justify-between text-sm sm:text-base ${btnStyle}`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold ${
                        isSelected
                          ? isCorrect
                            ? 'bg-emerald-500 text-white'
                            : 'bg-rose-500 text-white'
                          : hasAnswered && isCorrect
                          ? 'bg-emerald-500 text-white'
                          : 'bg-black/5 dark:bg-white/5 ' + themeClasses.textSecondary
                      }`}
                    >
                      {['أ', 'ب', 'ج', 'د'][idx]}
                    </span>
                    <span className="font-medium dir-rtl">{opt}</span>
                  </div>

                  {hasAnswered && (
                    <div>
                      {isCorrect ? (
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                      ) : isSelected ? (
                        <XCircle className="w-5 h-5 text-rose-600 dark:text-rose-400" />
                      ) : null}
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Hint Section */}
          {currentQ.hint && !selectedAnswer && (
            <div className="mb-6 text-right">
              <button
                onClick={() => setShowHint(!showHint)}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-600 dark:text-amber-400 hover:underline"
              >
                <Lightbulb className="w-4 h-4" />
                {showHint ? 'إخفاء التلميح' : 'هل تحتاج إلى تلميح؟'}
              </button>
              {showHint && (
                <div className="mt-2 p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-800 dark:text-amber-200 leading-relaxed">
                  تنبيه: {currentQ.hint}
                </div>
              )}
            </div>
          )}

          {/* Explanation Box (Post Answer) */}
          {selectedAnswer !== undefined && (
            <div
              className={`mb-8 p-4 sm:p-5 rounded-xl border text-right ${
                selectedAnswer === currentQ.correctAnswer
                  ? 'border-emerald-500/20 bg-emerald-500/5'
                  : 'border-rose-500/20 bg-rose-500/5'
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                {selectedAnswer === currentQ.correctAnswer ? (
                  <>
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    <span className="font-bold text-sm text-emerald-700 dark:text-emerald-300">
                      إجابة صحيحة وممتازة!
                    </span>
                  </>
                ) : (
                  <>
                    <XCircle className="w-5 h-5 text-rose-600" />
                    <span className="font-bold text-sm text-rose-700 dark:text-rose-300">
                      إجابة غير صحيحة، راجع خطوات الحل:
                    </span>
                  </>
                )}
              </div>
              <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
                {currentQ.explanation}
              </p>
            </div>
          )}

          {/* Navigation Controls */}
          <div className="flex items-center justify-between pt-4 border-t border-black/5 dark:border-white/5">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className={`px-4 py-2 rounded-xl border ${themeClasses.border} hover:bg-black/5 dark:hover:bg-white/5 text-xs sm:text-sm font-semibold flex items-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed`}
            >
              <ArrowRight className="w-4 h-4" />
              السابق
            </button>

            <button
              onClick={handleNext}
              disabled={selectedAnswer === undefined}
              className={`px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white text-xs sm:text-sm font-bold flex items-center gap-2 shadow-md hover:shadow-lg disabled:opacity-40 disabled:cursor-not-allowed transition-all`}
            >
              {currentIndex === totalQuestions - 1 ? 'إنهاء الاختبار والنتيجة' : 'السؤال التالي'}
              <ArrowLeft className="w-4 h-4" />
            </button>
          </div>
        </div>
      ) : (
        /* Results View */
        <div
          className={`rounded-2xl border ${themeClasses.border} ${themeClasses.cardBg} p-6 sm:p-10 shadow-sm transition-all text-center`}
        >
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 text-white flex items-center justify-center mx-auto mb-6 shadow-xl text-4xl">
            
          </div>

          <h2 className={`text-2xl sm:text-3xl font-extrabold ${themeClasses.textPrimary} mb-2`}>
            اكتمل الاختبار بنجاح!
          </h2>
          <p className={`text-sm ${themeClasses.textSecondary} max-w-md mx-auto mb-6 leading-relaxed`}>
            لقد أتممت اختبار {config.title} المكون من {totalQuestions} أسئلة تطبيقية متخصصة.
          </p>

          {/* Score Card */}
          <div className="grid grid-cols-3 gap-3 max-w-lg mx-auto mb-8 text-center">
            <div className={`p-4 rounded-xl border ${themeClasses.border} bg-black/[0.02] dark:bg-white/[0.02]`}>
              <div className="text-2xl sm:text-3xl font-extrabold text-emerald-600 dark:text-emerald-400 font-mono">
                {score} / {totalQuestions}
              </div>
              <div className={`text-xs ${themeClasses.textSecondary} mt-1`}>الإجابات الصحيحة</div>
            </div>
            <div className={`p-4 rounded-xl border ${themeClasses.border} bg-black/[0.02] dark:bg-white/[0.02]`}>
              <div className="text-2xl sm:text-3xl font-extrabold text-emerald-600 dark:text-emerald-400 font-mono">
                {percentage}%
              </div>
              <div className={`text-xs ${themeClasses.textSecondary} mt-1`}>نسبة الإتقان</div>
            </div>
            <div className={`p-4 rounded-xl border ${themeClasses.border} bg-black/[0.02] dark:bg-white/[0.02]`}>
              <div className="text-2xl sm:text-3xl font-extrabold text-amber-500 font-mono">
                {percentage >= 90 ? 'ممتاز ' : percentage >= 70 ? 'جيد جداً ' : 'يحتاج مراجعة '}
              </div>
              <div className={`text-xs ${themeClasses.textSecondary} mt-1`}>التقييم الأكاديمي</div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
            <button
              onClick={handleRestart}
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-sm font-bold flex items-center gap-2 shadow-md hover:shadow-lg transition-all"
            >
              <RotateCcw className="w-4 h-4" />
              إعادة الاختبار من البداية
            </button>
            <button
              onClick={() => setShowCertificate(!showCertificate)}
              className={`px-6 py-2.5 rounded-xl border ${themeClasses.border} hover:bg-black/5 dark:hover:bg-white/5 text-sm font-semibold flex items-center gap-2 transition-all`}
            >
              <Award className="w-4 h-4 text-emerald-600" />
              {showCertificate ? 'إخفاء شهادة الإنجاز' : 'إصدار شهادة إنجاز'}
            </button>
          </div>

          {/* Certificate */}
          {showCertificate && (
            <div className="max-w-xl mx-auto p-8 rounded-2xl border-4 border-double border-emerald-500/40 bg-gradient-to-b from-emerald-500/5 to-transparent text-center mb-10">
              <span className="text-4xl"></span>
              <h3 className="text-xl font-extrabold mt-3 text-emerald-700 dark:text-emerald-300">
                شهادة إتقان في تطبيقات المشتقات
              </h3>
              <p className={`text-xs ${themeClasses.textSecondary} mt-2`}>
                تُمنح هذه الشهادة تقديراً لإتمام اختبار {config.title} بنجاح
              </p>
              <div className="my-4">
                <input
                  type="text"
                  placeholder="اكتب اسم الطالب / الطالبة هنا"
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  className={`w-64 px-4 py-2 text-center text-sm rounded-lg border ${themeClasses.border} ${themeClasses.cardBg} focus:outline-none focus:ring-2 focus:ring-emerald-500`}
                />
              </div>
              {studentName && (
                <p className="text-lg font-bold text-emerald-600 dark:text-emerald-400">
                  البطل / البطلة: {studentName}
                </p>
              )}
              <div className="mt-4 text-xs font-mono text-emerald-700 dark:text-emerald-300">
                الدرجة المستحقة: {percentage}% ({score} من {totalQuestions})
              </div>
            </div>
          )}

          {/* Review Questions */}
          <div className="text-right border-t border-black/5 dark:border-white/5 pt-8">
            <h3 className={`text-lg font-bold ${themeClasses.textPrimary} mb-4 flex items-center gap-2`}>
              <BookOpen className="w-5 h-5 text-emerald-600" />
              مراجعة المسائل والحلول النموذجية
            </h3>
            <div className="space-y-4">
              {config.questions.map((q, i) => {
                const userAns = selectedAnswers[q.id];
                const isUserCorrect = userAns === q.correctAnswer;
                return (
                  <div
                    key={q.id}
                    className={`p-4 rounded-xl border ${
                      isUserCorrect ? 'border-emerald-500/30 bg-emerald-500/5' : 'border-rose-500/30 bg-rose-500/5'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold text-sm text-emerald-700 dark:text-emerald-300">
                        مسألة {i + 1}
                      </span>
                      <span className="text-xs font-semibold">
                        {isUserCorrect ? (
                          <span className="text-emerald-600 flex items-center gap-1">
                            <CheckCircle2 className="w-3.5 h-3.5" /> صحيحة
                          </span>
                        ) : (
                          <span className="text-rose-600 flex items-center gap-1">
                            <XCircle className="w-3.5 h-3.5" /> غير صحيحة
                          </span>
                        )}
                      </span>
                    </div>
                    <p className={`font-semibold text-sm mb-2 ${themeClasses.textPrimary}`}>
                      {q.question}
                    </p>
                    <div className="text-xs space-y-1 mb-2">
                      <div className="text-emerald-700 dark:text-emerald-300 font-medium">
                        الإجابة الصحيحة: {q.correctAnswer}
                      </div>
                      {!isUserCorrect && (
                        <div className="text-rose-700 dark:text-rose-300">
                          إجابتك المختارة: {userAns}
                        </div>
                      )}
                    </div>
                    <p className={`text-xs ${themeClasses.textSecondary} leading-relaxed pt-2 border-t border-black/5 dark:border-white/5`}>
                      {q.explanation}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Educational Article Section */}
      <section
        className={`rounded-2xl border ${themeClasses.border} ${themeClasses.cardBg} p-6 sm:p-10 shadow-sm transition-all text-right mt-10`}
      >
        <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-lg mb-4">
          <BookOpen className="w-5 h-5" />
          <h2>المقالة العلمية والشرح الأكاديمي المفصل لهذا المفهوم</h2>
        </div>
        <div className="prose prose-emerald dark:prose-invert max-w-none text-xs sm:text-sm leading-relaxed space-y-4">
          <div
            className="whitespace-pre-line leading-relaxed"
            dangerouslySetInnerHTML={{
              __html: config.article
                .replace(/^# (.*$)/gim, '<h1 class="text-xl sm:text-2xl font-black mt-6 mb-3 text-emerald-700 dark:text-emerald-300">$1</h1>')
                .replace(/^## (.*$)/gim, '<h2 class="text-lg sm:text-xl font-bold mt-5 mb-2 text-emerald-600 dark:text-emerald-400">$1</h2>')
                .replace(/^### (.*$)/gim, '<h3 class="text-base sm:text-lg font-bold mt-4 mb-2">$1</h3>')
                .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-emerald-800 dark:text-emerald-200">$1</strong>')
                .replace(/---/g, '<hr class="my-6 border-black/10 dark:border-white/10" />'),
            }}
          />
        </div>
      </section>

      {/* Backlink Box for Internal Linking */}
      <ApplicationsOfDerivativesBacklinkBox currentQuizId={config.id} />
    </div>
  );
};
