"use client";

import {
  Palette,
  Ruler,
  Radius,
  Type,
  Sparkles,
  CheckCircle2,
  FileCode,
  Zap,
  RefreshCw,
  ArrowRight,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { InstallationCommand } from "@/components/installation-command";
import Link from "next/link";
import { Button } from "@/components/ui/button";

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

export default function ThemingPage() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-16 pb-20"
    >
      {/* Hero Section */}
      <motion.div variants={item} className="space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider">
          <Palette className="h-3.5 w-3.5" />
          <span>Design System Architecture</span>
        </div>
        <div className="space-y-4">
          <h1 className="text-5xl md:text-6xl font-black tracking-tight bg-clip-text text-transparent bg-linear-to-r from-foreground to-foreground/70">
            Theming Overview
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
            CrossUI uses a <strong>Token-First</strong> approach to theming. We
            separate visual primitives from component logic, ensuring your brand
            identity remains consistent across every platform.
          </p>
        </div>
      </motion.div>

      {/* The Mental Model Section */}
      <motion.div
        variants={item}
        className="space-y-8 pt-8 border-t border-border/50"
      >
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tight">
            The Mental Model
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-3xl">
            In CrossUI, a "Theme" is not just a stylesheet. it's a collection of
            mathematical tokens that define the boundaries of your design
            system. By centralizing these values, you can shift the visual
            weight of your entire application without touching a single
            component file.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Foundation",
              desc: "Raw values like #hex codes, pixel scales, and font stacks. These are the building blocks of your system.",
              icon: Zap,
              detail:
                "Define your base colors (e.g., Indigo-500) and scale (e.g., 4px steps).",
            },
            {
              title: "Semantic Tokens",
              desc: "Contextual names like 'primary', 'surface', and 'border-radius-m' that point back to foundation values.",
              icon: RefreshCw,
              detail:
                "Change the 'primary' token to point to a different brand color instantly.",
            },
            {
              title: "Component Styles",
              desc: "How tokens are combined into high-level UI elements via Class Variance Authority (CVA).",
              icon: FileCode,
              detail:
                "Adjust variants like 'outline' or 'ghost' based on semantic tokens.",
            },
          ].map((box, i) => (
            <Card
              key={i}
              className="p-6 space-y-4 bg-muted/20 border-border/50 hover:bg-muted/30 transition-colors"
            >
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <box.icon className="h-5 w-5" />
              </div>
              <div className="space-y-2">
                <h4 className="font-bold">{box.title}</h4>
                <p className="text-sm text-balance text-muted-foreground leading-relaxed">
                  {box.desc}
                </p>
                <div className="pt-2 text-[10px] font-mono text-primary/70 italic leading-snug">
                  {box.detail}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </motion.div>

      {/* Configuration Files Section */}
      <motion.div variants={item} className="space-y-8 pt-8">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tight">
            Configuration Files
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            When you run{" "}
            <code className="bg-muted px-1.5 py-0.5 rounded">
              npx crossui init
            </code>
            , two primary files are created to manage your design system.
          </p>
        </div>

        <div className="space-y-12">
          {/* theme.config.ts */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 font-bold text-xs italic">
                TS
              </div>
              <h3 className="text-xl font-bold">theme/config.ts</h3>
            </div>
            <p className="text-sm text-muted-foreground max-w-2xl">
              This is the runtime configuration. It exports a typed object that
              your components use for dynamic styling, animations, and
              conditional logic.
            </p>
            <InstallationCommand
              language="typescript"
              title="theme/config.ts"
              code={`export const theme = {
  colors: {
    primary: '#6366f1',
    foreground: '#0f172a',
    background: '#ffffff',
  },
  radius: {
    m: 8,
    xl: 24,
  },
  spacing: {
    gap: 16,
    padding: 24,
  }
}`}
            />
          </div>

          {/* crossui.json */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-500 font-bold text-xs italic">
                JSON
              </div>
              <h3 className="text-xl font-bold">crossui.json</h3>
            </div>
            <p className="text-sm text-muted-foreground max-w-2xl">
              The CLI configuration. This tells the generator how to map tokens
              into platform-specific code (e.g., Tailwind classes for Web vs.
              Custom styles for Flutter).
            </p>
            <InstallationCommand
              language="json"
              title="crossui.json"
              code={`{
  "framework": "expo",
  "tailwind": {
    "config": "tailwind.config.js",
    "css": "styles/globals.css"
  },
  "aliases": {
    "ui": "@/components/ui"
  }
}`}
            />
          </div>
        </div>
      </motion.div>

      {/* Advanced Customization Section */}
      <motion.div
        variants={item}
        className="space-y-8 pt-12 border-t border-border/50 text-left"
      >
        <div className="space-y-4 text-left">
          <h2 className="text-3xl font-bold tracking-tight text-left">
            Advanced Customization
          </h2>
          <p className="text-muted-foreground leading-relaxed text-left">
            Total control means you can update your entire app's look by
            modifying the centralized config files. CrossUI isn't just about
            changing colors; it's about defining the logic of your design.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-bold flex items-center gap-2 text-left">
                <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                Variant Logic (CVA)
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed text-left">
                Most components use <strong>Class Variance Authority</strong>.
                This allows you to define complex states (hover, focus, active)
                using standard CSS classes or Tailwind tokens in a type-safe
                way.
              </p>
            </div>
            <div className="space-y-4 text-left">
              <h4 className="font-bold flex items-center gap-2 text-left text-left">
                <div className="h-1.5 w-1.5 rounded-full bg-primary text-left" />
                Automatic CSS Variable Sync
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed text-left text-left">
                The CLI automatically maps your{" "}
                <code className="bg-muted px-1 rounded text-xs">
                  theme/config.ts
                </code>
                to CSS variables in your{" "}
                <code className="bg-muted px-1 rounded text-xs text-left">
                  globals.css
                </code>
                . This ensures that native components and custom CSS stay in
                perfect sync.
              </p>
            </div>
          </div>
          <Card className="p-8 bg-zinc-950 text-zinc-300 font-mono text-xs leading-relaxed border-border/50">
            <div className="flex gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500/50" />
              <div className="w-3 h-3 rounded-full bg-amber-500/50" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/50" />
            </div>
            <div>
              <span className="text-purple-400 font-bold">const</span>{" "}
              buttonVariants = <span className="text-amber-400">cva</span>(
              <span className="text-emerald-400">"..."</span>, {"{"}
              <br />
              &nbsp;&nbsp;variants: {"{"}
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;variant: {"{"}
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;primary:{" "}
              <span className="text-emerald-400">"bg-primary text-white"</span>,
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;outline:{" "}
              <span className="text-emerald-400">"border border-primary"</span>,
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;{"}"},
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;size: {"{"}
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sm:{" "}
              <span className="text-emerald-400">"h-9 px-3 rounded-md"</span>,
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;{"}"}
              <br />
              &nbsp;&nbsp;{"}"}
              <br />
              {"}"})
            </div>
          </Card>
        </div>
      </motion.div>

      {/* Best Practices Section */}
      <motion.div variants={item} className="pt-24 border-t border-border/50">
        <div className="p-8 rounded-3xl bg-primary/5 border border-primary/20 space-y-6">
          <div className="space-y-2">
            <h4 className="text-2xl font-bold flex items-center gap-2">
              <CheckCircle2 className="h-6 w-6 text-primary" />
              Theming Best Practices
            </h4>
            <p className="text-sm text-muted-foreground">
              Follow these rules to keep your codebase maintainable and
              scalable.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
            <div className="space-y-2">
              <span className="text-xs font-black uppercase tracking-widest text-primary">
                Avoid Hardcoding
              </span>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Never use #hex codes or absolute pixel values in your
                components. Always reference{" "}
                <code className="bg-muted px-1 text-xs">
                  theme.colors.primary
                </code>{" "}
                to ensure global updates are possible.
              </p>
            </div>
            <div className="space-y-2 text-left">
              <span className="text-xs font-black uppercase tracking-widest text-primary text-left">
                Consistency Over Variation
              </span>
              <p className="text-sm text-muted-foreground leading-relaxed text-left">
                Stick to your defined tokens for spacing and radius. If a
                designer asks for 7px, try to fit it into the nearest token
                (e.g. 6px or 8px) to maintain rhythm.
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Explore Specifics */}
      <motion.div variants={item} className="pt-16 space-y-8">
        <h3 className="text-2xl font-bold tracking-tight">
          Deep Dive into Tokens
        </h3>
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            {
              title: "Color Palette",
              icon: Palette,
              href: "/docs/theming/colors",
            },
            {
              title: "Typography Stack",
              icon: Type,
              href: "/docs/theming/typography",
            },
            {
              title: "Dark Mode Setup",
              icon: Sparkles,
              href: "/docs/theming/dark-mode",
            },
          ].map((link, i) => (
            <Link key={i} href={link.href}>
              <Card className="p-4 flex items-center gap-3 hover:bg-muted/50 transition-colors group border-border/50">
                <div className="h-8 w-8 rounded bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <link.icon className="h-4 w-4" />
                </div>
                <span className="text-sm font-semibold">{link.title}</span>
                <ArrowRight className="h-3 w-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
              </Card>
            </Link>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
