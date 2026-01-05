"use client";

import {
  Palette,
  Ruler,
  Radius,
  Type,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { InstallationCommand } from "@/components/installation-command";

export default function ThemingPage() {
  const tokens = {
    colors: [
      { name: "primary", value: "#6366f1", desc: "Main brand color" },
      { name: "secondary", value: "#10b981", desc: "Secondary accent" },
      { name: "success", value: "#22c55e", desc: "Success states" },
      { name: "warning", value: "#f59e0b", desc: "Warning states" },
      { name: "danger", value: "#ef4444", desc: "Error states" },
      { name: "info", value: "#3b82f6", desc: "Info states" },
    ],
    radius: [
      { name: "small", value: "6px" },
      { name: "medium", value: "8px" },
      { name: "large", value: "16px" },
      { name: "xl", value: "24px" },
      { name: "round", value: "9999px" },
    ],
    spacing: [
      { name: "xs", value: "4px" },
      { name: "s", value: "8px" },
      { name: "sm", value: "12px" },
      { name: "m", value: "16px" },
      { name: "l", value: "24px" },
      { name: "xl", value: "32px" },
    ],
  };

  return (
    <div className="max-w-4xl mx-auto space-y-16 pb-20 px-4 md:px-0 text-left">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6 text-center lg:text-left"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider">
          <Palette className="h-3.5 w-3.5" />
          <span>Configurable Design</span>
        </div>
        <div className="space-y-4">
          <h1
            id="theming"
            className="text-5xl md:text-7xl font-black tracking-tight bg-clip-text text-transparent bg-linear-to-r from-foreground to-foreground/70"
          >
            Theming
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">
            Customize every aspect of your UI with our flexible token-driven
            theming system. Inspired by Shadcn UI.
          </p>
        </div>
      </motion.div>

      {/* Theme Config Example */}
      <section className="space-y-6">
        <h2
          id="theme-configuration"
          className="text-3xl font-bold tracking-tight"
        >
          Theme Configuration
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          CrossUI uses a centralized theme configuration where you define your
          design tokens. Everything in your app will automatically react to
          these values.
        </p>
        <InstallationCommand
          language="typescript"
          title="theme/config.ts"
          code={`export const theme = {
  colors: {
    primary: '#6366f1',
    secondary: '#10b981',
    background: '#ffffff',
    foreground: '#0f172a',
  },
  radius: {
    small: 6,
    medium: 8,
    large: 16,
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
  }
}`}
        />
      </section>

      {/* Colors Section */}
      <section className="space-y-8 pt-12 border-t border-border/50">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <Palette className="h-6 w-6 text-primary" />
            <h2 id="colors" className="text-3xl font-bold tracking-tight">
              Colors
            </h2>
          </div>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Our semantic color palette ensures consistent feedback across your
            entire application.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {tokens.colors.map((color) => (
            <Card
              key={color.name}
              className="p-4 flex items-center gap-4 bg-black/5 dark:bg-white/5 border-border/50 hover:bg-muted/50 transition-all cursor-default"
            >
              <div
                className="w-12 h-12 rounded-xl border border-white/20 shadow-lg shrink-0"
                style={{ backgroundColor: color.value }}
              />
              <div className="space-y-1">
                <span className="text-sm font-black uppercase tracking-widest block">
                  {color.name}
                </span>
                <span className="text-xs font-mono text-muted-foreground">
                  {color.value}
                </span>
                <p className="text-[10px] text-muted-foreground italic">
                  {color.desc}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Spacing Section */}
      <section className="space-y-8 pt-12 border-t border-border/50">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <Ruler className="h-6 w-6 text-primary" />
            <h2
              id="spacing"
              className="text-3xl font-bold tracking-tight text-left"
            >
              Spacing
            </h2>
          </div>
          <p className="text-muted-foreground text-lg leading-relaxed text-left">
            A balanced spacing system creates visual rhythm and professional
            layouts.
          </p>
        </div>

        <div className="space-y-4">
          {tokens.spacing.map((s) => (
            <div key={s.name} className="flex items-center gap-6 group">
              <span className="w-12 text-sm font-black uppercase tracking-widest text-muted-foreground">
                {s.name}
              </span>
              <div className="grow h-6 bg-muted/30 rounded-full overflow-hidden border border-border/50 group-hover:border-primary/30 transition-all">
                <div
                  className="h-full bg-primary/20 group-hover:bg-primary/40 transition-all relative"
                  style={{ width: parseInt(s.value) * 4 }}
                >
                  <div className="absolute right-2 inset-y-0 flex items-center">
                    <span className="text-[10px] font-mono font-bold text-primary">
                      {s.value}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Radius Section */}
      <section className="space-y-8 pt-12 border-t border-border/50">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <Radius className="h-6 w-6 text-primary" />
            <h2
              id="radius"
              className="text-3xl font-bold tracking-tight text-left"
            >
              Border Radius
            </h2>
          </div>
          <p className="text-muted-foreground text-lg leading-relaxed text-left">
            Control the "feel" of your UI from sharp and professional to soft
            and modern.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {tokens.radius.map((r) => (
            <div key={r.name} className="space-y-3 text-center">
              <div
                className="aspect-square bg-primary/10 border-2 border-primary/20 flex items-center justify-center transition-all hover:scale-105"
                style={{ borderRadius: r.value }}
              >
                <div className="w-6 h-6 border-t-4 border-l-4 border-primary rounded-ss-[4px]" />
              </div>
              <div className="space-y-1">
                <span className="text-xs font-black uppercase tracking-widest block">
                  {r.name}
                </span>
                <span className="text-[10px] font-mono text-muted-foreground">
                  {r.value}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Typography Section */}
      <section className="space-y-8 pt-12 border-t border-border/50">
        <div className="space-y-10 group">
          <div className="flex items-center gap-3">
            <Type className="h-6 w-6 text-primary" />
            <h2
              id="typography"
              className="text-3xl font-bold tracking-tight text-left"
            >
              Typography
            </h2>
          </div>
          <div className="space-y-6">
            <div className="group/item border-b border-border/50 pb-6 transition-colors hover:border-primary/30">
              <span className="text-xs font-black uppercase tracking-widest text-primary mb-4 block">
                Heading Large
              </span>
              <h1 className="text-6xl font-black tracking-tighter leading-none">
                The quick brown fox
              </h1>
              <p className="mt-2 text-sm text-muted-foreground font-mono italic">
                size: 60px / weight: 900
              </p>
            </div>
            <div className="group/item border-b border-border/50 pb-6 transition-colors hover:border-primary/30">
              <span className="text-xs font-black uppercase tracking-widest text-primary mb-4 block">
                Heading Medium
              </span>
              <h2
                id="typography-medium"
                className="text-4xl font-bold tracking-tight"
              >
                Jumps over the lazy dog
              </h2>
              <p className="mt-2 text-sm text-muted-foreground font-mono italic">
                size: 36px / weight: 700
              </p>
            </div>
            <div className="group/item border-b border-border/50 pb-6 transition-colors hover:border-primary/30">
              <span className="text-xs font-black uppercase tracking-widest text-primary mb-4 block">
                Body Default
              </span>
              <p className="text-lg leading-relaxed text-foreground/80">
                Design system tokens allow you to iterate faster with
                confidence. Change a single value and see your whole app adapt.
              </p>
              <p className="mt-2 text-sm text-muted-foreground font-mono italic">
                size: 18px / weight: 400
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <div className="pt-24 border-t border-border/50">
        <div className="p-8 rounded-3xl bg-primary/5 border border-primary/20 space-y-4">
          <h4 className="text-xl font-bold flex items-center gap-2">
            <CheckCircle2 className="h-6 w-6 text-primary" />
            Theming Best Practices
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
            <div className="space-y-2">
              <span className="text-sm font-black uppercase tracking-widest text-primary">
                Avoid Hardcoding
              </span>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Never use #hex codes or absolute pixel values in your
                components. Use `theme.colors.primary` instead.
              </p>
            </div>
            <div className="space-y-2 text-left">
              <span className="text-sm font-black uppercase tracking-widest text-primary text-left">
                Consistency Over Variation
              </span>
              <p className="text-sm text-muted-foreground leading-relaxed text-left">
                Stick to your defined tokens for spacing and radius. This
                ensures your app feels polished and unified.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
