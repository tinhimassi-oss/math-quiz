import React from 'react';
import { MajorDomain, SubCategory } from '../data/mathCategories';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SubCategoryCard } from '../components/SubCategoryCard';
import { useEyeTheme } from '../context/ThemeContext';
import { AdditionPillarArticle } from '../components/AdditionPillarArticle';
import { SubtractionPillarArticle } from '../components/SubtractionPillarArticle';
import { DivisionPillarArticle } from '../components/DivisionPillarArticle';
import { MultiplicationPillarArticle } from '../components/MultiplicationPillarArticle';
import { PlaceValuePillarArticle } from '../components/PlaceValuePillarArticle';
import { RatiosProportionsPillarArticle } from '../components/RatiosProportionsPillarArticle';
import { OrderOfOperationsPillarArticle } from '../components/OrderOfOperationsPillarArticle';
import { NumberLineMeasurementPillarArticle } from '../components/NumberLineMeasurementPillarArticle';
import { LinearEquationsPillarArticle } from '../components/LinearEquationsPillarArticle';
import { InequalitiesPillarArticle } from '../components/InequalitiesPillarArticle';
import { PolynomialsPillarArticle } from '../components/PolynomialsPillarArticle';
import { QuadraticEquationsPillarArticle } from '../components/QuadraticEquationsPillarArticle';
import { FunctionsGraphsPillarArticle } from '../components/FunctionsGraphsPillarArticle';
import { SequencesPillarArticle } from '../components/SequencesPillarArticle';
import { GeometricShapesPillarArticle } from '../components/GeometricShapesPillarArticle';
import { PerimeterAreaPillarArticle } from '../components/PerimeterAreaPillarArticle';
import { TrianglesAnglesPillarArticle } from '../components/TrianglesAnglesPillarArticle';
import { TrigonometryPillarArticle } from '../components/TrigonometryPillarArticle';
import { AnalyticGeometryPillarArticle } from '../components/AnalyticGeometryPillarArticle';
import { GeometricTransformationsPillarArticle } from '../components/GeometricTransformationsPillarArticle';
import { LimitsContinuityPillarArticle } from '../components/LimitsContinuityPillarArticle';
import { DerivativesDifferentiationPillarArticle } from '../components/DerivativesDifferentiationPillarArticle';
import { ApplicationsOfDerivativesPillarArticle } from '../components/ApplicationsOfDerivativesPillarArticle';
import { IntegrationPillarArticle } from '../components/IntegrationPillarArticle';
import { ApplicationsOfIntegrationPillarArticle } from '../components/ApplicationsOfIntegrationPillarArticle';
import { DifferentialEquationsPillarArticle } from '../components/DifferentialEquationsPillarArticle';
import { StatisticalMeasuresPillarArticle } from '../components/StatisticalMeasuresPillarArticle';
import { DataAnalysisPillarArticle } from '../components/DataAnalysisPillarArticle';
import { ProbabilityPillarArticle } from '../components/ProbabilityPillarArticle';
import { PermutationsCombinationsPillarArticle } from '../components/PermutationsCombinationsPillarArticle';
import { ProbabilityDistributionsPillarArticle } from '../components/ProbabilityDistributionsPillarArticle';
import { LinearAlgebraPillarArticle } from '../components/LinearAlgebraPillarArticle';
import { ComplexNumbersPillarArticle } from '../components/ComplexNumbersPillarArticle';
import { MathematicalLogicPillarArticle } from '../components/MathematicalLogicPillarArticle';
import { DiscreteMathematicsPillarArticle } from '../components/DiscreteMathematicsPillarArticle';
import { FinancialMathPillarArticle } from '../components/FinancialMathPillarArticle';
import { WordProblemsPillarArticle } from '../components/WordProblemsPillarArticle';

interface SubCategoryTopicsViewProps {
  domain: MajorDomain;
  subcategory: SubCategory;
  onGoHome: () => void;
  onGoDomain: () => void;
  onOpenTopic: (topicId: string) => void;
}

export const SubCategoryTopicsView: React.FC<SubCategoryTopicsViewProps> = ({
  domain,
  subcategory,
  onGoHome,
  onGoDomain,
  onOpenTopic,
}) => {
  const { themeClasses } = useEyeTheme();
  const topics = subcategory.subSections || [];
  const isAdditionTests = subcategory.id === 'addition-tests';
  const isSubtractionTests = subcategory.id === 'subtraction-tests';
  const isDivisionTests = subcategory.id === 'division-tests';
  const isMultiplicationTests = subcategory.id === 'multiplication-tests';
  const isPlaceValue = subcategory.id === 'place-value';
  const isRatiosProportions = subcategory.id === 'ratios-proportions';
  const isOrderOfOperations = subcategory.id === 'order-of-operations';
  const isNumberLineMeasurement = subcategory.id === 'number-line-measurement';
  const isLinearEquations = subcategory.id === 'linear-equations';
  const isInequalities = subcategory.id === 'inequalities';
  const isPolynomials = subcategory.id === 'polynomials';
  const isQuadraticEquations = subcategory.id === 'quadratic-equations';
  const isFunctionsGraphs = subcategory.id === 'functions-graphs';
  const isSequences = subcategory.id === 'sequences';
  const isGeometricShapes = subcategory.id === 'geometric-shapes';
  const isPerimeterArea = subcategory.id === 'perimeter-area';
  const isTrianglesAngles = subcategory.id === 'triangles-angles';
  const isTrigonometry = subcategory.id === 'trigonometry';
  const isAnalyticGeometry = subcategory.id === 'analytic-geometry';
  const isGeometricTransformations = subcategory.id === 'geometric-transformations';
  const isLimitsContinuity = subcategory.id === 'limits-continuity';
  const isDerivativesDifferentiation = subcategory.id === 'derivatives-differentiation';
  const isApplicationsOfDerivatives = subcategory.id === 'applications-of-derivatives';
  const isIntegration = subcategory.id === 'integration';
  const isApplicationsOfIntegration = subcategory.id === 'applications-of-integration';
  const isDifferentialEquations = subcategory.id === 'differential-equations';
  const isStatisticalMeasures = subcategory.id === 'statistical-measures';
  const isDataAnalysis = subcategory.id === 'data-analysis';
  const isProbability = subcategory.id === 'probability';
  const isCombinatorics = subcategory.id === 'permutations-combinations';
  const isProbabilityDistributions = subcategory.id === 'probability-distributions';
  const isLinearAlgebra = subcategory.id === 'linear-algebra';
  const isComplexNumbers = subcategory.id === 'complex-numbers';
  const isMathematicalLogic = subcategory.id === 'mathematical-logic';
  const isDiscreteMathematics = subcategory.id === 'discrete-mathematics';
  const isFinancialMath = subcategory.id === 'financial-math';
  const isWordProblems = subcategory.id === 'word-problems';

  return (
    <div className="space-y-8 pb-16">
      {/* Breadcrumb Navigation */}
      <Breadcrumbs
        items={[
          { label: 'الرئيسية', onClick: onGoHome },
          { label: domain.title, onClick: onGoDomain },
          { label: subcategory.title, active: true },
        ]}
      />

      {/* Topics / Child Classifications Section */}
      <section className="space-y-4">
        <div className="flex items-center justify-between pb-2 border-b border-black/[0.04] dark:border-white/[0.04]">
          <h2 className={`text-sm sm:text-base font-semibold ${themeClasses.textPrimary}`}>
            {subcategory.title} - التصنيفات والامتحانات ({topics.length})
          </h2>
          <span className={`text-xs ${themeClasses.textMuted}`}>
            اختر أي اختبار للدخول إلى صفحته المستقلة
          </span>
        </div>

        {/* 3 cards per row on desktop (4 rows x 3 cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {topics.map((topic, idx) => (
            <SubCategoryCard
              key={topic.id}
              subcategory={topic}
              domainId={`${domain.id}/${subcategory.id}`}
              index={idx}
              onOpenQuiz={() => onOpenTopic(topic.id)}
            />
          ))}
        </div>
      </section>

      {/* Pillar Article for addition-tests category */}
      {isAdditionTests && (
        <section className="pt-4 border-t border-black/[0.04] dark:border-white/[0.04]">
          <AdditionPillarArticle onOpenTest={onOpenTopic} />
        </section>
      )}

      {/* Pillar Article for subtraction-tests category */}
      {isSubtractionTests && (
        <section className="pt-4 border-t border-black/[0.04] dark:border-white/[0.04]">
          <SubtractionPillarArticle onOpenTest={onOpenTopic} />
        </section>
      )}

      {/* Pillar Article for division-tests category */}
      {isDivisionTests && (
        <section className="pt-4 border-t border-black/[0.04] dark:border-white/[0.04]">
          <DivisionPillarArticle onOpenTest={onOpenTopic} />
        </section>
      )}

      {/* Pillar Article for multiplication-tests category */}
      {isMultiplicationTests && (
        <section className="pt-4 border-t border-black/[0.04] dark:border-white/[0.04]">
          <MultiplicationPillarArticle onOpenTest={onOpenTopic} />
        </section>
      )}

      {/* Pillar Article for place-value category */}
      {isPlaceValue && (
        <section className="pt-4 border-t border-black/[0.04] dark:border-white/[0.04]">
          <PlaceValuePillarArticle onOpenTest={onOpenTopic} />
        </section>
      )}

      {/* Pillar Article for ratios-proportions category */}
      {isRatiosProportions && (
        <section className="pt-4 border-t border-black/[0.04] dark:border-white/[0.04]">
          <RatiosProportionsPillarArticle onOpenTest={onOpenTopic} />
        </section>
      )}

      {/* Pillar Article for order-of-operations category */}
      {isOrderOfOperations && (
        <section className="pt-4 border-t border-black/[0.04] dark:border-white/[0.04]">
          <OrderOfOperationsPillarArticle onOpenTest={onOpenTopic} />
        </section>
      )}

      {/* Pillar Article for number-line-measurement category */}
      {isNumberLineMeasurement && (
        <section className="pt-4 border-t border-black/[0.04] dark:border-white/[0.04]">
          <NumberLineMeasurementPillarArticle onOpenTest={onOpenTopic} />
        </section>
      )}

      {/* Pillar Article for linear-equations category */}
      {isLinearEquations && (
        <section className="pt-4 border-t border-black/[0.04] dark:border-white/[0.04]">
          <LinearEquationsPillarArticle onOpenTest={onOpenTopic} />
        </section>
      )}

      {/* Pillar Article for inequalities category */}
      {isInequalities && (
        <section className="pt-4 border-t border-black/[0.04] dark:border-white/[0.04]">
          <InequalitiesPillarArticle onOpenTest={onOpenTopic} />
        </section>
      )}

      {/* Pillar Article for polynomials category */}
      {isPolynomials && (
        <section className="pt-4 border-t border-black/[0.04] dark:border-white/[0.04]">
          <PolynomialsPillarArticle onOpenTest={onOpenTopic} />
        </section>
      )}

      {/* Pillar Article for quadratic-equations category */}
      {isQuadraticEquations && (
        <section className="pt-4 border-t border-black/[0.04] dark:border-white/[0.04]">
          <QuadraticEquationsPillarArticle onOpenTest={onOpenTopic} />
        </section>
      )}

      {/* Pillar Article for functions-graphs category */}
      {isFunctionsGraphs && (
        <section className="pt-4 border-t border-black/[0.04] dark:border-white/[0.04]">
          <FunctionsGraphsPillarArticle onOpenTest={onOpenTopic} />
        </section>
      )}

      {/* Pillar Article for sequences category */}
      {isSequences && (
        <section className="pt-4 border-t border-black/[0.04] dark:border-white/[0.04]">
          <SequencesPillarArticle onOpenTest={onOpenTopic} />
        </section>
      )}

      {/* Pillar Article for geometric-shapes category */}
      {isGeometricShapes && (
        <section className="pt-4 border-t border-black/[0.04] dark:border-white/[0.04]">
          <GeometricShapesPillarArticle onOpenTest={onOpenTopic} />
        </section>
      )}

      {/* Pillar Article for perimeter-area category */}
      {isPerimeterArea && (
        <section className="pt-4 border-t border-black/[0.04] dark:border-white/[0.04]">
          <PerimeterAreaPillarArticle onOpenTest={onOpenTopic} />
        </section>
      )}

      {/* Pillar Article for triangles-angles category */}
      {isTrianglesAngles && (
        <section className="pt-4 border-t border-black/[0.04] dark:border-white/[0.04]">
          <TrianglesAnglesPillarArticle onOpenTest={onOpenTopic} />
        </section>
      )}

      {/* Pillar Article for trigonometry category */}
      {isTrigonometry && (
        <section className="pt-4 border-t border-black/[0.04] dark:border-white/[0.04]">
          <TrigonometryPillarArticle onOpenTest={onOpenTopic} />
        </section>
      )}

      {/* Pillar Article for analytic-geometry category */}
      {isAnalyticGeometry && (
        <section className="pt-4 border-t border-black/[0.04] dark:border-white/[0.04]">
          <AnalyticGeometryPillarArticle onOpenTest={onOpenTopic} />
        </section>
      )}

      {/* Pillar Article for geometric-transformations category */}
      {isGeometricTransformations && (
        <section className="pt-4 border-t border-black/[0.04] dark:border-white/[0.04]">
          <GeometricTransformationsPillarArticle onOpenTest={onOpenTopic} />
        </section>
      )}

      {/* Pillar Article for limits-continuity category */}
      {isLimitsContinuity && (
        <section className="pt-4 border-t border-black/[0.04] dark:border-white/[0.04]">
          <LimitsContinuityPillarArticle onOpenTest={onOpenTopic} />
        </section>
      )}

      {/* Pillar Article for derivatives-differentiation category */}
      {isDerivativesDifferentiation && (
        <section className="pt-4 border-t border-black/[0.04] dark:border-white/[0.04]">
          <DerivativesDifferentiationPillarArticle onOpenTest={onOpenTopic} />
        </section>
      )}

      {/* Pillar Article for applications-of-derivatives category */}
      {isApplicationsOfDerivatives && (
        <section className="pt-4 border-t border-black/[0.04] dark:border-white/[0.04]">
          <ApplicationsOfDerivativesPillarArticle onOpenTest={onOpenTopic} />
        </section>
      )}

      {/* Pillar Article for integration category */}
      {isIntegration && (
        <section className="pt-4 border-t border-black/[0.04] dark:border-white/[0.04]">
          <IntegrationPillarArticle onOpenTest={onOpenTopic} />
        </section>
      )}

      {/* Pillar Article for applications-of-integration category */}
      {isApplicationsOfIntegration && (
        <section className="pt-4 border-t border-black/[0.04] dark:border-white/[0.04]">
          <ApplicationsOfIntegrationPillarArticle onOpenTest={onOpenTopic} />
        </section>
      )}

      {/* Pillar Article for differential-equations category */}
      {isDifferentialEquations && (
        <section className="pt-4 border-t border-black/[0.04] dark:border-white/[0.04]">
          <DifferentialEquationsPillarArticle onOpenTest={onOpenTopic} />
        </section>
      )}

      {/* Pillar Article for statistical-measures category */}
      {isStatisticalMeasures && (
        <section className="pt-4 border-t border-black/[0.04] dark:border-white/[0.04]">
          <StatisticalMeasuresPillarArticle onOpenTest={onOpenTopic} />
        </section>
      )}

      {/* Pillar Article for data-analysis category */}
      {isDataAnalysis && (
        <section className="pt-4 border-t border-black/[0.04] dark:border-white/[0.04]">
          <DataAnalysisPillarArticle onOpenTest={onOpenTopic} />
        </section>
      )}

      {/* Pillar Article for probability category */}
      {isProbability && (
        <section className="pt-4 border-t border-black/[0.04] dark:border-white/[0.04]">
          <ProbabilityPillarArticle onOpenTest={onOpenTopic} />
        </section>
      )}

      {/* Pillar Article for permutations-combinations category */}
      {isCombinatorics && (
        <section className="pt-4 border-t border-black/[0.04] dark:border-white/[0.04]">
          <PermutationsCombinationsPillarArticle onOpenTest={onOpenTopic} />
        </section>
      )}

      {/* Pillar Article for probability-distributions category */}
      {isProbabilityDistributions && (
        <section className="pt-4 border-t border-black/[0.04] dark:border-white/[0.04]">
          <ProbabilityDistributionsPillarArticle onOpenTest={onOpenTopic} />
        </section>
      )}

      {/* Pillar Article for linear-algebra category */}
      {isLinearAlgebra && (
        <section className="pt-4 border-t border-black/[0.04] dark:border-white/[0.04]">
          <LinearAlgebraPillarArticle onOpenTest={onOpenTopic} />
        </section>
      )}

      {/* Pillar Article for complex-numbers category */}
      {isComplexNumbers && (
        <section className="pt-4 border-t border-black/[0.04] dark:border-white/[0.04]">
          <ComplexNumbersPillarArticle onOpenTest={onOpenTopic} />
        </section>
      )}

      {/* Pillar Article for mathematical-logic category */}
      {isMathematicalLogic && (
        <section className="pt-4 border-t border-black/[0.04] dark:border-white/[0.04]">
          <MathematicalLogicPillarArticle onOpenTest={onOpenTopic} />
        </section>
      )}

      {/* Pillar Article for discrete-mathematics category */}
      {isDiscreteMathematics && (
        <section className="pt-4 border-t border-black/[0.04] dark:border-white/[0.04]">
          <DiscreteMathematicsPillarArticle onOpenTest={onOpenTopic} />
        </section>
      )}

      {/* Pillar Article for financial-math category */}
      {isFinancialMath && (
        <section className="pt-4 border-t border-black/[0.04] dark:border-white/[0.04]">
          <FinancialMathPillarArticle onOpenTest={onOpenTopic} />
        </section>
      )}

      {/* Pillar Article for word-problems category */}
      {isWordProblems && (
        <section className="pt-4 border-t border-black/[0.04] dark:border-white/[0.04]">
          <WordProblemsPillarArticle onOpenTest={onOpenTopic} />
        </section>
      )}
    </div>
  );
};

