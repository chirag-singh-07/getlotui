"use client";

import {
  Type,
  CheckCircle2,
  ArrowRight,
  Zap,
  RefreshCw,
  Layers,
  Smartphone,
  Globe,
  Monitor,
  Layout,
  Eye,
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

export default function TypographyPage() {
  const typography = [
    {
      label: "Heading 1",
      size: "48px",
      weight: "900 (Black)",
      lineHeight: "1.2",
      example: "Design System",
      className: "text-5xl font-black tracking-tighter",
    },
    {
      label: "Heading 2",
      size: "36px",
      weight: "700 (Bold)",
      lineHeight: "1.3",
      example: "Typography Stack",
      className: "text-4xl font-bold tracking-tight",
    },
    {
      label: "Body Large",
      size: "18px",
      weight: "400 (Regular)",
      lineHeight: "1.6",
      example: "The quick brown fox jumps over the lazy dog.",
      className: "text-lg text-muted-foreground",
    },
    {
      label: "Body Small",
      size: "14px",
      weight: "400 (Regular)",
      lineHeight: "1.5",
      example: "Accessible UI components for everyone.",
      className: "text-sm text-muted-foreground",
    },
  ];

  const principles = [
    {
      title: "Legibility",
      desc: "How easy it is to distinguish one character from another. CrossUI uses high-x-height fonts for maximum clarity.",
      icon: Eye,
    },
    {
      title: "Hierarchy",
      desc: "Directing the viewer's attention to the most important information first using size, weight, and color.",
      icon: Layout,
    },
    {
      title: "Readability",
      desc: "How easy it is to read blocks of text. We optimize line length and line height for sustained comfort.",
      icon: CheckCircle2,
    },
    {
      title: "Consistency",
      desc: "Using a shared set of tokens across all platforms so users feel at home regardless of their device.",
      icon: RefreshCw,
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
          <Type className="h-3.5 w-3.5" />
          <span>Design Primitives</span>
        </div>
        <div className="space-y-4">
          <h1 className="text-6xl md:text-7xl font-black tracking-tight bg-clip-text text-transparent bg-linear-to-r from-foreground to-foreground/70">
            Typography
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
            Typography is the art and technique of arranging type to make
            written language legible, readable, and appealing when displayed. In
            CrossUI, it's the core of your brand identity.
          </p>
        </div>
      </motion.div>

      {/* What is Typography? */}
      <motion.div
        variants={item}
        className="space-y-8 pt-12 border-t border-border/50"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight">
              What is Typography?
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Typography is much more than just choosing a font. It involves
              carefully balancing <strong>space, scale, and rhythm</strong> to
              create a cohesive visual experience. Good typography goes
              unnoticed; users read the content effortlessly. Bad typography
              creates friction and confuses the hierarchy of information.
            </p>
            <div className="space-y-4">
              <h4 className="font-bold">Core Concepts:</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <div className="h-1 w-1 rounded-full bg-primary" />
                  <strong>Typeface:</strong> The design of the letterforms
                  (e.g., Inter).
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1 w-1 rounded-full bg-primary" />
                  <strong>Font:</strong> The specific style or weight within a
                  typeface (e.g., Inter Bold).
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1 w-1 rounded-full bg-primary" />
                  <strong>Leading:</strong> The vertical space between lines of
                  text (Line Height).
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1 w-1 rounded-full bg-primary" />
                  <strong>Tracking:</strong> The uniform spacing between all
                  characters in a block of text.
                </li>
              </ul>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-primary/5 rounded-3xl blur-2xl" />
            <Card className="relative p-12 overflow-hidden border-border/50 aspect-square flex flex-col items-center justify-center text-center space-y-4 bg-muted/20">
              <span className="text-[12rem] font-black line-height-none leading-none select-none text-primary/10">
                Aa
              </span>
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 space-y-4">
                <div className="h-px w-3/4 bg-primary/20 relative">
                  <span className="absolute -top-3 left-0 text-[10px] font-mono text-primary/40">
                    Ascender
                  </span>
                </div>
                <div className="h-px w-3/4 bg-primary/40 relative">
                  <span className="absolute -top-3 left-0 text-[10px] font-mono text-primary/60 uppercase font-black">
                    Cap Height
                  </span>
                </div>
                <div className="h-px w-3/4 bg-primary/20 relative">
                  <span className="absolute -top-3 left-0 text-[10px] font-mono text-primary/40">
                    Baseline
                  </span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </motion.div>

      {/* Principles Section */}
      <motion.div
        variants={item}
        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {principles.map((p, i) => (
          <Card
            key={i}
            className="p-6 space-y-4 bg-muted/20 border-border/50 hover:bg-muted/30 transition-all group"
          >
            <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
              <p.icon className="h-5 w-5" />
            </div>
            <div className="space-y-2">
              <h4 className="font-bold">{p.title}</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {p.desc}
              </p>
            </div>
          </Card>
        ))}
      </motion.div>

      {/* Type Scale Section */}
      <motion.div
        variants={item}
        className="space-y-8 pt-8 border-t border-border/50"
      >
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tight">
            The Modular Scale
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-3xl">
            CrossUI uses a <strong>Major Second (1.125)</strong> modular scale
            by default. This mathematical relationship ensures that every font
            size feels proportionally correct relative to its neighbors.
          </p>
        </div>
        <div className="space-y-12">
          {typography.map((type, i) => (
            <div
              key={i}
              className="group space-y-4 border-b border-border/50 pb-8 transition-colors hover:border-primary/20"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                <span className="text-xs font-black uppercase tracking-widest text-primary">
                  {type.label}
                </span>
                <div className="flex gap-4 text-[10px] font-mono text-muted-foreground uppercase tracking-tighter">
                  <span>{type.size}</span>
                  <span>{type.weight}</span>
                  <span>{type.lineHeight} LH</span>
                </div>
              </div>
              <p className={type.className}>{type.example}</p>
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
            Defining your fonts
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Instead of updating every text element, define your typography stack
            in your{" "}
            <code className="bg-muted px-1 rounded text-xs">
              theme/config.ts
            </code>
            . The CLI handles the mapping to platform-specific font loaders.
          </p>
        </div>

        <InstallationCommand
          language="typescript"
          title="theme/config.ts"
          code={`export const theme = {
  typography: {
    sans: 'Inter, sans-serif',
    mono: 'Geist Mono, monospace',
    baseSize: 16,
    scale: 1.125, // Major Second
    weights: {
      regular: 400,
      medium: 500,
      bold: 700,
      black: 900,
    }
  }
}`}
        />
      </motion.div>

      {/* Multi-Platform Support */}
      <motion.div
        variants={item}
        className="space-y-8 pt-12 border-t border-border/50"
      >
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tight">
            Platform Nuances
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            One size doesn't Always fit all. Typography scales differently on a
            Retina mobile screen compared to a 1080p monitor.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6 space-y-4 bg-muted/20 border-border/50">
            <div className="flex items-center gap-3 text-primary">
              <Globe className="h-5 w-5" />
              <span className="font-bold">Web</span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Uses standard CSS{" "}
              <code className="text-[10px] bg-muted px-1 italic">rem</code> and
              <code className="text-[10px] bg-muted px-1 italic">em</code>{" "}
              units. Integrates with Tailwind CSS variables for fluid typography
              if enabled.
            </p>
          </Card>
          <Card className="p-6 space-y-4 bg-muted/20 border-border/50">
            <div className="flex items-center gap-3 text-primary">
              <Smartphone className="h-5 w-5" />
              <span className="font-bold">Mobile (iOS/Android)</span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Maps tokens to{" "}
              <code className="text-[10px] bg-muted px-1 italic">DP</code> or
              <code className="text-[10px] bg-muted px-1 italic">SP</code>.
              Automatically handles system-level dynamic text scaling (User
              font-size preferences).
            </p>
          </Card>
          <Card className="p-6 space-y-4 bg-muted/20 border-border/50">
            <div className="flex items-center gap-3 text-primary">
              <Monitor className="h-5 w-5" />
              <span className="font-bold">Flutter/SwiftUI</span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Generates native{" "}
              <code className="text-[10px] bg-muted px-1 italic">
                TextStyle
              </code>{" "}
              and
              <code className="text-[10px] bg-muted px-1 italic">
                Font
              </code>{" "}
              extensions, ensuring no performance overhead for style lookups.
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
              Typography Best Practices
            </h4>
            <p className="text-sm text-muted-foreground">
              Principles for professional-grade text layouts.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
            <div className="space-y-3">
              <span className="text-xs font-black uppercase tracking-widest text-primary">
                Line Length (Measure)
              </span>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Avoid extremely wide text blocks. Aim for 45-75 characters per
                line to maintain horizontal flow and reduce eye fatigue.
              </p>
            </div>
            <div className="space-y-3">
              <span className="text-xs font-black uppercase tracking-widest text-primary">
                Consistent Spacing
              </span>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Always use your spacing tokens for vertical margins between
                paragraphs and headings to maintain a logical rhythm.
              </p>
            </div>
            <div className="space-y-3 text-left">
              <span className="text-xs font-black uppercase tracking-widest text-primary text-left">
                Accessible Contrast
              </span>
              <p className="text-sm text-muted-foreground leading-relaxed text-left">
                Ensure your text color has enough contrast against the
                background. Aim for WCAG AA (4.5:1) for body text and 3:1 for
                large text.
              </p>
            </div>
            <div className="space-y-3 text-left">
              <span className="text-xs font-black uppercase tracking-widest text-primary text-left">
                Limit Font Families
              </span>
              <p className="text-sm text-muted-foreground leading-relaxed text-left">
                Stick to 1-2 font families. Use font weight and size to create
                variety rather than adding more typefaces which increases load
                time.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
