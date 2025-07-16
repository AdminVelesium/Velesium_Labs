import React from "react";
import Header from "@/components/layout/header";
import CustomCursor from "@/components/ui/custom-cursor";
import About from "@/components/sections/about";
import Works from "@/components/sections/works";
import Process from "@/components/sections/process";
import Team from "@/components/sections/team";
import Footer from "@/components/layout/footer";
export const page = () => {
  return (
    <div>
      <CustomCursor />
      <Header />
      <main>
        <About />
        <Works />
        <Process />
        <Team />
      </main>
      <Footer />
    </div>
  );
};

export default page;
