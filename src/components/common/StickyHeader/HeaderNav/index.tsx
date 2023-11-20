import { useNavLinks } from './useNavLinks';
import { FC } from 'react';

interface HeaderNavProps {
  mobileNavVisible: boolean;
}

const HeaderNav: FC<HeaderNavProps> = ({ mobileNavVisible }) => {
  const navLinks = useNavLinks();

  return (
    <nav
      className={`${
        mobileNavVisible ? 'fixed' : 'hidden'
      } md:block md:relative md:ml-14 top-0 right-0 md:text-black-primary dark:md:text-white-primary dark:md:bg-opacity-0 md:bg-opacity-0 bg-black-primary dark:bg-white-secondary text-white-primary dark:text-black-primary md:p-0 p-7 md:w-auto w-2/3 z-10`}
    >
      <ul className="list-none font-light flex md:flex-row flex-col gap-4">
        {navLinks.map(({ hash, label, url }) => (
          <li key={hash}>
            <a href={url}>{label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default HeaderNav;
