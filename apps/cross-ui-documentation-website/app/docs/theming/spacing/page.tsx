"use client";

import {
  Ruler,
  CheckCircle2,
  ArrowRight,
  Zap,
  Grid3X3,
  Maximize,
  Move,
  Layout as LayoutIcon,
  Settings2,
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

export default function SpacingPage() {
  const spacingScale = [
    { name: "xs", pixel: "4px", rem: "0.25rem", color: "bg-blue-400" },
    { name: "sm", pixel: "8px", rem: "0.5rem", color: "bg-blue-500" },
    { name: "md", pixel: "16px", rem: "1rem", color: "bg-blue-600" },
    { name: "lg", pixel: "24px", rem: "1.5rem", color: "bg-blue-700" },
    { name: "xl", pixel: "32px", rem: "2rem", color: "bg-blue-800" },
    { name: "2xl", pixel: "48px", rem: "3rem", color: "bg-blue-900" },
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
          <Ruler className="h-3.5 w-3.5" />
          <span>Spatial System</span>
        </div>
        <div className="space-y-4">
          <h1 className="text-6xl md:text-7xl font-black tracking-tight bg-clip-text text-transparent bg-linear-to-r from-foreground to-foreground/70">
            Layout & Spacing
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
            A consistent spacing system is the invisible grid that holds your UI
            together. Learn how CrossUI handles margins, padding, and layout
            rhythm.
          </p>
        </div>
      </motion.div>

      {/* The 8pt Grid */}
      <motion.div
        variants={item}
        className="space-y-8 pt-12 border-t border-border/50"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight">The 8pt Grid</h2>
            <p className="text-muted-foreground leading-relaxed">
              CrossUI is built on an **8-point grid system**. By using multiples
              of 8 for all spatial measurements, you ensure visual consistency
              and perfect alignment across different screen resolutions.
            </p>
            <div className="space-y-4">
              <h4 className="font-bold">Why 8?</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                8 is easily divisible by 2 and 4, making it highly flexible for
                scaling across devices with different pixel densities (1x, 2x,
                3x).
              </p>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-2 p-4 bg-muted/20 border border-border/50 rounded-2xl">
            {Array.from({ length: 16 }).map((_, i) => (
              <div
                key={i}
                className="aspect-square bg-primary/5 border border-primary/10 rounded-sm flex items-center justify-center"
              >
                <div className="w-1 h-1 rounded-full bg-primary/20" />
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Spacing Scale */}
      <motion.div
        variants={item}
        className="space-y-12 pt-8 border-t border-border/50"
      >
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tight">Spacing Scale</h2>
          <p className="text-muted-foreground leading-relaxed max-w-3xl">
            Our linear spacing scale provides enough variety for complex layouts
            while remaining constrained enough to prevent random value choices.
          </p>
        </div>
        <div className="space-y-6">
          {spacingScale.map((s, i) => (
            <div key={i} className="flex items-center gap-6 group">
              <div className="w-12 shrink-0 text-xs font-black uppercase text-primary">
                {s.name}
              </div>
              <div className="grow h-8 bg-muted/30 rounded-lg overflow-hidden border border-border/50 relative">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: parseInt(s.pixel) * 4 }}
                  transition={{ duration: 1, delay: i * 0.1 }}
                  className={`h-full ${s.color} opacity-40`}
                />
                <div className="absolute inset-y-0 left-[auto] right-4 flex items-center">
                  <span className="text-[10px] font-mono text-muted-foreground">
                    {s.pixel} / {s.rem}
                  </span>
                </div>
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
          <h2 className="text-3xl font-bold tracking-tight">
            Customizing the Scale
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            While we recommend the 8pt grid, you can redefine your entire
            spacing logic in{" "}
            <code className="bg-muted px-1 rounded text-xs">
              theme/config.ts
            </code>
            .
          </p>
        </div>

        <InstallationCommand
          language="typescript"
          title="theme/config.ts"
          code={`export const theme = {
  spacing: {
    unit: 8, // Multiply values by this unit
    scale: {
      xs: 0.5, // 4px
      sm: 1,   // 8px
      md: 2,   // 16px
      lg: 3,   // 24px
      xl: 4,   // 32px
    }
  }
}`}
        />
      </motion.div>

      {/* Layout Principles */}
      <motion.div
        variants={item}
        className="space-y-8 pt-12 border-t border-border/50"
      >
        <h2 className="text-3xl font-bold tracking-tight">Layout Principles</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6 space-y-4 bg-muted/20 border-border/50">
            <div className="flex items-center gap-3 text-primary">
              <Maximize className="h-5 w-5" />
              <span className="font-bold">Padding</span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Negative space inside a component. Use larger padding for
              high-level containers (e.g., Cards) and smaller padding for
              interactive elements (e.g., Buttons).
            </p>
          </Card>
          <Card className="p-6 space-y-4 bg-muted/20 border-border/50">
            <div className="flex items-center gap-3 text-primary">
              <Move className="h-5 w-5" />
              <span className="font-bold">Margins</span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              The gap between components. Use margins to group related items
              together and separate different sections of a layout.
            </p>
          </Card>
          <Card className="p-6 space-y-4 bg-muted/20 border-border/50">
            <div className="flex items-center gap-3 text-primary">
              <Grid3X3 className="h-5 w-5" />
              <span className="font-bold">Gutters</span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              The space between columns in a grid. Consistent gutters prevent
              visual clutter and help the eye follow a logical path.
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
              Spacing Best Practices
            </h4>
            <p className="text-sm text-muted-foreground">
              Mastering the white space in your application.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
            <div className="space-y-3">
              <span className="text-xs font-black uppercase tracking-widest text-primary">
                Proximity Principle
              </span>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Elements that are related should be placed closer together.
                Conversely, unrelated elements should have more space between
                them.
              </p>
            </div>
            <div className="space-y-3">
              <span className="text-xs font-black uppercase tracking-widest text-primary">
                Optical Alignment
              </span>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Sometimes mathematical alignment looks wrong. Trust your eyes
                for specific edge cases (e.g., play icons inside buttons).
              </p>
            </div>
            <div className="space-y-3 text-left">
              <span className="text-xs font-black uppercase tracking-widest text-primary text-left">
                Content-First Design
              </span>
              <p className="text-sm text-muted-foreground leading-relaxed text-left">
                Let your content determine your spacing, not the other way
                around. Give your data room to breathe.
              </p>
            </div>
            <div className="space-y-3 text-left">
              <span className="text-xs font-black uppercase tracking-widest text-primary text-left">
                Avoid Hardcoding
              </span>
              <p className="text-sm text-muted-foreground leading-relaxed text-left">
                Never use pixel values directly. Always reference your tokens to
                ensure that global adjustments (e.g., increasing overall
                density) are possible.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
