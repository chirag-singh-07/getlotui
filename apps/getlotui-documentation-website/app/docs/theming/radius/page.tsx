"use client";

import {
  Radius as RadiusIcon,
  CheckCircle2,
  ArrowRight,
  Zap,
  Layout,
  Settings2,
  Smartphone,
  Maximize2,
  Minus,
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

export default function RadiusPage() {
  const radii = [
    {
      name: "none",
      value: "0px",
      desc: "Sharp corners for technical, precise interfaces.",
    },
    {
      name: "sm",
      value: "4px",
      desc: "Subtle rounding for small elements like checkboxes.",
    },
    {
      name: "md",
      value: "8px",
      desc: "The standard radius for buttons and input fields.",
    },
    {
      name: "lg",
      value: "12px",
      desc: "Soft rounding for cards and larger containers.",
    },
    {
      name: "xl",
      value: "24px",
      desc: "Distinctive, modern pill-like rounding for sections.",
    },
    {
      name: "full",
      value: "9999px",
      desc: "Perfect circles for avatars and pill buttons.",
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
          <RadiusIcon className="h-3.5 w-3.5" />
          <span>Visual Shape</span>
        </div>
        <div className="space-y-4">
          <h1 className="text-6xl md:text-7xl font-black tracking-tight bg-clip-text text-transparent bg-linear-to-r from-foreground to-foreground/70">
            Radius & Curvature
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
            Border radius determines the "personality" of your UI. From sharp
            and professional to soft and friendly, curvature is a key design
            token in CrossUI.
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
            <h2 className="text-3xl font-bold tracking-tight">
              The Psychology of Shape
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Humans are naturally programmed to perceive curved shapes as safer
              and more approachable. In UI design, the **radius** you choose
              signals the intent of your application.
            </p>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 border-2 border-primary/20 rounded-none flex items-center justify-center shrink-0">
                  <span className="text-xs font-bold">0px</span>
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-sm">Sharp (0px)</h4>
                  <p className="text-xs text-muted-foreground">
                    Professional, brutalist, and enterprise-focused.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 border-2 border-primary/20 rounded-xl flex items-center justify-center shrink-0">
                  <span className="text-xs font-bold">12px</span>
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-sm">Medium (12px)</h4>
                  <p className="text-xs text-muted-foreground">
                    Balanced, modern, and consumer-friendly.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 border-2 border-primary/20 rounded-full flex items-center justify-center shrink-0">
                  <span className="text-xs font-bold">Full</span>
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-sm">Soft (Pill)</h4>
                  <p className="text-xs text-muted-foreground">
                    Playful, mobile-optimized, and informal.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 bg-primary/5 rounded-3xl blur-2xl group-hover:bg-primary/10 transition-colors" />
            <Card className="relative p-12 overflow-hidden border-border/50 aspect-video flex items-center justify-center bg-muted/20">
              <motion.div
                animate={{
                  borderRadius: ["0px", "12px", "48px", "9999px", "12px"],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-32 h-32 bg-primary shadow-2xl shadow-primary/20 flex items-center justify-center text-white"
              >
                <Maximize2 className="h-8 w-8" />
              </motion.div>
            </Card>
          </div>
        </div>
      </motion.div>

      {/* Radius Scale Section */}
      <motion.div variants={item} className="space-y-12">
        <h2 className="text-3xl font-bold tracking-tight">The Radius Scale</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {radii.map((r, i) => (
            <div key={i} className="space-y-4 group">
              <div
                className="aspect-square bg-muted/30 border border-border/50 flex items-center justify-center transition-transform group-hover:scale-105"
                style={{ borderRadius: r.value }}
              >
                <div
                  className="w-1/2 h-1/2 border-t-4 border-l-4 border-primary"
                  style={{ borderTopLeftRadius: r.value }}
                />
              </div>
              <div className="space-y-1 text-center sm:text-left">
                <div className="flex items-center gap-2 justify-center sm:justify-start">
                  <span className="text-xs font-black uppercase tracking-widest text-primary">
                    {r.name}
                  </span>
                  <span className="text-[10px] font-mono text-muted-foreground">
                    {r.value}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {r.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Configuration Section */}
      <motion.div
        variants={item}
        className="space-y-8 pt-12 border-t border-border/50"
      >
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tight">Configuration</h2>
          <p className="text-muted-foreground leading-relaxed">
            Customize your brand's curvature in{" "}
            <code className="bg-muted px-1 rounded text-xs">
              theme/config.ts
            </code>
            . The CrossUI generator ensures these values are pixel-perfect on
            both CSS and Native Canvas.
          </p>
        </div>

        <InstallationCommand
          language="typescript"
          title="theme/config.ts"
          code={`export const theme = {
  radius: {
    unit: 'px',
    base: 8,
    scale: {
      none: 0,
      sm: 4,
      md: 8,
      lg: 12,
      xl: 24,
      full: 9999,
    },
    // Native Mobile Overrides
    mobile: {
      smoothing: true, // Apply iOS-style squircle smoothing
    }
  }
}`}
        />
      </motion.div>

      {/* Advanced Topic: Nested Radius */}
      <motion.div
        variants={item}
        className="space-y-8 pt-12 border-t border-border/50"
      >
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tight">
            Nested Radius (Rhythm)
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-3xl">
            A common design mistake is using the same radius for parent and
            child elements. mathematically, for corners to look concentric, the
            inner radius should be:
            <code className="bg-muted px-2 py-0.5 rounded mx-1 italic text-primary">
              Outer Radius - Padding = Inner Radius
            </code>
            .
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8 space-y-4 bg-red-500/5 border-red-500/20">
            <span className="text-[10px] font-black uppercase text-red-500">
              Incorrect
            </span>
            <div className="w-full aspect-video rounded-3xl bg-red-500/10 border-4 border-red-500/30 p-8">
              <div className="w-full h-full rounded-3xl bg-red-500/40" />
            </div>
            <p className="text-xs text-muted-foreground italic">
              Both share 24px radius. Visual "tangent" feels off.
            </p>
          </Card>
          <Card className="p-8 space-y-4 bg-emerald-500/5 border-emerald-500/20">
            <span className="text-[10px] font-black uppercase text-emerald-500">
              Correct (Rhythmic)
            </span>
            <div className="w-full aspect-video rounded-3xl bg-emerald-500/10 border-4 border-emerald-500/30 p-8">
              <div className="w-full h-full rounded-lg bg-emerald-500/40" />
            </div>
            <p className="text-xs text-muted-foreground italic">
              Outer 24px - Padding 16px = Inner 8px. Perfectly concentric.
            </p>
          </Card>
        </div>
      </motion.div>

      {/* Implementation Nuances */}
      <motion.div
        variants={item}
        className="space-y-8 pt-12 border-t border-border/50"
      >
        <h2 className="text-3xl font-bold tracking-tight">Platform Behavior</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6 space-y-4 bg-muted/20 border-border/50">
            <div className="flex items-center gap-3 text-primary">
              <Smartphone className="h-5 w-5" />
              <span className="font-bold">iOS Squircles</span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Native iOS uses "Continuous Corners" (Squircles) which have a
              smoother curvature than standard CSS{" "}
              <code className="bg-muted px-1 rounded italic text-[10px]">
                border-radius
              </code>
              . CrossUI's mobile adapter automatically applies this smoothing
              using native drawing APIs where possible.
            </p>
          </Card>
          <Card className="p-6 space-y-4 bg-muted/20 border-border/50">
            <div className="flex items-center gap-3 text-primary">
              <Layout className="h-5 w-5" />
              <span className="font-bold">Clip vs. Paint</span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              On web, radius is a style property. on mobile/Flutter, it often
              requires explicit
              <code className="bg-muted px-1 rounded italic text-[10px]">
                ClipRRect
              </code>{" "}
              wrapping. Our component library handles this implementation detail
              for you.
            </p>
          </Card>
        </div>
      </motion.div>

      {/* Best Practices Section */}
      <motion.div variants={item} className="pt-24 border-t border-border/50">
        <div className="p-8 rounded-3xl bg-primary/5 border border-primary/20 space-y-6">
          <div className="space-y-2">
            <h4 className="text-2xl font-bold flex items-center gap-2">
              <Settings2 className="h-6 w-6 text-primary" />
              Radius Best Practices
            </h4>
            <p className="text-sm text-muted-foreground">
              The finishing touches for a polished design.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
            <div className="space-y-3">
              <span className="text-xs font-black uppercase tracking-widest text-primary">
                Consistency is Key
              </span>
              <p className="text-sm text-muted-foreground leading-relaxed text-left">
                Avoid mixing highly rounded corners with sharp ones unless
                there's a specific functional reason. Pick a "base" radius and
                stick to it.
              </p>
            </div>
            <div className="space-y-3">
              <span className="text-xs font-black uppercase tracking-widest text-primary text-left">
                Button Hierarchy
              </span>
              <p className="text-sm text-muted-foreground leading-relaxed text-left">
                Slightly more rounded corners can make a Primary Call-to-Action
                (CTA) feel more clickable compared to secondary UI elements.
              </p>
            </div>
            <div className="space-y-3 text-left">
              <span className="text-xs font-black uppercase tracking-widest text-primary text-left">
                Small Element Visibility
              </span>
              <p className="text-sm text-muted-foreground leading-relaxed text-left">
                On very small elements (less than 16px), large radius values can
                cause the element to disappear or look like a dot. Use{" "}
                <code className="bg-muted px-1">sm</code> or{" "}
                <code className="bg-muted px-1">none</code>.
              </p>
            </div>
            <div className="space-y-3 text-left">
              <span className="text-xs font-black uppercase tracking-widest text-primary text-left">
                Scale with Container
              </span>
              <p className="text-sm text-muted-foreground leading-relaxed text-left">
                Physical radius should grow as the container gets larger. A 4px
                radius looks great on a small badge but feels like a mistake on
                a large fullscreen modal.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
