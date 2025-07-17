"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);
  const numberRef = useRef<HTMLDivElement>(null); // Still defined if you want to use it
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState<any>(null);

  useEffect(() => {
    // Vanta.js integration
    if (typeof window === "undefined" || vantaEffect) return;

    const loadVanta = async () => {
      const loadScript = (src: string) =>
        new Promise((resolve, reject) => {
          const script = document.createElement("script");
          script.src = src;
          script.async = true;
          script.onload = resolve;
          script.onerror = reject;
          document.body.appendChild(script);
        });

      try {
        await loadScript(
          "https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"
        );
        await loadScript(
          "https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.0/p5.min.js"
        );
        await loadScript(
          "https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.topology.min.js"
        );

        const VANTA = (window as any).VANTA;
        if (VANTA?.TOPOLOGY && vantaRef.current) {
          const effect = VANTA.TOPOLOGY({
            el: vantaRef.current,
            mouseControls: false, // ✅ turn these off for performance
            touchControls: false,
            gyroControls: false,
            minHeight: 200.0,
            minWidth: 200.0,
            scale: 1.0,
            scaleMobile: 1.0,
            color: 0x0ab80a, // Green color
            backgroundColor: 0x000000, // Black background
            maxFrameRate: 30,
          });
          setVantaEffect(effect);
        }
      } catch (error) {
        console.error("Failed to load Vanta.js scripts:", error);
      }
    };

    loadVanta();

    // Cleanup Vanta effect on component unmount
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  useEffect(() => {
    if (!descriptionRef.current || !numberRef.current) return;

    gsap.set([descriptionRef.current, numberRef.current], {
      opacity: 0,
      y: 50,
    });

    const tl = gsap.timeline({ delay: 4 });

    tl.to(
      [descriptionRef.current, numberRef.current],
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      },
      0
    );
  }, []);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative h-screen flex items-center justify-center px-6 md:px-8 overflow-hidden"
    >
      {/* Vanta background */}
      <div ref={vantaRef} className="absolute inset-0 z-0" />

      {/* Content */}
      <div className="text-center max-w-4xl mx-auto z-10">
        <h1 className="text-5xl font-nowOutline md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-white">
          <Typewriter
            words={["Turning Business Problems...", "Into Working AI Systems."]}
            loop={false}
            cursor
            cursorStyle="_"
            typeSpeed={50}
            deleteSpeed={20}
            delaySpeed={1500}
          />
        </h1>

        {/* Optional Description */}
        <div
          ref={descriptionRef}
          className="mt-6 font-nowOutline text-4xl text-gray-300 max-w-xl mx-auto"
        >
          Smart Data. Practical AI.
        </div>
      </div>
    </section>
  );
}
