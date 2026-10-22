import React, { useState } from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { useEyeTheme } from '../context/ThemeContext';
import { ComplexNumbersBacklinkBox } from '../components/ComplexNumbersBacklinkBox';
import {
  COMPLEX_NUMBERS_QUIZZES,
  ComplexNumbersQuizType,
} from '../data/complexNumbersTestsData';
import {
  CheckCircle2,
  XCircle,
  HelpCircle,
  RotateCcw,
  BookOpen,
  Award,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Sparkles,
  Volume2,
  VolumeX,
} from 'lucide-react';

interface ComplexNumbersQuizViewProps {
  quizType: ComplexNumbersQuizType;
  onGoHome: () => void;
  onSelectDomain: (domainId: string) => void;
  onSelectSubcategory: (domainId: string, subcategoryId: string) => void;
}

export const ComplexNumbersQuizView: React.FC<ComplexNumbersQuizViewProps> = ({
  quizType,
  onGoHome,
  onSelectDomain,
  onSelectSubcategory,
}) => {
  const { themeClasses, isDark } = useEyeTheme();
  const quizConfig = COMPLEX_NUMBERS_QUIZZES[quizType];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [revealedHints, setRevealedHints] = useState<Record<number, boolean>>({});
  const [isCompleted, setIsCompleted] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [showCertificate, setShowCertificate] = useState(false);
  const [studentName, setStudentName] = useState('');

  if (!quizConfig) {
    return (
      <div className="p-8 text-center">
        <p className="text-red-500 font-bold mb-4">
          عذراً، لم يتم العثور على الاختبار المطلوب في قسم الأعداد المركبة.
        </p>
        <button
          onClick={() => onSelectSubcategory('advanced-math', 'complex-numbers')}
          className="px-4 py-2 bg-cyan-600 text-white rounded-lg"
        >
          العودة لاختبارات الأعداد المركبة
        </button>
      </div>
    );
  }

  const questions = quizConfig.questions;
  const currentQuestion = questions[currentQuestionIndex];
  const totalQuestions = questions.length;
  const answeredCount = Object.keys(selectedAnswers).length;

  // Sound generator using Web Audio API
  const playSound = (type: 'correct' | 'wrong' | 'complete') => {
    if (!soundEnabled || typeof window === 'undefined') return;
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);

      if (type === 'correct') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(587.33, ctx.currentTime); // D5
        osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.15); // A5
        gain.gain.setValueAtTime(0.15, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.25);
        osc.start();
        osc.stop(ctx.currentTime + 0.25);
      } else if (type === 'wrong') {
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(260, ctx.currentTime);
        osc.frequency.setValueAtTime(220, ctx.currentTime + 0.1);
        gain.gain.setValueAtTime(0.18, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3);
        osc.start();
        osc.stop(ctx.currentTime + 0.3);
      } else if (type === 'complete') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(523.25, ctx.currentTime); // C5
        osc.frequency.setValueAtTime(659.25, ctx.currentTime + 0.1); // E5
        osc.frequency.setValueAtTime(783.99, ctx.currentTime + 0.2); // G5
        osc.frequency.setValueAtTime(1046.5, ctx.currentTime + 0.3); // C6
        gain.gain.setValueAtTime(0.2, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.6);
        osc.start();
        osc.stop(ctx.currentTime + 0.6);
      }
    } catch {
      // AudioContext unavailable or blocked by browser policy
    }
  };

  const handleSelectOption = (option: string) => {
    if (selectedAnswers[currentQuestion.id]) return; // Answer locked once chosen

    const isCorrect = option === currentQuestion.correctAnswer;
    const newAnswers = { ...selectedAnswers, [currentQuestion.id]: option };
    setSelectedAnswers(newAnswers);

    if (isCorrect) {
      playSound('correct');
    } else {
      playSound('wrong');
    }

    // Check if finished
    if (Object.keys(newAnswers).length === totalQuestions) {
      setTimeout(() => {
        setIsCompleted(true);
        playSound('complete');
      }, 700);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else if (answeredCount === totalQuestions) {
      setIsCompleted(true);
      playSound('complete');
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setRevealedHints({});
    setCurrentQuestionIndex(0);
    setIsCompleted(false);
    setShowCertificate(false);
  };

  // Calculate score
  const correctCount = questions.reduce((acc, q) => {
    return selectedAnswers[q.id] === q.correctAnswer ? acc + 1 : acc;
  }, 0);

  const percentage = Math.round((correctCount / totalQuestions) * 100);

  return (
    <div className="space-y-6 pb-16 text-right">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'الرئيسية', onClick: onGoHome },
          { label: 'الرياضيات المتقدمة والجامعية', onClick: () => onSelectDomain('advanced-math') },
          {
            label: 'الأعداد المركبة',
            onClick: () => onSelectSubcategory('advanced-math', 'complex-numbers'),
          },
          { label: quizConfig.title },
        ]}
      />

      {/* Header Card */}
      <div
        className={`rounded-2xl border p-6 sm:p-8 transition-all ${
          isDark
            ? 'bg-[#121c24]/90 border-cyan-500/20 shadow-[0_8px_30px_rgb(0,0,0,0.35)]'
            : 'bg-gradient-to-br from-cyan-50/80 via-sky-50/50 to-blue-50/60 border-cyan-200/80 shadow-sm'
        }`}
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-500/20">
              <span className="text-base">{quizConfig.emoji}</span>
              <span>{quizConfig.badge}</span>
              <span className="font-mono bg-cyan-500/10 px-2 py-0.5 rounded text-[11px]">
                {quizConfig.mathSymbol}
              </span>
            </div>
            <h1 className="text-xl sm:text-2xl font-extrabold text-gray-900 dark:text-white">
              {quizConfig.title}
            </h1>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 max-w-3xl leading-relaxed">
              {quizConfig.description}
            </p>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-center">
            <button
              onClick={() => setSoundEnabled(!soundEnabled)}
              className="p-2.5 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300 transition-colors"
              title={soundEnabled ? 'كتم المؤثرات الصوتية' : 'تفعيل المؤثرات الصوتية'}
              aria-label="Toggle Sound"
            >
              {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4 text-red-500" />}
            </button>
            <button
              onClick={handleReset}
              className="p-2.5 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300 transition-colors flex items-center gap-1.5 text-xs font-medium"
              title="إعادة بدء الاختبار"
            >
              <RotateCcw className="w-4 h-4" />
              <span className="hidden sm:inline">إعادة البدء</span>
            </button>
          </div>
        </div>

        {/* Progress Bar & Question Pills */}
        <div className="mt-6 pt-5 border-t border-black/5 dark:border-white/5 space-y-3">
          <div className="flex items-center justify-between text-xs font-medium text-gray-700 dark:text-gray-300">
            <span>
              السؤال {currentQuestionIndex + 1} من {totalQuestions}
            </span>
            <span>
              تمت الإجابة: {answeredCount} / {totalQuestions} (
              {Math.round((answeredCount / totalQuestions) * 100)}%)
            </span>
          </div>

          <div className="w-full h-2 rounded-full bg-gray-200 dark:bg-gray-800 overflow-hidden">
            <div
              className="h-full bg-gradient-to-l from-cyan-500 to-sky-400 transition-all duration-300"
              style={{ width: `${(answeredCount / totalQuestions) * 100}%` }}
            />
          </div>

          {/* Quick Navigator Pills */}
          <div className="flex items-center justify-center gap-1.5 sm:gap-2 pt-2 flex-wrap">
            {questions.map((q, idx) => {
              const isAnswered = selectedAnswers[q.id] !== undefined;
              const isCorrect = selectedAnswers[q.id] === q.correctAnswer;
              const isCurrent = idx === currentQuestionIndex;

              return (
                <button
                  key={q.id}
                  onClick={() => setCurrentQuestionIndex(idx)}
                  className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg text-xs font-bold transition-all flex items-center justify-center ${
                    isCurrent
                      ? 'ring-2 ring-cyan-500 ring-offset-2 dark:ring-offset-gray-900 scale-105'
                      : ''
                  } ${
                    isAnswered
                      ? isCorrect
                        ? 'bg-emerald-500 text-white'
                        : 'bg-rose-500 text-white'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  {idx + 1}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Interactive Stage */}
      {!isCompleted ? (
        <div
          className={`rounded-2xl border ${themeClasses.border} ${themeClasses.cardBg} p-6 sm:p-8 shadow-sm transition-all space-y-6`}
        >
          {/* Question Header */}
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-1">
              <span className="text-[11px] font-semibold text-cyan-600 dark:text-cyan-400 bg-cyan-500/10 px-2.5 py-0.5 rounded-full inline-block">
                مستوى الصعوبة: {currentQuestion.difficulty}
              </span>
              <h2 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white leading-relaxed pt-1">
                {currentQuestion.question}
              </h2>
            </div>

            <button
              onClick={() =>
                setRevealedHints((prev) => ({
                  ...prev,
                  [currentQuestion.id]: !prev[currentQuestion.id],
                }))
              }
              className={`p-2 rounded-xl text-xs font-semibold flex items-center gap-1 transition-colors shrink-0 ${
                revealedHints[currentQuestion.id]
                  ? 'bg-amber-500/20 text-amber-700 dark:text-amber-300 border border-amber-500/30'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
              title="إظهار تلميح توجيهي"
            >
              <HelpCircle className="w-4 h-4 text-amber-500" />
              <span className="hidden sm:inline">تلميح</span>
            </button>
          </div>

          {/* Hint Box (if revealed) */}
          {revealedHints[currentQuestion.id] && (
            <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-900 dark:text-amber-200 text-xs leading-relaxed flex items-start gap-2 animate-fadeIn">
              <HelpCircle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold">تلميح مساعد: </span>
                {currentQuestion.hint}
              </div>
            </div>
          )}

          {/* Options Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {currentQuestion.options.map((option, optIdx) => {
              const selected = selectedAnswers[currentQuestion.id];
              const isSelected = selected === option;
              const isCorrectOpt = option === currentQuestion.correctAnswer;
              const isLocked = selected !== undefined;

              let btnStyle =
                'bg-black/[0.02] dark:bg-white/[0.02] border-gray-200 dark:border-gray-700 hover:border-cyan-500/60 hover:bg-cyan-50/20';

              if (isLocked) {
                if (isCorrectOpt) {
                  btnStyle = 'bg-emerald-500/15 border-emerald-500 text-emerald-800 dark:text-emerald-200 font-bold';
                } else if (isSelected) {
                  btnStyle = 'bg-rose-500/15 border-rose-500 text-rose-800 dark:text-rose-200 font-bold';
                } else {
                  btnStyle = 'opacity-40 border-gray-200 dark:border-gray-800';
                }
              }

              return (
                <button
                  key={optIdx}
                  disabled={isLocked}
                  onClick={() => handleSelectOption(option)}
                  className={`p-4 rounded-xl border text-right transition-all flex items-center justify-between text-xs sm:text-sm ${btnStyle}`}
                >
                  <span className="font-medium">{option}</span>
                  {isLocked && isCorrectOpt && (
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mr-2" />
                  )}
                  {isLocked && isSelected && !isCorrectOpt && (
                    <XCircle className="w-4 h-4 text-rose-600 dark:text-rose-400 shrink-0 mr-2" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Explanation Box (Revealed after answering) */}
          {selectedAnswers[currentQuestion.id] !== undefined && (
            <div
              className={`p-4 rounded-xl text-xs sm:text-sm leading-relaxed space-y-2 border animate-fadeIn ${
                selectedAnswers[currentQuestion.id] === currentQuestion.correctAnswer
                  ? 'bg-emerald-500/[0.08] border-emerald-500/30 text-emerald-950 dark:text-emerald-200'
                  : 'bg-rose-500/[0.08] border-rose-500/30 text-rose-950 dark:text-rose-200'
              }`}
            >
              <div className="flex items-center gap-2 font-bold">
                {selectedAnswers[currentQuestion.id] === currentQuestion.correctAnswer ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span>إجابة صحيحة! أحسنت صنعاً.</span>
                  </>
                ) : (
                  <>
                    <XCircle className="w-4 h-4 text-rose-600 dark:text-rose-400" />
                    <span>إجابة خاطئة. الإجابة الصحيحة هي: {currentQuestion.correctAnswer}</span>
                  </>
                )}
              </div>
              <p className="text-xs text-gray-700 dark:text-gray-300">
                <span className="font-bold text-gray-900 dark:text-white">خطوات الحل والتوضيح الرياضي: </span>
                {currentQuestion.explanation}
              </p>
            </div>
          )}

          {/* Navigation Controls */}
          <div className="flex items-center justify-between pt-4 border-t border-black/5 dark:border-white/5">
            <button
              onClick={handlePrev}
              disabled={currentQuestionIndex === 0}
              className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                currentQuestionIndex === 0
                  ? 'opacity-40 cursor-not-allowed text-gray-400'
                  : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200'
              }`}
            >
              <ChevronRight className="w-4 h-4" />
              <span>السؤال السابق</span>
            </button>

            {currentQuestionIndex < totalQuestions - 1 ? (
              <button
                onClick={handleNext}
                className="px-5 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-700 text-white text-xs font-bold transition-all shadow-sm flex items-center gap-1.5"
              >
                <span>السؤال التالي</span>
                <ChevronLeft className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={() => {
                  setIsCompleted(true);
                  playSound('complete');
                }}
                disabled={answeredCount < totalQuestions}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all shadow-sm flex items-center gap-1.5 ${
                  answeredCount === totalQuestions
                    ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                    : 'bg-gray-200 dark:bg-gray-800 text-gray-400 cursor-not-allowed'
                }`}
              >
                <Award className="w-4 h-4" />
                <span>عرض النتيجة النهائية</span>
              </button>
            )}
          </div>
        </div>
      ) : (
        /* Results & Certificate Screen */
        <div
          className={`rounded-2xl border ${themeClasses.border} ${themeClasses.cardBg} p-6 sm:p-10 shadow-sm transition-all text-center space-y-6 animate-fadeIn`}
        >
          <div className="w-16 h-16 mx-auto rounded-full bg-cyan-500/10 dark:bg-cyan-500/20 flex items-center justify-center text-cyan-600 dark:text-cyan-400">
            <Sparkles className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl font-black text-gray-900 dark:text-white">
              تهانينا! اكتمل اختبار {quizConfig.title}
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
              لقد أتممت الإجابة على جميع الأسئلة العشرة بدقة. إليك تقرير الأداء المفصل:
            </p>
          </div>

          {/* Score Badge */}
          <div className="inline-flex flex-col items-center p-6 rounded-2xl bg-cyan-500/[0.06] border border-cyan-500/20 min-w-[220px]">
            <span className="text-4xl sm:text-5xl font-black text-cyan-600 dark:text-cyan-400">
              {percentage}%
            </span>
            <span className="text-xs font-semibold text-gray-600 dark:text-gray-400 mt-1">
              {correctCount} إجابات صحيحة من أصل {totalQuestions}
            </span>
            <span className="mt-3 px-3 py-1 rounded-full text-xs font-bold bg-cyan-500/20 text-cyan-800 dark:text-cyan-200">
              {percentage >= 90
                ? 'درجة امتياز متقدم '
                : percentage >= 70
                ? 'مستوى جيد جداً ومتقن '
                : percentage >= 50
                ? 'اجتياز مقبول ويُنصح بالمراجعة '
                : 'يحتاج لمزيد من التدريب ومراجعة المقالة'}
            </span>
          </div>

          {/* Certificate Toggle */}
          <div className="pt-2">
            {!showCertificate ? (
              <div className="space-y-3 max-w-sm mx-auto">
                <input
                  type="text"
                  placeholder="أدخل اسمك الكريم لإصدار شهادة الإتقان..."
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  className="w-full text-center px-4 py-2.5 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-xs sm:text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
                <button
                  onClick={() => setShowCertificate(true)}
                  disabled={!studentName.trim()}
                  className={`w-full py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all ${
                    studentName.trim()
                      ? 'bg-cyan-600 hover:bg-cyan-700 text-white shadow-sm'
                      : 'bg-gray-200 dark:bg-gray-800 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  <Award className="w-4 h-4" />
                  <span>إصدار شهادة الإنجاز الرقمية</span>
                </button>
              </div>
            ) : (
              <div className="p-6 sm:p-8 rounded-2xl border-4 border-double border-cyan-500/40 bg-gradient-to-br from-cyan-50/50 via-white to-sky-50/40 dark:from-[#0d161d] dark:via-[#131f28] dark:to-[#0f1b22] text-center space-y-4 max-w-xl mx-auto shadow-md">
                <div className="text-3xl"> </div>
                <div className="text-xs font-bold text-cyan-600 dark:text-cyan-400 tracking-wider">
                  منصة الرياضيات التفاعلية · شهادة إتقان في الأعداد المركبة
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-gray-900 dark:text-white">
                  شهادة إنجاز واجتياز أكاديمي
                </h3>
                <p className="text-xs text-gray-600 dark:text-gray-300">
                  تشهد المنصة بأن الطالب / الباحث:
                </p>
                <div className="text-lg font-black text-cyan-700 dark:text-cyan-300 border-b-2 border-cyan-500/30 pb-2 inline-block px-8">
                  {studentName}
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                  قد اجتاز بنجاح الاختبار التفاعلي التخصصي في:
                  <br />
                  <strong className="text-gray-900 dark:text-white font-bold">{quizConfig.title}</strong>
                  <br />
                  بمعدل تحصيلي دقيق قدره: <span className="font-bold text-cyan-600">{percentage}%</span>
                </p>
                <div className="pt-2 text-[10px] text-gray-400">
                  رقم الوثيقة المرجعي: CMPLX-{Date.now().toString(36).toUpperCase()} · معتمد أكاديمياً
                </div>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-4 border-t border-black/5 dark:border-white/5">
            <button
              onClick={handleReset}
              className="px-5 py-2.5 rounded-xl border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200 text-xs font-semibold flex items-center gap-1.5 transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
              <span>إعادة الاختبار</span>
            </button>
            <button
              onClick={() => onSelectSubcategory('advanced-math', 'complex-numbers')}
              className="px-5 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-700 text-white text-xs font-bold transition-all shadow-sm flex items-center gap-1.5"
            >
              <span>الانتقال لفهرس الأعداد المركبة</span>
              <ArrowRight className="w-4 h-4 rotate-180" />
            </button>
          </div>
        </div>
      )}

      {/* Unique Academic Pillar Article Section for this test (>350 words) */}
      <section
        className={`rounded-2xl border ${themeClasses.border} ${themeClasses.cardBg} p-6 sm:p-10 shadow-sm transition-all space-y-6 leading-relaxed`}
      >
        <div className="border-b border-black/5 dark:border-white/5 pb-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-500/20 mb-2">
            <BookOpen className="w-4 h-4" />
            <span>المقالة العلمية التأسيسية للاختبار</span>
            <span>• عدد الكلمات: {quizConfig.article.wordCount} كلمة</span>
            <span>• وقت القراءة: {quizConfig.article.readingTimeMinutes} دقائق</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 dark:text-white">
            {quizConfig.article.title}
          </h2>
          <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 mt-2 leading-relaxed">
            {quizConfig.article.intro}
          </p>
        </div>

        <div className="space-y-5">
          {quizConfig.article.sections.map((sec, idx) => (
            <div key={idx} className="space-y-2">
              <h3 className="text-sm sm:text-base font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <span className="w-6 h-6 rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center text-xs font-mono font-bold">
                  {idx + 1}
                </span>
                <span>{sec.title}</span>
              </h3>
              <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed pr-8">
                {sec.content}
              </p>
            </div>
          ))}
        </div>

        <div className="p-4 rounded-xl bg-cyan-500/[0.05] border border-cyan-500/20 text-xs sm:text-sm text-gray-800 dark:text-gray-200 leading-relaxed">
          <span className="font-bold text-cyan-700 dark:text-cyan-300">خلاصة الدرس: </span>
          {quizConfig.article.summary}
        </div>
      </section>

      {/* Backlink Navigation Box */}
      <ComplexNumbersBacklinkBox currentQuizId={quizType} />
    </div>
  );
};
