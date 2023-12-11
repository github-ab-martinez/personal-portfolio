import { FC, PropsWithChildren } from 'react';
import { useDarkMode } from '@/components/common/StickyHeader/DarkModeToggle/DarkModeProvider';
import { notoSans } from '@/app/fonts';

const AppWrapper: FC<PropsWithChildren> = ({ children }) => {
  const { darkMode } = useDarkMode();

  return (
    <html lang="en" className={darkMode ? 'dark' : ''}>
      <body
        className={`${notoSans.className} bg-white-secondary text-black-secondary dark:bg-black-primary dark:text-white-primary overflow-x-hidden`}
      >
        {darkMode === undefined ? null : <>{children}</>}
      </body>
    </html>
  );
};

export default AppWrapper;
