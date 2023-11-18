'use client';

import {
  FC,
  PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

interface Context {
  darkMode: boolean | undefined;
  toggleDarkMode(): void;
}

const DarkModeContext = createContext<Context | undefined>(undefined);

const STORAGE_KEY = 'abMartinezPortfolioTheme';

const getLocalStorageValue = () => {
  if (typeof window !== 'undefined' && window.localStorage) {
    return localStorage.getItem(STORAGE_KEY);
  }

  return 'dark';
};

export const DarkModeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [darkMode, setDarkMode] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    const localStorageValue = getLocalStorageValue();
    setDarkMode(localStorageValue === 'dark' ? true : false);
  }, []);

  const toggleDarkMode = useCallback(
    () =>
      setDarkMode((isDarkMode) => {
        if (typeof window !== 'undefined' && window.localStorage) {
          localStorage.setItem(STORAGE_KEY, !isDarkMode ? 'dark' : 'light');
        }
        return !isDarkMode;
      }),
    []
  );

  const value = useMemo(
    () => ({
      darkMode,
      toggleDarkMode,
    }),
    [darkMode, toggleDarkMode]
  );

  return (
    <DarkModeContext.Provider value={value}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const useDarkMode = () => {
  const context = useContext(DarkModeContext);

  if (!context) {
    throw 'useDarkMode must be called within a DarkModeProvider';
  }

  return context;
};
