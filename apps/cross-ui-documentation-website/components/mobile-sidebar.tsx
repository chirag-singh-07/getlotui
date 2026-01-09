"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useState } from "react";

const docsNav = [
  {
    title: "Getting Started",
    items: [
      { title: "Introduction", href: "/docs" },
      { title: "Installation", href: "/docs/installation" },
      { title: "CLI", href: "/docs/cli" },
    ],
  },
  {
    title: "Theming",
    items: [{ title: "Theming", href: "/docs/theming" }],
  },
  {
    title: "Components",
    items: [
      { title: "Button", href: "/docs/components/button" },
      { title: "Input", href: "/docs/components/input" },
    ],
  },
];

import { Logo } from "@/components/logo";

export function MobileSidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="sm" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pr-0 w-[300px] sm:w-[400px]">
        <Link
          href="/"
          className="mb-8 flex items-center gap-2 px-2"
          onClick={() => setOpen(false)}
        >
          <Logo className="h-6 w-6" />
          <span className="font-bold text-lg">CrossUI</span>
        </Link>
        <nav className="space-y-6 mt-6">
          {docsNav.map((section, i) => (
            <div key={i} className="space-y-3">
              <h4 className="font-semibold text-sm px-2">{section.title}</h4>
              <div className="space-y-1">
                {section.items.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "block rounded-md px-3 py-2 text-sm transition-colors hover:bg-muted",
                      pathname === item.href
                        ? "font-medium text-foreground bg-muted"
                        : "text-muted-foreground"
                    )}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
