"use client";
import BackgroundManager from "@/components/backgrounds/background-manager";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import CustomCursor from "@/components/ui/custom-cursor";
import { motion } from "framer-motion";

export default function ComingSoon() {
  return (
    <>
      <div className="h-screen w-full bg-black text-white flex flex-col items-center justify-center text-center px-4">
        <BackgroundManager />
        <CustomCursor />
        <Header />
        <motion.img
          src="/Logo_White with c.png"
          alt="Velesium Logo"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-40 h-40 mb-8 object-contain"
        />
        {/* Animated "Coming Soon..." */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold tracking-wide flex gap-1"
        >
          Coming Soon
          <motion.span
            className="inline-block"
            animate={{ opacity: [0, 1, 0] }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: "easeInOut",
              delay: 0,
            }}
          >
            .
          </motion.span>
          <motion.span
            className="inline-block"
            animate={{ opacity: [0, 1, 0] }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: "easeInOut",
              delay: 0.3,
            }}
          >
            .
          </motion.span>
          <motion.span
            className="inline-block"
            animate={{ opacity: [0, 1, 0] }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: "easeInOut",
              delay: 0.6,
            }}
          >
            .
          </motion.span>
        </motion.h1>
        {/* Subtitle (Optional) */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-lg mt-4 text-zinc-400"
        >
          We’re crafting something amazing. Stay tuned.
        </motion.p>
      </div>
    </>
  );
}
