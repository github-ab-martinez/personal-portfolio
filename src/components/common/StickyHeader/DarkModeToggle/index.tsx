import { Sun, Moon } from 'lucide-react';
import { useDarkMode } from './DarkModeProvider';

const DarkModeToggle = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <label
      className="relative inline-flex items-center cursor-pointer"
      htmlFor="darkModeToggle"
    >
      <input
        className="sr-only peer"
        checked={darkMode}
        onChange={toggleDarkMode}
        id="darkModeToggle"
        type="checkbox"
      />
      <span className="bg-white-primary p-1 text-black-primary peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-purple rounded-full">
        {darkMode ? <Sun size={16} /> : <Moon size={16} />}
      </span>
      <span className="sr-only">Enable dark mode</span>
    </label>
  );
};

export default DarkModeToggle;
