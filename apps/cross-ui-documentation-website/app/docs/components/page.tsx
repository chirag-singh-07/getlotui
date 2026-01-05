import Link from "next/link"
import { Card } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

const components = [
  {
    name: "Button",
    href: "/docs/components/button",
    description: "Displays a button or a component that looks like a button.",
  },
  {
    name: "Input",
    href: "/docs/components/input",
    description: "Displays a form input field or a component that looks like an input field.",
  },
]

export default function ComponentsPage() {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none">
      <h1 className="text-4xl font-bold">Components</h1>
      <p className="text-lg text-muted-foreground">Beautiful, accessible components for your Expo apps.</p>

      <div className="not-prose grid gap-4 md:grid-cols-2 mt-8">
        {components.map((component) => (
          <Link key={component.name} href={component.href}>
            <Card className="p-6 hover:border-primary transition-colors cursor-pointer group">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">{component.name}</h3>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <p className="text-sm text-muted-foreground mt-2">{component.description}</p>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
