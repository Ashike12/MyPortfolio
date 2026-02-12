"use client";

import { useEffect, useState } from "react";

const THEMES = [
  { key: "theme-one", label: "light" },
  { key: "theme-two", label: "dark" },
  { key: "theme-three", label: "other" },
] as const;

export default function FloatingThemeSwitcher() {
  const [theme, setTheme] = useState("theme-one");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme") || "theme-one";
    setTheme(saved);
    document.documentElement.className = saved;
  }, []);

  const applyTheme = (newTheme: string) => {
    document.documentElement.className = newTheme;
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    setOpen(false); // close after selection
  };

  const currentLabel =
    THEMES.find((t) => t.key === theme)?.label ?? "Theme";

  return (
    <div className="fixed bottom-4 right-4 z-50 w-14">
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
