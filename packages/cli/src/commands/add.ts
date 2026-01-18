import { promises as fs } from "fs";
import path from "path";
import chalk from "chalk";
import { copyComponent } from "../utils/fs";
import { getComponentDependencies } from "../utils/dependencies";

export async function addCommand(component: string) {
  try {
    const cwd = process.cwd();
    const configPath = path.join(cwd, "getlotui.config.json");
    // Ensure config exists
    let config;
    try {
      const configContent = await fs.readFile(configPath, "utf8");
      config = JSON.parse(configContent);
    } catch {
      console.error(
        chalk.red(
          "❌ getlotui.config.json not found. Run `getlotui init` first.",
        ),
      );
      return;
    }

    const adapter = config.adapter || "expo";
    const packageManager = config.packageManager || "npm";
    const extension = adapter === "flutter" ? "dart" : "tsx";
    const componentsDir = path.resolve(
      cwd,
      config.componentsDir ||
        (adapter === "flutter" ? "lib/components/ui" : "components/ui"),
    );

    const componentName =
      component.charAt(0).toUpperCase() + component.slice(1);
    const templatePath = path.resolve(
      __dirname,
      "..",
      "templates",
      adapter,
      `${componentName}.${extension}`,
    );

    // Check if template exists
    try {
      await fs.access(templatePath);
    } catch {
      console.error(
        chalk.red(`❌ Component "${componentName}" not found for ${adapter}.`),
      );
      console.log(
        chalk.blue(
          `\n📚 Available components: Button, Input, Card, Badge, Avatar, Alert, AlertDialog, Accordion, Dropdown, Tabs, Toast, Carousel, Calendar, Breadcrumb, ButtonGroup, AspectRatio`,
        ),
      );
      return;
    }

    await copyComponent(
      templatePath,
      path.join(componentsDir, `${componentName}.${extension}`),
    );
    console.log(
      chalk.green(`✓ Component ${componentName} added to ${componentsDir}`),
    );

    // Install component-specific dependencies for web projects
    if (adapter === "web") {
      const dependencies = getComponentDependencies(componentName);

      if (dependencies.length > 0) {
        console.log(
          chalk.blue(
            `\n📦 Installing dependencies: ${dependencies.join(", ")}...`,
          ),
        );

        const { spawn } = await import("child_process");

        const installCmd =
          packageManager === "yarn"
            ? "yarn"
            : packageManager === "pnpm"
              ? "pnpm"
              : "npm";

        const installArgs =
          packageManager === "yarn"
            ? ["add", ...dependencies]
            : packageManager === "pnpm"
              ? ["add", ...dependencies]
              : ["install", ...dependencies];

        await new Promise<void>((resolve) => {
          const proc = spawn(installCmd, installArgs, {
            cwd,
            stdio: "inherit",
            shell: true,
          });

          proc.on("close", (code) => {
            if (code === 0) {
              console.log(chalk.green(`✓ Dependencies installed successfully`));
            } else {
              console.warn(
                chalk.yellow(
                  `⚠ Failed to install dependencies. Please run: ${installCmd} ${installArgs.join(
                    " ",
                  )}`,
                ),
              );
            }
            resolve();
          });

          proc.on("error", (err) => {
            console.warn(
              chalk.yellow(`⚠ Could not install dependencies: ${err.message}`),
            );
            console.log(
              chalk.blue(
                `Please run manually: ${installCmd} ${installArgs.join(" ")}`,
              ),
            );
            resolve();
          });
        });
      }
    }

    // Provide usage hint
    console.log(
      chalk.blue(
        `\n💡 Import it with: import { ${componentName} } from '@/components/ui/${componentName}'`,
      ),
    );
  } catch (err) {
    console.error(chalk.red("❌ Failed to add component:"), err);
  }
}
