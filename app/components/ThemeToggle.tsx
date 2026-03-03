"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 bg-blue-500 dark:bg-gray-800 text-white px-4 py-2 rounded-full shadow hover:scale-105 transition transform"
    >
      {theme === "light" ? "Dark Mode 🌙" : "Light Mode ☀️"}
    </button>
  );
}
