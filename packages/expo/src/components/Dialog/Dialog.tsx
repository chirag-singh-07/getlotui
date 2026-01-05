import React, { useEffect, useRef } from "react";
import {
  Modal,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Animated,
  Dimensions,
} from "react-native";

import dialogSpec from "@crossui/core/components/dialog.json";
import colors from "@crossui/core/tokens/colors.json";
import spacing from "@crossui/core/tokens/spacing.json";
import radius from "@crossui/core/tokens/radius.json";

import { Text } from "../Text";

export type DialogProps = {
  visible: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  children?: React.ReactNode;
  actions?: React.ReactNode;
};

export function Dialog({
  visible,
  onClose,
  title,
  description,
  children,
  actions,
}: DialogProps) {
  const scale = useRef(new Animated.Value(0.9)).current;
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (visible) {
      Animated.parallel([
        Animated.timing(scale, {
          toValue: 1,
          duration: dialogSpec.animation.duration,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 1,
          duration: dialogSpec.animation.duration,
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      Animated.timing(opacity, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }).start();
    }
  }, [visible]);

  // Actually Modal handles visibility. But for animation content we need to keep it rendered...
  // Usually with Modal visible={visible}, it mounts/unmounts.
  // To animate OUT, we need to keep visible=true until animation finishes.
  // For simplicity given constraints, I'll rely on Modal's animationType="fade" or "none" + custom view animation.
  // If I use Modal visible prop, it unmounts immediately.
  // I will use transparent Modal and handle internal visibility if I want smooth exit.
  // But standard usage often accepts native Modal behavior.
  // I'll implementation internal state for animation.

  // Refined:
  const [showModal, setShowModal] = React.useState(visible);

  useEffect(() => {
    if (visible) {
      setShowModal(true);
      Animated.parallel([
        Animated.spring(scale, {
          toValue: 1,
          useNativeDriver: true,
          speed: 16,
        }),
        Animated.timing(opacity, {
          toValue: 1,
          duration: dialogSpec.animation.duration,
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      Animated.timing(opacity, {
        toValue: 0,
        duration: 150,
        useNativeDriver: true,
      }).start(() => setShowModal(false));
    }
  }, [visible]);

  return (
    <Modal
      transparent
      visible={showModal}
      animationType="none"
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.backdrop}>
          <TouchableWithoutFeedback>
            <Animated.View
              style={[
                styles.container,
                {
                  opacity,
                  transform: [{ scale }],
                  backgroundColor:
                    colors[dialogSpec.colors.background as keyof typeof colors],
                  borderRadius:
                    radius[dialogSpec.layout.radius as keyof typeof radius],
                  padding:
                    spacing[dialogSpec.layout.padding as keyof typeof spacing],
                  maxWidth: dialogSpec.layout.maxWidth,
                },
              ]}
            >
              {title && (
                <Text
                  variant="h6"
                  style={{
                    color:
                      colors[dialogSpec.colors.title as keyof typeof colors],
                    marginBottom: description ? 4 : 12,
                  }}
                >
                  {title}
                </Text>
              )}
              {description && (
                <Text
                  variant="body"
                  style={{
                    color:
                      colors[
                        dialogSpec.colors.description as keyof typeof colors
                      ],
                    marginBottom: 16,
                  }}
                >
                  {description}
                </Text>
              )}
              <View>{children}</View>
              {actions && <View style={styles.actions}>{actions}</View>}
            </Animated.View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: dialogSpec.colors.backdrop, // Using direct value from json since not in tokens
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: "90%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 16,
    gap: 12,
  },
});
