"use client";

import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { ComponentPreview } from "@/components/component-preview";
import { InstallationCommand } from "@/components/installation-command";
import { useFramework } from "@/context/framework-context";
import { motion } from "framer-motion";

export default function ButtonPage() {
  const { framework } = useFramework();

  const usageCode = `import { Button } from '@crossui/expo'

export default function MyComponent() {
  return (
    <Button onPress={() => console.log('pressed')}>
      Click me
    </Button>
  )
}`;

  const flutterUsage = `CrossUIButton(\n  label: "Click me",\n  onPressed: () => print("pressed"),\n)`;

  const webUsage = `<Button variant="default" onClick={() => console.log("clicked")}>\n  Click me\n</Button>`;

  const getUsageContent = () => {
    switch (framework) {
      case "flutter":
        return { code: flutterUsage, lang: "dart", title: "example.dart" };
      case "web":
        return { code: webUsage, lang: "tsx", title: "example.tsx" };
      case "expo":
      default:
        return { code: usageCode, lang: "tsx", title: "Example.tsx" };
    }
  };

  const usage = getUsageContent();

  const variantsCode = `<Button variant="default">Default</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="destructive">Destructive</Button>`;

  const sizesCode = `<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>`;

  const loadingCode = `<Button disabled>
  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
  Please wait
</Button>`;

  return (
    <div className="space-y-12 pb-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="space-y-4"
      >
        <div className="space-y-2">
          <h1
            id="button"
            className="scroll-m-20 text-5xl font-bold tracking-tight"
          >
            Button
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
            Displays a button or a component that looks like a button.
          </p>
        </div>

        <div className="flex items-center gap-3 pt-3 border-t border-border/50">
          <span className="text-sm font-medium text-foreground">
            Framework:
          </span>
          <span className="inline-flex items-center rounded-md bg-primary/10 px-3 py-1 text-xs font-mono font-semibold text-primary ring-1 ring-inset ring-primary/20 capitalize">
            {framework}
          </span>
        </div>
      </motion.div>

      {/* Installation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="space-y-4"
      >
        <h2
          id="installation"
          className="scroll-m-20 border-b border-border/50 pb-3 text-3xl font-semibold tracking-tight"
        >
          Installation
        </h2>
        <InstallationCommand
          code={
            framework === "flutter"
              ? "crossui add button"
              : "npx crossui add button"
          }
        />
      </motion.div>

      {/* Usage */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="space-y-4"
      >
        <h2
          id="usage"
          className="scroll-m-20 border-b border-border/50 pb-3 text-3xl font-semibold tracking-tight"
        >
          Usage
        </h2>
        <InstallationCommand
          code={usage.code}
          title={usage.title}
          language={usage.lang}
        />
      </motion.div>

      {/* Examples */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="space-y-8"
      >
        <h2
          id="examples"
          className="scroll-m-20 border-b border-border/50 pb-3 text-3xl font-semibold tracking-tight"
        >
          Examples
        </h2>

        {/* Variants */}
        <div className="space-y-4">
          <div className="space-y-2">
            <h3
              id="variants"
              className="scroll-m-20 text-2xl font-semibold tracking-tight"
            >
              Variants
            </h3>
            <p className="text-base text-muted-foreground leading-relaxed">
              Use the{" "}
              <code className="relative rounded bg-muted px-2 py-0.5 font-mono text-sm">
                variant
              </code>{" "}
              prop to change the visual style of the Button.
            </p>
          </div>
          <ComponentPreview name="button-variants" code={variantsCode}>
            <div className="flex flex-wrap items-center gap-4">
              <Button variant="default">Default</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="destructive">Destructive</Button>
            </div>
          </ComponentPreview>
        </div>

        {/* Sizes */}
        <div className="space-y-4">
          <div className="space-y-2">
            <h3
              id="sizes"
              className="scroll-m-20 text-2xl font-semibold tracking-tight"
            >
              Sizes
            </h3>
            <p className="text-base text-muted-foreground leading-relaxed">
              Use the{" "}
              <code className="relative rounded bg-muted px-2 py-0.5 font-mono text-sm">
                size
              </code>{" "}
              prop to change the size of the Button.
            </p>
          </div>
          <ComponentPreview name="button-sizes" code={sizesCode}>
            <div className="flex flex-wrap items-center gap-4">
              <Button size="sm">Small</Button>
              <Button size="default">Default</Button>
              <Button size="lg">Large</Button>
            </div>
          </ComponentPreview>
        </div>

        {/* Loading */}
        <div className="space-y-4">
          <div className="space-y-2">
            <h3
              id="loading"
              className="scroll-m-20 text-2xl font-semibold tracking-tight"
            >
              Loading
            </h3>
            <p className="text-base text-muted-foreground leading-relaxed">
              Show a loading state with an icon and disabled state.
            </p>
          </div>
          <ComponentPreview name="button-loading" code={loadingCode}>
            <Button disabled>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Please wait
            </Button>
          </ComponentPreview>
        </div>
      </motion.div>

      {/* API Reference */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.4 }}
        className="space-y-4"
      >
        <h2
          id="api-reference"
          className="scroll-m-20 border-b border-border/50 pb-3 text-3xl font-semibold tracking-tight"
        >
          API Reference
        </h2>
        <div className="rounded-lg border border-border overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-muted/50">
                <tr className="border-b border-border">
                  <th className="text-left py-3.5 px-4 font-semibold">Prop</th>
                  <th className="text-left py-3.5 px-4 font-semibold">Type</th>
                  <th className="text-left py-3.5 px-4 font-semibold">
                    Default
                  </th>
                  <th className="text-left py-3.5 px-4 font-semibold">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border hover:bg-muted/30 transition-colors">
                  <td className="py-3.5 px-4 font-mono text-xs font-medium">
                    variant
                  </td>
                  <td className="py-3.5 px-4">
                    <code className="text-xs font-mono bg-muted px-2 py-1 rounded">
                      'default' | 'secondary' | 'outline' | 'ghost' |
                      'destructive'
                    </code>
                  </td>
                  <td className="py-3.5 px-4">
                    <code className="text-xs font-mono bg-muted px-2 py-1 rounded">
                      'default'
                    </code>
                  </td>
                  <td className="py-3.5 px-4 text-muted-foreground">
                    The visual style of the button
                  </td>
                </tr>
                <tr className="border-b border-border hover:bg-muted/30 transition-colors">
                  <td className="py-3.5 px-4 font-mono text-xs font-medium">
                    size
                  </td>
                  <td className="py-3.5 px-4">
                    <code className="text-xs font-mono bg-muted px-2 py-1 rounded">
                      'sm' | 'default' | 'lg'
                    </code>
                  </td>
                  <td className="py-3.5 px-4">
                    <code className="text-xs font-mono bg-muted px-2 py-1 rounded">
                      'default'
                    </code>
                  </td>
                  <td className="py-3.5 px-4 text-muted-foreground">
                    The size of the button
                  </td>
                </tr>
                <tr className="border-b border-border hover:bg-muted/30 transition-colors">
                  <td className="py-3.5 px-4 font-mono text-xs font-medium">
                    onPress
                  </td>
                  <td className="py-3.5 px-4">
                    <code className="text-xs font-mono bg-muted px-2 py-1 rounded">
                      {"() => void"}
                    </code>
                  </td>
                  <td className="py-3.5 px-4">
                    <code className="text-xs font-mono bg-muted px-2 py-1 rounded">
                      -
                    </code>
                  </td>
                  <td className="py-3.5 px-4 text-muted-foreground">
                    Callback when button is pressed
                  </td>
                </tr>
                <tr className="border-b border-border hover:bg-muted/30 transition-colors">
                  <td className="py-3.5 px-4 font-mono text-xs font-medium">
                    disabled
                  </td>
                  <td className="py-3.5 px-4">
                    <code className="text-xs font-mono bg-muted px-2 py-1 rounded">
                      boolean
                    </code>
                  </td>
                  <td className="py-3.5 px-4">
                    <code className="text-xs font-mono bg-muted px-2 py-1 rounded">
                      false
                    </code>
                  </td>
                  <td className="py-3.5 px-4 text-muted-foreground">
                    Whether the button is disabled
                  </td>
                </tr>
                <tr className="hover:bg-muted/30 transition-colors">
                  <td className="py-3.5 px-4 font-mono text-xs font-medium">
                    className
                  </td>
                  <td className="py-3.5 px-4">
                    <code className="text-xs font-mono bg-muted px-2 py-1 rounded">
                      string
                    </code>
                  </td>
                  <td className="py-3.5 px-4">
                    <code className="text-xs font-mono bg-muted px-2 py-1 rounded">
                      -
                    </code>
                  </td>
                  <td className="py-3.5 px-4 text-muted-foreground">
                    Additional CSS classes
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </motion.div>

      {/* Accessibility */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.5 }}
        className="space-y-4"
      >
        <h2
          id="accessibility"
          className="scroll-m-20 border-b border-border/50 pb-3 text-3xl font-semibold tracking-tight"
        >
          Accessibility
        </h2>
        <div className="rounded-lg border border-border bg-muted/20 p-6">
          <p className="text-base text-muted-foreground leading-relaxed mb-4">
            The Button component follows accessibility best practices:
          </p>
          <ul className="space-y-2 text-base text-muted-foreground leading-relaxed">
            <li className="flex items-start gap-3">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2.5" />
              <span>Keyboard accessible with proper focus management</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2.5" />
              <span>
                Screen reader compatible with appropriate ARIA attributes
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2.5" />
              <span>
                Disabled state properly communicated to assistive technologies
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2.5" />
              <span>
                Touch target size meets minimum accessibility requirements
              </span>
            </li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
}
