"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const fonts = ["font-nowOutline", "font-jakarta"];

export default function LoadingScreen() {
  const overlayRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const subtextRef = useRef<HTMLDivElement>(null);
  const counterWrapperRef = useRef<HTMLDivElement>(null);

  const [fontIndex, setFontIndex] = useState(0);

  // Cycle through fonts for "NOW"
  useEffect(() => {
    const interval = setInterval(() => {
      setFontIndex((prev) => (prev + 1) % fonts.length);
    }, 600); // Change every 600ms

    return () => clearInterval(interval);
  }, []);

  // Animate loading
  useEffect(() => {
    const overlay = overlayRef.current;
    const counter = counterRef.current;
    const counterWrap = counterWrapperRef.current;
    const text = textRef.current;
    const subtext = subtextRef.current;

    if (!overlay || !counter || !text || !subtext || !counterWrap) return;

    const tl = gsap.timeline();

    // Animate all elements in together
    tl.from([counterWrap, ...text.children, subtext], {
      y: 80,
      opacity: 0,
      stagger: 0.15,
      duration: 1.2,
      ease: "power3.out",
    });

    // Start counter after entrance
    tl.fromTo(
      counter,
      { innerText: 0 },
      {
        innerText: 100,
        duration: 3,
        ease: "none",
        snap: { innerText: 1 },
        onUpdate: () => {
          const value = Math.round(Number(counter.innerText));
          counter.innerHTML = value.toString();
        },
      },
      "-=1.2" // start counting as everything is animating in
    );

    // Slide overlay out
    tl.to(overlay, {
      y: "-100%",
      duration: 2,
      ease: "power4.inOut",
    });
  }, []);

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 bg-black text-white flex flex-col items-start justify-center p-10 space-y-10"
    >
      {/* Top counter */}
      <div ref={counterWrapperRef} className="text-3xl italic font-playfair">
        <span ref={counterRef}>0</span> - 100
      </div>

      {/* Main text */}
      <div
        ref={textRef}
        className="leading-none text-5xl md:text-7xl font-sans font-bold space-y-2"
      >
        <div>Velesium Labs</div>
        <div>
          IS LOADING RIGHT{" "}
          <span
            className={`text-7xl text-outline tracking-wide uppercase ${fonts[fontIndex]}`}
          >
            NOW
          </span>
        </div>
      </div>

      {/* Subtext */}
      <div ref={subtextRef} className="mt-10 text-sm text-white/70">
        Please wait
        <br />a few seconds.
      </div>
    </div>
  );
}
