import React, { useState } from "react";
import {
  View,
  Text,
  Modal,
  Pressable,
  StyleSheet,
  Animated,
  Dimensions,
} from "react-native";

import alertDialogSpec from "@crossui/core/components/alert-dialog.json";
import colors from "@crossui/core/tokens/colors.json";
import spacing from "@crossui/core/tokens/spacing.json";
import radius from "@crossui/core/tokens/radius.json";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

type AlertDialogProps = {
  visible: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  cancelText?: string;
  actionText?: string;
  onCancel?: () => void;
  onAction?: () => void;
  variant?: keyof typeof alertDialogSpec.variants;
  children?: React.ReactNode;
};

export function AlertDialog({
  visible,
  onClose,
  title,
  description,
  cancelText = "Cancel",
  actionText = "Continue",
  onCancel,
  onAction,
  variant = alertDialogSpec.defaults
    .variant as keyof typeof alertDialogSpec.variants,
  children,
}: AlertDialogProps) {
  const [fadeAnim] = useState(new Animated.Value(0));
  const [scaleAnim] = useState(new Animated.Value(0.9));

  React.useEffect(() => {
    if (visible) {
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: alertDialogSpec.animation.duration,
          useNativeDriver: true,
        }),
        Animated.spring(scaleAnim, {
          toValue: 1,
          useNativeDriver: true,
          speed: 12,
          bounciness: 4,
        }),
      ]).start();
    } else {
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: alertDialogSpec.animation.duration,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 0.9,
          duration: alertDialogSpec.animation.duration,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [visible]);

  const variantConfig = alertDialogSpec.variants[variant];

  const bgColor = colors[variantConfig.background as keyof typeof colors];
  const textColor = colors[variantConfig.text as keyof typeof colors];
  const borderColor = colors[variantConfig.border as keyof typeof colors];
  const borderRadius = radius[alertDialogSpec.radius as keyof typeof radius];
  const paddingValue =
    spacing[alertDialogSpec.spacing.padding as keyof typeof spacing];
  const gapValue = spacing[alertDialogSpec.spacing.gap as keyof typeof spacing];

  const actionBgColor =
    "actionBackground" in variantConfig
      ? colors[variantConfig.actionBackground as keyof typeof colors]
      : colors.primary;

  const actionTextColor =
    "actionText" in variantConfig
      ? colors[variantConfig.actionText as keyof typeof colors]
      : colors.onPrimary;

  const handleCancel = () => {
    onCancel?.();
    onClose();
  };

  const handleAction = () => {
    onAction?.();
    onClose();
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="none"
      onRequestClose={onClose}
    >
      <Animated.View
        style={[
          styles.overlay,
          {
            backgroundColor: variantConfig.overlay,
            opacity: fadeAnim,
          },
        ]}
      >
        <Pressable style={styles.overlayPressable} onPress={onClose} />
        <Animated.View
          style={[
            styles.dialog,
            {
              backgroundColor: bgColor,
              borderRadius: borderRadius,
              borderColor: borderColor,
              borderWidth: 1,
              padding: paddingValue,
              transform: [{ scale: scaleAnim }],
              opacity: fadeAnim,
            },
          ]}
        >
          <View style={[styles.header, { marginBottom: gapValue }]}>
            <Text
              style={[
                styles.title,
                {
                  color: textColor,
                },
              ]}
            >
              {title}
            </Text>
            {description && (
              <Text
                style={[
                  styles.description,
                  {
                    color: textColor,
                    marginTop: gapValue / 2,
                  },
                ]}
              >
                {description}
              </Text>
            )}
          </View>

          {children && <View style={styles.content}>{children}</View>}

          <View
            style={[
              styles.footer,
              {
                marginTop: gapValue,
                gap: spacing[
                  alertDialogSpec.spacing.buttonGap as keyof typeof spacing
                ],
              },
            ]}
          >
            <Pressable
              onPress={handleCancel}
              style={({ pressed }) => [
                styles.button,
                styles.cancelButton,
                {
                  borderColor: borderColor,
                  opacity: pressed ? 0.7 : 1,
                  flex: 1,
                },
              ]}
            >
              <Text
                style={[
                  styles.buttonText,
                  {
                    color: textColor,
                  },
                ]}
              >
                {cancelText}
              </Text>
            </Pressable>

            <Pressable
              onPress={handleAction}
              style={({ pressed }) => [
                styles.button,
                styles.actionButton,
                {
                  backgroundColor: actionBgColor,
                  opacity: pressed ? 0.9 : 1,
                  flex: 1,
                },
              ]}
            >
              <Text
                style={[
                  styles.buttonText,
                  {
                    color: actionTextColor,
                  },
                ]}
              >
                {actionText}
              </Text>
            </Pressable>
          </View>
        </Animated.View>
      </Animated.View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  overlayPressable: {
    ...StyleSheet.absoluteFillObject,
  },
  dialog: {
    width: SCREEN_WIDTH * 0.85,
    maxWidth: 400,
  },
  header: {},
  title: {
    fontSize: 18,
    fontWeight: "700",
  },
  description: {
    fontSize: 14,
    lineHeight: 20,
  },
  content: {},
  footer: {
    flexDirection: "row",
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  cancelButton: {
    borderWidth: 1,
  },
  actionButton: {},
  buttonText: {
    fontSize: 15,
    fontWeight: "600",
  },
});
