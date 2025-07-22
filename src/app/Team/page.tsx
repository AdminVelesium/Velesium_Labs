"use client";

import Image from "next/image";
import Header from "@/components/layout/header";
import CustomCursor from "@/components/ui/custom-cursor";
import Footer from "@/components/layout/footer";
import BackgroundManager from "@/components/backgrounds/background-manager";

// Team Data
const intelligence = [
  {
    name: "Moulindu Sen",
    role: "Director, Velesium Labs",
    img: "/team/Moulindu Sen.jpg",
  },
  {
    name: "Prabhu Kumar",
    role: "21 yrs in Global Business Operations",
    img: "/team/Prabhu Kumar.jpg",
  },
  {
    name: "Deepak Samanta",
    role: "20 yrs, Cloud Solution Specialist",
    img: "/team/Deepak Samanta.jpg",
  },
  {
    name: "Hemanta Bal",
    role: "22 yrs of exp in IT Consulting",
    img: "/team/Hemanta Bal.jpg",
  },
];

const academy = [
  {
    name: "Abhishek Bhattacharjee",
    role: "Director, Velesium Academy",
    img: "/team/Abhishek Bhattacharjee.png",
  },
];

const marketing = [
  {
    name: "Henri Crozel",
    role: "Head of Content",
    img: "/team/Henri Crozel.jpeg",
  },
  {
    name: "Avik Dandapat",
    role: "Group Head – Copy",
    img: "/team/Avik Dandapat.jpg",
  },
];

// Section Component
const TeamSection = ({
  title,
  members,
}: {
  title: string;
  members: { name: string; role: string; img: string }[];
}) => {
  const gridCols =
    members.length === 1
      ? "grid-cols-1 justify-center"
      : members.length === 2
      ? "grid-cols-2 justify-center"
      : "grid-cols-2 sm:grid-cols-3 md:grid-cols-4";

  return (
    <div className="mb-16">
      <h2 className="text-2xl font-semibold mb-8 text-center">{title}</h2>
      <div
        className={`grid ${gridCols} gap-10 max-w-6xl mx-auto place-items-center`}
      >
        {members.map((member, index) => (
          <div key={index} className="text-center flex flex-col items-center">
            <div className="w-32 h-32 mb-4 rounded-full overflow-hidden relative flex items-center justify-center">
              <Image
                src={member.img}
                alt={member.name}
                fill
                className={`object-cover transition-transform duration-300 ${
                  member.name === "Prabhu Kumar" ||
                  member.name === "Hemanta Bal"
                    ? "scale-125"
                    : ""
                }`}
              />
            </div>
            <h3 className="text-sm font-medium">{member.name}</h3>
            <p className="text-xs text-gray-400">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Page Component
export default function OurTeam() {
  return (
    <section className="min-h-screen bg-black text-white px-6 py-20">
      <Header />
      <CustomCursor />
      <BackgroundManager />

      <div className="max-w-5xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Meet the Team</h1>
        <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
          Our small but mighty team is distributed across the globe. We are all
          makers at heart and care deeply about every detail — from code to
          copy.
        </p>
      </div>

      {/* Sections */}
      <TeamSection title="Velesium Intelligence" members={intelligence} />
      <TeamSection title="Velesium Academy" members={academy} />
      <TeamSection title="Media & Marketing" members={marketing} />

      <Footer />
    </section>
  );
}
