import "./globals.css";
import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import { JSX } from "react";

export const metadata: Metadata = {
  title: "Ashikur Rahman Nabir",
  description: "Senior Software Engineer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 w-full">
        <Navbar />
        <main >{children}</main>
      </body>
    </html>
  );
}
