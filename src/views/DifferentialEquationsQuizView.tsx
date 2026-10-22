import React, { useState } from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { useEyeTheme } from '../context/ThemeContext';
import { DifferentialEquationsBacklinkBox } from '../components/DifferentialEquationsBacklinkBox';
import { navigateTo } from '../navigation/router';
import {
  DIFFERENTIAL_EQUATIONS_QUIZZES,
  DifferentialEquationsQuizType,
} from '../data/differentialEquationsTestsData';
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

interface DifferentialEquationsQuizViewProps {
  quizType: DifferentialEquationsQuizType;
  onGoHome: () => void;
  onGoDomain: () => void;
  onGoDifferentialEquations: () => void;
}

export const DifferentialEquationsQuizView: React.FC<DifferentialEquationsQuizViewProps> = ({
  quizType,
  onGoHome,
  onGoDomain,
  onGoDifferentialEquations,
}) => {
  const { themeClasses } = useEyeTheme();
  const config =
    DIFFERENTIAL_EQUATIONS_QUIZZES[quizType] ||
    DIFFERENTIAL_EQUATIONS_QUIZZES['classification-order-degree'];

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
        score += 1;
      }
    });
    return score;
  };

  const score = calculateScore();
  const percentage = Math.round((score / config.questions.length) * 100);
  const isPassed = score >= config.passScore;

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedUrl(true);
      setTimeout(() => setCopiedUrl(false), 2000);
    }
  };

  return (
    <div className="space-y-8 pb-16">
      {/* Breadcrumb Navigation */}
      <Breadcrumbs
        items={[
          { label: 'الرئيسية', onClick: onGoHome },
          { label: 'التفاضل والتكامل', onClick: onGoDomain },
          { label: 'المعادلات التفاضلية', onClick: onGoDifferentialEquations },
          { label: config.title, active: true },
        ]}
      />

      {/* Quiz Card */}
      <div
        className={`rounded-2xl border ${themeClasses.border} ${themeClasses.cardBg} p-5 sm:p-8 shadow-sm transition-all`}
      >
        {/* Header information */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-black/5 dark:border-white/5 pb-5">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border border-indigo-500/20 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              {config.categoryTitle} · 10 أسئلة معتمدة
            </div>
            <h1 className={`text-xl sm:text-2xl font-extrabold ${themeClasses.textPrimary}`}>
              {config.title}
            </h1>
            <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} mt-1`}>
              {config.description}
            </p>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-center">
            <div className="text-xs font-mono px-3 py-1.5 rounded-xl border border-indigo-500/20 bg-indigo-500/5 text-indigo-700 dark:text-indigo-300 dir-ltr font-bold">
              {config.mathSymbol}
            </div>
            <button
              onClick={handleShare}
              className={`p-2 rounded-xl border ${themeClasses.border} hover:bg-black/5 dark:hover:bg-white/5 transition-colors text-xs font-medium flex items-center gap-1`}
              title="مشاركة رابط الاختبار"
            >
              {copiedUrl ? <Check className="w-4 h-4 text-emerald-500" /> : <Share2 className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {!isCompleted ? (
          <div className="space-y-6 pt-5">
            {/* Progress Bar & Indicators */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className={`font-semibold ${themeClasses.textPrimary}`}>
                  السؤال {currentIndex + 1} من {config.questions.length}
                </span>
                <span className={`${themeClasses.textSecondary}`}>
                  درجة النجاح المطلوبة: {config.passScore} من {config.questions.length}
                </span>
              </div>

              {/* Progress bar line */}
              <div className="w-full h-2 rounded-full bg-black/5 dark:bg-white/5 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-indigo-500 to-indigo-600 transition-all duration-300 rounded-full"
                  style={{
                    width: `${((currentIndex + 1) / config.questions.length) * 100}%`,
                  }}
                />
              </div>

              {/* Bubbles */}
              <div className="flex flex-wrap items-center gap-1.5 pt-1 justify-center sm:justify-start">
                {config.questions.map((q, idx) => {
                  const ans = selectedAnswers[q.id];
                  const isCurrent = idx === currentIndex;
                  let bgStyle = `border ${themeClasses.border} bg-black/5 dark:bg-white/5 text-slate-500`;
                  if (ans !== undefined) {
                    if (ans === q.correctAnswer) {
                      bgStyle = 'bg-emerald-500 text-white border-emerald-600';
                    } else {
                      bgStyle = 'bg-rose-500 text-white border-rose-600';
                    }
                  } else if (isCurrent) {
                    bgStyle = 'border-indigo-500 bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 font-bold ring-2 ring-indigo-500/20';
                  }

                  return (
                    <button
                      key={q.id}
                      onClick={() => {
                        setShowHint(false);
                        setCurrentIndex(idx);
                      }}
                      className={`w-7 h-7 text-xs rounded-lg transition-all flex items-center justify-center font-medium ${bgStyle}`}
                    >
                      {idx + 1}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Question Text Box */}
            <div
              className={`p-5 sm:p-6 rounded-2xl border ${themeClasses.border} bg-black/[0.01] dark:bg-white/[0.01] space-y-3`}
            >
              <div className="flex items-center justify-between text-xs">
                <span
                  className={`px-2.5 py-0.5 rounded-full font-medium ${
                    currentQ.difficulty === 'سهل'
                      ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20'
                      : currentQ.difficulty === 'متوسط'
                      ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20'
                      : 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20'
                  }`}
                >
                  المستوى: {currentQ.difficulty}
                </span>

                <button
                  onClick={() => setShowHint((prev) => !prev)}
                  className={`text-xs flex items-center gap-1 font-medium transition-colors ${
                    showHint
                      ? 'text-amber-600 dark:text-amber-400'
                      : 'text-slate-400 hover:text-amber-500'
                  }`}
                >
                  <Lightbulb className="w-3.5 h-3.5" />
                  {showHint ? 'إخفاء التلميح' : 'تلميح مساعد'}
                </button>
              </div>

              <h2 className={`text-base sm:text-lg font-bold leading-relaxed ${themeClasses.textPrimary}`}>
                {currentQ.question}
              </h2>

              {showHint && (
                <div className="p-3.5 rounded-xl border border-amber-500/30 bg-amber-500/5 text-amber-800 dark:text-amber-300 text-xs sm:text-sm flex items-start gap-2 animate-fadeIn">
                  <Lightbulb className="w-4 h-4 shrink-0 mt-0.5 text-amber-500" />
                  <span>{currentQ.hint}</span>
                </div>
              )}
            </div>

            {/* Options List */}
            <div className="grid grid-cols-1 gap-2.5">
              {currentQ.options.map((opt, i) => {
                const isSelected = selectedAnswer === opt;
                const isCorrect = opt === currentQ.correctAnswer;
                const isAnswered = selectedAnswer !== undefined;

                let optStyle = `border ${themeClasses.border} hover:border-indigo-500/50 hover:bg-black/5 dark:hover:bg-white/5`;
                if (isAnswered) {
                  if (isCorrect) {
                    optStyle = 'border-emerald-500 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 font-bold';
                  } else if (isSelected) {
                    optStyle = 'border-rose-500 bg-rose-500/10 text-rose-700 dark:text-rose-300 line-through';
                  } else {
                    optStyle = 'opacity-50 border-black/5 dark:border-white/5';
                  }
                }

                return (
                  <button
                    key={i}
                    onClick={() => handleSelectOption(opt)}
                    disabled={isAnswered}
                    className={`w-full p-4 rounded-xl text-right text-xs sm:text-sm transition-all flex items-center justify-between group ${optStyle}`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-lg border border-black/10 dark:border-white/10 flex items-center justify-center text-xs font-mono font-bold text-slate-500 group-hover:text-indigo-500">
                        {String.fromCharCode(65 + i)}
                      </span>
                      <span>{opt}</span>
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

            {/* Immediate Explanation on answer */}
            {selectedAnswer !== undefined && (
              <div
                className={`p-4 rounded-2xl border ${
                  selectedAnswer === currentQ.correctAnswer
                    ? 'border-emerald-500/30 bg-emerald-500/5'
                    : 'border-rose-500/30 bg-rose-500/5'
                } space-y-2 animate-fadeIn`}
              >
                <div className="flex items-center gap-2">
                  {selectedAnswer === currentQ.correctAnswer ? (
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold text-xs sm:text-sm flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4" /> إجابة صحيحة وممتازة!
                    </span>
                  ) : (
                    <span className="text-rose-600 dark:text-rose-400 font-bold text-xs sm:text-sm flex items-center gap-1.5">
                      <XCircle className="w-4 h-4" /> إجابة غير دقيقة!
                    </span>
                  )}
                </div>

                <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
                  <strong className="text-indigo-600 dark:text-indigo-400 block mb-1">
                    الشرح التفصيلي للحل:
                  </strong>
                  {currentQ.explanation}
                </p>
              </div>
            )}

            {/* Navigation buttons */}
            <div className="flex items-center justify-between pt-2">
              <button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className={`px-4 py-2 rounded-xl border ${themeClasses.border} text-xs font-semibold flex items-center gap-1.5 transition-colors ${
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
                disabled={selectedAnswer === undefined}
                className={`px-5 py-2.5 rounded-xl font-bold text-xs transition-all flex items-center gap-1.5 shadow-sm ${
                  selectedAnswer === undefined
                    ? 'bg-slate-300 text-slate-500 dark:bg-slate-800 dark:text-slate-600 cursor-not-allowed'
                    : 'bg-indigo-600 hover:bg-indigo-700 text-white'
                }`}
              >
                {currentIndex === config.questions.length - 1 ? 'عرض النتيجة النهائية' : 'السؤال التالي'}
                <ArrowLeft className="w-4 h-4" />
              </button>
            </div>
          </div>
        ) : (
          /* Results Screen */
          <div className="space-y-8 pt-5 text-center">
            {/* Score header */}
            <div className="space-y-3">
              <div
                className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center text-3xl shadow-inner ${
                  isPassed
                    ? 'bg-emerald-500/10 text-emerald-500 border-2 border-emerald-500/30'
                    : 'bg-rose-500/10 text-rose-500 border-2 border-rose-500/30'
                }`}
              >
                {isPassed ? <Award className="w-10 h-10" /> : <XCircle className="w-10 h-10" />}
              </div>

              <h2 className={`text-2xl sm:text-3xl font-extrabold ${themeClasses.textPrimary}`}>
                {isPassed ? 'تهانينا! لقد اجتزت الاختبار بنجاح' : 'تحتاج لمزيد من المراجعة والتدريب'}
              </h2>

              <p className={`text-sm ${themeClasses.textSecondary} max-w-md mx-auto`}>
                {isPassed
                  ? `أحسنت صنعاً! لقد حققت ${score} من أصل ${config.questions.length} أسئلة (${percentage}%). يمكنك الآن إصدار شهادة إتقان المحور.`
                  : `لقد حصلت على ${score} من أصل ${config.questions.length} أسئلة (${percentage}%). درجة النجاح المطلوبة هي ${config.passScore}. راجع المقالة والشروحات أدناه ثم أعد المحاولة.`}
              </p>
            </div>

            {/* Certificate Form / Trigger */}
            {isPassed && (
              <div
                className={`p-5 rounded-2xl border border-indigo-500/20 bg-indigo-500/5 max-w-lg mx-auto text-right space-y-3`}
              >
                <div className="flex items-center gap-2 text-indigo-700 dark:text-indigo-300 font-bold text-sm">
                  <Award className="w-4 h-4" />
                  إصدار شهادة اجتياز معتمدة باسمك:
                </div>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="اكتب اسمك الكامل هنا..."
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                    className={`flex-1 px-3.5 py-2 rounded-xl text-xs sm:text-sm border ${themeClasses.border} bg-white dark:bg-black/20 focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                  />
                  <button
                    onClick={() => {
                      if (studentName.trim()) setShowCertificate(true);
                    }}
                    disabled={!studentName.trim()}
                    className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white text-xs font-bold transition-colors"
                  >
                    عرض الشهادة
                  </button>
                </div>
              </div>
            )}

            {/* Certificate Modal */}
            {showCertificate && (
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
                <div
                  className={`w-full max-w-lg rounded-3xl border-4 border-double border-indigo-500/40 ${themeClasses.cardBg} p-6 sm:p-8 shadow-2xl space-y-6 text-center animate-fadeIn relative`}
                >
                  <button
                    onClick={() => setShowCertificate(false)}
                    className="absolute top-4 left-4 p-1 rounded-full hover:bg-black/5 dark:hover:bg-white/5"
                  >
                    <XCircle className="w-6 h-6 text-slate-400" />
                  </button>

                  <div className="space-y-1">
                    <span className="text-3xl"></span>
                    <h3 className="text-xl font-extrabold text-indigo-700 dark:text-indigo-300">
                      شهادة اجتياز وإتقان أكاديمية
                    </h3>
                    <p className="text-xs text-slate-400">بوابة كويزات وألغاز الرياضيات</p>
                  </div>

                  <div className="py-4 border-y border-black/10 dark:border-white/10 space-y-2">
                    <p className="text-xs text-slate-500">يشهد هذا الموقع بأن الطالب/ـة المتميز/ة:</p>
                    <h4 className="text-2xl font-black text-indigo-600 dark:text-indigo-400">
                      {studentName}
                    </h4>
                    <p className="text-xs text-slate-500">
                      قد اجتاز بنجاح وتفوق اختبار:
                    </p>
                    <p className="text-sm font-bold text-slate-800 dark:text-slate-200">
                      {config.title}
                    </p>
                    <div className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 font-mono text-xs font-bold mt-2">
                      النتيجة: {score} من {config.questions.length} ({percentage}%)
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
                    <span>التاريخ: {new Date().toLocaleDateString('ar-EG')}</span>
                    <span className="font-semibold text-indigo-500">منظومة التقييم الذاتي للرياضيات</span>
                  </div>
                </div>
              </div>
            )}

            {/* Review answers breakdown */}
            <div className="text-right space-y-3 pt-4">
              <h3 className={`text-base font-bold ${themeClasses.textPrimary}`}>
                مراجعة إجاباتك بالتفصيل:
              </h3>
              <div className="space-y-3">
                {config.questions.map((q, idx) => {
                  const studentAns = selectedAnswers[q.id];
                  const isCorrect = studentAns === q.correctAnswer;

                  return (
                    <div
                      key={q.id}
                      className={`p-4 rounded-xl border ${
                        isCorrect
                          ? 'border-emerald-500/20 bg-emerald-500/5'
                          : 'border-rose-500/20 bg-rose-500/5'
                      } space-y-2`}
                    >
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-bold text-slate-500">سؤال {idx + 1}</span>
                        {isCorrect ? (
                          <span className="text-emerald-600 text-xs font-semibold flex items-center gap-1">
                            <CheckCircle2 className="w-3.5 h-3.5" /> صحيحة
                          </span>
                        ) : (
                          <span className="text-rose-600 text-xs font-semibold flex items-center gap-1">
                            <XCircle className="w-3.5 h-3.5" /> خاطئة
                          </span>
                        )}
                      </div>
                      <p className={`text-xs sm:text-sm font-bold ${themeClasses.textPrimary}`}>
                        {q.question}
                      </p>
                      <div className="text-xs space-y-1 pt-1">
                        <div>
                          <span className="text-slate-400">إجابتك: </span>
                          <span className={isCorrect ? 'text-emerald-600 font-bold' : 'text-rose-600 font-bold'}>
                            {studentAns || 'لم تتم الإجابة'}
                          </span>
                        </div>
                        {!isCorrect && (
                          <div>
                            <span className="text-slate-400">الإجابة النموذجية: </span>
                            <span className="text-emerald-600 font-bold">{q.correctAnswer}</span>
                          </div>
                        )}
                      </div>
                      <p className={`text-[11px] ${themeClasses.textSecondary} pt-1 border-t border-black/5 dark:border-white/5 mt-2`}>
                        <strong className="text-indigo-600 dark:text-indigo-400">الشرح: </strong>
                        {q.explanation}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
              <button
                onClick={handleReset}
                className="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold flex items-center gap-2 transition-colors shadow-sm"
              >
                <RotateCcw className="w-4 h-4" />
                إعادة المحاولة
              </button>

              <button
                onClick={onGoDifferentialEquations}
                className={`px-6 py-2.5 rounded-xl border ${themeClasses.border} hover:bg-black/5 dark:hover:bg-white/5 text-sm font-bold flex items-center gap-2 transition-colors`}
              >
                <BookOpen className="w-4 h-4" />
                العودة لقسم المعادلات التفاضلية
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Comprehensive Academic Article (>350 words unique per quiz) */}
      <section
        className={`rounded-2xl border ${themeClasses.border} ${themeClasses.cardBg} p-6 sm:p-8 shadow-sm transition-all text-right space-y-6`}
      >
        <div className="border-b border-black/5 dark:border-white/5 pb-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border border-indigo-500/20 mb-2">
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

        <div
          className={`p-4 rounded-xl border ${themeClasses.border} bg-indigo-500/5 text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}
        >
          <strong className="text-indigo-700 dark:text-indigo-300 block mb-1">
            خلاصة المحور:
          </strong>
          {config.article.summary}
        </div>
      </section>

      {/* Connected Tests Backlink Box */}
      <DifferentialEquationsBacklinkBox
        currentTestId={config.id}
        onSelectTest={(testId) => {
          navigateTo(`/domain/calculus/differential-equations/${testId}`);
        }}
      />
    </div>
  );
};
