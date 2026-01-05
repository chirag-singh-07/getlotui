"use client";

import { Check, Copy, Terminal, Sparkles, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState } from "react";

export default function CLIPage() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const initCode = `npx crossui init`;
  const addSingleCode = `npx crossui add button`;
  const addMultipleCode = `npx crossui add button input card`;
  const listCode = `npx crossui list`;

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1
          id="cli-reference"
          className="scroll-m-20 text-4xl font-bold tracking-tight"
        >
          CLI Reference
        </h1>
        <p className="text-lg text-muted-foreground">
          Use the CrossUI CLI to add components to your project. Simple, fast,
          and powerful.
        </p>
      </div>

      <div className="rounded-lg border border-primary/20 bg-primary/5 p-4">
        <p className="text-sm text-foreground leading-relaxed">
          <strong>Philosophy:</strong> CrossUI follows the shadcn/ui approach.
          Components are added to your project, not installed as dependencies.
          This gives you full control and ownership of the code.
        </p>
      </div>

      {/* init command */}
      <div className="space-y-4">
        <h2
          id="crossui-init"
          className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight flex items-center gap-2"
        >
          <Sparkles className="h-6 w-6" />
          crossui init
        </h2>
        <p className="text-muted-foreground">
          Initialize CrossUI in your project. This command sets up the necessary
          configuration files, dependencies, and project structure.
        </p>
        <div className="relative">
          <pre className="bg-muted p-4 rounded-lg font-mono text-sm overflow-x-auto">
            <code>{initCode}</code>
          </pre>
          <Button
            size="sm"
            variant="ghost"
            className="absolute right-2 top-2"
            onClick={() => copyToClipboard(initCode, "init")}
          >
            {copiedCode === "init" ? (
              <Check className="h-4 w-4" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
          </Button>
        </div>
        <Card className="p-4 bg-muted/50">
          <p className="text-sm font-semibold mb-2">This command will:</p>
          <ul className="text-sm text-muted-foreground space-y-1 ml-6 list-disc">
            <li>
              Create{" "}
              <code className="text-xs font-mono bg-muted px-1 py-0.5 rounded">
                components/ui/
              </code>{" "}
              directory
            </li>
            <li>
              Add{" "}
              <code className="text-xs font-mono bg-muted px-1 py-0.5 rounded">
                lib/utils.ts
              </code>{" "}
              with helper functions
            </li>
            <li>
              Set up{" "}
              <code className="text-xs font-mono bg-muted px-1 py-0.5 rounded">
                theme/config.ts
              </code>{" "}
              for customization
            </li>
            <li>
              Configure TypeScript paths in{" "}
              <code className="text-xs font-mono bg-muted px-1 py-0.5 rounded">
                tsconfig.json
              </code>
            </li>
            <li>Install necessary peer dependencies</li>
          </ul>
        </Card>
        <p className="text-sm text-muted-foreground">
          Run this command once per project. It's safe to run multiple times -
          it won't overwrite existing configurations.
        </p>
      </div>

      {/* add command */}
      <div className="space-y-4">
        <h2
          id="crossui-add"
          className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight flex items-center gap-2"
        >
          <Package className="h-6 w-6" />
          crossui add
        </h2>
        <p className="text-muted-foreground">
          Add a component to your project. The component code will be copied
          directly into your project, giving you full control to customize it.
        </p>

        <div className="space-y-4">
          <div>
            <h3 id="add-single" className="text-lg font-semibold mb-2">
              Add a single component
            </h3>
            <div className="relative">
              <pre className="bg-muted p-4 rounded-lg font-mono text-sm overflow-x-auto">
                <code>{addSingleCode}</code>
              </pre>
              <Button
                size="sm"
                variant="ghost"
                className="absolute right-2 top-2"
                onClick={() => copyToClipboard(addSingleCode, "single")}
              >
                {copiedCode === "single" ? (
                  <Check className="h-4 w-4" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </Button>
            </div>
          </div>

          <div>
            <h3 id="add-multiple" className="text-lg font-semibold mb-2">
              Add multiple components
            </h3>
            <p className="text-sm text-muted-foreground mb-2">
              Save time by adding multiple components at once:
            </p>
            <div className="relative">
              <pre className="bg-muted p-4 rounded-lg font-mono text-sm overflow-x-auto">
                <code>{addMultipleCode}</code>
              </pre>
              <Button
                size="sm"
                variant="ghost"
                className="absolute right-2 top-2"
                onClick={() => copyToClipboard(addMultipleCode, "multiple")}
              >
                {copiedCode === "multiple" ? (
                  <Check className="h-4 w-4" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </Button>
            </div>
          </div>
        </div>

        <Card className="p-4 bg-muted/50">
          <p className="text-sm font-semibold mb-2">Available Components:</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
            <code className="font-mono bg-background px-2 py-1 rounded">
              button
            </code>
            <code className="font-mono bg-background px-2 py-1 rounded">
              input
            </code>
            <code className="font-mono bg-background px-2 py-1 rounded">
              card
            </code>
            <code className="font-mono bg-background px-2 py-1 rounded">
              dialog
            </code>
            <code className="font-mono bg-background px-2 py-1 rounded">
              dropdown
            </code>
            <code className="font-mono bg-background px-2 py-1 rounded">
              toast
            </code>
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            More components coming soon!
          </p>
        </Card>
      </div>

      {/* Workflow */}
      <div className="space-y-4">
        <h2
          id="typical-workflow"
          className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight flex items-center gap-2"
        >
          <Terminal className="h-6 w-6" />
          Typical Workflow
        </h2>
        <p className="text-muted-foreground">
          Here's the typical workflow when using CrossUI:
        </p>
        <Card className="p-6">
          <ol className="space-y-4">
            <li className="flex gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold">
                1
              </div>
              <div>
                <h3 id="step-init" className="font-semibold mb-1">
                  Initialize your project
                </h3>
                <p className="text-sm text-muted-foreground">
                  Run{" "}
                  <code className="text-xs font-mono bg-muted px-1 py-0.5 rounded">
                    crossui init
                  </code>{" "}
                  once to set up CrossUI
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold">
                2
              </div>
              <div>
                <h3 id="step-add" className="font-semibold mb-1">
                  Add components as needed
                </h3>
                <p className="text-sm text-muted-foreground">
                  Use{" "}
                  <code className="text-xs font-mono bg-muted px-1 py-0.5 rounded">
                    crossui add
                  </code>{" "}
                  to add components to your project
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold">
                3
              </div>
              <div>
                <h3 id="step-customize" className="font-semibold mb-1">
                  Customize the code
                </h3>
                <p className="text-sm text-muted-foreground">
                  Edit the component files in{" "}
                  <code className="text-xs font-mono bg-muted px-1 py-0.5 rounded">
                    components/ui/
                  </code>{" "}
                  to match your needs
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold">
                4
              </div>
              <div>
                <h3 id="step-import" className="font-semibold mb-1">
                  Import and use
                </h3>
                <p className="text-sm text-muted-foreground">
                  Import components in your app and start building
                </p>
              </div>
            </li>
          </ol>
        </Card>
      </div>

      {/* Philosophy */}
      <div className="space-y-4">
        <h2
          id="why-this-approach"
          className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight"
        >
          Why This Approach?
        </h2>
        <p className="text-muted-foreground">
          CrossUI follows the same philosophy as shadcn/ui. Components are added
          to your project, not installed as dependencies. This approach has
          several benefits:
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          <Card className="p-6">
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              <Check className="h-5 w-5 text-primary" />
              Full Ownership
            </h3>
            <p className="text-sm text-muted-foreground">
              The code lives in your project. You own it, you control it, you
              can modify it however you want.
            </p>
          </Card>
          <Card className="p-6">
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              <Check className="h-5 w-5 text-primary" />
              No Breaking Changes
            </h3>
            <p className="text-sm text-muted-foreground">
              No npm package means no version conflicts or breaking changes. You
              control when and how to update.
            </p>
          </Card>
          <Card className="p-6">
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              <Check className="h-5 w-5 text-primary" />
              Easy Customization
            </h3>
            <p className="text-sm text-muted-foreground">
              Modify components directly without fighting against a library's
              API or prop limitations.
            </p>
          </Card>
          <Card className="p-6">
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              <Check className="h-5 w-5 text-primary" />
              Better Understanding
            </h3>
            <p className="text-sm text-muted-foreground">
              By having the code in your project, you can learn how components
              work and understand your codebase better.
            </p>
          </Card>
        </div>
      </div>

      <div className="rounded-lg border border-accent/20 bg-accent/5 p-4">
        <p className="text-sm leading-relaxed">
          <strong>💡 Tip:</strong> After adding a component, check the generated
          code in{" "}
          <code className="text-xs font-mono bg-muted px-1 py-0.5 rounded">
            components/ui/
          </code>
          . Feel free to modify it to match your needs. That's the whole point!
        </p>
      </div>
    </div>
  );
}
