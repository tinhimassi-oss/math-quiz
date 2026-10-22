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

interface FractionsAdditionQuizViewProps {
  onGoHome: () => void;
  onGoDomain: () => void;
  onGoArithmetic: () => void;
  onGoAdditionTests: () => void;
}

interface QuestionItem {
  id: number;
  fraction1: string;
  fraction2: string;
  question: string;
  options: string[];
  correctAnswer: string;
  hint: string;
  explanation: string;
}

/**
 * Component to display fractions vertically:
 * Numerator on top, fraction bar in the middle, Denominator on the bottom
 */
export const FractionDisplay: React.FC<{
  value: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}> = ({ value, size = 'md', className = '' }) => {
  if (typeof value === 'string' && value.includes('/')) {
    const [num, den] = value.split('/');

    const sizeStyles = {
      xs: {
        text: 'text-[11px]',
        border: 'border-b',
        py: 'py-[1px]',
        minW: 'min-w-[14px]',
      },
      sm: {
        text: 'text-xs',
        border: 'border-b',
        py: 'py-[1px]',
        minW: 'min-w-[16px]',
      },
      md: {
        text: 'text-base sm:text-lg',
        border: 'border-b-2',
        py: 'py-0.5',
        minW: 'min-w-[22px]',
      },
      lg: {
        text: 'text-xl sm:text-2xl',
        border: 'border-b-2',
        py: 'py-0.5',
        minW: 'min-w-[26px]',
      },
      xl: {
        text: 'text-2xl sm:text-4xl',
        border: 'border-b-[3px]',
        py: 'py-1',
        minW: 'min-w-[32px]',
      },
    }[size];

    return (
      <span
        className={`inline-flex flex-col items-center justify-center align-middle font-sans font-bold leading-none select-none ${className}`}
      >
        <span className={`${sizeStyles.text} ${sizeStyles.minW} text-center leading-none px-1`}>
          {num.trim()}
        </span>
        <span
          className={`w-full ${sizeStyles.border} border-current ${sizeStyles.py} block my-0.5 opacity-90`}
        />
        <span className={`${sizeStyles.text} ${sizeStyles.minW} text-center leading-none px-1`}>
          {den.trim()}
        </span>
      </span>
    );
  }

  return <span className={className}>{value}</span>;
};

const QUIZ_QUESTIONS: QuestionItem[] = [
  {
    id: 1,
    fraction1: '1/5',
    fraction2: '2/5',
    question: 'كم حاصل جمع 1/5 مع 2/5؟',
    options: ['3/5', '3/10', '2/5', '4/5'],
    correctAnswer: '3/5',
    hint: 'المقامات متساوية (5)، اجمع البسطين مباشرة: 1 + 2 = 3',
    explanation: 'عندما يتساوى المقامان، نجمع البسطين ونبقي المقام كما هو: 1/5 + 2/5 = (1 + 2) / 5 = 3/5.',
  },
  {
    id: 2,
    fraction1: '2/7',
    fraction2: '3/7',
    question: 'كم حاصل جمع 2/7 مع 3/7؟',
    options: ['4/7', '5/7', '5/14', '6/7'],
    correctAnswer: '5/7',
    hint: 'احتفظ بالمقام الموحد 7 واجمع البسطين: 2 + 3',
    explanation: 'المقام موحد: 2/7 + 3/7 = (2 + 3) / 7 = 5/7.',
  },
  {
    id: 3,
    fraction1: '1/4',
    fraction2: '2/4',
    question: 'كم حاصل جمع 1/4 مع 2/4؟',
    options: ['3/4', '3/8', '2/4', '1/2'],
    correctAnswer: '3/4',
    hint: 'ربع زائد ربعين يساوي ثلاثة أرباع',
    explanation: '1/4 + 2/4 = (1 + 2) / 4 = 3/4.',
  },
  {
    id: 4,
    fraction1: '3/8',
    fraction2: '2/8',
    question: 'كم حاصل جمع 3/8 مع 2/8؟',
    options: ['5/16', '5/8', '6/8', '4/8'],
    correctAnswer: '5/8',
    hint: 'المقام المشترك هو 8، اجمع 3 + 2 في البسط',
    explanation: '3/8 + 2/8 = (3 + 2) / 8 = 5/8.',
  },
  {
    id: 5,
    fraction1: '1/2',
    fraction2: '1/4',
    question: 'كم حاصل جمع 1/2 مع 1/4؟',
    options: ['3/4', '2/6', '2/4', '1/3'],
    correctAnswer: '3/4',
    hint: 'وحّد المقام بتحويل النصف 1/2 إلى 2/4، ثم اجمع: 2/4 + 1/4',
    explanation: 'نوحد المقامات بجعل النصف كسر مكافئ بمقام 4: 1/2 = 2/4، ثم 2/4 + 1/4 = 3/4.',
  },
  {
    id: 6,
    fraction1: '2/9',
    fraction2: '4/9',
    question: 'كم حاصل جمع 2/9 مع 4/9؟',
    options: ['5/9', '6/9', '6/18', '7/9'],
    correctAnswer: '6/9',
    hint: 'اجمع البسطين 2 + 4 مع الإبقاء على المقام 9',
    explanation: '2/9 + 4/9 = (2 + 4) / 9 = 6/9 (وتكافئ 2/3 بعد التبسيط).',
  },
  {
    id: 7,
    fraction1: '1/3',
    fraction2: '1/6',
    question: 'كم حاصل جمع 1/3 مع 1/6؟',
    options: ['3/6', '2/9', '2/6', '4/6'],
    correctAnswer: '3/6',
    hint: 'وحّد المقامات: 1/3 يكافئ 2/6، ثم اجمع 2/6 + 1/6',
    explanation: '1/3 = 2/6، وبالتالي 2/6 + 1/6 = 3/6 (والتي تساوي 1/2 نصفاً كاملاً).',
  },
  {
    id: 8,
    fraction1: '3/10',
    fraction2: '4/10',
    question: 'كم حاصل جمع 3/10 مع 4/10؟',
    options: ['6/10', '7/10', '7/20', '8/10'],
    correctAnswer: '7/10',
    hint: 'المقام 10 ثابت، اجمع 3 و 4 في البسط',
    explanation: '3/10 + 4/10 = (3 + 4) / 10 = 7/10.',
  },
  {
    id: 9,
    fraction1: '2/5',
    fraction2: '1/10',
    question: 'كم حاصل جمع 2/5 مع 1/10؟',
    options: ['5/10', '3/15', '3/10', '4/10'],
    correctAnswer: '5/10',
    hint: 'حوّل 2/5 إلى كسر مقامه 10 بضرب البسط والمقام في 2 (يصبح 4/10)',
    explanation: '2/5 = 4/10، إذن 4/10 + 1/10 = 5/10 (وتساوي 1/2).',
  },
  {
    id: 10,
    fraction1: '5/12',
    fraction2: '2/12',
    question: 'كم حاصل جمع 5/12 مع 2/12؟',
    options: ['6/12', '7/12', '7/24', '8/12'],
    correctAnswer: '7/12',
    hint: 'المقام موحد 12، اجمع 5 + 2 = 7',
    explanation: '5/12 + 2/12 = (5 + 2) / 12 = 7/12.',
  },
];

export const FractionsAdditionQuizView: React.FC<FractionsAdditionQuizViewProps> = ({
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
        title: 'عبقري الكسور! نتيجة ممتازة ',
        desc: 'أتقنت جميع مسائل جمع الكسور وتوحيد المقامات ببراعة واقتدار.',
        color: 'text-emerald-700 dark:text-emerald-400',
        badge: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300',
      };
    }
    if (percentage >= 70) {
      return {
        title: 'أداء رائع جداً! أحسنت ',
        desc: 'لديك فهم متين لقواعد جمع الكسور المتشابهة والمختلفة المقامات.',
        color: 'text-[#127052] dark:text-[#5EB5A1]',
        badge: 'bg-[#127052]/10 text-[#127052] dark:bg-[#127052]/20 dark:text-[#5EB5A1]',
      };
    }
    if (percentage >= 50) {
      return {
        title: 'بداية موفقة ومحاولة جيدة ',
        desc: 'تذكر دائماً أن نوحد المقامات أولاً ونجمع البسطين فقط.',
        color: 'text-amber-700 dark:text-amber-400',
        badge: 'bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300',
      };
    }
    return {
      title: 'فرصة ممتازة للتعلم والتطوير ',
      desc: 'اقرأ الدليل الإرشادي التوضيحي أدناه وأعد الاختبار للوصول إلى النتيجة الكاملة.',
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
          { label: 'اختبار جمع الكسور', active: true },
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
              <span role="img" aria-label="كسور">÷</span>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300 text-xs font-semibold border border-emerald-200 dark:border-emerald-800/40">
                المستوى: متوسط / لطلاب المرحلة الابتدائية والمتوسطة
              </span>
              <span aria-hidden="true" className={themeClasses.textMuted}>·</span>
              <span className={`text-xs ${themeClasses.textMuted}`}>
                10 أسئلة تفاعلية
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
              اختر الإجابة الصحيحة لناتج جمع الكسرين:
            </span>

            {/* Fraction Expression rendered RTL */}
            <div
              dir="rtl"
              className="px-6 py-5 rounded-2xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/[0.06] dark:border-white/[0.08] flex items-center justify-center gap-4 sm:gap-6 font-sans select-none"
            >
              <FractionDisplay
                value={currentQ.fraction1}
                size="xl"
                className={themeClasses.textPrimary}
              />
              <span className="text-2xl sm:text-4xl font-bold text-[#127052] dark:text-[#5EB5A1]">
                +
              </span>
              <FractionDisplay
                value={currentQ.fraction2}
                size="xl"
                className={themeClasses.textPrimary}
              />
              <span className="text-2xl sm:text-4xl font-bold text-slate-400">
                =
              </span>
              <span className="text-2xl sm:text-4xl font-bold text-amber-600 dark:text-amber-400 animate-pulse">
                ؟
              </span>
            </div>

            <div className={`text-xs sm:text-sm ${themeClasses.textSecondary} text-center flex items-center justify-center gap-1.5 flex-wrap`}>
              <span>كم حاصل جمع</span>
              <FractionDisplay value={currentQ.fraction1} size="sm" />
              <span>مع</span>
              <FractionDisplay value={currentQ.fraction2} size="sm" />
              <span>؟</span>
            </div>
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
                    className={`py-3.5 sm:py-4 px-4 rounded-xl font-bold font-sans transition-all border flex items-center justify-center cursor-pointer select-none min-h-[70px] ${
                      isSelected
                        ? 'bg-[#127052] text-white border-[#0D5F45] shadow-xs scale-[1.01]'
                        : `${themeClasses.cardBg} ${themeClasses.textPrimary} border-black/[0.08] dark:border-white/[0.1] hover:border-[#127052]/50 hover:bg-black/[0.01] dark:hover:bg-white/[0.03]`
                    }`}
                  >
                    <FractionDisplay value={optionValue} size="md" />
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
                      <div className="font-bold font-sans flex items-center gap-1.5 py-1">
                        <FractionDisplay value={q.fraction1} size="sm" />
                        <span className="text-[#127052] dark:text-[#5EB5A1] font-bold">+</span>
                        <FractionDisplay value={q.fraction2} size="sm" />
                        <span className="text-slate-400">=</span>
                        <span className="text-amber-600 dark:text-amber-400">؟</span>
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
                          <FractionDisplay value={userAns} size="sm" />
                        ) : (
                          <span className="font-bold text-red-500">لم تجب</span>
                        )}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-slate-500">الإجابة الصحيحة: </span>
                        <FractionDisplay
                          value={q.correctAnswer}
                          size="sm"
                          className="text-emerald-700 dark:text-emerald-400"
                        />
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
          SEO Article Section: اختبار جمع الكسور (> 350 حرفاً)
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
            اختبار جمع الكسور
          </h2>

          <p className={`text-xs ${themeClasses.textMuted}`}>
            دليل تعليمي وتربوي شامل لفهم جمع الكسور الاعتيادية، توحيد المقامات بسهولة، وتبسيط النواتج بأبسط الطرق الذهنية المحفزة للطلاب.
          </p>
        </div>

        {/* Section 1 */}
        <section className="space-y-2.5">
          <h3 className={`text-base font-semibold ${themeClasses.textPrimary} flex items-center gap-2`}>
            <Sparkles className="w-4 h-4 text-[#127052] dark:text-[#5EB5A1]" />
            <span>ما هو مفهوم جمع الكسور ولماذا يعتبر ركيزة أساسية في الرياضيات؟</span>
          </h3>
          <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
            يمثل مفهوم الكسور الاعتيادية النقلة النوعية الأولى للطالب من عالم الأعداد الصحيحة إلى عالم الأجزاء والنسب. يعبر الكسر عن جزء من كل متكامل، حيث يمثل البسط عدد الأجزاء المأخوذة بينما يمثل المقام إجمالي عدد الأجزاء المتساوية. يُعد جمع الكسور مهارة جوهرية تبنى عليها موضوعات الجبر المتقدمة، الهندسة التحليلية، والاحتمالات. عندما يتقن المتعلم جمع الكسور، يصبح قادراً على إدراك العلاقات النسبية بين المقادير وحل المشكلات الحياتية كالقسمة العادلة والمقاييس الهندسية ووصفات الطهي والجرعات الطبية بدقة متناهية.
          </p>
        </section>

        {/* Section 2 */}
        <section className="space-y-2.5">
          <h3 className={`text-base font-semibold ${themeClasses.textPrimary} flex items-center gap-2`}>
            <TrendingUp className="w-4 h-4 text-[#127052] dark:text-[#5EB5A1]" />
            <span>القواعد الذهبية لجمع الكسور المتشابهة وغير المتشابهة</span>
          </h3>
          <div className="space-y-3">
            <div className="p-3.5 rounded-xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/[0.05] dark:border-white/[0.05]">
              <span className={`font-semibold text-xs ${themeClasses.textPrimary} block mb-1`}>
                1. جمع الكسور ذات المقامات المتشابهة (الموحدة):
              </span>
              <p className={`text-xs ${themeClasses.textSecondary}`}>
                هذه أسهل الحالات؛ حيث نحتفظ بالمقام المشترك دون أي تغيير، ونقوم فقط بجمع البسوط. على سبيل المثال: 1/5 + 2/5 = (1 + 2) / 5 = 3/5. الخطأ الشائع هنا هو جمع المقامات، وهو ما يجب تجنبه تماماً.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/[0.05] dark:border-white/[0.05]">
              <span className={`font-semibold text-xs ${themeClasses.textPrimary} block mb-1`}>
                2. جمع الكسور ذات المقامات المختلفة (توحيد المقامات):
              </span>
              <p className={`text-xs ${themeClasses.textSecondary}`}>
                إذا كانت المقامات مختلفة، نبحث عن المضاعف المشترك الأصغر للمقامات لإيجاد كسور مكافئة. مثلاً عند جمع 1/2 مع 1/4، نضرب بسط ومقام 1/2 في العدد 2 ليصبح 2/4، ثم نجمع: 2/4 + 1/4 = 3/4.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/[0.05] dark:border-white/[0.05]">
              <span className={`font-semibold text-xs ${themeClasses.textPrimary} block mb-1`}>
                3. التبسيط والاختزال إلى أبسط صورة:
              </span>
              <p className={`text-xs ${themeClasses.textSecondary}`}>
                بعد الانتهاء من عملية الجمع، يُستحسن دائماً تبسيط الكسر الناتج بقسمة البسط والمقام على العامل المشترك الأكبر بينهما، مثل تحويل 6/8 إلى 3/4 أو 5/10 إلى 1/2.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section className="space-y-2.5">
          <h3 className={`text-base font-semibold ${themeClasses.textPrimary} flex items-center gap-2`}>
            <Heart className="w-4 h-4 text-[#127052] dark:text-[#5EB5A1]" />
            <span>نصائح للمعلمين وأولياء الأمور لتجاوز رهبة الكسور</span>
          </h3>
          <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
            يعاني الكثير من الأطفال في البداية من استيعاب جمع الكسور بسبب تجريد المفاهيم. أفضل حل هو استخدام الوسائل البصرية الملموسة مثل شرائح البيتزا، قوالب الشوكولاتة، أو شرائط الورق المطوية لتمثيل الأرباع والأخماس والأسداس. كما أن التدريب التفاعلي المنتظم عبر منصات الأسئلة الذكية يسهم في تحويل القواعد الرياضية الجافة إلى تجربة بصرية ممتعة تحفز العقل وتبني ثقة التلميذ بنفسه تدريجياً.
          </p>
        </section>
      </article>
    </div>
  );
};
