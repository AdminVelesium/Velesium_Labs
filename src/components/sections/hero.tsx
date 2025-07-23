"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);
  const [startTyping, setStartTyping] = useState(false);
  const [showDescription, setShowDescription] = useState(false);

  useEffect(() => {
    const hasSeenHero = sessionStorage.getItem("hasSeenHero");

    if (!hasSeenHero) {
      // First visit: respect loading screen delay
      const typeTimer = setTimeout(() => {
        setStartTyping(true);
      }, 4000);

      const descTimer = setTimeout(() => {
        animateDescription();
        setShowDescription(true);
      }, 7000);

      sessionStorage.setItem("hasSeenHero", "true");

      return () => {
        clearTimeout(typeTimer);
        clearTimeout(descTimer);
      };
    } else {
      // Already visited once — skip delays
      setStartTyping(true);
      setShowDescription(true);
      animateDescription();
    }
  }, []);

  const animateDescription = () => {
    if (!descriptionRef.current) return;

    gsap.fromTo(
      descriptionRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
      }
    );
  };

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center px-6"
    >
      <div className="text-center max-w-6xl mx-auto z-10">
        <h1 className="text-5xl font-nowOutline md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-white whitespace-pre-line">
          {startTyping && (
            <Typewriter
              words={["Harness Data That Informs.\n Deploy AI That Performs."]}
              typeSpeed={50}
              cursor
              cursorStyle="_"
            />
          )}
        </h1>

        <div
          ref={descriptionRef}
          style={{ opacity: 0 }}
          className="mt-6 font-nowOutline text-6xl text-green-400 whitespace-nowrap mx-auto"
        >
          {showDescription && "Smart Data. Practical AI."}
        </div>
      </div>
    </section>
  );
}
