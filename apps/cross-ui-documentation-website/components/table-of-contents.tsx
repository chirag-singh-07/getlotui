"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

interface TocItem {
  id: string;
  text: string;
  level: number;
}

export function TableOfContents() {
  const [toc, setToc] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");
  const pathname = usePathname();

  useEffect(() => {
    // Small delay to ensure content is active
    const timer = setTimeout(() => {
      const headings = Array.from(
        document.querySelectorAll("main h2, main h3")
      ).map((heading) => {
        // Generate ID if missing
        if (!heading.id) {
          heading.id =
            heading.textContent
              ?.toLowerCase()
              .replace(/[^a-z0-9]+/g, "-")
              .replace(/(^-|-$)/g, "") || "";
        }
        return {
          id: heading.id,
          text: heading.textContent || "",
          level: Number(heading.tagName.charAt(1)),
        };
      });
      setToc(headings);
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-10% 0% -80% 0%" }
    );

    const observeHeadings = () => {
      toc.forEach((item) => {
        const element = document.getElementById(item.id);
        if (element) observer.observe(element);
      });
    };

    if (toc.length > 0) {
      observeHeadings();
    }

    return () => observer.disconnect();
  }, [toc]);

  if (toc.length < 1) return null;

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Offset for sticky header
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="hidden xl:block w-72 shrink-0 order-2 pl-4 sticky top-24 h-[calc(100vh-6rem)] overflow-y-auto scroll-hidden"
    >
      <div className="space-y-2 pr-4 pb-10">
        <h4 className="font-semibold text-sm mb-4 text-foreground/80 tracking-tight">
          On This Page
        </h4>
        <nav className="flex flex-col gap-1">
          {toc.map((item, i) => (
            <button
              key={`${item.id}-${i}`}
              onClick={() => scrollToHeading(item.id)}
              className={cn(
                "group relative flex w-full items-start px-2 py-1.5 text-sm transition-all text-left rounded-md",
                item.level === 3 && "pl-6",
                activeId === item.id
                  ? "bg-primary/10 text-primary font-medium"
                  : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
              )}
            >
              <span className="relative z-10">{item.text}</span>
              {activeId === item.id && (
                <motion.div
                  layoutId="activeToc"
                  className="absolute inset-0 rounded-md bg-purple-500/10 border-l-2 border-purple-500"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
        </nav>
      </div>
    </motion.div>
  );
}
