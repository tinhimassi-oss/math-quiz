import React, { useState } from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { useEyeTheme } from '../context/ThemeContext';
import { MathematicalLogicBacklinkBox } from '../components/MathematicalLogicBacklinkBox';
import {
  MATHEMATICAL_LOGIC_QUIZZES,
  MathematicalLogicQuizType,
} from '../data/mathematicalLogicTestsData';
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

interface MathematicalLogicQuizViewProps {
  quizType: MathematicalLogicQuizType;
  onGoHome: () => void;
  onSelectDomain: (domainId: string) => void;
  onSelectSubcategory: (domainId: string, subcategoryId: string) => void;
}

export const MathematicalLogicQuizView: React.FC<MathematicalLogicQuizViewProps> = ({
  quizType,
  onGoHome,
  onSelectDomain,
  onSelectSubcategory,
}) => {
  const { themeClasses, isDark } = useEyeTheme();
  const quizConfig = MATHEMATICAL_LOGIC_QUIZZES[quizType];

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
          عذراً، لم يتم العثور على الاختبار المطلوب في قسم المنطق الرياضي.
        </p>
        <button
          onClick={() => onSelectSubcategory('advanced-math', 'mathematical-logic')}
          className="px-4 py-2 bg-emerald-600 text-white rounded-lg"
        >
          العودة لاختبارات المنطق الرياضي
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
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);

      if (type === 'correct') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(523.25, ctx.currentTime); // C5
        osc.frequency.exponentialRampToValueAtTime(783.99, ctx.currentTime + 0.15); // G5
        gain.gain.setValueAtTime(0.15, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.25);
        osc.start();
        osc.stop(ctx.currentTime + 0.25);
      } else if (type === 'wrong') {
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(260, ctx.currentTime);
        osc.frequency.setValueAtTime(200, ctx.currentTime + 0.1);
        gain.gain.setValueAtTime(0.18, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3);
        osc.start();
        osc.stop(ctx.currentTime + 0.3);
      } else if (type === 'complete') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(523.25, ctx.currentTime);
        osc.frequency.setValueAtTime(659.25, ctx.currentTime + 0.1);
        osc.frequency.setValueAtTime(783.99, ctx.currentTime + 0.2);
        osc.frequency.setValueAtTime(1046.5, ctx.currentTime + 0.3);
        gain.gain.setValueAtTime(0.2, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.5);
        osc.start();
        osc.stop(ctx.currentTime + 0.5);
      }
    } catch {
      // AudioContext failure fallback
    }
  };

  const handleSelectAnswer = (option: string) => {
    if (selectedAnswers[currentQuestion.id]) return; // Answered already

    const isCorrect = option === currentQuestion.correctAnswer;
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: option,
    }));

    if (isCorrect) {
      playSound('correct');
    } else {
      playSound('wrong');
    }

    if (answeredCount + 1 === totalQuestions) {
      setTimeout(() => {
        setIsCompleted(true);
        playSound('complete');
      }, 700);
    }
  };

  const handleToggleHint = (qId: number) => {
    setRevealedHints((prev) => ({
      ...prev,
      [qId]: !prev[qId],
    }));
  };

  const handleReset = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setRevealedHints({});
    setIsCompleted(false);
    setShowCertificate(false);
  };

  const calculateScore = () => {
    let score = 0;
    questions.forEach((q) => {
      if (selectedAnswers[q.id] === q.correctAnswer) {
        score++;
      }
    });
    return score;
  };

  const score = calculateScore();
  const percentage = Math.round((score / totalQuestions) * 100);

  return (
    <div className="space-y-8 pb-16 text-right">
      {/* Breadcrumb Navigation */}
      <Breadcrumbs
        items={[
          { label: 'الرئيسية', onClick: onGoHome },
          { label: 'الرياضيات المتقدمة والجامعية', onClick: () => onSelectDomain('advanced-math') },
          {
            label: 'المنطق الرياضي',
            onClick: () => onSelectSubcategory('advanced-math', 'mathematical-logic'),
          },
          { label: quizConfig.title, active: true },
        ]}
      />

      {/* Hero Header Box */}
      <div
        className={`rounded-2xl border ${themeClasses.border} ${themeClasses.cardBg} p-6 sm:p-8 shadow-sm transition-all`}
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-black/5 dark:border-white/5 pb-6 mb-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-2xl">{quizConfig.emoji}</span>
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20">
                {quizConfig.badge}
              </span>
              <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
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

          <div className="flex items-center gap-2 self-start md:self-center">
            <button
              onClick={() => setSoundEnabled((prev) => !prev)}
              className="p-2.5 rounded-xl border border-black/5 dark:border-white/5 hover:bg-black/5 dark:hover:bg-white/5 text-gray-600 dark:text-gray-300 transition-colors"
              title={soundEnabled ? 'كتم المؤثرات الصوتية' : 'تفعيل المؤثرات الصوتية'}
              aria-label="تبديل الصوت"
            >
              {soundEnabled ? <Volume2 className="w-4 h-4 text-emerald-600" /> : <VolumeX className="w-4 h-4 text-gray-400" />}
            </button>
            <button
              onClick={handleReset}
              className="p-2.5 rounded-xl border border-black/5 dark:border-white/5 hover:bg-black/5 dark:hover:bg-white/5 text-gray-600 dark:text-gray-300 transition-colors"
              title="إعادة ضبط الاختبار"
              aria-label="إعادة الاختبار"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Top Progress & Stats Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
          <div className="p-3 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5">
            <div className="text-[11px] text-gray-500">عدد الأسئلة</div>
            <div className="text-base font-bold text-gray-900 dark:text-white">
              {totalQuestions} أسئلة
            </div>
          </div>
          <div className="p-3 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5">
            <div className="text-[11px] text-gray-500">تمت الإجابة</div>
            <div className="text-base font-bold text-emerald-600 dark:text-emerald-400">
              {answeredCount} / {totalQuestions}
            </div>
          </div>
          <div className="p-3 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5">
            <div className="text-[11px] text-gray-500">الوقت الموصى به</div>
            <div className="text-base font-bold text-gray-900 dark:text-white">
              {quizConfig.recommendedDuration}
            </div>
          </div>
          <div className="p-3 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5">
            <div className="text-[11px] text-gray-500">النتيجة الحالية</div>
            <div className="text-base font-bold text-emerald-600 dark:text-emerald-400">
              {score} صائبة
            </div>
          </div>
        </div>

        {/* Progress Fill Bar */}
        <div className="mt-4 w-full bg-gray-200 dark:bg-gray-800 h-2 rounded-full overflow-hidden">
          <div
            className="bg-emerald-600 h-full transition-all duration-300 ease-out"
            style={{ width: `${(answeredCount / totalQuestions) * 100}%` }}
          />
        </div>
      </div>

      {/* Main Interactive Quiz Card */}
      {!isCompleted ? (
        <div
          className={`rounded-2xl border ${themeClasses.border} ${themeClasses.cardBg} p-6 sm:p-8 shadow-sm transition-all space-y-6`}
        >
          {/* Question Header & Nav */}
          <div className="flex items-center justify-between border-b border-black/5 dark:border-white/5 pb-4">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 font-bold flex items-center justify-center text-xs font-mono">
                {currentQuestionIndex + 1}
              </span>
              <span className="text-xs text-gray-500">
                من أصل {totalQuestions} أسئلة
              </span>
            </div>

            <span
              className={`text-[10px] px-2 py-0.5 rounded-full font-semibold ${
                currentQuestion.difficulty === 'سهل'
                  ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-300'
                  : currentQuestion.difficulty === 'متوسط'
                  ? 'bg-blue-500/10 text-blue-600 dark:text-blue-300'
                  : 'bg-purple-500/10 text-purple-600 dark:text-purple-300'
              }`}
            >
              مستوى الصعوبة: {currentQuestion.difficulty}
            </span>
          </div>

          {/* Question Text */}
          <div className="text-base sm:text-lg font-bold text-gray-900 dark:text-white leading-relaxed">
            {currentQuestion.question}
          </div>

          {/* Options Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {currentQuestion.options.map((option, idx) => {
              const isSelected = selectedAnswers[currentQuestion.id] === option;
              const hasAnswered = !!selectedAnswers[currentQuestion.id];
              const isThisCorrect = option === currentQuestion.correctAnswer;

              let optionStyle =
                'border-gray-200 dark:border-gray-800 hover:border-emerald-500/40 hover:bg-emerald-500/[0.02]';

              if (hasAnswered) {
                if (isThisCorrect) {
                  optionStyle =
                    'border-emerald-500 bg-emerald-500/10 text-emerald-800 dark:text-emerald-200 font-bold';
                } else if (isSelected) {
                  optionStyle =
                    'border-rose-500 bg-rose-500/10 text-rose-800 dark:text-rose-200 font-bold';
                } else {
                  optionStyle = 'opacity-60 border-gray-200 dark:border-gray-800';
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleSelectAnswer(option)}
                  disabled={hasAnswered}
                  className={`w-full text-right p-4 rounded-xl border transition-all flex items-center justify-between gap-3 ${optionStyle}`}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-lg bg-black/5 dark:bg-white/5 flex items-center justify-center text-xs font-mono font-bold text-gray-600 dark:text-gray-300">
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span className="text-xs sm:text-sm font-medium">{option}</span>
                  </div>

                  {hasAnswered && isThisCorrect && (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  )}
                  {hasAnswered && isSelected && !isThisCorrect && (
                    <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Hint and Explanation Container */}
          <div className="space-y-3 pt-2">
            {/* Hint Toggle */}
            <div className="flex items-center justify-between">
              <button
                onClick={() => handleToggleHint(currentQuestion.id)}
                className="inline-flex items-center gap-1.5 text-xs text-amber-600 dark:text-amber-400 hover:underline"
              >
                <HelpCircle className="w-4 h-4" />
                <span>{revealedHints[currentQuestion.id] ? 'إخفاء التلميح الذكي' : 'هل تحتاج إلى تلميح مساعد؟'}</span>
              </button>
            </div>

            {revealedHints[currentQuestion.id] && (
              <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-800 dark:text-amber-200 leading-relaxed">
                تنبيه: <strong>تلميح استرشادي:</strong> {currentQuestion.hint}
              </div>
            )}

            {/* Answer Explanation once answered */}
            {selectedAnswers[currentQuestion.id] && (
              <div
                className={`p-4 rounded-xl border text-xs sm:text-sm leading-relaxed ${
                  selectedAnswers[currentQuestion.id] === currentQuestion.correctAnswer
                    ? 'bg-emerald-500/[0.08] border-emerald-500/30 text-emerald-900 dark:text-emerald-100'
                    : 'bg-rose-500/[0.08] border-rose-500/30 text-rose-900 dark:text-rose-100'
                }`}
              >
                <div className="font-bold mb-1 flex items-center gap-1.5">
                  {selectedAnswers[currentQuestion.id] === currentQuestion.correctAnswer ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>إجابة صحيحة ومتقنة!</span>
                    </>
                  ) : (
                    <>
                      <XCircle className="w-4 h-4 text-rose-600" />
                      <span>إجابة غير صحيحة، والإجابة الدقيقة هي: {currentQuestion.correctAnswer}</span>
                    </>
                  )}
                </div>
                <p className="mt-1 text-gray-700 dark:text-gray-300">
                  {currentQuestion.explanation}
                </p>
              </div>
            )}
          </div>

          {/* Navigation Controls between questions */}
          <div className="flex items-center justify-between pt-4 border-t border-black/5 dark:border-white/5">
            <button
              onClick={() => setCurrentQuestionIndex((prev) => Math.max(0, prev - 1))}
              disabled={currentQuestionIndex === 0}
              className="px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-800 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-black/5 dark:hover:bg-white/5 text-xs font-semibold flex items-center gap-1.5 transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
              <span>السؤال السابق</span>
            </button>

            {/* Question Quick Jump Dots */}
            <div className="hidden sm:flex items-center gap-1.5">
              {questions.map((q, idx) => {
                const isAns = !!selectedAnswers[q.id];
                const isCorr = selectedAnswers[q.id] === q.correctAnswer;
                const isCurr = idx === currentQuestionIndex;

                let dotColor = 'bg-gray-200 dark:bg-gray-800';
                if (isAns) {
                  dotColor = isCorr ? 'bg-emerald-500' : 'bg-rose-500';
                } else if (isCurr) {
                  dotColor = 'bg-emerald-500 ring-2 ring-emerald-500/30';
                }

                return (
                  <button
                    key={q.id}
                    onClick={() => setCurrentQuestionIndex(idx)}
                    className={`w-6 h-6 rounded-md text-[10px] font-bold font-mono transition-all flex items-center justify-center ${dotColor} ${
                      isCurr ? 'text-white' : 'text-gray-700 dark:text-gray-300'
                    }`}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>

            <button
              onClick={() => {
                if (currentQuestionIndex < totalQuestions - 1) {
                  setCurrentQuestionIndex((prev) => prev + 1);
                } else {
                  setIsCompleted(true);
                  playSound('complete');
                }
              }}
              className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center gap-1.5 transition-all shadow-sm"
            >
              <span>{currentQuestionIndex < totalQuestions - 1 ? 'السؤال التالي' : 'إنهاء الاختبار وعرض النتيجة'}</span>
              <ChevronLeft className="w-4 h-4" />
            </button>
          </div>
        </div>
      ) : (
        /* Results & Certificate Completion Screen */
        <div
          className={`rounded-2xl border ${themeClasses.border} ${themeClasses.cardBg} p-6 sm:p-10 shadow-sm transition-all text-center space-y-6`}
        >
          <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
            <Award className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl font-black text-gray-900 dark:text-white">
              تهانينا! لقد أتممت اختبار {quizConfig.title}
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
              لقد أجبت على كافة الأسئلة الـ 10 التخصصية في المنطق الرياضي. إليك تفصيل نتيجتك التحصيلية الدقيقة:
            </p>
          </div>

          <div className="inline-block p-6 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5">
            <div className="text-4xl font-black text-emerald-600 dark:text-emerald-400 font-mono">
              {score} / {totalQuestions}
            </div>
            <div className="text-xs font-bold text-gray-600 dark:text-gray-300 mt-1">
              المعدل التحصيلي: {percentage}%
            </div>
            <div className="text-xs font-semibold mt-2">
              {percentage >= 90 ? (
                <span className="text-emerald-600 dark:text-emerald-400">
                  امتياز استثنائي! استيعاب كامل للمنطق الصوري وبراهينه 
                </span>
              ) : percentage >= 70 ? (
                <span className="text-blue-600 dark:text-blue-400">
                  مستوى جيد جداً ومتمكن! يمكنك مراجعة النقاط البسيطة المتبقية 
                </span>
              ) : (
                <span className="text-amber-600 dark:text-amber-400">
                  مجهود جيد! ننصح بقراءة المقالة العلمية أدناه ثم إعادة الاختبار للتمكن الكامل 
                </span>
              )}
            </div>
          </div>

          {/* Certificate Generation Accordion */}
          <div className="max-w-md mx-auto space-y-3 pt-2">
            {!showCertificate ? (
              <div className="flex flex-col sm:flex-row gap-2 justify-center">
                <input
                  type="text"
                  placeholder="اكتب اسمك الثلاثي لإصدار وثيقة الإنجاز"
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  className="px-4 py-2 text-xs rounded-xl border border-gray-300 dark:border-gray-700 bg-transparent text-gray-900 dark:text-white text-right focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
                <button
                  onClick={() => {
                    if (studentName.trim()) setShowCertificate(true);
                  }}
                  disabled={!studentName.trim()}
                  className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 disabled:opacity-40 text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-all"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>إصدار الشهادة</span>
                </button>
              </div>
            ) : (
              <div className="p-6 rounded-2xl border-2 border-emerald-500/30 bg-emerald-500/[0.04] space-y-3 text-center">
                <div className="text-xs uppercase tracking-widest text-emerald-600 font-bold">
                  منصة بوابة الرياضيات التفاعلية
                </div>
                <h3 className="text-lg font-black text-gray-900 dark:text-white">
                  شهادة إنجاز واجتياز أكاديمي
                </h3>
                <p className="text-xs text-gray-600 dark:text-gray-300">
                  تشهد المنصة بأن الطالب / الباحث:
                </p>
                <div className="text-lg font-black text-emerald-700 dark:text-emerald-300 border-b-2 border-emerald-500/30 pb-2 inline-block px-8">
                  {studentName}
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                  قد اجتاز بنجاح الاختبار التفاعلي التخصصي في:
                  <br />
                  <strong className="text-gray-900 dark:text-white font-bold">{quizConfig.title}</strong>
                  <br />
                  بمعدل تحصيلي دقيق قدره: <span className="font-bold text-emerald-600">{percentage}%</span>
                </p>
                <div className="pt-2 text-[10px] text-gray-400">
                  رقم الوثيقة المرجعي: LOGIC-{Date.now().toString(36).toUpperCase()} · معتمد أكاديمياً
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
              onClick={() => onSelectSubcategory('advanced-math', 'mathematical-logic')}
              className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all shadow-sm flex items-center gap-1.5"
            >
              <span>الانتقال لفهرس المنطق الرياضي</span>
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20 mb-2">
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
                <span className="w-6 h-6 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-xs font-mono font-bold">
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

        <div className="p-4 rounded-xl bg-emerald-500/[0.05] border border-emerald-500/20 text-xs sm:text-sm text-gray-800 dark:text-gray-200 leading-relaxed">
          <span className="font-bold text-emerald-700 dark:text-emerald-300">خلاصة الدرس: </span>
          {quizConfig.article.summary}
        </div>
      </section>

      {/* Backlink Navigation Box */}
      <MathematicalLogicBacklinkBox currentQuizId={quizType} />
    </div>
  );
};
