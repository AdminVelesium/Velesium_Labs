"use client";
import Header from "@/components/layout/header";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Works from "@/components/sections/values";
import Process from "@/components/sections/clients";
import Team from "@/components/sections/services";
import Contact from "@/components/sections/contact";
import Footer from "@/components/layout/footer";
import CustomCursor from "@/components/ui/custom-cursor";
import SectionIndicators from "@/components/ui/section-indicators";
import BackgroundManager from "@/components/backgrounds/background-manager";

export default function Home() {
  return (
    <div className="bg-black text-white overflow-x-hidden relative">
      <BackgroundManager />
      <CustomCursor />
      <Header />
      <SectionIndicators />

      <main className="relative z-10">
        <Hero />
        <About />
        <Works />
        <Process />
        <Team />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
