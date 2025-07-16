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

    // Split title text
    const titleText = title.textContent || "";
    title.innerHTML = titleText
      .split(" ")
      .map((word) => `<span class="word">${word}</span>`)
      .join(" ");

    const words = title.querySelectorAll(".word");
    gsap.set(words, { y: 100, opacity: 0 });

    // Animation timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 70%",
        end: "bottom 30%",
        toggleActions: "play none none reverse",
      },
    });

    tl.to(words, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.out",
    })
      .from(
        content.children,
        {
          y: 50,
          opacity: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
        },
        "-=0.3"
      )
      .from(
        stats.children,
        {
          y: 30,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
        },
        "-=0.5"
      );

    // Counter animation
    const counters = stats.querySelectorAll(".counter");
    counters.forEach((counter) => {
      const target = Number.parseInt(counter.textContent || "0");
      gsap.from(counter, {
        textContent: 0,
        duration: 2,
        ease: "power2.out",
        snap: { textContent: 1 },
        scrollTrigger: {
          trigger: counter,
          start: "top 80%",
        },
      });
    });
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative min-h-screen flex items-center px-6 md:px-8 py-0 pt-10"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2
            ref={titleRef}
            className="text-4xl md:text-6xl font-bold mb-8 leading-tight"
          >
            About Us
          </h2>
          <div className="w-20 h-0.5 bg-orange-400 mb-8"></div>
        </div>

        <div ref={contentRef} className="space-y-8">
          <p className="text-lg md:text-xl font-light leading-relaxed opacity-80">
            Our expert team designs, implements, and operationalizes AI
            solutions that solve real business problems. With a focus on
            execution, automation, and scale, we reduce resource waste, maximize
            ROI, and consistently deliver businesses high implementation success
            rates.
          </p>

          <div ref={statsRef} className="grid grid-cols-2 gap-8 pt-8">
            <div>
              <div className="text-4xl font-bold mb-2">
                <span className="counter">50</span>+
              </div>
              <div className="text-sm opacity-60">PROJECTS COMPLETED</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">
                <span className="counter">5</span>+
              </div>
              <div className="text-sm opacity-60">YEARS EXPERIENCE</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
