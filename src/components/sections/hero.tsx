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
      const typeTimer = setTimeout(() => setStartTyping(true), 4000);
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
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );
  };

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative flex flex-col justify-center min-h-[75vh] md:min-h-screen px-4 sm:px-6 py-8 sm:py-16"
    >
      <div className="text-center max-w-6xl mx-auto z-10">
        <h1 className="text-5xl font-poppins md:text-6xl lg:text-7xl  leading-tight tracking-tight text-white whitespace-pre-line">
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
          className="mt-4 sm:mt-6 text-green-400 text-2xl sm:text-3xl md:text-5xl font-poppins"
        >
          {showDescription && "Smart Data. Practical AI."}
        </div>
      </div>
    </section>
  );
}
