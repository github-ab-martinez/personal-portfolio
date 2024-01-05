import { Sun, Moon } from "lucide-react";
import { useDarkMode } from "./DarkModeProvider";

const DarkModeToggle = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <label
      className="relative inline-flex cursor-pointer items-center"
      htmlFor="darkModeToggle"
    >
      <input
        className="peer sr-only"
        checked={darkMode}
        onChange={toggleDarkMode}
        id="darkModeToggle"
        type="checkbox"
      />
      <span
        aria-hidden="true"
        className="rounded-full bg-white-primary p-1 text-black-primary peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-purple"
      >
        {darkMode ? <Sun size={16} /> : <Moon size={16} />}
      </span>
      <span className="sr-only">{`Enable ${
        darkMode ? "light" : "dark"
      } mode`}</span>
    </label>
  );
};

export default DarkModeToggle;
