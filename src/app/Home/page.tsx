"use client";

import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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

export default function Home() {
  return (
    <div className="bg-black text-white overflow-x-hidden">
      <CustomCursor />
      <Header />
      <SectionIndicators />

      <main>
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
