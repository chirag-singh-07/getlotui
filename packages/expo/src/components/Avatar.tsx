import React, { useState } from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  ViewStyle,
  ImageStyle,
  TextStyle,
} from "react-native";
import avatarSpec from "@crossui/core/components/avatar.json";
import colors from "@crossui/core/tokens/colors.json";
import radius from "@crossui/core/tokens/radius.json";

type AvatarProps = {
  src?: string;
  fallback?: string;
  size?: keyof typeof avatarSpec.sizes;
  variant?: keyof typeof avatarSpec.variants;
  style?: ViewStyle;
};

export function Avatar({
  src,
  fallback,
  size = avatarSpec.defaults.size as keyof typeof avatarSpec.sizes,
  variant = avatarSpec.defaults.variant as keyof typeof avatarSpec.variants,
  style,
}: AvatarProps) {
  const [hasError, setHasError] = useState(false);

  const sizeConfig = avatarSpec.sizes[size];
  const variantConfig = avatarSpec.variants[variant];

  const bgColor = colors[variantConfig.background as keyof typeof colors];
  const textColor = colors[variantConfig.text as keyof typeof colors];
  const borderColor = colors[variantConfig.border as keyof typeof colors];

  const containerStyle: ViewStyle = {
    width: sizeConfig.size,
    height: sizeConfig.size,
    borderRadius: sizeConfig.size / 2,
    backgroundColor: bgColor,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    borderWidth: 1,
    borderColor: borderColor,
    ...style,
  };

  const textStyle: TextStyle = {
    color: textColor,
    fontSize: sizeConfig.fontSize,
    fontWeight: "600",
  };

  const imageStyle: ImageStyle = {
    width: "100%",
    height: "100%",
  };

  return (
    <View style={containerStyle}>
      {src && !hasError ? (
        <Image
          source={{ uri: src }}
          style={imageStyle}
          onError={() => setHasError(true)}
        />
      ) : (
        <Text style={textStyle}>
          {fallback?.substring(0, 2).toUpperCase() || "??"}
        </Text>
      )}
    </View>
  );
}
