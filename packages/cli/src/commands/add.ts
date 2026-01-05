import { promises as fs } from "fs";
import path from "path";
import chalk from "chalk";
import { copyComponent } from "../utils/fs";

export async function addCommand(component: string) {
  try {
    const cwd = process.cwd();
    const configPath = path.join(cwd, "crossui.config.json");
    // Ensure config exists
    let config;
    try {
      const configContent = await fs.readFile(configPath, "utf8");
      config = JSON.parse(configContent);
    } catch {
      console.error(
        chalk.red("crossui.config.json not found. Run `crossui init` first.")
      );
      return;
    }

    const adapter = config.adapter || "expo";
    const extension = adapter === "flutter" ? "dart" : "tsx";
    const componentsDir = path.resolve(
      cwd,
      config.componentsDir ||
        (adapter === "flutter" ? "lib/components/ui" : "components/ui")
    );

    const componentName =
      component.charAt(0).toUpperCase() + component.slice(1);
    const templatePath = path.resolve(
      __dirname,
      "..",
      "templates",
      adapter,
      `${componentName}.${extension}`
    );

    await copyComponent(
      templatePath,
      path.join(componentsDir, `${componentName}.${extension}`)
    );
    console.log(
      chalk.green(`Component ${componentName} added to ${componentsDir}`)
    );
  } catch (err) {
    console.error(chalk.red("Failed to add component:"), err);
  }
}
