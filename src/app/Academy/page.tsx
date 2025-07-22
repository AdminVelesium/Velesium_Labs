"use client";
import React from "react";
import { motion } from "framer-motion";
import Header from "@/components/layout/header";
import CustomCursor from "@/components/ui/custom-cursor";
import Footer from "@/components/layout/footer";
import BackgroundManager from "@/components/backgrounds/background-manager";

const services = [
  {
    title: "For High Schoolers with Big Dreams 🚀",
    description:
      "Dreaming of MIT or the Ivy League? We help you stand out with research portfolios, capstone projects, and hands-on AI experience—far beyond just grades.",
  },
  {
    title: "For Freshers Starting Their Data Journey 🎯",
    description:
      "Gain confidence and resume-worthy experience with real industry problems from day one. No fluff—just real projects and mentorship.",
  },
  {
    title: "For Professionals and Enterprise Teams 💼",
    description:
      "Upskill in AI, MLOps, DevOps or Data Engineering. Our training mirrors real-world scenarios to help you scale capabilities fast.",
  },
];

export default function page() {
  return (
    <div className="bg-black text-white">
      <BackgroundManager />

      <CustomCursor />
      <Header />

      {/* Hero Section */}
      <section className="text-center font-sans px-6 pt-24">
        <motion.h1
          className="text-4xl md:text-6xl font-bold "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Velesium
          <span className="text-green-400"> Academy</span>
          <div className="text-2xl"> Learn by Doing. Build What Matters.</div>
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-gray-400 mt-6 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          From Ivy League aspirants to working professionals—build real-world
          skills with mentorship, bootcamps, and hands-on projects in AI,
          DevOps, and beyond.
        </motion.p>
        <br />
        <br />
      </section>

      {/* Services Grid */}
      <section className="grid md:grid-cols-3 font-poppins gap-20 px-6 md:px-20 ">
        {services.map((item, idx) => (
          <motion.div
            key={idx}
            className="bg-zinc-900 p-6 rounded-2xl border border-green-500 hover:scale-105 transition-transform"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-green-400 mb-3">
              {item.title}
            </h3>
            <p className="text-gray-400 text-base">{item.description}</p>
          </motion.div>
        ))}
      </section>

      {/* Features List */}
      <section className="text-center font-poppins py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-6 text-green-400">
            What Makes Velesium Academy Different?
          </h2>
          <ul className="space-y-4 text-gray-300 text-lg list-disc list-inside">
            <li>
              <strong className="text-white">Learn by Doing:</strong> Jump
              straight into real projects and proofs of concept.
            </li>
            <li>
              <strong className="text-white">Beyond Just Data Science:</strong>{" "}
              Full-spectrum training across AI, DevOps, and Engineering.
            </li>
            <li>
              <strong className="text-white">Tailored for All Learners:</strong>{" "}
              High schoolers, freshers, pros, and enterprise teams.
            </li>
            <li>
              <strong className="text-white">Bootcamps & Mentorship:</strong>{" "}
              Personal guidance to launch your AI career or project.
            </li>
          </ul>
        </motion.div>
      </section>
      <Footer />
    </div>
  );
}
