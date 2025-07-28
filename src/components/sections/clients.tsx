"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image"; // Import Image component

const logos: string[] = [
  "/itc.png",
  "/lilly.png",
  "/Clima.png",
  "/maersk.png",
  "/MERCELL.png",
  "/swiggy.png",
  "/AT.png",
  "/Delhivery.png",
  "/itc.png",
  "/lilly.png",
  "/Clima.png",
  "/maersk.png",
  "/MERCELL.png",
  "/swiggy.png",
  "/AT.png",
  "/Delhivery.png",
  "/itc.png",
  "/lilly.png",
  "/Clima.png",
  "/maersk.png",
  "/MERCELL.png",
  "/swiggy.png",
  "/AT.png",
  "/Delhivery.png",
  "/itc.png",
  "/lilly.png",
  "/Clima.png",
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
      .map((word, i) => {
        const colorClass = i === 0 ? "text-white" : "text-green-400";
        return `<span class="word inline-block mr-2 ${colorClass}">${word}</span>`;
      })
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
      className="relative py-20 px-6 md:px-8"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center space-y-12 w-full">
          <h2 className="text-5xl font-bold text-white font-poppins text-center mb-8">
            <span className="relative inline-block">
              <span className="text-white">Our</span>
              <span className="absolute left-0 bottom-[-6px] h-[2px] w-[150%] bg-green-400"></span>
            </span>
            <span className="text-green-400 ml-2">Clients</span>
          </h2>

          <div className="relative w-full overflow-hidden py-1">
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
