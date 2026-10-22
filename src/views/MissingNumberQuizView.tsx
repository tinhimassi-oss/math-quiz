import React, { useState } from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { useEyeTheme } from '../context/ThemeContext';
import { FractionDisplay } from '../components/FractionDisplay';
import {
  MISSING_QUIZZES,
  MissingQuizType,
} from '../data/missingNumberTestsData';
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

interface MissingNumberQuizViewProps {
  quizType: MissingQuizType;
  onGoHome: () => void;
  onGoDomain: () => void;
  onGoArithmetic: () => void;
  onGoAdditionTests: () => void;
}

export const MissingNumberQuizView: React.FC<MissingNumberQuizViewProps> = ({
  quizType,
  onGoHome,
  onGoDomain,
  onGoArithmetic,
  onGoAdditionTests,
}) => {
  const { themeClasses } = useEyeTheme();
  const config = MISSING_QUIZZES[quizType] || MISSING_QUIZZES['missing-single-digits'];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string | number>>({});
  const [isCompleted, setIsCompleted] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [copiedUrl, setCopiedUrl] = useState(false);

  const currentQ = config.questions[currentIndex];
  const selectedAnswer = selectedAnswers[currentQ.id];

  const handleSelectOption = (value: string | number) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQ.id]: value,
    }));
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
  };

  const handleCopyLink = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopiedUrl(true);
    setTimeout(() => setCopiedUrl(false), 2000);
  };

  const calculateScore = () => {
    let score = 0;
    config.questions.forEach((q) => {
      if (String(selectedAnswers[q.id]) === String(q.correctAnswer)) {
        score += 1;
      }
    });
    return score;
  };

  const score = calculateScore();
  const percentage = Math.round((score / config.questions.length) * 100);

  const getEvaluation = () => {
    if (percentage === 100) {
      return {
        title: 'عبقري الرقم المفقود! نتيجة ممتازة ',
        desc: 'أتقنت جميع مسائل استنتاج الرقم المجهول بدقة وسرعة متناهية.',
        color: 'text-emerald-700 dark:text-emerald-400',
        badge: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300',
      };
    }
    if (percentage >= 70) {
      return {
        title: 'أداء رائع جداً! أحسنت ',
        desc: 'لديك تفكير منطقي وجبري سليم وفهم متين لعلاقة الجمع بالطرح.',
        color: 'text-[#127052] dark:text-[#5EB5A1]',
        badge: 'bg-[#127052]/10 text-[#127052] dark:bg-[#127052]/20 dark:text-[#5EB5A1]',
      };
    }
    if (percentage >= 50) {
      return {
        title: 'محاولة جيدة وبداية موفقة ',
        desc: 'تذكر دائماً أن تطرح العدد المعلوم من الناتج لتعرف الرقم المفقود.',
        color: 'text-amber-700 dark:text-amber-400',
        badge: 'bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300',
      };
    }
    return {
      title: 'فرصة رائعة للتطوير والتعلم ',
      desc: 'راجع التلميحات والدليل الشامل أدناه ثم أعد الاختبار لتحقيق الدرجة الكاملة.',
      color: 'text-slate-700 dark:text-slate-300',
      badge: 'bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-300',
    };
  };

  const evaluation = getEvaluation();

  return (
    <div className="space-y-6 max-w-4xl mx-auto px-4 sm:px-6">
      {/* Breadcrumbs Navigation */}
      <Breadcrumbs
        items={[
          { label: 'الرئيسية', onClick: onGoHome },
          { label: 'الرياضيات الأساسية', onClick: onGoDomain },
          { label: 'الحساب الأساسي', onClick: onGoArithmetic },
          { label: 'اختبارات الجمع', onClick: onGoAdditionTests },
          { label: config.title, active: true },
        ]}
      />

      {/* TOP COMPACT BAR */}
      <section
        className={`p-4 sm:p-5 rounded-2xl border ${themeClasses.border} ${themeClasses.cardBg} shadow-2xs relative`}
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div
              className={`w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-xl bg-gradient-to-l from-[#0D5F45] to-[#127052] text-white border border-[#127052]/30 flex items-center justify-center text-xl shadow-2xs`}
            >
              <span role="img" aria-label={config.title}>{config.emoji}</span>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300 text-xs font-semibold border border-emerald-200 dark:border-emerald-800/40">
                {config.levelBadge}
              </span>
              <span aria-hidden="true" className={themeClasses.textMuted}>·</span>
              <span className={`text-xs ${themeClasses.textMuted}`}>
                10 أسئلة تفاعلية بنظام المجهول (؟)
              </span>
            </div>
          </div>

          {/* Share & Link button */}
          <div className="flex items-center gap-2.5 self-end sm:self-center">
            <button
              onClick={handleCopyLink}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium border ${themeClasses.border} ${themeClasses.cardBg} hover:bg-black/[0.02] dark:hover:bg-white/[0.05] transition-colors flex items-center gap-1.5 ${themeClasses.textSecondary} cursor-pointer`}
              title="نسخ الرابط المباشر للصفحة"
            >
              {copiedUrl ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span className="text-emerald-700 font-medium">تم نسخ الرابط</span>
                </>
              ) : (
                <>
                  <Share2 className="w-4 h-4 opacity-70" />
                  <span>مشاركة الاختبار</span>
                </>
              )}
            </button>
          </div>
        </div>
      </section>

      {/* QUIZ INTERACTIVE CONTAINER */}
      {!isCompleted ? (
        <section
          className={`p-6 sm:p-8 rounded-2xl border ${themeClasses.border} ${themeClasses.cardBg} space-y-6 shadow-2xs`}
        >
          {/* Progress Header */}
          <div className="space-y-3 pb-3 border-b border-black/[0.05] dark:border-white/[0.05]">
            <div className="flex items-center justify-between text-xs sm:text-sm">
              <span className={`font-semibold ${themeClasses.textPrimary}`}>
                السؤال {currentIndex + 1} من {config.questions.length}
              </span>
              <span className={`font-medium ${themeClasses.textMuted} font-sans`}>
                {Math.round(((currentIndex + 1) / config.questions.length) * 100)}%
              </span>
            </div>

            {/* Visual Progress Bar */}
            <div className="w-full h-2.5 rounded-full bg-black/[0.04] dark:bg-white/[0.08] overflow-hidden">
              <div
                className="h-full bg-gradient-to-l from-[#0D5F45] to-[#127052] transition-all duration-300 rounded-full"
                style={{ width: `${((currentIndex + 1) / config.questions.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Question Display Card */}
          <div className="py-6 sm:py-8 flex flex-col items-center justify-center space-y-4">
            <span className={`text-xs font-medium ${themeClasses.textMuted}`}>
              أوجد القيمة الصحيحة للرقم المفقود (؟) لتتحقق المعادلة:
            </span>

            {/* Missing Number Expression rendered RTL */}
            <div
              dir="rtl"
              className="px-6 py-5 rounded-2xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/[0.06] dark:border-white/[0.08] flex items-center justify-center gap-4 sm:gap-6 font-sans select-none"
            >
              {/* First Term */}
              <div className="flex items-center justify-center">
                {config.isFraction ? (
                  <FractionDisplay
                    value={currentQ.firstTerm}
                    size="xl"
                    className={
                      currentQ.firstTerm === '؟'
                        ? 'text-amber-600 dark:text-amber-400 animate-pulse'
                        : themeClasses.textPrimary
                    }
                  />
                ) : (
                  <span
                    className={`text-3xl sm:text-5xl font-bold tracking-tight ${
                      currentQ.firstTerm === '؟'
                        ? 'text-amber-600 dark:text-amber-400 animate-pulse'
                        : themeClasses.textPrimary
                    }`}
                  >
                    {currentQ.firstTerm}
                  </span>
                )}
              </div>

              {/* Addition Operator */}
              <span className="text-2xl sm:text-4xl font-bold text-[#127052] dark:text-[#5EB5A1]">
                +
              </span>

              {/* Second Term */}
              <div className="flex items-center justify-center">
                {config.isFraction ? (
                  <FractionDisplay
                    value={currentQ.secondTerm}
                    size="xl"
                    className={
                      currentQ.secondTerm === '؟'
                        ? 'text-amber-600 dark:text-amber-400 animate-pulse'
                        : themeClasses.textPrimary
                    }
                  />
                ) : (
                  <span
                    className={`text-3xl sm:text-5xl font-bold tracking-tight ${
                      currentQ.secondTerm === '؟'
                        ? 'text-amber-600 dark:text-amber-400 animate-pulse'
                        : themeClasses.textPrimary
                    }`}
                  >
                    {currentQ.secondTerm}
                  </span>
                )}
              </div>

              {/* Equals sign */}
              <span className="text-2xl sm:text-4xl font-bold text-slate-400">
                =
              </span>

              {/* Result Term */}
              <div className="flex items-center justify-center">
                {config.isFraction ? (
                  <FractionDisplay
                    value={currentQ.result}
                    size="xl"
                    className={themeClasses.textPrimary}
                  />
                ) : (
                  <span className={`text-3xl sm:text-5xl font-bold tracking-tight ${themeClasses.textPrimary}`}>
                    {currentQ.result}
                  </span>
                )}
              </div>
            </div>

            <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} text-center`}>
              {currentQ.questionText}
            </p>
          </div>

          {/* Multiple Choice Options */}
          <div className="space-y-3">
            <span className={`text-xs font-medium ${themeClasses.textMuted} block`}>
              اختر الرقم المفقود من بين الخيارات:
            </span>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {currentQ.options.map((optionValue, idx) => {
                const isSelected = String(selectedAnswer) === String(optionValue);
                return (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(optionValue)}
                    className={`py-3.5 sm:py-4 px-4 rounded-xl font-bold font-sans transition-all border flex items-center justify-center cursor-pointer select-none min-h-[68px] ${
                      isSelected
                        ? 'bg-[#127052] text-white border-[#0D5F45] shadow-xs scale-[1.01]'
                        : `${themeClasses.cardBg} ${themeClasses.textPrimary} border-black/[0.08] dark:border-white/[0.1] hover:border-[#127052]/50 hover:bg-black/[0.01] dark:hover:bg-white/[0.03]`
                    }`}
                  >
                    {config.isFraction ? (
                      <FractionDisplay value={optionValue} size="md" />
                    ) : (
                      <span className="text-xl sm:text-2xl font-bold font-sans">{optionValue}</span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Educational Hint Accordion */}
          <div className="pt-2">
            {!showHint ? (
              <button
                onClick={() => setShowHint(true)}
                className={`text-xs flex items-center gap-1.5 ${themeClasses.textMuted} hover:text-[#127052] dark:hover:text-[#5EB5A1] transition-colors cursor-pointer`}
              >
                <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
                <span>هل تحتاج إلى تلميح بسيط لحل السؤال؟</span>
              </button>
            ) : (
              <div className="p-3.5 rounded-xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200/70 dark:border-amber-800/40 text-xs space-y-1">
                <div className="flex items-center gap-1.5 font-semibold text-amber-800 dark:text-amber-300">
                  <Lightbulb className="w-4 h-4 text-amber-600" />
                  <span>تلميح واستراتيجية إيجاد المجهول:</span>
                </div>
                <p className="text-amber-900/90 dark:text-amber-200 leading-relaxed pr-5">
                  {currentQ.hint}
                </p>
              </div>
            )}
          </div>

          {/* Navigation Controls */}
          <div className="pt-4 border-t border-black/[0.05] dark:border-white/[0.05] flex items-center justify-between gap-3">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium border ${themeClasses.border} flex items-center gap-1.5 transition-opacity ${
                currentIndex === 0
                  ? 'opacity-40 cursor-not-allowed'
                  : 'hover:bg-black/[0.03] dark:hover:bg-white/[0.05] cursor-pointer'
              }`}
            >
              <ArrowRight className="w-4 h-4" />
              <span>السابق</span>
            </button>

            <span className={`text-xs ${themeClasses.textMuted}`}>
              {selectedAnswer !== undefined ? 'تم اختيار الإجابة' : 'يرجى اختيار إجابة'}
            </span>

            <button
              onClick={handleNext}
              disabled={selectedAnswer === undefined}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-medium flex items-center gap-1.5 transition-all ${
                selectedAnswer !== undefined
                  ? 'bg-gradient-to-l from-[#0D5F45] to-[#127052] text-white hover:opacity-95 shadow-2xs cursor-pointer'
                  : 'bg-black/[0.06] dark:bg-white/[0.08] text-slate-400 dark:text-slate-500 cursor-not-allowed'
              }`}
            >
              <span>{currentIndex === config.questions.length - 1 ? 'إنهاء وعرض النتيجة' : 'التالي'}</span>
              <ArrowLeft className="w-4 h-4" />
            </button>
          </div>
        </section>
      ) : (
        /* QUIZ SCORE & EVALUATION VIEW */
        <section
          className={`p-6 sm:p-10 rounded-2xl border ${themeClasses.border} ${themeClasses.cardBg} space-y-8 shadow-2xs text-center`}
        >
          {/* Trophy / Result Icon */}
          <div className="flex justify-center">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-emerald-500 to-[#127052] text-white flex items-center justify-center shadow-md animate-bounce">
              <Award className="w-10 h-10" />
            </div>
          </div>

          {/* Score Header */}
          <div className="space-y-3">
            <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${evaluation.badge}`}>
              {evaluation.title}
            </span>
            <h3 className={`text-2xl sm:text-4xl font-bold tracking-tight ${themeClasses.textPrimary}`}>
              أحرزت {score} من أصل {config.questions.length}
            </h3>
            <p className={`text-sm sm:text-base ${themeClasses.textSecondary} max-w-md mx-auto`}>
              {evaluation.desc}
            </p>
          </div>

          {/* Percentage & Progress Circle Display */}
          <div className="max-w-xs mx-auto p-4 rounded-xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/[0.06] dark:border-white/[0.08] space-y-2">
            <div className="flex justify-between text-xs font-semibold">
              <span className={themeClasses.textSecondary}>نسبة النجاح والتحصيل:</span>
              <span className={`font-sans ${evaluation.color}`}>{percentage}%</span>
            </div>
            <div className="w-full h-3 rounded-full bg-black/[0.05] dark:bg-white/[0.1] overflow-hidden">
              <div
                className="h-full bg-gradient-to-l from-[#0D5F45] to-[#127052] rounded-full transition-all duration-700"
                style={{ width: `${percentage}%` }}
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={handleRestart}
              className="px-6 py-2.5 rounded-xl text-sm font-semibold bg-gradient-to-l from-[#0D5F45] to-[#127052] text-white hover:opacity-95 shadow-xs flex items-center gap-2 cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              <span>إعادة الاختبار</span>
            </button>

            <button
              onClick={onGoAdditionTests}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium border ${themeClasses.border} ${themeClasses.cardBg} hover:bg-black/[0.02] dark:hover:bg-white/[0.05] transition-colors cursor-pointer flex items-center gap-1.5`}
            >
              <span>العودة لاختبارات الجمع</span>
            </button>
          </div>

          {/* Detailed Question Review */}
          <div className="pt-8 border-t border-black/[0.05] dark:border-white/[0.05] text-right space-y-4">
            <h4 className={`text-sm font-bold ${themeClasses.textPrimary}`}>
              مراجعة إجابات الأسئلة بالتفصيل:
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {config.questions.map((q) => {
                const userAns = selectedAnswers[q.id];
                const isCorrect = String(userAns) === String(q.correctAnswer);
                return (
                  <div
                    key={q.id}
                    className={`p-3.5 rounded-xl border text-xs space-y-2 text-right ${
                      isCorrect
                        ? 'border-emerald-200 dark:border-emerald-900/40 bg-emerald-50/40 dark:bg-emerald-950/20'
                        : 'border-red-200 dark:border-red-900/40 bg-red-50/40 dark:bg-red-950/20'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="font-bold font-sans flex items-center gap-1.5 py-1">
                        {config.isFraction ? (
                          <>
                            <FractionDisplay value={q.firstTerm} size="sm" />
                            <span className="text-[#127052] dark:text-[#5EB5A1]">+</span>
                            <FractionDisplay value={q.secondTerm} size="sm" />
                            <span>=</span>
                            <FractionDisplay value={q.result} size="sm" />
                          </>
                        ) : (
                          <span>
                            {q.firstTerm} + {q.secondTerm} = {q.result}
                          </span>
                        )}
                      </div>
                      {isCorrect ? (
                        <span className="text-emerald-600 text-xs font-semibold flex items-center gap-1">
                          <CheckCircle2 className="w-4 h-4" />
                          <span>صحيحة</span>
                        </span>
                      ) : (
                        <span className="text-red-500 text-xs font-semibold flex items-center gap-1">
                          <XCircle className="w-4 h-4" />
                          <span>خاطئة</span>
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-4 text-[11px] pt-1">
                      <div className="flex items-center gap-1.5">
                        <span className="text-slate-500">إجابتك: </span>
                        {userAns !== undefined ? (
                          config.isFraction ? (
                            <FractionDisplay value={userAns} size="sm" />
                          ) : (
                            <span className="font-bold font-sans">{userAns}</span>
                          )
                        ) : (
                          <span className="font-bold text-red-500">لم تجب</span>
                        )}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-slate-500">الإجابة الصحيحة: </span>
                        {config.isFraction ? (
                          <FractionDisplay
                            value={q.correctAnswer}
                            size="sm"
                            className="text-emerald-700 dark:text-emerald-400"
                          />
                        ) : (
                          <span className="font-bold font-sans text-emerald-700 dark:text-emerald-400">
                            {q.correctAnswer}
                          </span>
                        )}
                      </div>
                    </div>

                    <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed border-t border-black/[0.04] dark:border-white/[0.04] pt-1.5">
                      {q.explanation}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* =========================================================================
          SEO Article Section: (> 350 حرفاً لكل اختبار)
      ========================================================================= */}
      <article
        className={`p-6 sm:p-10 rounded-2xl border ${themeClasses.border} ${themeClasses.cardBg} space-y-6 shadow-2xs leading-relaxed`}
      >
        {/* H2 Heading for SEO */}
        <div className="space-y-2 pb-4 border-b border-black/[0.05] dark:border-white/[0.05]">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#127052] dark:text-[#5EB5A1]">
            <BookOpen className="w-4 h-4" />
            <span>{config.article.badge}</span>
          </div>

          <h2 className={`text-lg sm:text-2xl font-bold tracking-tight ${themeClasses.textPrimary}`}>
            {config.article.h2}
          </h2>

          <p className={`text-xs ${themeClasses.textMuted}`}>
            {config.article.subtitle}
          </p>
        </div>

        {/* Dynamic Sections */}
        {config.article.sections.map((sec, sIdx) => {
          const IconComponent =
            sec.icon === 'sparkles'
              ? Sparkles
              : sec.icon === 'trend'
              ? TrendingUp
              : Heart;

          return (
            <section key={sIdx} className="space-y-2.5">
              <h3 className={`text-base font-semibold ${themeClasses.textPrimary} flex items-center gap-2`}>
                <IconComponent className="w-4 h-4 text-[#127052] dark:text-[#5EB5A1]" />
                <span>{sec.title}</span>
              </h3>
              <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
                {sec.content}
              </p>

              {sec.subBoxes && (
                <div className="space-y-3 pt-1">
                  {sec.subBoxes.map((box, bIdx) => (
                    <div
                      key={bIdx}
                      className="p-3.5 rounded-xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/[0.05] dark:border-white/[0.05]"
                    >
                      <span className={`font-semibold text-xs ${themeClasses.textPrimary} block mb-1`}>
                        {box.title}
                      </span>
                      <p className={`text-xs ${themeClasses.textSecondary}`}>
                        {box.text}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </section>
          );
        })}
      </article>
    </div>
  );
};
