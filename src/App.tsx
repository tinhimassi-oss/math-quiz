import React, { useState, useEffect } from 'react';
import { ThemeProvider, useEyeTheme } from './context/ThemeContext';
import { useAppRouter } from './navigation/router';
import { MAJOR_DOMAINS } from './data/mathCategories';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomeView } from './views/HomeView';
import { DomainView } from './views/DomainView';
import { SubCategoryTopicsView } from './views/SubCategoryTopicsView';
import { QuizPlaceholderView } from './views/QuizPlaceholderView';
import { SingleDigitAdditionQuizView } from './views/SingleDigitAdditionQuizView';
import { AdditionWithin20QuizView } from './views/AdditionWithin20QuizView';
import { AdditionWithin50QuizView } from './views/AdditionWithin50QuizView';
import { AdditionWithin100QuizView } from './views/AdditionWithin100QuizView';
import { FractionsAdditionQuizView } from './views/FractionsAdditionQuizView';
import { DecimalsAdditionQuizView } from './views/DecimalsAdditionQuizView';
import { MissingNumberQuizView } from './views/MissingNumberQuizView';
import { MissingQuizType } from './data/missingNumberTestsData';
import { SubtractionQuizView } from './views/SubtractionQuizView';
import { SUBTRACTION_QUIZZES, SubtractionQuizType } from './data/subtractionTestsData';
import { DivisionQuizView } from './views/DivisionQuizView';
import { DIVISION_QUIZZES, DivisionQuizType } from './data/divisionTestsData';
import { MultiplicationQuizView } from './views/MultiplicationQuizView';
import { MULTIPLICATION_QUIZZES, MultiplicationQuizType } from './data/multiplicationTestsData';
import { PlaceValueQuizView } from './views/PlaceValueQuizView';
import { PLACE_VALUE_QUIZZES, PlaceValueQuizType } from './data/placeValueTestsData';
import { FractionsDecimalsQuizView } from './views/FractionsDecimalsQuizView';
import { FRACTIONS_DECIMALS_QUIZZES, FractionsDecimalsQuizType } from './data/fractionsDecimalsTestsData';
import { RatiosProportionsQuizView } from './views/RatiosProportionsQuizView';
import { RATIOS_PROPORTIONS_QUIZZES, RatiosProportionsQuizType } from './data/ratiosProportionsTestsData';
import { OrderOfOperationsQuizView } from './views/OrderOfOperationsQuizView';
import { ORDER_OF_OPERATIONS_QUIZZES, OrderOfOperationsQuizType } from './data/orderOfOperationsTestsData';
import { NumberLineMeasurementQuizView } from './views/NumberLineMeasurementQuizView';
import { NUMBER_LINE_MEASUREMENT_QUIZZES, NumberLineMeasurementQuizType } from './data/numberLineMeasurementTestsData';
import { LinearEquationsQuizView } from './views/LinearEquationsQuizView';
import { LINEAR_EQUATIONS_QUIZZES, LinearEquationsQuizType } from './data/linearEquationsTestsData';
import { InequalitiesQuizView } from './views/InequalitiesQuizView';
import { INEQUALITIES_QUIZZES, InequalitiesQuizType } from './data/inequalitiesTestsData';
import { PolynomialsQuizView } from './views/PolynomialsQuizView';
import { POLYNOMIALS_QUIZZES, PolynomialsQuizType } from './data/polynomialsTestsData';
import { QuadraticEquationsQuizView } from './views/QuadraticEquationsQuizView';
import { QUADRATIC_QUIZZES, QuadraticQuizType } from './data/quadraticEquationsTestsData';
import { FunctionsGraphsQuizView } from './views/FunctionsGraphsQuizView';
import { FUNCTIONS_GRAPHS_QUIZZES, FunctionsGraphsQuizType } from './data/functionsGraphsTestsData';
import { SequencesQuizView } from './views/SequencesQuizView';
import { SEQUENCES_QUIZZES, SequencesQuizType } from './data/sequencesTestsData';
import { GeometricShapesQuizView } from './views/GeometricShapesQuizView';
import { GEOMETRIC_SHAPES_QUIZZES, GeometricShapesQuizType } from './data/geometricShapesTestsData';
import { PerimeterAreaQuizView } from './views/PerimeterAreaQuizView';
import { PERIMETER_AREA_QUIZZES, PerimeterAreaQuizType } from './data/perimeterAreaTestsData';
import { TrianglesAnglesQuizView } from './views/TrianglesAnglesQuizView';
import { TRIANGLES_ANGLES_QUIZZES, TrianglesAnglesQuizType } from './data/trianglesAnglesTestsData';
import { TrigonometryQuizView } from './views/TrigonometryQuizView';
import { TRIGONOMETRY_QUIZZES, TrigonometryQuizType } from './data/trigonometryTestsData';
import { AnalyticGeometryQuizView } from './views/AnalyticGeometryQuizView';
import { ANALYTIC_GEOMETRY_QUIZZES, AnalyticGeometryQuizType } from './data/analyticGeometryTestsData';
import { GeometricTransformationsQuizView } from './views/GeometricTransformationsQuizView';
import { GEOMETRIC_TRANSFORMATIONS_QUIZZES, GeometricTransformationsQuizType } from './data/geometricTransformationsTestsData';
import { LimitsContinuityQuizView } from './views/LimitsContinuityQuizView';
import { LIMITS_CONTINUITY_QUIZZES, LimitsContinuityQuizType } from './data/limitsContinuityTestsData';
import { DerivativesDifferentiationQuizView } from './views/DerivativesDifferentiationQuizView';
import { DERIVATIVES_QUIZZES, DerivativesQuizType } from './data/derivativesDifferentiationTestsData';
import { ApplicationsOfDerivativesQuizView } from './views/ApplicationsOfDerivativesQuizView';
import { APPLICATIONS_OF_DERIVATIVES_QUIZZES, ApplicationsOfDerivativesQuizType } from './data/applicationsOfDerivativesTestsData';
import { IntegrationQuizView } from './views/IntegrationQuizView';
import { INTEGRATION_QUIZZES, IntegrationQuizType } from './data/integrationTestsData';
import { ApplicationsOfIntegrationQuizView } from './views/ApplicationsOfIntegrationQuizView';
import { APPLICATIONS_OF_INTEGRATION_QUIZZES, ApplicationsOfIntegrationQuizType } from './data/applicationsOfIntegrationTestsData';
import { DifferentialEquationsQuizView } from './views/DifferentialEquationsQuizView';
import { DIFFERENTIAL_EQUATIONS_QUIZZES, DifferentialEquationsQuizType } from './data/differentialEquationsTestsData';
import { StatisticalMeasuresQuizView } from './views/StatisticalMeasuresQuizView';
import { STATISTICAL_MEASURES_QUIZZES, StatisticalMeasuresQuizType } from './data/statisticalMeasuresTestsData';
import { DataAnalysisQuizView } from './views/DataAnalysisQuizView';
import { DATA_ANALYSIS_QUIZZES, DataAnalysisQuizType } from './data/dataAnalysisTestsData';
import { ProbabilityQuizView } from './views/ProbabilityQuizView';
import { PROBABILITY_QUIZZES, ProbabilityQuizType } from './data/probabilityTestsData';
import { PermutationsCombinationsQuizView } from './views/PermutationsCombinationsQuizView';
import { PERMUTATIONS_COMBINATIONS_QUIZZES, PermutationsCombinationsQuizType } from './data/permutationsCombinationsTestsData';
import { ProbabilityDistributionsQuizView } from './views/ProbabilityDistributionsQuizView';
import { PROBABILITY_DISTRIBUTIONS_QUIZZES, ProbabilityDistributionQuizType } from './data/probabilityDistributionsTestsData';
import { LinearAlgebraQuizView } from './views/LinearAlgebraQuizView';
import { LINEAR_ALGEBRA_QUIZZES, LinearAlgebraQuizType } from './data/linearAlgebraTestsData';
import { ComplexNumbersQuizView } from './views/ComplexNumbersQuizView';
import { COMPLEX_NUMBERS_QUIZZES, ComplexNumbersQuizType } from './data/complexNumbersTestsData';
import { MathematicalLogicQuizView } from './views/MathematicalLogicQuizView';
import { MATHEMATICAL_LOGIC_QUIZZES, MathematicalLogicQuizType } from './data/mathematicalLogicTestsData';
import { DiscreteMathematicsQuizView } from './views/DiscreteMathematicsQuizView';
import { DISCRETE_MATHEMATICS_QUIZZES, DiscreteMathematicsQuizType } from './data/discreteMathematicsTestsData';
import { FinancialMathQuizView } from './views/FinancialMathQuizView';
import { FINANCIAL_MATH_QUIZZES, FinancialMathQuizType } from './data/financialMathTestsData';
import { WordProblemsQuizView } from './views/WordProblemsQuizView';
import { WORD_PROBLEMS_QUIZZES, WordProblemsQuizType } from './data/wordProblemsTestsData';
import { SearchModal } from './components/SearchModal';
import { PrivacyView, TermsView, ContactView, AboutView } from './views/StaticPages';
import { updateDocumentSeo } from './utils/seo';

function AppContent() {
  const { themeClasses } = useEyeTheme();
  const {
    route,
    goToHome,
    goToDomain,
    goToQuiz,
    goToPrivacy,
    goToTerms,
    goToContact,
    goToAbout,
  } = useAppRouter();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Keyboard shortcut (Ctrl+K or Cmd+K) to open search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Determine current domain and subcategory if applicable
  const currentDomain = route.domainId
    ? MAJOR_DOMAINS.find((d) => d.id === route.domainId)
    : undefined;

  const currentSubcategory =
    currentDomain && route.subcategoryId
      ? currentDomain.subcategories.find((s) => s.id === route.subcategoryId)
      : undefined;

  const currentTopic =
    currentSubcategory && currentSubcategory.subSections && route.topicId
      ? currentSubcategory.subSections.find((t) => t.id === route.topicId)
      : undefined;

  // Dynamically update document title, meta description, and SEO tags on route change
  useEffect(() => {
    if (route.view === 'home') {
      updateDocumentSeo({
        title: 'كويزات الرياضيات | منصة اختبارات وألغاز الرياضيات التفاعلية',
        description:
          'منصة عربية عصرية ومريحة للعين لتصفح مجالات الرياضيات وتصنيفاتها، مع اختبارات تفاعلية وشروحات دقيقة خطوة بخطوة.',
        canonicalPath: '/',
        type: 'website',
      });
      return;
    }

    if (route.view === 'domain' && currentDomain) {
      updateDocumentSeo({
        title: `${currentDomain.title} | كويزات الرياضيات`,
        description: `${currentDomain.detailedDesc || currentDomain.shortDesc} - تصفح الاختبارات والتطبيقات العملية والتمارين التفاعلية.`,
        canonicalPath: `/domain/${currentDomain.id}`,
        type: 'website',
        breadcrumbs: [
          { name: 'الرئيسية', path: '/' },
          { name: currentDomain.title, path: `/domain/${currentDomain.id}` },
        ],
      });
      return;
    }

    if (route.view === 'quiz') {
      const pageTitle =
        currentTopic?.title ||
        currentSubcategory?.title ||
        currentDomain?.title ||
        'اختبارات الرياضيات';
      const pageDesc =
        currentTopic?.shortDesc ||
        currentSubcategory?.shortDesc ||
        currentDomain?.shortDesc ||
        'تمارين واختبارات تفاعلية لقياس المهارات الرياضية.';
      const breadcrumbs = [{ name: 'الرئيسية', path: '/' }];
      if (currentDomain) {
        breadcrumbs.push({ name: currentDomain.title, path: `/domain/${currentDomain.id}` });
      }
      if (currentSubcategory) {
        breadcrumbs.push({
          name: currentSubcategory.title,
          path: `/domain/${currentDomain?.id}/${currentSubcategory.id}`,
        });
      }
      if (currentTopic) {
        breadcrumbs.push({ name: currentTopic.title, path: window.location.pathname });
      }

      updateDocumentSeo({
        title: `${pageTitle} - ${currentDomain?.title || 'رياضيات'} | كويزات الرياضيات`,
        description: pageDesc,
        canonicalPath: window.location.pathname,
        type: 'article',
        breadcrumbs,
      });
      return;
    }

    if (route.view === 'privacy') {
      updateDocumentSeo({
        title: 'سياسة الخصوصية | كويزات الرياضيات',
        description: 'سياسة الخصوصية وحماية بيانات المستخدمين في منصة كويزات الرياضيات.',
        canonicalPath: '/privacy',
      });
      return;
    }

    if (route.view === 'terms') {
      updateDocumentSeo({
        title: 'شروط الاستخدام | كويزات الرياضيات',
        description: 'شروط وأحكام استخدام منصة كويزات الرياضيات والاختبارات التفاعلية.',
        canonicalPath: '/terms',
      });
      return;
    }

    if (route.view === 'about') {
      updateDocumentSeo({
        title: 'عن المنصة | كويزات الرياضيات',
        description: 'تعرف على منصة كويزات الرياضيات وأهدافها في تبسيط وتطوير تدريس الرياضيات بطرق تفاعلية.',
        canonicalPath: '/about',
      });
      return;
    }

    if (route.view === 'contact') {
      updateDocumentSeo({
        title: 'اتصل بنا | كويزات الرياضيات',
        description: 'تواصل مع فريق منصة كويزات الرياضيات للاقتراحات والاستفسارات.',
        canonicalPath: '/contact',
      });
      return;
    }
  }, [route, currentDomain, currentSubcategory, currentTopic]);

  const isSingleDigitTest =
    route.testId === 'single-digit-addition' ||
    route.topicId === 'single-digit-addition';

  const isWithin20Test =
    route.testId === 'addition-within-20' ||
    route.topicId === 'addition-within-20';

  const isWithin50Test =
    route.testId === 'addition-within-50' ||
    route.topicId === 'addition-within-50';

  const isWithin100Test =
    route.testId === 'addition-within-100' ||
    route.topicId === 'addition-within-100';

  const isFractionsTest =
    route.testId === 'fractions-addition' ||
    route.topicId === 'fractions-addition';

  const isDecimalsTest =
    route.testId === 'decimals-addition' ||
    route.topicId === 'decimals-addition';

  const missingQuizType: MissingQuizType | null =
    route.testId === 'missing-single-digits' || route.topicId === 'missing-single-digits'
      ? 'missing-single-digits'
      : route.testId === 'missing-within-20' || route.topicId === 'missing-within-20'
      ? 'missing-within-20'
      : route.testId === 'missing-within-50' || route.topicId === 'missing-within-50'
      ? 'missing-within-50'
      : route.testId === 'missing-within-100' || route.topicId === 'missing-within-100'
      ? 'missing-within-100'
      : route.testId === 'missing-fractions' || route.topicId === 'missing-fractions'
      ? 'missing-fractions'
      : route.testId === 'missing-decimals' || route.topicId === 'missing-decimals'
      ? 'missing-decimals'
      : null;

  const subtractionQuizType: SubtractionQuizType | null =
    route.testId === 'single-digit-subtraction' || route.topicId === 'single-digit-subtraction'
      ? 'single-digit-subtraction'
      : route.testId === 'subtraction-within-20' || route.topicId === 'subtraction-within-20'
      ? 'subtraction-within-20'
      : route.testId === 'subtraction-within-50' || route.topicId === 'subtraction-within-50'
      ? 'subtraction-within-50'
      : route.testId === 'subtraction-within-100' || route.topicId === 'subtraction-within-100'
      ? 'subtraction-within-100'
      : route.testId === 'fractions-subtraction' || route.topicId === 'fractions-subtraction'
      ? 'fractions-subtraction'
      : route.testId === 'decimals-subtraction' || route.topicId === 'decimals-subtraction'
      ? 'decimals-subtraction'
      : route.testId === 'missing-single-digits-subtraction' || route.topicId === 'missing-single-digits-subtraction'
      ? 'missing-single-digits-subtraction'
      : route.testId === 'missing-within-20-subtraction' || route.topicId === 'missing-within-20-subtraction'
      ? 'missing-within-20-subtraction'
      : route.testId === 'missing-within-50-subtraction' || route.topicId === 'missing-within-50-subtraction'
      ? 'missing-within-50-subtraction'
      : route.testId === 'missing-within-100-subtraction' || route.topicId === 'missing-within-100-subtraction'
      ? 'missing-within-100-subtraction'
      : route.testId === 'missing-fractions-subtraction' || route.topicId === 'missing-fractions-subtraction'
      ? 'missing-fractions-subtraction'
      : route.testId === 'missing-decimals-subtraction' || route.topicId === 'missing-decimals-subtraction'
      ? 'missing-decimals-subtraction'
      : null;

  const divisionQuizType: DivisionQuizType | null =
    route.testId === 'single-digit-division' || route.topicId === 'single-digit-division'
      ? 'single-digit-division'
      : route.testId === 'division-within-20' || route.topicId === 'division-within-20'
      ? 'division-within-20'
      : route.testId === 'division-within-50' || route.topicId === 'division-within-50'
      ? 'division-within-50'
      : route.testId === 'division-within-100' || route.topicId === 'division-within-100'
      ? 'division-within-100'
      : route.testId === 'fractions-division' || route.topicId === 'fractions-division'
      ? 'fractions-division'
      : route.testId === 'decimals-division' || route.topicId === 'decimals-division'
      ? 'decimals-division'
      : route.testId === 'missing-single-digits-division' || route.topicId === 'missing-single-digits-division'
      ? 'missing-single-digits-division'
      : route.testId === 'missing-within-20-division' || route.topicId === 'missing-within-20-division'
      ? 'missing-within-20-division'
      : route.testId === 'missing-within-50-division' || route.topicId === 'missing-within-50-division'
      ? 'missing-within-50-division'
      : route.testId === 'missing-within-100-division' || route.topicId === 'missing-within-100-division'
      ? 'missing-within-100-division'
      : route.testId === 'missing-fractions-division' || route.topicId === 'missing-fractions-division'
      ? 'missing-fractions-division'
      : route.testId === 'missing-decimals-division' || route.topicId === 'missing-decimals-division'
      ? 'missing-decimals-division'
      : null;

  const multiplicationQuizType: MultiplicationQuizType | null =
    route.testId === 'single-digit-multiplication' || route.topicId === 'single-digit-multiplication'
      ? 'single-digit-multiplication'
      : route.testId === 'multiplication-within-20' || route.topicId === 'multiplication-within-20'
      ? 'multiplication-within-20'
      : route.testId === 'multiplication-within-50' || route.topicId === 'multiplication-within-50'
      ? 'multiplication-within-50'
      : route.testId === 'multiplication-within-100' || route.topicId === 'multiplication-within-100'
      ? 'multiplication-within-100'
      : route.testId === 'fractions-multiplication' || route.topicId === 'fractions-multiplication'
      ? 'fractions-multiplication'
      : route.testId === 'decimals-multiplication' || route.topicId === 'decimals-multiplication'
      ? 'decimals-multiplication'
      : route.testId === 'missing-single-digits-multiplication' || route.topicId === 'missing-single-digits-multiplication'
      ? 'missing-single-digits-multiplication'
      : route.testId === 'missing-within-20-multiplication' || route.topicId === 'missing-within-20-multiplication'
      ? 'missing-within-20-multiplication'
      : route.testId === 'missing-within-50-multiplication' || route.topicId === 'missing-within-50-multiplication'
      ? 'missing-within-50-multiplication'
      : route.testId === 'missing-within-100-multiplication' || route.topicId === 'missing-within-100-multiplication'
      ? 'missing-within-100-multiplication'
      : route.testId === 'missing-fractions-multiplication' || route.topicId === 'missing-fractions-multiplication'
      ? 'missing-fractions-multiplication'
      : route.testId === 'missing-decimals-multiplication' || route.topicId === 'missing-decimals-multiplication'
      ? 'missing-decimals-multiplication'
      : route.testId === 'table-1' || route.topicId === 'table-1'
      ? 'table-1'
      : route.testId === 'table-2' || route.topicId === 'table-2'
      ? 'table-2'
      : route.testId === 'table-3' || route.topicId === 'table-3'
      ? 'table-3'
      : route.testId === 'table-4' || route.topicId === 'table-4'
      ? 'table-4'
      : route.testId === 'table-5' || route.topicId === 'table-5'
      ? 'table-5'
      : route.testId === 'table-6' || route.topicId === 'table-6'
      ? 'table-6'
      : route.testId === 'table-7' || route.topicId === 'table-7'
      ? 'table-7'
      : route.testId === 'table-8' || route.topicId === 'table-8'
      ? 'table-8'
      : route.testId === 'table-9' || route.topicId === 'table-9'
      ? 'table-9'
      : route.testId === 'table-10' || route.topicId === 'table-10'
      ? 'table-10'
      : null;

  const placeValueQuizType: PlaceValueQuizType | null =
    route.testId === 'place-value-within-99' || route.topicId === 'place-value-within-99'
      ? 'place-value-within-99'
      : route.testId === 'place-value-within-999' || route.topicId === 'place-value-within-999'
      ? 'place-value-within-999'
      : route.testId === 'reading-writing-numbers' || route.topicId === 'reading-writing-numbers'
      ? 'reading-writing-numbers'
      : route.testId === 'comparing-ordering-numbers' || route.topicId === 'comparing-ordering-numbers'
      ? 'comparing-ordering-numbers'
      : route.testId === 'place-value-thousands' || route.topicId === 'place-value-thousands'
      ? 'place-value-thousands'
      : route.testId === 'place-value-millions-billions' || route.topicId === 'place-value-millions-billions'
      ? 'place-value-millions-billions'
      : route.testId === 'rounding-whole-numbers' || route.topicId === 'rounding-whole-numbers'
      ? 'rounding-whole-numbers'
      : route.testId === 'arithmetic-patterns-place-value' || route.topicId === 'arithmetic-patterns-place-value'
      ? 'arithmetic-patterns-place-value'
      : route.testId === 'decimals-tenths-hundredths' || route.topicId === 'decimals-tenths-hundredths'
      ? 'decimals-tenths-hundredths'
      : route.testId === 'decimals-thousandths' || route.topicId === 'decimals-thousandths'
      ? 'decimals-thousandths'
      : route.testId === 'comparing-ordering-decimals' || route.topicId === 'comparing-ordering-decimals'
      ? 'comparing-ordering-decimals'
      : route.testId === 'rounding-decimals' || route.topicId === 'rounding-decimals'
      ? 'rounding-decimals'
      : null;

  const fractionsDecimalsQuizType: FractionsDecimalsQuizType | null =
    route.testId === 'decimals-identification-reading' || route.topicId === 'decimals-identification-reading'
      ? 'decimals-identification-reading'
      : route.testId === 'decimals-place-value' || route.topicId === 'decimals-place-value'
      ? 'decimals-place-value'
      : route.testId === 'decimals-comparing-ordering' || route.topicId === 'decimals-comparing-ordering'
      ? 'decimals-comparing-ordering'
      : route.testId === 'decimals-rounding' || route.topicId === 'decimals-rounding'
      ? 'decimals-rounding'
      : route.testId === 'converting-fractions-decimals' || route.topicId === 'converting-fractions-decimals'
      ? 'converting-fractions-decimals'
      : route.testId === 'decimals-addition' || route.topicId === 'decimals-addition'
      ? 'decimals-addition'
      : route.testId === 'decimals-subtraction' || route.topicId === 'decimals-subtraction'
      ? 'decimals-subtraction'
      : route.testId === 'decimal-by-integer-multiplication' || route.topicId === 'decimal-by-integer-multiplication'
      ? 'decimal-by-integer-multiplication'
      : route.testId === 'decimals-multiplication' || route.topicId === 'decimals-multiplication'
      ? 'decimals-multiplication'
      : route.testId === 'decimals-division' || route.topicId === 'decimals-division'
      ? 'decimals-division'
      : route.testId === 'percentages-fractions-decimals' || route.topicId === 'percentages-fractions-decimals'
      ? 'percentages-fractions-decimals'
      : route.testId === 'decimals-word-problems' || route.topicId === 'decimals-word-problems'
      ? 'decimals-word-problems'
      : null;

  const ratiosProportionsQuizType: RatiosProportionsQuizType | null =
    route.testId === 'ratio-understanding-representation' || route.topicId === 'ratio-understanding-representation'
      ? 'ratio-understanding-representation'
      : route.testId === 'ratio-simplification-equivalence' || route.topicId === 'ratio-simplification-equivalence'
      ? 'ratio-simplification-equivalence'
      : route.testId === 'unit-rate' || route.topicId === 'unit-rate'
      ? 'unit-rate'
      : route.testId === 'solving-proportions-unknown' || route.topicId === 'solving-proportions-unknown'
      ? 'solving-proportions-unknown'
      : route.testId === 'direct-proportion' || route.topicId === 'direct-proportion'
      ? 'direct-proportion'
      : route.testId === 'inverse-proportion' || route.topicId === 'inverse-proportion'
      ? 'inverse-proportion'
      : route.testId === 'scale-drawings-maps' || route.topicId === 'scale-drawings-maps'
      ? 'scale-drawings-maps'
      : route.testId === 'proportional-division' || route.topicId === 'proportional-division'
      ? 'proportional-division'
      : route.testId === 'percentage-and-proportion' || route.topicId === 'percentage-and-proportion'
      ? 'percentage-and-proportion'
      : route.testId === 'percentage-change' || route.topicId === 'percentage-change'
      ? 'percentage-change'
      : route.testId === 'profit-loss-discount' || route.topicId === 'profit-loss-discount'
      ? 'profit-loss-discount'
      : route.testId === 'ratios-word-problems' || route.topicId === 'ratios-word-problems'
      ? 'ratios-word-problems'
      : null;

  const orderOfOperationsQuizType: OrderOfOperationsQuizType | null =
    route.testId === 'operations-basic-no-parentheses' || route.topicId === 'operations-basic-no-parentheses'
      ? 'operations-basic-no-parentheses'
      : route.testId === 'operations-simple-parentheses' || route.topicId === 'operations-simple-parentheses'
      ? 'operations-simple-parentheses'
      : route.testId === 'operations-nested-brackets' || route.topicId === 'operations-nested-brackets'
      ? 'operations-nested-brackets'
      : route.testId === 'operations-with-exponents' || route.topicId === 'operations-with-exponents'
      ? 'operations-with-exponents'
      : route.testId === 'operations-with-square-roots' || route.topicId === 'operations-with-square-roots'
      ? 'operations-with-square-roots'
      : route.testId === 'operations-fractional-expressions' || route.topicId === 'operations-fractional-expressions'
      ? 'operations-fractional-expressions'
      : route.testId === 'operations-with-negative-numbers' || route.topicId === 'operations-with-negative-numbers'
      ? 'operations-with-negative-numbers'
      : route.testId === 'operations-fractions-decimals' || route.topicId === 'operations-fractions-decimals'
      ? 'operations-fractions-decimals'
      : route.testId === 'operations-absolute-value' || route.topicId === 'operations-absolute-value'
      ? 'operations-absolute-value'
      : route.testId === 'operations-error-detection' || route.topicId === 'operations-error-detection'
      ? 'operations-error-detection'
      : route.testId === 'operations-missing-brackets-signs' || route.topicId === 'operations-missing-brackets-signs'
      ? 'operations-missing-brackets-signs'
      : route.testId === 'operations-word-problems' || route.topicId === 'operations-word-problems'
      ? 'operations-word-problems'
      : null;

  const numberLineMeasurementQuizType: NumberLineMeasurementQuizType | null =
    route.testId === 'whole-numbers-on-number-line' || route.topicId === 'whole-numbers-on-number-line'
      ? 'whole-numbers-on-number-line'
      : route.testId === 'negative-positive-number-line' || route.topicId === 'negative-positive-number-line'
      ? 'negative-positive-number-line'
      : route.testId === 'fractions-decimals-number-line' || route.topicId === 'fractions-decimals-number-line'
      ? 'fractions-decimals-number-line'
      : route.testId === 'distance-between-points-number-line' || route.topicId === 'distance-between-points-number-line'
      ? 'distance-between-points-number-line'
      : route.testId === 'measuring-length-standard-units' || route.topicId === 'measuring-length-standard-units'
      ? 'measuring-length-standard-units'
      : route.testId === 'measuring-mass-weight' || route.topicId === 'measuring-mass-weight'
      ? 'measuring-mass-weight'
      : route.testId === 'measuring-capacity-volume' || route.topicId === 'measuring-capacity-volume'
      ? 'measuring-capacity-volume'
      : route.testId === 'reading-measurement-tools' || route.topicId === 'reading-measurement-tools'
      ? 'reading-measurement-tools'
      : route.testId === 'elapsed-time-calculation' || route.topicId === 'elapsed-time-calculation'
      ? 'elapsed-time-calculation'
      : route.testId === 'perimeter-and-area-simple-shapes' || route.topicId === 'perimeter-and-area-simple-shapes'
      ? 'perimeter-and-area-simple-shapes'
      : route.testId === 'angles-measurement-protractor' || route.topicId === 'angles-measurement-protractor'
      ? 'angles-measurement-protractor'
      : route.testId === 'number-line-measurement-word-problems' || route.topicId === 'number-line-measurement-word-problems'
      ? 'number-line-measurement-word-problems'
      : null;

  const linearEquationsQuizType: LinearEquationsQuizType | null =
    route.testId === 'one-step-equations' || route.topicId === 'one-step-equations'
      ? 'one-step-equations'
      : route.testId === 'two-step-equations' || route.topicId === 'two-step-equations'
      ? 'two-step-equations'
      : route.testId === 'equations-parentheses-distributive' || route.topicId === 'equations-parentheses-distributive'
      ? 'equations-parentheses-distributive'
      : route.testId === 'equations-variables-both-sides' || route.topicId === 'equations-variables-both-sides'
      ? 'equations-variables-both-sides'
      : route.testId === 'equations-fractions-decimals' || route.topicId === 'equations-fractions-decimals'
      ? 'equations-fractions-decimals'
      : route.testId === 'evaluating-algebraic-expressions' || route.topicId === 'evaluating-algebraic-expressions'
      ? 'evaluating-algebraic-expressions'
      : route.testId === 'special-cases-equations' || route.topicId === 'special-cases-equations'
      ? 'special-cases-equations'
      : route.testId === 'finding-slope-linear' || route.topicId === 'finding-slope-linear'
      ? 'finding-slope-linear'
      : route.testId === 'writing-slope-intercept-form' || route.topicId === 'writing-slope-intercept-form'
      ? 'writing-slope-intercept-form'
      : route.testId === 'graphing-linear-equations' || route.topicId === 'graphing-linear-equations'
      ? 'graphing-linear-equations'
      : route.testId === 'systems-of-linear-equations' || route.topicId === 'systems-of-linear-equations'
      ? 'systems-of-linear-equations'
      : route.testId === 'linear-equations-word-problems' || route.topicId === 'linear-equations-word-problems'
      ? 'linear-equations-word-problems'
      : null;

  const inequalitiesQuizType: InequalitiesQuizType | null =
    route.testId === 'inequality-symbols-comparison' || route.topicId === 'inequality-symbols-comparison'
      ? 'inequality-symbols-comparison'
      : route.testId === 'graphing-inequalities-number-line' || route.topicId === 'graphing-inequalities-number-line'
      ? 'graphing-inequalities-number-line'
      : route.testId === 'one-step-addition-subtraction-inequalities' || route.topicId === 'one-step-addition-subtraction-inequalities'
      ? 'one-step-addition-subtraction-inequalities'
      : route.testId === 'multiplication-division-positive-inequalities' || route.topicId === 'multiplication-division-positive-inequalities'
      ? 'multiplication-division-positive-inequalities'
      : route.testId === 'negative-multiplication-reversing-inequalities' || route.topicId === 'negative-multiplication-reversing-inequalities'
      ? 'negative-multiplication-reversing-inequalities'
      : route.testId === 'two-step-inequalities' || route.topicId === 'two-step-inequalities'
      ? 'two-step-inequalities'
      : route.testId === 'distributive-parentheses-inequalities' || route.topicId === 'distributive-parentheses-inequalities'
      ? 'distributive-parentheses-inequalities'
      : route.testId === 'variables-both-sides-inequalities' || route.topicId === 'variables-both-sides-inequalities'
      ? 'variables-both-sides-inequalities'
      : route.testId === 'compound-inequalities' || route.topicId === 'compound-inequalities'
      ? 'compound-inequalities'
      : route.testId === 'absolute-value-inequalities' || route.topicId === 'absolute-value-inequalities'
      ? 'absolute-value-inequalities'
      : route.testId === 'two-variable-linear-inequalities' || route.topicId === 'two-variable-linear-inequalities'
      ? 'two-variable-linear-inequalities'
      : route.testId === 'inequalities-word-problems' || route.topicId === 'inequalities-word-problems'
      ? 'inequalities-word-problems'
      : null;

  const polynomialsQuizType: PolynomialsQuizType | null =
    route.testId === 'polynomial-degree-leading-coefficient' || route.topicId === 'polynomial-degree-leading-coefficient'
      ? 'polynomial-degree-leading-coefficient'
      : route.testId === 'polynomial-classification' || route.topicId === 'polynomial-classification'
      ? 'polynomial-classification'
      : route.testId === 'polynomial-addition-subtraction' || route.topicId === 'polynomial-addition-subtraction'
      ? 'polynomial-addition-subtraction'
      : route.testId === 'polynomial-monomial-multiplication' || route.topicId === 'polynomial-monomial-multiplication'
      ? 'polynomial-monomial-multiplication'
      : route.testId === 'polynomial-binomial-multiplication' || route.topicId === 'polynomial-binomial-multiplication'
      ? 'polynomial-binomial-multiplication'
      : route.testId === 'polynomial-special-products' || route.topicId === 'polynomial-special-products'
      ? 'polynomial-special-products'
      : route.testId === 'polynomial-gcf-factoring' || route.topicId === 'polynomial-gcf-factoring'
      ? 'polynomial-gcf-factoring'
      : route.testId === 'polynomial-trinomial-factoring-simple' || route.topicId === 'polynomial-trinomial-factoring-simple'
      ? 'polynomial-trinomial-factoring-simple'
      : route.testId === 'polynomial-trinomial-factoring-advanced' || route.topicId === 'polynomial-trinomial-factoring-advanced'
      ? 'polynomial-trinomial-factoring-advanced'
      : route.testId === 'polynomial-special-factoring' || route.topicId === 'polynomial-special-factoring'
      ? 'polynomial-special-factoring'
      : route.testId === 'polynomial-division' || route.topicId === 'polynomial-division'
      ? 'polynomial-division'
      : route.testId === 'polynomial-word-problems' || route.topicId === 'polynomial-word-problems'
      ? 'polynomial-word-problems'
      : null;

  const quadraticEquationsQuizType: QuadraticQuizType | null =
    route.testId === 'quadratic-standard-form-coefficients' || route.topicId === 'quadratic-standard-form-coefficients'
      ? 'quadratic-standard-form-coefficients'
      : route.testId === 'quadratic-square-root-method' || route.topicId === 'quadratic-square-root-method'
      ? 'quadratic-square-root-method'
      : route.testId === 'quadratic-factoring-gcf' || route.topicId === 'quadratic-factoring-gcf'
      ? 'quadratic-factoring-gcf'
      : route.testId === 'quadratic-factoring-simple-trinomial' || route.topicId === 'quadratic-factoring-simple-trinomial'
      ? 'quadratic-factoring-simple-trinomial'
      : route.testId === 'quadratic-factoring-general-trinomial' || route.topicId === 'quadratic-factoring-general-trinomial'
      ? 'quadratic-factoring-general-trinomial'
      : route.testId === 'quadratic-completing-the-square' || route.topicId === 'quadratic-completing-the-square'
      ? 'quadratic-completing-the-square'
      : route.testId === 'quadratic-formula-method' || route.topicId === 'quadratic-formula-method'
      ? 'quadratic-formula-method'
      : route.testId === 'quadratic-discriminant-roots-nature' || route.topicId === 'quadratic-discriminant-roots-nature'
      ? 'quadratic-discriminant-roots-nature'
      : route.testId === 'quadratic-parabola-vertex-axis' || route.topicId === 'quadratic-parabola-vertex-axis'
      ? 'quadratic-parabola-vertex-axis'
      : route.testId === 'quadratic-intercepts-graphing' || route.topicId === 'quadratic-intercepts-graphing' || route.testId === 'quadratic-parabola-intercepts' || route.topicId === 'quadratic-parabola-intercepts'
      ? 'quadratic-intercepts-graphing'
      : route.testId === 'quadratic-word-problems-projectiles' || route.topicId === 'quadratic-word-problems-projectiles'
      ? 'quadratic-word-problems-projectiles'
      : route.testId === 'quadratic-roots-formation-vieta' || route.topicId === 'quadratic-roots-formation-vieta'
      ? 'quadratic-roots-formation-vieta'
      : null;

  const functionsGraphsQuizType: FunctionsGraphsQuizType | null =
    route.testId === 'function-concept-vertical-line-test' || route.topicId === 'function-concept-vertical-line-test'
      ? 'function-concept-vertical-line-test'
      : route.testId === 'function-domain-and-range' || route.topicId === 'function-domain-and-range'
      ? 'function-domain-and-range'
      : route.testId === 'function-notation-evaluation' || route.topicId === 'function-notation-evaluation'
      ? 'function-notation-evaluation'
      : route.testId === 'even-and-odd-functions' || route.topicId === 'even-and-odd-functions'
      ? 'even-and-odd-functions'
      : route.testId === 'function-transformations' || route.topicId === 'function-transformations'
      ? 'function-transformations'
      : route.testId === 'composite-functions' || route.topicId === 'composite-functions'
      ? 'composite-functions'
      : route.testId === 'inverse-functions' || route.topicId === 'inverse-functions'
      ? 'inverse-functions'
      : route.testId === 'piecewise-defined-functions' || route.topicId === 'piecewise-defined-functions'
      ? 'piecewise-defined-functions'
      : route.testId === 'analyzing-functions-behavior-extrema' || route.topicId === 'analyzing-functions-behavior-extrema'
      ? 'analyzing-functions-behavior-extrema'
      : route.testId === 'parent-functions-graphs' || route.topicId === 'parent-functions-graphs'
      ? 'parent-functions-graphs'
      : route.testId === 'rational-functions-asymptotes' || route.topicId === 'rational-functions-asymptotes'
      ? 'rational-functions-asymptotes'
      : route.testId === 'functions-word-problems-applications' || route.topicId === 'functions-word-problems-applications'
      ? 'functions-word-problems-applications'
      : null;

  const sequencesQuizType: SequencesQuizType | null =
    route.testId === 'sequence-patterns-next-terms' || route.topicId === 'sequence-patterns-next-terms'
      ? 'sequence-patterns-next-terms'
      : route.testId === 'arithmetic-sequence-explicit-formula' || route.topicId === 'arithmetic-sequence-explicit-formula'
      ? 'arithmetic-sequence-explicit-formula'
      : route.testId === 'arithmetic-sequence-finding-terms' || route.topicId === 'arithmetic-sequence-finding-terms'
      ? 'arithmetic-sequence-finding-terms'
      : route.testId === 'arithmetic-series-finite-sum' || route.topicId === 'arithmetic-series-finite-sum'
      ? 'arithmetic-series-finite-sum'
      : route.testId === 'geometric-sequence-common-ratio-formula' || route.topicId === 'geometric-sequence-common-ratio-formula'
      ? 'geometric-sequence-common-ratio-formula'
      : route.testId === 'geometric-sequence-finding-terms' || route.topicId === 'geometric-sequence-finding-terms'
      ? 'geometric-sequence-finding-terms'
      : route.testId === 'finite-geometric-series-sum' || route.topicId === 'finite-geometric-series-sum'
      ? 'finite-geometric-series-sum'
      : route.testId === 'infinite-geometric-series-convergence' || route.topicId === 'infinite-geometric-series-convergence'
      ? 'infinite-geometric-series-convergence'
      : route.testId === 'sigma-notation-series' || route.topicId === 'sigma-notation-series'
      ? 'sigma-notation-series'
      : route.testId === 'recursive-sequences-relations' || route.topicId === 'recursive-sequences-relations'
      ? 'recursive-sequences-relations'
      : route.testId === 'fibonacci-and-special-sequences' || route.topicId === 'fibonacci-and-special-sequences'
      ? 'fibonacci-and-special-sequences'
      : route.testId === 'sequences-series-word-problems' || route.topicId === 'sequences-series-word-problems'
      ? 'sequences-series-word-problems'
      : null;

  const geometricShapesQuizType: GeometricShapesQuizType | null =
    route.testId === 'shapes-2d-properties' || route.topicId === 'shapes-2d-properties'
      ? 'shapes-2d-properties'
      : route.testId === 'triangle-classification-sides-angles' || route.topicId === 'triangle-classification-sides-angles'
      ? 'triangle-classification-sides-angles'
      : route.testId === 'angles-sum-triangles-quadrilaterals' || route.topicId === 'angles-sum-triangles-quadrilaterals'
      ? 'angles-sum-triangles-quadrilaterals'
      : route.testId === 'perimeter-plane-shapes' || route.topicId === 'perimeter-plane-shapes'
      ? 'perimeter-plane-shapes'
      : route.testId === 'area-plane-shapes-polygons' || route.topicId === 'area-plane-shapes-polygons'
      ? 'area-plane-shapes-polygons'
      : route.testId === 'circle-properties-area-circumference' || route.topicId === 'circle-properties-area-circumference'
      ? 'circle-properties-area-circumference'
      : route.testId === 'shapes-3d-faces-edges-vertices' || route.topicId === 'shapes-3d-faces-edges-vertices'
      ? 'shapes-3d-faces-edges-vertices'
      : route.testId === 'volume-3d-solids' || route.topicId === 'volume-3d-solids'
      ? 'volume-3d-solids'
      : route.testId === 'surface-area-3d-solids' || route.topicId === 'surface-area-3d-solids'
      ? 'surface-area-3d-solids'
      : route.testId === 'geometric-transformations-reflections-rotations' || route.topicId === 'geometric-transformations-reflections-rotations'
      ? 'geometric-transformations-reflections-rotations'
      : route.testId === 'similarity-congruence-pythagoras' || route.topicId === 'similarity-congruence-pythagoras'
      ? 'similarity-congruence-pythagoras'
      : route.testId === 'geometric-shapes-word-problems' || route.topicId === 'geometric-shapes-word-problems'
      ? 'geometric-shapes-word-problems'
      : null;

  const perimeterAreaQuizType: PerimeterAreaQuizType | null =
    route.testId === 'perimeter-basic-polygons' || route.topicId === 'perimeter-basic-polygons'
      ? 'perimeter-basic-polygons'
      : route.testId === 'perimeter-area-square-rectangle' || route.topicId === 'perimeter-area-square-rectangle'
      ? 'perimeter-area-square-rectangle'
      : route.testId === 'area-triangles-direct-indirect' || route.topicId === 'area-triangles-direct-indirect'
      ? 'area-triangles-direct-indirect'
      : route.testId === 'area-parallelogram-trapezoid' || route.topicId === 'area-parallelogram-trapezoid'
      ? 'area-parallelogram-trapezoid'
      : route.testId === 'perimeter-area-rhombus-kite' || route.topicId === 'perimeter-area-rhombus-kite'
      ? 'perimeter-area-rhombus-kite'
      : route.testId === 'circle-circumference-arc-length' || route.topicId === 'circle-circumference-arc-length'
      ? 'circle-circumference-arc-length'
      : route.testId === 'circle-area-sectors' || route.topicId === 'circle-area-sectors'
      ? 'circle-area-sectors'
      : route.testId === 'find-missing-dimension-perimeter-area' || route.topicId === 'find-missing-dimension-perimeter-area'
      ? 'find-missing-dimension-perimeter-area'
      : route.testId === 'composite-shapes-perimeter-area' || route.topicId === 'composite-shapes-perimeter-area'
      ? 'composite-shapes-perimeter-area'
      : route.testId === 'dimension-scaling-perimeter-area' || route.topicId === 'dimension-scaling-perimeter-area'
      ? 'dimension-scaling-perimeter-area'
      : route.testId === 'shaded-region-enclosed-areas' || route.topicId === 'shaded-region-enclosed-areas'
      ? 'shaded-region-enclosed-areas'
      : route.testId === 'perimeter-area-word-problems' || route.topicId === 'perimeter-area-word-problems'
      ? 'perimeter-area-word-problems'
      : null;

  const trianglesAnglesQuizType: TrianglesAnglesQuizType | null =
    route.testId === 'angle-types-measurement' || route.topicId === 'angle-types-measurement'
      ? 'angle-types-measurement'
      : route.testId === 'angle-relationships' || route.topicId === 'angle-relationships'
      ? 'angle-relationships'
      : route.testId === 'parallel-lines-transversals' || route.topicId === 'parallel-lines-transversals'
      ? 'parallel-lines-transversals'
      : route.testId === 'triangle-classification' || route.topicId === 'triangle-classification'
      ? 'triangle-classification'
      : route.testId === 'triangle-angles-exterior-angle' || route.topicId === 'triangle-angles-exterior-angle'
      ? 'triangle-angles-exterior-angle'
      : route.testId === 'triangle-inequality-theorem' || route.topicId === 'triangle-inequality-theorem'
      ? 'triangle-inequality-theorem'
      : route.testId === 'pythagorean-theorem-applications' || route.topicId === 'pythagorean-theorem-applications'
      ? 'pythagorean-theorem-applications'
      : route.testId === 'triangle-congruence-criteria' || route.topicId === 'triangle-congruence-criteria'
      ? 'triangle-congruence-criteria'
      : route.testId === 'triangle-similarity-proportions' || route.topicId === 'triangle-similarity-proportions'
      ? 'triangle-similarity-proportions'
      : route.testId === 'special-segments-in-triangles' || route.topicId === 'special-segments-in-triangles'
      ? 'special-segments-in-triangles'
      : route.testId === 'right-triangle-trigonometry-basics' || route.topicId === 'right-triangle-trigonometry-basics'
      ? 'right-triangle-trigonometry-basics'
      : route.testId === 'triangles-angles-word-problems' || route.topicId === 'triangles-angles-word-problems'
      ? 'triangles-angles-word-problems'
      : null;

  const trigonometryQuizType: TrigonometryQuizType | null =
    route.testId === 'basic-trig-ratios-right-triangle' || route.topicId === 'basic-trig-ratios-right-triangle'
      ? 'basic-trig-ratios-right-triangle'
      : route.testId === 'reciprocal-trig-ratios' || route.topicId === 'reciprocal-trig-ratios'
      ? 'reciprocal-trig-ratios'
      : route.testId === 'special-angles-trig-ratios' || route.topicId === 'special-angles-trig-ratios'
      ? 'special-angles-trig-ratios'
      : route.testId === 'degrees-radians-conversion' || route.topicId === 'degrees-radians-conversion'
      ? 'degrees-radians-conversion'
      : route.testId === 'unit-circle-reference-angles' || route.topicId === 'unit-circle-reference-angles'
      ? 'unit-circle-reference-angles'
      : route.testId === 'pythagorean-fundamental-identities' || route.topicId === 'pythagorean-fundamental-identities'
      ? 'pythagorean-fundamental-identities'
      : route.testId === 'sum-difference-double-half-identities' || route.topicId === 'sum-difference-double-half-identities'
      ? 'sum-difference-double-half-identities'
      : route.testId === 'solving-trigonometric-equations' || route.topicId === 'solving-trigonometric-equations'
      ? 'solving-trigonometric-equations'
      : route.testId === 'law-of-sines' || route.topicId === 'law-of-sines'
      ? 'law-of-sines'
      : route.testId === 'law-of-cosines' || route.topicId === 'law-of-cosines'
      ? 'law-of-cosines'
      : route.testId === 'graphing-trig-functions' || route.topicId === 'graphing-trig-functions'
      ? 'graphing-trig-functions'
      : route.testId === 'trig-word-problems-applications' || route.topicId === 'trig-word-problems-applications'
      ? 'trig-word-problems-applications'
      : null;

  const analyticGeometryQuizType: AnalyticGeometryQuizType | null =
    route.testId === 'cartesian-coordinates-quadrants' || route.topicId === 'cartesian-coordinates-quadrants'
      ? 'cartesian-coordinates-quadrants'
      : route.testId === 'distance-between-two-points' || route.topicId === 'distance-between-two-points'
      ? 'distance-between-two-points'
      : route.testId === 'midpoint-line-segment-division' || route.topicId === 'midpoint-line-segment-division'
      ? 'midpoint-line-segment-division'
      : route.testId === 'slope-of-linear-line' || route.topicId === 'slope-of-linear-line'
      ? 'slope-of-linear-line'
      : route.testId === 'forms-of-linear-equations' || route.topicId === 'forms-of-linear-equations'
      ? 'forms-of-linear-equations'
      : route.testId === 'parallel-perpendicular-lines' || route.topicId === 'parallel-perpendicular-lines'
      ? 'parallel-perpendicular-lines'
      : route.testId === 'circle-equation-properties' || route.topicId === 'circle-equation-properties'
      ? 'circle-equation-properties'
      : route.testId === 'ellipse-properties-equations' || route.topicId === 'ellipse-properties-equations'
      ? 'ellipse-properties-equations'
      : route.testId === 'parabola-analytic-geometry' || route.topicId === 'parabola-analytic-geometry'
      ? 'parabola-analytic-geometry'
      : route.testId === 'hyperbola-asymptotes' || route.topicId === 'hyperbola-asymptotes'
      ? 'hyperbola-asymptotes'
      : route.testId === 'polar-coordinates-conversion' || route.topicId === 'polar-coordinates-conversion'
      ? 'polar-coordinates-conversion'
      : route.testId === 'analytic-geometry-word-problems' || route.topicId === 'analytic-geometry-word-problems'
      ? 'analytic-geometry-word-problems'
      : null;

  const geometricTransformationsQuizType: GeometricTransformationsQuizType | null =
    route.testId === 'rigid-transformations-isometries' || route.topicId === 'rigid-transformations-isometries'
      ? 'rigid-transformations-isometries'
      : route.testId === 'reflection-axes' || route.topicId === 'reflection-axes'
      ? 'reflection-axes'
      : route.testId === 'reflection-linear-lines' || route.topicId === 'reflection-linear-lines'
      ? 'reflection-linear-lines'
      : route.testId === 'translations-coordinate-plane' || route.topicId === 'translations-coordinate-plane'
      ? 'translations-coordinate-plane'
      : route.testId === 'rotations-origin' || route.topicId === 'rotations-origin'
      ? 'rotations-origin'
      : route.testId === 'composition-of-transformations' || route.topicId === 'composition-of-transformations'
      ? 'composition-of-transformations'
      : route.testId === 'dilation-scale-factor' || route.topicId === 'dilation-scale-factor'
      ? 'dilation-scale-factor'
      : route.testId === 'symmetry-line-rotational' || route.topicId === 'symmetry-line-rotational'
      ? 'symmetry-line-rotational'
      : route.testId === 'tessellations-patterns' || route.topicId === 'tessellations-patterns'
      ? 'tessellations-patterns'
      : route.testId === 'transformation-matrices' || route.topicId === 'transformation-matrices'
      ? 'transformation-matrices'
      : route.testId === 'vectors-translations' || route.topicId === 'vectors-translations'
      ? 'vectors-translations'
      : route.testId === 'transformations-word-problems' || route.topicId === 'transformations-word-problems'
      ? 'transformations-word-problems'
      : null;

  const limitsContinuityQuizType: LimitsContinuityQuizType | null =
    route.testId === 'graphical-numerical-limits' || route.topicId === 'graphical-numerical-limits'
      ? 'graphical-numerical-limits'
      : route.testId === 'direct-substitution-limits' || route.topicId === 'direct-substitution-limits'
      ? 'direct-substitution-limits'
      : route.testId === 'factoring-indeterminate-limits' || route.topicId === 'factoring-indeterminate-limits' || route.testId === 'zero-division-factoring-limits' || route.topicId === 'zero-division-factoring-limits'
      ? 'factoring-indeterminate-limits'
      : route.testId === 'rationalization-conjugate-limits' || route.topicId === 'rationalization-conjugate-limits'
      ? 'rationalization-conjugate-limits'
      : route.testId === 'one-sided-limits' || route.topicId === 'one-sided-limits'
      ? 'one-sided-limits'
      : route.testId === 'limits-at-infinity' || route.topicId === 'limits-at-infinity'
      ? 'limits-at-infinity'
      : route.testId === 'infinite-limits-asymptotes' || route.topicId === 'infinite-limits-asymptotes' || route.testId === 'infinite-limits-vertical-asymptotes' || route.topicId === 'infinite-limits-vertical-asymptotes'
      ? 'infinite-limits-asymptotes'
      : route.testId === 'continuity-at-a-point' || route.topicId === 'continuity-at-a-point'
      ? 'continuity-at-a-point'
      : route.testId === 'types-of-discontinuity' || route.topicId === 'types-of-discontinuity' || route.testId === 'discontinuity-types' || route.topicId === 'discontinuity-types'
      ? 'types-of-discontinuity'
      : route.testId === 'ivt-intermediate-value-theorem' || route.topicId === 'ivt-intermediate-value-theorem' || route.testId === 'intermediate-value-theorem-ivt' || route.topicId === 'intermediate-value-theorem-ivt'
      ? 'ivt-intermediate-value-theorem'
      : route.testId === 'trigonometric-limits' || route.topicId === 'trigonometric-limits' || route.testId === 'trigonometric-special-limits' || route.topicId === 'trigonometric-special-limits'
      ? 'trigonometric-limits'
      : route.testId === 'limits-continuity-applications' || route.topicId === 'limits-continuity-applications' || route.testId === 'limits-continuity-word-problems' || route.topicId === 'limits-continuity-word-problems'
      ? 'limits-continuity-applications'
      : null;

  const derivativesDifferentiationQuizType: DerivativesQuizType | null =
    route.testId === 'definition-of-derivative' || route.topicId === 'definition-of-derivative'
      ? 'definition-of-derivative'
      : route.testId === 'basic-differentiation-rules' || route.topicId === 'basic-differentiation-rules'
      ? 'basic-differentiation-rules'
      : route.testId === 'product-rule' || route.topicId === 'product-rule'
      ? 'product-rule'
      : route.testId === 'quotient-rule' || route.topicId === 'quotient-rule'
      ? 'quotient-rule'
      : route.testId === 'chain-rule' || route.topicId === 'chain-rule'
      ? 'chain-rule'
      : route.testId === 'trigonometric-differentiation' || route.topicId === 'trigonometric-differentiation'
      ? 'trigonometric-differentiation'
      : route.testId === 'exponential-logarithmic-differentiation' || route.topicId === 'exponential-logarithmic-differentiation'
      ? 'exponential-logarithmic-differentiation'
      : route.testId === 'implicit-differentiation' || route.topicId === 'implicit-differentiation'
      ? 'implicit-differentiation'
      : route.testId === 'higher-order-derivatives' || route.topicId === 'higher-order-derivatives'
      ? 'higher-order-derivatives'
      : route.testId === 'tangent-normal-lines' || route.topicId === 'tangent-normal-lines'
      ? 'tangent-normal-lines'
      : route.testId === 'critical-points-extrema' || route.topicId === 'critical-points-extrema'
      ? 'critical-points-extrema'
      : route.testId === 'related-rates-optimization' || route.topicId === 'related-rates-optimization'
      ? 'related-rates-optimization'
      : null;

  const applicationsOfDerivativesQuizType: ApplicationsOfDerivativesQuizType | null =
    route.testId === 'kinematics-motion' || route.topicId === 'kinematics-motion'
      ? 'kinematics-motion'
      : route.testId === 'increasing-decreasing-intervals' || route.topicId === 'increasing-decreasing-intervals'
      ? 'increasing-decreasing-intervals'
      : route.testId === 'local-extrema' || route.topicId === 'local-extrema'
      ? 'local-extrema'
      : route.testId === 'absolute-extrema' || route.topicId === 'absolute-extrema'
      ? 'absolute-extrema'
      : route.testId === 'concavity-inflection-points' || route.topicId === 'concavity-inflection-points'
      ? 'concavity-inflection-points'
      : route.testId === 'curve-sketching' || route.topicId === 'curve-sketching'
      ? 'curve-sketching'
      : route.testId === 'optimization-problems' || route.topicId === 'optimization-problems'
      ? 'optimization-problems'
      : (route.testId === 'related-rates' || route.topicId === 'related-rates') && route.testId !== 'related-rates-optimization'
      ? 'related-rates'
      : route.testId === 'linear-approximation-differentials' || route.topicId === 'linear-approximation-differentials'
      ? 'linear-approximation-differentials'
      : route.testId === 'rolles-mean-value-theorem' || route.topicId === 'rolles-mean-value-theorem'
      ? 'rolles-mean-value-theorem'
      : route.testId === 'lhopitals-rule' || route.topicId === 'lhopitals-rule'
      ? 'lhopitals-rule'
      : route.testId === 'marginal-analysis-business' || route.topicId === 'marginal-analysis-business'
      ? 'marginal-analysis-business'
      : null;

  const integrationQuizType: IntegrationQuizType | null =
    route.testId === 'indefinite-integrals-basic-rules' || route.topicId === 'indefinite-integrals-basic-rules'
      ? 'indefinite-integrals-basic-rules'
      : route.testId === 'exponential-logarithmic-integration' || route.topicId === 'exponential-logarithmic-integration'
      ? 'exponential-logarithmic-integration'
      : route.testId === 'trigonometric-integration' || route.topicId === 'trigonometric-integration'
      ? 'trigonometric-integration'
      : route.testId === 'integration-by-substitution' || route.topicId === 'integration-by-substitution'
      ? 'integration-by-substitution'
      : route.testId === 'integration-by-parts' || route.topicId === 'integration-by-parts'
      ? 'integration-by-parts'
      : route.testId === 'partial-fractions-integration' || route.topicId === 'partial-fractions-integration'
      ? 'partial-fractions-integration'
      : route.testId === 'fundamental-theorem-definite-integral' || route.topicId === 'fundamental-theorem-definite-integral'
      ? 'fundamental-theorem-definite-integral'
      : route.testId === 'properties-of-definite-integrals' || route.topicId === 'properties-of-definite-integrals'
      ? 'properties-of-definite-integrals'
      : route.testId === 'area-under-curve-axis' || route.topicId === 'area-under-curve-axis'
      ? 'area-under-curve-axis'
      : route.testId === 'area-between-curves' || route.topicId === 'area-between-curves'
      ? 'area-between-curves'
      : route.testId === 'improper-integrals' || route.topicId === 'improper-integrals'
      ? 'improper-integrals'
      : route.testId === 'applied-integration-word-problems' || route.topicId === 'applied-integration-word-problems'
      ? 'applied-integration-word-problems'
      : null;

  const applicationsOfIntegrationQuizType: ApplicationsOfIntegrationQuizType | null =
    route.testId === 'area-under-curve-x-axis' || route.topicId === 'area-under-curve-x-axis'
      ? 'area-under-curve-x-axis'
      : route.testId === 'area-between-two-curves' || route.topicId === 'area-between-two-curves'
      ? 'area-between-two-curves'
      : route.testId === 'disk-method-volumes' || route.topicId === 'disk-method-volumes'
      ? 'disk-method-volumes'
      : route.testId === 'washer-method-volumes' || route.topicId === 'washer-method-volumes'
      ? 'washer-method-volumes'
      : route.testId === 'cylindrical-shells-method' || route.topicId === 'cylindrical-shells-method'
      ? 'cylindrical-shells-method'
      : route.testId === 'arc-length-curves' || route.topicId === 'arc-length-curves'
      ? 'arc-length-curves'
      : route.testId === 'surface-area-revolution' || route.topicId === 'surface-area-revolution'
      ? 'surface-area-revolution'
      : route.testId === 'work-physics-applications' || route.topicId === 'work-physics-applications'
      ? 'work-physics-applications'
      : route.testId === 'average-value-function' || route.topicId === 'average-value-function'
      ? 'average-value-function'
      : route.testId === 'center-of-mass-centroid' || route.topicId === 'center-of-mass-centroid'
      ? 'center-of-mass-centroid'
      : route.testId === 'economic-applications-surplus' || route.topicId === 'economic-applications-surplus'
      ? 'economic-applications-surplus'
      : route.testId === 'accumulation-real-world-physics' || route.topicId === 'accumulation-real-world-physics'
      ? 'accumulation-real-world-physics'
      : null;

  const differentialEquationsQuizType: DifferentialEquationsQuizType | null =
    route.testId === 'classification-order-degree' || route.topicId === 'classification-order-degree'
      ? 'classification-order-degree'
      : route.testId === 'verifying-solutions' || route.topicId === 'verifying-solutions'
      ? 'verifying-solutions'
      : route.testId === 'separable-differential-equations' || route.topicId === 'separable-differential-equations'
      ? 'separable-differential-equations'
      : route.testId === 'first-order-linear-integrating-factor' || route.topicId === 'first-order-linear-integrating-factor'
      ? 'first-order-linear-integrating-factor'
      : route.testId === 'homogeneous-first-order' || route.topicId === 'homogeneous-first-order'
      ? 'homogeneous-first-order'
      : route.testId === 'exact-differential-equations' || route.topicId === 'exact-differential-equations'
      ? 'exact-differential-equations'
      : route.testId === 'bernoulli-differential-equations' || route.topicId === 'bernoulli-differential-equations'
      ? 'bernoulli-differential-equations'
      : route.testId === 'second-order-constant-coefficients' || route.topicId === 'second-order-constant-coefficients'
      ? 'second-order-constant-coefficients'
      : route.testId === 'repeated-complex-roots' || route.topicId === 'repeated-complex-roots'
      ? 'repeated-complex-roots'
      : route.testId === 'laplace-transforms-ode' || route.topicId === 'laplace-transforms-ode'
      ? 'laplace-transforms-ode'
      : route.testId === 'modeling-growth-decay-cooling' || route.topicId === 'modeling-growth-decay-cooling'
      ? 'modeling-growth-decay-cooling'
      : route.testId === 'rlc-circuits-vibrations' || route.topicId === 'rlc-circuits-vibrations'
      ? 'rlc-circuits-vibrations'
      : null;

  const statisticalMeasuresQuizType: StatisticalMeasuresQuizType | null =
    route.testId === 'mean-central-tendency' || route.topicId === 'mean-central-tendency'
      ? 'mean-central-tendency'
      : route.testId === 'median-central-tendency' || route.topicId === 'median-central-tendency'
      ? 'median-central-tendency'
      : route.testId === 'mode-central-tendency' || route.topicId === 'mode-central-tendency'
      ? 'mode-central-tendency'
      : route.testId === 'grouped-data-measures' || route.topicId === 'grouped-data-measures'
      ? 'grouped-data-measures'
      : route.testId === 'range-and-iqr' || route.topicId === 'range-and-iqr'
      ? 'range-and-iqr'
      : route.testId === 'variance-standard-deviation' || route.topicId === 'variance-standard-deviation'
      ? 'variance-standard-deviation'
      : route.testId === 'quartiles-percentiles' || route.topicId === 'quartiles-percentiles'
      ? 'quartiles-percentiles'
      : route.testId === 'box-plot-measures' || route.topicId === 'box-plot-measures'
      ? 'box-plot-measures'
      : route.testId === 'z-score-standardization' || route.topicId === 'z-score-standardization'
      ? 'z-score-standardization'
      : route.testId === 'skewness-distribution-shape' || route.topicId === 'skewness-distribution-shape'
      ? 'skewness-distribution-shape'
      : route.testId === 'mean-deviation-coefficient-variation' || route.topicId === 'mean-deviation-coefficient-variation'
      ? 'mean-deviation-coefficient-variation'
      : route.testId === 'statistical-measures-word-problems' || route.topicId === 'statistical-measures-word-problems'
      ? 'statistical-measures-word-problems'
      : null;

  const dataAnalysisQuizType: DataAnalysisQuizType | null =
    route.testId === 'data-collection-sampling-methods' || route.topicId === 'data-collection-sampling-methods'
      ? 'data-collection-sampling-methods'
      : route.testId === 'data-visualization-charts' || route.topicId === 'data-visualization-charts'
      ? 'data-visualization-charts'
      : route.testId === 'frequency-tables-histograms' || route.topicId === 'frequency-tables-histograms'
      ? 'frequency-tables-histograms'
      : route.testId === 'dispersion-variability-analysis' || route.topicId === 'dispersion-variability-analysis'
      ? 'dispersion-variability-analysis'
      : route.testId === 'pearson-spearman-correlation' || route.topicId === 'pearson-spearman-correlation'
      ? 'pearson-spearman-correlation'
      : route.testId === 'linear-regression-prediction' || route.topicId === 'linear-regression-prediction'
      ? 'linear-regression-prediction'
      : route.testId === 'two-way-contingency-tables' || route.topicId === 'two-way-contingency-tables'
      ? 'two-way-contingency-tables'
      : route.testId === 'time-series-trend-analysis' || route.topicId === 'time-series-trend-analysis'
      ? 'time-series-trend-analysis'
      : route.testId === 'chi-square-independence-test' || route.topicId === 'chi-square-independence-test'
      ? 'chi-square-independence-test'
      : route.testId === 'dashboards-kpis-interpretation' || route.topicId === 'dashboards-kpis-interpretation'
      ? 'dashboards-kpis-interpretation'
      : route.testId === 'detecting-bias-misleading-graphs' || route.topicId === 'detecting-bias-misleading-graphs'
      ? 'detecting-bias-misleading-graphs'
      : route.testId === 'data-analysis-word-problems' || route.topicId === 'data-analysis-word-problems'
      ? 'data-analysis-word-problems'
      : null;

  const probabilityQuizType: ProbabilityQuizType | null =
    route.testId === 'basic-theoretical-experimental-probability' || route.topicId === 'basic-theoretical-experimental-probability'
      ? 'basic-theoretical-experimental-probability'
      : route.testId === 'sample-space-counting-principles' || route.topicId === 'sample-space-counting-principles'
      ? 'sample-space-counting-principles'
      : route.testId === 'geometric-probability' || route.topicId === 'geometric-probability'
      ? 'geometric-probability'
      : route.testId === 'simple-compound-complementary-events' || route.topicId === 'simple-compound-complementary-events'
      ? 'simple-compound-complementary-events'
      : route.testId === 'conditional-probability-multiplication-rule' || route.topicId === 'conditional-probability-multiplication-rule'
      ? 'conditional-probability-multiplication-rule'
      : route.testId === 'independent-dependent-events' || route.topicId === 'independent-dependent-events'
      ? 'independent-dependent-events'
      : route.testId === 'mutually-exclusive-overlapping-events' || route.topicId === 'mutually-exclusive-overlapping-events'
      ? 'mutually-exclusive-overlapping-events'
      : route.testId === 'permutations-combinations-probability' || route.topicId === 'permutations-combinations-probability'
      ? 'permutations-combinations-probability'
      : route.testId === 'bayes-theorem-total-probability' || route.topicId === 'bayes-theorem-total-probability'
      ? 'bayes-theorem-total-probability'
      : route.testId === 'discrete-random-variables-distributions' || route.topicId === 'discrete-random-variables-distributions'
      ? 'discrete-random-variables-distributions'
      : route.testId === 'binomial-probability-distribution' || route.topicId === 'binomial-probability-distribution'
      ? 'binomial-probability-distribution'
      : route.testId === 'applied-probability-word-problems' || route.topicId === 'applied-probability-word-problems'
      ? 'applied-probability-word-problems'
      : null;

  const permutationsCombinationsQuizType: PermutationsCombinationsQuizType | null =
    route.subcategoryId === 'permutations-combinations' && !route.topicId && !route.testId
      ? null
      : route.testId === 'fundamental-counting-principle' || route.topicId === 'fundamental-counting-principle'
      ? 'fundamental-counting-principle'
      : route.testId === 'factorial-operations' || route.topicId === 'factorial-operations'
      ? 'factorial-operations'
      : route.testId === 'linear-permutations' || route.topicId === 'linear-permutations'
      ? 'linear-permutations'
      : route.testId === 'partial-permutations' || route.topicId === 'partial-permutations'
      ? 'partial-permutations'
      : route.testId === 'permutations-with-repetition' || route.topicId === 'permutations-with-repetition'
      ? 'permutations-with-repetition'
      : route.testId === 'circular-permutations' || route.topicId === 'circular-permutations'
      ? 'circular-permutations'
      : route.testId === 'combinations-fundamentals' || route.topicId === 'combinations-fundamentals'
      ? 'combinations-fundamentals'
      : route.testId === 'permutations-vs-combinations' || route.topicId === 'permutations-vs-combinations'
      ? 'permutations-vs-combinations'
      : route.testId === 'combinations-properties-symmetry' || route.topicId === 'combinations-properties-symmetry'
      ? 'combinations-properties-symmetry'
      : route.testId === 'binomial-theorem-pascals-triangle' || route.topicId === 'binomial-theorem-pascals-triangle'
      ? 'binomial-theorem-pascals-triangle'
      : route.testId === 'inclusion-exclusion-pigeonhole' || route.topicId === 'inclusion-exclusion-pigeonhole'
      ? 'inclusion-exclusion-pigeonhole'
      : route.testId === 'applied-combinatorics-word-problems' || route.topicId === 'applied-combinatorics-word-problems'
      ? 'applied-combinatorics-word-problems'
      : null;

  const probabilityDistributionsQuizType: ProbabilityDistributionQuizType | null =
    route.subcategoryId === 'probability-distributions' && !route.topicId && !route.testId
      ? null
      : route.testId === 'random-variables-types' || route.topicId === 'random-variables-types'
      ? 'random-variables-types'
      : route.testId === 'discrete-probability-distributions-expected-value' || route.topicId === 'discrete-probability-distributions-expected-value'
      ? 'discrete-probability-distributions-expected-value'
      : route.testId === 'variance-standard-deviation-discrete' || route.topicId === 'variance-standard-deviation-discrete'
      ? 'variance-standard-deviation-discrete'
      : route.testId === 'binomial-distribution-properties' || route.topicId === 'binomial-distribution-properties'
      ? 'binomial-distribution-properties'
      : route.testId === 'binomial-probability-calculations' || route.topicId === 'binomial-probability-calculations'
      ? 'binomial-probability-calculations'
      : route.testId === 'poisson-distribution' || route.topicId === 'poisson-distribution'
      ? 'poisson-distribution'
      : route.testId === 'geometric-distribution' || route.topicId === 'geometric-distribution'
      ? 'geometric-distribution'
      : route.testId === 'hypergeometric-distribution' || route.topicId === 'hypergeometric-distribution'
      ? 'hypergeometric-distribution'
      : route.testId === 'continuous-distributions-pdf' || route.topicId === 'continuous-distributions-pdf'
      ? 'continuous-distributions-pdf'
      : route.testId === 'normal-distribution-empirical-rule' || route.topicId === 'normal-distribution-empirical-rule'
      ? 'normal-distribution-empirical-rule'
      : route.testId === 'standard-normal-z-score' || route.topicId === 'standard-normal-z-score'
      ? 'standard-normal-z-score'
      : route.testId === 'normal-approximation-to-binomial' || route.topicId === 'normal-approximation-to-binomial'
      ? 'normal-approximation-to-binomial'
      : route.testId === 'applied-distributions-word-problems' || route.topicId === 'applied-distributions-word-problems'
      ? 'applied-distributions-word-problems'
      : null;

  const linearAlgebraQuizType: LinearAlgebraQuizType | null =
    route.subcategoryId === 'linear-algebra' && !route.topicId && !route.testId
      ? null
      : route.testId === 'vectors-operations' || route.topicId === 'vectors-operations'
      ? 'vectors-operations'
      : route.testId === 'dot-cross-product-orthogonality' || route.topicId === 'dot-cross-product-orthogonality'
      ? 'dot-cross-product-orthogonality'
      : route.testId === 'matrix-operations-types' || route.topicId === 'matrix-operations-types'
      ? 'matrix-operations-types'
      : route.testId === 'determinants-properties-calculation' || route.topicId === 'determinants-properties-calculation'
      ? 'determinants-properties-calculation'
      : route.testId === 'matrix-inverse-methods' || route.topicId === 'matrix-inverse-methods'
      ? 'matrix-inverse-methods'
      : route.testId === 'cramers-rule-linear-systems' || route.topicId === 'cramers-rule-linear-systems'
      ? 'cramers-rule-linear-systems'
      : route.testId === 'gaussian-elimination-echelon' || route.topicId === 'gaussian-elimination-echelon'
      ? 'gaussian-elimination-echelon'
      : route.testId === 'vector-spaces-subspaces' || route.topicId === 'vector-spaces-subspaces'
      ? 'vector-spaces-subspaces'
      : route.testId === 'linear-independence-dependence' || route.topicId === 'linear-independence-dependence'
      ? 'linear-independence-dependence'
      : route.testId === 'basis-dimension-vector-spaces' || route.topicId === 'basis-dimension-vector-spaces'
      ? 'basis-dimension-vector-spaces'
      : route.testId === 'linear-transformations-matrices' || route.topicId === 'linear-transformations-matrices'
      ? 'linear-transformations-matrices'
      : route.testId === 'eigenvalues-eigenvectors' || route.topicId === 'eigenvalues-eigenvectors'
      ? 'eigenvalues-eigenvectors'
      : null;

  const complexNumbersQuizType: ComplexNumbersQuizType | null =
    route.subcategoryId === 'complex-numbers' && !route.topicId && !route.testId
      ? null
      : route.testId === 'imaginary-unit-powers' || route.topicId === 'imaginary-unit-powers'
      ? 'imaginary-unit-powers'
      : route.testId === 'standard-form-complex-numbers' || route.topicId === 'standard-form-complex-numbers'
      ? 'standard-form-complex-numbers'
      : route.testId === 'complex-basic-operations' || route.topicId === 'complex-basic-operations'
      ? 'complex-basic-operations'
      : route.testId === 'complex-conjugate-division' || route.topicId === 'complex-conjugate-division'
      ? 'complex-conjugate-division'
      : route.testId === 'modulus-argument-complex' || route.topicId === 'modulus-argument-complex'
      ? 'modulus-argument-complex'
      : route.testId === 'argand-plane-representation' || route.topicId === 'argand-plane-representation'
      ? 'argand-plane-representation'
      : route.testId === 'polar-trigonometric-form' || route.topicId === 'polar-trigonometric-form'
      ? 'polar-trigonometric-form'
      : route.testId === 'exponential-form-euler' || route.topicId === 'exponential-form-euler'
      ? 'exponential-form-euler'
      : route.testId === 'de-moivre-theorem-powers' || route.topicId === 'de-moivre-theorem-powers'
      ? 'de-moivre-theorem-powers'
      : route.testId === 'roots-of-complex-numbers' || route.topicId === 'roots-of-complex-numbers'
      ? 'roots-of-complex-numbers'
      : route.testId === 'complex-quadratic-cubic-equations' || route.topicId === 'complex-quadratic-cubic-equations'
      ? 'complex-quadratic-cubic-equations'
      : route.testId === 'complex-numbers-applications-circuits' || route.topicId === 'complex-numbers-applications-circuits'
      ? 'complex-numbers-applications-circuits'
      : null;

  const mathematicalLogicQuizType: MathematicalLogicQuizType | null =
    route.subcategoryId === 'mathematical-logic' && !route.topicId && !route.testId
      ? null
      : route.testId === 'propositions-truth-values' || route.topicId === 'propositions-truth-values'
      ? 'propositions-truth-values'
      : route.testId === 'negation-conjunction-and' || route.topicId === 'negation-conjunction-and'
      ? 'negation-conjunction-and'
      : route.testId === 'disjunction-or-xor' || route.topicId === 'disjunction-or-xor'
      ? 'disjunction-or-xor'
      : route.testId === 'conditional-statements' || route.topicId === 'conditional-statements'
      ? 'conditional-statements'
      : route.testId === 'biconditional-statements' || route.topicId === 'biconditional-statements'
      ? 'biconditional-statements'
      : route.testId === 'converse-inverse-contrapositive' || route.topicId === 'converse-inverse-contrapositive'
      ? 'converse-inverse-contrapositive'
      : route.testId === 'tautology-contradiction-contingency' || route.topicId === 'tautology-contradiction-contingency'
      ? 'tautology-contradiction-contingency'
      : route.testId === 'logical-equivalence-demorgan' || route.topicId === 'logical-equivalence-demorgan'
      ? 'logical-equivalence-demorgan'
      : route.testId === 'quantifiers-universal-existential' || route.topicId === 'quantifiers-universal-existential'
      ? 'quantifiers-universal-existential'
      : route.testId === 'rules-of-inference' || route.topicId === 'rules-of-inference'
      ? 'rules-of-inference'
      : route.testId === 'mathematical-proof-methods' || route.topicId === 'mathematical-proof-methods'
      ? 'mathematical-proof-methods'
      : route.testId === 'logic-gates-applications' || route.topicId === 'logic-gates-applications'
      ? 'logic-gates-applications'
      : null;

  const wordProblemsQuizType: WordProblemsQuizType | null =
    route.subcategoryId === 'word-problems' && !route.topicId && !route.testId
      ? null
      : route.testId === 'translating-words-to-equations' || route.topicId === 'translating-words-to-equations'
      ? 'translating-words-to-equations'
      : route.testId === 'distance-rate-time-problems' || route.topicId === 'distance-rate-time-problems'
      ? 'distance-rate-time-problems'
      : route.testId === 'work-rate-problems' || route.topicId === 'work-rate-problems'
      ? 'work-rate-problems'
      : route.testId === 'mixture-solution-alloy-problems' || route.topicId === 'mixture-solution-alloy-problems'
      ? 'mixture-solution-alloy-problems'
      : route.testId === 'ratio-proportion-division-problems' || route.topicId === 'ratio-proportion-division-problems'
      ? 'ratio-proportion-division-problems'
      : route.testId === 'age-word-problems' || route.topicId === 'age-word-problems'
      ? 'age-word-problems'
      : route.testId === 'profit-loss-discount-tax-problems' || route.topicId === 'profit-loss-discount-tax-problems'
      ? 'profit-loss-discount-tax-problems'
      : route.testId === 'investment-interest-word-problems' || route.topicId === 'investment-interest-word-problems'
      ? 'investment-interest-word-problems'
      : route.testId === 'geometric-perimeter-area-problems' || route.topicId === 'geometric-perimeter-area-problems'
      ? 'geometric-perimeter-area-problems'
      : route.testId === 'consecutive-integers-number-relations' || route.topicId === 'consecutive-integers-number-relations'
      ? 'consecutive-integers-number-relations'
      : route.testId === 'amortization-savings-scenarios' || route.topicId === 'amortization-savings-scenarios'
      ? 'amortization-savings-scenarios'
      : route.testId === 'optimization-applied-word-problems' || route.topicId === 'optimization-applied-word-problems'
      ? 'optimization-applied-word-problems'
      : null;

  const financialMathQuizType: FinancialMathQuizType | null =
    route.subcategoryId === 'financial-math' && !route.topicId && !route.testId
      ? null
      : route.testId === 'simple-interest-total-amount' || route.topicId === 'simple-interest-total-amount'
      ? 'simple-interest-total-amount'
      : route.testId === 'compound-interest-future-value' || route.topicId === 'compound-interest-future-value'
      ? 'compound-interest-future-value'
      : route.testId === 'present-value-discounting' || route.topicId === 'present-value-discounting'
      ? 'present-value-discounting'
      : route.testId === 'nominal-effective-interest-rates' || route.topicId === 'nominal-effective-interest-rates'
      ? 'nominal-effective-interest-rates'
      : route.testId === 'annuities-ordinary-due' || route.topicId === 'annuities-ordinary-due'
      ? 'annuities-ordinary-due'
      : route.testId === 'loan-amortization-schedules' || route.topicId === 'loan-amortization-schedules'
      ? 'loan-amortization-schedules'
      : route.testId === 'bond-valuation-cash-flows' || route.topicId === 'bond-valuation-cash-flows'
      ? 'bond-valuation-cash-flows'
      : route.testId === 'npv-irr-project-evaluation' || route.topicId === 'npv-irr-project-evaluation'
      ? 'npv-irr-project-evaluation'
      : route.testId === 'financial-depreciation-methods' || route.topicId === 'financial-depreciation-methods'
      ? 'financial-depreciation-methods'
      : route.testId === 'inflation-financial-ratios' || route.topicId === 'inflation-financial-ratios'
      ? 'inflation-financial-ratios'
      : route.testId === 'options-derivatives-valuation' || route.topicId === 'options-derivatives-valuation'
      ? 'options-derivatives-valuation'
      : route.testId === 'comprehensive-financial-word-problems' || route.topicId === 'comprehensive-financial-word-problems'
      ? 'comprehensive-financial-word-problems'
      : null;

  const discreteMathematicsQuizType: DiscreteMathematicsQuizType | null =
    route.subcategoryId === 'discrete-mathematics' && !route.topicId && !route.testId
      ? null
      : route.testId === 'set-theory-operations' || route.topicId === 'set-theory-operations'
      ? 'set-theory-operations'
      : route.testId === 'relations-properties' || route.topicId === 'relations-properties'
      ? 'relations-properties'
      : route.testId === 'equivalence-partial-orders' || route.topicId === 'equivalence-partial-orders'
      ? 'equivalence-partial-orders'
      : route.testId === 'discrete-functions-types' || route.topicId === 'discrete-functions-types'
      ? 'discrete-functions-types'
      : route.testId === 'pigeonhole-principle' || route.topicId === 'pigeonhole-principle'
      ? 'pigeonhole-principle'
      : route.testId === 'recurrence-relations' || route.topicId === 'recurrence-relations'
      ? 'recurrence-relations'
      : route.testId === 'graph-theory-basics' || route.topicId === 'graph-theory-basics'
      ? 'graph-theory-basics'
      : route.testId === 'eulerian-hamiltonian-paths' || route.topicId === 'eulerian-hamiltonian-paths'
      ? 'eulerian-hamiltonian-paths'
      : route.testId === 'trees-minimum-spanning' || route.topicId === 'trees-minimum-spanning'
      ? 'trees-minimum-spanning'
      : route.testId === 'boolean-algebra-circuits' || route.topicId === 'boolean-algebra-circuits'
      ? 'boolean-algebra-circuits'
      : route.testId === 'discrete-induction-proofs' || route.topicId === 'discrete-induction-proofs'
      ? 'discrete-induction-proofs'
      : route.testId === 'discrete-applied-crypto-networks' || route.topicId === 'discrete-applied-crypto-networks'
      ? 'discrete-applied-crypto-networks'
      : null;

  return (
    <div className={`min-h-screen ${themeClasses.bg} flex flex-col justify-between transition-colors duration-200 text-right selection:bg-[#3B7A6A]/20`}>
      <div>
        <Header
          onGoHome={goToHome}
          onSelectDomain={goToDomain}
          activeDomainId={currentDomain?.id}
          currentViewTitle={
            wordProblemsQuizType
              ? WORD_PROBLEMS_QUIZZES[wordProblemsQuizType]?.title
              : financialMathQuizType
              ? FINANCIAL_MATH_QUIZZES[financialMathQuizType]?.title
              : discreteMathematicsQuizType
              ? DISCRETE_MATHEMATICS_QUIZZES[discreteMathematicsQuizType]?.title
              : mathematicalLogicQuizType
              ? MATHEMATICAL_LOGIC_QUIZZES[mathematicalLogicQuizType]?.title
              : complexNumbersQuizType
              ? COMPLEX_NUMBERS_QUIZZES[complexNumbersQuizType]?.title
              : linearAlgebraQuizType
              ? LINEAR_ALGEBRA_QUIZZES[linearAlgebraQuizType]?.title
              : probabilityDistributionsQuizType
              ? PROBABILITY_DISTRIBUTIONS_QUIZZES[probabilityDistributionsQuizType]?.title
              : permutationsCombinationsQuizType
              ? PERMUTATIONS_COMBINATIONS_QUIZZES[permutationsCombinationsQuizType]?.title
              : probabilityQuizType
              ? PROBABILITY_QUIZZES[probabilityQuizType]?.title
              : dataAnalysisQuizType
              ? DATA_ANALYSIS_QUIZZES[dataAnalysisQuizType]?.title
              : statisticalMeasuresQuizType
              ? STATISTICAL_MEASURES_QUIZZES[statisticalMeasuresQuizType]?.title
              : differentialEquationsQuizType
              ? DIFFERENTIAL_EQUATIONS_QUIZZES[differentialEquationsQuizType]?.title
              : applicationsOfIntegrationQuizType
              ? APPLICATIONS_OF_INTEGRATION_QUIZZES[applicationsOfIntegrationQuizType]?.title
              : integrationQuizType
              ? INTEGRATION_QUIZZES[integrationQuizType]?.title
              : applicationsOfDerivativesQuizType
              ? APPLICATIONS_OF_DERIVATIVES_QUIZZES[applicationsOfDerivativesQuizType]?.title
              : derivativesDifferentiationQuizType
              ? DERIVATIVES_QUIZZES[derivativesDifferentiationQuizType]?.title
              : limitsContinuityQuizType
              ? LIMITS_CONTINUITY_QUIZZES[limitsContinuityQuizType]?.title
              : geometricTransformationsQuizType
              ? GEOMETRIC_TRANSFORMATIONS_QUIZZES[geometricTransformationsQuizType]?.title
              : analyticGeometryQuizType
              ? ANALYTIC_GEOMETRY_QUIZZES[analyticGeometryQuizType]?.title
              : trigonometryQuizType
              ? TRIGONOMETRY_QUIZZES[trigonometryQuizType]?.title
              : trianglesAnglesQuizType
              ? TRIANGLES_ANGLES_QUIZZES[trianglesAnglesQuizType]?.title
              : perimeterAreaQuizType
              ? PERIMETER_AREA_QUIZZES[perimeterAreaQuizType]?.title
              : geometricShapesQuizType
              ? GEOMETRIC_SHAPES_QUIZZES[geometricShapesQuizType]?.title
              : sequencesQuizType
              ? SEQUENCES_QUIZZES[sequencesQuizType]?.title
              : functionsGraphsQuizType
              ? FUNCTIONS_GRAPHS_QUIZZES[functionsGraphsQuizType]?.title
              : quadraticEquationsQuizType
              ? QUADRATIC_QUIZZES[quadraticEquationsQuizType]?.title
              : polynomialsQuizType
              ? POLYNOMIALS_QUIZZES[polynomialsQuizType]?.title
              : inequalitiesQuizType
              ? INEQUALITIES_QUIZZES[inequalitiesQuizType]?.title
              : linearEquationsQuizType
              ? LINEAR_EQUATIONS_QUIZZES[linearEquationsQuizType]?.title
              : numberLineMeasurementQuizType
              ? NUMBER_LINE_MEASUREMENT_QUIZZES[numberLineMeasurementQuizType]?.title
              : orderOfOperationsQuizType
              ? ORDER_OF_OPERATIONS_QUIZZES[orderOfOperationsQuizType]?.title
              : ratiosProportionsQuizType
              ? RATIOS_PROPORTIONS_QUIZZES[ratiosProportionsQuizType]?.title
              : fractionsDecimalsQuizType
              ? FRACTIONS_DECIMALS_QUIZZES[fractionsDecimalsQuizType]?.title
              : placeValueQuizType
              ? PLACE_VALUE_QUIZZES[placeValueQuizType]?.title
              : multiplicationQuizType
              ? MULTIPLICATION_QUIZZES[multiplicationQuizType]?.title
              : divisionQuizType
              ? DIVISION_QUIZZES[divisionQuizType]?.title
              : subtractionQuizType
              ? SUBTRACTION_QUIZZES[subtractionQuizType]?.title
              : missingQuizType === 'missing-single-digits'
              ? 'اختبار جمع الأرقام من 1 إلى 10 (الرقم المفقود)'
              : missingQuizType === 'missing-within-20'
              ? 'اختبار الجمع ضمن العدد 20 (الرقم المفقود)'
              : missingQuizType === 'missing-within-50'
              ? 'اختبار الجمع ضمن العدد 50 (الرقم المفقود)'
              : missingQuizType === 'missing-within-100'
              ? 'اختبار الجمع ضمن العدد 100 (الرقم المفقود)'
              : missingQuizType === 'missing-fractions'
              ? 'اختبار جمع الكسور (الرقم المفقود)'
              : missingQuizType === 'missing-decimals'
              ? 'اختبار جمع الأعداد العشرية (الرقم المفقود)'
              : isSingleDigitTest
              ? 'اختبار جمع الأرقام الفردية من 1 إلى 10'
              : isWithin20Test
              ? 'الجمع ضمن العدد 20'
              : isWithin50Test
              ? 'اختبار الجمع ضمن العدد 50'
              : isWithin100Test
              ? 'اختبار الجمع ضمن العدد 100'
              : isFractionsTest
              ? 'اختبار جمع الكسور'
              : isDecimalsTest
              ? 'اختبار جمع الأعداد العشرية'
              : currentTopic?.title || currentSubcategory?.title || currentDomain?.title
          }
        />

        <main className="max-w-6xl mx-auto px-4 sm:px-6 pt-4 sm:pt-6">
          {route.view === 'home' && (
            <HomeView
              onSelectDomain={goToDomain}
              onOpenSearch={() => setIsSearchOpen(true)}
            />
          )}

          {route.view === 'domain' && currentDomain && (
            <DomainView
              domain={currentDomain}
              onGoHome={goToHome}
              onOpenQuiz={(subId) => goToQuiz(currentDomain.id, subId)}
            />
          )}

          {route.view === 'quiz' && (
            <>
              {/* Check if requesting one of the dedicated interactive word problems tests */}
              {wordProblemsQuizType ? (
                <WordProblemsQuizView
                  quizType={wordProblemsQuizType}
                  onGoHome={goToHome}
                  onSelectDomain={goToDomain}
                  onSelectSubcategory={goToQuiz}
                />
              ) : financialMathQuizType ? (
                <FinancialMathQuizView
                  quizType={financialMathQuizType}
                  onGoHome={goToHome}
                  onSelectDomain={goToDomain}
                  onSelectSubcategory={goToQuiz}
                />
              ) : discreteMathematicsQuizType ? (
                <DiscreteMathematicsQuizView
                  quizType={discreteMathematicsQuizType}
                  onGoHome={goToHome}
                  onSelectDomain={goToDomain}
                  onSelectSubcategory={goToQuiz}
                />
              ) : mathematicalLogicQuizType ? (
                <MathematicalLogicQuizView
                  quizType={mathematicalLogicQuizType}
                  onGoHome={goToHome}
                  onSelectDomain={goToDomain}
                  onSelectSubcategory={goToQuiz}
                />
              ) : complexNumbersQuizType ? (
                <ComplexNumbersQuizView
                  quizType={complexNumbersQuizType}
                  onGoHome={goToHome}
                  onSelectDomain={goToDomain}
                  onSelectSubcategory={goToQuiz}
                />
              ) : linearAlgebraQuizType ? (
                <LinearAlgebraQuizView
                  quizType={linearAlgebraQuizType}
                  onGoHome={goToHome}
                  onSelectDomain={goToDomain}
                  onSelectSubcategory={goToQuiz}
                />
              ) : probabilityDistributionsQuizType ? (
                <ProbabilityDistributionsQuizView
                  quizType={probabilityDistributionsQuizType}
                  onGoHome={goToHome}
                  onSelectDomain={goToDomain}
                  onSelectSubcategory={goToQuiz}
                />
              ) : permutationsCombinationsQuizType ? (
                <PermutationsCombinationsQuizView
                  quizType={permutationsCombinationsQuizType}
                  onGoHome={goToHome}
                  onSelectDomain={goToDomain}
                  onSelectSubcategory={goToQuiz}
                />
              ) : probabilityQuizType ? (
                <ProbabilityQuizView
                  quizType={probabilityQuizType}
                  onGoHome={goToHome}
                  onSelectDomain={goToDomain}
                  onSelectSubcategory={goToQuiz}
                />
              ) : dataAnalysisQuizType ? (
                <DataAnalysisQuizView
                  quizType={dataAnalysisQuizType}
                  onGoHome={goToHome}
                  onSelectDomain={goToDomain}
                  onSelectSubcategory={goToQuiz}
                />
              ) : statisticalMeasuresQuizType ? (
                <StatisticalMeasuresQuizView
                  quizType={statisticalMeasuresQuizType}
                  onGoHome={goToHome}
                  onSelectDomain={goToDomain}
                  onSelectSubcategory={goToQuiz}
                />
              ) : differentialEquationsQuizType ? (
                <DifferentialEquationsQuizView
                  quizType={differentialEquationsQuizType}
                  onGoHome={goToHome}
                  onGoDomain={() => goToDomain('calculus')}
                  onGoDifferentialEquations={() => goToQuiz('calculus', 'differential-equations')}
                />
              ) : applicationsOfIntegrationQuizType ? (
                <ApplicationsOfIntegrationQuizView
                  quizType={applicationsOfIntegrationQuizType}
                  onGoHome={goToHome}
                  onGoDomain={() => goToDomain('calculus')}
                  onGoApplicationsOfIntegration={() => goToQuiz('calculus', 'applications-of-integration')}
                />
              ) : integrationQuizType ? (
                <IntegrationQuizView
                  quizType={integrationQuizType}
                  onGoHome={goToHome}
                  onGoDomain={() => goToDomain('calculus')}
                  onGoIntegration={() => goToQuiz('calculus', 'integration')}
                />
              ) : applicationsOfDerivativesQuizType ? (
                <ApplicationsOfDerivativesQuizView
                  quizType={applicationsOfDerivativesQuizType}
                  onGoHome={goToHome}
                  onGoDomain={() => goToDomain('calculus')}
                  onGoApplicationsOfDerivatives={() => goToQuiz('calculus', 'applications-of-derivatives')}
                />
              ) : derivativesDifferentiationQuizType ? (
                <DerivativesDifferentiationQuizView
                  quizType={derivativesDifferentiationQuizType}
                  onGoHome={goToHome}
                  onGoDomain={() => goToDomain('calculus')}
                  onGoDerivativesDifferentiation={() => goToQuiz('calculus', 'derivatives-differentiation')}
                />
              ) : limitsContinuityQuizType ? (
                <LimitsContinuityQuizView
                  quizType={limitsContinuityQuizType}
                  onGoHome={goToHome}
                  onGoDomain={() => goToDomain('calculus')}
                  onGoLimitsContinuity={() => goToQuiz('calculus', 'limits-continuity')}
                />
              ) : geometricTransformationsQuizType ? (
                <GeometricTransformationsQuizView
                  quizType={geometricTransformationsQuizType}
                  onGoHome={goToHome}
                  onGoDomain={() => goToDomain('geometry-trigonometry')}
                  onGoGeometricTransformations={() => goToQuiz('geometry-trigonometry', 'geometric-transformations')}
                />
              ) : analyticGeometryQuizType ? (
                <AnalyticGeometryQuizView
                  quizType={analyticGeometryQuizType}
                  onGoHome={goToHome}
                  onGoDomain={() => goToDomain('geometry-trigonometry')}
                  onGoAnalyticGeometry={() => goToQuiz('geometry-trigonometry', 'analytic-geometry')}
                />
              ) : trigonometryQuizType ? (
                <TrigonometryQuizView
                  quizType={trigonometryQuizType}
                  onGoHome={goToHome}
                  onGoDomain={() => goToDomain('geometry-trigonometry')}
                  onGoTrigonometry={() => goToQuiz('geometry-trigonometry', 'trigonometry')}
                />
              ) : trianglesAnglesQuizType ? (
                <TrianglesAnglesQuizView
                  quizType={trianglesAnglesQuizType}
                  onGoHome={goToHome}
                  onGoDomain={() => goToDomain('geometry-trigonometry')}
                  onGoTrianglesAngles={() => goToQuiz('geometry-trigonometry', 'triangles-angles')}
                />
              ) : perimeterAreaQuizType ? (
                <PerimeterAreaQuizView
                  quizType={perimeterAreaQuizType}
                  onGoHome={goToHome}
                  onGoDomain={() => goToDomain('geometry-trigonometry')}
                  onGoPerimeterArea={() => goToQuiz('geometry-trigonometry', 'perimeter-area')}
                />
              ) : geometricShapesQuizType ? (
                <GeometricShapesQuizView
                  quizType={geometricShapesQuizType}
                  onGoHome={goToHome}
                  onGoDomain={() => goToDomain('geometry-trigonometry')}
                  onGoGeometricShapes={() => goToQuiz('geometry-trigonometry', 'geometric-shapes')}
                />
              ) : sequencesQuizType ? (
                <SequencesQuizView
                  quizType={sequencesQuizType}
                  onGoHome={goToHome}
                  onGoDomain={() => goToDomain('algebra-functions')}
                  onGoSequences={() => goToQuiz('algebra-functions', 'sequences')}
                />
              ) : functionsGraphsQuizType ? (
                <FunctionsGraphsQuizView
                  quizType={functionsGraphsQuizType}
                  onGoHome={goToHome}
                  onGoDomain={() => goToDomain('algebra-functions')}
                  onGoFunctionsGraphs={() => goToQuiz('algebra-functions', 'functions-graphs')}
                />
              ) : quadraticEquationsQuizType ? (
                <QuadraticEquationsQuizView
                  quizType={quadraticEquationsQuizType}
                  onGoHome={goToHome}
                  onGoDomain={() => goToDomain('algebra-functions')}
                  onGoQuadraticEquations={() => goToQuiz('algebra-functions', 'quadratic-equations')}
                />
              ) : polynomialsQuizType ? (
                <PolynomialsQuizView
                  quizType={polynomialsQuizType}
                  onGoHome={goToHome}
                  onGoDomain={() => goToDomain('algebra-functions')}
                  onGoPolynomials={() => goToQuiz('algebra-functions', 'polynomials')}
                />
              ) : inequalitiesQuizType ? (
                <InequalitiesQuizView
                  quizType={inequalitiesQuizType}
                  onGoHome={goToHome}
                  onGoDomain={() => goToDomain('algebra-functions')}
                  onGoInequalities={() => goToQuiz('algebra-functions', 'inequalities')}
                />
              ) : linearEquationsQuizType ? (
                <LinearEquationsQuizView
                  quizType={linearEquationsQuizType}
                  onGoHome={goToHome}
                  onGoDomain={() => goToDomain('algebra-functions')}
                  onGoLinearEquations={() => goToQuiz('algebra-functions', 'linear-equations')}
                />
              ) : numberLineMeasurementQuizType ? (
                <NumberLineMeasurementQuizView
                  quizType={numberLineMeasurementQuizType}
                  onGoHome={goToHome}
                  onGoDomain={() => goToDomain('basic-math')}
                  onGoNumberLineMeasurement={() => goToQuiz('basic-math', 'number-line-measurement')}
                />
              ) : orderOfOperationsQuizType ? (
                <OrderOfOperationsQuizView
                  quizType={orderOfOperationsQuizType}
                  onGoHome={goToHome}
                  onGoDomain={() => goToDomain('basic-math')}
                  onGoOrderOfOperations={() => goToQuiz('basic-math', 'order-of-operations')}
                />
              ) : ratiosProportionsQuizType ? (
                <RatiosProportionsQuizView
                  quizType={ratiosProportionsQuizType}
                  onGoHome={goToHome}
                  onGoDomain={() => goToDomain('basic-math')}
                  onGoRatiosProportions={() => goToQuiz('basic-math', 'ratios-proportions')}
                />
              ) : fractionsDecimalsQuizType ? (
                <FractionsDecimalsQuizView
                  quizType={fractionsDecimalsQuizType}
                  onGoHome={goToHome}
                  onGoDomain={() => goToDomain('basic-math')}
                  onGoFractionsDecimals={() => goToQuiz('basic-math', 'fractions-decimals')}
                />
              ) : placeValueQuizType ? (
                <PlaceValueQuizView
                  quizType={placeValueQuizType}
                  onGoHome={goToHome}
                  onGoDomain={() => goToDomain('basic-math')}
                  onGoPlaceValue={() => goToQuiz('basic-math', 'place-value')}
                />
              ) : multiplicationQuizType ? (
                <MultiplicationQuizView
                  quizType={multiplicationQuizType}
                  onGoHome={goToHome}
                  onGoDomain={() => goToDomain('basic-math')}
                  onGoArithmetic={() => goToQuiz('basic-math', 'basic-arithmetic')}
                  onGoMultiplicationTests={() => goToQuiz('basic-math', 'basic-arithmetic', 'multiplication-tests')}
                />
              ) : divisionQuizType ? (
                <DivisionQuizView
                  quizType={divisionQuizType}
                  onGoHome={goToHome}
                  onGoDomain={() => goToDomain('basic-math')}
                  onGoArithmetic={() => goToQuiz('basic-math', 'basic-arithmetic')}
                  onGoDivisionTests={() => goToQuiz('basic-math', 'basic-arithmetic', 'division-tests')}
                />
              ) : subtractionQuizType ? (
                <SubtractionQuizView
                  quizType={subtractionQuizType}
                  onGoHome={goToHome}
                  onGoDomain={() => goToDomain('basic-math')}
                  onGoArithmetic={() => goToQuiz('basic-math', 'basic-arithmetic')}
                  onGoSubtractionTests={() => goToQuiz('basic-math', 'basic-arithmetic', 'subtraction-tests')}
                />
              ) : missingQuizType ? (
                <MissingNumberQuizView
                  quizType={missingQuizType}
                  onGoHome={goToHome}
                  onGoDomain={() => goToDomain('basic-math')}
                  onGoArithmetic={() => goToQuiz('basic-math', 'basic-arithmetic')}
                  onGoAdditionTests={() => goToQuiz('basic-math', 'basic-arithmetic', 'addition-tests')}
                />
              ) : isSingleDigitTest ? (
                <SingleDigitAdditionQuizView
                  onGoHome={goToHome}
                  onGoDomain={() => goToDomain('basic-math')}
                  onGoArithmetic={() => goToQuiz('basic-math', 'basic-arithmetic')}
                  onGoAdditionTests={() => goToQuiz('basic-math', 'basic-arithmetic', 'addition-tests')}
                />
              ) : isWithin20Test ? (
                <AdditionWithin20QuizView
                  onGoHome={goToHome}
                  onGoDomain={() => goToDomain('basic-math')}
                  onGoArithmetic={() => goToQuiz('basic-math', 'basic-arithmetic')}
                  onGoAdditionTests={() => goToQuiz('basic-math', 'basic-arithmetic', 'addition-tests')}
                />
              ) : isWithin50Test ? (
                <AdditionWithin50QuizView
                  onGoHome={goToHome}
                  onGoDomain={() => goToDomain('basic-math')}
                  onGoArithmetic={() => goToQuiz('basic-math', 'basic-arithmetic')}
                  onGoAdditionTests={() => goToQuiz('basic-math', 'basic-arithmetic', 'addition-tests')}
                />
              ) : isWithin100Test ? (
                <AdditionWithin100QuizView
                  onGoHome={goToHome}
                  onGoDomain={() => goToDomain('basic-math')}
                  onGoArithmetic={() => goToQuiz('basic-math', 'basic-arithmetic')}
                  onGoAdditionTests={() => goToQuiz('basic-math', 'basic-arithmetic', 'addition-tests')}
                />
              ) : isFractionsTest ? (
                <FractionsAdditionQuizView
                  onGoHome={goToHome}
                  onGoDomain={() => goToDomain('basic-math')}
                  onGoArithmetic={() => goToQuiz('basic-math', 'basic-arithmetic')}
                  onGoAdditionTests={() => goToQuiz('basic-math', 'basic-arithmetic', 'addition-tests')}
                />
              ) : isDecimalsTest ? (
                <DecimalsAdditionQuizView
                  onGoHome={goToHome}
                  onGoDomain={() => goToDomain('basic-math')}
                  onGoArithmetic={() => goToQuiz('basic-math', 'basic-arithmetic')}
                  onGoAdditionTests={() => goToQuiz('basic-math', 'basic-arithmetic', 'addition-tests')}
                />
              ) : currentDomain && currentSubcategory && route.topicId && currentTopic ? (
                /* Topic view */
                currentTopic.subSections && currentTopic.subSections.length > 0 ? (
                  /* If topic has child tests (like addition-tests having single-digit-addition) */
                  <SubCategoryTopicsView
                    domain={currentDomain}
                    subcategory={currentTopic}
                    onGoHome={goToHome}
                    onGoDomain={() => goToDomain(currentDomain.id)}
                    onOpenTopic={(testId) => goToQuiz(currentDomain.id, currentSubcategory.id, currentTopic.id, testId)}
                  />
                ) : (
                  /* Standard placeholder for a leaf topic */
                  <QuizPlaceholderView
                    domain={currentDomain}
                    subcategory={currentSubcategory}
                    topic={currentTopic}
                    onGoHome={goToHome}
                    onGoDomain={() => goToDomain(currentDomain.id)}
                    onGoSubcategory={() => goToQuiz(currentDomain.id, currentSubcategory.id)}
                  />
                )
              ) : currentDomain && currentSubcategory && currentSubcategory.subSections && currentSubcategory.subSections.length > 0 ? (
                /* Subcategory with child topics (like basic-arithmetic) */
                <SubCategoryTopicsView
                  domain={currentDomain}
                  subcategory={currentSubcategory}
                  onGoHome={goToHome}
                  onGoDomain={() => goToDomain(currentDomain.id)}
                  onOpenTopic={(topicId) => goToQuiz(currentDomain.id, currentSubcategory.id, topicId)}
                />
              ) : currentDomain && currentSubcategory ? (
                /* Standard placeholder for direct subcategory */
                <QuizPlaceholderView
                  domain={currentDomain}
                  subcategory={currentSubcategory}
                  onGoHome={goToHome}
                  onGoDomain={() => goToDomain(currentDomain.id)}
                />
              ) : (
                /* Fallback */
                <div className={`p-12 text-center rounded-2xl border ${themeClasses.border} ${themeClasses.cardBg} space-y-4 my-8`}>
                  <h2 className={`text-xl font-semibold ${themeClasses.textPrimary}`}>
                    الصفحة المطلوبة غير موجودة
                  </h2>
                  <button
                    onClick={goToHome}
                    className="px-5 py-2.5 rounded-xl text-sm font-medium text-white bg-[#2D6A5D] hover:bg-[#235349] cursor-pointer"
                  >
                    العودة للصفحة الرئيسية
                  </button>
                </div>
              )}
            </>
          )}

          {route.view === 'privacy' && <PrivacyView onGoHome={goToHome} />}
          {route.view === 'terms' && <TermsView onGoHome={goToHome} />}
          {route.view === 'contact' && <ContactView onGoHome={goToHome} />}
          {route.view === 'about' && <AboutView onGoHome={goToHome} />}

          {/* Fallback if invalid route */}
          {((route.view === 'domain' && !currentDomain) ||
            (!['home', 'domain', 'quiz', 'privacy', 'terms', 'contact', 'about'].includes(route.view))) && (
            <div className={`p-12 text-center rounded-2xl border ${themeClasses.border} ${themeClasses.cardBg} space-y-4 my-8`}>
              <h2 className={`text-xl font-semibold ${themeClasses.textPrimary}`}>
                الصفحة المطلوبة غير موجودة
              </h2>
              <button
                onClick={goToHome}
                className="px-5 py-2.5 rounded-xl text-sm font-medium text-white bg-[#2D6A5D] hover:bg-[#235349] cursor-pointer"
              >
                العودة للصفحة الرئيسية
              </button>
            </div>
          )}
        </main>
      </div>

      <Footer
        onSelectDomain={goToDomain}
        onGoHome={goToHome}
        onGoPrivacy={goToPrivacy}
        onGoTerms={goToTerms}
        onGoContact={goToContact}
        onGoAbout={goToAbout}
      />

      {/* Global Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectDomain={goToDomain}
        onSelectSubcategory={(domainId, subId, topicId, testId) => goToQuiz(domainId, subId, topicId, testId)}
      />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
