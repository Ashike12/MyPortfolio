"use client";

import Link from "next/link";
import { JSX, useState } from "react";

type NavItemProps = {
  href: string;
  label: string;
  onClick?: () => void;
};

export default function Navbar(): JSX.Element {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur border-b border-gray-200">
      <div className=" mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo / Name */}
        <Link href="/" className="text-xl font-bold">
          Ashikur Rahman Nabir
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <NavItem href="#home" label="Home" />
          <NavItem href="#skills" label="Skills" />
          <NavItem href="#tools" label="Tools" />
          <NavItem href="#experiences" label="Experiences" />
          <NavItem href="#projects" label="Projects" />
          <NavItem href="#education" label="Education" />
        </nav>

        {/* Mobile Menu Button */}
        <button
          aria-label="Toggle Menu"
          className="md:hidden text-2xl"
          onClick={() => setOpen((prev) => !prev)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <nav className="flex flex-col p-4 gap-4">
            <NavItem href="#home" label="Home"/>
            <NavItem href="#skills" label="Skills"/>
            <NavItem href="#tools" label="Tools" />
            <NavItem href="#experiences" label="Experiences"/>
            <NavItem href="#projects" label="Projects"/>
            <NavItem href="#education" label="Education"/>
          </nav>
        </div>
      )}
    </header>
  );
}

function NavItem({ href, label, onClick }: NavItemProps): JSX.Element {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="text-gray-700 hover:text-blue-500 transition-colors"
    >
      {label}
    </Link>
  );
}
