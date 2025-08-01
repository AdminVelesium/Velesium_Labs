"use client";

import { useEffect, useRef } from "react";
import { Instagram, Twitter, Dribbble, Linkedin } from "lucide-react";

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  return (
    <footer
      ref={footerRef}
      className="border-t border-white/20 px-6 md:px-8 py-12"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-8 md:mb-0">
            <div className="h-8 w-8 sm:h-10 sm:w-10 flex items-center justify-center">
              <a href="/">
                <img
                  src="/Logo_White with c.png"
                  alt="Logo"
                  className="w-full h-full object-contain"
                />
              </a>
            </div>
            <a>
              <span className="text-3xl tracking-wider font-urbanist uppercase">
                Velesium Labs
              </span>
            </a>
          </div>

          <div className="flex space-x-6">
            <Instagram className="w-5 h-5 hover:text-green-400 transition-colors cursor-pointer magnetic-button" />
            <Twitter className="w-5 h-5 hover:text-green-400 transition-colors cursor-pointer magnetic-button" />
            <Linkedin className="w-5 h-5 hover:text-green-400 transition-colors cursor-pointer magnetic-button" />
          </div>
        </div>

        <div className="text-center mt-8 pt-8 border-t border-white/20">
          <p className="text-sm opacity-60">
            © 2024 Velesium Labs . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
