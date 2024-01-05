import { useNavSpy } from "./NavSpyProvider";
import { useNavLinks } from "./useNavLinks";
import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";

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
        url === "#home"
          ? 0
          : window.scrollY + linkTargets[url].getBoundingClientRect().top - 100,
      behavior: "smooth",
    });

    setMobileNavVisible(false);
  };

  return (
    <nav
      className={`${
        mobileNavVisible ? "fixed right-0 top-0" : "hidden"
      } z-10 w-2/3 bg-black-primary p-7 dark:bg-white-secondary md:static md:ml-8 md:block md:w-auto md:bg-opacity-0 md:p-0 dark:md:bg-opacity-0 lg:ml-16`}
    >
      <ul className="flex list-none flex-col gap-8 bg-gradient-to-r from-purple via-red to-orange bg-clip-text text-white-primary dark:text-black-primary md:flex-row md:text-black-primary dark:md:text-white-primary">
        {navLinks.map(({ hash, label, url }) => {
          return (
            <li
              key={hash}
              className={`${activeLink === url ? "text-transparent" : ""}`}
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
