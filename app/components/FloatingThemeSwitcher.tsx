"use client";

import { useEffect, useState } from "react";

const THEMES = [
  { key: "theme-one", label: "One" },
  { key: "theme-two", label: "Two" },
  { key: "theme-three", label: "Three" },
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
    <div className="fixed bottom-5 right-5 z-50 group">
      <div
        className="
          bg-white
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
        <div className="text-sm font-medium text-center">
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
                mt-2
                px-3 py-1
                rounded-full
                text-sm
                bg-gray-100
                hover:bg-gray-200
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
