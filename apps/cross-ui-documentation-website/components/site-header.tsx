"use client"

import Link from "next/link"
import { Github, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MobileSidebar } from "@/components/mobile-sidebar"
import { usePathname } from "next/navigation"

export function SiteHeader() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const pathname = usePathname()
  const isDocsPage = pathname?.startsWith("/docs")

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        {isDocsPage && (
          <div className="mr-2 md:hidden">
            <MobileSidebar />
          </div>
        )}

        <div className="mr-4 flex lg:mr-6">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-20 blur-xl" />
              <span className="relative font-bold text-xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                CrossUI
              </span>
            </div>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link
              href="/docs"
              className="transition-colors hover:text-foreground/80 text-foreground/60 hover:text-primary"
            >
              Docs
            </Link>
            <Link
              href="/docs/components/button"
              className="transition-colors hover:text-foreground/80 text-foreground/60 hover:text-primary"
            >
              Components
            </Link>
            <Link
              href="/docs/cli"
              className="transition-colors hover:text-foreground/80 text-foreground/60 hover:text-primary"
            >
              CLI
            </Link>
            <Link
              href="/docs/theming"
              className="transition-colors hover:text-foreground/80 text-foreground/60 hover:text-primary"
            >
              Theming
            </Link>
          </nav>
        </div>

        <div className="flex flex-1 items-center justify-end space-x-2">
          <div className="hidden lg:flex items-center flex-1 max-w-md mx-4">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search documentation..."
                className="w-full pl-10 bg-muted/50 border-border/50 focus-visible:ring-primary"
                onFocus={() => setIsSearchOpen(true)}
                onBlur={() => setTimeout(() => setIsSearchOpen(false), 200)}
              />
              <kbd className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 hidden h-5 select-none items-center gap-1 rounded border border-border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
                <span className="text-xs">⌘</span>K
              </kbd>
            </div>
          </div>

          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setIsSearchOpen(!isSearchOpen)}>
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>

          <Button variant="ghost" size="icon" asChild className="hidden sm:inline-flex">
            <Link href="https://github.com" target="_blank" rel="noreferrer">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
          </Button>

          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsSearchOpen(!isSearchOpen)}>
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden border-t border-border/40"
          >
            <div className="container px-4 py-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search documentation..."
                  className="w-full pl-10 bg-muted/50 border-border/50"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isDocsPage && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden border-t border-border/40"
          >
            <nav className="container flex flex-col gap-4 px-4 py-6">
              <Link
                href="/docs"
                className="text-foreground/60 hover:text-primary transition-colors font-medium"
                onClick={() => setIsSearchOpen(false)}
              >
                Docs
              </Link>
              <Link
                href="/docs/components/button"
                className="text-foreground/60 hover:text-primary transition-colors font-medium"
                onClick={() => setIsSearchOpen(false)}
              >
                Components
              </Link>
              <Link
                href="/docs/cli"
                className="text-foreground/60 hover:text-primary transition-colors font-medium"
                onClick={() => setIsSearchOpen(false)}
              >
                CLI
              </Link>
              <Link
                href="/docs/theming"
                className="text-foreground/60 hover:text-primary transition-colors font-medium"
                onClick={() => setIsSearchOpen(false)}
              >
                Theming
              </Link>
              <div className="border-t border-border/40 pt-4">
                <Button variant="outline" size="sm" asChild className="w-full bg-transparent">
                  <Link href="https://github.com" target="_blank" rel="noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    GitHub
                  </Link>
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
