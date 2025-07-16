import React from "react";
import Header from "@/components/layout/header";
import CustomCursor from "@/components/ui/custom-cursor";
import Contact from "@/components/sections/contact";
import Footer from "@/components/layout/footer";
export const page = () => {
  return (
    <div>
      <CustomCursor />
      <Header />
      <main>
        <Contact />
      </main>

      <Footer />
    </div>
  );
};
export default page;
