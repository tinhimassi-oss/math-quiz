import React, { createContext, useContext, useEffect, useState } from 'react';

export type EyeCareTheme = 'warm' | 'sage' | 'night';

interface ThemeContextType {
  theme: EyeCareTheme;
  isDark: boolean;
  setTheme: (theme: EyeCareTheme) => void;
  themeClasses: {
    bg: string;
    cardBg: string;
    cardHoverBg: string;
    border: string;
    textPrimary: string;
    textSecondary: string;
    textMuted: string;
    accent: string;
    accentBg: string;
    accentBorder: string;
    headerBg: string;
    badgeBg: string;
    pillBg: string;
  };
}

const WARM_THEME_CLASSES: ThemeContextType['themeClasses'] = {
  bg: 'bg-[#F9F7F1]',
  cardBg: 'bg-[#FFFFFF]',
  cardHoverBg: 'hover:bg-[#FDFCF9]',
  border: 'border-[#EBE4D5]',
  textPrimary: 'text-[#2C241B]',
  textSecondary: 'text-[#5E5143]',
  textMuted: 'text-[#8E7E6E]',
  accent: 'text-[#7D5329]',
  accentBg: 'bg-[#F4EDE0]',
  accentBorder: 'border-[#DCCDBA]',
  headerBg: 'bg-[#F9F7F1]/95',
  badgeBg: 'bg-[#F2ECE0]',
  pillBg: 'bg-[#F5EFE4]',
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme] = useState<EyeCareTheme>('warm');

  useEffect(() => {
    localStorage.setItem('math_eyecare_theme', 'warm');
    const body = document.body;
    body.classList.remove('dark');
    body.style.backgroundColor = '#F9F7F1';
    body.style.color = '#2C241B';
  }, []);

  return (
    <ThemeContext.Provider value={{ theme: 'warm', isDark: false, setTheme: () => {}, themeClasses: WARM_THEME_CLASSES }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useEyeTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useEyeTheme must be used within a ThemeProvider');
  }
  return context;
}

