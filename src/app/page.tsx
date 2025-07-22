"use client";
import HomeContent from "./Home/page";
import { useEffect, useState } from "react";
import ".//globals.css";
import Lenis from "lenis";
export default function App() {
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
    <div>
      <HomeContent />
    </div>
  );
}
