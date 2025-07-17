"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Header() {
  const headerRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const header = headerRef.current;
    const logo = logoRef.current;
    const nav = navRef.current;

    if (!header || !logo || !nav) return;

    // Header hide/show on scroll
    let lastScrollY = 0;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        gsap.to(header, { y: -100, duration: 0.3, ease: "power2.out" });
      } else {
        gsap.to(header, { y: 0, duration: 0.3, ease: "power2.out" });
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      gsap.to(window, {
        duration: 1.5,
        scrollTo: { y: element, offsetY: 0 },
        ease: "power3.inOut",
      });
    }
  };

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 right-0 z-40 p-6 md:p-8"
    >
      <nav className="flex items-center justify-between">
        {/* Logo */}
        <div
          ref={logoRef}
          className="flex items-center space-x-2 cursor-pointer"
        >
          <div className="h-8 w-8 sm:h-10 sm:w-10 flex items-center justify-center">
            <a href="/">
              <img
                src="/Logo_White with c.png"
                alt="Logo"
                className="w-full h-full object-contain"
              />
            </a>
          </div>
          <a href="/">
            <span className="text-3xl tracking-wider font-inter uppercase">
              Velesium Lab
            </span>
          </a>
        </div>

        {/* Navigation */}
        <div
          ref={navRef}
          className="hidden md:flex font-inter items-center space-x-9"
        >
          <a
            href="/About"
            className="text-lg font-light hover:text-green-400 transition-colors duration-300 relative group"
          >
            About Us
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-400 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a
            href="/Works"
            className="text-lg font-light hover:text-green-400 transition-colors duration-300 relative group"
          >
            Our Works
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-400 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a
            href="/Blogs"
            className="text-lg font-light hover:text-green-400 transition-colors duration-300 relative group"
          >
            Blogs
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-400 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a
            href="/Contact"
            className="text-lg font-light hover:text-green-400 transition-colors duration-300 relative group"
          >
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-400 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a
            href="/Academy"
            className="text-lg font-light hover:text-green-400 transition-colors duration-300 relative group"
          >
            Velesium Academy
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-400 group-hover:w-full transition-all duration-300"></span>
          </a>
        </div>
      </nav>
    </header>
  );
}
