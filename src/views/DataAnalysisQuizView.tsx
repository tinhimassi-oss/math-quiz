import React, { useState } from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { useEyeTheme } from '../context/ThemeContext';
import { DataAnalysisBacklinkBox } from '../components/DataAnalysisBacklinkBox';
import {
  DATA_ANALYSIS_QUIZZES,
  DataAnalysisQuizType,
} from '../data/dataAnalysisTestsData';
import {
  CheckCircle2,
  XCircle,
  HelpCircle,
  RotateCcw,
  BookOpen,
  Award,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Sparkles,
  Volume2,
  VolumeX,
} from 'lucide-react';

interface DataAnalysisQuizViewProps {
  quizType: DataAnalysisQuizType;
  onGoHome: () => void;
  onSelectDomain: (domainId: string) => void;
  onSelectSubcategory: (domainId: string, subcategoryId: string) => void;
}

export const DataAnalysisQuizView: React.FC<DataAnalysisQuizViewProps> = ({
  quizType,
  onGoHome,
  onSelectDomain,
  onSelectSubcategory,
}) => {
  const { themeClasses } = useEyeTheme();
  const quizConfig = DATA_ANALYSIS_QUIZZES[quizType];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [revealedHints, setRevealedHints] = useState<Record<number, boolean>>({});
  const [isCompleted, setIsCompleted] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [showCertificate, setShowCertificate] = useState(false);
  const [studentName, setStudentName] = useState('');

  if (!quizConfig) {
    return (
      <div className="p-8 text-center">
        <p className="text-red-500 font-bold mb-4">
          عذراً، لم يتم العثور على الاختبار المطلوب.
        </p>
        <button
          onClick={() => onSelectSubcategory('statistics-probability', 'data-analysis')}
          className="px-4 py-2 bg-amber-500 text-white rounded-lg"
        >
          العودة لاختبارات تحليل البيانات
        </button>
      </div>
    );
  }

  const currentQ = quizConfig.questions[currentQuestionIndex];
  const totalQuestions = quizConfig.questions.length;
  const isCurrentAnswered = selectedAnswers[currentQ.id] !== undefined;
  const currentSelected = selectedAnswers[currentQ.id];

  // Web Audio API sound synthesis
  const playSound = (isCorrect: boolean) => {
    if (!soundEnabled) return;
    try {
      const audioCtx = new (window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.connect(gain);
      gain.connect(audioCtx.destination);

      if (isCorrect) {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(587.33, audioCtx.currentTime); // D5
        osc.frequency.exponentialRampToValueAtTime(880, audioCtx.currentTime + 0.15); // A5
        gain.gain.setValueAtTime(0.15, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.25);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.25);
      } else {
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(260, audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(180, audioCtx.currentTime + 0.2);
        gain.gain.setValueAtTime(0.12, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.2);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.2);
      }
    } catch {
      // AudioContext could be suspended or blocked before user interaction
    }
  };

  const handleSelectOption = (option: string) => {
    if (isCurrentAnswered) return;
    const isCorrect = option === currentQ.correctAnswer;
    setSelectedAnswers((prev) => ({ ...prev, [currentQ.id]: option }));
    playSound(isCorrect);
  };

  const toggleHint = (questionId: number) => {
    setRevealedHints((prev) => ({ ...prev, [questionId]: !prev[questionId] }));
  };

  const handleNext = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setRevealedHints({});
    setCurrentQuestionIndex(0);
    setIsCompleted(false);
    setShowCertificate(false);
  };

  // Score stats
  const answeredCount = Object.keys(selectedAnswers).length;
  const correctCount = quizConfig.questions.filter(
    (q) => selectedAnswers[q.id] === q.correctAnswer
  ).length;
  const scorePercentage = Math.round((correctCount / totalQuestions) * 100);

  const breadcrumbItems = [
    { label: 'الرئيسية', onClick: onGoHome },
    {
      label: 'الإحصاء والاحتمالات',
      onClick: () => onSelectDomain('statistics-probability'),
    },
    {
      label: 'تحليل البيانات',
      onClick: () => onSelectSubcategory('statistics-probability', 'data-analysis'),
    },
    { label: quizConfig.title },
  ];

  return (
    <div className="space-y-8 pb-12 text-right">
      {/* Breadcrumbs Navigation */}
      <Breadcrumbs items={breadcrumbItems} />

      {/* Hero Header */}
      <div
        className={`rounded-2xl border ${themeClasses.border} ${themeClasses.cardBg} p-6 sm:p-8 shadow-sm transition-all`}
      >
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-black/5 dark:border-white/5 pb-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-2xl">{quizConfig.emoji}</span>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/20">
                {quizConfig.badge}
              </span>
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-black/5 dark:bg-white/5 text-amber-600 dark:text-amber-400 font-bold">
                {quizConfig.mathSymbol}
              </span>
            </div>
            <h1
              className={`text-xl sm:text-2xl font-extrabold ${themeClasses.textPrimary} mt-2`}
            >
              {quizConfig.title}
            </h1>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setSoundEnabled(!soundEnabled)}
              title={soundEnabled ? 'كتم المؤثرات الصوتية' : 'تفعيل المؤثرات'}
              className={`p-2 rounded-xl border ${themeClasses.border} hover:bg-black/5 dark:hover:bg-white/5 transition-colors text-amber-600 dark:text-amber-400`}
            >
              {soundEnabled ? (
                <Volume2 className="w-4 h-4" />
              ) : (
                <VolumeX className="w-4 h-4 text-black/40 dark:text-white/40" />
              )}
            </button>
            <button
              onClick={handleReset}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border ${themeClasses.border} text-xs font-semibold ${themeClasses.textSecondary} hover:bg-black/5 dark:hover:bg-white/5 transition-colors`}
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>إعادة الاختبار</span>
            </button>
          </div>
        </div>

        <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} mt-3 leading-relaxed`}>
          {quizConfig.description} · مدة مقترحة:{' '}
          <span className="font-semibold">{quizConfig.recommendedDuration}</span>
        </p>

        {/* Progress Tracker */}
        <div className="mt-6 space-y-2">
          <div className="flex justify-between items-center text-xs font-medium">
            <span className={themeClasses.textSecondary}>
              السؤال {currentQuestionIndex + 1} من {totalQuestions}
            </span>
            <span className="text-amber-600 dark:text-amber-400 font-bold">
              تمت الإجابة: {answeredCount} / {totalQuestions}
            </span>
          </div>
          <div className="w-full h-2 rounded-full bg-black/5 dark:bg-white/5 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-amber-500 to-amber-600 transition-all duration-300 rounded-full"
              style={{
                width: `${((currentQuestionIndex + 1) / totalQuestions) * 100}%`,
              }}
            />
          </div>
        </div>
      </div>

      {/* Quiz Interaction Card or Completion Card */}
      {!isCompleted ? (
        <div
          className={`rounded-2xl border ${themeClasses.border} ${themeClasses.cardBg} p-6 sm:p-8 shadow-sm transition-all space-y-6`}
        >
          {/* Question Header */}
          <div className="flex items-center justify-between border-b border-black/5 dark:border-white/5 pb-3">
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-amber-500/10 text-amber-700 dark:text-amber-300 flex items-center justify-center font-bold text-xs">
                {currentQ.id}
              </span>
              <span className="text-xs font-semibold px-2 py-0.5 rounded bg-black/5 dark:bg-white/5 text-black/60 dark:text-white/60">
                الصعوبة: {currentQ.difficulty}
              </span>
            </div>

            <button
              onClick={() => toggleHint(currentQ.id)}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-600 dark:text-amber-400 hover:underline"
            >
              <HelpCircle className="w-4 h-4" />
              <span>
                {revealedHints[currentQ.id] ? 'إخفاء التلميح' : 'عرض تلميح'}
              </span>
            </button>
          </div>

          {/* Hint Box */}
          {revealedHints[currentQ.id] && (
            <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-800 dark:text-amber-200 leading-relaxed">
              تنبيه: <strong>تلميح الحل:</strong> {currentQ.hint}
            </div>
          )}

          {/* Question Text */}
          <h2
            className={`text-base sm:text-lg font-bold ${themeClasses.textPrimary} leading-relaxed`}
          >
            {currentQ.question}
          </h2>

          {/* Options Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {currentQ.options.map((option, idx) => {
              const isSelected = currentSelected === option;
              const isCorrectAnswer = option === currentQ.correctAnswer;

              let btnStyle = `border ${themeClasses.border} bg-black/[0.015] dark:bg-white/[0.015] hover:bg-black/5 dark:hover:bg-white/5`;
              let icon = null;

              if (isCurrentAnswered) {
                if (isCorrectAnswer) {
                  btnStyle =
                    'border-emerald-500 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 font-bold';
                  icon = <CheckCircle2 className="w-4 h-4 text-emerald-500" />;
                } else if (isSelected) {
                  btnStyle =
                    'border-red-500 bg-red-500/10 text-red-700 dark:text-red-300 font-bold';
                  icon = <XCircle className="w-4 h-4 text-red-500" />;
                } else {
                  btnStyle = `opacity-50 border ${themeClasses.border}`;
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(option)}
                  disabled={isCurrentAnswered}
                  className={`p-4 rounded-xl text-right transition-all flex items-center justify-between gap-3 text-xs sm:text-sm ${btnStyle}`}
                >
                  <span className="leading-relaxed">{option}</span>
                  {icon}
                </button>
              );
            })}
          </div>

          {/* Explanation Box (Revealed upon answering) */}
          {isCurrentAnswered && (
            <div className="p-4 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/10 dark:border-white/10 space-y-2 mt-4">
              <div className="flex items-center gap-1.5 text-xs font-bold text-amber-600 dark:text-amber-400">
                <Sparkles className="w-4 h-4" />
                <span>الشرح والتحليل الإحصائي التفصيلي:</span>
              </div>
              <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
                {currentQ.explanation}
              </p>
            </div>
          )}

          {/* Navigation Controls */}
          <div className="flex items-center justify-between border-t border-black/5 dark:border-white/5 pt-4">
            <button
              onClick={handlePrev}
              disabled={currentQuestionIndex === 0}
              className={`inline-flex items-center gap-1 px-4 py-2 rounded-xl text-xs font-bold border ${themeClasses.border} disabled:opacity-30 disabled:cursor-not-allowed hover:bg-black/5 dark:hover:bg-white/5 transition-colors`}
            >
              <ChevronRight className="w-4 h-4" />
              <span>السابق</span>
            </button>

            <button
              onClick={handleNext}
              disabled={!isCurrentAnswered}
              className={`inline-flex items-center gap-1 px-5 py-2 rounded-xl text-xs font-bold bg-amber-600 text-white disabled:opacity-40 disabled:cursor-not-allowed hover:bg-amber-700 transition-colors shadow-sm`}
            >
              <span>
                {currentQuestionIndex === totalQuestions - 1
                  ? 'عرض النتيجة النهائية'
                  : 'التالي'}
              </span>
              <ChevronLeft className="w-4 h-4" />
            </button>
          </div>
        </div>
      ) : (
        /* Completion & Certificate Card */
        <div
          className={`rounded-2xl border ${themeClasses.border} ${themeClasses.cardBg} p-6 sm:p-10 shadow-sm transition-all text-center space-y-6`}
        >
          <div className="w-16 h-16 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center mx-auto text-3xl">
            
          </div>

          <div className="space-y-2">
            <h2 className={`text-xl sm:text-2xl font-extrabold ${themeClasses.textPrimary}`}>
              اكتمل الاختبار بنجاح!
            </h2>
            <p className={`text-xs sm:text-sm ${themeClasses.textSecondary}`}>
              لقد أتممت أسئلة {quizConfig.title} بالكامل.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3 max-w-md mx-auto py-2">
            <div className={`p-3.5 rounded-xl border ${themeClasses.border} bg-black/[0.015] dark:bg-white/[0.015]`}>
              <div className="text-xl font-bold text-amber-600 dark:text-amber-400">
                {scorePercentage}%
              </div>
              <div className={`text-[11px] ${themeClasses.textSecondary}`}>
                النسبة المئوية
              </div>
            </div>
            <div className={`p-3.5 rounded-xl border ${themeClasses.border} bg-black/[0.015] dark:bg-white/[0.015]`}>
              <div className="text-xl font-bold text-emerald-600 dark:text-emerald-400">
                {correctCount}
              </div>
              <div className={`text-[11px] ${themeClasses.textSecondary}`}>
                إجابات صحيحة
              </div>
            </div>
            <div className={`p-3.5 rounded-xl border ${themeClasses.border} bg-black/[0.015] dark:bg-white/[0.015]`}>
              <div className="text-xl font-bold text-red-600 dark:text-red-400">
                {totalQuestions - correctCount}
              </div>
              <div className={`text-[11px] ${themeClasses.textSecondary}`}>
                إجابات خاطئة
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
            <button
              onClick={() => setShowCertificate(true)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-amber-600 text-white hover:bg-amber-700 transition-colors shadow-sm"
            >
              <Award className="w-4 h-4" />
              <span>إصدار شهادة إتقان في تحليل البيانات</span>
            </button>
            <button
              onClick={handleReset}
              className={`inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold border ${themeClasses.border} hover:bg-black/5 dark:hover:bg-white/5 transition-colors`}
            >
              <RotateCcw className="w-4 h-4" />
              <span>إعادة الاختبار</span>
            </button>
          </div>
        </div>
      )}

      {/* Certificate Modal */}
      {showCertificate && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div
            className={`w-full max-w-lg rounded-2xl border ${themeClasses.border} ${themeClasses.cardBg} p-6 sm:p-8 shadow-2xl space-y-6 text-center animate-in fade-in zoom-in-95 duration-200`}
          >
            <div className="w-12 h-12 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center mx-auto text-2xl">
              
            </div>

            <div className="space-y-1">
              <h3 className={`text-lg sm:text-xl font-black ${themeClasses.textPrimary}`}>
                شهادة إتقان في تحليل البيانات
              </h3>
              <p className={`text-xs ${themeClasses.textSecondary}`}>
                أكاديمية الرياضيات وعلم البيانات الحديث
              </p>
            </div>

            <div className="space-y-2 text-right">
              <label
                htmlFor="student-name-input-da"
                className={`text-xs font-bold ${themeClasses.textPrimary}`}
              >
                اسم الطالب / المحلل:
              </label>
              <input
                id="student-name-input-da"
                type="text"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                placeholder="اكتب اسمك للشهادة..."
                className={`w-full px-4 py-2.5 rounded-xl text-xs border ${themeClasses.border} bg-black/5 dark:bg-white/5 focus:outline-none focus:ring-2 focus:ring-amber-500`}
              />
            </div>

            {/* Certificate Preview */}
            <div className="p-6 rounded-xl border border-amber-500/30 bg-amber-500/5 space-y-3">
              <div className="text-[11px] text-amber-800 dark:text-amber-300 font-semibold">
                تشهد المنصة بأن المتعلم المتميز:
              </div>
              <div className="text-base font-extrabold text-amber-700 dark:text-amber-300 underline underline-offset-4">
                {studentName.trim() || 'اسم الباحث الكريم'}
              </div>
              <div className="text-xs text-amber-900 dark:text-amber-200 leading-relaxed">
                قد أتم بنجاح متطلبات اختبار:{' '}
                <strong>{quizConfig.title}</strong> بنسبة إتقان بلغت{' '}
                <strong>{scorePercentage}%</strong>.
              </div>
              <div className="pt-2 text-[10px] text-amber-600/70 dark:text-amber-400/70">
                كود الاعتماد: DATA-{quizConfig.id.toUpperCase().slice(0, 8)}-
                {Math.floor(1000 + Math.random() * 9000)}
              </div>
            </div>

            <div className="flex items-center justify-center gap-3 pt-2">
              <button
                onClick={() => window.print()}
                className="px-5 py-2 rounded-xl text-xs font-bold bg-amber-600 text-white hover:bg-amber-700 transition-colors"
              >
                طباعة الشهادة
              </button>
              <button
                onClick={() => setShowCertificate(false)}
                className={`px-4 py-2 rounded-xl text-xs font-bold border ${themeClasses.border} hover:bg-black/5 dark:hover:bg-white/5 transition-colors`}
              >
                إغلاق
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Unique Academic Pillar Article (at least 350 words) */}
      <article
        className={`rounded-2xl border ${themeClasses.border} ${themeClasses.cardBg} p-6 sm:p-8 shadow-sm transition-all text-right space-y-6 leading-relaxed`}
      >
        <div className="border-b border-black/5 dark:border-white/5 pb-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/20 mb-2">
            <BookOpen className="w-3.5 h-3.5" />
            المقالة التأسيسية الأكاديمية للاختبار
          </div>
          <h2 className={`text-xl sm:text-2xl font-bold ${themeClasses.textPrimary}`}>
            {quizConfig.article.title}
          </h2>
          <div className="flex items-center gap-4 text-xs text-black/50 dark:text-white/50 mt-2">
            <span>وقت القراءة المقدر: {quizConfig.article.readingTimeMinutes} دقائق</span>
            <span>·</span>
            <span>عدد الكلمات: +{quizConfig.article.wordCount} كلمة</span>
          </div>
        </div>

        {/* Intro */}
        <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
          {quizConfig.article.intro}
        </p>

        {/* Sections */}
        <div className="space-y-5 pt-2">
          {quizConfig.article.sections.map((section, idx) => (
            <div key={idx} className="space-y-2">
              <h3
                className={`text-sm sm:text-base font-bold ${themeClasses.textPrimary} flex items-center gap-2`}
              >
                <span className="text-amber-600 dark:text-amber-400 font-mono">
                  {idx + 1}.
                </span>
                {section.title}
              </h3>
              <p
                className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed pr-4 border-r-2 border-amber-500/30`}
              >
                {section.content}
              </p>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="p-4 rounded-xl bg-amber-500/5 border border-amber-500/20 mt-4">
          <h4 className="text-xs font-bold text-amber-800 dark:text-amber-300 mb-1">
            خلاصة الدرس واستنتاجات المحلل:
          </h4>
          <p className="text-xs text-amber-900/80 dark:text-amber-200/80 leading-relaxed">
            {quizConfig.article.summary}
          </p>
        </div>
      </article>

      {/* Backlink Box for Interconnected Navigation */}
      <DataAnalysisBacklinkBox
        currentQuizId={quizType}
        relatedIds={quizConfig.relatedIds}
      />
    </div>
  );
};
