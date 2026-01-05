import React, { useEffect, useRef } from "react";
import { View, StyleSheet, Animated, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import toastSpec from "@crossui/core/components/toast.json";
import colors from "@crossui/core/tokens/colors.json";
import spacing from "@crossui/core/tokens/spacing.json";
import radius from "@crossui/core/tokens/radius.json";

import { Text } from "../Text";

const { width } = Dimensions.get("window");

export type ToastVariant = keyof typeof toastSpec.variants;

export type ToastProps = {
  id: string;
  message: string;
  variant?: ToastVariant;
  onDismiss: (id: string) => void;
  duration?: number;
};

export function Toast({
  id,
  message,
  variant = "info",
  onDismiss,
  duration = toastSpec.animation.autoDismiss,
}: ToastProps) {
  const variantConfig = toastSpec.variants[variant];

  const translateY = useRef(new Animated.Value(100)).current;
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(translateY, {
        toValue: 0,
        duration: toastSpec.animation.duration,
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: toastSpec.animation.duration,
        useNativeDriver: true,
      }),
    ]).start();

    if (duration > 0) {
      const timer = setTimeout(() => {
        handleDismiss();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleDismiss = () => {
    Animated.parallel([
      Animated.timing(translateY, {
        toValue: 100,
        duration: toastSpec.animation.duration,
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 0,
        duration: toastSpec.animation.duration,
        useNativeDriver: true,
      }),
    ]).start(() => {
      onDismiss(id);
    });
  };

  return (
    <Animated.View
      style={[
        styles.container,
        {
          opacity,
          transform: [{ translateY }],
          backgroundColor:
            colors[variantConfig.background as keyof typeof colors],
          borderRadius: radius[toastSpec.layout.radius as keyof typeof radius],
          padding: spacing[toastSpec.layout.padding as keyof typeof spacing],
          maxWidth: toastSpec.layout.maxWidth,
        },
      ]}
    >
      <Ionicons
        name={variantConfig.icon as any}
        size={20}
        color={colors[variantConfig.text as keyof typeof colors]}
        style={styles.icon}
      />
      <Text
        style={{
          color: colors[variantConfig.text as keyof typeof colors],
          flex: 1,
        }}
      >
        {message}
      </Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginVertical: 4,
    alignSelf: "center",
    width: width - 40,
  },
  icon: {
    marginRight: 8,
  },
});
