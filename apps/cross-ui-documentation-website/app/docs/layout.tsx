"use client"

import type React from "react"
import { SiteHeader } from "@/components/site-header"
import { DocsSidebar } from "@/components/docs-sidebar"
import { TableOfContents } from "@/components/table-of-contents"
import { motion } from "framer-motion"

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <div className="container mx-auto flex-1 items-start md:grid md:grid-cols-[240px_minmax(0,1fr)] md:gap-8 lg:gap-12 xl:grid-cols-[1fr_3fr_1fr] xl:gap-16 max-w-[1800px]">
        <DocsSidebar />

        <motion.main
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative py-6 lg:py-8 px-4 md:px-6"
        >
          <div className="mx-auto w-full min-w-0 prose prose-slate dark:prose-invert prose-headings:scroll-mt-20 prose-headings:font-bold prose-h1:text-4xl prose-h2:text-3xl prose-h2:border-b prose-h2:pb-2 prose-h3:text-2xl prose-p:text-muted-foreground prose-p:leading-7 prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-code:rounded prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:text-sm prose-code:font-mono prose-pre:bg-muted prose-pre:border prose-pre:border-border">
            {children}
          </div>
        </motion.main>

        <TableOfContents />
      </div>
    </div>
  )
}
