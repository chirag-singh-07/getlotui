"use client";

import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ComponentPreview } from "@/components/component-preview";
import { InstallationCommand } from "@/components/installation-command";
import { useFramework } from "@/context/framework-context";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function CarouselDocs() {
  const { framework } = useFramework();

  const expoUsage = `import { Carousel } from '@getlotui/expo'
import { Text, View } from 'react-native'

export default function MyComponent() {
  return (
    <Carousel>
      <View style={{ height: 200, backgroundColor: '#f0f0f0', justifyContent: 'center', alignItems: 'center' }}>
        <Text>Slide 1</Text>
      </View>
      <View style={{ height: 200, backgroundColor: '#e0e0e0', justifyContent: 'center', alignItems: 'center' }}>
        <Text>Slide 2</Text>
      </View>
      <View style={{ height: 200, backgroundColor: '#d0d0d0', justifyContent: 'center', alignItems: 'center' }}>
        <Text>Slide 3</Text>
      </View>
    </Carousel>
  )
}`;

  const flutterUsage = `CrossUICarousel(
  items: [
    Container(color: Colors.grey[200], child: Center(child: Text("Slide 1"))),
    Container(color: Colors.grey[300], child: Center(child: Text("Slide 2"))),
    Container(color: Colors.grey[400], child: Center(child: Text("Slide 3"))),
  ],
)`;

  const webUsage = `import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function CarouselDemo() {
  return (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}`;

  const getUsageContent = () => {
    switch (framework) {
      case "flutter":
        return { code: flutterUsage, lang: "dart", title: "page.dart" };
      case "web":
        return { code: webUsage, lang: "tsx", title: "page.tsx" };
      case "expo":
      default:
        return { code: expoUsage, lang: "tsx", title: "Page.tsx" };
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
            id="carousel"
            className="scroll-m-20 text-5xl font-bold tracking-tight"
          >
            Carousel
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
            A versatile carousel component with support for pagination,
            navigation, and multi-platform layouts.
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
              ? "getlotui add carousel"
              : "npx getlotui add carousel"
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
              Default
            </h3>
            <p className="text-base text-muted-foreground leading-relaxed">
              A basic carousel with navigation buttons.
            </p>
          </div>
          <ComponentPreview name="carousel-demo" code={webUsage}>
            <div className="flex items-center justify-center p-12">
              <Carousel className="w-full max-w-xs">
                <CarouselContent>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index}>
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex aspect-square items-center justify-center p-6">
                            <span className="text-4xl font-semibold">
                              {index + 1}
                            </span>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </ComponentPreview>
        </div>

        {/* Size */}
        <div className="space-y-4">
          <div className="space-y-2">
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              Variable Width
            </h3>
            <p className="text-base text-muted-foreground leading-relaxed">
              Carousel items can have different widths by using the basis
              utility.
            </p>
          </div>
          <ComponentPreview name="carousel-size" code={webUsage}>
            <div className="flex items-center justify-center p-12">
              <Carousel
                opts={{
                  align: "start",
                }}
                className="w-full max-w-sm"
              >
                <CarouselContent>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem
                      key={index}
                      className="md:basis-1/2 lg:basis-1/3"
                    >
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex aspect-square items-center justify-center p-6">
                            <span className="text-3xl font-semibold">
                              {index + 1}
                            </span>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </ComponentPreview>
        </div>
      </motion.div>

      {/* Info Cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.35 }}
        className="grid gap-6 md:grid-cols-2"
      >
        <Card className="p-6 space-y-2 border-primary/10 bg-primary/2">
          <h4 className="font-semibold text-foreground">Smooth Interactions</h4>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Built with Embla Carousel on Web for high-performance touch
            gestures, and native paging on Expo/Flutter for that premium feel.
          </p>
        </Card>
        <Card className="p-6 space-y-2 border-primary/10 bg-primary/2">
          <h4 className="font-semibold text-foreground">Responsive Design</h4>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Easily adjust the number of visible items based on screen size using
            standard CSS or layout primitives.
          </p>
        </Card>
      </motion.div>

      {/* API Reference */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.4 }}
        className="space-y-4 text-pretty"
      >
        <h2
          id="api-reference"
          className="scroll-m-20 border-b border-border/50 pb-3 text-3xl font-semibold tracking-tight"
        >
          API Reference
        </h2>
        <div className="rounded-lg border border-border overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-muted/50">
                <tr className="border-b border-border">
                  <th className="py-3.5 px-4 font-semibold">Prop</th>
                  <th className="py-3.5 px-4 font-semibold">Type</th>
                  <th className="py-3.5 px-4 font-semibold">Default</th>
                  <th className="py-3.5 px-4 font-semibold">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr className="hover:bg-muted/30 transition-colors">
                  <td className="py-3.5 px-4 font-mono text-xs font-medium">
                    orientation
                  </td>
                  <td className="py-3.5 px-4 font-mono text-xs text-muted-foreground">
                    "horizontal" | "vertical"
                  </td>
                  <td className="py-3.5 px-4 font-mono text-xs text-muted-foreground">
                    "horizontal"
                  </td>
                  <td className="py-3.5 px-4 text-muted-foreground font-medium">
                    The scroll direction of the carousel.
                  </td>
                </tr>
                <tr className="hover:bg-muted/30 transition-colors">
                  <td className="py-3.5 px-4 font-mono text-xs font-medium">
                    opts
                  </td>
                  <td className="py-3.5 px-4 font-mono text-xs text-muted-foreground">
                    CarouselOptions
                  </td>
                  <td className="py-3.5 px-4 font-mono text-xs text-muted-foreground">
                    -
                  </td>
                  <td className="py-3.5 px-4 text-muted-foreground font-medium">
                    Configuration options for the underlying engine.
                  </td>
                </tr>
                <tr className="hover:bg-muted/30 transition-colors">
                  <td className="py-3.5 px-4 font-mono text-xs font-medium">
                    plugins
                  </td>
                  <td className="py-3.5 px-4 font-mono text-xs text-muted-foreground">
                    CarouselPlugin[]
                  </td>
                  <td className="py-3.5 px-4 font-mono text-xs text-muted-foreground">
                    -
                  </td>
                  <td className="py-3.5 px-4 text-muted-foreground font-medium">
                    Additional plugins for extended functionality (e.g.
                    Autoplay).
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
