"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { gsap } from "gsap";
import { motion } from "framer-motion";

// Mobile detection hook (you can move this to a separate file if you want)
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return isMobile;
}

const values = [
  {
    title: "Smart Data",
    desc: " We focus on clean, actionable data that drives real decisions.",
  },
  {
    title: "Practical AI",
    desc: " We build AI solutions that solve real-world problems — not just theoretical ones.",
  },
  {
    title: "Client-First",
    desc: " Your goals shape our approach — we co-create every step of the way.",
  },
  {
    title: "ROI-Driven",
    desc: "Every solution we build is designed to deliver measurable business value.",
  },
  {
    title: "Built for Production",
    desc: " We specialize in taking AI from prototype to production — fast and reliably.",
  },
];

// Fixed layout positions for desktop
const positions = [
  { x: -340, y: -180 }, // Top-left
  { x: 340, y: -180 }, // Top-right
  { x: 0, y: 0 }, // Center
  { x: -340, y: 220 }, // Bottom-left
  { x: 340, y: 220 }, // Bottom-right
];

export default function Values() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [order, setOrder] = useState([0, 1, 2, 3, 4]); // Initial order
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const isMobile = useIsMobile();

  // Rotate values by shifting array
  const rotateValues = useCallback(() => {
    setOrder((prevOrder) => {
      const newOrder = [...prevOrder];
      const first = newOrder.shift();
      if (first !== undefined) newOrder.push(first);
      return newOrder;
    });
  }, []);

  // Auto-rotate logic
  const startAutoRotation = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    intervalRef.current = setInterval(() => {
      rotateValues();
    }, 5000);
  }, [rotateValues]);

  // GSAP + title setup
  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    if (!section || !title) return;

    // Animate heading
    const titleWords = ["Our", "Values"];
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
      scrollTrigger: { trigger: title, start: "top 80%" },
    });

    // Start auto rotation
    startAutoRotation();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [startAutoRotation]);

  // Handle click on card to center it
  const handleClick = (clickedPosIdx: number) => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    setOrder((prevOrder) => {
      const newOrder = [...prevOrder];
      const clickedValueIdx = prevOrder[clickedPosIdx];
      const currentIndex = newOrder.indexOf(clickedValueIdx);
      const shiftsNeeded =
        (2 - currentIndex + newOrder.length) % newOrder.length;
      for (let i = 0; i < shiftsNeeded; i++) {
        const first = newOrder.shift();
        if (first !== undefined) newOrder.push(first);
      }
      return newOrder;
    });

    setTimeout(() => {
      startAutoRotation();
    }, 3000);
  };

  return (
    <section
      id="works"
      ref={sectionRef}
      className="relative py-20 px-6 md:px-8"
    >
      <div className="max-w-6xl mx-auto w-full">
        <h2
          ref={titleRef}
          className="text-5xl font-bold text-white font-poppins text-center mb-12"
        >
          {/* GSAP will inject text */}
        </h2>

        {/* Mobile layout */}
        {isMobile ? (
          <div className="flex flex-col gap-6 font-inter">
            {values.map((value, i) => (
              <div
                key={i}
                className="w-full bg-gradient-to-b from-green-900/70 to-black border border-green-500 p-6 rounded-xl shadow-md"
              >
                <h4 className="text-xl font-semibold text-green-400 mb-2">
                  {value.title}
                </h4>
                <p className="text-gray-300 text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        ) : (
          // Desktop animated layout
          <div className="relative w-full h-[480px] flex items-center justify-center -mt-4 md:-mt-6 font-inter">
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
                  transition={{ type: "spring", stiffness: 150, damping: 30 }}
                  onClick={() => handleClick(posIdx)}
                  className={`absolute w-72 p-6 rounded-xl cursor-pointer select-none ${
                    isCenter
                      ? "bg-gradient-to-b from-green-900/70 to-black border border-green-500 shadow-lg"
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
        )}
      </div>
    </section>
  );
}
