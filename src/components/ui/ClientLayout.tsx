"use client";

import { useEffect, useState } from "react";
import LoadingScreen from "./loading-screen";
import Lenis from "lenis";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loadingFinished, setLoadingFinished] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const lenisInstance = new Lenis();

    function raf(time: any) {
      lenisInstance.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <div className="relative">
      {/* Render content immediately but fade it in behind the loader */}
      <div
        className={`transition-opacity duration-300 ${
          loadingFinished ? "opacity-100" : "opacity-0"
        }`}
      >
        {children}
      </div>

      {/* Preloader appears on top using AnimatePresence */}
      {!loadingFinished && (
        <LoadingScreen onFinish={() => setLoadingFinished(true)} />
      )}
    </div>
  );
}
