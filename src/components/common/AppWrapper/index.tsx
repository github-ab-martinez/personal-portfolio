import { FC, PropsWithChildren, useEffect, useState } from "react";
import { useDarkMode } from "@/components/common/StickyHeader/DarkModeToggle/DarkModeProvider";
import { notoSans } from "@/app/fonts";

const AppWrapper: FC<PropsWithChildren> = ({ children }) => {
  const { darkMode } = useDarkMode();
  const [bgTransition, setBgTransition] = useState(false);

  useEffect(() => {
    darkMode !== undefined && !bgTransition && setBgTransition(true);
  }, [darkMode, bgTransition]);

  return (
    <html lang="en" className={darkMode ? "dark" : ""}>
      <body
        className={`${
          notoSans.className
        } max-w-full overflow-x-hidden bg-white-secondary text-black-secondary ${
          bgTransition ? "transition-all duration-500" : "transition-none"
        }  dark:bg-black-primary dark:text-white-primary`}
      >
        {darkMode === undefined ? null : <>{children}</>}
      </body>
    </html>
  );
};

export default AppWrapper;
