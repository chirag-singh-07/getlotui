"use client"

import type React from "react"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Check, Copy, Terminal } from "lucide-react"
import { motion } from "framer-motion"

interface ComponentPreviewProps {
  name: string
  children: React.ReactNode
  code: string
  showCopy?: boolean
  className?: string
}

export function ComponentPreview({ name, children, code, showCopy = true, className = "" }: ComponentPreviewProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <Tabs defaultValue="preview" className="w-full">
      <div className="flex items-center justify-between mb-3">
        <TabsList className="grid w-[200px] grid-cols-2">
          <TabsTrigger value="preview" className="text-xs">
            Preview
          </TabsTrigger>
          <TabsTrigger value="code" className="text-xs">
            Code
          </TabsTrigger>
        </TabsList>
      </div>
      <TabsContent value="preview" className="mt-0">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className={`relative rounded-lg border border-border bg-background p-8 ${className}`}
        >
          <div className="flex items-center justify-center min-h-[200px]">{children}</div>
        </motion.div>
      </TabsContent>
      <TabsContent value="code" className="mt-0">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="relative"
        >
          <div className="rounded-lg border border-border bg-muted/30 overflow-hidden">
            <div className="flex items-center justify-between px-4 py-2 border-b border-border bg-muted/50">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Terminal className="h-3 w-3" />
                <span className="font-mono">{name}.tsx</span>
              </div>
              {showCopy && (
                <Button size="sm" variant="ghost" className="h-7 px-2" onClick={copyToClipboard}>
                  {copied ? (
                    <>
                      <Check className="h-3 w-3 mr-1" />
                      <span className="text-xs">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3 w-3 mr-1" />
                      <span className="text-xs">Copy</span>
                    </>
                  )}
                </Button>
              )}
            </div>
            <pre className="p-4 overflow-x-auto">
              <code className="text-sm font-mono leading-relaxed">{code}</code>
            </pre>
          </div>
        </motion.div>
      </TabsContent>
    </Tabs>
  )
}
