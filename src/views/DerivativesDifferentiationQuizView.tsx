import React, { useState } from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { useEyeTheme } from '../context/ThemeContext';
import { DerivativesDifferentiationBacklinkBox } from '../components/DerivativesDifferentiationBacklinkBox';
import {
  DERIVATIVES_QUIZZES,
  DerivativesQuizType,
} from '../data/derivativesDifferentiationTestsData';
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

interface DerivativesDifferentiationQuizViewProps {
  quizType: DerivativesQuizType;
  onGoHome: () => void;
  onGoDomain: () => void;
  onGoDerivativesDifferentiation: () => void;
}

export const DerivativesDifferentiationQuizView: React.FC<
  DerivativesDifferentiationQuizViewProps
> = ({
  quizType,
  onGoHome,
  onGoDomain,
  onGoDerivativesDifferentiation,
}) => {
  const { themeClasses } = useEyeTheme();
  const config =
    DERIVATIVES_QUIZZES[quizType] ||
    DERIVATIVES_QUIZZES['definition-of-derivative'];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
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

  const handleSelectOption = (idx: number) => {
    if (selectedAnswer !== undefined) return; // already answered
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
    let correct = 0;
    config.questions.forEach((q) => {
      if (selectedAnswers[q.id] === q.correctAnswer) {
        correct++;
      }
    });
    return correct;
  };

  const correctCount = calculateScore();
  const percentage = Math.round((correctCount / config.questions.length) * 100);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedUrl(true);
    setTimeout(() => setCopiedUrl(false), 2000);
  };

  return (
    <div className="space-y-8 pb-16 text-right">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'الرئيسية', onClick: onGoHome },
          { label: 'التفاضل والتكامل', onClick: onGoDomain },
          { label: 'المشتقات والتفاضل', onClick: onGoDerivativesDifferentiation },
          { label: config.title, active: true },
        ]}
      />

      {/* Quiz Header Banner */}
      <div className={`p-6 sm:p-8 rounded-2xl border ${themeClasses.border} ${themeClasses.cardBg} shadow-2xs space-y-4`}>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="text-3xl sm:text-4xl">{config.emoji}</span>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs px-2.5 py-0.5 rounded-md font-mono bg-indigo-500/10 text-indigo-700 dark:text-indigo-300">
                  {config.level}
                </span>
                <span className="text-xs text-gray-500 font-mono">
                  ⏱️ {config.duration} • 10 أسئلة
                </span>
              </div>
              <h1 className={`text-xl sm:text-2xl font-black mt-1 ${themeClasses.textPrimary}`}>
                {config.title}
              </h1>
            </div>
          </div>

          <button
            onClick={handleCopyLink}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-black/[0.08] dark:border-white/[0.08] text-xs font-semibold hover:bg-black/[0.03] dark:hover:bg-white/[0.03] transition-colors cursor-pointer"
          >
            {copiedUrl ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Share2 className="w-3.5 h-3.5" />}
            <span>{copiedUrl ? 'تم نسخ الرابط' : 'مشاركة الاختبار'}</span>
          </button>
        </div>

        <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
          {config.overview}
        </p>

        {/* Formula Badge */}
        <div className="inline-flex items-center gap-2 p-2.5 px-4 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-xs sm:text-sm font-mono text-indigo-900 dark:text-indigo-200 dir-ltr">
          <span>{config.mathSymbol}</span>
        </div>
      </div>

      {/* Active Quiz Card */}
      {!isCompleted ? (
        <div className={`p-6 sm:p-8 rounded-2xl border ${themeClasses.border} ${themeClasses.cardBg} shadow-2xs space-y-6`}>
          {/* Progress Bar & Counter */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-mono text-gray-500">
              <span>السؤال {currentIndex + 1} من {config.questions.length}</span>
              <span>{Math.round(((currentIndex + 1) / config.questions.length) * 100)}%</span>
            </div>
            <div className="w-full h-2 rounded-full bg-black/[0.05] dark:bg-white/[0.05] overflow-hidden">
              <div
                className="h-full bg-gradient-to-l from-indigo-500 to-indigo-600 transition-all duration-300"
                style={{ width: `${((currentIndex + 1) / config.questions.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Question Stem */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs px-2 py-0.5 rounded-md font-mono bg-indigo-500/10 text-indigo-700 dark:text-indigo-300">
                الصعوبة: {currentQ.difficulty}
              </span>
              <button
                onClick={() => setShowHint((prev) => !prev)}
                className="inline-flex items-center gap-1 text-xs text-amber-600 dark:text-amber-400 hover:underline cursor-pointer"
              >
                <Lightbulb className="w-3.5 h-3.5" />
                <span>{showHint ? 'إخفاء التلميح' : 'إظهار تلميح'}</span>
              </button>
            </div>

            <h3 className={`text-base sm:text-lg font-bold leading-relaxed pt-2 ${themeClasses.textPrimary}`}>
              {currentQ.text}
            </h3>

            {showHint && (
              <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-900 dark:text-amber-200 flex items-start gap-2">
                <Lightbulb className="w-4 h-4 shrink-0 mt-0.5 text-amber-500" />
                <span>{currentQ.hint}</span>
              </div>
            )}
          </div>

          {/* Options */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {currentQ.options.map((opt, idx) => {
              const isSelected = selectedAnswer === idx;
              const isCorrect = idx === currentQ.correctAnswer;
              const hasAnswered = selectedAnswer !== undefined;

              let btnStyle = `border-black/[0.08] dark:border-white/[0.08] hover:border-indigo-500/40 hover:bg-indigo-500/[0.02] ${themeClasses.textPrimary}`;

              if (hasAnswered) {
                if (isCorrect) {
                  btnStyle = 'border-emerald-500 bg-emerald-500/10 text-emerald-800 dark:text-emerald-200 font-bold';
                } else if (isSelected) {
                  btnStyle = 'border-rose-500 bg-rose-500/10 text-rose-800 dark:text-rose-200';
                } else {
                  btnStyle = 'border-black/[0.05] dark:border-white/[0.05] opacity-50';
                }
              }

              return (
                <button
                  key={idx}
                  disabled={hasAnswered}
                  onClick={() => handleSelectOption(idx)}
                  className={`p-4 rounded-xl border text-right transition-all flex items-center justify-between gap-3 text-xs sm:text-sm font-medium cursor-pointer disabled:cursor-default ${btnStyle}`}
                >
                  <span className="leading-relaxed dir-rtl">{opt}</span>
                  {hasAnswered && isCorrect && (
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  )}
                  {hasAnswered && isSelected && !isCorrect && (
                    <XCircle className="w-4 h-4 text-rose-500 shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Explanation Section */}
          {selectedAnswer !== undefined && (
            <div
              className={`p-4 rounded-xl border text-xs sm:text-sm leading-relaxed space-y-1.5 transition-all ${
                selectedAnswer === currentQ.correctAnswer
                  ? 'border-emerald-500/30 bg-emerald-500/[0.03]'
                  : 'border-rose-500/30 bg-rose-500/[0.03]'
              }`}
            >
              <div className="flex items-center gap-1.5 font-bold">
                {selectedAnswer === currentQ.correctAnswer ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span className="text-emerald-700 dark:text-emerald-400">إجابة صحيحة! أحسنت.</span>
                  </>
                ) : (
                  <>
                    <XCircle className="w-4 h-4 text-rose-600" />
                    <span className="text-rose-700 dark:text-rose-400">إجابة غير صحيحة. ركز في الشرح:</span>
                  </>
                )}
              </div>
              <p className={themeClasses.textSecondary}>{currentQ.explanation}</p>
            </div>
          )}

          {/* Nav Buttons */}
          <div className="flex items-center justify-between pt-4 border-t border-black/[0.04] dark:border-white/[0.04]">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="inline-flex items-center gap-1 px-3 py-2 rounded-xl text-xs font-semibold border border-black/[0.08] dark:border-white/[0.08] disabled:opacity-40 cursor-pointer disabled:cursor-not-allowed"
            >
              <ArrowRight className="w-3.5 h-3.5" />
              <span>السابق</span>
            </button>

            <button
              onClick={handleNext}
              disabled={selectedAnswer === undefined}
              className="inline-flex items-center gap-1 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 disabled:opacity-40 cursor-pointer disabled:cursor-not-allowed transition-all shadow-sm"
            >
              <span>{currentIndex === config.questions.length - 1 ? 'إنهاء وعرض النتيجة' : 'السؤال التالي'}</span>
              <ArrowLeft className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      ) : (
        /* Results View */
        <div className={`p-6 sm:p-10 rounded-2xl border ${themeClasses.border} ${themeClasses.cardBg} shadow-2xs space-y-8 text-center`}>
          <div className="space-y-3 max-w-md mx-auto">
            <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 text-indigo-600 mx-auto flex items-center justify-center">
              <Award className="w-9 h-9" />
            </div>

            <h2 className={`text-xl sm:text-2xl font-black ${themeClasses.textPrimary}`}>
              اكتمل الاختبار بنجاح!
            </h2>

            <p className={`text-xs sm:text-sm ${themeClasses.textSecondary}`}>
              لقد أجبت عن 10 أسئلة في موضوع: {config.title}
            </p>

            {/* Score Ring / Card */}
            <div className="p-4 rounded-xl border border-indigo-500/20 bg-indigo-500/5 space-y-1">
              <div className="text-3xl sm:text-4xl font-black text-indigo-600 dark:text-indigo-400 font-mono">
                {correctCount} / {config.questions.length}
              </div>
              <div className="text-xs font-semibold text-gray-500">
                النسبة المئوية: {percentage}%
              </div>
              <div className="text-xs text-indigo-700 dark:text-indigo-300 font-bold pt-1">
                {percentage >= 80
                  ? ' أداء ممتاز ومستوى استيعاب متقدم جداً!'
                  : percentage >= 50
                  ? ' أداء جيد، ننصحك بمراجعة المقال التعليمي بالأسفل لتعزيز المفاهيم.'
                  : ' بحاجة إلى مزيد من التدريب، اقرأ المقال التعليمي وحاول مجدداً.'}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <button
                onClick={handleReset}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold border border-black/[0.08] dark:border-white/[0.08] hover:bg-black/[0.03] transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>إعادة الاختبار</span>
              </button>

              <button
                onClick={() => setShowCertificate(true)}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 transition-colors cursor-pointer shadow-sm"
              >
                <Award className="w-3.5 h-3.5" />
                <span>عرض شهادة الإنجاز</span>
              </button>
            </div>
          </div>

          {/* Certificate Modal */}
          {showCertificate && (
            <div className="p-6 rounded-2xl border-2 border-dashed border-indigo-500/40 bg-gradient-to-b from-indigo-500/5 to-transparent space-y-4 max-w-lg mx-auto text-center">
              <Award className="w-10 h-10 text-amber-500 mx-auto" />
              <div className="space-y-1">
                <span className="text-xs text-gray-400 font-mono">شهادة إتقان أكاديمية كويزات الرياضيات</span>
                <h3 className="text-lg font-bold text-indigo-700 dark:text-indigo-300">
                  شهادة إتمام: {config.title}
                </h3>
              </div>
              <input
                type="text"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                placeholder="أدخل اسمك الكريم لإضافته إلى الشهادة..."
                className="w-full px-4 py-2 rounded-xl border border-black/[0.1] dark:border-white/[0.1] text-xs text-center focus:outline-hidden focus:border-indigo-500 bg-white/50 dark:bg-black/20"
              />
              <p className="text-xs text-gray-500 leading-relaxed">
                نشهد بأن {studentName || 'الطالب المتميز'} قد أتم بنجاح اختبار <strong>{config.title}</strong> بدرجة ({correctCount}/10) بنسبة {percentage}%.
              </p>
              <div className="text-[10px] text-gray-400 font-mono">
                بوابة كويزات الرياضيات • التفاضل والتكامل
              </div>
            </div>
          )}

          {/* Full Detailed Breakdown of All 10 Questions */}
          <div className="space-y-4 pt-6 border-t border-black/[0.04] dark:border-white/[0.04] text-right">
            <h3 className={`text-base font-bold ${themeClasses.textPrimary}`}>
              مراجعة إجابات المسائل الـ 10 بالتفصيل
            </h3>

            <div className="space-y-3">
              {config.questions.map((q, idx) => {
                const userAns = selectedAnswers[q.id];
                const isCorrect = userAns === q.correctAnswer;
                return (
                  <div
                    key={q.id}
                    className={`p-4 rounded-xl border text-xs sm:text-sm leading-relaxed space-y-2 ${
                      isCorrect
                        ? 'border-emerald-500/30 bg-emerald-500/[0.02]'
                        : 'border-rose-500/30 bg-rose-500/[0.02]'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-bold text-indigo-700 dark:text-indigo-300">
                        السؤال #{idx + 1}
                      </span>
                      {isCorrect ? (
                        <span className="inline-flex items-center gap-1 font-bold text-emerald-600 dark:text-emerald-400 text-xs">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>صحيحة</span>
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 font-bold text-rose-600 dark:text-rose-400 text-xs">
                          <XCircle className="w-3.5 h-3.5" />
                          <span>غير صحيحة</span>
                        </span>
                      )}
                    </div>
                    <p className={`font-semibold ${themeClasses.textPrimary}`}>{q.text}</p>
                    <div className="space-y-1 text-xs">
                      <div className="text-emerald-700 dark:text-emerald-400">
                        <strong>الإجابة الصحيحة:</strong> {q.options[q.correctAnswer]}
                      </div>
                      {!isCorrect && userAns !== undefined && (
                        <div className="text-rose-700 dark:text-rose-400">
                          <strong>إجابتك:</strong> {q.options[userAns]}
                        </div>
                      )}
                      <p className="text-gray-600 dark:text-gray-300 pt-1 border-t border-black/[0.04] dark:border-white/[0.04]">
                        {q.explanation}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Unique Educational Article (>350 words) */}
      <article className={`p-6 sm:p-10 rounded-2xl border ${themeClasses.border} ${themeClasses.cardBg} shadow-2xs space-y-8 leading-relaxed`}>
        <header className="space-y-2 pb-6 border-b border-black/[0.06] dark:border-white/[0.08]">
          <div className="flex items-center gap-2 text-xs font-bold text-indigo-600 dark:text-indigo-400">
            <BookOpen className="w-4 h-4" />
            <span>المقال التعليمي الشامل والمرجعي • {config.title}</span>
          </div>
          <h2 className={`text-xl sm:text-2xl font-extrabold ${themeClasses.textPrimary}`}>
            {config.subtitle}
          </h2>
        </header>

        {/* Section 1: Introduction */}
        <section className="space-y-3">
          <h3 className={`text-base sm:text-lg font-bold flex items-center gap-2 ${themeClasses.textPrimary}`}>
            <Sparkles className="w-4 h-4 text-indigo-500" />
            <span>المقدمة والخلفية النظرية والتاريخية</span>
          </h3>
          <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
            {config.articleContent.introduction}
          </p>
        </section>

        {/* Section 2: Core Concepts */}
        <section className="space-y-4 pt-4 border-t border-black/[0.04] dark:border-white/[0.04]">
          <h3 className={`text-base sm:text-lg font-bold flex items-center gap-2 ${themeClasses.textPrimary}`}>
            <Lightbulb className="w-4 h-4 text-amber-500" />
            <span>المفاهيم والقواعد والقوانين الأساسية</span>
          </h3>
          <div className="space-y-3">
            {config.articleContent.coreConcepts.map((concept, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl border border-black/[0.05] dark:border-white/[0.05] bg-black/[0.01] dark:bg-white/[0.01] space-y-2"
              >
                <h4 className="text-xs sm:text-sm font-bold text-indigo-700 dark:text-indigo-300">
                  {concept.title}
                </h4>
                <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
                  {concept.explanation}
                </p>
                {concept.rule && (
                  <div className="p-2.5 rounded-lg bg-indigo-500/10 font-mono text-xs sm:text-sm text-indigo-800 dark:text-indigo-200 dir-ltr text-left">
                    {concept.rule}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Worked Examples */}
        <section className="space-y-4 pt-4 border-t border-black/[0.04] dark:border-white/[0.04]">
          <h3 className={`text-base sm:text-lg font-bold flex items-center gap-2 ${themeClasses.textPrimary}`}>
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            <span>أمثلة تطبيقية محلولة خطوة بخطوة</span>
          </h3>
          <div className="space-y-4">
            {config.articleContent.workedExamples.map((ex, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl border border-black/[0.06] dark:border-white/[0.06] bg-black/[0.01] dark:bg-white/[0.01] space-y-2"
              >
                <div className="text-xs font-bold text-indigo-600 dark:text-indigo-400">
                  مثال تطبيقي #{idx + 1}
                </div>
                <p className={`text-xs sm:text-sm font-semibold ${themeClasses.textPrimary}`}>
                  {ex.problem}
                </p>
                <div className="p-3 rounded-lg bg-emerald-500/5 border border-emerald-500/20 text-xs sm:text-sm leading-relaxed text-emerald-950 dark:text-emerald-100 whitespace-pre-line">
                  <strong>خطوات الحل:</strong> {ex.solution}
                </div>
                {ex.note && (
                  <p className="text-[11px] text-gray-500 italic pt-1">
                    ملاحظة: {ex.note}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Common Mistakes */}
        <section className="space-y-3 pt-4 border-t border-black/[0.04] dark:border-white/[0.04]">
          <h3 className={`text-base sm:text-lg font-bold flex items-center gap-2 ${themeClasses.textPrimary}`}>
            <XCircle className="w-4 h-4 text-rose-500" />
            <span>أخطاء شائعة وتحذيرات واجب تجنبها</span>
          </h3>
          <ul className="space-y-2 text-xs sm:text-sm text-gray-700 dark:text-gray-300 list-disc list-inside leading-relaxed">
            {config.articleContent.commonMistakes.map((mistake, idx) => (
              <li key={idx} className="marker:text-rose-500">
                {mistake}
              </li>
            ))}
          </ul>
        </section>

        {/* Section 5: Real-World Applications */}
        <section className="space-y-3 pt-4 border-t border-black/[0.04] dark:border-white/[0.04]">
          <h3 className={`text-base sm:text-lg font-bold flex items-center gap-2 ${themeClasses.textPrimary}`}>
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>تطبيقات عملية واقعية</span>
          </h3>
          <ul className="space-y-2 text-xs sm:text-sm text-gray-700 dark:text-gray-300 list-disc list-inside leading-relaxed">
            {config.articleContent.practicalApplications.map((app, idx) => (
              <li key={idx} className="marker:text-amber-500">
                {app}
              </li>
            ))}
          </ul>
        </section>

        {/* Section 6: Summary */}
        <footer className="p-4 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-xs sm:text-sm leading-relaxed text-indigo-950 dark:text-indigo-100 space-y-1">
          <strong className="block font-bold">خلاصة الدرس:</strong>
          <p>{config.articleContent.summary}</p>
        </footer>
      </article>

      {/* Backlink Box for Internal Linking */}
      <DerivativesDifferentiationBacklinkBox currentTestId={config.id} />
    </div>
  );
};
