"use client";

import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { ComponentPreview } from "@/components/component-preview";
import { InstallationCommand } from "@/components/installation-command";
import { useFramework } from "@/context/framework-context";
import { motion } from "framer-motion";

export default function ToastPage() {
  const { framework } = useFramework();
  const { toast } = useToast();

  const expoUsage = `import { useToast, ToastProvider } from "@crossui/expo";

function Demo() {
  const { toast } = useToast();
  
  return (
    <Button 
      onPress={() => toast({ 
        title: "Success", 
        description: "Your profile has been updated.",
        type: "success"
      })}
    >
      Show Toast
    </Button>
  );
}

export default () => (
  <ToastProvider>
    <Demo />
  </ToastProvider>
)`;

  const flutterUsage = `CrossUIToast.show(
  context,
  title: 'Success',
  description: 'Your profile has been updated.',
  variant: CrossUIToastVariant.success,
);`;

  const webUsage = `import { useToast } from "@/components/ui/use-toast"

export default function Demo() {
  const { toast } = useToast()

  return (
    <Button
      onClick={() => {
        toast({
          title: "Success",
          description: "Your profile has been updated.",
        })
      }}
    >
      Show Toast
    </Button>
  )
}`;

  const getUsageContent = () => {
    switch (framework) {
      case "flutter":
        return { code: flutterUsage, lang: "dart", title: "example.dart" };
      case "web":
        return { code: webUsage, lang: "tsx", title: "example.tsx" };
      case "expo":
      default:
        return { code: expoUsage, lang: "tsx", title: "Example.tsx" };
    }
  };

  const usage = getUsageContent();

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
            id="toast"
            className="scroll-m-20 text-5xl font-bold tracking-tight"
          >
            Toast
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
            A succinct message that is displayed temporarily.
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
              ? "crossui add toast"
              : "npx crossui add toast"
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

        {/* Simple */}
        <div className="space-y-4">
          <div className="space-y-2">
            <h3
              id="simple"
              className="scroll-m-20 text-2xl font-semibold tracking-tight"
            >
              Simple
            </h3>
            <p className="text-base text-muted-foreground leading-relaxed">
              A basic toast with just a title.
            </p>
          </div>
          <ComponentPreview
            name="toast-simple"
            code={`<Button\n  variant="outline"\n  onClick={() => {\n    toast({\n      title: "Settings saved",\n    })\n  }}\n>\n  Show Toast\n</Button>`}
          >
            <Button
              variant="outline"
              onClick={() => {
                toast({
                  title: "Settings saved",
                });
              }}
            >
              Show Toast
            </Button>
          </ComponentPreview>
        </div>

        {/* With Description */}
        <div className="space-y-4">
          <div className="space-y-2">
            <h3
              id="with-description"
              className="scroll-m-20 text-2xl font-semibold tracking-tight"
            >
              With Description
            </h3>
            <p className="text-base text-muted-foreground leading-relaxed">
              A toast with additional details.
            </p>
          </div>
          <ComponentPreview
            name="toast-description"
            code={`<Button\n  variant="outline"\n  onClick={() => {\n    toast({\n      title: "Success",\n      description: "Your profile has been updated successfully.",\n    })\n  }}\n>\n  Show Toast\n</Button>`}
          >
            <Button
              variant="outline"
              onClick={() => {
                toast({
                  title: "Success",
                  description: "Your profile has been updated successfully.",
                });
              }}
            >
              Show Toast
            </Button>
          </ComponentPreview>
        </div>

        {/* Destructive */}
        <div className="space-y-4">
          <div className="space-y-2">
            <h3
              id="destructive"
              className="scroll-m-20 text-2xl font-semibold tracking-tight"
            >
              Destructive
            </h3>
            <p className="text-base text-muted-foreground leading-relaxed">
              A toast used for error or destructive actions.
            </p>
          </div>
          <ComponentPreview
            name="toast-destructive"
            code={`<Button\n  variant="destructive"\n  onClick={() => {\n    toast({\n      variant: "destructive",\n      title: "Uh oh! Something went wrong.",\n      description: "There was a problem with your request.",\n    })\n  }}\n>\n  Show Toast\n</Button>`}
          >
            <Button
              className="text-white"
              variant="destructive"
              onClick={() => {
                toast({
                  variant: "destructive",
                  title: "Uh oh! Something went wrong.",
                  description: "There was a problem with your request.",
                });
              }}
            >
              Show Toast
            </Button>
          </ComponentPreview>
        </div>

        {/* With Action */}
        <div className="space-y-4">
          <div className="space-y-2">
            <h3
              id="with-action"
              className="scroll-m-20 text-2xl font-semibold tracking-tight"
            >
              With Action
            </h3>
            <p className="text-base text-muted-foreground leading-relaxed">
              A toast with an interactive action button.
            </p>
          </div>
          <ComponentPreview
            name="toast-action"
            code={`<Button\n  variant="outline"\n  onClick={() => {\n    toast({\n      title: "Item deleted",\n      description: "The item has been removed from your list.",\n      action: (\n        <ToastAction altText="Undo" onClick={() => console.log("Undo clicked")}>\n          Undo\n        </ToastAction>\n      ),\n    })\n  }}\n>\n  Show Toast\n</Button>`}
          >
            <Button
              variant="outline"
              onClick={() => {
                toast({
                  title: "Item deleted",
                  description: "The item has been removed from your list.",
                  action: (
                    <ToastAction
                      altText="Undo"
                      onClick={() => console.log("Undo clicked")}
                    >
                      Undo
                    </ToastAction>
                  ),
                });
              }}
            >
              Show Toast
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
                    Description
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border hover:bg-muted/30 transition-colors">
                  <td className="py-3.5 px-4 font-mono text-xs font-medium">
                    title
                  </td>
                  <td className="py-3.5 px-4">
                    <code className="text-xs font-mono bg-muted px-2 py-1 rounded">
                      string
                    </code>
                  </td>
                  <td className="py-3.5 px-4 text-muted-foreground">
                    The title of the toast message
                  </td>
                </tr>
                <tr className="border-b border-border hover:bg-muted/30 transition-colors">
                  <td className="py-3.5 px-4 font-mono text-xs font-medium">
                    description
                  </td>
                  <td className="py-3.5 px-4">
                    <code className="text-xs font-mono bg-muted px-2 py-1 rounded">
                      string
                    </code>
                  </td>
                  <td className="py-3.5 px-4 text-muted-foreground">
                    Additional details for the message
                  </td>
                </tr>
                <tr className="hover:bg-muted/30 transition-colors">
                  <td className="py-3.5 px-4 font-mono text-xs font-medium">
                    type
                  </td>
                  <td className="py-3.5 px-4">
                    <code className="text-xs font-mono bg-muted px-2 py-1 rounded">
                      'default' | 'success' | 'destructive'
                    </code>
                  </td>
                  <td className="py-3.5 px-4 text-muted-foreground">
                    The visual variant of the toast
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
