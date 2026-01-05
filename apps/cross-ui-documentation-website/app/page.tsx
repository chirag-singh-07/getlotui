"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Code2,
  Palette,
  Zap,
  Check,
  Terminal,
  Sparkles,
  Copy,
  Blocks,
  Lock,
  Smartphone,
  Package,
  FileCode,
  Star,
  TrendingUp,
  Shield,
  Layers,
  Github,
  Twitter,
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { useFramework } from "@/context/framework-context";

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

export default function LandingPage() {
  const { packageManager } = useFramework();

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center gap-4 pb-8 pt-6 md:py-24 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex max-w-[980px] flex-col items-center gap-4 text-center"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium mb-2 backdrop-blur-sm"
            >
              <Sparkles className="mr-2 h-3 w-3 text-primary" /> Introducing
              CrossUI 1.0
            </motion.div>
            <h1 className="text-4xl font-bold leading-tight tracking-tighter md:text-6xl lg:text-7xl lg:leading-[1.1] text-balance">
              Build your React Native apps <br className="hidden sm:inline" />
              with{" "}
              <span className="bg-linear-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient bg-size-[200%_auto]">
                copy & paste components
              </span>
            </h1>
            <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl leading-relaxed text-balance">
              Beautifully designed components that you can copy and paste into
              your apps. Accessible. Customizable. Open Source. Built for Expo,
              expanding to Flutter and Web.
            </p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4 justify-center mt-4"
            >
              <Button size="lg" asChild className="group">
                <Link href="/docs">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/docs/components">Browse Components</Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Code Example */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full max-w-[900px] mt-16"
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-linear-to-r from-primary to-accent opacity-20 blur-2xl" />
              <div className="relative rounded-xl border border-border bg-card shadow-2xl overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/40">
                  <div className="flex gap-1.5">
                    <div className="h-3 w-3 rounded-full bg-red-500/80" />
                    <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                    <div className="h-3 w-3 rounded-full bg-green-500/80" />
                  </div>
                  <span className="text-xs text-muted-foreground ml-2 font-mono">
                    terminal
                  </span>
                </div>
                <div className="p-6">
                  <pre className="text-sm leading-relaxed">
                    <code className="text-foreground font-mono">
                      <span className="text-muted-foreground">{"$ "}</span>
                      <span className="text-primary">
                        {packageManager === "npm"
                          ? "npx"
                          : packageManager === "pnpm"
                          ? "pnpm dlx"
                          : packageManager === "yarn"
                          ? "yarn dlx"
                          : "bunx"}{" "}
                        crossui
                      </span>{" "}
                      init
                      {"\n"}
                      {"\n"}
                      <span className="text-muted-foreground">
                        Which framework are you using?
                      </span>
                      {"\n"}
                      <span className="text-accent">❯ Expo (React Native)</span>
                      {"\n"}
                      {"\n"}
                      <span className="text-muted-foreground">{"$ "}</span>
                      <span className="text-primary">
                        {packageManager === "npm"
                          ? "npx"
                          : packageManager === "pnpm"
                          ? "pnpm dlx"
                          : packageManager === "yarn"
                          ? "yarn dlx"
                          : "bunx"}{" "}
                        crossui
                      </span>{" "}
                      add button
                      {"\n"}
                      <span className="text-green-500">✓</span>{" "}
                      <span className="text-muted-foreground">
                        Added button component
                      </span>
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Stats Section */}
        <section className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-20 border-y border-border/40 bg-muted/20">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            <motion.div variants={item} className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-linear-to-br from-primary to-accent bg-clip-text text-transparent mb-2">
                50+
              </div>
              <div className="text-sm text-muted-foreground">Components</div>
            </motion.div>
            <motion.div variants={item} className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-linear-to-br from-primary to-accent bg-clip-text text-transparent mb-2">
                10K+
              </div>
              <div className="text-sm text-muted-foreground">Downloads</div>
            </motion.div>
            <motion.div variants={item} className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-linear-to-br from-primary to-accent bg-clip-text text-transparent mb-2">
                3
              </div>
              <div className="text-sm text-muted-foreground">Frameworks</div>
            </motion.div>
            <motion.div variants={item} className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-linear-to-br from-primary to-accent bg-clip-text text-transparent mb-2">
                100%
              </div>
              <div className="text-sm text-muted-foreground">Open Source</div>
            </motion.div>
          </motion.div>
        </section>

        {/* Features */}
        <section className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="mx-auto flex max-w-232 flex-col items-center space-y-4 text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl text-balance">
                Features
              </h2>
              <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7 text-pretty mt-4">
                Everything you need to build beautiful React Native
                applications. Copy. Paste. Customize.
              </p>
            </motion.div>
          </div>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            <motion.div
              variants={item}
              whileHover={{ scale: 1.02 }}
              className="relative overflow-hidden rounded-lg border border-border bg-card p-6 hover:shadow-lg hover:shadow-primary/5 transition-all"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                <Terminal className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">CLI-First</h3>
              <p className="text-muted-foreground leading-relaxed text-pretty">
                Add components to your project with a simple command. No
                configuration required. Just like shadcn/ui.
              </p>
            </motion.div>
            <motion.div
              variants={item}
              whileHover={{ scale: 1.02 }}
              className="relative overflow-hidden rounded-lg border border-border bg-card p-6 hover:shadow-lg hover:shadow-accent/5 transition-all"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 mb-4">
                <Palette className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Customizable</h3>
              <p className="text-muted-foreground leading-relaxed text-pretty">
                Components are yours. Use them as a starting point and customize
                to your heart's content.
              </p>
            </motion.div>
            <motion.div
              variants={item}
              whileHover={{ scale: 1.02 }}
              className="relative overflow-hidden rounded-lg border border-border bg-card p-6 hover:shadow-lg hover:shadow-primary/5 transition-all"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                <Code2 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Full Control</h3>
              <p className="text-muted-foreground leading-relaxed text-pretty">
                No npm packages. Copy the code directly to your project. Modify
                as needed. You own the code.
              </p>
            </motion.div>
            <motion.div
              variants={item}
              whileHover={{ scale: 1.02 }}
              className="relative overflow-hidden rounded-lg border border-border bg-card p-6 hover:shadow-lg hover:shadow-accent/5 transition-all"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 mb-4">
                <Sparkles className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Theme-Driven</h3>
              <p className="text-muted-foreground leading-relaxed text-pretty">
                Built with theming in mind. Easily customize colors, spacing,
                typography, and more in one place.
              </p>
            </motion.div>
            <motion.div
              variants={item}
              whileHover={{ scale: 1.02 }}
              className="relative overflow-hidden rounded-lg border border-border bg-card p-6 hover:shadow-lg hover:shadow-primary/5 transition-all"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Developer Experience
              </h3>
              <p className="text-muted-foreground leading-relaxed text-pretty">
                Built for developers who care about their craft. Type-safe,
                documented, and battle-tested.
              </p>
            </motion.div>
            <motion.div
              variants={item}
              whileHover={{ scale: 1.02 }}
              className="relative overflow-hidden rounded-lg border border-border bg-card p-6 hover:shadow-lg hover:shadow-accent/5 transition-all"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 mb-4">
                <Copy className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Copy & Paste</h3>
              <p className="text-muted-foreground leading-relaxed text-pretty">
                Browse the component library, copy the code, and paste it into
                your project. It's that simple.
              </p>
            </motion.div>
          </motion.div>
        </section>

        <section className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32 border-t border-border/40">
          <div className="mx-auto flex max-w-232 flex-col items-center space-y-4 text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl text-balance">
                Component Showcase
              </h2>
              <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7 text-pretty mt-4">
                Explore our extensive library of production-ready components
              </p>
            </motion.div>
          </div>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
          >
            <motion.div
              variants={item}
              whileHover={{ scale: 1.02 }}
              className="relative group overflow-hidden rounded-lg border border-border bg-card p-8 hover:shadow-lg transition-all"
            >
              <Blocks className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Basic Components</h3>
              <p className="text-muted-foreground mb-4">
                Buttons, inputs, cards, badges and more
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-2 py-1 rounded-md bg-primary/10 text-primary">
                  Button
                </span>
                <span className="text-xs px-2 py-1 rounded-md bg-primary/10 text-primary">
                  Input
                </span>
                <span className="text-xs px-2 py-1 rounded-md bg-primary/10 text-primary">
                  Card
                </span>
                <span className="text-xs px-2 py-1 rounded-md bg-primary/10 text-primary">
                  Badge
                </span>
              </div>
            </motion.div>
            <motion.div
              variants={item}
              whileHover={{ scale: 1.02 }}
              className="relative group overflow-hidden rounded-lg border border-border bg-card p-8 hover:shadow-lg transition-all"
            >
              <Layers className="h-8 w-8 text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Advanced Components
              </h3>
              <p className="text-muted-foreground mb-4">
                Modals, dropdowns, tabs, and navigation
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-2 py-1 rounded-md bg-accent/10 text-accent">
                  Modal
                </span>
                <span className="text-xs px-2 py-1 rounded-md bg-accent/10 text-accent">
                  Dropdown
                </span>
                <span className="text-xs px-2 py-1 rounded-md bg-accent/10 text-accent">
                  Tabs
                </span>
                <span className="text-xs px-2 py-1 rounded-md bg-accent/10 text-accent">
                  Nav
                </span>
              </div>
            </motion.div>
          </motion.div>
        </section>

        <section className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32 border-t border-border/40 bg-muted/10">
          <div className="mx-auto flex max-w-232 flex-col items-center space-y-4 text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl text-balance">
                Multi-Framework Support
              </h2>
              <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7 text-pretty mt-4">
                Build with your favorite framework, share components across
                platforms
              </p>
            </motion.div>
          </div>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto"
          >
            <motion.div
              variants={item}
              className="text-center p-8 rounded-lg border border-border bg-card"
            >
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                <Smartphone className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">React Native</h3>
              <p className="text-muted-foreground mb-4">
                Full support with Expo
              </p>
              <div className="inline-flex px-3 py-1 rounded-full text-xs font-medium bg-green-500/10 text-green-500">
                Available Now
              </div>
            </motion.div>
            <motion.div
              variants={item}
              className="text-center p-8 rounded-lg border border-border bg-card"
            >
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 mb-4">
                <Package className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Flutter</h3>
              <p className="text-muted-foreground mb-4">Dart implementation</p>
              <div className="inline-flex px-3 py-1 rounded-full text-xs font-medium bg-yellow-500/10 text-yellow-500">
                Coming Soon
              </div>
            </motion.div>
            <motion.div
              variants={item}
              className="text-center p-8 rounded-lg border border-border bg-card"
            >
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                <FileCode className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Web</h3>
              <p className="text-muted-foreground mb-4">React for web apps</p>
              <div className="inline-flex px-3 py-1 rounded-full text-xs font-medium bg-yellow-500/10 text-yellow-500">
                Coming Soon
              </div>
            </motion.div>
          </motion.div>
        </section>

        <section className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32 border-t border-border/40">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          >
            <motion.div variants={item} className="text-center">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Type Safe</h3>
              <p className="text-sm text-muted-foreground">
                Built with TypeScript for maximum type safety and intellisense
                support
              </p>
            </motion.div>
            <motion.div variants={item} className="text-center">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 mb-4">
                <Lock className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Accessible</h3>
              <p className="text-sm text-muted-foreground">
                WCAG compliant components with proper ARIA labels and keyboard
                navigation
              </p>
            </motion.div>
            <motion.div variants={item} className="text-center">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Production Ready</h3>
              <p className="text-sm text-muted-foreground">
                Battle-tested in production apps, optimized for performance and
                reliability
              </p>
            </motion.div>
          </motion.div>
        </section>

        <section className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32 border-t border-border/40 bg-muted/10">
          <div className="mx-auto flex max-w-232 flex-col items-center space-y-4 text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl text-balance">
                Loved by developers
              </h2>
              <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7 text-pretty mt-4">
                Join thousands of developers building with CrossUI
              </p>
            </motion.div>
          </div>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto"
          >
            <motion.div
              variants={item}
              className="p-6 rounded-lg border border-border bg-card"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-primary text-primary"
                    />
                  ))}
                </div>
              </div>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                "CrossUI has been a game changer for our mobile development. The
                components are beautiful and easy to customize."
              </p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-linear-to-br from-primary to-accent" />
                <div>
                  <div className="font-semibold text-sm">Sarah Chen</div>
                  <div className="text-xs text-muted-foreground">
                    Lead Developer at TechCo
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              variants={item}
              className="p-6 rounded-lg border border-border bg-card"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-primary text-primary"
                    />
                  ))}
                </div>
              </div>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                "The copy-paste approach is genius. We have full control over
                our components and can ship faster than ever."
              </p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-linear-to-br from-accent to-primary" />
                <div>
                  <div className="font-semibold text-sm">Michael Rodriguez</div>
                  <div className="text-xs text-muted-foreground">
                    Founder at StartupXYZ
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              variants={item}
              className="p-6 rounded-lg border border-border bg-card"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-primary text-primary"
                    />
                  ))}
                </div>
              </div>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                "Finally, a component library that doesn't lock you in. The code
                quality is exceptional and well documented."
              </p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-linear-to-br from-primary to-accent" />
                <div>
                  <div className="font-semibold text-sm">Emma Thompson</div>
                  <div className="text-xs text-muted-foreground">
                    Senior Engineer at Enterprise Inc
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* FAQ Section */}
        <section className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32 border-t border-border/40">
          <div className="mx-auto flex max-w-232 flex-col items-center space-y-4 text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl text-balance">
                Frequently Asked Questions
              </h2>
              <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7 text-pretty mt-4">
                Everything you need to know about CrossUI
              </p>
            </motion.div>
          </div>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mx-auto max-w-3xl space-y-4"
          >
            <motion.div
              variants={item}
              className="rounded-lg border border-border bg-card p-6 hover:shadow-md transition-shadow"
            >
              <h3 className="text-lg font-semibold mb-2">
                Why not just use a component library?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                The idea behind CrossUI is to give you ownership and control
                over the code, allowing you to decide how the components are
                built and styled. You can start with sensible defaults and then
                customize the components to your needs.
              </p>
            </motion.div>
            <motion.div
              variants={item}
              className="rounded-lg border border-border bg-card p-6 hover:shadow-md transition-shadow"
            >
              <h3 className="text-lg font-semibold mb-2">
                Do I need to install anything?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                You only need to install the CLI once. After that, you can add
                components to your project with a single command. The components
                are copied directly to your project, so you have full control.
              </p>
            </motion.div>
            <motion.div
              variants={item}
              className="rounded-lg border border-border bg-card p-6 hover:shadow-md transition-shadow"
            >
              <h3 className="text-lg font-semibold mb-2">
                Which frameworks are supported?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Currently, CrossUI supports Expo (React Native). We're working
                on expanding to Flutter and Web in the near future. Stay tuned!
              </p>
            </motion.div>
            <motion.div
              variants={item}
              className="rounded-lg border border-border bg-card p-6 hover:shadow-md transition-shadow"
            >
              <h3 className="text-lg font-semibold mb-2">
                Can I use this in my project?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Yes! The code is yours. Use it in your project, modify it, and
                ship it. Free and open source. MIT licensed.
              </p>
            </motion.div>
          </motion.div>
        </section>

        {/* Comparison Section */}
        <section className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32 border-t border-border/40">
          <div className="mx-auto flex max-w-232 flex-col items-center space-y-4 text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl text-balance">
                How it compares
              </h2>
              <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7 text-pretty mt-4">
                Understanding the difference between CrossUI and traditional
                component libraries
              </p>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mx-auto max-w-5xl"
          >
            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-lg border border-border bg-card p-8">
                <h3 className="text-xl font-semibold mb-4">
                  Traditional Libraries
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-destructive mt-1">✕</span>
                    <span className="leading-relaxed">
                      Locked into specific design decisions
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-destructive mt-1">✕</span>
                    <span className="leading-relaxed">
                      Heavy bundle size with unused components
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-destructive mt-1">✕</span>
                    <span className="leading-relaxed">
                      Difficult to customize beyond provided props
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-destructive mt-1">✕</span>
                    <span className="leading-relaxed">
                      Breaking changes on updates
                    </span>
                  </li>
                </ul>
              </div>
              <div className="rounded-lg border-2 border-primary/50 bg-primary/5 p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-bl-lg">
                  RECOMMENDED
                </div>
                <h3 className="text-xl font-semibold mb-4">CrossUI</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="leading-relaxed">
                      Full ownership of the code
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="leading-relaxed">
                      Only include what you need
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="leading-relaxed">
                      Customize anything without limits
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="leading-relaxed">
                      No breaking changes, you control updates
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32 border-t border-border/40">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto flex max-w-232 flex-col items-center justify-center gap-4 text-center"
          >
            <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl text-balance">
              Ready to get started?
            </h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7 text-pretty">
              Start building beautiful React Native apps today.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mt-4">
              <Button size="lg" asChild className="group">
                <Link href="/docs">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="https://github.com" target="_blank">
                  <Github className="mr-2 h-4 w-4" />
                  View on GitHub
                </Link>
              </Button>
            </div>
          </motion.div>
        </section>
      </main>

      <footer className="border-t border-border/40 bg-muted/20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-2 md:col-span-1">
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <span className="font-bold text-xl bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
                  CrossUI
                </span>
              </Link>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                A cross-language, theme-driven design system. Built by
                developers, for developers.
              </p>
              <div className="flex items-center gap-3">
                <Button variant="ghost" size="icon" asChild>
                  <Link
                    href="https://github.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Github className="h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <Link
                    href="https://twitter.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Twitter className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Documentation</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link
                    href="/docs"
                    className="hover:text-primary transition-colors"
                  >
                    Introduction
                  </Link>
                </li>
                <li>
                  <Link
                    href="/docs/installation"
                    className="hover:text-primary transition-colors"
                  >
                    Installation
                  </Link>
                </li>
                <li>
                  <Link
                    href="/docs/cli"
                    className="hover:text-primary transition-colors"
                  >
                    CLI Reference
                  </Link>
                </li>
                <li>
                  <Link
                    href="/docs/theming"
                    className="hover:text-primary transition-colors"
                  >
                    Theming
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Components</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link
                    href="/docs/components"
                    className="hover:text-primary transition-colors"
                  >
                    Overview
                  </Link>
                </li>
                <li>
                  <Link
                    href="/docs/components/button"
                    className="hover:text-primary transition-colors"
                  >
                    Button
                  </Link>
                </li>
                <li>
                  <Link
                    href="/docs/components/input"
                    className="hover:text-primary transition-colors"
                  >
                    Input
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Community</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link
                    href="https://github.com"
                    className="hover:text-primary transition-colors"
                  >
                    GitHub
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://twitter.com"
                    className="hover:text-primary transition-colors"
                  >
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-primary transition-colors"
                  >
                    Discord
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border/40 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © 2025 CrossUI. Open source under MIT License.
            </p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <Link
                href="#"
                className="hover:text-foreground transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="hover:text-foreground transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
