"use client";

import {
  AlignLeft,
  AlignCenter,
  AlignRight,
  Home,
  Settings,
  User,
} from "lucide-react";
import { ButtonGroup, Button } from "@/components/ui/button-group";
import { ComponentPreview } from "@/components/component-preview";
import { InstallationCommand } from "@/components/installation-command";
import { useFramework } from "@/context/framework-context";
import { motion } from "framer-motion";

export default function ButtonGroupDocs() {
  const { framework } = useFramework();

  const usageCode = `import { ButtonGroup, Button } from '@crossui/expo'
import { Home, Settings, User } from 'lucide-react-native'

export default function MyComponent() {
  return (
    <ButtonGroup>
      <Button icon={<Home size={20} />} title="Home" />
      <Button icon={<Settings size={20} />} title="Settings" />
      <Button icon={<User size={20} />} />
    </ButtonGroup>
  )
}`;

  const flutterUsage = `CrossUIButtonGroup(
  children: [
    CrossUIButton(
      label: "Home",
      icon: Icon(Icons.home),
      onPressed: () => {},
    ),
    CrossUIButton(
      label: "Settings",
      icon: Icon(Icons.settings),
      onPressed: () => {},
    ),
    CrossUIButton(
      icon: Icon(Icons.person),
      onPressed: () => {},
    ),
  ],
)`;

  const webUsage = `<ButtonGroup>
  <Button variant="outline">
    <Home className="mr-2 h-4 w-4" /> Home
  </Button>
  <Button variant="outline">
    <Settings className="mr-2 h-4 w-4" /> Settings
  </Button>
  <Button variant="outline" size="icon">
    <User className="h-4 w-4" />
  </Button>
</ButtonGroup>`;

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

  const basicCode = `<ButtonGroup>
  <Button variant="outline">Year</Button>
  <Button variant="outline">Month</Button>
  <Button variant="outline">Week</Button>
</ButtonGroup>`;

  const verticalCode = `<ButtonGroup orientation="vertical">
   <Button variant="outline">Top</Button>
   <Button variant="outline">Middle</Button>
   <Button variant="outline">Bottom</Button>
</ButtonGroup>`;

  const iconCode = `<ButtonGroup>
  <Button variant="outline" size="icon">
    <AlignLeft className="h-4 w-4" />
  </Button>
  <Button variant="outline" size="icon">
    <AlignCenter className="h-4 w-4" />
  </Button>
  <Button variant="outline" size="icon">
    <AlignRight className="h-4 w-4" />
  </Button>
</ButtonGroup>`;

  const mixedCode = `<ButtonGroup>
  <Button variant="outline">
    <Home className="mr-2 h-4 w-4" /> Home
  </Button>
  <Button variant="outline">
    <Settings className="mr-2 h-4 w-4" /> Settings
  </Button>
  <Button variant="outline" size="icon">
    <User className="h-4 w-4" />
  </Button>
</ButtonGroup>`;

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
            id="button-group"
            className="scroll-m-20 text-5xl font-bold tracking-tight"
          >
            Button Group
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
            Group a series of buttons together on a single line or stack.
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
              ? "crossui add button-group"
              : "npx crossui add button-group"
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
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              Horizontal (Default)
            </h3>
            <p className="text-base text-muted-foreground leading-relaxed">
              Group buttons horizontally. Great for date pickers or filters.
            </p>
          </div>
          <ComponentPreview name="button-group-basic" code={basicCode}>
            <div className="flex items-center justify-center p-8">
              <ButtonGroup>
                <Button variant="outline">Year</Button>
                <Button variant="outline">Month</Button>
                <Button variant="outline">Week</Button>
              </ButtonGroup>
            </div>
          </ComponentPreview>
        </div>

        {/* Vertical */}
        <div className="space-y-4">
          <div className="space-y-2">
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              Vertical
            </h3>
            <p className="text-base text-muted-foreground leading-relaxed">
              Stack buttons vertically.
            </p>
          </div>
          <ComponentPreview name="button-group-vertical" code={verticalCode}>
            <div className="flex items-center justify-center p-8">
              <ButtonGroup orientation="vertical">
                <Button variant="outline">Top</Button>
                <Button variant="outline">Middle</Button>
                <Button variant="outline">Bottom</Button>
              </ButtonGroup>
            </div>
          </ComponentPreview>
        </div>

        {/* With Icons */}
        <div className="space-y-4">
          <div className="space-y-2">
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              With Icons
            </h3>
            <p className="text-base text-muted-foreground leading-relaxed">
              Use icons to create toolbar-like actions.
            </p>
          </div>
          <ComponentPreview name="button-group-icons" code={iconCode}>
            <div className="flex items-center justify-center p-8">
              <ButtonGroup>
                <Button variant="outline" size="icon">
                  <AlignLeft className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <AlignCenter className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <AlignRight className="h-4 w-4" />
                </Button>
              </ButtonGroup>
            </div>
          </ComponentPreview>
        </div>

        {/* Mixed */}
        <div className="space-y-4">
          <div className="space-y-2">
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              Mixed Content
            </h3>
            <p className="text-base text-muted-foreground leading-relaxed">
              Combine text and icons within the group.
            </p>
          </div>
          <ComponentPreview name="button-group-mixed" code={mixedCode}>
            <div className="flex items-center justify-center p-8">
              <ButtonGroup>
                <Button variant="outline">
                  <Home className="mr-2 h-4 w-4" /> Home
                </Button>
                <Button variant="outline">
                  <Settings className="mr-2 h-4 w-4" /> Settings
                </Button>
                <Button variant="outline" size="icon">
                  <User className="h-4 w-4" />
                </Button>
              </ButtonGroup>
            </div>
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
                    orientation
                  </td>
                  <td className="py-3.5 px-4 font-mono text-xs text-muted-foreground">
                    "horizontal" | "vertical"
                  </td>
                  <td className="py-3.5 px-4 font-mono text-xs text-muted-foreground">
                    "horizontal"
                  </td>
                  <td className="py-3.5 px-4 text-muted-foreground">
                    The axis the buttons should cluster on.
                  </td>
                </tr>
                <tr className="border-b border-border hover:bg-muted/30 transition-colors">
                  <td className="py-3.5 px-4 font-mono text-xs font-medium">
                    children
                  </td>
                  <td className="py-3.5 px-4 font-mono text-xs text-muted-foreground">
                    ReactNode
                  </td>
                  <td className="py-3.5 px-4 font-mono text-xs text-muted-foreground">
                    -
                  </td>
                  <td className="py-3.5 px-4 text-muted-foreground">
                    The buttons to group.
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
