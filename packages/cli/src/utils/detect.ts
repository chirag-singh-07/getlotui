import fs from "fs";
import path from "path";

/**
 * Detect if the current project is an Expo project.
 * Checks for presence of `expo` dependency in package.json
 * or existence of `app.json` / `app.config.js`.
 */
export async function detectExpoProject(cwd: string): Promise<boolean> {
  // Check package.json dependencies
  try {
    const pkgPath = path.join(cwd, "package.json");
    const pkgContent = await fs.promises.readFile(pkgPath, "utf8");
    const pkg = JSON.parse(pkgContent);
    const deps = {
      ...(pkg.dependencies || {}),
      ...(pkg.devDependencies || {}),
    };
    if (deps["expo"]) return true;
  } catch {
    // ignore errors, continue detection
  }

  // Check for app.json or app.config.js
  const possibleFiles = ["app.json", "app.config.js", "app.config.ts"];
  for (const file of possibleFiles) {
    if (fs.existsSync(path.join(cwd, file))) return true;
  }
  return false;
}

/**
 * Detect if the current project is a Flutter project.
 * Checks for existence of `pubspec.yaml`.
 */
export async function detectFlutterProject(cwd: string): Promise<boolean> {
  return fs.existsSync(path.join(cwd, "pubspec.yaml"));
}

/**
 * Detect if the current project is a Web project (React/Next.js/Vite).
 */
export async function detectWebProject(cwd: string): Promise<boolean> {
  const possibleFiles = [
    "next.config.js",
    "next.config.ts",
    "vite.config.js",
    "vite.config.ts",
    "package.json",
  ];
  for (const file of possibleFiles) {
    if (fs.existsSync(path.join(cwd, file))) {
      if (file === "package.json") {
        try {
          const pkg = JSON.parse(fs.readFileSync(path.join(cwd, file), "utf8"));
          const deps = {
            ...(pkg.dependencies || {}),
            ...(pkg.devDependencies || {}),
          };
          return !!(deps["next"] || deps["react-dom"] || deps["vite"]);
        } catch {
          return false;
        }
      }
      return true;
    }
  }
  return false;
}

/**
 * Detect the package manager used in the current directory.
 */
export async function detectPackageManager(
  cwd: string
): Promise<"npm" | "pnpm" | "yarn" | "bun"> {
  if (fs.existsSync(path.join(cwd, "pnpm-lock.yaml"))) return "pnpm";
  if (fs.existsSync(path.join(cwd, "yarn.lock"))) return "yarn";
  if (fs.existsSync(path.join(cwd, "bun.lockb"))) return "bun";
  return "npm";
}
