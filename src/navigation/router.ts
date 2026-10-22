import { useEffect, useState } from 'react';

export type AppView = 'home' | 'domain' | 'quiz' | 'privacy' | 'terms' | 'contact' | 'about';

export interface RouteState {
  view: AppView;
  domainId?: string;
  subcategoryId?: string;
  topicId?: string;
  testId?: string;
}

export function parseCurrentRoute(): RouteState {
  const hash = window.location.hash.replace(/^#\/?/, '');
  let rawPath = hash || window.location.pathname.replace(/^\//, '');

  if (!rawPath || rawPath === '' || rawPath === '/') {
    return { view: 'home' };
  }

  let path = rawPath;
  try {
    path = decodeURIComponent(rawPath);
  } catch {
    // keep rawPath if decoding fails
  }

  // Remove trailing slashes
  path = path.replace(/\/+$/, '');

  const parts = path.split('/').filter(Boolean);

  // ==================== WORD PROBLEMS QUIZ ROUTES ====================
  const isWordProblemsRoute =
    path.includes('/word-problems') ||
    path.includes('المسائل-الكلامية') ||
    path.includes('word-problems') ||
    path.includes('الكلامية');

  if (
    path === 'domain/applied-financial-math/word-problems' ||
    path === '/domain/applied-financial-math/word-problems' ||
    path === 'domain/applied-financial-math/المسائل-الكلامية' ||
    path === '/domain/applied-financial-math/المسائل-الكلامية'
  ) {
    return {
      view: 'quiz',
      domainId: 'applied-financial-math',
      subcategoryId: 'word-problems',
    };
  }

  if (
    path.includes('translating-words-to-equations') ||
    (isWordProblemsRoute && (path.includes('translating') || path.includes('ترجمة-النصوص') || path.includes('معادلات-ورموز')))
  ) {
    return {
      view: 'quiz',
      domainId: 'applied-financial-math',
      subcategoryId: 'word-problems',
      topicId: 'translating-words-to-equations',
      testId: 'translating-words-to-equations',
    };
  }

  if (
    path.includes('distance-rate-time-problems') ||
    (isWordProblemsRoute && (path.includes('distance-rate') || path.includes('الحركة') || path.includes('السرعة-والمسافة') || path.includes('السرعة-النسبية')))
  ) {
    return {
      view: 'quiz',
      domainId: 'applied-financial-math',
      subcategoryId: 'word-problems',
      topicId: 'distance-rate-time-problems',
      testId: 'distance-rate-time-problems',
    };
  }

  if (
    path.includes('work-rate-problems') ||
    (isWordProblemsRoute && (path.includes('work-rate') || path.includes('العمل-المشترك') || path.includes('معدلات-الإنجاز') || path.includes('الخزانات')))
  ) {
    return {
      view: 'quiz',
      domainId: 'applied-financial-math',
      subcategoryId: 'word-problems',
      topicId: 'work-rate-problems',
      testId: 'work-rate-problems',
    };
  }

  if (
    path.includes('mixture-solution-alloy-problems') ||
    (isWordProblemsRoute && (path.includes('mixture') || path.includes('الخلط') || path.includes('المحاليل') || path.includes('السبائك') || path.includes('العيارات')))
  ) {
    return {
      view: 'quiz',
      domainId: 'applied-financial-math',
      subcategoryId: 'word-problems',
      topicId: 'mixture-solution-alloy-problems',
      testId: 'mixture-solution-alloy-problems',
    };
  }

  if (
    path.includes('ratio-proportion-division-problems') ||
    (isWordProblemsRoute && (path.includes('ratio-proportion') || path.includes('النسبة-والتناسب') || path.includes('التقسيم-التناسبي') || path.includes('المواريث')))
  ) {
    return {
      view: 'quiz',
      domainId: 'applied-financial-math',
      subcategoryId: 'word-problems',
      topicId: 'ratio-proportion-division-problems',
      testId: 'ratio-proportion-division-problems',
    };
  }

  if (
    path.includes('age-word-problems') ||
    (isWordProblemsRoute && (path.includes('age-problems') || path.includes('الأعمار') || path.includes('عمر-الأب') || path.includes('الماضي-والمستقبل')))
  ) {
    return {
      view: 'quiz',
      domainId: 'applied-financial-math',
      subcategoryId: 'word-problems',
      topicId: 'age-word-problems',
      testId: 'age-word-problems',
    };
  }

  if (
    path.includes('profit-loss-discount-tax-problems') ||
    (isWordProblemsRoute && (path.includes('profit-loss') || path.includes('الربح-والخسارة') || path.includes('الخصم') || path.includes('الضريبة-التجارية') || path.includes('vat')))
  ) {
    return {
      view: 'quiz',
      domainId: 'applied-financial-math',
      subcategoryId: 'word-problems',
      topicId: 'profit-loss-discount-tax-problems',
      testId: 'profit-loss-discount-tax-problems',
    };
  }

  if (
    path.includes('investment-interest-word-problems') ||
    (isWordProblemsRoute && (path.includes('investment-interest') || path.includes('مسائل-الاستثمار') || path.includes('توزيع-الأرباح') || path.includes('العائد-الموزون')))
  ) {
    return {
      view: 'quiz',
      domainId: 'applied-financial-math',
      subcategoryId: 'word-problems',
      topicId: 'investment-interest-word-problems',
      testId: 'investment-interest-word-problems',
    };
  }

  if (
    path.includes('geometric-perimeter-area-problems') ||
    (isWordProblemsRoute && (path.includes('geometric-word') || path.includes('الأشكال-الهندسية') || path.includes('المحيط-والمساحات') || path.includes('الأسوار')))
  ) {
    return {
      view: 'quiz',
      domainId: 'applied-financial-math',
      subcategoryId: 'word-problems',
      topicId: 'geometric-perimeter-area-problems',
      testId: 'geometric-perimeter-area-problems',
    };
  }

  if (
    path.includes('consecutive-integers-number-relations') ||
    (isWordProblemsRoute && (path.includes('consecutive-integers') || path.includes('الأعداد-المتتالية') || path.includes('العلاقات-الرقمية') || path.includes('الآحاد-والعشرات')))
  ) {
    return {
      view: 'quiz',
      domainId: 'applied-financial-math',
      subcategoryId: 'word-problems',
      topicId: 'consecutive-integers-number-relations',
      testId: 'consecutive-integers-number-relations',
    };
  }

  if (
    path.includes('amortization-savings-scenarios') ||
    (isWordProblemsRoute && (path.includes('savings-scenarios') || path.includes('الخطط-الادخارية') || path.includes('استقطاع-الراتب') || path.includes('صندوق-الطوارئ')))
  ) {
    return {
      view: 'quiz',
      domainId: 'applied-financial-math',
      subcategoryId: 'word-problems',
      topicId: 'amortization-savings-scenarios',
      testId: 'amortization-savings-scenarios',
    };
  }

  if (
    path.includes('optimization-applied-word-problems') ||
    (isWordProblemsRoute && (path.includes('optimization') || path.includes('التحسين-الأمثل') || path.includes('الاستمثال') || path.includes('القيمة-العظمى')))
  ) {
    return {
      view: 'quiz',
      domainId: 'applied-financial-math',
      subcategoryId: 'word-problems',
      topicId: 'optimization-applied-word-problems',
      testId: 'optimization-applied-word-problems',
    };
  }

  // ==================== FINANCIAL MATHEMATICS QUIZ ROUTES ====================
  const isFinancialMathRoute =
    path.includes('/financial-math') ||
    path.includes('الرياضيات-المالية') ||
    path.includes('financial-math') ||
    path.includes('المالية');

  if (
    path === 'domain/applied-financial-math/financial-math' ||
    path === '/domain/applied-financial-math/financial-math' ||
    path === 'domain/applied-financial-math/الرياضيات-المالية' ||
    path === '/domain/applied-financial-math/الرياضيات-المالية'
  ) {
    return {
      view: 'quiz',
      domainId: 'applied-financial-math',
      subcategoryId: 'financial-math',
    };
  }

  if (
    path.includes('simple-interest-total-amount') ||
    (isFinancialMathRoute && (path.includes('simple-interest') || path.includes('الفائدة-البسيطة') || path.includes('الجملة')))
  ) {
    return {
      view: 'quiz',
      domainId: 'applied-financial-math',
      subcategoryId: 'financial-math',
      topicId: 'simple-interest-total-amount',
      testId: 'simple-interest-total-amount',
    };
  }

  if (
    path.includes('compound-interest-future-value') ||
    (isFinancialMathRoute && (path.includes('compound-interest') || path.includes('الفائدة-المركبة') || path.includes('القيمة-المستقبلية') || path.includes('قاعدة-72')))
  ) {
    return {
      view: 'quiz',
      domainId: 'applied-financial-math',
      subcategoryId: 'financial-math',
      topicId: 'compound-interest-future-value',
      testId: 'compound-interest-future-value',
    };
  }

  if (
    path.includes('present-value-discounting') ||
    (isFinancialMathRoute && (path.includes('present-value') || path.includes('القيمة-الحالية') || path.includes('الخصم-التجاري') || path.includes('الخصم-الصحيح') || path.includes('discounting')))
  ) {
    return {
      view: 'quiz',
      domainId: 'applied-financial-math',
      subcategoryId: 'financial-math',
      topicId: 'present-value-discounting',
      testId: 'present-value-discounting',
    };
  }

  if (
    path.includes('nominal-effective-interest-rates') ||
    (isFinancialMathRoute && (path.includes('nominal-effective') || path.includes('الفائدة-الاسمية') || path.includes('الفائدة-الفعالة') || path.includes('ear') || path.includes('apy')))
  ) {
    return {
      view: 'quiz',
      domainId: 'applied-financial-math',
      subcategoryId: 'financial-math',
      topicId: 'nominal-effective-interest-rates',
      testId: 'nominal-effective-interest-rates',
    };
  }

  if (
    path.includes('annuities-ordinary-due') ||
    (isFinancialMathRoute && (path.includes('annuities') || path.includes('الدفعات-المالية') || path.includes('الدفعات-العادية') || path.includes('الدفعات-المستحقة') || path.includes('التقاعد')))
  ) {
    return {
      view: 'quiz',
      domainId: 'applied-financial-math',
      subcategoryId: 'financial-math',
      topicId: 'annuities-ordinary-due',
      testId: 'annuities-ordinary-due',
    };
  }

  if (
    path.includes('loan-amortization-schedules') ||
    (isFinancialMathRoute && (path.includes('amortization') || path.includes('استهلاك-القروض') || path.includes('جدول-السداد') || path.includes('القسط-الشهري') || path.includes('loan')))
  ) {
    return {
      view: 'quiz',
      domainId: 'applied-financial-math',
      subcategoryId: 'financial-math',
      topicId: 'loan-amortization-schedules',
      testId: 'loan-amortization-schedules',
    };
  }

  if (
    path.includes('bond-valuation-cash-flows') ||
    (isFinancialMathRoute && (path.includes('bond-valuation') || path.includes('تقييم-السندات') || path.includes('السندات') || path.includes('الكوبونات') || path.includes('ytm')))
  ) {
    return {
      view: 'quiz',
      domainId: 'applied-financial-math',
      subcategoryId: 'financial-math',
      topicId: 'bond-valuation-cash-flows',
      testId: 'bond-valuation-cash-flows',
    };
  }

  if (
    path.includes('npv-irr-project-evaluation') ||
    (isFinancialMathRoute && (path.includes('npv') || path.includes('irr') || path.includes('صافي-القيمة-الحالية') || path.includes('معدل-العائد-الداخلي') || path.includes('الموازنة-الرأسمالية')))
  ) {
    return {
      view: 'quiz',
      domainId: 'applied-financial-math',
      subcategoryId: 'financial-math',
      topicId: 'npv-irr-project-evaluation',
      testId: 'npv-irr-project-evaluation',
    };
  }

  if (
    path.includes('financial-depreciation-methods') ||
    (isFinancialMathRoute && (path.includes('depreciation') || path.includes('الإهلاك-المالي') || path.includes('القسط-الثابت') || path.includes('الرصيد-المتناقص') || path.includes('syd')))
  ) {
    return {
      view: 'quiz',
      domainId: 'applied-financial-math',
      subcategoryId: 'financial-math',
      topicId: 'financial-depreciation-methods',
      testId: 'financial-depreciation-methods',
    };
  }

  if (
    path.includes('inflation-financial-ratios') ||
    (isFinancialMathRoute && (path.includes('inflation') || path.includes('التضخم') || path.includes('النسب-المالية') || path.includes('معادلة-فيشر') || path.includes('fisher')))
  ) {
    return {
      view: 'quiz',
      domainId: 'applied-financial-math',
      subcategoryId: 'financial-math',
      topicId: 'inflation-financial-ratios',
      testId: 'inflation-financial-ratios',
    };
  }

  if (
    path.includes('options-derivatives-valuation') ||
    (isFinancialMathRoute && (path.includes('options') || path.includes('derivatives') || path.includes('المشتقات-المالية') || path.includes('الخيارات') || path.includes('put-call')))
  ) {
    return {
      view: 'quiz',
      domainId: 'applied-financial-math',
      subcategoryId: 'financial-math',
      topicId: 'options-derivatives-valuation',
      testId: 'options-derivatives-valuation',
    };
  }

  if (
    path.includes('comprehensive-financial-word-problems') ||
    (isFinancialMathRoute && (path.includes('comprehensive-financial') || path.includes('مسائل-مالية') || path.includes('حالات-استثمارية') || path.includes('تطبيقات-مالية')))
  ) {
    return {
      view: 'quiz',
      domainId: 'applied-financial-math',
      subcategoryId: 'financial-math',
      topicId: 'comprehensive-financial-word-problems',
      testId: 'comprehensive-financial-word-problems',
    };
  }

  // ==================== DISCRETE MATHEMATICS QUIZ ROUTES ====================
  const isDiscreteMathRoute =
    path.includes('/discrete-mathematics') ||
    path.includes('الرياضيات-المتقطعة') ||
    path.includes('discrete-mathematics') ||
    path.includes('المتقطعة');

  if (
    path === 'domain/advanced-math/discrete-mathematics' ||
    path === '/domain/advanced-math/discrete-mathematics' ||
    path === 'domain/advanced-math/الرياضيات-المتقطعة' ||
    path === '/domain/advanced-math/الرياضيات-المتقطعة'
  ) {
    return {
      view: 'quiz',
      domainId: 'advanced-math',
      subcategoryId: 'discrete-mathematics',
    };
  }

  if (
    path.includes('set-theory-operations') ||
    (isDiscreteMathRoute && (path.includes('set-theory') || path.includes('المجموعات') || path.includes('العمليات-على-المجموعات')))
  ) {
    return {
      view: 'quiz',
      domainId: 'advanced-math',
      subcategoryId: 'discrete-mathematics',
      topicId: 'set-theory-operations',
      testId: 'set-theory-operations',
    };
  }

  if (
    path.includes('relations-properties') ||
    (isDiscreteMathRoute && (path.includes('relations') || path.includes('العلاقات') || path.includes('الانعكاس') || path.includes('التماثل')))
  ) {
    return {
      view: 'quiz',
      domainId: 'advanced-math',
      subcategoryId: 'discrete-mathematics',
      topicId: 'relations-properties',
      testId: 'relations-properties',
    };
  }

  if (
    path.includes('equivalence-partial-orders') ||
    (isDiscreteMathRoute && (path.includes('equivalence') || path.includes('partial-orders') || path.includes('علاقات-التكافؤ') || path.includes('الترتيب-الجزئي') || path.includes('poset') || path.includes('hasse')))
  ) {
    return {
      view: 'quiz',
      domainId: 'advanced-math',
      subcategoryId: 'discrete-mathematics',
      topicId: 'equivalence-partial-orders',
      testId: 'equivalence-partial-orders',
    };
  }

  if (
    path.includes('discrete-functions-types') ||
    (isDiscreteMathRoute && (path.includes('functions') || path.includes('الدوال-المتقطعة') || path.includes('injective') || path.includes('surjective') || path.includes('bijective') || path.includes('التقابل')))
  ) {
    return {
      view: 'quiz',
      domainId: 'advanced-math',
      subcategoryId: 'discrete-mathematics',
      topicId: 'discrete-functions-types',
      testId: 'discrete-functions-types',
    };
  }

  if (
    path.includes('pigeonhole-principle') ||
    (isDiscreteMathRoute && (path.includes('pigeonhole') || path.includes('برج-الحمام') || path.includes('دركليه')))
  ) {
    return {
      view: 'quiz',
      domainId: 'advanced-math',
      subcategoryId: 'discrete-mathematics',
      topicId: 'pigeonhole-principle',
      testId: 'pigeonhole-principle',
    };
  }

  if (
    path.includes('recurrence-relations') ||
    (isDiscreteMathRoute && (path.includes('recurrence') || path.includes('العلاقات-العودية') || path.includes('المتتالية-التراجعية') || path.includes('فيبوناتشي')))
  ) {
    return {
      view: 'quiz',
      domainId: 'advanced-math',
      subcategoryId: 'discrete-mathematics',
      topicId: 'recurrence-relations',
      testId: 'recurrence-relations',
    };
  }

  if (
    path.includes('graph-theory-basics') ||
    (isDiscreteMathRoute && (path.includes('graph-theory') || path.includes('الرسم-البياني') || path.includes('الرؤوس-والحواف') || path.includes('مصافحة-اليدين')))
  ) {
    return {
      view: 'quiz',
      domainId: 'advanced-math',
      subcategoryId: 'discrete-mathematics',
      topicId: 'graph-theory-basics',
      testId: 'graph-theory-basics',
    };
  }

  if (
    path.includes('eulerian-hamiltonian-paths') ||
    (isDiscreteMathRoute && (path.includes('eulerian') || path.includes('hamiltonian') || path.includes('إيلري') || path.includes('هاميلتوني') || path.includes('جسور-كونيغسبرغ') || path.includes('tsp')))
  ) {
    return {
      view: 'quiz',
      domainId: 'advanced-math',
      subcategoryId: 'discrete-mathematics',
      topicId: 'eulerian-hamiltonian-paths',
      testId: 'eulerian-hamiltonian-paths',
    };
  }

  if (
    path.includes('trees-minimum-spanning') ||
    (isDiscreteMathRoute && (path.includes('trees') || path.includes('spanning-tree') || path.includes('الأشجار') || path.includes('الشجرة-الممتدة') || path.includes('kruskal') || path.includes('prim')))
  ) {
    return {
      view: 'quiz',
      domainId: 'advanced-math',
      subcategoryId: 'discrete-mathematics',
      topicId: 'trees-minimum-spanning',
      testId: 'trees-minimum-spanning',
    };
  }

  if (
    path.includes('boolean-algebra-circuits') ||
    (isDiscreteMathRoute && (path.includes('boolean-algebra') || path.includes('الجبر-البولياني') || path.includes('خرائط-كارنوف') || path.includes('k-map') || path.includes('sop') || path.includes('pos')))
  ) {
    return {
      view: 'quiz',
      domainId: 'advanced-math',
      subcategoryId: 'discrete-mathematics',
      topicId: 'boolean-algebra-circuits',
      testId: 'boolean-algebra-circuits',
    };
  }

  if (
    path.includes('discrete-induction-proofs') ||
    (isDiscreteMathRoute && (path.includes('induction') || path.includes('الاستقراء-الرياضي') || path.includes('الاستقراء-القوي') || path.includes('الترتيب-الجيد')))
  ) {
    return {
      view: 'quiz',
      domainId: 'advanced-math',
      subcategoryId: 'discrete-mathematics',
      topicId: 'discrete-induction-proofs',
      testId: 'discrete-induction-proofs',
    };
  }

  if (
    path.includes('discrete-applied-crypto-networks') ||
    (isDiscreteMathRoute && (path.includes('crypto') || path.includes('تشفير') || path.includes('قيصر') || path.includes('rsa') || path.includes('التدفق-الشبكي') || path.includes('max-flow')))
  ) {
    return {
      view: 'quiz',
      domainId: 'advanced-math',
      subcategoryId: 'discrete-mathematics',
      topicId: 'discrete-applied-crypto-networks',
      testId: 'discrete-applied-crypto-networks',
    };
  }

  // ==================== MATHEMATICAL LOGIC QUIZ ROUTES ====================
  const isMathematicalLogicRoute =
    path.includes('/mathematical-logic') ||
    path.includes('المنطق-الرياضي') ||
    path.includes('mathematical-logic') ||
    path.includes('المنطق');

  if (
    path === 'domain/advanced-math/mathematical-logic' ||
    path === '/domain/advanced-math/mathematical-logic' ||
    path === 'domain/advanced-math/المنطق-الرياضي' ||
    path === '/domain/advanced-math/المنطق-الرياضي'
  ) {
    return {
      view: 'quiz',
      domainId: 'advanced-math',
      subcategoryId: 'mathematical-logic',
    };
  }

  if (
    path.includes('propositions-truth-values') ||
    (isMathematicalLogicRoute && (path.includes('propositions') || path.includes('truth-values') || path.includes('العبارات-الرياضية') || path.includes('قيم-الصواب')))
  ) {
    return {
      view: 'quiz',
      domainId: 'advanced-math',
      subcategoryId: 'mathematical-logic',
      topicId: 'propositions-truth-values',
      testId: 'propositions-truth-values',
    };
  }

  if (
    path.includes('negation-conjunction-and') ||
    (isMathematicalLogicRoute && (path.includes('negation') || path.includes('conjunction') || path.includes('النفي') || path.includes('أداة-الوصل')))
  ) {
    return {
      view: 'quiz',
      domainId: 'advanced-math',
      subcategoryId: 'mathematical-logic',
      topicId: 'negation-conjunction-and',
      testId: 'negation-conjunction-and',
    };
  }

  if (
    path.includes('disjunction-or-xor') ||
    (isMathematicalLogicRoute && (path.includes('disjunction') || path.includes('xor') || path.includes('أداة-الفصل') || path.includes('الفصل-الاستثنائي')))
  ) {
    return {
      view: 'quiz',
      domainId: 'advanced-math',
      subcategoryId: 'mathematical-logic',
      topicId: 'disjunction-or-xor',
      testId: 'disjunction-or-xor',
    };
  }

  if (
    path.includes('conditional-statements') ||
    (isMathematicalLogicRoute && (path.includes('conditional') || path.includes('العبارات-الشرطية') || path.includes('إذا-كان-فإن')))
  ) {
    return {
      view: 'quiz',
      domainId: 'advanced-math',
      subcategoryId: 'mathematical-logic',
      topicId: 'conditional-statements',
      testId: 'conditional-statements',
    };
  }

  if (
    path.includes('biconditional-statements') ||
    (isMathematicalLogicRoute && (path.includes('biconditional') || path.includes('الشرطية-الثنائية') || path.includes('إذا-وفقط-إذا')))
  ) {
    return {
      view: 'quiz',
      domainId: 'advanced-math',
      subcategoryId: 'mathematical-logic',
      topicId: 'biconditional-statements',
      testId: 'biconditional-statements',
    };
  }

  if (
    path.includes('converse-inverse-contrapositive') ||
    (isMathematicalLogicRoute && (path.includes('converse') || path.includes('contrapositive') || path.includes('العكس') || path.includes('المعكوس') || path.includes('المعاكس-الإيجابي') || path.includes('الماصدق-العكسي')))
  ) {
    return {
      view: 'quiz',
      domainId: 'advanced-math',
      subcategoryId: 'mathematical-logic',
      topicId: 'converse-inverse-contrapositive',
      testId: 'converse-inverse-contrapositive',
    };
  }

  if (
    path.includes('tautology-contradiction-contingency') ||
    (isMathematicalLogicRoute && (path.includes('tautology') || path.includes('contradiction') || path.includes('contingency') || path.includes('تحصيل-الحاصل') || path.includes('التناقض') || path.includes('الإمكان')))
  ) {
    return {
      view: 'quiz',
      domainId: 'advanced-math',
      subcategoryId: 'mathematical-logic',
      topicId: 'tautology-contradiction-contingency',
      testId: 'tautology-contradiction-contingency',
    };
  }

  if (
    path.includes('logical-equivalence-demorgan') ||
    (isMathematicalLogicRoute && (path.includes('logical-equivalence') || path.includes('demorgan') || path.includes('de-morgan') || path.includes('التكافؤ-المنطقي') || path.includes('دي-مورجان')))
  ) {
    return {
      view: 'quiz',
      domainId: 'advanced-math',
      subcategoryId: 'mathematical-logic',
      topicId: 'logical-equivalence-demorgan',
      testId: 'logical-equivalence-demorgan',
    };
  }

  if (
    path.includes('quantifiers-universal-existential') ||
    (isMathematicalLogicRoute && (path.includes('quantifiers') || path.includes('universal') || path.includes('existential') || path.includes('المكممات') || path.includes('المكمم-الكلي') || path.includes('المكمم-الوجودي')))
  ) {
    return {
      view: 'quiz',
      domainId: 'advanced-math',
      subcategoryId: 'mathematical-logic',
      topicId: 'quantifiers-universal-existential',
      testId: 'quantifiers-universal-existential',
    };
  }

  if (
    path.includes('rules-of-inference') ||
    (isMathematicalLogicRoute && (path.includes('inference') || path.includes('modus-ponens') || path.includes('modus-tollens') || path.includes('قواعد-الاستدلال') || path.includes('البرهان-المنطقي')))
  ) {
    return {
      view: 'quiz',
      domainId: 'advanced-math',
      subcategoryId: 'mathematical-logic',
      topicId: 'rules-of-inference',
      testId: 'rules-of-inference',
    };
  }

  if (
    path.includes('mathematical-proof-methods') ||
    (isMathematicalLogicRoute && (path.includes('proof-methods') || path.includes('طرق-البرهان') || path.includes('البرهان-المباشر') || path.includes('الاستقراء-الرياضي') || path.includes('البرهان-بالتناقض')))
  ) {
    return {
      view: 'quiz',
      domainId: 'advanced-math',
      subcategoryId: 'mathematical-logic',
      topicId: 'mathematical-proof-methods',
      testId: 'mathematical-proof-methods',
    };
  }

  if (
    path.includes('logic-gates-applications') ||
    (isMathematicalLogicRoute && (path.includes('logic-gates') || path.includes('الدوائر-المنطقية') || path.includes('البوابات-المنطقية') || path.includes('المسائل-الكلامية')))
  ) {
    return {
      view: 'quiz',
      domainId: 'advanced-math',
      subcategoryId: 'mathematical-logic',
      topicId: 'logic-gates-applications',
      testId: 'logic-gates-applications',
    };
  }

  // ==================== COMPLEX NUMBERS QUIZ ROUTES ====================
  const isComplexNumbersRoute =
    path.includes('/complex-numbers') ||
    path.includes('الأعداد-المركبة') ||
    path.includes('complex-numbers') ||
    path.includes('الأعداد-التخيلية') ||
    path.includes('العدد-التخيلي');

  if (
    path === 'domain/advanced-math/complex-numbers' ||
    path === '/domain/advanced-math/complex-numbers' ||
    path === 'domain/advanced-math/الأعداد-المركبة' ||
    path === '/domain/advanced-math/الأعداد-المركبة'
  ) {
    return {
      view: 'quiz',
      domainId: 'advanced-math',
      subcategoryId: 'complex-numbers',
    };
  }

  if (
    path.includes('imaginary-unit-powers') ||
    (isComplexNumbersRoute && (path.includes('imaginary-unit') || path.includes('قوى-i') || path.includes('العدد-التخيلي-i') || path.includes('قوى-العدد-التخيلي')))
  ) {
    return {
      view: 'quiz',
      domainId: 'advanced-math',
      subcategoryId: 'complex-numbers',
      topicId: 'imaginary-unit-powers',
      testId: 'imaginary-unit-powers',
    };
  }

  if (
    path.includes('standard-form-complex-numbers') ||
    (isComplexNumbersRoute && (path.includes('standard-form') || path.includes('الصورة-القياسية') || path.includes('الحقيقي-والتخيلي')))
  ) {
    return {
      view: 'quiz',
      domainId: 'advanced-math',
      subcategoryId: 'complex-numbers',
      topicId: 'standard-form-complex-numbers',
      testId: 'standard-form-complex-numbers',
    };
  }

  if (
    path.includes('complex-basic-operations') ||
    (isComplexNumbersRoute && (path.includes('basic-operations') || path.includes('العمليات-الأساسية') || path.includes('جمع-وطرح-وضرب')))
  ) {
    return {
      view: 'quiz',
      domainId: 'advanced-math',
      subcategoryId: 'complex-numbers',
      topicId: 'complex-basic-operations',
      testId: 'complex-basic-operations',
    };
  }

  if (
    path.includes('complex-conjugate-division') ||
    (isComplexNumbersRoute && (path.includes('conjugate') || path.includes('المرافق-المركب') || path.includes('قسمة-الأعداد-المركبة') || path.includes('المرافق')))
  ) {
    return {
      view: 'quiz',
      domainId: 'advanced-math',
      subcategoryId: 'complex-numbers',
      topicId: 'complex-conjugate-division',
      testId: 'complex-conjugate-division',
    };
  }

  if (
    path.includes('modulus-argument-complex') ||
    (isComplexNumbersRoute && (path.includes('modulus-argument') || path.includes('المقياس-والسعة') || path.includes('القيمة-المطلقة-والسعة') || path.includes('السعة')))
  ) {
    return {
      view: 'quiz',
      domainId: 'advanced-math',
      subcategoryId: 'complex-numbers',
      topicId: 'modulus-argument-complex',
      testId: 'modulus-argument-complex',
    };
  }

  if (
    path.includes('argand-plane-representation') ||
    (isComplexNumbersRoute && (path.includes('argand') || path.includes('أرغاند') || path.includes('مستوى-أرغاند') || path.includes('التمثيل-البياني')))
  ) {
    return {
      view: 'quiz',
      domainId: 'advanced-math',
      subcategoryId: 'complex-numbers',
      topicId: 'argand-plane-representation',
      testId: 'argand-plane-representation',
    };
  }

  if (
    path.includes('polar-trigonometric-form') ||
    (isComplexNumbersRoute && (path.includes('polar-form') || path.includes('الصورة-القطبية') || path.includes('الصورة-المثلثية') || path.includes('trigonometric')))
  ) {
    return {
      view: 'quiz',
      domainId: 'advanced-math',
      subcategoryId: 'complex-numbers',
      topicId: 'polar-trigonometric-form',
      testId: 'polar-trigonometric-form',
    };
  }

  if (
    path.includes('exponential-form-euler') ||
    (isComplexNumbersRoute && (path.includes('euler') || path.includes('أويلر') || path.includes('الصورة-الأسية') || path.includes('صيغة-أويلر')))
  ) {
    return {
      view: 'quiz',
      domainId: 'advanced-math',
      subcategoryId: 'complex-numbers',
      topicId: 'exponential-form-euler',
      testId: 'exponential-form-euler',
    };
  }

  if (
    path.includes('de-moivre-theorem-powers') ||
    (isComplexNumbersRoute && (path.includes('de-moivre') || path.includes('ديموافر') || path.includes('دي-موافر') || path.includes('رفع-الأعداد-المركبة-لقوة')))
  ) {
    return {
      view: 'quiz',
      domainId: 'advanced-math',
      subcategoryId: 'complex-numbers',
      topicId: 'de-moivre-theorem-powers',
      testId: 'de-moivre-theorem-powers',
    };
  }

  if (
    path.includes('roots-of-complex-numbers') ||
    (isComplexNumbersRoute && (path.includes('roots') || path.includes('الجذور-النونية') || path.includes('جذور-الوحدة') || path.includes('الجذور-التربيعية-والتكعيبية')))
  ) {
    return {
      view: 'quiz',
      domainId: 'advanced-math',
      subcategoryId: 'complex-numbers',
      topicId: 'roots-of-complex-numbers',
      testId: 'roots-of-complex-numbers',
    };
  }

  if (
    path.includes('complex-quadratic-cubic-equations') ||
    (isComplexNumbersRoute && (path.includes('quadratic-cubic') || path.includes('المعادلات-التربيعية') || path.includes('معادلات-مركبة') || path.includes('المميز-السالب')))
  ) {
    return {
      view: 'quiz',
      domainId: 'advanced-math',
      subcategoryId: 'complex-numbers',
      topicId: 'complex-quadratic-cubic-equations',
      testId: 'complex-quadratic-cubic-equations',
    };
  }

  if (
    path.includes('complex-numbers-applications-circuits') ||
    (isComplexNumbersRoute && (path.includes('applications') || path.includes('الدوائر-الكهربائية') || path.includes('المعاوقة') || path.includes('المسائل-الكلامية')))
  ) {
    return {
      view: 'quiz',
      domainId: 'advanced-math',
      subcategoryId: 'complex-numbers',
      topicId: 'complex-numbers-applications-circuits',
      testId: 'complex-numbers-applications-circuits',
    };
  }

  // ==================== LINEAR ALGEBRA QUIZ ROUTES ====================
  const isLinearAlgebraRoute =
    path.includes('/linear-algebra') ||
    path.includes('الجبر-الخطي') ||
    path.includes('linear-algebra') ||
    path.includes('المصفوفات') ||
    path.includes('المتجهات');

  if (
    path === 'domain/advanced-math/linear-algebra' ||
    path === '/domain/advanced-math/linear-algebra' ||
    path === 'domain/advanced-math/الجبر-الخطي' ||
    path === '/domain/advanced-math/الجبر-الخطي'
  ) {
    return {
      view: 'quiz',
      domainId: 'advanced-math',
      subcategoryId: 'linear-algebra',
    };
  }

  if (
    path.includes('vectors-operations') ||
    (isLinearAlgebraRoute && (path.includes('vectors') || path.includes('المتجهات-في-المستوى') || path.includes('عمليات-المتجهات')))
  ) {
    return {
      view: 'quiz',
      domainId: 'advanced-math',
      subcategoryId: 'linear-algebra',
      topicId: 'vectors-operations',
      testId: 'vectors-operations',
    };
  }

  if (
    path.includes('dot-cross-product-orthogonality') ||
    (isLinearAlgebraRoute && (path.includes('dot-cross') || path.includes('الضرب-القياسي') || path.includes('الضرب-الاتجاهي') || path.includes('التعامد')))
  ) {
    return {
      view: 'quiz',
      domainId: 'advanced-math',
      subcategoryId: 'linear-algebra',
      topicId: 'dot-cross-product-orthogonality',
      testId: 'dot-cross-product-orthogonality',
    };
  }

  if (
    path.includes('matrix-operations-types') ||
    (isLinearAlgebraRoute && (path.includes('matrix-operations') || path.includes('ضرب-المصفوفات') || path.includes('المصفوفة')))
  ) {
    return {
      view: 'quiz',
      domainId: 'advanced-math',
      subcategoryId: 'linear-algebra',
      topicId: 'matrix-operations-types',
      testId: 'matrix-operations-types',
    };
  }

  if (
    path.includes('determinants-properties-calculation') ||
    (isLinearAlgebraRoute && (path.includes('determinants') || path.includes('المحددات') || path.includes('محدد-المصفوفة')))
  ) {
    return {
      view: 'quiz',
      domainId: 'advanced-math',
      subcategoryId: 'linear-algebra',
      topicId: 'determinants-properties-calculation',
      testId: 'determinants-properties-calculation',
    };
  }

  if (
    path.includes('matrix-inverse-methods') ||
    (isLinearAlgebraRoute && (path.includes('matrix-inverse') || path.includes('معكوس-المصفوفة') || path.includes('المصفوفة-الملحقة')))
  ) {
    return {
      view: 'quiz',
      domainId: 'advanced-math',
      subcategoryId: 'linear-algebra',
      topicId: 'matrix-inverse-methods',
      testId: 'matrix-inverse-methods',
    };
  }

  if (
    path.includes('cramers-rule-linear-systems') ||
    (isLinearAlgebraRoute && (path.includes('cramers-rule') || path.includes('طريقة-كرامر') || path.includes('كرامر')))
  ) {
    return {
      view: 'quiz',
      domainId: 'advanced-math',
      subcategoryId: 'linear-algebra',
      topicId: 'cramers-rule-linear-systems',
      testId: 'cramers-rule-linear-systems',
    };
  }

  if (
    path.includes('gaussian-elimination-echelon') ||
    (isLinearAlgebraRoute && (path.includes('gaussian-elimination') || path.includes('الحذف-لـ-جاوس') || path.includes('جاوس-جوردان') || path.includes('echelon') || path.includes('RREF')))
  ) {
    return {
      view: 'quiz',
      domainId: 'advanced-math',
      subcategoryId: 'linear-algebra',
      topicId: 'gaussian-elimination-echelon',
      testId: 'gaussian-elimination-echelon',
    };
  }

  if (
    path.includes('vector-spaces-subspaces') ||
    (isLinearAlgebraRoute && (path.includes('vector-spaces') || path.includes('الفضاءات-الشعاعية') || path.includes('فضاء-جزئي')))
  ) {
    return {
      view: 'quiz',
      domainId: 'advanced-math',
      subcategoryId: 'linear-algebra',
      topicId: 'vector-spaces-subspaces',
      testId: 'vector-spaces-subspaces',
    };
  }

  if (
    path.includes('linear-independence-dependence') ||
    (isLinearAlgebraRoute && (path.includes('linear-independence') || path.includes('الاستقلال-الخطي') || path.includes('الارتباط-الخطي')))
  ) {
    return {
      view: 'quiz',
      domainId: 'advanced-math',
      subcategoryId: 'linear-algebra',
      topicId: 'linear-independence-dependence',
      testId: 'linear-independence-dependence',
    };
  }

  if (
    path.includes('basis-dimension-vector-spaces') ||
    (isLinearAlgebraRoute && (path.includes('basis-dimension') || path.includes('الأساس-والبعد') || path.includes('الرتبة-والنواة')))
  ) {
    return {
      view: 'quiz',
      domainId: 'advanced-math',
      subcategoryId: 'linear-algebra',
      topicId: 'basis-dimension-vector-spaces',
      testId: 'basis-dimension-vector-spaces',
    };
  }

  if (
    path.includes('linear-transformations-matrices') ||
    (isLinearAlgebraRoute && (path.includes('linear-transformations') || path.includes('التحويلات-الخطية') || path.includes('مصفوفة-التحويل')))
  ) {
    return {
      view: 'quiz',
      domainId: 'advanced-math',
      subcategoryId: 'linear-algebra',
      topicId: 'linear-transformations-matrices',
      testId: 'linear-transformations-matrices',
    };
  }

  if (
    path.includes('eigenvalues-eigenvectors') ||
    (isLinearAlgebraRoute && (path.includes('eigenvalues') || path.includes('eigenvectors') || path.includes('القيم-الذاتية') || path.includes('المتجهات-الذاتية') || path.includes('التقطير')))
  ) {
    return {
      view: 'quiz',
      domainId: 'advanced-math',
      subcategoryId: 'linear-algebra',
      topicId: 'eigenvalues-eigenvectors',
      testId: 'eigenvalues-eigenvectors',
    };
  }

  // ==================== PROBABILITY DISTRIBUTIONS QUIZ ROUTES ====================
  const isDistributionsRoute =
    path.includes('/probability-distributions') ||
    path.includes('التوزيعات-الاحتمالية') ||
    path.includes('توزيعات') ||
    path.includes('توزيع');

  if (
    path === 'domain/statistics-probability/probability-distributions' ||
    path === '/domain/statistics-probability/probability-distributions' ||
    path === 'domain/statistics-probability/التوزيعات-الاحتمالية' ||
    path === '/domain/statistics-probability/التوزيعات-الاحتمالية'
  ) {
    return {
      view: 'quiz',
      domainId: 'statistics-probability',
      subcategoryId: 'probability-distributions',
    };
  }

  if (
    path.includes('random-variables-types') ||
    (isDistributionsRoute && (path.includes('random-variables') || path.includes('المتغير-العشوائي') || path.includes('منفصل-ومتصل')))
  ) {
    return {
      view: 'quiz',
      domainId: 'statistics-probability',
      subcategoryId: 'probability-distributions',
      topicId: 'random-variables-types',
      testId: 'random-variables-types',
    };
  }

  if (
    path.includes('discrete-probability-distributions-expected-value') ||
    (isDistributionsRoute && (path.includes('expected-value') || path.includes('القيمة-المتوقعة') || path.includes('الأمل-الرياضي') || path.includes('كتلة-احتمالية')))
  ) {
    return {
      view: 'quiz',
      domainId: 'statistics-probability',
      subcategoryId: 'probability-distributions',
      topicId: 'discrete-probability-distributions-expected-value',
      testId: 'discrete-probability-distributions-expected-value',
    };
  }

  if (
    path.includes('variance-standard-deviation-discrete') ||
    (isDistributionsRoute && (path.includes('variance') || path.includes('التباين') || path.includes('الانحراف-المعياري-للمنفصل')))
  ) {
    return {
      view: 'quiz',
      domainId: 'statistics-probability',
      subcategoryId: 'probability-distributions',
      topicId: 'variance-standard-deviation-discrete',
      testId: 'variance-standard-deviation-discrete',
    };
  }

  if (
    path.includes('binomial-distribution-properties') ||
    (isDistributionsRoute && (path.includes('binomial-properties') || path.includes('خصائص-ذات-الحدين') || path.includes('شروط-برنولي')))
  ) {
    return {
      view: 'quiz',
      domainId: 'statistics-probability',
      subcategoryId: 'probability-distributions',
      topicId: 'binomial-distribution-properties',
      testId: 'binomial-distribution-properties',
    };
  }

  if (
    path.includes('binomial-probability-calculations') ||
    (isDistributionsRoute && (path.includes('binomial-calculations') || path.includes('حساب-ذات-الحدين') || path.includes('قانون-ذات-الحدين')))
  ) {
    return {
      view: 'quiz',
      domainId: 'statistics-probability',
      subcategoryId: 'probability-distributions',
      topicId: 'binomial-probability-calculations',
      testId: 'binomial-probability-calculations',
    };
  }

  if (
    path.includes('poisson-distribution') ||
    (isDistributionsRoute && (path.includes('poisson') || path.includes('بواسون') || path.includes('الأحداث-النادرة')))
  ) {
    return {
      view: 'quiz',
      domainId: 'statistics-probability',
      subcategoryId: 'probability-distributions',
      topicId: 'poisson-distribution',
      testId: 'poisson-distribution',
    };
  }

  if (
    path.includes('geometric-distribution') ||
    (isDistributionsRoute && (path.includes('geometric') || path.includes('الهندسي') || path.includes('أول-نجاح') || path.includes('فقدان-الذاكرة')))
  ) {
    return {
      view: 'quiz',
      domainId: 'statistics-probability',
      subcategoryId: 'probability-distributions',
      topicId: 'geometric-distribution',
      testId: 'geometric-distribution',
    };
  }

  if (
    path.includes('hypergeometric-distribution') ||
    (isDistributionsRoute && (path.includes('hypergeometric') || path.includes('الهندسي-الفائق') || path.includes('فوق-الهندسي') || path.includes('بدون-إرجاع')))
  ) {
    return {
      view: 'quiz',
      domainId: 'statistics-probability',
      subcategoryId: 'probability-distributions',
      topicId: 'hypergeometric-distribution',
      testId: 'hypergeometric-distribution',
    };
  }

  if (
    path.includes('continuous-distributions-pdf') ||
    (isDistributionsRoute && (path.includes('continuous') || path.includes('كثافة-الاحتمال') || path.includes('التكامل-الاحتمالي') || path.includes('pdf')))
  ) {
    return {
      view: 'quiz',
      domainId: 'statistics-probability',
      subcategoryId: 'probability-distributions',
      topicId: 'continuous-distributions-pdf',
      testId: 'continuous-distributions-pdf',
    };
  }

  if (
    path.includes('normal-distribution-empirical-rule') ||
    (isDistributionsRoute && (path.includes('empirical-rule') || path.includes('القاعدة-التجريبية') || path.includes('المنحنى-الجرسي') || path.includes('توزيع-طبيعي')))
  ) {
    return {
      view: 'quiz',
      domainId: 'statistics-probability',
      subcategoryId: 'probability-distributions',
      topicId: 'normal-distribution-empirical-rule',
      testId: 'normal-distribution-empirical-rule',
    };
  }

  if (
    path.includes('standard-normal-z-score') ||
    (isDistributionsRoute && (path.includes('z-score') || path.includes('الدرجة-المعيارية') || path.includes('طبيعي-معياري') || path.includes('جدول-z')))
  ) {
    return {
      view: 'quiz',
      domainId: 'statistics-probability',
      subcategoryId: 'probability-distributions',
      topicId: 'standard-normal-z-score',
      testId: 'standard-normal-z-score',
    };
  }

  if (
    path.includes('normal-approximation-to-binomial') ||
    (isDistributionsRoute && (path.includes('approximation') || path.includes('تقريب-ذات-الحدين') || path.includes('تصحيح-الاستمرارية') || path.includes('continuity-correction')))
  ) {
    return {
      view: 'quiz',
      domainId: 'statistics-probability',
      subcategoryId: 'probability-distributions',
      topicId: 'normal-approximation-to-binomial',
      testId: 'normal-approximation-to-binomial',
    };
  }

  if (
    path.includes('applied-distributions-word-problems') ||
    (isDistributionsRoute && (path.includes('applied-distributions') || path.includes('تطبيقات-التوزيعات') || path.includes('مسائل-التوزيعات')))
  ) {
    return {
      view: 'quiz',
      domainId: 'statistics-probability',
      subcategoryId: 'probability-distributions',
      topicId: 'applied-distributions-word-problems',
      testId: 'applied-distributions-word-problems',
    };
  }

  // ==================== PERMUTATIONS & COMBINATIONS QUIZ ROUTES ====================
  const isCombinatoricsRoute =
    path.includes('/permutations-combinations') ||
    path.includes('التباديل-والتوافيق') ||
    path.includes('تباديل') ||
    path.includes('توافيق');

  if (
    path === 'domain/statistics-probability/permutations-combinations' ||
    path === '/domain/statistics-probability/permutations-combinations' ||
    path === 'domain/statistics-probability/التباديل-والتوافيق' ||
    path === '/domain/statistics-probability/التباديل-والتوافيق'
  ) {
    return {
      view: 'quiz',
      domainId: 'statistics-probability',
      subcategoryId: 'permutations-combinations',
    };
  }

  if (
    path.includes('fundamental-counting-principle') ||
    (isCombinatoricsRoute && (path.includes('counting-principle') || path.includes('مبدأ-العد') || path.includes('قاعدة-الضرب')))
  ) {
    return {
      view: 'quiz',
      domainId: 'statistics-probability',
      subcategoryId: 'permutations-combinations',
      topicId: 'fundamental-counting-principle',
      testId: 'fundamental-counting-principle',
    };
  }

  if (
    path.includes('factorial-operations') ||
    (isCombinatoricsRoute && (path.includes('factorial') || path.includes('المضروب') || path.includes('العاملي')))
  ) {
    return {
      view: 'quiz',
      domainId: 'statistics-probability',
      subcategoryId: 'permutations-combinations',
      topicId: 'factorial-operations',
      testId: 'factorial-operations',
    };
  }

  if (
    path.includes('linear-permutations') ||
    (isCombinatoricsRoute && (path.includes('linear') || path.includes('الخطية') || path.includes('بدون-تكرار')))
  ) {
    return {
      view: 'quiz',
      domainId: 'statistics-probability',
      subcategoryId: 'permutations-combinations',
      topicId: 'linear-permutations',
      testId: 'linear-permutations',
    };
  }

  if (
    path.includes('partial-permutations') ||
    (isCombinatoricsRoute && (path.includes('partial') || path.includes('الجزئية') || path.includes('npr')))
  ) {
    return {
      view: 'quiz',
      domainId: 'statistics-probability',
      subcategoryId: 'permutations-combinations',
      topicId: 'partial-permutations',
      testId: 'partial-permutations',
    };
  }

  if (
    path.includes('permutations-with-repetition') ||
    (isCombinatoricsRoute && (path.includes('repetition') || path.includes('مع-التكرار') || path.includes('المتماثلة') || path.includes('مشمش')))
  ) {
    return {
      view: 'quiz',
      domainId: 'statistics-probability',
      subcategoryId: 'permutations-combinations',
      topicId: 'permutations-with-repetition',
      testId: 'permutations-with-repetition',
    };
  }

  if (
    path.includes('circular-permutations') ||
    (isCombinatoricsRoute && (path.includes('circular') || path.includes('الدائرية') || path.includes('طاولة') || path.includes('سوار')))
  ) {
    return {
      view: 'quiz',
      domainId: 'statistics-probability',
      subcategoryId: 'permutations-combinations',
      topicId: 'circular-permutations',
      testId: 'circular-permutations',
    };
  }

  if (
    path.includes('combinations-fundamentals') ||
    (isCombinatoricsRoute && (path.includes('combinations') || path.includes('التوافيق-الأساسي') || path.includes('اللجان') || path.includes('ncr')))
  ) {
    return {
      view: 'quiz',
      domainId: 'statistics-probability',
      subcategoryId: 'permutations-combinations',
      topicId: 'combinations-fundamentals',
      testId: 'combinations-fundamentals',
    };
  }

  if (
    path.includes('permutations-vs-combinations') ||
    (isCombinatoricsRoute && (path.includes('vs') || path.includes('مقارنة') || path.includes('التمييز') || path.includes('الترتيب-مهم')))
  ) {
    return {
      view: 'quiz',
      domainId: 'statistics-probability',
      subcategoryId: 'permutations-combinations',
      topicId: 'permutations-vs-combinations',
      testId: 'permutations-vs-combinations',
    };
  }

  if (
    path.includes('combinations-properties-symmetry') ||
    (isCombinatoricsRoute && (path.includes('properties') || path.includes('symmetry') || path.includes('التناظر') || path.includes('خواص-التوافيق')))
  ) {
    return {
      view: 'quiz',
      domainId: 'statistics-probability',
      subcategoryId: 'permutations-combinations',
      topicId: 'combinations-properties-symmetry',
      testId: 'combinations-properties-symmetry',
    };
  }

  if (
    path.includes('binomial-theorem-pascals-triangle') ||
    (isCombinatoricsRoute && (path.includes('binomial') || path.includes('pascal') || path.includes('ذات-الحدين') || path.includes('باسكال')))
  ) {
    return {
      view: 'quiz',
      domainId: 'statistics-probability',
      subcategoryId: 'permutations-combinations',
      topicId: 'binomial-theorem-pascals-triangle',
      testId: 'binomial-theorem-pascals-triangle',
    };
  }

  if (
    path.includes('inclusion-exclusion-pigeonhole') ||
    (isCombinatoricsRoute && (path.includes('inclusion') || path.includes('exclusion') || path.includes('pigeonhole') || path.includes('الشمول-والاستبعاد') || path.includes('برج-الحمام')))
  ) {
    return {
      view: 'quiz',
      domainId: 'statistics-probability',
      subcategoryId: 'permutations-combinations',
      topicId: 'inclusion-exclusion-pigeonhole',
      testId: 'inclusion-exclusion-pigeonhole',
    };
  }

  if (
    path.includes('applied-combinatorics-word-problems') ||
    (isCombinatoricsRoute && (path.includes('applied') || path.includes('word-problems') || path.includes('المسائل-الكلامية') || path.includes('التطبيقية')))
  ) {
    return {
      view: 'quiz',
      domainId: 'statistics-probability',
      subcategoryId: 'permutations-combinations',
      topicId: 'applied-combinatorics-word-problems',
      testId: 'applied-combinatorics-word-problems',
    };
  }

  // ==================== PROBABILITY QUIZ ROUTES ====================
  const isProbabilityRoute =
    path.includes('/probability') ||
    path.includes('احتمالات') ||
    path.includes('الاحتمالات') ||
    path.includes('نظرية-الاحتمالات');

  if (
    path === 'domain/statistics-probability/probability' ||
    path === '/domain/statistics-probability/probability' ||
    path === 'domain/statistics-probability/الاحتمالات' ||
    path === '/domain/statistics-probability/الاحتمالات'
  ) {
    return {
      view: 'quiz',
      domainId: 'statistics-probability',
      subcategoryId: 'probability',
    };
  }

  if (
    path.includes('basic-theoretical-experimental-probability') ||
    (isProbabilityRoute && (path.includes('experimental') || path.includes('الاحتمال-الأساسي') || path.includes('التجريبي') || path.includes('النظري')))
  ) {
    return {
      view: 'quiz',
      domainId: 'statistics-probability',
      subcategoryId: 'probability',
      topicId: 'basic-theoretical-experimental-probability',
      testId: 'basic-theoretical-experimental-probability',
    };
  }

  if (
    path.includes('sample-space-counting-principles') ||
    (isProbabilityRoute && (path.includes('sample-space') || path.includes('فضاء-العينة') || path.includes('طرائق-العد') || path.includes('مبدأ-العد')))
  ) {
    return {
      view: 'quiz',
      domainId: 'statistics-probability',
      subcategoryId: 'probability',
      topicId: 'sample-space-counting-principles',
      testId: 'sample-space-counting-principles',
    };
  }

  if (
    path.includes('geometric-probability') ||
    (isProbabilityRoute && (path.includes('geometric') || path.includes('الاحتمال-الهندسي') || path.includes('المساحات')))
  ) {
    return {
      view: 'quiz',
      domainId: 'statistics-probability',
      subcategoryId: 'probability',
      topicId: 'geometric-probability',
      testId: 'geometric-probability',
    };
  }

  if (
    path.includes('simple-compound-complementary-events') ||
    (isProbabilityRoute && (path.includes('complementary') || path.includes('الحوادث-البسيطة') || path.includes('الحادث-المتمم') || path.includes('المتمم') || path.includes('المركبة')))
  ) {
    return {
      view: 'quiz',
      domainId: 'statistics-probability',
      subcategoryId: 'probability',
      topicId: 'simple-compound-complementary-events',
      testId: 'simple-compound-complementary-events',
    };
  }

  if (
    path.includes('conditional-probability-multiplication-rule') ||
    (isProbabilityRoute && (path.includes('conditional') || path.includes('الاحتمال-المشروط') || path.includes('المشروط') || path.includes('قاعدة-الضرب')))
  ) {
    return {
      view: 'quiz',
      domainId: 'statistics-probability',
      subcategoryId: 'probability',
      topicId: 'conditional-probability-multiplication-rule',
      testId: 'conditional-probability-multiplication-rule',
    };
  }

  if (
    path.includes('independent-dependent-events') ||
    (isProbabilityRoute && (path.includes('independent') || path.includes('الحوادث-المستقلة') || path.includes('المستقلة') || path.includes('غير-المستقلة')))
  ) {
    return {
      view: 'quiz',
      domainId: 'statistics-probability',
      subcategoryId: 'probability',
      topicId: 'independent-dependent-events',
      testId: 'independent-dependent-events',
    };
  }

  if (
    path.includes('mutually-exclusive-overlapping-events') ||
    (isProbabilityRoute && (path.includes('mutually-exclusive') || path.includes('المتنافية') || path.includes('غير-المتنافية') || path.includes('المانعة-بالتبادل') || path.includes('قاعدة-الجمع')))
  ) {
    return {
      view: 'quiz',
      domainId: 'statistics-probability',
      subcategoryId: 'probability',
      topicId: 'mutually-exclusive-overlapping-events',
      testId: 'mutually-exclusive-overlapping-events',
    };
  }

  if (
    path.includes('permutations-combinations-probability') ||
    (isProbabilityRoute && (path.includes('permutations') || path.includes('التباديل-والتوافيق') || path.includes('التباديل') || path.includes('التوافيق')))
  ) {
    return {
      view: 'quiz',
      domainId: 'statistics-probability',
      subcategoryId: 'probability',
      topicId: 'permutations-combinations-probability',
      testId: 'permutations-combinations-probability',
    };
  }

  if (
    path.includes('bayes-theorem-total-probability') ||
    (isProbabilityRoute && (path.includes('bayes') || path.includes('بايز') || path.includes('مبرهنة-بايز') || path.includes('الاحتمال-الكلي')))
  ) {
    return {
      view: 'quiz',
      domainId: 'statistics-probability',
      subcategoryId: 'probability',
      topicId: 'bayes-theorem-total-probability',
      testId: 'bayes-theorem-total-probability',
    };
  }

  if (
    path.includes('discrete-random-variables-distributions') ||
    (isProbabilityRoute && (path.includes('discrete') || path.includes('المتغيرات-العشوائية') || path.includes('القيمة-المتوقعة') || path.includes('التوقع-الرياضي')))
  ) {
    return {
      view: 'quiz',
      domainId: 'statistics-probability',
      subcategoryId: 'probability',
      topicId: 'discrete-random-variables-distributions',
      testId: 'discrete-random-variables-distributions',
    };
  }

  if (
    path.includes('binomial-probability-distribution') ||
    (isProbabilityRoute && (path.includes('binomial') || path.includes('ذو-الحدين') || path.includes('ذات-الحدين') || path.includes('برنولي')))
  ) {
    return {
      view: 'quiz',
      domainId: 'statistics-probability',
      subcategoryId: 'probability',
      topicId: 'binomial-probability-distribution',
      testId: 'binomial-probability-distribution',
    };
  }

  if (
    path.includes('applied-probability-word-problems') ||
    (isProbabilityRoute && (path.includes('word-problems') || path.includes('تطبيقات-حياتية') || path.includes('مسائل') || path.includes('تحليل-المخاطر') || path.includes('التوقع')))
  ) {
    return {
      view: 'quiz',
      domainId: 'statistics-probability',
      subcategoryId: 'probability',
      topicId: 'applied-probability-word-problems',
      testId: 'applied-probability-word-problems',
    };
  }

  // ==================== DATA ANALYSIS QUIZ ROUTES ====================
  const isDataAnalysisRoute =
    path.includes('/data-analysis') ||
    path.includes('data_analysis') ||
    path.includes('تحليل-البيانات') ||
    path.includes('تحليل_البيانات');

  if (
    path === 'domain/statistics-probability/data-analysis' ||
    path === '/domain/statistics-probability/data-analysis' ||
    path === 'domain/statistics-probability/تحليل-البيانات' ||
    path === '/domain/statistics-probability/تحليل-البيانات'
  ) {
    return {
      view: 'quiz',
      domainId: 'statistics-probability',
      subcategoryId: 'data-analysis',
    };
  }

  if (
    path.includes('data-collection-sampling-methods') ||
    (isDataAnalysisRoute && (path.includes('sampling') || path.includes('جمع-البيانات') || path.includes('طرق-اختيار-العينات') || path.includes('العينات')))
  ) {
    return {
      view: 'quiz',
      domainId: 'statistics-probability',
      subcategoryId: 'data-analysis',
      topicId: 'data-collection-sampling-methods',
      testId: 'data-collection-sampling-methods',
    };
  }

  if (
    path.includes('data-visualization-charts') ||
    (isDataAnalysisRoute && (path.includes('visualization') || path.includes('التمثيل-البياني') || path.includes('القطاعات-الدائرية') || path.includes('الأعمدة')))
  ) {
    return {
      view: 'quiz',
      domainId: 'statistics-probability',
      subcategoryId: 'data-analysis',
      topicId: 'data-visualization-charts',
      testId: 'data-visualization-charts',
    };
  }

  if (
    path.includes('frequency-tables-histograms') ||
    (isDataAnalysisRoute && (path.includes('histograms') || path.includes('المدرجات-التكرارية') || path.includes('الجداول-التكرارية') || path.includes('frequency-tables')))
  ) {
    return {
      view: 'quiz',
      domainId: 'statistics-probability',
      subcategoryId: 'data-analysis',
      topicId: 'frequency-tables-histograms',
      testId: 'frequency-tables-histograms',
    };
  }

  if (
    path.includes('dispersion-variability-analysis') ||
    (isDataAnalysisRoute && (path.includes('variability') || path.includes('تحليل-التشتت') || path.includes('مقارنة-مجموعات-البيانات')))
  ) {
    return {
      view: 'quiz',
      domainId: 'statistics-probability',
      subcategoryId: 'data-analysis',
      topicId: 'dispersion-variability-analysis',
      testId: 'dispersion-variability-analysis',
    };
  }

  if (
    path.includes('pearson-spearman-correlation') ||
    (isDataAnalysisRoute && (path.includes('correlation') || path.includes('بيرسون') || path.includes('سبيرمان') || path.includes('معامل-ارتباط')))
  ) {
    return {
      view: 'quiz',
      domainId: 'statistics-probability',
      subcategoryId: 'data-analysis',
      topicId: 'pearson-spearman-correlation',
      testId: 'pearson-spearman-correlation',
    };
  }

  if (
    path.includes('linear-regression-prediction') ||
    (isDataAnalysisRoute && (path.includes('regression') || path.includes('الانحدار') || path.includes('خط-التنبؤ') || path.includes('الانحدار-الخطي')))
  ) {
    return {
      view: 'quiz',
      domainId: 'statistics-probability',
      subcategoryId: 'data-analysis',
      topicId: 'linear-regression-prediction',
      testId: 'linear-regression-prediction',
    };
  }

  if (
    path.includes('two-way-contingency-tables') ||
    (isDataAnalysisRoute && (path.includes('contingency') || path.includes('جداول-التوافق') || path.includes('ثنائية-الاتجاه') || path.includes('two-way')))
  ) {
    return {
      view: 'quiz',
      domainId: 'statistics-probability',
      subcategoryId: 'data-analysis',
      topicId: 'two-way-contingency-tables',
      testId: 'two-way-contingency-tables',
    };
  }

  if (
    path.includes('time-series-trend-analysis') ||
    (isDataAnalysisRoute && (path.includes('time-series') || path.includes('السلاسل-الزمنية') || path.includes('الاتجاهات-العامة')))
  ) {
    return {
      view: 'quiz',
      domainId: 'statistics-probability',
      subcategoryId: 'data-analysis',
      topicId: 'time-series-trend-analysis',
      testId: 'time-series-trend-analysis',
    };
  }

  if (
    path.includes('chi-square-independence-test') ||
    (isDataAnalysisRoute && (path.includes('chi-square') || path.includes('كاي-تربيع') || path.includes('كاي_تربيع') || path.includes('chi_square')))
  ) {
    return {
      view: 'quiz',
      domainId: 'statistics-probability',
      subcategoryId: 'data-analysis',
      topicId: 'chi-square-independence-test',
      testId: 'chi-square-independence-test',
    };
  }

  if (
    path.includes('dashboards-kpis-interpretation') ||
    (isDataAnalysisRoute && (path.includes('dashboards') || path.includes('kpi') || path.includes('لوحات-المعلومات') || path.includes('المؤشرات-الإحصائية')))
  ) {
    return {
      view: 'quiz',
      domainId: 'statistics-probability',
      subcategoryId: 'data-analysis',
      topicId: 'dashboards-kpis-interpretation',
      testId: 'dashboards-kpis-interpretation',
    };
  }

  if (
    path.includes('detecting-bias-misleading-graphs') ||
    (isDataAnalysisRoute && (path.includes('misleading') || path.includes('الرسوم-المضللة') || path.includes('التحيز') || path.includes('bias')))
  ) {
    return {
      view: 'quiz',
      domainId: 'statistics-probability',
      subcategoryId: 'data-analysis',
      topicId: 'detecting-bias-misleading-graphs',
      testId: 'detecting-bias-misleading-graphs',
    };
  }

  if (
    path.includes('data-analysis-word-problems') ||
    (isDataAnalysisRoute && (path.includes('word-problems') || path.includes('المسائل-الكلامية') || path.includes('المسائل-التطبيقية')))
  ) {
    return {
      view: 'quiz',
      domainId: 'statistics-probability',
      subcategoryId: 'data-analysis',
      topicId: 'data-analysis-word-problems',
      testId: 'data-analysis-word-problems',
    };
  }

  // ==================== STATISTICAL MEASURES QUIZ ROUTES ====================
  const isStatMeasuresRoute =
    path.includes('/statistical-measures') ||
    path.includes('statistical_measures') ||
    path.includes('المقاييس-الإحصائية') ||
    path.includes('المقاييس_الإحصائية');

  if (
    path === 'domain/statistics-probability/statistical-measures' ||
    path === '/domain/statistics-probability/statistical-measures' ||
    path === 'domain/statistics-probability/المقاييس-الإحصائية' ||
    path === '/domain/statistics-probability/المقاييس-الإحصائية'
  ) {
    return {
      view: 'quiz',
      domainId: 'statistics-probability',
      subcategoryId: 'statistical-measures',
    };
  }

  if (
    path.includes('mean-central-tendency') ||
    (isStatMeasuresRoute && (path.includes('المتوسط-الحسابي') || path.includes('mean')))
  ) {
    return {
      view: 'quiz',
      domainId: 'statistics-probability',
      subcategoryId: 'statistical-measures',
      topicId: 'mean-central-tendency',
      testId: 'mean-central-tendency',
    };
  }

  if (
    path.includes('median-central-tendency') ||
    (isStatMeasuresRoute && (path.includes('الوسيط') || path.includes('median')))
  ) {
    return {
      view: 'quiz',
      domainId: 'statistics-probability',
      subcategoryId: 'statistical-measures',
      topicId: 'median-central-tendency',
      testId: 'median-central-tendency',
    };
  }

  if (
    path.includes('mode-central-tendency') ||
    (isStatMeasuresRoute && (path.includes('المنوال') || path.includes('mode')))
  ) {
    return {
      view: 'quiz',
      domainId: 'statistics-probability',
      subcategoryId: 'statistical-measures',
      topicId: 'mode-central-tendency',
      testId: 'mode-central-tendency',
    };
  }

  if (
    path.includes('grouped-data-measures') ||
    (isStatMeasuresRoute && (path.includes('البيانات-المبوبة') || path.includes('grouped-data') || path.includes('grouped')))
  ) {
    return {
      view: 'quiz',
      domainId: 'statistics-probability',
      subcategoryId: 'statistical-measures',
      topicId: 'grouped-data-measures',
      testId: 'grouped-data-measures',
    };
  }

  if (
    path.includes('range-and-iqr') ||
    (isStatMeasuresRoute && (path.includes('المدى') || path.includes('range') || path.includes('iqr') || path.includes('المدى-الربيعي')))
  ) {
    return {
      view: 'quiz',
      domainId: 'statistics-probability',
      subcategoryId: 'statistical-measures',
      topicId: 'range-and-iqr',
      testId: 'range-and-iqr',
    };
  }

  if (
    path.includes('variance-standard-deviation') ||
    (isStatMeasuresRoute && (path.includes('التباين') || path.includes('variance') || path.includes('standard-deviation') || path.includes('الانحراف-المعياري')))
  ) {
    return {
      view: 'quiz',
      domainId: 'statistics-probability',
      subcategoryId: 'statistical-measures',
      topicId: 'variance-standard-deviation',
      testId: 'variance-standard-deviation',
    };
  }

  if (
    path.includes('quartiles-percentiles') ||
    (isStatMeasuresRoute && (path.includes('الربيعيات') || path.includes('المئينيات') || path.includes('quartiles') || path.includes('percentiles')))
  ) {
    return {
      view: 'quiz',
      domainId: 'statistics-probability',
      subcategoryId: 'statistical-measures',
      topicId: 'quartiles-percentiles',
      testId: 'quartiles-percentiles',
    };
  }

  if (
    path.includes('box-plot-measures') ||
    (isStatMeasuresRoute && (path.includes('box-plot') || path.includes('الصندوق-والطرفين') || path.includes('تمثيل-الصندوق') || path.includes('الصندوق')))
  ) {
    return {
      view: 'quiz',
      domainId: 'statistics-probability',
      subcategoryId: 'statistical-measures',
      topicId: 'box-plot-measures',
      testId: 'box-plot-measures',
    };
  }

  if (
    path.includes('z-score-standardization') ||
    (isStatMeasuresRoute && (path.includes('z-score') || path.includes('القيمة-المعيارية') || path.includes('الدرجة-المعيارية') || path.includes('standardization')))
  ) {
    return {
      view: 'quiz',
      domainId: 'statistics-probability',
      subcategoryId: 'statistical-measures',
      topicId: 'z-score-standardization',
      testId: 'z-score-standardization',
    };
  }

  if (
    path.includes('skewness-distribution-shape') ||
    (isStatMeasuresRoute && (path.includes('skewness') || path.includes('الالتواء') || path.includes('معامل-الالتواء') || path.includes('شكل-التوزيع')))
  ) {
    return {
      view: 'quiz',
      domainId: 'statistics-probability',
      subcategoryId: 'statistical-measures',
      topicId: 'skewness-distribution-shape',
      testId: 'skewness-distribution-shape',
    };
  }

  if (
    path.includes('mean-deviation-coefficient-variation') ||
    (isStatMeasuresRoute && (path.includes('معامل-الاختلاف') || path.includes('الانحراف-المتوسط') || path.includes('coefficient-variation') || path.includes('cv')))
  ) {
    return {
      view: 'quiz',
      domainId: 'statistics-probability',
      subcategoryId: 'statistical-measures',
      topicId: 'mean-deviation-coefficient-variation',
      testId: 'mean-deviation-coefficient-variation',
    };
  }

  if (
    path.includes('statistical-measures-word-problems') ||
    (isStatMeasuresRoute && (path.includes('word-problems') || path.includes('المسائل-الكلامية') || path.includes('المسائل-التطبيقية')))
  ) {
    return {
      view: 'quiz',
      domainId: 'statistics-probability',
      subcategoryId: 'statistical-measures',
      topicId: 'statistical-measures-word-problems',
      testId: 'statistical-measures-word-problems',
    };
  }

  // ==================== DIFFERENTIAL EQUATIONS QUIZ ROUTES ====================
  const isDiffEqRoute =
    path.includes('/differential-equations') ||
    path.includes('differential_equations') ||
    path.includes('المعادلات-التفاضلية') ||
    path.includes('المعادلات_التفاضلية');

  if (
    path === 'domain/calculus/differential-equations' ||
    path === '/domain/calculus/differential-equations' ||
    path === 'domain/calculus/المعادلات-التفاضلية' ||
    path === '/domain/calculus/المعادلات-التفاضلية'
  ) {
    return {
      view: 'quiz',
      domainId: 'calculus',
      subcategoryId: 'differential-equations',
    };
  }

  if (
    path.includes('classification-order-degree') ||
    (isDiffEqRoute && (path.includes('order-degree') || path.includes('الرتبة-والدرجة') || path.includes('رتبتها-ودرجتها')))
  ) {
    return {
      view: 'quiz',
      domainId: 'calculus',
      subcategoryId: 'differential-equations',
      topicId: 'classification-order-degree',
      testId: 'classification-order-degree',
    };
  }

  if (
    path.includes('verifying-solutions') ||
    (isDiffEqRoute && (path.includes('verifying') || path.includes('التحقق-من-الحلول') || path.includes('الحلول-العامة-والخاصة')))
  ) {
    return {
      view: 'quiz',
      domainId: 'calculus',
      subcategoryId: 'differential-equations',
      topicId: 'verifying-solutions',
      testId: 'verifying-solutions',
    };
  }

  if (
    path.includes('separable-differential-equations') ||
    (isDiffEqRoute && (path.includes('separable') || path.includes('قابلة-الفصل') || path.includes('فصل-المتغيرات')))
  ) {
    return {
      view: 'quiz',
      domainId: 'calculus',
      subcategoryId: 'differential-equations',
      topicId: 'separable-differential-equations',
      testId: 'separable-differential-equations',
    };
  }

  if (
    path.includes('first-order-linear-integrating-factor') ||
    (isDiffEqRoute && (path.includes('integrating-factor') || path.includes('عامل-التكامل') || path.includes('الخطية-من-الرتبة-الأولى')))
  ) {
    return {
      view: 'quiz',
      domainId: 'calculus',
      subcategoryId: 'differential-equations',
      topicId: 'first-order-linear-integrating-factor',
      testId: 'first-order-linear-integrating-factor',
    };
  }

  if (
    path.includes('homogeneous-first-order') ||
    (isDiffEqRoute && (path.includes('homogeneous') || path.includes('المتجانسة') || path.includes('متجانسة')))
  ) {
    return {
      view: 'quiz',
      domainId: 'calculus',
      subcategoryId: 'differential-equations',
      topicId: 'homogeneous-first-order',
      testId: 'homogeneous-first-order',
    };
  }

  if (
    path.includes('exact-differential-equations') ||
    (isDiffEqRoute && (path.includes('exact') || path.includes('التامة') || path.includes('تامة')))
  ) {
    return {
      view: 'quiz',
      domainId: 'calculus',
      subcategoryId: 'differential-equations',
      topicId: 'exact-differential-equations',
      testId: 'exact-differential-equations',
    };
  }

  if (
    path.includes('bernoulli-differential-equations') ||
    (isDiffEqRoute && (path.includes('bernoulli') || path.includes('برنولي') || path.includes('معادلة-برنولي')))
  ) {
    return {
      view: 'quiz',
      domainId: 'calculus',
      subcategoryId: 'differential-equations',
      topicId: 'bernoulli-differential-equations',
      testId: 'bernoulli-differential-equations',
    };
  }

  if (
    path.includes('second-order-constant-coefficients') ||
    (isDiffEqRoute && (path.includes('constant-coefficients') || path.includes('المعاملات-الثابتة') || path.includes('الرتبة-الثانية')))
  ) {
    return {
      view: 'quiz',
      domainId: 'calculus',
      subcategoryId: 'differential-equations',
      topicId: 'second-order-constant-coefficients',
      testId: 'second-order-constant-coefficients',
    };
  }

  if (
    path.includes('repeated-complex-roots') ||
    (isDiffEqRoute && (path.includes('complex-roots') || path.includes('repeated-roots') || path.includes('الجذور-المركبة') || path.includes('الجذور-المكررة')))
  ) {
    return {
      view: 'quiz',
      domainId: 'calculus',
      subcategoryId: 'differential-equations',
      topicId: 'repeated-complex-roots',
      testId: 'repeated-complex-roots',
    };
  }

  if (
    path.includes('laplace-transforms-ode') ||
    (isDiffEqRoute && (path.includes('laplace') || path.includes('لابلاس') || path.includes('تحويلات-لابلاس')))
  ) {
    return {
      view: 'quiz',
      domainId: 'calculus',
      subcategoryId: 'differential-equations',
      topicId: 'laplace-transforms-ode',
      testId: 'laplace-transforms-ode',
    };
  }

  if (
    path.includes('modeling-growth-decay-cooling') ||
    (isDiffEqRoute && (path.includes('growth-decay') || path.includes('تبريد-نيوتن') || path.includes('النمو-والاضمحلال') || path.includes('النمذجة-والتطبيقات')))
  ) {
    return {
      view: 'quiz',
      domainId: 'calculus',
      subcategoryId: 'differential-equations',
      topicId: 'modeling-growth-decay-cooling',
      testId: 'modeling-growth-decay-cooling',
    };
  }

  if (
    path.includes('rlc-circuits-vibrations') ||
    (isDiffEqRoute && (path.includes('rlc') || path.includes('vibrations') || path.includes('الدوائر-الكهربائية') || path.includes('الحركة-الاهتزازية')))
  ) {
    return {
      view: 'quiz',
      domainId: 'calculus',
      subcategoryId: 'differential-equations',
      topicId: 'rlc-circuits-vibrations',
      testId: 'rlc-circuits-vibrations',
    };
  }

  // ==================== APPLICATIONS OF INTEGRATION QUIZ ROUTES ====================
  const isAppIntegrationRoute =
    path.includes('/applications-of-integration') ||
    path.includes('applications_of_integration') ||
    path.includes('تطبيقات-التكامل') ||
    path.includes('تطبيقات_التكامل');

  if (
    path === 'domain/calculus/applications-of-integration' ||
    path === '/domain/calculus/applications-of-integration' ||
    path === 'domain/calculus/تطبيقات-التكامل' ||
    path === '/domain/calculus/تطبيقات-التكامل'
  ) {
    return {
      view: 'quiz',
      domainId: 'calculus',
      subcategoryId: 'applications-of-integration',
    };
  }

  if (
    path.includes('area-under-curve-x-axis') ||
    (isAppIntegrationRoute && (path.includes('x-axis') || path.includes('محور-السينات') || path.includes('منحنى-ومحور-السينات')))
  ) {
    return {
      view: 'quiz',
      domainId: 'calculus',
      subcategoryId: 'applications-of-integration',
      topicId: 'area-under-curve-x-axis',
      testId: 'area-under-curve-x-axis',
    };
  }

  if (
    path.includes('area-between-two-curves') ||
    (isAppIntegrationRoute && (path.includes('two-curves') || path.includes('منحنيين-متقاطعين') || path.includes('منحنيين')))
  ) {
    return {
      view: 'quiz',
      domainId: 'calculus',
      subcategoryId: 'applications-of-integration',
      topicId: 'area-between-two-curves',
      testId: 'area-between-two-curves',
    };
  }

  if (
    path.includes('disk-method-volumes') ||
    (isAppIntegrationRoute && (path.includes('disk-method') || path.includes('الأقراص') || path.includes('طريقة-الأقراص')))
  ) {
    return {
      view: 'quiz',
      domainId: 'calculus',
      subcategoryId: 'applications-of-integration',
      topicId: 'disk-method-volumes',
      testId: 'disk-method-volumes',
    };
  }

  if (
    path.includes('washer-method-volumes') ||
    (isAppIntegrationRoute && (path.includes('washer-method') || path.includes('الحلقات') || path.includes('طريقة-الحلقات')))
  ) {
    return {
      view: 'quiz',
      domainId: 'calculus',
      subcategoryId: 'applications-of-integration',
      topicId: 'washer-method-volumes',
      testId: 'washer-method-volumes',
    };
  }

  if (
    path.includes('cylindrical-shells-method') ||
    (isAppIntegrationRoute && (path.includes('cylindrical-shells') || path.includes('القشور-الأسطوانية') || path.includes('القشور')))
  ) {
    return {
      view: 'quiz',
      domainId: 'calculus',
      subcategoryId: 'applications-of-integration',
      topicId: 'cylindrical-shells-method',
      testId: 'cylindrical-shells-method',
    };
  }

  if (
    path.includes('arc-length-curves') ||
    (isAppIntegrationRoute && (path.includes('arc-length') || path.includes('طول-القوس') || path.includes('طول-قوس-المنحنى')))
  ) {
    return {
      view: 'quiz',
      domainId: 'calculus',
      subcategoryId: 'applications-of-integration',
      topicId: 'arc-length-curves',
      testId: 'arc-length-curves',
    };
  }

  if (
    path.includes('surface-area-revolution') ||
    (isAppIntegrationRoute && (path.includes('surface-area') || path.includes('مساحة-السطح') || path.includes('السطح-الدوراني')))
  ) {
    return {
      view: 'quiz',
      domainId: 'calculus',
      subcategoryId: 'applications-of-integration',
      topicId: 'surface-area-revolution',
      testId: 'surface-area-revolution',
    };
  }

  if (
    path.includes('work-physics-applications') ||
    (isAppIntegrationRoute && (path.includes('work-physics') || path.includes('الشغل-الفيزيائي') || path.includes('الشغل')))
  ) {
    return {
      view: 'quiz',
      domainId: 'calculus',
      subcategoryId: 'applications-of-integration',
      topicId: 'work-physics-applications',
      testId: 'work-physics-applications',
    };
  }

  if (
    path.includes('average-value-function') ||
    (isAppIntegrationRoute && (path.includes('average-value') || path.includes('القيمة-المتوسطة') || path.includes('القيمة-الفعالة')))
  ) {
    return {
      view: 'quiz',
      domainId: 'calculus',
      subcategoryId: 'applications-of-integration',
      topicId: 'average-value-function',
      testId: 'average-value-function',
    };
  }

  if (
    path.includes('center-of-mass-centroid') ||
    (isAppIntegrationRoute && (path.includes('center-of-mass') || path.includes('centroid') || path.includes('مركز-الكتلة') || path.includes('المركز-الهندسي')))
  ) {
    return {
      view: 'quiz',
      domainId: 'calculus',
      subcategoryId: 'applications-of-integration',
      topicId: 'center-of-mass-centroid',
      testId: 'center-of-mass-centroid',
    };
  }

  if (
    path.includes('economic-applications-surplus') ||
    (isAppIntegrationRoute && (path.includes('economic') || path.includes('فائض-المستهلك') || path.includes('فائض-المنتج')))
  ) {
    return {
      view: 'quiz',
      domainId: 'calculus',
      subcategoryId: 'applications-of-integration',
      topicId: 'economic-applications-surplus',
      testId: 'economic-applications-surplus',
    };
  }

  if (
    path.includes('accumulation-real-world-physics') ||
    (isAppIntegrationRoute && (path.includes('accumulation') || path.includes('مسائل-التراكم') || path.includes('تدفق-السوائل')))
  ) {
    return {
      view: 'quiz',
      domainId: 'calculus',
      subcategoryId: 'applications-of-integration',
      topicId: 'accumulation-real-world-physics',
      testId: 'accumulation-real-world-physics',
    };
  }

  // ==================== INTEGRATION QUIZ ROUTES ====================
  const isIntegrationRoute =
    path.includes('/integration') ||
    path.includes('التكامل') ||
    path.includes('integration-');

  if (
    path.includes('indefinite-integrals-basic-rules') ||
    (isIntegrationRoute && (path.includes('indefinite') || path.includes('basic-rules') || path.includes('غير-المحدد') || path.includes('قواعد-التكامل-الأساسية')))
  ) {
    return {
      view: 'quiz',
      domainId: 'calculus',
      subcategoryId: 'integration',
      topicId: 'indefinite-integrals-basic-rules',
      testId: 'indefinite-integrals-basic-rules',
    };
  }

  if (
    path.includes('exponential-logarithmic-integration') ||
    (isIntegrationRoute && (path.includes('exponential') || path.includes('logarithmic') || path.includes('الأسية-واللوغاريتمية')))
  ) {
    return {
      view: 'quiz',
      domainId: 'calculus',
      subcategoryId: 'integration',
      topicId: 'exponential-logarithmic-integration',
      testId: 'exponential-logarithmic-integration',
    };
  }

  if (
    path.includes('trigonometric-integration') ||
    (isIntegrationRoute && (path.includes('trigonometric') || path.includes('المثلثية') || path.includes('الدوال-المثلثية')))
  ) {
    return {
      view: 'quiz',
      domainId: 'calculus',
      subcategoryId: 'integration',
      topicId: 'trigonometric-integration',
      testId: 'trigonometric-integration',
    };
  }

  if (
    path.includes('integration-by-substitution') ||
    (isIntegrationRoute && (path.includes('substitution') || path.includes('التعويض') || path.includes('التكامل-بالتعويض')))
  ) {
    return {
      view: 'quiz',
      domainId: 'calculus',
      subcategoryId: 'integration',
      topicId: 'integration-by-substitution',
      testId: 'integration-by-substitution',
    };
  }

  if (
    path.includes('integration-by-parts') ||
    (isIntegrationRoute && (path.includes('parts') || path.includes('التجزئة') || path.includes('التكامل-بالتجزئة')))
  ) {
    return {
      view: 'quiz',
      domainId: 'calculus',
      subcategoryId: 'integration',
      topicId: 'integration-by-parts',
      testId: 'integration-by-parts',
    };
  }

  if (
    path.includes('partial-fractions-integration') ||
    (isIntegrationRoute && (path.includes('partial-fractions') || path.includes('الكسور-الجزئية')))
  ) {
    return {
      view: 'quiz',
      domainId: 'calculus',
      subcategoryId: 'integration',
      topicId: 'partial-fractions-integration',
      testId: 'partial-fractions-integration',
    };
  }

  if (
    path.includes('fundamental-theorem-definite-integral') ||
    (isIntegrationRoute && (path.includes('fundamental-theorem') || path.includes('definite-integral') || path.includes('النظرية-الأساسية') || path.includes('التكامل-المحدد')))
  ) {
    return {
      view: 'quiz',
      domainId: 'calculus',
      subcategoryId: 'integration',
      topicId: 'fundamental-theorem-definite-integral',
      testId: 'fundamental-theorem-definite-integral',
    };
  }

  if (
    path.includes('properties-of-definite-integrals') ||
    (isIntegrationRoute && (path.includes('properties-of-definite') || path.includes('خواص-التكامل-المحدد') || path.includes('التناظر-للزوجية')))
  ) {
    return {
      view: 'quiz',
      domainId: 'calculus',
      subcategoryId: 'integration',
      topicId: 'properties-of-definite-integrals',
      testId: 'properties-of-definite-integrals',
    };
  }

  if (
    path.includes('area-under-curve-axis') ||
    (isIntegrationRoute && (path.includes('area-under-curve') || path.includes('المساحات-المحصورة-بين-منحنى') || path.includes('محور-السينات')))
  ) {
    return {
      view: 'quiz',
      domainId: 'calculus',
      subcategoryId: 'integration',
      topicId: 'area-under-curve-axis',
      testId: 'area-under-curve-axis',
    };
  }

  if (
    path.includes('area-between-curves') ||
    (isIntegrationRoute && (path.includes('area-between') || path.includes('المساحة-المحصورة-بين-منحنيين') || path.includes('بين-منحنيين')))
  ) {
    return {
      view: 'quiz',
      domainId: 'calculus',
      subcategoryId: 'integration',
      topicId: 'area-between-curves',
      testId: 'area-between-curves',
    };
  }

  if (
    path.includes('improper-integrals') ||
    (isIntegrationRoute && (path.includes('improper') || path.includes('التكاملات-الاعتلالية') || path.includes('الاعتلالية-والتقارب') || path.includes('التكامل-المعتل')))
  ) {
    return {
      view: 'quiz',
      domainId: 'calculus',
      subcategoryId: 'integration',
      topicId: 'improper-integrals',
      testId: 'improper-integrals',
    };
  }

  if (
    path.includes('applied-integration-word-problems') ||
    (isIntegrationRoute && (path.includes('word-problems') || path.includes('المسائل-الكلامية-والتطبيقية') || path.includes('تطبيقات-التكامل')))
  ) {
    return {
      view: 'quiz',
      domainId: 'calculus',
      subcategoryId: 'integration',
      topicId: 'applied-integration-word-problems',
      testId: 'applied-integration-word-problems',
    };
  }

  // ==================== APPLICATIONS OF DERIVATIVES QUIZ ROUTES ====================
  const isApplicationsRoute =
    path.includes('applications-of-derivatives') ||
    path.includes('applications_of_derivatives') ||
    path.includes('تطبيقات-المشتقات') ||
    path.includes('تطبيقات_المشتقات') ||
    path.includes('تطبيقات-التفاضل');

  if (
    path.includes('kinematics-motion') ||
    (isApplicationsRoute && (path.includes('kinematics') || path.includes('motion') || path.includes('السرعة-والتسارع') || path.includes('الحركة-الجسيمية')))
  ) {
    return {
      view: 'quiz',
      domainId: 'calculus',
      subcategoryId: 'applications-of-derivatives',
      topicId: 'kinematics-motion',
      testId: 'kinematics-motion',
    };
  }

  if (
    path.includes('increasing-decreasing-intervals') ||
    (isApplicationsRoute && (path.includes('increasing-decreasing') || path.includes('التزايد-والتناقص') || path.includes('رتابة-الدالة')))
  ) {
    return {
      view: 'quiz',
      domainId: 'calculus',
      subcategoryId: 'applications-of-derivatives',
      topicId: 'increasing-decreasing-intervals',
      testId: 'increasing-decreasing-intervals',
    };
  }

  if (
    path.includes('local-extrema') ||
    (isApplicationsRoute && (path.includes('local-maxima') || path.includes('local-minima') || path.includes('القيم-القصوى-المحلية') || path.includes('عظمى-محلية') || path.includes('صغرى-محلية')))
  ) {
    return {
      view: 'quiz',
      domainId: 'calculus',
      subcategoryId: 'applications-of-derivatives',
      topicId: 'local-extrema',
      testId: 'local-extrema',
    };
  }

  if (
    path.includes('absolute-extrema') ||
    (isApplicationsRoute && (path.includes('global-extrema') || path.includes('القيم-القصوى-المطلقة') || path.includes('عظمى-مطلقة') || path.includes('صغرى-مطلقة') || path.includes('فترة-مغلقة')))
  ) {
    return {
      view: 'quiz',
      domainId: 'calculus',
      subcategoryId: 'applications-of-derivatives',
      topicId: 'absolute-extrema',
      testId: 'absolute-extrema',
    };
  }

  if (
    path.includes('concavity-inflection-points') ||
    (isApplicationsRoute && (path.includes('concavity') || path.includes('inflection') || path.includes('التقعر') || path.includes('نقاط-الانقلاب')))
  ) {
    return {
      view: 'quiz',
      domainId: 'calculus',
      subcategoryId: 'applications-of-derivatives',
      topicId: 'concavity-inflection-points',
      testId: 'concavity-inflection-points',
    };
  }

  if (
    path.includes('curve-sketching') ||
    (isApplicationsRoute && (path.includes('sketching') || path.includes('رسم-المنحنيات') || path.includes('تحليل-سلوك-الدالة')))
  ) {
    return {
      view: 'quiz',
      domainId: 'calculus',
      subcategoryId: 'applications-of-derivatives',
      topicId: 'curve-sketching',
      testId: 'curve-sketching',
    };
  }

  if (
    path.includes('optimization-problems') ||
    (isApplicationsRoute && (path.includes('optimization') || path.includes('مسائل-التحسين') || path.includes('التحسين-الهندسي') || path.includes('تعظيم-الحجم')))
  ) {
    return {
      view: 'quiz',
      domainId: 'calculus',
      subcategoryId: 'applications-of-derivatives',
      topicId: 'optimization-problems',
      testId: 'optimization-problems',
    };
  }

  if (
    path.includes('related-rates') && !path.includes('related-rates-optimization') ||
    (isApplicationsRoute && (path.includes('related-rates') || path.includes('المعدلات-المرتبطة') || path.includes('تغير-بالزمن')))
  ) {
    return {
      view: 'quiz',
      domainId: 'calculus',
      subcategoryId: 'applications-of-derivatives',
      topicId: 'related-rates',
      testId: 'related-rates',
    };
  }

  if (
    path.includes('linear-approximation-differentials') ||
    (isApplicationsRoute && (path.includes('linear-approximation') || path.includes('differentials') || path.includes('التقريب-الخطي') || path.includes('التفاضلات')))
  ) {
    return {
      view: 'quiz',
      domainId: 'calculus',
      subcategoryId: 'applications-of-derivatives',
      topicId: 'linear-approximation-differentials',
      testId: 'linear-approximation-differentials',
    };
  }

  if (
    path.includes('rolles-mean-value-theorem') ||
    path.includes('rolles-theorem') ||
    path.includes('mean-value-theorem') ||
    (isApplicationsRoute && (path.includes('rolles') || path.includes('mvt') || path.includes('نظرية-رول') || path.includes('القيمة-المتوسطة')))
  ) {
    return {
      view: 'quiz',
      domainId: 'calculus',
      subcategoryId: 'applications-of-derivatives',
      topicId: 'rolles-mean-value-theorem',
      testId: 'rolles-mean-value-theorem',
    };
  }

  if (
    path.includes('lhopitals-rule') ||
    path.includes('lhopital') ||
    (isApplicationsRoute && (path.includes('لوبيتال') || path.includes('قاعدة-لوبيتال') || path.includes('نهايات-غير-معينة')))
  ) {
    return {
      view: 'quiz',
      domainId: 'calculus',
      subcategoryId: 'applications-of-derivatives',
      topicId: 'lhopitals-rule',
      testId: 'lhopitals-rule',
    };
  }

  if (
    path.includes('marginal-analysis-business') ||
    (isApplicationsRoute && (path.includes('marginal') || path.includes('التحليل-الحدي') || path.includes('التكلفة-الحدية') || path.includes('الإيراد-الحدي') || path.includes('الاقتصاد')))
  ) {
    return {
      view: 'quiz',
      domainId: 'calculus',
      subcategoryId: 'applications-of-derivatives',
      topicId: 'marginal-analysis-business',
      testId: 'marginal-analysis-business',
    };
  }

  // Subcategory landing route for applications-of-derivatives
  if (
    path === 'domain/calculus/applications-of-derivatives' ||
    path === 'category/calculus/applications-of-derivatives' ||
    path === 'calculus/applications-of-derivatives' ||
    path === 'applications-of-derivatives' ||
    path === 'تطبيقات-المشتقات' ||
    path === 'تطبيقات_المشتقات'
  ) {
    return {
      view: 'quiz',
      domainId: 'calculus',
      subcategoryId: 'applications-of-derivatives',
    };
  }

  // ==================== DERIVATIVES & DIFFERENTIATION QUIZ ROUTES ====================
  const isDerivativesRoute =
    path.includes('derivatives-differentiation') ||
    path.includes('derivatives') ||
    path.includes('differentiation') ||
    path.includes('المشتقات-والتفاضل') ||
    path.includes('المشتقات_والتفاضل') ||
    path.includes('المشتقات') ||
    path.includes('التفاضل');

  if (
    path.includes('definition-of-derivative') ||
    (isDerivativesRoute && (path.includes('definition') || path.includes('التعريف-العام') || path.includes('تعريف-المشتقة')))
  ) {
    return {
      view: 'quiz',
      domainId: 'calculus',
      subcategoryId: 'derivatives-differentiation',
      topicId: 'definition-of-derivative',
      testId: 'definition-of-derivative',
    };
  }

  if (
    path.includes('basic-differentiation-rules') ||
    (isDerivativesRoute && (path.includes('basic-rules') || path.includes('قواعد-الاشتقاق-الأساسية') || path.includes('قاعدة-القوة')))
  ) {
    return {
      view: 'quiz',
      domainId: 'calculus',
      subcategoryId: 'derivatives-differentiation',
      topicId: 'basic-differentiation-rules',
      testId: 'basic-differentiation-rules',
    };
  }

  if (
    path.includes('product-rule') ||
    (isDerivativesRoute && (path.includes('product') || path.includes('ضرب-دالتين') || path.includes('حاصل-ضرب')))
  ) {
    return {
      view: 'quiz',
      domainId: 'calculus',
      subcategoryId: 'derivatives-differentiation',
      topicId: 'product-rule',
      testId: 'product-rule',
    };
  }

  if (
    path.includes('quotient-rule') ||
    (isDerivativesRoute && (path.includes('quotient') || path.includes('قسمة-دالتين') || path.includes('الكسور')))
  ) {
    return {
      view: 'quiz',
      domainId: 'calculus',
      subcategoryId: 'derivatives-differentiation',
      topicId: 'quotient-rule',
      testId: 'quotient-rule',
    };
  }

  if (
    path.includes('chain-rule') ||
    (isDerivativesRoute && (path.includes('chain') || path.includes('قاعدة-السلسلة') || path.includes('الاشتقاق-المركب')))
  ) {
    return {
      view: 'quiz',
      domainId: 'calculus',
      subcategoryId: 'derivatives-differentiation',
      topicId: 'chain-rule',
      testId: 'chain-rule',
    };
  }

  if (
    path.includes('trigonometric-differentiation') ||
    (isDerivativesRoute && (path.includes('trigonometric') || path.includes('المثلثية') || path.includes('الدوال-المثلثية')))
  ) {
    return {
      view: 'quiz',
      domainId: 'calculus',
      subcategoryId: 'derivatives-differentiation',
      topicId: 'trigonometric-differentiation',
      testId: 'trigonometric-differentiation',
    };
  }

  if (
    path.includes('exponential-logarithmic-differentiation') ||
    (isDerivativesRoute && (path.includes('exponential') || path.includes('logarithmic') || path.includes('الأسية') || path.includes('اللوغاريتمية')))
  ) {
    return {
      view: 'quiz',
      domainId: 'calculus',
      subcategoryId: 'derivatives-differentiation',
      topicId: 'exponential-logarithmic-differentiation',
      testId: 'exponential-logarithmic-differentiation',
    };
  }

  if (
    path.includes('implicit-differentiation') ||
    (isDerivativesRoute && (path.includes('implicit') || path.includes('الضمني') || path.includes('الاشتقاق-الضمني')))
  ) {
    return {
      view: 'quiz',
      domainId: 'calculus',
      subcategoryId: 'derivatives-differentiation',
      topicId: 'implicit-differentiation',
      testId: 'implicit-differentiation',
    };
  }

  if (
    path.includes('higher-order-derivatives') ||
    (isDerivativesRoute && (path.includes('higher-order') || path.includes('الرتب-العليا') || path.includes('المشتقة-الثانية')))
  ) {
    return {
      view: 'quiz',
      domainId: 'calculus',
      subcategoryId: 'derivatives-differentiation',
      topicId: 'higher-order-derivatives',
      testId: 'higher-order-derivatives',
    };
  }

  if (
    path.includes('tangent-normal-lines') ||
    (isDerivativesRoute && (path.includes('tangent') || path.includes('normal') || path.includes('المماس') || path.includes('العمودي')))
  ) {
    return {
      view: 'quiz',
      domainId: 'calculus',
      subcategoryId: 'derivatives-differentiation',
      topicId: 'tangent-normal-lines',
      testId: 'tangent-normal-lines',
    };
  }

  if (
    path.includes('critical-points-extrema') ||
    (isDerivativesRoute && (path.includes('critical-points') || path.includes('extrema') || path.includes('النقاط-الحرجة') || path.includes('القيم-القصوى') || path.includes('التزايد-والتناقص')))
  ) {
    return {
      view: 'quiz',
      domainId: 'calculus',
      subcategoryId: 'derivatives-differentiation',
      topicId: 'critical-points-extrema',
      testId: 'critical-points-extrema',
    };
  }

  if (
    path.includes('related-rates-optimization') ||
    (isDerivativesRoute && (path.includes('related-rates') || path.includes('optimization') || path.includes('المعدلات-المرتبطة') || path.includes('التحسين') || path.includes('التطبيقات-الحياتية')))
  ) {
    return {
      view: 'quiz',
      domainId: 'calculus',
      subcategoryId: 'derivatives-differentiation',
      topicId: 'related-rates-optimization',
      testId: 'related-rates-optimization',
    };
  }

  // Subcategory landing route for derivatives-differentiation
  if (
    path === 'domain/calculus/derivatives-differentiation' ||
    path === 'category/calculus/derivatives-differentiation' ||
    path === 'calculus/derivatives-differentiation' ||
    path === 'derivatives-differentiation' ||
    path === 'المشتقات-والتفاضل' ||
    path === 'المشتقات'
  ) {
    return {
      view: 'quiz',
      domainId: 'calculus',
      subcategoryId: 'derivatives-differentiation',
    };
  }

  // ==================== LIMITS & CONTINUITY QUIZ ROUTES ====================
  const isLimitsContinuityRoute =
    path.includes('limits-continuity') ||
    path.includes('limits') ||
    path.includes('النهايات-والاتصال') ||
    path.includes('النهايات_والاتصال') ||
    path.includes('النهايات');

  if (
    path.includes('graphical-numerical-limits') ||
    (isLimitsContinuityRoute && (path.includes('graphical') || path.includes('numerical') || path.includes('التقدير-البياني') || path.includes('البياني-والعددي')))
  ) {
    return {
      view: 'quiz',
      domainId: 'calculus',
      subcategoryId: 'limits-continuity',
      topicId: 'graphical-numerical-limits',
      testId: 'graphical-numerical-limits',
    };
  }

  if (
    path.includes('direct-substitution-limits') ||
    (isLimitsContinuityRoute && (path.includes('direct-substitution') || path.includes('التعويض-المباشر') || path.includes('التعويض')))
  ) {
    return {
      view: 'quiz',
      domainId: 'calculus',
      subcategoryId: 'limits-continuity',
      topicId: 'direct-substitution-limits',
      testId: 'direct-substitution-limits',
    };
  }

  if (
    path.includes('zero-division-factoring-limits') ||
    (isLimitsContinuityRoute && (path.includes('zero-division') || path.includes('factoring') || path.includes('0/0') || path.includes('التحليل') || path.includes('النهايات-الصفرية')))
  ) {
    return {
      view: 'quiz',
      domainId: 'calculus',
      subcategoryId: 'limits-continuity',
      topicId: 'zero-division-factoring-limits',
      testId: 'zero-division-factoring-limits',
    };
  }

  if (
    path.includes('rationalization-conjugate-limits') ||
    (isLimitsContinuityRoute && (path.includes('rationalization') || path.includes('conjugate') || path.includes('المرافق') || path.includes('الضرب-في-المرافق')))
  ) {
    return {
      view: 'quiz',
      domainId: 'calculus',
      subcategoryId: 'limits-continuity',
      topicId: 'rationalization-conjugate-limits',
      testId: 'rationalization-conjugate-limits',
    };
  }

  if (
    path.includes('one-sided-limits') ||
    (isLimitsContinuityRoute && (path.includes('one-sided') || path.includes('طرف-واحد') || path.includes('اليمين-واليسار')))
  ) {
    return {
      view: 'quiz',
      domainId: 'calculus',
      subcategoryId: 'limits-continuity',
      topicId: 'one-sided-limits',
      testId: 'one-sided-limits',
    };
  }

  if (
    path.includes('limits-at-infinity') ||
    (isLimitsContinuityRoute && (path.includes('at-infinity') || path.includes('اللانهاية') || path.includes('السلوك-المقارب')))
  ) {
    return {
      view: 'quiz',
      domainId: 'calculus',
      subcategoryId: 'limits-continuity',
      topicId: 'limits-at-infinity',
      testId: 'limits-at-infinity',
    };
  }

  if (
    path.includes('infinite-limits-vertical-asymptotes') ||
    (isLimitsContinuityRoute && (path.includes('infinite-limits') || path.includes('vertical-asymptotes') || path.includes('غير-المنتهية') || path.includes('التقارب-الرأسية')))
  ) {
    return {
      view: 'quiz',
      domainId: 'calculus',
      subcategoryId: 'limits-continuity',
      topicId: 'infinite-limits-vertical-asymptotes',
      testId: 'infinite-limits-vertical-asymptotes',
    };
  }

  if (
    path.includes('continuity-at-a-point') ||
    (isLimitsContinuityRoute && (path.includes('continuity-at-a-point') || path.includes('شروط-الاتصال') || path.includes('الاتصال-عند-نقطة')))
  ) {
    return {
      view: 'quiz',
      domainId: 'calculus',
      subcategoryId: 'limits-continuity',
      topicId: 'continuity-at-a-point',
      testId: 'continuity-at-a-point',
    };
  }

  if (
    path.includes('discontinuity-types') ||
    (isLimitsContinuityRoute && (path.includes('discontinuity') || path.includes('أنواع-عدم-الاتصال') || path.includes('عدم-الاتصال')))
  ) {
    return {
      view: 'quiz',
      domainId: 'calculus',
      subcategoryId: 'limits-continuity',
      topicId: 'discontinuity-types',
      testId: 'discontinuity-types',
    };
  }

  if (
    path.includes('intermediate-value-theorem-ivt') ||
    (isLimitsContinuityRoute && (path.includes('intermediate-value') || path.includes('ivt') || path.includes('القيمة-المتوسطة') || path.includes('بولزانو')))
  ) {
    return {
      view: 'quiz',
      domainId: 'calculus',
      subcategoryId: 'limits-continuity',
      topicId: 'intermediate-value-theorem-ivt',
      testId: 'intermediate-value-theorem-ivt',
    };
  }

  if (
    path.includes('trigonometric-special-limits') ||
    (isLimitsContinuityRoute && (path.includes('trigonometric') || path.includes('الدوال-المثلثية') || path.includes('sin(x)/x')))
  ) {
    return {
      view: 'quiz',
      domainId: 'calculus',
      subcategoryId: 'limits-continuity',
      topicId: 'trigonometric-special-limits',
      testId: 'trigonometric-special-limits',
    };
  }

  if (
    path.includes('limits-continuity-word-problems') ||
    (isLimitsContinuityRoute && (path.includes('word-problems') || path.includes('المسائل-الكلامية') || path.includes('التطبيقات-العملية') || path.includes('السرعة-اللحظية')))
  ) {
    return {
      view: 'quiz',
      domainId: 'calculus',
      subcategoryId: 'limits-continuity',
      topicId: 'limits-continuity-word-problems',
      testId: 'limits-continuity-word-problems',
    };
  }

  // Subcategory landing route for limits-continuity
  if (
    path === 'domain/calculus/limits-continuity' ||
    path === 'category/calculus/limits-continuity' ||
    path === 'calculus/limits-continuity' ||
    path === 'limits-continuity' ||
    path === 'النهايات-والاتصال'
  ) {
    return {
      view: 'quiz',
      domainId: 'calculus',
      subcategoryId: 'limits-continuity',
    };
  }

  // ==================== GEOMETRIC TRANSFORMATIONS QUIZ ROUTES ====================
  const isGeometricTransformationsRoute =
    path.includes('geometric-transformations') ||
    path.includes('transformations') ||
    path.includes('التحويلات-الهندسية') ||
    path.includes('التحويلات_الهندسية');

  if (
    path.includes('rigid-transformations-isometries') ||
    (isGeometricTransformationsRoute && (path.includes('rigid') || path.includes('isometries') || path.includes('التحويلات-القاسية') || path.includes('المتطابقة')))
  ) {
    return {
      view: 'quiz',
      domainId: 'geometry-trigonometry',
      subcategoryId: 'geometric-transformations',
      topicId: 'rigid-transformations-isometries',
      testId: 'rigid-transformations-isometries',
    };
  }

  if (
    path.includes('reflection-axes') ||
    (isGeometricTransformationsRoute && (path.includes('axes') || path.includes('الانعكاس-حول-محاور') || path.includes('محور-السينات')))
  ) {
    return {
      view: 'quiz',
      domainId: 'geometry-trigonometry',
      subcategoryId: 'geometric-transformations',
      topicId: 'reflection-axes',
      testId: 'reflection-axes',
    };
  }

  if (
    path.includes('reflection-linear-lines') ||
    (isGeometricTransformationsRoute && (path.includes('linear-lines') || path.includes('y=x') || path.includes('y=-x') || path.includes('المستقيم-y=x')))
  ) {
    return {
      view: 'quiz',
      domainId: 'geometry-trigonometry',
      subcategoryId: 'geometric-transformations',
      topicId: 'reflection-linear-lines',
      testId: 'reflection-linear-lines',
    };
  }

  if (
    path.includes('translations-coordinate-plane') ||
    (isGeometricTransformationsRoute && (path.includes('translation') || path.includes('الإزاحة') || path.includes('الانسحاب')))
  ) {
    return {
      view: 'quiz',
      domainId: 'geometry-trigonometry',
      subcategoryId: 'geometric-transformations',
      topicId: 'translations-coordinate-plane',
      testId: 'translations-coordinate-plane',
    };
  }

  if (
    path.includes('rotations-origin') ||
    (isGeometricTransformationsRoute && (path.includes('rotation') || path.includes('origin') || path.includes('الدوران') || path.includes('نقطة-الأصل')))
  ) {
    return {
      view: 'quiz',
      domainId: 'geometry-trigonometry',
      subcategoryId: 'geometric-transformations',
      topicId: 'rotations-origin',
      testId: 'rotations-origin',
    };
  }

  if (
    path.includes('composition-of-transformations') ||
    (isGeometricTransformationsRoute && (path.includes('composition') || path.includes('تركيب-التحويلات') || path.includes('تركيب')))
  ) {
    return {
      view: 'quiz',
      domainId: 'geometry-trigonometry',
      subcategoryId: 'geometric-transformations',
      topicId: 'composition-of-transformations',
      testId: 'composition-of-transformations',
    };
  }

  if (
    path.includes('dilation-scale-factor') ||
    (isGeometricTransformationsRoute && (path.includes('dilation') || path.includes('scale-factor') || path.includes('التمدد') || path.includes('معامل-التمدد')))
  ) {
    return {
      view: 'quiz',
      domainId: 'geometry-trigonometry',
      subcategoryId: 'geometric-transformations',
      topicId: 'dilation-scale-factor',
      testId: 'dilation-scale-factor',
    };
  }

  if (
    path.includes('symmetry-line-rotational') ||
    (isGeometricTransformationsRoute && (path.includes('symmetry') || path.includes('التماثل') || path.includes('التماثل-الدوراني') || path.includes('التماثل-المحوري')))
  ) {
    return {
      view: 'quiz',
      domainId: 'geometry-trigonometry',
      subcategoryId: 'geometric-transformations',
      topicId: 'symmetry-line-rotational',
      testId: 'symmetry-line-rotational',
    };
  }

  if (
    path.includes('tessellations-patterns') ||
    (isGeometricTransformationsRoute && (path.includes('tessellation') || path.includes('التبليط') || path.includes('الرصف') || path.includes('الموزاييك')))
  ) {
    return {
      view: 'quiz',
      domainId: 'geometry-trigonometry',
      subcategoryId: 'geometric-transformations',
      topicId: 'tessellations-patterns',
      testId: 'tessellations-patterns',
    };
  }

  if (
    path.includes('transformation-matrices') ||
    (isGeometricTransformationsRoute && (path.includes('matrices') || path.includes('المصفوفات') || path.includes('مصفوفة-التحويل')))
  ) {
    return {
      view: 'quiz',
      domainId: 'geometry-trigonometry',
      subcategoryId: 'geometric-transformations',
      topicId: 'transformation-matrices',
      testId: 'transformation-matrices',
    };
  }

  if (
    path.includes('vectors-translations') ||
    (isGeometricTransformationsRoute && (path.includes('vectors') || path.includes('المتجهات') || path.includes('متجه-الإزاحة')))
  ) {
    return {
      view: 'quiz',
      domainId: 'geometry-trigonometry',
      subcategoryId: 'geometric-transformations',
      topicId: 'vectors-translations',
      testId: 'vectors-translations',
    };
  }

  if (
    path.includes('transformations-word-problems') ||
    (isGeometricTransformationsRoute && (path.includes('word-problems') || path.includes('المسائل-الكلامية') || path.includes('التطبيقات-العملية')))
  ) {
    return {
      view: 'quiz',
      domainId: 'geometry-trigonometry',
      subcategoryId: 'geometric-transformations',
      topicId: 'transformations-word-problems',
      testId: 'transformations-word-problems',
    };
  }

  // Subcategory landing route for geometric-transformations
  if (
    path === 'domain/geometry-trigonometry/geometric-transformations' ||
    path === 'category/geometry-trigonometry/geometric-transformations' ||
    path === 'geometry-trigonometry/geometric-transformations' ||
    path === 'geometric-transformations' ||
    path === 'التحويلات-الهندسية'
  ) {
    return {
      view: 'quiz',
      domainId: 'geometry-trigonometry',
      subcategoryId: 'geometric-transformations',
    };
  }

  // ==================== ANALYTIC GEOMETRY QUIZ ROUTES ====================
  const isAnalyticGeometryRoute =
    path.includes('analytic-geometry') ||
    path.includes('analytic') ||
    path.includes('الهندسة-التحليلية') ||
    path.includes('الهندسة_التحليلية');

  if (
    path.includes('cartesian-coordinates-quadrants') ||
    (isAnalyticGeometryRoute && (path.includes('cartesian') || path.includes('quadrants') || path.includes('الإحداثيات-الديكارتية') || path.includes('الأرباع-الأربعة')))
  ) {
    return {
      view: 'quiz',
      domainId: 'geometry-trigonometry',
      subcategoryId: 'analytic-geometry',
      topicId: 'cartesian-coordinates-quadrants',
      testId: 'cartesian-coordinates-quadrants',
    };
  }

  if (
    path.includes('distance-between-two-points') ||
    (isAnalyticGeometryRoute && (path.includes('distance') || path.includes('المسافة-بين-نقطتين') || path.includes('المسافة')))
  ) {
    return {
      view: 'quiz',
      domainId: 'geometry-trigonometry',
      subcategoryId: 'analytic-geometry',
      topicId: 'distance-between-two-points',
      testId: 'distance-between-two-points',
    };
  }

  if (
    path.includes('midpoint-line-segment-division') ||
    (isAnalyticGeometryRoute && (path.includes('midpoint') || path.includes('تقسيم-قطعة') || path.includes('نقطة-المنتصف')))
  ) {
    return {
      view: 'quiz',
      domainId: 'geometry-trigonometry',
      subcategoryId: 'analytic-geometry',
      topicId: 'midpoint-line-segment-division',
      testId: 'midpoint-line-segment-division',
    };
  }

  if (
    path.includes('slope-of-linear-line') ||
    (isAnalyticGeometryRoute && (path.includes('slope') || path.includes('ميل-المستقيم') || path.includes('ميل-الخط-المستقيم')))
  ) {
    return {
      view: 'quiz',
      domainId: 'geometry-trigonometry',
      subcategoryId: 'analytic-geometry',
      topicId: 'slope-of-linear-line',
      testId: 'slope-of-linear-line',
    };
  }

  if (
    path.includes('forms-of-linear-equations') ||
    (isAnalyticGeometryRoute && (path.includes('forms') || path.includes('linear-equations') || path.includes('أشكال-معادلة') || path.includes('صيغة-الميل-والمقطع')))
  ) {
    return {
      view: 'quiz',
      domainId: 'geometry-trigonometry',
      subcategoryId: 'analytic-geometry',
      topicId: 'forms-of-linear-equations',
      testId: 'forms-of-linear-equations',
    };
  }

  if (
    path.includes('parallel-perpendicular-lines') ||
    (isAnalyticGeometryRoute && (path.includes('parallel') || path.includes('perpendicular') || path.includes('المتوازية-والمتعامدة') || path.includes('التوازي-والتعامد')))
  ) {
    return {
      view: 'quiz',
      domainId: 'geometry-trigonometry',
      subcategoryId: 'analytic-geometry',
      topicId: 'parallel-perpendicular-lines',
      testId: 'parallel-perpendicular-lines',
    };
  }

  if (
    path.includes('circle-equation-properties') ||
    (isAnalyticGeometryRoute && (path.includes('circle') || path.includes('الدائرة') || path.includes('معادلة-الدائرة')))
  ) {
    return {
      view: 'quiz',
      domainId: 'geometry-trigonometry',
      subcategoryId: 'analytic-geometry',
      topicId: 'circle-equation-properties',
      testId: 'circle-equation-properties',
    };
  }

  if (
    path.includes('ellipse-properties-equations') ||
    (isAnalyticGeometryRoute && (path.includes('ellipse') || path.includes('القطع-الناقص') || path.includes('القطع_الناقص')))
  ) {
    return {
      view: 'quiz',
      domainId: 'geometry-trigonometry',
      subcategoryId: 'analytic-geometry',
      topicId: 'ellipse-properties-equations',
      testId: 'ellipse-properties-equations',
    };
  }

  if (
    path.includes('parabola-analytic-geometry') ||
    (isAnalyticGeometryRoute && (path.includes('parabola') || path.includes('القطع-المكافئ') || path.includes('القطع_المكافئ')))
  ) {
    return {
      view: 'quiz',
      domainId: 'geometry-trigonometry',
      subcategoryId: 'analytic-geometry',
      topicId: 'parabola-analytic-geometry',
      testId: 'parabola-analytic-geometry',
    };
  }

  if (
    path.includes('hyperbola-asymptotes') ||
    (isAnalyticGeometryRoute && (path.includes('hyperbola') || path.includes('القطع-الزائد') || path.includes('القطع_الزائد') || path.includes('الخطوط-التقاربية')))
  ) {
    return {
      view: 'quiz',
      domainId: 'geometry-trigonometry',
      subcategoryId: 'analytic-geometry',
      topicId: 'hyperbola-asymptotes',
      testId: 'hyperbola-asymptotes',
    };
  }

  if (
    path.includes('polar-coordinates-conversion') ||
    (isAnalyticGeometryRoute && (path.includes('polar') || path.includes('القطبية') || path.includes('الإحداثيات-القطبية')))
  ) {
    return {
      view: 'quiz',
      domainId: 'geometry-trigonometry',
      subcategoryId: 'analytic-geometry',
      topicId: 'polar-coordinates-conversion',
      testId: 'polar-coordinates-conversion',
    };
  }

  if (
    path.includes('analytic-geometry-word-problems') ||
    (isAnalyticGeometryRoute && (path.includes('word-problems') || path.includes('applications') || path.includes('المسائل-الكلامية') || path.includes('التطبيقات-العملية')))
  ) {
    return {
      view: 'quiz',
      domainId: 'geometry-trigonometry',
      subcategoryId: 'analytic-geometry',
      topicId: 'analytic-geometry-word-problems',
      testId: 'analytic-geometry-word-problems',
    };
  }

  // Subcategory landing route for analytic-geometry
  if (
    path === 'domain/geometry-trigonometry/analytic-geometry' ||
    path === 'category/geometry-trigonometry/analytic-geometry' ||
    path === 'geometry-trigonometry/analytic-geometry' ||
    path === 'analytic-geometry' ||
    path === 'الهندسة-التحليلية'
  ) {
    return {
      view: 'quiz',
      domainId: 'geometry-trigonometry',
      subcategoryId: 'analytic-geometry',
    };
  }

  // ==================== TRIGONOMETRY QUIZ ROUTES ====================
  const isTrigonometryRoute =
    path.includes('trigonometry') ||
    path.includes('trig') ||
    path.includes('حساب-المثلثات') ||
    path.includes('حساب_المثلثات');

  if (
    path.includes('basic-trig-ratios-right-triangle') ||
    (isTrigonometryRoute && (path.includes('basic-ratios') || path.includes('right-triangle') || path.includes('النسب-المثلثية-الأساسية') || path.includes('الجيب-وجيب-التمام-والظل')))
  ) {
    return {
      view: 'quiz',
      domainId: 'geometry-trigonometry',
      subcategoryId: 'trigonometry',
      topicId: 'basic-trig-ratios-right-triangle',
      testId: 'basic-trig-ratios-right-triangle',
    };
  }

  if (
    path.includes('reciprocal-trig-ratios') ||
    (isTrigonometryRoute && (path.includes('reciprocal') || path.includes('sec-csc-cot') || path.includes('مقلوب-النسب') || path.includes('القاطع-وقاطع-التمام')))
  ) {
    return {
      view: 'quiz',
      domainId: 'geometry-trigonometry',
      subcategoryId: 'trigonometry',
      topicId: 'reciprocal-trig-ratios',
      testId: 'reciprocal-trig-ratios',
    };
  }

  if (
    path.includes('special-angles-trig-ratios') ||
    (isTrigonometryRoute && (path.includes('special-angles') || path.includes('30-45-60') || path.includes('الزوايا-الخاصة')))
  ) {
    return {
      view: 'quiz',
      domainId: 'geometry-trigonometry',
      subcategoryId: 'trigonometry',
      topicId: 'special-angles-trig-ratios',
      testId: 'special-angles-trig-ratios',
    };
  }

  if (
    path.includes('degrees-radians-conversion') ||
    (isTrigonometryRoute && (path.includes('degrees-radians') || path.includes('conversion') || path.includes('الدرجات-والراديان') || path.includes('التحويل-بينهما')))
  ) {
    return {
      view: 'quiz',
      domainId: 'geometry-trigonometry',
      subcategoryId: 'trigonometry',
      topicId: 'degrees-radians-conversion',
      testId: 'degrees-radians-conversion',
    };
  }

  if (
    path.includes('unit-circle-reference-angles') ||
    (isTrigonometryRoute && (path.includes('unit-circle') || path.includes('reference-angles') || path.includes('دائرة-الوحدة') || path.includes('الزوايا-المرجعية')))
  ) {
    return {
      view: 'quiz',
      domainId: 'geometry-trigonometry',
      subcategoryId: 'trigonometry',
      topicId: 'unit-circle-reference-angles',
      testId: 'unit-circle-reference-angles',
    };
  }

  if (
    path.includes('pythagorean-fundamental-identities') ||
    (isTrigonometryRoute && (path.includes('pythagorean-identities') || path.includes('fundamental-identities') || path.includes('المتطابقات-الفيثاغورسية') || path.includes('المتطابقات-الأساسية')))
  ) {
    return {
      view: 'quiz',
      domainId: 'geometry-trigonometry',
      subcategoryId: 'trigonometry',
      topicId: 'pythagorean-fundamental-identities',
      testId: 'pythagorean-fundamental-identities',
    };
  }

  if (
    path.includes('sum-difference-double-half-identities') ||
    (isTrigonometryRoute && (path.includes('sum-difference') || path.includes('double-half') || path.includes('مجموع-وفرق') || path.includes('الضعف-والنصف')))
  ) {
    return {
      view: 'quiz',
      domainId: 'geometry-trigonometry',
      subcategoryId: 'trigonometry',
      topicId: 'sum-difference-double-half-identities',
      testId: 'sum-difference-double-half-identities',
    };
  }

  if (
    path.includes('solving-trigonometric-equations') ||
    (isTrigonometryRoute && (path.includes('solving-equations') || path.includes('equations') || path.includes('المعادلات-المثلثية') || path.includes('حل-المعادلات-المثلثية')))
  ) {
    return {
      view: 'quiz',
      domainId: 'geometry-trigonometry',
      subcategoryId: 'trigonometry',
      topicId: 'solving-trigonometric-equations',
      testId: 'solving-trigonometric-equations',
    };
  }

  if (
    path.includes('law-of-sines') ||
    (isTrigonometryRoute && (path.includes('sines') || path.includes('قانون-الجيب') || path.includes('قانون_الجيب')))
  ) {
    return {
      view: 'quiz',
      domainId: 'geometry-trigonometry',
      subcategoryId: 'trigonometry',
      topicId: 'law-of-sines',
      testId: 'law-of-sines',
    };
  }

  if (
    path.includes('law-of-cosines') ||
    (isTrigonometryRoute && (path.includes('cosines') || path.includes('قانون-جيب-التمام') || path.includes('قانون_جيب_التمام')))
  ) {
    return {
      view: 'quiz',
      domainId: 'geometry-trigonometry',
      subcategoryId: 'trigonometry',
      topicId: 'law-of-cosines',
      testId: 'law-of-cosines',
    };
  }

  if (
    path.includes('graphing-trig-functions') ||
    (isTrigonometryRoute && (path.includes('graphing') || path.includes('amplitude-period') || path.includes('التمثيل-البياني') || path.includes('السعة-والدورة')))
  ) {
    return {
      view: 'quiz',
      domainId: 'geometry-trigonometry',
      subcategoryId: 'trigonometry',
      topicId: 'graphing-trig-functions',
      testId: 'graphing-trig-functions',
    };
  }

  if (
    path.includes('trig-word-problems-applications') ||
    (isTrigonometryRoute && (path.includes('word-problems') || path.includes('elevation-depression') || path.includes('زوايا-الارتفاع') || path.includes('زوايا-الانخفاض') || path.includes('المسائل-الكلامية-المثلثية')))
  ) {
    return {
      view: 'quiz',
      domainId: 'geometry-trigonometry',
      subcategoryId: 'trigonometry',
      topicId: 'trig-word-problems-applications',
      testId: 'trig-word-problems-applications',
    };
  }

  // Subcategory landing route for trigonometry
  if (
    path === 'domain/geometry-trigonometry/trigonometry' ||
    path === 'category/geometry-trigonometry/trigonometry' ||
    path === 'geometry-trigonometry/trigonometry' ||
    path === 'trigonometry' ||
    path === 'حساب-المثلثات'
  ) {
    return {
      view: 'quiz',
      domainId: 'geometry-trigonometry',
      subcategoryId: 'trigonometry',
    };
  }

  // ==================== SEQUENCES QUIZ ROUTES ====================
  const isSequencesRoute =
    path.includes('sequences') ||
    path.includes('sequence') ||
    path.includes('series') ||
    path.includes('المتتاليات') ||
    path.includes('المتسلسلات');

  if (
    path.includes('sequence-patterns-next-terms') ||
    (isSequencesRoute && (path.includes('patterns') || path.includes('next-terms') || path.includes('الأنماط') || path.includes('الحدود-التالية')))
  ) {
    return {
      view: 'quiz',
      domainId: 'algebra-functions',
      subcategoryId: 'sequences',
      topicId: 'sequence-patterns-next-terms',
      testId: 'sequence-patterns-next-terms',
    };
  }

  if (
    path.includes('arithmetic-sequence-explicit-formula') ||
    (isSequencesRoute && (path.includes('explicit-formula') || path.includes('الحد-العام-للمتتالية-الحسابية') || path.includes('صيغة-الحد-العام')))
  ) {
    return {
      view: 'quiz',
      domainId: 'algebra-functions',
      subcategoryId: 'sequences',
      topicId: 'arithmetic-sequence-explicit-formula',
      testId: 'arithmetic-sequence-explicit-formula',
    };
  }

  if (
    path.includes('arithmetic-sequence-finding-terms') ||
    (isSequencesRoute && (path.includes('finding-terms') || path.includes('حدود-متقدمة') || path.includes('رتبة-الحد')))
  ) {
    return {
      view: 'quiz',
      domainId: 'algebra-functions',
      subcategoryId: 'sequences',
      topicId: 'arithmetic-sequence-finding-terms',
      testId: 'arithmetic-sequence-finding-terms',
    };
  }

  if (
    path.includes('arithmetic-series-finite-sum') ||
    (isSequencesRoute && (path.includes('arithmetic-series') || path.includes('finite-sum') || path.includes('مجموع-المتسلسلة-الحسابية')))
  ) {
    return {
      view: 'quiz',
      domainId: 'algebra-functions',
      subcategoryId: 'sequences',
      topicId: 'arithmetic-series-finite-sum',
      testId: 'arithmetic-series-finite-sum',
    };
  }

  if (
    path.includes('geometric-sequence-common-ratio-formula') ||
    (isSequencesRoute && (path.includes('common-ratio') || path.includes('geometric-formula') || path.includes('الحد-العام-للمتتالية-الهندسية')))
  ) {
    return {
      view: 'quiz',
      domainId: 'algebra-functions',
      subcategoryId: 'sequences',
      topicId: 'geometric-sequence-common-ratio-formula',
      testId: 'geometric-sequence-common-ratio-formula',
    };
  }

  if (
    path.includes('geometric-sequence-finding-terms') ||
    (isSequencesRoute && (path.includes('geometric-terms') || path.includes('حدود-هندسية')))
  ) {
    return {
      view: 'quiz',
      domainId: 'algebra-functions',
      subcategoryId: 'sequences',
      topicId: 'geometric-sequence-finding-terms',
      testId: 'geometric-sequence-finding-terms',
    };
  }

  if (
    path.includes('finite-geometric-series-sum') ||
    (isSequencesRoute && (path.includes('geometric-series-sum') || path.includes('مجموع-المتسلسلة-الهندسية')))
  ) {
    return {
      view: 'quiz',
      domainId: 'algebra-functions',
      subcategoryId: 'sequences',
      topicId: 'finite-geometric-series-sum',
      testId: 'finite-geometric-series-sum',
    };
  }

  if (
    path.includes('infinite-geometric-series-convergence') ||
    (isSequencesRoute && (path.includes('infinite') || path.includes('convergence') || path.includes('اللانهائية') || path.includes('التقارب')))
  ) {
    return {
      view: 'quiz',
      domainId: 'algebra-functions',
      subcategoryId: 'sequences',
      topicId: 'infinite-geometric-series-convergence',
      testId: 'infinite-geometric-series-convergence',
    };
  }

  if (
    path.includes('sigma-notation-series') ||
    (isSequencesRoute && (path.includes('sigma') || path.includes('سيجما') || path.includes('رمز-المجموع')))
  ) {
    return {
      view: 'quiz',
      domainId: 'algebra-functions',
      subcategoryId: 'sequences',
      topicId: 'sigma-notation-series',
      testId: 'sigma-notation-series',
    };
  }

  if (
    path.includes('recursive-sequences-relations') ||
    (isSequencesRoute && (path.includes('recursive') || path.includes('العودية') || path.includes('التراجعية')))
  ) {
    return {
      view: 'quiz',
      domainId: 'algebra-functions',
      subcategoryId: 'sequences',
      topicId: 'recursive-sequences-relations',
      testId: 'recursive-sequences-relations',
    };
  }

  if (
    path.includes('fibonacci-and-special-sequences') ||
    (isSequencesRoute && (path.includes('fibonacci') || path.includes('فيبوناتشي') || path.includes('النسبة-الذهبية')))
  ) {
    return {
      view: 'quiz',
      domainId: 'algebra-functions',
      subcategoryId: 'sequences',
      topicId: 'fibonacci-and-special-sequences',
      testId: 'fibonacci-and-special-sequences',
    };
  }

  if (
    path.includes('sequences-series-word-problems') ||
    (isSequencesRoute && (path.includes('word-problems') || path.includes('applications') || path.includes('مسائل-كلامية') || path.includes('تطبيقات')))
  ) {
    return {
      view: 'quiz',
      domainId: 'algebra-functions',
      subcategoryId: 'sequences',
      topicId: 'sequences-series-word-problems',
      testId: 'sequences-series-word-problems',
    };
  }

  // Subcategory overview landing route for sequences
  if (
    path === 'math/algebra-functions/sequences' ||
    path === 'math/sequences' ||
    path === 'sequences' ||
    path === 'المتتاليات' ||
    path === 'المتتاليات-والمتسلسلات'
  ) {
    return {
      view: 'quiz',
      domainId: 'algebra-functions',
      subcategoryId: 'sequences',
    };
  }

  // ==================== FUNCTIONS AND GRAPHS QUIZ ROUTES ====================
  const isFunctionsGraphsRoute =
    path.includes('functions-graphs') ||
    path.includes('functions') ||
    path.includes('الدوال-والرسوم-البيانية') ||
    path.includes('الدوال_والرسوم_البيانية') ||
    path.includes('الدوال');

  if (
    path.includes('function-concept-vertical-line-test') ||
    (isFunctionsGraphsRoute && (path.includes('vertical-line') || path.includes('concept') || path.includes('الخط-الرأسي') || path.includes('مفهوم-الدالة')))
  ) {
    return {
      view: 'quiz',
      domainId: 'algebra-functions',
      subcategoryId: 'functions-graphs',
      topicId: 'function-concept-vertical-line-test',
      testId: 'function-concept-vertical-line-test',
    };
  }

  if (
    path.includes('function-domain-and-range') ||
    (isFunctionsGraphsRoute && (path.includes('domain-and-range') || path.includes('المجال-والمدى') || path.includes('المجال_والمدى')))
  ) {
    return {
      view: 'quiz',
      domainId: 'algebra-functions',
      subcategoryId: 'functions-graphs',
      topicId: 'function-domain-and-range',
      testId: 'function-domain-and-range',
    };
  }

  if (
    path.includes('function-notation-evaluation') ||
    (isFunctionsGraphsRoute && (path.includes('notation') || path.includes('evaluation') || path.includes('التعويض') || path.includes('رمز-الدالة')))
  ) {
    return {
      view: 'quiz',
      domainId: 'algebra-functions',
      subcategoryId: 'functions-graphs',
      topicId: 'function-notation-evaluation',
      testId: 'function-notation-evaluation',
    };
  }

  if (
    path.includes('even-and-odd-functions') ||
    (isFunctionsGraphsRoute && (path.includes('even-odd') || path.includes('even-and-odd') || path.includes('الدوال-الزوجية') || path.includes('الدوال-الفردية')))
  ) {
    return {
      view: 'quiz',
      domainId: 'algebra-functions',
      subcategoryId: 'functions-graphs',
      topicId: 'even-and-odd-functions',
      testId: 'even-and-odd-functions',
    };
  }

  if (
    path.includes('function-transformations') ||
    (isFunctionsGraphsRoute && (path.includes('transformations') || path.includes('التحويلات-الهندسية') || path.includes('التحويلات_الهندسية')))
  ) {
    return {
      view: 'quiz',
      domainId: 'algebra-functions',
      subcategoryId: 'functions-graphs',
      topicId: 'function-transformations',
      testId: 'function-transformations',
    };
  }

  if (
    path.includes('composite-functions') ||
    (isFunctionsGraphsRoute && (path.includes('composite') || path.includes('تركيب-الدوال') || path.includes('تركيب_الدوال')))
  ) {
    return {
      view: 'quiz',
      domainId: 'algebra-functions',
      subcategoryId: 'functions-graphs',
      topicId: 'composite-functions',
      testId: 'composite-functions',
    };
  }

  if (
    path.includes('inverse-functions') ||
    (isFunctionsGraphsRoute && (path.includes('inverse') || path.includes('الدالة-العكسية') || path.includes('الدالة_العكسية')))
  ) {
    return {
      view: 'quiz',
      domainId: 'algebra-functions',
      subcategoryId: 'functions-graphs',
      topicId: 'inverse-functions',
      testId: 'inverse-functions',
    };
  }

  if (
    path.includes('piecewise-defined-functions') ||
    (isFunctionsGraphsRoute && (path.includes('piecewise') || path.includes('متعددة-القواعد') || path.includes('أكثر-من-قاعدة')))
  ) {
    return {
      view: 'quiz',
      domainId: 'algebra-functions',
      subcategoryId: 'functions-graphs',
      topicId: 'piecewise-defined-functions',
      testId: 'piecewise-defined-functions',
    };
  }

  if (
    path.includes('analyzing-functions-behavior-extrema') ||
    (isFunctionsGraphsRoute && (path.includes('behavior') || path.includes('extrema') || path.includes('الاطراد') || path.includes('القيم-القصوى')))
  ) {
    return {
      view: 'quiz',
      domainId: 'algebra-functions',
      subcategoryId: 'functions-graphs',
      topicId: 'analyzing-functions-behavior-extrema',
      testId: 'analyzing-functions-behavior-extrema',
    };
  }

  if (
    path.includes('parent-functions-graphs') ||
    (isFunctionsGraphsRoute && (path.includes('parent-functions') || path.includes('الدوال-الأم') || path.includes('الدوال-الأصلية')))
  ) {
    return {
      view: 'quiz',
      domainId: 'algebra-functions',
      subcategoryId: 'functions-graphs',
      topicId: 'parent-functions-graphs',
      testId: 'parent-functions-graphs',
    };
  }

  if (
    path.includes('rational-functions-asymptotes') ||
    (isFunctionsGraphsRoute && (path.includes('asymptotes') || path.includes('خطوط-التقارب') || path.includes('التقارب')))
  ) {
    return {
      view: 'quiz',
      domainId: 'algebra-functions',
      subcategoryId: 'functions-graphs',
      topicId: 'rational-functions-asymptotes',
      testId: 'rational-functions-asymptotes',
    };
  }

  if (
    path.includes('functions-word-problems-applications') ||
    (isFunctionsGraphsRoute && (path.includes('word-problems') || path.includes('applications') || path.includes('مسائل-كلامية') || path.includes('تطبيقات')))
  ) {
    return {
      view: 'quiz',
      domainId: 'algebra-functions',
      subcategoryId: 'functions-graphs',
      topicId: 'functions-word-problems-applications',
      testId: 'functions-word-problems-applications',
    };
  }

  // Subcategory overview landing route for functions-graphs
  if (
    path === 'math/algebra-functions/functions-graphs' ||
    path === 'math/functions-graphs' ||
    path === 'functions-graphs' ||
    path === 'الدوال-والرسوم-البيانية'
  ) {
    return {
      view: 'quiz',
      domainId: 'algebra-functions',
      subcategoryId: 'functions-graphs',
    };
  }

  // ==================== QUADRATIC EQUATIONS QUIZ ROUTES ====================
  const isQuadraticRoute =
    path.includes('quadratic-equations') ||
    path.includes('quadratic') ||
    path.includes('المعادلات-التربيعية') ||
    path.includes('المعادلات_التربيعية');

  if (
    path.includes('quadratic-standard-form-coefficients') ||
    (isQuadraticRoute && (path.includes('standard-form') || path.includes('coefficients') || path.includes('الصورة-القياسية') || path.includes('المعاملات')))
  ) {
    return {
      view: 'quiz',
      domainId: 'algebra-functions',
      subcategoryId: 'quadratic-equations',
      topicId: 'quadratic-standard-form-coefficients',
      testId: 'quadratic-standard-form-coefficients',
    };
  }

  if (
    path.includes('quadratic-square-root-method') ||
    (isQuadraticRoute && (path.includes('square-root') || path.includes('الجذر-التربيعي')))
  ) {
    return {
      view: 'quiz',
      domainId: 'algebra-functions',
      subcategoryId: 'quadratic-equations',
      topicId: 'quadratic-square-root-method',
      testId: 'quadratic-square-root-method',
    };
  }

  if (
    path.includes('quadratic-factoring-gcf') ||
    (isQuadraticRoute && (path.includes('factoring-gcf') || path.includes('gcf') || path.includes('عامل-مشترك')))
  ) {
    return {
      view: 'quiz',
      domainId: 'algebra-functions',
      subcategoryId: 'quadratic-equations',
      topicId: 'quadratic-factoring-gcf',
      testId: 'quadratic-factoring-gcf',
    };
  }

  if (
    path.includes('quadratic-factoring-simple-trinomial') ||
    (isQuadraticRoute && (path.includes('simple-trinomial') || path.includes('ثلاثية-الحدود-البسيطة')))
  ) {
    return {
      view: 'quiz',
      domainId: 'algebra-functions',
      subcategoryId: 'quadratic-equations',
      topicId: 'quadratic-factoring-simple-trinomial',
      testId: 'quadratic-factoring-simple-trinomial',
    };
  }

  if (
    path.includes('quadratic-factoring-general-trinomial') ||
    (isQuadraticRoute && (path.includes('general-trinomial') || path.includes('ثلاثية-الحدود-العامة')))
  ) {
    return {
      view: 'quiz',
      domainId: 'algebra-functions',
      subcategoryId: 'quadratic-equations',
      topicId: 'quadratic-factoring-general-trinomial',
      testId: 'quadratic-factoring-general-trinomial',
    };
  }

  if (
    path.includes('quadratic-completing-the-square') ||
    (isQuadraticRoute && (path.includes('completing-the-square') || path.includes('completing-square') || path.includes('إكمال-المربع')))
  ) {
    return {
      view: 'quiz',
      domainId: 'algebra-functions',
      subcategoryId: 'quadratic-equations',
      topicId: 'quadratic-completing-the-square',
      testId: 'quadratic-completing-the-square',
    };
  }

  if (
    path.includes('quadratic-formula-method') ||
    (isQuadraticRoute && (path.includes('formula') || path.includes('القانون-العام')))
  ) {
    return {
      view: 'quiz',
      domainId: 'algebra-functions',
      subcategoryId: 'quadratic-equations',
      topicId: 'quadratic-formula-method',
      testId: 'quadratic-formula-method',
    };
  }

  if (
    path.includes('quadratic-discriminant-roots-nature') ||
    (isQuadraticRoute && (path.includes('discriminant') || path.includes('المميز')))
  ) {
    return {
      view: 'quiz',
      domainId: 'algebra-functions',
      subcategoryId: 'quadratic-equations',
      topicId: 'quadratic-discriminant-roots-nature',
      testId: 'quadratic-discriminant-roots-nature',
    };
  }

  if (
    path.includes('quadratic-parabola-vertex-axis') ||
    (isQuadraticRoute && (path.includes('parabola') || path.includes('vertex') || path.includes('القطع-المكافئ') || path.includes('رأس-القطع')))
  ) {
    return {
      view: 'quiz',
      domainId: 'algebra-functions',
      subcategoryId: 'quadratic-equations',
      topicId: 'quadratic-parabola-vertex-axis',
      testId: 'quadratic-parabola-vertex-axis',
    };
  }

  if (
    path.includes('quadratic-intercepts-graphing') ||
    (isQuadraticRoute && (path.includes('intercepts') || path.includes('نقاط-التقاطع') || path.includes('المقطع-الصادي') || path.includes('المقطع-السيني')))
  ) {
    return {
      view: 'quiz',
      domainId: 'algebra-functions',
      subcategoryId: 'quadratic-equations',
      topicId: 'quadratic-intercepts-graphing',
      testId: 'quadratic-intercepts-graphing',
    };
  }

  if (
    path.includes('quadratic-word-problems-projectiles') ||
    (isQuadraticRoute && (path.includes('projectiles') || path.includes('المقذوفات') || path.includes('المسائل-الكلامية-التربيعية')))
  ) {
    return {
      view: 'quiz',
      domainId: 'algebra-functions',
      subcategoryId: 'quadratic-equations',
      topicId: 'quadratic-word-problems-projectiles',
      testId: 'quadratic-word-problems-projectiles',
    };
  }

  if (
    path.includes('quadratic-roots-formation-vieta') ||
    (isQuadraticRoute && (path.includes('vieta') || path.includes('roots-formation') || path.includes('فييتا') || path.includes('تكوين-المعادلة')))
  ) {
    return {
      view: 'quiz',
      domainId: 'algebra-functions',
      subcategoryId: 'quadratic-equations',
      topicId: 'quadratic-roots-formation-vieta',
      testId: 'quadratic-roots-formation-vieta',
    };
  }

  // Subcategory overview landing route for quadratic-equations
  if (
    path === 'math/algebra-functions/quadratic-equations' ||
    path === 'math/quadratic-equations' ||
    path === 'quadratic-equations' ||
    path === 'المعادلات-التربيعية'
  ) {
    return {
      view: 'quiz',
      domainId: 'algebra-functions',
      subcategoryId: 'quadratic-equations',
    };
  }

  // ==================== POLYNOMIALS QUIZ ROUTES ====================
  const isPolynomialsRoute =
    path.includes('polynomials') ||
    path.includes('polynomial') ||
    path.includes('كثيرات-الحدود') ||
    path.includes('كثيرات_الحدود');

  if (
    path.includes('polynomial-degree-leading-coefficient') ||
    (isPolynomialsRoute && (path.includes('degree') || path.includes('leading-coefficient')))
  ) {
    return {
      view: 'quiz',
      domainId: 'algebra-functions',
      subcategoryId: 'polynomials',
      topicId: 'polynomial-degree-leading-coefficient',
      testId: 'polynomial-degree-leading-coefficient',
    };
  }

  if (
    path.includes('polynomial-classification') ||
    (isPolynomialsRoute && (path.includes('classification') || path.includes('تصنيف')))
  ) {
    return {
      view: 'quiz',
      domainId: 'algebra-functions',
      subcategoryId: 'polynomials',
      topicId: 'polynomial-classification',
      testId: 'polynomial-classification',
    };
  }

  if (
    path.includes('polynomial-addition-subtraction') ||
    (isPolynomialsRoute && (path.includes('addition') || path.includes('subtraction') || path.includes('جمع-طرح')))
  ) {
    return {
      view: 'quiz',
      domainId: 'algebra-functions',
      subcategoryId: 'polynomials',
      topicId: 'polynomial-addition-subtraction',
      testId: 'polynomial-addition-subtraction',
    };
  }

  if (
    path.includes('polynomial-monomial-multiplication') ||
    (isPolynomialsRoute && (path.includes('monomial') || path.includes('ضرب-حدية')))
  ) {
    return {
      view: 'quiz',
      domainId: 'algebra-functions',
      subcategoryId: 'polynomials',
      topicId: 'polynomial-monomial-multiplication',
      testId: 'polynomial-monomial-multiplication',
    };
  }

  if (
    path.includes('polynomial-binomial-multiplication') ||
    (isPolynomialsRoute && (path.includes('binomial') || path.includes('foil') || path.includes('ثنائيتي-حد')))
  ) {
    return {
      view: 'quiz',
      domainId: 'algebra-functions',
      subcategoryId: 'polynomials',
      topicId: 'polynomial-binomial-multiplication',
      testId: 'polynomial-binomial-multiplication',
    };
  }

  if (
    path.includes('polynomial-special-products') ||
    (isPolynomialsRoute && (path.includes('special-products') || path.includes('حالات-خاصة-ضرب')))
  ) {
    return {
      view: 'quiz',
      domainId: 'algebra-functions',
      subcategoryId: 'polynomials',
      topicId: 'polynomial-special-products',
      testId: 'polynomial-special-products',
    };
  }

  if (
    path.includes('polynomial-gcf-factoring') ||
    (isPolynomialsRoute && (path.includes('gcf') || path.includes('عامل-مشترك')))
  ) {
    return {
      view: 'quiz',
      domainId: 'algebra-functions',
      subcategoryId: 'polynomials',
      topicId: 'polynomial-gcf-factoring',
      testId: 'polynomial-gcf-factoring',
    };
  }

  if (
    path.includes('polynomial-trinomial-factoring-simple') ||
    (isPolynomialsRoute && (path.includes('simple-trinomial') || path.includes('ثلاثية-بسيطة')))
  ) {
    return {
      view: 'quiz',
      domainId: 'algebra-functions',
      subcategoryId: 'polynomials',
      topicId: 'polynomial-trinomial-factoring-simple',
      testId: 'polynomial-trinomial-factoring-simple',
    };
  }

  if (
    path.includes('polynomial-trinomial-factoring-advanced') ||
    (isPolynomialsRoute && (path.includes('advanced-trinomial') || path.includes('ac-method') || path.includes('ثلاثية-متقدمة')))
  ) {
    return {
      view: 'quiz',
      domainId: 'algebra-functions',
      subcategoryId: 'polynomials',
      topicId: 'polynomial-trinomial-factoring-advanced',
      testId: 'polynomial-trinomial-factoring-advanced',
    };
  }

  if (
    path.includes('polynomial-special-factoring') ||
    (isPolynomialsRoute && (path.includes('special-factoring') || path.includes('مكعبين') || path.includes('مربعين')))
  ) {
    return {
      view: 'quiz',
      domainId: 'algebra-functions',
      subcategoryId: 'polynomials',
      topicId: 'polynomial-special-factoring',
      testId: 'polynomial-special-factoring',
    };
  }

  if (
    path.includes('polynomial-division') ||
    (isPolynomialsRoute && (path.includes('division') || path.includes('قسمة')))
  ) {
    return {
      view: 'quiz',
      domainId: 'algebra-functions',
      subcategoryId: 'polynomials',
      topicId: 'polynomial-division',
      testId: 'polynomial-division',
    };
  }

  if (
    path.includes('polynomial-word-problems') ||
    (isPolynomialsRoute && (path.includes('word-problems') || path.includes('مسائل-كلامية') || path.includes('مساحة-حجم')))
  ) {
    return {
      view: 'quiz',
      domainId: 'algebra-functions',
      subcategoryId: 'polynomials',
      topicId: 'polynomial-word-problems',
      testId: 'polynomial-word-problems',
    };
  }

  // ==================== INEQUALITIES QUIZ ROUTES ====================
  const isInequalitiesRoute =
    path.includes('inequalities') ||
    path.includes('inequality') ||
    path.includes('متباينات');

  if (
    path.includes('inequality-symbols-comparison') ||
    (isInequalitiesRoute && (path.includes('symbols') || path.includes('comparison')))
  ) {
    return {
      view: 'quiz',
      domainId: 'algebra-functions',
      subcategoryId: 'inequalities',
      topicId: 'inequality-symbols-comparison',
      testId: 'inequality-symbols-comparison',
    };
  }

  if (
    path.includes('graphing-inequalities-number-line') ||
    (isInequalitiesRoute && (path.includes('graphing') || path.includes('number-line')))
  ) {
    return {
      view: 'quiz',
      domainId: 'algebra-functions',
      subcategoryId: 'inequalities',
      topicId: 'graphing-inequalities-number-line',
      testId: 'graphing-inequalities-number-line',
    };
  }

  if (
    path.includes('one-step-addition-subtraction-inequalities') ||
    (isInequalitiesRoute && (path.includes('addition-subtraction') || path.includes('one-step')))
  ) {
    return {
      view: 'quiz',
      domainId: 'algebra-functions',
      subcategoryId: 'inequalities',
      topicId: 'one-step-addition-subtraction-inequalities',
      testId: 'one-step-addition-subtraction-inequalities',
    };
  }

  if (
    path.includes('multiplication-division-positive-inequalities') ||
    (isInequalitiesRoute && (path.includes('positive') || path.includes('multiplication-division')))
  ) {
    return {
      view: 'quiz',
      domainId: 'algebra-functions',
      subcategoryId: 'inequalities',
      topicId: 'multiplication-division-positive-inequalities',
      testId: 'multiplication-division-positive-inequalities',
    };
  }

  if (
    path.includes('negative-multiplication-reversing-inequalities') ||
    (isInequalitiesRoute && (path.includes('negative') || path.includes('reversing')))
  ) {
    return {
      view: 'quiz',
      domainId: 'algebra-functions',
      subcategoryId: 'inequalities',
      topicId: 'negative-multiplication-reversing-inequalities',
      testId: 'negative-multiplication-reversing-inequalities',
    };
  }

  if (
    path.includes('two-step-inequalities') ||
    (isInequalitiesRoute && path.includes('two-step'))
  ) {
    return {
      view: 'quiz',
      domainId: 'algebra-functions',
      subcategoryId: 'inequalities',
      topicId: 'two-step-inequalities',
      testId: 'two-step-inequalities',
    };
  }

  if (
    path.includes('distributive-parentheses-inequalities') ||
    (isInequalitiesRoute && (path.includes('distributive') || path.includes('parentheses')))
  ) {
    return {
      view: 'quiz',
      domainId: 'algebra-functions',
      subcategoryId: 'inequalities',
      topicId: 'distributive-parentheses-inequalities',
      testId: 'distributive-parentheses-inequalities',
    };
  }

  if (
    path.includes('variables-both-sides-inequalities') ||
    (isInequalitiesRoute && (path.includes('variables-both-sides') || path.includes('both-sides')))
  ) {
    return {
      view: 'quiz',
      domainId: 'algebra-functions',
      subcategoryId: 'inequalities',
      topicId: 'variables-both-sides-inequalities',
      testId: 'variables-both-sides-inequalities',
    };
  }

  if (
    path.includes('compound-inequalities') ||
    (isInequalitiesRoute && (path.includes('compound') || path.includes('مركبة')))
  ) {
    return {
      view: 'quiz',
      domainId: 'algebra-functions',
      subcategoryId: 'inequalities',
      topicId: 'compound-inequalities',
      testId: 'compound-inequalities',
    };
  }

  if (
    path.includes('absolute-value-inequalities') ||
    (isInequalitiesRoute && (path.includes('absolute-value') || path.includes('absolute')))
  ) {
    return {
      view: 'quiz',
      domainId: 'algebra-functions',
      subcategoryId: 'inequalities',
      topicId: 'absolute-value-inequalities',
      testId: 'absolute-value-inequalities',
    };
  }

  if (
    path.includes('two-variable-linear-inequalities') ||
    (isInequalitiesRoute && (path.includes('two-variable') || path.includes('coordinate')))
  ) {
    return {
      view: 'quiz',
      domainId: 'algebra-functions',
      subcategoryId: 'inequalities',
      topicId: 'two-variable-linear-inequalities',
      testId: 'two-variable-linear-inequalities',
    };
  }

  if (
    path.includes('inequalities-word-problems') ||
    (isInequalitiesRoute && (path.includes('word-problems') || path.includes('مسائل')))
  ) {
    return {
      view: 'quiz',
      domainId: 'algebra-functions',
      subcategoryId: 'inequalities',
      topicId: 'inequalities-word-problems',
      testId: 'inequalities-word-problems',
    };
  }

  // ==================== LINEAR EQUATIONS QUIZ ROUTES ====================
  const isLinearEquationsRoute =
    path.includes('linear-equations') ||
    path.includes('linear') ||
    path.includes('equations');

  if (
    path.includes('one-step-equations') ||
    (isLinearEquationsRoute && path.includes('one-step'))
  ) {
    return {
      view: 'quiz',
      domainId: 'algebra-functions',
      subcategoryId: 'linear-equations',
      topicId: 'one-step-equations',
      testId: 'one-step-equations',
    };
  }

  if (
    path.includes('two-step-equations') ||
    (isLinearEquationsRoute && path.includes('two-step'))
  ) {
    return {
      view: 'quiz',
      domainId: 'algebra-functions',
      subcategoryId: 'linear-equations',
      topicId: 'two-step-equations',
      testId: 'two-step-equations',
    };
  }

  if (
    path.includes('equations-parentheses-distributive') ||
    (isLinearEquationsRoute && (path.includes('parentheses') || path.includes('distributive')))
  ) {
    return {
      view: 'quiz',
      domainId: 'algebra-functions',
      subcategoryId: 'linear-equations',
      topicId: 'equations-parentheses-distributive',
      testId: 'equations-parentheses-distributive',
    };
  }

  if (
    path.includes('equations-variables-both-sides') ||
    (isLinearEquationsRoute && (path.includes('both-sides') || path.includes('variables-both')))
  ) {
    return {
      view: 'quiz',
      domainId: 'algebra-functions',
      subcategoryId: 'linear-equations',
      topicId: 'equations-variables-both-sides',
      testId: 'equations-variables-both-sides',
    };
  }

  if (
    path.includes('equations-fractions-decimals') ||
    (isLinearEquationsRoute && (path.includes('fractions-decimals') || path.includes('clearing-fractions')))
  ) {
    return {
      view: 'quiz',
      domainId: 'algebra-functions',
      subcategoryId: 'linear-equations',
      topicId: 'equations-fractions-decimals',
      testId: 'equations-fractions-decimals',
    };
  }

  if (
    path.includes('evaluating-algebraic-expressions') ||
    (isLinearEquationsRoute && (path.includes('evaluating') || path.includes('expressions')))
  ) {
    return {
      view: 'quiz',
      domainId: 'algebra-functions',
      subcategoryId: 'linear-equations',
      topicId: 'evaluating-algebraic-expressions',
      testId: 'evaluating-algebraic-expressions',
    };
  }

  if (
    path.includes('special-cases-equations') ||
    (isLinearEquationsRoute && (path.includes('special-cases') || path.includes('no-solution') || path.includes('infinite-solutions')))
  ) {
    return {
      view: 'quiz',
      domainId: 'algebra-functions',
      subcategoryId: 'linear-equations',
      topicId: 'special-cases-equations',
      testId: 'special-cases-equations',
    };
  }

  if (
    path.includes('finding-slope-linear') ||
    (isLinearEquationsRoute && (path.includes('finding-slope') || path.includes('slope')))
  ) {
    return {
      view: 'quiz',
      domainId: 'algebra-functions',
      subcategoryId: 'linear-equations',
      topicId: 'finding-slope-linear',
      testId: 'finding-slope-linear',
    };
  }

  if (
    path.includes('writing-slope-intercept-form') ||
    (isLinearEquationsRoute && (path.includes('slope-intercept') || path.includes('writing-slope')))
  ) {
    return {
      view: 'quiz',
      domainId: 'algebra-functions',
      subcategoryId: 'linear-equations',
      topicId: 'writing-slope-intercept-form',
      testId: 'writing-slope-intercept-form',
    };
  }

  if (
    path.includes('graphing-linear-equations') ||
    (isLinearEquationsRoute && (path.includes('graphing') || path.includes('graphing-linear')))
  ) {
    return {
      view: 'quiz',
      domainId: 'algebra-functions',
      subcategoryId: 'linear-equations',
      topicId: 'graphing-linear-equations',
      testId: 'graphing-linear-equations',
    };
  }

  if (
    path.includes('systems-of-linear-equations') ||
    (isLinearEquationsRoute && (path.includes('systems') || path.includes('system-of-equations')))
  ) {
    return {
      view: 'quiz',
      domainId: 'algebra-functions',
      subcategoryId: 'linear-equations',
      topicId: 'systems-of-linear-equations',
      testId: 'systems-of-linear-equations',
    };
  }

  if (
    path.includes('linear-equations-word-problems') ||
    (isLinearEquationsRoute && (path.includes('linear-word-problems') || path.includes('equations-word-problems')))
  ) {
    return {
      view: 'quiz',
      domainId: 'algebra-functions',
      subcategoryId: 'linear-equations',
      topicId: 'linear-equations-word-problems',
      testId: 'linear-equations-word-problems',
    };
  }

  // ==================== NUMBER LINE & MEASUREMENT QUIZ ROUTES ====================
  const isNumberLineMeasurementRoute =
    path.includes('number-line-measurement') ||
    path.includes('number-line') ||
    path.includes('measurement');

  if (
    path.includes('whole-numbers-on-number-line') ||
    (isNumberLineMeasurementRoute && (path.includes('whole-numbers') || path.includes('whole')))
  ) {
    return {
      view: 'quiz',
      domainId: 'basic-math',
      subcategoryId: 'number-line-measurement',
      topicId: 'whole-numbers-on-number-line',
      testId: 'whole-numbers-on-number-line',
    };
  }

  if (
    path.includes('negative-positive-number-line') ||
    (isNumberLineMeasurementRoute && (path.includes('negative-positive') || path.includes('integers')))
  ) {
    return {
      view: 'quiz',
      domainId: 'basic-math',
      subcategoryId: 'number-line-measurement',
      topicId: 'negative-positive-number-line',
      testId: 'negative-positive-number-line',
    };
  }

  if (
    path.includes('fractions-decimals-number-line') ||
    (isNumberLineMeasurementRoute && (path.includes('fractions-decimals') || path.includes('fraction-number-line')))
  ) {
    return {
      view: 'quiz',
      domainId: 'basic-math',
      subcategoryId: 'number-line-measurement',
      topicId: 'fractions-decimals-number-line',
      testId: 'fractions-decimals-number-line',
    };
  }

  if (
    path.includes('distance-between-points-number-line') ||
    (isNumberLineMeasurementRoute && (path.includes('distance-between-points') || path.includes('distance')))
  ) {
    return {
      view: 'quiz',
      domainId: 'basic-math',
      subcategoryId: 'number-line-measurement',
      topicId: 'distance-between-points-number-line',
      testId: 'distance-between-points-number-line',
    };
  }

  if (
    path.includes('measuring-length-standard-units') ||
    (isNumberLineMeasurementRoute && (path.includes('measuring-length') || path.includes('length')))
  ) {
    return {
      view: 'quiz',
      domainId: 'basic-math',
      subcategoryId: 'number-line-measurement',
      topicId: 'measuring-length-standard-units',
      testId: 'measuring-length-standard-units',
    };
  }

  if (
    path.includes('measuring-mass-weight') ||
    (isNumberLineMeasurementRoute && (path.includes('measuring-mass') || path.includes('mass') || path.includes('weight')))
  ) {
    return {
      view: 'quiz',
      domainId: 'basic-math',
      subcategoryId: 'number-line-measurement',
      topicId: 'measuring-mass-weight',
      testId: 'measuring-mass-weight',
    };
  }

  if (
    path.includes('measuring-capacity-volume') ||
    (isNumberLineMeasurementRoute && (path.includes('measuring-capacity') || path.includes('capacity') || path.includes('volume')))
  ) {
    return {
      view: 'quiz',
      domainId: 'basic-math',
      subcategoryId: 'number-line-measurement',
      topicId: 'measuring-capacity-volume',
      testId: 'measuring-capacity-volume',
    };
  }

  if (
    path.includes('reading-measurement-tools') ||
    (isNumberLineMeasurementRoute && (path.includes('reading-measurement') || path.includes('tools')))
  ) {
    return {
      view: 'quiz',
      domainId: 'basic-math',
      subcategoryId: 'number-line-measurement',
      topicId: 'reading-measurement-tools',
      testId: 'reading-measurement-tools',
    };
  }

  if (
    path.includes('elapsed-time-calculation') ||
    (isNumberLineMeasurementRoute && (path.includes('elapsed-time') || path.includes('time')))
  ) {
    return {
      view: 'quiz',
      domainId: 'basic-math',
      subcategoryId: 'number-line-measurement',
      topicId: 'elapsed-time-calculation',
      testId: 'elapsed-time-calculation',
    };
  }

  if (
    path.includes('perimeter-and-area-simple-shapes') ||
    (isNumberLineMeasurementRoute && (path.includes('perimeter-and-area') || path.includes('perimeter') || path.includes('area')))
  ) {
    return {
      view: 'quiz',
      domainId: 'basic-math',
      subcategoryId: 'number-line-measurement',
      topicId: 'perimeter-and-area-simple-shapes',
      testId: 'perimeter-and-area-simple-shapes',
    };
  }

  if (
    path.includes('angles-measurement-protractor') ||
    (isNumberLineMeasurementRoute && (path.includes('angles') || path.includes('protractor')))
  ) {
    return {
      view: 'quiz',
      domainId: 'basic-math',
      subcategoryId: 'number-line-measurement',
      topicId: 'angles-measurement-protractor',
      testId: 'angles-measurement-protractor',
    };
  }

  if (
    path.includes('number-line-measurement-word-problems') ||
    (isNumberLineMeasurementRoute && (path.includes('number-line-measurement-word') || path.includes('measurement-word-problems')))
  ) {
    return {
      view: 'quiz',
      domainId: 'basic-math',
      subcategoryId: 'number-line-measurement',
      topicId: 'number-line-measurement-word-problems',
      testId: 'number-line-measurement-word-problems',
    };
  }

  // ==================== ORDER OF OPERATIONS QUIZ ROUTES ====================
  const isOrderOfOperationsRoute = path.includes('order-of-operations') || path.includes('operations');

  if (
    path.includes('operations-basic-no-parentheses') ||
    (isOrderOfOperationsRoute && path.includes('no-parentheses'))
  ) {
    return {
      view: 'quiz',
      domainId: 'basic-math',
      subcategoryId: 'order-of-operations',
      topicId: 'operations-basic-no-parentheses',
      testId: 'operations-basic-no-parentheses',
    };
  }

  if (
    path.includes('operations-simple-parentheses') ||
    (isOrderOfOperationsRoute && path.includes('simple-parentheses'))
  ) {
    return {
      view: 'quiz',
      domainId: 'basic-math',
      subcategoryId: 'order-of-operations',
      topicId: 'operations-simple-parentheses',
      testId: 'operations-simple-parentheses',
    };
  }

  if (
    path.includes('operations-nested-brackets') ||
    (isOrderOfOperationsRoute && (path.includes('nested') || path.includes('brackets')))
  ) {
    return {
      view: 'quiz',
      domainId: 'basic-math',
      subcategoryId: 'order-of-operations',
      topicId: 'operations-nested-brackets',
      testId: 'operations-nested-brackets',
    };
  }

  if (
    path.includes('operations-with-exponents') ||
    (isOrderOfOperationsRoute && (path.includes('exponents') || path.includes('powers')))
  ) {
    return {
      view: 'quiz',
      domainId: 'basic-math',
      subcategoryId: 'order-of-operations',
      topicId: 'operations-with-exponents',
      testId: 'operations-with-exponents',
    };
  }

  if (
    path.includes('operations-with-square-roots') ||
    (isOrderOfOperationsRoute && (path.includes('square-roots') || path.includes('roots')))
  ) {
    return {
      view: 'quiz',
      domainId: 'basic-math',
      subcategoryId: 'order-of-operations',
      topicId: 'operations-with-square-roots',
      testId: 'operations-with-square-roots',
    };
  }

  if (
    path.includes('operations-fractional-expressions') ||
    (isOrderOfOperationsRoute && path.includes('fractional-expressions'))
  ) {
    return {
      view: 'quiz',
      domainId: 'basic-math',
      subcategoryId: 'order-of-operations',
      topicId: 'operations-fractional-expressions',
      testId: 'operations-fractional-expressions',
    };
  }

  if (
    path.includes('operations-with-negative-numbers') ||
    (isOrderOfOperationsRoute && path.includes('negative'))
  ) {
    return {
      view: 'quiz',
      domainId: 'basic-math',
      subcategoryId: 'order-of-operations',
      topicId: 'operations-with-negative-numbers',
      testId: 'operations-with-negative-numbers',
    };
  }

  if (
    path.includes('operations-fractions-decimals') ||
    (isOrderOfOperationsRoute && (path.includes('fractions-decimals') || path.includes('decimals')))
  ) {
    return {
      view: 'quiz',
      domainId: 'basic-math',
      subcategoryId: 'order-of-operations',
      topicId: 'operations-fractions-decimals',
      testId: 'operations-fractions-decimals',
    };
  }

  if (
    path.includes('operations-absolute-value') ||
    (isOrderOfOperationsRoute && path.includes('absolute-value'))
  ) {
    return {
      view: 'quiz',
      domainId: 'basic-math',
      subcategoryId: 'order-of-operations',
      topicId: 'operations-absolute-value',
      testId: 'operations-absolute-value',
    };
  }

  if (
    path.includes('operations-error-detection') ||
    (isOrderOfOperationsRoute && path.includes('error-detection'))
  ) {
    return {
      view: 'quiz',
      domainId: 'basic-math',
      subcategoryId: 'order-of-operations',
      topicId: 'operations-error-detection',
      testId: 'operations-error-detection',
    };
  }

  if (
    path.includes('operations-missing-brackets-signs') ||
    (isOrderOfOperationsRoute && (path.includes('missing-brackets') || path.includes('missing-signs')))
  ) {
    return {
      view: 'quiz',
      domainId: 'basic-math',
      subcategoryId: 'order-of-operations',
      topicId: 'operations-missing-brackets-signs',
      testId: 'operations-missing-brackets-signs',
    };
  }

  if (
    path.includes('operations-word-problems') ||
    (isOrderOfOperationsRoute && (path.includes('word-problems') || path.includes('problems')))
  ) {
    return {
      view: 'quiz',
      domainId: 'basic-math',
      subcategoryId: 'order-of-operations',
      topicId: 'operations-word-problems',
      testId: 'operations-word-problems',
    };
  }

  // ==================== RATIOS & PROPORTIONS QUIZ ROUTES ====================
  const isRatiosProportionsRoute = path.includes('ratios-proportions') || path.includes('ratio');

  if (
    path.includes('ratio-understanding-representation') ||
    (isRatiosProportionsRoute && (path.includes('understanding') || path.includes('representation')))
  ) {
    return {
      view: 'quiz',
      domainId: 'basic-math',
      subcategoryId: 'ratios-proportions',
      topicId: 'ratio-understanding-representation',
      testId: 'ratio-understanding-representation',
    };
  }

  if (
    path.includes('ratio-simplification-equivalence') ||
    (isRatiosProportionsRoute && (path.includes('simplification') || path.includes('equivalence')))
  ) {
    return {
      view: 'quiz',
      domainId: 'basic-math',
      subcategoryId: 'ratios-proportions',
      topicId: 'ratio-simplification-equivalence',
      testId: 'ratio-simplification-equivalence',
    };
  }

  if (
    path.includes('unit-rate') ||
    (isRatiosProportionsRoute && path.includes('unit-rate'))
  ) {
    return {
      view: 'quiz',
      domainId: 'basic-math',
      subcategoryId: 'ratios-proportions',
      topicId: 'unit-rate',
      testId: 'unit-rate',
    };
  }

  if (
    path.includes('solving-proportions-unknown') ||
    (isRatiosProportionsRoute && (path.includes('solving') || path.includes('unknown')))
  ) {
    return {
      view: 'quiz',
      domainId: 'basic-math',
      subcategoryId: 'ratios-proportions',
      topicId: 'solving-proportions-unknown',
      testId: 'solving-proportions-unknown',
    };
  }

  if (
    path.includes('direct-proportion') ||
    (isRatiosProportionsRoute && path.includes('direct'))
  ) {
    return {
      view: 'quiz',
      domainId: 'basic-math',
      subcategoryId: 'ratios-proportions',
      topicId: 'direct-proportion',
      testId: 'direct-proportion',
    };
  }

  if (
    path.includes('inverse-proportion') ||
    (isRatiosProportionsRoute && path.includes('inverse'))
  ) {
    return {
      view: 'quiz',
      domainId: 'basic-math',
      subcategoryId: 'ratios-proportions',
      topicId: 'inverse-proportion',
      testId: 'inverse-proportion',
    };
  }

  if (
    path.includes('scale-drawings-maps') ||
    (isRatiosProportionsRoute && (path.includes('scale') || path.includes('maps') || path.includes('drawings')))
  ) {
    return {
      view: 'quiz',
      domainId: 'basic-math',
      subcategoryId: 'ratios-proportions',
      topicId: 'scale-drawings-maps',
      testId: 'scale-drawings-maps',
    };
  }

  if (
    path.includes('proportional-division') ||
    (isRatiosProportionsRoute && path.includes('division') && !path.includes('decimals'))
  ) {
    return {
      view: 'quiz',
      domainId: 'basic-math',
      subcategoryId: 'ratios-proportions',
      topicId: 'proportional-division',
      testId: 'proportional-division',
    };
  }

  if (
    path.includes('percentage-and-proportion') ||
    (isRatiosProportionsRoute && path.includes('percentage-and-proportion'))
  ) {
    return {
      view: 'quiz',
      domainId: 'basic-math',
      subcategoryId: 'ratios-proportions',
      topicId: 'percentage-and-proportion',
      testId: 'percentage-and-proportion',
    };
  }

  if (
    path.includes('percentage-change') ||
    (isRatiosProportionsRoute && (path.includes('change') || path.includes('increase') || path.includes('decrease')))
  ) {
    return {
      view: 'quiz',
      domainId: 'basic-math',
      subcategoryId: 'ratios-proportions',
      topicId: 'percentage-change',
      testId: 'percentage-change',
    };
  }

  if (
    path.includes('profit-loss-discount') ||
    (isRatiosProportionsRoute && (path.includes('profit') || path.includes('loss') || path.includes('discount')))
  ) {
    return {
      view: 'quiz',
      domainId: 'basic-math',
      subcategoryId: 'ratios-proportions',
      topicId: 'profit-loss-discount',
      testId: 'profit-loss-discount',
    };
  }

  if (
    path.includes('ratios-word-problems') ||
    (isRatiosProportionsRoute && (path.includes('word-problems') || path.includes('problems')))
  ) {
    return {
      view: 'quiz',
      domainId: 'basic-math',
      subcategoryId: 'ratios-proportions',
      topicId: 'ratios-word-problems',
      testId: 'ratios-word-problems',
    };
  }

  // ==================== FRACTIONS & DECIMALS QUIZ ROUTES ====================
  const isFractionsDecimalsRoute = path.includes('fractions-decimals');

  if (
    path.includes('decimals-identification-reading') ||
    (isFractionsDecimalsRoute && (path.includes('identification') || path.includes('reading')))
  ) {
    return {
      view: 'quiz',
      domainId: 'basic-math',
      subcategoryId: 'fractions-decimals',
      topicId: 'decimals-identification-reading',
      testId: 'decimals-identification-reading',
    };
  }

  if (
    path.includes('decimals-place-value') ||
    (isFractionsDecimalsRoute && path.includes('place-value'))
  ) {
    return {
      view: 'quiz',
      domainId: 'basic-math',
      subcategoryId: 'fractions-decimals',
      topicId: 'decimals-place-value',
      testId: 'decimals-place-value',
    };
  }

  if (
    path.includes('decimals-comparing-ordering') ||
    (isFractionsDecimalsRoute && (path.includes('comparing') || path.includes('ordering')))
  ) {
    return {
      view: 'quiz',
      domainId: 'basic-math',
      subcategoryId: 'fractions-decimals',
      topicId: 'decimals-comparing-ordering',
      testId: 'decimals-comparing-ordering',
    };
  }

  if (
    path.includes('decimals-rounding') ||
    (isFractionsDecimalsRoute && path.includes('rounding'))
  ) {
    return {
      view: 'quiz',
      domainId: 'basic-math',
      subcategoryId: 'fractions-decimals',
      topicId: 'decimals-rounding',
      testId: 'decimals-rounding',
    };
  }

  if (
    path.includes('converting-fractions-decimals') ||
    (isFractionsDecimalsRoute && path.includes('converting'))
  ) {
    return {
      view: 'quiz',
      domainId: 'basic-math',
      subcategoryId: 'fractions-decimals',
      topicId: 'converting-fractions-decimals',
      testId: 'converting-fractions-decimals',
    };
  }

  if (
    path.includes('decimals-addition') ||
    (isFractionsDecimalsRoute && path.includes('addition'))
  ) {
    return {
      view: 'quiz',
      domainId: 'basic-math',
      subcategoryId: 'fractions-decimals',
      topicId: 'decimals-addition',
      testId: 'decimals-addition',
    };
  }

  if (
    path.includes('decimals-subtraction') ||
    (isFractionsDecimalsRoute && path.includes('subtraction'))
  ) {
    return {
      view: 'quiz',
      domainId: 'basic-math',
      subcategoryId: 'fractions-decimals',
      topicId: 'decimals-subtraction',
      testId: 'decimals-subtraction',
    };
  }

  if (
    path.includes('decimal-by-integer-multiplication') ||
    (isFractionsDecimalsRoute && path.includes('by-integer'))
  ) {
    return {
      view: 'quiz',
      domainId: 'basic-math',
      subcategoryId: 'fractions-decimals',
      topicId: 'decimal-by-integer-multiplication',
      testId: 'decimal-by-integer-multiplication',
    };
  }

  if (
    path.includes('decimals-multiplication') ||
    (isFractionsDecimalsRoute && path.includes('multiplication'))
  ) {
    return {
      view: 'quiz',
      domainId: 'basic-math',
      subcategoryId: 'fractions-decimals',
      topicId: 'decimals-multiplication',
      testId: 'decimals-multiplication',
    };
  }

  if (
    path.includes('decimals-division') ||
    (isFractionsDecimalsRoute && path.includes('division'))
  ) {
    return {
      view: 'quiz',
      domainId: 'basic-math',
      subcategoryId: 'fractions-decimals',
      topicId: 'decimals-division',
      testId: 'decimals-division',
    };
  }

  if (
    path.includes('percentages-fractions-decimals') ||
    (isFractionsDecimalsRoute && (path.includes('percentages') || path.includes('percentage')))
  ) {
    return {
      view: 'quiz',
      domainId: 'basic-math',
      subcategoryId: 'fractions-decimals',
      topicId: 'percentages-fractions-decimals',
      testId: 'percentages-fractions-decimals',
    };
  }

  if (
    path.includes('decimals-word-problems') ||
    (isFractionsDecimalsRoute && (path.includes('word-problems') || path.includes('problems')))
  ) {
    return {
      view: 'quiz',
      domainId: 'basic-math',
      subcategoryId: 'fractions-decimals',
      topicId: 'decimals-word-problems',
      testId: 'decimals-word-problems',
    };
  }

  // ==================== PLACE VALUE QUIZ ROUTES ====================
  const isPlaceValueRoute = path.includes('place-value') && !path.includes('fractions-decimals');

  if (path.includes('place-value-within-99') || (isPlaceValueRoute && path.includes('within-99'))) {
    return {
      view: 'quiz',
      domainId: 'basic-math',
      subcategoryId: 'place-value',
      topicId: 'place-value-within-99',
      testId: 'place-value-within-99',
    };
  }
  if (path.includes('place-value-within-999') || (isPlaceValueRoute && path.includes('within-999'))) {
    return {
      view: 'quiz',
      domainId: 'basic-math',
      subcategoryId: 'place-value',
      topicId: 'place-value-within-999',
      testId: 'place-value-within-999',
    };
  }
  if (path.includes('reading-writing-numbers') || (isPlaceValueRoute && (path.includes('reading-writing') || path.includes('reading')))) {
    return {
      view: 'quiz',
      domainId: 'basic-math',
      subcategoryId: 'place-value',
      topicId: 'reading-writing-numbers',
      testId: 'reading-writing-numbers',
    };
  }
  if (path.includes('comparing-ordering-numbers') || (isPlaceValueRoute && path.includes('comparing-ordering'))) {
    return {
      view: 'quiz',
      domainId: 'basic-math',
      subcategoryId: 'place-value',
      topicId: 'comparing-ordering-numbers',
      testId: 'comparing-ordering-numbers',
    };
  }
  if (path.includes('place-value-thousands') || (isPlaceValueRoute && path.includes('thousands') && !path.includes('decimals'))) {
    return {
      view: 'quiz',
      domainId: 'basic-math',
      subcategoryId: 'place-value',
      topicId: 'place-value-thousands',
      testId: 'place-value-thousands',
    };
  }
  if (path.includes('place-value-millions-billions') || (isPlaceValueRoute && (path.includes('millions') || path.includes('billions')))) {
    return {
      view: 'quiz',
      domainId: 'basic-math',
      subcategoryId: 'place-value',
      topicId: 'place-value-millions-billions',
      testId: 'place-value-millions-billions',
    };
  }
  if (path.includes('rounding-whole-numbers') || (isPlaceValueRoute && path.includes('rounding-whole'))) {
    return {
      view: 'quiz',
      domainId: 'basic-math',
      subcategoryId: 'place-value',
      topicId: 'rounding-whole-numbers',
      testId: 'rounding-whole-numbers',
    };
  }
  if (path.includes('arithmetic-patterns-place-value') || (isPlaceValueRoute && path.includes('arithmetic-patterns'))) {
    return {
      view: 'quiz',
      domainId: 'basic-math',
      subcategoryId: 'place-value',
      topicId: 'arithmetic-patterns-place-value',
      testId: 'arithmetic-patterns-place-value',
    };
  }
  if (path.includes('decimals-tenths-hundredths') || (isPlaceValueRoute && (path.includes('tenths-hundredths') || path.includes('decimals-tenths')))) {
    return {
      view: 'quiz',
      domainId: 'basic-math',
      subcategoryId: 'place-value',
      topicId: 'decimals-tenths-hundredths',
      testId: 'decimals-tenths-hundredths',
    };
  }
  if (path.includes('decimals-thousandths') || (isPlaceValueRoute && path.includes('decimals-thousandths'))) {
    return {
      view: 'quiz',
      domainId: 'basic-math',
      subcategoryId: 'place-value',
      topicId: 'decimals-thousandths',
      testId: 'decimals-thousandths',
    };
  }
  if (path.includes('comparing-ordering-decimals') || (isPlaceValueRoute && path.includes('comparing-decimals'))) {
    return {
      view: 'quiz',
      domainId: 'basic-math',
      subcategoryId: 'place-value',
      topicId: 'comparing-ordering-decimals',
      testId: 'comparing-ordering-decimals',
    };
  }
  if (path.includes('rounding-decimals') || (isPlaceValueRoute && path.includes('rounding-decimals'))) {
    return {
      view: 'quiz',
      domainId: 'basic-math',
      subcategoryId: 'place-value',
      topicId: 'rounding-decimals',
      testId: 'rounding-decimals',
    };
  }

  // ==================== MULTIPLICATION QUIZ ROUTES ====================
  const isMultiplicationRoute = path.includes('multiplication') || path.includes('table-');

  // Tables 1 to 10:
  for (let t = 1; t <= 10; t++) {
    if (path.includes(`table-${t}`) || (isMultiplicationRoute && path.includes(`table-${t}`))) {
      return {
        view: 'quiz',
        domainId: 'basic-math',
        subcategoryId: 'basic-arithmetic',
        topicId: 'multiplication-tests',
        testId: `table-${t}`,
      };
    }
  }

  // Multiplication Missing Number Quizzes:
  if (path.includes('missing-single-digits-multiplication') || (isMultiplicationRoute && path.includes('missing-single-digits'))) {
    return {
      view: 'quiz',
      domainId: 'basic-math',
      subcategoryId: 'basic-arithmetic',
      topicId: 'multiplication-tests',
      testId: 'missing-single-digits-multiplication',
    };
  }
  if (path.includes('missing-within-20-multiplication') || (isMultiplicationRoute && path.includes('missing-within-20'))) {
    return {
      view: 'quiz',
      domainId: 'basic-math',
      subcategoryId: 'basic-arithmetic',
      topicId: 'multiplication-tests',
      testId: 'missing-within-20-multiplication',
    };
  }
  if (path.includes('missing-within-50-multiplication') || (isMultiplicationRoute && path.includes('missing-within-50'))) {
    return {
      view: 'quiz',
      domainId: 'basic-math',
      subcategoryId: 'basic-arithmetic',
      topicId: 'multiplication-tests',
      testId: 'missing-within-50-multiplication',
    };
  }
  if (path.includes('missing-within-100-multiplication') || (isMultiplicationRoute && path.includes('missing-within-100'))) {
    return {
      view: 'quiz',
      domainId: 'basic-math',
      subcategoryId: 'basic-arithmetic',
      topicId: 'multiplication-tests',
      testId: 'missing-within-100-multiplication',
    };
  }
  if (
    path.includes('missing-fractions-multiplication') ||
    (isMultiplicationRoute && (path.includes('missing-fractions') || path.includes('missing-fraction')))
  ) {
    return {
      view: 'quiz',
      domainId: 'basic-math',
      subcategoryId: 'basic-arithmetic',
      topicId: 'multiplication-tests',
      testId: 'missing-fractions-multiplication',
    };
  }
  if (
    path.includes('missing-decimals-multiplication') ||
    (isMultiplicationRoute && (path.includes('missing-decimals') || path.includes('missing-decimal')))
  ) {
    return {
      view: 'quiz',
      domainId: 'basic-math',
      subcategoryId: 'basic-arithmetic',
      topicId: 'multiplication-tests',
      testId: 'missing-decimals-multiplication',
    };
  }

  // Multiplication Direct Math Quizzes:
  if (path.includes('multiplication-within-100') || (isMultiplicationRoute && path.includes('within-100'))) {
    return {
      view: 'quiz',
      domainId: 'basic-math',
      subcategoryId: 'basic-arithmetic',
      topicId: 'multiplication-tests',
      testId: 'multiplication-within-100',
    };
  }
  if (path.includes('multiplication-within-50') || (isMultiplicationRoute && path.includes('within-50'))) {
    return {
      view: 'quiz',
      domainId: 'basic-math',
      subcategoryId: 'basic-arithmetic',
      topicId: 'multiplication-tests',
      testId: 'multiplication-within-50',
    };
  }
  if (path.includes('multiplication-within-20') || (isMultiplicationRoute && path.includes('within-20'))) {
    return {
      view: 'quiz',
      domainId: 'basic-math',
      subcategoryId: 'basic-arithmetic',
      topicId: 'multiplication-tests',
      testId: 'multiplication-within-20',
    };
  }
  if (
    path.includes('fractions-multiplication') ||
    (isMultiplicationRoute && (path.includes('fractions') || path.includes('fraction')))
  ) {
    return {
      view: 'quiz',
      domainId: 'basic-math',
      subcategoryId: 'basic-arithmetic',
      topicId: 'multiplication-tests',
      testId: 'fractions-multiplication',
    };
  }
  if (
    path.includes('decimals-multiplication') ||
    (isMultiplicationRoute && (path.includes('decimals') || path.includes('decimal')))
  ) {
    return {
      view: 'quiz',
      domainId: 'basic-math',
      subcategoryId: 'basic-arithmetic',
      topicId: 'multiplication-tests',
      testId: 'decimals-multiplication',
    };
  }
  if (
    path.includes('single-digit-multiplication') ||
    (isMultiplicationRoute && (path.includes('single-digits') || path.includes('single-digit')))
  ) {
    return {
      view: 'quiz',
      domainId: 'basic-math',
      subcategoryId: 'basic-arithmetic',
      topicId: 'multiplication-tests',
      testId: 'single-digit-multiplication',
    };
  }

  // ==================== DIVISION QUIZ ROUTES ====================
  const isDivisionRoute = path.includes('division');

  // Division Missing Number Quizzes:
  if (path.includes('missing-single-digits-division') || (isDivisionRoute && path.includes('missing-single-digits'))) {
    return {
      view: 'quiz',
      domainId: 'basic-math',
      subcategoryId: 'basic-arithmetic',
      topicId: 'division-tests',
      testId: 'missing-single-digits-division',
    };
  }
  if (path.includes('missing-within-20-division') || (isDivisionRoute && path.includes('missing-within-20'))) {
    return {
      view: 'quiz',
      domainId: 'basic-math',
      subcategoryId: 'basic-arithmetic',
      topicId: 'division-tests',
      testId: 'missing-within-20-division',
    };
  }
  if (path.includes('missing-within-50-division') || (isDivisionRoute && path.includes('missing-within-50'))) {
    return {
      view: 'quiz',
      domainId: 'basic-math',
      subcategoryId: 'basic-arithmetic',
      topicId: 'division-tests',
      testId: 'missing-within-50-division',
    };
  }
  if (path.includes('missing-within-100-division') || (isDivisionRoute && path.includes('missing-within-100'))) {
    return {
      view: 'quiz',
      domainId: 'basic-math',
      subcategoryId: 'basic-arithmetic',
      topicId: 'division-tests',
      testId: 'missing-within-100-division',
    };
  }
  if (
    path.includes('missing-fractions-division') ||
    (isDivisionRoute && (path.includes('missing-fractions') || path.includes('missing-fraction')))
  ) {
    return {
      view: 'quiz',
      domainId: 'basic-math',
      subcategoryId: 'basic-arithmetic',
      topicId: 'division-tests',
      testId: 'missing-fractions-division',
    };
  }
  if (
    path.includes('missing-decimals-division') ||
    (isDivisionRoute && (path.includes('missing-decimals') || path.includes('missing-decimal')))
  ) {
    return {
      view: 'quiz',
      domainId: 'basic-math',
      subcategoryId: 'basic-arithmetic',
      topicId: 'division-tests',
      testId: 'missing-decimals-division',
    };
  }

  // Division Direct Math Quizzes:
  if (path.includes('division-within-100') || (isDivisionRoute && path.includes('within-100'))) {
    return {
      view: 'quiz',
      domainId: 'basic-math',
      subcategoryId: 'basic-arithmetic',
      topicId: 'division-tests',
      testId: 'division-within-100',
    };
  }
  if (path.includes('division-within-50') || (isDivisionRoute && path.includes('within-50'))) {
    return {
      view: 'quiz',
      domainId: 'basic-math',
      subcategoryId: 'basic-arithmetic',
      topicId: 'division-tests',
      testId: 'division-within-50',
    };
  }
  if (path.includes('division-within-20') || (isDivisionRoute && path.includes('within-20'))) {
    return {
      view: 'quiz',
      domainId: 'basic-math',
      subcategoryId: 'basic-arithmetic',
      topicId: 'division-tests',
      testId: 'division-within-20',
    };
  }
  if (
    path.includes('fractions-division') ||
    (isDivisionRoute && (path.includes('fractions') || path.includes('fraction')))
  ) {
    return {
      view: 'quiz',
      domainId: 'basic-math',
      subcategoryId: 'basic-arithmetic',
      topicId: 'division-tests',
      testId: 'fractions-division',
    };
  }
  if (
    path.includes('decimals-division') ||
    (isDivisionRoute && (path.includes('decimals') || path.includes('decimal')))
  ) {
    return {
      view: 'quiz',
      domainId: 'basic-math',
      subcategoryId: 'basic-arithmetic',
      topicId: 'division-tests',
      testId: 'decimals-division',
    };
  }
  if (
    path.includes('single-digit-division') ||
    (isDivisionRoute && (path.includes('single-digits') || path.includes('single-digit')))
  ) {
    return {
      view: 'quiz',
      domainId: 'basic-math',
      subcategoryId: 'basic-arithmetic',
      topicId: 'division-tests',
      testId: 'single-digit-division',
    };
  }

  // ==================== SUBTRACTION QUIZ ROUTES ====================
  const isSubtractionRoute = path.includes('subtraction');

  // Subtraction Missing Number Quizzes:
  if (path.includes('missing-single-digits-subtraction') || (isSubtractionRoute && path.includes('missing-single-digits'))) {
    return {
      view: 'quiz',
      domainId: 'basic-math',
      subcategoryId: 'basic-arithmetic',
      topicId: 'subtraction-tests',
      testId: 'missing-single-digits-subtraction',
    };
  }
  if (path.includes('missing-within-20-subtraction') || (isSubtractionRoute && path.includes('missing-within-20'))) {
    return {
      view: 'quiz',
      domainId: 'basic-math',
      subcategoryId: 'basic-arithmetic',
      topicId: 'subtraction-tests',
      testId: 'missing-within-20-subtraction',
    };
  }
  if (path.includes('missing-within-50-subtraction') || (isSubtractionRoute && path.includes('missing-within-50'))) {
    return {
      view: 'quiz',
      domainId: 'basic-math',
      subcategoryId: 'basic-arithmetic',
      topicId: 'subtraction-tests',
      testId: 'missing-within-50-subtraction',
    };
  }
  if (path.includes('missing-within-100-subtraction') || (isSubtractionRoute && path.includes('missing-within-100'))) {
    return {
      view: 'quiz',
      domainId: 'basic-math',
      subcategoryId: 'basic-arithmetic',
      topicId: 'subtraction-tests',
      testId: 'missing-within-100-subtraction',
    };
  }
  if (
    path.includes('missing-fractions-subtraction') ||
    (isSubtractionRoute && (path.includes('missing-fractions') || path.includes('missing-fraction')))
  ) {
    return {
      view: 'quiz',
      domainId: 'basic-math',
      subcategoryId: 'basic-arithmetic',
      topicId: 'subtraction-tests',
      testId: 'missing-fractions-subtraction',
    };
  }
  if (
    path.includes('missing-decimals-subtraction') ||
    (isSubtractionRoute && (path.includes('missing-decimals') || path.includes('missing-decimal')))
  ) {
    return {
      view: 'quiz',
      domainId: 'basic-math',
      subcategoryId: 'basic-arithmetic',
      topicId: 'subtraction-tests',
      testId: 'missing-decimals-subtraction',
    };
  }

  // Subtraction Direct Math Quizzes:
  if (path.includes('subtraction-within-100') || (isSubtractionRoute && path.includes('within-100'))) {
    return {
      view: 'quiz',
      domainId: 'basic-math',
      subcategoryId: 'basic-arithmetic',
      topicId: 'subtraction-tests',
      testId: 'subtraction-within-100',
    };
  }
  if (path.includes('subtraction-within-50') || (isSubtractionRoute && path.includes('within-50'))) {
    return {
      view: 'quiz',
      domainId: 'basic-math',
      subcategoryId: 'basic-arithmetic',
      topicId: 'subtraction-tests',
      testId: 'subtraction-within-50',
    };
  }
  if (path.includes('subtraction-within-20') || (isSubtractionRoute && path.includes('within-20'))) {
    return {
      view: 'quiz',
      domainId: 'basic-math',
      subcategoryId: 'basic-arithmetic',
      topicId: 'subtraction-tests',
      testId: 'subtraction-within-20',
    };
  }
  if (
    path.includes('fractions-subtraction') ||
    (isSubtractionRoute && (path.includes('fractions') || path.includes('fraction')))
  ) {
    return {
      view: 'quiz',
      domainId: 'basic-math',
      subcategoryId: 'basic-arithmetic',
      topicId: 'subtraction-tests',
      testId: 'fractions-subtraction',
    };
  }
  if (
    path.includes('decimals-subtraction') ||
    (isSubtractionRoute && (path.includes('decimals') || path.includes('decimal')))
  ) {
    return {
      view: 'quiz',
      domainId: 'basic-math',
      subcategoryId: 'basic-arithmetic',
      topicId: 'subtraction-tests',
      testId: 'decimals-subtraction',
    };
  }
  if (
    path.includes('single-digit-subtraction') ||
    (isSubtractionRoute && (path.includes('single-digits') || path.includes('single-digit')))
  ) {
    return {
      view: 'quiz',
      domainId: 'basic-math',
      subcategoryId: 'basic-arithmetic',
      topicId: 'subtraction-tests',
      testId: 'single-digit-subtraction',
    };
  }

  // ==================== ADDITION QUIZ ROUTES ====================
  // Missing Number Quiz Routes:
  if (path.includes('missing-single-digits')) {
    return {
      view: 'quiz',
      domainId: 'basic-math',
      subcategoryId: 'basic-arithmetic',
      topicId: 'addition-tests',
      testId: 'missing-single-digits',
    };
  }
  if (path.includes('missing-within-20')) {
    return {
      view: 'quiz',
      domainId: 'basic-math',
      subcategoryId: 'basic-arithmetic',
      topicId: 'addition-tests',
      testId: 'missing-within-20',
    };
  }
  if (path.includes('missing-within-50')) {
    return {
      view: 'quiz',
      domainId: 'basic-math',
      subcategoryId: 'basic-arithmetic',
      topicId: 'addition-tests',
      testId: 'missing-within-50',
    };
  }
  if (path.includes('missing-within-100')) {
    return {
      view: 'quiz',
      domainId: 'basic-math',
      subcategoryId: 'basic-arithmetic',
      topicId: 'addition-tests',
      testId: 'missing-within-100',
    };
  }
  if (path.includes('missing-fractions') || path.includes('missing-fraction')) {
    return {
      view: 'quiz',
      domainId: 'basic-math',
      subcategoryId: 'basic-arithmetic',
      topicId: 'addition-tests',
      testId: 'missing-fractions',
    };
  }
  if (path.includes('missing-decimals') || path.includes('missing-decimal')) {
    return {
      view: 'quiz',
      domainId: 'basic-math',
      subcategoryId: 'basic-arithmetic',
      topicId: 'addition-tests',
      testId: 'missing-decimals',
    };
  }

  // Custom SEO URL route requested: /math/arithmetic/addition/within-100
  if (
    path.includes('addition-within-100') ||
    (parts[0] === 'math' && parts[1] === 'arithmetic' && parts[2] === 'addition' && parts[3] === 'within-100')
  ) {
    return {
      view: 'quiz',
      domainId: 'basic-math',
      subcategoryId: 'basic-arithmetic',
      topicId: 'addition-tests',
      testId: 'addition-within-100',
    };
  }

  // Custom SEO URL route requested: /math/arithmetic/addition/within-50
  if (
    path.includes('addition-within-50') ||
    (parts[0] === 'math' && parts[1] === 'arithmetic' && parts[2] === 'addition' && parts[3] === 'within-50')
  ) {
    return {
      view: 'quiz',
      domainId: 'basic-math',
      subcategoryId: 'basic-arithmetic',
      topicId: 'addition-tests',
      testId: 'addition-within-50',
    };
  }

  // Custom SEO URL route requested: /math/arithmetic/addition/within-20
  if (
    path.includes('addition-within-20') ||
    (parts[0] === 'math' && parts[1] === 'arithmetic' && parts[2] === 'addition' && parts[3] === 'within-20')
  ) {
    return {
      view: 'quiz',
      domainId: 'basic-math',
      subcategoryId: 'basic-arithmetic',
      topicId: 'addition-tests',
      testId: 'addition-within-20',
    };
  }

  // Custom SEO URL route requested: /math/arithmetic/addition/fractions
  if (
    path.includes('fractions-addition') ||
    (parts[0] === 'math' && parts[1] === 'arithmetic' && parts[2] === 'addition' && (parts[3] === 'fractions' || parts[3] === 'fraction'))
  ) {
    return {
      view: 'quiz',
      domainId: 'basic-math',
      subcategoryId: 'basic-arithmetic',
      topicId: 'addition-tests',
      testId: 'fractions-addition',
    };
  }

  // Custom SEO URL route requested: /math/arithmetic/addition/decimals
  if (
    path.includes('decimals-addition') ||
    (parts[0] === 'math' && parts[1] === 'arithmetic' && parts[2] === 'addition' && (parts[3] === 'decimals' || parts[3] === 'decimal'))
  ) {
    return {
      view: 'quiz',
      domainId: 'basic-math',
      subcategoryId: 'basic-arithmetic',
      topicId: 'addition-tests',
      testId: 'decimals-addition',
    };
  }

  // Custom SEO URL route requested: /math/arithmetic/addition/single-digits
  if (
    path.includes('single-digit-addition') ||
    (parts[0] === 'math' && parts[1] === 'arithmetic' && parts[2] === 'addition' && (parts[3] === 'single-digits' || parts[3] === 'single-digit'))
  ) {
    return {
      view: 'quiz',
      domainId: 'basic-math',
      subcategoryId: 'basic-arithmetic',
      topicId: 'addition-tests',
      testId: 'single-digit-addition',
    };
  }

  // Check specific static pages
  if (parts[0] === 'privacy' || parts[0] === 'privacy-policy') {
    return { view: 'privacy' };
  }
  if (parts[0] === 'terms' || parts[0] === 'terms-of-use') {
    return { view: 'terms' };
  }
  if (parts[0] === 'contact' || parts[0] === 'contact-us') {
    return { view: 'contact' };
  }
  if (parts[0] === 'about' || parts[0] === 'about-us') {
    return { view: 'about' };
  }

  // Check pattern: domain/:domainId or category/:domainId
  if ((parts[0] === 'domain' || parts[0] === 'category') && parts[1]) {
    if (parts[2]) {
      if (parts[3]) {
        if (parts[4]) {
          return {
            view: 'quiz',
            domainId: parts[1],
            subcategoryId: parts[2],
            topicId: parts[3],
            testId: parts[4],
          };
        }
        return {
          view: 'quiz',
          domainId: parts[1],
          subcategoryId: parts[2],
          topicId: parts[3],
        };
      }
      return {
        view: 'quiz',
        domainId: parts[1],
        subcategoryId: parts[2],
      };
    }
    return {
      view: 'domain',
      domainId: parts[1],
    };
  }

  // Check pattern: quiz/:domainId/:subcategoryId
  if (parts[0] === 'quiz' && parts[1] && parts[2]) {
    if (parts[3]) {
      if (parts[4]) {
        return {
          view: 'quiz',
          domainId: parts[1],
          subcategoryId: parts[2],
          topicId: parts[3],
          testId: parts[4],
        };
      }
      return {
        view: 'quiz',
        domainId: parts[1],
        subcategoryId: parts[2],
        topicId: parts[3],
      };
    }
    return {
      view: 'quiz',
      domainId: parts[1],
      subcategoryId: parts[2],
    };
  }

  return { view: 'home' };
}

export function navigateTo(path: string) {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  if (window.location.pathname !== cleanPath || window.location.hash) {
    window.history.pushState({}, '', cleanPath);
  }
  window.dispatchEvent(new PopStateEvent('popstate'));
}

export function useAppRouter() {
  const [route, setRoute] = useState<RouteState>(parseCurrentRoute());

  useEffect(() => {
    // If arriving with a legacy hash route (e.g. /#/domain/algebra-functions), migrate to clean URL without hash
    if (window.location.hash && window.location.hash.startsWith('#/')) {
      const cleanPath = window.location.hash.replace(/^#\/?/, '/');
      window.history.replaceState({}, '', cleanPath);
      setRoute(parseCurrentRoute());
    }

    const handleLocationChange = () => {
      setRoute(parseCurrentRoute());
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);

    // Global listener to intercept internal link clicks
    const handleAnchorClick = (e: MouseEvent) => {
      if (
        e.defaultPrevented ||
        e.button !== 0 ||
        e.metaKey ||
        e.ctrlKey ||
        e.shiftKey ||
        e.altKey
      ) {
        return;
      }

      const target = (e.target as HTMLElement).closest('a');
      if (!target) return;

      const href = target.getAttribute('href');
      if (!href) return;

      if (
        href.startsWith('http://') ||
        href.startsWith('https://') ||
        href.startsWith('mailto:') ||
        href.startsWith('tel:') ||
        target.target === '_blank'
      ) {
        return;
      }

      // Intercept legacy hash links e.g. href="#/domain/algebra-functions"
      if (href.startsWith('#/')) {
        e.preventDefault();
        navigateTo(href.replace(/^#/, ''));
        return;
      }

      // Intercept clean relative links e.g. href="/domain/algebra-functions"
      if (href.startsWith('/')) {
        e.preventDefault();
        navigateTo(href);
        return;
      }
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  const goToHome = () => navigateTo('/');
  const goToDomain = (domainId: string) => navigateTo(`/domain/${domainId}`);
  const goToQuiz = (domainId: string, subcategoryId: string, topicId?: string, testId?: string) => {
    if (testId && topicId) {
      navigateTo(`/domain/${domainId}/${subcategoryId}/${topicId}/${testId}`);
    } else if (topicId) {
      navigateTo(`/domain/${domainId}/${subcategoryId}/${topicId}`);
    } else {
      navigateTo(`/domain/${domainId}/${subcategoryId}`);
    }
  };
  const goToPrivacy = () => navigateTo('/privacy');
  const goToTerms = () => navigateTo('/terms');
  const goToContact = () => navigateTo('/contact');
  const goToAbout = () => navigateTo('/about');

  return {
    route,
    goToHome,
    goToDomain,
    goToQuiz,
    goToPrivacy,
    goToTerms,
    goToContact,
    goToAbout,
    navigateTo,
  };
}
