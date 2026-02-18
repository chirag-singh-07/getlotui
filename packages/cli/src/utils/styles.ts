import { promises as fs } from "fs";
import path from "path";
import chalk from "chalk";

// ─── CSS Variables (design tokens) ───────────────────────────────────────────

const CSS_VARIABLES = `
/* GetLotUI Design Tokens */
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --card: 0 0% 100%;
  --card-foreground: 222.2 84% 4.9%;
  --popover: 0 0% 100%;
  --popover-foreground: 222.2 84% 4.9%;
  --primary: 239 84% 67%;
  --primary-foreground: 210 40% 98%;
  --secondary: 210 40% 96.1%;
  --secondary-foreground: 222.2 47.4% 11.2%;
  --muted: 210 40% 96.1%;
  --muted-foreground: 215.4 16.3% 46.9%;
  --accent: 210 40% 96.1%;
  --accent-foreground: 222.2 47.4% 11.2%;
  --destructive: 0 84.2% 60.2%;
  --destructive-foreground: 210 40% 98%;
  --border: 214.3 31.8% 91.4%;
  --input: 214.3 31.8% 91.4%;
  --ring: 239 84% 67%;
  --radius: 0.5rem;
}

.dark {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  --card: 222.2 84% 4.9%;
  --card-foreground: 210 40% 98%;
  --popover: 222.2 84% 4.9%;
  --popover-foreground: 210 40% 98%;
  --primary: 239 84% 67%;
  --primary-foreground: 222.2 47.4% 11.2%;
  --secondary: 217.2 32.6% 17.5%;
  --secondary-foreground: 210 40% 98%;
  --muted: 217.2 32.6% 17.5%;
  --muted-foreground: 215 20.2% 65.1%;
  --accent: 217.2 32.6% 17.5%;
  --accent-foreground: 210 40% 98%;
  --destructive: 0 62.8% 30.6%;
  --destructive-foreground: 210 40% 98%;
  --border: 217.2 32.6% 17.5%;
  --input: 217.2 32.6% 17.5%;
  --ring: 239 84% 67%;
}

* {
  border-color: hsl(var(--border));
}

body {
  background-color: hsl(var(--background));
  color: hsl(var(--foreground));
}
`;

const TAILWIND_DIRECTIVES = `@tailwind base;
@tailwind components;
@tailwind utilities;
`;

// ─── Globals CSS Detection ────────────────────────────────────────────────────

/**
 * Search common locations for globals.css in a Next.js / Vite project.
 */
export async function findGlobalsCss(cwd: string): Promise<string | null> {
  const candidates = [
    "app/globals.css",
    "src/app/globals.css",
    "styles/globals.css",
    "src/styles/globals.css",
    "styles/global.css",
    "src/styles/global.css",
    "app/global.css",
    "src/app/global.css",
  ];

  for (const candidate of candidates) {
    const full = path.join(cwd, candidate);
    try {
      await fs.access(full);
      return full;
    } catch {
      // not found, try next
    }
  }
  return null;
}

// ─── Tailwind Directives Injection ───────────────────────────────────────────

/**
 * Prepend @tailwind directives to globals.css if they are not already present.
 * This is idempotent — safe to call multiple times.
 */
export async function injectTailwindDirectives(
  cssPath: string,
): Promise<boolean> {
  const content = await fs.readFile(cssPath, "utf8");

  if (content.includes("@tailwind base")) {
    // Already set up
    return false;
  }

  await fs.writeFile(cssPath, TAILWIND_DIRECTIVES + "\n" + content, "utf8");
  return true;
}

// ─── CSS Variables Injection ──────────────────────────────────────────────────

/**
 * Append GetLotUI CSS variables to globals.css if not already present.
 * This is idempotent — safe to call multiple times.
 */
export async function injectCssVariables(cssPath: string): Promise<boolean> {
  const content = await fs.readFile(cssPath, "utf8");

  if (
    content.includes("--primary:") ||
    content.includes("GetLotUI Design Tokens")
  ) {
    // Already injected
    return false;
  }

  await fs.writeFile(cssPath, content + "\n" + CSS_VARIABLES, "utf8");
  return true;
}

// ─── Tailwind Config Patching ─────────────────────────────────────────────────

/**
 * Find the tailwind config file in the project root.
 */
async function findTailwindConfig(cwd: string): Promise<string | null> {
  const candidates = [
    "tailwind.config.ts",
    "tailwind.config.js",
    "tailwind.config.mjs",
    "tailwind.config.cjs",
  ];
  for (const c of candidates) {
    const full = path.join(cwd, c);
    try {
      await fs.access(full);
      return full;
    } catch {
      // continue
    }
  }
  return null;
}

/**
 * Patch the tailwind config to include GetLotUI component paths in `content`.
 * Works for both JS and TS configs. This is idempotent.
 */
export async function patchTailwindConfig(cwd: string): Promise<boolean> {
  const configPath = await findTailwindConfig(cwd);

  if (!configPath) {
    // No tailwind config found — create a minimal one
    const minimalConfig = `/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [],
};
`;
    await fs.writeFile(
      path.join(cwd, "tailwind.config.js"),
      minimalConfig,
      "utf8",
    );
    return true;
  }

  const content = await fs.readFile(configPath, "utf8");

  // Already has our component path
  if (content.includes("components/ui")) {
    return false;
  }

  // Patch: add "./components/ui/**/*.{ts,tsx}" to the content array
  const patched = content.replace(
    /content\s*:\s*\[/,
    `content: [\n    "./components/ui/**/*.{ts,tsx}",`,
  );

  if (patched === content) {
    // Could not patch automatically
    return false;
  }

  await fs.writeFile(configPath, patched, "utf8");
  return true;
}

// ─── Main Entry Point ─────────────────────────────────────────────────────────

/**
 * Run all style setup steps for a web project.
 * Called by `init.ts` after dependency installation.
 */
export async function setupWebStyles(cwd: string): Promise<void> {
  console.log(chalk.blue("\n🎨 Configuring styles..."));

  // 1. Find globals.css
  let cssPath = await findGlobalsCss(cwd);

  if (!cssPath) {
    // Create one at app/globals.css (Next.js default)
    const appDir = path.join(cwd, "app");
    try {
      await fs.mkdir(appDir, { recursive: true });
    } catch {
      // already exists
    }
    cssPath = path.join(appDir, "globals.css");
    await fs.writeFile(cssPath, "", "utf8");
    console.log(chalk.green("  ✔ Created app/globals.css"));
  }

  // 2. Inject @tailwind directives
  const addedDirectives = await injectTailwindDirectives(cssPath);
  if (addedDirectives) {
    console.log(chalk.green("  ✔ Added @tailwind directives to globals.css"));
  } else {
    console.log(chalk.dim("  · @tailwind directives already present"));
  }

  // 3. Inject CSS variables
  const addedVars = await injectCssVariables(cssPath);
  if (addedVars) {
    console.log(
      chalk.green("  ✔ Injected GetLotUI CSS variables into globals.css"),
    );
  } else {
    console.log(chalk.dim("  · CSS variables already present"));
  }

  // 4. Patch tailwind.config
  const patchedConfig = await patchTailwindConfig(cwd);
  if (patchedConfig) {
    console.log(
      chalk.green("  ✔ Patched tailwind.config to include components/ui"),
    );
  } else {
    console.log(
      chalk.dim("  · tailwind.config already includes components/ui"),
    );
  }
}
