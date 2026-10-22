import React, { useState } from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { useEyeTheme } from '../context/ThemeContext';
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

interface AdditionWithin50QuizViewProps {
  onGoHome: () => void;
  onGoDomain: () => void;
  onGoArithmetic: () => void;
  onGoAdditionTests: () => void;
}

interface QuestionItem {
  id: number;
  num1: number;
  num2: number;
  question: string;
  options: number[];
  correctAnswer: number;
  hint: string;
  explanation: string;
}

const QUIZ_QUESTIONS: QuestionItem[] = [
  {
    id: 1,
    num1: 15,
    num2: 12,
    question: 'كم حاصل جمع 15 مع 12؟',
    options: [25, 27, 28, 26],
    correctAnswer: 27,
    hint: 'اجمع الآحاد أولاً (5 + 2 = 7)، ثم اجمع العشرات (10 + 10 = 20)',
    explanation: '15 + 12 = (10 + 10) + (5 + 2) = 20 + 7 = 27.',
  },
  {
    id: 2,
    num1: 24,
    num2: 18,
    question: 'كم حاصل جمع 24 مع 18؟',
    options: [40, 42, 44, 41],
    correctAnswer: 42,
    hint: 'استخدم الحمل: 4 + 8 = 12، ضع 2 في الآحاد وأضف 10 إلى العشرات',
    explanation: '24 + 18 = (24 + 6) + 12 = 30 + 12 = 42.',
  },
  {
    id: 3,
    num1: 31,
    num2: 16,
    question: 'كم حاصل جمع 31 مع 16؟',
    options: [46, 47, 48, 45],
    correctAnswer: 47,
    hint: 'اجمع الآحاد: 1 + 6 = 7، واجمع العشرات: 30 + 10 = 40',
    explanation: '31 + 16 = 47.',
  },
  {
    id: 4,
    num1: 19,
    num2: 25,
    question: 'كم حاصل جمع 19 مع 25؟',
    options: [43, 44, 45, 42],
    correctAnswer: 44,
    hint: 'استراتيجية التعويض: اعتبر 19 كأنها 20، ثم اجمع (20 + 25 = 45) واطرح 1',
    explanation: '19 + 25 = (20 + 25) - 1 = 45 - 1 = 44.',
  },
  {
    id: 5,
    num1: 28,
    num2: 14,
    question: 'كم حاصل جمع 28 مع 14؟',
    options: [41, 42, 43, 40],
    correctAnswer: 42,
    hint: 'خذ 2 من 14 لتكمل 28 إلى 30، ويتبقى 12، فيكون المجموع 42',
    explanation: '28 + 14 = (28 + 2) + 12 = 30 + 12 = 42.',
  },
  {
    id: 6,
    num1: 35,
    num2: 15,
    question: 'كم حاصل جمع 35 مع 15؟',
    options: [48, 49, 50, 52],
    correctAnswer: 50,
    hint: 'اجمع الآحاد: 5 + 5 = 10، مع العشرات: 30 + 10 = 40، ليصبح المجموع 50 تماماً',
    explanation: '35 + 15 = 50.',
  },
  {
    id: 7,
    num1: 27,
    num2: 16,
    question: 'كم حاصل جمع 27 مع 16؟',
    options: [42, 43, 44, 45],
    correctAnswer: 43,
    hint: 'اجمع العشرات: 20 + 10 = 30، ثم الآحاد: 7 + 6 = 13، فالناتج 30 + 13 = 43',
    explanation: '27 + 16 = 43.',
  },
  {
    id: 8,
    num1: 33,
    num2: 14,
    question: 'كم حاصل جمع 33 مع 14؟',
    options: [46, 47, 48, 49],
    correctAnswer: 47,
    hint: 'جمع مباشر بدون حمل: 3 + 4 = 7 في الآحاد، و3 + 1 = 4 في العشرات',
    explanation: '33 + 14 = 47.',
  },
  {
    id: 9,
    num1: 18,
    num2: 29,
    question: 'كم حاصل جمع 18 مع 29؟',
    options: [46, 47, 48, 45],
    correctAnswer: 47,
    hint: 'قرّب 29 إلى 30: 18 + 30 = 48، ثم اطرح 1 فيكون 47',
    explanation: '18 + 29 = 18 + 30 - 1 = 47.',
  },
  {
    id: 10,
    num1: 26,
    num2: 24,
    question: 'كم حاصل جمع 26 مع 24؟',
    options: [48, 49, 50, 51],
    correctAnswer: 50,
    hint: 'الآحاد 6 + 4 تكوّن عشرة كاملة، مع 20 + 20 = 40، المجموع 50',
    explanation: '26 + 24 = 20 + 20 + 10 = 50.',
  },
];

export const AdditionWithin50QuizView: React.FC<AdditionWithin50QuizViewProps> = ({
  onGoHome,
  onGoDomain,
  onGoArithmetic,
  onGoAdditionTests,
}) => {
  const { themeClasses } = useEyeTheme();

  // Quiz state
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [isCompleted, setIsCompleted] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [copiedUrl, setCopiedUrl] = useState(false);

  const currentQ = QUIZ_QUESTIONS[currentIndex];
  const userSelected = selectedAnswers[currentQ.id];
  const hasAnsweredCurrent = userSelected !== undefined;

  // Handler for picking an option
  const handleSelectOption = (val: number) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQ.id]: val,
    }));
  };

  // Previous & Next navigation
  const handleNext = () => {
    setShowHint(false);
    if (currentIndex < QUIZ_QUESTIONS.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setIsCompleted(true);
      window.scrollTo({ top: 120, behavior: 'smooth' });
    }
  };

  const handlePrev = () => {
    setShowHint(false);
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  // Restart quiz
  const handleRestart = () => {
    setSelectedAnswers({});
    setCurrentIndex(0);
    setIsCompleted(false);
    setShowHint(false);
    window.scrollTo({ top: 120, behavior: 'smooth' });
  };

  // Copy share URL
  const handleCopyLink = () => {
    const directUrl = `${window.location.origin}/math/arithmetic/addition/within-50`;
    navigator.clipboard?.writeText(directUrl).then(() => {
      setCopiedUrl(true);
      setTimeout(() => setCopiedUrl(false), 2200);
    });
  };

  // Calculate score
  const correctCount = QUIZ_QUESTIONS.reduce((acc, q) => {
    return selectedAnswers[q.id] === q.correctAnswer ? acc + 1 : acc;
  }, 0);

  const percentage = Math.round((correctCount / QUIZ_QUESTIONS.length) * 100);

  // Performance appraisal
  const getAppraisal = () => {
    if (percentage === 100) {
      return {
        badge: 'عبقري الحساب! ',
        message: 'أداء متكامل ومبهر! لقد أتقنت مهارات الجمع ضمن العدد 50 والتعامل مع الآحاد والعشرات باحتراف تام.',
        color: 'text-emerald-700 dark:text-emerald-300',
        bg: 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800',
      };
    }
    if (percentage >= 80) {
      return {
        badge: 'مستوى متقدم ومتميز! ',
        message: 'نتيجة رائعة جداً! لديك مرونة وسرعة بديهة عالية في جمع الأرقام ثنائية المنزلة.',
        color: 'text-[#127052] dark:text-[#5EB5A1]',
        bg: 'bg-[#127052]/10 border-[#127052]/20',
      };
    }
    if (percentage >= 50) {
      return {
        badge: 'محاولة جيدة وفي طريق الإتقان! ',
        message: 'خطوة ممتازة! استمر في التدرب على استراتيجيات تكوين العشرات والتعويض للوصول إلى العلامة الكاملة.',
        color: 'text-amber-700 dark:text-amber-300',
        bg: 'bg-amber-50 dark:bg-amber-950/40 border-amber-200 dark:border-amber-800',
      };
    }
    return {
      badge: 'بداية مشجعة! ',
      message: 'التعامل مع الأعداد حتى 50 يحتاج لبعض التكرار؛ اقرأ الاستراتيجيات في الأسفل وأعد الاختبار لتعزيز مهاراتك.',
      color: 'text-blue-700 dark:text-blue-300',
      bg: 'bg-blue-50 dark:bg-blue-950/40 border-blue-200 dark:border-blue-800',
    };
  };

  const appraisal = getAppraisal();

  return (
    <div className="space-y-6 pb-20 max-w-4xl mx-auto">
      {/* Breadcrumb Navigation */}
      <Breadcrumbs
        items={[
          { label: 'الرئيسية', onClick: onGoHome },
          { label: 'الرياضيات الأساسية', onClick: onGoDomain },
          { label: 'الحساب الأساسي', onClick: onGoArithmetic },
          { label: 'اختبارات الجمع', onClick: onGoAdditionTests },
          { label: 'اختبار الجمع ضمن العدد 50', active: true },
        ]}
      />

      {/* TOP COMPACT BAR: Simplified layout matching the test standard */}
      <section
        className={`p-4 sm:p-5 rounded-2xl border ${themeClasses.border} ${themeClasses.cardBg} shadow-2xs relative`}
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div
              className={`w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-xl bg-gradient-to-l from-[#0D5F45] to-[#127052] text-white border border-[#127052]/30 flex items-center justify-center text-xl shadow-2xs`}
            >
              <span role="img" aria-label="جمع">+</span>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300 text-xs font-semibold border border-emerald-200 dark:border-emerald-800/40">
                المستوى: متوسط / للناشئين والطلاب
              </span>
              <span aria-hidden="true" className={themeClasses.textMuted}>·</span>
              <span className={`text-xs ${themeClasses.textMuted}`}>
                10 أسئلة متدرجة
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
                السؤال {currentIndex + 1} من {QUIZ_QUESTIONS.length}
              </span>
              <span className={`font-medium ${themeClasses.textMuted} font-sans`}>
                {Math.round(((currentIndex + 1) / QUIZ_QUESTIONS.length) * 100)}%
              </span>
            </div>

            {/* Visual Progress Bar */}
            <div className="w-full h-2.5 rounded-full bg-black/[0.04] dark:bg-white/[0.08] overflow-hidden">
              <div
                className="h-full bg-gradient-to-l from-[#0D5F45] to-[#127052] transition-all duration-300 rounded-full"
                style={{ width: `${((currentIndex + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Question Display Card (RTL Mathematical Operation) */}
          <div className="py-6 sm:py-8 flex flex-col items-center justify-center space-y-4">
            <span className={`text-xs font-medium ${themeClasses.textMuted}`}>
              اختر الإجابة الصحيحة للعملية الحسابية التالية:
            </span>

            {/* Arithmetic Expression rendered RTL with standard digits */}
            <div
              dir="rtl"
              className="px-6 py-4 rounded-2xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/[0.06] dark:border-white/[0.08] flex items-center justify-center gap-3 sm:gap-4 font-sans select-none"
            >
              <span className={`text-3xl sm:text-5xl font-bold tracking-tight ${themeClasses.textPrimary}`}>
                {currentQ.num1}
              </span>
              <span className="text-2xl sm:text-4xl font-bold text-[#127052] dark:text-[#5EB5A1]">
                +
              </span>
              <span className={`text-3xl sm:text-5xl font-bold tracking-tight ${themeClasses.textPrimary}`}>
                {currentQ.num2}
              </span>
              <span className="text-2xl sm:text-4xl font-bold text-slate-400">
                =
              </span>
              <span className="text-3xl sm:text-5xl font-bold text-amber-600 dark:text-amber-400 animate-pulse">
                ؟
              </span>
            </div>

            <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} text-center`}>
              {currentQ.question}
            </p>
          </div>

          {/* Multiple Choice Options */}
          <div className="space-y-3">
            <span className={`text-xs font-medium ${themeClasses.textMuted} block`}>
              الخيارات المتاحة:
            </span>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {currentQ.options.map((optionValue, idx) => {
                const isSelected = userSelected === optionValue;
                return (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(optionValue)}
                    className={`py-3.5 sm:py-4 px-4 rounded-xl font-sans font-bold text-lg sm:text-xl transition-all duration-150 border cursor-pointer text-center relative ${
                      isSelected
                        ? 'bg-[#127052] text-white border-[#127052] shadow-sm ring-2 ring-[#127052]/30 scale-[1.01]'
                        : `${themeClasses.cardBg} ${themeClasses.textPrimary} ${themeClasses.border} hover:border-[#127052]/40 hover:bg-black/[0.02] dark:hover:bg-white/[0.03]`
                    }`}
                  >
                    {optionValue}
                    {isSelected && (
                      <span className="absolute top-2 left-2 text-white">
                        <Check className="w-4 h-4" />
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Hint Dropdown Toggle */}
          <div className="pt-2">
            {!showHint ? (
              <button
                onClick={() => setShowHint(true)}
                className={`text-xs ${themeClasses.textMuted} hover:text-[#127052] dark:hover:text-[#5EB5A1] transition-colors flex items-center gap-1.5 cursor-pointer`}
              >
                <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
                <span>تحتاج مساعدة أو تلميحاً للحل؟ اضغط هنا</span>
              </button>
            ) : (
              <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-900 dark:text-amber-200 flex items-start gap-2.5">
                <Lightbulb className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="font-bold">استراتيجية الحل:</span>
                  <p className="leading-relaxed">{currentQ.hint}</p>
                </div>
              </div>
            )}
          </div>

          {/* Navigation Controls: Previous & Next / Finish */}
          <div className="flex items-center justify-between pt-4 border-t border-black/[0.05] dark:border-white/[0.05]">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium border ${themeClasses.border} transition-colors flex items-center gap-1.5 cursor-pointer ${
                currentIndex === 0
                  ? 'opacity-40 cursor-not-allowed'
                  : `${themeClasses.cardBg} ${themeClasses.textSecondary} hover:bg-black/[0.03] dark:hover:bg-white/[0.04]`
              }`}
            >
              <ArrowRight className="w-4 h-4" />
              <span>السابق</span>
            </button>

            <button
              onClick={handleNext}
              disabled={!hasAnsweredCurrent}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 cursor-pointer shadow-2xs ${
                hasAnsweredCurrent
                  ? 'bg-gradient-to-l from-[#0D5F45] to-[#127052] text-white hover:opacity-95'
                  : 'bg-black/10 dark:bg-white/10 text-slate-400 cursor-not-allowed'
              }`}
            >
              <span>{currentIndex === QUIZ_QUESTIONS.length - 1 ? 'إنهاء الاختبار وعرض النتيجة' : 'التالي'}</span>
              <ArrowLeft className="w-4 h-4" />
            </button>
          </div>
        </section>
      ) : (
        /* QUIZ EVALUATION / RESULT VIEW */
        <section
          className={`p-6 sm:p-10 rounded-2xl border ${themeClasses.border} ${themeClasses.cardBg} space-y-8 shadow-sm`}
        >
          {/* Header Result Card */}
          <div className={`p-6 sm:p-8 rounded-2xl border text-center space-y-4 ${appraisal.bg}`}>
            <div className="w-16 h-16 mx-auto rounded-2xl bg-white/80 dark:bg-black/40 flex items-center justify-center shadow-xs">
              <Award className="w-9 h-9 text-[#127052] dark:text-[#5EB5A1]" />
            </div>

            <div className="space-y-1">
              <span className={`text-sm font-bold uppercase tracking-wider ${appraisal.color}`}>
                {appraisal.badge}
              </span>
              <h2 className={`text-2xl sm:text-3xl font-extrabold ${themeClasses.textPrimary}`}>
                نتيجتك في اختبار الجمع ضمن العدد 50
              </h2>
            </div>

            {/* Score & Percentage */}
            <div className="flex items-center justify-center gap-6 py-2">
              <div className="text-center">
                <span className="text-3xl sm:text-4xl font-extrabold font-sans text-[#127052] dark:text-[#5EB5A1]">
                  {correctCount}
                </span>
                <span className="text-xs text-slate-500 block">من أصل 10 أسئلة</span>
              </div>
              <div className="w-px h-10 bg-black/10 dark:bg-white/10" />
              <div className="text-center">
                <span className="text-3xl sm:text-4xl font-extrabold font-sans text-amber-600 dark:text-amber-400">
                  {percentage}%
                </span>
                <span className="text-xs text-slate-500 block">نسبة الإتقان</span>
              </div>
            </div>

            <p className={`text-xs sm:text-sm max-w-lg mx-auto ${themeClasses.textSecondary} leading-relaxed`}>
              {appraisal.message}
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={handleRestart}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-l from-[#0D5F45] to-[#127052] text-white text-xs sm:text-sm font-bold flex items-center gap-2 hover:opacity-95 transition-opacity cursor-pointer shadow-xs"
              >
                <RotateCcw className="w-4 h-4" />
                <span>إعادة الاختبار الآن</span>
              </button>

              <button
                onClick={handleCopyLink}
                className={`px-4 py-2.5 rounded-xl border ${themeClasses.border} ${themeClasses.cardBg} text-xs sm:text-sm font-medium hover:bg-black/[0.03] dark:hover:bg-white/[0.05] transition-colors flex items-center gap-2 ${themeClasses.textPrimary} cursor-pointer`}
              >
                <Share2 className="w-4 h-4" />
                <span>مشاركة النتيجة</span>
              </button>
            </div>
          </div>

          {/* Detailed Question Review List */}
          <div className="space-y-4">
            <h3 className={`text-base font-bold ${themeClasses.textPrimary} flex items-center gap-2`}>
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <span>مراجعة الإجابات وتفاصيل الأسئلة العشرة:</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {QUIZ_QUESTIONS.map((q, idx) => {
                const userAns = selectedAnswers[q.id];
                const isCorrect = userAns === q.correctAnswer;

                return (
                  <div
                    key={q.id}
                    className={`p-4 rounded-xl border space-y-2 transition-all ${
                      isCorrect
                        ? 'border-emerald-200 dark:border-emerald-900/50 bg-emerald-50/30 dark:bg-emerald-950/20'
                        : 'border-red-200 dark:border-red-900/50 bg-red-50/30 dark:bg-red-950/20'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-slate-500">
                        السؤال {idx + 1}:
                      </span>
                      <span
                        dir="rtl"
                        className="font-sans font-bold text-sm tracking-wide text-slate-800 dark:text-slate-100"
                      >
                        {q.num1} + {q.num2} = {q.correctAnswer}
                      </span>
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
                      <div>
                        <span className="text-slate-500">إجابتك: </span>
                        <span className="font-bold font-sans">
                          {userAns !== undefined ? userAns : 'لم تجب'}
                        </span>
                      </div>
                      <div>
                        <span className="text-slate-500">الإجابة الصحيحة: </span>
                        <span className="font-bold font-sans text-emerald-700 dark:text-emerald-400">
                          {q.correctAnswer}
                        </span>
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
          SEO Article Section: اختبار الجمع ضمن العدد 50 (> 350 حرفاً)
      ========================================================================= */}
      <article
        className={`p-6 sm:p-10 rounded-2xl border ${themeClasses.border} ${themeClasses.cardBg} space-y-6 shadow-2xs leading-relaxed`}
      >
        {/* H2 Heading for SEO */}
        <div className="space-y-2 pb-4 border-b border-black/[0.05] dark:border-white/[0.05]">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#127052] dark:text-[#5EB5A1]">
            <BookOpen className="w-4 h-4" />
            <span>المكتبة التعليمية ودليل الحساب الذهني</span>
          </div>

          <h2 className={`text-lg sm:text-2xl font-bold tracking-tight ${themeClasses.textPrimary}`}>
            اختبار الجمع ضمن العدد 50
          </h2>

          <p className={`text-xs ${themeClasses.textMuted}`}>
            دليل تربوي شامل واستراتيجيات حسابية ذكية لتمكين الطلاب والناشئين من جمع الأعداد المكونة من منزلتين ضمن العدد 50 بمهارة وسرعة بديهة.
          </p>
        </div>

        {/* Section 1: أهمية مرحلة الجمع حتى 50 */}
        <section className="space-y-2.5">
          <h3 className={`text-base font-semibold ${themeClasses.textPrimary} flex items-center gap-2`}>
            <Sparkles className="w-4 h-4 text-[#127052] dark:text-[#5EB5A1]" />
            <span>أولاً: أهمية إتقان الجمع ضمن العدد 50 في بناء الحس العددي</span>
          </h3>
          <p className={`text-xs sm:text-sm ${themeClasses.textSecondary}`}>
            يمثل <strong>اختبار الجمع ضمن العدد 50</strong> مرحلة ارتقاء حاسمة في سلم التفكير الرياضي؛ حيث ينتقل التلميذ من نطاق العشرات الأولية إلى إدارة العمليات الحسابية للأعداد المكونة من منزلتين (الآحاد والعشرات). في هذا المستوى، يتشكل لدى الطالب الاستيعاب الكامل لمفهوم القيمة المكانية والحمل المنزلي (Regrouping)، كما تتسع قدرته على إجراء الحسابات الشفهية السريعة بثقة واستقلالية دون الحاجة إلى الورقة والقلم.
          </p>
        </section>

        {/* Section 2: استراتيجيات الحساب الذهني للجمع حتى 50 */}
        <section className="space-y-3">
          <h3 className={`text-base font-semibold ${themeClasses.textPrimary} flex items-center gap-2`}>
            <Lightbulb className="w-4 h-4 text-amber-600" />
            <span>ثانياً: استراتيجيات الحساب الذهني السريع للجمع حتى 50</span>
          </h3>
          <p className={`text-xs sm:text-sm ${themeClasses.textSecondary}`}>
            لتحقيق الطلاقة الحسابية وسرعة البديهة، يُنصح بتدريب الطلاب على الأساليب العقلية الذكية التالية:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 pt-1">
            <div className={`p-4 rounded-xl border ${themeClasses.border} ${themeClasses.pillBg} space-y-1.5`}>
              <span className={`font-semibold text-xs sm:text-sm ${themeClasses.textPrimary} block`}>
                1. استراتيجية تفكيك القيمة المنزلية
              </span>
              <p className={`text-xs ${themeClasses.textSecondary}`}>
                فصل العشرات عن الآحاد وجمع كل منهما على حدة؛ فمثلاً عند جمع 24 مع 18: نجمع العشرات أولاً (20 + 10 = 30)، ثم الآحاد (4 + 8 = 12)، وأخيراً نجمع الناتجين: 30 + 12 = 42.
              </p>
            </div>

            <div className={`p-4 rounded-xl border ${themeClasses.border} ${themeClasses.pillBg} space-y-1.5`}>
              <span className={`font-semibold text-xs sm:text-sm ${themeClasses.textPrimary} block`}>
                2. استراتيجية التقريب والتعويض
              </span>
              <p className={`text-xs ${themeClasses.textSecondary}`}>
                عند التعامل مع أعداد قريبة من مضاعفات العشرة (مثل 19 أو 29)، نقربها إلى العدد الأسهل؛ فمثلاً 19 + 25 تصبح 20 + 25 = 45، ثم نطرح 1 الذي أضفناه ليصبح الناتج 44.
              </p>
            </div>

            <div className={`p-4 rounded-xl border ${themeClasses.border} ${themeClasses.pillBg} space-y-1.5`}>
              <span className={`font-semibold text-xs sm:text-sm ${themeClasses.textPrimary} block`}>
                3. التجسير إلى مضاعفات العشرة
              </span>
              <p className={`text-xs ${themeClasses.textSecondary}`}>
                استلاف مقدار بسيط من العدد الثاني لإكمال العدد الأول إلى أقرب عشرة كاملة؛ مثل 28 + 14 = (28 + 2) + 12 = 30 + 12 = 42، وهي مهارة تمنح العقل سرعة فائقة.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: دور الاختبار التفاعلي والتطبيقات اليومية */}
        <section className="space-y-2.5">
          <h3 className={`text-base font-semibold ${themeClasses.textPrimary} flex items-center gap-2`}>
            <TrendingUp className="w-4 h-4 text-[#127052] dark:text-[#5EB5A1]" />
            <span>ثالثاً: كيف يعزز الاختبار الرقمي التفاعلي ثقة الطالب</span>
          </h3>
          <p className={`text-xs sm:text-sm ${themeClasses.textSecondary}`}>
            يوفر هذا الاختبار الرقمي بيئة بصرية مريحة للعين، تعرض العمليات بالاتجاه الطبيعي من اليمين إلى اليسار وتتيح تغذية راجعة فورية لكل سؤال. يربط هذا التدريب الرياضيات بالحياة العملية، مثل التعامل مع المشتريات اليومية البسيطة، وعد النقود، وحساب الدقائق والنقاط في الألعاب. التكرار المنتظم عبر هذه المنصة يكسر حاجز الخوف من العمليات الحسابية ويمنح المتعلم شعوراً بالإنجاز والتميز.
          </p>
        </section>

        {/* Educational Summary Tips Card */}
        <div className="p-4 rounded-xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800/30 flex items-center justify-between flex-wrap gap-3 text-xs">
          <div className="flex items-center gap-2 text-emerald-800 dark:text-emerald-300">
            <Heart className="w-4 h-4 shrink-0 text-emerald-600" />
            <span className="font-semibold">نصيحة تربوية: دع الطالب يبتكر طريقته المفضلة في الحل وشجعه على توضيح كيف وصل للنتيجة!</span>
          </div>

          <button
            onClick={handleRestart}
            className="text-xs text-[#127052] dark:text-[#5EB5A1] font-bold hover:underline cursor-pointer"
          >
            بدء الاختبار الآن ←
          </button>
        </div>
      </article>
    </div>
  );
};
