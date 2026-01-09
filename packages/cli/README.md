# GetLotUI

[![npm version](https://img.shields.io/npm/v/getlotui.svg)](https://www.npmjs.com/package/getlotui)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Downloads](https://img.shields.io/npm/dm/getlotui.svg)](https://www.npmjs.com/package/getlotui)

**The Unified, Token-Driven Design System for Every Platform.**

**GetLotUI** is not a UI library you install. It's a tool that **scaffolds** customizable, source-code components directly into your project. Inspired by shadcn/ui, but built for the multi-platform era.

- ✅ **Expo / React Native** (First-class support)
- 🚧 **Flutter** (Beta)
- 🚧 **Web** (Alpha)

---

## 🚀 Quick Start

No installation required. Just use `npx`:

### 1. Initialize
Run this in your project root to set up the theme and configuration:

```bash
npx getlotui init
```

### 2. Add Components
Pick the components you need. They will be copied to your `components/ui` folder:

```bash
npx getlotui add button card input
```

---

## 💻 Usage

Once added, the component is **yours**. Import it like any other file in your project:

```tsx
import { Button } from '@/components/ui/Button';

export default function App() {
  return (
    <Button 
      variant="primary" 
      size="lg" 
      onPress={() => console.log('Hello GetLotUI')} 
    >
      Click Me
    </Button>
  );
}
```

## 🎨 Why Source Code?

1.  **No Vendor Lock-in**: You own the code. If we disappear tomorrow, your app keeps working.
2.  **Ultimate Customization**: Want to change the animation curve? Go to `components/ui/Button.tsx` and change it.
3.  **Zero Bloat**: Only include the components you actually use.

## 📐 Architecture

GetLotUI separates **Design Intent** from **Platform Implementation**. This ensures that your brand identity remains consistent even if you change your tech stack.

```text
    ┌───────────────────────┐
    │ Core Tokens JSON/TS   │
    └───────────┬───────────┘
                │
                ▼
       ┌─────────────────┐
       │    CLI Engine   │
       └────────┬────────┘
                │
        ┌───────┼───────┐
        │       │       │
        ▼       ▼       ▼
    ┌───────┐┌───────┐┌─────────┐
    │  Web  ││ Expo  ││ Flutter │
    └───────┘└───────┘└─────────┘
```

## 🛠 Commands

| Command | Description |
| :--- | :--- |
| `init` | Initialize configuration and base design tokens |
| `add [components...]` | Add one or more components to your project |
| `list` | List all available components |

## 🔗 Documentation

Visit our documentation website for detailed guides, component previews, and theming instructions.

[**Read the Docs →**](https://getlotui.vercel.app)

## 📄 License

MIT © [Chirag Singh](https://github.com/chirag-singh-07)
