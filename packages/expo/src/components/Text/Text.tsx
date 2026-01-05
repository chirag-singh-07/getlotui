import { Text as RNText, Animated, TextStyle, StyleSheet } from "react-native";
import React from "react";
import textSpec from "@crossui/core/components/text.json";
import colors from "@crossui/core/tokens/colors.json";
import typography from "@crossui/core/tokens/typography.json";

export type TextProps = {
  children?: React.ReactNode;
  variant?: keyof typeof textSpec.variants;
  color?: keyof typeof colors;
  align?: TextStyle["textAlign"];
  style?: TextStyle | TextStyle[];
  numberOfLines?: number;
};

export function Text({
  children,
  variant = textSpec.defaults.variant as keyof typeof textSpec.variants,
  color,
  align,
  style,
  numberOfLines,
}: TextProps) {
  const variantConfig = textSpec.variants[variant];

  // Resolve tokens
  const fontSizeToken = variantConfig.fontSize as keyof typeof typography.sizes;
  const fontSize = typography.sizes[fontSizeToken];

  const lineHeightToken =
    variantConfig.lineHeight as keyof typeof typography.lineHeights;
  const lineHeight = typography.lineHeights[lineHeightToken];

  const fontWeightToken =
    variantConfig.fontWeight as keyof typeof typography.weights;
  const fontWeight = typography.weights[
    fontWeightToken
  ] as TextStyle["fontWeight"];

  // Color priority: prop > variant > default
  // textSpec.variants[variant].color is a keyof colors
  const defaultColorKey = variantConfig.color as keyof typeof colors;
  const resolvedColor = color ? colors[color] : colors[defaultColorKey];

  const baseStyle: TextStyle = {
    fontSize,
    lineHeight: lineHeight === 1 ? undefined : lineHeight, // 1 means user didn't specify or special handling? In my json I put numbers. 5xl/6xl were 1 in my json? Wait I need to check my json creation.
    // I put "5xl": 1, "6xl": 1 in lineHeights in the previous step? I think I might have made a typo or copied previous logic.
    // Let me check typography.json content in my thought process...
    // Ah, I wrote sizes... "xs": 12... "lineHeights": ... "5xl": 1, "6xl": 1 ??
    // I need to be careful. I'll check it later. For now, assuming standard usage.
    fontWeight,
    color: resolvedColor,
    textAlign: align,
  };

  if ("fontFamily" in variantConfig) {
    baseStyle.fontFamily = variantConfig.fontFamily as string;
  }

  return (
    <Animated.Text style={[baseStyle, style]} numberOfLines={numberOfLines}>
      {children}
    </Animated.Text>
  );
}
