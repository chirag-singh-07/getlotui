"use client";

import Link from "next/link";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ArrowRight,
  Code2,
  Palette,
  Check,
  Terminal,
  Sparkles,
  Blocks,
  Smartphone,
  Layout,
  Command,
  Monitor,
  Cpu,
  Globe,
  Github,
  Twitter,
  Heart,
  Zap,
  Download,
  Copy,
  Rocket,
  ShoppingBag,
  MessageSquare,
  BarChart,
  User,
  HelpCircle,
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { useFramework } from "@/context/framework-context";
import { useRef } from "react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 20,
    },
  },
};

export default function LandingPage() {
  const { packageManager } = useFramework();
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();

  const y = useSpring(useTransform(scrollYProgress, [0, 1], [0, -100]), {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="flex min-h-screen flex-col overflow-hidden selection:bg-purple-500/20 selection:text-purple-400">
      <SiteHeader />
      <main className="flex-1 relative">
        {/* Ultra Premium Live Background */}
        <div className="fixed inset-0 -z-10 h-full w-full bg-[#000000]">
          {/* Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>

          {/* Animated Orbs */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-[10%] -top-[10%] h-[500px] w-[500px] rounded-full bg-purple-500/20 blur-[120px]"
          />
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.2, 0.4, 0.2],
              x: [0, 50, 0],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute right-[0%] top-[0%] h-[600px] w-[600px] rounded-full bg-blue-500/10 blur-[130px]"
          />
          <motion.div
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
            className="absolute left-[20%] bottom-[20%] h-[400px] w-[400px] rounded-full bg-pink-500/10 blur-[100px]"
          />
        </div>

        {/* Hero Section */}
        <section
          ref={targetRef}
          className="relative container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center gap-10 py-24 md:py-32 lg:py-48"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex max-w-[1100px] flex-col items-center gap-8 text-center z-10"
          >
            {/* Pill Badge */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, type: "spring" }}
              className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium backdrop-blur-xl shadow-lg shadow-purple-500/10 hover:bg-white/10 transition-colors cursor-default"
            >
              <Sparkles className="mr-2 h-3.5 w-3.5 text-purple-400 animate-pulse" />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent font-bold">
                GetLotUI 2.0
              </span>
              <span className="ml-2 text-gray-400">is here</span>
            </motion.div>

            {/* Massive Heading */}
            <h1 className="text-6xl font-extrabold leading-none tracking-tighter md:text-8xl lg:text-9xl text-balance bg-clip-text text-transparent bg-gradient-to-b from-white via-white/90 to-white/50 pb-4 relative z-20">
              Build Universal Apps
            </h1>

            <p className="max-w-[800px] text-lg text-gray-400 sm:text-xl md:text-2xl leading-relaxed text-balance">
              The first truly framework-agnostic component library.{" "}
              <br className="hidden md:block" />
              Copy-paste premium components for{" "}
              <span className="text-white font-semibold glow-text">
                React Native
              </span>
              ,{" "}
              <span className="text-white font-semibold glow-text">
                Flutter
              </span>
              , and{" "}
              <span className="text-white font-semibold glow-text">Web</span>.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-5 justify-center mt-6 w-full sm:w-auto"
            >
              <Button
                size="lg"
                asChild
                className="group h-14 px-10 text-lg bg-white text-black hover:bg-white/90 shadow-xl shadow-white/10 transition-all duration-300"
              >
                <Link href="/docs">
                  Start Building
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="h-14 px-10 text-lg border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all hover:text-white text-white"
              >
                <Link href="/docs/components">
                  <Command className="mr-2 h-5 w-5" />
                  Documentation
                </Link>
              </Button>
            </motion.div>

            {/* Tech Stack Ticker (Visual only) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-8 mt-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-700"
            >
              <div className="flex items-center gap-2">
                <Smartphone className="h-5 w-5 text-blue-400" />
                <span className="text-sm font-mono tracking-widest uppercase">
                  React Native
                </span>
              </div>
              <div className="h-1 w-1 rounded-full bg-white/20" />
              <div className="flex items-center gap-2">
                <Cpu className="h-5 w-5 text-sky-400" />
                <span className="text-sm font-mono tracking-widest uppercase">
                  Flutter
                </span>
              </div>
              <div className="h-1 w-1 rounded-full bg-white/20" />
              <div className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-yellow-400" />
                <span className="text-sm font-mono tracking-widest uppercase">
                  Web
                </span>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Trusted By Section (New) */}
        <section className="border-y border-white/5 bg-white/[0.02] backdrop-blur-sm py-12">
          <div className="container mx-auto px-4">
            <p className="text-center text-sm font-medium text-muted-foreground mb-8 uppercase tracking-widest">
              Trusted by developers at
            </p>
            <div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
              {/* Placeholders for logos - simplified text for now */}
              {["Acme Inc", "Vercel", "Expo", "Google", "Meta"].map(
                (name, i) => (
                  <div
                    key={i}
                    className="text-xl font-bold font-mono tracking-tighter text-white"
                  >
                    {name}
                  </div>
                )
              )}
            </div>
          </div>
        </section>

        {/* Terminal / Code Preview Section */}
        <section className="container mx-auto max-w-7xl px-4 py-24 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/10 bg-[#0a0a0a] shadow-2xl overflow-hidden"
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-white/[0.02]">
              <div className="flex gap-2">
                <div className="h-3 w-3 rounded-full bg-[#FF5F56] opacity-80" />
                <div className="h-3 w-3 rounded-full bg-[#FFBD2E] opacity-80" />
                <div className="h-3 w-3 rounded-full bg-[#27C93F] opacity-80" />
              </div>
              <div className="text-xs font-mono text-muted-foreground">
                getlotui-cli — 80x24
              </div>
              <div className="w-10"></div>
            </div>
            <div className="p-8 md:p-12 overflow-x-auto bg-[#050505]">
              <pre className="font-mono text-sm md:text-base leading-relaxed">
                <code className="text-gray-300">
                  <div className="mb-6 opacity-50">
                    <span># Select your target framework</span>
                  </div>
                  <span className="text-purple-400 font-bold">?</span>{" "}
                  <span className="text-white font-bold">
                    Which framework are you using?
                  </span>
                  {"\n"}
                  <div className="mt-2 text-cyan-400">
                    ❯ Expo (React Native)
                    <br />
                    &nbsp;&nbsp;Flutter
                    <br />
                    &nbsp;&nbsp;Next.js (Web)
                  </div>
                  {"\n"}
                  <div className="mb-2 mt-6 opacity-50">
                    <span># Add components instantly</span>
                  </div>
                  <span className="text-green-400 font-bold">$</span>{" "}
                  <span className="text-blue-400">
                    {packageManager === "npm" ? "npx" : "bunx"} getlotui
                  </span>{" "}
                  add authentication-screen
                  {"\n"}
                  <div className="py-4">
                    <span className="text-green-500">✔</span> Validating project
                    structure
                    <br />
                    <span className="text-green-500">✔</span> Installing
                    dependencies...{" "}
                    <span className="text-gray-500">(0.5s)</span>
                    <br />
                    <span className="text-green-500">✔</span> Created{" "}
                    <span className="underline decoration-gray-700">
                      components/auth/LoginScreen.tsx
                    </span>
                    <br />
                    <span className="text-green-500">✔</span> Created{" "}
                    <span className="underline decoration-gray-700">
                      components/auth/RegisterScreen.tsx
                    </span>
                  </div>
                  <span className="inline-block px-2 py-1 bg-green-500/10 text-green-400 rounded text-xs mt-2">
                    ✨ Components added successfully
                  </span>
                </code>
              </pre>
            </div>
          </motion.div>
        </section>

        {/* SECTION 1: Workflow Steps */}
        <section className="container mx-auto max-w-7xl px-4 py-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              How it Works
            </h2>
            <p className="text-xl text-muted-foreground">
              Three simple steps to build your dream app.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent border-t border-dashed border-white/20" />

            {[
              {
                icon: Download,
                title: "Install CLI",
                desc: "Run `npx getlotui init` to set up your project.",
              },
              {
                icon: Copy,
                title: "Pick Components",
                desc: "Browse our library and copy the code you need.",
              },
              {
                icon: Rocket,
                title: "Ship It",
                desc: "Customize to fit your brand and deploy.",
              },
            ].map((step, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="relative z-10 flex flex-col items-center text-center p-6 rounded-3xl bg-[#0a0a0a] border border-white/10 hover:border-purple-500/50 transition-colors"
              >
                <div className="h-20 w-20 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center mb-6 border border-white/10 shadow-lg shadow-purple-500/10">
                  <step.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Features - Bento Grid Style */}
        <section className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 relative">
          <div className="mx-auto flex max-w-2xl flex-col items-center space-y-4 text-center mb-20">
            <h2 className="text-3xl font-bold leading-[1.1] sm:text-4xl md:text-5xl lg:text-6xl text-balance tracking-tight">
              Reinventing{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                UI Development
              </span>
            </h2>
            <p className="max-w-[85%] mx-auto leading-normal text-muted-foreground sm:text-lg sm:leading-8 text-pretty mt-6">
              Stop fighting with dependencies. Start owning your UI.
            </p>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mx-auto grid max-w-6xl grid-cols-1 md:grid-cols-3 gap-6"
          >
            {/* Feature 1 - CLI First (Large) */}
            <motion.div className="md:col-span-2 relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-10 hover:bg-white/[0.08] transition-all duration-500 group">
              <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity">
                <Terminal className="w-80 h-80 text-white rotate-12" />
              </div>
              <div className="relative z-10">
                <div className="h-16 w-16 rounded-2xl bg-white/10 flex items-center justify-center mb-8 border border-white/10 shadow-inner">
                  <Terminal className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-4 text-white">
                  CLI-First Workflow
                </h3>
                <p className="text-gray-400 leading-relaxed text-lg max-w-md">
                  Scaffold specific components directly into your codebase. No
                  massive node_modules, no breaking changes.
                </p>
              </div>
            </motion.div>

            {/* Feature 2 - Customizable */}
            <motion.div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-10 hover:bg-white/[0.08] transition-all duration-500 group">
              <div className="relative z-10 h-full flex flex-col">
                <div className="h-16 w-16 rounded-2xl bg-pink-500/10 flex items-center justify-center mb-8 border border-pink-500/20 shadow-inner">
                  <Palette className="h-8 w-8 text-pink-400" />
                </div>
                <h3 className="text-3xl font-bold mb-4 text-white">Theming</h3>
                <p className="text-gray-400 leading-relaxed flex-1">
                  Global design tokens for colors, typography, and spacing.
                </p>
              </div>
            </motion.div>

            {/* Feature 3 - Ownership */}
            <motion.div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-10 hover:bg-white/[0.08] transition-all duration-500 group">
              <div className="relative z-10 h-full flex flex-col">
                <div className="h-16 w-16 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-8 border border-blue-500/20 shadow-inner">
                  <Code2 className="h-8 w-8 text-blue-400" />
                </div>
                <h3 className="text-3xl font-bold mb-4 text-white">
                  100% Code
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  You own every line. Modify logic, add features, delete what
                  you don't need.
                </p>
              </div>
            </motion.div>

            {/* Feature 4 - Perf */}
            <motion.div className="md:col-span-2 relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-10 hover:bg-white/[0.08] transition-all duration-500 group">
              <div className="absolute bottom-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity">
                <Zap className="w-80 h-80 text-yellow-400 -rotate-12" />
              </div>
              <div className="relative z-10">
                <div className="h-16 w-16 rounded-2xl bg-yellow-500/10 flex items-center justify-center mb-8 border border-yellow-500/20 shadow-inner">
                  <Zap className="h-8 w-8 text-yellow-400" />
                </div>
                <h3 className="text-3xl font-bold mb-4 text-white">
                  Zero Runtime Overhead
                </h3>
                <p className="text-gray-400 leading-relaxed text-lg max-w-md">
                  Since components are compiled as part of your app, there is no
                  extra library weight. Just pure, native performance.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* SECTION 2: Templates / Starter Kits */}
        <section className="container mx-auto max-w-7xl px-4 py-24 border-t border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Kickstart with Templates
              </h2>
              <p className="text-xl text-muted-foreground w-1/2">
                Don't start from scratch. Use our production-ready starter kits.
              </p>
            </div>
            <Button
              variant="ghost"
              className="text-purple-400 hover:text-purple-300"
            >
              View All Templates <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "E-Commerce",
                icon: ShoppingBag,
                color: "bg-orange-500",
                desc: "Full featured store with cart, checkout, and product details.",
              },
              {
                title: "Social App",
                icon: MessageSquare,
                color: "bg-blue-500",
                desc: "Feed, profile, messaging, and notifications system.",
              },
              {
                title: "SaaS Dashboard",
                icon: BarChart,
                color: "bg-green-500",
                desc: "Analytics, user management, and subscription billing.",
              },
            ].map((template, i) => (
              <div key={i} className="group cursor-pointer">
                <div
                  className={`h-64 rounded-3xl ${template.color}/10 border border-white/5 mb-6 relative overflow-hidden`}
                >
                  <div
                    className={`absolute inset-0 ${template.color}/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <template.icon
                      className={`h-16 w-16 ${template.color.replace(
                        "bg-",
                        "text-"
                      )} opacity-50 group-hover:scale-110 transition-transform duration-500`}
                    />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-2">{template.title}</h3>
                <p className="text-muted-foreground">{template.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 3: Detailed Comparison */}
        <section className="container mx-auto max-w-7xl px-4 py-24 border-t border-white/5">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Why GetLotUI?
            </h2>
            <p className="text-xl text-muted-foreground">
              See how we stack up against the rest.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-[#0a0a0a] overflow-hidden">
            <div className="grid grid-cols-3 p-6 border-b border-white/10 bg-white/5 text-sm font-bold uppercase tracking-wider">
              <div>Feature</div>
              <div className="text-center text-muted-foreground">
                Traditional UI Libs
              </div>
              <div className="text-center text-purple-400">GetLotUI</div>
            </div>
            {[
              {
                feature: "Bundle Size",
                bad: "Heavy (All components)",
                good: "Zero (Only what you use)",
              },
              {
                feature: "Styling Control",
                bad: "Limited API",
                good: "Full Code Access",
              },
              {
                feature: "Frameworks",
                bad: "React Only",
                good: "React Native, Flutter, Web",
              },
              {
                feature: "Theming",
                bad: "Complex Overrides",
                good: "Native Tokens",
              },
              {
                feature: "Dependencies",
                bad: "Many (Risk of breaking)",
                good: "None (It's just code)",
              },
            ].map((row, i) => (
              <div
                key={i}
                className="grid grid-cols-3 p-6 border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition-colors"
              >
                <div className="font-medium">{row.feature}</div>
                <div className="text-center text-muted-foreground">
                  {row.bad}
                </div>
                <div className="text-center font-bold text-white flex items-center justify-center gap-2">
                  <Check className="h-4 w-4 text-green-500" /> {row.good}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Framework Support - Write Once Ship Everywhere */}
        <section className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 border-t border-white/5 relative">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Universal Support
            </h2>
            <p className="text-xl text-gray-400">
              One design system. Every platform. No compromises.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "React Native",
                icon: Smartphone,
                color: "text-blue-400",
                bg: "bg-blue-500/10",
                desc: "Native iOS and Android apps with Expo.",
                status: "Fully Supported",
              },
              {
                name: "Flutter",
                icon: Cpu,
                color: "text-sky-400",
                bg: "bg-sky-500/10",
                desc: "High-performance compiled native apps.",
                status: "Fully Supported",
              },
              {
                name: "Web",
                icon: Globe,
                color: "text-yellow-400",
                bg: "bg-yellow-500/10",
                desc: "Responsive web apps with Next.js/React.",
                status: "Fully Supported",
              },
            ].map((fw, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 relative overflow-hidden group"
              >
                <div
                  className={`absolute top-0 right-0 w-32 h-32 ${fw.bg} blur-3xl rounded-full opacity-20 group-hover:opacity-40 transition-opacity`}
                />

                <div
                  className={`h-14 w-14 rounded-2xl ${fw.bg} flex items-center justify-center mb-6 border border-white/5`}
                >
                  <fw.icon className={`h-7 w-7 ${fw.color}`} />
                </div>

                <h3 className="text-2xl font-bold mb-2">{fw.name}</h3>
                <p className="text-gray-400 mb-6">{fw.desc}</p>

                <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-medium uppercase tracking-wide">
                  <Check className="w-3 h-3 mr-1.5" />
                  {fw.status}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* SECTION 4: Testimonials */}
        <section className="container mx-auto max-w-7xl px-4 py-24 border-t border-white/5">
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">
            Loved by the Community
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Alex Chen",
                role: "Senior FE Dev",
                text: "Finally, a library that doesn't feel like I'm fighting the framework. The generated code is clean and idiomatic.",
              },
              {
                name: "Sarah Jones",
                role: "CTO @ Startup",
                text: "We migrated our entire Expo app to GetLotUI in a weekend. The performance gains were immediate.",
              },
              {
                name: "Michael Pratt",
                role: "Indie Hacker",
                text: "The Flutter templates are a lifesaver. I shipped my MVP in 3 days thanks to this.",
              },
            ].map((t, i) => (
              <div
                key={i}
                className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors"
              >
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Sparkles
                      key={s}
                      className="h-4 w-4 text-yellow-500 fill-yellow-500"
                    />
                  ))}
                </div>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500" />
                  <div>
                    <div className="font-bold">{t.name}</div>
                    <div className="text-xs text-muted-foreground">
                      {t.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 5: FAQ */}
        <section className="container mx-auto max-w-3xl px-4 py-24 border-t border-white/5">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {[
              {
                q: "Is this really free?",
                a: "Yes, GetLotUI is 100% open source and free to use for personal and commercial projects.",
              },
              {
                q: "How do I update components?",
                a: "The components are yours once you add them. You can update them manually or run the CLI update command to diff changes.",
              },
              {
                q: "Can I use with Tailwind?",
                a: "The Web and React Native (via NativeWind) versions are built with Tailwind in mind.",
              },
              {
                q: "Is Flutter support stable?",
                a: "Flutter support is currently in beta but fully functional for production use.",
              },
            ].map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border-white/10"
              >
                <AccordionTrigger className="text-lg hover:no-underline hover:text-purple-400">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 text-base">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* Community / Ecosystem Section */}
        <section className="py-24 bg-[#0a0a0a]">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium mb-8">
              <Heart className="mr-2 h-4 w-4 text-red-500 fill-red-500" />
              <span className="text-gray-300">Open Source Community</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-12">
              Join the Ecosystem
            </h2>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <Link
                href="https://github.com/chirag-singh-07/crossui"
                target="_blank"
                className="group rounded-2xl border border-white/10 bg-white/[0.02] p-8 hover:bg-white/[0.05] transition-all flex items-center gap-6 text-left"
              >
                <div className="h-16 w-16 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                  <Github className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-1 group-hover:text-purple-400 transition-colors">
                    GitHub
                  </h3>
                  <p className="text-gray-400">
                    Star the repo, report issues, and contribute to the
                    codebase.
                  </p>
                </div>
              </Link>

              <Link
                href="#"
                className="group rounded-2xl border border-white/10 bg-white/[0.02] p-8 hover:bg-white/[0.05] transition-all flex items-center gap-6 text-left"
              >
                <div className="h-16 w-16 bg-blue-500/10 rounded-full flex items-center justify-center shrink-0">
                  <Twitter className="h-8 w-8 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-1 group-hover:text-blue-400 transition-colors">
                    Twitter / X
                  </h3>
                  <p className="text-gray-400">
                    Follow for updates, tips, and showcases from the community.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 pb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-[3rem] bg-gradient-to-br from-purple-600 to-blue-600 px-6 py-20 text-center overflow-hidden"
          >
            <div className="absolute inset-0 bg-black/10" />
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/20 blur-[100px] rounded-full pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-black/20 blur-[100px] rounded-full pointer-events-none" />

            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
                Ready to ship?
              </h2>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button
                  size="lg"
                  variant="secondary"
                  asChild
                  className="h-16 px-12 text-xl font-bold rounded-full bg-white text-purple-600 hover:bg-gray-100 shadow-2xl"
                >
                  <Link href="/docs">Get Started Now</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </section>
      </main>
    </div>
  );
}
