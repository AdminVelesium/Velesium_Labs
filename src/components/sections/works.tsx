"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { gsap } from "gsap";
import { motion } from "framer-motion";

const values = [
  {
    title: "Stringent Privacy & Security",
    desc: "Protecting data and upholding rigorous security practices are non‑negotiable in all our work.",
  },
  {
    title: "First‑Principles Thinking",
    desc: "We tackle problems at their core, stripping away assumptions to arrive at truly innovative solutions.",
  },
  {
    title: "Bias for Action",
    desc: "We believe in moving quickly, iterating often, and taking action rather than waiting for perfect conditions.",
  },
  {
    title: "Long‑Term Mindset",
    desc: "We look beyond immediate wins to create lasting value, helping our clients sustain growth and success over time.",
  },
  {
    title: "Client Obsession",
    desc: "We treat each client's objectives as if they were our own, immersing ourselves in their challenges and aspirations.",
  },
];

// Fixed layout positions (center + four around)
const positions = [
  { x: -340, y: -180 }, // Far top-left
  { x: 340, y: -180 }, // Far top-right
  { x: 0, y: 0 }, // Center
  { x: -340, y: 220 }, // Far bottom-left
  { x: 340, y: 220 }, // Far bottom-right
];

export default function Values() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [order, setOrder] = useState([0, 1, 2, 3, 4]); // Initial order of values
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Function to rotate the values
  const rotateValues = useCallback(() => {
    setOrder((prevOrder) => {
      const newOrder = [...prevOrder];
      // Shift the array to rotate which value is in the center (index 2)
      const firstElement = newOrder.shift();
      if (firstElement !== undefined) {
        newOrder.push(firstElement);
      }
      return newOrder;
    });
  }, []);

  // Function to start/reset the auto-rotation timer
  const startAutoRotation = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(rotateValues, 7000); // Rotate every 7 seconds
  }, [rotateValues]);

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

    // Start auto-rotation when component mounts
    startAutoRotation();

    // Cleanup interval on component unmount
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [startAutoRotation]);

  const handleClick = (clickedPosIdx: number) => {
    // Pause auto-rotation temporarily
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    setOrder((prevOrder) => {
      const newOrder = [...prevOrder];
      const clickedValueIdx = prevOrder[clickedPosIdx];

      // Find the current index of the clicked value in the `values` array
      // (This part of the logic was slightly over-complicated, simplifying for direct rotation)
      const currentOrderIndex = newOrder.indexOf(clickedValueIdx);
      const shiftsNeeded =
        (2 - currentOrderIndex + newOrder.length) % newOrder.length;

      // Perform the shifts
      for (let i = 0; i < shiftsNeeded; i++) {
        const firstElement = newOrder.shift();
        if (firstElement !== undefined) {
          newOrder.push(firstElement);
        }
      }
      return newOrder;
    });

    // Resume auto-rotation after a short delay
    setTimeout(startAutoRotation, 3000); // Resume after 3 seconds
  };

  return (
    <section
      id="works"
      ref={sectionRef}
      className="relative min-h-screen flex items-center px-6 md:px-8 py-0 pt-10"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="space-y-8">
          <h3
            ref={titleRef}
            className="text-5xl font-bold text-white text-center mb-2 md:mb-4"
          >
            <span className="text-white">Our </span>
            <span className="text-green-400">Values</span>
          </h3>

          <div className="relative w-full h-[600px] flex items-center justify-center -mt-4 md:-mt-6">
            {order.map((valIdx, posIdx) => {
              const value = values[valIdx];
              const isCenter = posIdx === 2;
              return (
                <motion.div
                  key={valIdx}
                  animate={{
                    x: positions[posIdx].x,
                    y: positions[posIdx].y,
                    scale: isCenter ? 1.15 : 1,
                    zIndex: isCenter ? 10 : 1,
                  }}
                  // Adjusted stiffness and damping for smoother motion
                  transition={{ type: "spring", stiffness: 150, damping: 30 }}
                  onClick={() => handleClick(posIdx)}
                  className={`absolute w-72 p-6 rounded-xl cursor-pointer ${
                    isCenter
                      ? "bg-gradient-to-b from-green-900/70 to-black border border-green-500 shadow-lg shadow-green-400/40"
                      : "bg-gradient-to-b from-black/50 to-transparent border border-green-800"
                  }`}
                >
                  <h4 className="text-xl font-semibold text-green-400 mb-2">
                    {value.title}
                  </h4>
                  <p className="text-gray-300 text-sm">{value.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
