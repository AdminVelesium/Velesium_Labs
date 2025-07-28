"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { motion } from "framer-motion";

const services = [
  {
    title: "Business Automation",
    desc: "Automate repetitive tasks and workflows using intelligent systems to boost efficiency and reduce operational overhead.",
  },
  {
    title: "Computer Vision ",
    desc: "Extract insights from images and videos for use cases like surveillance, quality control, and visual search.",
  },
  {
    title: "Natural Language Processing (NLP)",
    desc: " Build AI systems that understand, generate, and interact using human language across documents, chats, and speech.",
  },
  {
    title: "GenAI ",
    desc: "Deploy large language models to create content, personalize experiences, and automate creative and cognitive tasks.",
  },
  {
    title: "Agentic AI",
    desc: "Design autonomous, goal-driven agents capable of decision-making, planning, and multi-step execution.",
  },
  {
    title: "Predictive & Prescriptive Analytics",
    desc: " Use machine learning to forecast trends and recommend optimal actions for data-informed decision-making.",
  },
  {
    title: "Training and Research",
    desc: "Offer advanced workshops, mentorship, and research collaboration to upskill teams and explore cutting-edge AI applications.",
  },
  {
    title: "Custom AI",
    desc: "Product Development From idea to production, we build end-to-end AI solutions tailored to your business needs and scale objectives.",
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
        <div className="w-full text-center">
          <h2 className="text-5xl font-bold text-white font-poppins text-center mb-4">
            <span className="relative inline-block">
              <span className="text-white">Our</span>
              <span className="absolute left-0 bottom-[-6px] h-[2px] w-[150%] bg-green-400"></span>
            </span>
            <span className="text-green-400 ml-2">Services</span>
          </h2>

          <p className="text-gray-300 text-lg font-poppins max-w-1xl mx-auto mb-4 mt-2">
            Your partner in building scalable, intelligent AI systems that
            deliver real business value.
          </p>

          <div className="grid gap-4 text-left mt-2 font-inter">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.slice(0, 8).map((service, index) => (
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
              ))}{" "}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
