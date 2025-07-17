// components/PageTransition.tsx
"use client";
import { motion } from "framer-motion";

type Props = {
  phase: "hidden" | "cover" | "reveal";
};

export default function PageTransition({ phase }: Props) {
  const y = phase === "cover" ? "0%" : phase === "reveal" ? "100%" : "-100%";

  return (
    <motion.div
      initial={{ y: "-100%" }}
      animate={{ y }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="fixed top-0 left-0 w-full h-full bg-black z-[9999]"
      style={{ pointerEvents: phase === "hidden" ? "none" : "auto" }}
    />
  );
}
