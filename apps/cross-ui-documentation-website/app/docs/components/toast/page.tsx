"use client";

import { Button } from "@/components/ui/button";
import { ComponentPreview } from "@/components/component-preview";
import { InstallationCommand } from "@/components/installation-command";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { useFramework } from "@/context/framework-context";

export default function ToastPage() {
  const { framework } = useFramework();

  const providerCode = `import { ToastProvider } from '@crossui/expo'

export default function App() {
  return (
    <ToastProvider>
      <Main />
    </ToastProvider>
  )
}`;

  const usageCode = `import { useToast } from '@crossui/expo'

export function MyComponent() {
  const { show } = useToast()

  return (
    <Button 
      title="Show Toast" 
      onPress={() => show("Success!", { variant: "success" })} 
    />
  )
}`;

  const flutterUsage = `// Coming soon for Flutter\n// Standard Flutter SnackBar is supported`;
  const webUsage = `import { toast } from "sonner"\n\n// Use in your component\ntoast.success("Success!")`;

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

  return (
    <div className="space-y-12 pb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="space-y-4"
      >
        <div className="space-y-2">
          <h1
            id="toast"
            className="scroll-m-20 text-5xl font-bold tracking-tight"
          >
            Toast
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
            A succinct message that is displayed temporarily and then disappears
            automatically.
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
              ? "crossui add toast"
              : "npx crossui add toast"
          }
        />
      </motion.div>

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

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.4 }}
        className="space-y-8"
      >
        <h2
          id="examples"
          className="scroll-m-20 border-b border-border/50 pb-3 text-3xl font-semibold tracking-tight"
        >
          Examples
        </h2>

        <div className="space-y-4">
          <div className="space-y-2">
            <h3
              id="trigger"
              className="scroll-m-20 text-2xl font-semibold tracking-tight"
            >
              Interactive Preview
            </h3>
            <p className="text-base text-muted-foreground leading-relaxed">
              Click the buttons below to see different toast variants in action.
            </p>
          </div>
          <ComponentPreview
            name="toast-trigger"
            code={`show("Message", { variant: "success" })`}
          >
            <div className="flex flex-wrap items-center gap-4">
              <Button
                variant="outline"
                onClick={() => toast("Information message", { duration: 3000 })}
              >
                Show Info
              </Button>
              <Button
                variant="default"
                onClick={() =>
                  toast.success("Success! Operation completed.", {
                    duration: 3000,
                  })
                }
              >
                Show Success
              </Button>
              <Button
                variant="destructive"
                onClick={() =>
                  toast.error("Error! Something went wrong.", {
                    duration: 3000,
                  })
                }
              >
                Show Error
              </Button>
            </div>
          </ComponentPreview>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.5 }}
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
                  <th className="text-left py-3.5 px-4 font-semibold">
                    Method
                  </th>
                  <th className="text-left py-3.5 px-4 font-semibold">
                    Arguments
                  </th>
                  <th className="text-left py-3.5 px-4 font-semibold">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border hover:bg-muted/30 transition-colors">
                  <td className="py-3.5 px-4 font-mono text-xs font-medium">
                    show
                  </td>
                  <td className="py-3.5 px-4">
                    <code className="text-xs font-mono bg-muted px-2 py-1 rounded">
                      (message: string, options?: ToastOptions)
                    </code>
                  </td>
                  <td className="py-3.5 px-4 text-muted-foreground">
                    Triggers a new toast message
                  </td>
                </tr>
                <tr className="hover:bg-muted/30 transition-colors">
                  <td className="py-3.5 px-4 font-mono text-xs font-medium">
                    hideAll
                  </td>
                  <td className="py-3.5 px-4">
                    <code className="text-xs font-mono bg-muted px-2 py-1 rounded">
                      -
                    </code>
                  </td>
                  <td className="py-3.5 px-4 text-muted-foreground">
                    Dismisses all active toasts
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
