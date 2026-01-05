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
  });

  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview");

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
      sm: ${config.radius / 2},
      md: ${config.radius},
      lg: ${config.radius * 1.5},
      xl: ${config.radius * 3},
    }
  },
  spacing: {
    unit: ${config.spacing},
  },
  typography: {
    sans: '${config.fontSans}, sans-serif',
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
    setConfig({
      primary: "#6366f1",
      secondary: "#94a3b8",
      background: "#ffffff",
      foreground: "#0f172a",
      radius: 8,
      spacing: 8,
      fontSans: "Geist Sans",
    });
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

      <div className="grid lg:grid-cols-[400px_1fr] gap-12 pt-8 border-t border-border/50">
        {/* Controls Sidebar */}
        <motion.div variants={item} className="space-y-8">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="font-bold flex items-center gap-2">
                <Palette className="h-4 w-4 text-primary" />
                Colors
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

            <div className="space-y-4">
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
              <RadiusIcon className="h-4 w-4 text-primary" />
              Curvature
            </h3>
            <div className="space-y-4">
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
            </div>
          </div>

          <div className="space-y-6">
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
          <div className="flex p-1 bg-muted rounded-lg w-fit">
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

          <AnimatePresence mode="wait">
            {activeTab === "preview" ? (
              <motion.div
                key="preview"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="p-12 rounded-3xl border border-border/50 transition-colors"
                style={{
                  backgroundColor: config.background,
                  color: config.foreground,
                }}
              >
                <div className="max-w-md mx-auto space-y-8">
                  <div className="space-y-2">
                    <h4 className="text-3xl font-black tracking-tight">
                      Component Preview
                    </h4>
                    <p className="text-sm opacity-70">
                      Testing how your tokens look in a real layout.
                    </p>
                  </div>

                  <Card
                    className="p-6 space-y-4 border-border/50 overflow-hidden"
                    style={{ borderRadius: config.radius }}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="h-10 w-10 shrink-0 bg-primary/10 flex items-center justify-center"
                        style={{
                          backgroundColor: `${config.primary}20`,
                          color: config.primary,
                          borderRadius: config.radius / 2,
                        }}
                      >
                        <Globe className="h-5 w-5" />
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm font-bold">Connect Universally</p>
                        <p className="text-xs opacity-60">
                          Multi-platform rendering engine.
                        </p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="h-2 w-full bg-muted rounded-full" />
                      <div className="h-2 w-2/3 bg-muted rounded-full" />
                    </div>
                    <div className="flex gap-2 pt-2">
                      <Button
                        size="sm"
                        className="flex-1"
                        style={{
                          backgroundColor: config.primary,
                          borderRadius: config.radius / 2,
                        }}
                      >
                        Primary Action
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1"
                        style={{
                          borderRadius: config.radius / 2,
                          borderColor: config.primary,
                          color: config.primary,
                        }}
                      >
                        Secondary
                      </Button>
                    </div>
                  </Card>

                  <div className="grid grid-cols-2 gap-4">
                    <div
                      className="p-4 bg-muted/30 border border-border/50"
                      style={{ borderRadius: config.radius }}
                    >
                      <Monitor className="h-4 w-4 mb-2 opacity-50" />
                      <p className="text-[10px] font-bold uppercase tracking-widest opacity-50">
                        Desktop
                      </p>
                    </div>
                    <div
                      className="p-4 bg-muted/30 border border-border/50"
                      style={{ borderRadius: config.radius }}
                    >
                      <Smartphone className="h-4 w-4 mb-2 opacity-50" />
                      <p className="text-[10px] font-bold uppercase tracking-widest opacity-50">
                        Mobile
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="code"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="relative group"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 right-4 h-8 w-8 bg-zinc-900 border border-white/10 hover:bg-zinc-800 transition-colors z-10 text-white"
                  onClick={copyToClipboard}
                >
                  {copied ? (
                    <Check className="h-4 w-4 text-emerald-400" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </Button>
                <pre className="p-8 pb-12 rounded-3xl bg-zinc-950 border border-white/5 text-zinc-300 font-mono text-xs overflow-x-auto leading-relaxed scroll-hidden">
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
        </motion.div>
      </div>
    </motion.div>
  );
}
