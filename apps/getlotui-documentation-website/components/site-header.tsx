"use client";

import Link from "next/link";
import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CommandMenu } from "@/components/command-menu";
import { MobileSidebar } from "@/components/mobile-sidebar";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

import { Logo } from "@/components/logo";

export function SiteHeader() {
  const pathname = usePathname();
  const isDocsPage = pathname?.startsWith("/docs");

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        {isDocsPage && (
          <div className="mr-2 md:hidden">
            <MobileSidebar />
          </div>
        )}

        <div className="mr-4 flex lg:mr-6">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <div className="relative flex items-center gap-2">
              <div className="absolute inset-0 bg-linear-to-r from-primary to-accent opacity-20 blur-xl" />
              <Logo className="relative h-8 w-8" />
              <span className="relative font-bold text-xl bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
                GetLotUI
              </span>
            </div>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link
              href="/docs"
              className="transition-colors text-foreground/60 hover:text-primary"
            >
              Docs
            </Link>
            <Link
              href="/docs/components/button"
              className="transition-colors text-foreground/60 hover:text-primary"
            >
              Components
            </Link>
            <Link
              href="/docs/cli"
              className="transition-colors text-foreground/60 hover:text-primary"
            >
              CLI
            </Link>
            <Link
              href="/docs/theming"
              className="transition-colors text-foreground/60 hover:text-primary"
            >
              Theming
            </Link>
            <Link
              href="/about"
              className="transition-colors text-foreground/60 hover:text-primary"
            >
              About
            </Link>
          </nav>
        </div>

        <div className="flex flex-1 items-center justify-end space-x-2">
          <div className="flex items-center space-x-2">
            <CommandMenu />
          </div>

          <Button
            variant="ghost"
            size="icon"
            asChild
            className="hidden sm:inline-flex"
          >
            <Link
              href="https://github.com/chirag-singh-07/crossui"
              target="_blank"
              rel="noreferrer"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
          </Button>
        </div>
      </div>

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
              >
                Docs
              </Link>
              <Link
                href="/docs/components/button"
                className="text-foreground/60 hover:text-primary transition-colors font-medium"
              >
                Components
              </Link>
              <Link
                href="/docs/cli"
                className="text-foreground/60 hover:text-primary transition-colors font-medium"
              >
                CLI
              </Link>
              <Link
                href="/docs/theming"
                className="text-foreground/60 hover:text-primary transition-colors font-medium"
              >
                Theming
              </Link>
              <div className="border-t border-border/40 pt-4">
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="w-full bg-transparent"
                >
                  <Link
                    href="https://github.com/chirag-singh-07/crossui"
                    target="_blank"
                    rel="noreferrer"
                  >
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
  );
}
