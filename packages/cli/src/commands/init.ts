import { promises as fs } from "fs";
import path from "path";
import chalk from "chalk";
import {
  detectExpoProject,
  detectFlutterProject,
  detectWebProject,
  detectPackageManager,
} from "../utils/detect";
import { installPackages } from "../utils/install";
import { setupWebStyles } from "../utils/styles";

export async function initCommand() {
  try {
    const cwd = process.cwd();
    const configPath = path.join(cwd, "getlotui.config.json");

    // Check if config already exists
    try {
      await fs.access(configPath);
      console.log(
        chalk.yellow("⚠ getlotui.config.json already exists. Skipping init."),
      );
      return;
    } catch {
      // file does not exist, continue
    }

    console.log(chalk.bold("\n🚀 Initializing GetLotUI...\n"));

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

    console.log(chalk.dim(`  Detected adapter:         ${adapter}`));
    console.log(chalk.dim(`  Detected package manager: ${packageManager}\n`));

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
      "utf8",
    );
    console.log(chalk.green("  ✔ Created getlotui.config.json"));

    // ── Theme directory ────────────────────────────────────────────────────
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
        chalk.green(`  ✔ Created ${defaultConfig.themeDir}/${themeFileName}`),
      );
    } catch (err) {
      console.warn(chalk.yellow("  ⚠ Could not create theme directory:"), err);
    }

    // ── Web setup ──────────────────────────────────────────────────────────
    if (adapter === "web") {
      // Create lib/utils.ts
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
        console.log(chalk.green("  ✔ Created lib/utils.ts"));
      } catch (err) {
        console.warn(chalk.yellow("  ⚠ Could not create lib/utils.ts:"), err);
      }

      // Install core dependencies
      console.log(chalk.blue("\n📦 Installing core dependencies..."));
      await installPackages(
        ["clsx", "tailwind-merge", "class-variance-authority"],
        cwd,
        packageManager,
      );

      // Auto-configure styles (globals.css + tailwind.config)
      await setupWebStyles(cwd);
    }

    // ── Expo setup ─────────────────────────────────────────────────────────
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
        console.log(chalk.green("  ✔ Created utils/cn.ts"));
      } catch (err) {
        console.warn(chalk.yellow("  ⚠ Could not create utils/cn.ts:"), err);
      }
    }

    // ── Flutter setup ──────────────────────────────────────────────────────
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
        console.log(chalk.green("  ✔ Created lib/utils.dart"));
      } catch (err) {
        console.warn(chalk.yellow("  ⚠ Could not create lib/utils.dart:"), err);
      }
    }

    // ── Done ───────────────────────────────────────────────────────────────
    console.log(
      chalk.bold.green(
        `\n✨ GetLotUI initialized successfully! (${adapter} · ${packageManager})\n`,
      ),
    );
    console.log(chalk.blue("📚 Next steps:"));
    console.log(chalk.white("  1. Run: getlotui add <component>"));
    console.log(chalk.white("  2. Import and use components in your app\n"));
  } catch (err) {
    console.error(chalk.red("\n❌ Failed to initialize GetLotUI:"), err);
  }
}
