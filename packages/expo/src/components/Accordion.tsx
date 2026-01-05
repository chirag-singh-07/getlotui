import React, { useState } from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  LayoutAnimation,
  Platform,
  UIManager,
} from "react-native";

import accordionSpec from "@crossui/core/components/accordion.json";
import colors from "@crossui/core/tokens/colors.json";
import spacing from "@crossui/core/tokens/spacing.json";
import radius from "@crossui/core/tokens/radius.json";

if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

type AccordionItemType = {
  value: string;
  trigger: string;
  content: string | React.ReactNode;
};

type AccordionProps = {
  type?: "single" | "multiple";
  collapsible?: boolean;
  defaultValue?: string | string[];
  items: AccordionItemType[];
  variant?: keyof typeof accordionSpec.variants;
};

export function Accordion({
  type = "single",
  collapsible = false,
  defaultValue,
  items,
  variant = accordionSpec.defaults
    .variant as keyof typeof accordionSpec.variants,
}: AccordionProps) {
  const [openItems, setOpenItems] = useState<string[]>(() => {
    if (defaultValue) {
      return Array.isArray(defaultValue) ? defaultValue : [defaultValue];
    }
    return [];
  });

  const variantConfig = accordionSpec.variants[variant];

  const handleToggle = (value: string) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);

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

  const bgColor = colors[variantConfig.background as keyof typeof colors];
  const borderColor = colors[variantConfig.border as keyof typeof colors];
  const textColor = colors[variantConfig.text as keyof typeof colors];
  const borderRadius = radius[accordionSpec.radius as keyof typeof radius];
  const itemPadding =
    spacing[accordionSpec.spacing.itemPadding as keyof typeof spacing];
  const contentPadding =
    spacing[accordionSpec.spacing.contentPadding as keyof typeof spacing];

  return (
    <View style={styles.container}>
      {items.map((item, index) => {
        const isOpen = openItems.includes(item.value);
        const isLast = index === items.length - 1;

        return (
          <View
            key={item.value}
            style={[
              styles.item,
              {
                borderBottomWidth: isLast ? 0 : 1,
                borderBottomColor: borderColor,
              },
            ]}
          >
            <Pressable
              onPress={() => handleToggle(item.value)}
              style={({ pressed }) => [
                styles.trigger,
                {
                  paddingVertical: itemPadding,
                  opacity: pressed ? 0.7 : 1,
                },
              ]}
            >
              <Text
                style={[
                  styles.triggerText,
                  {
                    color: textColor,
                    flex: 1,
                  },
                ]}
              >
                {item.trigger}
              </Text>
              <Text
                style={[
                  styles.chevron,
                  {
                    color: textColor,
                    transform: [{ rotate: isOpen ? "270deg" : "90deg" }],
                  },
                ]}
              >
                ›
              </Text>
            </Pressable>
            {isOpen && (
              <View
                style={[
                  styles.content,
                  {
                    paddingBottom: contentPadding,
                  },
                ]}
              >
                {typeof item.content === "string" ? (
                  <Text
                    style={[
                      styles.contentText,
                      {
                        color: textColor,
                      },
                    ]}
                  >
                    {item.content}
                  </Text>
                ) : (
                  item.content
                )}
              </View>
            )}
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  item: {},
  trigger: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 0,
  },
  triggerText: {
    fontSize: 15,
    fontWeight: "500",
  },
  chevron: {
    fontSize: 20,
    marginLeft: 8,
  },
  content: {},
  contentText: {
    fontSize: 14,
    lineHeight: 20,
  },
});
