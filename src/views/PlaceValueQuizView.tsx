import React, { useState } from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { useEyeTheme } from '../context/ThemeContext';
import { PlaceValueBacklinkBox } from '../components/PlaceValueBacklinkBox';
import {
  PLACE_VALUE_QUIZZES,
  PlaceValueQuizType,
} from '../data/placeValueTestsData';
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

interface PlaceValueQuizViewProps {
  quizType: PlaceValueQuizType;
  onGoHome: () => void;
  onGoDomain: () => void;
  onGoPlaceValue: () => void;
}

export const PlaceValueQuizView: React.FC<PlaceValueQuizViewProps> = ({
  quizType,
  onGoHome,
  onGoDomain,
  onGoPlaceValue,
}) => {
  const { themeClasses } = useEyeTheme();
  const config = PLACE_VALUE_QUIZZES[quizType] || PLACE_VALUE_QUIZZES['place-value-within-99'];

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
      window.scrollTo({ top: 0, behavior: 'smooth' });
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
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedUrl(true);
    setTimeout(() => setCopiedUrl(false), 2500);
  };

  const totalQuestions = config.questions.length;
  const correctCount = config.questions.reduce((count, q) => {
    return String(selectedAnswers[q.id]) === String(q.correctAnswer) ? count + 1 : count;
  }, 0);
  const scorePercent = Math.round((correctCount / totalQuestions) * 100);
  const progressPercent = Math.round(((currentIndex + 1) / totalQuestions) * 100);

  return (
    <div className="space-y-8 pb-16">
      {/* 1. Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'الرئيسية', onClick: onGoHome },
          { label: 'الرياضيات الأساسية', onClick: onGoDomain },
          { label: 'القيمة المنزلية', onClick: onGoPlaceValue },
          { label: config.shortTitle, active: true },
        ]}
      />

      {/* 2. Header Banner */}
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
              <span className={`text-[10px] block ${themeClasses.textMuted}`}>الرمز والمعادلة</span>
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

            {/* Visual Display Content (Number, Formula, or Question model) */}
            {currentQ.displayContent && (
              <div
                dir="rtl"
                className={`inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-black/[0.02] dark:bg-white/[0.03] border ${themeClasses.border} text-2xl sm:text-3xl font-bold font-sans text-[#127052] dark:text-[#5EB5A1] select-none shadow-2xs`}
              >
                {currentQ.displayContent}
              </div>
            )}
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

                      <span
                        className={`text-base sm:text-lg font-bold font-sans ${
                          isSelected
                            ? 'text-[#127052] dark:text-[#5EB5A1]'
                            : themeClasses.textPrimary
                        }`}
                      >
                        {option}
                      </span>
                    </div>

                    <div
                      className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${
                        isSelected
                          ? 'border-[#127052] bg-[#127052] text-white'
                          : 'border-slate-300 dark:border-slate-600'
                      }`}
                    >
                      {isSelected && <Check className="w-3 h-3" />}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between pt-4 border-t border-black/[0.05] dark:border-white/[0.05]">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className={`px-4 py-2 rounded-xl text-xs font-medium flex items-center gap-1.5 transition-colors ${
                currentIndex === 0
                  ? 'opacity-40 cursor-not-allowed text-slate-400'
                  : `${themeClasses.textSecondary} hover:bg-black/[0.04] dark:hover:bg-white/[0.04] cursor-pointer`
              }`}
            >
              <ArrowRight className="w-4 h-4" />
              <span>السابق</span>
            </button>

            <button
              onClick={handleNext}
              disabled={selectedAnswer === undefined}
              className={`px-6 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                selectedAnswer === undefined
                  ? 'bg-slate-200 dark:bg-slate-800 text-slate-400 cursor-not-allowed'
                  : 'bg-[#127052] text-white hover:bg-[#0E5B42] shadow-sm cursor-pointer'
              }`}
            >
              <span>{currentIndex === totalQuestions - 1 ? 'إنهاء وعرض النتيجة' : 'السؤال التالي'}</span>
              <ArrowLeft className="w-4 h-4" />
            </button>
          </div>
        </section>
      ) : (
        /* Results View */
        <section
          className={`p-6 sm:p-10 rounded-2xl border ${themeClasses.border} ${themeClasses.cardBg} space-y-8 shadow-2xs text-center`}
        >
          <div className="space-y-3">
            <div className="inline-flex p-4 rounded-2xl bg-emerald-100 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 mb-2">
              <Award className="w-12 h-12" />
            </div>

            <h2 className={`text-2xl sm:text-3xl font-extrabold ${themeClasses.textPrimary}`}>
              {scorePercent >= 90
                ? 'أداء استثنائي رائع! خبير في القيمة المنزلية!'
                : scorePercent >= 70
                ? 'أحسنت! أداء متميز وفهم عميق للمنازل'
                : scorePercent >= 50
                ? 'بداية طيبة، تحتاج إلى مراجعة بعض المنازل'
                : 'واصل التدريب وستتقن القيمة المكانية قريباً!'}
            </h2>

            <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} max-w-md mx-auto`}>
              لقد أتممت {config.title} وحققت {correctCount} إجابات صحيحة من أصل {totalQuestions}.
            </p>
          </div>

          {/* Score Badge */}
          <div className="inline-flex items-center gap-6 px-8 py-4 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/[0.08]">
            <div>
              <span className={`text-[11px] block ${themeClasses.textMuted}`}>الدرجة النهائية</span>
              <span className="text-3xl sm:text-4xl font-extrabold text-[#127052] dark:text-[#5EB5A1]">
                {scorePercent}%
              </span>
            </div>
            <div className="h-10 w-px bg-black/[0.08] dark:bg-white/[0.08]" />
            <div>
              <span className={`text-[11px] block ${themeClasses.textMuted}`}>الأسئلة الصحيحة</span>
              <span className={`text-2xl sm:text-3xl font-bold ${themeClasses.textPrimary}`}>
                {correctCount} / {totalQuestions}
              </span>
            </div>
          </div>

          {/* Review of all 10 Questions */}
          <div className="text-right space-y-4 pt-6 border-t border-black/[0.06] dark:border-white/[0.08]">
            <h3 className={`text-base font-bold ${themeClasses.textPrimary}`}>
              مراجعة الأسئلة والشروحات التفصيلية:
            </h3>

            <div className="space-y-3">
              {config.questions.map((q, idx) => {
                const userAns = selectedAnswers[q.id];
                const isCorrect = String(userAns) === String(q.correctAnswer);

                return (
                  <div
                    key={q.id}
                    className={`p-4 rounded-xl border transition-all text-right ${
                      isCorrect
                        ? 'border-emerald-200 dark:border-emerald-800/40 bg-emerald-50/30 dark:bg-emerald-950/10'
                        : 'border-rose-200 dark:border-rose-800/40 bg-rose-50/30 dark:bg-rose-950/10'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-slate-500">سؤال {idx + 1}:</span>
                          <span className={`text-xs sm:text-sm font-semibold ${themeClasses.textPrimary}`}>
                            {q.questionText}
                          </span>
                        </div>

                        {q.displayContent && (
                          <div className="text-xs font-mono font-bold text-[#127052] dark:text-[#5EB5A1] py-1">
                            {q.displayContent}
                          </div>
                        )}

                        <div className="text-xs space-y-0.5 pt-1 text-slate-600 dark:text-slate-300">
                          <div>
                            إجابتك:{' '}
                            <strong className={isCorrect ? 'text-emerald-700 dark:text-emerald-400' : 'text-rose-700 dark:text-rose-400'}>
                              {userAns !== undefined ? String(userAns) : 'لم تجب'}
                            </strong>
                            {!isCorrect && (
                              <span className="mr-3">
                                الإجابة الصحيحة:{' '}
                                <strong className="text-emerald-700 dark:text-emerald-400">
                                  {String(q.correctAnswer)}
                                </strong>
                              </span>
                            )}
                          </div>
                          <p className={`text-[11px] ${themeClasses.textMuted} pt-1`}>
                            {q.explanation}
                          </p>
                        </div>
                      </div>

                      <div className="shrink-0 pt-0.5">
                        {isCorrect ? (
                          <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                        ) : (
                          <XCircle className="w-5 h-5 text-rose-600 dark:text-rose-400" />
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-6 border-t border-black/[0.05] dark:border-white/[0.05]">
            <button
              onClick={handleReset}
              className="px-6 py-2.5 rounded-xl text-xs font-bold bg-[#127052] text-white hover:bg-[#0E5B42] flex items-center gap-2 transition-all cursor-pointer shadow-sm"
            >
              <RotateCcw className="w-4 h-4" />
              <span>إعادة الاختبار</span>
            </button>

            <button
              onClick={onGoPlaceValue}
              className={`px-5 py-2.5 rounded-xl text-xs font-medium border ${themeClasses.border} ${themeClasses.cardHoverBg} ${themeClasses.textSecondary} flex items-center gap-2 transition-colors cursor-pointer`}
            >
              <span>العودة لكل اختبارات القيمة المنزلية</span>
              <ArrowLeft className="w-4 h-4" />
            </button>
          </div>
        </section>
      )}

      {/* 4. Unique SEO Article Component */}
      <article
        id="quiz-article"
        className={`p-6 sm:p-10 rounded-2xl border ${themeClasses.border} ${themeClasses.cardBg} space-y-6 shadow-2xs leading-relaxed text-right`}
      >
        <header className="space-y-2 pb-4 border-b border-black/[0.05] dark:border-white/[0.05]">
          <div className="flex items-center gap-2 text-xs font-bold text-[#127052] dark:text-[#5EB5A1]">
            <BookOpen className="w-4 h-4" />
            <span>{config.article.badge}</span>
          </div>

          <h2 className={`text-lg sm:text-2xl font-bold tracking-tight ${themeClasses.textPrimary}`}>
            {config.article.h2}
          </h2>

          <p className={`text-xs sm:text-sm ${themeClasses.textSecondary}`}>
            {config.article.subtitle}
          </p>
        </header>

        {/* Dynamic Article Sections */}
        <div className="space-y-6 text-xs sm:text-sm leading-relaxed">
          {config.article.sections.map((section, idx) => {
            const getIcon = () => {
              switch (section.icon) {
                case 'sparkles':
                  return <Sparkles className="w-4 h-4 text-[#127052] dark:text-[#5EB5A1]" />;
                case 'trend':
                  return <TrendingUp className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />;
                case 'heart':
                  return <Heart className="w-4 h-4 text-rose-500" />;
                case 'book':
                default:
                  return <BookOpen className="w-4 h-4 text-sky-600" />;
              }
            };

            return (
              <div key={idx} className="space-y-2">
                <h3 className={`text-sm sm:text-base font-bold flex items-center gap-2 ${themeClasses.textPrimary}`}>
                  {getIcon()}
                  <span>{section.title}</span>
                </h3>

                <p className={`${themeClasses.textSecondary} leading-relaxed`}>
                  {section.content}
                </p>

                {section.subBoxes && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                    {section.subBoxes.map((sub, sIdx) => (
                      <div
                        key={sIdx}
                        className={`p-3 rounded-xl border ${themeClasses.border} bg-black/[0.01] dark:bg-white/[0.01]`}
                      >
                        <div className="font-bold text-xs text-[#127052] dark:text-[#5EB5A1] mb-1">
                          {sub.title}
                        </div>
                        <div className={`text-[11px] ${themeClasses.textMuted} leading-relaxed`}>
                          {sub.text}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Golden Tip Callout */}
        <div className="p-4 rounded-xl border border-amber-300/40 bg-amber-50/50 dark:bg-amber-950/20 text-xs sm:text-sm text-amber-900 dark:text-amber-200 flex items-start gap-3">
          <Lightbulb className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
          <div className="leading-relaxed">
            <strong>{config.article.goldenTip}</strong>
          </div>
        </div>
      </article>

      {/* 5. Smart Interlinking Box */}
      <PlaceValueBacklinkBox
        currentQuizId={config.id}
        onGoPlaceValue={onGoPlaceValue}
      />
    </div>
  );
};
