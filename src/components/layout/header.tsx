"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { gsap } from "gsap";
import PageTransition from "./PageTransition";
import { Home } from "lucide-react";

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const [phase, setPhase] = useState<"hidden" | "cover" | "reveal">("hidden");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Hide/Show header on scroll
  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    let lastScrollY = 0;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      gsap.to(header, {
        y: currentScrollY > lastScrollY && currentScrollY > 100 ? -100 : 0,
        duration: 0.3,
        ease: "power2.out",
      });
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navigate with page transition
  const navigate = (href: string) => {
    if (href === pathname) return;
    setIsDropdownOpen(false);
    setPhase("cover");
    setTimeout(() => router.push(href), 1000);
  };

  useEffect(() => {
    if (phase === "cover") {
      setPhase("reveal");
    } else if (phase === "reveal") {
      const timer = setTimeout(() => setPhase("hidden"), 1000);
      return () => clearTimeout(timer);
    }
  }, [pathname]);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <PageTransition phase={phase} />
      <header
        ref={headerRef}
        className="fixed top-0 left-0 right-0 z-40 p-6 md:p-8"
      >
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2 cursor-pointer">
            <div className="h-8 w-8 sm:h-10 sm:w-10 flex items-center justify-center">
              <button onClick={() => navigate("/")}>
                <img
                  src="/Logo_White with c.png"
                  alt="Logo"
                  className="w-full h-full object-contain"
                />
              </button>
            </div>
            <button onClick={() => navigate("/")}>
              <span className="text-3xl tracking-wider font-inter uppercase">
                Velesium Lab
              </span>
            </button>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex font-inter items-center space-x-9">
            <button
              onClick={() => navigate("/Team")}
              className="text-lg font-light hover:text-green-400 transition-colors duration-300 relative group"
            >
              Our Team
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-400 group-hover:w-full transition-all duration-300"></span>
            </button>

            {/* Our Works (Click Dropdown) */}
            <div className="relative group" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen((prev) => !prev)}
                className="text-lg font-light hover:text-green-400 transition-colors duration-300 relative"
              >
                Our Works
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-400 group-hover:w-full transition-all duration-300"></span>
              </button>

              {isDropdownOpen && (
                <div className="absolute left-0 top-full mt-2 flex flex-col min-w-[200px] z-50 bg-black/90 rounded-lg overflow-hidden border border-zinc-700 shadow-lg">
                  <button
                    onClick={() => navigate("/Solutions")}
                    className="text-left px-4 py-2 hover:text-green-400 text-white"
                  >
                    Our Solutions
                  </button>
                  <button
                    onClick={() => navigate("/Products")}
                    className="text-left px-4 py-2 hover:text-green-400 text-white"
                  >
                    Our Products
                  </button>
                  <button
                    onClick={() => navigate("/Blogs")}
                    className="text-left px-4 py-2 hover:text-green-400 text-white"
                  >
                    Blogs
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={() => navigate("/Academy")}
              className="text-lg font-light hover:text-green-400 transition-colors duration-300 relative group"
            >
              Velesium Academy
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-400 group-hover:w-full transition-all duration-300"></span>
            </button>

            <button
              onClick={() => navigate("/Contact")}
              className="text-lg font-light hover:text-green-400 transition-colors duration-300 relative group"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-400 group-hover:w-full transition-all duration-300"></span>
            </button>

            {pathname !== "/" && (
              <button
                onClick={() => navigate("/")}
                className="relative group hover:text-green-300 transition-colors duration-300"
                title="Go to Home"
              >
                <span className="relative flex items-center justify-center w-6 h-6">
                  <Home className="w-5 h-5" />
                  <span className="absolute -bottom-0.5 left-0 h-0.5 w-0 bg-green-400 group-hover:w-full transition-all duration-300"></span>
                </span>
              </button>
            )}
          </div>
        </nav>
      </header>
    </>
  );
}
