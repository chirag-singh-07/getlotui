import React, {
  createContext,
  useContext,
  useState,
  useRef,
  useEffect,
} from "react";
import {
  View,
  Text as RNText,
  TouchableOpacity,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  Animated,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import dropdownSpec from "@crossui/core/components/dropdown.json";
import colors from "@crossui/core/tokens/colors.json";
import spacing from "@crossui/core/tokens/spacing.json";
import radius from "@crossui/core/tokens/radius.json";
import { Text } from "../Text";

type DropdownContextType = {
  visible: boolean;
  setVisible: (visible: boolean) => void;
  toggle: () => void;
};

const DropdownContext = createContext<DropdownContextType | undefined>(
  undefined
);

export function Dropdown({ children }: { children: React.ReactNode }) {
  const [visible, setVisible] = useState(false);
  const toggle = () => setVisible(!visible);

  return (
    <DropdownContext.Provider value={{ visible, setVisible, toggle }}>
      <View style={{ position: "relative" }}>{children}</View>
    </DropdownContext.Provider>
  );
}

export function DropdownTrigger({ children }: { children: React.ReactNode }) {
  const context = useContext(DropdownContext);
  if (!context) throw new Error("DropdownTrigger must be used within Dropdown");

  return (
    <TouchableOpacity onPress={context.toggle} activeOpacity={0.7}>
      {children}
    </TouchableOpacity>
  );
}

export function DropdownContent({ children }: { children: React.ReactNode }) {
  const context = useContext(DropdownContext);
  if (!context) throw new Error("DropdownContent must be used within Dropdown");

  const scale = useRef(new Animated.Value(0.95)).current;
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (context.visible) {
      Animated.parallel([
        Animated.timing(scale, {
          toValue: 1,
          duration: dropdownSpec.animation.duration,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 1,
          duration: dropdownSpec.animation.duration,
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      Animated.timing(opacity, {
        toValue: 0,
        duration: 150,
        useNativeDriver: true,
      }).start();
    }
  }, [context.visible]);

  if (!context.visible) return null;

  return (
    <Modal
      transparent
      visible={context.visible}
      onRequestClose={context.toggle}
    >
      <TouchableWithoutFeedback onPress={context.toggle}>
        <View style={styles.overlay}>
          <TouchableWithoutFeedback>
            <Animated.View
              style={[
                styles.content,
                {
                  opacity,
                  transform: [{ scale }],
                  backgroundColor:
                    colors[
                      dropdownSpec.colors.background as keyof typeof colors
                    ],
                  borderColor:
                    colors[dropdownSpec.colors.border as keyof typeof colors],
                  borderRadius:
                    radius[dropdownSpec.layout.radius as keyof typeof radius],
                  padding:
                    spacing[
                      dropdownSpec.layout.padding as keyof typeof spacing
                    ],
                  minWidth: dropdownSpec.layout.minWidth,
                },
              ]}
            >
              {children}
            </Animated.View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}

export function DropdownItem({
  children,
  onSelect,
  destructive,
  icon,
}: {
  children: string;
  onSelect?: () => void;
  destructive?: boolean;
  icon?: string;
}) {
  const context = useContext(DropdownContext);

  const handlePress = () => {
    onSelect?.();
    context?.setVisible(false);
  };

  const textColor = destructive
    ? colors.danger
    : colors[dropdownSpec.colors.itemText as keyof typeof colors];

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={[
        styles.item,
        {
          padding:
            spacing[dropdownSpec.spacing.itemPadding as keyof typeof spacing],
        },
      ]}
    >
      {icon && (
        <Ionicons
          name={icon as any}
          size={16}
          color={textColor}
          style={{ marginRight: 8 }}
        />
      )}
      <Text style={{ color: textColor }}>{children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.2)",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    borderWidth: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
  },
});
