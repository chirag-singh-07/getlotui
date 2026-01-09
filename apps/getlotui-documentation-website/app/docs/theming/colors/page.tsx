// "use client";

// import {
//   Palette,
//   CheckCircle2,
//   ArrowRight,
//   Zap,
//   RefreshCw,
//   Layers,
// } from "lucide-react";
// import { Card } from "@/components/ui/card";
// import { motion } from "framer-motion";

// const container = {
//   hidden: { opacity: 0 },
//   show: {
//     opacity: 1,
//     transition: { staggerChildren: 0.1 },
//   },
// };

// const item = {
//   hidden: { opacity: 0, y: 20 },
//   show: { opacity: 1, y: 0 },
// };

// export default function ColorsPage() {
//   const categories = [
//     {
//       title: "Brand Colors",
//       desc: "The core identity of your application. Used for primary actions, active states, and highlights.",
//       colors: [
//         { name: "Primary", hex: "#6366f1", variable: "primary" },
//         { name: "Secondary", hex: "#94a3b8", variable: "secondary" },
//         { name: "Accent", hex: "#10b981", variable: "accent" },
//       ],
//     },
//     {
//       title: "Semantic Colors",
//       desc: "Colors that convey meaning and provide feedback to the user.",
//       colors: [
//         { name: "Success", hex: "#22c55e", variable: "success" },
//         { name: "Warning", hex: "#f59e0b", variable: "warning" },
//         { name: "Error", hex: "#ef4444", variable: "error" },
//         { name: "Info", hex: "#3b82f6", variable: "info" },
//       ],
//     },
//     {
//       title: "Surface & Border",
//       desc: "Neutral colors used for backgrounds, cards, dividers, and subtle outlines.",
//       colors: [
//         { name: "Background", hex: "#ffffff", variable: "background" },
//         { name: "Card", hex: "#f8fafc", variable: "card" },
//         { name: "Border", hex: "#e2e8f0", variable: "border" },
//         { name: "Muted", hex: "#64748b", variable: "muted" },
//       ],
//     },
//   ];

//   return (
//     <motion.div
//       variants={container}
//       initial="hidden"
//       animate="show"
//       className="space-y-16 pb-20"
//     >
//       {/* Hero */}
//       <motion.div variants={item} className="space-y-6">
//         <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider">
//           <Palette className="h-3.5 w-3.5" />
//           <span>Visual Primitives</span>
//         </div>
//         <div className="space-y-4">
//           <h1 className="text-5xl font-black tracking-tight">Color System</h1>
//           <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
//             A semantic and multi-platform color system designed for
//             accessibility, consistency, and easy brand customization.
//           </p>
//         </div>
//       </motion.div>

//       {/* Color Categories */}
//       <div className="space-y-16">
//         {categories.map((category, idx) => (
//           <motion.div variants={item} key={idx} className="space-y-6">
//             <div className="space-y-2">
//               <h2 className="text-3xl font-bold tracking-tight">
//                 {category.title}
//               </h2>
//               <p className="text-muted-foreground">{category.desc}</p>
//             </div>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//               {category.colors.map((color, colorIdx) => (
//                 <Card
//                   key={colorIdx}
//                   className="overflow-hidden border-border/50 group"
//                 >
//                   <div
//                     className="h-24 w-full transition-transform group-hover:scale-105 duration-500"
//                     style={{ backgroundColor: color.hex }}
//                   />
//                   <div className="p-4 space-y-1">
//                     <span className="text-xs font-black uppercase tracking-widest text-muted-foreground">
//                       {color.name}
//                     </span>
//                     <div className="flex items-center justify-between">
//                       <span className="font-mono text-sm font-bold">
//                         {color.hex}
//                       </span>
//                     </div>
//                     <code className="text-[10px] text-primary bg-primary/5 px-1 rounded block mt-1">
//                       theme.colors.{color.variable}
//                     </code>
//                   </div>
//                 </Card>
//               ))}
//             </div>
//           </motion.div>
//         ))}
//       </div>

//       {/* Accessibility Section */}
//       <motion.div variants={item} className="pt-8 border-t border-border/50">
//         <Card className="p-8 bg-muted/20 border-border/50 space-y-6">
//           <div className="flex items-center gap-3">
//             <CheckCircle2 className="h-6 w-6 text-emerald-500" />
//             <h3 className="text-2xl font-bold">Contrast & Accessibility</h3>
//           </div>
//           <p className="text-muted-foreground leading-relaxed max-w-2xl">
//             Our color palette is automatically checked against WCAG 2.1 AA
//             contrast ratios. When modifying colors in{" "}
//             <code className="bg-muted px-1 text-xs">theme/config.ts</code>,
//             ensure that your foreground and background pairings maintain a
//             contrast ratio of at least 4.5:1 for standard text.
//           </p>
//         </Card>
//       </motion.div>
//     </motion.div>
//   );
// // }
// "use client";

// import {
//   Palette,
//   CheckCircle2,
//   Zap,
//   RefreshCw,
//   Layers,
//   Moon,
//   Sun,
//   Copy,
//   Info,
// } from "lucide-react";
// import { Card } from "@/components/ui/card";
// import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";

// const container = {
//   hidden: { opacity: 0 },
//   show: {
//     opacity: 1,
//     transition: { staggerChildren: 0.1 },
//   },
// };

// const item = {
//   hidden: { opacity: 0, y: 20 },
//   show: { opacity: 1, y: 0 },
// };

// export default function ColorsPage() {
//   const categories = [
//     {
//       title: "Brand Colors",
//       desc: "The core identity of your application. Used for primary actions, active states, and highlights.",
//       colors: [
//         {
//           name: "Primary",
//           hex: "#6366f1",
//           variable: "primary",
//           contrast: "White",
//         },
//         {
//           name: "Secondary",
//           hex: "#94a3b8",
//           variable: "secondary",
//           contrast: "White",
//         },
//         {
//           name: "Accent",
//           hex: "#10b981",
//           variable: "accent",
//           contrast: "Black",
//         },
//       ],
//     },
//     {
//       title: "Semantic Colors",
//       desc: "Colors that convey meaning and provide feedback to the user.",
//       colors: [
//         {
//           name: "Success",
//           hex: "#22c55e",
//           variable: "success",
//           contrast: "White",
//         },
//         {
//           name: "Warning",
//           hex: "#f59e0b",
//           variable: "warning",
//           contrast: "Black",
//         },
//         { name: "Error", hex: "#ef4444", variable: "error", contrast: "White" },
//         { name: "Info", hex: "#3b82f6", variable: "info", contrast: "White" },
//       ],
//     },
//   ];

//   const shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

//   return (
//     <motion.div
//       variants={container}
//       initial="hidden"
//       animate="show"
//       className="space-y-24 pb-32"
//     >
//       {/* Hero Section */}
//       <motion.div variants={item} className="space-y-6">
//         <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider">
//           <Palette className="h-3.5 w-3.5" />
//           <span>Visual Primitives</span>
//         </div>
//         <div className="space-y-4">
//           <h1 className="text-6xl font-black tracking-tighter">Color System</h1>
//           <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
//             A harmonized color palette designed for high-end digital interfaces.
//             Built with accessibility first, ensuring your brand stays vibrant
//             across all devices.
//           </p>
//         </div>
//       </motion.div>

//       {/* Main Categories */}
//       <div className="space-y-16">
//         {categories.map((category, idx) => (
//           <motion.div variants={item} key={idx} className="space-y-8">
//             <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b pb-4">
//               <div className="space-y-1">
//                 <h2 className="text-3xl font-bold tracking-tight">
//                   {category.title}
//                 </h2>
//                 <p className="text-muted-foreground">{category.desc}</p>
//               </div>
//               <Button variant="outline" size="sm" className="w-fit">
//                 <Copy className="mr-2 h-3 w-3" /> Copy Palette
//               </Button>
//             </div>

//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//               {category.colors.map((color, colorIdx) => (
//                 <div key={colorIdx} className="group space-y-3">
//                   <div
//                     className="h-32 w-full rounded-2xl shadow-inner border transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1 flex items-end p-4"
//                     style={{ backgroundColor: color.hex }}
//                   >
//                     <span
//                       className={`text-[10px] font-bold px-2 py-1 rounded bg-white/20 backdrop-blur-md ${
//                         color.contrast === "White" ? "text-white" : "text-black"
//                       }`}
//                     >
//                       {color.contrast} Contrast OK
//                     </span>
//                   </div>
//                   <div className="px-1">
//                     <h4 className="font-bold text-sm">{color.name}</h4>
//                     <div className="flex items-center justify-between text-xs text-muted-foreground mt-1">
//                       <span className="font-mono uppercase">{color.hex}</span>
//                       <code className="bg-muted px-1 rounded text-primary">
//                         --{color.variable}
//                       </code>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </motion.div>
//         ))}
//       </div>

//       {/* NEW: The Shade Scale Section */}
//       <motion.div variants={item} className="space-y-8">
//         <div className="space-y-2">
//           <h2 className="text-3xl font-bold tracking-tight">Tints & Shades</h2>
//           <p className="text-muted-foreground max-w-2xl">
//             Each color comes with a generated 10-step scale. Use lighter shades
//             for backgrounds and hover states, and darker shades for text or
//             active states.
//           </p>
//         </div>

//         <div className="space-y-4">
//           {["Primary", "Slate", "Emerald"].map((base) => (
//             <div key={base} className="space-y-2">
//               <span className="text-xs font-bold uppercase text-muted-foreground">
//                 {base}
//               </span>
//               <div className="flex h-12 w-full rounded-lg overflow-hidden border shadow-sm">
//                 {shades.map((shade) => (
//                   <div
//                     key={shade}
//                     className="flex-1 h-full hover:flex-[1.5] transition-all cursor-pointer group relative"
//                     style={{
//                       backgroundColor: `var(--${base.toLowerCase()}-${shade})`,
//                       background:
//                         base === "Primary"
//                           ? `rgba(99, 102, 241, ${shade / 1000 + 0.1})`
//                           : undefined,
//                     }}
//                   >
//                     <span className="absolute inset-0 flex items-center justify-center text-[10px] opacity-0 group-hover:opacity-100 font-bold">
//                       {shade}
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </motion.div>

//       {/* NEW: Dark Mode Strategy Section */}
//       <motion.div
//         variants={item}
//         className="grid md:grid-cols-2 gap-12 bg-muted/30 p-12 rounded-[32px] border"
//       >
//         <div className="space-y-6">
//           <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center">
//             <Moon className="h-6 w-6 text-primary" />
//           </div>
//           <h2 className="text-3xl font-bold">Dark Mode Ready</h2>
//           <p className="text-muted-foreground leading-relaxed">
//             CrossUI uses CSS variables that automatically flip values based on
//             the <code className="text-foreground font-mono">.dark</code> class.
//             Backgrounds become deep charcoals, and borders become subtle
//             highlights to reduce eye strain.
//           </p>
//           <div className="flex gap-4">
//             <div className="h-20 w-full bg-white border rounded-xl flex items-center justify-center text-xs font-bold">
//               Light Mode
//             </div>
//             <div className="h-20 w-full bg-slate-950 border border-white/10 text-white rounded-xl flex items-center justify-center text-xs font-bold">
//               Dark Mode
//             </div>
//           </div>
//         </div>
//         <div className="space-y-4 font-mono text-sm bg-black/90 p-8 rounded-2xl text-emerald-400 border border-white/10 shadow-2xl">
//           <div className="opacity-50 text-xs">/* theme/colors.css */</div>
//           <div>:root &#123;</div>
//           <div className="pl-4">--background: #ffffff;</div>
//           <div className="pl-4">--foreground: #020817;</div>
//           <div>&#125;</div>
//           <div className="mt-4">.dark &#123;</div>
//           <div className="pl-4">--background: #020817;</div>
//           <div className="pl-4">--foreground: #ffffff;</div>
//           <div>&#125;</div>
//         </div>
//       </motion.div>

//       {/* NEW: Interactive Preview Section */}
//       <motion.div variants={item} className="space-y-8">
//         <h2 className="text-3xl font-bold tracking-tight">
//           Live Component Preview
//         </h2>
//         <div className="grid md:grid-cols-3 gap-8">
//           <Card className="p-6 space-y-4">
//             <h4 className="text-xs font-bold uppercase text-muted-foreground">
//               Buttons
//             </h4>
//             <div className="space-y-2">
//               <Button className="w-full">Primary Action</Button>
//               <Button variant="secondary" className="w-full">
//                 Secondary
//               </Button>
//               <Button variant="outline" className="w-full">
//                 Outline
//               </Button>
//             </div>
//           </Card>
//           <Card className="p-6 space-y-4">
//             <h4 className="text-xs font-bold uppercase text-muted-foreground">
//               Status Indicators
//             </h4>
//             <div className="space-y-3">
//               <div className="flex items-center gap-2 p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 text-xs font-bold">
//                 <CheckCircle2 className="h-4 w-4" /> System Online
//               </div>
//               <div className="flex items-center gap-2 p-2 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-600 text-xs font-bold">
//                 <Info className="h-4 w-4" /> Update Available
//               </div>
//               <div className="flex items-center gap-2 p-2 rounded-lg bg-red-500/10 border border-red-500/20 text-red-600 text-xs font-bold">
//                 <Zap className="h-4 w-4" /> Error Detected
//               </div>
//             </div>
//           </Card>
//           <Card className="p-6 space-y-4">
//             <h4 className="text-xs font-bold uppercase text-muted-foreground">
//               Backgrounds
//             </h4>
//             <div className="grid grid-cols-2 gap-2">
//               <div className="h-16 rounded-lg bg-muted flex items-center justify-center text-[10px]">
//                 Muted
//               </div>
//               <div className="h-16 rounded-lg bg-accent flex items-center justify-center text-[10px] text-white">
//                 Accent
//               </div>
//               <div className="h-16 rounded-lg border border-dashed flex items-center justify-center text-[10px]">
//                 Border
//               </div>
//               <div className="h-16 rounded-lg bg-card border flex items-center justify-center text-[10px]">
//                 Card
//               </div>
//             </div>
//           </Card>
//         </div>
//       </motion.div>

//       {/* Accessibility Section */}
//       <motion.div variants={item} className="pt-8 border-t border-border/50">
//         <Card className="p-10 bg-linear-to-br from-emerald-500/10 to-transparent border-emerald-500/20 space-y-6">
//           <div className="flex items-center gap-3">
//             <CheckCircle2 className="h-8 w-8 text-emerald-500" />
//             <h3 className="text-3xl font-black italic">A11y Standard</h3>
//           </div>
//           <div className="grid md:grid-cols-2 gap-12">
//             <p className="text-muted-foreground leading-relaxed text-lg">
//               Our color palette is automatically checked against **WCAG 2.1 AA**
//               contrast ratios. When modifying colors in{" "}
//               <code className="bg-muted px-1 text-sm">theme/config.ts</code>,
//               CrossUI provides a CLI warning if your pairings fall below 4.5:1.
//             </p>
//             <div className="space-y-4">
//               <div className="flex justify-between text-sm font-bold">
//                 <span>Large Text (18pt+)</span>
//                 <span className="text-emerald-500 font-mono">3.0:1 PASS</span>
//               </div>
//               <div className="w-full bg-muted h-2 rounded-full overflow-hidden">
//                 <div className="bg-emerald-500 h-full w-[80%]" />
//               </div>
//               <div className="flex justify-between text-sm font-bold">
//                 <span>Normal Text</span>
//                 <span className="text-emerald-500 font-mono">4.5:1 PASS</span>
//               </div>
//               <div className="w-full bg-muted h-2 rounded-full overflow-hidden">
//                 <div className="bg-emerald-500 h-full w-[95%]" />
//               </div>
//             </div>
//           </div>
//         </Card>
//       </motion.div>
//     </motion.div>
//   );
// }
"use client";

import {
  Palette,
  CheckCircle2,
  Zap,
  Moon,
  Sun,
  Copy,
  Info,
  Droplet,
  Eye,
  Settings,
  ShieldCheck,
  Terminal,
  MousePointer2,
  Workflow,
  ArrowRight,
  Layers,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function ColorsPage() {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-32 pb-40"
    >
      {/* 1. HERO SECTION */}
      <motion.div variants={item} className="relative space-y-6">
        <div className="absolute -left-20 -top-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider">
          <Palette className="h-3.5 w-3.5" />
          <span>System Foundation</span>
        </div>
        <h1 className="text-7xl font-black tracking-tighter lg:text-8xl">
          Color <span className="text-primary">Tokens.</span>
        </h1>
        <p className="text-2xl text-muted-foreground leading-relaxed max-w-3xl">
          More than just hex codes. A semantic engine that powers accessibility,
          brand consistency, and multi-platform rendering.
        </p>
      </motion.div>

      {/* 2. SEMANTIC TOKENS (Enhanced Readability) */}
      <motion.div variants={item} className="space-y-8">
        <div className="space-y-2">
          <h2 className="text-4xl font-bold tracking-tight">
            Semantic Mapping
          </h2>
          <p className="text-muted-foreground">
            Colors mapped to their functional purpose in the UI.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              label: "Action Primary",
              var: "--primary",
              bg: "bg-[#6366f1]",
              text: "text-white",
            },
            {
              label: "Destructive",
              var: "--error",
              bg: "bg-[#ef4444]",
              text: "text-white",
            },
            {
              label: "Surface Layer",
              var: "--card",
              bg: "bg-[#f8fafc]",
              text: "text-slate-900",
              border: "border",
            },
            {
              label: "Success State",
              var: "--success",
              bg: "bg-[#22c55e]",
              text: "text-white",
            },
            {
              label: "Attention",
              var: "--warning",
              bg: "bg-[#f59e0b]",
              text: "text-black",
            },
            {
              label: "Muted Text",
              var: "--muted",
              bg: "bg-[#64748b]",
              text: "text-white",
            },
          ].map((color, i) => (
            <div
              key={i}
              className={`p-6 rounded-3xl ${color.bg} ${color.text} ${color.border} shadow-sm flex flex-col justify-between h-40 transition-transform hover:scale-[1.02]`}
            >
              <div className="flex justify-between items-start">
                <span className="font-bold text-lg">{color.label}</span>
                <button
                  onClick={() => copyToClipboard(color.var)}
                  className="opacity-50 hover:opacity-100"
                >
                  <Copy className="h-4 w-4" />
                </button>
              </div>
              <code className="text-xs font-mono bg-black/10 px-2 py-1 rounded w-fit">
                {color.var}
              </code>
            </div>
          ))}
        </div>
      </motion.div>

      {/* 3. NEUTRAL ELEVATION (Depth Section) */}
      <motion.div variants={item} className="space-y-8">
        <div className="flex items-center gap-4">
          <Layers className="text-primary h-8 w-8" />
          <h2 className="text-4xl font-bold">Neutral Elevation</h2>
        </div>
        <div className="bg-muted/30 rounded-[40px] p-8 lg:p-16 border border-border/50">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((level) => (
              <div key={level} className="space-y-2">
                <div
                  className={`h-24 rounded-2xl border shadow-xs bg-slate-${level}`}
                  style={{ backgroundColor: `rgb(var(--slate-${level}))` }}
                />
                <span className="text-xs font-bold text-center block">
                  Slate {level}
                </span>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-muted-foreground italic">
            Used for building layouts, borders, and typography scales.
          </p>
        </div>
      </motion.div>

      {/* 4. DATA VISUALIZATION PALETTE */}
      <motion.div variants={item} className="space-y-8">
        <h2 className="text-4xl font-bold">Charts & Data Viz</h2>
        <p className="text-muted-foreground max-w-2xl">
          A distinct palette optimized for clarity in graphs and analytics
          components.
        </p>
        <div className="flex flex-wrap gap-4">
          {[
            "#3b82f6",
            "#8b5cf6",
            "#ec4899",
            "#f43f5e",
            "#f97316",
            "#eab308",
            "#22c55e",
            "#06b6d4",
          ].map((hex) => (
            <div key={hex} className="group relative">
              <div
                className="w-16 h-16 rounded-full border-4 border-background shadow-lg"
                style={{ backgroundColor: hex }}
              />
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-all text-[10px] font-mono font-bold bg-foreground text-background px-2 py-1 rounded">
                {hex}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* 5. DARK MODE LOGIC (Interactive Code) */}
      <motion.div
        variants={item}
        className="grid lg:grid-cols-2 gap-12 items-center"
      >
        <div className="space-y-6">
          <div className="h-14 w-14 rounded-2xl bg-indigo-500/20 flex items-center justify-center text-indigo-500">
            <Workflow className="h-7 w-7" />
          </div>
          <h2 className="text-4xl font-bold">Adaptive Theming</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            CrossUI doesn't just "invert" colors. We use a **functional layer**
            that swaps palettes based on the environment context (Web, iOS, or
            Android).
          </p>
          <div className="flex gap-4">
            <div className="flex-1 p-4 rounded-xl border bg-card flex items-center gap-3">
              <Sun className="h-5 w-5 text-amber-500" />{" "}
              <span className="text-sm font-bold">Light: White Base</span>
            </div>
            <div className="flex-1 p-4 rounded-xl border bg-slate-900 text-white flex items-center gap-3">
              <Moon className="h-5 w-5 text-indigo-400" />{" "}
              <span className="text-sm font-bold">Dark: Slate-950 Base</span>
            </div>
          </div>
        </div>
        <div className="bg-[#0f172a] rounded-3xl p-8 border border-white/10 shadow-2xl font-mono text-sm">
          <div className="flex gap-2 mb-6">
            <div className="w-3 h-3 rounded-full bg-red-500/50" />
            <div className="w-3 h-3 rounded-full bg-amber-500/50" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/50" />
          </div>
          <p className="text-pink-400">
            @mixin <span className="text-blue-400">apply-theme</span>($mode)
            &#123;
          </p>
          <p className="pl-4 text-slate-400">@if $mode == 'dark' &#123;</p>
          <p className="pl-8 text-indigo-300">--bg: #020617;</p>
          <p className="pl-8 text-indigo-300">--text: #f8fafc;</p>
          <p className="pl-4 text-slate-400">&#125;</p>
          <p className="text-pink-400">&#125;</p>
        </div>
      </motion.div>

      {/* 6. GRADIENT ENGINE */}
      <motion.div variants={item} className="space-y-8">
        <h2 className="text-4xl font-bold">Dynamic Gradients</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="h-48 rounded-[32px] bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-8 flex items-end">
            <span className="text-white font-black text-xl italic uppercase">
              Vibrant Flare
            </span>
          </div>
          <div className="h-48 rounded-[32px] bg-gradient-to-tr from-slate-900 to-slate-700 p-8 flex items-end border border-white/10">
            <span className="text-white font-black text-xl italic uppercase">
              Deep Night
            </span>
          </div>
          <div className="h-48 rounded-[32px] bg-gradient-to-r from-emerald-400 to-cyan-400 p-8 flex items-end">
            <span className="text-slate-900 font-black text-xl italic uppercase">
              Ocean Breeze
            </span>
          </div>
        </div>
      </motion.div>

      {/* 7. ACCESSIBILITY SCORING */}
      <motion.div
        variants={item}
        className="space-y-8 bg-emerald-500/5 rounded-[40px] p-12 border border-emerald-500/20"
      >
        <div className="flex items-center gap-3">
          <ShieldCheck className="h-10 w-10 text-emerald-500" />
          <h2 className="text-4xl font-bold tracking-tight">
            Accessibility (A11y)
          </h2>
        </div>
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="space-y-4">
            <h4 className="font-bold text-lg flex items-center gap-2">
              <Eye className="h-5 w-5 text-emerald-500" /> Contrast Ratio
            </h4>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Every default color pairing in CrossUI is tested against WCAG 2.1
              AA standards, ensuring a minimum 4.5:1 ratio for body text.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold text-lg flex items-center gap-2">
              <Droplet className="h-5 w-5 text-emerald-500" /> Color Blindness
            </h4>
            <p className="text-muted-foreground text-sm leading-relaxed">
              We avoid using color alone to convey meaning. Icons and labels
              accompany all state changes (Success, Error, Warning).
            </p>
          </div>
          <div className="flex items-center justify-center lg:justify-end">
            <div className="bg-emerald-500 text-white p-8 rounded-full h-32 w-32 flex flex-col items-center justify-center shadow-xl shadow-emerald-500/20">
              <span className="text-3xl font-black">AA</span>
              <span className="text-[10px] font-bold uppercase tracking-widest">
                Compliant
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* 8. DEVELOPER EXPERIENCE (DX) */}
      <motion.div variants={item} className="space-y-8 pt-8">
        <h2 className="text-4xl font-bold">Implementation</h2>
        <Card className="p-0 overflow-hidden border-none shadow-2xl">
          <div className="bg-[#1e1e1e] p-4 flex items-center gap-2 border-b border-white/5">
            <Terminal className="h-4 w-4 text-slate-400" />
            <span className="text-xs font-mono text-slate-400">
              Usage Example
            </span>
          </div>
          <div className="bg-[#1e1e1e] p-8 text-blue-300 font-mono text-sm leading-relaxed">
            <p>
              <span className="text-slate-500">// Standard Tailwind usage</span>
            </p>
            <p className="text-emerald-400">
              &lt;div className=
              <span className="text-amber-200">
                "bg-primary text-primary-foreground p-4"
              </span>
              &gt;
            </p>
            <p className="pl-4">Click Me</p>
            <p className="text-emerald-400">&lt;/div&gt;</p>
            <br />
            <p>
              <span className="text-slate-500">
                // Expo / React Native usage
              </span>
            </p>
            <p className="text-pink-400">
              const <span className="text-white">styles</span> =
              StyleSheet.create(&#123;
            </p>
            <p className="pl-4">
              button: &#123; backgroundColor:{" "}
              <span className="text-amber-200">theme.colors.primary</span>{" "}
              &#125;
            </p>
            <p className="text-pink-400">&#125;);</p>
          </div>
        </Card>
      </motion.div>

      {/* 9. THEMING WORKFLOW */}
      <motion.div
        variants={item}
        className="text-center space-y-8 max-w-4xl mx-auto pt-20"
      >
        <h2 className="text-5xl font-black tracking-tight">Make it yours.</h2>
        <p className="text-xl text-muted-foreground">
          Ready to change the brand identity? Edit a single file and watch the
          entire design system update across Web, Mobile, and Desktop
          simultaneously.
        </p>
        <div className="flex justify-center gap-4">
          <Button
            size="lg"
            className="rounded-full h-12 px-8 shadow-xl shadow-primary/20"
          >
            Customize Theme <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-full h-12 px-8"
          >
            Explore Components
          </Button>
        </div>
      </motion.div>
    </motion.div>
  );
}
