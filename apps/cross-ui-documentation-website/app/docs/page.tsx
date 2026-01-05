"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Code2, Sparkles, Zap, Package } from "lucide-react"

export default function DocsPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl">Introduction</h1>
        <p className="text-xl text-muted-foreground leading-relaxed text-balance">
          Build beautiful, accessible React Native apps with copy & paste components. Inspired by shadcn/ui, designed
          for cross-platform development.
        </p>
      </div>

      <div className="flex flex-wrap gap-3">
        <Button size="lg" asChild>
          <Link href="/docs/installation">
            Get Started
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
        <Button size="lg" variant="outline" asChild>
          <Link href="/docs/components">Browse Components</Link>
        </Button>
      </div>

      {/* What is CrossUI */}
      <div className="space-y-4 pt-6 border-t border-border">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">What is CrossUI?</h2>
        <p className="text-muted-foreground leading-relaxed">
          CrossUI is a collection of re-usable components that you can copy and paste into your apps. It's not a
          component library. It's a collection of components.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Built with Expo (React Native) as the first target, with plans to expand to Flutter and Web. Every component
          is accessible, customizable, and built with best practices in mind.
        </p>
        <Card className="p-6 bg-primary/5 border-primary/20">
          <p className="text-sm leading-relaxed">
            <strong>The idea:</strong> Give you ownership and control over the code. Start with sensible defaults, then
            customize to your needs. Pick the components you need. Copy the code into your project and adapt it to your
            requirements.
          </p>
        </Card>
      </div>

      {/* Philosophy */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">Philosophy</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <Code2 className="h-5 w-5 text-primary" />
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">Own Your Code</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Components live in your project, not in node_modules. Modify, extend, or completely rewrite them. It's
                  your code.
                </p>
              </div>
            </div>
          </Card>
          <Card className="p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                <Sparkles className="h-5 w-5 text-accent" />
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">Theme-Driven</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Every component respects your design tokens and theme configuration. Change your theme once, update
                  everywhere.
                </p>
              </div>
            </div>
          </Card>
          <Card className="p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <Zap className="h-5 w-5 text-primary" />
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">CLI-First</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Add components with simple commands. Browse, select, and add to your project in seconds. Just like
                  shadcn/ui.
                </p>
              </div>
            </div>
          </Card>
          <Card className="p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                <Package className="h-5 w-5 text-accent" />
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">Cross-Platform Ready</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Starting with Expo, expanding to Flutter and Web. One design system, multiple platforms, consistent
                  UIs.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Why CrossUI */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">Why CrossUI?</h2>
        <p className="text-muted-foreground leading-relaxed">
          Building beautiful, consistent UIs across platforms is challenging. CrossUI makes it easier by providing:
        </p>
        <ul className="space-y-2 text-muted-foreground ml-6">
          <li className="flex items-start gap-2">
            <span className="text-primary mt-1">•</span>
            <span>
              <strong>Pre-built, accessible components</strong> - Keyboard navigation, screen readers, and ARIA
              attributes out of the box
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary mt-1">•</span>
            <span>
              <strong>Consistent theming and styling</strong> - Design tokens and theme configuration for unified
              designs
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary mt-1">•</span>
            <span>
              <strong>TypeScript support</strong> - Full type safety and IntelliSense for better developer experience
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary mt-1">•</span>
            <span>
              <strong>Easy customization</strong> - Modify components without fighting against a library's API
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary mt-1">•</span>
            <span>
              <strong>No version conflicts</strong> - Code lives in your project, no breaking changes from updates
            </span>
          </li>
        </ul>
      </div>

      {/* FAQ */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">FAQ</h2>
        <div className="space-y-4">
          <Card className="p-6">
            <h3 className="font-semibold mb-2">Why not just use a component library?</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The idea behind CrossUI is to give you ownership and control over the code, allowing you to decide how the
              components are built and styled. We start with sensible defaults, but you have full control to customize
              them.
            </p>
          </Card>
          <Card className="p-6">
            <h3 className="font-semibold mb-2">Do I need to install anything?</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              You only need the CLI (via npx, no global install needed). Components are copied directly to your project,
              so there's no package to maintain or update.
            </p>
          </Card>
          <Card className="p-6">
            <h3 className="font-semibold mb-2">Which frameworks are supported?</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Currently, CrossUI supports Expo (React Native). We're working on expanding to Flutter and Web in the
              future. The design system principles remain consistent across all platforms.
            </p>
          </Card>
          <Card className="p-6">
            <h3 className="font-semibold mb-2">Can I use this in production?</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Yes! The code is yours. Use it in personal projects, client work, or commercial applications. MIT licensed
              and free forever.
            </p>
          </Card>
        </div>
      </div>

      {/* Get Started */}
      <div className="space-y-4 pt-6 border-t border-border">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Ready to get started?</h2>
        <p className="text-muted-foreground">Choose your path to start building with CrossUI:</p>
        <div className="grid gap-4 md:grid-cols-3">
          <Card className="p-6 hover:shadow-md transition-shadow">
            <h3 className="font-semibold mb-2">Installation</h3>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              Set up CrossUI in your Expo project. Takes less than 2 minutes.
            </p>
            <Button variant="outline" size="sm" asChild className="w-full bg-transparent">
              <Link href="/docs/installation">Get Started</Link>
            </Button>
          </Card>
          <Card className="p-6 hover:shadow-md transition-shadow">
            <h3 className="font-semibold mb-2">Components</h3>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              Browse the component library and see live examples of each component.
            </p>
            <Button variant="outline" size="sm" asChild className="w-full bg-transparent">
              <Link href="/docs/components">View Components</Link>
            </Button>
          </Card>
          <Card className="p-6 hover:shadow-md transition-shadow">
            <h3 className="font-semibold mb-2">Theming</h3>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              Learn how to customize the theme to match your brand identity.
            </p>
            <Button variant="outline" size="sm" asChild className="w-full bg-transparent">
              <Link href="/docs/theming">Theming Guide</Link>
            </Button>
          </Card>
        </div>
      </div>
    </div>
  )
}
