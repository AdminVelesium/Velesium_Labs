import React from "react";
import Header from "@/components/layout/header";
import CustomCursor from "@/components/ui/custom-cursor";
import Contact from "@/components/sections/contact";
import Footer from "@/components/layout/footer";
import BackgroundManager from "@/components/backgrounds/background-manager";

export default function page() {
  return (
    <div>
      <BackgroundManager />

      <CustomCursor />
      <Header />
      <main
        className="relative py-20 px-6 md:px-8" // changed from h-screen
      >
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
