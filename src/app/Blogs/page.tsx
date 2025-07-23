"use client";

import { useState } from "react";
import { useEffect } from "react";

import PostModal from "@/components/ui/post-modal";
import BackgroundManager from "@/components/backgrounds/background-manager";
import CustomCursor from "@/components/ui/custom-cursor";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

type Post = {
  id: string;
  title: string;
  category: string;
  image: string;
  date: string;
  author: string;
  intro: string;
  content: string;
  conclusion: string;
};

const blogPosts: Post[] = [
  {
    id: "1",
    title: "🤖 Artificial Intelligence (AI): From Assistant to Innovator",
    category: "AI & Machine Learning",
    image: "ai.png",
    date: "2024-07-20",
    author: "OpenTech Team",
    intro:
      "AI is no longer just a supportive tool—it’s becoming the brain behind creative tasks, decision-making, and real-time automation.",
    content: `In healthcare, it diagnoses diseases faster.\n\nIn business, it writes, predicts, and automates workflows.\n\nIn education, it adapts learning for every student.\n\n💡 “AI won’t replace you. A person using AI will.”`,
    conclusion:
      "AI is becoming multimodal, context-aware, and emotionally intelligent, powering everything from personal assistants to autonomous design.",
  },
  {
    id: "2",
    title: "🧬 Quantum Computing: Solving the Unsolvable",
    category: "Computing & Hardware",
    image: "qt.png",
    date: "2024-07-18",
    author: "OpenTech Team",
    intro:
      "Quantum computing uses qubits to tackle problems beyond the reach of classical computers.",
    content: `Healthcare: Simulate molecular interactions.\nCybersecurity: Enable quantum encryption.\nLogistics: Solve complex optimization tasks in seconds.`,
    conclusion:
      "Although still early-stage, companies like Google, IBM, and IonQ are pushing toward a quantum advantage era.",
  },
  {
    id: "3",
    title: "🌐 6G and Beyond: Ultra-Fast, Ultra-Connected",
    category: "Telecommunication & Connectivity",
    image: "6g.png",
    date: "2024-07-15",
    author: "OpenTech Team",
    intro:
      "The jump from 5G to 6G will redefine real-time connectivity. Expected by 2028, it aims to deliver:",
    content: `- 1Tbps+ speeds\n- Microsecond latency\n- Immersive XR and tactile internet`,
    conclusion:
      "With 6G, applications like holographic video calls and remote robotic surgery become reality.",
  },
  {
    id: "4",
    title: "🧠 Modern Data Infrastructure: Fueling Smart Decisions",
    category: "Data & Analytics",
    image: "data.png",
    date: "2024-07-10",
    author: "OpenTech Team",
    intro:
      "In 2025, data isn't just collected—it's activated in real-time. Modern data platforms are becoming faster, cheaper, and more integrated.",
    content: `Data lakes + warehouses = lakehouses\nStreaming data powers live dashboards and alerts\nAI-driven analytics uncover trends automatically`,
    conclusion: `Tools like Snowflake, Databricks, and ClickHouse are reshaping how businesses access, analyze, and monetize data.\n\n"Data is the new oil, but it only matters if it’s refined.”`,
  },
  {
    id: "5",
    title: "🛠️ DevOps & Platform Engineering: Beyond Just CI/CD",
    category: "Cloud & DevOps",
    image: "devops.png",
    date: "2024-07-08",
    author: "OpenTech Team",
    intro:
      "DevOps has evolved into platform engineering, where teams build internal tools to empower developers while maintaining governance and security.",
    content: `- GitOps and IaC standardize deployments\n- Platform teams build self-serve environments\n- Observability becomes essential`,
    conclusion:
      "2025 is all about automation, reliability, and scalability, especially for cloud-native apps.",
  },
  {
    id: "6",
    title: "👨‍💻 Code vs No-Code: Bridging Builders and Creators",
    category: "Development Trends",
    image: "code.png",
    date: "2024-07-05",
    author: "OpenTech Team",
    intro:
      "In 2025, the line between developers and non-developers is blurrier than ever.",
    content: `No-code platforms empower anyone to build apps without writing complex code.\n\nNo-code: Webflow, Airtable, Bubble\nLow-code: Retool, OutSystems, PowerApps`,
    conclusion: `“No-code doesn’t replace developers—it frees them to focus on what matters.”\n\nStart with no-code MVPs, migrate critical features to full code later.`,
  },
  {
    id: "7",
    title: "📡 Edge AI: Intelligence at the Speed of Thought",
    category: "Edge Computing",
    image: "edge.png",
    date: "2024-07-03",
    author: "OpenTech Team",
    intro:
      "Edge AI brings machine learning models closer to the source of data—phones, sensors, and IoT devices.",
    content: `Edge AI enables:\n- Real-time decision making\n- Offline capabilities\n- Privacy-preserving computation`,
    conclusion:
      "By reducing the need to send data to the cloud, Edge AI delivers fast, secure, and scalable intelligence—anywhere.",
  },
  // Repeat one or two cards to ensure grid balance if needed
  {
    id: "9",
    title: "🔒 Privacy Engineering: Building Trust into Tech",
    category: "Cybersecurity",
    image: "cyber.png",
    date: "2024-06-28",
    author: "OpenTech Team",
    intro: "Users demand transparency. Privacy-by-design is now essential.",
    content: `From differential privacy to secure enclaves, engineers are building systems that don’t just comply—but empower trust.`,
    conclusion:
      "The future of trust is built into every layer: product, infra, and policy.",
  },
];

export default function HomePage() {
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  const spanStyles = [
    "col-span-2 row-span-2",
    "col-span-2 row-span-1",
    "col-span-2 row-span-1",
    "col-span-1 row-span-2",
    "col-span-1 row-span-1",
    "col-span-1 row-span-1",
    "col-span-1 row-span-1",
    "col-span-3 row-span-1",
    "col-span-2 row-span-1",
    "col-span-2 row-span-1",
  ];

  return (
    <div className="min-h-screen bg-black text-white px-6 pt-24">
      <BackgroundManager />
      <CustomCursor />
      <Header />
      <div className="container mx-auto mb-12 text-center">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          Our Latest Blogs
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Insights, trends, and ideas shaping the future of technology — curated
          by our team.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[250px] gap-x-8 gap-y-10">
        {blogPosts.map((post, index) => {
          const span = spanStyles[index % spanStyles.length];

          return (
            <div
              key={post.id}
              onClick={() => setSelectedPost(post)}
              className={`relative rounded-xl overflow-hidden group cursor-pointer border border-white/10 hover:border-white/20 transition-colors duration-300 ${span}`}
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors" />
              <div className="absolute z-10 bottom-4 left-4 right-4">
                <h3 className="text-xl font-bold">{post.title}</h3>
                <p className="text-xs uppercase text-gray-300">
                  {post.category}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <PostModal post={selectedPost} onClose={() => setSelectedPost(null)} />
      <Footer />
    </div>
  );
}
