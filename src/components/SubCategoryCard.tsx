import React from 'react';
import { SubCategory } from '../data/mathCategories';
import {
  Calculator,
  Scale,
  Ruler,
  Sparkles,
} from 'lucide-react';

interface SubCategoryCardProps {
  subcategory: SubCategory;
  domainId: string;
  index: number;
  onOpenQuiz: () => void;
}

// 1. Custom Fraction ½ White Outline Icon for "الكسور والأعداد العشرية"
const FractionHalfIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    {/* Numerator '1' */}
    <path d="M7 5.5l2-1.5v6" />
    {/* Fraction dividing line */}
    <line x1="4" y1="12" x2="20" y2="12" strokeWidth="2.2" />
    {/* Denominator '2' */}
    <path d="M13.5 15.5a2.5 2.5 0 0 1 4.5 1.2c0 1.6-2.5 3.3-4.5 4.8h5.5" />
  </svg>
);

// 2. Custom Place Value White Outline Icon for "القيمة المنزلية" (Graduated place value columns)
const PlaceValueIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    {/* Place value columns: Hundreds, Tens, Units */}
    <rect x="3" y="4" width="5" height="16" rx="1.5" />
    <rect x="9.5" y="8" width="5" height="12" rx="1.5" />
    <rect x="16" y="12" width="5" height="8" rx="1.5" />
    {/* Place markers inside columns */}
    <line x1="5.5" y1="8" x2="5.5" y2="8.01" strokeWidth="2.5" />
    <line x1="5.5" y1="12" x2="5.5" y2="12.01" strokeWidth="2.5" />
    <line x1="5.5" y1="16" x2="5.5" y2="16.01" strokeWidth="2.5" />
    <line x1="12" y1="12" x2="12" y2="12.01" strokeWidth="2.5" />
    <line x1="12" y1="16" x2="12" y2="16.01" strokeWidth="2.5" />
    <line x1="18.5" y1="16" x2="18.5" y2="16.01" strokeWidth="2.5" />
  </svg>
);

// 3. Custom Order of Operations White Outline Icon for "ترتيب العمليات" (Parentheses with operations)
const OrderOfOperationsIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    {/* Left and Right Parentheses */}
    <path d="M5 4c-3 4-3 12 0 16" strokeWidth="2.4" />
    <path d="M19 4c3 4 3 12 0 16" strokeWidth="2.4" />
    {/* Exponent indicator x² */}
    <path d="M8.5 8l3 4m0-4l-3 4" strokeWidth="1.8" />
    <path d="M13.5 7.5a1.5 1.5 0 0 1 2.5.8c0 1-1.5 1.7-2.5 2.7h3" strokeWidth="1.5" />
    {/* Operation + */}
    <line x1="12" y1="15" x2="12" y2="19" strokeWidth="2" />
    <line x1="10" y1="17" x2="14" y2="17" strokeWidth="2" />
  </svg>
);

// 4. Custom Number Line & Ruler White Outline Icon for "خط الأعداد والقياس"
const NumberLineRulerIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    {/* Ruler on top with ticks */}
    <rect x="2" y="4" width="20" height="6" rx="1.2" />
    <line x1="6" y1="4" x2="6" y2="7" />
    <line x1="10" y1="4" x2="10" y2="8" />
    <line x1="14" y1="4" x2="14" y2="7" />
    <line x1="18" y1="4" x2="18" y2="8" />
    {/* Number line below with arrowheads */}
    <line x1="2" y1="17" x2="22" y2="17" strokeWidth="2" />
    <polyline points="5 14 2 17 5 20" strokeWidth="1.8" />
    <polyline points="19 14 22 17 19 20" strokeWidth="1.8" />
    {/* Number line ticks */}
    <line x1="7" y1="14" x2="7" y2="17" strokeWidth="1.8" />
    <line x1="12" y1="13" x2="12" y2="17" strokeWidth="2.2" />
    <line x1="17" y1="14" x2="17" y2="17" strokeWidth="1.8" />
  </svg>
);

// 5. Custom Linear Plus White Outline Icon for "اختبارات الجمع"
const LinearPlusIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.4"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <line x1="12" y1="4.5" x2="12" y2="19.5" />
    <line x1="4.5" y1="12" x2="19.5" y2="12" />
  </svg>
);

// 6. Custom Linear Minus White Outline Icon for "اختبارات الطرح"
const LinearMinusIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <line x1="4.5" y1="12" x2="19.5" y2="12" />
  </svg>
);

// 7. Custom Linear Multiplication (X) White Outline Icon for "اختبارات الضرب"
const LinearMultiplyIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.4"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <line x1="5.5" y1="5.5" x2="18.5" y2="18.5" />
    <line x1="5.5" y1="18.5" x2="18.5" y2="5.5" />
  </svg>
);

// 8. Custom Linear Division (÷) White Outline Icon for "اختبارات القسمة"
const LinearDivideIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.3"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <circle cx="12" cy="5.5" r="1.6" fill="currentColor" stroke="none" />
    <line x1="4.5" y1="12" x2="19.5" y2="12" />
    <circle cx="12" cy="18.5" r="1.6" fill="currentColor" stroke="none" />
  </svg>
);

// 1. اختبار جمع الأرقام الفردية من 1 إلى 10: رقم "7" كبير ومبسط
const NumeralSevenIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M5.5 5h13l-7.5 15" />
  </svg>
);

// 2. الجمع ضمن العدد 20: العدد "15" كبير ومبسط
const NumeralFifteenIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 26 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.3"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    {/* Digit '1' */}
    <path d="M5 7.5l2.5-2v13.5" />
    {/* Digit '5' */}
    <path d="M21 5.5h-7.5v6.2c0 0 1.2-.9 3.5-.9 2.6 0 4 1.8 4 4.1 0 2.6-1.8 4.3-4.8 4.3-2.2 0-3.8-1.1-4.2-2.3" />
  </svg>
);

// 3. اختبار الجمع ضمن العدد 50: نموذج القيمة المنزلية لـ 24 (مكعبين طويلين و 4 مكعبات صغيرة)
const BaseTen24Icon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 26 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.9"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    {/* Rod 1 (Ten) */}
    <rect x="3" y="3" width="4" height="18" rx="0.8" />
    <line x1="3" y1="7.5" x2="7" y2="7.5" />
    <line x1="3" y1="12" x2="7" y2="12" />
    <line x1="3" y1="16.5" x2="7" y2="16.5" />
    {/* Rod 2 (Ten) */}
    <rect x="9.5" y="3" width="4" height="18" rx="0.8" />
    <line x1="9.5" y1="7.5" x2="13.5" y2="7.5" />
    <line x1="9.5" y1="12" x2="13.5" y2="12" />
    <line x1="9.5" y1="16.5" x2="13.5" y2="16.5" />
    {/* 4 Unit Cubes */}
    <rect x="16" y="7" width="3.5" height="3.5" rx="0.6" />
    <rect x="20.5" y="7" width="3.5" height="3.5" rx="0.6" />
    <rect x="16" y="13.5" width="3.5" height="3.5" rx="0.6" />
    <rect x="20.5" y="13.5" width="3.5" height="3.5" rx="0.6" />
  </svg>
);

// 4. اختبار الجمع ضمن العدد 100: العدد 100 كبير ومبسط
const NumeralHundredIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 30 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.3"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    {/* '1' */}
    <path d="M4.5 7.5l2.5-2v13.5" />
    {/* First '0' */}
    <rect x="10" y="5.5" width="6.8" height="13.5" rx="3.4" />
    {/* Second '0' */}
    <rect x="19.5" y="5.5" width="6.8" height="13.5" rx="3.4" />
  </svg>
);

// 5. اختبار جمع الكسور: كسر رأسي ¾ (3 فوق و 4 تحت) بخط رياضي واضح
const FractionThreeFourthsIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.1"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    {/* Numerator '3' */}
    <path d="M9 4.2h5l-2.4 3c1.6.2 3 1.2 3 2.8 0 1.8-1.5 2.8-3.4 2.8-1.4 0-2.6-.6-3-1.6" />
    {/* Fraction Bar */}
    <line x1="4.5" y1="13.2" x2="19.5" y2="13.2" strokeWidth="2.4" />
    {/* Denominator '4' */}
    <path d="M15 15.5v7m0-2.8h-4.8l4.4-4.2" />
  </svg>
);

// 6. اختبار جمع الأعداد العشرية: العدد العشري 0.75 كبير ومبسط
const Decimal075Icon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 32 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    {/* '0' */}
    <rect x="2.5" y="6" width="6" height="12.5" rx="3" />
    {/* '.' */}
    <circle cx="11.5" cy="17.2" r="1.4" fill="currentColor" stroke="none" />
    {/* '7' */}
    <path d="M15 6.5h6l-3.5 12" />
    {/* '5' */}
    <path d="M28.5 6.5h-5.2v4.8c0 0 1-.7 2.6-.7 2 0 3.2 1.3 3.2 3 0 2-1.4 3.4-3.6 3.4-1.6 0-2.7-.8-3-1.7" />
  </svg>
);

// 7. اختبار جمع الأرقام من 1 إلى 10 (الرقم المفقود): معادلة 1 + ? = 7 (علامة الاستفهام بارزة)
const MissingEquation1PlusQ7Icon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 34 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.1"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    {/* '1' */}
    <path d="M2.5 9l2-1.5v8.5" />
    {/* '+' */}
    <path d="M8 12.5h4m-2-2v4" />
    {/* '?' (Highlighted with bold stroke) */}
    <path d="M15 8.5c0-1.8 1.4-2.8 3-2.8 1.8 0 3 1.2 3 2.6 0 1.6-1.5 2.2-2.3 3.2-.4.5-.7 1.2-.7 2" strokeWidth="2.7" />
    <circle cx="18" cy="18.5" r="1.4" fill="currentColor" stroke="none" />
    {/* '=' */}
    <path d="M22.5 11h4m-4 3h4" />
    {/* '7' */}
    <path d="M28.5 8h4.5l-3 9" />
  </svg>
);

// 8. اختبار الجمع ضمن العدد 20 (الرقم المفقود): معادلة خطية 8 + ? = 15
const MissingEquation8PlusQ15Icon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 36 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    {/* '8' */}
    <circle cx="5" cy="8.8" r="2.8" />
    <circle cx="5" cy="15" r="3.2" />
    {/* '+' */}
    <path d="M10.5 12h3.5m-1.75-1.75v3.5" />
    {/* '?' */}
    <path d="M16.5 8.5c0-1.5 1.2-2.5 2.6-2.5s2.6 1 2.6 2.3c0 1.4-1.3 1.9-2 2.8-.3.4-.6 1-.6 1.8" strokeWidth="2.6" />
    <circle cx="19.1" cy="18" r="1.3" fill="currentColor" stroke="none" />
    {/* '=' */}
    <path d="M23.5 10.5h3.5m-3.5 3h3.5" />
    {/* '15' */}
    <path d="M29 8v8" />
    <path d="M34 8h-2.5v3c1.2 0 2.2.6 2.2 2 0 1.5-1 2.5-2.4 2.5" />
  </svg>
);

// 9. اختبار الجمع ضمن العدد 50 (الرقم المفقود): معادلة خطية 24 + ? = 42
const MissingEquation24PlusQ42Icon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 36 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.9"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    {/* '24' */}
    <path d="M2.5 9a2 2 0 0 1 3.5-1c1 1.2-1 2.5-3 4h4" />
    <path d="M9 7.5v8.5m0-2.8h-2.5l2.5-4.5" />
    {/* '+' */}
    <path d="M12.5 12h3m-1.5-1.5v3" />
    {/* '?' */}
    <path d="M17.5 8.5c0-1.5 1.2-2.5 2.6-2.5s2.6 1 2.6 2.3c0 1.4-1.3 1.9-2 2.8-.3.4-.6 1-.6 1.8" strokeWidth="2.5" />
    <circle cx="20.1" cy="18" r="1.3" fill="currentColor" stroke="none" />
    {/* '=' */}
    <path d="M24.5 10.5h3m-3 3h3" />
    {/* '42' */}
    <path d="M30 7.5v8.5m0-2.8h-2.2l2.2-4.5" />
    <path d="M32 9a1.8 1.8 0 0 1 3-1c.8 1-.8 2.2-2.5 3.5h3.5" />
  </svg>
);

// 10. اختبار الجمع ضمن العدد 100 (الرقم المفقود): معادلة 45 + ? = 100
const MissingEquation45PlusQ100Icon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 38 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    {/* '45' */}
    <path d="M3.5 7.5v8m0-2.5h-2.5l2.5-4.5" />
    <path d="M8 7.5h-2.5v2.8c1.2 0 2.2.5 2.2 1.8 0 1.4-1 2.4-2.4 2.4" />
    {/* '+' */}
    <path d="M10.5 12h2.5m-1.25-1.25v2.5" />
    {/* '?' */}
    <path d="M14.5 8.5c0-1.4 1-2.4 2.3-2.4s2.3.9 2.3 2.1c0 1.3-1.2 1.7-1.8 2.5-.3.4-.5.9-.5 1.6" strokeWidth="2.4" />
    <circle cx="16.8" cy="17.5" r="1.2" fill="currentColor" stroke="none" />
    {/* '=' */}
    <path d="M20.5 10.5h3m-3 3h3" />
    {/* '100' */}
    <path d="M25.5 8v7.5" />
    <ellipse cx="29.5" cy="11.8" rx="2" ry="3.8" />
    <ellipse cx="34.5" cy="11.8" rx="2" ry="3.8" />
  </svg>
);

// 11. اختبار جمع الكسور (الرقم المفقود): معادلة خطية ¼ + ? = ¾
const MissingEquationFractionsIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 38 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    {/* '1/4' */}
    <path d="M3.5 5.5l1.2-.8v4.3" />
    <line x1="2.5" y1="11.5" x2="8.5" y2="11.5" strokeWidth="2" />
    <path d="M7.5 13.5v5.5m0-1.8h-2.5l2.5-2.8" />
    {/* '+' */}
    <path d="M11 11.5h3m-1.5-1.5v3" />
    {/* '?' */}
    <path d="M16 8c0-1.4 1-2.2 2.3-2.2s2.3.9 2.3 2c0 1.3-1.2 1.7-1.8 2.5-.3.4-.5.9-.5 1.6" strokeWidth="2.4" />
    <circle cx="18.3" cy="16.5" r="1.2" fill="currentColor" stroke="none" />
    {/* '=' */}
    <path d="M22 10.5h3m-3 2.5h3" />
    {/* '3/4' */}
    <path d="M27.5 4.8h3.2l-1.8 2.5c1.2.1 2 1 2 2 0 1.4-1.1 2-2.4 2" />
    <line x1="26.5" y1="11.5" x2="33.5" y2="11.5" strokeWidth="2" />
    <path d="M32.5 13.5v5.5m0-1.8h-2.5l2.5-2.8" />
  </svg>
);

// 12. اختبار جمع الأعداد العشرية (الرقم المفقود): معادلة خطية 0.3 + ? = 0.8
const MissingEquationDecimalsIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 38 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    {/* '0.3' */}
    <rect x="2" y="8" width="3.2" height="7.5" rx="1.6" />
    <circle cx="6.5" cy="14.5" r="1" fill="currentColor" stroke="none" />
    <path d="M8.5 8.5h2.8l-1.5 2.2c1 .1 1.7.8 1.7 1.8 0 1.2-1 1.8-2 1.8" />
    {/* '+' */}
    <path d="M13.8 12h2.5m-1.25-1.25v2.5" />
    {/* '?' */}
    <path d="M18 8c0-1.3 1-2.2 2.2-2.2s2.2.9 2.2 2c0 1.2-1.1 1.6-1.7 2.4-.3.4-.5.9-.5 1.5" strokeWidth="2.4" />
    <circle cx="20.2" cy="16.5" r="1.2" fill="currentColor" stroke="none" />
    {/* '=' */}
    <path d="M24 10.5h2.5m-2.5 2.5h2.5" />
    {/* '0.8' */}
    <rect x="28" y="8" width="3.2" height="7.5" rx="1.6" />
    <circle cx="32.5" cy="14.5" r="1" fill="currentColor" stroke="none" />
    <circle cx="35" cy="10" r="1.6" />
    <circle cx="35" cy="13.8" r="1.9" />
  </svg>
);

// ================= PLACE VALUE ICONS (1 - 12) =================

// 1. اختبار القيمة المنزلية ضمن 99 (الآحاد والعشرات): حزم العشرات ومكعبات الآحاد
const PlaceValue99Icon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 28 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    {/* Tens Rod 1 */}
    <rect x="4" y="3" width="4.5" height="18" rx="0.8" />
    <line x1="4" y1="7.5" x2="8.5" y2="7.5" />
    <line x1="4" y1="12" x2="8.5" y2="12" />
    <line x1="4" y1="16.5" x2="8.5" y2="16.5" />
    {/* Tens Rod 2 */}
    <rect x="10.5" y="3" width="4.5" height="18" rx="0.8" />
    <line x1="10.5" y1="7.5" x2="15" y2="7.5" />
    <line x1="10.5" y1="12" x2="15" y2="12" />
    <line x1="10.5" y1="16.5" x2="15" y2="16.5" />
    {/* Unit Cubes (Ones) */}
    <rect x="18" y="4.5" width="4.5" height="4.5" rx="0.8" />
    <rect x="18" y="10.5" width="4.5" height="4.5" rx="0.8" />
    <rect x="18" y="16.5" width="4.5" height="4.5" rx="0.8" />
  </svg>
);

// 2. اختبار القيمة المنزلية ضمن 999 (المئات): لوحة المئات المربعة 10x10 مع عمود العشرات
const PlaceValue999Icon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 28 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    {/* Hundreds Flat (100) */}
    <rect x="3" y="3" width="16" height="18" rx="1" />
    <line x1="3" y1="7.5" x2="19" y2="7.5" />
    <line x1="3" y1="12" x2="19" y2="12" />
    <line x1="3" y1="16.5" x2="19" y2="16.5" />
    <line x1="8.3" y1="3" x2="8.3" y2="21" />
    <line x1="13.6" y1="3" x2="13.6" y2="21" />
    {/* Tens Rod beside it */}
    <rect x="21" y="3" width="4" height="18" rx="0.8" />
    <line x1="21" y1="9" x2="25" y2="9" />
    <line x1="21" y1="15" x2="25" y2="15" />
  </svg>
);

// 3. اختبار قراءة الأعداد وكتابتها (الصيغ اللفظية والتحليلية): الصيغة التحليلية 300 + 50 + 2
const ReadingWritingNumbersIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 32 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.9"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    {/* '3' */}
    <path d="M2.5 5h3.2l-1.8 2.5c1.2.1 2 1 2 2 0 1.4-1.1 2-2.4 2" />
    <circle cx="8" cy="8.5" r="1.6" />
    <circle cx="11.5" cy="8.5" r="1.6" />
    {/* '+' */}
    <path d="M14.5 8.5h2.5m-1.25-1.25v2.5" />
    {/* '50' */}
    <path d="M19.5 5.5h2.5v2c.8 0 1.5.5 1.5 1.5s-.7 1.5-1.6 1.5" />
    <circle cx="24.5" cy="8.5" r="1.6" />
    {/* Line 2: '= 352' */}
    <path d="M7 16.5h3.5m-3.5 2.5h3.5" />
    <path d="M13 15h2.8l-1.5 2.2c1 .1 1.7.8 1.7 1.8 0 1.2-1 1.8-2 1.8" />
    <path d="M18.5 15.5h2.5v1.8c.8 0 1.5.5 1.5 1.4s-.7 1.5-1.6 1.5" />
    <path d="M24 16.2a1.8 1.8 0 0 1 3-1c.8 1-.8 2.2-2.5 3.5h3.5" />
  </svg>
);

// 4. اختبار مقارنة الأعداد وترتيبها: رموز المقارنة > < وأعمدة الترتيب
const ComparingOrderingIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 28 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    {/* Greater than symbol > */}
    <path d="M5 6l6 4.5-6 4.5" />
    {/* Less than symbol < */}
    <path d="M23 6l-6 4.5 6 4.5" />
    {/* Ordering bars in bottom */}
    <rect x="4" y="18" width="4" height="3" rx="0.6" />
    <rect x="10" y="16" width="4" height="5" rx="0.6" />
    <rect x="16" y="14" width="4" height="7" rx="0.6" />
    <rect x="22" y="12" width="4" height="9" rx="0.6" />
  </svg>
);

// 5. اختبار القيمة المنزلية حتى الألوف: مكعب الألف 1,000 ثلاثي الأبعاد
const PlaceValueThousandsIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 30 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.9"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    {/* 3D Cube representing 1000 */}
    <path d="M8 7L15 3.5l7 3.5v7l-7 3.5-7-3.5z" />
    <path d="M8 7l7 3.5 7-3.5" />
    <path d="M15 10.5v7" />
    {/* 1,000 label */}
    <path d="M5 21v-3" />
    <circle cx="8" cy="21.5" r="0.7" fill="currentColor" stroke="none" />
    <ellipse cx="12" cy="19.5" rx="1.6" ry="2" />
    <ellipse cx="17.5" cy="19.5" rx="1.6" ry="2" />
    <ellipse cx="23" cy="19.5" rx="1.6" ry="2" />
  </svg>
);

// 6. اختبار القيمة المنزلية حتى الملايين والمليارات: رمز الملايين والمليارات 10⁹
const PlaceValueMillionsBillionsIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 32 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    {/* 'M' for Millions */}
    <path d="M3 17V7l4.5 5 4.5-5v10" />
    {/* 'B' for Billions */}
    <path d="M15 7h4a2.8 2.8 0 0 1 0 5h-4m0 0h4.5a2.8 2.8 0 0 1 0 5H15V7z" />
    {/* 10⁹ badge */}
    <rect x="22.5" y="4" width="7" height="6.5" rx="1.2" strokeWidth="1.5" />
    <path d="M24.5 9.5c0-.7.4-1.2 1-1.2s1 .5 1 1.2v.5h-2" strokeWidth="1.4" />
  </svg>
);

// 7. اختبار تقريب الأعداد الكلية: علامة التقريب ≈ مع خط قفز التقريب
const RoundingWholeNumbersIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 28 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.1"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    {/* Double wavy approximation symbol ≈ */}
    <path d="M5 6.5c2-1.6 4-1.6 6 0s4 1.6 6 0 4-1.6 6 0" />
    <path d="M5 11c2-1.6 4-1.6 6 0s4 1.6 6 0 4-1.6 6 0" />
    {/* Rounding jump curve on line */}
    <path d="M4 19.5h20" strokeWidth="1.8" />
    <path d="M7 19.5c3-5 10-5 13 0" strokeDasharray="2 2" strokeWidth="1.8" />
    <path d="M18 17.5l2 2-2 2" strokeWidth="1.8" />
  </svg>
);

// 8. اختبار الأنماط الحسابية والقيمة المنزلية: +10 و +100 وأسهم القفز المتتالية
const ArithmeticPatternsPlaceValueIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 32 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    {/* '+10' */}
    <path d="M3 8.5h3m-1.5-1.5v3" strokeWidth="1.8" />
    <path d="M8 6.5v4" />
    <circle cx="12" cy="8.5" r="1.8" />
    {/* Arrow right */}
    <path d="M15.5 8.5h3m-1-1.5l1.5 1.5-1.5 1.5" />
    {/* '+100' */}
    <path d="M21 8.5h2.5m-1.25-1.25v2.5" strokeWidth="1.8" />
    <path d="M25 6.5v4" />
    <circle cx="27.5" cy="8.5" r="1.4" />
    <circle cx="30.5" cy="8.5" r="1.4" />
    {/* Curved recurring pattern loop underneath */}
    <path d="M6 16c5 4 15 4 20 0" strokeWidth="1.8" />
    <path d="M24 15l2 1.5-1.5 2" strokeWidth="1.8" />
  </svg>
);

// 9. اختبار القيمة المنزلية للكسور العشرية (الأجزاء من 10 و 100): الفاصلة وشبكة الأعشار
const DecimalsTenthsHundredthsIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 28 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    {/* '0.' */}
    <ellipse cx="6" cy="12" rx="2.5" ry="4" />
    <circle cx="10.5" cy="15.5" r="1.2" fill="currentColor" stroke="none" />
    {/* '1' & '01' */}
    <path d="M14 8.5l2-1.5v9" />
    <rect x="18.5" y="7" width="6.5" height="10" rx="1" strokeDasharray="1.5 1.5" strokeWidth="1.5" />
    <circle cx="21.7" cy="12" r="1.4" fill="currentColor" />
  </svg>
);

// 10. اختبار القيمة المنزلية للأجزاء من ألف: 0.001 والمكعب الميكروي
const DecimalsThousandthsIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 32 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.9"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    {/* '0.001' */}
    <ellipse cx="4.5" cy="11.5" rx="2" ry="3.5" />
    <circle cx="8" cy="14.5" r="1.1" fill="currentColor" stroke="none" />
    <ellipse cx="11.5" cy="11.5" rx="1.8" ry="3.2" />
    <ellipse cx="17" cy="11.5" rx="1.8" ry="3.2" />
    <path d="M21.5 9l1.5-1.2v6.5" />
    {/* 1/1000 micro box */}
    <path d="M25 7l4 10" strokeWidth="1.4" />
    <rect x="26.5" y="4" width="4" height="4" rx="0.5" strokeWidth="1.4" />
  </svg>
);

// 11. اختبار مقارنة وترتيب الكسور العشرية: محاذاة الفواصل 0.7 > 0.68
const ComparingOrderingDecimalsIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 32 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.9"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    {/* '0.7' */}
    <ellipse cx="4" cy="9" rx="1.8" ry="3" />
    <circle cx="7" cy="11.5" r="1" fill="currentColor" stroke="none" />
    <path d="M9 6.5h3.5l-2.5 5.5" />
    {/* Greater than symbol > */}
    <path d="M15 7l4 3.5-4 3.5" strokeWidth="2.3" />
    {/* '0.68' */}
    <ellipse cx="21" cy="9" rx="1.8" ry="3" />
    <circle cx="24" cy="11.5" r="1" fill="currentColor" stroke="none" />
    <path d="M26.5 7.5c-.8 0-1.5.8-1.5 2 0 1.2.7 2 1.5 2s1.5-.8 1.5-2" />
    <circle cx="30" cy="7.5" r="1.2" />
    <circle cx="30" cy="10.8" r="1.4" />
    {/* Alignment dashed baseline */}
    <line x1="3" y1="17" x2="31" y2="17" strokeDasharray="2 2" strokeWidth="1.2" />
  </svg>
);

// 12. اختبار تقريب الكسور العشرية: معادلة التقريب 3.86 ≈ 3.9
const RoundingDecimalsIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 32 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.9"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    {/* '3.86' */}
    <path d="M2.5 6h2.5l-1.3 2c.8.1 1.4.6 1.4 1.4 0 1-.8 1.6-1.8 1.6" />
    <circle cx="6.5" cy="10.5" r="0.9" fill="currentColor" stroke="none" />
    <circle cx="8.5" cy="7.5" r="1.2" />
    <circle cx="8.5" cy="10" r="1.4" />
    <path d="M12 7c-.6 0-1.1.6-1.1 1.6 0 1 .5 1.6 1.1 1.6s1.1-.6 1.1-1.6" />
    {/* '≈' */}
    <path d="M15 7.5c1-.8 2-.8 3 0s2 .8 3 0" strokeWidth="2" />
    <path d="M15 10c1-.8 2-.8 3 0s2 .8 3 0" strokeWidth="2" />
    {/* '3.9' */}
    <path d="M23 6h2.5l-1.3 2c.8.1 1.4.6 1.4 1.4 0 1-.8 1.6-1.8 1.6" />
    <circle cx="27" cy="10.5" r="0.9" fill="currentColor" stroke="none" />
    <path d="M29 8.5c0-.9.6-1.5 1.5-1.5s1.5.6 1.5 1.5v3" />
    {/* Curving rounding arrow */}
    <path d="M10 16c4 3 12 3 16 0" strokeWidth="1.7" />
    <path d="M24 15.5l2 1.2-1 2" strokeWidth="1.7" />
  </svg>
);


// ================= COMPREHENSIVE UNIFIED DOMAIN & SUBCATEGORY ICONS =================

// 1. Basic Arithmetic Quad Operations (+, -, ×, ÷)
const LinearOperationsQuadIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <rect x="2.5" y="2.5" width="19" height="19" rx="3.5" strokeWidth="1.6" />
    <line x1="12" y1="2.5" x2="12" y2="21.5" strokeWidth="1.3" strokeDasharray="1.5,1.5" />
    <line x1="2.5" y1="12" x2="21.5" y2="12" strokeWidth="1.3" strokeDasharray="1.5,1.5" />
    {/* Plus (top-left) */}
    <line x1="7.2" y1="5.2" x2="7.2" y2="9.2" strokeWidth="2.1" />
    <line x1="5.2" y1="7.2" x2="9.2" y2="7.2" strokeWidth="2.1" />
    {/* Minus (top-right) */}
    <line x1="14.8" y1="7.2" x2="18.8" y2="7.2" strokeWidth="2.2" />
    {/* Multiply (bottom-left) */}
    <line x1="5.5" y1="14.8" x2="9" y2="18.3" strokeWidth="2.1" />
    <line x1="9" y1="14.8" x2="5.5" y2="18.3" strokeWidth="2.1" />
    {/* Divide (bottom-right) */}
    <circle cx="16.8" cy="14.5" r="0.9" fill="currentColor" stroke="none" />
    <line x1="14.8" y1="16.8" x2="18.8" y2="16.8" strokeWidth="2" />
    <circle cx="16.8" cy="19.1" r="0.9" fill="currentColor" stroke="none" />
  </svg>
);

// 2. Ratios & Proportions: Balance Scale with a:b
const RatiosProportionsIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <line x1="12" y1="3.5" x2="12" y2="20" strokeWidth="1.8" />
    <path d="M7 20h10" strokeWidth="2" />
    <polygon points="12,4.5 10,7 14,7" fill="currentColor" />
    <line x1="3.5" y1="7" x2="20.5" y2="7" strokeWidth="2" />
    {/* Left Pan */}
    <line x1="3.5" y1="7" x2="2" y2="13" strokeWidth="1.4" />
    <line x1="3.5" y1="7" x2="7.5" y2="13" strokeWidth="1.4" />
    <path d="M1.5 13c0 2 6 2 6 0" strokeWidth="1.8" />
    {/* Right Pan */}
    <line x1="20.5" y1="7" x2="16.5" y2="13" strokeWidth="1.4" />
    <line x1="20.5" y1="7" x2="22" y2="13" strokeWidth="1.4" />
    <path d="M16.5 13c0 2 6 2 6 0" strokeWidth="1.8" />
  </svg>
);

// 3. Linear Equations: y = mx + b on axes
const LinearEquationsIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    {/* Coordinate Axes */}
    <line x1="3" y1="20" x2="21" y2="20" strokeWidth="1.8" />
    <line x1="4" y1="21" x2="4" y2="3" strokeWidth="1.8" />
    <polyline points="2 5 4 3 6 5" strokeWidth="1.5" />
    <polyline points="19 18 21 20 19 22" strokeWidth="1.5" />
    {/* Linear Equation Line */}
    <line x1="5" y1="17" x2="19" y2="5" strokeWidth="2.3" />
    <circle cx="8" cy="14.4" r="1.5" fill="currentColor" />
    <circle cx="15" cy="8.4" r="1.5" fill="currentColor" />
    {/* Slope triangle */}
    <path d="M8 14.4h7v-6" strokeWidth="1.2" strokeDasharray="1.5,1.5" />
  </svg>
);

// 4. Inequalities: Number line with shaded ray & inequality sign
const InequalitiesIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <line x1="2" y1="16" x2="22" y2="16" strokeWidth="2" />
    <polyline points="4 13.5 1.5 16 4 18.5" strokeWidth="1.6" />
    <polyline points="20 13.5 22.5 16 20 18.5" strokeWidth="1.6" />
    {/* Ticks */}
    <line x1="7" y1="14" x2="7" y2="18" strokeWidth="1.5" />
    <line x1="12" y1="13.5" x2="12" y2="18.5" strokeWidth="1.8" />
    {/* Boundary circle & shaded ray */}
    <circle cx="12" cy="16" r="2.4" fill="currentColor" />
    <line x1="12" y1="16" x2="22" y2="16" strokeWidth="3.6" />
    {/* Inequality Symbol ≥ */}
    <path d="M9 5l6 3.5-6 3.5" strokeWidth="2.2" />
    <line x1="9" y1="14" x2="15" y2="14" strokeWidth="2" />
  </svg>
);

// 5. Polynomials: Cubic curve P(x) = x³
const PolynomialsIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    {/* Axes */}
    <line x1="3" y1="12" x2="21" y2="12" strokeWidth="1.6" />
    <line x1="12" y1="3" x2="12" y2="21" strokeWidth="1.6" />
    {/* S-curve (cubic polynomial) */}
    <path d="M4 19c4-1 6-4 7-7s3-6 7-7" strokeWidth="2.4" />
    {/* Degree notation: x³ */}
    <path d="M15 7l2.5 3.5m0-3.5L15 10.5" strokeWidth="1.5" />
    <path d="M19 6c.5-.4 1.2-.4 1.5 0s0 1-.8 1.2c.8.2.8 1 0 1.2" strokeWidth="1.2" />
  </svg>
);

// 6. Quadratic Equations: Parabola y = ax² + bx + c
const QuadraticEquationsIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <line x1="3" y1="18" x2="21" y2="18" strokeWidth="1.7" />
    <line x1="12" y1="3" x2="12" y2="21" strokeWidth="1.7" />
    {/* Parabola */}
    <path d="M5 6c3 13 11 13 14 0" strokeWidth="2.4" />
    {/* Axis of symmetry */}
    <line x1="12" y1="4" x2="12" y2="18" strokeWidth="1.3" strokeDasharray="2,2" />
    {/* Vertex point */}
    <circle cx="12" cy="15.8" r="1.5" fill="currentColor" />
    {/* Roots on x-axis */}
    <circle cx="7.2" cy="18" r="1.3" fill="currentColor" />
    <circle cx="16.8" cy="18" r="1.3" fill="currentColor" />
  </svg>
);

// 7. Functions & Graphs: f(x) curve with mapping
const FunctionsGraphsIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    {/* Axes */}
    <line x1="3" y1="19" x2="21" y2="19" strokeWidth="1.6" />
    <line x1="5" y1="21" x2="5" y2="3" strokeWidth="1.6" />
    {/* Function smooth wave */}
    <path d="M5 16c4-1 6-10 10-10s4 6 6 6" strokeWidth="2.3" />
    {/* 'f(x)' text style */}
    <path d="M7 6c1-2 2-2 3-1" strokeWidth="1.8" />
    <line x1="7" y1="7.5" x2="10" y2="7.5" strokeWidth="1.8" />
    <path d="M12 9l2 2.5m0-2.5L12 11.5" strokeWidth="1.4" />
  </svg>
);

// 8. Sequences & Series: Sigma Summation ∑ aₙ
const SequencesIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    {/* Sigma symbol ∑ */}
    <path d="M18 4H6l6 8-6 8h12" strokeWidth="2.4" />
    {/* Indices: n=1, dots */}
    <circle cx="15" cy="17" r="0.9" fill="currentColor" stroke="none" />
    <circle cx="17.5" cy="17" r="0.9" fill="currentColor" stroke="none" />
    <circle cx="20" cy="17" r="0.9" fill="currentColor" stroke="none" />
  </svg>
);

// 9. Geometric Shapes: Clean composite geometric polygon
const GeometricShapesIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    {/* Equilateral Triangle */}
    <polygon points="12,3 21,19 3,19" strokeWidth="2" />
    {/* Inscribed Circle */}
    <circle cx="12" cy="13.5" r="4.5" strokeWidth="1.7" />
    {/* Right-angled or square element */}
    <rect x="9.5" y="11" width="5" height="5" strokeWidth="1.4" />
  </svg>
);

// 10. Perimeter & Area: Rectangle with dimensions and shaded area
const PerimeterAreaIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    {/* Rectangle */}
    <rect x="4" y="6" width="16" height="12" rx="1.5" strokeWidth="2.2" />
    {/* Diagonal hatched area lines */}
    <line x1="7" y1="6" x2="13" y2="18" strokeWidth="1.2" strokeDasharray="1.5,1.5" />
    <line x1="11" y1="6" x2="17" y2="18" strokeWidth="1.2" strokeDasharray="1.5,1.5" />
    <line x1="15" y1="6" x2="19" y2="14" strokeWidth="1.2" strokeDasharray="1.5,1.5" />
    {/* Dimension ticks */}
    <line x1="4" y1="3.5" x2="20" y2="3.5" strokeWidth="1.4" />
    <line x1="4" y1="2.5" x2="4" y2="4.5" strokeWidth="1.4" />
    <line x1="20" y1="2.5" x2="20" y2="4.5" strokeWidth="1.4" />
    <line x1="22" y1="6" x2="22" y2="18" strokeWidth="1.4" />
    <line x1="21" y1="6" x2="23" y2="6" strokeWidth="1.4" />
    <line x1="21" y1="18" x2="23" y2="18" strokeWidth="1.4" />
  </svg>
);

// 11. Triangles & Angles: Right triangle with ∟ and θ
const TrianglesAnglesIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <polygon points="4,20 20,20 4,4" strokeWidth="2.3" />
    {/* Right-angle square ∟ */}
    <polyline points="4,16 8,16 8,20" strokeWidth="1.6" />
    {/* Angle arc θ */}
    <path d="M16 20a4 4 0 0 0-2-3.5" strokeWidth="1.8" />
    <circle cx="15.5" cy="18.2" r="0.7" fill="currentColor" stroke="none" />
  </svg>
);

// 12. Trigonometry: Unit circle with sin / cos
const TrigonometryIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <circle cx="12" cy="12" r="9" strokeWidth="1.9" />
    <line x1="12" y1="2" x2="12" y2="22" strokeWidth="1.4" />
    <line x1="2" y1="12" x2="22" y2="12" strokeWidth="1.4" />
    {/* Radius ray at 45 deg */}
    <line x1="12" y1="12" x2="18.3" y2="5.7" strokeWidth="2.2" />
    {/* Sine vertical projection */}
    <line x1="18.3" y1="12" x2="18.3" y2="5.7" strokeWidth="2" strokeDasharray="1.5,1.5" />
    {/* Cosine horizontal projection */}
    <line x1="12" y1="12" x2="18.3" y2="12" strokeWidth="2.2" />
    {/* Angle arc */}
    <path d="M14.5 12a2.5 2.5 0 0 0-.7-1.8" strokeWidth="1.6" />
  </svg>
);

// 13. Analytic Geometry: Cartesian distance segment & Δy/Δx
const AnalyticGeometryIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <line x1="3" y1="19" x2="21" y2="19" strokeWidth="1.6" />
    <line x1="5" y1="21" x2="5" y2="3" strokeWidth="1.6" />
    {/* Segment connecting P1 and P2 */}
    <line x1="8" y1="15" x2="18" y2="6" strokeWidth="2.3" />
    <circle cx="8" cy="15" r="1.8" fill="currentColor" />
    <circle cx="18" cy="6" r="1.8" fill="currentColor" />
    {/* Slope right triangle */}
    <path d="M8 15h10v-9" strokeWidth="1.3" strokeDasharray="2,2" />
  </svg>
);

// 14. Geometric Transformations: Reflection across mirror axis
const GeometricTransformationsIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    {/* Mirror Axis */}
    <line x1="12" y1="2" x2="12" y2="22" strokeWidth="1.7" strokeDasharray="3,2" />
    {/* Original Triangle (Left) */}
    <polygon points="4,7 10,12 4,17" strokeWidth="2.1" />
    {/* Reflected Triangle (Right) */}
    <polygon points="20,7 14,12 20,17" strokeWidth="2.1" />
    {/* Translation / reflection vector arrows */}
    <path d="M7 4h10" strokeWidth="1.3" />
    <polyline points="15 2.5 17 4 15 5.5" strokeWidth="1.3" />
  </svg>
);

// 15. Limits & Continuity: lim x→a f(x) = L
const LimitsContinuityIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    {/* Curve with removable limit point */}
    <path d="M3 17c4-1 6-7 9-7s5 2 9-5" strokeWidth="2.2" />
    <circle cx="12" cy="10" r="2.2" fill="none" strokeWidth="2.2" />
    {/* Converging arrows from left and right */}
    <line x1="6" y1="15" x2="10" y2="12" strokeWidth="1.6" />
    <polyline points="9 11 10 12 8.5 13" strokeWidth="1.4" />
    <line x1="18" y1="6" x2="14" y2="8" strokeWidth="1.6" />
    <polyline points="15.5 7 14 8 15 9.5" strokeWidth="1.4" />
    {/* 'lim' indication */}
    <text x="3" y="8" fill="currentColor" stroke="none" fontSize="6" fontWeight="bold" fontFamily="sans-serif">lim</text>
  </svg>
);

// 16. Derivatives & Differentiation: Tangent line dy/dx
const DerivativesDifferentiationIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <line x1="3" y1="20" x2="21" y2="20" strokeWidth="1.5" />
    <line x1="4" y1="21" x2="4" y2="3" strokeWidth="1.5" />
    {/* Curved graph */}
    <path d="M4 17c5 0 9-7 16-12" strokeWidth="2.2" />
    {/* Tangent line touching curve at point */}
    <line x1="7" y1="18" x2="19" y2="6" strokeWidth="2.4" />
    <circle cx="12.5" cy="12.5" r="1.8" fill="currentColor" />
    {/* 'dy/dx' marker */}
    <text x="14" y="19" fill="currentColor" stroke="none" fontSize="5.5" fontWeight="bold" fontFamily="serif">dy/dx</text>
  </svg>
);

// 17. Applications of Derivatives: Extrema (Max / Min)
const ApplicationsOfDerivativesIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <line x1="2" y1="19" x2="22" y2="19" strokeWidth="1.6" />
    {/* Curve with Local Max and Min */}
    <path d="M3 16c3-11 7-11 10 0s6 2 8-8" strokeWidth="2.4" />
    {/* Max Horizontal Tangent */}
    <line x1="5.5" y1="7.5" x2="10.5" y2="7.5" strokeWidth="1.8" strokeDasharray="1.5,1.5" />
    <circle cx="8" cy="7.5" r="1.5" fill="currentColor" />
    {/* Min Horizontal Tangent */}
    <line x1="14.5" y1="16" x2="19.5" y2="16" strokeWidth="1.8" strokeDasharray="1.5,1.5" />
    <circle cx="17" cy="16" r="1.5" fill="currentColor" />
  </svg>
);

// 18. Integration: Classical ∫ symbol and shaded area
const IntegrationIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    {/* Integral Sign ∫ */}
    <path d="M10 4c-2 0-3 1.5-3 3.5 0 5 6 7 6 12 0 2-1 3.5-3 3.5-1.5 0-2.5-.8-3-2" strokeWidth="2.6" />
    {/* Area under curve */}
    <path d="M12 18c3-4 6-5 9-6v7h-9z" fill="currentColor" fillOpacity="0.2" stroke="none" />
    <path d="M12 18c3-4 6-5 9-6" strokeWidth="1.8" />
    <line x1="12" y1="19" x2="21" y2="19" strokeWidth="1.6" />
    {/* 'dx' */}
    <text x="16" y="8" fill="currentColor" stroke="none" fontSize="6" fontWeight="bold" fontFamily="serif">dx</text>
  </svg>
);

// 19. Applications of Integration: Area between curves / solid of revolution
const ApplicationsOfIntegrationIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    {/* Two intersecting curves bounding area */}
    <path d="M3 15c5-8 13-8 18 0" strokeWidth="2.2" />
    <path d="M3 15c5 4 13 4 18 0" strokeWidth="2.2" />
    {/* Shaded vertical slices */}
    <line x1="8" y1="10.5" x2="8" y2="16.5" strokeWidth="1.3" strokeDasharray="1.5,1.5" />
    <line x1="12" y1="8.5" x2="12" y2="17.5" strokeWidth="1.6" />
    <line x1="16" y1="10.5" x2="16" y2="16.5" strokeWidth="1.3" strokeDasharray="1.5,1.5" />
  </svg>
);

// 20. Differential Equations: y'' + y = 0 oscillating wave
const DifferentialEquationsIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <line x1="2" y1="12" x2="22" y2="12" strokeWidth="1.6" />
    <line x1="4" y1="2" x2="4" y2="22" strokeWidth="1.6" />
    {/* Damped sine wave solution */}
    <path d="M4 12c2-8 4-8 6 0s4 6 6 0 3-4 5 0" strokeWidth="2.3" />
    {/* Equation prime marks */}
    <text x="14" y="6" fill="currentColor" stroke="none" fontSize="6.5" fontWeight="bold" fontFamily="serif">y″+y=0</text>
  </svg>
);

// 21. Statistical Measures: Mean x̄ and Standard Deviation σ
const StatisticalMeasuresIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    {/* Base line */}
    <line x1="2" y1="19" x2="22" y2="19" strokeWidth="1.6" />
    {/* Normal distribution curve */}
    <path d="M3 18.5c4 0 6-13 9-13s5 13 9 13" strokeWidth="2.3" />
    {/* Mean Center Axis x̄ */}
    <line x1="12" y1="5.5" x2="12" y2="19" strokeWidth="2" strokeDasharray="2,2" />
    {/* Standard deviation sigma span */}
    <line x1="9" y1="12" x2="15" y2="12" strokeWidth="1.6" />
    <circle cx="12" cy="12" r="1.2" fill="currentColor" />
    <text x="10.5" y="4" fill="currentColor" stroke="none" fontSize="5.5" fontWeight="bold">x̄</text>
  </svg>
);

// 22. Data Analysis: Histogram bars & trendline
const DataAnalysisIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <line x1="3" y1="20" x2="21" y2="20" strokeWidth="1.7" />
    <line x1="3" y1="3" x2="3" y2="20" strokeWidth="1.7" />
    {/* Histogram Bars */}
    <rect x="5.5" y="13" width="3.2" height="7" strokeWidth="1.6" />
    <rect x="9.7" y="8" width="3.2" height="12" strokeWidth="1.6" />
    <rect x="13.9" y="5" width="3.2" height="15" strokeWidth="1.6" />
    <rect x="18.1" y="10" width="3.2" height="10" strokeWidth="1.6" />
    {/* Trendline */}
    <path d="M7 12l4-4 4-2 4 4" strokeWidth="2.1" />
    <circle cx="7" cy="12" r="1.2" fill="currentColor" />
    <circle cx="11" cy="8" r="1.2" fill="currentColor" />
    <circle cx="15" cy="6" r="1.2" fill="currentColor" />
    <circle cx="19" cy="10" r="1.2" fill="currentColor" />
  </svg>
);

// 23. Probability: Venn diagram & die
const ProbabilityIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    {/* Venn Overlapping Circles */}
    <circle cx="9" cy="11" r="6" strokeWidth="2" />
    <circle cx="15" cy="11" r="6" strokeWidth="2" />
    {/* Intersection dot */}
    <circle cx="12" cy="11" r="1.5" fill="currentColor" />
    {/* Minimalist die representation */}
    <rect x="8" y="16.5" width="8" height="5.5" rx="1.5" strokeWidth="1.6" />
    <circle cx="10.5" cy="19.2" r="0.7" fill="currentColor" stroke="none" />
    <circle cx="13.5" cy="19.2" r="0.7" fill="currentColor" stroke="none" />
  </svg>
);

// 24. Permutations & Combinations: ⁿCᵣ and Tree Branching
const PermutationsCombinationsIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    {/* Tree branching */}
    <circle cx="12" cy="4" r="1.8" fill="currentColor" />
    <line x1="12" y1="5.8" x2="6" y2="12" strokeWidth="1.6" />
    <line x1="12" y1="5.8" x2="18" y2="12" strokeWidth="1.6" />
    <circle cx="6" cy="12" r="1.6" fill="currentColor" />
    <circle cx="18" cy="12" r="1.6" fill="currentColor" />
    <line x1="6" y1="13.6" x2="3.5" y2="19" strokeWidth="1.4" />
    <line x1="6" y1="13.6" x2="8.5" y2="19" strokeWidth="1.4" />
    <line x1="18" y1="13.6" x2="15.5" y2="19" strokeWidth="1.4" />
    <line x1="18" y1="13.6" x2="20.5" y2="19" strokeWidth="1.4" />
    {/* Notation: nCr */}
    <text x="9.5" y="16.5" fill="currentColor" stroke="none" fontSize="5.5" fontWeight="bold">nCr</text>
  </svg>
);

// 25. Probability Distributions: Gaussian Bell Curve
const ProbabilityDistributionsIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <line x1="2" y1="20" x2="22" y2="20" strokeWidth="1.7" />
    <line x1="12" y1="3" x2="12" y2="21" strokeWidth="1.5" strokeDasharray="2,2" />
    {/* Bell curve */}
    <path d="M2.5 19.5c4 0 6-14 9.5-14s5.5 14 9.5 14" strokeWidth="2.4" />
    {/* Inflection / sigma tick marks */}
    <line x1="8" y1="18" x2="8" y2="21" strokeWidth="1.5" />
    <line x1="16" y1="18" x2="16" y2="21" strokeWidth="1.5" />
  </svg>
);

// 26. Linear Algebra: Matrix [ a b / c d ]
const LinearAlgebraIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    {/* Left Bracket */}
    <path d="M6 4H3v16h3" strokeWidth="2.2" />
    {/* Right Bracket */}
    <path d="M18 4h3v16h-3" strokeWidth="2.2" />
    {/* Matrix entries (dots/symbols) */}
    <circle cx="8" cy="8.5" r="1.4" fill="currentColor" />
    <circle cx="16" cy="8.5" r="1.4" fill="currentColor" />
    <circle cx="8" cy="15.5" r="1.4" fill="currentColor" />
    <circle cx="16" cy="15.5" r="1.4" fill="currentColor" />
    {/* Transformation vector diagonal arrow */}
    <line x1="6.5" y1="17.5" x2="17.5" y2="6.5" strokeWidth="1.8" />
    <polyline points="14 6.5 17.5 6.5 17.5 10" strokeWidth="1.8" />
  </svg>
);

// 27. Complex Numbers: Argand plane z = a + bi
const ComplexNumbersIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    {/* Real & Imaginary Axes */}
    <line x1="2" y1="14" x2="22" y2="14" strokeWidth="1.6" />
    <line x1="6" y1="22" x2="6" y2="2" strokeWidth="1.6" />
    {/* Complex vector z */}
    <line x1="6" y1="14" x2="18" y2="5" strokeWidth="2.4" />
    <circle cx="18" cy="5" r="1.8" fill="currentColor" />
    {/* Real & Im dashed projections */}
    <line x1="18" y1="5" x2="18" y2="14" strokeWidth="1.4" strokeDasharray="1.5,1.5" />
    <line x1="6" y1="5" x2="18" y2="5" strokeWidth="1.4" strokeDasharray="1.5,1.5" />
    {/* Labels Re, Im */}
    <text x="2" y="5" fill="currentColor" stroke="none" fontSize="5" fontWeight="bold">Im</text>
    <text x="19" y="18" fill="currentColor" stroke="none" fontSize="5" fontWeight="bold">Re</text>
  </svg>
);

// 28. Mathematical Logic: p ∧ q → r
const MathematicalLogicIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    {/* Conjunction ∧ */}
    <path d="M4 14l3-7 3 7" strokeWidth="2.2" />
    {/* Implication Arrow → */}
    <line x1="11" y1="10.5" x2="17" y2="10.5" strokeWidth="2.2" />
    <polyline points="15 8.5 17 10.5 15 12.5" strokeWidth="2.2" />
    {/* Disjunction / negation ¬ / ∀ */}
    <path d="M18 13.5v-6h3" strokeWidth="2" />
    <path d="M9 18l3 4 3-4" strokeWidth="1.8" />
  </svg>
);

// 29. Discrete Mathematics: Graph theory network nodes & edges
const DiscreteMathematicsIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    {/* Graph edges */}
    <line x1="6" y1="7" x2="18" y2="5" strokeWidth="1.8" />
    <line x1="6" y1="7" x2="12" y2="14" strokeWidth="1.8" />
    <line x1="18" y1="5" x2="12" y2="14" strokeWidth="1.8" />
    <line x1="12" y1="14" x2="5" y2="19" strokeWidth="1.8" />
    <line x1="12" y1="14" x2="19" y2="18" strokeWidth="1.8" />
    <line x1="5" y1="19" x2="19" y2="18" strokeWidth="1.8" />
    {/* Nodes / Vertices */}
    <circle cx="6" cy="7" r="2.2" fill="currentColor" />
    <circle cx="18" cy="5" r="2.2" fill="currentColor" />
    <circle cx="12" cy="14" r="2.5" fill="currentColor" />
    <circle cx="5" cy="19" r="2.2" fill="currentColor" />
    <circle cx="19" cy="18" r="2.2" fill="currentColor" />
  </svg>
);

// 30. Word Problems: Problem formulation & balance statement
const WordProblemsIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    {/* Document sheet with problem lines */}
    <rect x="4" y="3" width="16" height="18" rx="2" strokeWidth="2" />
    <line x1="7.5" y1="7.5" x2="14" y2="7.5" strokeWidth="1.8" />
    <line x1="7.5" y1="11" x2="16.5" y2="11" strokeWidth="1.8" />
    <line x1="7.5" y1="14.5" x2="13" y2="14.5" strokeWidth="1.8" />
    {/* Question highlight */}
    <circle cx="16.5" cy="16.5" r="2.2" strokeWidth="1.6" />
    <path d="M16 15.5c.3-.5 1-.5 1.3 0 .3.4 0 .7-.3.9" strokeWidth="1.4" />
    <circle cx="16.5" cy="17.6" r="0.4" fill="currentColor" />
  </svg>
);

// 31. Financial Math: Exponential interest growth curve & currency trend
const FinancialMathIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <line x1="3" y1="20" x2="21" y2="20" strokeWidth="1.7" />
    <line x1="3" y1="3" x2="3" y2="20" strokeWidth="1.7" />
    {/* Compound growth curve A = P(1+r)^t */}
    <path d="M3 19c6 0 11-4 17-14" strokeWidth="2.5" />
    <polyline points="16 5 20 5 20 9" strokeWidth="2.2" />
    {/* Currency symbol / percentage */}
    <circle cx="9" cy="9" r="1.4" strokeWidth="1.4" />
    <line x1="7.5" y1="13.5" x2="12.5" y2="7.5" strokeWidth="1.4" />
    <circle cx="11" cy="12" r="1.4" strokeWidth="1.4" />
  </svg>
);

// ================= CUSTOM SVG BACKGROUND PATTERNS =================

// Standard Honeycomb / Isometric cube pattern
const HONEYCOMB_PATTERN_DATA_URI =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='55.425' viewBox='0 0 32 55.425'%3E%3Cg fill='none' stroke='%23ffffff' stroke-width='1.2' stroke-opacity='0.22'%3E%3Cpath d='M16 0 L32 9.238 L32 27.713 L16 36.95 L0 27.713 L0 9.238 Z'/%3E%3Cpath d='M16 18.475 L16 36.95 M16 18.475 L0 9.238 M16 18.475 L32 9.238'/%3E%3Cpath d='M0 46.188 L16 36.95 L32 46.188 L32 55.425 M0 46.188 L0 55.425'/%3E%3Cpath d='M16 55.425 L16 36.95 M0 27.713 L16 36.95 L32 27.713'/%3E%3C/g%3E%3C/svg%3E\")";

// Pattern 1: أرقام فردية (1, 3, 5, 7, 9) مبعثرة بشكل عشوائي
const ODD_NUMBERS_PATTERN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg fill='%23ffffff' fill-opacity='0.22' font-family='sans-serif' font-size='15' font-weight='bold'%3E%3Ctext x='10' y='22'%3E1%3C/text%3E%3Ctext x='55' y='18'%3E7%3C/text%3E%3Ctext x='32' y='46'%3E3%3C/text%3E%3Ctext x='65' y='70'%3E5%3C/text%3E%3Ctext x='12' y='72'%3E9%3C/text%3E%3C/g%3E%3C/svg%3E\")";

// Pattern 2: خط أعداد مدرج بشكل بسيط
const NUMBER_LINE_PATTERN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='64' height='32' viewBox='0 0 64 32'%3E%3Cg stroke='%23ffffff' stroke-width='1.3' stroke-opacity='0.24'%3E%3Cline x1='0' y1='16' x2='64' y2='16'/%3E%3Cline x1='8' y1='10' x2='8' y2='22'/%3E%3Cline x1='16' y1='12' x2='16' y2='20'/%3E%3Cline x1='24' y1='10' x2='24' y2='22'/%3E%3Cline x1='32' y1='8' x2='32' y2='24' stroke-width='1.8'/%3E%3Cline x1='40' y1='12' x2='40' y2='20'/%3E%3Cline x1='48' y1='10' x2='48' y2='22'/%3E%3Cline x1='56' y1='12' x2='56' y2='20'/%3E%3C/g%3E%3C/svg%3E\")";

// Pattern 3: دوائر صغيرة تمثل العشرات
const TENS_CIRCLES_PATTERN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='44' height='44' viewBox='0 0 44 44'%3E%3Cg fill='%23ffffff' fill-opacity='0.22'%3E%3Ccircle cx='11' cy='11' r='4'/%3E%3Ccircle cx='33' cy='11' r='4'/%3E%3Ccircle cx='22' cy='27' r='4'/%3E%3Ccircle cx='11' cy='38' r='2.5'/%3E%3Ccircle cx='36' cy='36' r='2.5'/%3E%3C/g%3E%3C/svg%3E\")";

// Pattern 5: دوائر ومستطيلات مقسمة إلى أجزاء (مثل ½, ¼)
const FRACTION_SHAPES_PATTERN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 64 64'%3E%3Cg fill='none' stroke='%23ffffff' stroke-width='1.2' stroke-opacity='0.24'%3E%3Ccircle cx='20' cy='20' r='13'/%3E%3Cline x1='7' y1='20' x2='33' y2='20'/%3E%3Cline x1='20' y1='7' x2='20' y2='33'/%3E%3Crect x='40' y='38' width='18' height='18' rx='2'/%3E%3Cline x1='49' y1='38' x2='49' y2='56'/%3E%3C/g%3E%3C/svg%3E\")";

// Pattern 6: فواصل عشرية ونقاط مبعثرة
const DECIMAL_DOTS_PATTERN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='50' height='50' viewBox='0 0 50 50'%3E%3Cg fill='%23ffffff' fill-opacity='0.26'%3E%3Ccircle cx='12' cy='14' r='2.8'/%3E%3Ccircle cx='38' cy='20' r='2.8'/%3E%3Cpath d='M24 32c1 0 2 1 2 2.5 0 2-2 3.5-3 4' stroke='%23ffffff' stroke-width='1.6' fill='none' stroke-linecap='round'/%3E%3Ccircle cx='16' cy='42' r='2.2'/%3E%3Ccircle cx='42' cy='40' r='1.8'/%3E%3C/g%3E%3C/svg%3E\")";

// Pattern 7: علامات استفهام مبعثرة
const QUESTION_MARKS_PATTERN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Cg fill='%23ffffff' fill-opacity='0.22' font-family='sans-serif' font-size='17' font-weight='bold'%3E%3Ctext x='8' y='22'%3E?%3C/text%3E%3Ctext x='42' y='18'%3E?%3C/text%3E%3Ctext x='24' y='46'%3E?%3C/text%3E%3Ctext x='46' y='55'%3E?%3C/text%3E%3C/g%3E%3C/svg%3E\")";

// Pattern 8: خط أعداد مدرج مع فجوة في المنتصف
const GAP_NUMBER_LINE_PATTERN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='72' height='36' viewBox='0 0 72 36'%3E%3Cg stroke='%23ffffff' stroke-width='1.3' stroke-opacity='0.24'%3E%3Cline x1='0' y1='18' x2='26' y2='18'/%3E%3Cline x1='46' y1='18' x2='72' y2='18'/%3E%3Ccircle cx='36' cy='18' r='4.5' stroke-dasharray='2,2' fill='none'/%3E%3Cline x1='8' y1='12' x2='8' y2='24'/%3E%3Cline x1='18' y1='14' x2='18' y2='22'/%3E%3Cline x1='54' y1='14' x2='54' y2='22'/%3E%3Cline x1='64' y1='12' x2='64' y2='24'/%3E%3C/g%3E%3C/svg%3E\")";

// Pattern 9: دوائر عشرات غير مكتملة
const INCOMPLETE_CIRCLES_PATTERN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='50' height='50' viewBox='0 0 50 50'%3E%3Cg stroke='%23ffffff' stroke-width='1.5' stroke-opacity='0.24' fill='none'%3E%3Ccircle cx='15' cy='15' r='8.5' stroke-dasharray='4,3'/%3E%3Ccircle cx='38' cy='32' r='9.5' stroke-dasharray='5,3'/%3E%3Ccircle cx='20' cy='38' r='4'/%3E%3C/g%3E%3C/svg%3E\")";

// Pattern 10: شبكة مكعبات القيمة المنزلية مع قطعة مفقودة
const MISSING_CUBE_GRID_PATTERN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='44' height='44' viewBox='0 0 44 44'%3E%3Cg stroke='%23ffffff' stroke-width='1.3' stroke-opacity='0.22' fill='none'%3E%3Crect x='4' y='4' width='16' height='16'/%3E%3Crect x='24' y='4' width='16' height='16'/%3E%3Crect x='4' y='24' width='16' height='16'/%3E%3Crect x='24' y='24' width='16' height='16' stroke-dasharray='3,2'/%3E%3C/g%3E%3C/svg%3E\")";

// Pattern 11: أشكال هندسية غير مكتملة التظليل
const INCOMPLETE_FRACTION_SHAPES_PATTERN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Cg stroke='%23ffffff' stroke-width='1.3' stroke-opacity='0.24' fill='none'%3E%3Ccircle cx='22' cy='22' r='14'/%3E%3Cpath d='M22 8 A14 14 0 0 1 36 22 L22 22 Z' fill='%23ffffff' fill-opacity='0.22'/%3E%3Cline x1='8' y1='22' x2='36' y2='22'/%3E%3Cline x1='22' y1='8' x2='22' y2='36'/%3E%3C/g%3E%3C/svg%3E\")";

// Pattern 12: فواصل عشرية ونقاط غير مكتملة
const INCOMPLETE_DECIMAL_PATTERN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='56' viewBox='0 0 56 56'%3E%3Cg fill='%23ffffff' fill-opacity='0.22' font-family='sans-serif' font-size='13' font-weight='bold'%3E%3Ctext x='8' y='20'%3E0._%3C/text%3E%3Ctext x='32' y='40'%3E._%3C/text%3E%3Ccircle cx='28' cy='18' r='2.2'/%3E%3Ccircle cx='18' cy='44' r='2.2'/%3E%3C/g%3E%3C/svg%3E\")";

// ================= PLACE VALUE CUSTOM PATTERNS =================

// PV Pattern 1: نقش حزم العشرات
const TENS_BUNDLES_PATTERN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48'%3E%3Cg stroke='%23ffffff' stroke-width='1.2' stroke-opacity='0.22' fill='none'%3E%3Crect x='8' y='6' width='10' height='36' rx='2'/%3E%3Cline x1='8' y1='18' x2='18' y2='18'/%3E%3Cline x1='8' y1='30' x2='18' y2='30'/%3E%3Crect x='28' y='6' width='10' height='36' rx='2'/%3E%3Cline x1='28' y1='18' x2='38' y2='18'/%3E%3Cline x1='28' y1='30' x2='38' y2='30'/%3E%3C/g%3E%3C/svg%3E\")";

// PV Pattern 2: نقش مكعبات المئات
const HUNDREDS_FLAT_PATTERN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='56' viewBox='0 0 56 56'%3E%3Cg stroke='%23ffffff' stroke-width='1.1' stroke-opacity='0.24' fill='none'%3E%3Crect x='6' y='6' width='44' height='44' rx='2'/%3E%3Cline x1='17' y1='6' x2='17' y2='50'/%3E%3Cline x1='28' y1='6' x2='28' y2='50'/%3E%3Cline x1='39' y1='6' x2='39' y2='50'/%3E%3Cline x1='6' y1='17' x2='50' y2='17'/%3E%3Cline x1='6' y1='28' x2='50' y2='28'/%3E%3Cline x1='6' y1='39' x2='50' y2='39'/%3E%3C/g%3E%3C/svg%3E\")";

// PV Pattern 3: نقش الحروف والكلمات الرقمية والصيغ
const WORDS_NUMBERS_PATTERN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='72' height='72' viewBox='0 0 72 72'%3E%3Cg fill='%23ffffff' fill-opacity='0.22' font-family='sans-serif' font-size='12' font-weight='bold'%3E%3Ctext x='8' y='22'%3E300%3C/text%3E%3Ctext x='44' y='20'%3E+50%3C/text%3E%3Ctext x='16' y='46'%3E+2%3C/text%3E%3Ctext x='38' y='62'%3E=352%3C/text%3E%3C/g%3E%3C/svg%3E\")";

// PV Pattern 4: نقش رموز المقارنة (أكبر وأصغر)
const COMPARE_SYMBOLS_PATTERN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='52' height='52' viewBox='0 0 52 52'%3E%3Cg stroke='%23ffffff' stroke-width='1.5' stroke-opacity='0.24' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M8 14l8 6-8 6'/%3E%3Cpath d='M44 14l-8 6 8 6'/%3E%3Cpath d='M20 38h12m-12 5h12'/%3E%3C/g%3E%3C/svg%3E\")";

// PV Pattern 5: نقش فواصل دورة الألوف
const THOUSANDS_COMMA_PATTERN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 64 64'%3E%3Cg fill='%23ffffff' fill-opacity='0.22' font-family='monospace' font-size='14' font-weight='bold'%3E%3Ctext x='6' y='24'%3E,000%3C/text%3E%3Ctext x='32' y='52'%3E1,000%3C/text%3E%3Ccircle cx='54' cy='18' r='2'/%3E%3Ccircle cx='14' cy='46' r='2'/%3E%3C/g%3E%3C/svg%3E\")";

// PV Pattern 6: نقش الأصفار المتتالية
const ZEROS_SEQUENCE_PATTERN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='70' height='70' viewBox='0 0 70 70'%3E%3Cg fill='%23ffffff' fill-opacity='0.22' font-family='monospace' font-size='13' font-weight='bold'%3E%3Ctext x='8' y='22'%3E000%3C/text%3E%3Ctext x='38' y='22'%3E000%3C/text%3E%3Ctext x='18' y='50'%3E10%3C/text%3E%3Ctext x='34' y='42' font-size='9'%3E9%3C/text%3E%3Ctext x='44' y='64'%3E000%3C/text%3E%3C/g%3E%3C/svg%3E\")";

// PV Pattern 7: نقش خطوط التقريب
const ROUNDING_WAVES_PATTERN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='56' viewBox='0 0 56 56'%3E%3Cg stroke='%23ffffff' stroke-width='1.4' stroke-opacity='0.24' fill='none'%3E%3Cpath d='M6 14c3-2 6-2 9 0s6 2 9 0'/%3E%3Cpath d='M6 19c3-2 6-2 9 0s6 2 9 0'/%3E%3Cpath d='M30 38c4-5 12-5 16 0' stroke-dasharray='3,2'/%3E%3Cline x1='28' y1='44' x2='50' y2='44'/%3E%3C/g%3E%3C/svg%3E\")";

// PV Pattern 8: نقش متتاليات الأنماط والأسهم
const ARITHMETIC_STEPS_PATTERN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 64 64'%3E%3Cg fill='%23ffffff' fill-opacity='0.22' font-family='sans-serif' font-size='12' font-weight='bold'%3E%3Ctext x='6' y='20'%3E+10%3C/text%3E%3Ctext x='36' y='36'%3E+100%3C/text%3E%3Ctext x='12' y='56'%3E+1000%3C/text%3E%3Cpath d='M26 16l6 4-6 4' stroke='%23ffffff' stroke-width='1.2' fill='none' stroke-opacity='0.24'/%3E%3C/g%3E%3C/svg%3E\")";

// PV Pattern 9: نقش شبكة الأجزاء من 10 و 100
const DECIMAL_GRID_PATTERN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='52' height='52' viewBox='0 0 52 52'%3E%3Cg stroke='%23ffffff' stroke-width='1.1' stroke-opacity='0.24' fill='none'%3E%3Crect x='6' y='6' width='40' height='40' rx='2'/%3E%3Cline x1='6' y1='26' x2='46' y2='26'/%3E%3Cline x1='26' y1='6' x2='26' y2='46'/%3E%3Ccircle cx='16' cy='16' r='3' fill='%23ffffff' fill-opacity='0.2' stroke='none'/%3E%3Ccircle cx='36' cy='36' r='3' fill='%23ffffff' fill-opacity='0.2' stroke='none'/%3E%3C/g%3E%3C/svg%3E\")";

// PV Pattern 10: نقش الأجزاء الدقيقة المتناهية الصغر
const THOUSANDTHS_MICRO_PATTERN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='54' height='54' viewBox='0 0 54 54'%3E%3Cg fill='%23ffffff' fill-opacity='0.22' font-family='monospace' font-size='11' font-weight='bold'%3E%3Ctext x='6' y='18'%3E.001%3C/text%3E%3Ctext x='28' y='36'%3E1/1000%3C/text%3E%3Ccircle cx='18' cy='42' r='1.5'/%3E%3Ccircle cx='44' cy='18' r='1.5'/%3E%3C/g%3E%3C/svg%3E\")";

// PV Pattern 11: نقش الفواصل العشرية المتوازية
const DECIMAL_ALIGN_PATTERN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Cg stroke='%23ffffff' stroke-width='1.2' stroke-opacity='0.24' fill='none'%3E%3Cline x1='24' y1='4' x2='24' y2='56' stroke-dasharray='3,3'/%3E%3Ccircle cx='24' cy='18' r='2' fill='%23ffffff' stroke='none' fill-opacity='0.26'/%3E%3Ccircle cx='24' cy='36' r='2' fill='%23ffffff' stroke='none' fill-opacity='0.26'/%3E%3Cpath d='M36 24l5 4-5 4' stroke-width='1.5'/%3E%3C/g%3E%3C/svg%3E\")";

// PV Pattern 12: نقش فواصل عشرية وأقواس التقريب العشري
const DECIMAL_ROUND_PATTERN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='56' viewBox='0 0 56 56'%3E%3Cg fill='%23ffffff' fill-opacity='0.22' font-family='sans-serif' font-size='11' font-weight='bold'%3E%3Ctext x='6' y='18'%3E3.86%3C/text%3E%3Ctext x='28' y='38'%3E≈ 3.9%3C/text%3E%3Cpath d='M14 26c4 3 14 3 20 0' stroke='%23ffffff' stroke-width='1.3' fill='none' stroke-opacity='0.24'/%3E%3C/g%3E%3C/svg%3E\")";


// ================= GENERAL ACADEMIC SVG PATTERNS =================

// Academic Coordinate Grid Pattern
const GRID_PATTERN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg stroke='%23ffffff' stroke-width='1' stroke-opacity='0.2' fill='none'%3E%3Crect x='0' y='0' width='40' height='40'/%3E%3Cline x1='20' y1='0' x2='20' y2='40' stroke-width='1.5' stroke-opacity='0.28'/%3E%3Cline x1='0' y1='20' x2='40' y2='20' stroke-width='1.5' stroke-opacity='0.28'/%3E%3C/g%3E%3C/svg%3E\")";

// Isometric Cubes Pattern
const ISOMETRIC_CUBE_PATTERN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48'%3E%3Cg stroke='%23ffffff' stroke-width='1.1' stroke-opacity='0.22' fill='none'%3E%3Cpolygon points='24,4 44,14 24,24 4,14'/%3E%3Cpolygon points='4,14 24,24 24,44 4,34'/%3E%3Cpolygon points='44,14 24,24 24,44 44,34'/%3E%3C/g%3E%3C/svg%3E\")";

// Calculus Smooth Wave Pattern
const WAVE_PATTERN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='36' viewBox='0 0 60 36'%3E%3Cpath d='M0 18 C 15 6, 15 30, 30 18 C 45 6, 45 30, 60 18' stroke='%23ffffff' stroke-width='1.3' stroke-opacity='0.24' fill='none'/%3E%3C/svg%3E\")";

// Statistical Scatter Dots Pattern
const DOTS_PATTERN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='36' height='36' viewBox='0 0 36 36'%3E%3Cg fill='%23ffffff' fill-opacity='0.22'%3E%3Ccircle cx='9' cy='9' r='2'/%3E%3Ccircle cx='27' cy='9' r='1.5'/%3E%3Ccircle cx='18' cy='18' r='2.5'/%3E%3Ccircle cx='9' cy='27' r='1.5'/%3E%3Ccircle cx='27' cy='27' r='2'/%3E%3C/g%3E%3C/svg%3E\")";

// Diagonal Stripes Pattern
const DIAGONAL_STRIPES_PATTERN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cline x1='0' y1='32' x2='32' y2='0' stroke='%23ffffff' stroke-width='1.4' stroke-opacity='0.22'/%3E%3C/svg%3E\")";

// Graph Network Pattern
const GRAPH_NETWORK_PATTERN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='54' height='54' viewBox='0 0 54 54'%3E%3Cg stroke='%23ffffff' stroke-width='1.1' stroke-opacity='0.22' fill='none'%3E%3Cline x1='12' y1='12' x2='42' y2='18'/%3E%3Cline x1='12' y1='12' x2='24' y2='42'/%3E%3Cline x1='42' y1='18' x2='24' y2='42'/%3E%3Ccircle cx='12' cy='12' r='2.5' fill='%23ffffff' fill-opacity='0.24'/%3E%3Ccircle cx='42' cy='18' r='2.5' fill='%23ffffff' fill-opacity='0.24'/%3E%3Ccircle cx='24' cy='42' r='2.5' fill='%23ffffff' fill-opacity='0.24'/%3E%3C/g%3E%3C/svg%3E\")";

interface SubCategoryVisualConfig {
  color: string;
  icon: React.ComponentType<{ className?: string }>;
  patternUri?: string;
  patternSize?: string;
}

// Visual configuration for Subcategories & Topics
const SUBCATEGORY_VISUALS: Record<string, SubCategoryVisualConfig> = {
  // ================= 1. الرياضيات الأساسية (#1E3A8A) =================
  'basic-arithmetic': {
    color: '#1E3A8A',
    icon: LinearOperationsQuadIcon,
    patternUri: HONEYCOMB_PATTERN_DATA_URI,
    patternSize: '32px 55.425px',
  },
  'الحساب-الأساسي': {
    color: '#1E3A8A',
    icon: LinearOperationsQuadIcon,
    patternUri: HONEYCOMB_PATTERN_DATA_URI,
    patternSize: '32px 55.425px',
  },
  'place-value': {
    color: '#1E3A8A',
    icon: PlaceValueIcon,
    patternUri: TENS_BUNDLES_PATTERN,
    patternSize: '48px 48px',
  },
  'القيمة-المنزلية': {
    color: '#1E3A8A',
    icon: PlaceValueIcon,
    patternUri: TENS_BUNDLES_PATTERN,
    patternSize: '48px 48px',
  },
  'fractions-decimals': {
    color: '#1D4ED8',
    icon: FractionHalfIcon,
    patternUri: FRACTION_SHAPES_PATTERN,
    patternSize: '64px 64px',
  },
  'الكسور-والأعداد-العشرية': {
    color: '#1D4ED8',
    icon: FractionHalfIcon,
    patternUri: FRACTION_SHAPES_PATTERN,
    patternSize: '64px 64px',
  },
  'ratios-proportions': {
    color: '#1E40AF',
    icon: RatiosProportionsIcon,
    patternUri: GRID_PATTERN,
    patternSize: '40px 40px',
  },
  'النسب-والتناسب': {
    color: '#1E40AF',
    icon: RatiosProportionsIcon,
    patternUri: GRID_PATTERN,
    patternSize: '40px 40px',
  },
  'order-of-operations': {
    color: '#2563EB',
    icon: OrderOfOperationsIcon,
    patternUri: HONEYCOMB_PATTERN_DATA_URI,
    patternSize: '32px 55.425px',
  },
  'ترتيب-العمليات': {
    color: '#2563EB',
    icon: OrderOfOperationsIcon,
    patternUri: HONEYCOMB_PATTERN_DATA_URI,
    patternSize: '32px 55.425px',
  },
  'number-line-measurement': {
    color: '#1D4ED8',
    icon: NumberLineRulerIcon,
    patternUri: NUMBER_LINE_PATTERN,
    patternSize: '64px 32px',
  },
  'خط-الأعداد-والقياس': {
    color: '#1D4ED8',
    icon: NumberLineRulerIcon,
    patternUri: NUMBER_LINE_PATTERN,
    patternSize: '64px 32px',
  },

  // Sub-categories under Basic Arithmetic (Operations)
  'addition-tests': {
    color: '#1E3A8A',
    icon: LinearPlusIcon,
    patternUri: HONEYCOMB_PATTERN_DATA_URI,
    patternSize: '32px 55.425px',
  },
  'اختبارات-الجمع': {
    color: '#1E3A8A',
    icon: LinearPlusIcon,
    patternUri: HONEYCOMB_PATTERN_DATA_URI,
    patternSize: '32px 55.425px',
  },
  'subtraction-tests': {
    color: '#1E3A8A',
    icon: LinearMinusIcon,
    patternUri: HONEYCOMB_PATTERN_DATA_URI,
    patternSize: '32px 55.425px',
  },
  'اختبارات-الطرح': {
    color: '#1E3A8A',
    icon: LinearMinusIcon,
    patternUri: HONEYCOMB_PATTERN_DATA_URI,
    patternSize: '32px 55.425px',
  },
  'multiplication-tests': {
    color: '#1E3A8A',
    icon: LinearMultiplyIcon,
    patternUri: HONEYCOMB_PATTERN_DATA_URI,
    patternSize: '32px 55.425px',
  },
  'اختبارات-الضرب': {
    color: '#1E3A8A',
    icon: LinearMultiplyIcon,
    patternUri: HONEYCOMB_PATTERN_DATA_URI,
    patternSize: '32px 55.425px',
  },
  'division-tests': {
    color: '#1E3A8A',
    icon: LinearDivideIcon,
    patternUri: HONEYCOMB_PATTERN_DATA_URI,
    patternSize: '32px 55.425px',
  },
  'اختبارات-القسمة': {
    color: '#1E3A8A',
    icon: LinearDivideIcon,
    patternUri: HONEYCOMB_PATTERN_DATA_URI,
    patternSize: '32px 55.425px',
  },

  // Addition Tests (1 - 12)
  'single-digit-addition': {
    color: '#4ADE80',
    icon: NumeralSevenIcon,
    patternUri: ODD_NUMBERS_PATTERN,
    patternSize: '80px 80px',
  },
  'اختبار-جمع-الأرقام-الفردية-من-1-إلى-10': {
    color: '#4ADE80',
    icon: NumeralSevenIcon,
    patternUri: ODD_NUMBERS_PATTERN,
    patternSize: '80px 80px',
  },
  'addition-within-20': {
    color: '#60A5FA',
    icon: NumeralFifteenIcon,
    patternUri: NUMBER_LINE_PATTERN,
    patternSize: '64px 32px',
  },
  'الجمع-ضمن-العدد-20': {
    color: '#60A5FA',
    icon: NumeralFifteenIcon,
    patternUri: NUMBER_LINE_PATTERN,
    patternSize: '64px 32px',
  },
  'addition-within-50': {
    color: '#FB923C',
    icon: BaseTen24Icon,
    patternUri: TENS_CIRCLES_PATTERN,
    patternSize: '44px 44px',
  },
  'اختبار-الجمع-ضمن-العدد-50': {
    color: '#FB923C',
    icon: BaseTen24Icon,
    patternUri: TENS_CIRCLES_PATTERN,
    patternSize: '44px 44px',
  },
  'addition-within-100': {
    color: '#A78BFA',
    icon: NumeralHundredIcon,
    patternUri: HONEYCOMB_PATTERN_DATA_URI,
    patternSize: '32px 55.425px',
  },
  'اختبار-الجمع-ضمن-العدد-100': {
    color: '#A78BFA',
    icon: NumeralHundredIcon,
    patternUri: HONEYCOMB_PATTERN_DATA_URI,
    patternSize: '32px 55.425px',
  },
  'fractions-addition': {
    color: '#F87171',
    icon: FractionThreeFourthsIcon,
    patternUri: FRACTION_SHAPES_PATTERN,
    patternSize: '64px 64px',
  },
  'اختبار-جمع-الكسور': {
    color: '#F87171',
    icon: FractionThreeFourthsIcon,
    patternUri: FRACTION_SHAPES_PATTERN,
    patternSize: '64px 64px',
  },
  'decimals-addition': {
    color: '#FBBF24',
    icon: Decimal075Icon,
    patternUri: DECIMAL_DOTS_PATTERN,
    patternSize: '50px 50px',
  },
  'اختبار-جمع-الأعداد-العشرية': {
    color: '#FBBF24',
    icon: Decimal075Icon,
    patternUri: DECIMAL_DOTS_PATTERN,
    patternSize: '50px 50px',
  },
  'missing-single-digits': {
    color: '#10B981',
    icon: MissingEquation1PlusQ7Icon,
    patternUri: QUESTION_MARKS_PATTERN,
    patternSize: '60px 60px',
  },
  'اختبار-جمع-الأرقام-من-1-إلى-10-(الرقم-المفقود)': {
    color: '#10B981',
    icon: MissingEquation1PlusQ7Icon,
    patternUri: QUESTION_MARKS_PATTERN,
    patternSize: '60px 60px',
  },
  'missing-within-20': {
    color: '#38BDF8',
    icon: MissingEquation8PlusQ15Icon,
    patternUri: GAP_NUMBER_LINE_PATTERN,
    patternSize: '72px 36px',
  },
  'اختبار-الجمع-ضمن-العدد-20-(الرقم-المفقود)': {
    color: '#38BDF8',
    icon: MissingEquation8PlusQ15Icon,
    patternUri: GAP_NUMBER_LINE_PATTERN,
    patternSize: '72px 36px',
  },
  'missing-within-50': {
    color: '#F97316',
    icon: MissingEquation24PlusQ42Icon,
    patternUri: INCOMPLETE_CIRCLES_PATTERN,
    patternSize: '50px 50px',
  },
  'اختبار-الجمع-ضمن-العدد-50-(الرقم-المفقود)': {
    color: '#F97316',
    icon: MissingEquation24PlusQ42Icon,
    patternUri: INCOMPLETE_CIRCLES_PATTERN,
    patternSize: '50px 50px',
  },
  'missing-within-100': {
    color: '#8B5CF6',
    icon: MissingEquation45PlusQ100Icon,
    patternUri: MISSING_CUBE_GRID_PATTERN,
    patternSize: '44px 44px',
  },
  'اختبار-الجمع-ضمن-العدد-100-(الرقم-المفقود)': {
    color: '#8B5CF6',
    icon: MissingEquation45PlusQ100Icon,
    patternUri: MISSING_CUBE_GRID_PATTERN,
    patternSize: '44px 44px',
  },
  'missing-fractions': {
    color: '#EF4444',
    icon: MissingEquationFractionsIcon,
    patternUri: INCOMPLETE_FRACTION_SHAPES_PATTERN,
    patternSize: '60px 60px',
  },
  'اختبار-جمع-الكسور-(الرقم-المفقود)': {
    color: '#EF4444',
    icon: MissingEquationFractionsIcon,
    patternUri: INCOMPLETE_FRACTION_SHAPES_PATTERN,
    patternSize: '60px 60px',
  },
  'missing-decimals': {
    color: '#CA8A04',
    icon: MissingEquationDecimalsIcon,
    patternUri: INCOMPLETE_DECIMAL_PATTERN,
    patternSize: '56px 56px',
  },
  'اختبار-جمع-الأعداد-العشرية-(الرقم-المفقود)': {
    color: '#CA8A04',
    icon: MissingEquationDecimalsIcon,
    patternUri: INCOMPLETE_DECIMAL_PATTERN,
    patternSize: '56px 56px',
  },

  // Place Value Tests (1 - 12)
  'place-value-within-99': {
    color: '#10B981',
    icon: PlaceValue99Icon,
    patternUri: TENS_BUNDLES_PATTERN,
    patternSize: '48px 48px',
  },
  'اختبار-القيمة-المنزلية-ضمن-99-(الآحاد-والعشرات)': {
    color: '#10B981',
    icon: PlaceValue99Icon,
    patternUri: TENS_BUNDLES_PATTERN,
    patternSize: '48px 48px',
  },
  'place-value-within-999': {
    color: '#0EA5E9',
    icon: PlaceValue999Icon,
    patternUri: HUNDREDS_FLAT_PATTERN,
    patternSize: '56px 56px',
  },
  'اختبار-القيمة-المنزلية-ضمن-999-(المئات)': {
    color: '#0EA5E9',
    icon: PlaceValue999Icon,
    patternUri: HUNDREDS_FLAT_PATTERN,
    patternSize: '56px 56px',
  },
  'reading-writing-numbers': {
    color: '#F97316',
    icon: ReadingWritingNumbersIcon,
    patternUri: WORDS_NUMBERS_PATTERN,
    patternSize: '72px 72px',
  },
  'اختبار-قراءة-الأعداد-وكتابتها-(الصيغ-اللفظية-والتحليلية)': {
    color: '#F97316',
    icon: ReadingWritingNumbersIcon,
    patternUri: WORDS_NUMBERS_PATTERN,
    patternSize: '72px 72px',
  },
  'comparing-ordering-numbers': {
    color: '#8B5CF6',
    icon: ComparingOrderingIcon,
    patternUri: COMPARE_SYMBOLS_PATTERN,
    patternSize: '52px 52px',
  },
  'اختبار-مقارنة-الأعداد-وترتيبها': {
    color: '#8B5CF6',
    icon: ComparingOrderingIcon,
    patternUri: COMPARE_SYMBOLS_PATTERN,
    patternSize: '52px 52px',
  },
  'place-value-thousands': {
    color: '#E11D48',
    icon: PlaceValueThousandsIcon,
    patternUri: THOUSANDS_COMMA_PATTERN,
    patternSize: '64px 64px',
  },
  'اختبار-القيمة-المنزلية-حتى-الألوف': {
    color: '#E11D48',
    icon: PlaceValueThousandsIcon,
    patternUri: THOUSANDS_COMMA_PATTERN,
    patternSize: '64px 64px',
  },
  'place-value-millions-billions': {
    color: '#EAB308',
    icon: PlaceValueMillionsBillionsIcon,
    patternUri: ZEROS_SEQUENCE_PATTERN,
    patternSize: '70px 70px',
  },
  'اختبار-القيمة-المنزلية-حتى-الملايين-والمليارات': {
    color: '#EAB308',
    icon: PlaceValueMillionsBillionsIcon,
    patternUri: ZEROS_SEQUENCE_PATTERN,
    patternSize: '70px 70px',
  },
  'rounding-whole-numbers': {
    color: '#059669',
    icon: RoundingWholeNumbersIcon,
    patternUri: ROUNDING_WAVES_PATTERN,
    patternSize: '56px 56px',
  },
  'اختبار-تقريب-الأعداد-الكلية': {
    color: '#059669',
    icon: RoundingWholeNumbersIcon,
    patternUri: ROUNDING_WAVES_PATTERN,
    patternSize: '56px 56px',
  },
  'arithmetic-patterns-place-value': {
    color: '#1E3A8A',
    icon: ArithmeticPatternsPlaceValueIcon,
    patternUri: ARITHMETIC_STEPS_PATTERN,
    patternSize: '64px 64px',
  },
  'اختبار-الأنماط-الحسابية-والقيمة-المنزلية': {
    color: '#1E3A8A',
    icon: ArithmeticPatternsPlaceValueIcon,
    patternUri: ARITHMETIC_STEPS_PATTERN,
    patternSize: '64px 64px',
  },
  'decimals-tenths-hundredths': {
    color: '#C2410C',
    icon: DecimalsTenthsHundredthsIcon,
    patternUri: DECIMAL_GRID_PATTERN,
    patternSize: '52px 52px',
  },
  'اختبار-القيمة-المنزلية-للكسور-العشرية-(الأجزاء-من-10-و-100)': {
    color: '#C2410C',
    icon: DecimalsTenthsHundredthsIcon,
    patternUri: DECIMAL_GRID_PATTERN,
    patternSize: '52px 52px',
  },
  'decimals-thousandths': {
    color: '#581C87',
    icon: DecimalsThousandthsIcon,
    patternUri: THOUSANDTHS_MICRO_PATTERN,
    patternSize: '54px 54px',
  },
  'اختبار-القيمة-المنزلية-للأجزاء-من-ألف': {
    color: '#581C87',
    icon: DecimalsThousandthsIcon,
    patternUri: THOUSANDTHS_MICRO_PATTERN,
    patternSize: '54px 54px',
  },
  'comparing-ordering-decimals': {
    color: '#991B1B',
    icon: ComparingOrderingDecimalsIcon,
    patternUri: DECIMAL_ALIGN_PATTERN,
    patternSize: '60px 60px',
  },
  'اختبار-مقارنة-وترتيب-الكسور-العشرية': {
    color: '#991B1B',
    icon: ComparingOrderingDecimalsIcon,
    patternUri: DECIMAL_ALIGN_PATTERN,
    patternSize: '60px 60px',
  },
  'rounding-decimals': {
    color: '#EAB308',
    icon: RoundingDecimalsIcon,
    patternUri: DECIMAL_ROUND_PATTERN,
    patternSize: '56px 56px',
  },
  'اختبار-تقريب-الكسور-العشرية': {
    color: '#EAB308',
    icon: RoundingDecimalsIcon,
    patternUri: DECIMAL_ROUND_PATTERN,
    patternSize: '56px 56px',
  },

  // ================= 2. الجبر ودواله (#6B21A8) =================
  'linear-equations': {
    color: '#6B21A8',
    icon: LinearEquationsIcon,
    patternUri: GRID_PATTERN,
    patternSize: '40px 40px',
  },
  'المعادلات-الخطية': {
    color: '#6B21A8',
    icon: LinearEquationsIcon,
    patternUri: GRID_PATTERN,
    patternSize: '40px 40px',
  },
  'inequalities': {
    color: '#7C3AED',
    icon: InequalitiesIcon,
    patternUri: NUMBER_LINE_PATTERN,
    patternSize: '64px 32px',
  },
  'المتباينات': {
    color: '#7C3AED',
    icon: InequalitiesIcon,
    patternUri: NUMBER_LINE_PATTERN,
    patternSize: '64px 32px',
  },
  'polynomials': {
    color: '#581C87',
    icon: PolynomialsIcon,
    patternUri: GRID_PATTERN,
    patternSize: '40px 40px',
  },
  'كثيرات-الحدود': {
    color: '#581C87',
    icon: PolynomialsIcon,
    patternUri: GRID_PATTERN,
    patternSize: '40px 40px',
  },
  'quadratic-equations': {
    color: '#6B21A8',
    icon: QuadraticEquationsIcon,
    patternUri: WAVE_PATTERN,
    patternSize: '60px 36px',
  },
  'المعادلات-التربيعية': {
    color: '#6B21A8',
    icon: QuadraticEquationsIcon,
    patternUri: WAVE_PATTERN,
    patternSize: '60px 36px',
  },
  'functions-graphs': {
    color: '#7C3AED',
    icon: FunctionsGraphsIcon,
    patternUri: GRID_PATTERN,
    patternSize: '40px 40px',
  },
  'الدوال-والرسوم-البيانية': {
    color: '#7C3AED',
    icon: FunctionsGraphsIcon,
    patternUri: GRID_PATTERN,
    patternSize: '40px 40px',
  },
  'sequences': {
    color: '#8B5CF6',
    icon: SequencesIcon,
    patternUri: DOTS_PATTERN,
    patternSize: '36px 36px',
  },
  'المتتاليات-والمتسلسلات': {
    color: '#8B5CF6',
    icon: SequencesIcon,
    patternUri: DOTS_PATTERN,
    patternSize: '36px 36px',
  },

  // ================= 3. الهندسة والقياس وحساب المثلثات (#047857) =================
  'geometric-shapes': {
    color: '#047857',
    icon: GeometricShapesIcon,
    patternUri: ISOMETRIC_CUBE_PATTERN,
    patternSize: '48px 48px',
  },
  'الأشكال-الهندسية': {
    color: '#047857',
    icon: GeometricShapesIcon,
    patternUri: ISOMETRIC_CUBE_PATTERN,
    patternSize: '48px 48px',
  },
  'perimeter-area': {
    color: '#059669',
    icon: PerimeterAreaIcon,
    patternUri: GRID_PATTERN,
    patternSize: '40px 40px',
  },
  'المحيط-والمساحة': {
    color: '#059669',
    icon: PerimeterAreaIcon,
    patternUri: GRID_PATTERN,
    patternSize: '40px 40px',
  },
  'triangles-angles': {
    color: '#047857',
    icon: TrianglesAnglesIcon,
    patternUri: ISOMETRIC_CUBE_PATTERN,
    patternSize: '48px 48px',
  },
  'المثلثات-والزوايا': {
    color: '#047857',
    icon: TrianglesAnglesIcon,
    patternUri: ISOMETRIC_CUBE_PATTERN,
    patternSize: '48px 48px',
  },
  'trigonometry': {
    color: '#065F46',
    icon: TrigonometryIcon,
    patternUri: DOTS_PATTERN,
    patternSize: '36px 36px',
  },
  'حساب-المثلثات': {
    color: '#065F46',
    icon: TrigonometryIcon,
    patternUri: DOTS_PATTERN,
    patternSize: '36px 36px',
  },
  'analytic-geometry': {
    color: '#059669',
    icon: AnalyticGeometryIcon,
    patternUri: GRID_PATTERN,
    patternSize: '40px 40px',
  },
  'الهندسة-التحليلية': {
    color: '#059669',
    icon: AnalyticGeometryIcon,
    patternUri: GRID_PATTERN,
    patternSize: '40px 40px',
  },
  'geometric-transformations': {
    color: '#10B981',
    icon: GeometricTransformationsIcon,
    patternUri: ISOMETRIC_CUBE_PATTERN,
    patternSize: '48px 48px',
  },
  'التحويلات-الهندسية': {
    color: '#10B981',
    icon: GeometricTransformationsIcon,
    patternUri: ISOMETRIC_CUBE_PATTERN,
    patternSize: '48px 48px',
  },

  // ================= 4. حساب التفاضل والتكامل (#BE123C) =================
  'limits-continuity': {
    color: '#BE123C',
    icon: LimitsContinuityIcon,
    patternUri: WAVE_PATTERN,
    patternSize: '60px 36px',
  },
  'النهايات-والاتصال': {
    color: '#BE123C',
    icon: LimitsContinuityIcon,
    patternUri: WAVE_PATTERN,
    patternSize: '60px 36px',
  },
  'derivatives-differentiation': {
    color: '#9F1239',
    icon: DerivativesDifferentiationIcon,
    patternUri: WAVE_PATTERN,
    patternSize: '60px 36px',
  },
  'المشتقات-والتفاضل': {
    color: '#9F1239',
    icon: DerivativesDifferentiationIcon,
    patternUri: WAVE_PATTERN,
    patternSize: '60px 36px',
  },
  'applications-of-derivatives': {
    color: '#BE123C',
    icon: ApplicationsOfDerivativesIcon,
    patternUri: WAVE_PATTERN,
    patternSize: '60px 36px',
  },
  'تطبيقات-المشتقات': {
    color: '#BE123C',
    icon: ApplicationsOfDerivativesIcon,
    patternUri: WAVE_PATTERN,
    patternSize: '60px 36px',
  },
  'integration': {
    color: '#881337',
    icon: IntegrationIcon,
    patternUri: WAVE_PATTERN,
    patternSize: '60px 36px',
  },
  'التكامل': {
    color: '#881337',
    icon: IntegrationIcon,
    patternUri: WAVE_PATTERN,
    patternSize: '60px 36px',
  },
  'applications-of-integration': {
    color: '#9F1239',
    icon: ApplicationsOfIntegrationIcon,
    patternUri: ISOMETRIC_CUBE_PATTERN,
    patternSize: '48px 48px',
  },
  'تطبيقات-التكامل': {
    color: '#9F1239',
    icon: ApplicationsOfIntegrationIcon,
    patternUri: ISOMETRIC_CUBE_PATTERN,
    patternSize: '48px 48px',
  },
  'differential-equations': {
    color: '#BE123C',
    icon: DifferentialEquationsIcon,
    patternUri: WAVE_PATTERN,
    patternSize: '60px 36px',
  },
  'المعادلات-التفاضلية': {
    color: '#BE123C',
    icon: DifferentialEquationsIcon,
    patternUri: WAVE_PATTERN,
    patternSize: '60px 36px',
  },

  // ================= 5. الإحصاء والاحتمالات (#B45309) =================
  'statistical-measures': {
    color: '#B45309',
    icon: StatisticalMeasuresIcon,
    patternUri: DOTS_PATTERN,
    patternSize: '36px 36px',
  },
  'المقاييس-الإحصائية': {
    color: '#B45309',
    icon: StatisticalMeasuresIcon,
    patternUri: DOTS_PATTERN,
    patternSize: '36px 36px',
  },
  'data-analysis': {
    color: '#D97706',
    icon: DataAnalysisIcon,
    patternUri: GRID_PATTERN,
    patternSize: '40px 40px',
  },
  'تحليل-البيانات': {
    color: '#D97706',
    icon: DataAnalysisIcon,
    patternUri: GRID_PATTERN,
    patternSize: '40px 40px',
  },
  'probability': {
    color: '#92400E',
    icon: ProbabilityIcon,
    patternUri: DOTS_PATTERN,
    patternSize: '36px 36px',
  },
  'الاحتمالات': {
    color: '#92400E',
    icon: ProbabilityIcon,
    patternUri: DOTS_PATTERN,
    patternSize: '36px 36px',
  },
  'permutations-combinations': {
    color: '#B45309',
    icon: PermutationsCombinationsIcon,
    patternUri: DOTS_PATTERN,
    patternSize: '36px 36px',
  },
  'التباديل-والتوافيق': {
    color: '#B45309',
    icon: PermutationsCombinationsIcon,
    patternUri: DOTS_PATTERN,
    patternSize: '36px 36px',
  },
  'probability-distributions': {
    color: '#C2410C',
    icon: ProbabilityDistributionsIcon,
    patternUri: WAVE_PATTERN,
    patternSize: '60px 36px',
  },
  'التوزيعات-الاحتمالية': {
    color: '#C2410C',
    icon: ProbabilityDistributionsIcon,
    patternUri: WAVE_PATTERN,
    patternSize: '60px 36px',
  },

  // ================= 6. الرياضيات المتقدمة والمتخصصة (#3730A3) =================
  'linear-algebra': {
    color: '#3730A3',
    icon: LinearAlgebraIcon,
    patternUri: GRID_PATTERN,
    patternSize: '40px 40px',
  },
  'الجبر-الخطي': {
    color: '#3730A3',
    icon: LinearAlgebraIcon,
    patternUri: GRID_PATTERN,
    patternSize: '40px 40px',
  },
  'complex-numbers': {
    color: '#4338CA',
    icon: ComplexNumbersIcon,
    patternUri: DOTS_PATTERN,
    patternSize: '36px 36px',
  },
  'الأعداد-المركبة': {
    color: '#4338CA',
    icon: ComplexNumbersIcon,
    patternUri: DOTS_PATTERN,
    patternSize: '36px 36px',
  },
  'mathematical-logic': {
    color: '#312E81',
    icon: MathematicalLogicIcon,
    patternUri: GRAPH_NETWORK_PATTERN,
    patternSize: '54px 54px',
  },
  'المنطق-الرياضي': {
    color: '#312E81',
    icon: MathematicalLogicIcon,
    patternUri: GRAPH_NETWORK_PATTERN,
    patternSize: '54px 54px',
  },
  'discrete-mathematics': {
    color: '#3730A3',
    icon: DiscreteMathematicsIcon,
    patternUri: GRAPH_NETWORK_PATTERN,
    patternSize: '54px 54px',
  },
  'الرياضيات-المتقطعة': {
    color: '#3730A3',
    icon: DiscreteMathematicsIcon,
    patternUri: GRAPH_NETWORK_PATTERN,
    patternSize: '54px 54px',
  },

  // ================= 7. الرياضيات التطبيقية والمالية (#0F766E) =================
  'word-problems': {
    color: '#0F766E',
    icon: WordProblemsIcon,
    patternUri: DIAGONAL_STRIPES_PATTERN,
    patternSize: '32px 32px',
  },
  'المسائل-الكلامية': {
    color: '#0F766E',
    icon: WordProblemsIcon,
    patternUri: DIAGONAL_STRIPES_PATTERN,
    patternSize: '32px 32px',
  },
  'financial-math': {
    color: '#0D9488',
    icon: FinancialMathIcon,
    patternUri: GRID_PATTERN,
    patternSize: '40px 40px',
  },
  'الرياضيات-المالية': {
    color: '#0D9488',
    icon: FinancialMathIcon,
    patternUri: GRID_PATTERN,
    patternSize: '40px 40px',
  },
};

// Unified Official Domain Color Palette
export const DOMAIN_FALLBACK_COLORS: Record<string, string> = {
  'basic-math': '#1E3A8A', // الأزرق الداكن / الملكي
  'algebra-functions': '#6B21A8', // البنفسجي الأكاديمي
  'geometry-trigonometry': '#047857', // الأخضر الزمردي
  'calculus': '#BE123C', // الأحمر القرمزي
  'statistics-probability': '#B45309', // البرتقالي العنبري
  'advanced-math': '#3730A3', // النيلي الداكن
  'applied-financial-math': '#0F766E', // التيل / الأزرق المخضر
};

// Domain default patterns
const DOMAIN_DEFAULT_PATTERNS: Record<string, { uri: string; size: string; icon: React.ComponentType<{ className?: string }> }> = {
  'basic-math': { uri: HONEYCOMB_PATTERN_DATA_URI, size: '32px 55.425px', icon: LinearOperationsQuadIcon },
  'algebra-functions': { uri: GRID_PATTERN, size: '40px 40px', icon: FunctionsGraphsIcon },
  'geometry-trigonometry': { uri: ISOMETRIC_CUBE_PATTERN, size: '48px 48px', icon: GeometricShapesIcon },
  'calculus': { uri: WAVE_PATTERN, size: '60px 36px', icon: IntegrationIcon },
  'statistics-probability': { uri: DOTS_PATTERN, size: '36px 36px', icon: StatisticalMeasuresIcon },
  'advanced-math': { uri: GRAPH_NETWORK_PATTERN, size: '54px 54px', icon: LinearAlgebraIcon },
  'applied-financial-math': { uri: DIAGONAL_STRIPES_PATTERN, size: '32px 32px', icon: FinancialMathIcon },
};

export const SubCategoryCard: React.FC<SubCategoryCardProps> = ({
  subcategory,
  domainId,
  onOpenQuiz,
}) => {
  // Extract primary domain key if composite path (e.g. 'basic-math/basic-arithmetic')
  const primaryDomain = (domainId || '').split('/')[0] || 'basic-math';

  // Find dedicated visual or compute harmonious fallback
  let dedicatedVisual = SUBCATEGORY_VISUALS[subcategory.id];

  // Smart mathematical topic fallback
  if (!dedicatedVisual) {
    const idLower = (subcategory.id || '').toLowerCase();
    const title = subcategory.title || '';

    // Addition tests fallback
    if (idLower.includes('single-digit') || title.includes('الفردية')) {
      dedicatedVisual = SUBCATEGORY_VISUALS['single-digit-addition'];
    } else if (idLower.includes('within-20') && !idLower.includes('missing')) {
      dedicatedVisual = SUBCATEGORY_VISUALS['addition-within-20'];
    } else if (idLower.includes('within-50') && !idLower.includes('missing')) {
      dedicatedVisual = SUBCATEGORY_VISUALS['addition-within-50'];
    } else if (idLower.includes('within-100') && !idLower.includes('missing')) {
      dedicatedVisual = SUBCATEGORY_VISUALS['addition-within-100'];
    } else if (idLower.includes('fractions') && !idLower.includes('missing') && primaryDomain === 'basic-math') {
      dedicatedVisual = SUBCATEGORY_VISUALS['fractions-addition'];
    } else if (idLower.includes('decimals') && !idLower.includes('missing') && primaryDomain === 'basic-math') {
      dedicatedVisual = SUBCATEGORY_VISUALS['decimals-addition'];
    } else if (idLower.includes('missing-single')) {
      dedicatedVisual = SUBCATEGORY_VISUALS['missing-single-digits'];
    } else if (idLower.includes('missing-within-20')) {
      dedicatedVisual = SUBCATEGORY_VISUALS['missing-within-20'];
    } else if (idLower.includes('missing-within-50')) {
      dedicatedVisual = SUBCATEGORY_VISUALS['missing-within-50'];
    } else if (idLower.includes('missing-within-100')) {
      dedicatedVisual = SUBCATEGORY_VISUALS['missing-within-100'];
    } else if (idLower.includes('missing-fractions')) {
      dedicatedVisual = SUBCATEGORY_VISUALS['missing-fractions'];
    } else if (idLower.includes('missing-decimals')) {
      dedicatedVisual = SUBCATEGORY_VISUALS['missing-decimals'];
    }

    // Place Value tests fallback
    else if (idLower.includes('within-99') || title.includes('ضمن 99')) {
      dedicatedVisual = SUBCATEGORY_VISUALS['place-value-within-99'];
    } else if (idLower.includes('within-999') || title.includes('ضمن 999')) {
      dedicatedVisual = SUBCATEGORY_VISUALS['place-value-within-999'];
    } else if (idLower.includes('reading-writing') || title.includes('قراءة الأعداد')) {
      dedicatedVisual = SUBCATEGORY_VISUALS['reading-writing-numbers'];
    } else if (idLower.includes('comparing-ordering-numbers') || (title.includes('مقارنة الأعداد') && !title.includes('عشري'))) {
      dedicatedVisual = SUBCATEGORY_VISUALS['comparing-ordering-numbers'];
    } else if (idLower.includes('thousands') || title.includes('الألوف')) {
      dedicatedVisual = SUBCATEGORY_VISUALS['place-value-thousands'];
    } else if (idLower.includes('millions') || title.includes('الملايين')) {
      dedicatedVisual = SUBCATEGORY_VISUALS['place-value-millions-billions'];
    } else if (idLower.includes('rounding-whole') || (title.includes('تقريب الأعداد') && !title.includes('عشري'))) {
      dedicatedVisual = SUBCATEGORY_VISUALS['rounding-whole-numbers'];
    } else if (idLower.includes('patterns') || title.includes('الأنماط')) {
      dedicatedVisual = SUBCATEGORY_VISUALS['arithmetic-patterns-place-value'];
    } else if (idLower.includes('tenths') || title.includes('الأجزاء من 10')) {
      dedicatedVisual = SUBCATEGORY_VISUALS['decimals-tenths-hundredths'];
    } else if (idLower.includes('thousandths') || title.includes('الأجزاء من ألف')) {
      dedicatedVisual = SUBCATEGORY_VISUALS['decimals-thousandths'];
    } else if (idLower.includes('comparing-ordering-decimals') || (title.includes('مقارنة') && title.includes('عشري'))) {
      dedicatedVisual = SUBCATEGORY_VISUALS['comparing-ordering-decimals'];
    } else if (idLower.includes('rounding-decimals') || (title.includes('تقريب') && title.includes('عشري'))) {
      dedicatedVisual = SUBCATEGORY_VISUALS['rounding-decimals'];
    }

    // General Arithmetic operations fallback
    else if (idLower.includes('addition') || title.includes('جمع')) {
      dedicatedVisual = { color: '#1E3A8A', icon: LinearPlusIcon, patternUri: HONEYCOMB_PATTERN_DATA_URI, patternSize: '32px 55.425px' };
    } else if (idLower.includes('subtraction') || title.includes('طرح')) {
      dedicatedVisual = { color: '#1E3A8A', icon: LinearMinusIcon, patternUri: HONEYCOMB_PATTERN_DATA_URI, patternSize: '32px 55.425px' };
    } else if (idLower.includes('multiplication') || title.includes('ضرب')) {
      dedicatedVisual = { color: '#1E3A8A', icon: LinearMultiplyIcon, patternUri: HONEYCOMB_PATTERN_DATA_URI, patternSize: '32px 55.425px' };
    } else if (idLower.includes('division') || title.includes('قسمة')) {
      dedicatedVisual = { color: '#1E3A8A', icon: LinearDivideIcon, patternUri: HONEYCOMB_PATTERN_DATA_URI, patternSize: '32px 55.425px' };
    }

    // Calculus Topics Fallback
    else if (idLower.includes('limit') || title.includes('نهايات') || title.includes('اتصال')) {
      dedicatedVisual = { color: '#BE123C', icon: LimitsContinuityIcon, patternUri: WAVE_PATTERN, patternSize: '60px 36px' };
    } else if (idLower.includes('derivative') || title.includes('مشتق') || title.includes('تفاضل')) {
      dedicatedVisual = { color: '#9F1239', icon: DerivativesDifferentiationIcon, patternUri: WAVE_PATTERN, patternSize: '60px 36px' };
    } else if (idLower.includes('integral') || title.includes('تكامل')) {
      dedicatedVisual = { color: '#881337', icon: IntegrationIcon, patternUri: WAVE_PATTERN, patternSize: '60px 36px' };
    } else if (idLower.includes('differential') || title.includes('معادلات تفاضلية')) {
      dedicatedVisual = { color: '#BE123C', icon: DifferentialEquationsIcon, patternUri: WAVE_PATTERN, patternSize: '60px 36px' };
    }

    // Algebra Topics Fallback
    else if (idLower.includes('linear') || title.includes('معادلات خطية')) {
      dedicatedVisual = { color: '#6B21A8', icon: LinearEquationsIcon, patternUri: GRID_PATTERN, patternSize: '40px 40px' };
    } else if (idLower.includes('inequal') || title.includes('متباينات')) {
      dedicatedVisual = { color: '#7C3AED', icon: InequalitiesIcon, patternUri: NUMBER_LINE_PATTERN, patternSize: '64px 32px' };
    } else if (idLower.includes('poly') || title.includes('كثيرات الحدود')) {
      dedicatedVisual = { color: '#581C87', icon: PolynomialsIcon, patternUri: GRID_PATTERN, patternSize: '40px 40px' };
    } else if (idLower.includes('quad') || title.includes('تربيعية')) {
      dedicatedVisual = { color: '#6B21A8', icon: QuadraticEquationsIcon, patternUri: WAVE_PATTERN, patternSize: '60px 36px' };
    } else if (idLower.includes('func') || title.includes('دوال') || title.includes('رسوم')) {
      dedicatedVisual = { color: '#7C3AED', icon: FunctionsGraphsIcon, patternUri: GRID_PATTERN, patternSize: '40px 40px' };
    } else if (idLower.includes('sequence') || title.includes('متتاليات') || title.includes('متسلسلات')) {
      dedicatedVisual = { color: '#8B5CF6', icon: SequencesIcon, patternUri: DOTS_PATTERN, patternSize: '36px 36px' };
    }

    // Geometry Topics Fallback
    else if (idLower.includes('triangle') || title.includes('مثلث') || title.includes('زوايا')) {
      dedicatedVisual = { color: '#047857', icon: TrianglesAnglesIcon, patternUri: ISOMETRIC_CUBE_PATTERN, patternSize: '48px 48px' };
    } else if (idLower.includes('trig') || title.includes('مثلثات')) {
      dedicatedVisual = { color: '#065F46', icon: TrigonometryIcon, patternUri: DOTS_PATTERN, patternSize: '36px 36px' };
    } else if (idLower.includes('shape') || title.includes('أشكال')) {
      dedicatedVisual = { color: '#047857', icon: GeometricShapesIcon, patternUri: ISOMETRIC_CUBE_PATTERN, patternSize: '48px 48px' };
    } else if (idLower.includes('perimeter') || idLower.includes('area') || title.includes('محيط') || title.includes('مساحة')) {
      dedicatedVisual = { color: '#059669', icon: PerimeterAreaIcon, patternUri: GRID_PATTERN, patternSize: '40px 40px' };
    } else if (idLower.includes('analytic') || title.includes('تحليلية') || title.includes('إحداثي')) {
      dedicatedVisual = { color: '#059669', icon: AnalyticGeometryIcon, patternUri: GRID_PATTERN, patternSize: '40px 40px' };
    } else if (idLower.includes('transform') || title.includes('تحويلات') || title.includes('تناظر')) {
      dedicatedVisual = { color: '#10B981', icon: GeometricTransformationsIcon, patternUri: ISOMETRIC_CUBE_PATTERN, patternSize: '48px 48px' };
    }

    // Statistics Topics Fallback
    else if (idLower.includes('stat') || title.includes('إحصائ') || title.includes('متوسط') || title.includes('انحراف')) {
      dedicatedVisual = { color: '#B45309', icon: StatisticalMeasuresIcon, patternUri: DOTS_PATTERN, patternSize: '36px 36px' };
    } else if (idLower.includes('prob') || title.includes('احتمال')) {
      dedicatedVisual = { color: '#92400E', icon: ProbabilityIcon, patternUri: DOTS_PATTERN, patternSize: '36px 36px' };
    } else if (idLower.includes('data') || title.includes('بيانات')) {
      dedicatedVisual = { color: '#D97706', icon: DataAnalysisIcon, patternUri: GRID_PATTERN, patternSize: '40px 40px' };
    } else if (idLower.includes('permut') || title.includes('تباديل') || title.includes('توافيق')) {
      dedicatedVisual = { color: '#B45309', icon: PermutationsCombinationsIcon, patternUri: DOTS_PATTERN, patternSize: '36px 36px' };
    } else if (idLower.includes('distribut') || title.includes('توزيع')) {
      dedicatedVisual = { color: '#C2410C', icon: ProbabilityDistributionsIcon, patternUri: WAVE_PATTERN, patternSize: '60px 36px' };
    }

    // Advanced Math Fallback
    else if (idLower.includes('matrix') || idLower.includes('linear-algebra') || title.includes('مصفوف') || title.includes('جبر خطي')) {
      dedicatedVisual = { color: '#3730A3', icon: LinearAlgebraIcon, patternUri: GRID_PATTERN, patternSize: '40px 40px' };
    } else if (idLower.includes('complex') || title.includes('مركب') || title.includes('تخيلي')) {
      dedicatedVisual = { color: '#4338CA', icon: ComplexNumbersIcon, patternUri: DOTS_PATTERN, patternSize: '36px 36px' };
    } else if (idLower.includes('logic') || title.includes('منطق')) {
      dedicatedVisual = { color: '#312E81', icon: MathematicalLogicIcon, patternUri: GRAPH_NETWORK_PATTERN, patternSize: '54px 54px' };
    } else if (idLower.includes('discrete') || title.includes('متقطع')) {
      dedicatedVisual = { color: '#3730A3', icon: DiscreteMathematicsIcon, patternUri: GRAPH_NETWORK_PATTERN, patternSize: '54px 54px' };
    }

    // Applied & Financial Math Fallback
    else if (idLower.includes('word') || title.includes('كلامية') || title.includes('لفظي')) {
      dedicatedVisual = { color: '#0F766E', icon: WordProblemsIcon, patternUri: DIAGONAL_STRIPES_PATTERN, patternSize: '32px 32px' };
    } else if (idLower.includes('finan') || title.includes('مالي') || title.includes('فائدة')) {
      dedicatedVisual = { color: '#0D9488', icon: FinancialMathIcon, patternUri: GRID_PATTERN, patternSize: '40px 40px' };
    }
  }

  const domainDefaults = DOMAIN_DEFAULT_PATTERNS[primaryDomain] || DOMAIN_DEFAULT_PATTERNS['basic-math'];

  const cardColor =
    dedicatedVisual?.color || DOMAIN_FALLBACK_COLORS[primaryDomain] || '#1E3A8A';
  const IconComponent = dedicatedVisual?.icon || domainDefaults.icon || LinearOperationsQuadIcon;
  const patternUri = dedicatedVisual?.patternUri || domainDefaults.uri;
  const patternSize = dedicatedVisual?.patternSize || domainDefaults.size;

  return (
    <div
      onClick={onOpenQuiz}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onOpenQuiz();
        }
      }}
      className="group relative w-full rounded-2xl sm:rounded-3xl border border-black/10 dark:border-white/10 bg-white dark:bg-zinc-900 overflow-hidden shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer focus:outline-none focus:ring-4 focus:ring-blue-500/20 select-none flex flex-col"
    >
      {/* ================= TOP SECTION (60% Height) ================= */}
      <div
        className="relative w-full h-40 sm:h-48 md:h-52 flex items-center justify-center overflow-hidden transition-all duration-300"
        style={{ backgroundColor: cardColor }}
      >
        {/* Subtle Geometric Pattern */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none opacity-25"
          style={{
            backgroundImage: patternUri,
            backgroundSize: patternSize,
            backgroundRepeat: 'repeat',
          }}
        />

        {/* Center Outline White Icon */}
        <div className="relative z-10 flex items-center justify-center p-3 w-full h-full">
          <IconComponent className="w-16 h-14 sm:w-20 sm:h-18 md:w-24 md:h-20 max-w-[85%] text-white stroke-[1.8] drop-shadow-md group-hover:scale-110 transition-transform duration-300" />
        </div>
      </div>

      {/* ================= BOTTOM SECTION (40% Height) ================= */}
      <div className="w-full py-5 sm:py-6 md:py-7 px-4 bg-white dark:bg-zinc-900 flex items-center justify-center border-t border-black/5 dark:border-white/5 transition-colors">
        <h3 className="text-base sm:text-lg md:text-xl font-bold text-black dark:text-white text-center tracking-tight leading-snug">
          {subcategory.title}
        </h3>
      </div>
    </div>
  );
};
