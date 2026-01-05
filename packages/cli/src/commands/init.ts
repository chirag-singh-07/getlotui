import { promises as fs } from "fs";
import path from "path";
import chalk from "chalk";
import {
  detectExpoProject,
  detectFlutterProject,
  detectWebProject,
  detectPackageManager,
} from "../utils/detect";

export async function initCommand() {
  try {
    const cwd = process.cwd();
    const configPath = path.join(cwd, "crossui.config.json");
    // Check if config already exists
    try {
      await fs.access(configPath);
      console.log(
        chalk.yellow("crossui.config.json already exists. Skipping creation.")
      );
      return;
    } catch {
      // file does not exist, continue
    }

    // Detect adapter
    let adapter: string = "unknown";
    if (await detectExpoProject(cwd)) {
      adapter = "expo";
    } else if (await detectFlutterProject(cwd)) {
      adapter = "flutter";
    } else if (await detectWebProject(cwd)) {
      adapter = "web";
    }
    // Detect package manager
    const packageManager = await detectPackageManager(cwd);

    const defaultConfig = {
      adapter,
      packageManager,
      componentsDir:
        adapter === "flutter" ? "lib/components/ui" : "components/ui",
    };
    await fs.writeFile(
      configPath,
      JSON.stringify(defaultConfig, null, 2),
      "utf8"
    );
    console.log(
      chalk.green(
        `Created crossui.config.json with ${adapter} (${packageManager}) defaults.`
      )
    );
  } catch (err) {
    console.error(chalk.red("Failed to initialize CrossUI config:"), err);
  }
}
