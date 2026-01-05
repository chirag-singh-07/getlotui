import React, { createContext, useContext } from "react";
import { View, StyleSheet, Pressable, ViewStyle, Text } from "react-native";
import cardSpec from "@crossui/core/components/card.json";
import colors from "@crossui/core/tokens/colors.json";
import spacing from "@crossui/core/tokens/spacing.json";
import radius from "@crossui/core/tokens/radius.json";
import { Text as CrossText } from "../Text/Text";

type CardVariant = keyof typeof cardSpec.variants;

type CardContextType = {
  variant: CardVariant;
};

const CardContext = createContext<CardContextType | undefined>(undefined);

export function Card({
  children,
  variant = "default",
  onPress,
  style,
}: {
  children: React.ReactNode;
  variant?: CardVariant;
  onPress?: () => void;
  style?: ViewStyle;
}) {
  const variantConfig = cardSpec.variants[variant];
  const isPressable = variant === "pressable" || !!onPress;

  const Container = isPressable ? Pressable : View;

  // Handle shadows
  const shadowValue = (variantConfig as any).shadow;
  let shadowStyle = {};
  if (shadowValue === "sm") shadowStyle = styles.shadowSm;
  else if (shadowValue === "md") shadowStyle = styles.shadowMd;

  return (
    <CardContext.Provider value={{ variant }}>
      <Container
        onPress={onPress}
        style={({ pressed }: { pressed: boolean }) => [
          styles.card,
          shadowStyle,
          {
            backgroundColor:
              colors[variantConfig.background as keyof typeof colors],
            borderColor: colors[variantConfig.border as keyof typeof colors],
            borderRadius: radius[cardSpec.layout.radius as keyof typeof radius],
            opacity: isPressable && pressed ? 0.9 : 1,
            transform: [{ scale: isPressable && pressed ? 0.995 : 1 }],
          },
          style,
        ]}
      >
        {children}
      </Container>
    </CardContext.Provider>
  );
}

export function CardHeader({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: ViewStyle;
}) {
  return (
    <View
      style={[
        {
          padding: spacing[cardSpec.spacing.padding as keyof typeof spacing],
          gap: spacing[cardSpec.spacing.headerGap as keyof typeof spacing],
        },
        style,
      ]}
    >
      {children}
    </View>
  );
}

export function CardTitle({ children }: { children: React.ReactNode }) {
  return (
    <CrossText variant="h5" style={styles.title}>
      {children}
    </CrossText>
  );
}

export function CardDescription({ children }: { children: React.ReactNode }) {
  return (
    <CrossText variant="muted" style={styles.description}>
      {children}
    </CrossText>
  );
}

export function CardContent({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: ViewStyle;
}) {
  return (
    <View
      style={[
        {
          padding: spacing[cardSpec.spacing.padding as keyof typeof spacing],
          paddingTop: cardSpec.spacing.contentTop as number,
        },
        style,
      ]}
    >
      {children}
    </View>
  );
}

export function CardFooter({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: ViewStyle;
}) {
  return (
    <View
      style={[
        {
          padding: spacing[cardSpec.spacing.padding as keyof typeof spacing],
          paddingTop: 0,
          flexDirection: "row",
          alignItems: "center",
        },
        style,
      ]}
    >
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    overflow: "hidden",
  },
  title: {
    fontWeight: "600",
    letterSpacing: -0.5,
  },
  description: {
    fontSize: 14,
  },
  shadowSm: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  shadowMd: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
});
