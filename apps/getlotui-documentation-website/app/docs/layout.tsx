"use client";

import * as React from "react";
import { SiteHeader } from "@/components/site-header";
import { DocsSidebar } from "@/components/docs-sidebar";
import { TableOfContents } from "@/components/table-of-contents";
import { motion } from "framer-motion";
// 1. Import usePathname
import { usePathname } from "next/navigation";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // 2. Initialize usePathname
  const pathname = usePathname();

  React.useEffect(() => {
    const parts = pathname.split("/").filter(Boolean);
    if (parts.length > 0) {
      const lastPart = parts[parts.length - 1];

      if (lastPart === "docs" && parts.length === 1) {
        document.title = "Documentation | GetLotUI";
        return;
      }

      let title = lastPart
        .split("-")
        .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

      // Handle special cases
      if (pathname.includes("/docs/components")) {
        title = `${title} Component`;
      } else if (pathname.includes("/docs/theming")) {
        title = `Theming: ${title}`;
      }

      document.title = `${title} | GetLotUI`;
    } else {
      document.title = "Documentation | GetLotUI";
    }
  }, [pathname]);

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <div
        className={`mx-auto w-full flex-1 items-start md:grid md:gap-8 lg:gap-10 max-w-[1600px] px-4 md:px-8 ${
          pathname === "/docs/theming/generator"
            ? "md:grid-cols-[220px_1fr] lg:grid-cols-[240px_1fr]"
            : "md:grid-cols-[220px_1fr] lg:grid-cols-[240px_1fr] xl:grid-cols-[240px_1fr_260px]"
        }`}
      >
        <DocsSidebar />

        <motion.main
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="relative py-10 lg:py-12 px-2"
        >
          <div
            className={`mx-auto w-full min-w-0 prose prose-zinc dark:prose-invert prose-headings:font-bold prose-headings:tracking-tight prose-h1:text-4xl prose-h1:lg:text-5xl prose-h1:mb-8 prose-h2:text-2xl prose-h2:lg:text-3xl prose-h2:mt-12 prose-h2:border-b prose-h2:pb-2 prose-p:text-muted-foreground prose-p:leading-7 prose-p:text-base lg:prose-p:text-lg prose-a:text-primary prose-a:font-medium prose-a:no-underline hover:prose-a:underline prose-code:rounded-md prose-code:bg-muted/50 prose-code:px-1.5 prose-code:py-0.5 prose-code:text-sm prose-code:font-mono prose-code:before:content-none prose-code:after:content-none prose-pre:bg-[#0a0a0a] prose-pre:border prose-pre:border-white/10 prose-pre:rounded-xl ${
              pathname === "/docs/theming/generator"
                ? "max-w-none"
                : "max-w-3xl"
            }`}
          >
            {children}
          </div>
        </motion.main>

        {/* 3. Use the pathname variable here */}
        {pathname !== "/docs/theming/generator" && <TableOfContents />}
      </div>
    </div>
  );
}
