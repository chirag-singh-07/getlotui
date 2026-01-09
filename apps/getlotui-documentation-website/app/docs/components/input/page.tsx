"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ComponentPreview } from "@/components/component-preview";
import { InstallationCommand } from "@/components/installation-command";
import { motion } from "framer-motion";
import { useState } from "react";

import { useFramework } from "@/context/framework-context";

export default function InputPage() {
  const { framework } = useFramework();
  const [showPassword, setShowPassword] = useState(false);

  const usageCode = `import { Input } from '@crossui/expo'

export default function MyComponent() {
  const [email, setEmail] = useState('')
  
  return (
    <Input 
      placeholder="Enter your email"
      value={email}
      onChangeText={setEmail}
    />
  )
}`;

  const flutterUsage = `CrossUIInput(\n  placeholder: "Enter your email",\n  onChanged: (val) => print(val),\n)`;

  const webUsage = `<Input \n  type="email" \n  placeholder="Enter your email" \n/>`;

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

  const formCode = `import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = () => {
    console.log('Login', { email, password })
  }

  return (
    <div style={{ gap: 16 }}>
      <Input
        type="email"
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <Input
        type="password"
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
      />
      <Button onPress={handleSubmit}>
        Sign in
      </Button>
    </div>
  )
}`;

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
            id="input"
            className="scroll-m-20 text-5xl font-bold tracking-tight"
          >
            Input
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
            Displays a form input field or a component that looks like an input
            field.
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
              ? "crossui add input"
              : "npx crossui add input"
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

        {/* Default */}
        <div className="space-y-4">
          <div className="space-y-2">
            <h3
              id="default"
              className="scroll-m-20 text-2xl font-semibold tracking-tight"
            >
              Default
            </h3>
            <p className="text-base text-muted-foreground leading-relaxed">
              A simple input field with placeholder text.
            </p>
          </div>
          <ComponentPreview
            name="input-default"
            code='<Input placeholder="Email" type="email" />'
          >
            <div className="w-full max-w-sm">
              <Input placeholder="Email" type="email" />
            </div>
          </ComponentPreview>
        </div>

        {/* Disabled */}
        <div className="space-y-4">
          <div className="space-y-2">
            <h3
              id="disabled"
              className="scroll-m-20 text-2xl font-semibold tracking-tight"
            >
              Disabled
            </h3>
            <p className="text-base text-muted-foreground leading-relaxed">
              Show a disabled state for the input field.
            </p>
          </div>
          <ComponentPreview
            name="input-disabled"
            code='<Input placeholder="Email" disabled />'
          >
            <div className="w-full max-w-sm">
              <Input placeholder="Email" disabled />
            </div>
          </ComponentPreview>
        </div>

        {/* Form Example */}
        <div className="space-y-4">
          <div className="space-y-2">
            <h3
              id="form-example"
              className="scroll-m-20 text-2xl font-semibold tracking-tight"
            >
              Form Example
            </h3>
            <p className="text-base text-muted-foreground leading-relaxed">
              A complete form with email and password inputs, demonstrating
              state management.
            </p>
          </div>
          <ComponentPreview name="input-form" code={formCode}>
            <div className="w-full max-w-sm space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium leading-none">
                  Email
                </label>
                <Input type="email" placeholder="m@example.com" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium leading-none">
                  Password
                </label>
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password"
                />
              </div>
              <Button className="w-full">Sign In</Button>
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
                    value
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
                    The input value
                  </td>
                </tr>
                <tr className="border-b border-border hover:bg-muted/30 transition-colors">
                  <td className="py-3.5 px-4 font-mono text-xs font-medium">
                    onChangeText
                  </td>
                  <td className="py-3.5 px-4">
                    <code className="text-xs font-mono bg-muted px-2 py-1 rounded">
                      {"(text: string) => void"}
                    </code>
                  </td>
                  <td className="py-3.5 px-4">
                    <code className="text-xs font-mono bg-muted px-2 py-1 rounded">
                      -
                    </code>
                  </td>
                  <td className="py-3.5 px-4 text-muted-foreground">
                    Callback when text changes
                  </td>
                </tr>
                <tr className="border-b border-border hover:bg-muted/30 transition-colors">
                  <td className="py-3.5 px-4 font-mono text-xs font-medium">
                    placeholder
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
                    Placeholder text
                  </td>
                </tr>
                <tr className="border-b border-border hover:bg-muted/30 transition-colors">
                  <td className="py-3.5 px-4 font-mono text-xs font-medium">
                    type
                  </td>
                  <td className="py-3.5 px-4">
                    <code className="text-xs font-mono bg-muted px-2 py-1 rounded">
                      'text' | 'email' | 'password' | 'search'
                    </code>
                  </td>
                  <td className="py-3.5 px-4">
                    <code className="text-xs font-mono bg-muted px-2 py-1 rounded">
                      'text'
                    </code>
                  </td>
                  <td className="py-3.5 px-4 text-muted-foreground">
                    The input type
                  </td>
                </tr>
                <tr className="border-b border-border hover:bg-muted/30 transition-colors">
                  <td className="py-3.5 px-4 font-mono text-xs font-medium">
                    disabled
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
                    Whether the input is disabled
                  </td>
                </tr>
                <tr className="hover:bg-muted/30 transition-colors">
                  <td className="py-3.5 px-4 font-mono text-xs font-medium">
                    className
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
                    Additional CSS classes
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
            The Input component follows accessibility best practices:
          </p>
          <ul className="space-y-2 text-base text-muted-foreground leading-relaxed">
            <li className="flex items-start gap-3">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2.5" />
              <span>Keyboard navigation with proper focus management</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2.5" />
              <span>Screen reader support with semantic HTML</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2.5" />
              <span>Clear disabled and error states</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2.5" />
              <span>Proper label association for form inputs</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2.5" />
              <span>Password visibility toggle for secure text entry</span>
            </li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
}
