"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);
  const [startTyping, setStartTyping] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartTyping(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
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
    }, 7000); // after typing completes
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center px-6"
    >
      <div className="text-center max-w-4xl mx-auto z-10">
        <h1 className="text-5xl font-nowOutline md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-white">
          {startTyping && (
            <Typewriter
              words={["Harness Data That Informs Deploy AI That Performs."]}
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
          Smart Data. Practical AI.
        </div>
      </div>
    </section>
  );
}
