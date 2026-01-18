import { View, ViewStyle } from "react-native";
import React from "react";
import buttonGroupSpec from "@crossui/core/components/button-group.json";

export interface ButtonGroupProps {
  children: React.ReactNode;
  variant?: keyof typeof buttonGroupSpec.variants;
  style?: ViewStyle;
}

export function ButtonGroup({
  children,
  variant = buttonGroupSpec.defaults
    .variant as keyof typeof buttonGroupSpec.variants,
  style,
}: ButtonGroupProps) {
  const variantConfig = buttonGroupSpec.variants[variant];

  return (
    <View
      style={[
        {
          flexDirection: variantConfig.flexDirection as "row" | "column",
          gap: variantConfig.gap,
          alignItems: "center",
          justifyContent: "center",
        },
        style,
      ]}
    >
      {React.Children.map(children, (child, index) => {
        // We can optionally add logic here to remove rounded corners from middle buttons
        // For now, we'll just render them as-is, letting the user handle spacing/borders via the spec if needed.
        // Or we could wrap them.
        return child;
      })}
    </View>
  );
}
