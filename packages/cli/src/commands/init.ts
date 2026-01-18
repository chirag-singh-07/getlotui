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
    const configPath = path.join(cwd, "getlotui.config.json");
    // Check if config already exists
    try {
      await fs.access(configPath);
      console.log(
        chalk.yellow("getlotui.config.json already exists. Skipping creation.")
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

class GetLotUITheme {
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
        chalk.green(`✓ Created ${defaultConfig.themeDir}/${themeFileName}`)
      );
    } catch (err) {
      console.warn(chalk.yellow("Could not create theme directory:"), err);
    }

    // For web projects, create lib/utils.ts
    if (adapter === "web") {
      try {
        const libDir = path.join(cwd, "lib");
        await fs.mkdir(libDir, { recursive: true });

        const utilsPath = path.join(libDir, "utils.ts");
        const utilsContent = `import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
`;
        await fs.writeFile(utilsPath, utilsContent, "utf8");
        console.log(chalk.green(`✓ Created lib/utils.ts`));
      } catch (err) {
        console.warn(chalk.yellow("Could not create lib/utils.ts:"), err);
      }

      // Install required dependencies
      console.log(chalk.blue("\n📦 Installing required dependencies..."));
      const { spawn } = await import("child_process");

      const dependencies = [
        "clsx",
        "tailwind-merge",
        "class-variance-authority",
      ];

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

      await new Promise<void>((resolve, reject) => {
        const proc = spawn(installCmd, installArgs, {
          cwd,
          stdio: "inherit",
          shell: true,
        });

        proc.on("close", (code) => {
          if (code === 0) {
            console.log(chalk.green(`✓ Dependencies installed successfully`));
            resolve();
          } else {
            console.warn(
              chalk.yellow(
                `⚠ Failed to install dependencies. Please run: ${installCmd} ${installArgs.join(
                  " "
                )}`
              )
            );
            resolve(); // Don't reject, just warn
          }
        });

        proc.on("error", (err) => {
          console.warn(
            chalk.yellow(
              `⚠ Could not install dependencies automatically: ${err.message}`
            )
          );
          console.log(
            chalk.blue(
              `Please run manually: ${installCmd} ${installArgs.join(" ")}`
            )
          );
          resolve(); // Don't reject, just warn
        });
      });
    }

    // For Expo projects, create utils/cn.ts
    if (adapter === "expo") {
      try {
        const utilsDir = path.join(cwd, "utils");
        await fs.mkdir(utilsDir, { recursive: true });

        const utilsPath = path.join(utilsDir, "cn.ts");
        const utilsContent = `import { StyleSheet } from "react-native";

/**
 * A utility to merge React Native styles.
 */
export function cn(...inputs: any[]) {
  return StyleSheet.flatten(inputs.filter(Boolean));
}
`;
        await fs.writeFile(utilsPath, utilsContent, "utf8");
        console.log(chalk.green(`✓ Created utils/cn.ts`));
      } catch (err) {
        console.warn(chalk.yellow("Could not create utils/cn.ts:"), err);
      }
    }

    // For Flutter projects, create lib/utils.dart
    if (adapter === "flutter") {
      try {
        const libDir = path.join(cwd, "lib");
        await fs.mkdir(libDir, { recursive: true });

        const utilsPath = path.join(libDir, "utils.dart");
        const utilsContent = `import 'package:flutter/material.dart';

class GetLotUIUtils {
  static TextStyle cnText(List<TextStyle?> styles) {
    TextStyle result = const TextStyle();
    for (var style in styles) {
      if (style != null) {
        result = result.merge(style);
      }
    }
    return result;
  }
}
`;
        await fs.writeFile(utilsPath, utilsContent, "utf8");
        console.log(chalk.green(`✓ Created lib/utils.dart`));
      } catch (err) {
        console.warn(chalk.yellow("Could not create lib/utils.dart:"), err);
      }
    }

    console.log(
      chalk.green(
        `\n✨ GetLotUI initialized with ${adapter} (${packageManager}) defaults.`
      )
    );
    console.log(chalk.blue(`\n📚 Next steps:`));
    console.log(chalk.white(`  1. Run: getlotui add <component>`));
    console.log(chalk.white(`  2. Import and use components in your app`));
  } catch (err) {
    console.error(chalk.red("Failed to initialize GetLotUI config:"), err);
  }
}
