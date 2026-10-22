import React, { useState } from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { useEyeTheme } from '../context/ThemeContext';
import { ApplicationsOfIntegrationBacklinkBox } from '../components/ApplicationsOfIntegrationBacklinkBox';
import { navigateTo } from '../navigation/router';
import {
  APPLICATIONS_OF_INTEGRATION_QUIZZES,
  ApplicationsOfIntegrationQuizType,
} from '../data/applicationsOfIntegrationTestsData';
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

interface ApplicationsOfIntegrationQuizViewProps {
  quizType: ApplicationsOfIntegrationQuizType;
  onGoHome: () => void;
  onGoDomain: () => void;
  onGoApplicationsOfIntegration: () => void;
}

export const ApplicationsOfIntegrationQuizView: React.FC<ApplicationsOfIntegrationQuizViewProps> = ({
  quizType,
  onGoHome,
  onGoDomain,
  onGoApplicationsOfIntegration,
}) => {
  const { themeClasses } = useEyeTheme();
  const config =
    APPLICATIONS_OF_INTEGRATION_QUIZZES[quizType] ||
    APPLICATIONS_OF_INTEGRATION_QUIZZES['area-under-curve-x-axis'];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
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
      const ctx = new (window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
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

  const handleSelectOption = (opt: string) => {
    if (selectedAnswer !== undefined) return; // already answered
    const isCorrect = opt === currentQ.correctAnswer;
    playTone(isCorrect);
    setSelectedAnswers((prev) => ({ ...prev, [currentQ.id]: opt }));
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

  const calculateScore = () => {
    let score = 0;
    config.questions.forEach((q) => {
      if (selectedAnswers[q.id] === q.correctAnswer) {
        score += 1;
      }
    });
    return score;
  };

  const totalScore = calculateScore();
  const percentage = Math.round((totalScore / config.questions.length) * 100);
  const isPassed = totalScore >= config.passScore;

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedUrl(true);
    setTimeout(() => setCopiedUrl(false), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 space-y-8 text-right font-sans" dir="rtl">
      {/* Breadcrumbs Navigation */}
      <Breadcrumbs
        items={[
          { label: 'الرئيسية', onClick: onGoHome },
          { label: 'التفاضل والتكامل', onClick: onGoDomain },
          { label: 'تطبيقات التكامل', onClick: onGoApplicationsOfIntegration },
          { label: config.title },
        ]}
      />

      {/* Hero Header */}
      <div
        className={`rounded-3xl border ${themeClasses.border} ${themeClasses.cardBg} p-6 sm:p-8 shadow-sm transition-all`}
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-black/5 dark:border-white/5 pb-5 mb-5">
          <div className="flex items-center gap-3">
            <span className="text-4xl p-2.5 rounded-2xl bg-amber-500/10 border border-amber-500/20">
              
            </span>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs px-2.5 py-0.5 rounded-full font-bold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                  {config.categoryTitle}
                </span>
                <span className="text-xs text-black/40 dark:text-white/40 font-mono">
                  {config.questions.length} أسئلة محكمة
                </span>
              </div>
              <h1 className={`text-2xl sm:text-3xl font-extrabold ${themeClasses.textPrimary}`}>
                {config.title}
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-2 self-end sm:self-center">
            <button
              onClick={handleShare}
              className={`p-2.5 rounded-xl border ${themeClasses.border} hover:bg-black/5 dark:hover:bg-white/5 transition-colors text-xs font-medium flex items-center gap-1.5`}
              title="مشاركة رابط الاختبار"
            >
              {copiedUrl ? (
                <>
                  <Check className="w-4 h-4 text-emerald-500" />
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold">تم النسخ!</span>
                </>
              ) : (
                <>
                  <Share2 className="w-4 h-4" />
                  <span>مشاركة</span>
                </>
              )}
            </button>
          </div>
        </div>

        <p className={`text-sm sm:text-base ${themeClasses.textSecondary} leading-relaxed`}>
          {config.description}
        </p>

        {/* Test Meta Info */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-5 border-t border-black/5 dark:border-white/5 text-xs sm:text-sm">
          <div className={`p-3 rounded-xl border ${themeClasses.border} bg-black/[0.01] dark:bg-white/[0.01]`}>
            <span className={`block text-xs ${themeClasses.textSecondary} mb-0.5`}>الرمز الرياضي</span>
            <span className="font-mono font-bold text-amber-600 dark:text-amber-400 dir-ltr text-left block">
              {config.mathSymbol}
            </span>
          </div>
          <div className={`p-3 rounded-xl border ${themeClasses.border} bg-black/[0.01] dark:bg-white/[0.01]`}>
            <span className={`block text-xs ${themeClasses.textSecondary} mb-0.5`}>الزمن المقترح</span>
            <span className={`font-bold ${themeClasses.textPrimary}`}>{config.duration}</span>
          </div>
          <div className={`p-3 rounded-xl border ${themeClasses.border} bg-black/[0.01] dark:bg-white/[0.01]`}>
            <span className={`block text-xs ${themeClasses.textSecondary} mb-0.5`}>حد الاجتياز</span>
            <span className={`font-bold ${themeClasses.textPrimary}`}>{config.passScore} من {config.questions.length}</span>
          </div>
          <div className={`p-3 rounded-xl border ${themeClasses.border} bg-black/[0.01] dark:bg-white/[0.01]`}>
            <span className={`block text-xs ${themeClasses.textSecondary} mb-0.5`}>التقدم الحالي</span>
            <span className="font-bold text-amber-600 dark:text-amber-400">
              {Object.keys(selectedAnswers).length} / {config.questions.length}
            </span>
          </div>
        </div>
      </div>

      {/* Main Interactive Quiz Card */}
      <div
        className={`rounded-3xl border ${themeClasses.border} ${themeClasses.cardBg} p-6 sm:p-8 shadow-sm transition-all`}
      >
        {!isCompleted ? (
          <div className="space-y-6">
            {/* Progress Bar & Counter */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs sm:text-sm font-semibold">
                <span className={themeClasses.textSecondary}>
                  السؤال {currentIndex + 1} من {config.questions.length}
                </span>
                <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                  مستوى الصعوبة: {currentQ.difficulty}
                </span>
              </div>
              <div className="w-full bg-black/5 dark:bg-white/10 h-2.5 rounded-full overflow-hidden">
                <div
                  className="bg-amber-600 h-full transition-all duration-300 rounded-full"
                  style={{
                    width: `${((currentIndex + 1) / config.questions.length) * 100}%`,
                  }}
                />
              </div>
            </div>

            {/* Question Text */}
            <div className="py-2">
              <h2
                className={`text-lg sm:text-xl font-bold ${themeClasses.textPrimary} leading-relaxed`}
              >
                {currentQ.question}
              </h2>
            </div>

            {/* Options List */}
            <div className="grid grid-cols-1 gap-3">
              {currentQ.options.map((opt, i) => {
                const isSelected = selectedAnswer === opt;
                const isCorrect = opt === currentQ.correctAnswer;
                const hasAnswered = selectedAnswer !== undefined;

                let optionClass = `border ${themeClasses.border} hover:border-amber-500/50 hover:bg-amber-500/5`;

                if (hasAnswered) {
                  if (isCorrect) {
                    optionClass =
                      'border-emerald-500 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 font-bold';
                  } else if (isSelected) {
                    optionClass =
                      'border-rose-500 bg-rose-500/10 text-rose-700 dark:text-rose-300 font-bold';
                  } else {
                    optionClass = `opacity-50 border ${themeClasses.border}`;
                  }
                }

                return (
                  <button
                    key={i}
                    onClick={() => handleSelectOption(opt)}
                    disabled={hasAnswered}
                    className={`w-full p-4 rounded-2xl text-right transition-all flex items-center justify-between gap-3 text-sm sm:text-base ${optionClass}`}
                  >
                    <span className="leading-relaxed">{opt}</span>
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

            {/* Hint & Solution Box */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setShowHint((prev) => !prev)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border ${themeClasses.border} hover:bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-semibold transition-colors`}
                >
                  <Lightbulb className="w-3.5 h-3.5" />
                  <span>{showHint ? 'إخفاء التلميح' : 'إظهار تلميح الحل'}</span>
                </button>
              </div>

              {showHint && (
                <div
                  className={`p-3.5 rounded-xl border border-amber-500/30 bg-amber-500/5 text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed animate-in fade-in duration-200`}
                >
                  <strong className="text-amber-600 dark:text-amber-400 block mb-1">
                    تنبيه: تلميح استرشادي:
                  </strong>
                  {currentQ.hint}
                </div>
              )}

              {selectedAnswer !== undefined && (
                <div
                  className={`p-4 rounded-2xl border ${
                    selectedAnswer === currentQ.correctAnswer
                      ? 'border-emerald-500/30 bg-emerald-500/5'
                      : 'border-rose-500/30 bg-rose-500/5'
                  } space-y-2 text-xs sm:text-sm animate-in fade-in duration-200`}
                >
                  <div className="flex items-center gap-2 font-bold">
                    {selectedAnswer === currentQ.correctAnswer ? (
                      <span className="text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                        <CheckCircle2 className="w-4 h-4" /> إجابة صحيحة ومتقنة!
                      </span>
                    ) : (
                      <span className="text-rose-600 dark:text-rose-400 flex items-center gap-1">
                        <XCircle className="w-4 h-4" /> إجابة غير دقيقة - الجواب الصحيح هو: {currentQ.correctAnswer}
                      </span>
                    )}
                  </div>
                  <p className={`${themeClasses.textSecondary} leading-relaxed whitespace-pre-line`}>
                    <strong>الشرح التوضيحي: </strong>
                    {currentQ.explanation}
                  </p>
                </div>
              )}
            </div>

            {/* Bottom Actions */}
            <div className="flex items-center justify-between pt-4 border-t border-black/5 dark:border-white/5">
              <button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className={`px-4 py-2 rounded-xl border ${themeClasses.border} hover:bg-black/5 dark:hover:bg-white/5 text-xs sm:text-sm font-medium flex items-center gap-1.5 transition-colors disabled:opacity-30 disabled:pointer-events-none`}
              >
                <ArrowRight className="w-4 h-4" />
                السابق
              </button>

              <button
                onClick={handleNext}
                disabled={selectedAnswer === undefined}
                className="px-6 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs sm:text-sm font-bold flex items-center gap-2 transition-colors disabled:opacity-40 disabled:pointer-events-none shadow-sm"
              >
                <span>{currentIndex === config.questions.length - 1 ? 'إنهاء واستعراض النتيجة' : 'السؤال التالي'}</span>
                <ArrowLeft className="w-4 h-4" />
              </button>
            </div>
          </div>
        ) : (
          /* Completion & Results View */
          <div className="text-center py-6 space-y-6">
            <div className="inline-flex p-4 rounded-3xl bg-amber-500/10 text-amber-600 dark:text-amber-400 mb-2 border border-amber-500/20">
              <Award className="w-16 h-16" />
            </div>

            <div>
              <span className="text-xs px-3 py-1 rounded-full font-bold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 inline-block mb-2">
                نتيجة اختبار: {config.title}
              </span>
              <h2 className={`text-2xl sm:text-3xl font-extrabold ${themeClasses.textPrimary}`}>
                {isPassed ? 'مبارك! اجتزت الاختبار بنجاح باهر ' : 'أحسنت المحاولة! تحتاج لمزيد من المراجعة والتركيز '}
              </h2>
              <p className={`text-sm ${themeClasses.textSecondary} mt-2 max-w-md mx-auto`}>
                {isPassed
                  ? `حققت ${totalScore} من أصل ${config.questions.length} أسئلة (${percentage}%)، وهو ما يتجاوز حد الإتقان المطلوب (${config.passScore}/${config.questions.length}).`
                  : `حققت ${totalScore} من أصل ${config.questions.length} أسئلة (${percentage}%). حد النجاح المطلوب هو ${config.passScore} درجات. يمكنك مراجعة الشروحات وإعادة الاختبار.`}
              </p>
            </div>

            {/* Score Ring / Bar */}
            <div className="flex items-center justify-center gap-6 py-4">
              <div className={`p-4 rounded-2xl border ${themeClasses.border} w-36 bg-black/[0.01] dark:bg-white/[0.01]`}>
                <span className={`block text-xs ${themeClasses.textSecondary} mb-1`}>الدرجة النهائية</span>
                <span className="text-3xl font-black text-amber-600 dark:text-amber-400">
                  {totalScore} <span className="text-sm font-normal text-black/40 dark:text-white/40">/ {config.questions.length}</span>
                </span>
              </div>
              <div className={`p-4 rounded-2xl border ${themeClasses.border} w-36 bg-black/[0.01] dark:bg-white/[0.01]`}>
                <span className={`block text-xs ${themeClasses.textSecondary} mb-1`}>النسبة المئوية</span>
                <span className={`text-3xl font-black ${isPassed ? 'text-emerald-600 dark:text-emerald-400' : 'text-rose-600 dark:text-rose-400'}`}>
                  %{percentage}
                </span>
              </div>
            </div>

            {/* Digital Certificate Section */}
            {isPassed && (
              <div className={`p-5 rounded-2xl border ${themeClasses.border} bg-amber-500/5 max-w-lg mx-auto text-right space-y-3`}>
                <div className="flex items-center gap-2 text-amber-700 dark:text-amber-300 font-bold text-sm">
                  <Sparkles className="w-4 h-4" />
                  <span>شهادة إتقان رقمية معتمدة</span>
                </div>
                <p className={`text-xs ${themeClasses.textSecondary}`}>
                  أدخل اسمك الكريم لإنشاء شهادة إتمام موثقة لهذا الاختبار ومشاركتها أو طباعتها:
                </p>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                    placeholder="اسم الطالب / الباحث الكامل"
                    className={`flex-1 px-3 py-2 rounded-xl border ${themeClasses.border} ${themeClasses.cardBg} text-sm focus:outline-none focus:border-amber-500 text-right`}
                  />
                  <button
                    onClick={() => setShowCertificate(true)}
                    disabled={!studentName.trim()}
                    className="px-4 py-2 rounded-xl bg-amber-600 text-white text-xs font-bold hover:bg-amber-700 transition-colors disabled:opacity-40"
                  >
                    إصدار الشهادة
                  </button>
                </div>

                {showCertificate && studentName.trim() && (
                  <div className="mt-4 p-6 rounded-2xl border-2 border-amber-500/40 bg-white dark:bg-zinc-900 shadow-md text-center space-y-3 animate-in zoom-in-95 duration-200">
                    <div className="text-amber-600 dark:text-amber-400 text-xs font-bold tracking-widest uppercase">
                      شهادة إتقان في الرياضيات التطبيقية
                    </div>
                    <div className={`text-xl font-black ${themeClasses.textPrimary}`}>
                      {studentName}
                    </div>
                    <p className={`text-xs ${themeClasses.textSecondary} leading-relaxed`}>
                      قد اجتاز بنجاح وتفوق الاختبار التفاعلي التخصصي في:
                      <br />
                      <strong className="text-amber-600 dark:text-amber-400 font-extrabold">{config.title}</strong>
                      <br />
                      بنسبة إتقان بلغت <strong>%{percentage}</strong> وفق معايير منهاج تطبيقات التكامل.
                    </p>
                    <div className="pt-2 flex items-center justify-between text-[10px] text-black/40 dark:text-white/40 border-t border-black/5 dark:border-white/5">
                      <span>الرمز: {config.mathSymbol}</span>
                      <span>التاريخ: {new Date().toLocaleDateString('ar-EG')}</span>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Detailed Question Review */}
            <div className="pt-6 border-t border-black/5 dark:border-white/5 text-right space-y-4">
              <h3 className={`text-lg font-bold ${themeClasses.textPrimary}`}>
                مراجعة إجابات الأسئلة الـ {config.questions.length}:
              </h3>
              <div className="space-y-3">
                {config.questions.map((q, idx) => {
                  const userAns = selectedAnswers[q.id];
                  const isUserCorrect = userAns === q.correctAnswer;
                  return (
                    <div
                      key={q.id}
                      className={`p-4 rounded-xl border ${themeClasses.border} ${
                        isUserCorrect ? 'bg-emerald-500/5' : 'bg-rose-500/5'
                      } text-xs sm:text-sm space-y-1.5`}
                    >
                      <div className="flex items-center justify-between font-bold">
                        <span className="flex items-center gap-1.5">
                          {isUserCorrect ? (
                            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                          ) : (
                            <XCircle className="w-4 h-4 text-rose-500 shrink-0" />
                          )}
                          السؤال {idx + 1}: {q.question}
                        </span>
                        <span className="text-xs px-2 py-0.5 rounded font-mono">
                          {isUserCorrect ? 'صحيح (+1)' : 'خطأ (0)'}
                        </span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 pt-1 text-xs">
                        <div>
                          <span className={themeClasses.textSecondary}>إجابتك: </span>
                          <span className={isUserCorrect ? 'font-bold text-emerald-600' : 'font-bold text-rose-600'}>
                            {userAns || 'لم يتم الحل'}
                          </span>
                        </div>
                        {!isUserCorrect && (
                          <div>
                            <span className={themeClasses.textSecondary}>الإجابة النموذجية: </span>
                            <span className="font-bold text-emerald-600">{q.correctAnswer}</span>
                          </div>
                        )}
                      </div>
                      <p className={`text-[11px] sm:text-xs ${themeClasses.textSecondary} pt-1 leading-relaxed border-t border-black/5 dark:border-white/5`}>
                        <strong>الشرح: </strong> {q.explanation}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
              <button
                onClick={handleReset}
                className="px-6 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-sm font-bold flex items-center gap-2 transition-colors shadow-sm"
              >
                <RotateCcw className="w-4 h-4" />
                إعادة المحاولة
              </button>

              <button
                onClick={onGoApplicationsOfIntegration}
                className={`px-6 py-2.5 rounded-xl border ${themeClasses.border} hover:bg-black/5 dark:hover:bg-white/5 text-sm font-bold flex items-center gap-2 transition-colors`}
              >
                <BookOpen className="w-4 h-4" />
                العودة لقسم تطبيقات التكامل
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Comprehensive Academic Article */}
      <section
        className={`rounded-2xl border ${themeClasses.border} ${themeClasses.cardBg} p-6 sm:p-8 shadow-sm transition-all text-right space-y-6`}
      >
        <div className="border-b border-black/5 dark:border-white/5 pb-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 mb-2">
            <BookOpen className="w-3.5 h-3.5" />
            المقالة التعليمية والشرح النظري المعتمد
          </div>
          <h2 className={`text-xl sm:text-2xl font-extrabold ${themeClasses.textPrimary}`}>
            {config.article.title}
          </h2>
          <p className={`text-sm ${themeClasses.textSecondary} mt-2 leading-relaxed`}>
            {config.article.introduction}
          </p>
        </div>

        <div className="space-y-6 text-sm sm:text-base leading-relaxed">
          {config.article.sections.map((sec, i) => (
            <div key={i} className="space-y-2">
              <h3 className={`font-bold text-base sm:text-lg ${themeClasses.textPrimary}`}>
                {sec.heading}
              </h3>
              <p className={`${themeClasses.textSecondary} leading-relaxed whitespace-pre-line text-xs sm:text-sm`}>
                {sec.content}
              </p>
            </div>
          ))}
        </div>

        <div className={`p-4 rounded-xl border ${themeClasses.border} bg-amber-500/5 text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
          <strong className="text-amber-700 dark:text-amber-300 block mb-1">
            خلاصة المحور:
          </strong>
          {config.article.summary}
        </div>
      </section>

      {/* Connected Tests Backlink Box */}
      <ApplicationsOfIntegrationBacklinkBox
        currentTestId={config.id}
        onSelectTest={(testId) => {
          navigateTo(`/domain/calculus/applications-of-integration/${testId}`);
        }}
      />
    </div>
  );
};
