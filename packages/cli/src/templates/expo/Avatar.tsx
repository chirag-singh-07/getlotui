import React, { useState } from "react";
import { View, Image, Text, StyleSheet, Pressable } from "react-native";

export interface AvatarProps {
  src?: string;
  fallback?: string;
  size?: "sm" | "md" | "lg";
  shape?: "circle" | "square";
}

export const Avatar = ({
  src,
  fallback,
  size = "md",
  shape = "circle",
}: AvatarProps) => {
  const [hasError, setHasError] = useState(false);

  const sizes = {
    sm: 32,
    md: 40,
    lg: 56,
  };

  const currentSize = sizes[size];

  return (
    <View
      style={[
        styles.container,
        {
          width: currentSize,
          height: currentSize,
          borderRadius: shape === "circle" ? currentSize / 2 : 8,
        },
      ]}
    >
      {src && !hasError ? (
        <Image
          source={{ uri: src }}
          style={styles.image}
          onError={() => setHasError(true)}
        />
      ) : (
        <View style={styles.fallback}>
          <Text style={[styles.fallbackText, { fontSize: currentSize * 0.4 }]}>
            {fallback?.substring(0, 2).toUpperCase() || "??"}
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
    backgroundColor: "#f3f4f6",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.05)",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  fallback: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  fallbackText: {
    fontWeight: "600",
    color: "#4b5563",
  },
});
