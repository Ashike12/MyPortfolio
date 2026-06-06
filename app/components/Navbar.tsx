"use client";

import Link from "next/link";
import { JSX, useState } from "react";
import { FiDownload, FiMenu, FiX } from "react-icons/fi";

type NavItemProps = {
  href: string;
  label: string;
  onClick?: () => void;
};

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#skills", label: "Skills" },
  { href: "#tools", label: "Tools" },
  { href: "#experiences", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
];

export default function Navbar(): JSX.Element {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <header
      data-site-chrome="nav"
      className="fixed left-0 top-0 z-50 w-screen border-b border-[var(--color-primary-border)] bg-[var(--color-header-bg)] backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-lg font-black tracking-wide text-primary">
          Ashikur Rahman Nabir
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <nav className="flex items-center gap-6">
            {navItems.map((item) => (
              <NavItem key={item.href} href={item.href} label={item.label} />
            ))}
          </nav>
          <a
            href="./assets/pdf/ashikur_rahman.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5"
          >
            <FiDownload size={16} />
            Resume
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-primary-border)] bg-white/5 text-xl text-primary md:hidden"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {open && (
        <div className="border-t border-[var(--color-primary-border)] bg-[var(--color-primary-bg)] md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-4 sm:px-6">
            {navItems.map((item) => (
              <NavItem
                key={item.href}
                href={item.href}
                label={item.label}
                onClick={() => setOpen(false)}
              />
            ))}
            <a
              href="./assets/pdf/ashikur_rahman.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-secondary px-4 py-3 text-sm font-semibold text-white"
            >
              <FiDownload size={16} />
              Resume
            </a>
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
      className="text-sm font-medium text-primary transition-colors hover:text-secondary"
    >
      {label}
    </Link>
  );
}
