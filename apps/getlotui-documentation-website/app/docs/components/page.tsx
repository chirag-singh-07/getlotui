"use client";

import Link from "next/link";
import { Card } from "@/components/ui/card";
import {
  ArrowRight,
  MousePointer2,
  Type,
  Square,
  MessageSquare,
  User,
  Layout,
  Layers,
  Menu,
  AlertCircle,
  Bell,
  PanelTop,
} from "lucide-react";
import { motion } from "framer-motion";

const components = [
  {
    name: "Button",
    href: "/docs/components/button",
    description:
      "Highly interactive button component with multiple variants and loading states.",
    icon: MousePointer2,
    category: "General",
  },
  {
    name: "Badge",
    href: "/docs/components/badge",
    description:
      "Status indicators with support for different semantic variants and shapes.",
    icon: Square,
    category: "General",
  },
  {
    name: "Toast",
    href: "/docs/components/toast",
    description:
      "Brief, ephemeral notifications with support for actions and timers.",
    icon: Bell,
    category: "Feedback",
  },
  {
    name: "Avatar",
    href: "/docs/components/avatar",
    description:
      "User profile images with customizable fallback mechanisms and sizes.",
    icon: User,
    category: "Data Display",
  },
  {
    name: "Dropdown",
    href: "/docs/components/dropdown",
    description:
      "Powerful contextual menus triggered by buttons or other elements.",
    icon: Menu,
    category: "Navigation",
  },
  {
    name: "Alert",
    href: "/docs/components/alert",
    description:
      "Important message callouts with semantic colors and custom icons.",
    icon: AlertCircle,
    category: "Feedback",
  },
  {
    name: "Input",
    href: "/docs/components/input",
    description:
      "Text entry fields with validation, formatting, and clear visual states.",
    icon: Type,
    category: "Forms",
  },
  {
    name: "Card",
    href: "/docs/components/card",
    description:
      "Flexible content containers with headers, footers, and border controls.",
    icon: Layout,
    category: "Data Display",
  },
  {
    name: "Accordion",
    href: "/docs/components/accordion",
    description:
      "Vertically stacked interactive headings for showing and hiding content.",
    icon: Layers,
    category: "Data Display",
  },
  {
    name: "Dialog",
    href: "/docs/components/dialog",
    description:
      "Window overlays that focus user attention on a specific task or message.",
    icon: PanelTop,
    category: "Overlay",
  },
  {
    name: "Alert Dialog",
    href: "/docs/components/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content.",
    icon: MessageSquare,
    category: "Overlay",
  },
  {
    name: "Text",
    href: "/docs/components/text",
    description:
      "Consistent typography system for titles, bodies, and mono text.",
    icon: Type,
    category: "General",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function ComponentsPage() {
  return (
    <div className="space-y-10 pb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-4"
      >
        <h1 className="text-5xl font-extrabold tracking-tight">Components</h1>
        <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
          A suite of meticulously crafted, cross-platform components for
          building professional mobile and web interfaces.
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-2"
      >
        {components.map((component) => (
          <motion.div key={component.name} variants={item}>
            <Link href={component.href}>
              <Card className="p-8 h-full bg-card hover:bg-muted/30 hover:border-primary/50 transition-all duration-300 group relative overflow-hidden">
                <div className="flex flex-col h-full space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                      <component.icon className="h-6 w-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60 border border-border/50 px-2 py-0.5 rounded-full">
                      {component.category}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold tracking-tight inline-flex items-center">
                      {component.name}
                      <ArrowRight className="ml-2 h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-primary" />
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm line-clamp-2">
                      {component.description}
                    </p>
                  </div>
                </div>

                {/* Dynamic Shine Effect on Hover */}
                <div className="absolute inset-0 bg-linear-to-tr from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </Card>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
