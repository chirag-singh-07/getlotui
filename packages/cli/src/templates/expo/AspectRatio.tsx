import { View, ViewProps } from "react-native";
import React from "react";
import aspectRatioSpec from "@crossui/core/components/aspect-ratio.json";

type AspectRatioVariant = keyof typeof aspectRatioSpec.variants;

export interface AspectRatioProps extends ViewProps {
  /**
   * The aspect ratio of the component.
   * If provided, overrides the variant.
   */
  ratio?: number;
  /**
   * The variant to use for the aspect ratio.
   * Options: "square", "landscape", "portrait", "wide", "ultrawide"
   */
  variant?: AspectRatioVariant;
  children?: React.ReactNode;
}

export function AspectRatio({
  ratio,
  variant = aspectRatioSpec.defaults.variant as AspectRatioVariant,
  style,
  children,
  ...props
}: AspectRatioProps) {
  const variantConfig = aspectRatioSpec.variants[variant as AspectRatioVariant];

  // Use provided ratio, or fall back to variant's ratio
  const finalRatio = ratio ?? (variantConfig ? variantConfig.ratio : 1);

  return (
    <View style={[style, { aspectRatio: finalRatio }]} {...props}>
      {children}
    </View>
  );
}
