import React from "react";
import { View, Text, StyleSheet } from "react-native";

export interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "secondary" | "outline" | "destructive" | "success";
}

export const Badge = ({ children, variant = "default" }: BadgeProps) => {
  const variantStyles = {
    default: {
      bg: "#18181b",
      text: "#ffffff",
      border: "transparent",
    },
    secondary: {
      bg: "#f4f4f5",
      text: "#18181b",
      border: "transparent",
    },
    outline: {
      bg: "transparent",
      text: "#18181b",
      border: "#e4e4e7",
    },
    destructive: {
      bg: "#ef4444",
      text: "#ffffff",
      border: "transparent",
    },
    success: {
      bg: "#22c55e",
      text: "#ffffff",
      border: "transparent",
    },
  };

  const style = variantStyles[variant];

  return (
    <View
      style={[
        styles.badge,
        {
          backgroundColor: style.bg,
          borderColor: style.border,
          borderWidth: style.border === "transparent" ? 0 : 1,
        },
      ]}
    >
      <Text style={[styles.text, { color: style.text }]}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 9999,
    alignSelf: "flex-start",
  },
  text: {
    fontSize: 12,
    fontWeight: "600",
  },
});
