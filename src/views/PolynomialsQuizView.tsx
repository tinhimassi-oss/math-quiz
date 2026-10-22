import React, { useState } from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { useEyeTheme } from '../context/ThemeContext';
import { PolynomialsBacklinkBox } from '../components/PolynomialsBacklinkBox';
import {
  POLYNOMIALS_QUIZZES,
  PolynomialsQuizType,
} from '../data/polynomialsTestsData';
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

interface PolynomialsQuizViewProps {
  quizType: PolynomialsQuizType;
  onGoHome: () => void;
  onGoDomain: () => void;
  onGoPolynomials: () => void;
}

export const PolynomialsQuizView: React.FC<PolynomialsQuizViewProps> = ({
  quizType,
  onGoHome,
  onGoDomain,
  onGoPolynomials,
}) => {
  const { themeClasses } = useEyeTheme();
  const config =
    POLYNOMIALS_QUIZZES[quizType] ||
    POLYNOMIALS_QUIZZES['polynomial-degree-leading-coefficient'];

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
        osc.frequency.setValueAtTime(880, ctx.currentTime + 0.1); // A5
        gain.gain.setValueAtTime(0.15, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3);
        osc.start();
        osc.stop(ctx.currentTime + 0.3);
      } else {
        osc.frequency.setValueAtTime(220, ctx.currentTime);
        osc.frequency.setValueAtTime(164.81, ctx.currentTime + 0.1);
        gain.gain.setValueAtTime(0.15, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.25);
        osc.start();
        osc.stop(ctx.currentTime + 0.25);
      }
    } catch {
      // AudioContext not supported or blocked
    }
  };

  const handleSelectOption = (idx: number) => {
    if (selectedAnswer !== undefined) return; // Prevent changing answer
    const isCorrect = idx === currentQ.correctIndex;
    setSelectedAnswers((prev) => ({ ...prev, [currentQ.id]: idx }));
    playTone(isCorrect);
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
    setCurrentIndex(0);
    setSelectedAnswers({});
    setIsCompleted(false);
    setShowHint(false);
    setShowCertificate(false);
  };

  // Score calculations
  const totalQuestions = config.questions.length;
  const correctCount = config.questions.filter(
    (q) => selectedAnswers[q.id] === q.correctIndex
  ).length;
  const scorePercent = Math.round((correctCount / totalQuestions) * 100);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedUrl(true);
    setTimeout(() => setCopiedUrl(false), 2500);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-right font-sans" dir="rtl">
      {/* Breadcrumbs */}
      <div className="mb-6">
        <Breadcrumbs
          items={[
            { label: 'الرئيسية', onClick: onGoHome },
            { label: 'الجبر والدوال', onClick: onGoDomain },
            { label: 'كثيرات الحدود', onClick: onGoPolynomials },
            { label: config.title },
          ]}
        />
      </div>

      {/* Main Card */}
      <div
        className={`rounded-3xl border ${themeClasses.border} ${themeClasses.cardBg} p-6 sm:p-10 shadow-lg relative overflow-hidden`}
      >
        {/* Decorative Top Accent */}
        <div className="absolute top-0 right-0 left-0 h-2 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500" />

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-black/[0.06] dark:border-white/[0.08]">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-3xl">{config.emoji}</span>
              <div>
                <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 mb-1">
                  كثيرات الحدود • مستوى {config.level}
                </span>
                <h1 className={`text-xl sm:text-2xl font-black ${themeClasses.textPrimary}`}>
                  {config.title}
                </h1>
              </div>
            </div>
            <p className={`text-xs sm:text-sm ${themeClasses.textSecondary}`}>
              {config.shortDesc}
            </p>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-auto">
            <button
              onClick={handleShare}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-semibold transition-all ${
                copiedUrl
                  ? 'border-emerald-500 bg-emerald-500/10 text-emerald-600'
                  : 'border-black/[0.08] hover:border-black/20 dark:border-white/[0.08] text-neutral-600 dark:text-neutral-300'
              }`}
            >
              {copiedUrl ? <Check className="w-3.5 h-3.5" /> : <Share2 className="w-3.5 h-3.5" />}
              <span>{copiedUrl ? 'تم النسخ!' : 'مشاركة'}</span>
            </button>
            <div className="px-3 py-1.5 rounded-xl bg-black/[0.03] dark:bg-white/[0.04] text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400" dir="ltr">
              {config.mathSymbol}
            </div>
          </div>
        </div>

        {/* Quiz Flow */}
        {!isCompleted ? (
          <div className="mt-6 space-y-6">
            {/* Progress Bar */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs font-bold text-neutral-500">
                <span>السؤال {currentIndex + 1} من {totalQuestions}</span>
                <span>{Math.round(((currentIndex + 1) / totalQuestions) * 100)}%</span>
              </div>
              <div className="h-2 w-full bg-black/[0.06] dark:bg-white/[0.08] rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-l from-emerald-500 to-teal-500 transition-all duration-300"
                  style={{ width: `${((currentIndex + 1) / totalQuestions) * 100}%` }}
                />
              </div>
            </div>

            {/* Question Text */}
            <div className="p-6 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.04] dark:border-white/[0.04]">
              <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 block mb-2">
                سؤال رقم {currentIndex + 1}:
              </span>
              <h2 className={`text-base sm:text-lg font-bold leading-relaxed ${themeClasses.textPrimary}`}>
                {currentQ.text}
              </h2>
            </div>

            {/* Options */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {currentQ.options.map((option, idx) => {
                const isSelected = selectedAnswer === idx;
                const hasAnswered = selectedAnswer !== undefined;
                const isCorrect = idx === currentQ.correctIndex;

                let btnStyles = 'border-black/[0.08] hover:border-emerald-500/50 hover:bg-emerald-500/[0.02] dark:border-white/[0.08]';
                if (hasAnswered) {
                  if (isCorrect) {
                    btnStyles = 'border-emerald-500 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 font-bold';
                  } else if (isSelected) {
                    btnStyles = 'border-rose-500 bg-rose-500/10 text-rose-700 dark:text-rose-300 font-bold';
                  } else {
                    btnStyles = 'opacity-40 border-black/[0.04] dark:border-white/[0.04]';
                  }
                }

                return (
                  <button
                    key={idx}
                    disabled={hasAnswered}
                    onClick={() => handleSelectOption(idx)}
                    className={`flex items-center justify-between p-4 rounded-xl border text-right transition-all text-sm leading-relaxed ${btnStyles}`}
                  >
                    <span className="flex-1">{option}</span>
                    <span className="mr-3 shrink-0">
                      {hasAnswered && isCorrect && (
                        <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                      )}
                      {hasAnswered && isSelected && !isCorrect && (
                        <XCircle className="w-5 h-5 text-rose-500" />
                      )}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Feedback & Hint Box */}
            <div className="space-y-3">
              {selectedAnswer !== undefined && (
                <div
                  className={`p-4 rounded-xl text-xs sm:text-sm leading-relaxed border ${
                    selectedAnswer === currentQ.correctIndex
                      ? 'border-emerald-500/30 bg-emerald-500/[0.05] text-emerald-800 dark:text-emerald-300'
                      : 'border-rose-500/30 bg-rose-500/[0.05] text-rose-800 dark:text-rose-300'
                  }`}
                >
                  <div className="font-bold mb-1 flex items-center gap-1.5">
                    {selectedAnswer === currentQ.correctIndex ? (
                      <>
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                        <span>إجابة صحيحة! أحسنت 👏</span>
                      </>
                    ) : (
                      <>
                        <XCircle className="w-4 h-4 text-rose-500" />
                        <span>إجابة غير دقيقة! إليك الشرح والخطوات:</span>
                      </>
                    )}
                  </div>
                  <p className="mt-1">{currentQ.explanation}</p>
                </div>
              )}

              {/* Hint button */}
              {selectedAnswer === undefined && (
                <div>
                  <button
                    onClick={() => setShowHint(!showHint)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-600 hover:text-amber-700 dark:text-amber-400 transition-colors"
                  >
                    <Lightbulb className="w-3.5 h-3.5" />
                    <span>{showHint ? 'إخفاء التلميح' : 'هل تحتاج إلى تلميح ومساعدة؟'}</span>
                  </button>
                  {showHint && (
                    <div className="mt-2 p-3 rounded-lg bg-amber-500/[0.08] border border-amber-500/20 text-xs text-amber-800 dark:text-amber-200">
                      💡 <strong>تلميح:</strong> {currentQ.hint}
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Action Navigation Buttons */}
            <div className="flex items-center justify-between pt-4 border-t border-black/[0.06] dark:border-white/[0.08]">
              <button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold border border-black/[0.08] hover:bg-black/[0.02] disabled:opacity-30 disabled:pointer-events-none transition-all"
              >
                <ArrowRight className="w-4 h-4" />
                <span>السابق</span>
              </button>

              <button
                onClick={handleNext}
                disabled={selectedAnswer === undefined}
                className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white disabled:opacity-40 disabled:pointer-events-none shadow-md shadow-emerald-500/20 transition-all"
              >
                <span>{currentIndex === totalQuestions - 1 ? 'إنهاء الاختبار وعرض النتيجة' : 'السؤال التالي'}</span>
                <ArrowLeft className="w-4 h-4" />
              </button>
            </div>
          </div>
        ) : (
          /* Completion & Results Screen */
          <div className="mt-6 text-center space-y-6">
            <div className="inline-flex p-4 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 mb-2">
              <Award className="w-12 h-12" />
            </div>

            <div>
              <h2 className={`text-2xl font-black ${themeClasses.textPrimary} mb-2`}>
                اكتمل الاختبار بنجاح!
              </h2>
              <p className={`text-sm ${themeClasses.textSecondary}`}>
                أنهيت اختبار: {config.title}
              </p>
            </div>

            {/* Score Ring / Card */}
            <div className="max-w-xs mx-auto p-6 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/[0.08] space-y-2">
              <span className="text-4xl font-black text-emerald-600 dark:text-emerald-400">
                {scorePercent}%
              </span>
              <div className="text-xs font-semibold text-neutral-500">
                أجبت بشكل صحيح على {correctCount} من أصل {totalQuestions} أسئلة
              </div>
              <div className="text-xs font-bold pt-2">
                {scorePercent >= 90 ? (
                  <span className="text-emerald-600">ممتاز جداً! استيعاب متقن ومثالي 🌟</span>
                ) : scorePercent >= 70 ? (
                  <span className="text-blue-600">جيد جداً! أساس متين ومهارات رائعة 👍</span>
                ) : (
                  <span className="text-amber-600">تحتاج إلى مراجعة المقالة والشروحات أدناه وإعادة المحاولة 💡</span>
                )}
              </div>
            </div>

            {/* Certificate Form */}
            {scorePercent >= 60 && !showCertificate && (
              <div className="max-w-md mx-auto p-4 rounded-xl border border-emerald-500/20 bg-emerald-500/[0.03] text-right space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-700 dark:text-emerald-300">
                  <Sparkles className="w-4 h-4" />
                  <span>احصل على شهادة إتمام معتمدة باسمك:</span>
                </div>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                    placeholder="اكتب اسمك الثلاثي هنا..."
                    className="flex-1 px-3 py-2 rounded-lg text-xs border border-black/[0.1] dark:border-white/[0.1] bg-white dark:bg-neutral-800 focus:outline-none focus:border-emerald-500"
                  />
                  <button
                    onClick={() => {
                      if (studentName.trim()) setShowCertificate(true);
                    }}
                    disabled={!studentName.trim()}
                    className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 disabled:opacity-40 text-white text-xs font-bold transition-all"
                  >
                    إصدار الشهادة
                  </button>
                </div>
              </div>
            )}

            {/* Certificate Display */}
            {showCertificate && (
              <div className="max-w-lg mx-auto p-6 sm:p-8 rounded-2xl border-4 border-amber-500/40 bg-gradient-to-br from-amber-500/[0.05] via-yellow-500/[0.02] to-transparent text-center space-y-4 shadow-xl">
                <div className="text-xs font-bold tracking-widest text-amber-600 uppercase">
                  شهادة إتقان في الرياضيات
                </div>
                <h3 className={`text-xl font-extrabold ${themeClasses.textPrimary}`}>
                  تشهد منصة كويزات الرياضيات بأن الطالب:
                </h3>
                <div className="text-2xl font-black text-emerald-600 dark:text-emerald-400 py-1 border-b-2 border-emerald-500/30 inline-block">
                  {studentName}
                </div>
                <p className={`text-xs ${themeClasses.textSecondary}`}>
                  قد اجتاز بنجاح اختبار <strong>{config.title}</strong> وحصل على درجة <strong>{scorePercent}%</strong> بعد حل المسائل وفهم خطوات الحل بالتفصيل.
                </p>
                <div className="text-[10px] text-neutral-400 font-mono">
                  تاريخ الإنجاز: {new Date().toLocaleDateString('ar-EG')}
                </div>
              </div>
            )}

            {/* Restart & Navigation */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
              <button
                onClick={handleRestart}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-black/[0.1] hover:bg-black/[0.03] dark:border-white/[0.1] text-xs font-bold transition-all"
              >
                <RotateCcw className="w-4 h-4" />
                <span>إعادة الاختبار</span>
              </button>
              <button
                onClick={onGoPolynomials}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-md shadow-emerald-500/20 transition-all"
              >
                <span>العودة لقسم كثيرات الحدود</span>
                <ArrowLeft className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Backlink Box for Cross-Navigation */}
      <PolynomialsBacklinkBox currentTestId={config.id} />

      {/* Pedagogical Article Rendered Below the Quiz */}
      <article className={`mt-8 p-6 sm:p-10 rounded-3xl border ${themeClasses.border} ${themeClasses.cardBg} space-y-8 shadow-sm leading-relaxed`}>
        <header className="pb-6 border-b border-black/[0.06] dark:border-white/[0.08] space-y-2">
          <div className="flex items-center gap-2 text-xs font-bold text-emerald-600 dark:text-emerald-400">
            <BookOpen className="w-4 h-4" />
            <span>المقالة التعليمية المرافقة للاختبار</span>
          </div>
          <h2 className={`text-xl sm:text-2xl font-black ${themeClasses.textPrimary}`}>
            {config.article.title}
          </h2>
          <p className={`text-xs sm:text-sm font-semibold text-emerald-600 dark:text-emerald-400`}>
            {config.article.subtitle}
          </p>
          <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} pt-1`}>
            {config.article.summary}
          </p>
        </header>

        {/* Key Concepts */}
        <section className="space-y-4">
          <h3 className={`text-base sm:text-lg font-bold flex items-center gap-2 ${themeClasses.textPrimary}`}>
            <Sparkles className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>المفاهيم والقوانين الجوهرية:</span>
          </h3>
          <div className="grid grid-cols-1 gap-3">
            {config.article.keyConcepts.map((concept, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl border border-black/[0.04] bg-black/[0.02] dark:border-white/[0.04] dark:bg-white/[0.02] space-y-1.5"
              >
                <h4 className="font-bold text-xs sm:text-sm text-emerald-700 dark:text-emerald-300">
                  {concept.title}
                </h4>
                <p className={`text-xs ${themeClasses.textSecondary} leading-relaxed whitespace-pre-line`}>
                  {concept.description}
                </p>
                {concept.formula && (
                  <div className="font-mono text-[11px] font-bold text-emerald-600 dark:text-emerald-400 mt-1" dir="ltr">
                    {concept.formula}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Worked Examples */}
        <section className="space-y-4">
          <h3 className={`text-base sm:text-lg font-bold flex items-center gap-2 ${themeClasses.textPrimary}`}>
            <TrendingUp className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span>أمثلة تطبيقية محلولة خطوة بخطوة:</span>
          </h3>
          <div className="space-y-3">
            {config.article.workedExamples.map((ex, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl border border-blue-500/20 bg-blue-500/[0.02] space-y-3"
              >
                <div className="font-bold text-xs sm:text-sm text-blue-800 dark:text-blue-300">
                  المسألة: {ex.problem}
                </div>
                <div className="space-y-1 text-xs">
                  {ex.steps.map((step, sIdx) => (
                    <div key={sIdx} className="text-neutral-600 dark:text-neutral-300">
                      • {step}
                    </div>
                  ))}
                </div>
                <div className="pt-2 border-t border-blue-500/10 flex items-center justify-between text-xs font-bold text-blue-700 dark:text-blue-300">
                  <span>النتيجة النهائية: {ex.answer}</span>
                </div>
                <div className="text-[11px] text-amber-700 dark:text-amber-300 bg-amber-500/10 p-2 rounded-lg">
                  💡 {ex.tip}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="space-y-3">
          <h3 className={`text-base sm:text-lg font-bold flex items-center gap-2 ${themeClasses.textPrimary}`}>
            <Lightbulb className="w-4 h-4 text-rose-600 dark:text-rose-400" />
            <span>أخطاء شائعة يجب الحذر منها:</span>
          </h3>
          <div className="space-y-2">
            {config.article.commonMistakes.map((m, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl border border-rose-500/20 bg-rose-500/[0.02] text-xs space-y-1"
              >
                <div className="text-rose-700 dark:text-rose-300 font-bold">
                  ❌ الخطأ: {m.mistake}
                </div>
                <div className="text-emerald-700 dark:text-emerald-300 font-semibold">
                  ✓ الصواب: {m.correction}
                </div>
                <div className="text-neutral-500 text-[11px]">
                  السبب: {m.why}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Practical Applications */}
        <section className="space-y-3">
          <h3 className={`text-base sm:text-lg font-bold flex items-center gap-2 ${themeClasses.textPrimary}`}>
            <Heart className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>تطبيقات في الحياة الواقعية والعلوم:</span>
          </h3>
          <ul className={`text-xs space-y-1.5 ${themeClasses.textSecondary}`}>
            {config.article.practicalApplications.map((app, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-emerald-500 font-bold">•</span>
                <span>{app}</span>
              </li>
            ))}
          </ul>
        </section>
      </article>
    </div>
  );
};
