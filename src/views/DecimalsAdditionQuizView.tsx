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

interface DecimalsAdditionQuizViewProps {
  onGoHome: () => void;
  onGoDomain: () => void;
  onGoArithmetic: () => void;
  onGoAdditionTests: () => void;
}

interface QuestionItem {
  id: number;
  num1: string;
  num2: string;
  question: string;
  options: string[];
  correctAnswer: string;
  hint: string;
  explanation: string;
}

const QUIZ_QUESTIONS: QuestionItem[] = [
  {
    id: 1,
    num1: '0.3',
    num2: '0.5',
    question: 'كم حاصل جمع 0.3 مع 0.5؟',
    options: ['0.8', '0.7', '0.9', '0.35'],
    correctAnswer: '0.8',
    hint: 'اجمع الأجزاء من عشرة مباشرة: 3 أعشار + 5 أعشار = 8 أعشار',
    explanation: '0.3 + 0.5 = 0.8، عملية جمع مباشرة للأجزاء العشرية مع بقاء الفاصلة بمكانها.',
  },
  {
    id: 2,
    num1: '1.2',
    num2: '2.5',
    question: 'كم حاصل جمع 1.2 مع 2.5؟',
    options: ['3.6', '3.7', '3.8', '3.5'],
    correctAnswer: '3.7',
    hint: 'اجمع الجزء العشري (0.2 + 0.5 = 0.7) ثم الجزء الصحيح (1 + 2 = 3)',
    explanation: '1.2 + 2.5 = 3.7.',
  },
  {
    id: 3,
    num1: '0.4',
    num2: '0.6',
    question: 'كم حاصل جمع 0.4 مع 0.6؟',
    options: ['1.0', '0.10', '0.9', '1.1'],
    correctAnswer: '1.0',
    hint: '4 أعشار + 6 أعشار = 10 أعشار، أي واحد صحيح كامل (1.0)',
    explanation: '0.4 + 0.6 = 1.0 (واحد صحيح). انتبه للخطأ الشائع بكتابتها 0.10.',
  },
  {
    id: 4,
    num1: '2.35',
    num2: '1.42',
    question: 'كم حاصل جمع 2.35 مع 1.42؟',
    options: ['3.76', '3.77', '3.87', '3.67'],
    correctAnswer: '3.77',
    hint: 'اجمع الأجزاء من مئة (5 + 2 = 7)، ثم من عشرة (3 + 4 = 7)، ثم الصحيح (2 + 1 = 3)',
    explanation: '2.35 + 1.42 = 3.77.',
  },
  {
    id: 5,
    num1: '4.8',
    num2: '3.4',
    question: 'كم حاصل جمع 4.8 مع 3.4؟',
    options: ['8.1', '8.2', '7.12', '8.3'],
    correctAnswer: '8.2',
    hint: '8 أعشار + 4 أعشار = 12 عشراً (1.2)، نضيف 1 إلى مجموع الأعداد الصحيحة (4 + 3 = 7) فيصبح 8.2',
    explanation: '4.8 + 3.4 = 8.2 (مع حمل 1 إلى خانة الآحاد).',
  },
  {
    id: 6,
    num1: '0.75',
    num2: '0.25',
    question: 'كم حاصل جمع 0.75 مع 0.25؟',
    options: ['0.90', '1.00', '0.99', '1.10'],
    correctAnswer: '1.00',
    hint: 'تذكر النقود: 75 قرشاً + 25 قرشاً = 100 قرش أي وحدة كاملة 1.00',
    explanation: '0.75 + 0.25 = 1.00 (أو 1 صحيح).',
  },
  {
    id: 7,
    num1: '5.6',
    num2: '2.7',
    question: 'كم حاصل جمع 5.6 مع 2.7؟',
    options: ['8.2', '8.3', '7.13', '8.4'],
    correctAnswer: '8.3',
    hint: '6 أعشار + 7 أعشار = 13 عشراً (1.3)، و5 + 2 = 7، إذن 7 + 1.3 = 8.3',
    explanation: '5.6 + 2.7 = 8.3.',
  },
  {
    id: 8,
    num1: '12.4',
    num2: '7.8',
    question: 'كم حاصل جمع 12.4 مع 7.8؟',
    options: ['20.1', '20.2', '19.12', '20.4'],
    correctAnswer: '20.2',
    hint: '12 + 7 = 19، ثم 0.4 + 0.8 = 1.2، المجموع: 19 + 1.2 = 20.2',
    explanation: '12.4 + 7.8 = 20.2.',
  },
  {
    id: 9,
    num1: '3.15',
    num2: '2.85',
    question: 'كم حاصل جمع 3.15 مع 2.85؟',
    options: ['5.90', '6.00', '6.10', '5.99'],
    correctAnswer: '6.00',
    hint: '0.15 + 0.85 = 1.00 كامل، نجمعه مع 3 + 2 = 5 فيكون الناتج 6.00',
    explanation: '3.15 + 2.85 = 6.00 (أو 6 صحيح).',
  },
  {
    id: 10,
    num1: '15.5',
    num2: '4.9',
    question: 'كم حاصل جمع 15.5 مع 4.9؟',
    options: ['20.3', '20.4', '19.14', '20.5'],
    correctAnswer: '20.4',
    hint: 'استراتيجية التعويض: أضف 5 أولاً (15.5 + 5 = 20.5) ثم اطرح 0.1 فينتج 20.4',
    explanation: '15.5 + 4.9 = 15.5 + 5 - 0.1 = 20.4.',
  },
];

export const DecimalsAdditionQuizView: React.FC<DecimalsAdditionQuizViewProps> = ({
  onGoHome,
  onGoDomain,
  onGoArithmetic,
  onGoAdditionTests,
}) => {
  const { themeClasses } = useEyeTheme();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [isCompleted, setIsCompleted] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [copiedUrl, setCopiedUrl] = useState(false);

  const currentQ = QUIZ_QUESTIONS[currentIndex];
  const selectedAnswer = selectedAnswers[currentQ.id];

  const handleSelectOption = (value: string) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQ.id]: value,
    }));
  };

  const handleNext = () => {
    setShowHint(false);
    if (currentIndex < QUIZ_QUESTIONS.length - 1) {
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
    QUIZ_QUESTIONS.forEach((q) => {
      if (selectedAnswers[q.id] === q.correctAnswer) {
        score += 1;
      }
    });
    return score;
  };

  const score = calculateScore();
  const percentage = Math.round((score / QUIZ_QUESTIONS.length) * 100);

  const getEvaluation = () => {
    if (percentage === 100) {
      return {
        title: 'رائع ومتقن للغاية! علامة كاملة ',
        desc: 'أظهرت مهارة فائقة في حساب الفواصل والأجزاء العشرية بدقة متناهية وسرعة مذهلة.',
        color: 'text-emerald-700 dark:text-emerald-400',
        badge: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300',
      };
    }
    if (percentage >= 70) {
      return {
        title: 'أداء متميز وجيد جداً! ',
        desc: 'لديك استيعاب ممتاز لترتيب المنازل العشرية والتعامل مع الفواصل.',
        color: 'text-[#127052] dark:text-[#5EB5A1]',
        badge: 'bg-[#127052]/10 text-[#127052] dark:bg-[#127052]/20 dark:text-[#5EB5A1]',
      };
    }
    if (percentage >= 50) {
      return {
        title: 'نتيجة مقبولة ومحاولة طيبة ',
        desc: 'احرص على محاذاة الفواصل العشرية وتجميع الأعشار التي تتجاوز الـ 10.',
        color: 'text-amber-700 dark:text-amber-400',
        badge: 'bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300',
      };
    }
    return {
      title: 'فرصة رائعة للتمرين والمراجعة ',
      desc: 'راجع الخطوات التفصيلية في المقالة الإرشادية أسفله ثم أعد المحاولة لتثبيت المفهوم.',
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
          { label: 'اختبار جمع الأعداد العشرية', active: true },
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
              <span role="img" aria-label="أعداد عشرية"></span>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300 text-xs font-semibold border border-emerald-200 dark:border-emerald-800/40">
                المستوى: متوسط / لطلاب المرحلة الابتدائية والمتوسطة
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

          {/* Question Display Card */}
          <div className="py-6 sm:py-8 flex flex-col items-center justify-center space-y-4">
            <span className={`text-xs font-medium ${themeClasses.textMuted}`}>
              اختر الإجابة الصحيحة لناتج جمع العددين العشريين:
            </span>

            {/* Decimal Expression rendered RTL */}
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
                const isSelected = selectedAnswer === optionValue;
                return (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(optionValue)}
                    className={`py-3.5 sm:py-4 px-4 rounded-xl text-lg sm:text-xl font-bold font-sans transition-all border text-center cursor-pointer select-none ${
                      isSelected
                        ? 'bg-[#127052] text-white border-[#0D5F45] shadow-xs scale-[1.01]'
                        : `${themeClasses.cardBg} ${themeClasses.textPrimary} border-black/[0.08] dark:border-white/[0.1] hover:border-[#127052]/50 hover:bg-black/[0.01] dark:hover:bg-white/[0.03]`
                    }`}
                  >
                    {optionValue}
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
                  <span>تلميح واستراتيجية الحل:</span>
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
              <span>{currentIndex === QUIZ_QUESTIONS.length - 1 ? 'إنهاء وعرض النتيجة' : 'التالي'}</span>
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
              أحرزت {score} من أصل {QUIZ_QUESTIONS.length}
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
              {QUIZ_QUESTIONS.map((q) => {
                const userAns = selectedAnswers[q.id];
                const isCorrect = userAns === q.correctAnswer;
                return (
                  <div
                    key={q.id}
                    className={`p-3.5 rounded-xl border text-xs space-y-1.5 text-right ${
                      isCorrect
                        ? 'border-emerald-200 dark:border-emerald-900/40 bg-emerald-50/40 dark:bg-emerald-950/20'
                        : 'border-red-200 dark:border-red-900/40 bg-red-50/40 dark:bg-red-950/20'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold font-sans">
                        {q.num1} + {q.num2} = ؟
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
          SEO Article Section: اختبار جمع الأعداد العشرية (> 350 حرفاً)
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
            اختبار جمع الأعداد العشرية
          </h2>

          <p className={`text-xs ${themeClasses.textMuted}`}>
            دليل تعليمي متكامل لضبط الفواصل العشرية، إتقان جمع الأعشار والأجزاء من مئة، وتطوير الحساب الذهني السريع للطلاب والمبتدئين.
          </p>
        </div>

        {/* Section 1 */}
        <section className="space-y-2.5">
          <h3 className={`text-base font-semibold ${themeClasses.textPrimary} flex items-center gap-2`}>
            <Sparkles className="w-4 h-4 text-[#127052] dark:text-[#5EB5A1]" />
            <span>الأعداد العشرية وأهميتها في حياتنا اليومية والحساب الدقيق</span>
          </h3>
          <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
            تُعتبر الأعداد العشرية امتداداً لنظام العد العشري، حيث تفصل الفاصلة العشرية بين الجزء الصحيح والأجزاء الكسرية (الأعشار، أجزاء المئة، وأجزاء الألف). يمثل جمع الأعداد العشرية العمود الفقري لكافة المعاملات المالية والتجارية اليومية، من حساب أسعار المشتريات والخصومات والفواتير، إلى قياس الأطوال والأوزان ومؤشرات الصحة البدنية ودرجات الحرارة. اكتساب المهارة وسرعة البديهة في جمع الأعداد العشرية يمنح الطالب ثقة استثنائية في قدراته الحسابية الذهنية.
          </p>
        </section>

        {/* Section 2 */}
        <section className="space-y-2.5">
          <h3 className={`text-base font-semibold ${themeClasses.textPrimary} flex items-center gap-2`}>
            <TrendingUp className="w-4 h-4 text-[#127052] dark:text-[#5EB5A1]" />
            <span>خطوات واستراتيجيات ذهنية لجمع الأعداد العشرية بسهولة وبدون أخطاء</span>
          </h3>
          <div className="space-y-3">
            <div className="p-3.5 rounded-xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/[0.05] dark:border-white/[0.05]">
              <span className={`font-semibold text-xs ${themeClasses.textPrimary} block mb-1`}>
                1. محاذاة الفواصل العشرية (محاذاة المنازل):
              </span>
              <p className={`text-xs ${themeClasses.textSecondary}`}>
                القاعدة الذهبية الأولى في جمع الأعداد العشرية هي محاذاة الفواصل العشرية فوق بعضها البعض تماماً. بهذه الطريقة يتم جمع الأجزاء من عشرة مع الأجزاء من عشرة، والآحاد مع الآحاد، والعشرات مع العشرات دون أي التباس في المنازل.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/[0.05] dark:border-white/[0.05]">
              <span className={`font-semibold text-xs ${themeClasses.textPrimary} block mb-1`}>
                2. إضافة الأصفار التكميلية لتساوي المنازل:
              </span>
              <p className={`text-xs ${themeClasses.textSecondary}`}>
                إذا كان أحد العددين يمتلك منازل عشرية أكثر من الآخر، يمكن إضافة أصفار على يمين الكسر العشري دون أن تتغير قيمته. على سبيل المثال: 1.4 + 2.35 تكتب كـ 1.40 + 2.35 ليسهل الجمع العمودي والذهني.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/[0.05] dark:border-white/[0.05]">
              <span className={`font-semibold text-xs ${themeClasses.textPrimary} block mb-1`}>
                3. مراعاة الحمل عند اكتمال العشرة:
              </span>
              <p className={`text-xs ${themeClasses.textSecondary}`}>
                عندما يكون مجموع خانة الأجزاء من عشرة 10 أو أكثر، مثل 0.4 + 0.6 = 1.0، ينتقل الواحد الصحيح إلى خانة الآحاد الصحيحة كحمل نظامي، تماماً كجمع الأعداد الطبيعية.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section className="space-y-2.5">
          <h3 className={`text-base font-semibold ${themeClasses.textPrimary} flex items-center gap-2`}>
            <Heart className="w-4 h-4 text-[#127052] dark:text-[#5EB5A1]" />
            <span>كيف يساهم هذا الاختبار التفاعلي في صقل مهارة المتعلم؟</span>
          </h3>
          <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
            يوفر هذا الاختبار بيئة تعليمية هادئة تشجع التجربة والخطأ البناء. من خلال التلميحات الفورية والشروحات التفصيلية لكل سؤال، يتعلم الطالب التفكير المنطقي وإدراك العلاقات بين الأعداد العشرية ومكملاتها نحو الأعداد الصحيحة. التدرج من العمليات البسيطة (0.3 + 0.5) إلى العمليات المركبة مع الحمل والتعويض يضمن استيعاباً عميقاً ومستداماً لمهارات الحساب الذهني.
          </p>
        </section>
      </article>
    </div>
  );
};
