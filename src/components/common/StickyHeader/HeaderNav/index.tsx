import { useNavLinks } from './useNavLinks';

const HeaderNav = () => {
  const navLinks = useNavLinks();
  return (
    <nav className="list-none font-light flex ml-20 gap-8">
      {navLinks.map(({ hash, label, url }) => (
        <li key={hash}>
          <a href={url}>{label}</a>
        </li>
      ))}
    </nav>
  );
};

export default HeaderNav;
