"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navigation, siteProfile } from "@/content/site";

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);

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
      <div className="mx-auto grid max-w-7xl items-center gap-3 px-4 py-4 sm:px-6 lg:grid-cols-[1fr_auto_1fr] lg:px-8">
        <Link
          href="/"
          className="justify-self-start font-serif text-xl font-semibold leading-tight text-[#1e40af]"
        >
          {siteProfile.name}
        </Link>
        <nav className="flex w-full justify-center overflow-x-auto lg:w-auto" aria-label="Main navigation">
          <div className="flex min-w-max items-center justify-center gap-1 rounded border border-[#1d4ed8] bg-[#1e40af] p-1 shadow-sm">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded px-3 py-2 text-sm font-medium text-[#dbeafe] transition hover:bg-[#fffdf8] hover:text-[#1e40af]"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
        <div className="hidden lg:block" />
      </div>
    </header>
  );
}
