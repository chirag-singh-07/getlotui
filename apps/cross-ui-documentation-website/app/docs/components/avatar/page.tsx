"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ComponentPreview } from "@/components/component-preview";
import { InstallationCommand } from "@/components/installation-command";
import { useFramework } from "@/context/framework-context";
import { motion } from "framer-motion";

export default function AvatarPage() {
  const { framework } = useFramework();

  const expoUsage = `import { Avatar } from '@crossui/expo'

export default function Demo() {
  return (
    <Avatar 
      src="https://github.com/shadcn.png" 
      fallback="CN" 
    />
  )
}`;

  const flutterUsage = `CrossUIAvatar(
  src: 'https://github.com/shadcn.png',
  fallback: 'CN',
)`;

  const webUsage = `<Avatar>
  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>`;

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
            id="avatar"
            className="scroll-m-20 text-5xl font-bold tracking-tight"
          >
            Avatar
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
            An image element with a fallback for representing the user.
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
              ? "crossui add avatar"
              : "npx crossui add avatar"
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
              A standard avatar with image and fallback.
            </p>
          </div>
          <ComponentPreview
            name="avatar-basic"
            code={`<Avatar>\n  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />\n  <AvatarFallback>CN</AvatarFallback>\n</Avatar>`}
          >
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
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
              Available in small, medium (default), and large sizes.
            </p>
          </div>
          <ComponentPreview
            name="avatar-sizes"
            code={`<div className="flex items-center gap-4">\n  <Avatar className="h-8 w-8">\n    <AvatarImage src="https://github.com/shadcn.png" />\n    <AvatarFallback>SM</AvatarFallback>\n  </Avatar>\n  <Avatar className="h-10 w-10">\n    <AvatarImage src="https://github.com/shadcn.png" />\n    <AvatarFallback>MD</AvatarFallback>\n  </Avatar>\n  <Avatar className="h-14 w-14">\n    <AvatarImage src="https://github.com/shadcn.png" />\n    <AvatarFallback>LG</AvatarFallback>\n  </Avatar>\n</div>`}
          >
            <div className="flex items-center gap-4">
              <Avatar className="h-8 w-8">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>SM</AvatarFallback>
              </Avatar>
              <Avatar className="h-10 w-10">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>MD</AvatarFallback>
              </Avatar>
              <Avatar className="h-14 w-14">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>LG</AvatarFallback>
              </Avatar>
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
                    src
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
                    The source URL of the image
                  </td>
                </tr>
                <tr className="border-b border-border hover:bg-muted/30 transition-colors">
                  <td className="py-3.5 px-4 font-mono text-xs font-medium">
                    fallback
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
                    Text to display if the image fails to load
                  </td>
                </tr>
                <tr className="border-b border-border hover:bg-muted/30 transition-colors">
                  <td className="py-3.5 px-4 font-mono text-xs font-medium">
                    size
                  </td>
                  <td className="py-3.5 px-4">
                    <code className="text-xs font-mono bg-muted px-2 py-1 rounded">
                      'sm' | 'md' | 'lg'
                    </code>
                  </td>
                  <td className="py-3.5 px-4">
                    <code className="text-xs font-mono bg-muted px-2 py-1 rounded">
                      'md'
                    </code>
                  </td>
                  <td className="py-3.5 px-4 text-muted-foreground">
                    The size of the avatar
                  </td>
                </tr>
                <tr className="hover:bg-muted/30 transition-colors">
                  <td className="py-3.5 px-4 font-mono text-xs font-medium">
                    shape
                  </td>
                  <td className="py-3.5 px-4">
                    <code className="text-xs font-mono bg-muted px-2 py-1 rounded">
                      'circle' | 'square'
                    </code>
                  </td>
                  <td className="py-3.5 px-4">
                    <code className="text-xs font-mono bg-muted px-2 py-1 rounded">
                      'circle'
                    </code>
                  </td>
                  <td className="py-3.5 px-4 text-muted-foreground">
                    The shape of the avatar
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
