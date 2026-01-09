"use client";

import { useFramework, PackageManager } from "@/context/framework-context";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const managers: { id: PackageManager; label: string }[] = [
  { id: "npm", label: "npm" },
  { id: "pnpm", label: "pnpm" },
  { id: "yarn", label: "yarn" },
  { id: "bun", label: "bun" },
];

export function PackageManagerSelector() {
  const { packageManager, setPackageManager } = useFramework();

  return (
    <div className="inline-flex p-1 rounded-xl bg-muted/50 border border-border/50 backdrop-blur-sm">
      {managers.map((pm) => {
        const isActive = packageManager === pm.id;
        return (
          <button
            key={pm.id}
            onClick={() => setPackageManager(pm.id)}
            className={cn(
              "relative px-4 py-1.5 text-xs font-bold transition-all rounded-lg outline-none",
              isActive
                ? "text-primary-foreground"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {isActive && (
              <motion.div
                layoutId="active-pm"
                className="absolute inset-0 bg-primary rounded-lg shadow-lg shadow-primary/20"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span className="relative z-10">{pm.label}</span>
          </button>
        );
      })}
    </div>
  );
}
