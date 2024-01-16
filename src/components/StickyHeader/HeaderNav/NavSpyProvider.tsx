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
  activeLink: string;
  navObserver: IntersectionObserver | undefined;
}

const NavSpyContext = createContext<Context | undefined>(undefined);

export const NavSpyProvider: FC<PropsWithChildren> = ({ children }) => {
  const [activeLink, setActiveLink] = useState<string>('#home');

  const intersectionHandler: IntersectionObserverCallback = useCallback(
    (entries) => {
      entries.map((entry) => {
        if (entry.isIntersecting) {
          setActiveLink(`#${entry.target.id}`);
        }
      });
    },
    [],
  );

  const navObserver = useMemo(() => {
    if (typeof IntersectionObserver !== 'undefined') {
      return new IntersectionObserver(intersectionHandler, {
        root: null,
        rootMargin: `0px 88px -${window.innerHeight - 200}px 0px`,
        threshold: 0,
      });
    }
  }, [intersectionHandler]);

  const value = useMemo(
    () => ({
      activeLink,
      navObserver,
    }),
    [activeLink, navObserver],
  );

  return (
    <NavSpyContext.Provider value={value}>{children}</NavSpyContext.Provider>
  );
};

export const useNavSpy = () => {
  const context = useContext(NavSpyContext);

  if (!context) {
    throw 'useNavSpy must be called within a NavSpyProvider';
  }

  return context;
};
