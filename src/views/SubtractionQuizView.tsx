import React, { useState } from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { useEyeTheme } from '../context/ThemeContext';
import { FractionDisplay } from '../components/FractionDisplay';
import { SubtractionBacklinkBox } from '../components/SubtractionBacklinkBox';
import {
  SUBTRACTION_QUIZZES,
  SubtractionQuizType,
} from '../data/subtractionTestsData';
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

interface SubtractionQuizViewProps {
  quizType: SubtractionQuizType;
  onGoHome: () => void;
  onGoDomain: () => void;
  onGoArithmetic: () => void;
  onGoSubtractionTests: () => void;
}

export const SubtractionQuizView: React.FC<SubtractionQuizViewProps> = ({
  quizType,
  onGoHome,
  onGoDomain,
  onGoArithmetic,
  onGoSubtractionTests,
}) => {
  const { themeClasses } = useEyeTheme();
  const config = SUBTRACTION_QUIZZES[quizType] || SUBTRACTION_QUIZZES['single-digit-subtraction'];

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
  const totalQuestions = config.questions.length;
  const percentage = Math.round((score / totalQuestions) * 100);

  const getAssessment = (pct: number) => {
    if (pct === 100) {
      return {
        title: 'عبقري الطرح والحساب الذهني! 🌟',
        desc: 'أداء أسطوري لا تشوبه شائبة. لقد أتقنت جميع استراتيجيات هذا الاختبار بكل مهارة وسرعة بديهة.',
        color: 'text-emerald-700 dark:text-emerald-400',
      };
    }
    if (pct >= 80) {
      return {
        title: 'ممتاز جداً! نتائج مشرفة 👏',
        desc: 'مستوى رائع في الطرح والتركيز الذهني. بمراجعة الأسئلة القليلة المتبقية ستصل للعلامة الكاملة.',
        color: 'text-teal-700 dark:text-teal-400',
      };
    }
    if (pct >= 60) {
      return {
        title: 'محاولة طيبة ومستوى متقدم 👍',
        desc: 'لديك فهم جيد لقواعد الطرح، ولكنك تحتاج لمزيد من الممارسة والتركيز في الاستلاف وعكس العمليات.',
        color: 'text-amber-700 dark:text-amber-400',
      };
    }
    return {
      title: 'بداية مشجعة! الخطأ هو طريق التعلم 💪',
      desc: 'الطرح يحتاج تدريباً مستمراً. راجع التفسيرات والتلميحات التعليمية أدناه ثم أعد خوض التحدي لتحقق نتيجة أعلى.',
      color: 'text-rose-700 dark:text-rose-400',
    };
  };

  const assessment = getAssessment(percentage);
  const progressPercent = Math.round(((currentIndex + 1) / totalQuestions) * 100);

  return (
    <div className="space-y-6 sm:space-y-8 pb-16">
      {/* 1. Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'الرئيسية', onClick: onGoHome },
          { label: 'الرياضيات الأساسية', onClick: onGoDomain },
          { label: 'الحساب الأساسي', onClick: onGoArithmetic },
          { label: 'اختبارات الطرح', onClick: onGoSubtractionTests },
          { label: config.shortTitle, active: true },
        ]}
      />

      {/* 2. Header Introduction Banner */}
      <section
        className={`p-6 sm:p-8 rounded-2xl border ${themeClasses.border} ${themeClasses.cardBg} space-y-4 shadow-2xs`}
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-2xl sm:text-3xl p-2 rounded-xl bg-black/[0.03] dark:bg-white/[0.03]">
                {config.emoji}
              </span>
              <div>
                <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[#127052]/10 text-[#127052] dark:text-[#5EB5A1]">
                  {config.levelBadge}
                </span>
                <span className={`text-xs ${themeClasses.textMuted} mr-2`}>
                  المدة التقريبية: {config.duration}
                </span>
              </div>
            </div>

            <h1 className={`text-xl sm:text-2xl font-bold tracking-tight ${themeClasses.textPrimary}`}>
              {config.title}
            </h1>

            <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} max-w-2xl leading-relaxed`}>
              {config.shortDesc}
            </p>
          </div>

          {/* Quick Info & Share */}
          <div className="flex sm:flex-col items-center sm:items-end justify-between gap-3 shrink-0">
            <div className={`px-4 py-2 rounded-xl border ${themeClasses.border} ${themeClasses.pillBg} text-center`}>
              <span className={`text-[10px] block ${themeClasses.textMuted}`}>الرمز والنمط</span>
              <span className="text-base sm:text-lg font-bold font-sans text-[#127052] dark:text-[#5EB5A1]">
                {config.mathSymbol}
              </span>
            </div>

            <button
              onClick={handleCopyLink}
              className={`px-3 py-1.5 rounded-lg border ${themeClasses.border} ${themeClasses.cardHoverBg} text-xs ${themeClasses.textSecondary} flex items-center gap-1.5 transition-colors cursor-pointer`}
              title="نسخ رابط الاختبار للمشاركة"
            >
              {copiedUrl ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700 font-medium">تم نسخ الرابط</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5 opacity-70" />
                  <span>مشاركة الاختبار</span>
                </>
              )}
            </button>
          </div>
        </div>
      </section>

      {/* 3. Interactive Quiz Container */}
      {!isCompleted ? (
        <section
          className={`p-6 sm:p-8 rounded-2xl border ${themeClasses.border} ${themeClasses.cardBg} space-y-6 shadow-2xs`}
        >
          {/* Progress Header */}
          <div className="space-y-3 pb-3 border-b border-black/[0.05] dark:border-white/[0.05]">
            <div className="flex items-center justify-between text-xs sm:text-sm">
              <div className="flex items-center gap-2">
                <span className="font-bold text-[#127052] dark:text-[#5EB5A1]">
                  السؤال {currentIndex + 1} من {totalQuestions}
                </span>
                <span aria-hidden="true" className={themeClasses.textMuted}>·</span>
                <span className={themeClasses.textMuted}>
                  {progressPercent}% مكتمل
                </span>
              </div>

              {/* Hint Toggle */}
              <button
                onClick={() => setShowHint(!showHint)}
                className="flex items-center gap-1.5 text-xs font-medium text-amber-700 dark:text-amber-400 hover:underline cursor-pointer"
              >
                <Lightbulb className="w-4 h-4" />
                <span>{showHint ? 'إخفاء التلميح' : 'تلميح بسيط'}</span>
              </button>
            </div>

            {/* Visual Progress Bar */}
            <div className={`w-full h-2 rounded-full ${themeClasses.pillBg} overflow-hidden`}>
              <div
                className="h-full bg-gradient-to-l from-[#0D5F45] to-[#127052] rounded-full transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Hint Card if triggered */}
          {showHint && (
            <div className="p-3.5 rounded-xl bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800/40 text-xs text-amber-900 dark:text-amber-200 flex items-start gap-2.5">
              <Lightbulb className="w-4 h-4 shrink-0 text-amber-600 mt-0.5" />
              <div>
                <span className="font-semibold block">تلميح مساعد:</span>
                <span>{currentQ.hint}</span>
              </div>
            </div>
          )}

          {/* Question Display Card */}
          <div className="text-center py-4 space-y-3">
            <h2 className={`text-base sm:text-lg font-medium ${themeClasses.textSecondary}`}>
              {currentQ.questionText}
            </h2>

            {/* RTL MATH OPERATION: strictly Right-to-Left */}
            <div
              dir="rtl"
              className={`inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-black/[0.02] dark:bg-white/[0.03] border ${themeClasses.border} text-3xl sm:text-4xl font-bold font-sans text-[#127052] dark:text-[#5EB5A1] select-none shadow-2xs`}
            >
              {config.isFraction ? (
                /* Fraction Display */
                <>
                  <FractionDisplay
                    value={currentQ.firstTerm}
                    size="xl"
                    isQuestionMark={currentQ.missingPosition === 'first'}
                  />
                  <span className="text-[#127052]/70 dark:text-[#5EB5A1]/70">-</span>
                  <FractionDisplay
                    value={currentQ.secondTerm}
                    size="xl"
                    isQuestionMark={currentQ.missingPosition === 'second'}
                  />
                  <span className="text-[#127052]/70 dark:text-[#5EB5A1]/70">=</span>
                  <FractionDisplay
                    value={currentQ.result}
                    size="xl"
                    isQuestionMark={!currentQ.missingPosition || currentQ.missingPosition === 'result'}
                  />
                </>
              ) : (
                /* Standard or Decimal Digits Display */
                <>
                  {currentQ.missingPosition === 'first' ? (
                    <span className="text-amber-600 dark:text-amber-400">؟</span>
                  ) : (
                    <span>{currentQ.firstTerm}</span>
                  )}

                  <span className="text-[#127052]/70 dark:text-[#5EB5A1]/70">-</span>

                  {currentQ.missingPosition === 'second' ? (
                    <span className="text-amber-600 dark:text-amber-400">؟</span>
                  ) : (
                    <span>{currentQ.secondTerm}</span>
                  )}

                  <span className="text-[#127052]/70 dark:text-[#5EB5A1]/70">=</span>

                  {!currentQ.missingPosition || currentQ.missingPosition === 'result' ? (
                    <span className="text-amber-600 dark:text-amber-400">؟</span>
                  ) : (
                    <span>{currentQ.result}</span>
                  )}
                </>
              )}
            </div>
          </div>

          {/* Rectangular Multiple Choice Options */}
          <div className="space-y-2">
            <span className={`text-xs ${themeClasses.textMuted} block`}>
              اختر الإجابة الصحيحة من الخيارات المستطيلة:
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {currentQ.options.map((option, optIdx) => {
                const letters = ['أ', 'ب', 'ج', 'د'];
                const isSelected = String(selectedAnswer) === String(option);

                return (
                  <button
                    key={optIdx}
                    onClick={() => handleSelectOption(option)}
                    className={`p-4 rounded-xl border text-right transition-all flex items-center justify-between gap-3 cursor-pointer ${
                      isSelected
                        ? 'border-[#127052] bg-[#EAF2EF] dark:bg-[#1C302C] dark:border-[#2E4F49] shadow-2xs scale-[1.01]'
                        : `${themeClasses.border} ${themeClasses.cardBg} ${themeClasses.cardHoverBg}`
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold transition-colors ${
                          isSelected
                            ? 'bg-[#127052] text-white'
                            : `${themeClasses.pillBg} ${themeClasses.textSecondary}`
                        }`}
                      >
                        {letters[optIdx]}
                      </span>

                      {/* Option display: vertical fraction or standard number */}
                      {config.isFraction ? (
                        <FractionDisplay value={option} size="md" />
                      ) : (
                        <span
                          className={`text-lg sm:text-xl font-bold font-sans ${
                            isSelected
                              ? 'text-[#127052] dark:text-[#5EB5A1]'
                              : themeClasses.textPrimary
                          }`}
                        >
                          {option}
                        </span>
                      )}
                    </div>

                    {isSelected && (
                      <div className="w-5 h-5 rounded-full bg-[#127052] text-white flex items-center justify-center shrink-0">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Navigation Controls: Previous / Next / Finish */}
          <div className={`pt-4 border-t ${themeClasses.border} flex items-center justify-between gap-3`}>
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium border ${themeClasses.border} ${themeClasses.cardBg} ${themeClasses.textSecondary} flex items-center gap-1.5 transition-colors ${
                currentIndex === 0
                  ? 'opacity-40 cursor-not-allowed'
                  : 'hover:bg-black/[0.02] dark:hover:bg-white/[0.05] cursor-pointer'
              }`}
            >
              <ArrowRight className="w-4 h-4" />
              <span>السابق</span>
            </button>

            <button
              onClick={handleNext}
              disabled={selectedAnswer === undefined}
              className={`px-6 py-2.5 rounded-xl text-xs sm:text-sm font-medium text-white flex items-center gap-2 transition-all shadow-2xs ${
                selectedAnswer === undefined
                  ? 'bg-slate-300 dark:bg-slate-700 cursor-not-allowed'
                  : 'bg-[#127052] hover:bg-[#0D5F45] cursor-pointer'
              }`}
            >
              <span>{currentIndex === totalQuestions - 1 ? 'إنهاء وعرض النتيجة' : 'السؤال التالي'}</span>
              <ArrowLeft className="w-4 h-4" />
            </button>
          </div>
        </section>
      ) : (
        /* 4. Final Results Screen */
        <section
          className={`p-6 sm:p-10 rounded-2xl border ${themeClasses.border} ${themeClasses.cardBg} space-y-8 shadow-2xs text-center`}
        >
          {/* Result Icon & Score */}
          <div className="space-y-4">
            <div className="w-20 h-20 mx-auto rounded-3xl bg-gradient-to-l from-[#0D5F45] to-[#127052] text-white flex items-center justify-center shadow-md">
              <Award className="w-10 h-10 text-[#F6D860]" />
            </div>

            <div className="space-y-2 max-w-lg mx-auto">
              <div className="inline-block px-4 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 font-bold text-sm border border-emerald-200 dark:border-emerald-800/40 font-sans">
                النتيجة: {score} من {totalQuestions} ({percentage}%)
              </div>

              <h2 className={`text-xl sm:text-2xl font-bold ${assessment.color}`}>
                {assessment.title}
              </h2>

              <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
                {assessment.desc}
              </p>
            </div>
          </div>

          {/* Action to Retake */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={handleRestart}
              className="px-6 py-2.5 rounded-xl text-xs sm:text-sm font-medium text-white bg-[#127052] hover:bg-[#0D5F45] transition-colors shadow-2xs flex items-center gap-2 cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              <span>إعادة الاختبار مرة أخرى</span>
            </button>

            <button
              onClick={handleCopyLink}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium border ${themeClasses.border} ${themeClasses.cardBg} ${themeClasses.textSecondary} hover:${themeClasses.textPrimary} cursor-pointer flex items-center gap-1.5`}
            >
              <Share2 className="w-4 h-4 opacity-70" />
              <span>مشاركة النتيجة</span>
            </button>
          </div>

          {/* Breakdown of Answers */}
          <div className="text-right space-y-4 pt-4 border-t border-black/[0.05] dark:border-white/[0.05]">
            <h3 className={`text-sm sm:text-base font-semibold ${themeClasses.textPrimary}`}>
              مراجعة الإجابات التفصيلية ({totalQuestions} أسئلة):
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {config.questions.map((q) => {
                const userAns = selectedAnswers[q.id];
                const isCorrect = String(userAns) === String(q.correctAnswer);

                return (
                  <div
                    key={q.id}
                    className={`p-4 rounded-xl border text-xs space-y-2 ${
                      isCorrect
                        ? 'border-emerald-200 bg-emerald-50/40 dark:bg-emerald-950/20 dark:border-emerald-900/40'
                        : 'border-rose-200 bg-rose-50/40 dark:bg-rose-950/20 dark:border-rose-900/40'
                    }`}
                  >
                    <div className="flex items-center justify-between font-bold">
                      <span className="text-sm font-sans font-medium text-slate-800 dark:text-slate-200">
                        {q.questionText}
                      </span>
                      {isCorrect ? (
                        <span className="flex items-center gap-1 text-emerald-700 dark:text-emerald-400 font-sans font-semibold">
                          <CheckCircle2 className="w-4 h-4" />
                          <span>صحيحة</span>
                        </span>
                      ) : (
                        <span className="flex items-center gap-1 text-rose-700 dark:text-rose-400 font-sans font-semibold">
                          <XCircle className="w-4 h-4" />
                          <span>خاطئة</span>
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-4 text-[11px] pt-1">
                      <div className="flex items-center gap-1">
                        <span className="text-slate-500">إجابتك: </span>
                        {config.isFraction && userAns !== undefined ? (
                          <FractionDisplay value={userAns} size="xs" />
                        ) : (
                          <span className="font-bold font-sans">
                            {userAns !== undefined ? userAns : 'لم تجب'}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="text-slate-500">الإجابة الصحيحة: </span>
                        {config.isFraction ? (
                          <FractionDisplay value={q.correctAnswer} size="xs" />
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

      {/* 5. Unique SEO Educational Article Section */}
      <article
        className={`p-6 sm:p-10 rounded-2xl border ${themeClasses.border} ${themeClasses.cardBg} space-y-6 shadow-2xs leading-relaxed`}
      >
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

        {config.article.sections.map((sec, sIdx) => {
          const IconComponent =
            sec.icon === 'sparkles'
              ? Sparkles
              : sec.icon === 'trend'
              ? TrendingUp
              : sec.icon === 'heart'
              ? Heart
              : BookOpen;

          return (
            <section key={sIdx} className="space-y-2.5">
              <h3 className={`text-base font-semibold ${themeClasses.textPrimary} flex items-center gap-2`}>
                <IconComponent className="w-4 h-4 text-[#127052] dark:text-[#5EB5A1]" />
                <span>{sec.title}</span>
              </h3>
              <p className={`text-xs sm:text-sm ${themeClasses.textSecondary}`}>
                {sec.content}
              </p>

              {sec.subBoxes && sec.subBoxes.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-2">
                  {sec.subBoxes.map((box, bIdx) => (
                    <div
                      key={bIdx}
                      className={`p-4 rounded-xl border ${themeClasses.border} ${themeClasses.pillBg} space-y-1.5`}
                    >
                      <span className={`font-semibold text-xs sm:text-sm ${themeClasses.textPrimary} block`}>
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

        {/* Educational Golden Tip Card */}
        <div className="p-4 rounded-xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800/30 flex items-center justify-between flex-wrap gap-3 text-xs">
          <div className="flex items-center gap-2 text-emerald-800 dark:text-emerald-300">
            <Heart className="w-4 h-4 shrink-0 text-emerald-600" />
            <span className="font-semibold">{config.article.goldenTip}</span>
          </div>

          <button
            onClick={handleRestart}
            className="text-xs text-[#127052] dark:text-[#5EB5A1] font-bold hover:underline cursor-pointer"
          >
            إعادة خوض الاختبار الآن ←
          </button>
        </div>
      </article>

      {/* 6. Backlink Box to parent category and adjacent subtraction quizzes */}
      <SubtractionBacklinkBox
        currentQuizId={config.id}
        onGoSubtractionTests={onGoSubtractionTests}
      />
    </div>
  );
};
