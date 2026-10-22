import React, { useState } from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { useEyeTheme } from '../context/ThemeContext';
import { QuadraticEquationsBacklinkBox } from '../components/QuadraticEquationsBacklinkBox';
import {
  QUADRATIC_QUIZZES,
  QuadraticQuizType,
} from '../data/quadraticEquationsTestsData';
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

interface QuadraticEquationsQuizViewProps {
  quizType: QuadraticQuizType;
  onGoHome: () => void;
  onGoDomain: () => void;
  onGoQuadraticEquations: () => void;
}

export const QuadraticEquationsQuizView: React.FC<QuadraticEquationsQuizViewProps> = ({
  quizType,
  onGoHome,
  onGoDomain,
  onGoQuadraticEquations,
}) => {
  const { themeClasses } = useEyeTheme();
  const config =
    QUADRATIC_QUIZZES[quizType] ||
    QUADRATIC_QUIZZES['quadratic-standard-form-coefficients'];

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
    setSelectedAnswers({});
    setCurrentIndex(0);
    setIsCompleted(false);
    setShowHint(false);
    setShowCertificate(false);
  };

  const calculateScore = () => {
    let score = 0;
    config.questions.forEach((q) => {
      if (selectedAnswers[q.id] === q.correctIndex) {
        score++;
      }
    });
    return score;
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedUrl(true);
    setTimeout(() => setCopiedUrl(false), 2500);
  };

  const score = calculateScore();
  const percentage = Math.round((score / config.questions.length) * 100);

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fadeIn text-right pb-12">
      {/* Breadcrumbs Navigation */}
      <Breadcrumbs
        items={[
          { label: 'الرئيسية', onClick: onGoHome },
          { label: 'الجبر والدوال', onClick: onGoDomain },
          { label: 'المعادلات التربيعية', onClick: onGoQuadraticEquations },
          { label: config.title },
        ]}
      />

      {/* Quiz Header Banner */}
      <div
        className={`p-6 sm:p-8 rounded-3xl border ${themeClasses.border} ${themeClasses.cardBg} shadow-sm relative overflow-hidden transition-all`}
      >
        <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/5 rounded-full blur-3xl pointer-events-none -mr-12 -mt-12" />

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 relative z-10">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <span className="text-3xl sm:text-4xl p-2 rounded-2xl bg-amber-500/10">
                {config.emoji}
              </span>
              <div>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400">
                  {config.level} • 10 أسئلة متدرجة
                </span>
                <h1 className={`text-xl sm:text-2xl font-black ${themeClasses.textPrimary} mt-1`}>
                  {config.title}
                </h1>
              </div>
            </div>
            <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} max-w-2xl`}>
              {config.shortDesc}
            </p>
          </div>

          <div className="flex items-center gap-2 self-end sm:self-center">
            <button
              onClick={handleShare}
              className={`p-2.5 rounded-xl border ${themeClasses.border} hover:bg-black/5 dark:hover:bg-white/5 transition-colors text-xs font-semibold flex items-center gap-1.5 ${themeClasses.textPrimary}`}
              title="مشاركة رابط الاختبار"
            >
              {copiedUrl ? (
                <>
                  <Check className="w-4 h-4 text-emerald-500" />
                  <span className="text-emerald-500">تم النسخ</span>
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

        {/* Concept Summary Badge */}
        <div className="mt-4 pt-4 border-t border-black/[0.04] dark:border-white/[0.04] flex items-center gap-2 text-xs">
          <Sparkles className="w-4 h-4 text-amber-500 shrink-0" />
          <span className={`font-mono ${themeClasses.textSecondary}`} dir="ltr">
            {config.mathSymbol}
          </span>
          <span className={`mr-2 ${themeClasses.textSecondary}`}>
            {config.conceptSummary}
          </span>
        </div>
      </div>

      {/* Main Interactive Quiz Section */}
      {!isCompleted ? (
        <div
          className={`p-6 sm:p-8 rounded-3xl border ${themeClasses.border} ${themeClasses.cardBg} shadow-sm space-y-6 transition-all`}
        >
          {/* Progress Bar & Indicators */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-semibold text-neutral-500">
              <span>
                السؤال {currentIndex + 1} من {config.questions.length}
              </span>
              <span>
                {Math.round(((currentIndex + 1) / config.questions.length) * 100)}% مكتمل
              </span>
            </div>
            <div className="w-full h-2 rounded-full bg-neutral-200 dark:bg-neutral-800 overflow-hidden">
              <div
                className="h-full bg-amber-500 transition-all duration-300 rounded-full"
                style={{
                  width: `${((currentIndex + 1) / config.questions.length) * 100}%`,
                }}
              />
            </div>
          </div>

          {/* Question Box */}
          <div className="space-y-4 py-2">
            <h2 className={`text-base sm:text-lg font-bold ${themeClasses.textPrimary} leading-relaxed`}>
              {currentQ.text}
            </h2>

            {currentQ.mathFormula && (
              <div
                className="p-3 rounded-xl bg-amber-500/5 border border-amber-500/20 text-center font-mono font-bold text-amber-700 dark:text-amber-300 text-sm sm:text-base"
                dir="ltr"
              >
                {currentQ.mathFormula}
              </div>
            )}
          </div>

          {/* Options Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {currentQ.options.map((opt, idx) => {
              const isSelected = selectedAnswer === idx;
              const isCorrect = idx === currentQ.correctIndex;
              const showResult = selectedAnswer !== undefined;

              let btnStyle = `${themeClasses.border} hover:border-amber-500/40`;
              if (showResult) {
                if (isCorrect) {
                  btnStyle = 'border-emerald-500 bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 font-bold';
                } else if (isSelected) {
                  btnStyle = 'border-rose-500 bg-rose-500/10 text-rose-800 dark:text-rose-300 line-through';
                } else {
                  btnStyle = 'opacity-50 border-neutral-200 dark:border-neutral-800';
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(idx)}
                  disabled={showResult}
                  className={`p-4 rounded-2xl border text-right transition-all flex items-center justify-between text-xs sm:text-sm ${btnStyle}`}
                >
                  <span className="font-semibold">{opt}</span>
                  {showResult && isCorrect && (
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mr-2" />
                  )}
                  {showResult && isSelected && !isCorrect && (
                    <XCircle className="w-4 h-4 text-rose-500 shrink-0 mr-2" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Explanation Banner when answered */}
          {selectedAnswer !== undefined && (
            <div
              className={`p-4 rounded-2xl border animate-fadeIn text-xs sm:text-sm space-y-2 ${
                selectedAnswer === currentQ.correctIndex
                  ? 'border-emerald-500/30 bg-emerald-500/5'
                  : 'border-rose-500/30 bg-rose-500/5'
              }`}
            >
              <div className="flex items-center gap-2 font-bold">
                {selectedAnswer === currentQ.correctIndex ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    <span className="text-emerald-600 dark:text-emerald-400">
                      إجابة صحيحة! أحسنت صنعاً.
                    </span>
                  </>
                ) : (
                  <>
                    <XCircle className="w-4 h-4 text-rose-500" />
                    <span className="text-rose-600 dark:text-rose-400">
                      إجابة غير صحيحة، راجع الحل النموذجي أدناه:
                    </span>
                  </>
                )}
              </div>
              <p className={`text-xs ${themeClasses.textSecondary} leading-relaxed`}>
                {currentQ.explanation}
              </p>
            </div>
          )}

          {/* Hint Section */}
          {currentQ.hint && selectedAnswer === undefined && (
            <div className="pt-2">
              {showHint ? (
                <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-800 dark:text-amber-300 flex items-start gap-2">
                  <Lightbulb className="w-4 h-4 shrink-0 mt-0.5 text-amber-500" />
                  <span>{currentQ.hint}</span>
                </div>
              ) : (
                <button
                  onClick={() => setShowHint(true)}
                  className="text-xs text-amber-600 hover:text-amber-700 dark:text-amber-400 flex items-center gap-1 font-semibold"
                >
                  <Lightbulb className="w-3.5 h-3.5" />
                  <span>هل تحتاج تلميحاً؟ اضغط هنا</span>
                </button>
              )}
            </div>
          )}

          {/* Navigation Controls */}
          <div className="pt-4 border-t border-black/[0.04] dark:border-white/[0.04] flex items-center justify-between">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-1 transition-all ${
                currentIndex === 0
                  ? 'opacity-40 cursor-not-allowed text-neutral-400'
                  : 'hover:bg-black/5 dark:hover:bg-white/5 text-neutral-600 dark:text-neutral-300'
              }`}
            >
              <ArrowRight className="w-4 h-4" />
              <span>السابق</span>
            </button>

            <button
              onClick={handleNext}
              disabled={selectedAnswer === undefined}
              className={`px-6 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 shadow-sm ${
                selectedAnswer === undefined
                  ? 'bg-neutral-200 dark:bg-neutral-800 text-neutral-400 cursor-not-allowed'
                  : 'bg-amber-500 hover:bg-amber-600 text-white hover:shadow'
              }`}
            >
              <span>{currentIndex < config.questions.length - 1 ? 'التالي' : 'عرض النتيجة'}</span>
              <ArrowLeft className="w-4 h-4" />
            </button>
          </div>
        </div>
      ) : (
        /* Results Card */
        <div
          className={`p-6 sm:p-10 rounded-3xl border ${themeClasses.border} ${themeClasses.cardBg} shadow-sm text-center space-y-6 animate-fadeIn`}
        >
          <div className="w-16 h-16 mx-auto rounded-full bg-amber-500/10 flex items-center justify-center text-3xl">
            {percentage >= 80 ? '🏆' : percentage >= 50 ? '👏' : '📚'}
          </div>

          <div className="space-y-2">
            <h2 className={`text-2xl font-black ${themeClasses.textPrimary}`}>
              {percentage >= 80
                ? 'رائع ومتميز! أداء رياضي استثنائي'
                : percentage >= 50
                ? 'أداء جيد جداً! واصل التدريب'
                : 'فرصة رائعة للمراجعة والتعلم'}
            </h2>
            <p className={`text-xs sm:text-sm ${themeClasses.textSecondary}`}>
              لقد أجبت على {score} من أصل {config.questions.length} أسئلة بشكل صحيح ({percentage}%).
            </p>
          </div>

          {/* Certificate Toggle */}
          {percentage >= 60 && (
            <div className="p-4 rounded-2xl bg-amber-500/5 border border-amber-500/20 max-w-md mx-auto space-y-3">
              <div className="flex items-center justify-center gap-2 text-xs font-bold text-amber-600 dark:text-amber-400">
                <Award className="w-4 h-4" />
                <span>شهادة الإتقان والتميز في المعادلات التربيعية</span>
              </div>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="أدخل اسم الطالب / المتدرب"
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  className={`flex-1 px-3 py-2 rounded-xl text-xs border ${themeClasses.border} ${themeClasses.cardBg} text-right focus:outline-hidden focus:border-amber-500`}
                />
                <button
                  onClick={() => setShowCertificate(true)}
                  disabled={!studentName.trim()}
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-amber-500 hover:bg-amber-600 text-white disabled:opacity-50 transition-colors"
                >
                  إصدار الشهادة
                </button>
              </div>
            </div>
          )}

          {/* Printable Certificate View */}
          {showCertificate && (
            <div className="p-6 rounded-3xl border-2 border-amber-500 bg-amber-50/50 dark:bg-amber-950/20 max-w-lg mx-auto space-y-4 text-center">
              <div className="text-4xl">📜</div>
              <div className="space-y-1">
                <div className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-widest">
                  شهادة إتمام معتمدة
                </div>
                <h3 className="text-xl font-black text-neutral-800 dark:text-neutral-100">
                  {studentName}
                </h3>
                <p className="text-xs text-neutral-600 dark:text-neutral-300">
                  قد أتم بنجاح اختبار <strong>«{config.title}»</strong> بنسبة إتقان{' '}
                  <strong>{percentage}%</strong>.
                </p>
              </div>
              <div className="text-[10px] text-neutral-400 font-mono">
                كود الاعتماد: QUAD-{quizType.slice(0, 6).toUpperCase()}-{Math.floor(1000 + Math.random() * 9000)}
              </div>
              <button
                onClick={() => window.print()}
                className="px-4 py-1.5 rounded-lg text-xs font-semibold bg-neutral-800 text-white dark:bg-neutral-100 dark:text-neutral-900"
              >
                طباعة أو حفظ كـ PDF
              </button>
            </div>
          )}

          <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
            <button
              onClick={handleRestart}
              className={`px-5 py-2.5 rounded-xl border ${themeClasses.border} hover:bg-black/5 dark:hover:bg-white/5 transition-colors text-xs font-bold flex items-center gap-2 ${themeClasses.textPrimary}`}
            >
              <RotateCcw className="w-4 h-4" />
              <span>إعادة الاختبار</span>
            </button>
            <button
              onClick={onGoQuadraticEquations}
              className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold transition-colors shadow-sm"
            >
              العودة لقسم المعادلات التربيعية
            </button>
          </div>
        </div>
      )}

      {/* Cross-linking backlink box */}
      <QuadraticEquationsBacklinkBox currentTestId={quizType} />

      {/* Pedagogical Article for this specific quiz */}
      <article
        className={`p-6 sm:p-10 rounded-3xl border ${themeClasses.border} ${themeClasses.cardBg} shadow-sm space-y-6 leading-relaxed`}
      >
        <div className="space-y-2 pb-6 border-b border-black/[0.06] dark:border-white/[0.08]">
          <div className="flex items-center gap-2 text-xs font-bold text-amber-600 dark:text-amber-400">
            <BookOpen className="w-4 h-4" />
            <span>مقالة تربوية وتعليمية متخصصة • وقت القراءة {config.article.readTime}</span>
          </div>
          <h2 className={`text-xl sm:text-2xl font-black ${themeClasses.textPrimary}`}>
            {config.article.title}
          </h2>
          <p className={`text-xs sm:text-sm ${themeClasses.textSecondary}`}>
            {config.article.subtitle}
          </p>
        </div>

        {/* Article Sections */}
        <div className="space-y-6">
          {config.article.sections.map((sec, idx) => (
            <div key={idx} className="space-y-3">
              <h3 className={`text-base sm:text-lg font-bold flex items-center gap-2 ${themeClasses.textPrimary}`}>
                <span className="w-6 h-6 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center text-xs font-mono font-bold">
                  {idx + 1}
                </span>
                <span>{sec.title}</span>
              </h3>
              <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed whitespace-pre-line`}>
                {sec.content}
              </p>

              {sec.keyTakeaways && sec.keyTakeaways.length > 0 && (
                <div className="p-4 rounded-2xl bg-amber-500/5 border border-amber-500/10 space-y-2">
                  <div className="text-xs font-bold text-amber-700 dark:text-amber-300 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>أهم النقاط المفتاحية (Key Takeaways):</span>
                  </div>
                  <ul className="text-xs space-y-1 text-stone-700 dark:text-stone-300 mr-4 list-disc">
                    {sec.keyTakeaways.map((point, pIdx) => (
                      <li key={pIdx}>{point}</li>
                    ))}
                  </ul>
                </div>
              )}

              {sec.practicalTip && (
                <div className="p-3.5 rounded-xl bg-blue-500/5 border border-blue-500/20 text-xs text-blue-800 dark:text-blue-300 flex items-start gap-2">
                  <Lightbulb className="w-4 h-4 shrink-0 text-blue-500 mt-0.5" />
                  <div>
                    <strong className="font-bold">نصيحة عملية: </strong>
                    <span>{sec.practicalTip}</span>
                  </div>
                </div>
              )}

              {sec.commonMistake && (
                <div className="p-3.5 rounded-xl bg-rose-500/5 border border-rose-500/20 text-xs text-rose-800 dark:text-rose-300 flex items-start gap-2">
                  <XCircle className="w-4 h-4 shrink-0 text-rose-500 mt-0.5" />
                  <div>
                    <strong className="font-bold">خطأ شائع يجب تفاديه: </strong>
                    <span>{sec.commonMistake}</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </article>
    </div>
  );
};
