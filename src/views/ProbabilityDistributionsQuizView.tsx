import React, { useState } from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { useEyeTheme } from '../context/ThemeContext';
import { ProbabilityDistributionsBacklinkBox } from '../components/ProbabilityDistributionsBacklinkBox';
import {
  PROBABILITY_DISTRIBUTIONS_QUIZZES,
  ProbabilityDistributionQuizType,
} from '../data/probabilityDistributionsTestsData';
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

interface ProbabilityDistributionsQuizViewProps {
  quizType: ProbabilityDistributionQuizType;
  onGoHome: () => void;
  onSelectDomain: (domainId: string) => void;
  onSelectSubcategory: (domainId: string, subcategoryId: string) => void;
}

export const ProbabilityDistributionsQuizView: React.FC<ProbabilityDistributionsQuizViewProps> = ({
  quizType,
  onGoHome,
  onSelectDomain,
  onSelectSubcategory,
}) => {
  const { themeClasses } = useEyeTheme();
  const quizConfig = PROBABILITY_DISTRIBUTIONS_QUIZZES[quizType];

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
          عذراً، لم يتم العثور على الاختبار المطلوب في قسم التوزيعات الاحتمالية.
        </p>
        <button
          onClick={() => onSelectSubcategory('statistics-probability', 'probability-distributions')}
          className="px-4 py-2 bg-purple-600 text-white rounded-lg"
        >
          العودة لاختبارات التوزيعات الاحتمالية
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
        osc.frequency.setValueAtTime(880, ctx.currentTime + 0.1); // A5
        gain.gain.setValueAtTime(0.15, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.35);
        osc.start();
        osc.stop(ctx.currentTime + 0.35);
      } else if (type === 'wrong') {
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(220, ctx.currentTime);
        osc.frequency.setValueAtTime(164.81, ctx.currentTime + 0.12);
        gain.gain.setValueAtTime(0.15, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3);
        osc.start();
        osc.stop(ctx.currentTime + 0.3);
      } else if (type === 'complete') {
        const notes = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6
        notes.forEach((freq, idx) => {
          const noteOsc = ctx.createOscillator();
          const noteGain = ctx.createGain();
          noteOsc.connect(noteGain);
          noteGain.connect(ctx.destination);
          noteOsc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.1);
          noteGain.gain.setValueAtTime(0.12, ctx.currentTime + idx * 0.1);
          noteGain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + idx * 0.1 + 0.3);
          noteOsc.start(ctx.currentTime + idx * 0.1);
          noteOsc.stop(ctx.currentTime + idx * 0.1 + 0.3);
        });
      }
    } catch {
      // Ignore audio failure
    }
  };

  const handleSelectAnswer = (option: string) => {
    if (selectedAnswers[currentQuestion.id]) return; // Answered already

    const updated = { ...selectedAnswers, [currentQuestion.id]: option };
    setSelectedAnswers(updated);

    if (option === currentQuestion.correctAnswer) {
      playSound('correct');
    } else {
      playSound('wrong');
    }

    // Check if finished
    if (Object.keys(updated).length === totalQuestions) {
      setTimeout(() => {
        setIsCompleted(true);
        playSound('complete');
      }, 700);
    }
  };

  const toggleHint = (qId: number) => {
    setRevealedHints((prev) => ({ ...prev, [qId]: !prev[qId] }));
  };

  const calculateScore = () => {
    let correct = 0;
    questions.forEach((q) => {
      if (selectedAnswers[q.id] === q.correctAnswer) correct++;
    });
    return correct;
  };

  const score = calculateScore();
  const percentage = Math.round((score / totalQuestions) * 100);

  const getScoreVerdict = () => {
    if (percentage === 100) return { title: 'علامة كاملة وخبير استثنائي!', badge: 'عبقري التوزيعات 🌟', color: 'text-amber-500' };
    if (percentage >= 80) return { title: 'أداء ممتاز ومتمكن جداً!', badge: 'إحصائي متميز 🏆', color: 'text-emerald-500' };
    if (percentage >= 60) return { title: 'مستوى جيد، بحاجة لمزيد من التدريب', badge: 'متدرب واعد 📈', color: 'text-blue-500' };
    return { title: 'فرصة للمراجعة وإعادة التعلم', badge: 'في مرحلة التأسيس 💡', color: 'text-rose-500' };
  };

  const verdict = getScoreVerdict();

  const handleRestart = () => {
    setSelectedAnswers({});
    setRevealedHints({});
    setCurrentQuestionIndex(0);
    setIsCompleted(false);
    setShowCertificate(false);
  };

  const breadcrumbsItems = [
    { label: 'الرئيسية', onClick: onGoHome },
    {
      label: 'الإحصاء والاحتمالات',
      onClick: () => onSelectDomain('statistics-probability'),
    },
    {
      label: 'التوزيعات الاحتمالية',
      onClick: () => onSelectSubcategory('statistics-probability', 'probability-distributions'),
    },
    { label: quizConfig.title },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 space-y-8 text-right font-sans" dir="rtl">
      {/* Top Breadcrumbs & Utility Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-black/[0.06] dark:border-white/[0.06] pb-4">
        <Breadcrumbs items={breadcrumbsItems} />
        <div className="flex items-center gap-2 self-start sm:self-auto">
          <button
            onClick={() => setSoundEnabled(!soundEnabled)}
            className={`p-2 rounded-xl border ${themeClasses.border} ${themeClasses.cardBg} hover:opacity-80 transition-all flex items-center gap-1.5 text-xs font-medium`}
            title={soundEnabled ? 'كتم المؤثرات الصوتية' : 'تفعيل المؤثرات الصوتية'}
          >
            {soundEnabled ? (
              <>
                <Volume2 className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                <span>الصوت مفعل</span>
              </>
            ) : (
              <>
                <VolumeX className="w-4 h-4 text-gray-400" />
                <span className={themeClasses.textSecondary}>الصوت مكتوم</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Quiz Header Hero Card */}
      <div className={`p-6 sm:p-8 rounded-3xl ${themeClasses.cardBg} border ${themeClasses.border} shadow-sm relative overflow-hidden`}>
        <div className="absolute top-0 right-0 w-48 h-48 bg-purple-500/5 rounded-full blur-3xl -z-10" />
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-3xl flex items-center justify-center shrink-0">
              {quizConfig.emoji}
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs px-2.5 py-0.5 rounded-full font-semibold bg-purple-500/10 text-purple-700 dark:text-purple-300">
                  {quizConfig.badge}
                </span>
                <span className="text-xs font-mono font-bold text-purple-600 dark:text-purple-400 bg-black/[0.03] dark:bg-white/[0.05] px-2 py-0.5 rounded" dir="ltr">
                  {quizConfig.mathSymbol}
                </span>
              </div>
              <h1 className={`text-xl sm:text-2xl font-black ${themeClasses.textPrimary}`}>
                {quizConfig.title}
              </h1>
              <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} mt-1.5 leading-relaxed`}>
                {quizConfig.description}
              </p>
            </div>
          </div>
          <div className="flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto gap-1 border-t sm:border-t-0 pt-3 sm:pt-0 border-black/[0.04] dark:border-white/[0.04]">
            <span className={`text-xs ${themeClasses.textSecondary}`}>المدة المقترحة</span>
            <span className={`text-sm font-bold ${themeClasses.textPrimary}`}>
              {quizConfig.recommendedDuration}
            </span>
          </div>
        </div>

        {/* Question Stepper / Progress Bar */}
        <div className="mt-6 pt-5 border-t border-black/[0.06] dark:border-white/[0.06]">
          <div className="flex items-center justify-between text-xs font-medium mb-2.5">
            <span className={themeClasses.textSecondary}>
              التقدم: السؤال {currentQuestionIndex + 1} من {totalQuestions}
            </span>
            <span className="text-purple-600 dark:text-purple-400 font-bold">
              {answeredCount} تم الإجابة عليها ({Math.round((answeredCount / totalQuestions) * 100)}%)
            </span>
          </div>
          <div className="grid grid-cols-10 gap-1.5 sm:gap-2">
            {questions.map((q, idx) => {
              const ans = selectedAnswers[q.id];
              const isCurrent = idx === currentQuestionIndex;
              let bg = 'bg-black/[0.05] dark:bg-white/[0.05] border-transparent text-gray-500';

              if (ans) {
                if (ans === q.correctAnswer) {
                  bg = 'bg-emerald-500 text-white font-bold border-emerald-600';
                } else {
                  bg = 'bg-rose-500 text-white font-bold border-rose-600';
                }
              } else if (isCurrent) {
                bg = 'bg-purple-600 text-white font-bold ring-2 ring-purple-400/40';
              }

              return (
                <button
                  key={q.id}
                  onClick={() => setCurrentQuestionIndex(idx)}
                  className={`h-8 sm:h-9 rounded-xl border text-xs sm:text-sm flex items-center justify-center transition-all ${bg}`}
                  title={`السؤال ${idx + 1}`}
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
        <div className={`p-6 sm:p-8 rounded-3xl ${themeClasses.cardBg} border ${themeClasses.border} shadow-sm space-y-6`}>
          {/* Question Meta & Question Text */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-purple-500/10 text-purple-700 dark:text-purple-300">
                السؤال رقم {currentQuestionIndex + 1} ({currentQuestion.difficulty})
              </span>
              <button
                onClick={() => toggleHint(currentQuestion.id)}
                className={`text-xs font-medium px-3 py-1 rounded-lg border transition-all flex items-center gap-1.5 ${
                  revealedHints[currentQuestion.id]
                    ? 'border-amber-500/50 bg-amber-500/10 text-amber-700 dark:text-amber-300'
                    : 'border-black/[0.08] dark:border-white/[0.08] hover:bg-black/[0.03] dark:hover:bg-white/[0.03] text-gray-500'
                }`}
              >
                <HelpCircle className="w-3.5 h-3.5 text-amber-500" />
                <span>{revealedHints[currentQuestion.id] ? 'إخفاء التلميح' : 'عرض تلميح مساعد'}</span>
              </button>
            </div>

            <h2 className={`text-base sm:text-lg font-bold ${themeClasses.textPrimary} leading-relaxed`}>
              {currentQuestion.question}
            </h2>

            {/* Hint Box */}
            {revealedHints[currentQuestion.id] && (
              <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-900 dark:text-amber-200 flex items-start gap-2.5 animate-fadeIn">
                <Sparkles className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div className="leading-relaxed">
                  <span className="font-bold block mb-0.5">تلميح بيداغوجي:</span>
                  {currentQuestion.hint}
                </div>
              </div>
            )}
          </div>

          {/* Options Grid */}
          <div className="grid grid-cols-1 gap-3">
            {currentQuestion.options.map((option, optIdx) => {
              const selectedAnswer = selectedAnswers[currentQuestion.id];
              const isAnswered = !!selectedAnswer;
              const isSelected = selectedAnswer === option;
              const isCorrect = option === currentQuestion.correctAnswer;

              let style = `border-black/[0.08] dark:border-white/[0.08] hover:border-purple-500/50 hover:bg-purple-500/[0.02] ${themeClasses.textPrimary}`;

              if (isAnswered) {
                if (isCorrect) {
                  style = 'border-emerald-500 bg-emerald-500/10 text-emerald-900 dark:text-emerald-100 font-bold';
                } else if (isSelected) {
                  style = 'border-rose-500 bg-rose-500/10 text-rose-900 dark:text-rose-100 font-medium';
                } else {
                  style = 'opacity-40 border-black/[0.04] dark:border-white/[0.04] text-gray-500';
                }
              }

              const letters = ['أ', 'ب', 'ج', 'د'];

              return (
                <button
                  key={optIdx}
                  onClick={() => handleSelectAnswer(option)}
                  disabled={isAnswered}
                  className={`w-full p-4 rounded-2xl border text-right transition-all flex items-center justify-between gap-3 text-xs sm:text-sm ${style}`}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-xl bg-black/[0.04] dark:bg-white/[0.06] text-xs font-bold flex items-center justify-center shrink-0">
                      {letters[optIdx] || optIdx + 1}
                    </span>
                    <span className="leading-relaxed">{option}</span>
                  </div>
                  {isAnswered && isCorrect && (
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                  )}
                  {isAnswered && isSelected && !isCorrect && (
                    <XCircle className="w-5 h-5 text-rose-500 shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Explanation Box on Answer */}
          {selectedAnswers[currentQuestion.id] && (
            <div
              className={`p-4 rounded-2xl border ${
                selectedAnswers[currentQuestion.id] === currentQuestion.correctAnswer
                  ? 'border-emerald-500/30 bg-emerald-500/5 text-emerald-950 dark:text-emerald-100'
                  : 'border-rose-500/30 bg-rose-500/5 text-rose-950 dark:text-rose-100'
              } text-xs sm:text-sm space-y-1.5`}
            >
              <div className="font-bold flex items-center gap-1.5">
                {selectedAnswers[currentQuestion.id] === currentQuestion.correctAnswer ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    <span>إجابة صحيحة وموفقة!</span>
                  </>
                ) : (
                  <>
                    <XCircle className="w-4 h-4 text-rose-500" />
                    <span>إجابة غير صحيحة - راجع التوضيح الرياضي أدناه:</span>
                  </>
                )}
              </div>
              <p className="leading-relaxed pr-5">
                {currentQuestion.explanation}
              </p>
            </div>
          )}

          {/* Stepper Navigation Buttons */}
          <div className="flex items-center justify-between pt-4 border-t border-black/[0.06] dark:border-white/[0.06]">
            <button
              onClick={() => setCurrentQuestionIndex((prev) => Math.max(0, prev - 1))}
              disabled={currentQuestionIndex === 0}
              className={`px-4 py-2 rounded-xl border text-xs font-semibold flex items-center gap-1.5 transition-all ${
                currentQuestionIndex === 0
                  ? 'opacity-30 cursor-not-allowed border-black/[0.05] dark:border-white/[0.05]'
                  : 'border-black/[0.08] dark:border-white/[0.08] hover:bg-black/[0.03] dark:hover:bg-white/[0.03]'
              }`}
            >
              <ChevronRight className="w-4 h-4" />
              <span>السؤال السابق</span>
            </button>

            {currentQuestionIndex < totalQuestions - 1 ? (
              <button
                onClick={() => setCurrentQuestionIndex((prev) => Math.min(totalQuestions - 1, prev + 1))}
                className="px-5 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold flex items-center gap-1.5 transition-all shadow-sm"
              >
                <span>السؤال التالي</span>
                <ChevronLeft className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={() => setIsCompleted(true)}
                disabled={answeredCount < totalQuestions}
                className={`px-6 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${
                  answeredCount < totalQuestions
                    ? 'bg-black/[0.1] dark:bg-white/[0.1] text-gray-400 cursor-not-allowed'
                    : 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm'
                }`}
              >
                <span>عرض النتيجة النهائية</span>
                <Award className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      ) : (
        /* Results & Performance Screen */
        <div className={`p-6 sm:p-10 rounded-3xl ${themeClasses.cardBg} border ${themeClasses.border} shadow-sm space-y-8 text-center`}>
          <div className="inline-flex p-4 rounded-3xl bg-purple-500/10 text-purple-600 dark:text-purple-400 mb-2">
            <Award className="w-12 h-12" />
          </div>

          <div>
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-purple-500/10 text-purple-700 dark:text-purple-300">
              {verdict.badge}
            </span>
            <h2 className={`text-2xl sm:text-3xl font-black ${themeClasses.textPrimary} mt-3`}>
              {verdict.title}
            </h2>
            <p className={`text-sm ${themeClasses.textSecondary} mt-1`}>
              لقد أتممت بنجاح اختبار: {quizConfig.title}
            </p>
          </div>

          {/* Big Score Meter */}
          <div className="max-w-xs mx-auto p-6 rounded-3xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/[0.06]">
            <div className={`text-5xl font-black ${verdict.color}`}>
              {score} / {totalQuestions}
            </div>
            <div className={`text-sm font-bold ${themeClasses.textSecondary} mt-2`}>
              النسبة المئوية: {percentage}%
            </div>
            <div className="w-full bg-black/10 dark:bg-white/10 rounded-full h-2.5 mt-3 overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-1000 ${
                  percentage >= 80 ? 'bg-emerald-500' : percentage >= 60 ? 'bg-purple-500' : 'bg-rose-500'
                }`}
                style={{ width: `${percentage}%` }}
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={handleRestart}
              className="px-5 py-2.5 rounded-xl border border-black/[0.08] dark:border-white/[0.08] hover:bg-black/[0.03] dark:hover:bg-white/[0.03] text-xs font-bold flex items-center gap-2 transition-all"
            >
              <RotateCcw className="w-4 h-4" />
              <span>إعادة الاختبار من البداية</span>
            </button>
            <button
              onClick={() => setShowCertificate(true)}
              className="px-6 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold flex items-center gap-2 transition-all shadow-sm"
            >
              <Award className="w-4 h-4" />
              <span>إصدار شهادة الإنجاز</span>
            </button>
          </div>

          {/* Certificate Modal */}
          {showCertificate && (
            <div className="p-6 rounded-3xl border-2 border-dashed border-purple-500/40 bg-purple-500/[0.03] text-right space-y-4 max-w-lg mx-auto">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-purple-600 dark:text-purple-400">
                  شهادة إتمام معتمدة
                </span>
                <span className="text-xs text-gray-400">منصة الرياضيات التعليمية</span>
              </div>
              <h3 className={`text-lg font-black ${themeClasses.textPrimary}`}>
                شهادة إتقان في التوزيعات الاحتمالية
              </h3>
              <p className={`text-xs ${themeClasses.textSecondary} leading-relaxed`}>
                تشهد المنصة بأن الطالب/ة قد أتم بنجاح اختبار «{quizConfig.title}» وحقق نسبة نجاح {percentage}% ({score} من {totalQuestions} أسئلة).
              </p>
              <div>
                <label className={`block text-xs font-bold ${themeClasses.textPrimary} mb-1`}>
                  اكتب اسمك لتضمينه في الشهادة:
                </label>
                <input
                  type="text"
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  placeholder="الاسم الثلاثي..."
                  className={`w-full p-2.5 rounded-xl border text-xs ${themeClasses.cardBg} ${themeClasses.border} focus:ring-2 focus:ring-purple-500 outline-none`}
                />
              </div>
              {studentName && (
                <div className="p-3 bg-purple-500/10 rounded-xl text-center font-bold text-purple-700 dark:text-purple-300 text-sm">
                  مبارك لك يا {studentName} هذا التميز الأكاديمي! 🎓
                </div>
              )}
            </div>
          )}

          {/* Full Review of All 10 Questions */}
          <div className="text-right space-y-4 pt-8 border-t border-black/[0.06] dark:border-white/[0.06]">
            <h3 className={`text-lg font-bold ${themeClasses.textPrimary} flex items-center gap-2`}>
              <BookOpen className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              <span>مراجعة شاملة لجميع أسئلة الاختبار ({totalQuestions} أسئلة):</span>
            </h3>

            <div className="space-y-4">
              {questions.map((q, idx) => {
                const userAns = selectedAnswers[q.id];
                const isCorrect = userAns === q.correctAnswer;

                return (
                  <div
                    key={q.id}
                    className={`p-5 rounded-2xl border ${
                      isCorrect
                        ? 'border-emerald-500/30 bg-emerald-500/[0.02]'
                        : 'border-rose-500/30 bg-rose-500/[0.02]'
                    } space-y-2`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span
                          className={`w-6 h-6 rounded-lg text-xs font-bold flex items-center justify-center shrink-0 ${
                            isCorrect ? 'bg-emerald-500 text-white' : 'bg-rose-500 text-white'
                          }`}
                        >
                          {idx + 1}
                        </span>
                        <h4 className={`text-sm font-bold ${themeClasses.textPrimary}`}>
                          {q.question}
                        </h4>
                      </div>
                      {isCorrect ? (
                        <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold shrink-0">
                          صحيحة ✓
                        </span>
                      ) : (
                        <span className="text-xs px-2 py-0.5 rounded-full bg-rose-500/10 text-rose-600 dark:text-rose-400 font-bold shrink-0">
                          خاطئة ✗
                        </span>
                      )}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs pt-2">
                      <div className="p-2 rounded-xl bg-black/[0.02] dark:bg-white/[0.02]">
                        <span className="text-gray-400 block mb-0.5">إجابتك:</span>
                        <span className={isCorrect ? 'text-emerald-600 dark:text-emerald-400 font-bold' : 'text-rose-600 dark:text-rose-400 font-bold'}>
                          {userAns || 'لم يتم اختيار إجابة'}
                        </span>
                      </div>
                      <div className="p-2 rounded-xl bg-black/[0.02] dark:bg-white/[0.02]">
                        <span className="text-gray-400 block mb-0.5">الإجابة الصحيحة المعتمدة:</span>
                        <span className="text-emerald-600 dark:text-emerald-400 font-bold">
                          {q.correctAnswer}
                        </span>
                      </div>
                    </div>

                    <div className="text-xs text-gray-600 dark:text-gray-300 bg-black/[0.02] dark:bg-white/[0.02] p-3 rounded-xl leading-relaxed mt-2">
                      <span className="font-bold block mb-1 text-purple-600 dark:text-purple-400">
                        التفسير الرياضي الدقيق:
                      </span>
                      {q.explanation}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Unique In-Depth Academic Article Under Every Quiz (+350 words) */}
      <article className={`p-6 sm:p-10 rounded-3xl ${themeClasses.cardBg} border ${themeClasses.border} shadow-sm space-y-6 text-right leading-relaxed`}>
        <div className="border-b border-black/[0.06] dark:border-white/[0.06] pb-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-700 dark:text-purple-300 mb-2">
            <BookOpen className="w-3.5 h-3.5" />
            <span>مقالة مرجعية تخصصية ({quizConfig.article.wordCount}+ كلمة)</span>
          </div>
          <h2 className={`text-xl sm:text-2xl font-black ${themeClasses.textPrimary}`}>
            {quizConfig.article.title}
          </h2>
          <div className="flex items-center gap-4 text-xs text-gray-400 mt-2">
            <span>مدة القراءة: {quizConfig.article.readingTimeMinutes} دقائق</span>
            <span>•</span>
            <span>عدد الكلمات: {quizConfig.article.wordCount} كلمة</span>
            <span>•</span>
            <span>المستوى الأكاديمي: متقدم ومُحكّم</span>
          </div>
        </div>

        {/* Article Intro */}
        <p className={`text-sm ${themeClasses.textSecondary} leading-relaxed`}>
          {quizConfig.article.intro}
        </p>

        {/* Article Sections */}
        <div className="space-y-6 my-4">
          {quizConfig.article.sections.map((section, sIdx) => (
            <section key={sIdx} className="space-y-2">
              <h3 className={`text-base font-bold ${themeClasses.textPrimary} flex items-center gap-2`}>
                <span className="text-purple-600 dark:text-purple-400">{sIdx + 1}.</span>
                <span>{section.title}</span>
              </h3>
              <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
                {section.content}
              </p>
            </section>
          ))}
        </div>

        {/* Article Summary */}
        <div className="p-4 rounded-2xl bg-purple-500/5 border border-purple-500/20 text-xs sm:text-sm">
          <span className="font-bold text-purple-700 dark:text-purple-300 block mb-1">
            خلاصة الدرس والنتائج الجوهرية:
          </span>
          <p className={`${themeClasses.textSecondary} leading-relaxed`}>
            {quizConfig.article.summary}
          </p>
        </div>
      </article>

      {/* Internal Backlinks Box to Related Quizzes */}
      <ProbabilityDistributionsBacklinkBox
        currentQuizId={quizConfig.id}
        relatedIds={quizConfig.relatedIds}
      />
    </div>
  );
};
