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
    const titleWords = title.textContent?.split(" ") || [];
    title.innerHTML = titleWords
      .map((word, i) => {
        const colorClass = i === 0 ? "text-white" : "text-green-400";
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
          <h3 ref={titleRef} className="text-4xl md:text-6xl font-poppins">
            <span className="text-white">About </span>
            <span className="text-green-400">Us</span>
          </h3>
          <div className="w-28 h-0.5 bg-green-400 mb-2"></div>{" "}
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            AI Consulting for Scalable, Production-Ready Solutions
          </p>
        </div>

        <div ref={contentRef} className="space-y-2  ">
          <p className="text-sm md:text-lg text-justify font-bold font-inter leading-relaxed opacity-80">
            Velesium Labs is a leading AI and data consulting firm helping
            startups and enterprises build scalable, production-ready solutions.
          </p>
          <p className="text-sm md:text-lg text-justify font-inter leading-relaxed opacity-80">
            We specialize in applied AI, machine learning, NLP, generative AI,
            and automation — turning prototypes into real-world impact. In a
            world where most AI models never ship, we focus on implementation at
            scale to ensure your investment delivers measurable value. Whether
            it's an MVP or enterprise transformation, we combine deep tech
            expertise with agile execution to turn data into decisions and
            innovation into results.
          </p>
        </div>
      </div>
    </section>
  );
}
