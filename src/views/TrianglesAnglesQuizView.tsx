import React, { useState } from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { useEyeTheme } from '../context/ThemeContext';
import { TrianglesAnglesBacklinkBox } from '../components/TrianglesAnglesBacklinkBox';
import {
  TRIANGLES_ANGLES_QUIZZES,
  TrianglesAnglesQuizType,
} from '../data/trianglesAnglesTestsData';
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

interface TrianglesAnglesQuizViewProps {
  quizType: TrianglesAnglesQuizType;
  onGoHome: () => void;
  onGoDomain: () => void;
  onGoTrianglesAngles: () => void;
}

export const TrianglesAnglesQuizView: React.FC<TrianglesAnglesQuizViewProps> = ({
  quizType,
  onGoHome,
  onGoDomain,
  onGoTrianglesAngles,
}) => {
  const { themeClasses } = useEyeTheme();
  const config =
    TRIANGLES_ANGLES_QUIZZES[quizType] ||
    TRIANGLES_ANGLES_QUIZZES['angle-types-measurement'];

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
    setSelectedAnswers({});
    setCurrentIndex(0);
    setIsCompleted(false);
    setShowHint(false);
    setShowCertificate(false);
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedUrl(true);
    setTimeout(() => setCopiedUrl(false), 2000);
  };

  // Score calculation
  const totalQuestions = config.questions.length;
  const correctCount = config.questions.reduce((acc, q) => {
    return acc + (selectedAnswers[q.id] === q.correctAnswer ? 1 : 0);
  }, 0);
  const percentage = Math.round((correctCount / totalQuestions) * 100);

  const getEvaluationMessage = () => {
    if (percentage === 100) return 'أداء مذهل ومثالي! أتقنت كافة مفاهيم المثلثات والزوايا بعلامة كاملة.';
    if (percentage >= 80) return 'مستوى متميز جداً! لديك فهم عميق للنظريات الهندسية ومفاهيم الزوايا.';
    if (percentage >= 60) return 'نتيجة جيدة ومطمئنة! راجع التفسيرات الهندسية لتعزيز النقاط المتبقية.';
    return 'محاولة طيبة! ننصحك بإعادة قراءة المقالة المنهجية وإعادة الاختبار لترسيخ المفاهيم.';
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8 text-right" dir="rtl">
      {/* Breadcrumbs navigation */}
      <Breadcrumbs
        items={[
          { label: 'الرئيسية', onClick: onGoHome },
          { label: 'الهندسة وحساب المثلثات', onClick: onGoDomain },
          { label: 'المثلثات والزوايا', onClick: onGoTrianglesAngles },
          { label: config.title },
        ]}
      />

      {/* Hero Header */}
      <header className={`p-6 sm:p-8 rounded-2xl border ${themeClasses.border} ${themeClasses.cardBg} shadow-sm space-y-4`}>
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <span className="text-3xl sm:text-4xl">{config.emoji}</span>
            <div>
              <h1 className={`text-xl sm:text-2xl font-black ${themeClasses.textPrimary}`}>
                {config.title}
              </h1>
              <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} mt-0.5`}>
                {config.subtitle}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono px-2.5 py-1 rounded-lg bg-indigo-50 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 font-bold border border-indigo-200 dark:border-indigo-800">
              {config.mathSymbol}
            </span>
            <span className="text-xs px-2.5 py-1 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
              المستوى: {config.level}
            </span>
          </div>
        </div>
        <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed pt-2 border-t border-black/[0.04] dark:border-white/[0.04]`}>
          {config.overview}
        </p>
      </header>

      {/* Main Interactive Quiz Engine */}
      {!isCompleted ? (
        <section className={`p-6 sm:p-8 rounded-2xl border ${themeClasses.border} ${themeClasses.cardBg} shadow-md space-y-6`}>
          {/* Progress Bar & Header */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-medium text-gray-500 dark:text-gray-400">
              <span>السؤال {currentIndex + 1} من {totalQuestions}</span>
              <span className="text-indigo-600 dark:text-indigo-400 font-bold">
                {Math.round(((currentIndex + 1) / totalQuestions) * 100)}% مكتمل
              </span>
            </div>
            <div className="w-full h-2 rounded-full bg-gray-100 dark:bg-gray-800 overflow-hidden">
              <div
                className="h-full bg-gradient-to-l from-indigo-500 to-indigo-600 transition-all duration-300 rounded-full"
                style={{ width: `${((currentIndex + 1) / totalQuestions) * 100}%` }}
              />
            </div>
          </div>

          {/* Question Text */}
          <div className="py-2">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-bold px-2 py-0.5 rounded bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300">
                صعوبة: {currentQ.difficulty}
              </span>
            </div>
            <h2 className={`text-base sm:text-lg font-bold leading-relaxed ${themeClasses.textPrimary}`}>
              {currentQ.text}
            </h2>
          </div>

          {/* Options Grid */}
          <div className="grid grid-cols-1 gap-3">
            {currentQ.options.map((opt, idx) => {
              const isSelected = selectedAnswer === idx;
              const isCorrect = idx === currentQ.correctAnswer;
              const hasAnswered = selectedAnswer !== undefined;

              let btnStyle = `border ${themeClasses.border} hover:bg-indigo-50/30 dark:hover:bg-indigo-900/10 text-gray-800 dark:text-gray-200`;
              if (hasAnswered) {
                if (isCorrect) {
                  btnStyle = 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-100 font-bold';
                } else if (isSelected) {
                  btnStyle = 'border-rose-500 bg-rose-50 dark:bg-rose-950/40 text-rose-900 dark:text-rose-100';
                } else {
                  btnStyle = 'opacity-50 border-gray-200 dark:border-gray-800';
                }
              }

              return (
                <button
                  key={idx}
                  disabled={hasAnswered}
                  onClick={() => handleSelectOption(idx)}
                  className={`p-4 rounded-xl text-right transition-all flex items-center justify-between text-xs sm:text-sm ${btnStyle}`}
                >
                  <span className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full border border-current flex items-center justify-center text-xs font-bold shrink-0">
                      {['أ', 'ب', 'ج', 'د'][idx] || idx + 1}
                    </span>
                    <span>{opt}</span>
                  </span>
                  {hasAnswered && isCorrect && (
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                  )}
                  {hasAnswered && isSelected && !isCorrect && (
                    <XCircle className="w-5 h-5 text-rose-500 shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Answer Explanation & Hint */}
          {selectedAnswer !== undefined && (
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 space-y-2 animate-fadeIn">
              <div className="flex items-center gap-2 text-xs font-bold text-indigo-600 dark:text-indigo-400">
                <Lightbulb className="w-4 h-4 text-amber-500" />
                <span>الشرح الرياضي النموذجي:</span>
              </div>
              <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                {currentQ.explanation}
              </p>
            </div>
          )}

          {/* Hint Trigger */}
          {selectedAnswer === undefined && (
            <div className="flex items-center justify-between pt-2">
              <button
                onClick={() => setShowHint(!showHint)}
                className="text-xs text-amber-600 dark:text-amber-400 hover:underline flex items-center gap-1"
              >
                <Lightbulb className="w-3.5 h-3.5" />
                <span>{showHint ? 'إخفاء التلميح' : 'هل تحتاج تلميحاً؟'}</span>
              </button>
              {showHint && (
                <span className="text-xs text-gray-500 dark:text-gray-400 italic">
                  تلميح: {currentQ.hint}
                </span>
              )}
            </div>
          )}

          {/* Controls: Next / Prev */}
          <div className="flex items-center justify-between pt-4 border-t border-black/[0.04] dark:border-white/[0.04]">
            <button
              disabled={currentIndex === 0}
              onClick={handlePrev}
              className={`px-4 py-2 rounded-xl text-xs font-bold border transition-all flex items-center gap-1.5 ${
                currentIndex === 0
                  ? 'opacity-40 cursor-not-allowed border-gray-200 dark:border-gray-800'
                  : 'hover:bg-gray-100 dark:hover:bg-gray-800 border-gray-300 dark:border-gray-700'
              }`}
            >
              <ArrowRight className="w-3.5 h-3.5" />
              <span>السابق</span>
            </button>

            <button
              disabled={selectedAnswer === undefined}
              onClick={handleNext}
              className={`px-6 py-2.5 rounded-xl text-xs font-bold text-white transition-all flex items-center gap-1.5 shadow-sm ${
                selectedAnswer === undefined
                  ? 'opacity-40 cursor-not-allowed bg-indigo-400'
                  : 'bg-indigo-600 hover:bg-indigo-700'
              }`}
            >
              <span>{currentIndex === totalQuestions - 1 ? 'إنهاء وعرض النتيجة' : 'السؤال التالي'}</span>
              <ArrowLeft className="w-3.5 h-3.5" />
            </button>
          </div>
        </section>
      ) : (
        /* Results & Certificate Section */
        <section className={`p-6 sm:p-10 rounded-2xl border ${themeClasses.border} ${themeClasses.cardBg} shadow-lg space-y-6 text-center`}>
          <div className="w-16 h-16 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 mx-auto flex items-center justify-center">
            <Award className="w-9 h-9" />
          </div>

          <div className="space-y-2">
            <h2 className={`text-2xl font-black ${themeClasses.textPrimary}`}>
              نتيجة اختبار: {config.title}
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {getEvaluationMessage()}
            </p>
          </div>

          {/* Score Cards */}
          <div className="grid grid-cols-3 gap-3 max-w-md mx-auto">
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
              <span className="text-xs text-gray-500 dark:text-gray-400 block">النسبة المئوية</span>
              <span className="text-xl font-black text-indigo-600 dark:text-indigo-400">{percentage}%</span>
            </div>
            <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800">
              <span className="text-xs text-emerald-600 dark:text-emerald-400 block">الإجابات الصحيحة</span>
              <span className="text-xl font-black text-emerald-600 dark:text-emerald-400">{correctCount}</span>
            </div>
            <div className="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-800">
              <span className="text-xs text-rose-600 dark:text-rose-400 block">الإجابات الخاطئة</span>
              <span className="text-xl font-black text-rose-600 dark:text-rose-400">{totalQuestions - correctCount}</span>
            </div>
          </div>

          {/* Digital Certificate Generator */}
          {percentage >= 60 && (
            <div className="p-5 rounded-2xl bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-indigo-500/10 border border-indigo-200 dark:border-indigo-800 max-w-lg mx-auto space-y-3">
              <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-indigo-700 dark:text-indigo-300">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>شهادة إنجاز تفاعلية معتمدة</span>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-300">
                اكتب اسمك لتوليد شهادة إنجاز رقمية وتصديرها أو طباعتها فوراً:
              </p>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="اكتب اسمك الثلاثي هنا..."
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  className="px-3 py-2 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-xs w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 text-right"
                />
                <button
                  onClick={() => setShowCertificate(true)}
                  disabled={!studentName.trim()}
                  className="px-4 py-2 rounded-xl bg-indigo-600 text-white font-bold text-xs hover:bg-indigo-700 disabled:opacity-40 shrink-0 transition-colors"
                >
                  عرض الشهادة
                </button>
              </div>

              {showCertificate && studentName.trim() && (
                <div className="p-6 rounded-2xl border-4 border-double border-indigo-400 dark:border-indigo-600 bg-white dark:bg-slate-900 text-center space-y-3 mt-4 print:block shadow-md">
                  <div className="text-xs text-indigo-600 dark:text-indigo-400 font-bold uppercase tracking-widest">
                    شهادة إتقان في الهندسة وحساب المثلثات
                  </div>
                  <h3 className="text-lg font-extrabold text-gray-900 dark:text-white">
                    تُمنح هذه الشهادة للطالب المتميز:
                  </h3>
                  <div className="text-xl font-black text-indigo-700 dark:text-indigo-300 underline underline-offset-8">
                    {studentName}
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed max-w-md mx-auto">
                    لاجتيازه بنجاح وتفوق اختبار <strong>«{config.title}»</strong> بنسبة إنجاز <strong>{percentage}%</strong>، وإثبات تمكنه من المفاهيم الهندسية والنظريات الإقليدية وحل المسائل ذات الصلة.
                  </p>
                  <div className="text-[10px] text-gray-400 pt-2 border-t border-gray-200 dark:border-gray-800">
                    منصة كويزات الرياضيات التفاعلية | {new Date().toLocaleDateString('ar-EG')}
                  </div>
                  <button
                    onClick={() => window.print()}
                    className="text-xs px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 print:hidden font-medium"
                  >
                    🖨️ طباعة الشهادة
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex items-center justify-center gap-3 flex-wrap pt-2">
            <button
              onClick={handleReset}
              className="px-5 py-2.5 rounded-xl border border-gray-300 dark:border-gray-700 text-xs font-bold hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors flex items-center gap-1.5"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>إعادة الاختبار</span>
            </button>
            <button
              onClick={handleShare}
              className="px-5 py-2.5 rounded-xl border border-indigo-200 dark:border-indigo-800 text-indigo-600 dark:text-indigo-400 text-xs font-bold hover:bg-indigo-50 dark:hover:bg-indigo-950/40 transition-colors flex items-center gap-1.5"
            >
              {copiedUrl ? <Check className="w-3.5 h-3.5" /> : <Share2 className="w-3.5 h-3.5" />}
              <span>{copiedUrl ? 'تم نسخ الرابط!' : 'مشاركة الاختبار'}</span>
            </button>
          </div>
        </section>
      )}

      {/* Backlink Directory Component */}
      <TrianglesAnglesBacklinkBox currentQuizId={config.id} />

      {/* Comprehensive Specialized Pedagogical Article (Exceeding 350 words) */}
      <article className={`p-6 sm:p-10 rounded-2xl border ${themeClasses.border} ${themeClasses.cardBg} shadow-sm space-y-6 text-right leading-relaxed`}>
        <header className="space-y-2 pb-4 border-b border-black/[0.06] dark:border-white/[0.06]">
          <div className="flex items-center gap-2 text-xs font-bold text-indigo-600 dark:text-indigo-400">
            <BookOpen className="w-4 h-4" />
            <span>المقالة التعليمية المنهجية المرافقة للاختبار</span>
          </div>
          <h2 className={`text-xl sm:text-2xl font-black ${themeClasses.textPrimary}`}>
            الدليل الشامل والمعمق: {config.title}
          </h2>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            شرح تفصيلي إقليدي، براهين القوانين، أمثلة محلولة خطوة بخطوة، والأخطاء الشائعة لتجنبها
          </p>
        </header>

        {/* Introduction */}
        <section className="space-y-2">
          <h3 className={`text-base font-bold flex items-center gap-2 ${themeClasses.textPrimary}`}>
            <Sparkles className="w-4 h-4 text-indigo-500" />
            <span>المقدمة والخلفية الهندسية والتاريخية</span>
          </h3>
          <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
            {config.articleContent.introduction}
          </p>
        </section>

        {/* Core Concepts */}
        <section className="space-y-4">
          <h3 className={`text-base font-bold flex items-center gap-2 ${themeClasses.textPrimary}`}>
            <Lightbulb className="w-4 h-4 text-amber-500" />
            <span>المفاهيم والنظريات الأساسية والقوانين الحاكمة</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {config.articleContent.coreConcepts.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/60 space-y-2"
              >
                <h4 className="font-bold text-xs sm:text-sm text-indigo-700 dark:text-indigo-300">
                  {item.title}
                </h4>
                <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                  {item.explanation}
                </p>
                {item.rule && (
                  <div className="p-2 rounded bg-indigo-100/60 dark:bg-indigo-950/60 font-mono text-[11px] text-indigo-900 dark:text-indigo-200 font-bold text-center">
                    {item.rule}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Worked Examples */}
        <section className="space-y-3">
          <h3 className={`text-base font-bold flex items-center gap-2 ${themeClasses.textPrimary}`}>
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            <span>أمثلة تطبيقية محلولة خطوة بخطوة</span>
          </h3>
          <div className="space-y-3">
            {config.articleContent.workedExamples.map((ex, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl border border-emerald-200/80 dark:border-emerald-800/60 bg-emerald-50/30 dark:bg-emerald-950/20 space-y-2"
              >
                <div className="font-bold text-xs sm:text-sm text-emerald-800 dark:text-emerald-200">
                  مثال {idx + 1}: {ex.problem}
                </div>
                <div className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
                  <strong>الحل الهندسي:</strong> {ex.solution}
                </div>
                {ex.note && (
                  <div className="text-[11px] text-emerald-700 dark:text-emerald-400 italic">
                    ملاحظة: {ex.note}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="space-y-2">
          <h3 className="text-base font-bold text-rose-600 dark:text-rose-400 flex items-center gap-2">
            <XCircle className="w-4 h-4" />
            <span>أخطاء شائعة يقع فيها المتعلمون وكيفية تجنبها</span>
          </h3>
          <ul className="space-y-1.5 list-disc list-inside text-xs sm:text-sm text-gray-700 dark:text-gray-300">
            {config.articleContent.commonMistakes.map((m, idx) => (
              <li key={idx} className="leading-relaxed">
                {m}
              </li>
            ))}
          </ul>
        </section>

        {/* Practical Applications */}
        <section className="space-y-2">
          <h3 className={`text-base font-bold flex items-center gap-2 ${themeClasses.textPrimary}`}>
            <Award className="w-4 h-4 text-indigo-500" />
            <span>التطبيقات الحياتية والهندسية في الواقع المعاصر</span>
          </h3>
          <ul className="space-y-1.5 list-disc list-inside text-xs sm:text-sm text-gray-700 dark:text-gray-300">
            {config.articleContent.practicalApplications.map((app, idx) => (
              <li key={idx} className="leading-relaxed">
                {app}
              </li>
            ))}
          </ul>
        </section>

        {/* Summary */}
        <footer className="pt-4 border-t border-black/[0.06] dark:border-white/[0.06] space-y-2">
          <h3 className={`text-sm font-bold ${themeClasses.textPrimary}`}>خلاصة الدرس:</h3>
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
            {config.articleContent.summary}
          </p>
        </footer>
      </article>
    </div>
  );
};
