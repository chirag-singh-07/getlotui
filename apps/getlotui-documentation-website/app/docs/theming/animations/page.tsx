"use client";

import {
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Zap,
  Clock,
  Wind,
  MousePointer2,
  Settings2,
  Smartphone,
  Gauge,
  Activity,
  RefreshCw,
  LayoutIcon,
  Globe,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { InstallationCommand } from "@/components/installation-command";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function AnimationsPage() {
  const animations = [
    {
      title: "Standard Fade",
      desc: "For subtle entry/exit transitions.",
      type: "Linear/Ease",
    },
    {
      title: "Spring Scale",
      desc: "Bouncy, playful attention-seekers.",
      type: "Spring",
    },
    {
      title: "Slide & Damp",
      desc: "Organic, physics-based movement.",
      type: "Damping",
    },
    {
      title: "Staggered Reveal",
      desc: "Structured hierarchical loading.",
      type: "Orchestration",
    },
  ];

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-24 pb-32"
    >
      {/* Hero Section */}
      <motion.div variants={item} className="space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider">
          <Sparkles className="h-3.5 w-3.5" />
          <span>Motion System</span>
        </div>
        <div className="space-y-4">
          <h1 className="text-6xl md:text-7xl font-black tracking-tight bg-clip-text text-transparent bg-linear-to-r from-foreground to-foreground/70">
            Motion with Meaning
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
            Animation is not just decoration. in CrossUI, motion acts as a
            bridge between states, providing visual cues and spatial awareness
            to the user.
          </p>
        </div>
      </motion.div>

      {/* Philosophy Section */}
      <motion.div
        variants={item}
        className="space-y-8 pt-12 border-t border-border/50"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-left">
              The Role of Motion
            </h2>
            <p className="text-muted-foreground leading-relaxed text-left">
              Motion design is about more than "making things move." It's about
              **physics, feedback, and focus**. In a cross-platform environment,
              motion must feel native to the device while maintaining brand
              identity.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { title: "Direct Intent", icon: MousePointer2 },
                { title: "Spatial Logic", icon: Zap },
                { title: "State Change", icon: RefreshCw },
                { title: "Performance", icon: Gauge },
              ].map((point, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 p-3 rounded-xl bg-muted/20 border border-border/50"
                >
                  <point.icon className="h-4 w-4 text-primary" />
                  <span className="text-xs font-bold">{point.title}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-3xl">
            <div className="absolute -inset-4 bg-primary/5 blur-2xl group-hover:bg-primary/10 transition-colors" />
            <Card className="relative p-12 overflow-hidden border-border/50 aspect-square flex items-center justify-center bg-muted/20">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{
                  scale: [0.8, 1.1, 1],
                  opacity: [0, 1, 1],
                  rotate: [0, 10, 0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-40 h-40 bg-linear-to-br from-primary to-primary/60 rounded-[40px] shadow-2xl shadow-primary/30 flex items-center justify-center"
              >
                <Activity className="h-16 w-16 text-white" />
              </motion.div>
            </Card>
          </div>
        </div>
      </motion.div>

      {/* Core Primitives Checklist */}
      <motion.div variants={item} className="space-y-12">
        <h2 className="text-3xl font-bold tracking-tight text-left">
          Core Primitives
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-8 space-y-4 bg-muted/20 border-border/50 group">
            <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-500">
              <Clock className="h-6 w-6" />
            </div>
            <h4 className="font-bold">Duration</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Short durations (150-200ms) for small changes like hover. Longer
              durations (300-500ms) for page transitions or layout shifts.
            </p>
          </Card>
          <Card className="p-8 space-y-4 bg-muted/20 border-border/50 group">
            <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-500">
              <Wind className="h-6 w-6" />
            </div>
            <h4 className="font-bold">Easing</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Linear feels robotic. Use **Ease In-Out** for general motion and
              **Spring** (Mass/Stiffness) for elements that respond to user
              touch.
            </p>
          </Card>
          <Card className="p-8 space-y-4 bg-muted/20 border-border/50 group">
            <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-500">
              <LayoutIcon className="h-6 w-6" />
            </div>
            <h4 className="font-bold">Damping</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              High damping creates a heavy, stable feel. Low damping creates a
              bouncy, high-energy UI. Control the "vibe" of every movement.
            </p>
          </Card>
        </div>
      </motion.div>

      {/* Configuration Section */}
      <motion.div
        variants={item}
        className="space-y-8 pt-12 border-t border-border/50"
      >
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tight text-left">
            Defining Animation Tokens
          </h2>
          <p className="text-muted-foreground leading-relaxed text-left">
            Just like colors and spacing, your animations should be tokenized to
            ensure Consistency across Web (Framer Motion) and Mobile (Native
            Animations).
          </p>
        </div>

        <InstallationCommand
          language="typescript"
          title="theme/config.ts"
          code={`export const theme = {
  animations: {
    duration: {
      fast: 150,
      base: 300,
      slow: 500,
    },
    easing: {
      standard: [0.4, 0, 0.2, 1],
      decelerate: [0, 0, 0.2, 1],
      accelerate: [0.4, 0, 1, 1],
    },
    spring: {
      bouncy: { mass: 1, stiffness: 200, damping: 10 },
      stable: { mass: 1, stiffness: 100, damping: 20 },
    }
  }
}`}
        />
      </motion.div>

      {/* Platform Implementation Section */}
      <motion.div
        variants={item}
        className="space-y-8 pt-12 border-t border-border/50"
      >
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tight text-left">
            Multi-Platform Motion
          </h2>
          <p className="text-muted-foreground leading-relaxed text-left">
            CrossUI bridges the gap between different animation engines, mapping
            your tokens to the most performant implementation for each platform.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-primary">
              <Globe className="h-5 w-5" />
              <span className="font-bold">Web (Framer Motion)</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              On the web, we use the industry-leading **Framer Motion** library.
              It provides GPU-accelerated animations and easy orchestration for
              complex enter/exit variants.
            </p>
          </div>
          <div className="space-y-4 text-left">
            <div className="flex items-center gap-3 text-primary text-left">
              <Smartphone className="h-5 w-5 text-left" />
              <span className="font-bold text-left">
                Mobile (Native Reanimated)
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed text-left">
              On mobile, we map your tokens to **React Native Reanimated** or
              **Flutter Animations**. This ensures 60 FPS transitions without
              overloading the JS thread.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Best Practices Section */}
      <motion.div variants={item} className="pt-24 border-t border-border/50">
        <div className="p-8 rounded-3xl bg-primary/5 border border-primary/20 space-y-6">
          <div className="space-y-2">
            <h4 className="text-2xl font-bold flex items-center gap-2">
              <Settings2 className="h-6 w-6 text-primary" />
              Motion Best Practices
            </h4>
            <p className="text-sm text-muted-foreground">
              Rules for accessible and engaging movement.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
            <div className="space-y-3">
              <span className="text-xs font-black uppercase tracking-widest text-primary text-left">
                Respect Reduced Motion
              </span>
              <p className="text-sm text-muted-foreground leading-relaxed text-left">
                Always check for system-level "Reduced Motion" settings. CrossUI
                components automatically fall back to simple fades or static
                states to ensure accessibility.
              </p>
            </div>
            <div className="space-y-3 text-left">
              <span className="text-xs font-black uppercase tracking-widest text-primary text-left">
                Avoid Cumulative Layout Shift
              </span>
              <p className="text-sm text-muted-foreground leading-relaxed text-left">
                Ensure that your animations don't cause content to jump
                unexpectedly. Prefer{" "}
                <code className="bg-muted px-1 text-xs">opacity</code> and{" "}
                <code className="bg-muted px-1 text-xs">transform</code> over
                animating width/height.
              </p>
            </div>
            <div className="space-y-3 text-left">
              <span className="text-xs font-black uppercase tracking-widest text-primary text-left">
                Direct Haptic Feedback
              </span>
              <p className="text-sm text-muted-foreground leading-relaxed text-left">
                On mobile, pair significant animations (like a destructive
                deletion) with subtle haptic vibration to reinforce the physical
                nature of the UI.
              </p>
            </div>
            <div className="space-y-3 text-left">
              <span className="text-xs font-black uppercase tracking-widest text-primary text-left">
                The Purpose Test
              </span>
              <p className="text-sm text-muted-foreground leading-relaxed text-left">
                Before adding an animation, ask: "Does this help the user
                understand what happened?" If the answer is no, reconsider the
                motion.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
