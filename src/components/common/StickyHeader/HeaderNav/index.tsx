import { useNavSpy } from './NavSpyProvider';
import { useNavLinks } from './useNavLinks';
import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react';

interface HeaderNavProps {
  mobileNavVisible: boolean;
  setMobileNavVisible: Dispatch<SetStateAction<boolean>>;
}

const HeaderNav: FC<HeaderNavProps> = ({
  mobileNavVisible,
  setMobileNavVisible,
}) => {
  const navLinks = useNavLinks();
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

    setMobileNavVisible(false);
  };

  return (
    <nav
      className={`${
        mobileNavVisible ? 'fixed top-0 right-0' : 'hidden'
      } md:block md:static lg:ml-16 md:ml-8  dark:md:bg-opacity-0 md:bg-opacity-0 bg-black-primary dark:bg-white-secondary text-white-primary dark:text-black-primary md:p-0 p-7 md:w-auto w-2/3 z-10`}
    >
      <ul className="list-none flex md:flex-row flex-col gap-8 bg-clip-text md:text-black-primary dark:md:text-white-primary bg-gradient-to-r from-purple via-red to-orange">
        {navLinks.map(({ hash, label, url }) => {
          return (
            <li
              key={hash}
              className={`${activeLink === url && 'text-transparent'}`}
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
