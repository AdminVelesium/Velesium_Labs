"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { gsap } from "gsap";
import PageTransition from "./PageTransition";

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const [phase, setPhase] = useState<"hidden" | "cover" | "reveal">("hidden");

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

  const navigate = (href: string) => {
    if (href === pathname) return;
    setPhase("cover");
    setTimeout(() => router.push(href), 1000); // navigate after cover down
  };

  useEffect(() => {
    if (phase === "cover") {
      setPhase("reveal"); // start reveal after routing
    } else if (phase === "reveal") {
      const timer = setTimeout(() => setPhase("hidden"), 1000);
      return () => clearTimeout(timer);
    }
  }, [pathname]);

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
            {[
              { href: "/About", label: "About Us" },
              { href: "/Works", label: "Our Works" },
              { href: "/Blogs", label: "Blogs" },
              { href: "/Contact", label: "Contact" },
              { href: "/Academy", label: "Velesium Academy" },
            ].map((link) => (
              <button
                key={link.href}
                onClick={() => navigate(link.href)}
                className="text-lg font-light hover:text-green-400 transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-400 group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </div>
        </nav>
      </header>
    </>
  );
}
