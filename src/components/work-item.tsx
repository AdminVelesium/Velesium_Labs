import Image from "next/image";

interface WorkItemProps {
  type: "project" | "arrow" | "coming-soon";
  title?: string;
  client?: string;
  industry?: string;
  tech?: string;
  projectId?: number;
  imageUrl?: string;
  imageAlt?: string;
  imageBgColor?: string;
  arrowType?: "down" | "left-diagonal" | "right-diagonal";
  arrowText?: string;
  onProjectClick?: (projectId: number) => void;
}

export default function WorkItem({
  type,
  title,
  client,
  industry,
  tech,
  projectId,
  imageUrl,
  imageAlt,
  imageBgColor,
  arrowType,
  arrowText,
  onProjectClick,
}: WorkItemProps) {
  if (type === "project") {
    return (
      <div
        onClick={() => onProjectClick?.(projectId!)}
        className="cursor-pointer w-full transform transition-all duration-300 hover:scale-105 group"
      >
        <div className="min-h-[22rem] w-full bg-gradient-to-br from-green-900 to-black hover:from-black hover:to-green-900 border border-white/10 hover:border-white/30 transition-colors duration-300 rounded-lg p-6 flex flex-col justify-between">
          <div className="flex-grow flex flex-col justify-center items-center text-center">
            {title && (
              <h2 className="text-3xl font-bold uppercase text-white group-hover:tracking-wider transition-all duration-300">
                {title}
              </h2>
            )}
          </div>
          <div className="pt-4 border-t border-white/20 text-sm text-gray-400">
            {client && <p>Client: {client}</p>}
            {industry && <p>Industry: {industry}</p>}
            {tech && <p>Tech: {tech}</p>}
          </div>
        </div>
      </div>
    );
  }

  if (type === "arrow") {
    return (
      <div className="flex flex-col items-center justify-center h-full p-4 group relative">
        <div className="w-48 h-48 rounded-full border border-white flex items-center justify-center text-center px-4 relative overflow-hidden">
          {/* Arrow Icon */}
          <span className="text-white text-7xl font-bold absolute transition-opacity duration-300 group-hover:opacity-0">
            {arrowType === "down"
              ? "↓"
              : arrowType === "left-diagonal"
              ? "↘"
              : arrowType === "right-diagonal"
              ? "↙"
              : ""}
          </span>

          {/* Hover Message */}
          {arrowText && (
            <span className="text-sm text-gray-300 absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4 leading-snug">
              {arrowText}
            </span>
          )}
        </div>
      </div>
    );
  }

  if (type === "coming-soon") {
    return (
      <div className="flex flex-col items-center justify-center h-full p-4">
        <div className="w-64 h-64 rounded-full border border-gray-600 flex items-center justify-center text-gray-500 text-sm text-center px-4">
          More works are coming soon...
        </div>
      </div>
    );
  }

  return null;
}
