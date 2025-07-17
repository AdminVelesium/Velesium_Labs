"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { motion } from "framer-motion";

const services = [
  {
    title: "Business Automation",
    desc: "Streamline operations with AI-powered workflows that eliminate manual tasks, boost efficiency, and scale effortlessly across teams and systems",
  },
  {
    title: "Computer Vision and NLP",
    desc: "Transform unstructured data into insight with advanced visual recognition and language understanding tailored to your business use cases.",
  },
  {
    title: "GenAi ",
    desc: "Leverage next-gen generative AI to create intelligent content, automate knowledge work, and power smarter business interactions.",
  },
  {
    title: "Agentic AI",
    desc: " Deploy autonomous AI agents that can reason, act, and adapt — designed to handle complex business tasks with minimal human input.",
  },
  {
    title: "Advanced Analytics and Reporting",
    desc: " Make faster, smarter decisions with data pipelines, predictive insights, and dashboards built for clarity, action, and scale.",
  },
  {
    title: "Training and Research",
    desc: "Upskill your teams and stay ahead with tailored AI training programs and applied research aligned with your industry’s future.",
  },
  {
    title: "Product Development",
    desc: " Build AI-driven digital products from concept to launch — with architecture, design, and engineering optimized for speed and success.",
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const servicesGridRef = useRef<HTMLDivElement>(null);
  const [selectedService, setSelectedService] = useState<number | null>(null);

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
      stagger: 0.1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: title,
        start: "top 80%",
      },
    });
  }, []);

  return (
    <section id="team" ref={sectionRef} className="relative py-20 px-6 md:px-8">
      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="space-y-12 w-full text-center">
          <h3
            ref={titleRef}
            className="text-5xl font-bold text-white text-center font-sans mb-2 md:mb-4"
          >
            <span className="text-white">Our </span>
            <span className="text-green-400">Services</span>
          </h3>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Your partner in building scalable, intelligent AI systems that
            deliver real business value.
          </p>
          <div className="grid gap-8 text-left mt-10 font-poppins">
            {/* First row: 4 cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.slice(0, 4).map((service, index) => (
                <motion.div
                  key={index}
                  className="service-item border border-green-500 bg-black/50 p-6 rounded-lg shadow-md shadow-green-500/20 cursor-pointer"
                  initial={{ opacity: 0, y: 50, rotateX: -30 }}
                  animate={{
                    opacity:
                      selectedService === null || selectedService === index
                        ? 1
                        : 0.6,
                    y: selectedService === index ? -10 : 0,
                    rotateX: selectedService === index ? 0 : -30,
                    scale: selectedService === index ? 1.05 : 1,
                    borderColor:
                      selectedService === index ? "#4ade80" : "#22c55e",
                    backgroundColor:
                      selectedService === index
                        ? "rgba(34, 197, 94, 0.2)"
                        : "rgba(0,0,0,0.5)",
                    boxShadow:
                      selectedService === index
                        ? "0 0 25px rgba(74, 222, 128, 0.6)"
                        : "0 0 0 rgba(0,0,0,0)",
                  }}
                  transition={{ type: "spring", stiffness: 150, damping: 20 }}
                  whileHover={{
                    scale: selectedService === index ? 1.05 : 1.02,
                    boxShadow: "0 0 20px rgba(74, 222, 128, 0.4)",
                    borderColor: "#4ade80",
                  }}
                  onClick={() =>
                    setSelectedService(selectedService === index ? null : index)
                  }
                >
                  <h4 className="text-xl font-semibold text-green-400 mb-2">
                    {service.title}
                  </h4>
                  <p className="text-gray-300">{service.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Second row: 3 cards centered */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center mx-auto">
              {services.slice(4).map((service, index) => (
                <motion.div
                  key={index + 4}
                  className="service-item border border-green-500 bg-black/50 p-6 rounded-lg shadow-md shadow-green-500/20 cursor-pointer"
                  initial={{ opacity: 0, y: 50, rotateX: -30 }}
                  animate={{
                    opacity:
                      selectedService === null || selectedService === index + 4
                        ? 1
                        : 0.6,
                    y: selectedService === index + 4 ? -10 : 0,
                    rotateX: selectedService === index + 4 ? 0 : -30,
                    scale: selectedService === index + 4 ? 1.05 : 1,
                    borderColor:
                      selectedService === index + 4 ? "#4ade80" : "#22c55e",
                    backgroundColor:
                      selectedService === index + 4
                        ? "rgba(34, 197, 94, 0.2)"
                        : "rgba(0,0,0,0.5)",
                    boxShadow:
                      selectedService === index + 4
                        ? "0 0 25px rgba(74, 222, 128, 0.6)"
                        : "0 0 0 rgba(0,0,0,0)",
                  }}
                  transition={{ type: "spring", stiffness: 150, damping: 20 }}
                  whileHover={{
                    scale: selectedService === index + 4 ? 1.05 : 1.02,
                    boxShadow: "0 0 20px rgba(74, 222, 128, 0.4)",
                    borderColor: "#4ade80",
                  }}
                  onClick={() =>
                    setSelectedService(
                      selectedService === index + 4 ? null : index + 4
                    )
                  }
                >
                  <h4 className="text-xl font-semibold text-green-400 mb-2">
                    {service.title}
                  </h4>
                  <p className="text-gray-300">{service.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
