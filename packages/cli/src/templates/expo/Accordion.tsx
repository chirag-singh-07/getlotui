import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  LayoutAnimation,
  Platform,
  UIManager,
} from "react-native";

if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

interface AccordionItemProps {
  value: string;
  trigger: string;
  content: string;
  isOpen: boolean;
  onToggle: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  trigger,
  content,
  isOpen,
  onToggle,
}) => {
  const handleToggle = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    onToggle();
  };

  return (
    <View style={styles.item}>
      <TouchableOpacity
        style={styles.trigger}
        onPress={handleToggle}
        activeOpacity={0.7}
      >
        <Text style={styles.triggerText}>{trigger}</Text>
        <Text style={[styles.chevron, isOpen && styles.chevronOpen]}>›</Text>
      </TouchableOpacity>
      {isOpen && (
        <View style={styles.content}>
          <Text style={styles.contentText}>{content}</Text>
        </View>
      )}
    </View>
  );
};

interface AccordionProps {
  type?: "single" | "multiple";
  collapsible?: boolean;
  defaultValue?: string | string[];
  children?: React.ReactNode;
  items: Array<{
    value: string;
    trigger: string;
    content: string;
  }>;
}

export const Accordion: React.FC<AccordionProps> = ({
  type = "single",
  collapsible = false,
  defaultValue,
  items,
}) => {
  const [openItems, setOpenItems] = useState<string[]>(() => {
    if (defaultValue) {
      return Array.isArray(defaultValue) ? defaultValue : [defaultValue];
    }
    return [];
  });

  const handleToggle = (value: string) => {
    if (type === "single") {
      if (openItems.includes(value)) {
        setOpenItems(collapsible ? [] : openItems);
      } else {
        setOpenItems([value]);
      }
    } else {
      setOpenItems((prev) =>
        prev.includes(value)
          ? prev.filter((item) => item !== value)
          : [...prev, value]
      );
    }
  };

  return (
    <View style={styles.container}>
      {items.map((item) => (
        <AccordionItem
          key={item.value}
          value={item.value}
          trigger={item.trigger}
          content={item.content}
          isOpen={openItems.includes(item.value)}
          onToggle={() => handleToggle(item.value)}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  item: {
    borderBottomWidth: 1,
    borderBottomColor: "#e5e7eb",
  },
  trigger: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 0,
  },
  triggerText: {
    fontSize: 15,
    fontWeight: "500",
    color: "#111827",
    flex: 1,
  },
  chevron: {
    fontSize: 20,
    color: "#6b7280",
    transform: [{ rotate: "90deg" }],
    marginLeft: 8,
  },
  chevronOpen: {
    transform: [{ rotate: "270deg" }],
  },
  content: {
    paddingBottom: 16,
  },
  contentText: {
    fontSize: 14,
    color: "#6b7280",
    lineHeight: 20,
  },
});
