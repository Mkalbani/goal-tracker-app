import { useTheme } from "../contexts/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <section className="theme-container">
      <button
        className={`theme ${theme === "dark" ? "dark" : ""}`}
        onClick={toggleTheme}
        id="theme"
        aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      ></button>
    </section>
  );
};

export default ThemeToggle;
