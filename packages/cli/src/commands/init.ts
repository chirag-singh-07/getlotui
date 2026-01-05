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
      themeDir: adapter === "flutter" ? "lib/theme" : "theme",
    };

    await fs.writeFile(
      configPath,
      JSON.stringify(defaultConfig, null, 2),
      "utf8"
    );

    // Create theme directory
    const fullThemeDir = path.join(cwd, defaultConfig.themeDir);
    try {
      await fs.mkdir(fullThemeDir, { recursive: true });
      const isFlutter = adapter === "flutter";
      const themeFileName = isFlutter ? "config.dart" : "config.ts";
      const themeFilePath = path.join(fullThemeDir, themeFileName);

      const themeContent = isFlutter
        ? `import 'package:flutter/material.dart';

class CrossUITheme {
  static const colors = {
    'primary': Color(0xFF6366F1),
    'background': Color(0xFFFFFFFF),
    'foreground': Color(0xFF0F172A),
  };
  
  static const radius = {
    'sm': 4.0,
    'md': 8.0,
    'lg': 12.0,
  };
}`
        : `export const theme = {
  colors: {
    primary: '#6366f1',
    background: '#ffffff',
    foreground: '#0f172a',
  },
  radius: {
    sm: 4,
    md: 8,
    lg: 12,
  },
  spacing: {
    unit: 8,
  }
};`;

      await fs.writeFile(themeFilePath, themeContent, "utf8");
      console.log(
        chalk.green(`Created ${defaultConfig.themeDir}/${themeFileName}`)
      );
    } catch (err) {
      console.warn(chalk.yellow("Could not create theme directory:"), err);
    }

    console.log(
      chalk.green(
        `Created crossui.config.json with ${adapter} (${packageManager}) defaults.`
      )
    );
  } catch (err) {
    console.error(chalk.red("Failed to initialize CrossUI config:"), err);
  }
}
