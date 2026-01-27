"use client";

import { useEffect, useState } from "react";

const THEMES = [
  { key: "theme-one", label: "light" },
  { key: "theme-two", label: "dark" },
  { key: "theme-three", label: "other" },
] as const;

export default function FloatingThemeSwitcher() {
  const [theme, setTheme] = useState("theme-one");

  useEffect(() => {
    const saved = localStorage.getItem("theme") || "theme-one";
    setTheme(saved);
    document.documentElement.className = saved;
  }, []);

  const applyTheme = (newTheme: string) => {
    document.documentElement.className = newTheme;
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const currentLabel =
    THEMES.find((t) => t.key === theme)?.label ?? "Theme";

  return (
    <div className="fixed bottom-4 right-4 z-50 group w-14">
      <div
        className="
          bg-secondary
          border border-gray-300
          rounded-full
          shadow-lg
          p-1
          cursor-pointer
          transition-all duration-200
          group-hover:rounded-xl
        "
      >
        {/* Current theme (always visible) */}
        <div className="text-sm font-medium text-center text-primary">
          {currentLabel}
        </div>

        {/* Expanded list (vertical) */}
        <div
          className="
            overflow-hidden
            max-h-0
            transition-all duration-200
            group-hover:max-h-40
            flex flex-col
            mt-0
            group-hover:mt-3
          "
        >
          {THEMES.filter((t) => t.key !== theme).map((t) => (
            <button
              key={t.key}
              onClick={() => applyTheme(t.key)}
              className="
              cursor-pointer
                mt-2
                px-1 py-1
                rounded-full
                text-sm
                text-primary
                bg-secondary
                transition-colors
              "
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
