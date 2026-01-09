"use client";

import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Info, CheckCircle2, AlertTriangle, AlertCircle } from "lucide-react";
import { ComponentPreview } from "@/components/component-preview";
import { InstallationCommand } from "@/components/installation-command";
import { useFramework } from "@/context/framework-context";
import { motion } from "framer-motion";

export default function AlertPage() {
  const { framework } = useFramework();

  const usageCode = `import { Alert } from '@crossui/expo'

export default function MyComponent() {
  return (
    <Alert
      variant="info"
      title="Update Available"
      description="A new version of the app is ready to install."
    />
  )
}`;

  const flutterUsage = `CrossUIAlert(\n  title: "Update Available",\n  description: "A new version of the app is ready to install.",\n  variant: CrossUIAlertVariant.info,\n)`;

  const webUsage = `<Alert>\n  <Info className="h-4 w-4" />\n  <AlertTitle>Update Available</AlertTitle>\n  <AlertDescription>\n    A new version of the app is ready to install.\n  </AlertDescription>\n</Alert>`;

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

  const variantsCode = `<Alert variant="info" title="Info" description="..." />
<Alert variant="success" title="Success" description="..." />
<Alert variant="warning" title="Warning" description="..." />
<Alert variant="error" title="Error" description="..." />`;

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
            id="alert"
            className="scroll-m-20 text-5xl font-bold tracking-tight"
          >
            Alert
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
            Displays a brief, important message in a way that attracts the
            user's attention without interrupting their task.
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
              ? "crossui add alert"
              : "npx crossui add alert"
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
        transition={{ duration: 0.4, delay: 0.3 }}
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
              id="variants"
              className="scroll-m-20 text-2xl font-semibold tracking-tight"
            >
              Variants
            </h3>
            <p className="text-base text-muted-foreground leading-relaxed">
              Alerts come with four semantic variants:{" "}
              <code className="relative rounded bg-muted px-2 py-0.5 font-mono text-sm">
                info
              </code>
              ,{" "}
              <code className="relative rounded bg-muted px-2 py-0.5 font-mono text-sm">
                success
              </code>
              ,{" "}
              <code className="relative rounded bg-muted px-2 py-0.5 font-mono text-sm">
                warning
              </code>
              , and{" "}
              <code className="relative rounded bg-muted px-2 py-0.5 font-mono text-sm">
                error
              </code>
              .
            </p>
          </div>
          <ComponentPreview name="alert-variants" code={variantsCode}>
            <div className="flex flex-col gap-4 w-full max-w-md">
              <Alert variant="info">
                <Info className="h-4 w-4" />
                <AlertTitle>Informational</AlertTitle>
                <AlertDescription>
                  This is a neutral message for the user.
                </AlertDescription>
              </Alert>
              <Alert variant="success">
                <CheckCircle2 className="h-4 w-4" />
                <AlertTitle>Success</AlertTitle>
                <AlertDescription>
                  Operation completed successfully.
                </AlertDescription>
              </Alert>
              <Alert variant="warning">
                <AlertTriangle className="h-4 w-4" />
                <AlertTitle>Warning</AlertTitle>
                <AlertDescription>
                  Please be careful with this action.
                </AlertDescription>
              </Alert>
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>Something went wrong!</AlertDescription>
              </Alert>
            </div>
          </ComponentPreview>
        </div>
      </motion.div>

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
                      'info' | 'success' | 'warning' | 'error'
                    </code>
                  </td>
                  <td className="py-3.5 px-4">
                    <code className="text-xs font-mono bg-muted px-2 py-1 rounded">
                      'info'
                    </code>
                  </td>
                  <td className="py-3.5 px-4 text-muted-foreground">
                    The semantic style of the alert
                  </td>
                </tr>
                <tr className="border-b border-border hover:bg-muted/30 transition-colors">
                  <td className="py-3.5 px-4 font-mono text-xs font-medium">
                    title
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
                    The title of the alert
                  </td>
                </tr>
                <tr className="hover:bg-muted/30 transition-colors">
                  <td className="py-3.5 px-4 font-mono text-xs font-medium">
                    description
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
                    The detail message of the alert
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
