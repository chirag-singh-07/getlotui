"use client";

import { Moon, Sun, Monitor, Sparkles, CheckCircle2, Zap } from "lucide-react";
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

export default function DarkModePage() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-16 pb-20"
    >
      {/* Hero */}
      <motion.div variants={item} className="space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider">
          <Moon className="h-3.5 w-3.5" />
          <span>Advanced Theming</span>
        </div>
        <div className="space-y-4">
          <h1 className="text-5xl font-black tracking-tight">Dark Mode</h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
            CrossUI supports native dark mode out of the box. Whether it's
            system-controlled or user-selected, your UI will adapt gracefully.
          </p>
        </div>
      </motion.div>

      {/* How it Works */}
      <motion.div
        variants={item}
        className="space-y-8 pt-8 border-t border-border/50"
      >
        <h2 className="text-3xl font-bold tracking-tight">How it Works</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "System Preference",
              desc: "Automatically detects iOS, Android, and Browser color schemes.",
              icon: Monitor,
            },
            {
              title: "User Toggle",
              desc: "Manual overrides that are persisted in local storage or AsyncStorage.",
              icon: Sun,
            },
            {
              title: "Conditional Logic",
              desc: "Access theme state directly in your code for complex variants.",
              icon: Zap,
            },
          ].map((box, i) => (
            <Card
              key={i}
              className="p-6 space-y-3 bg-muted/20 border-border/50"
            >
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <box.icon className="h-5 w-5" />
              </div>
              <h4 className="font-bold">{box.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {box.desc}
              </p>
            </Card>
          ))}
        </div>
      </motion.div>

      {/* Configuration Section */}
      <motion.div variants={item} className="space-y-6">
        <h2 className="text-3xl font-bold tracking-tight text-left">
          Implementation
        </h2>
        <p className="text-muted-foreground leading-relaxed text-left">
          In your{" "}
          <code className="bg-muted px-1 rounded text-xs">theme/config.ts</code>
          , you can define separate color objects for light and dark modes.
        </p>
        <InstallationCommand
          language="typescript"
          title="theme/config.ts"
          code={`export const theme = {
  light: {
    background: '#ffffff',
    foreground: '#0f172a',
    primary: '#6366f1',
  },
  dark: {
    background: '#0f172a',
    foreground: '#ffffff',
    primary: '#818cf8',
  }
}`}
        />
        <p className="text-sm text-muted-foreground text-left italic">
          The CrossUI CLI uses these objects to generate the necessary
          platform-specific theme files automatically.
        </p>
      </motion.div>

      {/* React Hook Section */}
      <motion.div
        variants={item}
        className="space-y-6 pt-8 border-t border-border/50"
      >
        <h2 className="text-3xl font-bold tracking-tight text-left">
          Accessing Theme State
        </h2>
        <p className="text-muted-foreground leading-relaxed text-left">
          Use the{" "}
          <code className="bg-muted px-1 rounded text-xs">useTheme</code> hook
          to toggle modes or check the current active theme programmatically.
        </p>
        <InstallationCommand
          language="typescript"
          title="Example Usage"
          code={`import { useTheme } from "@/hooks/use-theme";

export function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <Button onPress={toggleTheme}>
      {isDark ? "Light Mode" : "Dark Mode"}
    </Button>
  );
}`}
        />
      </motion.div>

      {/* Pro Tip */}
      <motion.div variants={item} className="pt-8">
        <Card className="p-8 border-none bg-primary/5 space-y-4 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <Sparkles className="h-24 w-24" />
          </div>
          <h4 className="text-xl font-bold flex items-center gap-2">
            <CheckCircle2 className="h-6 w-6 text-primary" />
            Theming Tip
          </h4>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
            Avoid using absolute colors on subtle elements like shadows. Using
            <code className="bg-muted px-1 text-xs mx-1 italic">
              rgba(0,0,0,0.1)
            </code>{" "}
            might look great in light mode but create artifacts in dark mode.
            Instead, use a semitransparent version of your
            <code className="bg-muted px-1 text-xs mx-1 italic">
              foreground
            </code>{" "}
            token.
          </p>
        </Card>
      </motion.div>
    </motion.div>
  );
}
