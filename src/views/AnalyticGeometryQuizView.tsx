import React, { useState } from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { useEyeTheme } from '../context/ThemeContext';
import { AnalyticGeometryBacklinkBox } from '../components/AnalyticGeometryBacklinkBox';
import { navigateTo } from '../navigation/router';
import {
  ANALYTIC_GEOMETRY_QUIZZES,
  AnalyticGeometryQuizType,
} from '../data/analyticGeometryTestsData';
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
} from 'lucide-react';

interface AnalyticGeometryQuizViewProps {
  quizType: AnalyticGeometryQuizType;
  onGoHome: () => void;
  onGoDomain: () => void;
  onGoAnalyticGeometry: () => void;
}

export const AnalyticGeometryQuizView: React.FC<AnalyticGeometryQuizViewProps> = ({
  quizType,
  onGoHome,
  onGoDomain,
  onGoAnalyticGeometry,
}) => {
  const { themeClasses } = useEyeTheme();
  const config =
    ANALYTIC_GEOMETRY_QUIZZES[quizType] ||
    ANALYTIC_GEOMETRY_QUIZZES['cartesian-coordinates-quadrants'];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [isCompleted, setIsCompleted] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [copiedUrl, setCopiedUrl] = useState(false);
  const [showCertificate, setShowCertificate] = useState(false);
  const [studentName, setStudentName] = useState('');

  const currentQ = config.questions[currentIndex];
  const selectedAnswer = selectedAnswers[currentQ.id];

  // Sound synthesis
  const playTone = (isSuccess: boolean) => {
    try {
      const ctx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      if (isSuccess) {
        osc.frequency.setValueAtTime(587.33, ctx.currentTime); // D5
        osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.15); // A5
        gain.gain.setValueAtTime(0.15, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.2);
        osc.start();
        osc.stop(ctx.currentTime + 0.2);
      } else {
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(220, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(130, ctx.currentTime + 0.25);
        gain.gain.setValueAtTime(0.15, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.25);
        osc.start();
        osc.stop(ctx.currentTime + 0.25);
      }
    } catch {
      // AudioContext unavailable
    }
  };

  const handleSelectOption = (idx: number) => {
    if (selectedAnswer !== undefined) return; // already answered
    const isCorrect = idx === currentQ.correctAnswer;
    playTone(isCorrect);
    setSelectedAnswers((prev) => ({ ...prev, [currentQ.id]: idx }));
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

  const handleReset = () => {
    setCurrentIndex(0);
    setSelectedAnswers({});
    setIsCompleted(false);
    setShowHint(false);
    setShowCertificate(false);
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedUrl(true);
    setTimeout(() => setCopiedUrl(false), 2500);
  };

  // Score calculation
  const correctCount = config.questions.reduce((acc, q) => {
    return selectedAnswers[q.id] === q.correctAnswer ? acc + 1 : acc;
  }, 0);
  const percentage = Math.round((correctCount / config.questions.length) * 100);

  const getScoreMessage = () => {
    if (percentage === 100) return 'درجة كاملة مذهلة! عبقري في الهندسة التحليلية ';
    if (percentage >= 80) return 'أداء متميز واستيعاب هندسي رائع! ';
    if (percentage >= 60) return 'مستوى جيد جداً، راجع المسائل غير الصحيحة للوصول للدرجة التامة! ';
    return 'محاولة جيدة، راجع المقال التعليمي بالأسفل وأعد الاختبار لتعزيز مهاراتك! ';
  };

  return (
    <div className="space-y-8 pb-16 text-right">
      {/* Breadcrumb Navigation */}
      <Breadcrumbs
        items={[
          { label: 'الرئيسية', onClick: onGoHome },
          { label: 'الهندسة وحساب المثلثات', onClick: onGoDomain },
          { label: 'الهندسة التحليلية', onClick: onGoAnalyticGeometry },
          { label: config.title, active: true },
        ]}
      />

      {/* Header Info Banner */}
      <header className={`p-6 sm:p-8 rounded-2xl border ${themeClasses.border} ${themeClasses.cardBg} space-y-4`}>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="text-3xl sm:text-4xl">{config.emoji}</span>
            <div>
              <h1 className={`text-xl sm:text-2xl font-bold ${themeClasses.textPrimary}`}>
                {config.title}
              </h1>
              <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} mt-0.5`}>
                {config.subtitle}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-sky-50 dark:bg-sky-950/50 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-800">
              {config.level}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-mono bg-black/[0.03] dark:bg-white/[0.05] text-gray-700 dark:text-gray-300" dir="ltr">
              {config.mathSymbol}
            </span>
          </div>
        </div>
        <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed pt-2 border-t border-black/[0.04] dark:border-white/[0.04]`}>
          {config.overview}
        </p>
      </header>

      {/* Main Interactive Quiz Card */}
      {!isCompleted ? (
        <section
          aria-label="منطقة الأسئلة التفاعلية"
          className={`p-6 sm:p-8 rounded-2xl border ${themeClasses.border} ${themeClasses.cardBg} space-y-6 shadow-2xs`}
        >
          {/* Progress Bar & Counter */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-medium">
              <span className={themeClasses.textPrimary}>
                المسألة {currentIndex + 1} من {config.questions.length}
              </span>
              <span className={themeClasses.textMuted}>
                مكتمل: {Math.round(((currentIndex) / config.questions.length) * 100)}%
              </span>
            </div>
            <div className="w-full h-2 rounded-full bg-black/[0.05] dark:bg-white/[0.05] overflow-hidden">
              <div
                className="h-full bg-sky-600 transition-all duration-300 rounded-full"
                style={{
                  width: `${((currentIndex + 1) / config.questions.length) * 100}%`,
                }}
              />
            </div>
          </div>

          {/* Question Text */}
          <div className="py-2">
            <div className="inline-block px-2.5 py-1 rounded-md text-[11px] font-medium bg-sky-100/60 dark:bg-sky-900/40 text-sky-800 dark:text-sky-200 mb-3">
              الصعوبة: {currentQ.difficulty}
            </div>
            <h2 className={`text-base sm:text-lg font-bold leading-relaxed ${themeClasses.textPrimary}`}>
              {currentQ.text}
            </h2>
          </div>

          {/* Options List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {currentQ.options.map((opt, idx) => {
              const isSelected = selectedAnswer === idx;
              const isCorrect = idx === currentQ.correctAnswer;
              const hasAnswered = selectedAnswer !== undefined;

              let btnClasses = `p-4 rounded-xl border text-sm sm:text-base text-right font-medium transition-all duration-150 flex items-center justify-between gap-3 `;

              if (!hasAnswered) {
                btnClasses += `${themeClasses.border} hover:border-sky-400 dark:hover:border-sky-600 hover:bg-sky-50/40 dark:hover:bg-sky-950/20 cursor-pointer ${themeClasses.textPrimary}`;
              } else {
                if (isCorrect) {
                  btnClasses += 'border-emerald-500 bg-emerald-50/70 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-100 font-bold';
                } else if (isSelected) {
                  btnClasses += 'border-rose-400 bg-rose-50/70 dark:bg-rose-950/40 text-rose-900 dark:text-rose-100';
                } else {
                  btnClasses += `${themeClasses.border} opacity-50 ${themeClasses.textSecondary}`;
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(idx)}
                  disabled={hasAnswered}
                  className={btnClasses}
                >
                  <span className="leading-relaxed">{opt}</span>
                  {hasAnswered && isCorrect && (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  )}
                  {hasAnswered && isSelected && !isCorrect && (
                    <XCircle className="w-5 h-5 text-rose-500 shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Explanation & Hint Box */}
          {selectedAnswer !== undefined && (
            <div
              className={`p-4 rounded-xl border ${
                selectedAnswer === currentQ.correctAnswer
                  ? 'border-emerald-200 dark:border-emerald-800 bg-emerald-50/50 dark:bg-emerald-950/20 text-emerald-900 dark:text-emerald-100'
                  : 'border-amber-200 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-950/20 text-amber-900 dark:text-amber-100'
              } space-y-1.5`}
            >
              <div className="flex items-center gap-2 font-bold text-xs sm:text-sm">
                <Sparkles className="w-4 h-4" />
                <span>الشرح والتوضيح الرياضي:</span>
              </div>
              <p className="text-xs sm:text-sm leading-relaxed">
                {currentQ.explanation}
              </p>
            </div>
          )}

          {/* Hint Toggle */}
          {selectedAnswer === undefined && (
            <div className="pt-1">
              <button
                type="button"
                onClick={() => setShowHint((prev) => !prev)}
                className="flex items-center gap-1.5 text-xs text-amber-700 dark:text-amber-400 hover:underline cursor-pointer"
              >
                <Lightbulb className="w-4 h-4" />
                <span>{showHint ? 'إخفاء التلميح' : 'هل تحتاج إلى تلميح مساعد؟'}</span>
              </button>
              {showHint && (
                <p className="mt-2 text-xs text-amber-800 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/30 p-3 rounded-lg border border-amber-200 dark:border-amber-900/40">
                  {currentQ.hint}
                </p>
              )}
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between pt-4 border-t border-black/[0.04] dark:border-white/[0.04]">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium flex items-center gap-1.5 transition-colors ${
                currentIndex === 0
                  ? 'opacity-40 cursor-not-allowed text-gray-400'
                  : `hover:bg-black/[0.04] dark:hover:bg-white/[0.04] ${themeClasses.textPrimary} cursor-pointer`
              }`}
            >
              <ArrowRight className="w-4 h-4" />
              <span>السابق</span>
            </button>

            <button
              onClick={handleNext}
              disabled={selectedAnswer === undefined}
              className={`px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all ${
                selectedAnswer === undefined
                  ? 'bg-gray-200 dark:bg-gray-800 text-gray-400 cursor-not-allowed'
                  : 'bg-sky-700 hover:bg-sky-800 text-white shadow-xs cursor-pointer'
              }`}
            >
              <span>{currentIndex < config.questions.length - 1 ? 'السؤال التالي' : 'إنهاء الاختبار'}</span>
              <ArrowLeft className="w-4 h-4" />
            </button>
          </div>
        </section>
      ) : (
        /* Quiz Completion Screen */
        <section
          aria-label="نتائج الاختبار"
          className={`p-6 sm:p-10 rounded-2xl border ${themeClasses.border} ${themeClasses.cardBg} text-center space-y-6 shadow-xs`}
        >
          <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full bg-sky-100 dark:bg-sky-900/50 text-sky-700 dark:text-sky-300 flex items-center justify-center text-3xl sm:text-4xl">
            
          </div>

          <div className="space-y-2">
            <h2 className={`text-xl sm:text-3xl font-extrabold ${themeClasses.textPrimary}`}>
              اكتمل الاختبار بنجاح!
            </h2>
            <p className={`text-sm sm:text-base ${themeClasses.textSecondary}`}>
              {getScoreMessage()}
            </p>
          </div>

          {/* Score Badge */}
          <div className="inline-flex items-center gap-6 px-6 py-4 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/[0.06]">
            <div>
              <div className="text-2xl sm:text-4xl font-black text-sky-700 dark:text-sky-300">
                {correctCount} / {config.questions.length}
              </div>
              <span className="text-xs text-gray-500">إجابة صحيحة</span>
            </div>
            <div className="w-[1px] h-10 bg-gray-300 dark:bg-gray-700" />
            <div>
              <div className="text-2xl sm:text-4xl font-black text-sky-700 dark:text-sky-300">
                {percentage}%
              </div>
              <span className="text-xs text-gray-500">النسبة المئوية</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={handleReset}
              className="px-5 py-2.5 rounded-xl border border-sky-300 dark:border-sky-700 hover:bg-sky-50 dark:hover:bg-sky-950/40 text-sky-800 dark:text-sky-200 text-xs sm:text-sm font-semibold flex items-center gap-2 cursor-pointer transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
              <span>إعادة الاختبار</span>
            </button>

            <button
              onClick={() => setShowCertificate(true)}
              className="px-5 py-2.5 rounded-xl bg-sky-700 hover:bg-sky-800 text-white text-xs sm:text-sm font-semibold flex items-center gap-2 shadow-xs cursor-pointer transition-colors"
            >
              <Award className="w-4 h-4" />
              <span>إصدار شهادة الإنجاز</span>
            </button>

            <button
              onClick={handleShare}
              className="px-4 py-2.5 rounded-xl border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800/40 text-gray-700 dark:text-gray-300 text-xs sm:text-sm font-medium flex items-center gap-2 cursor-pointer transition-colors"
            >
              {copiedUrl ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
              <span>{copiedUrl ? 'تم نسخ الرابط!' : 'مشاركة الاختبار'}</span>
            </button>
          </div>

          {/* Certificate Modal */}
          {showCertificate && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
              <div
                className={`max-w-lg w-full p-6 sm:p-8 rounded-2xl border ${themeClasses.border} ${themeClasses.cardBg} space-y-5 text-right relative shadow-xl`}
              >
                <div className="text-center space-y-2 border-b border-black/[0.06] dark:border-white/[0.06] pb-4">
                  <div className="text-3xl">️</div>
                  <h3 className={`text-lg sm:text-xl font-bold ${themeClasses.textPrimary}`}>
                    شهادة إتقان الهندسة التحليلية
                  </h3>
                  <p className={`text-xs ${themeClasses.textSecondary}`}>
                    منصة كويزات الرياضيات - مسار الهندسة وحساب المثلثات
                  </p>
                </div>

                <div className="space-y-3">
                  <label className={`block text-xs font-bold ${themeClasses.textPrimary}`}>
                    اكتب اسمك ليظهر على الشهادة:
                  </label>
                  <input
                    type="text"
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                    placeholder="مثال: سارة محمد"
                    className={`w-full px-4 py-2.5 rounded-xl border ${themeClasses.border} ${themeClasses.cardBg} ${themeClasses.textPrimary} text-sm focus:outline-hidden focus:ring-2 focus:ring-sky-500`}
                  />
                </div>

                {studentName.trim() && (
                  <div className="p-4 rounded-xl border border-sky-200 dark:border-sky-800 bg-sky-50/40 dark:bg-sky-950/20 text-center space-y-2">
                    <p className="text-xs text-gray-500">تُشهد المنصة بأن الطالب/ة:</p>
                    <p className="text-base font-bold text-sky-800 dark:text-sky-200">
                      {studentName}
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      قد أتم بنجاح اختبار <strong className="text-sky-700 dark:text-sky-300">{config.title}</strong> وحصل على نسبة {percentage}% بنجاح.
                    </p>
                  </div>
                )}

                <div className="flex items-center justify-end gap-2 pt-2">
                  <button
                    onClick={() => setShowCertificate(false)}
                    className="px-4 py-2 rounded-xl text-xs font-medium text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer"
                  >
                    إغلاق
                  </button>
                  <button
                    onClick={() => window.print()}
                    className="px-5 py-2 rounded-xl text-xs font-bold bg-sky-700 text-white hover:bg-sky-800 cursor-pointer"
                  >
                    طباعة الشهادة
                  </button>
                </div>
              </div>
            </div>
          )}
        </section>
      )}

      {/* Integrated Backlink Box */}
      <AnalyticGeometryBacklinkBox
        currentTestId={config.id}
        onOpenTest={(testId) => {
          navigateTo(`/domain/geometry-trigonometry/analytic-geometry/${testId}`);
        }}
      />

      {/* Comprehensive Educational Article Section (>350 words guaranteed) */}
      <article
        aria-label="المقال التعليمي الشامل للاختبار"
        className={`p-6 sm:p-10 rounded-2xl border ${themeClasses.border} ${themeClasses.cardBg} space-y-8 leading-relaxed`}
      >
        <header className="space-y-3 pb-6 border-b border-black/[0.06] dark:border-white/[0.08]">
          <div className="flex items-center gap-2 text-xs font-bold text-sky-700 dark:text-sky-300">
            <BookOpen className="w-4 h-4" />
            <span>المقال الأكاديمي والتعليمي المرجعي</span>
          </div>
          <h2 className={`text-xl sm:text-2xl font-bold ${themeClasses.textPrimary}`}>
            الدليل الشامل لإتقان: {config.title}
          </h2>
          <p className={`text-sm ${themeClasses.textSecondary} leading-relaxed`}>
            {config.articleContent.introduction}
          </p>
        </header>

        {/* Core Concepts */}
        <section className="space-y-4">
          <h3 className={`text-base sm:text-lg font-bold flex items-center gap-2 ${themeClasses.textPrimary}`}>
            <Sparkles className="w-4 h-4 text-sky-600 dark:text-sky-400" />
            <span>المفاهيم والقوانين الرياضية الأساسية:</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {config.articleContent.coreConcepts.map((concept, idx) => (
              <div
                key={idx}
                className={`p-4 rounded-xl border ${themeClasses.border} bg-black/[0.01] dark:bg-white/[0.01] space-y-2`}
              >
                <h4 className={`text-sm font-bold ${themeClasses.textPrimary}`}>
                  {concept.title}
                </h4>
                <p className={`text-xs ${themeClasses.textSecondary} leading-relaxed`}>
                  {concept.explanation}
                </p>
                {concept.rule && (
                  <div
                    className="p-2 rounded-lg bg-sky-50/60 dark:bg-sky-950/40 text-[11px] font-mono font-medium text-sky-800 dark:text-sky-200 border border-sky-200 dark:border-sky-800"
                    dir="ltr"
                  >
                    {concept.rule}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Worked Examples */}
        <section className="space-y-4 pt-4 border-t border-black/[0.04] dark:border-white/[0.04]">
          <h3 className={`text-base sm:text-lg font-bold flex items-center gap-2 ${themeClasses.textPrimary}`}>
            <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>أمثلة تطبيقية محلولة خطوة بخطوة:</span>
          </h3>
          <div className="space-y-3">
            {config.articleContent.workedExamples.map((example, idx) => (
              <div
                key={idx}
                className={`p-4 rounded-xl border ${themeClasses.border} bg-black/[0.01] dark:bg-white/[0.01] space-y-2 text-xs sm:text-sm`}
              >
                <div className="font-bold text-sky-800 dark:text-sky-300">
                  المسألة {idx + 1}: {example.problem}
                </div>
                <div className={`p-3 rounded-lg bg-black/[0.02] dark:bg-white/[0.03] ${themeClasses.textPrimary} leading-relaxed`}>
                  <strong>الحل: </strong>
                  {example.solution}
                </div>
                {example.note && (
                  <div className="text-[11px] text-gray-500 italic">
                    تنبيه: ملاحظة: {example.note}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="space-y-3 pt-4 border-t border-black/[0.04] dark:border-white/[0.04]">
          <h3 className={`text-base sm:text-lg font-bold flex items-center gap-2 ${themeClasses.textPrimary}`}>
            <XCircle className="w-4 h-4 text-rose-500" />
            <span>أخطاء شائعة يجب الحذر منها:</span>
          </h3>
          <ul className="space-y-2 text-xs sm:text-sm text-gray-700 dark:text-gray-300 list-disc list-inside leading-relaxed">
            {config.articleContent.commonMistakes.map((mistake, idx) => (
              <li key={idx} className="marker:text-rose-500">
                {mistake}
              </li>
            ))}
          </ul>
        </section>

        {/* Practical Applications */}
        <section className="space-y-3 pt-4 border-t border-black/[0.04] dark:border-white/[0.04]">
          <h3 className={`text-base sm:text-lg font-bold flex items-center gap-2 ${themeClasses.textPrimary}`}>
            <Lightbulb className="w-4 h-4 text-amber-500" />
            <span>تطبيقات واستخدامات في الحياة العملية:</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {config.articleContent.practicalApplications.map((app, idx) => (
              <div
                key={idx}
                className={`p-3.5 rounded-xl border ${themeClasses.border} bg-black/[0.01] dark:bg-white/[0.01] text-xs leading-relaxed ${themeClasses.textSecondary}`}
              >
                {app}
              </div>
            ))}
          </div>
        </section>

        {/* Summary Footer */}
        <footer className="pt-4 border-t border-black/[0.04] dark:border-white/[0.04] text-xs sm:text-sm leading-relaxed text-gray-600 dark:text-gray-400">
          <strong>الخلاصة: </strong>
          {config.articleContent.summary}
        </footer>
      </article>
    </div>
  );
};
