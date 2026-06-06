"use client";

import { useEffect, useState } from "react";

const THEMES = [
  { key: "theme-one", label: "light" },
  { key: "theme-two", label: "dark" },
] as const;

type ThemeKey = (typeof THEMES)[number]["key"];

function normalizeTheme(value: string | null): ThemeKey {
  return value === "theme-two" ? "theme-two" : "theme-one";
}

export default function FloatingThemeSwitcher() {
  const [theme, setTheme] = useState<ThemeKey>(() => {
    if (typeof window === "undefined") {
      return "theme-one";
    }

    return normalizeTheme(localStorage.getItem("theme"));
  });
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.remove("theme-one", "theme-two");
    document.documentElement.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const applyTheme = (newTheme: ThemeKey) => {
    setTheme(newTheme);
    setOpen(false);
  };

  const currentLabel = THEMES.find((t) => t.key === theme)?.label ?? "Theme";

  return (
    <div data-site-chrome="theme" suppressHydrationWarning className="fixed bottom-4 right-4 z-50 w-14">
      <div
        onClick={() => setOpen((o) => !o)}
        className="
          bg-secondary
          border border-gray-300
          rounded-full
          shadow-lg
          p-1
          cursor-pointer
          transition-all duration-200
        "
      >
        {/* Current theme */}
        <div className="text-sm font-medium text-center text-primary">
          {currentLabel}
        </div>

        {/* Dropdown */}
        <div
          className={`
            overflow-hidden
            transition-all duration-200
            flex flex-col
            ${open ? "max-h-40 mt-3" : "max-h-0 mt-0"}
          `}
        >
          {THEMES.filter((t) => t.key !== theme).map((t) => (
            <button
              key={t.key}
              onClick={(e) => {
                e.stopPropagation(); // prevent toggle conflict
                applyTheme(t.key);
              }}
              className="
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
