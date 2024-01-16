import { FC, PropsWithChildren, useEffect, useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

import { useDarkMode } from '@/components/StickyHeader/DarkModeToggle/DarkModeProvider';
import { notoSans } from '@/app/fonts';

const AppWrapper: FC<PropsWithChildren> = ({ children }) => {
  const { darkMode } = useDarkMode();
  const [bgTransition, setBgTransition] = useState(false);

  useEffect(() => {
    darkMode !== undefined && !bgTransition && setBgTransition(true);
  }, [darkMode, bgTransition]);

  return (
    <html className={darkMode ? 'dark' : ''} lang="en">
      <title>A.b. Martinez - Personal Portfolio</title>
      <meta
        content="The personal portfolio of A.b. Martinez, Software Engineer."
        name="description"
      />
      <body
        className={`${
          notoSans.className
        } max-w-full overflow-x-hidden bg-white-primary text-black-secondary ${
          bgTransition ? 'transition-all duration-500' : 'transition-none'
        }  dark:bg-black-primary dark:text-white-secondary`}
      >
        {darkMode === undefined ? null : <>{children}</>}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
};

export default AppWrapper;
