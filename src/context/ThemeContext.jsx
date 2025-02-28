import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('purple');

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

export function useTheme() {
  return useContext(ThemeContext);
} 