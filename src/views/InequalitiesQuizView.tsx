import React, { useState } from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { useEyeTheme } from '../context/ThemeContext';
import { InequalitiesBacklinkBox } from '../components/InequalitiesBacklinkBox';
import {
  INEQUALITIES_QUIZZES,
  InequalitiesQuizType,
} from '../data/inequalitiesTestsData';
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

interface InequalitiesQuizViewProps {
  quizType: InequalitiesQuizType;
  onGoHome: () => void;
  onGoDomain: () => void;
  onGoInequalities: () => void;
}

export const InequalitiesQuizView: React.FC<InequalitiesQuizViewProps> = ({
  quizType,
  onGoHome,
  onGoDomain,
  onGoInequalities,
}) => {
  const { themeClasses } = useEyeTheme();
  const config =
    INEQUALITIES_QUIZZES[quizType] ||
    INEQUALITIES_QUIZZES['inequality-symbols-comparison'];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string | number>>({});
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
        osc.frequency.setValueAtTime(880, ctx.currentTime + 0.1); // A5
        gain.gain.setValueAtTime(0.15, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3);
        osc.start();
        osc.stop(ctx.currentTime + 0.3);
      } else {
        osc.frequency.setValueAtTime(220, ctx.currentTime);
        osc.frequency.setValueAtTime(164.81, ctx.currentTime + 0.1);
        gain.gain.setValueAtTime(0.15, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.25);
        osc.start();
        osc.stop(ctx.currentTime + 0.25);
      }
    } catch {
      // Audio not permitted or supported
    }
  };

  const handleSelectOption = (opt: string | number) => {
    if (selectedAnswer !== undefined) return;
    setSelectedAnswers((prev) => ({ ...prev, [currentQ.id]: opt }));
    const isCorrect = String(opt).trim() === String(currentQ.correctAnswer).trim();
    playTone(isCorrect);
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

  const handleRestart = () => {
    setSelectedAnswers({});
    setCurrentIndex(0);
    setIsCompleted(false);
    setShowHint(false);
    setShowCertificate(false);
  };

  const calculateScore = () => {
    let correct = 0;
    config.questions.forEach((q) => {
      if (String(selectedAnswers[q.id]).trim() === String(q.correctAnswer).trim()) {
        correct++;
      }
    });
    return correct;
  };

  const score = calculateScore();
  const percentage = Math.round((score / config.questions.length) * 100);

  const handleCopyLink = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
      setCopiedUrl(true);
      setTimeout(() => setCopiedUrl(false), 2500);
    });
  };

  const answeredCount = Object.keys(selectedAnswers).length;
  const progressPct = Math.round((answeredCount / config.questions.length) * 100);

  return (
    <div className="space-y-8 pb-16 text-right">
      {/* Breadcrumb Navigation */}
      <Breadcrumbs
        items={[
          { label: 'الرئيسية', onClick: onGoHome },
          { label: 'الجبر والدوال', onClick: onGoDomain },
          { label: 'المتباينات', onClick: onGoInequalities },
          { label: config.shortTitle, active: true },
        ]}
      />

      {/* Header Info */}
      <header className="space-y-3 pb-4 border-b border-black/[0.06] dark:border-white/[0.08]">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="text-3xl sm:text-4xl" role="img" aria-label={config.shortTitle}>
              {config.emoji}
            </span>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs px-2.5 py-0.5 rounded-full font-semibold bg-[#127052]/10 text-[#127052] dark:text-[#5EB5A1] dark:bg-[#127052]/20">
                  {config.levelBadge}
                </span>
                <span className="text-xs text-black/50 dark:text-white/50">
                  ⏱️ {config.duration}
                </span>
              </div>
              <h1 className={`text-xl sm:text-2xl font-extrabold tracking-tight ${themeClasses.textPrimary}`}>
                {config.title}
              </h1>
            </div>
          </div>

          {/* Share Action */}
          <button
            onClick={handleCopyLink}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border ${themeClasses.border} ${themeClasses.cardBg} hover:bg-black/[0.04] dark:hover:bg-white/[0.04] text-xs font-medium ${themeClasses.textSecondary} transition-colors`}
            title="مشاركة رابط الاختبار"
          >
            {copiedUrl ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-emerald-600 font-bold">تم نسخ الرابط!</span>
              </>
            ) : (
              <>
                <Share2 className="w-3.5 h-3.5" />
                <span>مشاركة</span>
              </>
            )}
          </button>
        </div>

        <p className={`text-xs sm:text-sm ${themeClasses.textSecondary}`}>
          {config.shortDesc}
        </p>

        {/* Math Formula Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-black/[0.03] dark:bg-white/[0.05] border border-black/[0.05] dark:border-white/[0.05]">
          <span className="text-xs text-black/60 dark:text-white/60">الصيغة المعيارية:</span>
          <span className="font-mono text-xs font-bold text-[#127052] dark:text-[#5EB5A1] dir-ltr">
            {config.mathSymbol}
          </span>
        </div>
      </header>

      {/* Progress Indicator */}
      <div className="space-y-1.5">
        <div className="flex items-center justify-between text-xs">
          <span className={themeClasses.textMuted}>
            السؤال {currentIndex + 1} من {config.questions.length}
          </span>
          <span className="font-semibold text-[#127052] dark:text-[#5EB5A1]">
            إنجاز {progressPct}% ({answeredCount}/{config.questions.length})
          </span>
        </div>
        <div className="w-full h-2 bg-black/[0.06] dark:bg-white/[0.08] rounded-full overflow-hidden">
          <div
            className="h-full bg-linear-to-r from-[#127052] to-[#2aa77f] transition-all duration-300"
            style={{ width: `${progressPct}%` }}
          />
        </div>
      </div>

      {/* Main Quiz Interactive Box */}
      {!isCompleted ? (
        <section
          aria-label="سؤال الاختبار التفاعلي"
          className={`p-6 sm:p-8 rounded-2xl border ${themeClasses.border} ${themeClasses.cardBg} space-y-6 shadow-2xs`}
        >
          {/* Question Text */}
          <div className="space-y-3">
            <span className="text-xs font-bold text-[#127052] dark:text-[#5EB5A1]">
              السؤال #{currentQ.id}
            </span>
            <h2 className={`text-base sm:text-xl font-bold leading-relaxed ${themeClasses.textPrimary}`}>
              {currentQ.questionText}
            </h2>

            {/* Display formula/content box if present */}
            {currentQ.displayContent && (
              <div className="p-4 rounded-xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/[0.04] dark:border-white/[0.06] flex items-center justify-center">
                <span className="text-lg sm:text-2xl font-mono font-bold text-[#127052] dark:text-[#5EB5A1] dir-ltr tracking-wider">
                  {currentQ.displayContent}
                </span>
              </div>
            )}
          </div>

          {/* Options List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {currentQ.options.map((opt, idx) => {
              const isSelected = selectedAnswer !== undefined && String(selectedAnswer) === String(opt);
              const isCorrectOption = String(opt).trim() === String(currentQ.correctAnswer).trim();
              const hasAnswered = selectedAnswer !== undefined;

              let btnClasses = `p-4 rounded-xl border text-right font-medium transition-all text-sm flex items-center justify-between ${themeClasses.border} bg-black/[0.01] dark:bg-white/[0.01] hover:border-[#127052]/40 hover:bg-[#127052]/5`;

              if (hasAnswered) {
                if (isCorrectOption) {
                  btnClasses = 'p-4 rounded-xl border border-emerald-500 bg-emerald-500/10 text-emerald-800 dark:text-emerald-200 font-bold';
                } else if (isSelected && !isCorrectOption) {
                  btnClasses = 'p-4 rounded-xl border border-red-500 bg-red-500/10 text-red-800 dark:text-red-200 font-bold';
                } else {
                  btnClasses = `p-4 rounded-xl border ${themeClasses.border} opacity-50`;
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(opt)}
                  disabled={hasAnswered}
                  className={btnClasses}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-black/5 dark:bg-white/10 flex items-center justify-center text-xs font-bold text-black/60 dark:text-white/60">
                      {idx + 1}
                    </span>
                    <span className="dir-ltr text-right">{opt}</span>
                  </div>
                  {hasAnswered && isCorrectOption && (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  )}
                  {hasAnswered && isSelected && !isCorrectOption && (
                    <XCircle className="w-5 h-5 text-red-600 shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Explanation Box on Answer */}
          {selectedAnswer !== undefined && (
            <div
              className={`p-4 sm:p-5 rounded-xl border space-y-2 text-xs sm:text-sm animate-fadeIn ${
                String(selectedAnswer).trim() === String(currentQ.correctAnswer).trim()
                  ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-900 dark:text-emerald-200'
                  : 'bg-amber-500/10 border-amber-500/20 text-amber-900 dark:text-amber-200'
              }`}
            >
              <div className="flex items-center gap-2 font-bold">
                {String(selectedAnswer).trim() === String(currentQ.correctAnswer).trim() ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>إجابة صحيحة! أحسنت</span>
                  </>
                ) : (
                  <>
                    <XCircle className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>تحليل الخطوة الرياضية والحل النموذجي:</span>
                  </>
                )}
              </div>
              <p className="leading-relaxed">{currentQ.explanation}</p>
            </div>
          )}

          {/* Hint Trigger */}
          {selectedAnswer === undefined && (
            <div className="pt-2">
              <button
                onClick={() => setShowHint((prev) => !prev)}
                className={`inline-flex items-center gap-1.5 text-xs font-medium text-[#127052] dark:text-[#5EB5A1] hover:underline`}
              >
                <Lightbulb className="w-3.5 h-3.5" />
                <span>{showHint ? 'إخفاء التلميح' : 'هل تحتاج إلى تلميح للمساعدة؟'}</span>
              </button>
              {showHint && (
                <p className="mt-2 p-3 rounded-lg bg-black/[0.02] dark:bg-white/[0.04] border border-black/[0.04] text-xs text-black/70 dark:text-white/70 leading-relaxed">
                  تنبيه: {currentQ.hint}
                </p>
              )}
            </div>
          )}

          {/* Bottom Action Buttons */}
          <div className="flex items-center justify-between pt-4 border-t border-black/[0.06] dark:border-white/[0.08]">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium border ${themeClasses.border} disabled:opacity-30 disabled:cursor-not-allowed hover:bg-black/[0.03] dark:hover:bg-white/[0.03] transition-colors`}
            >
              <ArrowRight className="w-4 h-4" />
              <span>السابق</span>
            </button>

            <button
              onClick={handleNext}
              disabled={selectedAnswer === undefined}
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-[#127052] text-white hover:bg-[#0e5840] disabled:opacity-40 disabled:cursor-not-allowed shadow-2xs transition-all"
            >
              <span>
                {currentIndex === config.questions.length - 1
                  ? 'عرض النتيجة النهائية'
                  : 'السؤال التالي'}
              </span>
              <ArrowLeft className="w-4 h-4" />
            </button>
          </div>
        </section>
      ) : (
        /* Completion & Certificate Box */
        <section
          aria-label="نتيجة الاختبار وشهادة الإنجاز"
          className={`p-6 sm:p-10 rounded-2xl border ${themeClasses.border} ${themeClasses.cardBg} space-y-8 shadow-2xs text-center`}
        >
          <div className="space-y-4 max-w-md mx-auto">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-600 mx-auto flex items-center justify-center">
              <Award className="w-9 h-9" />
            </div>

            <h2 className={`text-2xl font-extrabold ${themeClasses.textPrimary}`}>
              اكتمل الاختبار بنجاح!
            </h2>

            <div className="p-4 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.05] dark:border-white/[0.05] space-y-2">
              <div className="text-3xl font-black text-[#127052] dark:text-[#5EB5A1]">
                {score} / {config.questions.length}
              </div>
              <div className="text-xs font-semibold text-black/60 dark:text-white/60">
                نسبة الإنجاز: {percentage}%
              </div>
              <p className={`text-xs ${themeClasses.textSecondary} pt-1`}>
                {percentage >= 90
                  ? ' أداء استثنائي متكامل! أظهرت فهماً فائقاً لقواعد المتباينات.'
                  : percentage >= 70
                  ? ' نتيجة ممتازة! لديك أساس متين جداً في هذا الموضوع.'
                  : ' بداية جيدة، نوصي بمراجعة المقال التعليمي بالأسفل وإعادة المحاولة.'}
              </p>
            </div>

            {/* Certificate Form */}
            {!showCertificate ? (
              <div className="p-4 rounded-xl border border-black/[0.06] dark:border-white/[0.08] space-y-3 text-right">
                <label className="block text-xs font-bold text-black/70 dark:text-white/70">
                  أدخل اسمك لإصدار شهادة إتمام الاختبار:
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                    placeholder="مثال: سارة محمد"
                    className={`flex-1 px-3 py-2 text-xs rounded-lg border ${themeClasses.border} ${themeClasses.cardBg} focus:outline-hidden focus:ring-2 focus:ring-[#127052]/40`}
                  />
                  <button
                    onClick={() => setShowCertificate(true)}
                    disabled={!studentName.trim()}
                    className="px-4 py-2 rounded-lg bg-[#127052] text-white text-xs font-bold disabled:opacity-40"
                  >
                    إصدار
                  </button>
                </div>
              </div>
            ) : (
              <div className="p-6 rounded-2xl border-2 border-[#127052] bg-linear-to-b from-[#127052]/5 to-transparent space-y-4 text-center">
                <div className="text-xs uppercase tracking-widest text-[#127052] font-bold">
                  شهادة إنجاز واجتياز رسمي
                </div>
                <h3 className="text-xl font-extrabold text-black dark:text-white">
                  تُمنح للطالب/ـة: {studentName}
                </h3>
                <p className="text-xs text-black/70 dark:text-white/70">
                  لاختياره واجتيازه بنجاح: <strong className="text-[#127052]">{config.title}</strong> بنسبة إنجاز بلغت {percentage}% بتاريخ {new Date().toLocaleDateString('ar-EG')}.
                </p>
                <div className="pt-2 flex justify-center">
                  <button
                    onClick={() => window.print()}
                    className="px-4 py-1.5 rounded-lg border border-[#127052] text-[#127052] dark:text-[#5EB5A1] text-xs font-bold hover:bg-[#127052]/10"
                  >
                     طباعة الشهادة
                  </button>
                </div>
              </div>
            )}

            {/* Restart & Return Actions */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <button
                onClick={handleRestart}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold border ${themeClasses.border} hover:bg-black/[0.04] transition-colors`}
              >
                <RotateCcw className="w-4 h-4" />
                <span>إعادة الاختبار</span>
              </button>
              <button
                onClick={onGoInequalities}
                className="inline-flex items-center gap-2 px-5 py-2 rounded-xl text-xs font-bold bg-[#127052] text-white hover:bg-[#0e5840] transition-colors shadow-2xs"
              >
                <span>العودة لقائمة المتباينات</span>
                <ArrowLeft className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Dedicated Pedagogical Article for THIS Specific Test Topic */}
      <section
        id="topic-pedagogical-article"
        aria-label="المقال التعليمي والتربوي المخصص لهذا الاختبار"
        className={`p-6 sm:p-10 rounded-2xl border ${themeClasses.border} ${themeClasses.cardBg} space-y-8 shadow-2xs leading-relaxed text-right`}
      >
        <header className="space-y-3 pb-6 border-b border-black/[0.06] dark:border-white/[0.08]">
          <div className="flex items-center gap-2 text-xs font-bold text-[#127052] dark:text-[#5EB5A1]">
            <BookOpen className="w-4 h-4" />
            <span>{config.article.badge}</span>
          </div>

          <h2 className={`text-xl sm:text-2xl font-extrabold tracking-tight ${themeClasses.textPrimary}`}>
            {config.article.h2}
          </h2>

          <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
            {config.article.subtitle}
          </p>
        </header>

        {/* Article Sections */}
        <div className="space-y-6">
          {config.article.sections.map((sec, idx) => (
            <div key={idx} className="space-y-3">
              <div className="flex items-center gap-2">
                {sec.icon === 'sparkles' && (
                  <Sparkles className="w-4 h-4 text-[#127052] dark:text-[#5EB5A1]" />
                )}
                {sec.icon === 'trend' && (
                  <TrendingUp className="w-4 h-4 text-blue-500" />
                )}
                {sec.icon === 'book' && (
                  <BookOpen className="w-4 h-4 text-purple-500" />
                )}
                {sec.icon === 'heart' && (
                  <Heart className="w-4 h-4 text-emerald-500" />
                )}
                <h3 className={`text-base font-bold ${themeClasses.textPrimary}`}>
                  {sec.title}
                </h3>
              </div>

              <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
                {sec.content}
              </p>

              {sec.subBoxes && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                  {sec.subBoxes.map((sub, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-3.5 rounded-xl border border-black/[0.04] dark:border-white/[0.06] bg-black/[0.01] dark:bg-white/[0.02] space-y-1.5"
                    >
                      <h4 className="text-xs font-bold text-[#127052] dark:text-[#5EB5A1]">
                        {sub.title}
                      </h4>
                      <p className={`text-[11px] sm:text-xs ${themeClasses.textSecondary} leading-relaxed`}>
                        {sub.text}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Golden Tip Box */}
        <div className="p-4 sm:p-5 rounded-xl bg-[#127052]/5 dark:bg-[#127052]/10 border border-[#127052]/20 space-y-2">
          <div className="flex items-center gap-2 font-bold text-xs sm:text-sm text-[#127052] dark:text-[#5EB5A1]">
            <Lightbulb className="w-4 h-4 shrink-0" />
            <span>النصيحة الذهبية للمعلمين والطلاب</span>
          </div>
          <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
            {config.article.goldenTip}
          </p>
        </div>
      </section>

      {/* Internal Backlink Box Component for SEO & Smooth Learning Path */}
      <InequalitiesBacklinkBox currentTestId={config.id} />
    </div>
  );
};
