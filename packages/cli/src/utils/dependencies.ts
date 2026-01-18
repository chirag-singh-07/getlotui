/**
 * Component-specific dependency mappings
 */
export const componentDependencies: Record<string, string[]> = {
  Button: ["@radix-ui/react-slot"],
  Accordion: ["@radix-ui/react-accordion", "lucide-react"],
  AlertDialog: ["@radix-ui/react-alert-dialog"],
  Avatar: ["@radix-ui/react-avatar"],
  Dropdown: ["@radix-ui/react-dropdown-menu", "lucide-react"],
  Tabs: ["@radix-ui/react-tabs"],
  Toast: ["@radix-ui/react-toast"],
  // Components without extra dependencies
  Input: [],
  Card: [],
  Badge: [],
  Alert: [],
};

/**
 * Get dependencies required for a component
 */
export function getComponentDependencies(componentName: string): string[] {
  return componentDependencies[componentName] || [];
}
