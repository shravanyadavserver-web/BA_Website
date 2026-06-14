"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const navItems = [
  { label: "Home", href: "#home" },  
  { label: "Services", href: "#services" },
  { label: "About Us", href: "#about" },
  { label: "App's", href: "#apps" },
  { label: "Clients", href: "#clients" },
  { label: "Contact Us", href: "#contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        }
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );

    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex h-[80px] max-w-[1440px] items-center justify-between px-[50px]">
        {/* Logo */}
        <a href="#home" className="flex-shrink-0">
          <Image src="/images/logo.svg" alt="Bharat Analytica" width={120} height={40} />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-[33px] md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-[14px] font-medium transition-colors hover:text-[#ff7b00] ${
                activeSection === item.href ? "text-[#ff7b00]" : "text-[#111111]"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Contact Info Pills */}
        <div className="hidden items-center gap-[5px] lg:flex">
          <div className="flex items-center gap-2 rounded-[35px] border border-gray-200 px-3 py-2">
            <Image src="/images/icon-email.svg" alt="" width={16} height={16} />
            <span className="text-[13px] text-[#111111]">support@bharatanalytica.com</span>
          </div>
          <div className="flex items-center gap-2 rounded-[35px] border border-gray-200 px-3 py-2">
            <Image src="/images/icon-phone.svg" alt="" width={16} height={16} />
            <span className="text-[13px] text-[#111111]">+91 888 555 1660</span>
          </div>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
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
              className="block py-2 text-base text-[#111111]"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
