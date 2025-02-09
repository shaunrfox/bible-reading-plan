import { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark' | 'win95';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const THEME_STORAGE_KEY = 'cetec-theme-preference';

function getInitialTheme(): Theme {
  // Check for stored preference
  const storedTheme = localStorage.getItem(THEME_STORAGE_KEY) as Theme | null;
  if (storedTheme) {
    return storedTheme;
  }

  // Check for system preference
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  }

  // Default to light
  return 'light';
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(() => getInitialTheme());

  // Update theme in both DOM and localStorage
  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem(THEME_STORAGE_KEY, newTheme);
  };

  // Apply theme to DOM
  useEffect(() => {
    // Remove any existing theme
    document.documentElement.removeAttribute('data-color-mode');
    document.documentElement.removeAttribute('data-theme');

    // Apply new theme
    if (theme === 'win95') {
      document.documentElement.setAttribute('data-theme', 'win95');
    } else {
      document.documentElement.setAttribute('data-color-mode', theme);
    }
  }, [theme]);

  // Listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = (e: MediaQueryListEvent) => {
      const storedTheme = localStorage.getItem(THEME_STORAGE_KEY);
      // Only update if user hasn't explicitly set a preference
      if (!storedTheme) {
        setThemeState(e.matches ? 'dark' : 'light');
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
} 