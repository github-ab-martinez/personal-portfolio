'use client';

import {
  FC,
  PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

interface Context {
  mobileNavVisible: boolean;
  toggleMobileNav(): void;
}

const MobileNavContext = createContext<Context | undefined>(undefined);

export const MobileNavProvider: FC<PropsWithChildren> = ({ children }) => {
  const [mobileNavVisible, setMobileNavVisible] = useState(false);

  const toggleMobileNav = useCallback(() => {
    setMobileNavVisible((isVisible) => !isVisible);
  }, []);

  const value = useMemo(
    () => ({
      mobileNavVisible,
      toggleMobileNav,
    }),
    [mobileNavVisible, toggleMobileNav],
  );

  return (
    <MobileNavContext.Provider value={value}>
      {children}
    </MobileNavContext.Provider>
  );
};

export const useMobileNav = () => {
  const context = useContext(MobileNavContext);

  if (!context) {
    throw 'useMobileNav must be called within a MobileNavProvider';
  }

  return context;
};
