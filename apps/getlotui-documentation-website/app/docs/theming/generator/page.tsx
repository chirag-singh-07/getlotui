"use client";

import { useState, useMemo } from "react";
import {
  Wand2,
  Copy,
  Check,
  RefreshCw,
  Palette,
  Ruler,
  Radius as RadiusIcon,
  Smartphone,
  Globe,
  Monitor,
  Layout,
  Download,
  Code2,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "@/hooks/use-toast";

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

export default function ThemeGenerator() {
  const [config, setConfig] = useState({
    primary: "#6366f1",
    secondary: "#94a3b8",
    background: "#ffffff",
    foreground: "#0f172a",
    radius: 8,
    spacing: 8,
    fontSans: "Geist Sans",
    fontSizeBase: 16,
    shadowIntensity: 0.1,
  });

  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview");
  const [activePlatform, setActivePlatform] = useState<"web" | "mobile">("web");

  const presets = {
    modern: {
      primary: "#6366f1",
      secondary: "#94a3b8",
      background: "#ffffff",
      foreground: "#0f172a",
      radius: 12,
      spacing: 8,
      fontSans: "Geist Sans",
      fontSizeBase: 16,
      shadowIntensity: 0.1,
    },
    minimal: {
      primary: "#000000",
      secondary: "#71717a",
      background: "#ffffff",
      foreground: "#000000",
      radius: 0,
      spacing: 6,
      fontSans: "Inter",
      fontSizeBase: 14,
      shadowIntensity: 0.05,
    },
    vibrant: {
      primary: "#ec4899",
      secondary: "#7c3aed",
      background: "#fdf2f8",
      foreground: "#1e1b4b",
      radius: 20,
      spacing: 10,
      fontSans: "Outfit",
      fontSizeBase: 16,
      shadowIntensity: 0.15,
    },
    dark: {
      primary: "#38bdf8",
      secondary: "#94a3b8",
      background: "#0f172a",
      foreground: "#f8fafc",
      radius: 8,
      spacing: 8,
      fontSans: "Geist Sans",
      fontSizeBase: 16,
      shadowIntensity: 0.4,
    },
    neo: {
      primary: "#00ff9d",
      secondary: "#ff0080",
      background: "#050505",
      foreground: "#ffffff",
      radius: 2,
      spacing: 8,
      fontSans: "JetBrains Mono",
      fontSizeBase: 14,
      shadowIntensity: 0.5,
    },
    midnight: {
      primary: "#6366f1",
      secondary: "#312e81",
      background: "#000000",
      foreground: "#e2e8f0",
      radius: 4,
      spacing: 8,
      fontSans: "Geist Sans",
      fontSizeBase: 16,
      shadowIntensity: 0.6,
    },
    rose: {
      primary: "#e11d48",
      secondary: "#fb7185",
      background: "#fff1f2",
      foreground: "#881337",
      radius: 24,
      spacing: 12,
      fontSans: "Outfit",
      fontSizeBase: 16,
      shadowIntensity: 0.08,
    },
    forest: {
      primary: "#16a34a",
      secondary: "#15803d",
      background: "#f0fdf4",
      foreground: "#14532d",
      radius: 16,
      spacing: 8,
      fontSans: "Geist Sans",
      fontSizeBase: 16,
      shadowIntensity: 0.1,
    },
    retro: {
      primary: "#f97316",
      secondary: "#fbbf24",
      background: "#fffbeb",
      foreground: "#78350f",
      radius: 0,
      spacing: 4,
      fontSans: "Space Grotesk",
      fontSizeBase: 18,
      shadowIntensity: 0.2,
    },
    slate: {
      primary: "#0f172a",
      secondary: "#64748b",
      background: "#f8fafc",
      foreground: "#0f172a",
      radius: 6,
      spacing: 8,
      fontSans: "Inter",
      fontSizeBase: 16,
      shadowIntensity: 0.12,
    },
    glass: {
      primary: "#8b5cf6",
      secondary: "#a78bfa",
      background: "#ffffff",
      foreground: "#1e1b4b",
      radius: 16,
      spacing: 8,
      fontSans: "Geist Sans",
      fontSizeBase: 16,
      shadowIntensity: 0.05,
    },
    ocean: {
      primary: "#0ea5e9",
      secondary: "#0284c7",
      background: "#f0f9ff",
      foreground: "#0c4a6e",
      radius: 12,
      spacing: 10,
      fontSans: "Outfit",
      fontSizeBase: 16,
      shadowIntensity: 0.1,
    },
  };

  const applyPreset = (presetName: keyof typeof presets) => {
    setConfig(presets[presetName]);
    toast({
      title: `${
        presetName.charAt(0).toUpperCase() + presetName.slice(1)
      } preset applied`,
      description: "Design tokens have been updated.",
    });
  };

  const generatedCode = useMemo(() => {
    return `// theme/config.ts
export const theme = {
  colors: {
    primary: '${config.primary}',
    secondary: '${config.secondary}',
    background: '${config.background}',
    foreground: '${config.foreground}',
  },
  radius: {
    unit: 'px',
    base: ${config.radius},
    scale: {
      sm: ${Math.round(config.radius / 2)},
      md: ${config.radius},
      lg: ${Math.round(config.radius * 1.5)},
      xl: ${config.radius * 3},
    }
  },
  spacing: {
    unit: ${config.spacing},
    scale: {
      xs: ${Math.round(config.spacing / 2)},
      sm: ${config.spacing},
      md: ${config.spacing * 2},
      lg: ${config.spacing * 4},
    }
  },
  typography: {
    baseSize: ${config.fontSizeBase},
    sans: '${config.fontSans}, sans-serif',
  },
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, ${config.shadowIntensity})',
    md: '0 4px 6px -1px rgba(0, 0, 0, ${
      config.shadowIntensity
    }), 0 2px 4px -2px rgba(0, 0, 0, ${config.shadowIntensity})',
    lg: '0 10px 15px -3px rgba(0, 0, 0, ${
      config.shadowIntensity
    }), 0 4px 6px -4px rgba(0, 0, 0, ${config.shadowIntensity})',
  }
};`;
  }, [config]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedCode);
    setCopied(true);
    toast({
      title: "Copied to clipboard",
      description: "Theme configuration has been copied successfully.",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  const resetTheme = () => {
    applyPreset("modern");
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-12 pb-32"
    >
      {/* Hero Section */}
      <motion.div variants={item} className="space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider">
          <Wand2 className="h-3.5 w-3.5" />
          <span>Interactive Tool</span>
        </div>
        <div className="space-y-4">
          <h1 className="text-5xl md:text-6xl font-black tracking-tight bg-clip-text text-transparent bg-linear-to-r from-foreground to-foreground/70">
            Theme Generator
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
            Design your system visually. Adjust colors, spacing, and curvature
            in real-time, then copy the generated code directly into your
            project.
          </p>
        </div>
      </motion.div>

      <div className="grid lg:grid-cols-[380px_1fr] gap-12 pt-8 border-t border-border/50">
        {/* Controls Sidebar */}
        <motion.div variants={item} className="space-y-8">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="font-bold flex items-center gap-2">
                <Palette className="h-4 w-4 text-primary" />
                Styles & Colors
              </h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={resetTheme}
                className="h-8 px-2 text-xs"
              >
                <RefreshCw className="h-3 w-3 mr-1" /> Reset
              </Button>
            </div>

            {/* Presets */}
            <div className="grid grid-cols-4 gap-2">
              {(Object.keys(presets) as Array<keyof typeof presets>).map(
                (p) => (
                  <button
                    key={p}
                    onClick={() => applyPreset(p)}
                    className="group relative h-10 rounded-lg border border-border/50 bg-muted/20 hover:bg-muted/40 transition-all overflow-hidden"
                  >
                    <div
                      className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity"
                      style={{ backgroundColor: presets[p].primary }}
                    />
                    <span className="relative text-[10px] font-bold uppercase tracking-tight">
                      {p}
                    </span>
                  </button>
                )
              )}
            </div>

            <div className="space-y-4 pt-4 border-t border-border/50">
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-muted-foreground">
                  Primary Color
                </label>
                <div className="flex gap-2">
                  <input
                    type="color"
                    className="h-10 w-12 rounded border border-border bg-transparent p-1 cursor-pointer"
                    value={config.primary}
                    onChange={(e) =>
                      setConfig({ ...config, primary: e.target.value })
                    }
                  />
                  <input
                    type="text"
                    className="flex-1 h-10 px-3 rounded border border-border bg-muted/20 font-mono text-xs"
                    value={config.primary}
                    onChange={(e) =>
                      setConfig({ ...config, primary: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-muted-foreground">
                  Background
                </label>
                <div className="flex gap-2">
                  <input
                    type="color"
                    className="h-10 w-12 rounded border border-border bg-transparent p-1 cursor-pointer"
                    value={config.background}
                    onChange={(e) =>
                      setConfig({ ...config, background: e.target.value })
                    }
                  />
                  <input
                    type="text"
                    className="flex-1 h-10 px-3 rounded border border-border bg-muted/20 font-mono text-xs"
                    value={config.background}
                    onChange={(e) =>
                      setConfig({ ...config, background: e.target.value })
                    }
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="font-bold flex items-center gap-2">
              <Code2 className="h-4 w-4 text-primary" />
              Typography
            </h3>
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-muted-foreground">
                  Typeface
                </label>
                <input
                  type="text"
                  className="w-full h-10 px-3 rounded border border-border bg-muted/20 text-xs font-bold"
                  value={config.fontSans}
                  onChange={(e) =>
                    setConfig({ ...config, fontSans: e.target.value })
                  }
                />
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <label className="text-xs font-black uppercase tracking-widest text-muted-foreground">
                    Base Size
                  </label>
                  <span className="text-xs font-mono font-bold text-primary">
                    {config.fontSizeBase}px
                  </span>
                </div>
                <input
                  type="range"
                  min="12"
                  max="24"
                  step="1"
                  className="w-full h-1.5 bg-muted rounded-full appearance-none cursor-pointer accent-primary"
                  value={config.fontSizeBase}
                  onChange={(e) =>
                    setConfig({
                      ...config,
                      fontSizeBase: parseInt(e.target.value),
                    })
                  }
                />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="font-bold flex items-center gap-2">
              <RadiusIcon className="h-4 w-4 text-primary" />
              Curvature & Depth
            </h3>
            <div className="space-y-6">
              <div className="space-y-3">
                <div className="flex justify-between">
                  <label className="text-xs font-black uppercase tracking-widest text-muted-foreground text-left">
                    Base Radius
                  </label>
                  <span className="text-xs font-mono font-bold text-primary">
                    {config.radius}px
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="48"
                  step="2"
                  className="w-full h-1.5 bg-muted rounded-full appearance-none cursor-pointer accent-primary"
                  value={config.radius}
                  onChange={(e) =>
                    setConfig({ ...config, radius: parseInt(e.target.value) })
                  }
                />
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <label className="text-xs font-black uppercase tracking-widest text-muted-foreground text-left">
                    Shadow Intensity
                  </label>
                  <span className="text-xs font-mono font-bold text-primary">
                    {Math.round(config.shadowIntensity * 100)}%
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="0.5"
                  step="0.01"
                  className="w-full h-1.5 bg-muted rounded-full appearance-none cursor-pointer accent-primary"
                  value={config.shadowIntensity}
                  onChange={(e) =>
                    setConfig({
                      ...config,
                      shadowIntensity: parseFloat(e.target.value),
                    })
                  }
                />
              </div>
            </div>
          </div>

          <div className="space-y-6 pb-20">
            <h3 className="font-bold flex items-center gap-2">
              <Ruler className="h-4 w-4 text-primary" />
              Spacing
            </h3>
            <div className="space-y-4">
              <div className="space-y-3">
                <div className="flex justify-between">
                  <label className="text-xs font-black uppercase tracking-widest text-muted-foreground text-left">
                    Spacing Unit
                  </label>
                  <span className="text-xs font-mono font-bold text-primary">
                    {config.spacing}px
                  </span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="16"
                  step="1"
                  className="w-full h-1.5 bg-muted rounded-full appearance-none cursor-pointer accent-primary"
                  value={config.spacing}
                  onChange={(e) =>
                    setConfig({ ...config, spacing: parseInt(e.target.value) })
                  }
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Preview Area */}
        <motion.div variants={item} className="space-y-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-1 bg-muted rounded-xl w-full">
            <div className="flex p-1 bg-background/50 rounded-lg">
              <Button
                variant={activeTab === "preview" ? "secondary" : "ghost"}
                size="sm"
                className="h-8 px-4"
                onClick={() => setActiveTab("preview")}
              >
                Live Preview
              </Button>
              <Button
                variant={activeTab === "code" ? "secondary" : "ghost"}
                size="sm"
                className="h-8 px-4"
                onClick={() => setActiveTab("code")}
              >
                Generated Code
              </Button>
            </div>

            <div className="flex items-center gap-2 pr-2">
              <Button
                variant="ghost"
                size="sm"
                className={`h-8 px-3 gap-2 ${
                  activePlatform === "web"
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground"
                }`}
                onClick={() => setActivePlatform("web")}
              >
                <Monitor className="h-3.5 w-3.5" />
                <span className="text-[10px] font-bold uppercase">Web</span>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className={`h-8 px-3 gap-2 ${
                  activePlatform === "mobile"
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground"
                }`}
                onClick={() => setActivePlatform("mobile")}
              >
                <Smartphone className="h-3.5 w-3.5" />
                <span className="text-[10px] font-bold uppercase">Mobile</span>
              </Button>
            </div>
          </div>

          <AnimatePresence mode="wait">
            {activeTab === "preview" ? (
              <motion.div
                key="preview"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative min-h-[600px] flex items-center justify-center rounded-3xl border border-border/50 bg-linear-to-b from-muted/50 to-background overflow-hidden p-4 sm:p-8"
              >
                <div
                  className={`transition-all duration-500 ease-in-out max-w-full ${
                    activePlatform === "mobile"
                      ? "w-[320px] aspect-9/19 rounded-[48px] border-8 border-zinc-900 shadow-2xl"
                      : "w-full max-w-4xl rounded-2xl border border-border/50 shadow-xl"
                  } overflow-hidden`}
                  style={{
                    backgroundColor: config.background,
                    color: config.foreground,
                    fontFamily: config.fontSans,
                  }}
                >
                  {/* Status Bar for Mobile */}
                  {activePlatform === "mobile" && (
                    <div className="h-10 px-6 flex items-center justify-between opacity-50 text-[10px] font-bold">
                      <span>9:41</span>
                      <div className="flex gap-1.5">
                        <div className="w-4 h-2 rounded-full bg-foreground/20" />
                        <div className="w-2 h-2 rounded-full bg-foreground/20" />
                      </div>
                    </div>
                  )}

                  <div
                    className={`${
                      activePlatform === "mobile" ? "p-6" : "p-10"
                    } space-y-8`}
                  >
                    <div className="space-y-4">
                      <div
                        className="h-6 w-20 rounded-full opacity-20"
                        style={{ backgroundColor: config.primary }}
                      />
                      <h4
                        className="font-black tracking-tight leading-tight"
                        style={{
                          fontSize:
                            activePlatform === "mobile"
                              ? config.fontSizeBase * 1.8
                              : config.fontSizeBase * 2.5,
                        }}
                      >
                        Design for Every Surface.
                      </h4>
                      <p
                        className="opacity-70 leading-relaxed"
                        style={{ fontSize: config.fontSizeBase * 0.9 }}
                      >
                        CrossUI tokens bridge the gap between platforms with
                        zero compromises on performance.
                      </p>
                    </div>

                    <div
                      className={`${
                        activePlatform === "mobile" ? "p-4" : "p-6"
                      } space-y-4 border border-border/10 bg-background/5 transition-all`}
                      style={{
                        borderRadius: config.radius,
                        boxShadow: `0 10px 15px -3px rgba(0, 0, 0, ${config.shadowIntensity}), 0 4px 6px -4px rgba(0, 0, 0, ${config.shadowIntensity})`,
                      }}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className="h-10 w-10 shrink-0 bg-primary/10 flex items-center justify-center transition-all"
                          style={{
                            backgroundColor: `${config.primary}20`,
                            color: config.primary,
                            borderRadius: config.radius / 2,
                          }}
                        >
                          <Palette className="h-5 w-5" />
                        </div>
                        <div className="space-y-0.5">
                          <p
                            className="font-black uppercase tracking-wider opacity-60"
                            style={{ fontSize: config.fontSizeBase * 0.6 }}
                          >
                            Core Feature
                          </p>
                          <p
                            className="font-bold whitespace-nowrap"
                            style={{ fontSize: config.fontSizeBase * 1 }}
                          >
                            Universal Theming
                          </p>
                        </div>
                      </div>

                      <div
                        className={`flex gap-2 pt-2 ${
                          activePlatform === "mobile" ? "flex-col" : "flex-row"
                        }`}
                      >
                        <Button
                          size={activePlatform === "mobile" ? "sm" : "lg"}
                          className="flex-1 font-bold transition-all hover:scale-105 active:scale-95"
                          style={{
                            backgroundColor: config.primary,
                            borderRadius: config.radius / 2,
                            fontSize: config.fontSizeBase * 0.85,
                          }}
                        >
                          Get Started
                        </Button>
                        <Button
                          size={activePlatform === "mobile" ? "sm" : "lg"}
                          variant="outline"
                          className="flex-1 font-bold border-2 transition-all hover:bg-muted/10 active:scale-95"
                          style={{
                            borderRadius: config.radius / 2,
                            borderColor: config.primary,
                            color: config.primary,
                            fontSize: config.fontSizeBase * 0.85,
                          }}
                        >
                          Documentation
                        </Button>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 opacity-30">
                      {[70, 40, 60, 80].map((w, i) => (
                        <div
                          key={i}
                          className="h-1.5 rounded-full bg-muted/40"
                          style={{ width: `${w}%` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="code"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="relative group"
              >
                <div className="absolute top-4 right-4 flex gap-2 z-10">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 px-3 bg-zinc-900 border border-white/10 hover:bg-zinc-800 text-white gap-2"
                    onClick={() => {
                      const blob = new Blob([generatedCode], {
                        type: "text/plain",
                      });
                      const url = URL.createObjectURL(blob);
                      const a = document.createElement("a");
                      a.href = url;
                      a.download = "config.ts";
                      a.click();
                      toast({
                        title: "Download started",
                        description: "Your theme config is ready.",
                      });
                    }}
                  >
                    <Download className="h-3.5 w-3.5" />
                    <span className="text-[10px] font-bold uppercase">
                      Download
                    </span>
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 bg-zinc-900 border border-white/10 hover:bg-zinc-800 text-white"
                    onClick={copyToClipboard}
                  >
                    {copied ? (
                      <Check className="h-4 w-4 text-emerald-400" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                </div>
                <pre className="p-8 pb-12 rounded-3xl bg-zinc-950 border border-white/5 text-zinc-300 font-mono text-xs overflow-x-auto leading-relaxed scroll-hidden shadow-2xl">
                  <code>{generatedCode}</code>
                </pre>
                <div className="absolute bottom-4 left-8 text-[10px] text-zinc-500 font-mono flex items-center gap-2">
                  <Code2 className="h-3 w-3" />
                  <span>
                    Save this as <strong>theme/config.ts</strong> in your root
                    directory.
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div variants={item} className="pt-8 space-y-4">
            <div className="flex items-center gap-2 text-sm font-bold">
              <Layout className="h-4 w-4 text-primary" />
              Integration Guide
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <Card className="p-4 bg-primary/5 border-primary/10 space-y-2">
                <p className="text-xs font-bold">1. Install CrossUI CLI</p>
                <p className="text-[10px] text-muted-foreground">
                  npx crossui@latest init
                </p>
              </Card>
              <Card className="p-4 bg-primary/5 border-primary/10 space-y-2">
                <p className="text-xs font-bold">2. Inject Configuration</p>
                <p className="text-[10px] text-muted-foreground">
                  Replace theme/config.ts with generated code.
                </p>
              </Card>
            </div>
          </motion.div>

          {/* Theme Breakdown Section */}
          <motion.div variants={item} className="pt-12 space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold tracking-tight">
                Theme Specifications
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Understand how your design tokens are processed by the CrossUI
                engine to create a consistent visual language across platforms.
              </p>
            </div>

            <div className="grid gap-6">
              {[
                {
                  title: "Color System",
                  description:
                    "Your primary color is automatically processed to generate variants for hover, active, and translucent states (e.g., primary/10).",
                  icon: <Palette className="h-5 w-5" />,
                  details: [
                    "HSL-based translation",
                    "Dark mode inversion aware",
                    "Accessibility (WCAG) checked",
                  ],
                },
                {
                  title: "Smart Radius",
                  description:
                    "The base curvature scales mathematically (sm, md, lg, xl) to ensure that nested components always have harmonious inner/outer radii.",
                  icon: <RadiusIcon className="h-5 w-5" />,
                  details: [
                    "Consistent nesting logic",
                    "Platform-specific smoothing",
                    "Ejectable to native Swift/Dart",
                  ],
                },
                {
                  title: "Spacing Engine",
                  description:
                    "We use a base unit system (e.g., 8px) that ensures every margin and padding in your UI follows a strict rhythmic grid.",
                  icon: <Ruler className="h-5 w-5" />,
                  details: [
                    "Soft grid alignment",
                    "Multi-platform auto-scaling",
                    "Density-independent units",
                  ],
                },
              ].map((spec, i) => (
                <Card
                  key={i}
                  className="p-6 border-border/40 bg-zinc-50/50 dark:bg-zinc-900/10 overflow-hidden relative group"
                >
                  <div className="flex items-start gap-6 relative z-10">
                    <div className="h-12 w-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      {spec.icon}
                    </div>
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-bold text-lg">{spec.title}</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed mt-1">
                          {spec.description}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {spec.details.map((detail, j) => (
                          <div
                            key={j}
                            className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded bg-muted/50 text-muted-foreground"
                          >
                            {detail}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                    <Wand2 className="h-24 w-24 -mr-8 -mt-8" />
                  </div>
                </Card>
              ))}
            </div>

            <Card className="p-8 bg-zinc-950 border border-white/5 overflow-hidden relative">
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="space-y-4 text-center md:text-left">
                  <h4 className="text-xl font-bold text-white tracking-tight">
                    Ready to deploy your system?
                  </h4>
                  <p className="text-zinc-500 text-sm max-w-md">
                    The generated tokens can be consumed directly by
                    @crossui/expo, @crossui/flutter, and @crossui/web without
                    any additional configuration.
                  </p>
                </div>
                <Button className="h-12 px-8 bg-white text-black hover:bg-zinc-200 transition-colors rounded-xl font-bold">
                  View Integration Docs
                </Button>
              </div>
              <div className="absolute inset-0 bg-radial-to-tr from-primary/10 to-transparent pointer-events-none" />
            </Card>

            {/* Typography Scale Section */}
            <div className="space-y-8 pt-12">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold tracking-tight">
                  Typography Scale
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Visualization of your typography scale using the{" "}
                  {config.fontSans} typeface at {config.fontSizeBase}px base.
                </p>
              </div>

              <div className="grid gap-4 p-8 rounded-3xl border border-border/40 bg-muted/10">
                {[
                  {
                    label: "Display 1",
                    size: config.fontSizeBase * 3,
                    weight: "font-black",
                  },
                  {
                    label: "Heading 1",
                    size: config.fontSizeBase * 2.25,
                    weight: "font-bold",
                  },
                  {
                    label: "Heading 2",
                    size: config.fontSizeBase * 1.5,
                    weight: "font-bold",
                  },
                  {
                    label: "Body Text",
                    size: config.fontSizeBase,
                    weight: "font-normal",
                  },
                  {
                    label: "Subtext",
                    size: config.fontSizeBase * 0.875,
                    weight: "font-medium opacity-70",
                  },
                  {
                    label: "Caption",
                    size: config.fontSizeBase * 0.75,
                    weight: "font-bold uppercase tracking-widest opacity-50",
                  },
                ].map((type, i) => (
                  <div
                    key={i}
                    className="flex flex-col md:flex-row md:items-center justify-between gap-4 py-4 border-b border-border/50 last:border-0 min-w-0"
                  >
                    <div className="flex items-center gap-4 min-w-0">
                      <span className="text-[10px] font-mono text-muted-foreground w-20">
                        {type.label}
                      </span>
                      <p
                        className={`${type.weight} truncate`}
                        style={{
                          fontSize: type.size,
                          fontFamily: config.fontSans,
                        }}
                      >
                        Pack my box with five dozen liquor jugs.
                      </p>
                    </div>
                    <span className="text-[10px] font-mono font-bold text-primary bg-primary/10 px-2 py-1 rounded">
                      {Math.round(type.size)}px
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Color Palette Exploration */}
            <div className="space-y-8 pt-12">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold tracking-tight">
                  Palette Exploration
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  derived states and accessibility variants for your primary and
                  semantic colors.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {[
                  { label: "Primary", color: config.primary, opacity: 1 },
                  { label: "Hover", color: config.primary, opacity: 0.9 },
                  { label: "Active", color: config.primary, opacity: 0.8 },
                  { label: "Soft", color: config.primary, opacity: 0.2 },
                  { label: "Muted", color: config.primary, opacity: 0.1 },
                ].map((color, i) => (
                  <div key={i} className="space-y-3">
                    <div
                      className="aspect-square rounded-2xl border border-border/50 shadow-inner"
                      style={{
                        backgroundColor: color.color,
                        opacity: color.opacity,
                      }}
                    />
                    <div className="px-1">
                      <p className="text-[10px] font-black uppercase tracking-widest">
                        {color.label}
                      </p>
                      <p className="text-[10px] font-mono opacity-50">
                        {color.color}
                        {color.opacity < 1
                          ? Math.round(color.opacity * 100)
                          : ""}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Platform Feature Support */}
            <div className="space-y-8 pt-12 pb-20">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold tracking-tight">
                  Export Formats
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  CrossUI handles the heavy lifting of converting these tokens
                  into platform-specific code.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  {
                    name: "JSON Tokens",
                    lang: "Design Logic",
                    desc: "Raw data for tools",
                  },
                  {
                    name: "CSS Variables",
                    lang: "Web Standard",
                    desc: "Tailwind & Vanilla",
                  },
                  {
                    name: "Dart Classes",
                    lang: "Flutter App",
                    desc: "Type-safe colors",
                  },
                  {
                    name: "Swift UI",
                    lang: "Native iOS",
                    desc: "Declarative tokens",
                  },
                ].map((format, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-2xl border border-border/40 bg-zinc-50/50 dark:bg-muted/10 space-y-2"
                  >
                    <Check className="h-4 w-4 text-emerald-500" />
                    <p className="font-bold text-sm">{format.name}</p>
                    <p className="text-[10px] font-bold text-primary uppercase">
                      {format.lang}
                    </p>
                    <p className="text-[10px] text-muted-foreground">
                      {format.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
