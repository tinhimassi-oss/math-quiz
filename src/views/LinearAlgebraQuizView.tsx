import React, { useState } from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { useEyeTheme } from '../context/ThemeContext';
import {
  LINEAR_ALGEBRA_QUIZZES,
  LinearAlgebraQuizConfig,
  LinearAlgebraQuizType,
  QuestionItem,
} from '../data/linearAlgebraTestsData';
import { LinearAlgebraBacklinkBox } from '../components/LinearAlgebraBacklinkBox';
import {
  HelpCircle,
  Lightbulb,
  CheckCircle2,
  XCircle,
  ArrowRight,
  ArrowLeft,
  RotateCcw,
  BookOpen,
  Award,
  Clock,
  Sparkles,
  Layers,
  Activity,
  Shuffle,
  ShieldCheck,
  ChevronRight,
  Calculator,
} from 'lucide-react';

interface LinearAlgebraQuizViewProps {
  quizType: string;
  onGoHome?: () => void;
  onSelectDomain?: (domainId: string) => void;
  onSelectSubcategory?: (domainId: string, subcategoryId: string) => void;
  onNavigateHome?: () => void;
  onNavigateDomain?: () => void;
  onNavigateSubCategory?: () => void;
}

export const LinearAlgebraQuizView: React.FC<LinearAlgebraQuizViewProps> = ({
  quizType,
  onGoHome,
  onSelectDomain,
  onSelectSubcategory,
  onNavigateHome,
  onNavigateDomain,
  onNavigateSubCategory,
}) => {
  const handleGoHome = () => {
    if (onGoHome) onGoHome();
    else if (onNavigateHome) onNavigateHome();
  };

  const handleGoDomain = () => {
    if (onSelectDomain) onSelectDomain('advanced-math');
    else if (onNavigateDomain) onNavigateDomain();
  };

  const handleGoSubCategory = () => {
    if (onSelectSubcategory) onSelectSubcategory('advanced-math', 'linear-algebra');
    else if (onNavigateSubCategory) onNavigateSubCategory();
  };

  // Find the current quiz configuration
  const quizConfig: LinearAlgebraQuizConfig | undefined =
    LINEAR_ALGEBRA_QUIZZES[quizType as LinearAlgebraQuizType] ||
    LINEAR_ALGEBRA_QUIZZES['vectors-operations'];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [showHint, setShowHint] = useState<Record<number, boolean>>({});
  const [showExplanation, setShowExplanation] = useState<Record<number, boolean>>({});
  const [isFinished, setIsFinished] = useState(false);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [timerActive, setTimerActive] = useState(true);

  // Sound effects generator using Web Audio API
  const playSound = (type: 'correct' | 'wrong' | 'complete') => {
    try {
      const audioCtx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.connect(gain);
      gain.connect(audioCtx.destination);

      if (type === 'correct') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(587.33, audioCtx.currentTime); // D5
        osc.frequency.exponentialRampToValueAtTime(880, audioCtx.currentTime + 0.15); // A5
        gain.gain.setValueAtTime(0.12, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.2);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.2);
      } else if (type === 'wrong') {
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(220, audioCtx.currentTime); // A3
        osc.frequency.linearRampToValueAtTime(146.83, audioCtx.currentTime + 0.2); // D3
        gain.gain.setValueAtTime(0.12, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.25);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.25);
      } else if (type === 'complete') {
        const notes = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6
        notes.forEach((freq, idx) => {
          const noteOsc = audioCtx.createOscillator();
          const noteGain = audioCtx.createGain();
          noteOsc.connect(noteGain);
          noteGain.connect(audioCtx.destination);
          noteOsc.frequency.setValueAtTime(freq, audioCtx.currentTime + idx * 0.1);
          noteGain.gain.setValueAtTime(0.1, audioCtx.currentTime + idx * 0.1);
          noteGain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + idx * 0.1 + 0.2);
          noteOsc.start(audioCtx.currentTime + idx * 0.1);
          noteOsc.stop(audioCtx.currentTime + idx * 0.1 + 0.25);
        });
      }
    } catch {
      // AudioContext not allowed or supported
    }
  };

  // Timer effect
  React.useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (timerActive && !isFinished) {
      interval = setInterval(() => {
        setElapsedSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [timerActive, isFinished]);

  // Reset state when quiz changes
  React.useEffect(() => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setShowHint({});
    setShowExplanation({});
    setIsFinished(false);
    setElapsedSeconds(0);
    setTimerActive(true);
  }, [quizType]);

  const questions: QuestionItem[] = quizConfig?.questions || [];
  const currentQ = questions[currentQuestionIndex];

  const handleSelectAnswer = (option: string) => {
    if (selectedAnswers[currentQuestionIndex] !== undefined) return; // already answered

    const isCorrect = option === currentQ.correctAnswer;
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQuestionIndex]: option,
    }));
    setShowExplanation((prev) => ({
      ...prev,
      [currentQuestionIndex]: true,
    }));

    if (isCorrect) {
      playSound('correct');
    } else {
      playSound('wrong');
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      setIsFinished(true);
      setTimerActive(false);
      playSound('complete');
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setShowHint({});
    setShowExplanation({});
    setIsFinished(false);
    setElapsedSeconds(0);
    setTimerActive(true);
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  // Calculate score
  const correctCount = Object.entries(selectedAnswers).filter(
    ([indexStr, answer]) => questions[parseInt(indexStr, 10)]?.correctAnswer === answer
  ).length;
  const percentage = questions.length > 0 ? Math.round((correctCount / questions.length) * 100) : 0;

  // Grade badge
  const getGradeInfo = (pct: number) => {
    if (pct >= 90) return { title: 'ممتاز عبقري! ', desc: 'أداء استثنائي متفوق ينم عن فهم عميق وشامل لأسس الجبر الخطي والتحليل المتجهي.', color: 'text-emerald-600 dark:text-emerald-400' };
    if (pct >= 75) return { title: 'جيد جداً مرتفع! ', desc: 'استيعاب ممتاز ومتقن لمعظم قواعد ومفاهيم المصفوفات والفضاءات الشعاعية.', color: 'text-teal-600 dark:text-teal-400' };
    if (pct >= 50) return { title: 'مستوى جيد ومقبول! ', desc: 'لديك قاعدة قوية، نوصي بمراجعة المقال العلمي أدناه لترسيخ المفاهيم المتقدمة.', color: 'text-amber-600 dark:text-amber-400' };
    return { title: 'فرصة رائعة للتطوير! تنبيه:', desc: 'الجبر الخطي يحتاج للتمرن والتدريب، تفضل بقراءة المقال المرفق وحاول مرة ثانية.', color: 'text-rose-600 dark:text-rose-400' };
  };

  const grade = getGradeInfo(percentage);

    if (!quizConfig) {
    return (
      <div className="max-w-4xl mx-auto p-6 text-center">
        <h2 className="text-xl font-bold mb-4">الاختبار غير موجود</h2>
        <button
          onClick={handleGoSubCategory}
          className="px-4 py-2 bg-emerald-600 text-white rounded-xl"
        >
          العودة لاختبارات الجبر الخطي
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-8 animate-fadeIn text-right" dir="rtl">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'الرئيسية', onClick: handleGoHome },
          { label: 'الرياضيات المتقدمة', onClick: handleGoDomain },
          { label: 'الجبر الخطي (Linear Algebra)', onClick: handleGoSubCategory },
          { label: quizConfig.title },
        ]}
      />

      {/* Hero Header */}
      <div className="bg-gradient-to-br from-emerald-600 via-teal-700 to-cyan-800 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-3">
              <span className="p-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 text-white">
                <Calculator className="w-8 h-8" />
              </span>
              <div>
                <span className="inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full bg-white/20 text-white mb-1">
                  اختبار تفاعلي تدريبي • 10 أسئلة متدرجة
                </span>
                <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  {quizConfig.title}
                </h1>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleGoSubCategory}
                className="flex items-center gap-1.5 px-4 py-2 bg-white/15 hover:bg-white/25 border border-white/20 rounded-xl text-sm font-bold backdrop-blur-sm transition-all"
              >
                <span>جميع اختبارات الجبر الخطي</span>
                <ChevronRight className="w-4 h-4 rotate-180" />
              </button>
            </div>
          </div>

          <p className="text-white/90 text-sm sm:text-base leading-relaxed max-w-3xl">
            {quizConfig.description}
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-6 pt-4 border-t border-white/15 text-xs sm:text-sm font-medium">
            <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-lg">
              <Activity className="w-4 h-4" /> 10 أسئلة اختيار من متعدد
            </span>
            <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-lg">
              <Clock className="w-4 h-4" /> الوقت المنقضي: {formatTime(elapsedSeconds)}
            </span>
            <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-lg">
              <ShieldCheck className="w-4 h-4" /> توضيح فوري وشرح خطوة بخطوة
            </span>
          </div>
        </div>
      </div>

      {/* Main Interactive Quiz Engine */}
      {!isFinished ? (
        <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
          {/* Progress bar and Q number */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs sm:text-sm font-bold text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 flex items-center justify-center font-extrabold text-xs">
                  {currentQuestionIndex + 1}
                </span>
                السؤال {currentQuestionIndex + 1} من {questions.length}
              </span>
              <span className="text-slate-400 dark:text-slate-500">
                مستوى الصعوبة:{' '}
                <span
                  className={`font-semibold ${
                    currentQ?.difficulty === 'سهل'
                      ? 'text-emerald-600 dark:text-emerald-400'
                      : currentQ?.difficulty === 'متوسط'
                      ? 'text-amber-600 dark:text-amber-400'
                      : 'text-rose-600 dark:text-rose-400'
                  }`}
                >
                  {currentQ?.difficulty}
                </span>
              </span>
            </div>
            <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2.5 overflow-hidden">
              <div
                className="bg-gradient-to-r from-emerald-500 to-teal-500 h-2.5 rounded-full transition-all duration-300"
                style={{
                  width: `${((currentQuestionIndex + 1) / questions.length) * 100}%`,
                }}
              />
            </div>
          </div>

          {/* Question Text */}
          <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-800 p-5 rounded-2xl">
            <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-relaxed">
              {currentQ?.question}
            </h3>
          </div>

          {/* Hint Trigger */}
          <div className="flex items-center justify-between">
            <button
              onClick={() =>
                setShowHint((prev) => ({
                  ...prev,
                  [currentQuestionIndex]: !prev[currentQuestionIndex],
                }))
              }
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 transition-colors"
            >
              <Lightbulb className="w-4 h-4" />
              <span>
                {showHint[currentQuestionIndex] ? 'إخفاء التلميح المساعد' : 'تلميح رياضي مساعد'}
              </span>
            </button>
          </div>

          {showHint[currentQuestionIndex] && (
            <div className="p-4 bg-amber-50 dark:bg-amber-950/30 border border-amber-200/70 dark:border-amber-900/50 rounded-2xl text-xs sm:text-sm text-amber-900 dark:text-amber-200 leading-relaxed animate-fadeIn">
              تنبيه: <span className="font-bold">تلميح:</span> {currentQ?.hint}
            </div>
          )}

          {/* Options Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {currentQ?.options.map((option, idx) => {
              const answered = selectedAnswers[currentQuestionIndex] !== undefined;
              const isSelected = selectedAnswers[currentQuestionIndex] === option;
              const isCorrect = option === currentQ.correctAnswer;

              let btnStyle =
                'bg-white dark:bg-slate-800/80 border-slate-200 dark:border-slate-700 hover:border-emerald-500 dark:hover:border-emerald-400 hover:bg-emerald-50/40 dark:hover:bg-emerald-950/20 text-slate-800 dark:text-slate-200';

              if (answered) {
                if (isSelected && isCorrect) {
                  btnStyle =
                    'bg-emerald-500 text-white border-emerald-600 font-bold shadow-md shadow-emerald-500/20';
                } else if (isSelected && !isCorrect) {
                  btnStyle =
                    'bg-rose-500 text-white border-rose-600 font-bold shadow-md shadow-rose-500/20';
                } else if (!isSelected && isCorrect) {
                  btnStyle =
                    'bg-emerald-100 dark:bg-emerald-950/70 text-emerald-800 dark:text-emerald-200 border-emerald-400 dark:border-emerald-700 font-semibold';
                } else {
                  btnStyle =
                    'opacity-40 bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-600';
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleSelectAnswer(option)}
                  disabled={answered}
                  className={`p-4 rounded-2xl border text-right transition-all flex items-center justify-between text-sm sm:text-base leading-relaxed ${btnStyle}`}
                >
                  <span className="flex-1 font-medium">{option}</span>
                  {answered && isSelected && isCorrect && (
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-white mr-2" />
                  )}
                  {answered && isSelected && !isCorrect && (
                    <XCircle className="w-5 h-5 flex-shrink-0 text-white mr-2" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Explanation Box */}
          {showExplanation[currentQuestionIndex] && (
            <div className="p-4 sm:p-5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200/80 dark:border-emerald-900/60 animate-fadeIn space-y-2">
              <div className="flex items-center gap-2 text-emerald-800 dark:text-emerald-300 font-bold text-sm sm:text-base">
                <CheckCircle2 className="w-5 h-5" />
                <span>الشرح الرياضي النموذجي والتفصيلي:</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-mono whitespace-pre-wrap">
                {currentQ?.explanation}
              </p>
            </div>
          )}

          {/* Action Navigation Buttons */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-200/80 dark:border-slate-800">
            <button
              onClick={handlePrev}
              disabled={currentQuestionIndex === 0}
              className="flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-colors"
            >
              <ArrowRight className="w-4 h-4" />
              السابق
            </button>

            {/* Quick Question Picker */}
            <div className="hidden md:flex items-center gap-1.5">
              {questions.map((_, i) => {
                const ans = selectedAnswers[i];
                const isCorr = ans === questions[i].correctAnswer;
                let dotColor = 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-400';
                if (ans !== undefined) {
                  dotColor = isCorr
                    ? 'bg-emerald-500 text-white'
                    : 'bg-rose-500 text-white';
                }
                if (i === currentQuestionIndex) {
                  dotColor += ' ring-2 ring-emerald-500 ring-offset-2 dark:ring-offset-slate-900 font-bold';
                }

                return (
                  <button
                    key={i}
                    onClick={() => setCurrentQuestionIndex(i)}
                    className={`w-7 h-7 rounded-lg text-xs font-semibold flex items-center justify-center transition-all ${dotColor}`}
                  >
                    {i + 1}
                  </button>
                );
              })}
            </div>

            <button
              onClick={handleNext}
              disabled={selectedAnswers[currentQuestionIndex] === undefined}
              className="flex items-center gap-1.5 px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-40 disabled:pointer-events-none text-white rounded-xl text-sm font-bold shadow-md shadow-emerald-500/20 transition-all"
            >
              <span>{currentQuestionIndex === questions.length - 1 ? 'إنهاء الاختبار' : 'التالي'}</span>
              <ArrowLeft className="w-4 h-4" />
            </button>
          </div>
        </div>
      ) : (
        /* Results View */
        <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-3xl p-6 sm:p-10 shadow-lg text-center space-y-8 animate-fadeIn">
          <div className="inline-flex p-4 bg-emerald-100 dark:bg-emerald-950/60 rounded-3xl text-emerald-600 dark:text-emerald-400 mb-2">
            <Award className="w-16 h-16 animate-bounce" />
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              {grade.title}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              {grade.desc}
            </p>
          </div>

          {/* Score Counter Card */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-xl mx-auto">
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
              <span className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">
                النتيجة النهائية
              </span>
              <span className="text-2xl font-black text-emerald-600 dark:text-emerald-400">
                {correctCount} / {questions.length}
              </span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
              <span className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">
                النسبة المئوية
              </span>
              <span className="text-2xl font-black text-teal-600 dark:text-teal-400">
                {percentage}%
              </span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
              <span className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">
                الوقت المستغرق
              </span>
              <span className="text-2xl font-black text-cyan-600 dark:text-cyan-400">
                {formatTime(elapsedSeconds)}
              </span>
            </div>
          </div>

          {/* Review of questions */}
          <div className="text-right space-y-3 pt-6 border-t border-slate-200 dark:border-slate-800">
            <h4 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Layers className="w-5 h-5 text-emerald-600" />
              <span>مراجعة إجاباتك لكل سؤال:</span>
            </h4>
            <div className="space-y-3">
              {questions.map((q, idx) => {
                const userAns = selectedAnswers[idx];
                const isRight = userAns === q.correctAnswer;
                return (
                  <div
                    key={q.id}
                    className={`p-4 rounded-2xl border text-xs sm:text-sm leading-relaxed ${
                      isRight
                        ? 'bg-emerald-50/50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-900/40 text-emerald-950 dark:text-emerald-200'
                        : 'bg-rose-50/50 dark:bg-rose-950/20 border-rose-200 dark:border-rose-900/40 text-rose-950 dark:text-rose-200'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2 font-bold mb-1">
                      <span>
                        السؤال {idx + 1}: {q.question}
                      </span>
                      {isRight ? (
                        <span className="text-emerald-600 dark:text-emerald-400 font-extrabold flex items-center gap-1">
                          <CheckCircle2 className="w-4 h-4" /> صحيح
                        </span>
                      ) : (
                        <span className="text-rose-600 dark:text-rose-400 font-extrabold flex items-center gap-1">
                          <XCircle className="w-4 h-4" /> خطأ
                        </span>
                      )}
                    </div>
                    {!isRight && (
                      <p className="text-slate-600 dark:text-slate-400 mt-1">
                        إجابتك: <span className="line-through text-rose-600">{userAns || 'لم تتم الإجابة'}</span> •
                        الإجابة الصحيحة:{' '}
                        <span className="font-bold text-emerald-600 dark:text-emerald-400">
                          {q.correctAnswer}
                        </span>
                      </p>
                    )}
                    <p className="text-slate-500 dark:text-slate-400 font-mono text-[11px] sm:text-xs mt-2 pt-2 border-t border-slate-200/50 dark:border-slate-800">
                      {q.explanation}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={handleRestart}
              className="flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold shadow-md shadow-emerald-500/20 transition-all"
            >
              <RotateCcw className="w-4 h-4" />
              إعادة الاختبار
            </button>
            <button
              onClick={handleGoSubCategory}
              className="flex items-center gap-2 px-6 py-3 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-white rounded-xl font-bold transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              الانتقال لاختبار آخر في الجبر الخطي
            </button>
          </div>
        </div>
      )}

      {/* Unique In-Depth Pillar Article (>350 words) */}
      <article className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-3xl p-6 sm:p-10 shadow-sm space-y-6">
        <div className="flex items-center gap-3 pb-4 border-b border-slate-200 dark:border-slate-800">
          <span className="p-2.5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400">
            <BookOpen className="w-6 h-6" />
          </span>
          <div>
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
              دليل أكاديمي وشرح مفاهيمي معمق (أكثر من 350 كلمة)
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
              {quizConfig.article.title}
            </h2>
          </div>
        </div>

        {quizConfig.article.intro && (
          <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed bg-emerald-50/40 dark:bg-emerald-950/20 p-5 rounded-2xl border border-emerald-100 dark:border-emerald-900/30">
            {quizConfig.article.intro}
          </p>
        )}

        <div className="prose prose-slate dark:prose-invert max-w-none space-y-6">
          {quizConfig.article.sections.map((section, idx) => (
            <section
              key={idx}
              className="p-5 rounded-2xl bg-slate-50/70 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800/80 space-y-3"
            >
              <h3 className="text-base sm:text-lg font-bold text-emerald-700 dark:text-emerald-400 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                {section.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
                {section.content}
              </p>
            </section>
          ))}
        </div>

        {quizConfig.article.summary && (
          <div className="p-5 rounded-2xl bg-teal-50/50 dark:bg-teal-950/20 border border-teal-200/70 dark:border-teal-900/40">
            <h4 className="font-bold text-teal-800 dark:text-teal-300 text-sm mb-2">خلاصة الدرس والأفكار المفتاحية:</h4>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
              {quizConfig.article.summary}
            </p>
          </div>
        )}
      </article>

      {/* Cross-Link Backlinks Component */}
      <LinearAlgebraBacklinkBox currentQuizId={quizType} />
    </div>
  );
};
