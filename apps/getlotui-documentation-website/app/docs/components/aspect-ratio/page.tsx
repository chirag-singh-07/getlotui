"use client";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ComponentPreview } from "@/components/component-preview";
import { InstallationCommand } from "@/components/installation-command";
import { useFramework } from "@/context/framework-context";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AspectRatioPage() {
  const { framework } = useFramework();

  const usageCode = `import { AspectRatio, Image } from '@crossui/expo'

export default function MyComponent() {
  return (
    <AspectRatio ratio={16 / 9}>
      <Image
        source={{ uri: 'https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80' }}
        style={{ width: '100%', height: '100%' }}
      />
    </AspectRatio>
  )
}`;

  const flutterUsage = `CrossUIAspectRatio(
  ratio: 16 / 9,
  child: Image.network(
    'https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80',
    fit: BoxFit.cover,
  ),
)`;

  const webUsage = `<AspectRatio ratio={16 / 9} className="bg-muted">
  <Image
    src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
    alt="Photo by Drew Beamer"
    fill
    className="rounded-md object-cover"
  />
</AspectRatio>`;

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

  const variantsCode = `<div className="w-[450px]">
  <AspectRatio variant="landscape">
    <Image
      src="https://images.unsplash.com/photo-1576075796033-848c2a5f3696?w=800&dpr=2&q=80"
      alt="Landscape"
      fill
      className="rounded-md object-cover"
    />
  </AspectRatio>
</div>`;

  const squareCode = `<div className="w-[200px]">
  <AspectRatio variant="square">
    <Image
      src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=800&q=80"
      alt="Square"
      fill
      className="rounded-md object-cover"
    />
  </AspectRatio>
</div>`;

  const portraitCode = `<div className="w-[200px]">
  <AspectRatio variant="portrait">
    <Image
      src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=800&q=80"
      alt="Portrait"
      fill
      className="rounded-md object-cover"
    />
  </AspectRatio>
</div>`;

  const wideCode = `<div className="w-[450px]">
  <AspectRatio variant="wide">
    <Image
      src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80"
      alt="Wide"
      fill
      className="rounded-md object-cover"
    />
  </AspectRatio>
</div>`;

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
            id="aspect-ratio"
            className="scroll-m-20 text-5xl font-bold tracking-tight"
          >
            Aspect Ratio
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
            Displays content within a desired ratio.
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
              ? "crossui add aspect-ratio"
              : "npx crossui add aspect-ratio"
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
              prop to verify different aspect ratios.
            </p>
          </div>
          <ComponentPreview name="aspect-ratio-demo" code={variantsCode}>
            <div className="w-[300px] overflow-hidden rounded-md border border-border bg-muted">
              <AspectRatio variant="landscape">
                <Image
                  src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
                  alt="Photo by Drew Beamer"
                  fill
                  className="h-full w-full object-cover"
                />
              </AspectRatio>
            </div>
          </ComponentPreview>
        </div>

        {/* Square */}
        <div className="space-y-4">
          <div className="space-y-2">
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              Square
            </h3>
            <p className="text-base text-muted-foreground leading-relaxed">
              Use the{" "}
              <code className="relative rounded bg-muted px-2 py-0.5 font-mono text-sm">
                square
              </code>{" "}
              variant for 1:1 ratio.
            </p>
          </div>
          <ComponentPreview name="aspect-ratio-square" code={squareCode}>
            <div className="w-[200px] overflow-hidden rounded-md border border-border bg-muted">
              <AspectRatio variant="square">
                <Image
                  src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=800&q=80"
                  alt="Square"
                  fill
                  className="h-full w-full object-cover"
                />
              </AspectRatio>
            </div>
          </ComponentPreview>
        </div>

        {/* Portrait */}
        <div className="space-y-4">
          <div className="space-y-2">
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              Portrait
            </h3>
            <p className="text-base text-muted-foreground leading-relaxed">
              Use the{" "}
              <code className="relative rounded bg-muted px-2 py-0.5 font-mono text-sm">
                portrait
              </code>{" "}
              variant for 3:4 ratio.
            </p>
          </div>
          <ComponentPreview name="aspect-ratio-portrait" code={portraitCode}>
            <div className="w-[200px] overflow-hidden rounded-md border border-border bg-muted">
              <AspectRatio variant="portrait">
                <Image
                  src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=800&q=80"
                  alt="Portrait"
                  fill
                  className="h-full w-full object-cover"
                />
              </AspectRatio>
            </div>
          </ComponentPreview>
        </div>

        {/* Wide */}
        <div className="space-y-4">
          <div className="space-y-2">
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              Wide
            </h3>
            <p className="text-base text-muted-foreground leading-relaxed">
              Use the{" "}
              <code className="relative rounded bg-muted px-2 py-0.5 font-mono text-sm">
                wide
              </code>{" "}
              variant for 21:9 ratio.
            </p>
          </div>
          <ComponentPreview name="aspect-ratio-wide" code={wideCode}>
            <div className="w-[450px] overflow-hidden rounded-md border border-border bg-muted">
              <AspectRatio variant="wide">
                <Image
                  src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80"
                  alt="Wide"
                  fill
                  className="h-full w-full object-cover"
                />
              </AspectRatio>
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
                    ratio
                  </td>
                  <td className="py-3.5 px-4">
                    <code className="text-xs font-mono bg-muted px-2 py-1 rounded">
                      number
                    </code>
                  </td>
                  <td className="py-3.5 px-4">
                    <code className="text-xs font-mono bg-muted px-2 py-1 rounded">
                      16/9
                    </code>
                  </td>
                  <td className="py-3.5 px-4 text-muted-foreground">
                    The aspect ratio to use
                  </td>
                </tr>
                <tr className="border-b border-border hover:bg-muted/30 transition-colors">
                  <td className="py-3.5 px-4 font-mono text-xs font-medium">
                    variant
                  </td>
                  <td className="py-3.5 px-4">
                    <code className="text-xs font-mono bg-muted px-2 py-1 rounded">
                      'square' | 'landscape' | 'portrait' | 'wide' | 'ultrawide'
                    </code>
                  </td>
                  <td className="py-3.5 px-4">
                    <code className="text-xs font-mono bg-muted px-2 py-1 rounded">
                      'landscape'
                    </code>
                  </td>
                  <td className="py-3.5 px-4 text-muted-foreground">
                    Predefined aspect ratio variants
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
