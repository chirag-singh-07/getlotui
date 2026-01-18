import { Toaster } from "@/components/ui/sonner";
import { Toaster as DefaultToaster } from "@/components/ui/toaster";
import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | GetLotUI",
    default: "GetLotUI - Cross-language design system",
  },
  description:
    "A cross-language, theme-driven design system inspired by shadcn/ui",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

import { FrameworkProvider } from "../context/framework-context";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans antialiased`}>
        <FrameworkProvider>{children}</FrameworkProvider>
        <Toaster />
        <DefaultToaster />
        <Analytics />
      </body>
    </html>
  );
}
