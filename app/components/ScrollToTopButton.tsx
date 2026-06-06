"use client";

import { useEffect, useState } from "react";
import IconScrollTop from "@/public/assets/icons/scroll-top";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      data-site-chrome="scrolltop"
      className={`
        cursor-pointer
        fixed bottom-14 right-6 z-10
        w-10 h-10 rounded-full
        bg-secondary
        shadow-lg
        flex items-center justify-center
        transition-all duration-300 ease-out
        ${visible ? "opacity-100 scale-100" : "opacity-0 scale-75 pointer-events-none"}
      `}
    >
      <div className="arrow-float">
        <IconScrollTop className="text-[var(--color-primary-text)]" size={24} />
      </div>
    </button>
  );
}
