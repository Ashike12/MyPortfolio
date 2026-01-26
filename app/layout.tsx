import "./globals.css";
import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import { JSX } from "react";
import FloatingThemeSwitcher from "./components/FloatingThemeSwitcher";

export const metadata: Metadata = {
  title: "Ashikur Rahman Nabir",
  description: "Senior Software Engineer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const initialTheme = 'theme-one'; 
  return (
    <html lang="en" className={initialTheme}>
      <body className="bg-primary-200 text-gray-900 w-screen !overflow-x-hidden">
        <Navbar />
        <main >{children}</main>
        <FloatingThemeSwitcher />
      </body>
    </html>
  );
}
