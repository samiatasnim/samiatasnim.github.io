"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navigation, siteProfile } from "@/content/site";

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-20 transition-all duration-200 ${
        isScrolled
          ? "border-b border-[#1e40af]/15 bg-white/95 shadow-sm backdrop-blur"
          : "border-b border-transparent bg-white"
      }`}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-[1fr_auto] items-center gap-3 px-4 py-3 sm:px-6 lg:grid-cols-[1fr_auto_1fr] lg:px-8 lg:py-4">
        <Link
          href="/"
          className="justify-self-start font-serif text-xl font-semibold leading-tight text-[#1e40af]"
          onClick={() => setIsMenuOpen(false)}
        >
          {siteProfile.name}
        </Link>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded border border-[#1e40af]/30 text-[#1e40af] lg:hidden"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>

        <nav
          className="hidden justify-center lg:flex"
          aria-label="Main navigation"
        >
          <div className="flex items-center justify-center gap-1 rounded border border-[#1d4ed8] bg-[#1e40af] p-1 shadow-sm">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded px-3 py-2 text-sm font-medium text-[#dbeafe] transition hover:bg-white hover:text-[#1e40af]"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>

        <div className="hidden lg:block" />
      </div>

      {isMenuOpen && (
        <nav
          className="border-t border-[#1e40af]/10 bg-white px-4 pb-4 pt-2 lg:hidden"
          aria-label="Mobile navigation"
        >
          <div className="mx-auto grid max-w-7xl gap-1">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="rounded px-3 py-2.5 text-sm font-medium text-[#1e40af] transition hover:bg-[#eff6ff]"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
