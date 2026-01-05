"use client";

import {
  Terminal,
  FolderTree,
  Palette,
  Sparkles,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { FrameworkSelector } from "@/components/framework-selector";
import { PackageManagerSelector } from "@/components/package-manager-selector";
import { InstallationCommand } from "@/components/installation-command";
import { motion, AnimatePresence } from "framer-motion";
import { useFramework } from "@/context/framework-context";

export default function InstallationPage() {
  const { framework: selectedFramework } = useFramework();

  // Framework-specific content
  const frameworkContent = {
    expo: {
      create: `npx create-expo-app my-app\ncd my-app`,
      init: `npx crossui init`,
      add: `npx crossui add button`,
      structure: `my-app/
├── app/
│   └── (your app code)
├── components/
│   └── ui/
│       └── (components will be added here)
├── lib/
│   └── utils.ts
├── theme/
│   └── config.ts
├── package.json
└── tsconfig.json`,
      theme: `// theme/config.ts
export const theme = {
  colors: {
    primary: '#6366f1',
    secondary: '#8b5cf6',
    background: '#ffffff',
    foreground: '#0f172a',
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
}`,
    },
    flutter: {
      create: `flutter create my_app\ncd my_app`,
      init: `npx crossui init`,
      add: `npx crossui add button`,
      structure: `my_app/
├── lib/
│   ├── components/
│   │   └── ui/
│   ├── utils/
│   └── theme/
│       └── config.dart
└── pubspec.yaml`,
      theme: `// lib/theme/config.dart
final theme = ThemeData(
  primaryColor: Color(0xFF6366f1),
  colorScheme: ColorScheme.light(
    primary: Color(0xFF6366f1),
    secondary: Color(0xFF8b5cf6),
  ),
);`,
    },
    web: {
      create: `npx create-next-app@latest my-app\ncd my-app`,
      init: `npx crossui init`,
      add: `npx crossui add button`,
      structure: `my-app/
├── app/
├── components/
│   └── ui/
├── lib/
│   └── utils.ts
└── app/globals.css`,
      theme: `// app/globals.css
@layer base {
  :root {
    --primary: 224 71% 64%;
    --secondary: 262 83% 58%;
    --background: 0 0% 100%;
    --foreground: 222 47% 11%;
  }
}`,
    },
    swift: {
      create: `# Create new Xcode project\n# File > New > Project > iOS App`,
      init: `# Install CrossUI via Swift Package Manager\n# File > Add Packages...\n# https://github.com/crossui/crossui-swift`,
      add: `import CrossUI\n\n// Add components in your SwiftUI views`,
      structure: `MyApp/
├── ContentView.swift
├── Components/
│   └── UI/
├── Utils/
├── Theme/
    └── Config.swift`,
      theme: `// Theme/Config.swift
struct Theme {
    static let primary = Color(hex: "6366f1")
    static let secondary = Color(hex: "8b5cf6")
    static let background = Color.white
}`,
    },
  };

  const content = frameworkContent[selectedFramework];

  return (
    <div className="max-w-6xl mx-auto space-y-24 pb-20 px-4 md:px-0">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6 text-center"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-black uppercase tracking-[0.2em]">
          <Sparkles className="h-3.5 w-3.5" />
          <span>Quick Start Guide</span>
        </div>
        <div className="space-y-4">
          <h1
            id="installation"
            className="text-6xl md:text-8xl font-black tracking-tight bg-clip-text text-transparent bg-linear-to-r from-foreground to-foreground/70"
          >
            Installation
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Choose your platform and package manager below to get specialized
            instructions for your development environment.
          </p>
        </div>
      </motion.div>

      {/* Big Box Step 1 */}
      <section className="space-y-12">
        <div className="p-1 md:p-12 rounded-[2.5rem] bg-muted/30 border border-border/50 shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
            <Palette className="h-64 w-64" />
          </div>

          <div className="relative z-10 space-y-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 px-4">
              <div className="space-y-2 text-center md:text-left">
                <span className="text-primary font-black uppercase tracking-widest text-sm">
                  Step One
                </span>
                <h2
                  id="configure-settings"
                  className="text-4xl font-black tracking-tight"
                >
                  Configure Settings
                </h2>
              </div>
              <div className="flex flex-col items-center md:items-end gap-3 text-right">
                <p className="text-muted-foreground max-w-sm text-center md:text-right text-sm">
                  Your selection will update all terminal commands and examples
                  across the entire documentation.
                </p>
                <PackageManagerSelector />
              </div>
            </div>

            <FrameworkSelector />
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedFramework}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="space-y-32"
          >
            {/* Step 2: Prerequisites */}
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="space-y-3">
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center font-black text-primary border border-primary/20 text-xl shadow-inner">
                    2
                  </div>
                  <h3
                    id="prerequisites"
                    className="text-3xl font-black tracking-tight"
                  >
                    Prerequisites
                  </h3>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl ml-16">
                  Ensure you have an active {selectedFramework} project. If not,
                  create one using the official CLI.
                </p>
              </div>
              <div className="space-y-6 ml-16">
                <div className="p-6 rounded-2xl bg-card border border-border/50 text-sm flex items-start gap-4 shadow-sm">
                  <CheckCircle2 className="h-6 w-6 text-green-500 mt-0.5 shrink-0" />
                  <div>
                    <p className="leading-relaxed text-lg font-bold">
                      Version Requirements
                    </p>
                    <p className="text-muted-foreground mt-1">
                      {selectedFramework === "expo"
                        ? "Node.js 18+ and Expo SDK 50+ are recommended for the best experience."
                        : selectedFramework === "flutter"
                        ? "Flutter 3.0+ and Dart 3.0+ are required."
                        : "Modern evergreen browser and Node.js 18+ required."}
                    </p>
                  </div>
                </div>
                <InstallationCommand code={content.create} title="Terminal" />
              </div>
            </div>

            {/* Step 3: Initialize */}
            <div className="max-w-4xl mx-auto space-y-8 pt-12 border-t border-border/50">
              <div className="space-y-3">
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center font-black text-primary border border-primary/20 text-xl shadow-inner">
                    3
                  </div>
                  <h3
                    id="initialize"
                    className="text-3xl font-black tracking-tight"
                  >
                    Initialize CLI
                  </h3>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl ml-16">
                  Configure your project automatically. The CLI will detect your
                  framework and setup paths.
                </p>
              </div>
              <div className="space-y-8 text-left ml-16">
                <InstallationCommand
                  code={content.init}
                  title="Initialize CrossUI"
                />
                <div className="rounded-3xl border bg-card/50 p-10 space-y-8 shadow-sm">
                  <h4 className="font-black text-sm uppercase tracking-widest text-primary flex items-center gap-2">
                    <ArrowRight className="h-4 w-4" />
                    Automatic Setup Highlights
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      "Framework-aware path configuration",
                      "Creates component-ui directory",
                      "Generates native-style theme config",
                      "Injects necessary base styles",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-4 text-base text-foreground/80 font-medium"
                      >
                        <div className="h-2 w-2 rounded-full bg-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Step 4: Structure */}
            <div className="max-w-4xl mx-auto space-y-8 pt-12 border-t border-border/50">
              <div className="space-y-3">
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center font-black text-primary border border-primary/20 text-xl shadow-inner">
                    4
                  </div>
                  <h3
                    id="project-structure"
                    className="text-3xl font-black tracking-tight"
                  >
                    Architecture
                  </h3>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl ml-16">
                  CrossUI respects your platform's conventions while maintaining
                  a consistent mental model.
                </p>
              </div>
              <Card className="ml-16 p-10 bg-black/5 dark:bg-white/5 border-2 border-border/50 rounded-[2rem] shadow-inner">
                <div className="flex items-center gap-2 mb-8 text-xs font-black text-primary uppercase tracking-[0.3em]">
                  <FolderTree className="h-4 w-4" />
                  <span>Structure Map</span>
                </div>
                <pre className="font-mono text-[15px] leading-relaxed text-foreground/90 overflow-x-auto">
                  <code>{content.structure}</code>
                </pre>
              </Card>
            </div>

            {/* Step 5: First Component */}
            <div className="max-w-4xl mx-auto space-y-8 pt-12 border-t border-border/50">
              <div className="space-y-3">
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center font-black text-primary border border-primary/20 text-xl shadow-inner">
                    5
                  </div>
                  <h3
                    id="first-component"
                    className="text-3xl font-black tracking-tight"
                  >
                    Usage
                  </h3>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl ml-16">
                  Add components by name. They are copied directly to your UI
                  folder for full control.
                </p>
              </div>
              <div className="space-y-6 text-left ml-16">
                <InstallationCommand code={content.add} title="Add Component" />
                <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20 text-base">
                  <p className="text-muted-foreground">
                    Native implementation will be placed at{" "}
                    <span className="font-mono text-primary font-bold bg-primary/10 px-2 py-1 rounded-md">
                      {selectedFramework === "flutter"
                        ? "lib/components/ui/button.dart"
                        : "components/ui/button.tsx"}
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* Footer Navigation */}
            <div className="max-w-4xl mx-auto pt-24 border-t border-border/50 grid grid-cols-1 md:grid-cols-2 gap-8">
              <Link
                href="/docs/cli"
                className="group p-10 rounded-[2rem] border bg-card hover:border-primary/50 transition-all space-y-4 shadow-sm"
              >
                <div className="p-3 w-fit rounded-xl bg-primary/10 text-primary">
                  <Terminal className="h-6 w-6" />
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-black text-primary uppercase tracking-widest">
                    Next Step
                  </p>
                  <h4 className="text-2xl font-black flex items-center gap-2">
                    CLI Reference{" "}
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </h4>
                </div>
              </Link>
              <Link
                href="/docs/components"
                className="group p-10 rounded-[2rem] border bg-card hover:border-primary/50 transition-all space-y-4 shadow-sm"
              >
                <div className="p-3 w-fit rounded-xl bg-primary/10 text-primary">
                  <Sparkles className="h-6 w-6" />
                </div>
                <div className="space-y-1 text-left">
                  <p className="text-xs font-black text-primary uppercase tracking-widest">
                    Explore
                  </p>
                  <h4 className="text-2xl font-black flex items-center gap-2">
                    Browse Components{" "}
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </h4>
                </div>
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </section>
    </div>
  );
}
