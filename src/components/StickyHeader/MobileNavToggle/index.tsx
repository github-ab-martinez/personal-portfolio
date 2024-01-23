'use client';

import { Menu, X } from 'lucide-react';

import { useMobileNav } from './MobileNavProvider';

const MobileNavToggle = () => {
  const { mobileNavVisible, toggleMobileNav } = useMobileNav();

  return (
    <button
      className={`${
        mobileNavVisible
          ? 'text-white-secondary dark:text-black-primary'
          : 'text-black-primary dark:text-white-secondary'
      } z-20 ml-5 md:hidden`}
      onClick={() => toggleMobileNav()}
    >
      {mobileNavVisible ? (
        <X aria-hidden="true" />
      ) : (
        <Menu aria-hidden="true" />
      )}
      <span className="sr-only">{`${
        mobileNavVisible ? 'Close' : 'Open'
      } navigation`}</span>
    </button>
  );
};

export default MobileNavToggle;
