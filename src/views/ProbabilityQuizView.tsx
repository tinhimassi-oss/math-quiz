import React, { useState } from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { useEyeTheme } from '../context/ThemeContext';
import { ProbabilityBacklinkBox } from '../components/ProbabilityBacklinkBox';
import {
  PROBABILITY_QUIZZES,
  ProbabilityQuizType,
} from '../data/probabilityTestsData';
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

interface ProbabilityQuizViewProps {
  quizType: ProbabilityQuizType;
  onGoHome: () => void;
  onSelectDomain: (domainId: string) => void;
  onSelectSubcategory: (domainId: string, subcategoryId: string) => void;
}

export const ProbabilityQuizView: React.FC<ProbabilityQuizViewProps> = ({
  quizType,
  onGoHome,
  onSelectDomain,
  onSelectSubcategory,
}) => {
  const { themeClasses } = useEyeTheme();
  const quizConfig = PROBABILITY_QUIZZES[quizType];

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
          عذراً، لم يتم العثور على الاختبار المطلوب في قسم الاحتمالات.
        </p>
        <button
          onClick={() => onSelectSubcategory('statistics-probability', 'probability')}
          className="px-4 py-2 bg-amber-500 text-white rounded-lg"
        >
          العودة لاختبارات نظرية الاحتمالات
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

  const handleSelectAnswer = (option: string) => {
    if (isCurrentAnswered) return;

    const isCorrect = option === currentQ.correctAnswer;
    playSound(isCorrect);

    const updated = {
      ...selectedAnswers,
      [currentQ.id]: option,
    };
    setSelectedAnswers(updated);

    if (Object.keys(updated).length === totalQuestions) {
      setIsCompleted(true);
    }
  };

  const handleToggleHint = (qId: number) => {
    setRevealedHints((prev) => ({
      ...prev,
      [qId]: !prev[qId],
    }));
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setRevealedHints({});
    setCurrentQuestionIndex(0);
    setIsCompleted(false);
    setShowCertificate(false);
  };

  const correctCount = Object.entries(selectedAnswers).reduce((acc, [qIdStr, ans]) => {
    const qId = Number(qIdStr);
    const q = quizConfig.questions.find((item) => item.id === qId);
    return q && q.correctAnswer === ans ? acc + 1 : acc;
  }, 0);

  const scorePercentage = Math.round((correctCount / totalQuestions) * 100);

  const getDifficultyColor = (diff: string) => {
    switch (diff) {
      case 'سهل':
        return 'text-emerald-600 bg-emerald-500/10 border-emerald-500/20';
      case 'متوسط':
        return 'text-amber-600 bg-amber-500/10 border-amber-500/20';
      case 'متقدم':
        return 'text-rose-600 bg-rose-500/10 border-rose-500/20';
      default:
        return 'text-slate-600 bg-slate-500/10 border-slate-500/20';
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 space-y-8 animate-in fade-in duration-300">
      {/* Navigation Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'الرئيسية', onClick: onGoHome },
          {
            label: 'الإحصاء والاحتمالات',
            onClick: () => onSelectDomain('statistics-probability'),
          },
          {
            label: 'الاحتمالات',
            onClick: () => onSelectSubcategory('statistics-probability', 'probability'),
          },
          { label: quizConfig.title },
        ]}
      />

      {/* Quiz Top Header Banner */}
      <div
        className={`rounded-2xl border ${themeClasses.border} ${themeClasses.cardBg} p-6 sm:p-8 shadow-sm transition-all`}
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-3xl sm:text-4xl p-2.5 rounded-2xl bg-amber-500/10 border border-amber-500/20">
              {quizConfig.emoji}
            </span>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs px-2.5 py-0.5 rounded-full font-bold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                  {quizConfig.badge}
                </span>
                <span className="font-mono text-xs text-black/50 dark:text-white/50 bg-black/5 dark:bg-white/5 px-2 py-0.5 rounded">
                  {quizConfig.mathSymbol}
                </span>
              </div>
              <h1 className={`text-xl sm:text-2xl font-black ${themeClasses.textPrimary} mt-1`}>
                {quizConfig.title}
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-2 self-end sm:self-auto">
            <button
              onClick={() => setSoundEnabled(!soundEnabled)}
              className={`p-2 rounded-xl border ${themeClasses.border} hover:bg-black/5 dark:hover:bg-white/5 transition-colors`}
              title={soundEnabled ? 'كتم الصوت' : 'تفعيل المؤثرات الصوتية'}
            >
              {soundEnabled ? (
                <Volume2 className="w-4 h-4 text-amber-600 dark:text-amber-400" />
              ) : (
                <VolumeX className="w-4 h-4 text-black/40 dark:text-white/40" />
              )}
            </button>
            <button
              onClick={handleReset}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold border ${themeClasses.border} hover:bg-black/5 dark:hover:bg-white/5 transition-colors`}
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>إعادة البدء</span>
            </button>
          </div>
        </div>

        <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} mt-4 leading-relaxed`}>
          {quizConfig.description}
        </p>

        {/* Question Stepper Indicator */}
        <div className="mt-6 pt-4 border-t border-black/5 dark:border-white/5">
          <div className="flex items-center justify-between text-xs font-semibold mb-2">
            <span className={themeClasses.textSecondary}>
              التقدم: {Object.keys(selectedAnswers).length} من {totalQuestions} أسئلة
            </span>
            <span className="text-amber-600 dark:text-amber-400 font-mono">
              {Math.round((Object.keys(selectedAnswers).length / totalQuestions) * 100)}%
            </span>
          </div>

          <div className="grid grid-cols-10 gap-1.5 sm:gap-2">
            {quizConfig.questions.map((q, idx) => {
              const isAnswered = selectedAnswers[q.id] !== undefined;
              const isCurrent = idx === currentQuestionIndex;
              const isCorrect = isAnswered && selectedAnswers[q.id] === q.correctAnswer;

              let dotStyle = 'bg-black/10 dark:bg-white/10 text-black/60 dark:text-white/60';
              if (isAnswered) {
                dotStyle = isCorrect
                  ? 'bg-emerald-500 text-white shadow-sm shadow-emerald-500/30'
                  : 'bg-rose-500 text-white shadow-sm shadow-rose-500/30';
              }
              if (isCurrent) {
                dotStyle += ' ring-2 ring-amber-500 ring-offset-2 ring-offset-white dark:ring-offset-slate-900';
              }

              return (
                <button
                  key={q.id}
                  onClick={() => setCurrentQuestionIndex(idx)}
                  className={`h-7 sm:h-8 rounded-lg font-mono text-xs font-bold transition-all flex items-center justify-center cursor-pointer ${dotStyle}`}
                >
                  {idx + 1}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Interactive Question Card */}
      <div
        className={`rounded-2xl border ${themeClasses.border} ${themeClasses.cardBg} p-6 sm:p-8 shadow-sm transition-all space-y-6 text-right`}
      >
        <div className="flex items-center justify-between gap-2 border-b border-black/5 dark:border-white/5 pb-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-black/50 dark:text-white/50">
              السؤال {currentQuestionIndex + 1} من {totalQuestions}
            </span>
            <span
              className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${getDifficultyColor(
                currentQ.difficulty
              )}`}
            >
              {currentQ.difficulty}
            </span>
          </div>

          <button
            onClick={() => handleToggleHint(currentQ.id)}
            className="flex items-center gap-1.5 text-xs text-amber-600 dark:text-amber-400 hover:underline cursor-pointer"
          >
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{revealedHints[currentQ.id] ? 'إخفاء التلميح' : 'مساعدة / تلميح'}</span>
          </button>
        </div>

        {/* Hint Box */}
        {revealedHints[currentQ.id] && (
          <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-900 dark:text-amber-200 animate-in fade-in duration-200">
            <strong>💡 تلميح رياضي: </strong>
            {currentQ.hint}
          </div>
        )}

        {/* Question Text */}
        <h2 className={`text-base sm:text-lg font-bold ${themeClasses.textPrimary} leading-relaxed`}>
          {currentQ.question}
        </h2>

        {/* Options */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          {currentQ.options.map((option, optIdx) => {
            const isSelected = currentSelected === option;
            const isCorrect = option === currentQ.correctAnswer;

            let buttonClass = `p-4 rounded-xl border text-right transition-all font-medium text-xs sm:text-sm flex items-center justify-between cursor-pointer `;

            if (!isCurrentAnswered) {
              buttonClass += `border-black/10 dark:border-white/10 hover:border-amber-500/50 hover:bg-black/5 dark:hover:bg-white/5 ${themeClasses.textPrimary}`;
            } else {
              if (isCorrect) {
                buttonClass += `border-emerald-500 bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 font-bold`;
              } else if (isSelected) {
                buttonClass += `border-rose-500 bg-rose-500/10 text-rose-800 dark:text-rose-300 font-bold`;
              } else {
                buttonClass += `border-black/5 dark:border-white/5 opacity-50 ${themeClasses.textSecondary}`;
              }
            }

            return (
              <button
                key={optIdx}
                disabled={isCurrentAnswered}
                onClick={() => handleSelectAnswer(option)}
                className={buttonClass}
              >
                <span>{option}</span>
                {isCurrentAnswered && isCorrect && (
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mr-2" />
                )}
                {isCurrentAnswered && isSelected && !isCorrect && (
                  <XCircle className="w-4 h-4 text-rose-600 dark:text-rose-400 shrink-0 mr-2" />
                )}
              </button>
            );
          })}
        </div>

        {/* Detailed Explanation */}
        {isCurrentAnswered && (
          <div
            className={`p-4 rounded-xl border text-xs sm:text-sm space-y-1.5 animate-in fade-in duration-200 ${
              currentSelected === currentQ.correctAnswer
                ? 'bg-emerald-500/5 border-emerald-500/20 text-emerald-950 dark:text-emerald-200'
                : 'bg-rose-500/5 border-rose-500/20 text-rose-950 dark:text-rose-200'
            }`}
          >
            <div className="font-bold flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>الشرح والخطوات الرياضية:</span>
            </div>
            <p className="leading-relaxed opacity-90">{currentQ.explanation}</p>
          </div>
        )}

        {/* Bottom Pagination Controls */}
        <div className="flex items-center justify-between pt-4 border-t border-black/5 dark:border-white/5">
          <button
            disabled={currentQuestionIndex === 0}
            onClick={() => setCurrentQuestionIndex((prev) => Math.max(0, prev - 1))}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold border ${themeClasses.border} disabled:opacity-30 disabled:cursor-not-allowed`}
          >
            <ChevronRight className="w-4 h-4" />
            <span>السابق</span>
          </button>

          <span className="text-xs text-black/40 dark:text-white/40">
            {currentQuestionIndex + 1} / {totalQuestions}
          </span>

          <button
            disabled={currentQuestionIndex === totalQuestions - 1}
            onClick={() => setCurrentQuestionIndex((prev) => Math.min(totalQuestions - 1, prev + 1))}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold border ${themeClasses.border} disabled:opacity-30 disabled:cursor-not-allowed`}
          >
            <span>التالي</span>
            <ChevronLeft className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Completion Card */}
      {isCompleted && (
        <div
          className={`rounded-2xl border-2 border-amber-500/30 bg-gradient-to-br from-amber-500/5 via-transparent to-amber-500/10 p-6 sm:p-8 text-center space-y-4 animate-in zoom-in-95 duration-300 shadow-lg`}
        >
          <div className="w-16 h-16 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center mx-auto text-3xl">
            🏆
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
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-amber-600 text-white hover:bg-amber-700 transition-colors shadow-sm cursor-pointer"
            >
              <Award className="w-4 h-4" />
              <span>إصدار شهادة إتقان في نظرية الاحتمالات</span>
            </button>
            <button
              onClick={handleReset}
              className={`inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold border ${themeClasses.border} hover:bg-black/5 dark:hover:bg-white/5 transition-colors cursor-pointer`}
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
              🎓
            </div>

            <div className="space-y-1">
              <h3 className={`text-lg sm:text-xl font-black ${themeClasses.textPrimary}`}>
                شهادة إتقان في نظرية الاحتمالات
              </h3>
              <p className={`text-xs ${themeClasses.textSecondary}`}>
                أكاديمية الرياضيات والإحصاء التفاعلي
              </p>
            </div>

            <div className="space-y-2 text-right">
              <label
                htmlFor="student-name-input-prob"
                className={`text-xs font-bold ${themeClasses.textPrimary}`}
              >
                اسم الطالب / الباحث:
              </label>
              <input
                id="student-name-input-prob"
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
              <div className="pt-2 text-[10px] text-amber-600/70 dark:text-amber-400/70 font-mono">
                كود الاعتماد: PROB-{quizConfig.id.toUpperCase().slice(0, 8)}-
                {Math.floor(1000 + Math.random() * 9000)}
              </div>
            </div>

            <div className="flex items-center justify-center gap-3 pt-2">
              <button
                onClick={() => window.print()}
                className="px-5 py-2 rounded-xl text-xs font-bold bg-amber-600 text-white hover:bg-amber-700 transition-colors cursor-pointer"
              >
                طباعة الشهادة
              </button>
              <button
                onClick={() => setShowCertificate(false)}
                className={`px-4 py-2 rounded-xl text-xs font-bold border ${themeClasses.border} hover:bg-black/5 dark:hover:bg-white/5 transition-colors cursor-pointer`}
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
            خلاصة الدرس واستنتاجات الرياضي:
          </h4>
          <p className="text-xs text-amber-900/80 dark:text-amber-200/80 leading-relaxed">
            {quizConfig.article.summary}
          </p>
        </div>
      </article>

      {/* Backlink Box for Interconnected Navigation */}
      <ProbabilityBacklinkBox
        currentTestId={quizType}
        relatedIds={quizConfig.relatedIds}
      />
    </div>
  );
};
