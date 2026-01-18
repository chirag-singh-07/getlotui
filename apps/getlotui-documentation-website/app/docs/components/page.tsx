"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { docsNav } from "@/config/docs";

export default function ComponentsPage() {
  // Extract the components list from the navigation config
  const componentsSection = docsNav.find(
    (section) => section.title === "Components",
  );
  const components = componentsSection ? componentsSection.items : [];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="space-y-10 pb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-4"
      >
        <h1 className="text-4xl font-bold tracking-tight">Components</h1>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
          Here you can find all the components available in the library. We are
          working on adding more components.
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-4"
      >
        {components.map((component) => (
          <motion.div key={component.href} variants={item}>
            <Link
              href={component.href}
              className="flex items-center text-sm font-medium text-foreground/80 hover:text-foreground hover:underline underline-offset-4 transition-colors p-2 -ml-2 rounded-md hover:bg-muted/50"
            >
              {component.title}
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
