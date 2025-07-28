"use client";

import Image from "next/image";
import Header from "@/components/layout/header";
import CustomCursor from "@/components/ui/custom-cursor";
import Footer from "@/components/layout/footer";
import BackgroundManager from "@/components/backgrounds/background-manager";

import teamTalk from "../../../public/team/team.jpeg"; // ✅ adjust if your path differs
const leadership = [
  {
    Id: "moulindu-sen",
    name: "Moulindu Sen",
    role: "Founder & CEO, Velesium Labs",
    img: "/team/Moulindu Sen.jpg",
    description: (
      <>
        <p>
          An AI consultant and entrepreneur, Moulindu is passionate about
          democratizing AI and helping businesses scale through intelligent
          systems.
        </p>
        <p>
          He began his career as a{" "}
          <span className="text-green-400 font-semibold">
            Data Scientist at Deloitte Consulting US-India
          </span>
          , working across healthcare, pharma, and retail. In 2021, he
          co-founded{" "}
          <span className="text-green-400 font-semibold">
            Discite Analytics & AI
          </span>
          , serving as its CTO and leading:
        </p>

        <ul className="list-disc list-inside space-y-1 my-2 text-gray-300">
          <li>
            A 20-member team across 15+ projects in ML, NLP, Big Data, and IoT.
          </li>
          <li>Global client delivery through rapid PoC development.</li>
          <li>
            Strategic consulting as a trusted thought partner in AI
            transformation.
          </li>
        </ul>

        <p>
          Featured by{" "}
          <a
            href="https://yourstory.com/2022/09/discite-data-solutions-bengaluru-startup-ai-ml-accessible-enterprises"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 font-semibold underline"
          >
            YourStory
          </a>{" "}
          as a founding member of a high-potential AI startup, Moulindu
          continued his journey after Discite’s merger with DynPro Inc. in 2023.
          He then launched Velesium Labs — with a vision to build scalable,
          production-ready AI solutions while also nurturing AI education and
          research through its dedicated Academy.
        </p>
      </>
    ),
  },
  {
    Id: "abhishek-bhattacharjee",
    name: "Abhishek Bhattacharjee",
    role: "Head of R&D",
    img: "/team/Abhishek Bhattacharjee.png",
    description: (
      <>
        <p>
          A mathematician and researcher trained at Chennai Mathematical
          Institute (CMI) and the{" "}
          <span className="text-green-400 font-semibold">
            Max Planck Institute, Germany
          </span>
          , Abhishek brings a rare blend of academic brilliance and educational
          vision.
        </p>
        <p>
          He is driven by the belief that India needs a paradigm shift in how
          advanced subjects like mathematics, data science, and AI are taught —
          fostering not just theoretical rigor, but also applied,
          industry-relevant thinking. His vision for Velesium Academy is to:
        </p>

        {/* ✅ ul is separated from <p> */}
        <ul className="list-disc list-inside space-y-1 my-2 text-gray-300">
          <li>Cultivate research-driven mindsets with practical impact.</li>
          <li>
            Inspire students and professionals to think like researchers, but
            execute like leaders.
          </li>
          <li>
            Introduce a new pedagogy that bridges abstraction and application.
          </li>
        </ul>
      </>
    ),
  },
];

const intelligence = [
  {
    name: "Prabhu Kumar",
    description: "Chief Advisor",
    role: "21 yrs of exp in Global Business Operations",
    img: "/team/Prabhu Kumar.jpg",
  },
  {
    name: "Deepak Samant",
    description: "Head of EU",
    role: "20 yrs of exp in Cloud Solution Specialist",
    img: "/team/Deepak Samanta.jpg",
  },
  {
    name: "Hemanta Bal",
    description: "Strategic Business Partner",

    role: "22 yrs of exp in IT Consulting",
    img: "/team/Hemanta Bal.jpg",
  },
  {
    name: "Henri Crozel",
    description: "Media & Marketing",

    role: "Head of Content",
    img: "/team/Henri Crozel.jpeg",
  },
  {
    name: "Avik Dandapat",
    description: "Media & Marketing",

    role: "Group Head – Copy",
    img: "/team/Avik Dandapat.jpg",
  },
];

const academy = []; // Abhishek already displayed above

// Reusable Compact Grid Section
const TeamSection = ({
  title,
  members,
}: {
  title: string;
  members: { name: string; role: string; img: string; description: string }[];
}) => {
  if (members.length === 0) return null;

  const gridCols =
    members.length === 1
      ? "grid-cols-1 justify-center"
      : members.length === 2
      ? "grid-cols-2 justify-center"
      : "grid-cols-2 sm:grid-cols-3 md:grid-cols-4";
};

// Page Component
export default function OurTeam() {
  const intelligenceRow1 = intelligence.slice(0, 3); // First 3
  const intelligenceRow2 = intelligence.slice(3); // Last 2 (Henri & Avik)

  return (
    <section className="min-h-screen bg-black text-white px-6 py-20">
      <Header />
      <CustomCursor />
      <BackgroundManager />
      {/* Header */}
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold font-poppins mb-6">
          Meet the Team
        </h1>
      </div>
      <div className="max-w-6xl mx-auto mb-24 px-4 md:px-0">
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* 🖼️ Image Section */}
          <div className="w-full md:w-1/2 rounded-xl overflow-hidden shadow-lg">
            <Image
              src={teamTalk}
              alt="Team session with Moulindu and Abhishek"
              className="w-full h-auto object-cover rounded-xl"
              placeholder="blur"
            />
          </div>

          {/* 📝 Text Section */}
          <div className="w-full font-inter md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              To transform industry with research excellence and transform
              research with industrial relevance.{" "}
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed">
              One from the trenches of industry, the other from the heights of
              research — The 2 Co-founders Moulindu and Abhishek have joined
              forces to build an ecosystem where cutting-edge AI solutions and
              world-class education fuel each other.
            </p>
          </div>
        </div>
      </div>
      <h2 className="text-4xl font-bold font-inter mb-10 text-center">
        Founders Leading the Vision
      </h2>{" "}
      <div className="group grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto mb-24">
        {leadership.map((member, index) => (
          <div
            key={index}
            id={member.name.toLowerCase().replace(/\s+/g, "-")}
            className="bg-zinc-900 p-6 rounded-2xl shadow-lg text-center transition-all duration-300"
          >
            {/* Image */}
            <div className="w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden">
              <Image
                src={member.img}
                alt={member.name}
                width={160}
                height={160}
                className="rounded-full object-cover transition-transform duration-500 group-hover:scale-90"
              />
            </div>

            {/* Name */}
            <h3 className="text-xl font-semibold">{member.name}</h3>

            {/* Role */}
            <p className="text-sm text-green-400 mb-2">{member.role}</p>

            {/* Shared Description Reveal */}
            <div className="text-sm text-gray-300 mt-4 text-justify opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-[500px] group-hover:mt-6 transition-all duration-500 overflow-hidden space-y-2">
              {member.description}
            </div>
          </div>
        ))}
      </div>{" "}
      {/* Rest of the Team */}
      <div className="mb-24">
        <h2 className="text-4xl font-bold mb-10 text-center">
          Core Team Members{" "}
        </h2>

        {/* Row 1 – 3 members */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 max-w-6xl mx-auto place-items-center mb-12">
          {intelligenceRow1.map((member, index) => (
            <div
              key={index}
              className="bg-zinc-900 p-6 rounded-2xl shadow-xl text-center w-full max-w-xs"
            >
              <div className="w-40 h-40 mb-5 mx-auto rounded-full overflow-hidden relative">
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
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-sm text-green-400 mt-1">
                {member.description}
              </p>
              <p className="text-sm text-green-400 mt-1">{member.role}</p>
            </div>
          ))}
        </div>

        {/* Row 2 – 2 members */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 max-w-4xl mx-auto place-items-center">
          {intelligenceRow2.map((member, index) => (
            <div
              key={index}
              className="bg-zinc-900 p-6 rounded-2xl shadow-xl text-center w-full max-w-xs"
            >
              <div className="w-40 h-40 mb-5 mx-auto rounded-full overflow-hidden relative">
                <Image
                  src={member.img}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-300"
                />
              </div>
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-sm text-green-400 mt-1">
                {member.description}
              </p>{" "}
              <p className="text-sm text-green-400 mt-1">{member.role}</p>
            </div>
          ))}
        </div>
        <h2 className="text-3xl text-center md:text-4xl font-bold py-6">
          Together We Stand for Something Bigger
        </h2>
      </div>
      <Footer />
    </section>
  );
}
