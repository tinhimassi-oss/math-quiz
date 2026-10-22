import React, { useState } from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { useEyeTheme } from '../context/ThemeContext';
import { WordProblemsBacklinkBox } from '../components/WordProblemsBacklinkBox';
import {
  WORD_PROBLEMS_QUIZZES,
  WordProblemsQuizType,
} from '../data/wordProblemsTestsData';
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

interface WordProblemsQuizViewProps {
  quizType: WordProblemsQuizType;
  onGoHome: () => void;
  onSelectDomain: (domainId: string) => void;
  onSelectSubcategory: (domainId: string, subcategoryId: string) => void;
}

export const WordProblemsQuizView: React.FC<WordProblemsQuizViewProps> = ({
  quizType,
  onGoHome,
  onSelectDomain,
  onSelectSubcategory,
}) => {
  const { themeClasses, isDark } = useEyeTheme();
  const quizConfig = WORD_PROBLEMS_QUIZZES[quizType];

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
          عذراً، لم يتم العثور على الاختبار المطلوب في قسم المسائل الكلامية.
        </p>
        <button
          onClick={() => onSelectSubcategory('applied-financial-math', 'word-problems')}
          className="px-4 py-2 bg-rose-600 text-white rounded-lg cursor-pointer"
        >
          العودة لاختبارات المسائل الكلامية
        </button>
      </div>
    );
  }

  const questions = quizConfig.questions;
  const currentQuestion = questions[currentQuestionIndex];
  const totalQuestions = questions.length;
  const answeredCount = Object.keys(selectedAnswers).length;

  // Sound generator
  const playSound = (isCorrect: boolean) => {
    if (!soundEnabled || typeof window === 'undefined') return;
    try {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);

      if (isCorrect) {
        osc.frequency.setValueAtTime(523.25, ctx.currentTime); // C5
        osc.frequency.setValueAtTime(659.25, ctx.currentTime + 0.1); // E5
        osc.frequency.setValueAtTime(783.99, ctx.currentTime + 0.2); // G5
        gain.gain.setValueAtTime(0.15, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.35);
        osc.start();
        osc.stop(ctx.currentTime + 0.35);
      } else {
        osc.frequency.setValueAtTime(300, ctx.currentTime);
        osc.frequency.setValueAtTime(220, ctx.currentTime + 0.1);
        gain.gain.setValueAtTime(0.15, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3);
        osc.start();
        osc.stop(ctx.currentTime + 0.3);
      }
    } catch {
      // AudioContext failure gracefully ignored
    }
  };

  const handleSelectOption = (option: string) => {
    if (selectedAnswers[currentQuestion.id]) return; // already answered
    const isCorrect = option === currentQuestion.correctAnswer;
    setSelectedAnswers((prev) => ({ ...prev, [currentQuestion.id]: option }));
    playSound(isCorrect);
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

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setRevealedHints({});
    setIsCompleted(false);
    setShowCertificate(false);
  };

  const toggleHint = (questionId: number) => {
    setRevealedHints((prev) => ({ ...prev, [questionId]: !prev[questionId] }));
  };

  // Score calculations
  const correctCount = questions.reduce((acc, q) => {
    return selectedAnswers[q.id] === q.correctAnswer ? acc + 1 : acc;
  }, 0);
  const scorePercent = Math.round((correctCount / totalQuestions) * 100);

  const getGradeInfo = () => {
    if (scorePercent >= 90) return { title: 'محلل رياضي عبقري واستثنائي 🏆', color: 'text-amber-500' };
    if (scorePercent >= 80) return { title: 'متميز جداً في النمذجة الجبرية ⭐', color: 'text-emerald-500' };
    if (scorePercent >= 60) return { title: 'مستوى جيد، تحتاج تدريباً إضافياً 👍', color: 'text-blue-500' };
    return { title: 'بحاجة إلى مزيد من التدريب على فك شفرة المسائل 📚', color: 'text-rose-500' };
  };

  const breadcrumbItems = [
    { label: 'الرئيسية', onClick: onGoHome },
    {
      label: 'الرياضيات التطبيقية والمالية',
      onClick: () => onSelectDomain('applied-financial-math'),
    },
    {
      label: 'المسائل الكلامية',
      onClick: () => onSelectSubcategory('applied-financial-math', 'word-problems'),
    },
    { label: quizConfig.title },
  ];

  return (
    <div className="space-y-8 animate-fadeIn text-right pb-12">
      {/* Breadcrumbs Navigation */}
      <Breadcrumbs items={breadcrumbItems} />

      {/* Main Quiz Header Card */}
      <div
        className={`rounded-2xl border ${themeClasses.border} ${themeClasses.cardBg} p-6 sm:p-8 shadow-sm`}
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-black/5 dark:border-white/5 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-rose-500/10 text-rose-700 dark:text-rose-300 border border-rose-500/20 mb-2">
              <span className="text-base">{quizConfig.emoji}</span>
              <span>{quizConfig.badge}</span>
            </div>
            <h1 className={`text-2xl sm:text-3xl font-extrabold ${themeClasses.textPrimary}`}>
              {quizConfig.title}
            </h1>
            <p className={`text-sm ${themeClasses.textSecondary} mt-2 max-w-2xl leading-relaxed`}>
              {quizConfig.description}
            </p>
          </div>

          <div className="flex items-center gap-3 self-end md:self-center">
            <button
              onClick={() => setSoundEnabled((prev) => !prev)}
              className={`p-2.5 rounded-xl border ${themeClasses.border} hover:bg-black/5 dark:hover:bg-white/5 transition-colors cursor-pointer text-gray-600 dark:text-gray-300`}
              title={soundEnabled ? 'كتم المؤثرات الصوتية' : 'تفعيل المؤثرات الصوتية'}
              aria-label={soundEnabled ? 'كتم الصوت' : 'تفعيل الصوت'}
            >
              {soundEnabled ? <Volume2 className="w-5 h-5 text-rose-600" /> : <VolumeX className="w-5 h-5" />}
            </button>
            <div className="text-left font-mono px-3.5 py-1.5 rounded-xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5">
              <span className="text-xs text-gray-500 dark:text-gray-400 block text-right">الوقت المقترح</span>
              <span className="text-xs font-bold text-rose-600 dark:text-rose-400">
                {quizConfig.recommendedDuration}
              </span>
            </div>
          </div>
        </div>

        {/* Progress Bar & Status */}
        <div className="mt-6">
          <div className="flex justify-between items-center text-xs font-semibold mb-2">
            <span className={themeClasses.textSecondary}>
              السؤال {currentQuestionIndex + 1} من {totalQuestions}
            </span>
            <span className="text-rose-600 dark:text-rose-400 font-bold">
              {answeredCount} مكتمل · {correctCount} إجابات صحيحة
            </span>
          </div>
          <div className="w-full h-2.5 bg-black/5 dark:bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-l from-rose-500 to-amber-500 transition-all duration-300 rounded-full"
              style={{ width: `${((currentQuestionIndex + 1) / totalQuestions) * 100}%` }}
            />
          </div>
        </div>

        {/* Quiz Body: Not Completed */}
        {!isCompleted ? (
          <div className="mt-8 space-y-6">
            {/* Question Text */}
            <div className={`p-5 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border ${themeClasses.border}`}>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs px-2.5 py-1 rounded-md font-semibold bg-rose-500/10 text-rose-700 dark:text-rose-300">
                  سؤال {currentQuestion.id} · {currentQuestion.difficulty}
                </span>
                <button
                  onClick={() => toggleHint(currentQuestion.id)}
                  className="inline-flex items-center gap-1.5 text-xs text-amber-600 dark:text-amber-400 hover:underline font-medium cursor-pointer"
                >
                  <HelpCircle className="w-4 h-4" />
                  {revealedHints[currentQuestion.id] ? 'إخفاء التلميح' : 'عرض تلميح مساعد'}
                </button>
              </div>

              <h2 className={`text-base sm:text-lg font-bold ${themeClasses.textPrimary} leading-relaxed`}>
                {currentQuestion.question}
              </h2>

              {/* Hint Box */}
              {revealedHints[currentQuestion.id] && (
                <div className="mt-3 p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs sm:text-sm text-amber-900 dark:text-amber-200 leading-relaxed">
                  💡 <span className="font-bold">تلميح تحليلي:</span> {currentQuestion.hint}
                </div>
              )}
            </div>

            {/* Answer Options */}
            <div className="grid grid-cols-1 gap-3">
              {currentQuestion.options.map((option, idx) => {
                const isSelected = selectedAnswers[currentQuestion.id] === option;
                const isAnswered = Boolean(selectedAnswers[currentQuestion.id]);
                const isCorrectOption = option === currentQuestion.correctAnswer;

                let optionStyles = `${themeClasses.border} hover:border-rose-500/50 hover:bg-black/[0.01] dark:hover:bg-white/[0.02]`;
                let iconNode = null;

                if (isAnswered) {
                  if (isSelected && isCorrectOption) {
                    optionStyles = 'border-emerald-500 bg-emerald-500/10 text-emerald-900 dark:text-emerald-100 font-bold';
                    iconNode = <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />;
                  } else if (isSelected && !isCorrectOption) {
                    optionStyles = 'border-rose-500 bg-rose-500/10 text-rose-900 dark:text-rose-100 font-bold';
                    iconNode = <XCircle className="w-5 h-5 text-rose-600 dark:text-rose-400 shrink-0" />;
                  } else if (isCorrectOption) {
                    optionStyles = 'border-emerald-500/60 bg-emerald-500/5 text-emerald-900 dark:text-emerald-200';
                    iconNode = <CheckCircle2 className="w-5 h-5 text-emerald-600/70 shrink-0" />;
                  } else {
                    optionStyles = 'opacity-60 border-black/5 dark:border-white/5';
                  }
                }

                return (
                  <button
                    key={idx}
                    disabled={isAnswered}
                    onClick={() => handleSelectOption(option)}
                    className={`w-full p-4 rounded-xl border text-right transition-all flex items-center justify-between gap-3 text-sm sm:text-base cursor-pointer ${optionStyles}`}
                  >
                    <span className="flex-1 leading-relaxed">{option}</span>
                    {iconNode}
                  </button>
                );
              })}
            </div>

            {/* Explanation card upon answering */}
            {selectedAnswers[currentQuestion.id] && (
              <div
                className={`p-4 rounded-xl border text-sm leading-relaxed ${
                  selectedAnswers[currentQuestion.id] === currentQuestion.correctAnswer
                    ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-950 dark:text-emerald-100'
                    : 'border-rose-500/30 bg-rose-500/10 text-rose-950 dark:text-rose-100'
                }`}
              >
                <div className="font-bold mb-1 flex items-center gap-1.5">
                  {selectedAnswers[currentQuestion.id] === currentQuestion.correctAnswer ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      إجابة صحيحة وتحليل سليم!
                    </>
                  ) : (
                    <>
                      <XCircle className="w-4 h-4 text-rose-600" />
                      إجابة خاطئة - خطوات الحل والنمذجة الرياضية الصحيحة:
                    </>
                  )}
                </div>
                <p className="text-xs sm:text-sm mt-1">{currentQuestion.explanation}</p>
              </div>
            )}

            {/* Prev / Next Navigation Controls */}
            <div className="flex items-center justify-between pt-4 border-t border-black/5 dark:border-white/5">
              <button
                onClick={handlePrev}
                disabled={currentQuestionIndex === 0}
                className={`inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border ${themeClasses.border} text-xs sm:text-sm font-semibold transition-colors ${
                  currentQuestionIndex === 0
                    ? 'opacity-40 cursor-not-allowed'
                    : 'hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer'
                }`}
              >
                <ChevronRight className="w-4 h-4" />
                السابق
              </button>

              <button
                onClick={handleNext}
                disabled={!selectedAnswers[currentQuestion.id]}
                className={`inline-flex items-center gap-1.5 px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white transition-all shadow-sm ${
                  !selectedAnswers[currentQuestion.id]
                    ? 'bg-gray-400 dark:bg-gray-600 cursor-not-allowed opacity-50'
                    : 'bg-rose-600 hover:bg-rose-700 active:scale-95 cursor-pointer'
                }`}
              >
                {currentQuestionIndex === totalQuestions - 1 ? 'عرض النتيجة النهائية' : 'السؤال التالي'}
                <ChevronLeft className="w-4 h-4" />
              </button>
            </div>
          </div>
        ) : (
          /* Quiz Completed Results Card */
          <div className="mt-8 text-center space-y-6">
            <div className="p-8 rounded-2xl bg-gradient-to-b from-rose-500/10 via-rose-500/5 to-transparent border border-rose-500/20">
              <span className="text-5xl block mb-3 animate-bounce">🏆</span>
              <h2 className={`text-2xl sm:text-3xl font-black ${themeClasses.textPrimary}`}>
                اكتمل اختبار المسائل الكلامية بنجاح!
              </h2>
              <p className={`text-sm ${themeClasses.textSecondary} mt-2`}>
                لقد أنجزت جميع الأسئلة اللفظية والتطبيقية في اختبار {quizConfig.title}
              </p>

              <div className="flex justify-center items-center gap-6 my-6">
                <div className="text-center">
                  <span className="text-3xl sm:text-4xl font-extrabold text-rose-600 dark:text-rose-400">
                    {scorePercent}%
                  </span>
                  <span className={`block text-xs ${themeClasses.textSecondary} mt-1`}>
                    النسبة المئوية
                  </span>
                </div>
                <div className="h-10 w-px bg-black/10 dark:bg-white/10" />
                <div className="text-center">
                  <span className="text-3xl sm:text-4xl font-extrabold text-amber-600 dark:text-amber-400">
                    {correctCount} / {totalQuestions}
                  </span>
                  <span className={`block text-xs ${themeClasses.textSecondary} mt-1`}>
                    إجابات صحيحة
                  </span>
                </div>
              </div>

              <div className={`text-sm sm:text-base font-bold ${getGradeInfo().color}`}>
                {getGradeInfo().title}
              </div>

              {/* Certificate Generator Section */}
              <div className="mt-8 pt-6 border-t border-black/10 dark:border-white/10 max-w-md mx-auto text-right">
                <label className={`block text-xs font-semibold ${themeClasses.textSecondary} mb-2`}>
                  أدخل اسمك الكريم لإصدار شهادة إتقان حل المسائل الكلامية:
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                    placeholder="الاسم الكامل (مثال: عبد الرحمن الغامدي)"
                    className={`flex-1 px-4 py-2 text-sm rounded-xl border ${themeClasses.border} ${themeClasses.cardBg} focus:outline-none focus:ring-2 focus:ring-rose-500`}
                  />
                  <button
                    onClick={() => setShowCertificate(true)}
                    disabled={!studentName.trim()}
                    className={`px-4 py-2 rounded-xl text-xs font-bold text-white transition-all ${
                      studentName.trim()
                        ? 'bg-rose-600 hover:bg-rose-700 cursor-pointer'
                        : 'bg-gray-400 cursor-not-allowed opacity-50'
                    }`}
                  >
                    إصدار الشهادة
                  </button>
                </div>
              </div>

              {/* Rendered Certificate Card */}
              {showCertificate && studentName.trim() && (
                <div className="mt-6 p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900 border-2 border-rose-500 shadow-xl text-center space-y-4">
                  <div className="flex justify-between items-center text-xs text-gray-500 border-b pb-3">
                    <span>منصة اختبارات الرياضيات التفاعلية</span>
                    <span>كود الاعتماد: WP-{quizType.toUpperCase()}-{Math.floor(1000 + Math.random() * 9000)}</span>
                  </div>
                  <Award className="w-16 h-16 text-amber-500 mx-auto" />
                  <h3 className="text-xl sm:text-2xl font-black text-gray-900 dark:text-gray-100">
                    شهادة براعة في حل المسائل الكلامية والنمذجة الجبرية
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">تشهد المنصة بأن</p>
                  <p className="text-2xl font-extrabold text-rose-600 dark:text-rose-400">
                    {studentName}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed max-w-lg mx-auto">
                    قد اجتاز بنجاح اختبار <span className="font-bold text-gray-800 dark:text-gray-200">{quizConfig.title}</span> بمعدل إتقان <span className="font-bold text-rose-600">{scorePercent}%</span>، مما يبرهن على مهارة متقدمة في فك شفرة النصوص اللفظية وصياغة المعادلات الجبرية وحلها باحترافية.
                  </p>
                  <div className="pt-4 border-t text-xs text-gray-400 flex justify-between items-center">
                    <span>تاريخ الإنجاز: {new Date().toLocaleDateString('ar-EG')}</span>
                    <span className="font-serif font-bold text-rose-700 dark:text-rose-300">الختم الأكاديمي المعتمد ✓</span>
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-wrap justify-center gap-3 mt-8">
                <button
                  onClick={handleRestart}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-rose-600 text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/30 text-xs sm:text-sm font-bold transition-all cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4" />
                  إعادة المحاولة
                </button>
                <button
                  onClick={() => onSelectSubcategory('applied-financial-math', 'word-problems')}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs sm:text-sm font-bold transition-all cursor-pointer shadow-sm"
                >
                  فهرس موضوعات المسائل الكلامية
                  <ArrowRight className="w-4 h-4 rotate-180" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Embedded Pillar Article (>350 words dedicated to this specific quiz) */}
      <article
        className={`rounded-2xl border ${themeClasses.border} ${themeClasses.cardBg} p-6 sm:p-8 shadow-sm transition-all text-right space-y-6 leading-relaxed`}
      >
        <div className="border-b border-black/5 dark:border-white/5 pb-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-rose-500/10 text-rose-700 dark:text-rose-300 border border-rose-500/20 mb-2">
            <BookOpen className="w-4 h-4" />
            المقالة الأكاديمية الشاملة للاختبار · {quizConfig.article.readingTimeMinutes} دقائق قراءة · {quizConfig.article.wordCount} كلمة
          </div>
          <h2 className={`text-xl sm:text-2xl font-extrabold ${themeClasses.textPrimary}`}>
            {quizConfig.article.title}
          </h2>
          <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} mt-2 leading-relaxed`}>
            {quizConfig.article.intro}
          </p>
        </div>

        <div className="space-y-6">
          {quizConfig.article.sections.map((section, sIdx) => (
            <section key={sIdx} className="space-y-2">
              <h3 className={`text-base sm:text-lg font-bold ${themeClasses.textPrimary} flex items-center gap-2`}>
                <span className="text-rose-600 dark:text-rose-400 font-mono text-sm">{sIdx + 1}.</span>
                {section.title}
              </h3>
              <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed whitespace-pre-line`}>
                {section.content}
              </p>
            </section>
          ))}
        </div>

        <div className="p-4 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5 text-xs sm:text-sm leading-relaxed">
          <span className="font-bold text-rose-600 dark:text-rose-400 block mb-1">
            خلاصة منهجية واستراتيجية الحل:
          </span>
          <p className={themeClasses.textSecondary}>{quizConfig.article.summary}</p>
        </div>
      </article>

      {/* Backlink Box for Cross-Navigation */}
      <WordProblemsBacklinkBox
        currentQuizId={quizType}
        relatedIds={quizConfig.relatedIds}
        maxItems={3}
      />
    </div>
  );
};
