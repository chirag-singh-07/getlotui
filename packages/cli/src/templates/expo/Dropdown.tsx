import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Modal,
  Dimensions,
  FlatList,
} from "react-native";

export interface DropdownItem {
  label: string;
  value: string;
  icon?: React.ReactNode;
}

export interface DropdownProps {
  trigger: React.ReactNode;
  items: DropdownItem[];
  onSelect: (value: string) => void;
}

export const Dropdown = ({ trigger, items, onSelect }: DropdownProps) => {
  const [open, setOpen] = useState(false);
  const [layout, setLayout] = useState({ x: 0, y: 0, width: 0, height: 0 });

  const onTriggerLayout = (event: any) => {
    // In a real implementation, we'd use measure() to get page position
    // For the template, we'll simplify
  };

  return (
    <View>
      <Pressable onPress={() => setOpen(true)} onLayout={onTriggerLayout}>
        {trigger}
      </Pressable>

      <Modal
        visible={open}
        transparent
        animationType="none"
        onRequestClose={() => setOpen(false)}
      >
        <Pressable style={styles.overlay} onPress={() => setOpen(false)}>
          <View style={styles.menu}>
            {items.map((item) => (
              <Pressable
                key={item.value}
                style={styles.item}
                onPress={() => {
                  onSelect(item.value);
                  setOpen(false);
                }}
              >
                {item.icon && <View style={styles.icon}>{item.icon}</View>}
                <Text style={styles.label}>{item.label}</Text>
              </Pressable>
            ))}
          </View>
        </Pressable>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "transparent",
    justifyContent: "center", // Should be positioned near trigger
    alignItems: "center",
  },
  menu: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: 4,
    minWidth: 160,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 8,
    borderWidth: 1,
    borderColor: "#e4e4e7",
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    borderRadius: 4,
  },
  icon: {
    marginRight: 8,
  },
  label: {
    fontSize: 14,
    color: "#18181b",
  },
});
