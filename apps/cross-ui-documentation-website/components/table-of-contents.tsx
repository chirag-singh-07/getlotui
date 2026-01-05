"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TocItem {
  id: string;
  text: string;
  level: number;
}

export function TableOfContents() {
  const [toc, setToc] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const headings = Array.from(document.querySelectorAll("main h2, main h3"))
      .filter((heading) => heading.id) // Only include headings with IDs
      .map((heading) => ({
        id: heading.id,
        text: heading.textContent || "",
        level: Number(heading.tagName.charAt(1)),
      }));

    setToc(headings);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0% -35% 0%" }
    );

    headings.forEach((heading) => {
      const element = document.getElementById(heading.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  if (toc.length < 3) return null;

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="sticky top-20 hidden xl:block pr-4"
    >
      <div className="space-y-2">
        <p className="font-medium text-sm">On This Page</p>
        <nav className="space-y-1">
          {toc.map((item, i) => (
            <motion.button
              key={item.id}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              onClick={() => scrollToHeading(item.id)}
              className={cn(
                "block w-full text-left text-sm transition-colors hover:text-foreground relative py-1",
                item.level === 3 && "pl-4",
                activeId === item.id
                  ? "text-foreground font-medium"
                  : "text-muted-foreground"
              )}
            >
              {activeId === item.id && (
                <motion.span
                  layoutId="activeHeading"
                  className="absolute left-0 top-0 h-full w-0.5 bg-primary rounded-full"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className={cn(activeId === item.id && "pl-3")}>
                {item.text}
              </span>
            </motion.button>
          ))}
        </nav>
      </div>
    </motion.div>
  );
}
