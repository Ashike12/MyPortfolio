import "./globals.css";
import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import { JSX } from "react";
import FloatingThemeSwitcher from "./components/FloatingThemeSwitcher";
import ScrollToTopButton from "./components/ScrollToTopButton";
import { PROFILE_INFO } from "./const/my-profile-info.constant";

export const metadata: Metadata = {
  title: PROFILE_INFO.ProfileInfo.Name,
  description: PROFILE_INFO.ProfileInfo.Designation,
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
      <body className="bg-primary text-primary w-screen !overflow-x-hidden">
        <Navbar />
        <main >{children}</main>
        <FloatingThemeSwitcher />
        <ScrollToTopButton />
      </body>
    </html>
  );
}
