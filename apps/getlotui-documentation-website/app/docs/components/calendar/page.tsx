"use client";

import * as React from "react";
import { Calendar } from "@/components/ui/calendar";
import { ComponentPreview } from "@/components/component-preview";
import { InstallationCommand } from "@/components/installation-command";
import { useFramework } from "@/context/framework-context";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

export default function CalendarDocs() {
  const { framework } = useFramework();
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  const expoUsage = `import { Calendar } from '@getlotui/expo'
import { useState } from 'react'

export default function MyComponent() {
  const [date, setDate] = useState(new Date())
  
  return (
    <Calendar 
      selected={date} 
      onSelect={setDate} 
    />
  )
}`;

  const flutterUsage = `CrossUICalendar(
  selectedDate: _selectedDate,
  onDateSelected: (date) {
    setState(() {
      _selectedDate = date;
    });
  },
)`;

  const webUsage = `import { Calendar } from "@/components/ui/calendar"

const [date, setDate] = React.useState<Date | undefined>(new Date())

return (
  <Calendar
    mode="single"
    selected={date}
    onSelect={setDate}
    className="rounded-md border shadow"
  />
)`;

  const webRangeUsage = `import { Calendar } from "@/components/ui/calendar"
import { DateRange } from "react-day-picker"

const [range, setRange] = React.useState<DateRange | undefined>()

return (
  <Calendar
    mode="range"
    selected={range}
    onSelect={setRange}
    className="rounded-md border shadow"
  />
)`;

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
            id="calendar"
            className="scroll-m-20 text-5xl font-bold tracking-tight"
          >
            Calendar
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
            A powerful date picker component supporting single dates, ranges,
            and custom rendering for all platforms.
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
              ? "getlotui add calendar"
              : "npx getlotui add calendar"
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
              Standard calendar with single date selection.
            </p>
          </div>
          <ComponentPreview name="calendar-demo" code={webUsage}>
            <div className="flex items-center justify-center p-8">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border shadow"
              />
            </div>
          </ComponentPreview>
        </div>

        {/* Range */}
        <div className="space-y-4">
          <div className="space-y-2">
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              Range Selection
            </h3>
            <p className="text-base text-muted-foreground leading-relaxed">
              Select a date range by setting the mode to "range".
            </p>
          </div>
          <ComponentPreview name="calendar-range" code={webRangeUsage}>
            <div className="flex items-center justify-center p-8">
              <Calendar mode="range" className="rounded-md border shadow" />
            </div>
          </ComponentPreview>
        </div>

        {/* Info Cards */}
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="p-6 space-y-2">
            <h4 className="font-semibold text-foreground">Event Selection</h4>
            <p className="text-sm text-muted-foreground">
              Perfect for booking systems or event planning where a user needs
              to pick a specific day.
            </p>
          </Card>
          <Card className="p-6 space-y-2">
            <h4 className="font-semibold text-foreground">
              Context Coordination
            </h4>
            <p className="text-sm text-muted-foreground">
              Often used inside Popovers or Dialogs to save space and provide a
              contextual date picker.
            </p>
          </Card>
        </div>
      </motion.div>

      {/* Customization */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.35 }}
        className="space-y-4"
      >
        <h2
          id="customization"
          className="scroll-m-20 border-b border-border/50 pb-3 text-3xl font-semibold tracking-tight"
        >
          Customization
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="space-y-2 border-r pr-6 last:border-0 last:pr-0">
            <h4 className="font-medium text-foreground">Theming</h4>
            <p className="text-sm text-muted-foreground leading-relaxed text-pretty">
              The Calendar respects your design system tokens. Colors for
              selected states, today, and headers are pulled from your core
              tokens.
            </p>
          </div>
          <div className="space-y-2 border-r pr-6 last:border-0 last:pr-0">
            <h4 className="font-medium text-foreground">Localization</h4>
            <p className="text-sm text-muted-foreground leading-relaxed text-pretty">
              Supports standard JavaScript Date localization on Web/Expo and
              Intl on Flutter for multi-language support.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="font-medium text-foreground">Accessibility</h4>
            <p className="text-sm text-muted-foreground leading-relaxed text-pretty">
              Keyboard navigation and screen reader support are baked in
              particularly on the Web via Radix UI primitives.
            </p>
          </div>
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
                    selected
                  </td>
                  <td className="py-3.5 px-4 font-mono text-xs text-muted-foreground">
                    Date | Date[] | undefined
                  </td>
                  <td className="py-3.5 px-4 font-mono text-xs text-muted-foreground">
                    undefined
                  </td>
                  <td className="py-3.5 px-4 text-muted-foreground">
                    The currently selected date(s).
                  </td>
                </tr>
                <tr className="hover:bg-muted/30 transition-colors">
                  <td className="py-3.5 px-4 font-mono text-xs font-medium">
                    onSelect
                  </td>
                  <td className="py-3.5 px-4 font-mono text-xs text-muted-foreground">
                    (date: Date) ={">"} void
                  </td>
                  <td className="py-3.5 px-4 font-mono text-xs text-muted-foreground">
                    -
                  </td>
                  <td className="py-3.5 px-4 text-muted-foreground">
                    Callback function called when a date is selected.
                  </td>
                </tr>
                <tr className="hover:bg-muted/30 transition-colors">
                  <td className="py-3.5 px-4 font-mono text-xs font-medium">
                    mode
                  </td>
                  <td className="py-3.5 px-4 font-mono text-xs text-muted-foreground">
                    "single" | "multiple" | "range"
                  </td>
                  <td className="py-3.5 px-4 font-mono text-xs text-muted-foreground">
                    "single"
                  </td>
                  <td className="py-3.5 px-4 text-muted-foreground">
                    Selection mode for the calendar.
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
