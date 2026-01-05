import React from "react";
import { View, Text, StyleSheet, ViewStyle, TextStyle } from "react-native";
import badgeSpec from "@crossui/core/components/badge.json";
import colors from "@crossui/core/tokens/colors.json";
import spacing from "@crossui/core/tokens/spacing.json";
import radius from "@crossui/core/tokens/radius.json";

type BadgeProps = {
  children: string;
  variant?: keyof typeof badgeSpec.variants;
  size?: keyof typeof badgeSpec.sizes;
  style?: ViewStyle;
};

export function Badge({
  children,
  variant = badgeSpec.defaults.variant as keyof typeof badgeSpec.variants,
  size = badgeSpec.defaults.size as keyof typeof badgeSpec.sizes,
  style,
}: BadgeProps) {
  const variantConfig = badgeSpec.variants[variant];
  const sizeConfig = badgeSpec.sizes[size];

  const bgColor = colors[variantConfig.background as keyof typeof colors];
  const textColor = colors[variantConfig.text as keyof typeof colors];

  const borderColor =
    "border" in variantConfig
      ? colors[variantConfig.border as keyof typeof colors]
      : "transparent";

  const borderWidth =
    "borderWidth" in variantConfig ? variantConfig.borderWidth : 0;

  const containerStyle: ViewStyle = {
    backgroundColor: bgColor,
    paddingVertical:
      spacing[sizeConfig.paddingVertical as keyof typeof spacing],
    paddingHorizontal:
      spacing[sizeConfig.paddingHorizontal as keyof typeof spacing],
    borderRadius: radius[badgeSpec.radius as keyof typeof radius],
    borderWidth: borderWidth,
    borderColor: borderColor,
    alignSelf: "flex-start",
    justifyContent: "center",
    alignItems: "center",
    ...style,
  };

  const textStyle: TextStyle = {
    color: textColor,
    fontSize: sizeConfig.fontSize,
    fontWeight: "700",
    textTransform: "uppercase",
  };

  return (
    <View style={containerStyle}>
      <Text style={textStyle}>{children}</Text>
    </View>
  );
}
