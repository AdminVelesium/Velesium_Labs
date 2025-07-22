"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const fonts = ["font-nowOutline", "font-jakarta"];

export default function LoadingScreen({ onFinish }: { onFinish: () => void }) {
  const [progress, setProgress] = useState(0);
  const [fontIndex, setFontIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const counterInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(counterInterval);
          setVisible(false); // Trigger AnimatePresence exit
          setTimeout(onFinish, 1000); // Match exit animation
          return 100;
        }
        return prev + 1;
      });
    }, 25);

    const fontInterval = setInterval(() => {
      setFontIndex((prev) => (prev + 1) % fonts.length);
    }, 600);

    return () => {
      clearInterval(counterInterval);
      clearInterval(fontInterval);
    };
  }, [onFinish]);

  return (
    <AnimatePresence mode="wait">
      {visible && (
        <motion.div
          key="loader"
          className="fixed top-0 left-0 w-full h-full z-[9999] bg-black text-white"
          initial={{ x: 0 }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <div className="flex flex-col justify-center h-full p-10 space-y-10">
            <motion.div
              className="text-3xl italic font-playfair"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {progress} - 100
            </motion.div>

            <motion.div
              className="leading-none text-5xl md:text-7xl font-sans font-bold space-y-2"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span>Velesium </span>
              <span
                className={`text-7xl text-outline tracking-wide uppercase ${fonts[fontIndex]}`}
              >
                Labs
              </span>
              <div>
                Assembling Pixels and Possibilities…{" "}
                {/* <span
                  className={`text-7xl text-outline tracking-wide uppercase ${fonts[fontIndex]}`}
                >
                  NOW
                </span> */}
              </div>
            </motion.div>

            <motion.div
              className="mt-10 text-sm text-white/70"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Please wait
              <br />a few seconds.
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
