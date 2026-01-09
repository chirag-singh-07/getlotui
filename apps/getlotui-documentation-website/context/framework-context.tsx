"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Framework = "expo" | "flutter" | "web" | "swift";
export type PackageManager = "npm" | "pnpm" | "yarn" | "bun";

interface FrameworkContextType {
  framework: Framework;
  setFramework: (framework: Framework) => void;
  packageManager: PackageManager;
  setPackageManager: (pm: PackageManager) => void;
}

const FrameworkContext = createContext<FrameworkContextType | undefined>(
  undefined
);

export function FrameworkProvider({ children }: { children: React.ReactNode }) {
  const [framework, setFrameworkState] = useState<Framework>("expo");
  const [packageManager, setPackageManagerState] =
    useState<PackageManager>("npm");

  // Load from localStorage on mount
  useEffect(() => {
    const savedFramework = localStorage.getItem(
      "crossui-framework"
    ) as Framework;
    if (
      savedFramework &&
      ["expo", "flutter", "web", "swift"].includes(savedFramework)
    ) {
      setFrameworkState(savedFramework);
    }

    const savedPM = localStorage.getItem("crossui-pm") as PackageManager;
    if (savedPM && ["npm", "pnpm", "yarn", "bun"].includes(savedPM)) {
      setPackageManagerState(savedPM);
    }
  }, []);

  const setFramework = (f: Framework) => {
    setFrameworkState(f);
    localStorage.setItem("crossui-framework", f);
  };

  const setPackageManager = (pm: PackageManager) => {
    setPackageManagerState(pm);
    localStorage.setItem("crossui-pm", pm);
  };

  return (
    <FrameworkContext.Provider
      value={{ framework, setFramework, packageManager, setPackageManager }}
    >
      {children}
    </FrameworkContext.Provider>
  );
}

export function useFramework() {
  const context = useContext(FrameworkContext);
  if (context === undefined) {
    throw new Error("useFramework must be used within a FrameworkProvider");
  }
  return context;
}
