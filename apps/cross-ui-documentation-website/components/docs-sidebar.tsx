"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";

const docsNav = [
  {
    title: "Getting Started",
    items: [
      { title: "Introduction", href: "/docs" },
      { title: "Quick Start", href: "/docs/quick-start" },
      { title: "Installation", href: "/docs/installation" },
      { title: "CLI", href: "/docs/cli" },
    ],
  },
  {
    title: "Theming",
    items: [
      { title: "Introduction", href: "/docs/theming" },
      { title: "Theme Generator", href: "/docs/theming/generator" },
      { title: "Colors", href: "/docs/theming/colors" },
      { title: "Typography", href: "/docs/theming/typography" },
      { title: "Spacing", href: "/docs/theming/spacing" },
      { title: "Radius", href: "/docs/theming/radius" },
      { title: "Animations", href: "/docs/theming/animations" },
      { title: "Dark Mode", href: "/docs/theming/dark-mode" },
    ],
  },
  {
    title: "Components",
    items: [
      { title: "Accordion", href: "/docs/components/accordion" },
      { title: "Alert", href: "/docs/components/alert" },
      { title: "Alert Dialog", href: "/docs/components/alert-dialog" },
      { title: "Avatar", href: "/docs/components/avatar" },
      { title: "Badge", href: "/docs/components/badge" },
      { title: "Button", href: "/docs/components/button" },
      { title: "Card", href: "/docs/components/card" },
      { title: "Dialog", href: "/docs/components/dialog" },
      { title: "Dropdown", href: "/docs/components/dropdown" },
      { title: "Input", href: "/docs/components/input" },
      { title: "Text", href: "/docs/components/text" },
      { title: "Toast", href: "/docs/components/toast" },
    ],
  },
];

export function DocsSidebar() {
  const pathname = usePathname();
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    "Getting Started": true,
    Theming: true,
    Components: true,
  });

  const toggleSection = (title: string) => {
    setOpenSections((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  return (
    <aside className="fixed top-14 z-30 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block">
      <ScrollArea className="h-full py-6 pr-6 lg:py-8 pl-4">
        <nav className="w-full space-y-1">
          {docsNav.map((section, i) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
              className="pb-4"
            >
              <button
                onClick={() => toggleSection(section.title)}
                className="flex w-full items-center justify-between rounded-md px-2 py-1.5 text-sm font-semibold hover:bg-muted/50 transition-colors"
              >
                {section.title}
                <motion.div
                  animate={{ rotate: openSections[section.title] ? 0 : -90 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="h-4 w-4" />
                </motion.div>
              </button>
              <AnimatePresence initial={false}>
                {openSections[section.title] && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="grid grid-flow-row auto-rows-max text-sm mt-1">
                      {section.items.map((item, index) => {
                        const isActive = pathname === item.href;
                        return (
                          <Link
                            key={index}
                            href={item.href}
                            className={cn(
                              "group relative flex w-full items-center rounded-md border border-transparent px-2 py-1.5 transition-all",
                              isActive
                                ? "font-medium text-foreground bg-muted"
                                : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                            )}
                          >
                            {isActive && (
                              <motion.span
                                layoutId="activeNav"
                                className="absolute left-0 top-1/2 -translate-y-1/2 h-5 w-0.5 bg-primary rounded-full"
                                transition={{
                                  type: "spring",
                                  stiffness: 300,
                                  damping: 30,
                                }}
                              />
                            )}
                            <span className={cn(isActive && "pl-3")}>
                              {item.title}
                            </span>
                          </Link>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </nav>
      </ScrollArea>
    </aside>
  );
}
