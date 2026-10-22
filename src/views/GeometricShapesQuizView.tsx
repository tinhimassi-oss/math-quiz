import React, { useState } from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { useEyeTheme } from '../context/ThemeContext';
import { GeometricShapesBacklinkBox } from '../components/GeometricShapesBacklinkBox';
import {
  GEOMETRIC_SHAPES_QUIZZES,
  GeometricShapesQuizType,
} from '../data/geometricShapesTestsData';
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

interface GeometricShapesQuizViewProps {
  quizType: GeometricShapesQuizType;
  onGoHome: () => void;
  onGoDomain: () => void;
  onGoGeometricShapes: () => void;
}

export const GeometricShapesQuizView: React.FC<GeometricShapesQuizViewProps> = ({
  quizType,
  onGoHome,
  onGoDomain,
  onGoGeometricShapes,
}) => {
  const { themeClasses } = useEyeTheme();
  const config =
    GEOMETRIC_SHAPES_QUIZZES[quizType] ||
    GEOMETRIC_SHAPES_QUIZZES['shapes-2d-properties'];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
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
      // AudioContext not supported or blocked
    }
  };

  const handleSelectOption = (idx: number) => {
    if (selectedAnswer !== undefined) return; // Prevent changing answer
    const isCorrect = idx === currentQ.correctIndex;
    setSelectedAnswers((prev) => ({ ...prev, [currentQ.id]: idx }));
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
    setStudentName('');
  };

  const calculateScore = () => {
    let score = 0;
    config.questions.forEach((q) => {
      if (selectedAnswers[q.id] === q.correctIndex) {
        score++;
      }
    });
    return score;
  };

  const score = calculateScore();
  const percentage = Math.round((score / config.questions.length) * 100);

  const handleShare = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
      setCopiedUrl(true);
      setTimeout(() => setCopiedUrl(false), 2500);
    });
  };

  return (
    <div className="space-y-8 pb-16 text-right">
      {/* Navigation Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'الرئيسية', onClick: onGoHome },
          { label: 'الهندسة وحساب المثلثات', onClick: onGoDomain },
          { label: 'الأشكال الهندسية', onClick: onGoGeometricShapes },
          { label: config.title, active: true },
        ]}
      />

      {/* Header Banner */}
      <div className={`p-6 sm:p-8 rounded-3xl border ${themeClasses.border} ${themeClasses.cardBg} shadow-sm space-y-4`}>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-3xl sm:text-4xl p-3 rounded-2xl bg-amber-500/10 text-amber-600 dark:text-amber-400">
              {config.emoji}
            </span>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400">
                  {config.level}
                </span>
                <span className="text-xs font-mono opacity-60">
                  {config.mathSymbol}
                </span>
              </div>
              <h1 className={`text-xl sm:text-2xl font-black ${themeClasses.textPrimary}`}>
                {config.title}
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className={`p-2.5 rounded-xl border ${themeClasses.border} ${themeClasses.cardHoverBg} ${themeClasses.textPrimary} transition-colors flex items-center gap-1.5 text-xs font-medium cursor-pointer`}
              title="مشاركة رابط الاختبار"
            >
              {copiedUrl ? <Check className="w-4 h-4 text-emerald-500" /> : <Share2 className="w-4 h-4" />}
              <span>{copiedUrl ? 'تم نسخ الرابط!' : 'مشاركة'}</span>
            </button>
            <button
              onClick={handleRestart}
              className={`p-2.5 rounded-xl border ${themeClasses.border} ${themeClasses.cardHoverBg} ${themeClasses.textPrimary} transition-colors flex items-center gap-1.5 text-xs font-medium cursor-pointer`}
              title="إعادة البدء من جديد"
            >
              <RotateCcw className="w-4 h-4" />
              <span>إعادة</span>
            </button>
          </div>
        </div>

        <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed`}>
          {config.shortDesc}
        </p>

        {/* Concept Pill */}
        <div className="p-3.5 rounded-2xl bg-amber-500/5 border border-amber-500/20 text-xs flex items-start gap-2.5 text-amber-800 dark:text-amber-200">
          <Sparkles className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold ml-1">المفهوم الأساسي:</span>
            <span>{config.conceptSummary}</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="space-y-1.5 pt-2">
          <div className="flex justify-between text-xs font-medium">
            <span className={themeClasses.textPrimary}>
              السؤال {currentIndex + 1} من {config.questions.length}
            </span>
            <span className="text-amber-600 dark:text-amber-400 font-bold">
              {Math.round(((currentIndex + (selectedAnswer !== undefined ? 1 : 0)) / config.questions.length) * 100)}%
            </span>
          </div>
          <div className="h-2 rounded-full bg-black/5 dark:bg-white/5 overflow-hidden">
            <div
              className="h-full bg-gradient-to-l from-amber-500 to-orange-500 transition-all duration-300"
              style={{
                width: `${((currentIndex + (selectedAnswer !== undefined ? 1 : 0)) / config.questions.length) * 100}%`,
              }}
            />
          </div>
        </div>
      </div>

      {/* Main Interactive Quiz Section */}
      {!isCompleted ? (
        <div className={`p-6 sm:p-10 rounded-3xl border ${themeClasses.border} ${themeClasses.cardBg} shadow-sm space-y-6`}>
          {/* Question Text */}
          <div className="space-y-3">
            <span className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider">
              السؤال رقم {currentIndex + 1}
            </span>
            <h2 className={`text-lg sm:text-xl font-bold leading-relaxed ${themeClasses.textPrimary}`}>
              {currentQ.text}
            </h2>

            {currentQ.mathFormula && (
              <div className="p-3 rounded-xl bg-black/5 dark:bg-white/5 font-mono text-center text-sm sm:text-base dir-ltr text-amber-600 dark:text-amber-400 font-bold">
                {currentQ.mathFormula}
              </div>
            )}
          </div>

          {/* Answer Options */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {currentQ.options.map((opt, idx) => {
              const isSelected = selectedAnswer === idx;
              const isCorrect = idx === currentQ.correctIndex;
              const hasAnswered = selectedAnswer !== undefined;

              let btnStyle = `border ${themeClasses.border} ${themeClasses.cardHoverBg} ${themeClasses.textPrimary}`;

              if (hasAnswered) {
                if (isCorrect) {
                  btnStyle = 'border-emerald-500 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold';
                } else if (isSelected) {
                  btnStyle = 'border-rose-500 bg-rose-500/10 text-rose-600 dark:text-rose-400 font-bold';
                } else {
                  btnStyle = `border ${themeClasses.border} opacity-40 ${themeClasses.textPrimary}`;
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(idx)}
                  disabled={hasAnswered}
                  className={`p-4 rounded-2xl text-right transition-all flex items-center justify-between cursor-pointer ${btnStyle} ${
                    !hasAnswered ? 'hover:scale-[1.01] active:scale-[0.99]' : ''
                  }`}
                >
                  <span className="text-xs sm:text-sm font-medium">{opt}</span>
                  {hasAnswered && (
                    <div className="shrink-0 mr-2">
                      {isCorrect && <CheckCircle2 className="w-5 h-5 text-emerald-500" />}
                      {isSelected && !isCorrect && <XCircle className="w-5 h-5 text-rose-500" />}
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Hint Card Toggle */}
          {currentQ.hint && (
            <div className="pt-2">
              {!showHint ? (
                <button
                  onClick={() => setShowHint(true)}
                  className={`text-xs text-amber-600 dark:text-amber-400 hover:underline flex items-center gap-1 cursor-pointer`}
                >
                  <Lightbulb className="w-3.5 h-3.5" />
                  <span>هل تحتاج إلى تلميح للمساعدة؟</span>
                </button>
              ) : (
                <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-xs flex items-start gap-2 text-amber-800 dark:text-amber-200">
                  <Lightbulb className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold ml-1">تلميح توجيهي:</span>
                    <span>{currentQ.hint}</span>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Immediate Feedback Explanation */}
          {selectedAnswer !== undefined && (
            <div
              className={`p-4 sm:p-5 rounded-2xl border transition-all ${
                selectedAnswer === currentQ.correctIndex
                  ? 'bg-emerald-500/5 border-emerald-500/20 text-emerald-900 dark:text-emerald-100'
                  : 'bg-rose-500/5 border-rose-500/20 text-rose-900 dark:text-rose-100'
              } space-y-2`}
            >
              <div className="flex items-center gap-2 font-bold text-xs sm:text-sm">
                {selectedAnswer === currentQ.correctIndex ? (
                  <>
                    <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                    <span>إجابة صحيحة وممتازة! أحسنت.</span>
                  </>
                ) : (
                  <>
                    <XCircle className="w-5 h-5 text-rose-500" />
                    <span>إجابة غير صحيحة، إليك الشرح والخطوات الدقيقة:</span>
                  </>
                )}
              </div>
              <p className={`text-xs sm:text-sm leading-relaxed ${themeClasses.textSecondary}`}>
                {currentQ.explanation}
              </p>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between pt-4 border-t border-black/[0.06] dark:border-white/[0.08]">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className={`px-4 py-2 rounded-xl border ${themeClasses.border} ${themeClasses.textPrimary} text-xs font-semibold flex items-center gap-1.5 transition-opacity cursor-pointer ${
                currentIndex === 0 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-black/5 dark:hover:bg-white/5'
              }`}
            >
              <ArrowRight className="w-4 h-4" />
              <span>السابق</span>
            </button>

            <button
              onClick={handleNext}
              disabled={selectedAnswer === undefined}
              className={`px-6 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer shadow-xs ${
                selectedAnswer === undefined ? 'opacity-40 cursor-not-allowed' : 'hover:scale-[1.02] active:scale-[0.98]'
              }`}
            >
              <span>{currentIndex === config.questions.length - 1 ? 'عرض النتيجة النهائية' : 'السؤال التالي'}</span>
              <ArrowLeft className="w-4 h-4" />
            </button>
          </div>
        </div>
      ) : (
        /* Quiz Completed Screen */
        <div className={`p-8 sm:p-12 rounded-3xl border ${themeClasses.border} ${themeClasses.cardBg} text-center space-y-6 shadow-sm`}>
          <div className="w-20 h-20 mx-auto rounded-3xl bg-gradient-to-tr from-amber-500 to-orange-500 flex items-center justify-center text-white text-3xl shadow-lg">
            <Award className="w-10 h-10" />
          </div>

          <div className="space-y-2">
            <h2 className={`text-2xl sm:text-3xl font-black ${themeClasses.textPrimary}`}>
              اكتمل الاختبار بنجاح!
            </h2>
            <p className={`text-xs sm:text-sm ${themeClasses.textSecondary}`}>
              لقد أتممت اختبار: <span className="font-bold text-amber-600 dark:text-amber-400">{config.title}</span>
            </p>
          </div>

          {/* Score Badge */}
          <div className="p-6 rounded-2xl bg-amber-500/10 border border-amber-500/20 max-w-sm mx-auto space-y-2">
            <div className="text-3xl sm:text-4xl font-black text-amber-600 dark:text-amber-400">
              {score} / {config.questions.length}
            </div>
            <div className={`text-xs font-semibold ${themeClasses.textMuted}`}>
              الدرجة المحققة: {percentage}%
            </div>
            <div className="text-xs text-amber-700 dark:text-amber-300 font-medium">
              {percentage >= 90
                ? ' أداء استثنائي! إتقان تام للمفاهيم الهندسية.'
                : percentage >= 70
                ? ' مستوى رائع جداً! استمر في ترسيخ هذه المهارة.'
                : 'تنبيه: محاولة طيبة، راجع المقال التعليمي بالأسفل وحاول مجدداً!'}
            </div>
          </div>

          {/* Certificate Generation Option */}
          <div className="max-w-md mx-auto pt-2 space-y-3">
            {!showCertificate ? (
              <div className="space-y-2">
                <input
                  type="text"
                  placeholder="اكتب اسم الطالب لإصدار الشهادة"
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  className={`w-full px-4 py-2.5 rounded-xl border ${themeClasses.border} bg-black/5 dark:bg-white/5 text-xs text-center ${themeClasses.textPrimary} focus:outline-hidden focus:ring-2 focus:ring-amber-500`}
                />
                <button
                  onClick={() => setShowCertificate(true)}
                  disabled={!studentName.trim()}
                  className={`w-full py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    !studentName.trim() ? 'opacity-40 cursor-not-allowed' : ''
                  }`}
                >
                  <Award className="w-4 h-4" />
                  <span>عرض وطباعة شهادة الإتقان</span>
                </button>
              </div>
            ) : (
              /* Printable Certificate View */
              <div className="p-6 rounded-2xl border-2 border-amber-500 bg-amber-500/5 space-y-4 text-center print:p-8">
                <div className="flex justify-center text-amber-600">
                  <Award className="w-12 h-12" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-black text-amber-700 dark:text-amber-300">
                    شهادة إتقان المهارات الهندسية
                  </h3>
                  <p className={`text-xs ${themeClasses.textMuted}`}>
                    تمنح أكاديمية كويزات الرياضيات هذه الشهادة للطالب/ـة:
                  </p>
                  <div className="text-xl font-bold text-amber-600 dark:text-amber-400 py-1">
                    {studentName}
                  </div>
                  <p className={`text-xs ${themeClasses.textSecondary}`}>
                    لاجتيازه اختبار <span className="font-bold">{config.title}</span> بنجاح وبنسبة إتقان{' '}
                    <span className="font-bold text-amber-600">{percentage}%</span>
                  </p>
                </div>
                <div className="text-[10px] text-zinc-400">
                  التاريخ: {new Date().toLocaleDateString('ar-SA')} • رمز التحقق: GEO-{Math.random().toString(36).substring(2, 8).toUpperCase()}
                </div>
                <button
                  onClick={() => window.print()}
                  className="px-4 py-1.5 rounded-lg bg-amber-600 text-white text-xs font-bold hover:bg-amber-700 transition-colors cursor-pointer"
                >
                  طباعة الشهادة 
                </button>
              </div>
            )}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
            <button
              onClick={handleRestart}
              className={`px-5 py-2.5 rounded-xl border ${themeClasses.border} hover:bg-black/5 dark:hover:bg-white/5 transition-colors text-xs font-bold flex items-center gap-2 ${themeClasses.textPrimary}`}
            >
              <RotateCcw className="w-4 h-4" />
              <span>إعادة الاختبار</span>
            </button>
            <button
              onClick={onGoGeometricShapes}
              className="px-5 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold transition-colors shadow-xs"
            >
              العودة لقسم الأشكال الهندسية
            </button>
          </div>
        </div>
      )}

      {/* Cross-linking backlink box */}
      <GeometricShapesBacklinkBox currentQuizId={quizType} />

      {/* Pedagogical Article for this specific quiz */}
      <article
        className={`p-6 sm:p-10 rounded-3xl border ${themeClasses.border} ${themeClasses.cardBg} shadow-xs space-y-6 leading-relaxed`}
      >
        <div className="space-y-2 pb-6 border-b border-black/[0.06] dark:border-white/[0.08]">
          <div className="flex items-center gap-2 text-xs font-bold text-amber-600 dark:text-amber-400">
            <BookOpen className="w-4 h-4" />
            <span>مقالة تربوية وتعليمية متخصصة • وقت القراءة {config.article.readTime}</span>
          </div>
          <h2 className={`text-xl sm:text-2xl font-black ${themeClasses.textPrimary}`}>
            {config.article.title}
          </h2>
          <p className={`text-xs sm:text-sm ${themeClasses.textSecondary}`}>
            {config.article.subtitle}
          </p>
        </div>

        {/* Article Sections */}
        <div className="space-y-6">
          {config.article.sections.map((sec, idx) => (
            <div key={idx} className="space-y-3">
              <h3 className={`text-base sm:text-lg font-bold flex items-center gap-2 ${themeClasses.textPrimary}`}>
                <span className="w-6 h-6 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center text-xs font-mono font-bold">
                  {idx + 1}
                </span>
                <span>{sec.title}</span>
              </h3>

              <p className={`text-xs sm:text-sm ${themeClasses.textSecondary} leading-relaxed whitespace-pre-line`}>
                {sec.content}
              </p>

              {sec.keyTakeaways && sec.keyTakeaways.length > 0 && (
                <div className="p-4 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.04] dark:border-white/[0.04] space-y-2">
                  <div className="text-xs font-bold text-amber-600 dark:text-amber-400 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>خلاصة تربوية ومفاهيم جوهرية:</span>
                  </div>
                  <ul className="space-y-1.5">
                    {sec.keyTakeaways.map((point, pIdx) => (
                      <li
                        key={pIdx}
                        className={`text-xs ${themeClasses.textSecondary} flex items-start gap-2`}
                      >
                        <span className="text-amber-500 font-bold">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {sec.practicalTip && (
                <div className="p-3.5 rounded-2xl bg-amber-500/5 border border-amber-500/20 text-xs flex items-start gap-2.5 text-amber-800 dark:text-amber-200">
                  <Lightbulb className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold ml-1">نصيحة ذهبية للحل السريع:</span>
                    <span>{sec.practicalTip}</span>
                  </div>
                </div>
              )}

              {sec.commonMistake && (
                <div className="p-3.5 rounded-2xl bg-rose-500/5 border border-rose-500/20 text-xs flex items-start gap-2.5 text-rose-800 dark:text-rose-200">
                  <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold ml-1">خطأ شائع يجب الحذر منه:</span>
                    <span>{sec.commonMistake}</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </article>
    </div>
  );
};
