"use client";

import { useState } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Apps", href: "#apps" },
  { label: "Clients", href: "#clients" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#home" className="text-xl font-bold text-[#0f172a]">
          Bharat<span className="text-[#ff7b00]">Analytica</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-[#111111] transition-colors hover:text-[#ff7b00]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Contact Info & CTA */}
        <div className="hidden items-center gap-4 lg:flex">
          <div className="text-right text-xs text-[#64748b]">
            <p>support@bharatanalytica.com</p>
            <p>+91 888 555 0052</p>
          </div>
          <a
            href="#contact"
            className="rounded-lg bg-[#ff7b00] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#e66e00]"
          >
            Contact Us
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav className="border-t bg-white px-6 py-4 md:hidden">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block py-2 text-sm font-medium text-[#111111]"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-3 inline-block rounded-lg bg-[#ff7b00] px-5 py-2.5 text-sm font-semibold text-white"
            onClick={() => setMobileOpen(false)}
          >
            Contact Us
          </a>
        </nav>
      )}
    </header>
  );
}
