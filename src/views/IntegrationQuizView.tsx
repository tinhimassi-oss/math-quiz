import React, { useState } from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { useEyeTheme } from '../context/ThemeContext';
import { IntegrationBacklinkBox } from '../components/IntegrationBacklinkBox';
import { navigateTo } from '../navigation/router';
import {
  INTEGRATION_QUIZZES,
  IntegrationQuizType,
} from '../data/integrationTestsData';
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

interface IntegrationQuizViewProps {
  quizType: IntegrationQuizType;
  onGoHome: () => void;
  onGoDomain: () => void;
  onGoIntegration: () => void;
}

export const IntegrationQuizView: React.FC<IntegrationQuizViewProps> = ({
  quizType,
  onGoHome,
  onGoDomain,
  onGoIntegration,
}) => {
  const { themeClasses } = useEyeTheme();
  const config =
    INTEGRATION_QUIZZES[quizType] ||
    INTEGRATION_QUIZZES['indefinite-integrals-basic-rules'];

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

  const handleReset = () => {
    setSelectedAnswers({});
    setCurrentIndex(0);
    setIsCompleted(false);
    setShowHint(false);
    setShowCertificate(false);
  };

  const calculateScore = () => {
    let score = 0;
    config.questions.forEach((q) => {
      if (selectedAnswers[q.id] === q.correctAnswer) {
        score++;
      }
    });
    return score;
  };

  const score = calculateScore();
  const isPassed = score >= config.passScore;
  const percentage = Math.round((score / config.questions.length) * 100);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedUrl(true);
      setTimeout(() => setCopiedUrl(false), 2000);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8 text-right dir-rtl">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'الرئيسية', onClick: onGoHome },
          { label: 'حساب التفاضل والتكامل', onClick: onGoDomain },
          { label: 'التكامل (Integration)', onClick: onGoIntegration },
          { label: config.title },
        ]}
      />

      {/* Quiz Card */}
      <div
        className={`rounded-2xl border ${themeClasses.border} ${themeClasses.cardBg} p-6 sm:p-8 shadow-sm transition-all`}
      >
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-black/5 dark:border-white/5">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-violet-500/10 text-violet-600 dark:text-violet-400 border border-violet-500/20 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              {config.categoryTitle} • {config.duration}
            </div>
            <h1 className={`text-2xl sm:text-3xl font-extrabold ${themeClasses.textPrimary}`}>
              {config.title}
            </h1>
            <p className={`text-sm ${themeClasses.textSecondary} mt-1`}>
              {config.description}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className={`p-2.5 rounded-xl border ${themeClasses.border} hover:bg-black/5 dark:hover:bg-white/5 transition-colors relative`}
              title="مشاركة رابط الاختبار"
            >
              {copiedUrl ? (
                <Check className="w-5 h-5 text-emerald-500" />
              ) : (
                <Share2 className={`w-5 h-5 ${themeClasses.textSecondary}`} />
              )}
            </button>
            <button
              onClick={handleReset}
              className={`p-2.5 rounded-xl border ${themeClasses.border} hover:bg-black/5 dark:hover:bg-white/5 transition-colors`}
              title="إعادة بدء الاختبار"
            >
              <RotateCcw className={`w-5 h-5 ${themeClasses.textSecondary}`} />
            </button>
          </div>
        </div>

        {!isCompleted ? (
          <div className="mt-6 space-y-6">
            {/* Progress Bar & Indicators */}
            <div>
              <div className="flex items-center justify-between text-xs sm:text-sm font-medium mb-2">
                <span className={themeClasses.textSecondary}>
                  السؤال {currentIndex + 1} من {config.questions.length}
                </span>
                <span className="text-violet-600 dark:text-violet-400 font-bold">
                  {Math.round(((currentIndex + 1) / config.questions.length) * 100)}%
                </span>
              </div>
              <div className="w-full h-2.5 rounded-full bg-black/5 dark:bg-white/5 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-violet-600 to-indigo-600 transition-all duration-300"
                  style={{
                    width: `${((currentIndex + 1) / config.questions.length) * 100}%`,
                  }}
                />
              </div>

              {/* Step Dots */}
              <div className="flex items-center justify-center gap-1.5 mt-3 overflow-x-auto py-1">
                {config.questions.map((q, idx) => {
                  const isAns = selectedAnswers[q.id] !== undefined;
                  const isCur = idx === currentIndex;
                  const isCorr = selectedAnswers[q.id] === q.correctAnswer;
                  return (
                    <button
                      key={q.id}
                      onClick={() => {
                        setShowHint(false);
                        setCurrentIndex(idx);
                      }}
                      className={`w-7 h-7 rounded-lg text-xs font-bold transition-all flex items-center justify-center shrink-0 ${
                        isCur
                          ? 'ring-2 ring-violet-500 bg-violet-500 text-white shadow-sm'
                          : isAns
                          ? isCorr
                            ? 'bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30'
                            : 'bg-rose-500/20 text-rose-600 dark:text-rose-400 border border-rose-500/30'
                          : `bg-black/5 dark:bg-white/5 ${themeClasses.textSecondary} hover:bg-black/10 dark:hover:bg-white/10`
                      }`}
                    >
                      {idx + 1}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Question Box */}
            <div className={`p-5 sm:p-6 rounded-2xl border ${themeClasses.border} bg-black/[0.01] dark:bg-white/[0.01]`}>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-violet-500/10 text-violet-600 dark:text-violet-400">
                  مستوى الصعوبة: {currentQ.difficulty}
                </span>
                <button
                  onClick={() => setShowHint((prev) => !prev)}
                  className="text-xs font-medium text-amber-600 dark:text-amber-400 hover:underline flex items-center gap-1"
                >
                  <Lightbulb className="w-3.5 h-3.5" />
                  {showHint ? 'إخفاء التلميح' : 'تلميح للمساعدة'}
                </button>
              </div>

              <h2 className={`text-lg sm:text-xl font-bold ${themeClasses.textPrimary} leading-relaxed`}>
                {currentQ.question}
              </h2>

              {showHint && (
                <div className="mt-3 p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs sm:text-sm text-amber-800 dark:text-amber-200 flex items-start gap-2">
                  <Lightbulb className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <p>{currentQ.hint}</p>
                </div>
              )}
            </div>

            {/* Options */}
            <div className="grid grid-cols-1 gap-3">
              {currentQ.options.map((opt, i) => {
                const isSelected = selectedAnswer === opt;
                const isCorrect = opt === currentQ.correctAnswer;
                let btnStyle = `border ${themeClasses.border} hover:border-violet-500/50 hover:bg-violet-500/5`;

                if (selectedAnswer !== undefined) {
                  if (isCorrect) {
                    btnStyle =
                      'border-emerald-500 bg-emerald-500/10 text-emerald-800 dark:text-emerald-200 font-semibold';
                  } else if (isSelected) {
                    btnStyle =
                      'border-rose-500 bg-rose-500/10 text-rose-800 dark:text-rose-200 font-semibold';
                  } else {
                    btnStyle = `border ${themeClasses.border} opacity-50`;
                  }
                }

                return (
                  <button
                    key={i}
                    onClick={() => handleSelectOption(opt)}
                    disabled={selectedAnswer !== undefined}
                    className={`w-full p-4 rounded-xl text-right transition-all flex items-center justify-between group ${btnStyle}`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-7 h-7 rounded-lg border border-current/20 flex items-center justify-center text-xs font-bold shrink-0">
                        {String.fromCharCode(65 + i)}
                      </span>
                      <span className={`text-sm sm:text-base ${themeClasses.textPrimary} dir-ltr text-right`}>
                        {opt}
                      </span>
                    </div>

                    {selectedAnswer !== undefined && (
                      <span className="shrink-0 mr-2">
                        {isCorrect ? (
                          <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                        ) : isSelected ? (
                          <XCircle className="w-5 h-5 text-rose-500" />
                        ) : null}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Explanation box after selection */}
            {selectedAnswer !== undefined && (
              <div
                className={`p-4 rounded-xl border ${
                  selectedAnswer === currentQ.correctAnswer
                    ? 'border-emerald-500/30 bg-emerald-500/5 text-emerald-900 dark:text-emerald-200'
                    : 'border-rose-500/30 bg-rose-500/5 text-rose-900 dark:text-rose-200'
                } text-sm space-y-1.5`}
              >
                <div className="font-bold flex items-center gap-1.5">
                  {selectedAnswer === currentQ.correctAnswer ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                      إجابة صحيحة وموفقة!
                    </>
                  ) : (
                    <>
                      <XCircle className="w-4 h-4 text-rose-500" />
                      إجابة غير صحيحة، الإجابة الدقيقة هي: {currentQ.correctAnswer}
                    </>
                  )}
                </div>
                <p className="text-xs sm:text-sm leading-relaxed opacity-90">
                  {currentQ.explanation}
                </p>
              </div>
            )}

            {/* Navigation buttons */}
            <div className="flex items-center justify-between pt-4 border-t border-black/5 dark:border-white/5">
              <button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className={`px-4 py-2.5 rounded-xl border ${themeClasses.border} text-xs sm:text-sm font-medium flex items-center gap-2 ${
                  currentIndex === 0
                    ? 'opacity-40 cursor-not-allowed'
                    : 'hover:bg-black/5 dark:hover:bg-white/5'
                }`}
              >
                <ArrowRight className="w-4 h-4" />
                السابق
              </button>

              <button
                onClick={handleNext}
                className="px-6 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-700 text-white text-xs sm:text-sm font-bold flex items-center gap-2 transition-colors shadow-sm"
              >
                {currentIndex === config.questions.length - 1
                  ? 'عرض النتيجة والتقرير'
                  : 'التالي'}
                <ArrowLeft className="w-4 h-4" />
              </button>
            </div>
          </div>
        ) : (
          /* Completion / Report Screen */
          <div className="mt-8 space-y-8 text-center">
            <div className="inline-flex p-4 rounded-full bg-violet-500/10 text-violet-600 dark:text-violet-400 mb-2">
              <Award className="w-12 h-12" />
            </div>

            <div>
              <h2 className={`text-2xl sm:text-3xl font-extrabold ${themeClasses.textPrimary}`}>
                {isPassed ? 'تهانينا! لقد أتممت الاختبار بنجاح باهر' : 'أحسنت المحاولة! تحتاج لمزيد من المراجعة'}
              </h2>
              <p className={`text-sm sm:text-base ${themeClasses.textSecondary} mt-2 max-w-lg mx-auto`}>
                حصلت على <span className="font-bold text-violet-600 dark:text-violet-400">{score}</span> من أصل{' '}
                <span className="font-bold">{config.questions.length}</span> بنسبة مئوية{' '}
                <span className="font-bold text-violet-600 dark:text-violet-400">{percentage}%</span>.
                درجة الاجتياز المطلوبة هي {config.passScore} من {config.questions.length}.
              </p>
            </div>

            {/* Score Ring / Bar */}
            <div className="max-w-xs mx-auto">
              <div className="w-full bg-black/5 dark:bg-white/5 h-3.5 rounded-full overflow-hidden">
                <div
                  className={`h-full ${
                    isPassed ? 'bg-emerald-500' : 'bg-amber-500'
                  } transition-all duration-1000`}
                  style={{ width: `${percentage}%` }}
                />
              </div>
            </div>

            {/* Certificate Form */}
            {isPassed && (
              <div className={`p-6 rounded-2xl border ${themeClasses.border} bg-violet-500/5 max-w-md mx-auto text-right space-y-4`}>
                <div className="flex items-center gap-2 font-bold text-violet-700 dark:text-violet-300">
                  <Award className="w-5 h-5 text-violet-500" />
                  <h3>إصدار شهادة إتقان في {config.title}</h3>
                </div>
                <p className={`text-xs ${themeClasses.textSecondary}`}>
                  أدخل اسمك للحصول على شهادة رقمية تثبت اجتيازك لمعايير هذا الاختبار بتفوق:
                </p>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                    placeholder="اكتب اسم الطالب / الباحث..."
                    className={`flex-1 px-3 py-2 rounded-xl border ${themeClasses.border} bg-white dark:bg-black/20 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500`}
                  />
                  <button
                    onClick={() => {
                      if (studentName.trim()) setShowCertificate(true);
                    }}
                    disabled={!studentName.trim()}
                    className="px-4 py-2 rounded-xl bg-violet-600 hover:bg-violet-700 disabled:opacity-50 text-white text-xs font-bold transition-colors"
                  >
                    عرض الشهادة
                  </button>
                </div>

                {showCertificate && studentName.trim() && (
                  <div className="mt-4 p-6 rounded-xl border-2 border-violet-500 bg-white dark:bg-neutral-900 text-center space-y-3 shadow-lg">
                    <span className="text-xs uppercase tracking-wider font-semibold text-violet-600 dark:text-violet-400">
                      شهادة إتمام معتمدة
                    </span>
                    <h4 className="text-xl font-black text-neutral-900 dark:text-white">
                      {studentName}
                    </h4>
                    <p className="text-xs text-neutral-600 dark:text-neutral-400">
                      قد اجتاز بنجاح اختبار{' '}
                      <strong className="text-neutral-900 dark:text-white">{config.title}</strong>{' '}
                      بنتيجة {score}/{config.questions.length} ({percentage}%) في منهاج حساب التكامل المعتمد.
                    </p>
                    <div className="pt-2 text-[10px] text-neutral-400">
                      كود التحقق: CALC-INT-{config.id.slice(0, 4).toUpperCase()}-{Math.floor(Math.random() * 90000 + 10000)}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Action buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
              <button
                onClick={handleReset}
                className="px-6 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-700 text-white text-sm font-bold flex items-center gap-2 transition-colors shadow-sm"
              >
                <RotateCcw className="w-4 h-4" />
                إعادة المحاولة
              </button>

              <button
                onClick={onGoIntegration}
                className={`px-6 py-2.5 rounded-xl border ${themeClasses.border} hover:bg-black/5 dark:hover:bg-white/5 text-sm font-bold flex items-center gap-2 transition-colors`}
              >
                <BookOpen className="w-4 h-4" />
                العودة لقسم التكامل
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Comprehensive Academic Article */}
      <section
        className={`rounded-2xl border ${themeClasses.border} ${themeClasses.cardBg} p-6 sm:p-8 shadow-sm transition-all text-right space-y-6`}
      >
        <div className="border-b border-black/5 dark:border-white/5 pb-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-violet-500/10 text-violet-600 dark:text-violet-400 border border-violet-500/20 mb-2">
            <BookOpen className="w-3.5 h-3.5" />
            المقالة التعليمية والشرح النظري المعتمد
          </div>
          <h2 className={`text-xl sm:text-2xl font-extrabold ${themeClasses.textPrimary}`}>
            {config.article.title}
          </h2>
          <p className={`text-sm ${themeClasses.textSecondary} mt-2 leading-relaxed`}>
            {config.article.introduction}
          </p>
        </div>

        <div className="space-y-6 text-sm sm:text-base leading-relaxed">
          {config.article.sections.map((sec, i) => (
            <div key={i} className="space-y-2">
              <h3 className={`font-bold text-base sm:text-lg ${themeClasses.textPrimary}`}>
                {sec.heading}
              </h3>
              <p className={`${themeClasses.textSecondary} leading-relaxed whitespace-pre-line text-xs sm:text-sm`}>
                {sec.content}
              </p>
            </div>
          ))}
        </div>

        <div className={`p-4 rounded-xl border ${themeClasses.border} bg-violet-500/5 text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
          <strong className="text-violet-700 dark:text-violet-300 block mb-1">
            خلاصة المحور:
          </strong>
          {config.article.summary}
        </div>
      </section>

      {/* Connected Tests Backlink Box */}
      <IntegrationBacklinkBox
        currentTestId={config.id}
        onSelectTest={(testId) => {
          navigateTo(`/domain/calculus/integration/${testId}`);
        }}
      />
    </div>
  );
};
