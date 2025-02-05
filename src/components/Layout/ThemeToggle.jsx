import React from "react";
import { useTheme } from "../../hooks/useTheme";

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <section className="theme-container">
      <button
        className={`theme ${isDarkMode ? "dark" : ""}`}
        onClick={toggleTheme}
        aria-label="Toggle theme"
      />
    </section>
  );
};

export default ThemeToggle;
