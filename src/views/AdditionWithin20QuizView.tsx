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

interface AdditionWithin20QuizViewProps {
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
    num1: 8,
    num2: 7,
    question: 'كم حاصل جمع 8 مع 7؟',
    options: [14, 15, 16, 13],
    correctAnswer: 15,
    hint: 'استخدم تكوين العشرة: خذ 2 من 7 لتكمل 8 إلى 10، يتبقى 5 فيكون الناتج 15',
    explanation: '8 + 7 = (8 + 2) + 5 = 10 + 5 = 15.',
  },
  {
    id: 2,
    num1: 9,
    num2: 6,
    question: 'كم حاصل جمع 9 مع 6؟',
    options: [14, 15, 16, 17],
    correctAnswer: 15,
    hint: 'الرقم 9 يحتاج 1 فقط ليصبح 10، خذ 1 من 6 ويتبقى 5',
    explanation: '9 + 6 = 10 + 5 = 15.',
  },
  {
    id: 3,
    num1: 12,
    num2: 5,
    question: 'كم حاصل جمع 12 مع 5؟',
    options: [16, 17, 18, 19],
    correctAnswer: 17,
    hint: 'اجمع الآحاد: 2 + 5 = 7، مع بقاء منزلة العشرات 1 ليصبح 17',
    explanation: '12 + 5 = 17.',
  },
  {
    id: 4,
    num1: 7,
    num2: 6,
    question: 'كم حاصل جمع 7 مع 6؟',
    options: [12, 13, 14, 15],
    correctAnswer: 13,
    hint: 'استخدم الضعف: 6 + 6 = 12، وزد واحداً فيكون 13',
    explanation: '7 + 6 = (6 + 6) + 1 = 12 + 1 = 13.',
  },
  {
    id: 5,
    num1: 9,
    num2: 9,
    question: 'كم حاصل جمع 9 مع 9؟',
    options: [16, 17, 18, 19],
    correctAnswer: 18,
    hint: 'ضعف الرقم 9، أو 10 + 10 ناقص 2',
    explanation: '9 + 9 = 18.',
  },
  {
    id: 6,
    num1: 11,
    num2: 8,
    question: 'كم حاصل جمع 11 مع 8؟',
    options: [18, 19, 20, 17],
    correctAnswer: 19,
    hint: 'اجمع 1 مع 8 لتحصل على 9 في الآحاد، والعشرات 1 فيكون 19',
    explanation: '11 + 8 = 19.',
  },
  {
    id: 7,
    num1: 8,
    num2: 8,
    question: 'كم حاصل جمع 8 مع 8؟',
    options: [15, 16, 17, 18],
    correctAnswer: 16,
    hint: 'ضعف العدد 8 الشهير في جداول الضرب والجمع',
    explanation: '8 + 8 = 16.',
  },
  {
    id: 8,
    num1: 14,
    num2: 4,
    question: 'كم حاصل جمع 14 مع 4؟',
    options: [17, 18, 19, 16],
    correctAnswer: 18,
    hint: '4 + 4 = 8 في الآحاد، إذن الناتج 18',
    explanation: '14 + 4 = 18.',
  },
  {
    id: 9,
    num1: 6,
    num2: 8,
    question: 'كم حاصل جمع 6 مع 8؟',
    options: [13, 14, 15, 12],
    correctAnswer: 14,
    hint: 'ابدأ بالعدد 8 وأضف 2 لتصبح 10، يتبقى 4 فيكون 14',
    explanation: '6 + 8 = 14.',
  },
  {
    id: 10,
    num1: 13,
    num2: 6,
    question: 'كم حاصل جمع 13 مع 6؟',
    options: [18, 19, 20, 17],
    correctAnswer: 19,
    hint: '3 + 6 = 9 في خانة الآحاد، والناتج 19',
    explanation: '13 + 6 = 19 وهو عدد فردي يسبق العشرين.',
  },
];

export const AdditionWithin20QuizView: React.FC<AdditionWithin20QuizViewProps> = ({
  onGoHome,
  onGoDomain,
  onGoArithmetic,
  onGoAdditionTests,
}) => {
  const { themeClasses } = useEyeTheme();

  // State
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const [isCompleted, setIsCompleted] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [copiedUrl, setCopiedUrl] = useState(false);

  const currentQ = QUIZ_QUESTIONS[currentIndex];
  const totalQuestions = QUIZ_QUESTIONS.length;
  const progressPercent = Math.round(((currentIndex + 1) / totalQuestions) * 100);

  // Score calculation
  const correctCount = QUIZ_QUESTIONS.reduce((count, q) => {
    return userAnswers[q.id] === q.correctAnswer ? count + 1 : count;
  }, 0);

  const directUrl = `${window.location.origin}/math/arithmetic/addition/within-20`;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(directUrl);
    setCopiedUrl(true);
    setTimeout(() => setCopiedUrl(false), 2000);
  };

  const handleSelectOption = (option: number) => {
    setUserAnswers((prev) => ({
      ...prev,
      [currentQ.id]: option,
    }));
  };

  const handleNext = () => {
    setShowHint(false);
    if (currentIndex < totalQuestions - 1) {
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
    setUserAnswers({});
    setCurrentIndex(0);
    setIsCompleted(false);
    setShowHint(false);
  };

  const getEncouragement = (score: number) => {
    if (score === 10) {
      return {
        title: 'مذهل ورائع! درجة كاملة في الجمع حتى 20 ',
        desc: 'أحسنت صنعاً! لقد أتقنت استراتيجيات تكوين العشرة والجمع حتى 20 بكفاءة وسرعة فائقة.',
        color: 'text-emerald-700 dark:text-emerald-300',
      };
    }
    if (score >= 8) {
      return {
        title: 'أداء ممتاز جداً! ',
        desc: 'أنت قريب جداً من الإتقان التام. القليل من الممارسة على مسائل تكوين العشرة وستصل للعلامة الكاملة.',
        color: 'text-[#127052] dark:text-[#5EB5A1]',
      };
    }
    if (score >= 5) {
      return {
        title: 'بداية جيدة وتقدم ملحوظ! ',
        desc: 'مرحلة الجمع حتى 20 تتطلب تدريباً ذهنياً. راجع الاستراتيجيات المشروحة في المقال بالأسفل وأعد الاختبار.',
        color: 'text-amber-700 dark:text-amber-300',
      };
    }
    return {
      title: 'تدرب وسوف تتفوق! تنبيه:',
      desc: 'الرياضيات تتقوى بالتكرار واستعمال استراتيجية تكوين العدد 10. اقرأ الإرشادات وجرب مرة أخرى.',
      color: 'text-[#5E5143] dark:text-[#A3B8B4]',
    };
  };

  const assessment = getEncouragement(correctCount);

  return (
    <div className="space-y-6 pb-20 text-right">
      {/* Schema.org Structured Data (JSON-LD) for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Quiz',
            name: 'الجمع ضمن العدد 20',
            description: 'اختبار تفاعلي لقياس إتقان جمع الأعداد حتى 20 مع استراتيجيات الحساب الذهني وتكوين العشرة ودليل تعليمي شامل.',
            educationalLevel: 'Beginner / الابتدائي والتأسيسي',
            typicalAgeRange: '6-10',
            about: {
              '@type': 'Thing',
              name: 'الحساب الأساسي والجمع حتى 20',
            },
            url: directUrl,
          }),
        }}
      />

      {/* Breadcrumb Navigation */}
      <Breadcrumbs
        items={[
          { label: 'الرئيسية', onClick: onGoHome },
          { label: 'الرياضيات الأساسية', onClick: onGoDomain },
          { label: 'الحساب الأساسي', onClick: onGoArithmetic },
          { label: 'اختبارات الجمع', onClick: onGoAdditionTests },
          { label: 'الجمع ضمن العدد 20', active: true },
        ]}
      />

      {/* TOP COMPACT BAR: Simplified layout matching the first test */}
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
                المستوى: سهل جداً / للأطفال والمبتدئين
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
                className={`flex items-center gap-1.5 text-xs font-medium text-amber-700 dark:text-amber-400 hover:underline cursor-pointer`}
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
                <span className="font-semibold block">تلميح استراتيجي:</span>
                <span>{currentQ.hint}</span>
              </div>
            </div>
          )}

          {/* Question Display Card */}
          <div className="text-center py-4 space-y-3">
            <h2 className={`text-base sm:text-lg font-medium ${themeClasses.textSecondary}`}>
              {currentQ.question}
            </h2>

            {/* RTL MATH OPERATION: strictly from Right to Left using standard numbers */}
            <div
              dir="rtl"
              className={`inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-black/[0.02] dark:bg-white/[0.03] border ${themeClasses.border} text-3xl sm:text-4xl font-bold font-sans text-[#127052] dark:text-[#5EB5A1] select-none shadow-2xs`}
            >
              <span>{currentQ.num1}</span>
              <span className="text-[#127052]/70 dark:text-[#5EB5A1]/70">+</span>
              <span>{currentQ.num2}</span>
              <span className="text-[#127052]/70 dark:text-[#5EB5A1]/70">=</span>
              <span className="text-amber-600 dark:text-amber-400">؟</span>
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
                const isSelected = userAnswers[currentQ.id] === option;

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

                      {/* Standard Digits */}
                      <span
                        className={`text-lg sm:text-xl font-bold font-sans ${
                          isSelected
                            ? 'text-[#127052] dark:text-[#5EB5A1]'
                            : themeClasses.textPrimary
                        }`}
                      >
                        {option}
                      </span>
                    </div>

                    {isSelected && (
                      <div className="w-5 h-5 rounded-full bg-[#127052] text-white flex items-center justify-center">
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
              disabled={userAnswers[currentQ.id] === undefined}
              className={`px-6 py-2.5 rounded-xl text-xs sm:text-sm font-medium text-white flex items-center gap-2 transition-all shadow-2xs ${
                userAnswers[currentQ.id] === undefined
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
        /* FINAL RESULTS SCREEN */
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
                النتيجة: {correctCount} من {totalQuestions} ({Math.round((correctCount / totalQuestions) * 100)}%)
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
              {QUIZ_QUESTIONS.map((q) => {
                const userAns = userAnswers[q.id];
                const isCorrect = userAns === q.correctAnswer;

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
                        {q.question}
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
          SEO Article Section: الجمع ضمن العدد 20 (> 350 حرفاً)
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
            الجمع ضمن العدد 20
          </h2>

          <p className={`text-xs ${themeClasses.textMuted}`}>
            دليل تربوي شامل واستراتيجيات حسابية ذكية لتمكين الأطفال من مهارات جمع الأعداد حتى 20 بطلاقة وسرعة بديهة.
          </p>
        </div>

        {/* Section 1: أهمية الانتقال للجمع حتى 20 وتجاوز العشرة */}
        <section className="space-y-2.5">
          <h3 className={`text-base font-semibold ${themeClasses.textPrimary} flex items-center gap-2`}>
            <Sparkles className="w-4 h-4 text-[#127052] dark:text-[#5EB5A1]" />
            <span>أولاً: محطة الانتقال الكبرى.. تجاوز العشرة وبناء الأساس العددي</span>
          </h3>
          <p className={`text-xs sm:text-sm ${themeClasses.textSecondary}`}>
            يمثّل <strong>الجمع ضمن العدد 20</strong> النقلة النوعية الأهم في رحلة تعلم الرياضيات للمرحلة الابتدائية؛ إذ ينتقل فيه التلميذ من مجرد جمع أرقام مفردة يمكن تمثيلها مباشرة بأصابع اليدين إلى مرحلة التجريد وعبور حاجز الرقم 10 (Bridging Ten). هذا المستوى يعلم الطفل تفكيك الأرقام وتركيبها، ويفسر مفهوم منزلة العشرات والآحاد بصورة عملية ورائعة، مما يمهد الطريق لإتقان الحساب الذهني المتقدم في المراحل اللاحقة.
          </p>
        </section>

        {/* Section 2: استراتيجيات الحساب الذهني الفعالة */}
        <section className="space-y-3">
          <h3 className={`text-base font-semibold ${themeClasses.textPrimary} flex items-center gap-2`}>
            <Lightbulb className="w-4 h-4 text-amber-600" />
            <span>ثانياً: الاستراتيجيات الثلاث الأقوى لإتقان الجمع حتى 20</span>
          </h3>
          <p className={`text-xs sm:text-sm ${themeClasses.textSecondary}`}>
            بدلاً من الاعتماد على العد الطويل على الأصابع الذي قد يسبب ارتباكاً عند تجاوز الرقم 10، نعلّم الأطفال الاستراتيجيات العقلية المرنة:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 pt-1">
            <div className={`p-4 rounded-xl border ${themeClasses.border} ${themeClasses.pillBg} space-y-1.5`}>
              <span className={`font-semibold text-xs sm:text-sm ${themeClasses.textPrimary} block`}>
                1. استراتيجية تكوين العشرة (Make a 10)
              </span>
              <p className={`text-xs ${themeClasses.textSecondary}`}>
                وهي أهم تقنية: ننظر إلى العدد الأكبر ونرى كم يحتاج ليصل إلى 10، ثم نستلفه من العدد الأصغر. مثال: 8 + 7 تصبح 8 + 2 = 10، ويتبقى من السبعة 5، فالناتج فوراً هو 15!
              </p>
            </div>

            <div className={`p-4 rounded-xl border ${themeClasses.border} ${themeClasses.pillBg} space-y-1.5`}>
              <span className={`font-semibold text-xs sm:text-sm ${themeClasses.textPrimary} block`}>
                2. استراتيجية المضاعفة وجوار الضعف (Doubles)
              </span>
              <p className={`text-xs ${themeClasses.textSecondary}`}>
                يحفظ الأطفال بسهولة مضاعفات الأرقام مثل 6 + 6 = 12 و 7 + 7 = 14 و 8 + 8 = 16. وعند حل مسألة مثل 7 + 8، يفكر الطفل: "7 + 7 = 14، زائد 1 إضافي يساوي 15".
              </p>
            </div>

            <div className={`p-4 rounded-xl border ${themeClasses.border} ${themeClasses.pillBg} space-y-1.5`}>
              <span className={`font-semibold text-xs sm:text-sm ${themeClasses.textPrimary} block`}>
                3. جمع العشرات مع الآحاد
              </span>
              <p className={`text-xs ${themeClasses.textSecondary}`}>
                في مسائل مثل 13 + 5، يركز الطفل على جمع خانة الآحاد أولاً: 3 + 5 = 8، مع بقاء العشرة كاملة ليصبح الناتج 18 بكل سهولة ودون تشتيت.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: كيف يطور الاختبار التفاعلي الطلاقة الذهنية */}
        <section className="space-y-2.5">
          <h3 className={`text-base font-semibold ${themeClasses.textPrimary} flex items-center gap-2`}>
            <TrendingUp className="w-4 h-4 text-[#127052] dark:text-[#5EB5A1]" />
            <span>ثالثاً: فوائد الاختبار التفاعلي في تثبيت حقائق الجمع</span>
          </h3>
          <p className={`text-xs sm:text-sm ${themeClasses.textSecondary}`}>
            يوفر هذا الاختبار الرقمي بيئة تدريب هادئة مريحة للعين، تمكن الطفل من اختبار مهاراته في 10 مسائل متدرجة الصعوبة. ومن خلال التغذية الراجعة الفورية وشرح طريقة الحل لكل مسألة، يكتسب الطفل القدرة على التحقق الذاتي وتصحيح تفكيره. ويتحول التردد في حساب الأرقام الكبيرة إلى طلاقة وسرعة بديهة تصاحب الطفل في كافة صفوفه الدراسية.
          </p>
        </section>

        {/* Educational Summary Tips Card */}
        <div className="p-4 rounded-xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800/30 flex items-center justify-between flex-wrap gap-3 text-xs">
          <div className="flex items-center gap-2 text-emerald-800 dark:text-emerald-300">
            <Heart className="w-4 h-4 shrink-0 text-emerald-600" />
            <span className="font-semibold">توجيه تربوي: شجع الطفل على التفكير بصوت مسموع وشرح الاستراتيجية التي استخدمها للوصول للناتج!</span>
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
