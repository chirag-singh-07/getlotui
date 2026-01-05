import React, { useEffect, useRef } from "react";
import { View, StyleSheet, Animated, Pressable, ViewStyle } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import alertSpec from "@crossui/core/components/alert.json";
import colors from "@crossui/core/tokens/colors.json";
import spacing from "@crossui/core/tokens/spacing.json";
import radius from "@crossui/core/tokens/radius.json";

import { Text } from "../Text";

export type AlertProps = {
  title: string;
  description?: string;
  variant?: keyof typeof alertSpec.variants;
  action?: React.ReactNode;
  visible?: boolean;
};

export function Alert({
  title,
  description,
  variant = alertSpec.defaults.variant as keyof typeof alertSpec.variants,
  action,
  visible = true,
}: AlertProps) {
  const variantConfig = alertSpec.variants[variant];
  const opacity = useRef(new Animated.Value(0)).current;

  // Entrance animation
  useEffect(() => {
    if (visible) {
      Animated.timing(opacity, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(opacity, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }).start();
    }
  }, [visible]);

  if (!visible) return null;

  return (
    <Animated.View
      style={[
        styles.container,
        {
          opacity,
          backgroundColor:
            colors[variantConfig.background as keyof typeof colors],
          borderColor: colors[variantConfig.border as keyof typeof colors],
          borderRadius: radius[alertSpec.radius as keyof typeof radius],
          padding: spacing[alertSpec.spacing.padding as keyof typeof spacing],
          gap: spacing[alertSpec.spacing.gap as keyof typeof spacing],
        },
      ]}
    >
      <View style={styles.header}>
        <Ionicons
          name={variantConfig.icon as any}
          size={20}
          color={colors[variantConfig.iconColor as keyof typeof colors]}
        />
        <View style={styles.textContainer}>
          <Text
            variant="subtitle"
            style={{
              color: colors[variantConfig.text as keyof typeof colors],
              fontWeight: "600",
            }}
          >
            {title}
          </Text>
          {description && (
            <Text
              variant="body"
              style={{
                color: colors[variantConfig.text as keyof typeof colors],
                marginTop: 2,
              }}
            >
              {description}
            </Text>
          )}
        </View>
        {action && <View style={styles.actionContainer}>{action}</View>}
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    flexDirection: "column",
    width: "100%",
  },
  header: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  textContainer: {
    flex: 1,
    marginLeft: 8,
  },
  actionContainer: {
    marginLeft: 8,
    alignSelf: "center",
  },
});
