import React, { useState } from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { useEyeTheme } from '../context/ThemeContext';
import { SequencesBacklinkBox } from '../components/SequencesBacklinkBox';
import {
  SEQUENCES_QUIZZES,
  SequencesQuizType,
} from '../data/sequencesTestsData';
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

interface SequencesQuizViewProps {
  quizType: SequencesQuizType;
  onGoHome: () => void;
  onGoDomain: () => void;
  onGoSequences: () => void;
}

export const SequencesQuizView: React.FC<SequencesQuizViewProps> = ({
  quizType,
  onGoHome,
  onGoDomain,
  onGoSequences,
}) => {
  const { themeClasses } = useEyeTheme();
  const config =
    SEQUENCES_QUIZZES[quizType] ||
    SEQUENCES_QUIZZES['sequence-patterns-next-terms'];

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
          { label: 'المتتاليات والمتسلسلات', onClick: onGoSequences },
          { label: config.title },
        ]}
      />

      {/* Quiz Header Banner */}
      <div
        className={`p-6 sm:p-8 rounded-3xl border ${themeClasses.border} ${themeClasses.cardBg} shadow-sm relative overflow-hidden transition-all`}
      >
        <div className="absolute top-0 right-0 w-48 h-48 bg-teal-500/5 rounded-full blur-3xl pointer-events-none -mr-12 -mt-12" />

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 relative z-10">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <span className="text-3xl sm:text-4xl p-2 rounded-2xl bg-teal-500/10">
                {config.emoji}
              </span>
              <div>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400">
                  {config.level} • 10 أسئلة متدرجة
                </span>
                <h1 className={`text-xl sm:text-2xl font-black ${themeClasses.textPrimary} mt-1`}>
                  {config.title}
                </h1>
              </div>
            </div>
            <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} max-w-2xl leading-relaxed`}>
              {config.shortDesc}
            </p>
          </div>

          <button
            onClick={handleShare}
            className={`px-3 py-2 rounded-xl border ${themeClasses.border} text-xs font-bold flex items-center gap-2 hover:bg-black/5 dark:hover:bg-white/5 transition-all text-neutral-600 dark:text-neutral-300 shrink-0`}
            title="مشاركة رابط الاختبار"
          >
            {copiedUrl ? (
              <>
                <Check className="w-4 h-4 text-emerald-500" />
                <span className="text-emerald-500">تم النسخ!</span>
              </>
            ) : (
              <>
                <Share2 className="w-4 h-4" />
                <span>مشاركة</span>
              </>
            )}
          </button>
        </div>

        {/* Concept Summary Badge */}
        <div className="mt-4 pt-4 border-t border-black/[0.04] dark:border-white/[0.04] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400">
            <Sparkles className="w-3.5 h-3.5 text-teal-500" />
            <span>{config.conceptSummary}</span>
          </div>
          <div className="text-xs font-mono font-bold text-teal-600 dark:text-teal-400 bg-teal-500/10 px-2.5 py-1 rounded-lg" dir="ltr">
            {config.mathSymbol}
          </div>
        </div>
      </div>

      {/* Interactive Quiz Area */}
      {!isCompleted ? (
        <div
          className={`p-6 sm:p-8 rounded-3xl border ${themeClasses.border} ${themeClasses.cardBg} shadow-sm space-y-6 transition-all`}
        >
          {/* Progress Header */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-bold text-neutral-500 dark:text-neutral-400">
              <span>السؤال {currentIndex + 1} من {config.questions.length}</span>
              <span>
                تمت الإجابة: {Object.keys(selectedAnswers).length} / {config.questions.length}
              </span>
            </div>
            {/* Progress Bar */}
            <div className="w-full h-2 rounded-full bg-black/5 dark:bg-white/5 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-teal-500 to-emerald-600 transition-all duration-300 rounded-full"
                style={{
                  width: `${((currentIndex + 1) / config.questions.length) * 100}%`,
                }}
              />
            </div>
          </div>

          {/* Question Text */}
          <div className="space-y-3 pt-2">
            <h2 className={`text-base sm:text-lg font-bold leading-relaxed ${themeClasses.textPrimary}`}>
              {currentQ.text}
            </h2>
            {currentQ.mathFormula && (
              <div
                className="p-3 rounded-2xl bg-teal-500/5 border border-teal-500/20 text-center font-mono text-sm sm:text-base font-bold text-teal-700 dark:text-teal-300"
                dir="ltr"
              >
                {currentQ.mathFormula}
              </div>
            )}
          </div>

          {/* Answer Options */}
          <div className="grid grid-cols-1 gap-3 pt-2">
            {currentQ.options.map((option, idx) => {
              const isSelected = selectedAnswer === idx;
              const isCorrect = idx === currentQ.correctIndex;
              const hasAnswered = selectedAnswer !== undefined;

              let btnClass = `p-4 rounded-2xl border text-right transition-all duration-200 flex items-center justify-between font-medium text-xs sm:text-sm `;

              if (!hasAnswered) {
                btnClass += `${themeClasses.cardBg} ${themeClasses.border} hover:border-teal-500/50 hover:bg-teal-500/5 ${themeClasses.textPrimary}`;
              } else if (isCorrect) {
                btnClass += `bg-emerald-500/10 border-emerald-500 text-emerald-800 dark:text-emerald-200 font-bold`;
              } else if (isSelected && !isCorrect) {
                btnClass += `bg-rose-500/10 border-rose-500 text-rose-800 dark:text-rose-200`;
              } else {
                btnClass += `${themeClasses.cardBg} ${themeClasses.border} opacity-40 ${themeClasses.textPrimary}`;
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(idx)}
                  disabled={hasAnswered}
                  className={btnClass}
                >
                  <span className="flex-1 text-right">{option}</span>
                  <span className="mr-3 shrink-0">
                    {hasAnswered && isCorrect && (
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 animate-scaleIn" />
                    )}
                    {hasAnswered && isSelected && !isCorrect && (
                      <XCircle className="w-5 h-5 text-rose-500 animate-scaleIn" />
                    )}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Hint Area */}
          {currentQ.hint && (
            <div className="pt-2">
              {!showHint ? (
                <button
                  onClick={() => setShowHint(true)}
                  className="text-xs text-neutral-400 hover:text-teal-500 flex items-center gap-1.5 transition-colors font-medium"
                >
                  <Lightbulb className="w-3.5 h-3.5" />
                  <span>هل تحتاج إلى تلميح للمساعدة؟</span>
                </button>
              ) : (
                <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-800 dark:text-amber-200 flex items-start gap-2">
                  <Lightbulb className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <span>{currentQ.hint}</span>
                </div>
              )}
            </div>
          )}

          {/* Explanation Box when Answered */}
          {selectedAnswer !== undefined && (
            <div
              className={`p-4 rounded-2xl border text-xs sm:text-sm leading-relaxed space-y-2 animate-fadeIn ${
                selectedAnswer === currentQ.correctIndex
                  ? 'bg-emerald-500/5 border-emerald-500/20 text-emerald-900 dark:text-emerald-100'
                  : 'bg-rose-500/5 border-rose-500/20 text-rose-900 dark:text-rose-100'
              }`}
            >
              <div className="flex items-center gap-2 font-bold">
                {selectedAnswer === currentQ.correctIndex ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    <span className="text-emerald-600 dark:text-emerald-400">إجابة نموذجية صحيحة! أحسنت</span>
                  </>
                ) : (
                  <>
                    <XCircle className="w-4 h-4 text-rose-500" />
                    <span className="text-rose-600 dark:text-rose-400">إجابة تحتاج إلى مراجعة وتدقيق</span>
                  </>
                )}
              </div>
              <p>{currentQ.explanation}</p>
            </div>
          )}

          {/* Bottom Actions Navigation */}
          <div className="flex items-center justify-between pt-4 border-t border-black/[0.04] dark:border-white/[0.04]">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${
                currentIndex === 0
                  ? 'opacity-30 cursor-not-allowed text-neutral-400'
                  : 'hover:bg-black/5 dark:hover:bg-white/5 text-neutral-700 dark:text-neutral-200'
              }`}
            >
              <ArrowRight className="w-4 h-4" />
              <span>السابق</span>
            </button>

            <button
              onClick={handleNext}
              disabled={selectedAnswer === undefined}
              className={`px-6 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 transition-all shadow-sm ${
                selectedAnswer === undefined
                  ? 'bg-neutral-300 dark:bg-neutral-800 text-neutral-500 cursor-not-allowed'
                  : 'bg-teal-600 hover:bg-teal-700 text-white'
              }`}
            >
              <span>{currentIndex === config.questions.length - 1 ? 'عرض النتيجة النهائية' : 'السؤال التالي'}</span>
              <ArrowLeft className="w-4 h-4" />
            </button>
          </div>
        </div>
      ) : (
        /* Quiz Completion / Results View */
        <div
          className={`p-6 sm:p-10 rounded-3xl border ${themeClasses.border} ${themeClasses.cardBg} shadow-sm text-center space-y-6 animate-fadeIn`}
        >
          <div className="w-20 h-20 rounded-full bg-teal-500/10 text-teal-600 mx-auto flex items-center justify-center text-4xl">
            {percentage >= 80 ? '🏆' : percentage >= 50 ? '👏' : '💪'}
          </div>

          <div className="space-y-2">
            <h2 className={`text-2xl sm:text-3xl font-black ${themeClasses.textPrimary}`}>
              {percentage >= 80
                ? 'أداء استثنائي ومتقن للغاية!'
                : percentage >= 50
                ? 'محاولة رائعة وأداء جيد جداً'
                : 'محاولة طيبة، وفرصة ممتازة للمراجعة والتحسن'}
            </h2>
            <p className={`text-xs sm:text-sm ${themeClasses.textSecondary}`}>
              لقد أجبت على {score} من أصل {config.questions.length} أسئلة بشكل صحيح.
            </p>
          </div>

          {/* Percentage Indicator */}
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-teal-500/10 border border-teal-500/20 text-teal-600 dark:text-teal-400 font-black text-2xl font-mono" dir="ltr">
            <span>{percentage}%</span>
            <Award className="w-6 h-6" />
          </div>

          {/* Certificate Generation Form */}
          {!showCertificate ? (
            <div className="p-4 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.04] dark:border-white/[0.04] max-w-md mx-auto space-y-3">
              <div className="text-xs font-bold text-neutral-600 dark:text-neutral-300">
                احصل على شهادة إتمام إلكترونية فورية باسمك:
              </div>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="أدخل اسمك الكريم هنا..."
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  className={`flex-1 px-3 py-2 rounded-xl text-xs border ${themeClasses.border} ${themeClasses.cardBg} ${themeClasses.textPrimary} focus:outline-none focus:border-teal-500 text-right`}
                />
                <button
                  onClick={() => studentName.trim() && setShowCertificate(true)}
                  disabled={!studentName.trim()}
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-teal-600 hover:bg-teal-700 text-white disabled:opacity-50 transition-colors"
                >
                  إصدار الشهادة
                </button>
              </div>
            </div>
          ) : (
            /* Printable Certificate View */
            <div className="p-6 rounded-3xl border-2 border-teal-500 bg-teal-50/50 dark:bg-teal-950/20 max-w-lg mx-auto space-y-4 text-center">
              <div className="text-4xl">📜</div>
              <div className="space-y-1">
                <div className="text-xs font-bold text-teal-600 dark:text-teal-400 uppercase tracking-widest">
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
                كود الاعتماد: SEQ-{quizType.slice(0, 6).toUpperCase()}-{Math.floor(1000 + Math.random() * 9000)}
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
              onClick={onGoSequences}
              className="px-5 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold transition-colors shadow-sm"
            >
              العودة لقسم المتتاليات والمتسلسلات
            </button>
          </div>
        </div>
      )}

      {/* Cross-linking backlink box */}
      <SequencesBacklinkBox currentTestId={quizType} />

      {/* Pedagogical Article for this specific quiz */}
      <article
        className={`p-6 sm:p-10 rounded-3xl border ${themeClasses.border} ${themeClasses.cardBg} shadow-sm space-y-6 leading-relaxed`}
      >
        <div className="space-y-2 pb-6 border-b border-black/[0.06] dark:border-white/[0.08]">
          <div className="flex items-center gap-2 text-xs font-bold text-teal-600 dark:text-teal-400">
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
                <span className="w-6 h-6 rounded-lg bg-teal-500/10 text-teal-600 dark:text-teal-400 flex items-center justify-center text-xs font-mono font-bold">
                  {idx + 1}
                </span>
                <span>{sec.title}</span>
              </h3>

              <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
                {sec.content}
              </p>

              {sec.keyTakeaways && sec.keyTakeaways.length > 0 && (
                <div className="p-4 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.04] dark:border-white/[0.04] space-y-2">
                  <div className="text-xs font-bold text-teal-600 dark:text-teal-400 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>خلاصة تربوية ومفاهيم جوهرية:</span>
                  </div>
                  <ul className="space-y-1.5">
                    {sec.keyTakeaways.map((point, pIdx) => (
                      <li
                        key={pIdx}
                        className={`text-xs ${themeClasses.textSecondary} flex items-start gap-2`}
                      >
                        <span className="text-teal-500 font-bold">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {sec.practicalTip && (
                <div className="p-3.5 rounded-2xl bg-teal-500/5 border border-teal-500/20 text-xs flex items-start gap-2.5 text-teal-800 dark:text-teal-200">
                  <Lightbulb className="w-4 h-4 text-teal-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold ml-1">نصيحة ذهبية للحل السريع:</span>
                    <span>{sec.practicalTip}</span>
                  </div>
                </div>
              )}

              {sec.commonMistake && (
                <div className="p-3.5 rounded-2xl bg-rose-500/5 border border-rose-500/20 text-xs flex items-start gap-2.5 text-rose-800 dark:text-rose-200">
                  <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold ml-1">خطأ شائع يجب الحذر منه:</span>
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
