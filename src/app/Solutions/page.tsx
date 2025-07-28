"use client";

import { useState, useEffect } from "react";

import WorkItem from "@/components/work-item";
import { useCases } from "@/lib/data";
import Header from "@/components/layout/header";
import CustomCursor from "@/components/ui/custom-cursor";
import BackgroundManager from "@/components/backgrounds/background-manager";
import Footer from "@/components/layout/footer";

export default function ObysWorksPage() {
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(
    null
  );
  const selectedProject = useCases.find((uc) => uc.id === selectedProjectId);

  const closeModal = () => setSelectedProjectId(null);

  useEffect(() => {
    if (selectedProjectId !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProjectId]);

  const projectItems = useCases.map((uc) => ({
    id: uc.id,
    type: "project" as const,
    title: uc.title,
    client: uc.client,
    industry: uc.industry,
    tech: uc.tech,
    projectId: uc.id,
    imageUrl: `/placeholder.svg?height=300&width=400&text=${encodeURIComponent(
      uc.title
    )}`,
    imageAlt: `${uc.title} project`,
    imageBgColor: "bg-gray-200",
    marginTop: "mt-0",
  }));

  const worksData: (
    | (typeof projectItems)[number]
    | {
        id: number;
        type: "arrow" | "coming-soon";
        arrowType?: "left-diagonal" | "right-diagonal" | "down";
        arrowText?: string;
        marginTop: string;
        align?: "left" | "right" | "center";
      }
  )[] = [
    {
      ...projectItems.find((p) => p.projectId === 1)!,
      marginTop: "mt-0",
    },
    {
      ...projectItems.find((p) => p.projectId === 2)!,
      marginTop: "mt-8 md:mt-12 lg:mt-16",
    },
    {
      id: 1001,
      type: "arrow",
      arrowType: "down",
      marginTop: "mt-32 md:mt-48 lg:mt-64",
      arrowText:
        "👋 We are thrilled to have you here.\nHope you like the projects!",
    },
    {
      id: 1002,
      type: "arrow",
      arrowType: "left-diagonal",
      marginTop: "-mt-16 md:-mt-32 lg:-mt-48",
      align: "left",
      arrowText: "🎨 Creativity flows\nwhere passion goes!",
    },
    {
      ...projectItems.find((p) => p.projectId === 3)!,
      marginTop: "mt-16 md:mt-24 lg:mt-32",
    },
    {
      ...projectItems.find((p) => p.projectId === 4)!,
      marginTop: "mt-32 md:mt-48 lg:mt-64",
    },
    {
      ...projectItems.find((p) => p.projectId === 5)!,
      marginTop: "mt-32 md:mt-48 lg:mt-64",
    },
    {
      ...projectItems.find((p) => p.projectId === 6)!,
      marginTop: "mt-16 md:mt-24 lg:mt-32",
    },
    {
      id: 1003,
      type: "arrow",
      arrowType: "right-diagonal",
      marginTop: "-mt-16 md:-mt-32 lg:-mt-48",
      align: "right",
      arrowText: "📸 Every pixel\ntells a story.",
    },
    {
      id: 1004,
      type: "arrow",
      arrowType: "left-diagonal",
      marginTop: "-mt-16 md:-mt-32 lg:-mt-48",
      align: "left",
      arrowText: "💡 Design is\nintelligence made visible.",
    },
    {
      ...projectItems.find((p) => p.projectId === 7)!,
      marginTop: "mt-16 md:mt-24 lg:mt-32",
    },
    {
      ...projectItems.find((p) => p.projectId === 8)!,
      marginTop: "mt-32 md:mt-48 lg:mt-64",
    },
    {
      ...projectItems.find((p) => p.projectId === 9)!,
      marginTop: "mt-32 md:mt-48 lg:mt-64",
    },
    {
      ...projectItems.find((p) => p.projectId === 10)!,
      marginTop: "mt-16 md:mt-24 lg:mt-32",
    },
    {
      id: 1005,
      type: "arrow",
      arrowType: "right-diagonal",
      marginTop: "-mt-16 md:-mt-32 lg:-mt-48",
      align: "right",
      arrowText: "🚀 Your journey\nthrough our work starts here.",
    },
    // 👇 Coming soon item
    {
      id: 9999,
      type: "coming-soon",
      marginTop: "mt-6 md:mt-6 lg:mt-6",
      align: "center",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-poppins">
      <Header />
      <CustomCursor />
      <BackgroundManager />
      <section className="container mx-auto px-6 py-16 md:px-8 md:py-24 lg:py-32">
        <h1 className="text-5xl font-bold mb-4 text-center bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          Our Solution
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {worksData.map((item) => {
            const isArrow = "type" in item && item.type === "arrow";
            const isComingSoon = "type" in item && item.type === "coming-soon";
            const isProject = "projectId" in item;

            return (
              <div
                key={item.id}
                className={`${item.marginTop} ${
                  "align" in item && item.align === "left"
                    ? "md:col-start-1"
                    : "align" in item && item.align === "right"
                    ? "md:col-start-3"
                    : "align" in item && item.align === "center"
                    ? "md:col-start-2"
                    : ""
                } flex justify-center items-center ${
                  isArrow ? "hidden md:flex" : ""
                }`}
              >
                {isComingSoon ? (
                  <div className="w-64 h-64 rounded-full border border-gray-600 flex items-center justify-center text-gray-500 text-sm text-center">
                    More works are coming soon...
                  </div>
                ) : isProject ? (
                  <WorkItem {...item} onProjectClick={setSelectedProjectId} />
                ) : (
                  <WorkItem {...item} />
                )}
              </div>
            );
          })}
        </div>
      </section>

      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4">
          <div className="bg-black text-white rounded-lg w-full max-w-3xl p-4 sm:p-6 relative overflow-y-auto max-h-[90vh] border border-white text-sm sm:text-base">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white hover:text-gray-400 text-xl"
            >
              ✕
            </button>

            <h1 className="text-3xl font-bold mb-4 uppercase">
              {selectedProject.title}
            </h1>

            <p>
              <strong>Client:</strong> {selectedProject.client}
            </p>
            <p>
              <strong>Industry:</strong> {selectedProject.industry}
            </p>
            <p>
              <strong>Tech:</strong> {selectedProject.tech}
            </p>

            <div className="mt-6">
              <h2 className="text-2xl font-semibold mb-2">Challenge</h2>
              <ul className="list-disc pl-6 space-y-1">
                {selectedProject.challenge.map((c, i) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>
            </div>

            <div className="mt-6">
              <h2 className="text-2xl font-semibold mb-2">Solution</h2>
              <ul className="list-disc pl-6 space-y-1">
                {selectedProject.solution.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ul>
            </div>

            <div className="mt-6">
              <h2 className="text-2xl font-semibold mb-2">Impact</h2>
              <ul className="list-disc pl-6 space-y-1">
                {selectedProject.impact.map((i, j) => (
                  <li key={j}>{i}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}
