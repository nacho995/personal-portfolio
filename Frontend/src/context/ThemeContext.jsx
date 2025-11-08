import { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const ThemeContext = createContext({
  theme: 'javascript',
  toggleTheme: () => {},
  themeColors: {
    javascript: {
      primary: 'from-[#F7DF1E]',
      secondary: 'to-[#FDB813]',
      accent: 'bg-[#F7DF1E]',
      glow: 'rgba(247, 223, 30, 0.15)',
      text: 'text-[#F7DF1E]',
      border: 'border-[#F7DF1E]',
    },
    nodejs: {
      primary: 'from-[#83CD29]',
      secondary: 'to-[#339933]',
      accent: 'bg-[#83CD29]',
      glow: 'rgba(131, 205, 41, 0.15)',
      text: 'text-[#83CD29]',
      border: 'border-[#83CD29]',
    },
  }
});

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'javascript';
  });

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'javascript' ? 'nodejs' : 'javascript');
  };

  const themeColors = {
    javascript: {
      primary: 'from-[#F7DF1E]',
      secondary: 'to-[#FDB813]',
      accent: 'bg-[#F7DF1E]',
      glow: 'rgba(247, 223, 30, 0.15)',
      text: 'text-[#F7DF1E]',
      border: 'border-[#F7DF1E]',
    },
    nodejs: {
      primary: 'from-[#83CD29]',
      secondary: 'to-[#339933]',
      accent: 'bg-[#83CD29]',
      glow: 'rgba(131, 205, 41, 0.15)',
      text: 'text-[#83CD29]',
      border: 'border-[#83CD29]',
    },
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, themeColors }}>
      {children}
    </ThemeContext.Provider>
  );
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
} 