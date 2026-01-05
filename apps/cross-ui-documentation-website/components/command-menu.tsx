"use client";
import * as React from "react";
import { useRouter } from "next/navigation";
import {
  FileIcon,
  SearchIcon,
  CircleIcon,
  BookOpen,
  Box,
  Terminal,
  Palette,
  ArrowRight,
  Sparkles,
} from "lucide-react";

import { docsNav } from "@/config/docs";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";

export function CommandMenu() {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || e.key === "/") {
        if (
          (e.target instanceof HTMLElement && e.target.isContentEditable) ||
          e.target instanceof HTMLInputElement ||
          e.target instanceof HTMLTextAreaElement ||
          e.target instanceof HTMLSelectElement
        ) {
          return;
        }

        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = React.useCallback((command: () => unknown) => {
    setOpen(false);
    command();
  }, []);

  const getIcon = (sectionTitle: string) => {
    switch (sectionTitle) {
      case "Getting Started":
        return <BookOpen className="mr-2 h-4 w-4 text-blue-500" />;
      case "Theming":
        return <Palette className="mr-2 h-4 w-4 text-purple-500" />;
      case "Components":
        return <Box className="mr-2 h-4 w-4 text-emerald-500" />;
      default:
        return <FileIcon className="mr-2 h-4 w-4" />;
    }
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="group relative flex h-10 w-full items-center justify-start rounded-xl bg-muted/30 border border-border/50 pl-3 pr-12 text-sm text-muted-foreground transition-all hover:bg-muted/50 hover:border-primary/30 hover:shadow-[0_0_20px_-12px_rgba(var(--primary),0.5)] focus-visible:outline-hidden hover:text-white focus-visible:ring-2 focus-visible:ring-primary lg:w-64"
      >
        <SearchIcon className="mr-2 h-4 w-4 opacity-50 group-hover:text-primary group-hover:opacity-100 transition-all" />
        <span className="hidden lg:inline-flex">Search documentation...</span>
        <span className="inline-flex lg:hidden">Search...</span>
        <kbd className="pointer-events-none absolute right-2 top-2 hidden h-6 select-none items-center gap-1 rounded-md border border-border/50 bg-background px-1.5 font-mono text-[10px] font-medium opacity-60 sm:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </button>
      <CommandDialog
        open={open}
        onOpenChange={setOpen}
        className="max-w-[600px] border-primary/10 shadow-2xl"
      >
        <div className="flex items-center border-b border-border/50 px-3">
          <CommandInput
            placeholder="What can we help you find?"
            className="h-14 border-none focus:ring-0"
          />
        </div>
        <CommandList className="p-2 scroll-pb-4">
          <CommandEmpty className="py-12 flex flex-col items-center justify-center gap-2">
            <div className="h-12 w-12 rounded-2xl bg-muted flex items-center justify-center">
              <SearchIcon className="h-6 w-6 text-muted-foreground/50" />
            </div>
            <p className="text-sm font-medium text-muted-foreground">
              No matches found.
            </p>
            <p className="text-xs text-muted-foreground/50">
              Try searching for "button" or "cli".
            </p>
          </CommandEmpty>

          <CommandGroup
            heading={
              <div className="flex items-center gap-2 px-2 py-1">
                <Sparkles className="h-3 w-3 text-primary" />
                <span className="text-[10px] font-black uppercase tracking-widest">
                  Documentation
                </span>
              </div>
            }
          >
            {docsNav.map((section) => (
              <React.Fragment key={section.title}>
                {section.items.map((item) => (
                  <CommandItem
                    key={item.href}
                    value={`${section.title} ${item.title}`}
                    onSelect={() => {
                      runCommand(() => router.push(item.href));
                    }}
                    className="flex items-center justify-between group px-3 py-3 rounded-lg data-[selected=true]:bg-primary/5 transition-colors"
                  >
                    <div className="flex items-center">
                      {getIcon(section.title)}
                      <div className="flex flex-col">
                        <span className="font-bold text-sm tracking-tight text-white">
                          {item.title}
                        </span>
                        <span className="text-[10px] text-muted-foreground uppercase font-medium">
                          {section.title}
                        </span>
                      </div>
                    </div>
                    <ArrowRight className="h-4 w-4 text-primary opacity-0 group-data-[selected=true]:opacity-100 -translate-x-2 group-data-[selected=true]:translate-x-0 transition-all" />
                  </CommandItem>
                ))}
              </React.Fragment>
            ))}
          </CommandGroup>

          <CommandSeparator className="my-2" />

          <CommandGroup
            heading={
              <div className="flex items-center gap-2 px-2 py-1">
                <Terminal className="h-3 w-3 text-primary" />
                <span className="text-[10px] font-black uppercase tracking-widest">
                  Actions
                </span>
              </div>
            }
          >
            <CommandItem
              onSelect={() => {
                runCommand(() => router.push("/docs/theming/generator"));
              }}
              className="flex items-center justify-between group px-3 py-3 rounded-lg data-[selected=true]:bg-primary/5 transition-colors"
            >
              <div className="flex items-center">
                <Palette className="mr-2 h-4 w-4 text-purple-500" />
                <div className="flex flex-col">
                  <span className="font-bold text-sm tracking-tight text-white">
                    Open Theme Generator
                  </span>
                  <span className="text-[10px] text-muted-foreground uppercase font-medium">
                    Tools
                  </span>
                </div>
              </div>
              <ArrowRight className="h-4 w-4 text-primary opacity-0 group-data-[selected=true]:opacity-100 -translate-x-2 group-data-[selected=true]:translate-x-0 transition-all" />
            </CommandItem>
            <CommandItem
              onSelect={() => {
                runCommand(() => router.push("/docs/cli"));
              }}
              className="flex items-center justify-between group px-3 py-3 rounded-lg data-[selected=true]:bg-primary/5 transition-colors"
            >
              <div className="flex items-center">
                <Terminal className="mr-2 h-4 w-4 text-blue-500" />
                <div className="flex flex-col">
                  <span className="font-bold text-sm tracking-tight text-white">
                    View CLI Reference
                  </span>
                  <span className="text-[10px] text-muted-foreground uppercase font-medium">
                    Tools
                  </span>
                </div>
              </div>
              <ArrowRight className="h-4 w-4 text-primary opacity-0 group-data-[selected=true]:opacity-100 -translate-x-2 group-data-[selected=true]:translate-x-0 transition-all" />
            </CommandItem>
          </CommandGroup>
        </CommandList>
        <div className="flex items-center justify-between border-t border-border/50 bg-muted/20 px-4 py-3 text-[10px] text-muted-foreground">
          <div className="flex gap-4">
            <span className="flex items-center gap-1.5">
              <kbd className="rounded border bg-background px-1.5 font-mono text-muted-foreground">
                ↵
              </kbd>{" "}
              Select
            </span>
            <span className="flex items-center gap-1.5">
              <kbd className="rounded border bg-background px-1.5 font-mono text-muted-foreground">
                ↑↓
              </kbd>{" "}
              Navigate
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="h-3 w-3 text-primary" />
            <span className="font-bold">CrossUI Search</span>
          </div>
        </div>
      </CommandDialog>
    </>
  );
}
