"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ArrowRight,
  Code2,
  Sparkles,
  Zap,
  Package,
  Layers,
  Monitor,
  Smartphone,
  CheckCircle2,
} from "lucide-react";
import { motion } from "framer-motion";

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

export default function DocsPage() {
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
          <Sparkles className="mr-2 h-3.5 w-3.5" />
          Pre-release v0.5.0
        </div>
        <div className="space-y-4">
          <h1 className="scroll-m-20 text-5xl font-extrabold tracking-tight lg:text-6xl text-balance bg-linear-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
            Introduction
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-[800px] text-balance">
            Build beautiful, accessible, and high-performance applications with
            copy-and-paste components. Inspired by shadcn/ui, architected for
            the modern multi-platform era.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 pt-4">
          <Button size="lg" className="h-12 px-8 text-base shadow-lg" asChild>
            <Link href="/docs/quick-start">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="h-12 px-8 text-base border-2 hover:text-white"
            asChild
          >
            <Link href="/docs/components">Browse Components</Link>
          </Button>
        </div>
      </motion.div>

      {/* What is CrossUI Section */}
      <motion.div variants={item} className="space-y-6 pt-8">
        <div className="space-y-2">
          <h2 className="scroll-m-20 text-3xl font-bold tracking-tight border-b border-border/50 pb-2">
            What is CrossUI?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            CrossUI is{" "}
            <span className="text-foreground font-medium italic">not</span> a
            traditional component library. It is a collection of re-usable
            components that you own, designed to work seamlessly across multiple
            frameworks.
          </p>
        </div>
        <div className="grid gap-6">
          <p className="text-muted-foreground leading-relaxed">
            The philosophy is simple: we provide the high-quality, unstyled (or
            minimally styled) components with powerful logic, and you copy the
            code into your project. Use our CLI to add them instantly, then
            customize every line to fit your brand.
          </p>
          <Card className="p-8 bg-linear-to-br from-primary/3 to-primary/1 border-primary/20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Layers className="h-24 w-24" />
            </div>
            <div className="relative z-10 space-y-4">
              <p className="text-base leading-relaxed text-foreground/90">
                <strong>The Core Principle:</strong> Radical Ownership. Instead
                of fighting a package in{" "}
                <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono">
                  node_modules
                </code>
                , you have the source code in your{" "}
                <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono">
                  ui/
                </code>{" "}
                folder. Customize the animations, the accessibility descriptors,
                or the fundamental layout without limits.
              </p>
            </div>
          </Card>
        </div>
      </motion.div>

      {/* Philosophy/Features Grid */}
      <motion.div variants={item} className="space-y-8 pt-8">
        <h2 className="scroll-m-20 text-3xl font-bold tracking-tight border-b border-border/50 pb-2">
          Philosophy
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              title: "Own Your Code",
              desc: "Components live in your project. Modify, extend, or completely rewrite them. No more tracking upstream breaking changes.",
              icon: Code2,
              color: "bg-blue-500/10 text-blue-500",
            },
            {
              title: "Theme-Driven",
              desc: "A unified design token system helps you toggle between light/dark modes and custom brand palettes across all platforms.",
              icon: Sparkles,
              color: "bg-purple-500/10 text-purple-500",
            },
            {
              title: "CLI-First",
              desc: "Add logic-heavy components with a single command. The CLI handles dependencies and scaffolding automatically.",
              icon: Zap,
              color: "bg-amber-500/10 text-amber-500",
            },
            {
              title: "Multi-Framework",
              desc: "Write once, render anywhere. First-class support for Expo (React Native), with growing support for Flutter and Next.js.",
              icon: Package,
              color: "bg-emerald-500/10 text-emerald-500",
            },
          ].map((feature, i) => (
            <Card
              key={i}
              className="p-8 hover:bg-muted/30 transition-all duration-300 border-border/50 group"
            >
              <div className="flex items-start gap-5">
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${feature.color} group-hover:scale-110 transition-transform`}
                >
                  <feature.icon className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {feature.desc}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </motion.div>

      {/* Multi-Platform Strategy */}
      <motion.div variants={item} className="space-y-8 pt-8">
        <h2 className="scroll-m-20 text-3xl font-bold tracking-tight border-b border-border/50 pb-2">
          Multi-Platform Support
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              name: "Expo / Native",
              status: "Stable",
              desc: "Built with React Native and Reanimated for world-class performance.",
              icon: Smartphone,
            },
            {
              name: "Flutter",
              status: "Beta",
              desc: "Native Dart implementation for pixel-perfect cross-platform consistency.",
              icon: Layers,
            },
            {
              name: "Web / Next.js",
              status: "Ready",
              desc: "Optimized for SSR and standard web accessibility features.",
              icon: Monitor,
            },
          ].map((platform, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl border border-border/50 bg-card hover:border-primary/50 transition-colors"
            >
              <div className="flex items-center justify-between mb-4">
                <platform.icon className="h-6 w-6 text-primary" />
                <span
                  className={`text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full ${
                    platform.status === "Stable"
                      ? "bg-emerald-500/10 text-emerald-500"
                      : platform.status === "Beta"
                      ? "bg-amber-500/10 text-amber-500"
                      : "bg-blue-500/10 text-blue-500"
                  }`}
                >
                  {platform.status}
                </span>
              </div>
              <h3 className="font-bold mb-1">{platform.name}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {platform.desc}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Workflow Section */}
      <motion.div variants={item} className="space-y-8 pt-8">
        <h2 className="scroll-m-20 text-3xl font-bold tracking-tight border-b border-border/50 pb-2">
          How it Works
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              step: "01",
              title: "Initialize",
              desc: "Run the init command to set up your design tokens (colors, spacing, typography) in a local config file.",
            },
            {
              step: "02",
              title: "Add Components",
              desc: "Use the CLI to select components. The source code is injected directly into your /ui folder.",
            },
            {
              step: "03",
              title: "Make it Yours",
              desc: "Since the code is local, you can change the styling logic, add custom props, or swap animation libraries.",
            },
          ].map((phase, i) => (
            <div key={i} className="relative space-y-3">
              <span className="text-6xl font-black text-muted/30 absolute -top-4 -left-2 select-none">
                {phase.step}
              </span>
              <h3 className="text-xl font-bold relative z-10">{phase.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {phase.desc}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Architecture Section */}
      <motion.div variants={item} className="space-y-12 pt-8">
        <div className="space-y-4">
          <h2 className="scroll-m-20 text-3xl font-bold tracking-tight border-b border-border/50 pb-2">
            The Architecture
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
            CrossUI is architected around the concept of{" "}
            <strong>Headless Multi-Platform Logic</strong>. We encapsulate
            complex behaviors into a universal core, allowing for native-speed
            rendering on every target.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Left Side: Detailed Explanations */}
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-4">
              {[
                {
                  title: "Headless Core",
                  desc: "Shared state machines and accessibility logic that remain constant across Web, iOS, and Android.",
                  icon: Code2,
                  color: "text-blue-500",
                },
                {
                  title: "Native Adapters",
                  desc: "Platform-specific bridges that translate core logic into native primitives like View, Div, or Widget.",
                  icon: Smartphone,
                  color: "text-emerald-500",
                },
                {
                  title: "Design Tokens",
                  desc: "A centralized JSON-driven system for your brand's colors, spacing, and motion curves.",
                  icon: Sparkles,
                  color: "text-amber-500",
                },
              ].map((layer, i) => (
                <div key={i} className="flex gap-4 group">
                  <div
                    className={`mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted border border-border group-hover:border-primary/50 transition-colors ${layer.color}`}
                  >
                    <layer.icon className="h-5 w-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-foreground">{layer.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {layer.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: 3D Layer Stack Visualization */}
          <div className="lg:col-span-3 flex justify-center py-12 lg:py-0">
            <div className="relative w-full max-w-[400px] perspective-[1000px] rotate-y-[-20deg] rotate-x-[15deg]">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative space-y-[-40px]"
              >
                {/* Layer 3: Presentation */}
                <div className="relative z-30 transform translate-z-[60px] hover:translate-y-[-10px] transition-transform cursor-help">
                  <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border-2 border-primary shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-primary">
                        Presentation Layer
                      </span>
                      <Monitor className="h-4 w-4 text-primary" />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="h-10 rounded-lg bg-primary/5 border border-primary/20 flex items-center justify-center text-[10px] font-mono italic">
                        Tailwind CSS
                      </div>
                      <div className="h-10 rounded-lg bg-primary/5 border border-primary/20 flex items-center justify-center text-[10px] font-mono italic">
                        NativeView
                      </div>
                    </div>
                  </div>
                </div>

                {/* Layer 2: Universal Logic */}
                <div className="relative z-20 transform translate-z-[30px] hover:translate-y-[-10px] transition-transform cursor-help">
                  <div className="p-6 rounded-2xl bg-primary text-primary-foreground shadow-[0_20px_50px_rgba(0,0,0,0.2)]">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] font-bold uppercase tracking-widest opacity-80">
                        CrossUI Core
                      </span>
                      <Layers className="h-4 w-4 opacity-80" />
                    </div>
                    <div className="py-2 text-center text-sm font-bold tracking-tight">
                      Headless Logic & State Machines
                    </div>
                  </div>
                </div>

                {/* Layer 1: Infrastructure */}
                <div className="relative z-10 transform hover:translate-y-[-10px] transition-transform cursor-help">
                  <div className="p-6 rounded-2xl bg-zinc-100 dark:bg-zinc-800 border border-border shadow-xl">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                        Tokens Layer
                      </span>
                      <Zap className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <div className="flex gap-2 justify-center">
                      <div className="px-3 py-1 rounded bg-background border text-[9px] font-mono">
                        Colors.json
                      </div>
                      <div className="px-3 py-1 rounded bg-background border text-[9px] font-mono">
                        Spacing.ts
                      </div>
                      <div className="px-3 py-1 rounded bg-background border text-[9px] font-mono">
                        Motion.kt
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Decorative Labels for Diagram */}
              <div className="absolute -right-8 top-1/2 -translate-y-1/2 space-y-24 pointer-events-none hidden md:block">
                <div className="flex items-center gap-2">
                  <div className="w-12 h-[1px] bg-border" />
                  <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-tighter">
                    View
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-12 h-[1px] bg-primary/50" />
                  <span className="text-[10px] font-mono text-primary uppercase tracking-tighter">
                    Logic
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-12 h-[1px] bg-border" />
                  <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-tighter">
                    Data
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Accessibility Section */}
      <motion.div variants={item} className="space-y-8 pt-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-border/50 pb-2">
          <h2 className="scroll-m-20 text-3xl font-bold tracking-tight">
            Accessibility
          </h2>
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500" />
            <span className="text-xs font-bold uppercase tracking-wider opacity-60">
              WCAG 2.1 Compliant
            </span>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Keyboard Navigation",
              desc: "Full focus management and shortcut support for all interactive elements.",
            },
            {
              title: "Screen Readers",
              desc: "Correct ARIA roles and labels are baked into the component templates.",
            },
            {
              title: "Focus Rings",
              desc: "Highly visible focus indicators that look great on both touch and mouse.",
            },
          ].map((a11y, i) => (
            <div key={i} className="space-y-2">
              <h4 className="font-bold">{a11y.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {a11y.desc}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* FAQ Section */}
      <motion.div variants={item} className="space-y-8 pt-16">
        <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
        <div className="grid gap-8 border-t border-border/50 pt-8">
          {[
            {
              q: "Why not just use an NPM package?",
              a: "Packages make it hard to customize. If you want to change a specific animation or a sub-component behavior, you're stuck. CrossUI gives you the source code so there are no black boxes.",
            },
            {
              q: "Does this support Tailwind CSS?",
              a: "Yes. For Web and React Native (via NativeWind), Tailwind is the primary way we handle styling tokens.",
            },
            {
              q: "Can I use this in an existing project?",
              a: "Absolutely. You can initialize CrossUI in any folder. It won't interfere with your existing components.",
            },
          ].map((faq, i) => (
            <div key={i} className="space-y-2">
              <h3 className="font-bold text-lg">{faq.q}</h3>
              <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Why Choose Section */}
      <motion.div variants={item} className="space-y-6 pt-8">
        <h2 className="scroll-m-20 text-3xl font-bold tracking-tight border-b border-border/50 pb-2">
          Why Choose CrossUI?
        </h2>
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
          {[
            "Accessible by Default (WCAG & ARIA)",
            "Zero Design System Bloat",
            "Performance First Architecture",
            "Seamless Dark Mode Integration",
            "TypeScript First Developer Experience",
            "Full Logic Ownership",
          ].map((text, i) => (
            <div key={i} className="flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
              <span className="text-muted-foreground font-medium">{text}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Quick Start Path */}
      <motion.div
        variants={item}
        className="space-y-8 pt-16 border-t border-border/50"
      >
        <div className="space-y-2">
          <h2 className="text-3xl font-extrabold tracking-tight">
            Ready to integrate?
          </h2>
          <p className="text-muted-foreground text-lg italic">
            The journey to a unified cross-platform UI starts here.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3 text-center">
          {[
            {
              title: "Installation",
              desc: "Set up the design tokens and base components in your project.",
              href: "/docs/installation",
              label: "Read Guide",
            },
            {
              title: "Components",
              desc: "Browse through 40+ production-ready components and previews.",
              href: "/docs/components",
              label: "Browse Library",
            },
            {
              title: "Theming",
              desc: "Customize the color palette and typography to match your brand.",
              href: "/docs/theming",
              label: "Customize Now",
            },
          ].map((box, i) => (
            <div
              key={i}
              className="flex flex-col items-center p-8 bg-muted/20 border border-border/50 rounded-3xl hover:bg-muted/40 transition-colors"
            >
              <h3 className="text-xl font-bold mb-2">{box.title}</h3>
              <p className="text-sm text-muted-foreground mb-6 h-12 leading-relaxed">
                {box.desc}
              </p>
              <Button variant="link" className="group p-0" asChild>
                <Link
                  href={box.href}
                  className="text-primary font-bold inline-flex items-center"
                >
                  {box.label}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
