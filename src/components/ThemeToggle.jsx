import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "../lib/util";

const getInitialTheme = () => {
  const storageTheme = localStorage.getItem("theme");

  if (storageTheme) {
    return storageTheme === "dark";
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches;
};

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((current) => !current);
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "fixed bottom-5 right-5 z-50 rounded-full border border-border bg-card p-3 shadow-lg transition-colors",
        "focus:outline-none focus:ring-2 focus:ring-ring"
      )}
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDarkMode ? (
        <Sun className="h-6 w-6 text-accent" />
      ) : (
        <Moon className="h-6 w-6 text-primary" />
      )}
    </button>
  );
};
