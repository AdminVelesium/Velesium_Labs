"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const content = contentRef.current;
    const stats = statsRef.current;

    if (!section || !title || !content || !stats) return;

    // Split title into words for animation
    const titleText = title.textContent || "";
    title.innerHTML = titleText
      .split(" ")
      .map((word, i) => {
        const colorClass = i === 1 ? "text-green-400" : "text-white";
        return `<span class="word inline-block mr-2 ${colorClass}">${word}</span>`;
      })
      .join(" ");

    const words = title.querySelectorAll(".word");

    // Animate title words on scroll
    gsap.set(words, { y: 100, opacity: 0 });
    gsap.to(words, {
      scrollTrigger: {
        trigger: section,
        start: "top bottom", // when section enters viewport
        end: "top top", // until it reaches top
        scrub: 1, // makes it smooth
      },
      y: 0,
      opacity: 1,
      stagger: 0.1,
      ease: "power3.out",
    });

    // Animate content children
    gsap.from(content.children, {
      scrollTrigger: {
        trigger: content,
        start: "top 80%",
        end: "bottom 60%",
        scrub: 1,
      },
      y: 60,
      opacity: 0,
      stagger: 0.2,
      ease: "power3.out",
    });

    // Animate stats
    gsap.from(stats.children, {
      scrollTrigger: {
        trigger: stats,
        start: "top 85%",
        end: "bottom 60%",
        scrub: 1,
      },
      y: 40,
      opacity: 0,
      stagger: 0.15,
      ease: "power3.out",
    });

    // Animated counters
    const counters = stats.querySelectorAll(".counter");
    counters.forEach((counter) => {
      const target = Number.parseInt(counter.textContent || "0");
      gsap.fromTo(
        counter,
        { textContent: 0 },
        {
          scrollTrigger: {
            trigger: counter,
            start: "top 90%",
          },
          textContent: target,
          duration: 2,
          ease: "power2.out",
          snap: { textContent: 1 },
        }
      );
    });
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-20 px-6 md:px-8" // changed from h-screen
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 ref={titleRef} className="text-4xl md:text-6xl font-sans">
            About Us
          </h2>

          <div className="w-20 h-0.5 bg-green-400 mb-8"></div>
        </div>

        <div ref={contentRef} className="space-y-4">
          <p className="text-lg md:text-xl font-light font-poppins leading-relaxed opacity-80">
            Our expert team designs, implements, and operationalizes AI
            solutions that solve real business problems. With a focus on
            execution, automation, and scale, we reduce resource waste, maximize
            ROI, and consistently deliver businesses high implementation success
            rates.
          </p>
        </div>
      </div>
    </section>
  );
}
