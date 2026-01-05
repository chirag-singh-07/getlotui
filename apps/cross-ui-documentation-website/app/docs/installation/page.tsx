"use client";

import { Terminal, FolderTree, AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import Link from "next/link";
import { FrameworkSelector } from "@/components/framework-selector";
import { PackageManagerSelector } from "@/components/package-manager-selector";
import { InstallationCommand } from "@/components/installation-command";
import { motion, AnimatePresence } from "framer-motion";
import { useFramework } from "@/context/framework-context";
import { MockFileExplorer } from "@/components/MockFileExplorer";

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
    },
    swift: {
      create: `# Create new Xcode project`,
      init: `npx crossui init`,
      add: `npx crossui add button`,
      structure: `MyApp/
├── ContentView.swift
├── Components/
│   └── UI/
├── Utils/
├── Theme/
    └── Config.swift`,
    },
  };

  const content =
    frameworkContent[selectedFramework as keyof typeof frameworkContent] ||
    frameworkContent.expo;

  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
          Installation
        </h1>
        <p className="text-lg text-muted-foreground">
          How to install and configure CrossUI for your specific platform.
        </p>
      </div>

      <div className="space-y-6">
        <Alert>
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Select your framework</AlertTitle>
          <AlertDescription>
            The instructions below will update based on your selection.
          </AlertDescription>
        </Alert>

        <div className="space-y-4">
          <FrameworkSelector />
          <PackageManagerSelector />
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={selectedFramework}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="space-y-12"
        >
          <div className="space-y-6">
            <h2
              id="create-project"
              className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0"
            >
              1. Create Project
            </h2>
            <p className="leading-7 text-muted-foreground">
              Start by creating a new project if you haven't already.
            </p>
            <div className="relative">
              <InstallationCommand
                code={content.create}
                title="Create Project"
              />
            </div>
          </div>

          <div className="space-y-6">
            <h2
              id="initialize"
              className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight"
            >
              2. Initialize
            </h2>
            <p className="leading-7 text-muted-foreground">
              Run the initialization command to configure the CLI for your
              project. This will detect your framework and set up the necessary
              configuration files.
            </p>
            <div className="relative">
              <InstallationCommand code={content.init} title="Initialize" />
            </div>
          </div>

          {/* <div className="space-y-6">
            <h2
              id="project-structure"
              className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight"
            >
              3. Project Structure
            </h2>
            <p className="leading-7 text-muted-foreground">
              After initialization, your project will have the following
              structure:
            </p>
            <div className="rounded-xl bg-[#0a0a0a] border border-white/10 p-6 overflow-x-auto">
              <pre className="text-sm font-mono text-foreground/90">
                {content.structure}
              </pre>
            </div>
          </div> */}
          <div className="space-y-6">
            <h2
              id="project-structure"
              className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight"
            >
              3. Project Structure
            </h2>
            <p className="leading-7 text-muted-foreground">
              After initialization, your project will have the following
              structure:
            </p>

            {/* The new Mock Explorer */}
            <MockFileExplorer structure={content.structure} />
          </div>

          <div className="space-y-6">
            <h2
              id="add-components"
              className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight"
            >
              4. Add Components
            </h2>
            <p className="leading-7 text-muted-foreground">
              You can now start adding components to your project. Components
              will be copied directly to your codebase.
            </p>
            <InstallationCommand code={content.add} title="Add Component" />
            <p className="text-sm text-muted-foreground mt-2">
              The code will be copied to your{" "}
              <code className="bg-muted px-1.5 py-0.5 rounded font-mono text-sm">
                components/ui
              </code>{" "}
              folder.
            </p>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="flex gap-4 pt-8 border-t">
        <Link
          href="/docs/components/button"
          className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 transition-colors"
        >
          Browse Components
        </Link>
        <Link
          href="/docs/cli"
          className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm hover:bg-accent hover:text-accent-foreground transition-colors"
        >
          CLI Reference
        </Link>
      </div>
    </div>
  );
}
