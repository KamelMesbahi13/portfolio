import { memo } from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../../Functions/ThemeContext";

const ThemeToggle = memo(() => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="relative flex items-center justify-center w-12 h-12 overflow-hidden transition-all duration-300 bg-gray-100 rounded-full dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/20 group"
    >
      {/* Sun Icon (Light Mode) */}
      <Sun
        size={20}
        className={`
          absolute transition-all duration-500 text-yellow-500
          ${
            isDark
              ? "rotate-90 scale-0 opacity-0"
              : "rotate-0 scale-100 opacity-100"
          }
        `}
      />

      {/* Moon Icon (Dark Mode) */}
      <Moon
        size={20}
        className={`
          absolute transition-all duration-500 text-blue-400
          ${
            isDark
              ? "rotate-0 scale-100 opacity-100"
              : "-rotate-90 scale-0 opacity-0"
          }
        `}
      />

      {/* Ripple effect on click */}
      <div className="absolute inset-0 transition-transform duration-300 scale-0 rounded-full bg-gradient-to-r from-yellow-400/0 via-yellow-400/20 to-yellow-400/0 dark:from-blue-400/0 dark:via-blue-400/20 dark:to-blue-400/0 group-active:scale-100" />
    </button>
  );
});

ThemeToggle.displayName = "ThemeToggle";

export default ThemeToggle;
