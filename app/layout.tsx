import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";
import Navbar from "./components/Navbar";
import { JSX } from "react";
import FloatingThemeSwitcher from "./components/FloatingThemeSwitcher";
import ScrollToTopButton from "./components/ScrollToTopButton";
import { PROFILE_INFO } from "./const/my-profile-info.constant";
import AnimatedSiteBackground from "./components/AnimatedSiteBackground";

export const metadata: Metadata = {
  title: PROFILE_INFO.ProfileInfo.Name,
  description: PROFILE_INFO.ProfileInfo.Headline,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en" className="theme-one" suppressHydrationWarning>
      <head>
        <Script id="theme-bootstrap" strategy="beforeInteractive">
          {`(() => {
            try {
              const theme = localStorage.getItem("theme");
              if (theme === "theme-two") {
                document.documentElement.classList.remove("theme-one");
                document.documentElement.classList.add("theme-two");
              } else {
                document.documentElement.classList.remove("theme-two");
                document.documentElement.classList.add("theme-one");
              }
            } catch (error) {
              document.documentElement.classList.add("theme-one");
            }
          })();`}
        </Script>
      </head>
      <body className="relative isolate min-h-screen w-full bg-primary text-primary !overflow-x-hidden">
        <AnimatedSiteBackground />
        <Navbar />
        <main>{children}</main>
        <FloatingThemeSwitcher />
        <ScrollToTopButton />
      </body>
    </html>
  );
}
