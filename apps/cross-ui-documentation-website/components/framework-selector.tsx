"use client";
import { motion } from "framer-motion";
import { Check, Settings, Code, Layers, Smartphone } from "lucide-react";
import { useFramework, type Framework } from "../context/framework-context";

const frameworks = [
  {
    id: "expo" as Framework,
    name: "Expo",
    description: "React Native components for iOS & Android",
    available: true,
    icon: <Smartphone className="h-6 w-6" />,
  },
  {
    id: "flutter" as Framework,
    name: "Flutter",
    description: "Native-fast UI for any screen with Dart",
    available: true,
    icon: <Layers className="h-6 w-6" />,
  },
  {
    id: "web" as Framework,
    name: "Web",
    description: "Next.js & React optimized components",
    available: true,
    icon: <Code className="h-6 w-6" />,
  },
  {
    id: "swift" as Framework,
    name: "Swift",
    description: "Modern SwiftUI implementation",
    available: false,
    icon: <Settings className="h-6 w-6" />,
  },
];

export function FrameworkSelector() {
  const { framework: selected, setFramework } = useFramework();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl mx-auto">
      {frameworks.map((framework) => (
        <button
          key={framework.id}
          onClick={() => framework.available && setFramework(framework.id)}
          disabled={!framework.available}
          className={`group relative rounded-3xl border-2 p-8 text-left transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-40 ${
            selected === framework.id
              ? "border-primary bg-primary/[0.03] shadow-[0_0_40px_-15px_rgba(99,102,241,0.3)]"
              : "border-border bg-card hover:border-primary/40 hover:bg-accent/5"
          }`}
        >
          <div className="flex flex-col gap-6 h-full justify-between">
            <div className="flex items-center justify-between">
              <div
                className={`p-4 rounded-2xl transition-colors ${
                  selected === framework.id
                    ? "bg-primary text-white"
                    : "bg-muted group-hover:bg-primary/10 group-hover:text-primary"
                }`}
              >
                {framework.icon}
              </div>
              {selected === framework.id && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="h-7 w-7 rounded-full bg-primary flex items-center justify-center shadow-lg"
                >
                  <Check className="h-4 w-4 text-white" />
                </motion.div>
              )}
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold tracking-tight">
                {framework.name}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed h-10 overflow-hidden">
                {framework.description}
              </p>
            </div>

            {!framework.available && (
              <div className="pt-2">
                <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground bg-muted px-2 py-1 rounded-md">
                  Work in Progress
                </span>
              </div>
            )}
          </div>
        </button>
      ))}
    </div>
  );
}
