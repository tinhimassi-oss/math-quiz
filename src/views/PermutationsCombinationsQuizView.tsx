import React, { useState } from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { useEyeTheme } from '../context/ThemeContext';
import { PermutationsCombinationsBacklinkBox } from '../components/PermutationsCombinationsBacklinkBox';
import {
  PERMUTATIONS_COMBINATIONS_QUIZZES,
  PermutationsCombinationsQuizType,
} from '../data/permutationsCombinationsTestsData';
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

interface PermutationsCombinationsQuizViewProps {
  quizType: PermutationsCombinationsQuizType;
  onGoHome: () => void;
  onSelectDomain: (domainId: string) => void;
  onSelectSubcategory: (domainId: string, subcategoryId: string) => void;
}

export const PermutationsCombinationsQuizView: React.FC<PermutationsCombinationsQuizViewProps> = ({
  quizType,
  onGoHome,
  onSelectDomain,
  onSelectSubcategory,
}) => {
  const { themeClasses } = useEyeTheme();
  const quizConfig = PERMUTATIONS_COMBINATIONS_QUIZZES[quizType];

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
          عذراً، لم يتم العثور على الاختبار المطلوب في قسم التباديل والتوافيق.
        </p>
        <button
          onClick={() => onSelectSubcategory('statistics-probability', 'permutations-combinations')}
          className="px-4 py-2 bg-indigo-600 text-white rounded-lg"
        >
          العودة لاختبارات التباديل والتوافيق
        </button>
      </div>
    );
  }

  const currentQ = quizConfig.questions[currentQuestionIndex];
  const totalQuestions = quizConfig.questions.length;
  const isCurrentAnswered = selectedAnswers[currentQ.id] !== undefined;
  const currentSelected = selectedAnswers[currentQ.id];

  // Web Audio API sound synthesis
  const playSound = (isCorrect: boolean) => {
    if (!soundEnabled) return;
    try {
      const audioCtx = new (window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.connect(gain);
      gain.connect(audioCtx.destination);

      if (isCorrect) {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(523.25, audioCtx.currentTime); // C5
        osc.frequency.setValueAtTime(659.25, audioCtx.currentTime + 0.1); // E5
        osc.frequency.setValueAtTime(783.99, audioCtx.currentTime + 0.2); // G5
        gain.gain.setValueAtTime(0.2, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.4);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.4);
      } else {
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(220, audioCtx.currentTime); // A3
        osc.frequency.setValueAtTime(196, audioCtx.currentTime + 0.15); // G3
        gain.gain.setValueAtTime(0.25, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.35);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.35);
      }
    } catch {
      // AudioContext not allowed or supported
    }
  };

  const handleSelectAnswer = (option: string) => {
    if (isCurrentAnswered) return;
    const isCorrect = option === currentQ.correctAnswer;
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQ.id]: option,
    }));
    playSound(isCorrect);
  };

  const toggleHint = (qId: number) => {
    setRevealedHints((prev) => ({
      ...prev,
      [qId]: !prev[qId],
    }));
  };

  const calculateScore = () => {
    let score = 0;
    quizConfig.questions.forEach((q) => {
      if (selectedAnswers[q.id] === q.correctAnswer) {
        score += 1;
      }
    });
    return score;
  };

  const handleFinishQuiz = () => {
    setIsCompleted(true);
  };

  const handleRestartQuiz = () => {
    setSelectedAnswers({});
    setRevealedHints({});
    setCurrentQuestionIndex(0);
    setIsCompleted(false);
    setShowCertificate(false);
  };

  const score = calculateScore();
  const percentage = Math.round((score / totalQuestions) * 100);

  const getScoreVerdict = () => {
    if (percentage >= 90) return { label: 'ممتاز ومتفوق جداً 🌟', color: 'text-emerald-500' };
    if (percentage >= 75) return { label: 'جيد جداً ومتمكن 👏', color: 'text-indigo-500' };
    if (percentage >= 50) return { label: 'مستوى مقبول، يحتاج تعزيزاً 📖', color: 'text-amber-500' };
    return { label: 'يحتاج لمراجعة القوانين التوافقية 🔄', color: 'text-rose-500' };
  };

  const verdict = getScoreVerdict();

  const breadcrumbsItems = [
    { label: 'الرئيسية', onClick: onGoHome },
    {
      label: 'الإحصاء والاحتمالات',
      onClick: () => onSelectDomain('statistics-probability'),
    },
    {
      label: 'التباديل والتوافيق',
      onClick: () => onSelectSubcategory('statistics-probability', 'permutations-combinations'),
    },
    { label: quizConfig.title },
  ];

  return (
    <div className="space-y-8 pb-16">
      {/* Breadcrumbs */}
      <Breadcrumbs items={breadcrumbsItems} />

      {/* Hero Header */}
      <div
        className={`p-6 sm:p-8 rounded-3xl border ${themeClasses.border} ${themeClasses.cardBg} shadow-sm relative overflow-hidden`}
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border border-indigo-500/20">
              <span className="text-base">{quizConfig.emoji}</span>
              <span>{quizConfig.badge}</span>
              <span className="mx-1">•</span>
              <span className="font-mono dir-ltr">{quizConfig.mathSymbol}</span>
            </div>
            <h1 className={`text-2xl sm:text-3xl font-extrabold ${themeClasses.textPrimary}`}>
              {quizConfig.title}
            </h1>
            <p className={`text-sm ${themeClasses.textSecondary} max-w-2xl`}>
              {quizConfig.description}
            </p>
          </div>

          <div className="flex items-center gap-2 self-end sm:self-auto">
            <button
              onClick={() => setSoundEnabled(!soundEnabled)}
              title={soundEnabled ? 'كتم المؤثرات الصوتية' : 'تفعيل المؤثرات الصوتية'}
              className={`p-2.5 rounded-xl border ${themeClasses.border} transition-colors ${
                soundEnabled
                  ? 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400'
                  : 'bg-black/5 dark:bg-white/5 text-neutral-400'
              }`}
            >
              {soundEnabled ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {!isCompleted ? (
        /* ================= ACTIVE QUIZ MODE ================= */
        <div className="space-y-6">
          {/* Stepper Progress Bar */}
          <div
            className={`p-4 rounded-2xl border ${themeClasses.border} ${themeClasses.cardBg} shadow-sm`}
          >
            <div className="flex items-center justify-between text-xs font-bold mb-3">
              <span className={themeClasses.textSecondary}>
                السؤال {currentQuestionIndex + 1} من {totalQuestions}
              </span>
              <span className="text-indigo-600 dark:text-indigo-400 font-mono">
                {Object.keys(selectedAnswers).length} / {totalQuestions} مكتمل
              </span>
            </div>

            {/* Questions pill buttons */}
            <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-1">
              {quizConfig.questions.map((q, idx) => {
                const isAns = selectedAnswers[q.id] !== undefined;
                const isCurr = idx === currentQuestionIndex;
                const isCorrect = selectedAnswers[q.id] === q.correctAnswer;

                let btnStyle = 'border-black/10 dark:border-white/10 text-neutral-400';
                if (isCurr) {
                  btnStyle = 'border-indigo-500 bg-indigo-500 text-white font-bold scale-105';
                } else if (isAns) {
                  btnStyle = isCorrect
                    ? 'border-emerald-500/50 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                    : 'border-rose-500/50 bg-rose-500/10 text-rose-600 dark:text-rose-400';
                }

                return (
                  <button
                    key={q.id}
                    onClick={() => setCurrentQuestionIndex(idx)}
                    className={`w-8 h-8 rounded-xl border text-xs flex items-center justify-center shrink-0 transition-all ${btnStyle}`}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Question Card */}
          <div
            className={`p-6 sm:p-8 rounded-3xl border ${themeClasses.border} ${themeClasses.cardBg} shadow-sm space-y-6`}
          >
            <div className="flex items-center justify-between gap-4">
              <span
                className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                  currentQ.difficulty === 'سهل'
                    ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20'
                    : currentQ.difficulty === 'متوسط'
                    ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20'
                    : 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20'
                }`}
              >
                مستوى الصعوبة: {currentQ.difficulty}
              </span>

              <button
                onClick={() => toggleHint(currentQ.id)}
                className="flex items-center gap-1.5 text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline"
              >
                <HelpCircle className="w-4 h-4" />
                <span>{revealedHints[currentQ.id] ? 'إخفاء التلميح' : 'طلب تلميح توجيهي'}</span>
              </button>
            </div>

            {/* Hint Box */}
            {revealedHints[currentQ.id] && (
              <div
                className={`p-4 rounded-2xl border border-indigo-500/30 bg-indigo-500/5 text-xs sm:text-sm text-indigo-700 dark:text-indigo-300 flex items-start gap-2.5 transition-all animate-fadeIn`}
              >
                <Sparkles className="w-4 h-4 shrink-0 mt-0.5" />
                <div>
                  <strong className="block mb-0.5">تلميح توافقي للحل:</strong>
                  {currentQ.hint}
                </div>
              </div>
            )}

            {/* Question Text */}
            <h2 className={`text-lg sm:text-xl font-bold ${themeClasses.textPrimary} leading-relaxed`}>
              {currentQ.question}
            </h2>

            {/* Options Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {currentQ.options.map((option, idx) => {
                const isSelected = currentSelected === option;
                const isCorrect = option === currentQ.correctAnswer;

                let optionStyle = `border ${themeClasses.border} hover:border-indigo-400 hover:bg-indigo-500/5 ${themeClasses.textPrimary}`;

                if (isCurrentAnswered) {
                  if (isCorrect) {
                    optionStyle =
                      'border-emerald-500 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 font-bold';
                  } else if (isSelected && !isCorrect) {
                    optionStyle =
                      'border-rose-500 bg-rose-500/10 text-rose-700 dark:text-rose-300 font-bold';
                  } else {
                    optionStyle = `border ${themeClasses.border} opacity-50 ${themeClasses.textSecondary}`;
                  }
                }

                return (
                  <button
                    key={idx}
                    disabled={isCurrentAnswered}
                    onClick={() => handleSelectAnswer(option)}
                    className={`p-4 rounded-2xl text-right text-sm transition-all flex items-center justify-between gap-3 ${optionStyle}`}
                  >
                    <span>{option}</span>
                    {isCurrentAnswered && isCorrect && (
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                    )}
                    {isCurrentAnswered && isSelected && !isCorrect && (
                      <XCircle className="w-5 h-5 text-rose-500 shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Step-by-Step Explanation Banner */}
            {isCurrentAnswered && (
              <div
                className={`mt-4 p-4 rounded-2xl border ${
                  currentSelected === currentQ.correctAnswer
                    ? 'border-emerald-500/30 bg-emerald-500/5 text-emerald-800 dark:text-emerald-200'
                    : 'border-rose-500/30 bg-rose-500/5 text-rose-800 dark:text-rose-200'
                } space-y-1.5 animate-fadeIn`}
              >
                <div className="flex items-center gap-2 font-bold text-sm">
                  {currentSelected === currentQ.correctAnswer ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                      <span>إجابة صحيحة! أحسنت التفكير الرياضي والتوافقي.</span>
                    </>
                  ) : (
                    <>
                      <XCircle className="w-4 h-4 text-rose-500" />
                      <span>إجابة غير دقيقة. الإجابة الصحيحة هي: {currentQ.correctAnswer}</span>
                    </>
                  )}
                </div>
                <p className="text-xs leading-relaxed opacity-95">
                  <strong>الشرح الرياضي المفصل:</strong> {currentQ.explanation}
                </p>
              </div>
            )}

            {/* Stepper Navigation Buttons */}
            <div className="flex items-center justify-between pt-4 border-t border-black/5 dark:border-white/5">
              <button
                disabled={currentQuestionIndex === 0}
                onClick={() => setCurrentQuestionIndex((prev) => prev - 1)}
                className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                  currentQuestionIndex === 0
                    ? 'opacity-40 cursor-not-allowed'
                    : `hover:bg-black/5 dark:hover:bg-white/5 ${themeClasses.textPrimary}`
                }`}
              >
                <ChevronRight className="w-4 h-4" />
                <span>السابق</span>
              </button>

              {currentQuestionIndex < totalQuestions - 1 ? (
                <button
                  onClick={() => setCurrentQuestionIndex((prev) => prev + 1)}
                  className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs font-bold bg-indigo-600 text-white hover:bg-indigo-700 shadow-sm transition-all"
                >
                  <span>السؤال التالي</span>
                  <ChevronLeft className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={handleFinishQuiz}
                  className="flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm transition-all"
                >
                  <Award className="w-4 h-4" />
                  <span>عرض النتيجة النهائية والتحليل</span>
                </button>
              )}
            </div>
          </div>
        </div>
      ) : (
        /* ================= QUIZ COMPLETED VIEW ================= */
        <div className="space-y-8 animate-fadeIn">
          {/* Result Card */}
          <div
            className={`p-8 sm:p-12 rounded-3xl border ${themeClasses.border} ${themeClasses.cardBg} text-center space-y-6 shadow-sm`}
          >
            <div className="w-20 h-20 mx-auto rounded-3xl bg-indigo-500/10 flex items-center justify-center text-4xl">
              🏆
            </div>

            <div className="space-y-2">
              <span className={`text-sm font-bold ${verdict.color}`}>
                {verdict.label}
              </span>
              <h2 className={`text-3xl sm:text-4xl font-extrabold ${themeClasses.textPrimary}`}>
                حصلت على {score} من {totalQuestions}
              </h2>
              <p className={`text-base font-bold text-indigo-600 dark:text-indigo-400 font-mono`}>
                النسبة المئوية للإتقان التوافقي: {percentage}%
              </p>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <button
                onClick={handleRestartQuiz}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-indigo-600 text-white hover:bg-indigo-700 shadow-sm transition-all"
              >
                <RotateCcw className="w-4 h-4" />
                <span>إعادة الاختبار من البداية</span>
              </button>

              <button
                onClick={() => setShowCertificate(true)}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold border border-indigo-500/30 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-500/10 transition-all"
              >
                <Award className="w-4 h-4" />
                <span>استخراج شهادة الإتقان التوافقي</span>
              </button>
            </div>
          </div>

          {/* Detailed Question Review */}
          <div className="space-y-4">
            <h3 className={`text-lg font-bold ${themeClasses.textPrimary}`}>
              مراجعة وتدقيق الإجابات التفصيلية (10 أسئلة):
            </h3>

            <div className="space-y-3">
              {quizConfig.questions.map((q, idx) => {
                const userAns = selectedAnswers[q.id];
                const isCorrect = userAns === q.correctAnswer;

                return (
                  <div
                    key={q.id}
                    className={`p-5 rounded-2xl border ${themeClasses.border} ${themeClasses.cardBg} space-y-2.5 text-right`}
                  >
                    <div className="flex items-center justify-between text-xs font-bold">
                      <span className={themeClasses.textSecondary}>سؤال {idx + 1}</span>
                      {isCorrect ? (
                        <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400">
                          <CheckCircle2 className="w-4 h-4" />
                          إجابة صحيحة
                        </span>
                      ) : (
                        <span className="flex items-center gap-1 text-rose-600 dark:text-rose-400">
                          <XCircle className="w-4 h-4" />
                          إجابة خاطئة
                        </span>
                      )}
                    </div>

                    <p className={`text-sm font-bold ${themeClasses.textPrimary}`}>
                      {q.question}
                    </p>

                    <div className="text-xs space-y-1 pt-1 border-t border-black/5 dark:border-white/5">
                      <p className={isCorrect ? 'text-emerald-600 dark:text-emerald-400 font-semibold' : 'text-rose-600 dark:text-rose-400 font-semibold'}>
                        إجابتك: {userAns || 'لم يتم تحديد إجابة'}
                      </p>
                      {!isCorrect && (
                        <p className="text-emerald-600 dark:text-emerald-400 font-semibold">
                          الإجابة النموذجية: {q.correctAnswer}
                        </p>
                      )}
                      <p className={`text-[11px] ${themeClasses.textSecondary} pt-1 leading-relaxed`}>
                        <strong>الشرح:</strong> {q.explanation}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Certificate Modal */}
      {showCertificate && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div
            className={`w-full max-w-lg rounded-3xl border ${themeClasses.border} ${themeClasses.cardBg} p-6 sm:p-8 space-y-6 text-center shadow-2xl relative`}
          >
            <div className="w-16 h-16 mx-auto rounded-2xl bg-indigo-500/10 flex items-center justify-center text-3xl">
              🎓
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                شهادة إتمام واجتياز رسمي
              </span>
              <h3 className={`text-xl sm:text-2xl font-extrabold ${themeClasses.textPrimary}`}>
                شهادة إتقان {quizConfig.title}
              </h3>
              <p className={`text-xs ${themeClasses.textSecondary}`}>
                تمنح هذه الشهادة تقديراً لإتمام اختبار مهارات التباديل والتوافيق بنجاح بمعدل {percentage}%.
              </p>
            </div>

            <div className="space-y-2 text-right">
              <label className={`text-xs font-bold ${themeClasses.textSecondary}`}>
                اسم الطالب / الباحث:
              </label>
              <input
                type="text"
                placeholder="أدخل اسمك الكريم هنا..."
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                className={`w-full p-3 rounded-xl border ${themeClasses.border} bg-black/[0.02] dark:bg-white/[0.02] text-sm font-bold ${themeClasses.textPrimary} focus:outline-none focus:border-indigo-500`}
              />
            </div>

            {studentName.trim() && (
              <div className="p-4 rounded-2xl border border-indigo-500/30 bg-indigo-500/5 text-center space-y-1 text-xs">
                <span className="text-neutral-500">يشهد القائمون على المنصة بأن الطالب المتميز:</span>
                <p className="text-base font-extrabold text-indigo-700 dark:text-indigo-300">
                  {studentName}
                </p>
                <span className="text-neutral-500">
                  قد اجتاز بنجاح اختبار {quizConfig.title} بنتيجة {score} من {totalQuestions} ({percentage}%).
                </span>
              </div>
            )}

            <div className="flex items-center justify-center gap-3 pt-2">
              <button
                onClick={() => window.print()}
                className="px-5 py-2.5 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm transition-all"
              >
                طباعة الشهادة الرسمية
              </button>
              <button
                onClick={() => setShowCertificate(false)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold border ${themeClasses.border} hover:bg-black/5 dark:hover:bg-white/5 ${themeClasses.textPrimary}`}
              >
                إغلاق
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Comprehensive Academic Article Under The Quiz */}
      <article
        className={`mt-12 p-6 sm:p-10 rounded-3xl border ${themeClasses.border} ${themeClasses.cardBg} shadow-sm space-y-6 text-right leading-relaxed`}
      >
        <div className="border-b border-black/5 dark:border-white/5 pb-4">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 dark:text-indigo-400 mb-2">
            <BookOpen className="w-4 h-4" />
            <span>المرجع الأكاديمي التخصصي المعتمد ({quizConfig.article.readingTimeMinutes} دقائق قراءة · {quizConfig.article.wordCount} كلمة)</span>
          </div>
          <h2 className={`text-xl sm:text-2xl font-extrabold ${themeClasses.textPrimary}`}>
            {quizConfig.article.title}
          </h2>
          <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} mt-2 leading-relaxed`}>
            {quizConfig.article.intro}
          </p>
        </div>

        <div className="space-y-5">
          {quizConfig.article.sections.map((section, sIdx) => (
            <section key={sIdx} className="space-y-2">
              <h3 className={`text-sm sm:text-base font-bold ${themeClasses.textPrimary}`}>
                {section.title}
              </h3>
              <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
                {section.content}
              </p>
            </section>
          ))}
        </div>

        <div className={`p-4 rounded-2xl border ${themeClasses.border} bg-black/[0.01] dark:bg-white/[0.01] flex items-start gap-2.5`}>
          <Award className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
          <p className={`text-xs ${themeClasses.textSecondary} leading-relaxed`}>
            <strong className={themeClasses.textPrimary}>الخلاصة المعرفية:</strong>{' '}
            {quizConfig.article.summary}
          </p>
        </div>
      </article>

      {/* Backlink Box to other 11 combinatorics tests */}
      <PermutationsCombinationsBacklinkBox currentQuizId={quizConfig.id} />
    </div>
  );
};
