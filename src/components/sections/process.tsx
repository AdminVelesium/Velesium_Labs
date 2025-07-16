"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image"; // Import Image component

const logos: string[] = [
  "/itc.png",
  "/lilly.png",
  "/maersk.png",
  "/MERCELL.png",
  "/swiggy.png",
  "/AT.png",
  "/Delhivery.png",
  "/itc.png",
  "/lilly.png",
  "/maersk.png",
  "/MERCELL.png",
  "/swiggy.png",
  "/AT.png",
  "/Delhivery.png",
  "/itc.png",
  "/lilly.png",
  "/maersk.png",
  "/MERCELL.png",
  "/swiggy.png",
  "/AT.png",
  "/Delhivery.png",
  "/itc.png",
  "/lilly.png",
  "/maersk.png",
  "/MERCELL.png",
  "/swiggy.png",
  "/AT.png",
  "/Delhivery.png",
];

export default function Clients() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;

    if (!section || !title) return;

    // Title animation
    const titleWords = title.textContent?.split(" ") || [];
    title.innerHTML = titleWords
      .map((word) => `<span class="word">${word}</span>`)
      .join(" ");

    const words = title.querySelectorAll(".word");
    gsap.set(words, { y: 100, opacity: 0 });

    gsap.to(words, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: title,
        start: "top 80%",
      },
    });
  }, []);

  return (
    <section
      id="process"
      ref={sectionRef}
      className="relative min-h-screen flex items-center px-6 md:px-8 py-0 pt-10"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center space-y-12 w-full">
          <h2 ref={titleRef} className="text-4xl md:text-6xl font-bold">
            <span className="text-white">Our </span>
            <span className="text-green-400">Clients</span>
          </h2>
          <div className="relative w-full overflow-hidden py-8">
            <div className="flex gap-12 animate-marquee whitespace-nowrap px-10">
              {logos.map((src, index) => (
                <Image
                  key={index}
                  src={src || "/placeholder.svg"}
                  alt={`Client ${index}`}
                  width={128}
                  height={64}
                  className="w-32 h-16 object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
