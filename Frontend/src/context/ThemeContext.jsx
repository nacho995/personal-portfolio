import { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const ThemeContext = createContext({
  theme: 'purple',
  toggleTheme: () => {},
  themeColors: {
    purple: {
      primary: 'from-purple-500',
      secondary: 'to-blue-500',
      accent: 'bg-purple-500',
      glow: 'rgba(147, 51, 234, 0.1)',
    },
    blue: {
      primary: 'from-[#40A0E0]',
      secondary: 'to-[#2980B9]',
      accent: 'bg-[#40A0E0]',
      glow: 'rgba(64, 160, 224, 0.1)',
    },
  }
});

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'purple';
  });

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'purple' ? 'blue' : 'purple');
  };

  const themeColors = {
    purple: {
      primary: 'from-purple-500',
      secondary: 'to-blue-500',
      accent: 'bg-purple-500',
      glow: 'rgba(147, 51, 234, 0.1)',
    },
    blue: {
      primary: 'from-[#40A0E0]',
      secondary: 'to-[#2980B9]',
      accent: 'bg-[#40A0E0]',
      glow: 'rgba(64, 160, 224, 0.1)',
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