import { spawn } from "child_process";
import chalk from "chalk";

/**
 * Resolve the correct binary name for the package manager.
 * On Windows, npm/pnpm/yarn are .cmd files, so we need the .cmd extension
 * when NOT using shell:true. This avoids the [DEP0190] deprecation warning.
 */
function resolveBin(pm: string): string {
  const isWindows = process.platform === "win32";
  const bins: Record<string, string> = {
    npm: isWindows ? "npm.cmd" : "npm",
    pnpm: isWindows ? "pnpm.cmd" : "pnpm",
    yarn: isWindows ? "yarn.cmd" : "yarn",
    bun: isWindows ? "bun.exe" : "bun",
  };
  return bins[pm] ?? pm;
}

/**
 * Build the install arguments for a given package manager.
 * For npm, we add flags to suppress audit, funding, and progress noise.
 */
function buildInstallArgs(pm: string, packages: string[]): string[] {
  if (pm === "yarn") {
    return ["add", ...packages];
  }
  if (pm === "pnpm") {
    return ["add", ...packages];
  }
  if (pm === "bun") {
    return ["add", ...packages];
  }
  // npm — suppress all the noise
  return [
    "install",
    ...packages,
    "--loglevel=error",
    "--no-fund",
    "--no-audit",
    "--prefer-offline",
  ];
}

/**
 * A simple inline spinner that writes to stdout.
 */
function createSpinner(label: string) {
  const frames = ["⠋", "⠙", "⠹", "⠸", "⠼", "⠴", "⠦", "⠧", "⠇", "⠏"];
  let i = 0;
  const interval = setInterval(() => {
    process.stdout.write(
      `\r${chalk.cyan(frames[i++ % frames.length])} ${label}`,
    );
  }, 80);
  return {
    succeed(msg: string) {
      clearInterval(interval);
      process.stdout.write(`\r${chalk.green("✔")} ${msg}\n`);
    },
    fail(msg: string) {
      clearInterval(interval);
      process.stdout.write(`\r${chalk.red("✖")} ${msg}\n`);
    },
  };
}

/**
 * Install packages using the detected package manager.
 * - No shell:true  → avoids [DEP0190] deprecation warning
 * - stdio: pipe    → captures npm output; only shows it on failure
 * - npm flags      → suppresses audit/funding/progress noise
 *
 * @returns true if install succeeded, false otherwise
 */
export async function installPackages(
  packages: string[],
  cwd: string,
  pm: "npm" | "pnpm" | "yarn" | "bun" = "npm",
): Promise<boolean> {
  const bin = resolveBin(pm);
  const args = buildInstallArgs(pm, packages);
  const label = `Installing ${packages.join(", ")}`;

  const spinner = createSpinner(label);

  return new Promise<boolean>((resolve) => {
    let stderrOutput = "";

    const proc = spawn(bin, args, {
      cwd,
      // Do NOT use shell: true — that triggers [DEP0190]
      shell: false,
      stdio: ["ignore", "ignore", "pipe"],
    });

    proc.stderr?.on("data", (chunk: Buffer) => {
      stderrOutput += chunk.toString();
    });

    proc.on("close", (code) => {
      if (code === 0) {
        spinner.succeed(`Dependencies installed`);
        resolve(true);
      } else {
        spinner.fail(`Failed to install dependencies`);
        // Only show stderr if there's something meaningful
        const filtered = stderrOutput
          .split("\n")
          .filter(
            (line) =>
              line.trim() &&
              !line.includes("npm warn") &&
              !line.includes("npm notice") &&
              !line.toLowerCase().includes("funding"),
          )
          .join("\n")
          .trim();
        if (filtered) {
          console.error(chalk.dim(filtered));
        }
        console.log(
          chalk.yellow(
            `  Run manually: ${pm} ${pm === "npm" ? "install" : "add"} ${packages.join(" ")}`,
          ),
        );
        resolve(false);
      }
    });

    proc.on("error", (err) => {
      spinner.fail(`Could not run ${pm}`);
      console.log(
        chalk.yellow(
          `  Run manually: ${pm} ${pm === "npm" ? "install" : "add"} ${packages.join(" ")}`,
        ),
      );
      console.error(chalk.dim(err.message));
      resolve(false);
    });
  });
}
