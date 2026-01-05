"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ComponentPreview } from "@/components/component-preview";
import { InstallationCommand } from "@/components/installation-command";
import { motion } from "framer-motion";

import { useFramework } from "@/context/framework-context";

export default function DialogPage() {
  const { framework } = useFramework();

  const usageCode = `import { Dialog, Button } from '@crossui/expo'

export default function MyComponent() {
  const [visible, setVisible] = useState(false)

  return (
    <Dialog
      visible={visible}
      onClose={() => setVisible(false)}
      title="Confirm Deletion"
      description="Are you sure you want to delete this project?"
    >
      <View style={{ flexDirection: 'row', justifyContent: 'flex-end', gap: 10 }}>
        <Button title="Cancel" variant="outline" onPress={() => setVisible(false)} />
        <Button title="Confirm" variant="danger" onPress={handleDelete} />
      </View>
    </Dialog>
  )
}`;

  const flutterUsage = `// Coming soon for Flutter\n// Standard Flutter showDialog is supported`;
  const webUsage = `<Dialog>\n  <DialogTrigger>Open</DialogTrigger>\n  <DialogContent>\n    <DialogHeader>\n      <DialogTitle>Are you absolutely sure?</DialogTitle>\n    </DialogHeader>\n  </DialogContent>\n</Dialog>`;

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
            id="dialog"
            className="scroll-m-20 text-5xl font-bold tracking-tight"
          >
            Dialog
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
            A window overlaid on either the primary window or another dialog
            window, rendering the content underneath inert.
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
              ? "crossui add dialog"
              : "npx crossui add dialog"
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
              id="confirmation"
              className="scroll-m-20 text-2xl font-semibold tracking-tight"
            >
              Confirmation Modal
            </h3>
            <p className="text-base text-muted-foreground leading-relaxed">
              Standard dialog structure for confirming sensitive actions.
            </p>
          </div>
          <ComponentPreview name="dialog-confirmation" code={usageCode}>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">Open Dialog</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Confirm Custom Action</DialogTitle>
                  <DialogDescription>
                    This is a CrossUI Dialog component with custom children and
                    accessibility features.
                  </DialogDescription>
                </DialogHeader>
                <div className="p-4 bg-muted/30 rounded-lg text-sm italic">
                  "Custom content inside dialog!"
                </div>
                <DialogFooter className="gap-2 sm:gap-0">
                  <Button variant="outline">Cancel</Button>
                  <Button>Confirm</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
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
                    visible
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
                    Whether the dialog is open
                  </td>
                </tr>
                <tr className="border-b border-border hover:bg-muted/30 transition-colors">
                  <td className="py-3.5 px-4 font-mono text-xs font-medium">
                    onClose
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
                    Callback when dialog requests to close
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
                    The title for accessibility
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
