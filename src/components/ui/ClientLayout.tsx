"use client";

import { useState } from "react";
import LoadingScreen from "./loading-screen";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loadingFinished, setLoadingFinished] = useState(false);

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
