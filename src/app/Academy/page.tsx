"use client";
import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Header from "@/components/layout/header";
import CustomCursor from "@/components/ui/custom-cursor";
import Footer from "@/components/layout/footer";
import BackgroundManager from "@/components/backgrounds/background-manager";

const services = [
  {
    title: "For High Schoolers with Big Dreams",
    description:
      "Aiming for MIT or Ivy League? We help you stand out with research portfolios, capstone projects, and hands-on AI experience — far beyond just grades.",
  },
  {
    title: "For Freshers Starting in Data & AI",
    description:
      "Work on real industry problems, gain portfolio-ready experience, and receive mentorship from AI experts — no more theory-only learning.",
  },
  {
    title: "For Professionals & Enterprise Teams",
    description:
      "Upskill in AI, MLOps, DevOps, and Data Engineering with real-world case studies to help your team implement production-ready solutions.",
  },
];

const focusAreas = [
  "Artificial Intelligence & Machine Learning (AI/ML)",
  "Capstone Research Projects",
  "Agentic AI",
  "GenAI",
  "Natural Language Processing (NLP)",
  "Computer Vision",
  "MLOps & DevOps for AI Deployment",
  "Mathematical Modeling & Simulation",
  "Custom AI Curriculum for Schools & Colleges",
];
export default function Page() {
  const router = useRouter();
  return (
    <div className="bg-black text-white">
      <BackgroundManager />
      <CustomCursor />
      <Header />
      <Header />

      {/* Hero Section */}
      <section className="text-center px-6 pt-32 font-now font-bold">
        <motion.h1
          className="text-5xl md:text-7xl leading-tight tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Velesium <span className="text-green-400">Academy</span>
        </motion.h1>
        <motion.h2
          className="text-2xl md:text-3xl text-white/80 mt-4 font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Learn Like a Researcher. Build Like a Leader.
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl text-gray-400 mt-6 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          A new learning model that merges curiosity, critical thinking, and
          real-world AI projects — from school students to enterprise teams.
        </motion.p>
      </section>

      {/* Who We Cater To */}
      <section className="grid md:grid-cols-3 gap-12 py-24 px-6 md:px-20 text-justify font-poppins">
        {services.map((item, idx) => (
          <motion.div
            key={idx}
            className="bg-gradient-to-br from-zinc-800 to-zinc-900 p-6 rounded-3xl border border-zinc-700 shadow-lg hover:scale-[1.03] transition-transform duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
          >
            <h3 className="text-xl font-semibold text-green-400 mb-3">
              {item.title}
            </h3>
            <p className="text-gray-300">{item.description}</p>
          </motion.div>
        ))}
      </section>

      {/* What Makes Us Different */}
      <section className="py-20 bg-black text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-green-400 mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          What Makes Velesium Academy Different?
        </motion.h2>
        <ul className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-left text-white/80 px-6 md:px-0 font-poppins">
          <li>
            <span className="text-green-400 font-bold">Learn by Doing:</span>{" "}
            Real projects & use cases from day one.
          </li>
          <li>
            <span className="text-green-400 font-bold">Full Stack AI:</span>{" "}
            From ML to MLOps, cloud, DevOps, and pipelines.
          </li>
          <li>
            <span className="text-green-400 font-bold">For All Levels:</span>{" "}
            High schoolers, freshers, and enterprise pros.
          </li>
          <li>
            <span className="text-green-400 font-bold">Mentorship:</span>{" "}
            Bootcamps & 1:1 support from real AI engineers.
          </li>
        </ul>
      </section>

      {/* Core Focus Areas */}
      <section className="py-24 px-6 ">
        <h2 className="text-center text-3xl font-bold text-green-400 mb-12">
          Core Focus Areas
        </h2>
        <div className="grid text-center font-bold md:grid-cols-2 lg:grid-cols-3 gap-10 text-white/90 font-light">
          {focusAreas.map((area, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-zinc-800 rounded-xl p-6 hover:border-green-500 border border-transparent transition-all"
            >
              <p>{area}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Collaboration Section */}
      <section className="py-24 text-center text-white px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Collaborate With Us
        </h2>
        <p className="text-lg max-w-3xl mx-auto mb-10 text-white/80">
          We actively partner with universities, research institutes, ed-tech
          platforms, and businesses to co-create educational experiences and
        </p>
        <button
          onClick={() => router.push("/Contact")}
          className="bg-green-500 hover:bg-green-400 transition-colors text-black px-6 py-3 rounded-full font-semibold"
        >
          Contact Us
        </button>
      </section>

      <Footer />
    </div>
  );
}
