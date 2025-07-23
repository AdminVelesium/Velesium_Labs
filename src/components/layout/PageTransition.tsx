"use client";
import { motion } from "framer-motion";

type Props = {
  phase: "hidden" | "cover" | "reveal";
};

export default function PageTransition({ phase }: Props) {
  const isVisible = phase !== "hidden";

  return (
    <>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 bg-black z-[9999] flex items-center justify-center"
        >
          <motion.img
            src="/Logo_White with c.png"
            alt="Velesium Logo"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1.2,
              ease: "easeInOut",
              delay: 0,
            }}
            className="w-64 h-64 object-contain" // Bigger logo: 256px x 256px
          />
        </motion.div>
      )}
    </>
  );
}
