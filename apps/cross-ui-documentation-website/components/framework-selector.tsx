"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useFramework, type Framework } from "../context/framework-context";
import Image from "next/image";

interface FrameworkConfig {
  id: Framework;
  name: string;
  description: string;
  available: boolean;
  brandColor: string; // The hex or tailwind class for brand identification
}

interface FrameworkLogoProps {
  id: string;
  isActive: boolean;
}

const frameworks: FrameworkConfig[] = [
  {
    id: "expo",
    name: "Expo",
    description:
      "Build one project that runs natively on all your users' devices.",
    available: true,
    brandColor: "#ffffff",
  },
  {
    id: "flutter",
    name: "Flutter",
    description:
      "Fast, beautiful, and natively compiled UI from a single codebase.",
    available: true,
    brandColor: "#02569B",
  },
  {
    id: "web",
    name: "Next.js",
    description: "The React Framework for the Web with built-in optimization.",
    available: true,
    brandColor: "#0070f3",
  },
  {
    id: "swift",
    name: "SwiftUI",
    description: "Declare the UI and behavior for your Apple platform apps.",
    available: false,
    brandColor: "#F05138",
  },
];

const FrameworkLogo = ({ id, isActive }: FrameworkLogoProps) => {
  // Mapping IDs to your public folder filenames
  const logoMap: Record<string, string> = {
    expo: "/expo.svg",
    flutter: "/flutter.svg",
    web: "/nextjs-icon.svg", // assuming your web svg is named nextjs.svg
    swift: "/swift.svg",
  };

  const src = logoMap[id] || "/default-icon.svg";

  return (
    <div className="relative w-8 h-8 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
      <Image
        src={src}
        alt={id}
        width={32}
        height={32}
        className={`transition-all duration-300 ${
          isActive && logoMap[id] === "flutter"
            ? "brightness-0 invert"
            : "invert-0"
        }`}
      />
    </div>
  );
};

export function FrameworkSelector() {
  const { framework: selected, setFramework } = useFramework();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 w-full max-w-5xl mx-auto">
      {frameworks.map((framework) => {
        const isActive = selected === framework.id;

        return (
          <button
            key={framework.id}
            onClick={() => framework.available && setFramework(framework.id)}
            disabled={!framework.available}
            className={`group relative flex items-start text-left p-6 rounded-2xl border-2 transition-all duration-300 overflow-hidden outline-none focus-visible:ring-2 focus-visible:ring-primary/50 ${
              isActive
                ? "border-primary bg-primary/[0.02] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)]"
                : "border-border bg-card hover:border-muted-foreground/30 hover:shadow-lg"
            } disabled:opacity-50 disabled:grayscale disabled:cursor-not-allowed`}
          >
            {/* Background Glow Effect */}
            {isActive && (
              <div
                className="absolute inset-0 opacity-[0.05] pointer-events-none"
                style={{ backgroundColor: framework.brandColor }}
              />
            )}

            <div className="flex gap-5 w-full">
              {/* Logo Container */}
              <div
                className={`flex-shrink-0 w-16 h-16 rounded-xl flex items-center justify-center transition-all duration-500 ${
                  isActive ? "shadow-lg" : "bg-muted group-hover:bg-background"
                }`}
                style={{
                  backgroundColor: isActive ? framework.brandColor : undefined,
                }}
              >
                <FrameworkLogo id={framework.id} isActive={isActive} />
              </div>

              {/* Text Content */}
              <div className="flex-grow pt-1">
                <div className="flex items-center justify-between mb-1">
                  <h3
                    className={`font-bold text-lg leading-none ${
                      isActive
                        ? "text-foreground"
                        : "text-muted-foreground group-hover:text-foreground"
                    }`}
                  >
                    {framework.name}
                  </h3>
                  {isActive && (
                    <motion.div
                      layoutId="check"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="bg-primary p-0.5 rounded-full"
                    >
                      <Check className="h-3.5 w-3.5 text-white" />
                    </motion.div>
                  )}
                </div>
                <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                  {framework.description}
                </p>

                {!framework.available && (
                  <div className="mt-3">
                    <span className="inline-flex items-center rounded-full bg-muted px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-muted-foreground/80 border">
                      Coming Soon
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Subtle highlight line for active state */}
            {isActive && (
              <motion.div
                layoutId="activeBorder"
                className="absolute bottom-0 left-0 right-0 h-1 bg-primary"
              />
            )}
          </button>
        );
      })}
    </div>
  );
}
