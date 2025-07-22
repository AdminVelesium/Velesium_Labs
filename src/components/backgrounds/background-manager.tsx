"use client";

import { useEffect, useState } from "react";
import AnimatedBackground from "./animated-background";
import GridBackground from "./grid-background";

interface BackgroundManagerProps {
  section?: string;
}

export default function BackgroundManager({
  section = "hero",
}: BackgroundManagerProps) {
  const [currentSection, setCurrentSection] = useState(section);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "hero",
        "about",
        "values",
        "clients",
        "services",
        "contact",
      ];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const sectionName of sections) {
        const element = document.getElementById(sectionName);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setCurrentSection(sectionName);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const renderBackground = () => {
    switch (currentSection) {
      case "hero":
        return (
          <>
            <AnimatedBackground variant="neural" intensity="high" />
            <GridBackground opacity={0.05} animated={true} />
          </>
        );
      case "about":
        return (
          <>
            <AnimatedBackground variant="neural" intensity="high" />
            <GridBackground opacity={0.05} animated={true} />
          </>
        );
      case "values":
        return (
          <>
            <AnimatedBackground variant="neural" intensity="high" />
            <GridBackground opacity={0.05} animated={true} />
          </>
        );
      case "clients":
        return (
          <>
            <AnimatedBackground variant="neural" intensity="high" />
            <GridBackground opacity={0.05} animated={true} />
          </>
        );
      case "services":
        return (
          <>
            <AnimatedBackground variant="neural" intensity="high" />
            <GridBackground opacity={0.05} animated={true} />
          </>
        );
      case "contact":
        return (
          <>
            <AnimatedBackground variant="neural" intensity="high" />
            <GridBackground opacity={0.05} animated={true} />
          </>
        );
      default:
        return (
          <>
            <AnimatedBackground variant="neural" intensity="high" />
            <GridBackground opacity={0.05} animated={true} />
          </>
        );
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {renderBackground()}
    </div>
  );
}
