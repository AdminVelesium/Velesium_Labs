"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const sections = ["hero", "about", "works", "process", "team", "contact"];

export default function SectionIndicators() {
  const [activeSection, setActiveSection] = useState(0);
  const indicatorsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const indicators = indicatorsRef.current;
    if (!indicators) return;

    // Animate indicators on load
    gsap.from(indicators.children, {
      x: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      delay: 3,
      ease: "power3.out",
    });

    // Track active section
    sections.forEach((sectionId, index) => {
      ScrollTrigger.create({
        trigger: `#${sectionId}`,
        start: "top 50%",
        end: "bottom 50%",
        onEnter: () => setActiveSection(index),
        onEnterBack: () => setActiveSection(index),
      });
    });
  }, []);

  const scrollToSection = (index: number) => {
    const element = document.getElementById(sections[index]);
    if (element) {
      gsap.to(window, {
        duration: 1.5,
        scrollTo: { y: element, offsetY: 0 },
        ease: "power3.inOut",
      });
    }
  };

  return (
    <div
      ref={indicatorsRef}
      className="fixed right-14 top-1/2 -translate-y-1/2 z-40 space-y-4"
    >
      {sections.map((_, index) => (
        <button
          key={index}
          onClick={() => scrollToSection(index)}
          className={`w-2 h-2 rounded-full transition-all duration-300 magnetic-button ${
            activeSection === index ? "bg-green-400 scale-125" : "bg-white/30"
          }`}
        />
      ))}
    </div>
  );
}
