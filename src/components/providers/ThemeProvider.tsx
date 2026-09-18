"use client";
import { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "dark",
  toggleTheme: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme") as Theme | null;
    const initial = stored || "dark";
    setTheme(initial);
    document.documentElement.setAttribute("data-theme", initial);
    document.documentElement.classList.remove("dark", "light");
    document.documentElement.classList.add(initial);
    if (document.body) {
      document.body.setAttribute("data-theme", initial);
      document.body.classList.remove("dark", "light");
      document.body.classList.add(initial);
    }
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    try {
      localStorage.setItem("theme", next);
    } catch (e) {}
    document.documentElement.setAttribute("data-theme", next);
    document.documentElement.classList.remove("dark", "light");
    document.documentElement.classList.add(next);
    if (document.body) {
      document.body.setAttribute("data-theme", next);
      document.body.classList.remove("dark", "light");
      document.body.classList.add(next);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
