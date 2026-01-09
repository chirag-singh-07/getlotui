"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, Copy, Terminal } from "lucide-react";
import { motion } from "framer-motion";
import { useFramework } from "@/context/framework-context";

interface InstallationCommandProps {
  code: string;
  title?: string;
  language?: string;
}

export function InstallationCommand({
  code,
  title = "Terminal",
  language = "bash",
}: InstallationCommandProps) {
  const [copied, setCopied] = useState(false);
  const { packageManager } = useFramework();

  // Dynamically replace npx with the selected package manager's executor
  const getDisplayCode = () => {
    const executors = {
      npm: "npx",
      pnpm: "pnpm dlx",
      yarn: "yarn dlx",
      bun: "bunx",
    };

    const executor = executors[packageManager] || "npx";

    // Replace all occurrences of "npx " with the appropriate executor
    return code.replace(/\bnpx\s/g, `${executor} `);
  };

  const displayCode = getDisplayCode();

  const copyToClipboard = () => {
    navigator.clipboard.writeText(displayCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      className="relative group mt-4"
    >
      <div className="rounded-xl border border-border bg-black/5 dark:bg-white/5 overflow-hidden backdrop-blur-sm">
        <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-muted/30">
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/40" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/40" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/40" />
            </div>
            <span className="font-medium tracking-tight ml-2">{title}</span>
          </div>
          <Button
            size="sm"
            variant="ghost"
            className="h-8 px-3 hover:bg-muted font-medium"
            onClick={copyToClipboard}
          >
            {copied ? (
              <>
                <Check className="h-3.5 w-3.5 mr-2 text-green-500" />
                <span className="text-xs">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5 mr-2" />
                <span className="text-xs">Copy</span>
              </>
            )}
          </Button>
        </div>
        <div className="p-5 overflow-x-auto bg-muted/10 font-mono">
          <pre>
            <code className="text-[13px] leading-relaxed text-foreground/90">
              {displayCode}
            </code>
          </pre>
        </div>
      </div>
    </motion.div>
  );
}
