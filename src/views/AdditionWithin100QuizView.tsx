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

interface AdditionWithin100QuizViewProps {
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
    num1: 45,
    num2: 32,
    question: 'كم حاصل جمع 45 مع 32؟',
    options: [76, 77, 78, 75],
    correctAnswer: 77,
    hint: 'جمع مباشر بدون حمل: اجمع العشرات (40 + 30 = 70) ثم الآحاد (5 + 2 = 7)',
    explanation: '45 + 32 = (40 + 30) + (5 + 2) = 70 + 7 = 77.',
  },
  {
    id: 2,
    num1: 58,
    num2: 26,
    question: 'كم حاصل جمع 58 مع 26؟',
    options: [82, 84, 85, 86],
    correctAnswer: 84,
    hint: 'خذ 2 من 26 لتكمل 58 إلى 60، ويتبقى 24، فيكون 60 + 24 = 84',
    explanation: '58 + 26 = (58 + 2) + 24 = 60 + 24 = 84.',
  },
  {
    id: 3,
    num1: 67,
    num2: 28,
    question: 'كم حاصل جمع 67 مع 28؟',
    options: [94, 95, 96, 93],
    correctAnswer: 95,
    hint: 'اجمع العشرات: 60 + 20 = 80، والآحاد: 7 + 8 = 15، والناتج 80 + 15 = 95',
    explanation: '67 + 28 = 80 + 15 = 95.',
  },
  {
    id: 4,
    num1: 49,
    num2: 36,
    question: 'كم حاصل جمع 49 مع 36؟',
    options: [84, 85, 86, 83],
    correctAnswer: 85,
    hint: 'استراتيجية التعويض: 49 هي 50 ناقص 1؛ إذن (50 + 36 = 86) ثم اطرح 1 فيكون 85',
    explanation: '49 + 36 = (50 + 36) - 1 = 86 - 1 = 85.',
  },
  {
    id: 5,
    num1: 74,
    num2: 19,
    question: 'كم حاصل جمع 74 مع 19؟',
    options: [92, 93, 94, 91],
    correctAnswer: 93,
    hint: 'اجمع 20 على 74 لتحصل على 94، ثم اطرح 1 ليصبح 93',
    explanation: '74 + 19 = 74 + 20 - 1 = 94 - 1 = 93.',
  },
  {
    id: 6,
    num1: 55,
    num2: 45,
    question: 'كم حاصل جمع 55 مع 45؟',
    options: [90, 95, 100, 105],
    correctAnswer: 100,
    hint: 'الآحاد 5 + 5 = 10، والعشرات 50 + 40 = 90، المجموع 90 + 10 = 100 بالتمام والكمال',
    explanation: '55 + 45 = 100 (إتمام المئة الكاملة).',
  },
  {
    id: 7,
    num1: 63,
    num2: 29,
    question: 'كم حاصل جمع 63 مع 29؟',
    options: [91, 92, 93, 90],
    correctAnswer: 92,
    hint: 'قرب 29 إلى 30: 63 + 30 = 93، ثم اطرح 1 فيكون الناتج 92',
    explanation: '63 + 29 = 63 + 30 - 1 = 92.',
  },
  {
    id: 8,
    num1: 38,
    num2: 47,
    question: 'كم حاصل جمع 38 مع 47؟',
    options: [83, 84, 85, 86],
    correctAnswer: 85,
    hint: 'اجمع العشرات: 30 + 40 = 70، ثم الآحاد: 8 + 7 = 15، والناتج 70 + 15 = 85',
    explanation: '38 + 47 = 70 + 15 = 85.',
  },
  {
    id: 9,
    num1: 56,
    num2: 38,
    question: 'كم حاصل جمع 56 مع 38؟',
    options: [92, 94, 96, 95],
    correctAnswer: 94,
    hint: 'اجمع العشرات أولاً: 50 + 30 = 80، ثم الآحاد: 6 + 8 = 14، 80 + 14 = 94',
    explanation: '56 + 38 = 80 + 14 = 94.',
  },
  {
    id: 10,
    num1: 82,
    num2: 18,
    question: 'كم حاصل جمع 82 مع 18؟',
    options: [98, 99, 100, 101],
    correctAnswer: 100,
    hint: 'أصدقاء المئة: 2 + 8 = 10، مع 80 + 10 = 90، ليصبح الناتج الكلي 100',
    explanation: '82 + 18 = (80 + 10) + (2 + 8) = 90 + 10 = 100.',
  },
];

export const AdditionWithin100QuizView: React.FC<AdditionWithin100QuizViewProps> = ({
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

  // Navigation
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
    const directUrl = `${window.location.origin}/math/arithmetic/addition/within-100`;
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
        badge: 'أستاذ الحساب الذهني! ',
        message: 'علامة كاملة خارقة! لديك تحكم مطلق في جمع الأعداد المكونة من منزلتين والوصول إلى المئة بدقة وسرعة متناهية.',
        color: 'text-emerald-700 dark:text-emerald-300',
        bg: 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800',
      };
    }
    if (percentage >= 80) {
      return {
        badge: 'براعة رياضية مذهلة! ',
        message: 'إنجاز رائع جداً! استيعابك لقواعد الحمل المنزلي وتقريب الأعداد يعكس مستوى رياضياً رفيعاً.',
        color: 'text-[#127052] dark:text-[#5EB5A1]',
        bg: 'bg-[#127052]/10 border-[#127052]/20',
      };
    }
    if (percentage >= 50) {
      return {
        badge: 'أداء جيد وفي تطور مستمر! تنبيه:',
        message: 'بداية صلبة! مع مزيد من التدريب على تقنيات تجزئة العشرات والتعويض ستصل للدرجة الكاملة سريعاً.',
        color: 'text-amber-700 dark:text-amber-300',
        bg: 'bg-amber-50 dark:bg-amber-950/40 border-amber-200 dark:border-amber-800',
      };
    }
    return {
      badge: 'خطوة أولى نحو القمة! ',
      message: 'جمع الأعداد الكبيرة حتى 100 مهارة تُكتسب بالممارسة والتدريب؛ تفقد شروحات الأسئلة أدناه وأعد الاختبار.',
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
          { label: 'اختبار الجمع ضمن العدد 100', active: true },
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
                المستوى: متقدم / للطلاب وإتقان الحساب الذهني
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

          {/* Navigation Controls */}
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
                نتيجتك في اختبار الجمع ضمن العدد 100
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
          SEO Article Section: اختبار الجمع ضمن العدد 100 (> 350 حرفاً)
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
            اختبار الجمع ضمن العدد 100
          </h2>

          <p className={`text-xs ${themeClasses.textMuted}`}>
            دليل احترافي متكامل لإتقان جمع الأعداد حتى 100، وتطوير استراتيجيات الحساب الذهني السريع للطلاب والمقبلين على المراحل المتقدمة.
          </p>
        </div>

        {/* Section 1: تاج الحساب الأساسي - الجمع حتى 100 */}
        <section className="space-y-2.5">
          <h3 className={`text-base font-semibold ${themeClasses.textPrimary} flex items-center gap-2`}>
            <Sparkles className="w-4 h-4 text-[#127052] dark:text-[#5EB5A1]" />
            <span>أولاً: إتقان الجمع حتى 100.. تاج المهارات الحسابية الأساسية</span>
          </h3>
          <p className={`text-xs sm:text-sm ${themeClasses.textSecondary}`}>
            يعد <strong>اختبار الجمع ضمن العدد 100</strong> المعيار الذهبي لقياس الطلاقة الحسابية لدى الطلاب في مرحلة التعليم الابتدائي والتأسيسي. إن إتقان جمع أي عددين مكونين من منزلتين وصولاً إلى المئة الكاملة يمثل اكتمال حلقة الحس العددي؛ حيث يتطلب التوفيق المتزامن بين جمع العشرات، والتعامل مع حمل الآحاد إلى منزلة العشرات، وفهم مفهوم "أصدقاء المئة" والأعداد المتناغمة التي تُعد عصب المعاملات المالية واليومية.
          </p>
        </section>

        {/* Section 2: استراتيجيات المحترفين في الجمع الذهني حتى 100 */}
        <section className="space-y-3">
          <h3 className={`text-base font-semibold ${themeClasses.textPrimary} flex items-center gap-2`}>
            <Lightbulb className="w-4 h-4 text-amber-600" />
            <span>ثانياً: أساليب الحساب الذهني الخاطف للجمع حتى 100</span>
          </h3>
          <p className={`text-xs sm:text-sm ${themeClasses.textSecondary}`}>
            لا يحتاج الطالب الذكي إلى عداد أو ورقة لحل عمليات مثل 58 + 26 أو 49 + 36، بل يعتمد على خوارزميات عقلية مرنة:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 pt-1">
            <div className={`p-4 rounded-xl border ${themeClasses.border} ${themeClasses.pillBg} space-y-1.5`}>
              <span className={`font-semibold text-xs sm:text-sm ${themeClasses.textPrimary} block`}>
                1. استراتيجية الجمع من اليسار إلى اليمين
              </span>
              <p className={`text-xs ${themeClasses.textSecondary}`}>
                وهي طريقة الحساب الذهني الاحترافية: نبدأ بجمع العشرات الكبيرة أولاً لأنها تحمل القيمة الأكبر؛ في مسألة 67 + 28، نجمع (60 + 20 = 80)، ثم نضيف الآحاد (7 + 8 = 15)، فيصبح المجموع 80 + 15 = 95.
              </p>
            </div>

            <div className={`p-4 rounded-xl border ${themeClasses.border} ${themeClasses.pillBg} space-y-1.5`}>
              <span className={`font-semibold text-xs sm:text-sm ${themeClasses.textPrimary} block`}>
                2. استراتيجية التعويض بالأعداد القريبة (Rounding)
              </span>
              <p className={`text-xs ${themeClasses.textSecondary}`}>
                عندما يكون أحد الأرقام ينتهي بـ 8 أو 9 (مثل 49 أو 29)، نرفعه إلى أقرب مضاعف للعشرة؛ 49 + 36 تصبح (50 + 36 = 86) ثم نطرح الواحد الإضافي لنصل للناتج الدقيق 85 خلال ثانية واحدة!
              </p>
            </div>

            <div className={`p-4 rounded-xl border ${themeClasses.border} ${themeClasses.pillBg} space-y-1.5`}>
              <span className={`font-semibold text-xs sm:text-sm ${themeClasses.textPrimary} block`}>
                3. أصدقاء المئة وإتمام المئة الكاملة
              </span>
              <p className={`text-xs ${themeClasses.textSecondary}`}>
                التعرف الفوري على الأزواج العددية المتكاملة التي تنتج 100 مثل: (55 + 45)، (82 + 18)، (75 + 25)، و(60 + 40). هذه الأزواج تعزز سرعة البديهة في التعاملات المالية وحساب الخصومات والباقي.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: القيمة التربوية للاختبارات التفاعلية المتدرجة */}
        <section className="space-y-2.5">
          <h3 className={`text-base font-semibold ${themeClasses.textPrimary} flex items-center gap-2`}>
            <TrendingUp className="w-4 h-4 text-[#127052] dark:text-[#5EB5A1]" />
            <span>ثالثاً: كيف يحول هذا الاختبار الرهبة إلى شغف وتفوق دائم</span>
          </h3>
          <p className={`text-xs sm:text-sm ${themeClasses.textSecondary}`}>
            كثيراً ما يشعر التلاميذ بالرهبة عند مواجهة مسائل جمع العشرات وحمل الأرقام. يقدم هذا الاختبار التفاعلي حلاً شاملاً عبر تجزئة المهارة إلى 10 أسئلة مصممة بعناية فائقة، مع توفير تلميحات ذكية لكل سؤال وشرح وافٍ عند المراجعة. التدرب المتكرر في بيئة بصرية هادئة يرسخ المسارات العصبية للتفكير الرياضي المنطقي، ويجعل التلميذ مستعداً لخوض مناهج الرياضيات المتقدمة باقتدار وثقة لا تتزعزع.
          </p>
        </section>

        {/* Educational Summary Tips Card */}
        <div className="p-4 rounded-xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800/30 flex items-center justify-between flex-wrap gap-3 text-xs">
          <div className="flex items-center gap-2 text-emerald-800 dark:text-emerald-300">
            <Heart className="w-4 h-4 shrink-0 text-emerald-600" />
            <span className="font-semibold">إرشاد تربوي: امنح نفسك أو تلميذك وقتاً للتفكير والتخمين الذهني قبل اختيار الإجابة، فالدماغ عضلة تقوى بالمراس!</span>
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
