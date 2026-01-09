"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ArrowRight,
  Terminal,
  Zap,
  CheckCircle2,
  Package,
  Sparkles,
  MousePointer2,
} from "lucide-react";
import { motion } from "framer-motion";
import { InstallationCommand } from "@/components/installation-command";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function QuickStartPage() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-16 pb-16"
    >
      {/* Hero Section */}
      <motion.div variants={item} className="space-y-6">
        <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20">
          <Zap className="mr-2 h-3.5 w-3.5" />
          Quick Start Guide
        </div>
        <div className="space-y-4">
          <h1 className="scroll-m-20 text-5xl font-extrabold tracking-tight lg:text-6xl text-balance bg-linear-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
            Get Started in Seconds
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-[800px] text-balance">
            Follow these steps to integrate GetLotUI into your project and start
            building high-quality interfaces across platforms.
          </p>
        </div>
      </motion.div>

      {/* Step 1: Initialize */}
      <motion.div variants={item} className="space-y-6 pt-8">
        <div className="space-y-2">
          <h2 className="scroll-m-20 text-3xl font-bold tracking-tight border-b border-border/50 pb-2 flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
              1
            </span>
            Initialize GetLotUI
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Run the initialization command to set up the necessary configuration
            and design tokens in your project.
          </p>
        </div>
        <div className="space-y-4">
          <InstallationCommand code="npx getlotui init" title="Initial Setup" />
          <p className="text-sm text-muted-foreground italic">
            This will create a{" "}
            <code className="bg-muted px-1.5 py-0.5 rounded font-mono">
              getlotui.json
            </code>{" "}
            and a{" "}
            <code className="bg-muted px-1.5 py-0.5 rounded font-mono">
              theme/
            </code>{" "}
            folder in your project.
          </p>
        </div>
      </motion.div>

      {/* Step 2: Add Components */}
      <motion.div variants={item} className="space-y-6 pt-8">
        <div className="space-y-2">
          <h2 className="scroll-m-20 text-3xl font-bold tracking-tight border-b border-border/50 pb-2 flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
              2
            </span>
            Add Your First Component
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Use the CLI to add production-ready components directly into your
            codebase. No npm installs required for individual components.
          </p>
        </div>
        <div className="space-y-4">
          <InstallationCommand
            code="npx getlotui add button"
            title="Add Component"
          />
          <p className="text-sm text-muted-foreground">
            The source code will be copied to{" "}
            <code className="bg-muted px-1.5 py-0.5 rounded font-mono">
              components/ui/button.tsx
            </code>
            .
          </p>
        </div>
      </motion.div>

      {/* Step 3: Usage */}
      <motion.div variants={item} className="space-y-6 pt-8">
        <div className="space-y-2">
          <h2 className="scroll-m-20 text-3xl font-bold tracking-tight border-b border-border/50 pb-2 flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
              3
            </span>
            Import and Build
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Import the component and start using it in your screens or pages.
            It's yours to customize.
          </p>
        </div>
        <Card className="p-8 bg-linear-to-br from-primary/5 to-transparent border-primary/20">
          <pre className="text-sm font-mono text-foreground leading-relaxed">
            {`import { Button } from "@/components/ui/button";

export default function MyScreen() {
  return (
    <Button 
      variant="primary" 
      onPress={() => console.log("Pressed!")}
    >
      Click Me
    </Button>
  );
}`}
          </pre>
        </Card>
      </motion.div>

      {/* Philosophy Callout */}
      <motion.div variants={item} className="pt-8">
        <Card className="p-8 border-none bg-muted/30 overflow-hidden relative group">
          <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
            <Sparkles className="h-32 w-32" />
          </div>
          <div className="relative z-10 space-y-4">
            <h3 className="text-2xl font-bold tracking-tight">
              Radical Code Ownership
            </h3>
            <p className="text-muted-foreground leading-relaxed max-w-2xl">
              Once added, the component is yours. You are not locked into a
              specific version or API. Change the animations, tweak the
              accessibility roles, or completely rewrite the styles—it's all
              happening locally in your project.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button variant="outline" asChild>
                <Link href="/docs/philosophy">Read Philosophy</Link>
              </Button>
              <Button variant="link" asChild className="group">
                <Link
                  href="/docs/components"
                  className="inline-flex items-center"
                >
                  Browse 40+ Components
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Next Steps Grid */}
      <motion.div
        variants={item}
        className="space-y-8 pt-16 border-t border-border/50"
      >
        <h2 className="text-3xl font-extrabold tracking-tight">
          Explore Further
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Theming",
              desc: "Deep dive into our design token system and learn how to theme your app.",
              icon: MousePointer2,
              href: "/docs/theming",
            },
            {
              title: "CLI Reference",
              desc: "Master the command line tool and its advanced options.",
              icon: Terminal,
              href: "/docs/cli",
            },
            {
              title: "Installation",
              desc: "Detailed guides for Expo, Flutter, and Next.js integration.",
              icon: Package,
              href: "/docs/installation",
            },
          ].map((feature, i) => (
            <Link key={i} href={feature.href}>
              <Card className="p-6 h-full hover:bg-muted/50 transition-colors border-border/50 group">
                <div className="flex flex-col h-full space-y-3">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <feature.icon className="h-5 w-5" />
                  </div>
                  <h4 className="font-bold text-lg">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
