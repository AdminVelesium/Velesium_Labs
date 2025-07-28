"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { gsap } from "gsap";
import PageTransition from "./PageTransition";
import { Home, Menu } from "lucide-react";

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const desktopDropdownRef = useRef<HTMLDivElement>(null);
  const mobileDropdownRef = useRef<HTMLDivElement>(null);

  const [phase, setPhase] = useState<"hidden" | "cover" | "reveal">("hidden");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Scroll hide/show logic
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

  // Page transition logic
  const navigate = (href: string) => {
    if (href === pathname) return;
    setIsDropdownOpen(false); // Close mobile menu if open
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
      const target = event.target as Node;
      const isOutsideDesktop =
        desktopDropdownRef.current &&
        !desktopDropdownRef.current.contains(target);
      const isOutsideMobile =
        mobileDropdownRef.current &&
        !mobileDropdownRef.current.contains(target);

      if (isOutsideDesktop && isOutsideMobile) {
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
              <span className="text-3xl tracking-wider font-urbanist uppercase">
                Velesium Labs
              </span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex font-inter items-center space-x-9">
            <button
              onClick={() => navigate("/Team")}
              className={`text-lg font-light transition-colors duration-300 relative group ${
                pathname === "/Team" ? "text-green-400" : "hover:text-green-400"
              }`}
            >
              Our Team
              <span
                className={`absolute bottom-0 left-0 h-0.5 transition-all duration-300 ${
                  pathname === "/Team"
                    ? "w-full bg-green-400"
                    : "w-0 bg-green-400 group-hover:w-full"
                }`}
              ></span>
            </button>

            {/* Our Works Dropdown */}
            <div className="relative group">
              <button
                onClick={() => setIsDropdownOpen((prev) => !prev)}
                className={`text-lg font-light transition-colors duration-300 relative ${
                  ["/Solutions", "/Products", "/Blogs"].includes(pathname)
                    ? "text-green-400"
                    : "hover:text-green-400"
                }`}
              >
                Our Works
                <span
                  className={`absolute bottom-0 left-0 h-0.5 transition-all duration-300 ${
                    ["/Solutions", "/Products", "/Blogs"].includes(pathname)
                      ? "w-full bg-green-400"
                      : "w-0 bg-green-400 group-hover:w-full"
                  }`}
                ></span>
              </button>

              {isDropdownOpen && (
                <div
                  ref={desktopDropdownRef}
                  className="absolute left-0 top-full mt-2 flex flex-col min-w-[200px] z-50 bg-black/90 rounded-lg overflow-hidden border border-zinc-700 shadow-lg"
                >
                  <button
                    onClick={() => navigate("/Solutions")}
                    className={`text-left px-4 py-2 ${
                      pathname === "/Solutions"
                        ? "text-green-400"
                        : "text-white hover:text-green-400"
                    }`}
                  >
                    Our Solutions
                  </button>
                  <button
                    onClick={() => navigate("/Products")}
                    className={`text-left px-4 py-2 ${
                      pathname === "/Products"
                        ? "text-green-400"
                        : "text-white hover:text-green-400"
                    }`}
                  >
                    Our Products
                  </button>
                  <button
                    onClick={() => navigate("/Blogs")}
                    className={`text-left px-4 py-2 ${
                      pathname === "/Blogs"
                        ? "text-green-400"
                        : "text-white hover:text-green-400"
                    }`}
                  >
                    Blogs
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={() => navigate("/Academy")}
              className={`text-lg font-light transition-colors duration-300 relative group ${
                pathname === "/Academy"
                  ? "text-green-400"
                  : "hover:text-green-400"
              }`}
            >
              Velesium Academy
              <span
                className={`absolute bottom-0 left-0 h-0.5 transition-all duration-300 ${
                  pathname === "/Academy"
                    ? "w-full bg-green-400"
                    : "w-0 bg-green-400 group-hover:w-full"
                }`}
              ></span>
            </button>

            <button
              onClick={() => navigate("/Contact")}
              className={`text-lg font-light transition-colors duration-300 relative group ${
                pathname === "/Contact"
                  ? "text-green-400"
                  : "hover:text-green-400"
              }`}
            >
              Contact
              <span
                className={`absolute bottom-0 left-0 h-0.5 transition-all duration-300 ${
                  pathname === "/Contact"
                    ? "w-full bg-green-400"
                    : "w-0 bg-green-400 group-hover:w-full"
                }`}
              ></span>
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

          {/* Mobile Menu */}
          <div className="md:hidden relative">
            <button
              onClick={() => setIsDropdownOpen((prev) => !prev)}
              className="text-white"
            >
              <Menu className="w-7 h-7" />
            </button>

            {isDropdownOpen && (
              <div
                ref={mobileDropdownRef}
                className="absolute right-0 top-full mt-2 w-48 bg-black/90 border border-zinc-700 rounded-lg shadow-lg z-50 flex flex-col"
              >
                {[
                  { label: "Our Team", path: "/Team" },
                  { label: "Our Solutions", path: "/Solutions" },
                  { label: "Our Products", path: "/Products" },
                  { label: "Blogs", path: "/Blogs" },
                  { label: "Velesium Academy", path: "/Academy" },
                  { label: "Contact", path: "/Contact" },
                ].map((item) => (
                  <button
                    key={item.path}
                    onClick={() => navigate(item.path)}
                    className={`px-4 py-2 text-left ${
                      pathname === item.path
                        ? "text-green-400"
                        : "text-white hover:text-green-400"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
                {pathname !== "/" && (
                  <button
                    onClick={() => navigate("/")}
                    className="px-4 py-2 text-left text-white hover:text-green-400"
                  >
                    Home
                  </button>
                )}
              </div>
            )}
          </div>
        </nav>
      </header>
    </>
  );
}
