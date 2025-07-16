"use client";

import { useEffect, useRef, useState } from "react"; // Import useState
import { gsap } from "gsap";
import { Play } from "lucide-react";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);
  const numberRef = useRef<HTMLDivElement>(null);
  const playButtonRef = useRef<HTMLDivElement>(null);

  // Vanta.js specific refs and state
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
  }, [vantaEffect]); // Re-run effect if vantaEffect changes (e.g., on hot reload)

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const description = descriptionRef.current;
    const number = numberRef.current;
    const playButton = playButtonRef.current;

    if (!section || !title || !description || !number || !playButton) return;

    // Split text into spans for animation
    const titleLines = title.querySelectorAll(".title-line");

    titleLines.forEach((line) => {
      const text = line.textContent || "";
      line.innerHTML = text
        .split("")
        .map(
          (char, i) =>
            `<span style="display: inline-block; transform: translateY(100px); opacity: 0;">${
              char === " " ? "&nbsp;" : char
            }</span>`
        )
        .join("");
    });

    // Initial states
    gsap.set([description, number, playButton], { opacity: 0, y: 50 });

    // Main timeline
    const tl = gsap.timeline({ delay: 3 });

    // Animate title characters
    titleLines.forEach((line, lineIndex) => {
      const chars = line.querySelectorAll("span");
      tl.to(
        chars,
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.02,
          ease: "power3.out",
        },
        lineIndex * 0.2
      );
    });

    // Animate other elements
    tl.to(
      [description, number],
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      },
      "-=0.5"
    ).to(
      playButton,
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
      },
      "-=0.3"
    );

    // Parallax effect on scroll
    gsap.to(title, {
      y: -100,
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    });
  }, []);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center px-6 md:px-8 overflow-hidden "
    >
      {/* Vanta.js background */}
      <div ref={vantaRef} className="absolute inset-0 z-0"></div>

      {/* Section number */}

      {/* Hero text */}
      <div className="text-center max-w-6xl mx-auto z-10">
        <h1
          ref={titleRef}
          className="text-6xl md:text-6xl lg:text-5xl xl:text-7xl font-bold leading-none tracking-tight"
        >
          <div className="title-line mb-2 md:mb-4">Turning Business</div>
          <div className="title-line mb-2 md:mb-4">
            Problems Into Working AI System
          </div>
          <div className="title-line relative">Smart Data. Practical AI</div>
        </h1>
      </div>
    </section>
  );
}
