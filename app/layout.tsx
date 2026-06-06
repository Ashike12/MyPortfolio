import "./globals.css";
import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import { JSX } from "react";
import FloatingThemeSwitcher from "./components/FloatingThemeSwitcher";
import ScrollToTopButton from "./components/ScrollToTopButton";
import { PROFILE_INFO } from "./const/my-profile-info.constant";

export const metadata: Metadata = {
  title: PROFILE_INFO.ProfileInfo.Name,
  description: PROFILE_INFO.ProfileInfo.Headline,
};

function getThemeByLocalTime(): string {
  const hour = new Date().getHours();

  if (hour >= 6 && hour < 18) {
    return 'theme-one';
  }

  return 'theme-two';
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const initialTheme = getThemeByLocalTime(); 
  return (
    <html lang="en" className={initialTheme}>
      <body className="relative isolate min-h-screen w-full bg-primary text-primary !overflow-x-hidden">
        <div data-site-background aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
          <div className="portfolio-animated-bg absolute inset-0" />
          <div className="portfolio-soft-vignette absolute inset-0" />
          <div className="portfolio-orb portfolio-orb-one absolute" />
          <div className="portfolio-orb portfolio-orb-two absolute" />
          <div className="portfolio-orb portfolio-orb-three absolute" />
          <div className="portfolio-orb portfolio-orb-four absolute hidden md:block" />
        </div>
        <Navbar />
        <main>{children}</main>
        <FloatingThemeSwitcher />
        <ScrollToTopButton />
      </body>
    </html>
  );
}
