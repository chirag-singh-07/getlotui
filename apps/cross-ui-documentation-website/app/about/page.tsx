"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  Zap,
  Users,
  Globe,
  ShieldCheck,
  Cpu,
  ArrowRight,
  Code2,
  Layout,
  Smartphone,
  Github,
  Palette,
  Terminal,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import Image from "next/image";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-24 lg:py-32">
          <div className="absolute inset-0 bg-radial-to-tr from-primary/5 via-transparent to-transparent pointer-events-none" />
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="max-w-4xl mx-auto text-center space-y-8"
            >
              <motion.div
                variants={item}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider"
              >
                <Sparkles className="h-3.5 w-3.5" />
                <span>Our Story</span>
              </motion.div>
              <motion.h1
                variants={item}
                className="text-5xl md:text-7xl font-black tracking-tight leading-tight"
              >
                Engineering the{" "}
                <span className="bg-clip-text text-transparent bg-linear-to-r from-primary to-accent">
                  Next Generation
                </span>{" "}
                of UI Development.
              </motion.h1>
              <motion.p
                variants={item}
                className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto"
              >
                CrossUI was born out of a simple frustration: why does building
                high-quality, consistent cross-platform interfaces have to be so
                difficult?
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-24 bg-muted/30 border-y border-border/40">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tight">
                    Our Mission
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    We believe that design should be platform-agnostic.
                    Engineers shouldn't have to reinvent the wheel for Web, iOS,
                    and Android. Our mission is to provide the most powerful,
                    token-driven design system ecosystem that bridges the gap
                    between design and production code.
                  </p>
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  {[
                    {
                      icon: Globe,
                      title: "Universal",
                      desc: "Native performance on every platform.",
                    },
                    {
                      icon: ShieldCheck,
                      title: "Type-Safe",
                      desc: "Reliable, enterprise-grade logic.",
                    },
                    {
                      icon: Zap,
                      title: "Instant",
                      desc: "From generator to code in seconds.",
                    },
                    {
                      icon: Users,
                      title: "Collaborative",
                      desc: "Built for teams of all sizes.",
                    },
                  ].map((feature, i) => (
                    <div key={i} className="space-y-2">
                      <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                        <feature.icon className="h-4.5 w-4.5" />
                      </div>
                      <h4 className="font-bold text-sm">{feature.title}</h4>
                      <p className="text-xs text-muted-foreground">
                        {feature.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative aspect-square lg:aspect-video rounded-3xl border border-border/50 bg-zinc-950 overflow-hidden shadow-2xl"
              >
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex gap-4">
                    {[Code2, Layout, Smartphone].map((Icon, i) => (
                      <motion.div
                        key={i}
                        animate={{
                          y: [0, -10, 0],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: i * 0.5,
                        }}
                        className="h-16 w-16 md:h-24 md:w-24 rounded-2xl bg-primary/5 border border-primary/20 flex items-center justify-center text-primary backdrop-blur-sm"
                      >
                        <Icon className="h-8 w-8 md:h-12 md:w-12" />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* The Genesis Section */}
        <section className="py-24 overflow-hidden">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-24">
              <div className="text-center space-y-4">
                <h2 className="text-4xl font-black tracking-tight">
                  The Genesis
                </h2>
                <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
              </div>

              <div className="grid gap-12 relative">
                <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border/40 -translate-x-1/2 hidden md:block" />

                {[
                  {
                    year: "The Spark",
                    title: "The Problem Manifests",
                    content:
                      "It started in a small room with three screens. One running Flutter, one running Web, and one running Expo. The design was the same, but the code was three different languages, three different styling systems, and zero consistency. The 'Aha!' moment wasn't about a better component, but a universal language of tokens.",
                    side: "left",
                  },
                  {
                    year: "Midnight Oil",
                    title: "A Prototype in the Dark",
                    content:
                      "The first three months were spent deep in the internals of coordinate systems and platform-specific rendering. We didn't want 'wrappers'—we wanted native performance. The first time a single JSON file correctly styled a Flutter button and a React component simultaneously, we knew we had something special.",
                    side: "right",
                  },
                  {
                    year: "Building in Public",
                    title: "The Community Bridge",
                    content:
                      "CrossUI wasn't built in a vacuum. Hand-crafted by Chirag Singh from India, the project was shared with the world through early wins and failures on Github. Each bug report from a developer in Brazil or a feature request from an engineer in Tokyo helped Chirag refine the robust CLI and theme generator you see today, proving that great engineering has no borders.",
                    side: "left",
                  },
                ].map((era, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: era.side === "left" ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className={`relative flex flex-col md:flex-row items-center gap-8 ${
                      era.side === "right" ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    <div className="flex-1 space-y-4 text-center md:text-left">
                      <div
                        className={`flex items-center gap-3 justify-center ${
                          era.side === "left"
                            ? "md:justify-end"
                            : "md:justify-start"
                        }`}
                      >
                        <span className="text-xs font-black uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full">
                          {era.year}
                        </span>
                      </div>
                      <h3
                        className={`text-2xl font-bold ${
                          era.side === "left" ? "md:text-right" : "md:text-left"
                        }`}
                      >
                        {era.title}
                      </h3>
                      <p
                        className={`text-muted-foreground leading-relaxed ${
                          era.side === "left" ? "md:text-right" : "md:text-left"
                        }`}
                      >
                        {era.content}
                      </p>
                    </div>
                    <div className="relative z-10 w-12 h-12 rounded-full bg-background border-4 border-primary flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(var(--primary),0.3)]">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <div className="flex-1 hidden md:block" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why CrossUI Section */}
        <section className="py-24">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl font-bold tracking-tight">
                The CrossUI Advantage
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We're building more than just a component library. We're
                building a workflow that empowers developers and designers to
                speak the same language.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Token-First Philosophy",
                  desc: "Every color, shadow, and spacing unit is a semantic token. Change it once, update it everywhere.",
                  icon: Cpu,
                  color: "blue",
                },
                {
                  title: "Native Architecture",
                  desc: "We don't use web-views. Our components are mapped to native primitives for 60fps performance.",
                  icon: Smartphone,
                  color: "purple",
                },
                {
                  title: "Developer Experience",
                  desc: "A powerful CLI, VS Code extensions, and comprehensive documentation make building a breeze.",
                  icon: Zap,
                  color: "orange",
                },
              ].map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 rounded-3xl border border-border/40 bg-muted/10 hover:bg-muted/20 transition-all group"
                >
                  <div
                    className={`h-12 w-12 rounded-2xl bg-${card.color}-500/10 flex items-center justify-center text-${card.color}-500 mb-6 group-hover:scale-110 transition-transform`}
                  >
                    <card.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{card.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {card.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="py-24 bg-muted/30 border-y border-border/40">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-16">
              <div className="md:w-1/3 space-y-4">
                <h2 className="text-3xl font-bold tracking-tight">
                  Our Core Values
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  The principles that guide every decision we make at CrossUI.
                </p>
              </div>
              <div className="md:w-2/3 grid sm:grid-cols-2 gap-12">
                {[
                  {
                    title: "Quality Over Quantity",
                    desc: "We prioritize deep, robust components over a massive list of mediocre ones.",
                    icon: ShieldCheck,
                  },
                  {
                    title: "Developer Empowerment",
                    desc: "Our tools are built to give you more control, not take it away.",
                    icon: Zap,
                  },
                  {
                    title: "Radical Transparency",
                    desc: "We build in the open and welcome feedback from every member of the community.",
                    icon: Globe,
                  },
                  {
                    title: "Future Proofing",
                    desc: "Architecture designed to adapt as the platform landscape evolves.",
                    icon: Cpu,
                  },
                ].map((value, i) => (
                  <div key={i} className="space-y-4">
                    <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                      <value.icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-bold text-lg">{value.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {value.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-24 bg-zinc-950 dark relative overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-b from-primary/5 to-transparent pointer-events-none" />
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { label: "Github Stars", value: "2.4k+" },
                { label: "Platforms Supported", value: "3+" },
                { label: "UI Components", value: "50+" },
                { label: "Weekly Downloads", value: "10k+" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="space-y-2"
                >
                  <h3 className="text-4xl md:text-5xl font-black text-white tracking-tighter">
                    {stat.value}
                  </h3>
                  <p className="text-xs font-bold text-primary uppercase tracking-widest">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Founder Section */}
        <section className="py-24 border-b border-border/40 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-3xl rounded-full translate-x-1/2 pointer-events-none" />
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-5xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="space-y-8"
                >
                  <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider">
                      <Users className="h-3.5 w-3.5" />
                      <span>The Founder</span>
                    </div>
                    <h2 className="text-4xl font-black tracking-tight leading-tight">
                      Built by Developers, <br /> For Developers.
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      CrossUI was founded by Chirag Singh with a vision to
                      eliminate the friction between design and engineering.
                      After months of struggling with inconsistent
                      cross-platform styles, he decided to build the solution.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div className="flex flex-col gap-4">
                      <h4 className="font-bold text-sm uppercase tracking-widest text-primary">
                        Chirag Singh
                      </h4>
                      <p className="text-muted-foreground text-sm italic">
                        "My goal is to make high-fidelity cross-platform
                        development as easy as editing a text file. CrossUI is
                        the culmination of that journey."
                      </p>
                    </div>
                    <div className="flex gap-4">
                      <Button
                        variant="outline"
                        className="rounded-xl font-bold bg-background/50 backdrop-blur-sm hover:text-white"
                        asChild
                      >
                        <Link
                          href="https://github.com/chirag-singh-07"
                          target="_blank"
                          className=" text-white"
                        >
                          <Github className="mr-2 h-4 w-4" /> Github Profile
                        </Link>
                      </Button>
                      <Button
                        variant="ghost"
                        className="rounded-xl font-bold text-white hover:text-white"
                        asChild
                      >
                        <Link href="https://twitter.com" target="_blank">
                          <ArrowRight className="mr-2 h-4 w-4" /> Follow
                          Activity
                        </Link>
                      </Button>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  <div className="absolute -inset-4 bg-primary/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative aspect-square max-w-md mx-auto rounded-[40px] border border-border/50 bg-muted/30 overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                    <Image
                      src="/chirag.png"
                      alt="Chirag Singh"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback to a placeholder if image doesn't exist
                        const target = e.target as HTMLImageElement;
                        target.src =
                          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop";
                      }}
                      width={500}
                      height={500}
                    />
                    <div className="absolute inset-x-0 bottom-0 p-8 bg-linear-to-t from-black/80 via-black/40 to-transparent">
                      <p className="text-white font-black text-2xl tracking-tight">
                        Chirag Singh
                      </p>
                      <p className="text-white/60 text-xs font-bold uppercase tracking-widest">
                        Creator & Lead Architect
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Roadmap Section */}
        <section className="py-24 bg-muted/5 relative overflow-hidden">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
              <h2 className="text-3xl font-bold tracking-tight">
                Project Roadmap
              </h2>
              <p className="text-muted-foreground font-medium">
                The future of CrossUI. See what we're building next.
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-4 relative">
              <div className="absolute top-1/2 left-0 w-full h-px bg-border/40 hidden md:block -translate-y-1/2" />
              {[
                {
                  phase: "Phase 1",
                  title: "Core Design System",
                  status: "Completed",
                  icon: Layout,
                },
                {
                  phase: "Phase 2",
                  title: "Theme Generator V1",
                  status: "Completed",
                  icon: Palette,
                },
                {
                  phase: "Phase 3",
                  title: "Flutter/Expo CLI",
                  status: "In Progress",
                  icon: Terminal,
                },
                {
                  phase: "Phase 4",
                  title: "AI Layout Engine",
                  status: "Planned",
                  icon: Sparkles,
                },
              ].map((step, i) => (
                <div
                  key={i}
                  className="relative z-10 p-6 rounded-2xl border border-border/40 bg-background flex flex-col items-center text-center space-y-4 shadow-sm hover:border-primary/30 transition-colors"
                >
                  <div
                    className={`h-12 w-12 rounded-full flex items-center justify-center mb-2 ${
                      step.status === "Completed"
                        ? "bg-emerald-500/10 text-emerald-500"
                        : step.status === "In Progress"
                        ? "bg-primary/10 text-primary"
                        : "bg-muted/50 text-muted-foreground"
                    }`}
                  >
                    <step.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest opacity-50">
                      {step.phase}
                    </p>
                    <h4 className="font-bold text-sm tracking-tight">
                      {step.title}
                    </h4>
                    <p
                      className={`text-[10px] font-bold mt-2 px-2 py-0.5 rounded-full inline-block ${
                        step.status === "Completed"
                          ? "bg-emerald-500/10 text-emerald-500"
                          : step.status === "In Progress"
                          ? "bg-primary/10 text-primary"
                          : "bg-muted/10 text-muted-foreground"
                      }`}
                    >
                      {step.status}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-muted/10">
          <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center space-y-16">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground">
                Everything you need to know about the framework and ecosystem.
              </p>
            </div>
            <div className="text-left space-y-8">
              {[
                {
                  q: "Is CrossUI really free to use?",
                  a: "Yes, the core framework and component library are open-source and free to use for both personal and commercial projects.",
                },
                {
                  q: "Does it support custom themes?",
                  a: "Absolutely. Our Token-First philosophy means you can customize everything from primary colors to individual component radiuses across all platforms.",
                },
                {
                  q: "How does it compare to React Native?",
                  a: "While React Native focuses on JS-to-Native, CrossUI focuses on Design-Token-to-Native, ensuring consistent styling across Flutter, Expo, and Web with zero logic duplication.",
                },
              ].map((faq, i) => (
                <div
                  key={i}
                  className="space-y-3 p-6 rounded-2xl bg-background border border-border/40 shadow-sm"
                >
                  <h4 className="font-bold text-lg">{faq.q}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-zinc-950 dark relative overflow-hidden">
          <div className="absolute inset-0 bg-radial-to-t from-primary/10 to-transparent pointer-events-none" />
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white leading-tight">
              Ready to redefine your <br /> development workflow?
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="h-12 px-8 bg-white text-black hover:bg-zinc-200 transition-colors rounded-xl font-bold"
              >
                <Link href="/docs/installation">Get Started for Free</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-12 px-8 bg-transparent text-white border-white/20 hover:bg-white/5 transition-colors rounded-xl font-bold"
              >
                <Link href="/docs">Explore Components</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 border-t border-border/40">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center space-x-2">
            <div className="h-6 w-6 rounded-lg bg-primary" />
            <span className="font-bold tracking-tight">CrossUI</span>
          </div>
          <p className="text-sm text-muted-foreground text-center">
            &copy; 2026 CrossUI Project. Built with passion for the developer
            community.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="https://github.com/chirag-singh-07"
              className="text-muted-foreground hover:text-foreground"
            >
              Github
            </Link>
            <Link
              href="/docs"
              className="text-muted-foreground hover:text-foreground"
            >
              Documentation
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
