"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ComponentPreview } from "@/components/component-preview";
import { InstallationCommand } from "@/components/installation-command";
import { useFramework } from "@/context/framework-context";
import { motion } from "framer-motion";

export default function AccordionPage() {
  const { framework } = useFramework();

  const usageCode = `import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@crossui/expo'

export default function MyComponent() {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}`;

  const flutterUsage = `CrossUIAccordion(
  type: AccordionType.single,
  collapsible: true,
  items: [
    AccordionItem(
      value: "item-1",
      trigger: "Is it accessible?",
      content: "Yes. It adheres to the WAI-ARIA design pattern.",
    ),
  ],
)`;

  const webUsage = `<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
</Accordion>`;

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

  const basicCode = `<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>Is it styled?</AccordionTrigger>
    <AccordionContent>
      Yes. It comes with default styles that matches the other components' aesthetic.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-3">
    <AccordionTrigger>Is it animated?</AccordionTrigger>
    <AccordionContent>
      Yes. It's animated by default, but you can disable it if you prefer.
    </AccordionContent>
  </AccordionItem>
</Accordion>`;

  const multipleCode = `<Accordion type="multiple">
  <AccordionItem value="item-1">
    <AccordionTrigger>Can I open multiple items?</AccordionTrigger>
    <AccordionContent>
      Yes! Set type="multiple" to allow multiple items to be open at once.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>How does it work?</AccordionTrigger>
    <AccordionContent>
      Each item can be independently opened and closed.
    </AccordionContent>
  </AccordionItem>
</Accordion>`;

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
            id="accordion"
            className="scroll-m-20 text-5xl font-bold tracking-tight"
          >
            Accordion
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
            A vertically stacked set of interactive headings that each reveal a
            section of content.
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
              ? "crossui add accordion"
              : "npx crossui add accordion"
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

        {/* Basic */}
        <div className="space-y-4">
          <div className="space-y-2">
            <h3
              id="basic"
              className="scroll-m-20 text-2xl font-semibold tracking-tight"
            >
              Basic
            </h3>
            <p className="text-base text-muted-foreground leading-relaxed">
              A basic accordion with collapsible items.
            </p>
          </div>
          <ComponentPreview name="accordion-basic" code={basicCode}>
            <Accordion type="single" collapsible className="w-full max-w-md">
              <AccordionItem value="item-1">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Is it styled?</AccordionTrigger>
                <AccordionContent>
                  Yes. It comes with default styles that matches the other
                  components' aesthetic.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Is it animated?</AccordionTrigger>
                <AccordionContent>
                  Yes. It's animated by default, but you can disable it if you
                  prefer.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </ComponentPreview>
        </div>

        {/* Multiple */}
        <div className="space-y-4">
          <div className="space-y-2">
            <h3
              id="multiple"
              className="scroll-m-20 text-2xl font-semibold tracking-tight"
            >
              Multiple Open
            </h3>
            <p className="text-base text-muted-foreground leading-relaxed">
              Allow multiple items to be open at the same time.
            </p>
          </div>
          <ComponentPreview name="accordion-multiple" code={multipleCode}>
            <Accordion type="multiple" className="w-full max-w-md">
              <AccordionItem value="item-1">
                <AccordionTrigger>Can I open multiple items?</AccordionTrigger>
                <AccordionContent>
                  Yes! Set type="multiple" to allow multiple items to be open at
                  once.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>How does it work?</AccordionTrigger>
                <AccordionContent>
                  Each item can be independently opened and closed.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
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
                    type
                  </td>
                  <td className="py-3.5 px-4">
                    <code className="text-xs font-mono bg-muted px-2 py-1 rounded">
                      'single' | 'multiple'
                    </code>
                  </td>
                  <td className="py-3.5 px-4">
                    <code className="text-xs font-mono bg-muted px-2 py-1 rounded">
                      'single'
                    </code>
                  </td>
                  <td className="py-3.5 px-4 text-muted-foreground">
                    Determines whether one or multiple items can be opened at
                    the same time
                  </td>
                </tr>
                <tr className="border-b border-border hover:bg-muted/30 transition-colors">
                  <td className="py-3.5 px-4 font-mono text-xs font-medium">
                    collapsible
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
                    When type is "single", allows closing the open item
                  </td>
                </tr>
                <tr className="hover:bg-muted/30 transition-colors">
                  <td className="py-3.5 px-4 font-mono text-xs font-medium">
                    defaultValue
                  </td>
                  <td className="py-3.5 px-4">
                    <code className="text-xs font-mono bg-muted px-2 py-1 rounded">
                      string | string[]
                    </code>
                  </td>
                  <td className="py-3.5 px-4">
                    <code className="text-xs font-mono bg-muted px-2 py-1 rounded">
                      -
                    </code>
                  </td>
                  <td className="py-3.5 px-4 text-muted-foreground">
                    The default active accordion item(s)
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
            The Accordion component follows accessibility best practices:
          </p>
          <ul className="space-y-2 text-base text-muted-foreground leading-relaxed">
            <li className="flex items-start gap-3">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2.5" />
              <span>Follows the WAI-ARIA Accordion pattern</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2.5" />
              <span>Keyboard navigation with Arrow keys, Home, and End</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2.5" />
              <span>Proper ARIA attributes for screen readers</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2.5" />
              <span>Focus management and visible focus indicators</span>
            </li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
}
