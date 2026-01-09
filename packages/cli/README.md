# Getting Started with GetLotUI

GetLotUI is a component scaffolding tool that copies customizable, source-code components directly into your project. It is designed to work seamlessly with Expo and React Native applications.

## Prerequisites

- **Node.js** (v18 or higher)
- An existing **Expo** project (managed or bare workflow)

## Installation

You don't need to install GetLotUI globally. You can use it directly via `npx`.

However, if you prefer to install it as a dev dependency in your project:

```bash
pnpm add -D getlotui
# or
npm install -D getlotui
# or
yarn add -D getlotui
```

## Initialization

Run the `init` command to set up GetLotUI in your project. This will create a `getlotui.config.json` file in your root directory.

```bash
npx getlotui init
```

The CLI will:
1. Detect your project type (e.g., Expo).
2. Create `getlotui.config.json` with default settings:

```json
{
  "adapter": "expo",
  "componentsDir": "components/ui"
}
```

## Adding Components

Once initialized, you can add components to your project. Use the `add` command followed by the component name.

```bash
npx getlotui add button
npx getlotui add input
```

This will:
1. Download/Copy the component source code to your configured `componentsDir` (default: `components/ui`).
2. Add any necessary utility files (if applicable in future updates).

Now you can import and use the component in your app:

```tsx
import { Button } from '@/components/ui/Button';

export default function App() {
  return (
    <Button title="Click Me" onPress={() => console.log('Pressed')} variant="primary" />
  );
}
```

## Customization

Since GetLotUI copies the **source code** into your project, you have full control.
- Open `components/ui/Button.tsx`.
- Modify styles, props, or behavior to match your design system.
- No vendor lock-in; it's your code now!

## Troubleshooting

- **"getlotui.config.json not found"**: Run `npx getlotui init` first.
- **"Component already exists"**: The CLI won't overwrite existing files to prevent data loss. Rename your existing file or delete it if you want to replace it.
