import React, { useState } from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { useEyeTheme } from '../context/ThemeContext';
import { GeometricTransformationsBacklinkBox } from '../components/GeometricTransformationsBacklinkBox';
import {
  GEOMETRIC_TRANSFORMATIONS_QUIZZES,
  GeometricTransformationsQuizType,
} from '../data/geometricTransformationsTestsData';
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

interface GeometricTransformationsQuizViewProps {
  quizType: GeometricTransformationsQuizType;
  onGoHome: () => void;
  onGoDomain: () => void;
  onGoGeometricTransformations: () => void;
}

export const GeometricTransformationsQuizView: React.FC<
  GeometricTransformationsQuizViewProps
> = ({
  quizType,
  onGoHome,
  onGoDomain,
  onGoGeometricTransformations,
}) => {
  const { themeClasses } = useEyeTheme();
  const config =
    GEOMETRIC_TRANSFORMATIONS_QUIZZES[quizType] ||
    GEOMETRIC_TRANSFORMATIONS_QUIZZES['rigid-transformations-isometries'];

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
    setCurrentIndex(0);
    setSelectedAnswers({});
    setIsCompleted(false);
    setShowHint(false);
    setShowCertificate(false);
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedUrl(true);
    setTimeout(() => setCopiedUrl(false), 2500);
  };

  // Score calculation
  const correctCount = config.questions.reduce((acc, q) => {
    return selectedAnswers[q.id] === q.correctAnswer ? acc + 1 : acc;
  }, 0);
  const percentage = Math.round((correctCount / config.questions.length) * 100);

  const getScoreMessage = () => {
    if (percentage === 100) return 'درجة كاملة مذهلة! عبقري في التحويلات الهندسية ';
    if (percentage >= 80) return 'أداء متميز واستيعاب هندسي رائع! ';
    if (percentage >= 60) return 'مستوى جيد جداً، راجع المسائل غير الصحيحة للوصول للدرجة التامة! ';
    return 'محاولة جيدة، راجع المقال التعليمي بالأسفل وأعد الاختبار لتعزيز مهاراتك! ';
  };

  return (
    <div className="space-y-8 pb-16 text-right">
      {/* Breadcrumb Navigation */}
      <Breadcrumbs
        items={[
          { label: 'الرئيسية', onClick: onGoHome },
          { label: 'الهندسة وحساب المثلثات', onClick: onGoDomain },
          { label: 'التحويلات الهندسية', onClick: onGoGeometricTransformations },
          { label: config.title, active: true },
        ]}
      />

      {/* Quiz Header Banner */}
      <header className={`p-6 sm:p-8 rounded-2xl border ${themeClasses.border} ${themeClasses.cardBg} shadow-2xs space-y-4`}>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-3xl sm:text-4xl p-2.5 rounded-xl bg-sky-500/10 text-sky-600 dark:text-sky-400">
              {config.emoji}
            </span>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-sky-600 dark:text-sky-400">
                  اختبار تفاعلي معتمد
                </span>
                <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300">
                  {config.level}
                </span>
                <span className="text-[11px] text-gray-500 font-medium">
                  ⏱️ {config.duration}
                </span>
              </div>
              <h1 className={`text-xl sm:text-2xl font-extrabold ${themeClasses.textPrimary} mt-1`}>
                {config.title}
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-2 self-end sm:self-auto">
            <button
              onClick={handleShare}
              className={`p-2.5 rounded-xl border ${themeClasses.border} hover:bg-black/5 dark:hover:bg-white/5 transition-colors text-xs font-semibold flex items-center gap-1.5 cursor-pointer`}
              title="مشاركة رابط الاختبار"
            >
              {copiedUrl ? (
                <>
                  <Check className="w-4 h-4 text-emerald-500" />
                  <span className="text-emerald-600 dark:text-emerald-400">تم النسخ!</span>
                </>
              ) : (
                <>
                  <Share2 className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                  <span>مشاركة</span>
                </>
              )}
            </button>
            <button
              onClick={handleReset}
              className={`p-2.5 rounded-xl border ${themeClasses.border} hover:bg-black/5 dark:hover:bg-white/5 transition-colors text-xs font-semibold flex items-center gap-1.5 cursor-pointer`}
              title="إعادة بدء الاختبار"
            >
              <RotateCcw className="w-4 h-4 text-sky-600 dark:text-sky-400" />
              <span>إعادة</span>
            </button>
          </div>
        </div>

        <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
          {config.overview}
        </p>

        {/* Progress Bar & Indicators */}
        <div className="pt-2 space-y-2">
          <div className="flex items-center justify-between text-xs font-bold">
            <span className={themeClasses.textPrimary}>
              السؤال {currentIndex + 1} من {config.questions.length}
            </span>
            <span className="text-sky-600 dark:text-sky-400 font-mono">
              {Math.round(((currentIndex + (selectedAnswer !== undefined ? 1 : 0)) / config.questions.length) * 100)}%
            </span>
          </div>

          <div className="w-full h-2 rounded-full bg-black/5 dark:bg-white/5 overflow-hidden">
            <div
              className="h-full bg-gradient-to-l from-sky-500 to-emerald-500 transition-all duration-300 rounded-full"
              style={{
                width: `${((currentIndex + (selectedAnswer !== undefined ? 1 : 0)) / config.questions.length) * 100}%`,
              }}
            />
          </div>

          <div className="flex items-center justify-between pt-1 gap-1">
            {config.questions.map((q, idx) => {
              const ans = selectedAnswers[q.id];
              let dotClass = 'bg-black/10 dark:bg-white/10';
              if (ans !== undefined) {
                dotClass = ans === q.correctAnswer ? 'bg-emerald-500 text-white' : 'bg-rose-500 text-white';
              } else if (idx === currentIndex) {
                dotClass = 'bg-sky-500 ring-2 ring-sky-300 dark:ring-sky-700';
              }
              return (
                <button
                  key={q.id}
                  onClick={() => {
                    setCurrentIndex(idx);
                    setShowHint(false);
                  }}
                  className={`flex-1 h-2 rounded-sm transition-all duration-150 cursor-pointer ${dotClass}`}
                  title={`الانتقال للسؤال ${idx + 1}`}
                />
              );
            })}
          </div>
        </div>
      </header>

      {/* Main Quiz Interaction Card */}
      {!isCompleted ? (
        <div className={`p-6 sm:p-8 rounded-2xl border ${themeClasses.border} ${themeClasses.cardBg} shadow-2xs space-y-6`}>
          {/* Question Text & Badges */}
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs">
              <span className="px-2.5 py-0.5 rounded-full font-bold bg-sky-100 text-sky-800 dark:bg-sky-950/60 dark:text-sky-300">
                سؤال #{currentIndex + 1} ({currentQ.difficulty})
              </span>
              <button
                onClick={() => setShowHint((prev) => !prev)}
                className="flex items-center gap-1 text-amber-600 dark:text-amber-400 hover:underline cursor-pointer font-medium"
              >
                <Lightbulb className="w-3.5 h-3.5" />
                <span>{showHint ? 'إخفاء التلميح' : 'عرض تلميح مساعد'}</span>
              </button>
            </div>

            <h2 className={`text-base sm:text-lg font-bold leading-relaxed ${themeClasses.textPrimary}`}>
              {currentQ.text}
            </h2>

            {showHint && (
              <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-900 dark:text-amber-200 text-xs sm:text-sm leading-relaxed flex items-start gap-2">
                <Lightbulb className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>{currentQ.hint}</span>
              </div>
            )}
          </div>

          {/* Options Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {currentQ.options.map((option, idx) => {
              const isSelected = selectedAnswer === idx;
              const isCorrect = idx === currentQ.correctAnswer;
              const showResult = selectedAnswer !== undefined;

              let btnStyle = `border ${themeClasses.border} hover:border-sky-500/50 hover:bg-sky-500/[0.03] text-right`;

              if (showResult) {
                if (isCorrect) {
                  btnStyle = 'border-emerald-500 bg-emerald-500/10 text-emerald-900 dark:text-emerald-100 font-bold';
                } else if (isSelected) {
                  btnStyle = 'border-rose-500 bg-rose-500/10 text-rose-900 dark:text-rose-100 font-bold';
                } else {
                  btnStyle = 'opacity-50 border-gray-200 dark:border-gray-800';
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(idx)}
                  disabled={selectedAnswer !== undefined}
                  className={`p-4 rounded-xl text-xs sm:text-sm transition-all duration-150 flex items-center justify-between gap-3 cursor-pointer ${btnStyle}`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="w-6 h-6 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center font-bold text-xs shrink-0">
                      {['أ', 'ب', 'ج', 'د'][idx]}
                    </span>
                    <span className="leading-snug">{option}</span>
                  </div>

                  {showResult && isCorrect && (
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                  )}
                  {showResult && isSelected && !isCorrect && (
                    <XCircle className="w-5 h-5 text-rose-500 shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Explanation Box After Answering */}
          {selectedAnswer !== undefined && (
            <div
              className={`p-4 sm:p-5 rounded-xl text-xs sm:text-sm leading-relaxed border space-y-1.5 ${
                selectedAnswer === currentQ.correctAnswer
                  ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-950 dark:text-emerald-100'
                  : 'bg-rose-500/10 border-rose-500/20 text-rose-950 dark:text-rose-100'
              }`}
            >
              <div className="flex items-center gap-1.5 font-bold">
                {selectedAnswer === currentQ.correctAnswer ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span>إجابة صحيحة وموفقة!</span>
                  </>
                ) : (
                  <>
                    <XCircle className="w-4 h-4 text-rose-600 dark:text-rose-400" />
                    <span>إجابة غير صحيحة، تفحص الخطوات:</span>
                  </>
                )}
              </div>
              <p className="pt-1">{currentQ.explanation}</p>
            </div>
          )}

          {/* Navigation Controls */}
          <div className="flex items-center justify-between pt-4 border-t border-black/[0.04] dark:border-white/[0.04]">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-colors ${
                currentIndex === 0
                  ? 'opacity-40 cursor-not-allowed text-gray-400'
                  : 'hover:bg-black/5 dark:hover:bg-white/5 text-sky-600 dark:text-sky-400 cursor-pointer'
              }`}
            >
              <ArrowRight className="w-4 h-4" />
              <span>السابق</span>
            </button>

            <button
              onClick={handleNext}
              disabled={selectedAnswer === undefined}
              className={`px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer ${
                selectedAnswer === undefined
                  ? 'opacity-40 cursor-not-allowed bg-black/10 dark:bg-white/10 text-gray-400'
                  : 'bg-sky-600 hover:bg-sky-700 dark:bg-sky-500 dark:hover:bg-sky-600 text-white shadow-sm'
              }`}
            >
              <span>{currentIndex === config.questions.length - 1 ? 'إنهاء وعرض النتيجة' : 'السؤال التالي'}</span>
              <ArrowLeft className="w-4 h-4" />
            </button>
          </div>
        </div>
      ) : (
        /* Quiz Completed Screen */
        <div className={`p-6 sm:p-10 rounded-2xl border ${themeClasses.border} ${themeClasses.cardBg} shadow-2xs space-y-8 text-center`}>
          <div className="space-y-3">
            <div className="inline-flex p-4 rounded-full bg-emerald-500/10 text-emerald-500 mb-2">
              <Award className="w-12 h-12 sm:w-16 sm:h-16 animate-bounce" />
            </div>

            <h2 className={`text-2xl sm:text-3xl font-extrabold ${themeClasses.textPrimary}`}>
              اكتمل الاختبار بنجاح!
            </h2>
            <p className={`text-sm sm:text-base ${themeClasses.textSecondary} max-w-lg mx-auto`}>
              {getScoreMessage()}
            </p>
          </div>

          {/* Results Metric Card */}
          <div className="max-w-md mx-auto grid grid-cols-3 gap-3 p-4 rounded-xl border border-black/[0.06] dark:border-white/[0.08] bg-black/[0.01] dark:bg-white/[0.01]">
            <div>
              <span className="block text-xs text-gray-500">الدرجة</span>
              <span className="text-xl sm:text-2xl font-black text-sky-600 dark:text-sky-400 font-mono">
                {correctCount} / {config.questions.length}
              </span>
            </div>
            <div>
              <span className="block text-xs text-gray-500">النسبة</span>
              <span className="text-xl sm:text-2xl font-black text-emerald-600 dark:text-emerald-400 font-mono">
                {percentage}%
              </span>
            </div>
            <div>
              <span className="block text-xs text-gray-500">التقييم</span>
              <span className="text-xl sm:text-2xl font-black text-amber-500">
                {percentage >= 90 ? 'ممتاز' : percentage >= 75 ? 'جيد جداً' : percentage >= 50 ? 'متوسط' : 'يحتاج مراجعة'}
              </span>
            </div>
          </div>

          {/* Certificate Toggle & Print Section */}
          <div className="max-w-md mx-auto space-y-4 pt-2">
            {!showCertificate ? (
              <button
                onClick={() => setShowCertificate(true)}
                className="w-full py-3 px-5 rounded-xl font-bold text-xs sm:text-sm bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                <span>إصدار شهادة إتمام الاختبار بالاسم</span>
              </button>
            ) : (
              <div className="p-6 rounded-2xl border-2 border-amber-500/40 bg-gradient-to-b from-amber-500/5 to-transparent space-y-4 text-right">
                <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-bold text-xs">
                  <Award className="w-4 h-4" />
                  <span>شهادة إتقان في التحويلات الهندسية</span>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold text-gray-600 dark:text-gray-300">
                    أدخل اسمك الكريم للظهور على الشهادة:
                  </label>
                  <input
                    type="text"
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                    placeholder="مثال: أحمد عبد الله"
                    className={`w-full p-2.5 rounded-lg border ${themeClasses.border} ${themeClasses.cardBg} text-sm focus:outline-none focus:ring-2 focus:ring-amber-500`}
                  />
                </div>

                {studentName && (
                  <div className="p-6 rounded-xl border border-amber-500/30 bg-amber-500/[0.02] text-center space-y-3 font-serif">
                    <span className="text-[10px] tracking-widest text-amber-700 dark:text-amber-300 uppercase block font-sans">
                      أكاديمية كويزات الرياضيات • منصة التعلم التفاعلي
                    </span>
                    <h3 className="text-lg font-bold text-amber-900 dark:text-amber-100">
                      شهادة تفوق وإتقان
                    </h3>
                    <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed font-sans">
                      تشهد المنصة بأن الطالب/ة{' '}
                      <span className="font-bold text-sky-600 dark:text-sky-400 text-sm">
                        {studentName}
                      </span>{' '}
                      قد اجتاز بنجاح اختبار{' '}
                      <strong>{config.title}</strong> بنسبة إنجاز{' '}
                      <span className="font-mono font-bold text-emerald-600">{percentage}%</span>.
                    </p>
                    <span className="text-[10px] text-gray-400 block font-mono font-sans">
                      تاريخ الإنجاز: {new Date().toLocaleDateString('ar-EG')}
                    </span>
                  </div>
                )}

                <button
                  onClick={() => window.print()}
                  className="w-full py-2.5 rounded-xl border border-amber-500 text-amber-700 dark:text-amber-300 font-bold text-xs hover:bg-amber-500/10 cursor-pointer transition-colors"
                >
                  طباعة أو حفظ الشهادة كـ PDF
                </button>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4 border-t border-black/[0.04] dark:border-white/[0.04]">
            <button
              onClick={handleReset}
              className="w-full sm:w-auto px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm border border-sky-600 text-sky-600 dark:text-sky-400 hover:bg-sky-500/10 transition-colors cursor-pointer flex items-center justify-center gap-2"
            >
              <RotateCcw className="w-4 h-4" />
              <span>إعادة الاختبار لتحسين الدرجة</span>
            </button>
            <button
              onClick={onGoGeometricTransformations}
              className="w-full sm:w-auto px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-sky-600 hover:bg-sky-700 text-white shadow-sm transition-colors cursor-pointer flex items-center justify-center gap-2"
            >
              <span>استكشاف باقي اختبارات التحويلات الهندسية</span>
              <ArrowLeft className="w-4 h-4" />
            </button>
          </div>

          {/* Detailed Question Review List */}
          <div className="space-y-4 pt-6 text-right">
            <h3 className={`text-base sm:text-lg font-bold ${themeClasses.textPrimary}`}>
              مراجعة الأسئلة والإجابات النموذجية الكاملة:
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
                      <span className="font-bold text-sky-700 dark:text-sky-300">
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
          <div className="flex items-center gap-2 text-xs font-bold text-sky-600 dark:text-sky-400">
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
            <Sparkles className="w-4 h-4 text-sky-500" />
            <span>المقدمة والخلفية الهندسية والتاريخية</span>
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
                <h4 className="text-xs sm:text-sm font-bold text-sky-700 dark:text-sky-300">
                  {concept.title}
                </h4>
                <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
                  {concept.explanation}
                </p>
                {concept.rule && (
                  <div className="p-2.5 rounded-lg bg-sky-500/10 font-mono text-xs sm:text-sm text-sky-800 dark:text-sky-200 dir-ltr text-left">
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
                <div className="text-xs font-bold text-sky-600 dark:text-sky-400">
                  مثال تطبيقي #{idx + 1}
                </div>
                <p className={`text-xs sm:text-sm font-semibold ${themeClasses.textPrimary}`}>
                  {ex.problem}
                </p>
                <div className="p-3 rounded-lg bg-emerald-500/5 border border-emerald-500/20 text-xs sm:text-sm leading-relaxed text-emerald-950 dark:text-emerald-100">
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
        <footer className="p-4 rounded-xl bg-sky-500/10 border border-sky-500/20 text-xs sm:text-sm leading-relaxed text-sky-950 dark:text-sky-100 space-y-1">
          <strong className="block font-bold">خلاصة الدرس:</strong>
          <p>{config.articleContent.summary}</p>
        </footer>
      </article>

      {/* Backlink Box for Internal Linking */}
      <GeometricTransformationsBacklinkBox currentTestId={config.id} />
    </div>
  );
};
