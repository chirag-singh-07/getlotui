import { promises as fs } from "fs";
import path from "path";
import chalk from "chalk";
import { copyComponent } from "../utils/fs";
import { getComponentDependencies } from "../utils/dependencies";
import { installPackages } from "../utils/install";

export async function addCommand(component: string) {
  try {
    const cwd = process.cwd();
    const configPath = path.join(cwd, "getlotui.config.json");

    // Ensure config exists
    let config: {
      adapter: string;
      packageManager: "npm" | "pnpm" | "yarn" | "bun";
      componentsDir?: string;
    };
    try {
      const configContent = await fs.readFile(configPath, "utf8");
      config = JSON.parse(configContent);
    } catch {
      console.error(
        chalk.red(
          "\n❌ getlotui.config.json not found. Run `getlotui init` first.\n",
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
        chalk.red(
          `\n❌ Component "${componentName}" not found for ${adapter}.\n`,
        ),
      );
      console.log(
        chalk.blue(
          "📚 Available components: Button, Input, Card, Badge, Avatar, Alert, AlertDialog, Accordion, Dropdown, Tabs, Toast, Carousel, Calendar, Breadcrumb, ButtonGroup, AspectRatio\n",
        ),
      );
      return;
    }

    // Copy the component file
    await copyComponent(
      templatePath,
      path.join(componentsDir, `${componentName}.${extension}`),
    );
    console.log(
      chalk.green(`  ✔ Component ${componentName} added to ${componentsDir}`),
    );

    // Install component-specific dependencies for web projects
    if (adapter === "web") {
      const dependencies = getComponentDependencies(componentName);

      if (dependencies.length > 0) {
        console.log(chalk.blue("\n📦 Installing component dependencies..."));
        await installPackages(dependencies, cwd, packageManager);
      }
    }

    // Usage hint
    console.log(
      chalk.blue(
        `\n💡 Import: import { ${componentName} } from '@/components/ui/${componentName}'\n`,
      ),
    );
  } catch (err) {
    console.error(chalk.red("\n❌ Failed to add component:"), err);
  }
}
