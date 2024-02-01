'use client';

import { FC, useEffect, useState } from 'react';

import { useMobileNav } from '../MobileNavToggle/MobileNavProvider';

import { useNavSpy } from './NavSpyProvider';

import { NavLink } from '@/../sanity/sanity-utils';

interface NavProps {
  navLinks: NavLink[];
}

const HeaderNav: FC<NavProps> = ({ navLinks }) => {
  const { mobileNavVisible, toggleMobileNav } = useMobileNav();
  const { activeLink } = useNavSpy();
  const [linkTargets, setLinkTargets] = useState<Record<string, Element>>({});

  useEffect(() => {
    navLinks.map((link) => {
      const target = document.querySelector(link.url);

      target &&
        setLinkTargets((targets) => ({ ...targets, [link.url]: target }));
    });
  }, [navLinks]);

  const handleNavClick = (url: string) => {
    window.scrollTo({
      top:
        url === '#home'
          ? 0
          : window.scrollY + linkTargets[url].getBoundingClientRect().top - 100,
      behavior: 'smooth',
    });

    toggleMobileNav();
  };

  return (
    <nav
      className={`${
        mobileNavVisible ? 'fixed right-0 top-0' : 'hidden'
      } z-10 w-2/3 bg-black-primary p-7 dark:bg-white-primary md:static md:ml-8 md:block md:w-auto md:bg-opacity-0 md:p-0 dark:md:bg-opacity-0 lg:ml-16`}
    >
      <ul className="flex list-none flex-col gap-8 bg-gradient-to-r from-purple via-red to-orange bg-clip-text text-white-secondary dark:text-black-primary md:flex-row md:text-black-primary dark:md:text-white-secondary">
        {navLinks.map(({ _key, label, url }) => {
          return (
            <li
              className={`${
                activeLink === url ? 'text-purple md:text-transparent' : ''
              }`}
              key={_key}
            >
              <a
                className="hover:text-transparent"
                href={url}
                onClick={(event) => {
                  event.preventDefault();
                  handleNavClick(url);
                }}
              >
                {label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default HeaderNav;
