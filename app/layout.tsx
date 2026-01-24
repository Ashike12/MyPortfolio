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
      <body className="bg-white text-gray-900 w-screen !overflow-x-hidden">
        <Navbar />
        <main >{children}</main>
      </body>
    </html>
  );
}
