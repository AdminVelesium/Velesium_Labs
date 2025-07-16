"use client";
import HomeContent from "./Home/page";
import ".//globals.css";
import LoadingScreen from "@/components/ui/loading-screen";

export default function App() {
  return (
    <div>
      <LoadingScreen />

      <HomeContent />
    </div>
  );
}
