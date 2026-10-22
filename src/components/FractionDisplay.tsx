import React from 'react';

export interface FractionDisplayProps {
  value: string | number;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  isQuestionMark?: boolean;
}

/**
 * Component to display mathematical fractions vertically:
 * Numerator on top, horizontal fraction bar in the middle, Denominator on the bottom.
 * Supports strings like "3/5", "?", numbers, etc.
 */
export const FractionDisplay: React.FC<FractionDisplayProps> = ({
  value,
  size = 'md',
  className = '',
  isQuestionMark = false,
}) => {
  const strVal = String(value);

  if (strVal === '؟' || strVal === '?' || isQuestionMark) {
    const qSize = {
      xs: 'text-xs',
      sm: 'text-sm',
      md: 'text-xl sm:text-2xl',
      lg: 'text-2xl sm:text-3xl',
      xl: 'text-3xl sm:text-4xl',
    }[size];
    return (
      <span className={`font-bold font-sans text-amber-600 dark:text-amber-400 animate-pulse select-none ${qSize} ${className}`}>
        ؟
      </span>
    );
  }

  if (strVal.includes('/')) {
    const [num, den] = strVal.split('/');

    const sizeStyles = {
      xs: {
        text: 'text-[11px]',
        border: 'border-b',
        py: 'py-[1px]',
        minW: 'min-w-[14px]',
      },
      sm: {
        text: 'text-xs',
        border: 'border-b',
        py: 'py-[1px]',
        minW: 'min-w-[16px]',
      },
      md: {
        text: 'text-base sm:text-lg',
        border: 'border-b-2',
        py: 'py-0.5',
        minW: 'min-w-[22px]',
      },
      lg: {
        text: 'text-xl sm:text-2xl',
        border: 'border-b-2',
        py: 'py-0.5',
        minW: 'min-w-[26px]',
      },
      xl: {
        text: 'text-2xl sm:text-4xl',
        border: 'border-b-[3px]',
        py: 'py-1',
        minW: 'min-w-[32px]',
      },
    }[size];

    return (
      <span
        className={`inline-flex flex-col items-center justify-center align-middle font-sans font-bold leading-none select-none ${className}`}
      >
        <span className={`${sizeStyles.text} ${sizeStyles.minW} text-center leading-none px-1`}>
          {num.trim()}
        </span>
        <span
          className={`w-full ${sizeStyles.border} border-current ${sizeStyles.py} block my-0.5 opacity-90`}
        />
        <span className={`${sizeStyles.text} ${sizeStyles.minW} text-center leading-none px-1`}>
          {den.trim()}
        </span>
      </span>
    );
  }

  return <span className={`font-sans font-bold ${className}`}>{strVal}</span>;
};
